import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends BaseComponent implements OnInit {

  theloai:any;
  dichvu: any;
  
  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this._api.get('api/Loai/get-loai').takeUntil(this.unsubscribe).subscribe(res => {
      this.theloai = res;
    this._api.get('api/DichVu/get-dv').takeUntil(this.unsubscribe).subscribe(res => {
      this.dichvu = res; 
    })
    }); 
  }
}
