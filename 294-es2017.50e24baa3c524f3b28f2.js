(self.webpackChunkwil_admin_angular=self.webpackChunkwil_admin_angular||[]).push([[294],{88808:function(e,t,a){"use strict";a.d(t,{G:function(){return L}});var i=a(99688),s=a(42394);const o={},l={formState:{token:localStorage.getItem("token")}},n=[{wrappers:["fieldset-wrapper"],templateOptions:{label:"Formulaire de cr\xe9ation",toggleable:!0},fieldGroup:[{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-3 wl-hidden",key:"id",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.ID",readonly:!0}},{className:"flex-3",key:"code",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.CODE",required:!0}},{className:"flex-3",key:"name",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.NAME",required:!0}},{className:"flex-3",key:"entity_type_id",type:"select",templateOptions:{translate:!0,showSearch:!0,label:"FORM_LABEL.ENTITY_TYPE",valueProp:"id",options:[],required:!0}},{className:"flex-3",key:"email",type:"input-email",templateOptions:{translate:!0,label:"FORM_LABEL.EMAIL",pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/},validation:{messages:{pattern:(e,t)=>`"${t.formControl.value}" n'est pas une adresse email valide`}}},{className:"flex-3",fieldGroupClassName:"d-flex search-input",fieldGroup:[{className:"inline flex-3",key:"prefix",type:"select",templateOptions:{translate:!0,showSearch:!0,label:"Telephone",labelProp:"phone_prefix",valueProp:"phone_prefix",options:[]},expressionProperties:{"templateOptions.required":"model.phone"}},{className:"inline flex-7",key:"phone",type:"input",templateOptions:{suffixIcon:"phone",type:"number",minLength:6},validation:{messages:{pattern:(e,t)=>`Le num\xe9ro ${t.formControl.value} n'est pas valide`}}}]},{className:"flex-3",key:"address",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.ADDRESS"}},{className:"flex-3",key:"logo",type:"file-upload",templateOptions:{translate:!0,listType:"picture",uploadUrl:s.T5+"/upload",authToken:l.formState.token,fileBasePath:s.M5+"/",uploadSuccessText:"Chargement r\xe9ussi",uploadFailText:"Chargement \xe9chou\xe9",label:"FORM_LABEL.LOGO",fileList:o.logo?[{url:o.logo,thumbUrl:o.logo}]:[]},expressionProperties:{"templateOptions.hide":(e,t,a)=>{a.form.valueChanges.subscribe(e=>{e.logo||(a.templateOptions.fileList=[])})}},hooks:{onChanges:e=>{e.templateOptions.fileList=e.model.logo?[{url:e.model.logo,thumbUrl:e.model.logo}]:[]}}},{className:"flex-3",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"FORM_LABEL.IS_ACTIVE"},defaultValue:!0}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{console.log("clik on submit"),e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid}},{type:"button",templateOptions:{type:"reset",label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.options.resetModel(o)}}}]}]}];var r=a(91841),d=a(37716),p=a(44212),c=a(18859),h=a(52121),m=a(68058),u=a(4768),f=a(28723),g=a(38583),E=a(66782),y=a(65461),T=a(977);function O(e,t){if(1&e){const e=d.EpF();d.ynx(0),d.TgZ(1,"nz-spin",1),d.TgZ(2,"wl-form",2),d.NdJ("onSubmit",function(t){return d.CHM(e),d.oxw().save(t)})("onModelChange",function(t){return d.CHM(e),d.oxw().modelChange(t)}),d.qZA(),d.qZA(),d.BQk()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("nzSpinning",e.isSpinning),d.xp6(1),d.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}function b(e,t){if(1&e){const e=d.EpF();d.ynx(0),d.TgZ(1,"wl-table",3),d.NdJ("onLazyLoad",function(t){return d.CHM(e),d.oxw().loadData(t)}),d.qZA(),d.BQk()}if(2&e){const e=d.oxw();d.xp6(1),d.Udp("margin-top","1rem"),d.Q6J("data",e.data)("styleClass","p-datatable-gridlines p-datatable-sm")("showTools",e.hasPermissionToExport)("wrapper","panel")("legend","Liste des donn\xe9es")("columns",e.columns)("actions",e.actions)("lazy",!0)("caption","Entit\xe9s")("paginator",!0)("rows",e.rows)("totalRecords",e.totalRecords)("loading",e.loading)("globalFilterFields",e.globalFilterFields)}}let L=(()=>{class e extends i.K{constructor(e,t,a,i,s,o){super(e,t,a,i,s,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=s,this.menuService=o;const l=this.authService.hasPermissionAuthorizationV2(["ENTITY_CREATE.CREATE","ENTITY_CREATE.EDIT","ENTITY_CREATE.CONSULT","ENTITY_CREATE.EXPORT","ENTITY_CREATE.DELETE","SHOW_DATA.ALL_ENTITY","SHOW_DATA.ROOT"]);this.hasPermissionToCreate=l[0],this.hasPermissionToEdit=l[1],this.hasPermissionToConsult=l[2],this.hasPermissionToExport=l[3],this.hasPermissionToDelete=l[4],this.hasPermissionToShowAllEntityData=l[5],this.hasPermissionToShowDataRoot=l[6]}ngOnInit(){this.form.options=l,this.form.fields=n,this.form.model=o,this.columns=[{field:"code",header:"FORM_LABEL.CODE"},{field:"name",header:"FORM_LABEL.NAME"},{field:"entity_type.label",header:"FORM_LABEL.ENTITY_TYPE"},{field:"email",header:"FORM_LABEL.EMAIL"},{field:"phone",header:"FORM_LABEL.PHONE"},{field:"address",header:"FORM_LABEL.ADDRESS"},{field:"logo",header:"FORM_LABEL.LOGO",type:"image"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],this.user&&this.hasPermissionToEdit&&this.actions.push({type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{var t,a;this.edit(e),this.form.model=Object.assign(Object.assign({},e),{prefix:null===(t=e.phone)||void 0===t?void 0:t.split(" ")[0],phone:null===(a=e.phone)||void 0===a?void 0:a.split(" ")[1]}),this.form.fields[0].fieldGroup[1].fieldGroup[0].templateOptions.label="SAVE"}}),this.user&&this.hasPermissionToDelete&&this.actions.push({type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{this.delete(e,"entities")},cancel:e=>{}}),this.loadAllType(),this.loadCountries()}save(e){var t,a;this.logger.log("model: ",e.model);let i=Object.assign(Object.assign({},e.model),{phone:e.model.prefix+" "+e.model.phone,logo:null!=e.model.logo?(null===(t=e.model.logo[0])||void 0===t?void 0:t.url)||e.model.logo:"",added_user:this.user.id});if(i.id&&null!=i.id){const t=i.id;i=s._.omit(i,["id"]),null==e.model.logo?i=s._.omit(i,["logo"]):(null===(a=e.model.logo[0])||void 0===a?void 0:a.url)||(i=s._.omit(i,["logo"])),this.putData(`${s.T5}/entities/${t}`,i,e=>{this.form.options.resetModel(),e instanceof r.UA||this.loadData(this.currentLoadEvent)})}else i=s._.omit(i,["id"]),this.postData(`${s.T5}/entities`,i,e=>{this.form.options.resetModel(),e instanceof r.UA||this.loadData(this.currentLoadEvent)})}loadData(e){this.currentLoadEvent=e;const t=this.hasPermissionToShowAllEntityData?`${s.T5}/entities/eager`:`${s.T5}/entities/byUserEntityAdded/${this.user.entity.id}`;setTimeout(()=>{const a=null!=e.globalFilter?`&search={"sKey":"all","sValue":"${e.globalFilter}"}`:"";this.loading=!0,this.getData(`${t}/?page=${e.first/e.rows+1}&per_page=${e.rows}${a}`)},1)}loadAllType(){this.httpService.getData(`${s.T5}/entity-types`).toPromise().then(e=>{let t=e.body.rows;this.isSpinning=!1,this.form.fields=this.mapFields(this.form.fields,"entity_type_id","templateOptions.options",t)}).catch(e=>{this.logger.error(e)})}loadCountries(){this.httpService.getData(`${s.T5}/countries`).toPromise().then(e=>{let t=e.body.rows;this.isSpinning=!1,this.form.fields=this.mapFields(this.form.fields,"prefix","templateOptions.options",t)}).catch(e=>{this.logger.error(e)})}modelChange(e){s._.values(e).every(s._.isEmpty)&&1!=e.status&&(this.form.model={status:!0},this.notAllPrivilege&&(this.form.model=Object.assign(Object.assign({},o),{entity_type_id:2})),this.form.fields=this.mapFields(this.form.fields,"status","defaultValue",!0))}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(p.Kf),d.Y36(c.O),d.Y36(h.L),d.Y36(m.dD),d.Y36(u.e),d.Y36(f.h))},e.\u0275cmp=d.Xpm({type:e,selectors:[["create"]],features:[d.qOj],decls:2,vars:2,consts:[[4,"ngIf"],["nzTip","Chargement...",3,"nzSpinning"],[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","styleClass","showTools","wrapper","legend","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"]],template:function(e,t){1&e&&(d.YNc(0,O,3,5,"ng-container",0),d.YNc(1,b,2,16,"ng-container",0)),2&e&&(d.Q6J("ngIf",t.hasPermissionToCreate),d.xp6(1),d.Q6J("ngIf",t.hasPermissionToConsult))},directives:[g.O5,E.W,y.U,T.a],styles:[".search-input .inline{display:inline-block;margin:0!important;padding:0!important}  .search-input .inline nz-input-group{border-radius:.2rem 0 0 .2rem!important}  .search-input .inline:last-child button{border-radius:0 0 10px 0}  .search-input .inline:last-child{position:relative;top:1.8rem;left:-1.5px;margin:0;padding:0}  .search-input .inline:last-child nz-input-group{border-radius:0 .2rem .2rem 0!important}"]}),e})()},17524:function(e,t,a){"use strict";a.d(t,{MB:function(){return l},bz:function(){return n},fn:function(){return r},t0:function(){return d},_w:function(){return p}});var i=a(37716),s=a(95987),o=a(4768);let l=(()=>{class e{constructor(e,t){this.router=e,this.authService=t}canActivate(e,t){return!!this.authService.hasMenuAuthorization("ENTITY_CREATE")||(this.router.navigate(["/private"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.F0),i.LFG(o.e))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),n=(()=>{class e{constructor(e,t){this.router=e,this.authService=t}canActivate(e,t){return!!this.authService.hasMenuAuthorization("AGENCE")||(this.router.navigate(["/private"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.F0),i.LFG(o.e))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),r=(()=>{class e{constructor(e,t){this.router=e,this.authService=t}canActivate(e,t){return!!this.authService.hasMenuAuthorization("ENTITY_PARAMETER")||(this.router.navigate(["/private"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.F0),i.LFG(o.e))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t){this.router=e,this.authService=t}canActivate(e,t){return!!this.authService.hasMenuAuthorization("ENTITY_USER")||(this.router.navigate(["/private"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.F0),i.LFG(o.e))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{constructor(e,t){this.router=e,this.authService=t}canActivate(e,t){return!!this.authService.hasMenuAuthorization("RELATED_ENTITY")||(this.router.navigate(["/private"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(s.F0),i.LFG(o.e))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},45294:function(e,t,a){"use strict";a.r(t),a.d(t,{OrganizationalModule:function(){return B}});var i=a(38583),s=a(3679),o=a(95987),l=a(88808),n=a(17524),r=a(37716);let d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["organizational"]],decls:2,vars:0,template:function(e,t){1&e&&(r.TgZ(0,"p"),r._uU(1," organizational works "),r.qZA())},styles:[""]}),e})();var p=a(99688),c=a(44212),h=a(18859),m=a(52121),u=a(68058),f=a(4768),g=a(28723);let E=(()=>{class e extends p.K{constructor(e,t,a,i,s,o){super(e,t,a,i,s,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=s,this.menuService=o}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.Kf),r.Y36(h.O),r.Y36(m.L),r.Y36(u.dD),r.Y36(f.e),r.Y36(g.h))},e.\u0275cmp=r.Xpm({type:e,selectors:[["site"]],features:[r.qOj],decls:2,vars:0,template:function(e,t){1&e&&(r.TgZ(0,"p"),r._uU(1," site works "),r.qZA())},styles:[""]}),e})();var y=a(42394);const T={},O={formState:{token:localStorage.getItem("token"),data:[],user_id:null,entity_id:null}},b=[{template:"<strong>Note:</strong> Tout d'abord, recherchez le login de l'utilisateur dans la base de donn\xe9es, puis ajoutez-le \xe0 votre entit\xe9"},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{key:"action",type:"input",hide:!0},{className:"flex-auto wl-hidden",key:"user_id",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.ID",readonly:!0}},{className:"flex-4",fieldGroupClassName:"d-flex search-input",fieldGroup:[{className:"inline",key:"login",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.LOGIN",required:!0,change:(e,t)=>{console.log(e.model.login)}},validation:{show:!0}},{className:"inline",type:"button",templateOptions:{type:"submit",icon:"search",loading:!1,disabled:!0,click:e=>{e.model.action="searchSSO",e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":"!model.login"}}]},{className:"flex-10",fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"Informations de l'utilisateur",toggleable:!0,collapsed:!1},fieldGroup:[{className:"flex-4",key:"first_name",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.FIRST_NAME",placeholder:"FORM_LABEL.FIRST_NAME",suffixIcon:"user"}},{className:"flex-4",key:"last_name",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.LAST_NAME",placeholder:"FORM_LABEL.LAST_NAME",suffixIcon:"user"}},{className:"flex-4",key:"email",type:"input-email",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.EMAIL",placeholder:"FORM_LABEL.EMAIL",suffixIcon:"mail"}},{className:"flex-4",key:"phone",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,label:"FORM_LABEL.PHONE",placeholder:"FORM_LABEL.PHONE",suffixIcon:"phone"}}]},{className:"flex-10",fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"Informations de la relation avec l'entit\xe9",toggleable:!0,collapsed:!1},fieldGroup:[{className:"flex-3",key:"entity_id",type:"select",templateOptions:{translate:!0,showSearch:!0,translatePlaceholder:!0,required:!0,label:"FORM_LABEL.ENTITY",placeholder:"FORM_LABEL.ENTITY",suffixIcon:"bank",options:[],valueProp:"id",labelProp:"name",url:y.T5+"/entities/load",authToken:localStorage.getItem("token")}},{className:"flex-3",key:"is_main",type:"checkbox",templateOptions:{translate:!0,label:"Est entit\xe9 principale ?"},defaultValue:!1},{className:"flex-3",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"FORM_LABEL.IS_ACTIVE"},defaultValue:!0},{className:"flex-10",key:"rattachements",type:"grid",wrappers:["panel-wrapper"],templateOptions:{toggleable:!0,label:"Liste des entit\xe9s d\xe9j\xe0 rattach\xe9es \xe0 l'utilisateur",columns:[{field:"code",header:"FORM_LABEL.CODE"},{field:"name",header:"FORM_LABEL.NAME"},{field:"EntityUser.is_main",header:"Est principale",type:"status",falseText:"Non",trueText:"Oui"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],data:O.formState.data,actions:[{type:"default",icon:"delete",title:"R\xe9tirer l'utilisateur de l'entit\xe9",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{fetch(`${y.T5}/entity-users/${e.EntityUser.user_id}/${e.EntityUser.entity_id}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{200==t.status&&t.json().then(t=>{console.log(t),O.formState.data=O.formState.data.filter(t=>t.id!=e.id)})})},cancel:e=>{}}]},expressionProperties:{"templateOptions.data":(e,t,a)=>O.formState.data}}]}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{e.model.action="save",e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid}},{type:"button",templateOptions:{type:"reset",label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.options.resetModel(T)}}}]}];var L=a(91841),_=a(66782),A=a(84828),x=a(65461),S=a(977);function v(e,t){if(1&e){const e=r.EpF();r.ynx(0),r.TgZ(1,"nz-tab",2),r.TgZ(2,"wl-form",3),r.NdJ("onSubmit",function(t){return r.CHM(e),r.oxw().save(t)})("onModelChange",function(t){return r.CHM(e),r.oxw().modelChange(t)}),r.qZA(),r.qZA(),r.BQk()}if(2&e){const e=r.oxw();r.xp6(2),r.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}function N(e,t){if(1&e&&(r.ynx(0),r.TgZ(1,"nz-tab",4),r._UZ(2,"wl-table",5),r.TgZ(3,"nz-tab",6),r._UZ(4,"wl-table",7),r.qZA(),r.qZA(),r.BQk()),2&e){const e=r.oxw();r.xp6(2),r.Udp("margin-top","1rem"),r.Q6J("data",e.data)("styleClass","p-datatable-gridlines p-datatable-sm")("showTools",e.hasPermissionToExport)("columns",e.columns)("actions",e.actions)("caption"," ")("paginator",!0)("rows",e.rows)("totalRecords",e.data.length)("loading",e.loading)("globalFilterFields",e.globalFilterFields),r.xp6(2),r.Udp("margin-top","1rem"),r.Q6J("data",e.dataRattachement)("showTools",!1)("columns",e.columnsRattachement)("actions",e.actions)("caption"," ")("paginator",!0)("rows",e.rows)("totalRecords",e.data.length)("loading",e.loading)("globalFilterFields",e.globalFilterFields)}}let R=(()=>{class e extends p.K{constructor(e,t,a,i,s,o){super(e,t,a,i,s,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=s,this.menuService=o;const l=this.authService.hasPermissionAuthorizationV2(["ENTITY_USER.CREATE","ENTITY_USER.EDIT","ENTITY_USER.CONSULT","ENTITY_USER.EXPORT","ENTITY_USER.DELETE","SHOW_DATA.ALL_ENTITY","SHOW_DATA.ROOT"]);this.hasPermissionToCreate=l[0],this.hasPermissionToEdit=l[1],this.hasPermissionToConsult=l[2],this.hasPermissionToExport=l[3],this.hasPermissionToDelete=l[4],this.hasPermissionToShowAllEntityData=l[5],this.hasPermissionToShowDataRoot=l[6]}ngOnInit(){this.form.options=O,this.form.model=this.user&&!this.user.is_root?Object.assign(Object.assign({},T),{entity_id:this.user.entity.id}):T,this.form.fields=this.user&&!this.user.is_root?this.mapFields(b,"entity_id","hide",!0):b,this.hasPermissionToConsult&&(this.loadUsers(),this.loadDataRattachement()),this.columns=[{field:"login",header:"Login"},{field:"first_name",header:"Nom"},{field:"last_name",header:"Pr\xe9noms"},{field:"email",header:"Email"},{field:"phone",header:"Contact"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],this.columnsRattachement=[{field:"code",header:"Code"},{field:"name",header:"Nom"},{field:"EntityUser.is_main",header:"Est principale?",type:"status",falseText:"Non",trueText:"Oui"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],this.user&&this.hasPermissionToDelete&&this.actions.push({type:"default",icon:"delete",title:"R\xe9tirer l'utilisateur de l'entit\xe9",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{this.deleteData(`${y.T5}/entity-users/${e.EntityUser.user_id}/${e.EntityUser.entity_id}`,e=>{e instanceof L.Zn&&this.loadUsers()})},cancel:e=>{}})}save(e){if(this.logger.log("this.form.model: ",this.form.model),"searchSSO"==e.model.action)this.searchUser(e.model.login);else{let t=Object.assign(Object.assign({},e.model),{meta_data:JSON.stringify(e.model.meta_data)});if(this.logger.log("payload ",t),t.id&&null!=t.id){const e=t.id;t=y._.omit(t,["id"]),t=Object.assign(Object.assign({},t),{updated_user:this.user.id}),this.putData(`${y.T5}/entity-users/${e}`,t)}else t=Object.assign(Object.assign({},t),{added_user:this.user.id}),this.postData(`${y.T5}/entity-users`,t,e=>{this.loadDataRattachement(),this.form.options.formState.data=[]})}}searchUser(e){this.alert=void 0,this.httpService.postData(`${y.T5}/users/searchByLogin`,{login:e}).toPromise().then(t=>{console.log(t),t.body.data?(this.form.options.formState.data=t.body.data.entities,this.form.model={login:t.body.data.login||"",first_name:t.body.data.first_name||"",last_name:t.body.data.last_name||"",email:t.body.data.email||"",phone:t.body.data.phone||"",user_id:t.body.data.id||""}):(this.form.options.resetModel(),this.form.model={login:e,entity_id:this.hasPermissionToShowAllEntityData?null:this.user.entity.id},this.alert={type:"error",message:t.body.message},this.setBackendError({message:t.body.message}))}).catch(t=>{this.form.options.resetModel(),this.form.model={login:e},this.logger.error(t),this.alert={type:"error",message:t.statusText,description:t.error.message.error},this.setBackendError({message:t.statusText})}).finally(()=>{this.form.fields[1].fieldGroup[2].fieldGroup[1].templateOptions.loading=!1})}loadUsers(){this.httpService.getData(`${y.T5}/entity-users/byEntity/${this.user.entity.id}`).toPromise().then(e=>{var t;this.logger.log(e),this.isSpinning=!1,this.data=null===(t=e.body.rows[0])||void 0===t?void 0:t.users}).catch(e=>{this.logger.error(e)})}loadDataRattachement(){this.httpService.postData(`${y.T5}/users/searchByLogin`,{login:this.user.login}).toPromise().then(e=>{console.log(e),this.dataRattachement=e.body.data.entities}).catch(e=>{this.setBackendError({message:e.statusText})}).finally(()=>{})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.Kf),r.Y36(h.O),r.Y36(m.L),r.Y36(u.dD),r.Y36(f.e),r.Y36(g.h))},e.\u0275cmp=r.Xpm({type:e,selectors:[["entity-user"]],features:[r.qOj],decls:4,vars:3,consts:[["nzTip","Chargement...",3,"nzSpinning"],[4,"ngIf"],["nzTitle","Rattacher un utilisateur"],[3,"alert","model","fields","options","onSubmit","onModelChange"],["nzTitle","Liste des utilisateurs rattach\xe9s \xe0 votre entit\xe9"],[3,"data","styleClass","showTools","columns","actions","caption","paginator","rows","totalRecords","loading","globalFilterFields"],["nzTitle","Liste des entit\xe9s auquelles vous \xeates rattach\xe9s"],[3,"data","showTools","columns","actions","caption","paginator","rows","totalRecords","loading","globalFilterFields"]],template:function(e,t){1&e&&(r.TgZ(0,"nz-spin",0),r.TgZ(1,"nz-tabset"),r.YNc(2,v,3,4,"ng-container",1),r.YNc(3,N,5,25,"ng-container",1),r.qZA(),r.qZA()),2&e&&(r.Q6J("nzSpinning",t.isSpinning),r.xp6(2),r.Q6J("ngIf",t.hasPermissionToCreate),r.xp6(1),r.Q6J("ngIf",t.hasPermissionToConsult))},directives:[_.W,A.xH,i.O5,A.xw,x.U,S.a],styles:[".search-input .inline{display:inline-block;margin:0}  .search-input .inline nz-input-group{border-radius:.2rem 0 0 .2rem!important}  .search-input .inline:last-child button{border-radius:0 0 10px 0}  .search-input .inline:last-child{position:relative;top:1.8rem;left:-1.5px}"]}),e})();const M={},w={formState:{token:localStorage.getItem("token"),data:[]}},F=[{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{template:"<strong>Note:</strong> Tout d'abord, recherchez le code ou le nom de l'entit\xe9 dans la base de donn\xe9es, puis rattachez-la \xe0 votre entit\xe9"},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{key:"action",type:"input",hide:!0},{className:"flex-auto wl-hidden",key:"id",type:"input",templateOptions:{translate:!0,hidden:!0,label:"FORM_LABEL.ID",readonly:!0}},{className:"flex-4",fieldGroupClassName:"d-flex flex-wrap search-input",fieldGroup:[{className:"inline",key:"code",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.CODE",required:!0},validation:{show:!0}},{className:"inline",type:"button",templateOptions:{type:"submit",icon:"search",loading:!1,disabled:!0,click:e=>{e.model.action="search",e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":"!model.code"}}]},{className:"flex-10",fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"Informations de l'entit\xe9",toggleable:!0,collapsed:!1},fieldGroup:[{className:"flex-4",key:"name",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.NAME",placeholder:"FORM_LABEL.NAME"}},{className:"flex-4",key:"email",type:"input-email",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.EMAIL",placeholder:"FORM_LABEL.EMAIL",suffixIcon:"mail"}},{className:"flex-4",key:"address",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,label:"FORM_LABEL.ADDRESS",placeholder:"FORM_LABEL.ADDRESS",suffixIcon:"user"}},{className:"flex-4",key:"phone",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,readonly:!0,required:!0,label:"FORM_LABEL.PHONE",placeholder:"FORM_LABEL.PHONE",suffixIcon:"phone"}}]},{className:"flex-10",fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"Informations de la relation avec l'entit\xe9",toggleable:!0,collapsed:!1},fieldGroup:[{className:"flex-3",key:"entity_source",type:"select",templateOptions:{translate:!0,showSearch:!0,translatePlaceholder:!0,required:!0,label:"FORM_LABEL.ENTITY",placeholder:"FORM_LABEL.ENTITY",suffixIcon:"bank",options:[],valueProp:"id",labelProp:"name",url:y.T5+"/entities/load",authToken:localStorage.getItem("token")}},{className:"flex-3 wl-hidden",key:"meta_data.relation_type",type:"input",templateOptions:{translate:!0,translatePlaceholder:!0,label:"FORM_LABEL.ACCES_KEY",placeholder:"FORM_LABEL.ACCES_KEY"}},{className:"flex-3",key:"relation_type_id",type:"select",templateOptions:{translate:!0,translatePlaceholder:!0,required:!0,valueProp:"id",labelProp:"label",label:"FORM_LABEL.TYPE_RELATION",placeholder:"FORM_LABEL.TYPE_RELATION",url:y.T5+"/relation-type/load",authToken:localStorage.getItem("token"),options:[],onModelChange:(e,t)=>{const a=e.templateOptions.options.find(e=>e.id==t);e.form.get("meta_data.relation_type").setValue(null==a?void 0:a.label)}}},{className:"flex-3",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"FORM_LABEL.IS_ACTIVE"},defaultValue:!0},{className:"flex-10",key:"rattachements",type:"grid",wrappers:["panel-wrapper"],templateOptions:{toggleable:!0,label:"Liste des entit\xe9s d\xe9j\xe0 rattach\xe9es \xe0 l'entit\xe9",columns:[{field:"code",header:"FORM_LABEL.CODE"},{field:"name",header:"FORM_LABEL.NAME"},{field:"meta_data.relation_type",header:"FORM_LABEL.TYPE_RELATION"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],data:w.formState.data,actions:[{type:"default",icon:"delete",title:"R\xe9tirer l'entit\xe9",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{fetch(`${y.T5}/related-entities/${e.RelatedEntity.entity_source}/${e.RelatedEntity.entity_destination}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{200==t.status&&t.json().then(t=>{console.log(t),w.formState.data=w.formState.data.filter(t=>t.id!=e.id)})})},cancel:e=>{}}]},expressionProperties:{"templateOptions.data":(e,t,a)=>w.formState.data}}]}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{e.model.action="save",e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid}},{type:"button",templateOptions:{type:"reset",label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.options.resetModel(M)}}}]}]}];function C(e,t){if(1&e){const e=r.EpF();r.ynx(0),r.TgZ(1,"nz-tab",2),r.TgZ(2,"wl-form",3),r.NdJ("onSubmit",function(t){return r.CHM(e),r.oxw().save(t)})("onModelChange",function(t){return r.CHM(e),r.oxw().modelChange(t)}),r.qZA(),r.qZA(),r.BQk()}if(2&e){const e=r.oxw();r.xp6(2),r.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}function I(e,t){if(1&e&&(r.ynx(0),r.TgZ(1,"nz-tab",4),r._UZ(2,"wl-table",5),r.qZA(),r.BQk()),2&e){const e=r.oxw();r.xp6(2),r.Udp("margin-top","1rem"),r.Q6J("data",e.data)("styleClass","p-datatable-gridlines p-datatable-sm")("showTools",e.hasPermissionToExport)("columns",e.columns)("actions",e.actions)("caption"," ")("paginator",!0)("rows",e.rows)("totalRecords",e.data.length)("loading",e.loading)("globalFilterFields",e.globalFilterFields)}}const k=[{path:"",component:d},{path:"site",component:E,data:{title:"MENU_LABEL.Sites",breadcrumb:"MENU_LABEL.Sites"}},{path:"agences",canActivate:[n.bz],component:l.G,data:{title:"Agences",breadcrumb:"Agences"}},{path:"entity",loadChildren:()=>a.e(725).then(a.bind(a,74725)).then(e=>e.EntityModule),data:{title:"MENU_LABEL.Entity",breadcrumb:"MENU_LABEL.Entity"}},{path:"entity-user",canActivate:[n.t0],component:R,data:{title:"MENU_LABEL.Entity_User",breadcrumb:"MENU_LABEL.Entity_User"}},{path:"related-entity",canActivate:[n._w],component:(()=>{class e extends p.K{constructor(e,t,a,i,s,o){super(e,t,a,i,s,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=s,this.menuService=o;const l=this.authService.hasPermissionAuthorizationV2(["RELATED_ENTITY.CREATE","RELATED_ENTITY.EDIT","RELATED_ENTITY.CONSULT","RELATED_ENTITY.EXPORT","RELATED_ENTITY.DELETE","SHOW_DATA.ALL_ENTITY","SHOW_DATA.ROOT"]);this.hasPermissionToCreate=l[0],this.hasPermissionToEdit=l[1],this.hasPermissionToConsult=l[2],this.hasPermissionToExport=l[3],this.hasPermissionToDelete=l[4],this.hasPermissionToShowAllEntityData=l[5],this.hasPermissionToShowDataRoot=l[6]}ngOnInit(){this.form.model=this.user&&!this.user.is_root?Object.assign(Object.assign({},M),{entity_id:this.user.entity.id}):M,this.form.fields=this.user&&!this.user.is_root?this.mapFields(F,"entity_id","hide",!0):F,this.form.options=w,this.isSpinning=!1,this.hasPermissionToConsult&&this.loadEntities(),this.columns=[{field:"code",header:"FORM_LABEL.CODE"},{field:"name",header:"FORM_LABEL.NAME"},{field:"entity_type.label",header:"FORM_LABEL.ENTITY_TYPE"},{field:"meta_data.relation_type",header:"FORM_LABEL.TYPE_RELATION"},{field:"email",header:"FORM_LABEL.EMAIL"},{field:"phone",header:"FORM_LABEL.PHONE"},{field:"address",header:"FORM_LABEL.ADDRESS"},{field:"logo",header:"FORM_LABEL.LOGO",type:"image"},{field:"status",header:"STATUS",type:"status",falseText:"Inactif",trueText:"Actif"}],this.user&&this.hasPermissionToDelete&&this.actions.push({type:"default",icon:"delete",title:"R\xe9tirer l'entit\xe9",shape:"circle",popConfirm:!0,popTitle:"Etes-vous s\xfbre ?",cancelText:"Annuler",okText:"Oui",loading:!1,click:e=>{this.deleteData(`${y.T5}/related-entities/${e.RelatedEntity.entity_source}/${e.RelatedEntity.entity_destination}`,e=>{e instanceof L.Zn&&this.loadEntities()})},cancel:e=>{}})}save(e){if(this.logger.log("this.form.model: ",this.form.model),"search"==e.model.action)this.searchEntity(e.model.code);else{let t=Object.assign(Object.assign({},e.model),{added_user:this.user.id,meta_data:JSON.stringify(e.model.meta_data)});this.logger.log("payload ",t),t=Object.assign(Object.assign({},t),{added_user:this.user.id}),this.postData(`${y.T5}/related-entities`,t,e=>{e instanceof L.Zn&&(this.loadEntities(),this.form.options.formState.data=[])})}}searchEntity(e){this.alert=void 0,this.httpService.postData(`${y.T5}/entities/searchByCode`,{code:e}).toPromise().then(t=>{if(console.log(t),t.body.data){this.form.model=Object.assign(Object.assign({},this.form.model),{code:t.body.data.code||"",name:t.body.data.name||"",address:t.body.data.address||"",email:t.body.data.email||"",phone:t.body.data.phone||"",entity_destination:t.body.data.id||""});let e=t.body.data.source.map(e=>Object.assign(Object.assign({},e),{meta_data:JSON.parse(e.RelatedEntity.meta_data)})),a=t.body.data.destination.map(e=>Object.assign(Object.assign({},e),{meta_data:JSON.parse(e.RelatedEntity.meta_data)}));this.form.options.formState.data=[...e,...a]}else this.form.options.resetModel(),this.form.model={code:e},this.alert={type:"error",message:t.body.message},this.setBackendError({message:t.body.message})}).catch(t=>{this.form.options.resetModel(),this.form.model={code:e},this.logger.error(t),this.alert={type:"error",message:t.statusText,description:t.error.message.error},this.setBackendError({message:t.statusText})}).finally(()=>{this.form.fields[0].fieldGroup[1].fieldGroup[2].fieldGroup[1].templateOptions.loading=!1})}loadEntities(){this.httpService.getData(`${y.T5}/related-entities/byEntity/${this.user.entity.id}`).toPromise().then(e=>{var t;this.logger.log(e),this.isSpinning=!1,this.data=null===(t=e.body.rows[0])||void 0===t?void 0:t.source,this.data=this.data.map(e=>Object.assign(Object.assign({},e),{meta_data:JSON.parse(e.RelatedEntity.meta_data)}))}).catch(e=>{this.logger.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(c.Kf),r.Y36(h.O),r.Y36(m.L),r.Y36(u.dD),r.Y36(f.e),r.Y36(g.h))},e.\u0275cmp=r.Xpm({type:e,selectors:[["related-entity"]],features:[r.qOj],decls:4,vars:3,consts:[["nzTip","Chargement...",3,"nzSpinning"],[4,"ngIf"],["nzTitle","Rattacher une entit\xe9"],[3,"alert","model","fields","options","onSubmit","onModelChange"],["nzTitle","Liste des entit\xe9s rattach\xe9es \xe0 votre entit\xe9"],[3,"data","styleClass","showTools","columns","actions","caption","paginator","rows","totalRecords","loading","globalFilterFields"]],template:function(e,t){1&e&&(r.TgZ(0,"nz-spin",0),r.TgZ(1,"nz-tabset"),r.YNc(2,C,3,4,"ng-container",1),r.YNc(3,I,3,13,"ng-container",1),r.qZA(),r.qZA()),2&e&&(r.Q6J("nzSpinning",t.isSpinning),r.xp6(2),r.Q6J("ngIf",t.hasPermissionToCreate),r.xp6(1),r.Q6J("ngIf",t.hasPermissionToConsult))},directives:[_.W,A.xH,i.O5,A.xw,x.U,S.a],styles:[".search-input .inline{display:inline-block;margin:0}  .search-input .inline nz-input-group{border-radius:.2rem 0 0 .2rem!important}  .search-input .inline:last-child{position:relative;top:1.8rem;left:-1.5px}  .search-input .inline:last-child button{border-radius:0 0 10px 0}  .generate-input{display:flex;align-items:flex-end}  .generate-input .inline{display:inline-block;margin:0}"]}),e})(),data:{title:"MENU_LABEL.Related_Entity",breadcrumb:"MENU_LABEL.Related_Entity"}}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[o.Bz.forChild(k)],o.Bz]}),e})(),B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[i.ez,s.u5,s.UX,P,x.e,S.n,_.j,A.we]]}),e})()}}]);