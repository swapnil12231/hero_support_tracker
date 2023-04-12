import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  p: any;

  public users: any;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllSkillSet();
  }


  async getAllSkillSet() {
    let domainID = 1672730382222;

    this.usersService.getAllSkillSet(domainID)
      .then(res => {
        if (res != null) {
          this.users = res;


        }
      })
  }


}
