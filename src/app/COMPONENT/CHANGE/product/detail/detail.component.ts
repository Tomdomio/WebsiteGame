import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent extends BaseComponent implements OnInit {
  DetailComponent
      detail: any;

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
  }
}
