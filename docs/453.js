"use strict";(self.webpackChunkmini_projects=self.webpackChunkmini_projects||[]).push([[453],{1453:(S,p,i)=>{i.r(p),i.d(p,{ProgressStepsModule:()=>v});var r=i(6895),c=i(6773),e=i(8256);const a=function(t){return{active:t}};function l(t,s){if(1&t&&(e.TgZ(0,"div",1),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("ngClass",e.VKq(2,a,n.step.isActive)),e.xp6(1),e.hij(" ",n.step.name,"\n")}}let d=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-step"]],inputs:{step:"step"},decls:1,vars:1,consts:[["class","circle",3,"ngClass",4,"ngIf"],[1,"circle",3,"ngClass"]],template:function(n,o){1&n&&e.YNc(0,l,2,4,"div",0),2&n&&e.Q6J("ngIf",o.step)},dependencies:[r.mk,r.O5],styles:[".circle[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;height:30px;width:30px;border:3px solid #e0e0e0;display:flex;align-items:center;justify-content:center;transition:.4s ease}.circle.active[_ngcontent-%COMP%]{border-color:#3498bd}"]}),t})();function g(t,s){1&t&&e._UZ(0,"app-step",8),2&t&&e.Q6J("step",s.$implicit)}const u=function(){return["/home"]},m=function(t){return{width:t}},f=[{path:"",component:(()=>{class t{constructor(){this.steps=[{name:"1",isActive:!0},{name:"2",isActive:!1},{name:"3",isActive:!1},{name:"4",isActive:!1}],this.progressWidth="0%",this.activeStep=0}ngOnInit(){}isPrevDisabled(){return!0!==this.steps[1].isActive}isNextDisabled(){return!0===this.steps[this.steps.length-1].isActive}goToPreviousStep(){void 0!==this.activeStep&&this.activeStep>=0&&(this.activeStep=this.activeStep-1,this.updateProgressBar(),this.steps[this.activeStep+1].isActive=!1)}goToNextStep(){void 0!==this.activeStep&&this.activeStep+1<this.steps.length&&(this.activeStep=this.activeStep+1,this.updateProgressBar(),this.steps[this.activeStep].isActive=!0)}updateProgressBar(){this.progressWidth=this.activeStep/(this.steps.length-1)*100+"%"}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-progress-steps"]],decls:12,vars:8,consts:[[1,"home-link",3,"routerLink"],[1,"fa-solid","fa-house"],[1,"container"],[1,"progress-container"],["id","progress",1,"progress",3,"ngStyle"],[3,"step",4,"ngFor","ngForOf"],["id","prev",3,"disabled","click"],["id","next",3,"disabled","click"],[3,"step"]],template:function(n,o){1&n&&(e.TgZ(0,"main")(1,"div",0),e._UZ(2,"i",1)(3,"span"),e.qZA(),e.TgZ(4,"div",2)(5,"div",3),e._UZ(6,"div",4),e.YNc(7,g,1,1,"app-step",5),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return o.goToPreviousStep()}),e._uU(9," Prev "),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return o.goToNextStep()}),e._uU(11," Next "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("routerLink",e.DdM(5,u)),e.xp6(5),e.Q6J("ngStyle",e.VKq(6,m,o.progressWidth)),e.xp6(1),e.Q6J("ngForOf",o.steps),e.xp6(1),e.Q6J("disabled",o.isPrevDisabled()),e.xp6(2),e.Q6J("disabled",o.isNextDisabled()))},dependencies:[r.sg,r.PC,c.rH,d],styles:['main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh}main[_ngcontent-%COMP%]   .home-link[_ngcontent-%COMP%]{position:fixed;top:10%;color:#297895}.container[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;position:relative;max-width:100%;width:350px}.container[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#e0e0e0;height:4px;width:100%;top:50%;transform:translateY(-50%);z-index:-1}.container[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{position:absolute;background-color:#3498bd;height:4px;width:10%;top:50%;left:0;transform:translateY(-50%);z-index:-1;transition:.4s ease}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#3498bd;color:#fff;border:none;padding:.5rem .8rem;margin:.8rem .25rem;border-radius:.25rem;cursor:pointer}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#54aed0;transform:scale(.98)}.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#e0e0e0;cursor:not-allowed}']}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(f),c.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,h]}),t})()}}]);