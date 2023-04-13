import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserGroupsService } from '../../../services/user-groups.service';

@Component({
  selector: 'app-new-user-group',
  templateUrl: './new-user-group.component.html',
  styleUrls: ['./new-user-group.component.css']
})
export class NewUserGroupComponent implements OnInit {

  @Output() newUserGroupSubmit = new EventEmitter<any>();

  public createUserGroupRes!: any;


  public createUserSubmit!: any;
  public settingDetailsData!: any;

  public settingDetails: boolean = false;

  constructor(private userGroupsService: UserGroupsService) { }

  ngOnInit(): void {
  }


  createUserGroupSubmit(data: any) {

    this.createUserSubmit = data;

  }

  settingDetailsSubmit(data: any) {



    this.createUserSubmit.settingDetails = data;


    console.log(this.createUserSubmit);
    

    this.userGroupsService.createUserGroup(this.createUserSubmit).then((res:any) => {

      if(res.status){
      this.createUserGroupRes = res;
      this.newUserGroupSubmit.emit();
      }
    },
      err => { this.createUserGroupRes = err }
    )


  }

}
