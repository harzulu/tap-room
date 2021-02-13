(this["webpackJsonptap-room"]=this["webpackJsonptap-room"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),i=n.n(l);n(15);function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome to Pierre's Bar!"),r.a.createElement("hr",null))}var u=n(5),o=n(6),s=n(9),g=n(8);function m(e){var t,n,a=parseInt(e.price);return t=a>0&&a<=15?"green":a>15&&a<=25?"yellow":a>25&&a<=35?"orange":"red",n=e.pints<=10&&e.pints>0?"orange":e.pints<=0?"red":"green",r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"kegList",onClick:function(){return e.whenKegClicked(e.id)}},r.a.createElement("h3",null,e.name),r.a.createElement("div",{class:"price",id:t},r.a.createElement("h3",null,"$",e.price)),r.a.createElement("div",{class:"price",id:n},r.a.createElement("h3",null,"Pints left: ",e.pints))))}function d(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"What's on tap?"),r.a.createElement("hr",null),e.kegList.map((function(t){return r.a.createElement(m,{whenKegClicked:e.onKegSelection,name:t.name,brand:t.brand,price:t.price,alcoholContent:t.alcoholContent,pints:t.pints,key:t.id,id:t.id})})))}var h=n(7);function p(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:e.formSubmissionHandler},r.a.createElement("input",{type:"text",name:"name",placeholder:"Name of new keg:"}),r.a.createElement("input",{type:"text",name:"brand",placeholder:"Brand:"}),r.a.createElement("input",{type:"number",name:"price",placeholder:"Price:"}),r.a.createElement("input",{type:"number",name:"alcoholContent",placeholder:"Alcohol Content:"}),r.a.createElement("button",{type:"submit"},e.buttonText)))}function E(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewKegCreation({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,alcoholContent:t.target.alcoholContent.value,pints:124,id:Object(h.v4)()})},buttonText:"Create new keg"}))}function f(e){var t,n,a,l=e.keg,i=e.changePints,c=e.onClickingDelete,u=e.editKeg;return l.pints<11&&l.pints>0&&(a=r.a.createElement("h4",null,"Low stock!")),l.pints<1?t="Out of stock":(t=l.pints,n=r.a.createElement("button",{onClick:function(){return i()}},"Take a pint!")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Keg Details:"),r.a.createElement("h3",null,l.name),r.a.createElement("h3",null,l.brand),r.a.createElement("h3",null,"$",l.price),r.a.createElement("h3",null,l.alcoholContent,"%"),r.a.createElement("h3",null,"Pints left: ",t),a,n,r.a.createElement("button",{onClick:function(){return c(l.id)}},"Remove Keg"),r.a.createElement("button",{onClick:function(){return u(l)}},"Edit this keg"))}function K(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{formSubmissionHandler:function(t){t.preventDefault(),e.kegEdit({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,alcoholContent:t.target.alcoholContent.value,pints:e.pastKeg.pints,id:e.pastKeg.id})},buttonText:"Update keg"}))}var k=function(e){Object(s.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleChangingSelectedKeg=function(e){var t=a.state.masterKegList.filter((function(t){return t.id===e}))[0];a.setState({currentKeg:t})},a.handleNewKegCreation=function(e){var t=a.state.masterKegList.concat(e);a.setState({masterKegList:t,currentViewPage:!1})},a.handleChangePints=function(){var e=a.state.currentKeg,t=Object.assign({},e,{pints:parseInt(e.pints)-1}),n=a.state.masterKegList.filter((function(e){return e.id!==a.state.currentKeg.id})).concat(t);a.setState({masterKegList:n,currentKeg:t})},a.handleDeleteKeg=function(e){var t=a.state.masterKegList.filter((function(t){return t.id!==e}));a.setState({masterKegList:t,currentKeg:null})},a.handleKegEdit=function(e){if(a.state.editing){var t=a.state.masterKegList.filter((function(t){return t.id!==e.id}));t.concat(e),a.setState({masterKegList:t,currentKeg:e,editing:!1})}else a.setState({editing:!0})},a.handleClick=function(){null!=a.state.currentKeg?a.setState({currentViewPage:!1,currentKeg:null}):a.setState((function(e){return{currentViewPage:!e.currentViewPage}}))},a.state={masterKegList:[],currentKeg:null,currentViewPage:!1,editing:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=null,t=null;return this.state.editing?(e=r.a.createElement(K,{pastKeg:this.state.currentKeg,kegEdit:this.handleKegEdit}),t="Return to keg list"):this.state.currentViewPage?(e=r.a.createElement(E,{onNewKegCreation:this.handleNewKegCreation}),t="Return to keg list"):null!=this.state.currentKeg?(e=r.a.createElement(f,{keg:this.state.currentKeg,changePints:this.handleChangePints,onClickingDelete:this.handleDeleteKeg,editKeg:this.handleKegEdit}),t="Return to keg list"):(e=r.a.createElement(d,{kegList:this.state.masterKegList,onKegSelection:this.handleChangingSelectedKeg}),t="Add new keg"),r.a.createElement(r.a.Fragment,null,e,r.a.createElement("button",{onClick:this.handleClick},t))}}]),n}(r.a.Component);var C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,null),r.a.createElement(k,null))},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),l(e),i(e)}))};n(18);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),b()}},[[10,1,2]]]);
//# sourceMappingURL=main.97ab975e.chunk.js.map