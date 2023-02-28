import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {  
  constructor() { }

  deleteCookie(name: string) {
    const date = new Date();
    // Set it expire in -1 days
    date.setTime(date.getTime() - (24 * 60 * 60 * 1000));
    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }

  getCookie(name: string ) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')) ;
    if (match==null) {
      return null
    } else {
        return match[2];
    }
  }

  saveCookie(name: string, value: string) {
    const date = new Date();
    // Set it expire in 30 days
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString();
  }
}
