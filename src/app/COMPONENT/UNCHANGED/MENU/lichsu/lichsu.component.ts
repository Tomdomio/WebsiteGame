import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { User } from 'src/app/COMPONENT/SINGGUMNOPROXY/models/user';
import { AuthenticationService } from 'src/app/COMPONENT/SINGGUMNOPROXY/authentication.service';

@Component({
  selector: 'app-lichsu',
  templateUrl: './lichsu.component.html',
})
export class LichsuComponent extends BaseComponent implements OnInit {

  lichsutt: any;
  currentUser: User;
  
  constructor(injector: Injector,
    private auth: AuthenticationService) {
    super(injector);
    this.currentUser = this.auth.userValue;
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
