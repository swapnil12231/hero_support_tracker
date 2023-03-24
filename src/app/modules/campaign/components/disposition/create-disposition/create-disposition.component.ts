import { Component, OnInit } from '@angular/core';
import { CreateDisposition, ExistingDesposition } from 'src/app/models/campaign/disposition';

@Component({
  selector: 'app-create-disposition',
  templateUrl: './create-disposition.component.html',
  styleUrls: ['./create-disposition.component.css']
})
export class CreateDispositionComponent implements OnInit {

  createDisposition!: CreateDisposition;
  existingDesposition!: ExistingDesposition;

  constructor() {

    this.createDisposition = new CreateDisposition();
    this.existingDesposition = new ExistingDesposition();
  }


  submit() {
  }

  ngOnInit(): void {
  }

}
