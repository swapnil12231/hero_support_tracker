//import { FormGroup } from '@angular/forms';
import { Observable, OperatorFunction, MonoTypeOperatorFunction } from 'rxjs';
import { publishReplay, refCount, map, filter, retryWhen, repeatWhen, delay, take, mergeMap } from 'rxjs/operators';
// import * as moment from 'moment';
import { FormGroup } from '@angular/forms';
// import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
// import { NgbDateUtils } from 'services/ngbDateUtils';

declare var $: any;

// Don't use shareReplay() anymore, cause the behavior has changed and it will not
// unsubscribe from source observable.
// See: https://github.com/ReactiveX/rxjs/issues/3034
// and https://github.com/ReactiveX/rxjs/pull/2910 (cause it is apparently a fix?!)
// Instead of x.shareReplay(1), now do x.pipe(weakShareReplay(1))
export const weakShareReplay = <T>(bufferSize?: number, windowTime?: number ): MonoTypeOperatorFunction<T> =>
  (source: Observable<T>): Observable<T> =>
    source.pipe(publishReplay<T>(bufferSize, windowTime), refCount());

export const filterNull = <T>(): OperatorFunction<T | null | undefined, T> =>
  (o: Observable<T | null | undefined>): Observable<T> =>
    // tslint:disable-next-line: no-non-null-assertion
    o.pipe(filter(v => v !== null && v !== undefined), map(v => v!));

export const retry = <T>(msDelay?: number): MonoTypeOperatorFunction<T> =>
  (source: Observable<T>): Observable<T> =>
    source.pipe(retryWhen(e => e.pipe(delay(msDelay || 2000))));

export const retryAndRepeat = <T>(msDelay?: number): MonoTypeOperatorFunction<T> =>
  (source: Observable<T>): Observable<T> =>
    source.pipe(
      retry(msDelay),
      repeatWhen(e => e.pipe(delay(msDelay || 2000))));

export function saveStorageValue(key: string, value: string) {
window.localStorage.setItem(key, value);
}

export function loadStorageValue(key: string) {
return localStorage.getItem(key);
}

export const getCurrent = <T>(value$: Observable<T>) => value$.pipe(take(1)).toPromise();

export const getCurrentValue = <T>(value$: Observable<T>) => value$.pipe(take(1));

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  };
}

export function ConvertToDateString(date: any) {
  return date.year + '-' + date.month + '-' + date.day;
}
