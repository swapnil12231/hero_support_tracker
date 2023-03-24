import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidebarService } from 'src/app/services/common/sidebar.service';

@Component({
  selector: 'app-create-crm',
  templateUrl: './create-crm.component.html',
  styleUrls: ['./create-crm.component.css']
})
export class CreateCrmComponent implements OnInit {

  @Output() setStepIndex = new EventEmitter<number>();
  fullscreen() {
    this.sidebarService.showHeader.emit(false);
    this.sidebarService.showSidebar.emit(false);
  }
  goBack() {
    this.sidebarService.showHeader.emit(true);
    this.sidebarService.showSidebar.emit(true);
    this.setStepIndex.emit(1);
  }
  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

}
