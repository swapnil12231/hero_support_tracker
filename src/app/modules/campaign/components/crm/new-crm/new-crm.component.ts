import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DesignTable, Table } from 'src/app/models/campaign/crm';

@Component({
  selector: 'app-new-crm',
  templateUrl: './new-crm.component.html',
  styleUrls: ['./new-crm.component.css']
})
export class NewCrmComponent implements OnInit {

  @Output() hideNewCrmPopup = new EventEmitter<boolean>();

  stepIndex: number = 0;

  constructor() { }

  createTableSubmit(data: Table) {
    this.stepIndex++;
  }
  designTableSubmit(data: DesignTable) {
    this.stepIndex++;
  }
  createCrmSubmit() {
    this.stepIndex = 0;
  }
  ngOnInit(): void {
  }

}
