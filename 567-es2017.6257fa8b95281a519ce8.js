(self.webpackChunkwil_admin_angular=self.webpackChunkwil_admin_angular||[]).push([[567],{37567:function(e,t,i){"use strict";i.r(t),i.d(t,{CreateItemModule:function(){return E}});var s=i(38583),a=i(3679),o=i(977),l=i(65461),n=i(66782),r=i(98542),d=i(95987),c=i(99688),p=i(37716),u=i(44212),m=i(18859),h=i(52121),g=i(68058),f=i(4768),b=i(28723);let T=(()=>{class e extends c.K{constructor(e,t,i,s,a,o){super(e,t,i,s,a,o),this.logger=e,this.httpService=t,this.envService=i,this.messageService=s,this.authService=a,this.menuService=o}ngOnInit(){this.isSpinning=!1,this.globalFilterFields=["id"],this.columns=[{field:"id",header:"ID"},{field:"status",header:"STATUS",type:"status"},{field:"created_at",header:"CREATED_AT",type:"date"},{field:"updated_at",header:"UPDATED_AT",type:"date"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.form.model=Object.assign({},e)}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:e=>{this.delete(e,"create-item")},cancel:e=>{}}]}save(e){this.logger.log("model: ",e.model);let t=Object.assign({},e.model);t=Object.assign(Object.assign({},t),t.id&&null!=t.id?{updated_user:this.user.id}:{added_user:this.user.id})}loadData(e){console.log(e),setTimeout(()=>{this.loading=!0},1e3)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.Kf),p.Y36(m.O),p.Y36(h.L),p.Y36(g.dD),p.Y36(f.e),p.Y36(b.h))},e.\u0275cmp=p.Xpm({type:e,selectors:[["create-item"]],features:[p.qOj],decls:3,vars:18,consts:[["nzTip","Loading...",3,"nzSpinning"],[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"]],template:function(e,t){1&e&&(p.TgZ(0,"nz-spin",0),p.TgZ(1,"wl-form",1),p.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),p.qZA(),p.qZA(),p.TgZ(2,"wl-table",2),p.NdJ("onLazyLoad",function(e){return t.loadData(e)}),p.qZA()),2&e&&(p.Q6J("nzSpinning",t.isSpinning),p.xp6(1),p.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options),p.xp6(1),p.Udp("margin-top","1rem"),p.Q6J("data",t.data)("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","CreateItem ")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[n.W,l.U,o.a],styles:[""]}),e})();var y=i(42394),x=i(91841);const v={},S={},O=[{template:"<p>Vous pouvez ajouter des services \xe0 votre organisation.</p>"},{templateOptions:{label:"Formulaire de cr\xe9ation",toggleable:!0},fieldGroup:[{},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-3 wl-hidden",key:"id",type:"input",templateOptions:{translate:!0,label:"ID",readonly:!0}},{className:"flex-3",key:"name",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Nom",placeholder:"Nom",suffixIcon:"user"}},{className:"flex-3",key:"surname",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Prenoms",placeholder:"Prenoms",suffixIcon:"user"}},{className:"flex-3",key:"matricule",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Matricule",placeholder:"Matricule",suffixIcon:"number"}},{className:"flex-3",key:"service_id",type:"select",templateOptions:{translate:!0,required:!0,translatePlaceholder:!0,label:"Service",placeholder:"Service",suffixIcon:"container",options:[],valueProp:"id",labelProp:"libelle"}},{className:"flex-3",key:"telephone",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Telephone",placeholder:"Telephone",suffixIcon:"phone"}},{className:"flex-3",key:"portable",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Portable",placeholder:"Portable",suffixIcon:"phone"}},{className:"flex-3",key:"email",type:"input-email",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Email",placeholder:"Email",suffixIcon:"mail",pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/},validation:{messages:{pattern:(e,t)=>`"${t.formControl.value}" n'est pas une adresse email valide`}}},{className:"flex-3",key:"adresse",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Adresse",placeholder:"Adresse",suffixIcon:"number"}},,{className:"flex-3",key:"lieu_naissance",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,label:"Lieu de Naissance",placeholder:"Lieu de Naissance",suffixIcon:"aim"}},{className:"flex-6",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"Est actif ?"},defaultValue:!0}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Soumettre",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,i)=>!i.form.valid}},{type:"button",templateOptions:{type:"reset",label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.options.resetModel(v)}}}]}]}];function A(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"wl-form",7),p.NdJ("onSubmit",function(t){return p.CHM(e),p.oxw().save(t)})("onModelChange",function(t){return p.CHM(e),p.oxw().modelChange(t)}),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}const w=i(23815);let C=(()=>{class e extends c.K{constructor(e,t,i,s,a,o,l,n){super(e,t,i,s,a,o,l),this.logger=e,this.httpService=t,this.envService=i,this.messageService=s,this.authService=a,this.menuService=o,this.modal=l,this.changeDetectorRef=n,this.isEditMode=!1,this.isVisible=!1;const r=this.authService.hasPermissionAuthorizationV2(["USER_LIST.CREATE","USER_LIST.LOCK","USER_LIST.EDIT","USER_LIST.UNLOCK","USER_LIST.EXPORT","USER_LIST.DELETE","SHOW_DATA.ALL_ENTITY","SHOW_DATA.ROOT"]);this.hasPermissionToLock=r[1],this.hasPermissionToEdit=r[2],this.hasPermissionToUnlock=r[3],this.hasPermissionToExport=r[4],this.hasPermissionToDelete=r[5],this.hasPermissionToShowAllEntityData=r[6],this.hasPermissionToShowDataRoot=r[7],this.hasPermissionToCreate=r[0]}maFonction(){this.form.fields[0].template="<p>Veuillez remplir ce formulaire pour cr\xe9er un agent.</p>",this.isVisible=!0,this.isEditMode=!1}get modalTitle(){return this.isEditMode?"Mise \xe0 jour":"Ajouter"}ngAfterViewInit(){}ngOnInit(){this.loadAllService(),this.form.model=Object.assign({},v),this.form.fields=O,this.form.options=S,this.globalFilterFields=["name","surname","matricule","email","adresse"],this.columns=[{field:"service.libelle",header:"Service"},{field:"name",header:"Nom"},{field:"surname",header:"Prenom(s)"},{field:"matricule",header:"Matricule"},{field:"email",header:"Email"},{field:"adresse",header:"Adresse"},{field:"status",header:"Status",type:"status",falseText:"Inactif",trueText:"Actif"},{field:"created_at",header:"Created_at",type:"date"}],this.user&&this.hasPermissionToEdit&&this.actions.push({type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.logger.log(e),this.isEditMode=!0,this.isVisible=!0,console.log(e),this.form.fields[0].template="<p>Veuillez renseigner ce formulaire pour modifier les informations dudit agent.</p>",setTimeout(()=>{this.alert=void 0,e.status=0!=e.status,this.form.model=Object.assign({},e),this.form.fields[0].fieldGroup[0].template=`<h5>Vous modifiez de l'utilisateur <i>${e.login}</i> </h5>`,this.form.fields[0].fieldGroup[1].fieldGroup[0].templateOptions.label="Enregistrer",this.changeDetectorRef.detectChanges()},1)}}),this.user&&this.hasPermissionToDelete&&this.actions.push({type:"default",icon:"warning",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{this.swingstatus(e)},cancel:e=>{}}),this.user&&this.hasPermissionToDelete&&this.actions.push({type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{this.delete(e,"agent")},cancel:e=>{}})}save(e){if(console.log(e),1==this.isEditMode){this.changeDetectorRef.detectChanges(),this.logger.log("event.model: ",e.model);let t=Object.assign(Object.assign({},e.model),{phone:e.model.prefix+" "+e.model.phone,session:this.user.session_id});this.logger.log("payload ",t);const i=t.id;t=w.omit(t,["id"]),t=Object.assign(Object.assign({},t),{updated_user:this.user.id}),this.putData(`${y.T5}/agent/${i}`,t,e=>{e instanceof x.UA||(this.loadData(this.currentLoadEvent),this.isVisible=!1)})}else{let t=Object.assign(Object.assign({},e.model),{code:e.model.code,libelle:e.model.libelle,session:this.user.session_id});console.log(t),this.logger.log("payload ",t),t.id&&null!=t.id?(t=Object.assign(Object.assign({},t),{added_user:this.user.id}),this.postData(`${y.T5}/agent`,t,e=>{e instanceof x.UA||this.loadData(this.currentLoadEvent)})):(console.log(t),t=w.omit(t,["id"]),t=Object.assign(Object.assign({},t),{added_user:this.user.id}),this.postData(`${y.T5}/agent`,t,e=>{e instanceof x.UA||(this.loadData(this.currentLoadEvent),this.isVisible=!1)}))}}swingstatus(e){const t=e.id,i=e.status;if(1==i){let i=w.omit(e,["id"]);i={status:!1,updated_user:this.user.id},this.putData(`${y.T5}/agent/${t}`,i,e=>{e instanceof x.UA||this.loadData(this.currentLoadEvent)})}if(0==i){let i=w.omit(e,["id"]);i={status:!0,updated_user:this.user.id},this.putData(`${y.T5}/agent/${t}`,i,e=>{e instanceof x.UA||this.loadData(this.currentLoadEvent)})}}loadData(e){this.currentLoadEvent=e;const t=null!=e.globalFilter?`&search={"sKey":"all","sValue":"${e.globalFilter}"}`:"";setTimeout(()=>{this.loading=!0,this.getData(`${y.T5}/agent/?page=${e.first/e.rows+1}&per_page=${e.rows}${t}`)},1)}loadAllService(){const e=(this.authService.hasPermissionAuthorization("SHOW_DATA.ALL_ENTITY"),`${y.T5}/service/`);this.httpService.getData(`${e}`).toPromise().then(e=>{this.isSpinning=!1;let t=e.body.rows;this.notAllPrivilege&&t.push(...this.user.entities),this.form.fields=this.mapFields(this.form.fields,"service_id","templateOptions.options",t)}).catch(e=>{this.logger.error(e)})}handleCancel(){this.isVisible=!1}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.Kf),p.Y36(m.O),p.Y36(h.L),p.Y36(g.dD),p.Y36(f.e),p.Y36(b.h),p.Y36(r.Sf),p.Y36(p.sBO))},e.\u0275cmp=p.Xpm({type:e,selectors:[["create-item-dilicom"]],features:[p.qOj],decls:11,vars:18,consts:[["nzWidth","920px",3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[3,"alert","model","fields","options","onSubmit","onModelChange",4,"nzModalContent"],[2,"width","100%","text-align","center"],[2,"border","3px dashed whitesmoke","padding","400px"],[2,"font-size","small"],[1,"button-19",2,"margin-left","20px",3,"click"],[3,"data","styleClass","showTools","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"],[3,"alert","model","fields","options","onSubmit","onModelChange"]],template:function(e,t){1&e&&(p.TgZ(0,"nz-modal",0),p.NdJ("nzVisibleChange",function(e){return t.isVisible=e})("nzOnCancel",function(){return t.handleCancel()}),p.YNc(1,A,1,4,"wl-form",1),p.qZA(),p._UZ(2,"br"),p.TgZ(3,"table",2),p.TgZ(4,"tr",3),p.TgZ(5,"td"),p.TgZ(6,"h5",4),p._uU(7," Ajouter un article en cliquant sur ce bouton "),p.TgZ(8,"button",5),p.NdJ("click",function(){return t.maFonction()}),p._uU(9,"Ajouter"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(10,"wl-table",6),p.NdJ("onLazyLoad",function(e){return t.loadData(e)}),p.qZA()),2&e&&(p.Q6J("nzVisible",t.isVisible)("nzTitle",t.modalTitle)("nzFooter",null),p.xp6(10),p.Udp("margin-top","1rem"),p.Q6J("data",t.data)("styleClass","p-datatable-gridlines p-datatable-sm")("showTools",t.hasPermissionToExport)("columns",t.columns)("showTools",!0)("actions",t.actions)("lazy",!0)("caption","Departements")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[r.du,r.Hf,o.a,l.U],styles:[".search-input .inline{display:inline-block;margin:0!important;padding:0!important}  .search-input .inline nz-input-group{border-radius:.2rem 0 0 .2rem!important}  .search-input .inline:last-child button{border-radius:0 0 10px 0}  .search-input .inline:last-child{position:relative;top:1.8rem;left:-1.5px;margin:0;padding:0}  .search-input .inline:last-child nz-input-group{border-radius:0 .2rem .2rem 0!important}  .button-19{background:#0d6d3a;border:1px solid #0d6d3a;border-radius:6px;box-shadow:1px 2px 4px rgba(0,0,0,.1);box-sizing:border-box;color:#fff;cursor:pointer;display:inline-block;font-family:nunito,roboto,proxima-nova,proxima nova,sans-serif;font-size:13px;font-weight:800;line-height:16px;min-height:40px;outline:0;padding:12px 14px;text-align:center;text-rendering:geometricprecision;text-transform:none;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;vertical-align:middle}  .button-19:active,   .button-19:hover{background-color:transparent;background-color:initial;background-position:0 0;color:#0d6d3a}"]}),e})();const z=[{path:"",component:T,data:{title:"CreateItem",breadcrumb:"CreateItem"}},{path:"create-item",component:T,data:{title:"CreateItem",breadcrumb:"CreateItem"}},{path:"create-item-manuel",component:(()=>{class e extends c.K{constructor(e,t,i,s,a,o){super(e,t,i,s,a,o),this.logger=e,this.httpService=t,this.envService=i,this.messageService=s,this.authService=a,this.menuService=o}ngOnInit(){this.isSpinning=!1,this.globalFilterFields=["id"],this.columns=[{field:"id",header:"ID"},{field:"status",header:"STATUS",type:"status"},{field:"created_at",header:"CREATED_AT",type:"date"},{field:"updated_at",header:"UPDATED_AT",type:"date"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.form.model=Object.assign({},e)}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:e=>{this.delete(e,"create-item-manuel")},cancel:e=>{}}]}save(e){this.logger.log("model: ",e.model);let t=Object.assign({},e.model);t=Object.assign(Object.assign({},t),t.id&&null!=t.id?{updated_user:this.user.id}:{added_user:this.user.id})}loadData(e){console.log(e),setTimeout(()=>{this.loading=!0},1e3)}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(u.Kf),p.Y36(m.O),p.Y36(h.L),p.Y36(g.dD),p.Y36(f.e),p.Y36(b.h))},e.\u0275cmp=p.Xpm({type:e,selectors:[["create-item-manuel"]],features:[p.qOj],decls:3,vars:18,consts:[["nzTip","Loading...",3,"nzSpinning"],[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"]],template:function(e,t){1&e&&(p.TgZ(0,"nz-spin",0),p.TgZ(1,"wl-form",1),p.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),p.qZA(),p.qZA(),p.TgZ(2,"wl-table",2),p.NdJ("onLazyLoad",function(e){return t.loadData(e)}),p.qZA()),2&e&&(p.Q6J("nzSpinning",t.isSpinning),p.xp6(1),p.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options),p.xp6(1),p.Udp("margin-top","1rem"),p.Q6J("data",t.data)("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","CreateItemManuel ")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[n.W,l.U,o.a],styles:[""]}),e})(),data:{title:"CreateItemManuel",breadcrumb:"CreateItemManuel"}},{path:"create-item-dilicom",component:C,data:{title:"CreateItemDilicom",breadcrumb:"CreateItemDilicom"}}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[s.ez,a.u5,a.UX,o.n,l.e,r.Qp,n.j,D]]}),e})()}}]);