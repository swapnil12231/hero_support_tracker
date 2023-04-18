import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PauseCodeService } from 'src/app/modules/user-management/services/pause-code.service';
import { CreatePausCode } from 'src/app/models/user-management/pause-code';
import { Constants } from 'src/app/models/constants';
import { ToastService } from 'src/app/services/common/toast.service';

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
  pauseCodeEditData: any;
  modalHeaderText = 'Create Pause Code';
  createPausCode: CreatePausCode;
  dropdowndata: any;
  domainId: number;

  constructor(private pauseCodeService: PauseCodeService, private toastService: ToastService) {
    this.createPausCode = new CreatePausCode();
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }
  ngOnInit(): void {
    this.getUserGroupDropdownData();
  }

  getUserGroupDropdownData() {
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


  childData(data: any) {
    this.pauseCodeEditData = data;
    this.modalHeaderText = 'Edit Pause Code';
    this.createPausCode.pausecode = this.pauseCodeEditData.data.name;
    this.createPausCode.pausedescription = this.pauseCodeEditData.data.description;
    // this.createPausCode.usergroupId=this.pauseCodeEditData.data.usergroup;
    console.log(this.dropdowndata);
    this.dropdowndata = this.pauseCodeEditData.data.usergroup;
  }

  submit() {
    const usergroupId = (Object.keys(this.userGroupData) as (keyof typeof this.userGroupData)[]).find((key) => {
      return this.userGroupData[key] === this.dropdowndata;
    });
    this.createPausCode.domainId = this.domainId;
    this.createPausCode.usergroupId = Number(usergroupId);
    if (this.pauseCodeEditData) {
      const id=this.pauseCodeEditData.data.id;
      this.pauseCodeService.editePausecode(id,this.createPausCode).then((res: any) => {
        this.toastService.showSuccess(res, "Success");
        this.createPauseCodeSubmit.emit();
      }, err => {
        this.toastService.showSuccess("Something Went Wrong!", "Error");
      })
    } else {
      this.pauseCodeService.addCreatedPauseCode(this.createPausCode).then((res: any) => {
        if (res.status) {
          this.toastService.showSuccess(res, "Success");
          this.createPauseCodeSubmit.emit();
        }
      }, err => {
      })
    }
  }


  reset() {
    this.pauseCodeEditData = null;
    this.modalHeaderText = 'Add Pause Code';
  }

}
