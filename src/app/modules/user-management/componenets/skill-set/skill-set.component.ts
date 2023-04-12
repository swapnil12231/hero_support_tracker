import { Component, OnInit } from '@angular/core';
import { SkillSetService } from '../../services/skill-set.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {

  public p!: any;
  public allSkillSet!: any;

  constructor(private skillSetService: SkillSetService) { }

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

}

