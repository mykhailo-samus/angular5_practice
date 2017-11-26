import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem(key, value) {
        localStorage.setItem(key, value);
    }

    getItem(key) {
        localStorage.get(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }
}