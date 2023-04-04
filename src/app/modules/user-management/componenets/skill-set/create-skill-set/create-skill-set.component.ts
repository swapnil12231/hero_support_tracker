import { Component, OnInit } from '@angular/core';
import { CreateSkillSet } from 'src/app/models/user-management/skill-set';

@Component({
  selector: 'app-create-skill-set',
  templateUrl: './create-skill-set.component.html',
  styleUrls: ['./create-skill-set.component.css']
})
export class CreateSkillSetComponent implements OnInit {


   createSkillSet!:CreateSkillSet;
  constructor() {
    this.createSkillSet=new CreateSkillSet();
   }

  ngOnInit(): void {
  }

}
