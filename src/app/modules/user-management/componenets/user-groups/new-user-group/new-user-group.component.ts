import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserGroupsService } from 'src/app/services/user-managenemt/user-groups.service';

@Component({
  selector: 'app-new-user-group',
  templateUrl: './new-user-group.component.html',
  styleUrls: ['./new-user-group.component.css']
})
export class NewUserGroupComponent implements OnInit {

  @Output() userManagement = new EventEmitter<boolean>();

  public createUserGroupRes!: any;


public createUserSubmit!:any;
public settingDetailsData!:any;

  public settingDetails:boolean=false;

  constructor(private userGroupsService:UserGroupsService) { }

  ngOnInit(): void {
  }

  
  createUserGroupSubmit(data:any)
{

  this.createUserSubmit=data;
  
}

settingDetailsSubmit(data:any)
  {



    this.createUserSubmit.settingDetails=data;

console.log("dwhfjf",this.createUserSubmit);
     

this.userGroupsService.createUserGroup(this.createUserSubmit)
      .then(
        res => {
          if (res != null) {
            this.createUserGroupRes = res;
            console.log("this.createUserGroupRes", this.createUserGroupRes);

          }
        },
        err => { this.createUserGroupRes = err }
      )


  }

}
