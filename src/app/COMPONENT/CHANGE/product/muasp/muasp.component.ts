import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { User } from 'src/app/COMPONENT/SINGGUMNOPROXY/models/user';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/COMPONENT/SINGGUMNOPROXY/authentication.service';

@Component({
  selector: 'app-muasp',
  templateUrl: './muasp.component.html',
})
export class MuaspComponent extends BaseComponent implements OnInit {

  muasp: any;
  public naptheForm: FormGroup;
  currentUser: User;
  
  constructor(injector: Injector,
    private auth: AuthenticationService) {
    super(injector);
    this.currentUser = this.auth.userValue;
   }

  ngOnInit(): void {
    this.muasp = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/SanPham/get-by-id/'+id).takeUntil(this.unsubscribe).subscribe(res => { this.muasp = res;
      });
    });
  }
    onSubmit() {
      let thanhtoan = {
        idUser: this.currentUser.id,
        account: this.muasp.account,
        password: this.muasp.password, 
        id_theloai: this.muasp.id_theloai, 
        tennv: this.muasp.tennv,
        giaban: this.muasp.giaban,
        trangthai: 1
      }; 
      console.log(thanhtoan);
      // this._api.post('api/LichSutt/create-tt', thanhtoan).takeUntil(this.unsubscribe).subscribe(res => {
      // });
      // let tmp = {
      //   id: this.currentUser.id,
      //  sotien: this.currentUser.sotien += napthe.ketqua}
      // this._api.post('api/Users/update-usermoney',tmp).takeUntil(this.unsubscribe).subscribe(res =>{},
      // err => { });
      // alert("Nạp thẻ thành công")
      // console.log(this.currentUser.sotien);
      alert("Ok! Mua được rồi mở game chiến thôi !!!");
    }
  }
