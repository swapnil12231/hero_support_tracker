import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent {
  designTable: DesignTable
  createCRM = true;
  designCRM: boolean = false;
  constructor() {
    this.designTable = new DesignTable();
  }

  addNewTable(e: any) {
    e.preventDefault();
  }
  
  createCRMTable() {
    this.createCRM = false;
    this.designCRM = true;
  }

  goBackToCreateCRM() {
    this.createCRM = true;
    this.designCRM = false;
  }
}

export class DesignTable {
  public title!: string;
  public description !: string;
} 