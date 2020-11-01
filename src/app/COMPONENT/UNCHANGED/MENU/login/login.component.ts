import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/COMPONENT/SINGGUMNOPROXY/authentication.service';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseComponent implements OnInit {

  public loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: any;
  constructor(injector: Injector,
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private authenticationService: AuthenticationService) { 
    super(injector);
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      taikhoan: ['', Validators.required],
      matkhau: ['', Validators.required],
      remember: [''],
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  get f() {
    return this.loginForm.controls;
  }
    onSubmitLogin() { 

    if (this.loginForm.invalid) {
      return;
    }
      this.authenticationService
      .login(this.f.taikhoan.value, this.f.matkhau.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.error = error;
          this.loading = false; 
        }
      );
  }
}
