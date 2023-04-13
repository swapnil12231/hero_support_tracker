import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillSetService } from '../../services/skill-set.service';
import { CreateSkillSetComponent } from './create-skill-set/create-skill-set.component';
import { SkillSetData } from 'src/app/models/user-management/skill-set';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

  @ViewChild(CreateSkillSetComponent)
  createSkillSetComponent!:CreateSkillSetComponent;

  public skillSetData!:SkillSetData;

  
  public p!: any;
  public allSkillSet!: any;

  constructor(private skillSetService: SkillSetService) {
    this.skillSetData=new SkillSetData();
   }

  ngOnInit(): void {
    this.getAllSkillSet()
  }

  createPauseCodeSubmit() {
    this.getAllSkillSet();
  }



  async getAllSkillSet() {

    this.skillSetService.getAllSkillSet().then(res => {
      this.allSkillSet = res;
    })
  }


  skillSetParentData(data:any)
  {
         this.skillSetData.data=data;
         this.skillSetData.canShowUpdate=true;

         this.createSkillSetComponent.UpdateSkillSetData(this.skillSetData);
  }
       
  }



