import { Component, OnInit } from '@angular/core';
import { rootNavigationRoutes } from 'src/app/constants/navigation-routes.constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  rootNavigationRoutes: any = rootNavigationRoutes;
  showAddNewCrm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
