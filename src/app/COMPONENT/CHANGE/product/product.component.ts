import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent extends BaseComponent implements OnInit {

  constructor( injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
