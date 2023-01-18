import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class HttpService {
    constructor(private httpClient: HttpClient) {}

    abstract getSrcUrl(path: string | undefined): string;

    get(
        path: string = '',
        params: any = null,
        headers = {},
    ): Observable<object> {
        return this.httpClient.get(this.getSrcUrl(path), {
            headers,
            params,
        });
    }
}
