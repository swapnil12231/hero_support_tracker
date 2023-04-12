import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public createUsersRes!: any;

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
  }


  createSameUserSubmit(sameUser: any) {
    console.log({ sameUser });

    let dataObj = {
      "data": {
        "id": 0,
        "name": sameUser.name,
        "password": sameUser.password,
        "fullname": sameUser.fullName,
        "extension": sameUser.extension,
        "webadminrole": sameUser.webRole,
        "usergroupid": "",
        "multiusergroupid": [
          0
        ],
        "parentuser": "string",
        "domainid": 0,
        "trunkid": 0,
        "prefix": "string",
        "callerid": 0,
        "manualnumber": 0,
        "extensionpbx": "string",
        "authenticationmode": "string",
        "status": "string"
      },
      "selectionOptionl": "string",
      "fileContent": [
        "string"
      ]
    }




    //  this.usersService.createSameUser(dataObj)
    //   .then(
    //     res => {
    //       if (res != null) {
    //         this.createUsersRes = res;
    //       }
    //     },
    //     err => { this.createUsersRes = err }
    //   )
  }



  createMultiUserSubmit(data: any) {
    console.log({ data });

  }
}
