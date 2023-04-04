import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-same-pass',
  templateUrl: './same-pass.component.html',
  styleUrls: ['./same-pass.component.css']
})
export class SamePassComponent implements OnInit {


  @Output() createSamePassSubmit = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  submit()
  {
    this.createSamePassSubmit.emit("this, same pass emit");
  }
}
