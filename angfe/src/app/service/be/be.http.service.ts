import { Injectable } from '@angular/core';
import { HttpService } from '../core/http/http.service';

@Injectable()
export class BeHttpService extends HttpService {
    getSrcUrl(path: string | undefined): string {
        return 'http://jb1-backend-watch.docker.localhost/';
    }
}
