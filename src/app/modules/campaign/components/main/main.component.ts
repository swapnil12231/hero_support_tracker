import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  showAddNewCrm: boolean = false;
  showModal: boolean = true;
  showCreateCampaign: boolean = false;
  ngOnInit(): void {
  
  }


}
