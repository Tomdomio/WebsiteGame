import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../SINGGUMNOPROXY/authentication.service';
import { User } from '../../SINGGUMNOPROXY/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  HeaderComponent;
  currentUser: any;
  isLoggedIn: Observable<User>;

  constructor(
    private auth: AuthenticationService) {
    this.currentUser = this.auth.userValue;
  }
  
  ngOnInit(): void {
      this.isLoggedIn = this.auth.user;
  }
  onLogout(){
    this.auth.logout();
    alert('Bạn đã đăng xuất');
  }
}
