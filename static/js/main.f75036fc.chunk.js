(this["webpackJsonptest_task-users_with_pagination"]=this["webpackJsonptest_task-users_with_pagination"]||[]).push([[0],{14:function(e,a,t){e.exports=t(26)},25:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(5),u=t.n(i),r=t(3),l=t(10),c=t.n(l),m=t(4),o=t(13),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setUsers":return a.users;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"isLoading":return a.isLoading;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"setCurrentPage":return a.currentPage;default:return e}},v=function(e){return e.users},f=function(e){return e.isLoading},b=function(e){return e.currentPage},h=Object(m.d)(Object(m.c)({users:d,isLoading:p,currentPage:g}),Object(m.a)(o.a)),E=[{id:"1",name:"Levon",surname:"Sargis",desc:"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{id:"2",name:"Poghos",surname:"Haig",desc:"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{id:"3",name:"Keghart",surname:"Petros",desc:"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{id:"4",name:"Vardan",surname:"Hakob",desc:"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{id:"5",name:"Ohannes",surname:"Sahak",desc:"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{id:"6",name:"Khajag",surname:"Stepan",desc:"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{id:"7",name:"Jirair",surname:"Ara",desc:"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{id:"8",name:"Sevan",surname:"Hagop",desc:"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{id:"9",name:"Daniel",surname:"Avetis",desc:"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{id:"10",name:"Levon",surname:"Sargis",desc:"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{id:"11",name:"Poghos",surname:"Haig",desc:"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{id:"12",name:"Keghart",surname:"Petros",desc:"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{id:"13",name:"Vardan",surname:"Hakob",desc:"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{id:"14",name:"Hagop",surname:"Rouben",desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."},{id:"15",name:"Ohannes",surname:"Sahak",desc:"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{id:"16",name:"Khajag",surname:"Stepan",desc:"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{id:"17",name:"Jirair",surname:"Ara",desc:"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{id:"18",name:"Sevan",surname:"Hagop",desc:"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{id:"19",name:"Daniel",surname:"Avetis",desc:"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{id:"20",name:"Hagop",surname:"Rouben",desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."}],q=t(6),P=t.n(q),_=function(e){var a=e.user;return s.a.createElement("tr",null,s.a.createElement("td",null,a.id),s.a.createElement("td",null,a.name),s.a.createElement("td",null,a.surname),s.a.createElement("td",null,a.desc))},S=[{code:"id",title:"Id"},{code:"name",title:"Name"},{code:"surname",title:"Surname"},{code:"desc",title:"Description"}],N=function(e){var a=e.users;return s.a.createElement("table",{className:"users"},s.a.createElement("thead",null,s.a.createElement("tr",null,S.map((function(e){return s.a.createElement("th",{key:e.code},e.title)})))),s.a.createElement("tbody",null,a.map((function(e){return s.a.createElement(_,{key:e.id,user:e})}))))},y=function(e){for(var a=e.currentPage,t=e.setCurrentPage,n=e.tableData,i=e.withInfo,u=function(e){var n=e.target.value;a!==+n&&t(+n)},r=5*a,l=r-5,c=[],m=1;m<=Math.ceil(n.length/5);m+=1)c.push(m);return s.a.createElement(s.a.Fragment,null,s.a.createElement(N,{users:n.slice(l,r)}),s.a.createElement("ul",{className:"pagination"},s.a.createElement("li",null,i&&s.a.createElement("span",{className:"pagination__info"},"".concat(l+1,"-").concat(r>n.length?n.length:5*a))),s.a.createElement("li",null,s.a.createElement("button",{type:"button",className:P()("pagination__page",{"pagination__page--disabled":1===a}),onClick:function(){t(a-1)},disabled:1===a},"Previous")),c.map((function(e){return s.a.createElement("li",{key:e},s.a.createElement("button",{className:P()("pagination__page",{"pagination__page--active":a===e}),type:"button",key:e,value:e,onClick:u},e))})),s.a.createElement("li",null,s.a.createElement("button",{type:"button",className:P()("pagination__page",{"pagination__page--disabled":a===c.length}),disabled:a===c.length,onClick:function(){t(a+1)}},"Next"))))},k=Object(r.b)((function(e){return{currentPage:b(e)}}),{setCurrentPage:function(e){return{type:"setCurrentPage",currentPage:e}}})(y);y.defaultProps={withInfo:!1};t(25);var L=Object(r.b)((function(e){return{users:v(e),isLoading:f(e)}}),{setUsers:function(e){return{type:"setUsers",users:e}},setIsLoading:function(e){return{type:"isLoading",isLoading:e}}})((function(e){var a=e.users,t=e.isLoading,n=e.setUsers,i=e.setIsLoading;return s.a.createElement("div",{className:"container"},a.length>0?s.a.createElement(k,{tableData:a,withInfo:!0}):s.a.createElement("div",{className:"post__start"},s.a.createElement("button",{disabled:t,className:"post__button",type:"button",onClick:function(){var e;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return i(!0),a.next=3,c.a.awrap(E);case 3:e=a.sent,n(e),i(!1);case 6:case"end":return a.stop()}}))}},t?"Loading...":"Load Posts")))}));u.a.render(s.a.createElement(r.a,{store:h},s.a.createElement(L,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f75036fc.chunk.js.map