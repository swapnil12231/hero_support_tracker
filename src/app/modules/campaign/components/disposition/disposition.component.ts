import { Component, OnInit, ViewChild } from '@angular/core';
import { DispositionService } from '../../services/disposition.service';
import { CreateDisposition } from 'src/app/models/campaign/disposition';
import { CreateDispositionComponent } from './create-disposition/create-disposition.component';
import { ToastService } from 'src/app/services/common/toast.service';


@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {
  crmDispoData: any = [];

  @ViewChild(CreateDispositionComponent)
  createDisposition!: CreateDispositionComponent;

  constructor(private dispositionService: DispositionService,
    private toastService: ToastService) {
  }
  ngOnInit(): void {

    this.getCampaignDispositionData();
  }

  editDisposition(data: any) {
    this.createDisposition.setEditDispositionData(data);
  }

  deleteDisposition(e: any) {
    this.dispositionService.deleteDisposition(e.id).then(
      res => {
        this.toastService.showSuccess("Disposition deleted successfully", "Success");
        this.getCampaignDispositionData();
      }).catch(error => {
        this.toastService.showError("Something went wrong", "Error");
      });
  }

  getCampaignDispositionData() {

    this.dispositionService.getAllCampaignDispositionData().then(res => {
      this.crmDispoData = res;
    },
      err => { this.crmDispoData = err }
    )
  }

}
