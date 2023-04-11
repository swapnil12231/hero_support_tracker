import { Component, OnInit, ViewChild } from '@angular/core';
import { PauseCodeService } from 'src/app/services/user-managenemt/pause-code.service';
import { CreatePauseCodeComponent } from './create-pause-code/create-pause-code/create-pause-code.component';

@Component({
  selector: 'app-pause-code',
  templateUrl: './pause-code.component.html',
  styleUrls: ['./pause-code.component.css']
})
export class PauseCodeComponent implements OnInit {
  pauseCodeDataRes: any = [];
  p: any;
  canNewPauseCode: boolean = false;
  pauseCodeRowData: any;

  @ViewChild(CreatePauseCodeComponent)
  createPauseCodeComponent!: CreatePauseCodeComponent;

  constructor(private pauseCodeService: PauseCodeService) { }
  ngOnInit(): void {
    this.getAllPauseCode();
  }

  async getAllPauseCode() {
    let domainID = 1672730382222;
    this.pauseCodeService.getAllPauseCodeSet(domainID).then(res => {
      if (res) {
        this.pauseCodeDataRes = res;
      }
    }, err => {
      this.pauseCodeDataRes = err;
    })
  }

  createPauseCodeSubmit() {
    this.getAllPauseCode();
  }

  pauseCodeEdit(row: any) {
    this.canNewPauseCode=true;
    this.pauseCodeRowData = {
      'data': row,
      'canShowUpdate': true,
      'canNewPauseCode': this.canNewPauseCode,
    }
    this.createPauseCodeComponent.childData(this.pauseCodeRowData);
  }

  pauseCodeDelete(row: any) {
    // console.log(row);
    // let domainID = 1672730382222;
    // this.pauseCodeService.getAllPauseCodeSet(domainID).then(res => {
    //   if (res) {
    //     this.pauseCodeDataRes = res;
    // this.getAllPauseCode();
    //   }
    // }, err => {
    //   this.pauseCodeDataRes = err;
    // })
  }
}
