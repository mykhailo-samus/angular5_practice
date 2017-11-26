import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    readonly charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    readonly length: number;

    constructor(length: number) {
        this.length = length;
    }

    randomSequence() {
        var sequence = '';
        for (var i = 0; i < this.length; i++) {
            var position = Math.floor(Math.random() * this.charSet.length);
            sequence += this.charSet.substring(position, position + 1);
        }
        return sequence;
    }

}