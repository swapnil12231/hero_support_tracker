import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/common/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
