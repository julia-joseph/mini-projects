"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[881],{2881:(h,r,a)=>{a.r(r),a.d(r,{ExpandingCardsModule:()=>u});var o=a(6895),s=a(6237),n=a(8256);const d=function(t){return{active:t}},l=function(t){return{"background-image":t}};function p(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"div",4),n.NdJ("click",function(){const x=n.CHM(e).index,C=n.oxw();return n.KtG(C.onImageClick(x))}),n.TgZ(1,"h3"),n._uU(2),n.qZA()()}if(2&t){const e=i.$implicit;n.Q6J("ngClass",n.VKq(3,d,e.isActive))("ngStyle",n.VKq(5,l,"url("+e.image+")")),n.xp6(2),n.Oqu(e.name)}}const f=function(){return["/home"]},m=[{path:"",component:(()=>{class t{constructor(){this.cards=[{name:"Deep Diving",image:"https://images.unsplash.com/photo-1600326145377-bcccb9a9daf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",isActive:!0},{name:"Starways",image:"https://images.unsplash.com/photo-1663304709882-a7c78d78a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",isActive:!1},{name:"Grassy Croaks",image:"https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80",isActive:!1},{name:"Golden Heaven",image:"https://images.unsplash.com/photo-1589912593528-1106d19aa17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80",isActive:!1},{name:"Irony",image:"https://images.unsplash.com/photo-1530128118208-89f6ce02b37b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",isActive:!1}]}ngOnInit(){}onImageClick(e){this.cards=this.cards.map(c=>({...c,isActive:!1})),this.cards[e].isActive=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-expanding-cards"]],decls:7,vars:3,consts:[[1,"home-link",3,"routerLink"],[1,"fa-solid","fa-house"],[1,"container"],["class","panel",3,"ngClass","ngStyle","click",4,"ngFor","ngForOf"],[1,"panel",3,"ngClass","ngStyle","click"]],template:function(e,c){1&e&&(n.TgZ(0,"main")(1,"div",0),n._UZ(2,"i",1),n.TgZ(3,"span"),n._uU(4," Home"),n.qZA()(),n.TgZ(5,"div",2),n.YNc(6,p,3,7,"div",3),n.qZA()()),2&e&&(n.xp6(1),n.Q6J("routerLink",n.DdM(2,f)),n.xp6(5),n.Q6J("ngForOf",c.cards))},dependencies:[o.mk,o.sg,o.PC,s.rH],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh}.container[_ngcontent-%COMP%]{display:flex;width:90vw}.container[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-repeat:no-repeat;height:80vh;flex:.5;margin:.5rem;position:relative;transition:all .7s ease-in;-webkit-transition:all .7s ease-in}.container[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;position:absolute;bottom:1rem;left:1rem;margin:0rem;opacity:0;color:#fff}.container[_ngcontent-%COMP%]   .panel.active[_ngcontent-%COMP%]{flex:5}.container[_ngcontent-%COMP%]   .panel.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{opacity:1;transition:opacity .3s ease-in .4s}@media (max-width: 480px){.container[_ngcontent-%COMP%]{width:100vw}.panel[_ngcontent-%COMP%]:nth-child(4), .panel[_ngcontent-%COMP%]:nth-child(5){display:none}}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(m),s.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.ez,g]}),t})()}}]);