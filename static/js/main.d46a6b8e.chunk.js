(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),o=(n(13),n(3)),a=n(0),i=function(e){var t=e.name,n=e.email,c=e.id;return Object(a.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),Object(a.jsx)("p",{children:n})]})]})},h=function(e){var t=e.robots;return Object(a.jsx)("div",{children:t.map((function(e,n){return Object(a.jsx)(i,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){e.searchfiled;var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},l=n(5),u=n(6),d=n(8),f=n(7),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this)).state={hasError:!1},c}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Ooops. that is not good.."}):this.props.children}}]),n}(c.Component);n(15);var p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),l=i[0],u=i[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return n.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)(b,{searchChange:function(e){u(e.target.value)}}),Object(a.jsx)(j,{children:Object(a.jsx)(O,{children:Object(a.jsx)(h,{robots:d})})})]}):Object(a.jsx)("h1",{children:"Loading"})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(16);s.a.render(Object(a.jsx)(p,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.d46a6b8e.chunk.js.map