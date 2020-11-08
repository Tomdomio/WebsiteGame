import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent extends BaseComponent implements OnInit {
  public registerForm: FormGroup;
  loading: false;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      taikhoan: new FormControl('', [Validators.required]),
      matkhau: new FormControl('', [Validators.required,Validators.minLength(6)]),
      hoten: new FormControl('', [Validators.required]),
    });
  }
  onSubmitRegister(value: any) { 

    if (this.registerForm.invalid) {
      return;
    }
    this._api.post('api/Users/create-user',{
      taikhoan:value.taikhoan, 
      matkhau:value.matkhau, 
      hoten:value.hoten, 
      sotien: "0",
      role: "User"
      } ).takeUntil(this.unsubscribe).subscribe(res => {
     alert('Tạo thành công');
      }, err => { });      
      this.loading= false;
  }
}
