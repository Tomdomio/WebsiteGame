import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent extends BaseComponent implements OnInit {
  
  sanpham: any;

  constructor( injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('api/SanPham/get-sanpham').takeUntil(this.unsubscribe).subscribe(res =>{this.sanpham = res;});
  }

}
