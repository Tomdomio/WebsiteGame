import { Component, Injector, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/COMPONENT/SINGGUMNOPROXY/authentication.service';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import { User } from 'src/app/COMPONENT/SINGGUMNOPROXY/models/user';

@Component({
  selector: 'app-thedanap',
  templateUrl: './thedanap.component.html',
})
export class ThedanapComponent extends BaseComponent implements OnInit {

  thedanap: any;
  currentUser: User;
  
  constructor(injector: Injector,
    private auth: AuthenticationService) {
    super(injector);
    this.currentUser = this.auth.userValue;
  }

  ngOnInit(): void {
  }

}
