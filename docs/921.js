"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[921],{921:(f,l,r)=>{r.r(l),r.d(l,{BlurryLoadingModule:()=>m});var a=r(895),c=r(322),t=r(256);const s=function(n){return{filter:n}},d=function(n){return{opacity:n}},g=[{path:"",component:(()=>{class n{constructor(){this.loadingPercent=0,this.blurAmount=30,this.loadingTextOpacity=1}ngOnInit(){this.loadImage()}loadImage(){this.loadingInterval=setInterval(()=>{++this.loadingPercent,this.blurAmount=this.scale(this.loadingPercent,0,100,30,0),this.loadingTextOpacity=this.scale(this.loadingPercent,0,100,1,0),this.loadingPercent>99&&clearInterval(this.loadingInterval)},15)}scale(o,i,h,u,y){return(o-i)*(y-u)/(h-i)+u}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-blurry-loading"]],decls:4,vars:7,consts:[[3,"ngStyle"],[1,"loading-text",3,"ngStyle"]],template:function(o,i){1&o&&(t.TgZ(0,"main"),t._UZ(1,"section",0),t.TgZ(2,"div",1),t._uU(3),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(3,s,"blur("+i.blurAmount+"px)")),t.xp6(1),t.Q6J("ngStyle",t.VKq(5,d,i.loadingTextOpacity)),t.xp6(1),t.hij(" ",i.loadingPercent,"% "))},dependencies:[a.PC],styles:["main[_ngcontent-%COMP%]{display:flex;height:100vh}section[_ngcontent-%COMP%]{height:100vh;width:100vw;background-image:url(https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80);background-repeat:no-repeat;background-size:cover;background-position:center}.loading-text[_ngcontent-%COMP%]{position:absolute;top:10%;left:50%;color:#fff;font-size:1.5rem}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(g),c.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,p]}),n})()}}]);