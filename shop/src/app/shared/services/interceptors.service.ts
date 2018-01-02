import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const productUrl = 'http://localhost:3000/products';
        const startDate = Date.now();

        return next.handle(req).map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && event.url === productUrl) {
                const endDate = Date.now();
                console.log(`Request time: ${endDate - startDate} ms`);
            }
            return event;
        });
    }
}
