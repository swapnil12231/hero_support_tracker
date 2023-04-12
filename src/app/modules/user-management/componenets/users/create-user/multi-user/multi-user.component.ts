import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-user',
  templateUrl: './multi-user.component.html',
  styleUrls: ['./multi-user.component.css']
})
export class MultiUserComponent implements OnInit {


  @Output() createMultiUserSubmit = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  submit()
  {
    this.createMultiUserSubmit.emit(this.createMultiUserSubmit);
  }

}
