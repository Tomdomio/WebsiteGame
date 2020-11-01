import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [ Validators.required, Validators.minLength(6),
      ]),
      remember: new FormControl(false, []),
    });
  }
    onSubmitLogin(value: any) { 
      console.log(value);
  }
}
