webpackJsonp([2],{"/AGO":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"8cMc":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{on:{submit:function(e){e.preventDefault(),t.register(e)},keydown:function(e){t.form.onKeydown(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("has-error",{attrs:{form:t.form,field:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("name"),rules:t.nameRules,counter:70,"prepend-icon":"person",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("email"),rules:t.emailRules,counter:70,"prepend-icon":"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("password"),rules:t.passwordRules,"prepend-icon":"vpn_key",type:"password",counter:160,required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password_confirmation"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("confirm_password"),rules:t.passwordRules,"prepend-icon":"vpn_key",type:"password",counter:160,required:""},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}}),t._v(" "),n("v-btn",{attrs:{large:"",block:"",loading:t.form.busy,type:"submit"}},[t._v(t._s(t.$t("register")))])],1)},staticRenderFns:[]}},CZJI:function(t,e,n){var r=n("VU/8")(n("eRqN"),n("tZKb"),!1,function(t){n("bpwm")},"data-v-b61aa252",null);t.exports=r.exports},CqnA:function(t,e,n){var r=n("VU/8")(n("ZwjU"),n("X44Q"),!1,null,null,null);t.exports=r.exports},GAhV:function(t,e,n){var r=n("VU/8")(n("SfgA"),n("8cMc"),!1,null,null,null);t.exports=r.exports},Lbnw:function(t,e,n){var r=n("x67t");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("33430572",r,!0)},SfgA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("yKuP"),a=n.n(o),s=n("CqnA"),u=n.n(s);e.default={middleware:"guest",components:{LoginWithGithub:u.a},metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new a.a({name:"",email:"",password:"",password_confirmation:""}),valid:!1,nameRules:[function(t){return!!t||"Введите значение"},function(t){return t.length<=10||"Name must be less than 10 characters"}],emailRules:[function(t){return!!t||"Введите значение"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Введите значение"}]}},methods:{register:function(){var t,e=(t=i.a.mark(function t(){var e,n,r,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/register");case 2:return e=t.sent,n=e.data,t.next=6,this.form.post("/api/login");case 6:return r=t.sent,o=r.data.token,this.$store.dispatch("auth/saveToken",{token:o}),t.next=11,this.$store.dispatch("auth/updateUser",{user:n});case 11:this.$router.push({name:"home"});case 12:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},X44Q:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},staticRenderFns:[]}},ZwjU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function s(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":a(t))&&(n=t,t=""),n=o({url:t,title:e,width:600,height:720},n);var r=void 0!==window.screenLeft?window.screenLeft:window.screen.left,i=void 0!==window.screenTop?window.screenTop:window.screen.top,s=window.innerWidth||document.documentElement.clientWidth||window.screen.width,u=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=s/2-n.width/2+r,n.top=u/2-n.height/2+i;var c=Object.keys(n).reduce(function(t,e){return t.push(e+"="+n[e]),t},[]).join(","),l=window.open(t,e,c);return window.focus&&l.focus(),l}e.default={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=(t=i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 2:s(t.sent,this.$t("login"));case 4:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}}},baBS:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("yKuP"),a=n.n(o),s=n("CqnA"),u=n.n(s),c=n("CZJI"),l=n.n(c),f=n("GAhV"),d=n.n(f);e.default={middleware:"guest",components:{"login-input":l.a,"register-input":d.a,LoginWithGithub:u.a},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{register:!1,signingin:!0,state:"signingin",switchText:!1,form:new a.a({email:"",password:""}),remember:!1}},computed:{authComponent:function(){return"signingin"===this.state?"login-input":"register-input"},title:function(){return"signingin"===this.state?this.$t("login"):this.$t("register")},message:function(){return"signingin"===this.state?this.$t("has_not_account"):this.$t("has_account")}},methods:{toggleAuth:function(){var t=this;this.switchText=!0,setTimeout(function(){t.state="signingin"===t.state?"registration":"signingin",setTimeout(function(){return t.switchText=!1},1e3)},500)},login:function(){var t,e=(t=i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,n=e.data,this.$store.dispatch("auth/saveToken",{token:n.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},bpwm:function(t,e,n){var r=n("/AGO");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("bc3e978c",r,!0)},eRqN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),i=n.n(r),o=n("yKuP"),a=n.n(o),s=n("CqnA"),u=n.n(s);e.default={middleware:"guest",components:{LoginWithGithub:u.a},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new a.a({email:"",password:""}),valid:!1,emailRules:[function(t){return!!t||"Введите значение"}],passwordRules:[function(t){return!!t||"Введите значение"}],remember:!1}},methods:{login:function(){var t,e=(t=i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,n=e.data,this.$store.dispatch("auth/saveToken",{token:n.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}()}}},tZKb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{on:{submit:function(e){e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("has-error",{attrs:{form:t.form,field:"email"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("email"),rules:t.emailRules,"prepend-icon":"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("password"),rules:t.passwordRules,"prepend-icon":"vpn_key",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("remember_me"),name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}}),t._v(" "),n("v-btn",{attrs:{block:"",large:"",type:"submit",loading:t.form.busy}},[t._v("\n       "+t._s(t.$t("login"))+"\n  ")]),t._v(" "),n("v-btn",{attrs:{flat:"",small:"",to:{name:"password.request"}}},[t._v("\n    "+t._s(t.$t("forgot_password"))+"\n  ")])],1)},staticRenderFns:[]}},x67t:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".auth-wrapper[data-v-737f80c4]{width:100%;height:calc(100vh - 100px)}.auth[data-v-737f80c4]{position:relative;width:100%;max-width:900px;height:500px;margin:30px auto;overflow:hidden;border-radius:6px;-webkit-box-shadow:0 0 20px 2px rgba(0,0,0,.5);box-shadow:0 0 20px 2px rgba(0,0,0,.5);border:0 solid transparent;-webkit-transition:background-color 1s,height .5s;transition:background-color 1s,height .5s}.auth-form[data-v-737f80c4],.auth-switch[data-v-737f80c4]{position:absolute;width:50%;height:100%;-webkit-transition:1s cubic-bezier(.68,-.55,.27,1.55);transition:1s cubic-bezier(.68,-.55,.27,1.55)}.signingin .auth-switch[data-v-737f80c4]{left:0}.signingin .auth-form[data-v-737f80c4]{left:50%}.auth-switch[data-v-737f80c4]{left:50%;padding-top:120px;text-align:center}.auth-switch__text[data-v-737f80c4]{-webkit-transition:-webkit-transform .35s;transition:-webkit-transform .35s;transition:transform .35s;transition:transform .35s,-webkit-transform .35s}h2[data-v-737f80c4]{text-align:center}.icon[data-v-737f80c4]{font-size:42px;color:#8e8e8e}form[data-v-737f80c4]{-webkit-transition:opacity .35s;transition:opacity .35s}.AuthEnter[data-v-737f80c4]{opacity:1}.AuthLeave[data-v-737f80c4]{opacity:0}.auth-form[data-v-737f80c4]{left:0;z-index:2;text-align:center;-webkit-transition-property:left,background-color;transition-property:left,background-color;-webkit-box-shadow:0 0 15px #000;box-shadow:0 0 15px #000}.card[data-v-737f80c4]{padding:50px 30px}.fadeOut[data-v-737f80c4]{-webkit-transform:scale(0);transform:scale(0)}.fadeIn[data-v-737f80c4]{-webkit-transform:scale(1);transform:scale(1)}",""])},yNuM:function(t,e,n){var r=n("VU/8")(n("baBS"),n("ytP4"),!1,function(t){n("Lbnw")},"data-v-737f80c4",null);t.exports=r.exports},ytP4:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-wrapper",class:t.state},[n("div",{staticClass:"auth"},[n("div",{staticClass:"auth-switch"},[n("div",{staticClass:"auth-switch__text",class:{fadeIn:!t.switchText,fadeOut:t.switchText}},[n("h2",[t._v(" "+t._s(t.title)+" ")]),t._v(" "),n("v-btn",{on:{click:function(e){e.preventDefault(),t.toggleAuth(e)}}},[t._v(t._s(t.message))])],1)]),t._v(" "),n("div",{staticClass:"auth-form"},[n("v-card",{attrs:{height:"500"}},[n("transition",{attrs:{"enter-active-class":"AuthEnter","leave-active-class":"AuthLeave",mode:"out-in"}},[n(t.authComponent,{tag:"component"})],1)],1)],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.c5bd2f812e459058a8f0.js.map