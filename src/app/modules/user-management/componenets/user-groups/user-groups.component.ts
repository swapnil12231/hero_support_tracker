import { Component, OnInit } from '@angular/core';
import { UserGroupsService } from '../../services/user-groups.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {

  public p!: any;
  public allUserGroup!: any;



  constructor(private userGroupsService: UserGroupsService) { }

  ngOnInit(): void {
    this.getAllUserGroups();
  }



  async getAllUserGroups() {
    this.userGroupsService.getAllUserGroups().then(res => {
      this.allUserGroup = res;
    });
  }

}
