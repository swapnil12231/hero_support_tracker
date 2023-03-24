import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isSidebarOpen = new EventEmitter<Boolean>();
  showHeader = new EventEmitter<Boolean>();
  showSidebar = new EventEmitter<Boolean>();
  constructor() { }
}
