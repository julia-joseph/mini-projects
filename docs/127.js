"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[127],{5127:(M,r,i)=>{i.r(r),i.d(r,{HiddenSearchModule:()=>_});var s=i(6895),a=i(6237),n=i(8256);function d(e,o){1&e&&(n.TgZ(0,"div",8),n._uU(1,"Finding Results..."),n.qZA())}function u(e,o){1&e&&(n.TgZ(0,"div",8),n._uU(1," No Results! "),n._UZ(2,"i",10),n.qZA())}function l(e,o){1&e&&(n.TgZ(0,"div",8),n._uU(1," Results Found! "),n._UZ(2,"i",11),n.qZA())}function h(e,o){if(1&e&&(n.TgZ(0,"div",9),n.YNc(1,u,3,0,"div",6),n.YNc(2,l,3,0,"div",6),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",0===t.searchResults),n.xp6(1),n.Q6J("ngIf",1===t.searchResults)}}const p=function(){return["/home"]},g=function(e){return{expand:e}},f=[{path:"",component:(()=>{class e{constructor(){this.expandSearch=!1,this.searchResults=null,this.isLoading=!1}ngOnInit(){}search(){this.expandSearch=!this.expandSearch}getResults(){this.searchResults=null,this.isLoading=!0,setTimeout(()=>{this.searchResults=Math.round(Math.random()),this.isLoading=!1},3e3)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-hidden-search"]],decls:10,vars:7,consts:[[1,"home-link",3,"routerLink"],[1,"fa-solid","fa-house"],[1,"search",3,"ngClass"],["type","text","name","","id","","placeholder","Search...",3,"keyup.enter"],["id","search",3,"click"],[1,"fa-solid","fa-magnifying-glass"],["class","loading",4,"ngIf"],["class","search-results",4,"ngIf"],[1,"loading"],[1,"search-results"],[1,"fa-regular","fa-face-sad-cry"],[1,"fa-regular","fa-face-laugh-beam"]],template:function(t,c){1&t&&(n.TgZ(0,"main")(1,"div",0),n._UZ(2,"i",1)(3,"span"),n.qZA(),n.TgZ(4,"div",2)(5,"input",3),n.NdJ("keyup.enter",function(){return c.getResults()}),n.qZA(),n.TgZ(6,"button",4),n.NdJ("click",function(){return c.search()}),n._UZ(7,"i",5),n.qZA()(),n.YNc(8,d,2,0,"div",6),n.YNc(9,h,3,2,"div",7),n.qZA()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.DdM(4,p)),n.xp6(3),n.Q6J("ngClass",n.VKq(5,g,c.expandSearch)),n.xp6(4),n.Q6J("ngIf",c.isLoading),n.xp6(1),n.Q6J("ngIf",null!==c.searchResults))},dependencies:[s.mk,s.O5,a.rH],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background-color:#9c215b}main[_ngcontent-%COMP%]   .home-link[_ngcontent-%COMP%]{position:fixed;color:#fff;top:10%}.search[_ngcontent-%COMP%]{position:relative}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;background-color:#fff;font-size:1.2rem;padding:0rem .5rem;max-height:50px;min-height:50px;width:40px;transition:.4s ease}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;position:absolute;top:0;left:0;height:50px;width:50px;cursor:pointer;background-color:#fff;transition:.4s ease}.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.search.expand[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:200px}.search.expand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:translate(198px)}.loading[_ngcontent-%COMP%], .search-results[_ngcontent-%COMP%]{margin-top:.5rem}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.Bz.forChild(f),a.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,m]}),e})()}}]);