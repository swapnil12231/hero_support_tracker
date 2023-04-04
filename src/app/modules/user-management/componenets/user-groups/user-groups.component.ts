import { Component, OnInit } from '@angular/core';
import { UserGroupsService } from 'src/app/services/user-managenemt/user-groups.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent implements OnInit {


  allUserGroup!:any;



  constructor(
    private userGroupsService:UserGroupsService
  ) { 
    
  }

  ngOnInit(): void {
    this.getAllUserGroups()
  }



  async getAllUserGroups()
  {



    let domainId = 1672730382222;
    this.userGroupsService.getAllUserGroups(domainId)
    .then(
      res=>{  
        if(res!=null)
        {
            this.allUserGroup=res;
            console.log("All user Group",this.allUserGroup);
            
        }

      }
    )

    }

}
