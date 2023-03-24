import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/common/sidebar.service';
import { navigationRoutes } from 'src/app/constants/navigation-routes.constants';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navigationRoutes: any = navigationRoutes;
  constructor(private sidebarSevice: SidebarService) {
  }
  isSidebarOpen: boolean = true;
  ngOnInit(): void {
  }

  toggleSideBar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarSevice.isSidebarOpen.emit(this.isSidebarOpen);
  }

}
