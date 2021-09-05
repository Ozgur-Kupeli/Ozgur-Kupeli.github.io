(this["webpackJsonpdeneme-css"]=this["webpackJsonpdeneme-css"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(16),l=c.n(s),a=(c(27),c(28),c(17)),r=c(18),o=c(22),d=c(20),j=(c(29),c(30),c(21));function b(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var m=c(0),u=function(e){var t=e.hamburger,c=e.hamburgerFunc,i=function(){var e=Object(n.useState)(b()),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){function e(){i(b())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c}().width;return Object(n.useEffect)((function(){!0===t&&i>768&&c()})),Object(m.jsx)("div",{className:"hamburger",onClick:function(){return c()},children:Object(m.jsx)("div",{className:t?"whileOpen":"whileClose"})})},h=(c(32),c(7)),O=function(e){var t=e.selectedNav,c=e.selectedFunc,n=e.isOpen;return Object(m.jsx)("div",{className:"sidebar",style:{transformOrigin:" 100% 0%",transform:n?"scale(1,1)":"scale(0,0)"},children:Object(m.jsxs)("ul",{className:"side-nav",children:[Object(m.jsx)("li",{className:"side-item ".concat(1===t&&"selectedSidebarItem"),children:Object(m.jsx)(h.b,{className:"side-link",to:"/",onClick:function(){return c(1)},children:"\xd6zg\xfcr K\xfcpeli"})}),Object(m.jsx)("li",{className:"side-item ".concat(2===t&&"selectedSidebarItem"),children:Object(m.jsx)(h.b,{className:"side-link",to:"/contact",onClick:function(){return c(2)},children:"\u0130leti\u015fim"})}),Object(m.jsx)("li",{className:"side-item ".concat(3===t&&"selectedSidebarItem"),children:Object(m.jsx)(h.b,{className:"side-link",to:"/projects",onClick:function(){return c(3)},children:"Projeler"})})]})})},x=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).setSelected=function(e){n.setState({selected:e})},n.setHamburger=function(){n.setState({hamburger:!n.state.hamburger})},n.handleScroll=function(){window.scrollY>5&&n.setState({hamburger:!1})},n.state={selected:1,hamburger:!1},n}return Object(r.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"navbar",children:[Object(m.jsx)("img",{className:"logo",src:"./Logo136x256.png",alt:"logo"}),Object(m.jsxs)("ul",{className:"navbar-nav header-component-ic",children:[Object(m.jsx)("li",{className:"nav-item ".concat(1===this.state.selected&&"selectedItem"),onClick:function(){return e.setSelected(1)},children:Object(m.jsx)(h.b,{className:"nav-link",to:"/",children:"Who am I"})}),Object(m.jsx)("li",{className:"nav-item ".concat(2===this.state.selected&&"selectedItem"),onClick:function(){return e.setSelected(2)},children:Object(m.jsx)(h.b,{className:"nav-link",to:"/docs",children:"Docs"})}),Object(m.jsx)("li",{className:"nav-item ".concat(3===this.state.selected&&"selectedItem"),onClick:function(){return e.setSelected(3)},children:Object(m.jsx)(h.b,{className:"nav-link",to:"/projects",children:"Projects"})})]}),Object(m.jsx)(O,{selectedNav:this.state.selected,selectedFunc:this.setSelected,isOpen:this.state.hamburger}),Object(m.jsx)(u,{hamburger:this.state.hamburger,hamburgerFunc:this.setHamburger})]})}}]),c}(n.Component),f=c(2),v=function(){return Object(m.jsxs)("div",{style:{width:"100%",height:"auto",background:"transparent",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"5em 0"},children:[Object(m.jsx)("p",{style:{display:"block",color:"white",fontSize:"144px",margin:"0"},children:"404"}),Object(m.jsx)("p",{style:{display:"block",color:"white",fontSize:"36px"},children:"Arad\u0131\u011f\u0131n\u0131z sayfa bulunamad\u0131!"})]})},p=(c(38),c(10)),g=function(){return Object(m.jsxs)("div",{className:"home-card",children:[Object(m.jsxs)("div",{className:"text",children:[Object(m.jsx)("div",{id:"hello",children:"Hello!"}),Object(m.jsx)("div",{id:"ozgur",children:"I'm \xd6ZG\xdcR"}),Object(m.jsx)("div",{className:"yazi",children:"I'm a front-end developer. I write code to create interactive screens using React.js (JS, HTML, CSS/Sass). I develop web and mobile applications."}),Object(m.jsxs)("div",{className:"iletisim",children:[Object(m.jsx)("p",{children:"Contact"}),Object(m.jsxs)("div",{className:"iletisim-container",children:[Object(m.jsxs)("div",{className:"iletisim-link-bir",children:[Object(m.jsx)(p.c,{className:"iletisim-link-icon",size:20,color:"black"}),Object(m.jsx)("p",{className:"iletisim-link-a",children:"ozgurkupeli@aol.com"})]}),Object(m.jsxs)("div",{className:"iletisim-link-iki",children:[Object(m.jsx)(p.a,{className:"iletisim-link-icon",size:20,color:"black"}),Object(m.jsx)("a",{href:"https://github.com/Ozgur-Kupeli",target:"_blank",rel:"noreferrer",className:"iletisim-link-a iletisim-link-b",children:"GitHub"})]}),Object(m.jsxs)("div",{className:"iletisim-link-uc",children:[Object(m.jsx)(p.b,{className:"iletisim-link-icon",size:20,color:"black"}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/\xf6zg\xfcr-k\xfcpeli-376587209",target:"_blank",rel:"noreferrer",className:"iletisim-link-a iletisim-link-b",children:"LinkedIn"})]})]})]})]}),Object(m.jsx)("div",{className:"resim",children:Object(m.jsx)("img",{className:"img1",src:"./1.png",alt:"bir"})})]})},k=(c(39),function(){return Object(m.jsx)("div",{children:"docs"})}),N=function(){return Object(m.jsx)("div",{style:{color:"white"},children:"PROJECTS"})},w=function(){return Object(m.jsx)("p",{style:{textAlign:"center",color:"darkorange",fontSize:".8em"},children:"\xa9 2021 \xd6zg\xfcr K\xfcpeli"})};var S=function(){return Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{className:"app-container",children:[Object(m.jsx)("div",{className:"header",children:Object(m.jsx)(x,{})}),Object(m.jsx)("div",{className:"main",style:{color:"white"},children:Object(m.jsxs)(f.c,{children:[Object(m.jsx)(f.a,{path:"/",exact:!0,component:g}),Object(m.jsx)(f.a,{path:"/docs",exact:!0,component:k}),Object(m.jsx)(f.a,{path:"/projects",exact:!0,component:N}),Object(m.jsx)(f.a,{component:v})]})}),Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)(w,{})})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),i(e),s(e),l(e)}))};l.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.ce6da3c6.chunk.js.map