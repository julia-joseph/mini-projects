"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[677],{8677:(h,a,s)=>{s.r(a),s.d(a,{ScrollingAnimationModule:()=>f});var l=s(6895),r=s(5322),e=s(8256);let c=(()=>{class n{constructor(i,t){this.elRef=i,this.renderer=t,this.renderer.listen("window","load",()=>{this.loadBox()}),this.renderer.listen("window","scroll",()=>{this.loadBox()})}loadBox(){this.elRef.nativeElement.getBoundingClientRect().top<window.innerHeight/5*4?this.addClass("show",this.elRef.nativeElement):this.removeClass("show",this.elRef.nativeElement)}addClass(i,t){this.renderer.addClass(t,i)}removeClass(i,t){this.renderer.removeClass(t,i)}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(e.SBq),e.Y36(e.Qsj))},n.\u0275dir=e.lG2({type:n,selectors:[["","appScrolling",""]]}),n})();const d=function(n){return{show:n}};function m(n,o){1&n&&(e.TgZ(0,"div",3)(1,"h2"),e._uU(2,"Content"),e.qZA()()),2&n&&e.Q6J("ngClass",e.VKq(1,d,o.$implicit.isDisplayed))}const g=function(){return["/home"]},p=[{path:"",component:(()=>{class n{constructor(){this.boxes=[{isDisplayed:!0},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1},{isDisplayed:!1}]}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-scrolling-animation"]],decls:7,vars:3,consts:[[1,"home-link",3,"routerLink"],[1,"fa-solid","fa-house"],["class","box","appScrolling","",3,"ngClass",4,"ngFor","ngForOf"],["appScrolling","",1,"box",3,"ngClass"]],template:function(i,t){1&i&&(e.TgZ(0,"main")(1,"div",0),e._UZ(2,"i",1)(3,"span"),e.qZA(),e.TgZ(4,"h3"),e._uU(5,"Scroll Animation"),e.qZA(),e.YNc(6,m,3,3,"div",2),e.qZA()),2&i&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,g)),e.xp6(5),e.Q6J("ngForOf",t.boxes))},dependencies:[l.mk,l.sg,r.rH,c],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;overflow-x:hidden}main[_ngcontent-%COMP%]   .home-link[_ngcontent-%COMP%]{color:#000;margin-top:1rem}.box[_ngcontent-%COMP%]{height:150px;width:250px;background-color:#64ebbe;display:flex;align-items:center;justify-content:center;margin:1rem 0rem;border-radius:1rem;transform:translate(500%);transition:.2s ease-in-out}.box[_ngcontent-%COMP%]:nth-of-type(even){transform:translate(-500%)}.box.show[_ngcontent-%COMP%]{transform:translate(0)}"]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(p),r.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.ez,u]}),n})()}}]);