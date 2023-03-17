import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DesignTable } from 'src/app/models/campaign/crm';

@Component({
  selector: 'app-design-table',
  templateUrl: './design-table.component.html',
  styleUrls: ['./design-table.component.css']
})
export class DesignTableComponent implements OnInit {

  @Output() designTableSubmit = new EventEmitter<DesignTable>();
  @Output() setStepIndex = new EventEmitter<number>();

  designTable: DesignTable;

  submit() {
    this.designTableSubmit.emit(this.designTable);
  }
  constructor() {
    this.designTable = new DesignTable();
  }


  ngOnInit(): void {
  }

}
