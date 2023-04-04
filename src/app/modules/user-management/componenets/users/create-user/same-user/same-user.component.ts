import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SameUser } from 'src/app/models/user-management/users';

@Component({
  selector: 'app-same-user',
  templateUrl: './same-user.component.html',
  styleUrls: ['./same-user.component.css']
})
export class SameUserComponent implements OnInit {

  @Output() createSameUserSubmit = new EventEmitter<any>();


  sameUser!:SameUser;
  constructor() { 
    this.sameUser=new SameUser();
  }

  ngOnInit(): void {
  }


  submit()
  {
    this.createSameUserSubmit.emit("same user created");
  }

}
