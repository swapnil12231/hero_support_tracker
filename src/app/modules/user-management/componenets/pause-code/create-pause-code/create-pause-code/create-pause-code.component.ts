import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PauseCodeService } from 'src/app/modules/user-management/services/pause-code.service';
import { CreatePausCode } from 'src/app/models/user-management/pause-code';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-create-pause-code',
  templateUrl: './create-pause-code.component.html',
  styleUrls: ['./create-pause-code.component.css']
})
export class CreatePauseCodeComponent implements OnInit {
  @Output() createPauseCodeSubmit = new EventEmitter<any>();

  public userGroupData: any;
  public result: any;
  Object = Object;
  modalShowHide: boolean = false;
  pauseCodeData: any;
  modalHeaderText = 'Create Pause Code';
  createPausCode: CreatePausCode;
  dropdowndata: any;
  domainId: number;

  constructor(private pauseCodeService: PauseCodeService) {
    this.createPausCode = new CreatePausCode();
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }
  ngOnInit(): void {
    this.getUserGroupFieldData();
  }

  getUserGroupFieldData() {
    this.pauseCodeService.getAllUserGroup().then((res: any) => {
      if (res) {
        res.forEach((item: any) => {
          this.userGroupData = item;
        })
      }
    }, err => {
      this.userGroupData = err;
    })
  }

  submit() {
    const usergroupId = (Object.keys(this.userGroupData) as (keyof typeof this.userGroupData)[]).find((key) => {
      return this.userGroupData[key] === this.dropdowndata;
    });
    // let dataObj = {
    //   "usergroupId": result,
    //   "pausecode": this.createPausCode.pausecode,
    //   "pausedescription": this.createPausCode.pausedescription,
    //   "domainId": this.domainId,
    // }
    this.createPausCode.domainId = this.domainId;
    this.createPausCode.usergroupId = Number(usergroupId);

    this.pauseCodeService.addCreatedPauseCode(this.createPausCode).then((res: any) => {
      if (res.status) {
        this.createPauseCodeSubmit.emit();
      }
    }, err => {
    })
  }

  childData(data: any) {
    this.pauseCodeData = data;
    this.modalHeaderText = 'Edit Pause Code';
  }

  reset() {
    this.pauseCodeData = null;
    this.modalHeaderText = 'Add Pause Code';
  }

}
