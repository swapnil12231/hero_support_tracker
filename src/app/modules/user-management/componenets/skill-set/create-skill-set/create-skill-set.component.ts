import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateSkillSet } from 'src/app/models/user-management/skill-set';
import { SkillSetService } from '../../../services/skill-set.service';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-create-skill-set',
  templateUrl: './create-skill-set.component.html',
  styleUrls: ['./create-skill-set.component.css']
})
export class CreateSkillSetComponent implements OnInit {

  @Output() createSkillSetSubmit = new EventEmitter<any>();

  public createSkillSetRes: any;
  public createSkillSet!: CreateSkillSet;
  domainId: number;

  constructor(private skillSetService: SkillSetService) {
    this.createSkillSet = new CreateSkillSet();
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }

  ngOnInit(): void {
  }


  submit(createSkillSetForm: NgForm) {

    let dataObj = {
      "name": this.createSkillSet.name,
      "description": this.createSkillSet.description,
      "color": this.createSkillSet.color,
      "status": this.createSkillSet.status,
      "domainId": this.domainId
    }






    this.skillSetService.createSkillSet(dataObj)
      .then(
        (res: any) => {
          if (res.status) {
            this.createSkillSetRes = res;

            this.createSkillSetSubmit.emit();

            createSkillSetForm.resetForm();

          }
        },
        err => { this.createSkillSetRes = err }
      )
  }
}
