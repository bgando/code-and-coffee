(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,M){"use strict";M.r(t);var a=M(7),L=M.n(a),N=M(0),u=M.n(N),j=M(4),n=M.n(j),i=M(152),r=M(155),c=M(144),s=function(e){var t=e.pageContext,M=(e.pathPrefix,t.previousPagePath),a=t.nextPagePath;return u.a.createElement("nav",{className:"pagination",role:"navigation"},u.a.createElement("div",{className:"navbar navbar-menu"},M&&u.a.createElement("div",{className:"navbar-item"},u.a.createElement(c.Link,{to:M,rel:"prev"},"Previous")),a&&u.a.createElement("div",{className:"navbar-item"},u.a.createElement(c.Link,{to:a,rel:"next"},"Next"))))};M.d(t,"default",function(){return y}),M.d(t,"pageQuery",function(){return T});var y=function(e){function t(){return e.apply(this,arguments)||this}return L()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,M=e.pageContext,a=t.allWordpressPost.edges;return u.a.createElement(i.a,null,u.a.createElement(r.a,{posts:a,title:"Latest posts"}),u.a.createElement(s,{pageContext:M,pathPrefix:"/"}))},t}(u.a.Component);y.propTypes={data:n.a.shape({allWordpressPost:n.a.shape({edges:n.a.array})}),pageContext:n.a.shape({currentPage:n.a.number,numPages:n.a.number})};var T="3910342814"},144:function(e,t,M){"use strict";M.r(t),M.d(t,"graphql",function(){return I}),M.d(t,"StaticQueryContext",function(){return y}),M.d(t,"StaticQuery",function(){return T});var a=M(0),L=M.n(a),N=M(4),u=M.n(N),j=M(143),n=M.n(j);M.d(t,"Link",function(){return n.a}),M.d(t,"withPrefix",function(){return j.withPrefix}),M.d(t,"navigate",function(){return j.navigate}),M.d(t,"push",function(){return j.push}),M.d(t,"replace",function(){return j.replace}),M.d(t,"navigateTo",function(){return j.navigateTo});var i=M(26);M.d(t,"waitForRouteChange",function(){return i.c});var r=M(145),c=M.n(r);M.d(t,"PageRenderer",function(){return c.a});var s=M(36);M.d(t,"parsePath",function(){return s.a});var y=L.a.createContext({}),T=function(e){return L.a.createElement(y.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):L.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}T.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},145:function(e,t,M){var a;e.exports=(a=M(147))&&a.default||a},146:function(e){e.exports={data:{allWordpressPage:{edges:[{node:{title:"Privacy Policy",slug:"privacy-policy"}}]}}}},147:function(e,t,M){"use strict";M.r(t);M(37);var a=M(0),L=M.n(a),N=M(4),u=M.n(N),j=M(51),n=M(1),i=function(e){var t=e.location,M=n.default.getResourcesForPathnameSync(t.pathname);return L.a.createElement(j.a,Object.assign({location:t,pageResources:M},M.json))};i.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=i},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1ICAgYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMgICBjMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2ICAgYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2ICAgYy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5ICAgYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5ICAgYy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3ICAgYy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxICAgYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNiAgIGM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDEgICBjLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2ICAgYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3ICAgYy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0ICAgYzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OSAgIGM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNCAgIGMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzkgICBjLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NiAgIGM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NSAgIGM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDYgICBDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6Ii8+DQo8L2c+DQo8ZGl2IHhtbG5zPSIiIGlkPSJkaXZTY3JpcHRzVXNlZCIgc3R5bGU9ImRpc3BsYXk6IG5vbmUiLz48c2NyaXB0IHhtbG5zPSIiIGlkPSJnbG9iYWxWYXJzRGV0ZWN0aW9uIiBzcmM9ImNocm9tZS1leHRlbnNpb246Ly9jbWtkYm1mbmRrZmdlYmxkaG5rYmZobG5lZWZkYWFpcC9qcy93cnNfZW52LmpzIi8+PC9zdmc+DQo="},149:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTA5IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpmaWdtYT0iaHR0cDovL3d3dy5maWdtYS5jb20vZmlnbWEvbnMiPjx0aXRsZT5Mb2dvPC90aXRsZT48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTQ3MCkiIGZpZ21hOnR5cGU9ImNhbnZhcyI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIgZmlnbWE6dHlwZT0idmVjdG9yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDcwKSIgZmlsbD0iI2Y0MCI+PHVzZSB4bGluazpocmVmPSIjYiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48dXNlIHhsaW5rOmhyZWY9IiNkIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsIi8+PHVzZSB4bGluazpocmVmPSIjZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbCIvPjx1c2UgeGxpbms6aHJlZj0iI2YiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWwiLz48L2c+PC9nPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMjIuNzM1IDIzLjE3MWMuMjgzLjMyMy4wNTMuODI5LS4zNzYuODI5aC01LjkwN2MtLjI4NSAwLS41NTYtLjEyMS0uNzQ1LS4zMzNsLTkuNDE0LTEwLjUyNnYxMC4zNmMwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjNjMC0uMjc2LjIyNC0uNS41LS41aDUuMjkzYy4yNzYgMCAuNS4yMjQuNS41djkuODE1bDkuMTQxLTkuOTljLjE5LS4yMDcuNDU3LS4zMjUuNzM4LS4zMjVoNS43NjJjLjQzNyAwIC42NjQuNTIxLjM2Ni44NDFsLTkuODUxIDEwLjU2MyAxMC4yODcgMTEuNzY3eiIvPjxwYXRoIGlkPSJjIiBkPSJNNDUuOTkxIDI0Yy0uMTk5IDAtLjM4LS4xMTgtLjQ1OS0uMzAxbC0yLjAyNC00LjY2OWgtMTAuNjdsLTIuMDI0IDQuNjY5Yy0uMDc5LjE4My0uMjU5LjMwMS0uNDU5LjMwMWgtNS4yMTJjLS4zNjYgMC0uNjA4LS4zODEtLjQ1My0uNzEybDEwLjc4Mi0yM2MuMDgyLS4xNzYuMjU5LS4yODguNDUzLS4yODhoNC4zNThjLjE5NCAwIC4zNy4xMTIuNDUzLjI4N2wxMC44MTUgMjNjLjE1Ni4zMzItLjA4Ni43MTMtLjQ1Mi43MTNoLTUuMTA4em0tMTEuMTM1LTkuNjY4aDYuNjM1bC0zLjMxNy03LjY5NC0zLjMxNyA3LjY5NHoiLz48cGF0aCBpZD0iZCIgZD0iTTU1LjUyNSAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYxOC40MjhoOS43NTljLjI3NiAwIC41LjIyNC41LjV2NC4wNzJjMCAuMjc2LS4yMjQuNS0uNS41aC0xNS41NTJ6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik03NS4yNzkuNWMwLS4yNzYuMjI0LS41LjUtLjVoOS4zMTVjMi42NjcgMCA0Ljk1OS40NzcgNi44NzQgMS40MyAxLjkzOC45NTMgMy40MiAyLjMzOCA0LjQ0NiA0LjE1MyAxLjAyNiAxLjc5MyAxLjUzOSAzLjkyNiAxLjUzOSA2LjQgMCAyLjQ5Ni0uNTEzIDQuNjUyLTEuNTM5IDYuNDY4LTEuMDAzIDEuNzkzLTIuNDc0IDMuMTY2LTQuNDEyIDQuMTE5LTEuOTE1Ljk1My00LjIxOCAxLjQzLTYuOTA4IDEuNDNoLTkuMzE1Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMjN6bTkuMzcgMTguNDYyYzIuMzcxIDAgNC4xMzgtLjU3OSA1LjMwMS0xLjczNiAxLjE2My0xLjE1NyAxLjc0NC0yLjkwNSAxLjc0NC01LjI0MiAwLTIuMzM4LS41ODEtNC4wNzQtMS43NDQtNS4yMDktMS4xNjMtMS4xNTctMi45My0xLjczNi01LjMwMS0xLjczNmgtMy4wNzh2MTMuOTIzaDMuMDc4eiIvPjxwYXRoIGlkPSJmIiBkPSJNMTAyLjkxMyAyNGMtLjI3NiAwLS41LS4yMjQtLjUtLjV2LTIzYzAtLjI3Ni4yMjQtLjUuNS0uNWg1LjI5M2MuMjc2IDAgLjUuMjI0LjUuNXYyM2MwIC4yNzYtLjIyNC41LS41LjVoLTUuMjkzeiIvPjwvZGVmcz48L3N2Zz4NCg=="},150:function(e,t,M){},152:function(e,t,M){"use strict";var a=M(0),L=M.n(a),N=M(154),u=M.n(N),j=(M(50),M(146)),n=M(144),i=M(148),r=M.n(i),c=M(149),s=M.n(c),y=function(){return L.a.createElement(n.StaticQuery,{query:"4089827343",render:function(e){return L.a.createElement("nav",{className:"navbar is-transparent"},L.a.createElement("div",{className:"container"},L.a.createElement("div",{className:"navbar-brand"},L.a.createElement(n.Link,{to:"/",className:"navbar-item"},L.a.createElement("figure",{className:"image"},L.a.createElement("img",{src:s.a,alt:"Kaldi",style:{width:"88px"}})))),L.a.createElement("div",{className:"navbar-start"},e.allWordpressPage.edges.map(function(e){return L.a.createElement(n.Link,{className:"navbar-item",to:e.node.slug,key:e.node.slug},e.node.title)})),L.a.createElement("div",{className:"navbar-end"},L.a.createElement("a",{className:"navbar-item",href:"https://github.com/GatsbyCentral/gatsby-starter-wordpress",target:"_blank",rel:"noopener noreferrer"},L.a.createElement("span",{className:"icon"},L.a.createElement("img",{src:r.a,alt:"Github"}))))))},data:j})};M(150),t.a=function(e){var t=e.children;return L.a.createElement("div",null,L.a.createElement(u.a,{title:"HiStaff"}),L.a.createElement(y,null),L.a.createElement("div",null,t))}},153:function(e,t,M){var a=M(27).f,L=Function.prototype,N=/^\s*function ([^ (]*)/;"name"in L||M(16)&&a(L,"name",{configurable:!0,get:function(){try{return(""+this).match(N)[1]}catch(e){return""}}})},155:function(e,t,M){"use strict";M.d(t,"a",function(){return r});M(28),M(153),M(50);var a=M(7),L=M.n(a),N=M(0),u=M.n(N),j=M(4),n=M.n(j),i=M(144),r=function(e){function t(){return e.apply(this,arguments)||this}return L()(t,e),t.prototype.render=function(){var e=this.props,t=e.posts,M=e.title;return u.a.createElement("section",{className:"section"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"content"},u.a.createElement("h1",{className:"has-text-weight-bold is-size-2"},M)),t.map(function(e){var t=e.node;return u.a.createElement("div",{className:"content",style:{border:"1px solid #eaecee",padding:"2em 4em"},key:t.id},u.a.createElement("p",null,u.a.createElement(i.Link,{className:"has-text-primary",to:t.slug},t.title),u.a.createElement("span",null," • "),u.a.createElement("small",null,t.date," - posted by"," ",u.a.createElement(i.Link,{to:"/author/"+t.author.slug},t.author.name))),u.a.createElement("div",null,u.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.excerpt.replace(/<p class="link-more.*/,"")}}),u.a.createElement(i.Link,{className:"button is-small",to:t.slug},"Keep Reading →")))})))},t}(u.a.Component);r.propTypes={posts:n.a.arrayOf(n.a.object),title:n.a.string}}}]);
//# sourceMappingURL=component---src-templates-index-js-892bd38e17b6081abead.js.map