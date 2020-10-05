import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor( injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
  }

}
