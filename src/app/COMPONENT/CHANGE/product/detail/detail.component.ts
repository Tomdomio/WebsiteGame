import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent extends BaseComponent implements OnInit {

  detail: any;
  muasp: any;
  images: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.detail = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/SanPham/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => { this.detail = res;
        setTimeout(() => { this.loadScripts();});
      });
    });
    this.muasp = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/SanPham/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => { this.muasp = res;
        setTimeout(() => { this.loadScripts();});
      });
    });
    this.images = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/ImageSP/get-by-sp/'+id).takeUntil(this.unsubscribe).subscribe(res => { this.images = res;
        setTimeout(() => { this.loadScripts();});
        console.log(this.images);
      });
    });
  }
}