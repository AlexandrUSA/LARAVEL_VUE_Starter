webpackJsonp([7],{PXcA:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("NYxO");i.default={props:{id:{type:[Number,String],required:!0}},data:function(){return{item:{}}},computed:{avatarMsg:function(){return this.item.avatar?this.$t("change_image"):this.$t("add_image")},avatar:function(){return this.item.avatar?this.item.avatar:"http://dragene.no/wp-content/uploads/2016/06/default1.jpg"}},created:function(){this.load()},methods:{load:function(){var t=this;fetch("/api/employees/"+this.id,{method:"GET"}).then(function(t){return t.json()}).then(function(i){return t.item=i})}}}},TVY8:function(t,i,s){(t.exports=s("FZ+f")(!1)).push([t.i,'[data-v-0c9498dd]{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Roboto,sans-serif}h2[data-v-0c9498dd]{-ms-flex-preferred-size:100%;flex-basis:100%}p[data-v-0c9498dd]{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:10px;-webkit-transition:background-color .3s;transition:background-color .3s}p[data-v-0c9498dd]:hover{background-color:hsla(0,0%,100%,.1)}.employee[data-v-0c9498dd]{display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;-o-flex-wrap:wrap;flex-wrap:wrap;width:90%;margin:30px auto;padding:15px;border-radius:5px;-webkit-box-shadow:0 0 13px rgba(0,0,0,.5);box-shadow:0 0 13px rgba(0,0,0,.5)}.employee[data-v-0c9498dd]:after,.employee[data-v-0c9498dd]:before{content:"";display:block;clear:both}.employee__avatar[data-v-0c9498dd]{width:30%}.employee__avatar-container[data-v-0c9498dd]{position:relative;width:316px;height:316px;margin:0 auto;-webkit-box-shadow:0 0 13px rgba(0,0,0,.5);box-shadow:0 0 13px rgba(0,0,0,.5);border-radius:3px;overflow:hidden}.avatar__overlay[data-v-0c9498dd]{position:absolute;top:0;left:0;z-index:1;display:-moz-flex;display:-ms-flex;display:-o-flex;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.3);width:100%;height:100%;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.employee__avatar:hover .avatar__overlay[data-v-0c9498dd]{opacity:1}.employee__avatar img[data-v-0c9498dd]{display:block;width:100%;max-width:316px;margin:0 auto}.employee__descr[data-v-0c9498dd]{width:70%;padding:10px 45px;font-size:18px}',""])},dVnl:function(t,i){t.exports={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"employee"},[i("h2",[this._v(this._s(this.$t("employee")))]),this._v(" "),i("div",{staticClass:"employee__avatar"},[i("div",{staticClass:"employee__avatar-container"},[i("div",{staticClass:"avatar__overlay"},[i("v-btn",{attrs:{depressed:"",large:""}},[this._v(this._s(this.avatarMsg))])],1),this._v(" "),i("img",{attrs:{src:this.avatar,alt:"avatar"}})])]),this._v(" "),i("div",{staticClass:"employee__descr"},[i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("name"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.first_name))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("last_name"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.last_name))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("patronymic"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.patronymic?this.item.patronymic:""))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("position"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.position))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("phone_number"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.phone_number))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("salary"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.salary)+" руб.")])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("address"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.address))])]),this._v(" "),i("v-divider"),this._v(" "),i("p",{staticClass:"employee__text"},[i("b",[this._v(this._s(this.$t("birthday"))+":")]),this._v(" "),i("i",[this._v(this._s(this.item.birthday))])]),this._v(" "),i("v-btn",{attrs:{block:"",to:{name:"employeeEdit",params:{id:this.item.id,employee:this.item}}}},[this._v("\n\t\t\t\t      "+this._s(this.$t("change_data"))+"\n\t\t\t\t    ")])],1)])},staticRenderFns:[]}},fJLR:function(t,i,s){var e=s("VU/8")(s("PXcA"),s("dVnl"),!1,function(t){s("xazF")},"data-v-0c9498dd",null);t.exports=e.exports},xazF:function(t,i,s){var e=s("TVY8");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s("rjj0")("857dc1e0",e,!0)}});
//# sourceMappingURL=7.f9244744f1cea2cea204.js.map