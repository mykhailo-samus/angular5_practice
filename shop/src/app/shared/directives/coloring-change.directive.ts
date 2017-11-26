import { Directive, ElementRef, Renderer2, Input, AfterViewInit, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[coloring]' })
export class СoloringDirective {

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    @Input() coloring: string;

    @HostListener('click') onClick() {
        this.changeTextColor(this.coloring);
    }
    
    changeTextColor(width) {
        this.renderer.setStyle(this.el.nativeElement, 'color', this.coloring);
    }
}