import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
