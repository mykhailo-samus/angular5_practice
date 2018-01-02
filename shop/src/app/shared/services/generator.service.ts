import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    readonly charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    readonly length: number;

    constructor(length: number) {
        this.length = length;
    }

    randomSequence() {
        let sequence = '';
        for (let i = 0; i < this.length; i++) {
            const position = Math.floor(Math.random() * this.charSet.length);
            sequence += this.charSet.substring(position, position + 1);
        }
        return sequence;
    }

}
