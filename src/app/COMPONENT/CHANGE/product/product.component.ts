import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../SINGGUMNOPROXY/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent extends BaseComponent implements OnInit {
  
  sanpham: any;
  sanphams: any;
  page: any;
  pageSize: any;
  totalItems:any;
  id_theloai:any;

  constructor( injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.sanpham = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/SanPham/get-by-loai/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.sanpham = res; setTimeout(() => { this.loadScripts();
        });
        console.log(this.sanpham);
      }); 
    });

  //   this.sanphams = [];
  //   this.page = 1;
  //   this.pageSize = 8;
  //   this._route.params.subscribe(params => {
  //     this.id_theloai = params['id'];
  //     this._api.post('api/sanpham/loai', { 
  //       page: this.page, 
  //       pageSize: this.pageSize, 
  //       id_theloai: this.id_theloai}).takeUntil(this.unsubscribe).subscribe(res => {
  //       this.sanphams = res.data;
  //       this.totalItems = res.totalItems;
  //       }, err => { }); 
  //       });
  //  }
  // loadPage(page) { 
  //   this._route.params.subscribe(params => {
  //     let id = params['id'];
  //     this._api.post('api/sanpham/loai', { 
  //       page: page, 
  //       pageSize: this.pageSize, 
  //       id_theloai: id}).takeUntil(this.unsubscribe).subscribe(res => {
  //       this.sanphams = res.data;
  //       this.totalItems = res.totalItems;
  //       }, err => { });       
  //  });   
  }
}
