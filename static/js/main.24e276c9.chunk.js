(this["webpackJsonpreact-basics"]=this["webpackJsonpreact-basics"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(3),r=t.n(a),i=(t(12),t(4)),o=t(5),l=t(7),u=t(6),h=(t(13),t(0)),p=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("div",{className:"image-container",children:Object(h.jsx)("img",{src:e.person.picture.large,alt:e.person.name.last})}),Object(h.jsxs)("h2",{children:[e.person.name.first," ",e.person.name.last]}),Object(h.jsx)("p",{children:e.person.email}),Object(h.jsx)("p",{children:e.person.phone})]})},d=(t(15),function(e){return Object(h.jsx)("div",{className:"card-list",children:e.people.map((function(e){return Object(h.jsx)(p,{person:e},e.id)}))})}),j=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return Object(h.jsx)("input",{className:"searchbox",type:"search",placeholder:n,onChange:t})}),f=(t(17),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={people:[],searchField:""},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=52").then((function(e){return e.json()})).then((function(n){return e.setState({people:n.results})}))}},{key:"render",value:function(){var e=this.state,n=e.people,t=e.searchField,c=n.filter((function(e){return e.name.last.toLowerCase().includes(t.toLowerCase())||e.name.first.toLowerCase().includes(t.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{placeholder:"search employees",handleChange:this.handleChange}),Object(h.jsx)(d,{people:c})]})}}]),t}(c.Component)),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.24e276c9.chunk.js.map