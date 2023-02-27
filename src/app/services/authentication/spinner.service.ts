import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Spinner } from 'src/app/models/authentication/spinner';


@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
    spinnerShow = new EventEmitter();
    spinnerHide = new EventEmitter();
    subShow: Subscription | undefined;
    subHide: Subscription | undefined;
    constructor() { }


    showSpinner() {
        this.spinnerShow.emit(Spinner.cog);
    }

    hideSpinner() {
        this.spinnerHide.emit(Spinner.cog);
    }
}
