import { Component, OnInit } from '@angular/core';
import { SkillSetService } from 'src/app/services/user-managenemt/skill-set.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

public allSkillSet!:any;

  constructor(
    private skillSetService:SkillSetService
  ) { }

  ngOnInit(): void {
    this.getAllSkillSet()
  }



  async getAllSkillSet()
  {
    let domainID=1672730382222;

       this.skillSetService.getAllSkillSet(domainID)
       .then(res=>{
           if(res!=null)
              {
                this.allSkillSet=res;

                console.log("skill data",this.allSkillSet);
                
              }
       })
  }

}

