import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/COMPONENT/SINGGUMNOPROXY/base-component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-napthe',
  templateUrl: './napthe.component.html',
})
export class NaptheComponent extends BaseComponent implements OnInit {

  naptheForm: FormGroup;

  constructor(injector: Injector) { 
    super(injector);
  }
  ngOnInit(): void {
    this.naptheForm = new FormGroup({
      taikhoan: new FormControl(''),
      nhamang: new FormControl(''),
      menhgia: new FormControl(''), 
      mathe: new FormControl(''), 
      soseri: new FormControl('')  
    });
  }
  onSubmit(value: any) {
    let napthe = {
      taikhoan:value.taikhoan, 
      nhamang:value.nhamang, 
      menhgia:value.menhgia, 
      mathe:value.mathe, 
      soseri:value.soseri 
    };
    this._api.post('/api/napthe/create-napthe', napthe).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Nạp thẻ thành công');
    console.log(napthe);
       }, err => { });      
 
  }

}

