import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/common/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isSidebarOpen: Boolean = true;
  showSidebar: Boolean = true;
  showHeader: Boolean = true;
  constructor(sideBarService: SidebarService) {
    sideBarService.isSidebarOpen.subscribe(e => this.isSidebarOpen = e);
    sideBarService.showHeader.subscribe(e => this.showHeader = e);
    sideBarService.showSidebar.subscribe(e => this.showSidebar = e);
  }

  ngOnInit(): void {
  }

}
