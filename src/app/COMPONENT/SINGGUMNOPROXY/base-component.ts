import { Injector, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of as observableOf, Subject } from 'rxjs';
import { ApiService } from './api.service';
export class BaseComponent {
   public unsubscribe = new Subject();
   public _renderer:any;
   public _api: ApiService;
   public _route: ActivatedRoute;
   constructor(injector: Injector) {  
      this._renderer = injector.get(Renderer2);
      this._api = injector.get(ApiService);
      this._route = injector.get(ActivatedRoute);
      } 
   public loadScripts() {
         this.renderExternalScript('assets/js/bootstrap.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery-migrate.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootstrap.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.easing.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/wow.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/reveal-animate.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/magnific.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.cubeportfolio.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.counterup.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.waypoints.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.fancybox.pack.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.smooth-scroll.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/js.cookie.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/components.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/app.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootbox.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/moment.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/daterangepicker.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootstrap-datepicker.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootstrap-timepicker.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootstrap-datetimepicker.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/datepicker.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.mask.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/common.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery-2.1.0.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/bootstrap1.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/owl.carousel.min.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/slider.js').onload = () => {
            }
         this.renderExternalScript('assets/assets/jquery.cookie.js').onload = () => {
            }
         }
   public renderExternalScript(src: string): HTMLScriptElement {
         const script = document.createElement('script');
         script.type = 'text/javascript';
         script.src = src;
         script.async = true;
         script.defer = true;
         this._renderer.appendChild(document.body, script);
         return script;
       }
}