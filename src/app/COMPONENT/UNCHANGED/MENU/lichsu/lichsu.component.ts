import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lichsu',
  templateUrl: './lichsu.component.html',
})
export class LichsuComponent extends BaseComponent implements OnInit {

  lichsutt: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.lichsutt = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/LichSutt/get-by-idUser/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.lichsutt = res;
        console.log(this.lichsutt);
      }); 
    });
  }
}
