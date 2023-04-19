import { Component, OnInit, ViewChild } from '@angular/core';
import { DispositionService } from '../../services/disposition.service';
import { CreateDisposition } from 'src/app/models/campaign/disposition';
import { CreateDispositionComponent } from './create-disposition/create-disposition.component';


@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {
  crmDispoData: any = [];

  @ViewChild(CreateDispositionComponent)
  createDisposition!: CreateDispositionComponent;

  constructor(private dispositionService: DispositionService) {
  }
  ngOnInit(): void {

    this.getCampaignDispositionData();
  }

  editDisposition(data: any) {
    this.createDisposition.setEditDispositionData(data);
  }
  getCampaignDispositionData() {

    this.dispositionService.getAllCampaignDispositionData().then(res => {
      this.crmDispoData = res;
    },
      err => { this.crmDispoData = err }
    )
  }

}
