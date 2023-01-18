import { AfterViewInit, Component } from '@angular/core';
import { BeHttpService } from './service/be/be.http.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit {
    result: Record<any, any> = { text: 'wait, result is loading...' };

    constructor(private beHttpService: BeHttpService) {}

    ngAfterViewInit(): void {
        this.beHttpService.get().subscribe((response) => {
            this.result = response;
        });
    }
}
