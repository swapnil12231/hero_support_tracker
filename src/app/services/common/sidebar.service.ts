import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  showSidenav = new EventEmitter();
  constructor() { }
}
