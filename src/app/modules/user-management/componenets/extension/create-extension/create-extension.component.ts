import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-extension',
  templateUrl: './create-extension.component.html',
  styleUrls: ['./create-extension.component.css']
})
export class CreateExtensionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  createSamePassSubmit(data:any)
  {
    console.log({data});
    
  }


  createDoublePassSubmit(data:any)
  {
    console.log({data});
    
  }

}
