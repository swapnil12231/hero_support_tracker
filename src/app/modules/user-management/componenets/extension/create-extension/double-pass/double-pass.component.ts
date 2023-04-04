import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-double-pass',
  templateUrl: './double-pass.component.html',
  styleUrls: ['./double-pass.component.css']
})
export class DoublePassComponent implements OnInit {


  @Output() createDoublePassSubmit = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }


  submit()
{
   this.createDoublePassSubmit.emit("this is double pass")
}

}
