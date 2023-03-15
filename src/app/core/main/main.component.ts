import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/common/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isSidebarOpen: boolean = true;
  constructor(sideBarService: SidebarService) {
    sideBarService.showSidenav.subscribe(e => this.isSidebarOpen = e);
  }

  ngOnInit(): void {
  }

}
