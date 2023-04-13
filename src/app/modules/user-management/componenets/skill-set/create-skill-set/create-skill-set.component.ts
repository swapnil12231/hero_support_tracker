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

  public modalHeaderText!: string;
  public skillSetData: any;
  public createSkillSetRes: any;
  public createSkillSet!: CreateSkillSet;
  domainId: number;

  constructor(private skillSetService: SkillSetService) {
    this.createSkillSet = new CreateSkillSet();
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }

  ngOnInit(): void {
  }



  UpdateSkillSetData(childData: any) {



    this.createSkillSet.name = childData.data.skillname;
    this.createSkillSet.description = childData.data.description;
    this.createSkillSet.color = childData.data.color;
    this.createSkillSet.status = childData.data.status;
    this.modalHeaderText = 'Update Skill Set';

  }

  reset() {
    this.skillSetData = null;
    this.modalHeaderText = 'Add Pause Code';
  }


  submit(createSkillSetForm: NgForm) {

    this.createSkillSet.domainid = 1672730382222;




    this.skillSetService.createSkillSet(this.createSkillSet)
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
