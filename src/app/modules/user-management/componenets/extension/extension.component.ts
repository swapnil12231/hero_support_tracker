import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/common/toast.service';
import { ExtensionService } from '../../services/extension.service';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  extesionResponsData: any;
  constructor(private extensionService: ExtensionService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.getAllExtensionsRecords();
  }

  async getAllExtensionsRecords() {
    this.extensionService.getAllExtension().then((res: any) => {
      if (res) {
        this.extesionResponsData = res;
      }
    }, err => {
      this.toastService.showError("Something Went Wrong!", "Error")
    })
  }

  onDeleteExtension(row:any){
    const rowExt = row.ext;
    this.extensionService.deleteExtension(rowExt).then((res: any) => {
      if (res) {
        this.getAllExtensionsRecords();
        this.toastService.showSuccess(res.message, "Success")
      }
    }, err => {
      this.toastService.showError("Something Went Wrong", "Error");
    })
  }

  onEdit(){

  }

}
