import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {

  @Output() createTableSubmit = new EventEmitter<any>();
  @Output() hideNewCrmPopup = new EventEmitter<boolean>();

  constructor() { }
  submit() {
    this.createTableSubmit.emit({ test: 'testi' });
  }
  ngOnInit(): void {
  }

}
