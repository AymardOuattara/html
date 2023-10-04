(self.webpackChunkwil_admin_angular=self.webpackChunkwil_admin_angular||[]).push([[501],{87501:function(e,t,a){"use strict";a.r(t),a.d(t,{CheckoutFormModule:function(){return A}});var i=a(38583),l=a(3679),o=a(977),n=a(65461),r=a(66782),s=a(98542),d=a(95987),p=a(99688),m=a(37716),c=a(44212),u=a(18859),f=a(52121),b=a(68058),h=a(4768),g=a(28723);let _=(()=>{class e extends p.K{constructor(e,t,a,i,l,o){super(e,t,a,i,l,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=l,this.menuService=o}ngOnInit(){this.isSpinning=!1,this.globalFilterFields=["id"],this.columns=[{field:"id",header:"ID"},{field:"status",header:"STATUS",type:"status"},{field:"created_at",header:"CREATED_AT",type:"date"},{field:"updated_at",header:"UPDATED_AT",type:"date"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.form.model=Object.assign({},e)}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:e=>{this.delete(e,"checkout-form")},cancel:e=>{}}]}save(e){this.logger.log("model: ",e.model);let t=Object.assign({},e.model);t=Object.assign(Object.assign({},t),t.id&&null!=t.id?{updated_user:this.user.id}:{added_user:this.user.id})}loadData(e){console.log(e),setTimeout(()=>{this.loading=!0},1e3)}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(c.Kf),m.Y36(u.O),m.Y36(f.L),m.Y36(b.dD),m.Y36(h.e),m.Y36(g.h))},e.\u0275cmp=m.Xpm({type:e,selectors:[["checkout-form"]],features:[m.qOj],decls:3,vars:18,consts:[["nzTip","Loading...",3,"nzSpinning"],[3,"alert","model","fields","options","onSubmit","onModelChange"],[3,"data","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"]],template:function(e,t){1&e&&(m.TgZ(0,"nz-spin",0),m.TgZ(1,"wl-form",1),m.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),m.qZA(),m.qZA(),m.TgZ(2,"wl-table",2),m.NdJ("onLazyLoad",function(e){return t.loadData(e)}),m.qZA()),2&e&&(m.Q6J("nzSpinning",t.isSpinning),m.xp6(1),m.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options),m.xp6(1),m.Udp("margin-top","1rem"),m.Q6J("data",t.data)("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","CheckoutForm ")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[r.W,n.U,o.a],styles:[""]}),e})();var y=a(42394),O=a(91841);function v(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"wl-form",3),m.NdJ("onSubmit",function(t){return m.CHM(e),m.oxw().save(t)})("onModelChange",function(t){return m.CHM(e),m.oxw().modelChange(t)}),m.qZA()}if(2&e){const e=m.oxw();m.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}function x(e,t){if(1&e){const e=m.EpF();m.TgZ(0,"wl-form",3),m.NdJ("onSubmit",function(t){return m.CHM(e),m.oxw().save(t)})("onModelChange",function(t){return m.CHM(e),m.oxw().modelChange(t)}),m.qZA()}if(2&e){const e=m.oxw();m.Q6J("alert",e.alert)("model",e.form.model)("fields",e.form.fields)("options",e.form.options)}}const N=[{path:"",component:_,data:{title:"CheckoutForm",breadcrumb:"CheckoutForm"}},{path:"checkout-form",component:_,data:{title:"CheckoutForm",breadcrumb:"CheckoutForm"}},{path:"checkout-form-create",component:(()=>{class e extends p.K{constructor(e,t,a,i,l,o){super(e,t,a,i,l,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=l,this.menuService=o,this.model={configs:[{}]},this.options={},this.fields=[{template:"<center><p>Veuillez renseigner les informations relatives au ben\xe9ficiaire de la demande.</p></center>"},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-3",key:"code_bon_vert",type:"input",templateOptions:{label:"Numero de bon",readonly:!0}},{className:"flex-3",key:"date_demande",type:"input",templateOptions:{label:"Date",type:"date"}}]},{wrappers:["fieldset-wrapper"],templateOptions:{label:"Demandeur : "+this.user.NOM_AGENT+" "+this.user.PNOM_AGENT},fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-5",key:"fonction_responsable",type:"input",templateOptions:{label:"Fonction du demandeur",readonly:!0,defaultValue:this.user.fonction.LIB_FONCT,required:!0}},{className:"flex-5",key:"matricule_demandeur",type:"input",templateOptions:{label:"Matricule"}},{className:"flex-5",key:"objet_demande",type:"select",templateOptions:{label:"Objet de la demande",required:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-5",key:"montant_bon_vert",type:"input",templateOptions:{label:"Valeur du bon",required:!0}},{className:"flex-10",key:"description_demande",type:"textarea",templateOptions:{label:"Description",placeholder:"Veuillez d\xe9crire le motif de votre demande",required:!0}},{}]},{template:"<br>"},{fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"B\xe9n\xe9ficiaire"},fieldGroup:[{className:"flex-2",key:"nom_beneficiaire",type:"input",templateOptions:{label:"Nom du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"prenom_beneficiaire",type:"input",templateOptions:{label:"Prenom du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"fonction_beneficiaire",type:"input",templateOptions:{label:"Fonction du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"matricule_beneficiaire",type:"input",templateOptions:{label:"Matricule du b\xe9n\xe9ficiaire"}},{className:"flex-10",key:"add_mandataire",type:"checkbox",templateOptions:{label:"Voulez vous attribuer un mandataire ?",click:e=>{e.form.get("add_mandataire").setValue(1)}}},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",hide:!0,templateOptions:{label:"Mandataire"},expressionProperties:{hide:"!model.add_mandataire"},fieldGroup:[{className:"flex-2",key:"nom_mandataire",type:"input",templateOptions:{label:"Nom du mandataire"}},{className:"flex-2",key:"prenom_mandataire",type:"input",templateOptions:{label:"Prenom du mandataire"}},{className:"flex-2",key:"fonction_mandataire",type:"input",templateOptions:{label:"fonction du mandataire"}},{className:"flex-2",key:"matricule_mandataire",type:"input",templateOptions:{label:"Matricule du mandataire"}}]},{className:"flex-8",key:"file_line",type:"file-upload",templateOptions:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",translate:!0,label:"Fichier justificatif de la date",handleUpload:(e,t)=>{const a=t[0],i=new FileReader;function l(t,a){return Object.keys(t).map(i=>"object"==typeof t[i]?l(t[i],i):{key:a?a+"."+i:i,value:t[i],lang_code:e.model.lang_code,status:!0})}i.readAsText(a,"UTF-8"),i.onload=function(t){const a=JSON.parse(t.target.result);console.log(a),y._.mapKeys(a,function(e,t){return{key:t,value:e}});const i=y._.flattenDeep(l(a));console.log(i),e.formControl.setValue(i),e.options.formState.enableSubmitBtn=!0},i.onerror=e=>{console.log(e)}}}}]},{template:"<br>"},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",templateOptions:{label:"Centre d'imputation de la demande"},fieldGroup:[{className:"flex-3",key:"centre_imputation",type:"select",defaultValue:this.user.CODE_SERV,templateOptions:{label:"Centre",required:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-3",key:"activite",type:"select",templateOptions:{translate:!0,required:!0,showSearch:!0,allowClear:!0,label:"Activit\xe9",options:[]}},{className:"flex-3",key:"nature",type:"input",templateOptions:{label:"Nature",required:!0}}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{fieldGroup:[{key:"submit",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Soumettre",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid}},{type:"button",templateOptions:{label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.form.get("nomDemandeur").setValue(null),e.form.get("prenomDemandeur").setValue(null),e.form.get("fonctionDemandeur").setValue(null),e.form.get("matriculeDemandeur").setValue(null)}},expressionProperties:{hide:()=>"COMPTABILITE"===this.user.profil.code}}]}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{key:"submitDAF",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Valider demande",translate:!0,loading:!1,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)}),e.form.get("submitDAF").setValue(!0)}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{key:"refuserDAF",className:"flex-1",type:"button",templateOptions:{label:"Rejeter demande",bgColor:"#000",textColor:"#fff",click:e=>e.form.get("refuserDAF").setValue(!0)},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{className:"flex-10",key:"motifRejet",type:"textarea",templateOptions:{label:"Veuillez indiquer le motif de votre refus"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"submitMotif",type:"button",templateOptions:{label:"Soumettre",colorType:"primary"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"annulerRefus",type:"button",templateOptions:{colorType:"primary",bgColor:"#000",textColor:"#fff",label:"Annuler r\xe9fus",click:e=>e.form.get("refuserDAF").setValue(null)},expressionProperties:{hide:"!model.refuserDAF"}}]}],this.user=this.authService.getUserInfos()}ngOnInit(){this.form.model=this.model,this.form.options=this.options,this.form.fields=this.fields,this.isSpinning=!1,this.getDataBvert(`${y.VR}/motif/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.lib_motif,value:null==e?void 0:e.code_motif})),this.fields[2].fieldGroup[2].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/centre_imputation/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.libelle,value:null==e?void 0:e.code_centre_imputation})),console.log(t),console.log("this.fields[6]"),this.fields[6].fieldGroup[0].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/activite/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.labelle,value:null==e?void 0:e.code_activite})),console.log(t),this.fields[6].fieldGroup[1].templateOptions.options=t}})}save(e){let t={pagent:this.user.CODE_AGENT,description_demande:e.model.description_demande,nom_beneficiaire:e.model.nom_beneficiaire,prenom_beneficiaire:e.model.prenom_beneficiaire,matricule_beneficiaire:e.model.matricule_beneficiaire,fonction_beneficiaire:e.model.fonction_beneficiaire,nom_mandataire:e.model.nom_mandataire,prenom_mandataire:e.model.prenom_mandataire,matricule_mandataire:e.model.matricule_mandataire,fonction_mandataire:e.model.fonction_mandataire,pmotif:e.model.objet_demande,centre_imputation:e.model.centre_imputation,activite:e.model.activite,nature:e.model.nature,montant_bon_vert:e.model.montant_bon_vert,flag_soumis:1,flag_valid:0};this.logger.log("model: ",e.model);let a=Object.assign({},e.model);a.code_bon_vert&&null!=a.code_bon_vert||this.postDataBvert(`${y.VR}/bonvert/`,t)}loadData(e){console.log(e),setTimeout(()=>{this.loading=!0},1e3)}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(c.Kf),m.Y36(u.O),m.Y36(f.L),m.Y36(b.dD),m.Y36(h.e),m.Y36(g.h))},e.\u0275cmp=m.Xpm({type:e,selectors:[["checkout-form-create"]],features:[m.qOj],decls:3,vars:5,consts:[["nzTip","Loading...",3,"nzSpinning"],[3,"alert","model","fields","options","onSubmit","onModelChange"]],template:function(e,t){1&e&&(m.TgZ(0,"nz-spin",0),m.TgZ(1,"wl-form",1),m.NdJ("onSubmit",function(e){return t.save(e)})("onModelChange",function(e){return t.modelChange(e)}),m.qZA(),m.qZA(),m._uU(2,"zz")),2&e&&(m.Q6J("nzSpinning",t.isSpinning),m.xp6(1),m.Q6J("alert",t.alert)("model",t.form.model)("fields",t.form.fields)("options",t.form.options))},directives:[r.W,n.U],styles:[""]}),e})(),data:{title:"CheckoutFormCreate",breadcrumb:"CheckoutFormCreate"}},{path:"checkout-form-list",component:(()=>{class e extends p.K{constructor(e,t,a,i,l,o,n,r){super(e,t,a,i,l,o,n),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=l,this.menuService=o,this.modal=n,this.changeDetectorRef=r,this.isVisible=!1,this.modalTitle="Mise \xe0 jour",this.model={configs:[{}]},this.options={},this.fields=[{template:"<center><p>Veuillez renseigner les informations relatives au ben\xe9ficiaire de la demande.</p></center>"},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-3",key:"code_bon_vert",type:"input",templateOptions:{label:"Numero de bon",readonly:!0}},{className:"flex-3",key:"date_demande",type:"input",templateOptions:{label:"Date",type:"date"}}]},{wrappers:["fieldset-wrapper"],templateOptions:{label:"Demandeur : "+this.user.NOM_AGENT+" "+this.user.PNOM_AGENT},fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-5",key:"lib_fonct",type:"input",templateOptions:{label:"Fonction du demandeur",readonly:!0,defaultValue:this.user.fonction.LIB_FONCT,required:!0}},{className:"flex-5",key:"matricule_demandeur",type:"input",templateOptions:{label:"Matricule"}},{className:"flex-5",key:"objet_demande",type:"select",defaultValue:"",templateOptions:{label:"Objet de la demande",required:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-5",key:"montant_bon_vert",type:"input",templateOptions:{label:"Valeur du bon",required:!0}},{className:"flex-10",key:"description_demande",type:"textarea",templateOptions:{label:"Description",placeholder:"Veuillez d\xe9crire le motif de votre demande",required:!0}},{}]},{template:"<br>"},{fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"B\xe9n\xe9ficiaire"},fieldGroup:[{className:"flex-2",key:"nom_beneficiaire",type:"input",templateOptions:{label:"Nom du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"prenom_beneficiaire",type:"input",templateOptions:{label:"Prenom du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"fonction_beneficiaire",type:"input",templateOptions:{label:"Fonction du b\xe9n\xe9ficiaire",required:!0}},{className:"flex-2",key:"matricule_beneficiaire",type:"input",templateOptions:{label:"Matricule du b\xe9n\xe9ficiaire"}},{className:"flex-10",key:"add_mandataire",type:"checkbox",templateOptions:{label:"Voulez vous attribuer un mandataire ?",click:e=>{e.form.get("add_mandataire").setValue(1)}}},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",hide:!0,templateOptions:{label:"Mandataire"},expressionProperties:{hide:"!model.add_mandataire"},fieldGroup:[{className:"flex-2",key:"nom_mandataire",type:"input",templateOptions:{label:"Nom du mandataire"}},{className:"flex-2",key:"prenom_mandataire",type:"input",templateOptions:{label:"Prenom du mandataire"}},{className:"flex-2",key:"fonction_mandataire",type:"input",templateOptions:{label:"fonction du mandataire"}},{className:"flex-2",key:"matricule_mandataire",type:"input",templateOptions:{label:"Matricule du mandataire"}}]},{className:"flex-8",key:"file_line",type:"file-upload",templateOptions:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",translate:!0,label:"Fichier justificatif de la date",handleUpload:(e,t)=>{const a=t[0],i=new FileReader;function l(t,a){return Object.keys(t).map(i=>"object"==typeof t[i]?l(t[i],i):{key:a?a+"."+i:i,value:t[i],lang_code:e.model.lang_code,status:!0})}i.readAsText(a,"UTF-8"),i.onload=function(t){const a=JSON.parse(t.target.result);console.log(a),y._.mapKeys(a,function(e,t){return{key:t,value:e}});const i=y._.flattenDeep(l(a));console.log(i),e.formControl.setValue(i),e.options.formState.enableSubmitBtn=!0},i.onerror=e=>{console.log(e)}}}}]},{template:"<br>"},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",templateOptions:{label:"Centre d'imputation de la demande"},fieldGroup:[{className:"flex-3",key:"centre",type:"select",defaultValue:"",templateOptions:{label:"centre_imputation",required:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-3",key:"activitee",type:"select",defaultValue:"",templateOptions:{label:"Activit\xe9",required:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-3",key:"nature",type:"input",templateOptions:{label:"Nature",required:!0}}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{fieldGroup:[{key:"submit",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Mettre \xe0 jour",translate:!0,loading:!1,disabled:!0,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid,hide:(e,t,a)=>1==e.flag_valid}},{type:"button",templateOptions:{label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.form.get("nomDemandeur").setValue(null),e.form.get("prenomDemandeur").setValue(null),e.form.get("fonctionDemandeur").setValue(null),e.form.get("matriculeDemandeur").setValue(null)}},expressionProperties:{hide:(e,t,a)=>1==e.flag_valid}}]}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{key:"submitDAF",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Valider demande",translate:!0,loading:!1,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)}),e.form.get("submitDAF").setValue(!0)}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{key:"refuserDAF",className:"flex-1",type:"button",templateOptions:{label:"Rejeter demande",bgColor:"#000",textColor:"#fff",click:e=>e.form.get("refuserDAF").setValue(!0)},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{className:"flex-10",key:"motifRejet",type:"textarea",templateOptions:{label:"Veuillez indiquer le motif de votre refus"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"submitMotif",type:"button",templateOptions:{label:"Soumettre",colorType:"primary"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"annulerRefus",type:"button",templateOptions:{colorType:"primary",bgColor:"#000",textColor:"#fff",label:"Annuler r\xe9fus",click:e=>e.form.get("refuserDAF").setValue(null)},expressionProperties:{hide:"!model.refuserDAF"}}]}],this.user=this.authService.getUserInfos()}ngOnInit(){this.form.model=this.model,this.form.options=this.options,this.form.fields=this.fields,this.isSpinning=!1,this.getDataBvert(`${y.VR}/motif/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.lib_motif,value:null==e?void 0:e.code_motif})),this.fields[2].fieldGroup[2].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/centre_imputation/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.libelle,value:null==e?void 0:e.code_centre_imputation})),console.log(t),console.log("this.fields[6]"),this.fields[6].fieldGroup[0].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/activite/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.labelle,value:null==e?void 0:e.code_activite})),console.log("this.fields[6].fieldGroup[1]"),console.log(this.fields[6].fieldGroup[1]),this.fields[6].fieldGroup[1].templateOptions.options=t}}),this.globalFilterFields=["code_bon_vert"],this.columns=[{field:"code_bon_vert",header:"CODE BON VERT"},{field:"service",header:"SERVICE"},{field:"pagent",header:"NOM & PRENOM DEMANDEUR"},{field:"lib_fonct",header:"FONCTION DEMANDEUR"},{field:"nom",header:"NOM & PRENOM BENEFICIAIRE"},{field:"fonction_beneficiaire",header:"FONCTION BENEFICIAIRE"},{field:"matricule_beneficiaire",header:"MATRICULE BENEFICIAIRE"},{field:"objet_demand",header:"MOTIF"},{field:"status",header:"VALID\xe9",type:"status",falseText:"NON",trueText:"OUI"},{field:"montant_bon_vert",header:"MONTANT"},{field:"date_demande",header:"CREATED_AT",type:"date"},{field:"updated_at",header:"UPDATED_AT",type:"date"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.logger.log(e),this.isVisible=!0,this.form.model=Object.assign({},e),setTimeout(()=>{this.form.model=Object.assign({},e)},1),this.form.fields[2].fieldGroup[2].defaultValue=e.pmotif.code_motif,this.form.fields[6].fieldGroup[0].defaultValue=e.centre_imputation.code_centre_imputation,this.form.fields[6].fieldGroup[1].defaultValue=e.activite.code_activite}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:e=>{this.delete(e,"checkout-form-list")},cancel:e=>{}}]}save(e){this.logger.log("model: ",e.model);let t=Object.assign({},e.model);if(t.code_bon_vert&&null!=t.code_bon_vert){const a=t.code_bon_vert;t=y._.omit(t,["code_bon_vert"]),this.putDataBvert(`${y.VR}/bonvert/${a}`,{pagent:this.user.CODE_AGENT,description_demande:e.model.description_demande,nom_beneficiaire:e.model.nom_beneficiaire,prenom_beneficiaire:e.model.prenom_beneficiaire,matricule_beneficiaire:e.model.matricule_beneficiaire,fonction_beneficiaire:e.model.fonction_beneficiaire,nom_mandataire:e.model.nom_mandataire,prenom_mandataire:e.model.prenom_mandataire,matricule_mandataire:e.model.matricule_mandataire,fonction_mandataire:e.model.fonction_mandataire,pmotif:e.model.objet_demande,centre_imputation:e.model.centre,activite:e.model.activitee,nature:e.model.nature,montant_bon_vert:e.model.montant_bon_vert,flag_soumis:1,flag_valid:0},e=>{e instanceof O.UA||this.handleCancel()})}else t=Object.assign(Object.assign({},t),{added_user:this.user.id})}handleCancel(){this.isVisible=!1}loadData(e){this.loading=!0;const t=null!=e.globalFilter?`&search=${e.globalFilter}`:"",a=this.user.CODE_AGENT;setTimeout(()=>{this.getDataBvert(`${y.VR}/bonvert/demandeur/${a}?page=${e.first/e.rows+1}&per_page=${e.rows}${t}`,e=>{if(!(e instanceof O.UA)){let t=e.body.data;t=t.map(e=>Object.assign(Object.assign({},e),{objet_demand:null==e?void 0:e.pmotif.lib_motif,nom:(null==e?void 0:e.nom_beneficiaire)+" "+(null==e?void 0:e.prenom_beneficiaire),pagent:(null==e?void 0:e.pagent.nom_agent)+" "+(null==e?void 0:e.pagent.pnom_agent),service:null==e?void 0:e.pagent.code_serv.lib_serv,lib_fonct:null==e?void 0:e.pagent.code_fonct.lib_fonct,status:1==e.flag_valid})),this.data=t}})},1)}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(c.Kf),m.Y36(u.O),m.Y36(f.L),m.Y36(b.dD),m.Y36(h.e),m.Y36(g.h),m.Y36(s.Sf),m.Y36(m.sBO))},e.\u0275cmp=m.Xpm({type:e,selectors:[["checkout-form-list"]],features:[m.qOj],decls:3,vars:16,consts:[["nzWidth","920px",3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[3,"alert","model","fields","options","onSubmit","onModelChange",4,"nzModalContent"],[3,"data","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"],[3,"alert","model","fields","options","onSubmit","onModelChange"]],template:function(e,t){1&e&&(m.TgZ(0,"nz-modal",0),m.NdJ("nzVisibleChange",function(e){return t.isVisible=e})("nzOnCancel",function(){return t.handleCancel()}),m.YNc(1,v,1,4,"wl-form",1),m.qZA(),m.TgZ(2,"wl-table",2),m.NdJ("onLazyLoad",function(e){return t.loadData(e)}),m.qZA()),2&e&&(m.Q6J("nzVisible",t.isVisible)("nzTitle",t.modalTitle)("nzFooter",null),m.xp6(2),m.Udp("margin-top","1rem"),m.Q6J("data",t.data)("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","CheckoutFormList ")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[s.du,s.Hf,o.a,n.U],styles:[""]}),e})(),data:{title:"CheckoutFormList",breadcrumb:"CheckoutFormList"}},{path:"checkout-form-validation",component:(()=>{class e extends p.K{constructor(e,t,a,i,l,o,n){super(e,t,a,i,l,o),this.logger=e,this.httpService=t,this.envService=a,this.messageService=i,this.authService=l,this.menuService=o,this.changeDetectorRef=n,this.isVisible=!1,this.modalTitle="Mise \xe0 jour",this.model={configs:[{}]},this.options={},this.fields=[{template:"<center><p>Veuillez renseigner les informations relatives au ben\xe9ficiaire de la demande.</p></center>"},{fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-3",key:"code_bon_vert",type:"input",templateOptions:{label:"Numero de bon",readonly:!0}},{className:"flex-3",key:"date_demande",type:"input",templateOptions:{label:"Date",type:"date"}}]},{wrappers:["fieldset-wrapper"],templateOptions:{label:"Demandeur : "+this.user.NOM_AGENT+" "+this.user.PNOM_AGENT},fieldGroupClassName:"d-flex flex-wrap",fieldGroup:[{className:"flex-5",key:"lib_fonct",type:"input",templateOptions:{label:"Fonction du demandeur",readonly:!0,defaultValue:this.user.fonction.LIB_FONCT,required:!0}},{className:"flex-5",key:"matricule_demandeur",type:"input",templateOptions:{label:"Matricule",readonly:!0}},{className:"flex-5",key:"objet_demande",type:"select",defaultValue:"",templateOptions:{label:"Objet de la demande",required:!0,readonly:!0,translate:!0,showSearch:!0,allowClear:!0,options:[]}},{className:"flex-5",key:"montant_bon_vert",type:"input",templateOptions:{label:"Valeur du bon",required:!0,readonly:!0}},{className:"flex-10",key:"description_demande",type:"textarea",templateOptions:{label:"Description",placeholder:"Veuillez d\xe9crire le motif de votre demande",required:!0,readonly:!0}},{}]},{template:"<br>"},{fieldGroupClassName:"d-flex flex-wrap",wrappers:["fieldset-wrapper"],templateOptions:{label:"B\xe9n\xe9ficiaire"},fieldGroup:[{className:"flex-2",key:"nom_beneficiaire",type:"input",templateOptions:{label:"Nom du b\xe9n\xe9ficiaire",required:!0,readonly:!0}},{className:"flex-2",key:"prenom_beneficiaire",type:"input",templateOptions:{label:"Prenom du b\xe9n\xe9ficiaire",required:!0,readonly:!0}},{className:"flex-2",key:"fonction_beneficiaire",type:"input",templateOptions:{label:"Fonction du b\xe9n\xe9ficiaire",required:!0,readonly:!0}},{className:"flex-2",key:"matricule_beneficiaire",type:"input",templateOptions:{label:"Matricule du b\xe9n\xe9ficiaire",readonly:!0}},{className:"flex-10",key:"add_mandataire",type:"checkbox",templateOptions:{readonly:!0,label:"Voulez vous attribuer un mandataire ?",click:e=>{e.form.get("add_mandataire").setValue(1)}}},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",hide:!0,templateOptions:{readonly:!0,label:"Mandataire"},expressionProperties:{hide:"!model.add_mandataire"},fieldGroup:[{className:"flex-2",key:"nom_mandataire",type:"input",templateOptions:{readonly:!0,label:"Nom du mandataire"}},{className:"flex-2",key:"prenom_mandataire",type:"input",templateOptions:{readonly:!0,label:"Prenom du mandataire"}},{className:"flex-2",key:"fonction_mandataire",type:"input",templateOptions:{readonly:!0,label:"fonction du mandataire"}},{className:"flex-2",key:"matricule_mandataire",type:"input",templateOptions:{readonly:!0,label:"Matricule du mandataire"}}]},{className:"flex-8",key:"file_line",type:"file-upload",templateOptions:{accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",fileType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",translate:!0,label:"Fichier justificatif de la date",handleUpload:(e,t)=>{const a=t[0],i=new FileReader;function l(t,a){return Object.keys(t).map(i=>"object"==typeof t[i]?l(t[i],i):{key:a?a+"."+i:i,value:t[i],lang_code:e.model.lang_code,status:!0})}i.readAsText(a,"UTF-8"),i.onload=function(t){const a=JSON.parse(t.target.result);console.log(a),y._.mapKeys(a,function(e,t){return{key:t,value:e}});const i=y._.flattenDeep(l(a));console.log(i),e.formControl.setValue(i),e.options.formState.enableSubmitBtn=!0},i.onerror=e=>{console.log(e)}}}}]},{template:"<br>"},{wrappers:["fieldset-wrapper"],fieldGroupClassName:"d-flex flex-wrap",templateOptions:{label:"Centre d'imputation de la demande"},fieldGroup:[{className:"flex-3",key:"centre",type:"select",defaultValue:"",templateOptions:{required:!0,readonly:!0,translate:!0,showSearch:!0,allowClear:!0,label:"Centre",options:[]}},{className:"flex-3",key:"activitee",type:"select",defaultValue:"",templateOptions:{required:!0,readonly:!0,translate:!0,showSearch:!0,allowClear:!0,label:"Activit\xe9",options:[]}},{className:"flex-3",key:"nature",type:"input",templateOptions:{label:"Nature",readonly:!0,required:!0}}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{fieldGroup:[{key:"submit",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Valider",translate:!0,loading:!1,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)})}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.valid,hide:()=>"COMPTABILITE"===this.user.profil.code}},{type:"button",templateOptions:{label:"R\xe9initialiser",bgColor:"#000",textColor:"#fff",click:e=>{e.form.get("nomDemandeur").setValue(null),e.form.get("prenomDemandeur").setValue(null),e.form.get("fonctionDemandeur").setValue(null),e.form.get("matriculeDemandeur").setValue(null)}},expressionProperties:{hide:()=>"COMPTABILITE"===this.user.profil.code}}]}]},{fieldGroupClassName:"action-bloc",fieldGroup:[{key:"submitDAF",className:"flex-1",type:"button",templateOptions:{type:"submit",label:"Valider demande",translate:!0,loading:!1,colorType:"primary",click:e=>{e.templateOptions.loading=!0,e.form.statusChanges.subscribe(t=>{e.templateOptions.loading&&(e.templateOptions.loading=!1)}),e.form.get("submitDAF").setValue(!0)}},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{key:"refuserDAF",className:"flex-1",type:"button",templateOptions:{label:"Rejeter demande",bgColor:"#000",textColor:"#fff",click:e=>e.form.get("refuserDAF").setValue(!0)},expressionProperties:{"templateOptions.disabled":(e,t,a)=>!a.form.get("refuserDAF")||!a.form.get("submitDAF")||!a.form.valid,hide:()=>"COMPTABILITE"!=this.user.profil.code}},{className:"flex-10",key:"motifRejet",type:"textarea",templateOptions:{label:"Veuillez indiquer le motif de votre refus"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"submitMotif",type:"button",templateOptions:{label:"Soumettre",colorType:"primary"},expressionProperties:{hide:"!model.refuserDAF"}},{className:"flex-1",key:"annulerRefus",type:"button",templateOptions:{colorType:"primary",bgColor:"#000",textColor:"#fff",label:"Annuler r\xe9fus",click:e=>e.form.get("refuserDAF").setValue(null)},expressionProperties:{hide:"!model.refuserDAF"}}]}]}ngOnInit(){this.form.model=this.model,this.form.options=this.options,this.form.fields=this.fields,this.isSpinning=!1,this.getDataBvert(`${y.VR}/motif/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.lib_motif,value:null==e?void 0:e.code_motif})),this.fields[2].fieldGroup[2].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/centre_imputation/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.libelle,value:null==e?void 0:e.code_centre_imputation})),console.log(t),console.log("this.fields[6]"),this.fields[6].fieldGroup[0].templateOptions.options=t}}),this.getDataBvert(`${y.VR}/activite/`,e=>{if(!(e instanceof O.UA)){let t=e.body.rows;t=t.map(e=>({label:null==e?void 0:e.labelle,value:null==e?void 0:e.code_activite})),this.fields[6].fieldGroup[1].templateOptions.options=t}}),this.globalFilterFields=["code_bon_vert"],this.columns=[{field:"code_bon_vert",header:"CODE BON VERT"},{field:"service",header:"SERVICE"},{field:"pagent",header:"NOM & PRENOM DEMANDEUR"},{field:"lib_fonct",header:"FONCTION DEMANDEUR"},{field:"nom",header:"NOM & PRENOM BENEFICIAIRE"},{field:"fonction_beneficiaire",header:"FONCTION BENEFICIAIRE"},{field:"matricule_beneficiaire",header:"MATRICULE BENEFICIAIRE"},{field:"objet_demand",header:"MOTIF"},{field:"status",header:"VALID\xe9",type:"status",falseText:"NON",trueText:"OUI"},{field:"montant_bon_vert",header:"MONTANT"},{field:"date_demande",header:"CREATED_AT",type:"date"},{field:"updated_at",header:"UPDATED_AT",type:"date"}],this.actions=[{type:"default",icon:"edit",shape:"circle",loading:!1,click:e=>{this.edit(e),this.logger.log(e),this.isVisible=!0,this.form.model=Object.assign({},e),setTimeout(()=>{this.form.model=Object.assign({},e),this.changeDetectorRef.detectChanges()},1),console.log("this.form.model"),console.log(this.form.model),console.log("event"),console.log(e),this.form.fields[2].fieldGroup[2].defaultValue=e.pmotif.code_motif,this.form.fields[6].fieldGroup[0].defaultValue=e.centre_imputation.code_centre_imputation,this.form.fields[6].fieldGroup[1].defaultValue=e.activite.code_activite}},{type:"default",icon:"delete",shape:"circle",popConfirm:!0,popTitle:"Are-you sure ?",loading:!1,click:e=>{this.delete(e,"checkout-form-list")},cancel:e=>{}}]}save(e){this.logger.log("model: ",e.model);let t=Object.assign({},e.model);if(t.code_bon_vert&&null!=t.code_bon_vert){const a=t.code_bon_vert;t=y._.omit(t,["code_bon_vert"]),this.putDataBvert(`${y.VR}/bonvert/${a}`,{agent_valid:this.user.CODE_AGENT,description_demande:e.model.description_demande,nom_beneficiaire:e.model.nom_beneficiaire,prenom_beneficiaire:e.model.prenom_beneficiaire,matricule_beneficiaire:e.model.matricule_beneficiaire,fonction_beneficiaire:e.model.fonction_beneficiaire,nom_mandataire:e.model.nom_mandataire,prenom_mandataire:e.model.prenom_mandataire,matricule_mandataire:e.model.matricule_mandataire,fonction_mandataire:e.model.fonction_mandataire,pmotif:e.model.objet_demande,centre_imputation:e.model.centre,activite:e.model.activitee,nature:e.model.nature,montant_bon_vert:e.model.montant_bon_vert,flag_soumis:1,flag_valid:1},e=>{e instanceof O.UA||this.handleCancel()})}else t=Object.assign(Object.assign({},t),{added_user:this.user.id})}loadData1(e){console.log(e),setTimeout(()=>{this.loading=!0},1e3)}handleCancel(){this.isVisible=!1}loadData(e){this.loading=!0;const t=null!=e.globalFilter?`&search=${e.globalFilter}`:"";setTimeout(()=>{this.getDataBvert(`${y.VR}/bonvert/?flag_valid=0&page=${e.first/e.rows+1}&per_page=${e.rows}${t}`,e=>{if(!(e instanceof O.UA)){let t=e.body.data;t=t.map(e=>Object.assign(Object.assign({},e),{objet_demand:null==e?void 0:e.pmotif.lib_motif,nom:(null==e?void 0:e.nom_beneficiaire)+" "+(null==e?void 0:e.prenom_beneficiaire),pagent:(null==e?void 0:e.pagent.nom_agent)+" "+(null==e?void 0:e.pagent.pnom_agent),service:null==e?void 0:e.pagent.code_serv.lib_serv,lib_fonct:null==e?void 0:e.pagent.code_fonct.lib_fonct,status:1==e.flag_valid})),this.data=t}})},1)}}return e.\u0275fac=function(t){return new(t||e)(m.Y36(c.Kf),m.Y36(u.O),m.Y36(f.L),m.Y36(b.dD),m.Y36(h.e),m.Y36(g.h),m.Y36(m.sBO))},e.\u0275cmp=m.Xpm({type:e,selectors:[["checkout-form-validation"]],features:[m.qOj],decls:3,vars:16,consts:[["nzWidth","920px",3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[3,"alert","model","fields","options","onSubmit","onModelChange",4,"nzModalContent"],[3,"data","wrapper","columns","actions","lazy","caption","paginator","rows","totalRecords","loading","globalFilterFields","onLazyLoad"],[3,"alert","model","fields","options","onSubmit","onModelChange"]],template:function(e,t){1&e&&(m.TgZ(0,"nz-modal",0),m.NdJ("nzVisibleChange",function(e){return t.isVisible=e})("nzOnCancel",function(){return t.handleCancel()}),m.YNc(1,x,1,4,"wl-form",1),m.qZA(),m.TgZ(2,"wl-table",2),m.NdJ("onLazyLoad",function(e){return t.loadData(e)}),m.qZA()),2&e&&(m.Q6J("nzVisible",t.isVisible)("nzTitle",t.modalTitle)("nzFooter",null),m.xp6(2),m.Udp("margin-top","1rem"),m.Q6J("data",t.data)("wrapper","fieldset")("columns",t.columns)("actions",t.actions)("lazy",!0)("caption","CheckoutFormList ")("paginator",!0)("rows",t.rows)("totalRecords",t.totalRecords)("loading",t.loading)("globalFilterFields",t.globalFilterFields))},directives:[s.du,s.Hf,o.a,n.U],styles:[""]}),e})(),data:{title:"CheckoutFormValidation",breadcrumb:"CheckoutFormValidation"}}];let C=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[d.Bz.forChild(N)],d.Bz]}),e})();var k=a(73500);let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[i.ez,l.u5,l.UX,o.n,n.e,r.j,k.X0,C,s.Qp]]}),e})()}}]);