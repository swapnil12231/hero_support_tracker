import { Component, OnInit } from '@angular/core';
import { ChooseFromExisting, CreateUserGroup } from 'src/app/models/user-management/user-groups';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.css']
})
export class CreateUserGroupComponent implements OnInit {



  createUserGroup!:CreateUserGroup;
  chooseFromExisting!:ChooseFromExisting;

  constructor(
  ) {
    this.createUserGroup=new CreateUserGroup();
    this.chooseFromExisting=new ChooseFromExisting();

   }

  ngOnInit(): void {


  }

  
  }


