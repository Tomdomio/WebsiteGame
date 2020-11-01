import { Component, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent implements OnInit {
  user: any;
  constructor(injector: Injector) {
    super(injector);
  }
  
  ngOnInit(): void {
    this.user = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/Users/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => { this.user = res;
      });
      console.log(this.user);
    });
  }

}
