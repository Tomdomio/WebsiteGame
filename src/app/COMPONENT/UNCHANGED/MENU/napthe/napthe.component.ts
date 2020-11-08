import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/COMPONENT/SINGGUMNOPROXY/models/user';
import { AuthenticationService } from 'src/app/COMPONENT/SINGGUMNOPROXY/authentication.service';


@Component({
  selector: 'app-napthe',
  templateUrl: './napthe.component.html',
})
export class NaptheComponent extends BaseComponent implements OnInit {

  public naptheForm: FormGroup;
  currentUser: User;

  constructor(injector: Injector,
    private auth: AuthenticationService) {
     super(injector);
     this.currentUser = this.auth.userValue;
  }
  ngOnInit(): void {
    this.naptheForm = new FormGroup({
      idUser: new FormControl(''),
      nhamang: new FormControl('', Validators.required),
      menhgia: new FormControl('', Validators.required), 
      mathe: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]),
      soseri: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]) 
    });
  }
  onSubmitNapthe( value: any ) {
    let napthe = {
      idUser: this.currentUser.id,
      nhamang: value.nhamang,
      menhgia: value.menhgia, 
      mathe: value.mathe, 
      soseri: value.soseri,
      ketqua: value.menhgia
    }; 
    console.log(napthe);
    this._api.post('api/LichSuNap/create-nap', napthe).takeUntil(this.unsubscribe).subscribe(res => {
    });
    let tmp = {
      id: this.currentUser.id,
     sotien: this.currentUser.sotien += napthe.ketqua}
    this._api.post('api/Users/update-usermoney',tmp).takeUntil(this.unsubscribe).subscribe(res =>{},
    err => { });
    alert("Nạp thẻ thành công")
    console.log(this.currentUser.sotien);
  }
}

