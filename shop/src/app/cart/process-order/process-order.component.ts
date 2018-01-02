import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { CartService } from '../cart-list/shared/services/cart.service';

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
    userForm: FormGroup;
    user: User;
    submittedText: string;
    @Output() userSubmit: EventEmitter<User> = new EventEmitter<User>();

    constructor(private formBuilder: FormBuilder, private cartService: CartService) { }

    ngOnInit() {
        this.user = {
            firstName: '',
            lastName: '',
            address: '',
            isAddressRequired: false,
            email: '',
            phoneNumbers: []
        };
        this.buildForm();
    }

    buildForm(): void {
        this.userForm = this.formBuilder.group({
            firstName: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
            lastName: [this.user.lastName, [Validators.required, Validators.minLength(3)]],
            email: [this.user.email, [Validators.required, Validators.minLength(3), Validators.pattern(/\S+@\S+\.\S+/)]],
            phoneNumbers: this.formBuilder.array([...this.user.phoneNumbers.map(x => [x, [Validators.required]])]),
            address: [this.user.address],
            isAddressRequired: [this.user.address !== ''],
        });

        if (this.user.address) {
            (this.userForm.controls['address'] as FormControl).setValidators(Validators.required);
        }
    }

    get isPhonesExist(): boolean {
        return (this.userForm.get('phoneNumbers') as FormArray).length > 0;
    }

    submit(): void {
        console.log(this.userForm.value);
        this.userForm.reset();
        this.submittedText = 'Order successfully submitted!';
        this.cartService.clearCart();
    }

    onChangeAddressRequired(): void {
        const address = this.userForm.get('address') as FormControl;
        const isAddressRequired = this.userForm.get('isAddressRequired') as FormControl;

        if (isAddressRequired.value) {
            address.setValidators(Validators.required);
        } else {
            address.clearValidators();
            address.patchValue(null);
        }

        address.updateValueAndValidity();
    }

    addPhoneNumber(): void {
        const phones = this.userForm.get('phoneNumbers') as FormArray;
        phones.push(new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]));
    }

    removePhoneNumber(): void {
        const phones = this.userForm.get('phoneNumbers') as FormArray;
        phones.removeAt(phones.length - 1);
    }
}
