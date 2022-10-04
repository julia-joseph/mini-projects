"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[524],{5524:(b,c,a)=>{a.r(c),a.d(c,{BackgroundSliderModule:()=>h});var s=a(6895),r=a(6773),e=a(8256);const l=function(n){return{active:n}},m=function(n){return{"background-image":n}};let g=(()=>{class n{constructor(){this.image=null}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-slide"]],inputs:{image:"image"},decls:2,vars:8,consts:[[1,"image-container",3,"ngClass","ngStyle"],[3,"src","alt"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(4,l,i.image.isActive))("ngStyle",e.VKq(6,m,"url("+i.image.url+")")),e.xp6(1),e.s9C("alt",i.image.name),e.Q6J("src",i.image.url,e.LSH))},dependencies:[s.mk,s.PC],styles:[".image-container[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;height:calc(100vh - 2.5rem);width:100%;display:flex;justify-content:center;align-items:center;display:none}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:cover;border:1px solid white;height:60%;width:50%}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.02);transition:.3s ease-in-out}.image-container.active[_ngcontent-%COMP%]{display:flex}"]}),n})();function u(n,o){1&n&&e._UZ(0,"app-slide",8),2&n&&e.Q6J("image",o.$implicit)}const d=function(){return["/home"]},f=[{path:"",component:(()=>{class n{constructor(){this.images=[{name:"Blue Sea Mountains",url:"https://images.unsplash.com/photo-1663947718652-fa32fb546da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isActive:!0},{name:"Sun Stars",url:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isActive:!1},{name:"Mossy Hills",url:"https://images.unsplash.com/photo-1662913307002-ad2d32923913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",isActive:!1},{name:"Purple Petals",url:"https://images.unsplash.com/photo-1662661573879-52ceee5c9bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isActive:!1},{name:"Grassy Greens",url:"https://images.unsplash.com/photo-1508550536558-5e8d33eb9a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80",isActive:!1},{name:"Stary Nights",url:"https://images.unsplash.com/photo-1662992672853-62155b6c3ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",isActive:!1}]}ngOnInit(){}prevImage(){const t=this.images.findIndex(i=>i.isActive);0===t?(this.images[t].isActive=!1,this.images[this.images.length-1].isActive=!0):(this.images[t].isActive=!1,this.images[t-1].isActive=!0)}nextImage(){const t=this.images.findIndex(i=>i.isActive);t===this.images.length-1?(this.images[t].isActive=!1,this.images[0].isActive=!0):(this.images[t].isActive=!1,this.images[t+1].isActive=!0)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-background-slider"]],decls:10,vars:3,consts:[[1,"home-link",3,"routerLink"],[1,"fa-solid","fa-house"],[1,"images"],[1,"prev-btn",3,"click"],[1,"fa-solid","fa-angles-left"],[3,"image",4,"ngFor","ngForOf"],[1,"next-btn",3,"click"],[1,"fa-solid","fa-angles-right"],[3,"image"]],template:function(t,i){1&t&&(e.TgZ(0,"main")(1,"div",0),e._UZ(2,"i",1)(3,"span"),e.qZA(),e.TgZ(4,"div",2)(5,"button",3),e.NdJ("click",function(){return i.prevImage()}),e._UZ(6,"i",4),e.qZA(),e.YNc(7,u,1,1,"app-slide",5),e.TgZ(8,"button",6),e.NdJ("click",function(){return i.nextImage()}),e._UZ(9,"i",7),e.qZA()()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.DdM(2,d)),e.xp6(6),e.Q6J("ngForOf",i.images))},dependencies:[s.sg,r.rH,g],styles:["main[_ngcontent-%COMP%]   .home-link[_ngcontent-%COMP%]{min-width:calc(100vw - 1rem);text-align:center;padding:.5rem}.images[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;position:relative}.images[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#ffffff4d;border:1px solid white;position:absolute;color:#fff;cursor:pointer;padding:1rem}.images[_ngcontent-%COMP%]   button.prev-btn[_ngcontent-%COMP%]{top:50%;left:2%}.images[_ngcontent-%COMP%]   button.next-btn[_ngcontent-%COMP%]{top:50%;left:95%}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(f),r.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,p]}),n})()}}]);