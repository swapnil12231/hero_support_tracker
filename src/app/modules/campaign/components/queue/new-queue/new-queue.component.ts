import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-queue',
  templateUrl: './new-queue.component.html',
  styleUrls: ['./new-queue.component.css']
})
export class NewQueueComponent implements OnInit {

  constructor() { }


  createQueueSubmit(data:any)
  {
           console.log("==================",data);
           
  }

  createQueueNextSubmit(data:any)
  {
    console.log("==================",data);

  }

  ngOnInit(): void {
  }

}
