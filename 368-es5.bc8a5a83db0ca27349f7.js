!function(){function e(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&t(e,o)}function t(e,o){return(t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,o)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var o,l=n(e);if(t){var i=n(this).constructor;o=Reflect.construct(l,arguments,i)}else o=l.apply(this,arguments);return a(this,o)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(n=a.key,l=void 0,"symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?l:String(l)),a)}var n,l}function r(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkwil_admin_angular=self.webpackChunkwil_admin_angular||[]).push([[368],{17368:function(t,a,n){"use strict";n.r(a),n.d(a,{RegionalModule:function(){return N}});var i,s=n(38583),c=n(95987),u=n(42394),p=n(37716),d=n(18859),f=function(){var e=function(){function e(t){l(this,e),this.httpService=t}return r(e,[{key:"resolve",value:function(e){var t=e.paramMap.get("lang_code");return this.httpService.getData(u.T5+"/langs/byCode/"+t).toPromise().then(function(e){console.log("resolver lang =>",e);var t=e.body.data;return t?t.label:"unknow"})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.LFG(d.O))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),m=n(99688),g={},b={},y=[{wrappers:["fieldset-wrapper"],templateOptions:{label:"Formulaire de cr\xe9ation",toggleable:!0},fieldGroup:[{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-auto wl-hidden",key:"id",type:"input",templateOptions:{hidden:!0,translate:!0,label:"FORM_LABEL.ID",readonly:!0}},{className:"flex-auto",key:"code",type:"input",templateOptions:{required:!0,translate:!0,label:"FORM_LABEL.CODE"}},{className:"flex-auto",key:"label",type:"input",templateOptions:{translate:!0,required:!0,label:"FORM_LABEL.LABEL"}},{className:"flex-auto",key:"flag",type:"input",templateOptions:{translate:!0,label:"FORM_LABEL.FLAG"}},{className:"flex-2",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"FORM_LABEL.IS_ACTIVE"},defaultValue:!0}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:function(e){console.log("clik on submit"),e.templateOptions.loading=!0,e.form.statusChanges.subscribe(function(t){e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":function(e,t,o){return!o.form.valid}}},{type:"button",templateOptions:{type:"reset",label:"Reset",bgColor:"#000",textColor:"#fff",click:function(e){e.options.resetModel(g)}}}]}]}],h=n(44212),v=n(52121),O=n(68058),_=n(4768),L=n(28723),w=n(65461),k=n(977),A=function(){var t=function(t){e(n,t);var a=o(n);function n(e,t,o,i,r,s,c){var u;return l(this,n),(u=a.call(this,e,t,o,i,r,s)).logger=e,u.httpService=t,u.envService=o,u.messageService=i,u.authService=r,u.menuService=s,u.router=c,u}return r(n,[{key:"ngOnInit",value:function(){var e=this;this.form.options=b,this.form.model=g,this.form.fields=y,this.isSpinning=!1,this.globalFilterFields=["key","value"],this.columns=[{field:"code",header:"CODE"},{field:"label",header:"LABEL"},{field:"flag",header:"FLAG"},{field:"status",header:"STATUS",type:"status"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:function(t){e.edit(t),e.form.model=Object.assign({},t),e.form.fields[0].fieldGroup[1].fieldGroup[0].templateOptions.label="SAVE"}},{type:"default",title:"Add a translation",icon:"translation",shape:"circle",loading:!1,click:function(t){e.router.navigate(["/private/settings/regional/translation",t.code])}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:function(t){e.delete(t,"langs",!1)},cancel:function(e){}}]}},{key:"save",value:function(e){this.logger.log("model: ",e.model);var t=Object.assign(Object.assign({},e.model),{added_user:this.user.id});if(t.id&&null!=t.id){var o=t.id;u._.omit(t,["id"]),this.putData("".concat(u.T5,"/langs/").concat(o),t)}else t=u._.omit(t,["id"]),this.postData("".concat(u.T5,"/langs"),t)}},{key:"loadData",value:function(e){var t=this;setTimeout(function(){t.loading=!0,t.getData("".concat(u.T5,"/langs/?page=").concat(e.first/e.rows+1,"&per_page=").concat(e.rows))},1)}}]),n}(m.K);return t.\u0275fac=function(e){return new(e||t)(p.Y36(h.Kf),p.Y36(d.O),p.Y36(v.L),p.Y36(O.dD),p.Y36(_.e),p.Y36(L.h),p.Y36(c.F0))},t.\u0275cmp=p.Xpm({type:t,selectors:[["lang"]],features:[p.qOj],decls:2,vars:18,consts:[[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","styleClass","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"]],template:function(e,t){1&e&&(p.TgZ(0,"wl-form",0),p.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),p.qZA(),p.TgZ(1,"wl-table",1),p.NdJ("onLazyLoad",function(e){return t.loadData(e)}),p.qZA()),2&e&&(p.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options),p.xp6(1),p.Udp("margin-top","1rem"),p.Q6J("data",t.data)("styleClass","p-datatable-gridlines p-datatable-sm")("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","General Settings")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[w.U,k.a],styles:[""]}),t}(),S={},E={},F=[{wrappers:["fieldset-wrapper"],templateOptions:{label:"Formulaire de cr\xe9ation",toggleable:!0},fieldGroup:[{wrappers:["accordion-wrapper"],fieldGroup:[{templateOptions:{label:"Create Form",toggleable:!0},fieldGroup:[{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-auto",key:"id",type:"input",hide:!0,templateOptions:{hidden:!0,translate:!0,label:"FORM_LABEL.ID",readonly:!0}},{className:"flex-auto",key:"lang_code",type:"select",templateOptions:{required:!0,translate:!0,url:u.T5+"/langs/load",valueProp:"code",labelProp:"label",label:"FORM_LABEL.LANG_CODE"}},{className:"flex-auto",key:"key",type:"input",templateOptions:{translate:!0,required:!0,label:"FORM_LABEL.KEY"}},{className:"flex-auto",key:"value",type:"input",templateOptions:{translate:!0,required:!0,label:"FORM_LABEL.VALUE"}},{className:"flex-2",key:"status",type:"checkbox",templateOptions:{translate:!0,label:"FORM_LABEL.IS_ACTIVE"},defaultValue:!0}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:function(e){console.log("clik on submit"),e.templateOptions.loading=!0,e.form.statusChanges.subscribe(function(t){e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":"!model.lang_code || !model.key || !model.value"}},{type:"button",templateOptions:{type:"reset",label:"Reset",bgColor:"#000",textColor:"#fff",click:function(e){e.options.resetModel(function(e){return console.log(e)})}}}]}]},{templateOptions:{label:"Create from file",toggleable:!0},fieldGroupClassName:"d-flex flex-wrap flex-start",fieldGroup:[{className:"flex-2",key:"lang_code",type:"select",templateOptions:{required:!0,translate:!0,url:u.T5+"/langs/load",valueProp:"code",labelProp:"label",label:"FORM_LABEL.LANG_CODE"}},{className:"flex-8",key:"file_line",type:"file-upload",templateOptions:{accept:"application/json",fileType:"application/json",translate:!0,label:"FORM_LABEL.FILE",handleUpload:function(e,t){var o=t[0],a=new FileReader;function n(t,o){return Object.keys(t).map(function(a){return"object"==typeof t[a]?n(t[a],a):{key:o?o+"."+a:a,value:t[a],lang_code:e.model.lang_code,status:!0}})}a.readAsText(o,"UTF-8"),a.onload=function(t){var o=JSON.parse(t.target.result);console.log(o),u._.mapKeys(o,function(e,t){return{key:t,value:e}});var a=u._.flattenDeep(n(o));console.log(a),e.formControl.setValue(a),e.options.formState.enableSubmitBtn=!0},a.onerror=function(e){console.log(e)}}}},{fieldGroupClassName:"action-bloc",fieldGroup:[{className:"flex-1",type:"button",templateOptions:{type:"submit",label:"FORM_LABEL.SUBMIT",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:function(e){console.log("clik on submit"),e.templateOptions.loading=!0,e.form.statusChanges.subscribe(function(t){e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":function(e,t,o){return!t.enableSubmitBtn}}}]}]}]}]}],T=n(91841),C=function(){var t=function(t){e(n,t);var a=o(n);function n(e,t,o,i,r,s,c){var u;return l(this,n),(u=a.call(this,e,t,o,i,r,s)).logger=e,u.httpService=t,u.envService=o,u.messageService=i,u.authService=r,u.menuService=s,u.route=c,u.lang_code="en",u.lang_code=u.route.snapshot.paramMap.get("lang_code"),u}return r(n,[{key:"ngOnInit",value:function(){var e=this;this.form.options=E,this.form.model=S,this.form.model.lang_code=this.lang_code,this.form.fields=F,this.isSpinning=!1,this.columns=[{field:"lang.label",header:"LANG"},{field:"key",header:"KEY"},{field:"value",header:"VALUE"},{field:"status",header:"STATUS",type:"status"}],this.globalFilterFields=["key","value"],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:function(t){e.edit(t),e.form.model=Object.assign({},t),e.form.fields[0].fieldGroup[0].fieldGroup[0].fieldGroup[1].fieldGroup[0].templateOptions.label="SAVE"}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:function(t){e.delete(t,"translations",!1)},cancel:function(e){}}],this.groupActions={class:"",actions:[{type:"default",class:"p-button-danger",icon:"pi pi-trash",title:"Delete",click:function(t){var o=t.map(function(e){return e.id}).join(",");e.logger.log(o),e.deleteV2({callback:function(t){t&&e.deleteData("".concat(u.T5,"/translations/").concat(o),function(t){e.reloadData(t)})}})}}]}}},{key:"save",value:function(e){var t=this;this.logger.log("model: ",e.model);var o=Object.assign({},e.model);if(o.id&&null!=o.id){var a=o.id;o=Object.assign(Object.assign({},e.model),{updated_user:this.user.id}),o=u._.omit(o,["id"]),this.putData("".concat(u.T5,"/translations/").concat(a),o)}else{if(o=u._.omit(o,["id"]),(o=Object.assign(Object.assign({},o),{added_user:this.user.id})).file_line&&null!=o.file_line)return o.file_line=o.file_line.map(function(e){return Object.assign(Object.assign({},e),{added_user:t.user.id})}),this.postData("".concat(u.T5,"/translations"),o.file_line,function(e){t.form.options.resetModel(),t.reloadData(e)});this.postData("".concat(u.T5,"/translations"),o),this.form.options.formState.enableSubmitBtn=!1}}},{key:"loadData",value:function(e){var t=this;this.logger.log("loadData event: ",e);var o=null!=e.globalFilter?'&search={"sKey":"all","sValue":"'.concat(e.globalFilter,'"}'):this.lang_code?'&search={"lang_code":"'.concat(this.lang_code,'"}'):"";setTimeout(function(){t.loading=!0,t.getData("".concat(u.T5,"/translations/?page=").concat(e.first/e.rows+1,"&per_page=").concat(e.rows).concat(o))},1)}},{key:"onRowSelect",value:function(e){}},{key:"reloadData",value:function(e){e instanceof T.UA||this.loadData({first:0,rows:this.rows})}}]),n}(m.K);return t.\u0275fac=function(e){return new(e||t)(p.Y36(h.Kf),p.Y36(d.O),p.Y36(v.L),p.Y36(O.dD),p.Y36(_.e),p.Y36(L.h),p.Y36(c.gz))},t.\u0275cmp=p.Xpm({type:t,selectors:[["translation"]],features:[p.qOj],decls:2,vars:21,consts:[[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","styleClass","wrapper","columns","actions","groupActions","lazy","caption","paginator","rows","totalRecords","loading","selectionMode","globalFilterFields","selectedData","onLazyLoad","onRowSelect"]],template:function(e,t){1&e&&(p.TgZ(0,"wl-form",0),p.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),p.qZA(),p.TgZ(1,"wl-table",1),p.NdJ("onLazyLoad",function(e){return t.loadData(e)})("onRowSelect",function(e){return t.onRowSelect(e)}),p.qZA()),2&e&&(p.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options),p.xp6(1),p.Udp("margin-top","1rem"),p.Q6J("data",t.data)("styleClass","p-datatable-gridlines p-datatable-sm")("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("groupActions",t.groupActions)("lazy",!0)("caption","Translation")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("selectionMode","multiple")("globalFilterFields",t.globalFilterFields)("selectedData",t.tableSelectedData))},directives:[w.U,k.a],styles:[""]}),t}(),R=[{path:"lang",component:A,data:{title:"MENU_LABEL.Lang",breadcrumb:"MENU_LABEL.Lang"}},{path:"translation",data:{title:"MENU_LABEL.Translation",breadcrumb:"MENU_LABEL.Translation"},children:[{path:"",component:C},{path:":lang_code",component:C,resolve:{title:f,breadcrumb:f}}]}],x=function(){var e=r(function e(){l(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[c.Bz.forChild(R)],c.Bz]}),e}(),M=n(97234),N=((i=r(function e(){l(this,e)})).\u0275fac=function(e){return new(e||i)},i.\u0275mod=p.oAB({type:i}),i.\u0275inj=p.cJS({providers:[d.O,f,{provide:T.TP,useClass:M.s,multi:!0}],imports:[[s.ez,x,w.e,k.n]]}),i)}}])}();