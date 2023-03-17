import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-crm',
  templateUrl: './create-crm.component.html',
  styleUrls: ['./create-crm.component.css']
})
export class CreateCrmComponent implements OnInit {

  @Output() setStepIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

}
