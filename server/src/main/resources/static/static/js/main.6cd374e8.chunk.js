(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,r){},141:function(e,t,r){},145:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(22),s=r.n(o),c=r(20),l=r(148),i=r(19),u=r(63),p=r(29),g=r(2),d="GET_USER_POLICY_START",P="GET_USER_POLICY_SUCCESS",E="GET_USER_POLICY_FAIL",b="SAVE_USER_POLICY_START",m="SAVE_USER_POLICY_SUCCESS",O="SAVE_USER_POLICY_FAIL",y="GET_COMPUTER_POLICY_START",I="GET_COMPUTER_POLICY_SUCCESS",S="GET_COMPUTER_POLICY_FAIL",h="SAVE_COMPUTER_POLICY_START",v="SAVE_COMPUTER_POLICY_SUCCESS",f="SAVE_COMPUTER_POLICY_FAIL",_="GET_APPLICATIONS_START",A="GET_APPLICATIONS_SUCCESS",M="GET_APPLICATIONS_FAIL",T="ADD_APPLICATION_START",j="ADD_APPLICATION_SUCCESS",C="ADD_APPLICATION_FAIL",L="DELETE_APPLICATION_START",U="DELETE_APPLICATION_SUCCESS",D="DELETE_APPLICATION_FAIL",R="GET_SITES_START",k="GET_SITES_SUCCESS",N="GET_SITES_FAIL",w="ADD_SITE_START",G="ADD_SITE_SUCCESS",Y="ADD_SITE_FAIL",x="DELETE_SITE_START",F="DELETE_SITE_SUCCESS",V="DELETE_SITE_FAIL",W="GET_LOGIN_METHODS_START",B="GET_LOGIN_METHODS_SUCCESS",H="GET_LOGIN_METHODS_FAIL",J={errorMsg:null,computerPolicy:null,saveComputerPolicyInProgress:!1,getComputerPolicyInProgress:!1};var X={errorMsg:null,userPolicy:null,saveUserPolicyInProgress:!1,getUserPolicyInProgress:!1};var q={errorMsg:null,applications:null,addApplicationInProgress:!1,getApplicationsInProgress:!1,deleteApplicationInProgress:!1};var z={errorMsg:null,sites:null,addSiteInProgress:!1,getSitesInProgress:!1,deleteSiteInProgress:!1};var K={errorMsg:null,loginMethods:null,getLoginMethodsInProgress:!1};var Q=Object(i.combineReducers)({computerPolicy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(g.a)({},e,{errorMsg:null,saveComputerPolicyInProgress:!0});case v:return Object(g.a)({},e,{errorMsg:null,computerPolicy:t.response.data,saveComputerPolicyInProgress:!1});case f:return Object(g.a)({},e,{errorMsg:t.errorMsg,saveComputerPolicyInProgress:!1});case y:return Object(g.a)({},e,{errorMsg:null,getComputerPolicyInProgress:!0});case I:return Object(g.a)({},e,{errorMsg:null,computerPolicy:t.response.data,getComputerPolicyInProgress:!1});case S:return Object(g.a)({},e,{errorMsg:t.errorMsg,getComputerPolicyInProgress:!1});default:return e}},userPolicy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(g.a)({},e,{errorMsg:null,saveUserPolicyInProgress:!0});case m:return Object(g.a)({},e,{errorMsg:null,saveUserPolicyInProgress:!1});case O:return Object(g.a)({},e,{errorMsg:t.errorMsg,saveUserPolicyInProgress:!1});case d:return Object(g.a)({},e,{errorMsg:null,getUserPolicyInProgress:!0});case P:return Object(g.a)({},e,{errorMsg:null,userPolicy:t.response.data,getUserPolicyInProgress:!1});case E:return Object(g.a)({},e,{errorMsg:t.errorMsg,getUserPolicyInProgress:!1});default:return e}},applications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case T:return Object(g.a)({},e,{errorMsg:null,addApplicationInProgress:!0});case j:return Object(g.a)({},e,{errorMsg:null,addApplicationInProgress:!1,applications:t.response.data});case C:return Object(g.a)({},e,{errorMsg:t.errorMsg,addApplicationInProgress:!1});case _:return Object(g.a)({},e,{errorMsg:null,getApplicationsInProgress:!0});case A:return Object(g.a)({},e,{errorMsg:null,applications:t.response.data,getApplicationsInProgress:!1});case M:return Object(g.a)({},e,{errorMsg:t.errorMsg,getApplicationsInProgress:!1});case L:return Object(g.a)({},e,{errorMsg:null,deleteApplicationInProgress:!0});case U:return Object(g.a)({},e,{errorMsg:null,applications:t.response.data,deleteApplicationInProgress:!1});case D:return Object(g.a)({},e,{errorMsg:t.errorMsg,deleteApplicationInProgress:!1});default:return e}},sites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(g.a)({},e,{errorMsg:null,addSiteInProgress:!0});case G:return Object(g.a)({},e,{errorMsg:null,addSiteInProgress:!1,sites:t.response.data});case Y:return Object(g.a)({},e,{errorMsg:t.errorMsg,addSiteInProgress:!1});case R:return Object(g.a)({},e,{errorMsg:null,getSitesInProgress:!0});case k:return Object(g.a)({},e,{errorMsg:null,sites:t.response.data,getSitesInProgress:!1});case N:return Object(g.a)({},e,{errorMsg:t.errorMsg,getSitesInProgress:!1});case x:return Object(g.a)({},e,{errorMsg:null,deleteSiteInProgress:!0});case F:return Object(g.a)({},e,{errorMsg:null,sites:t.response.data,deleteSiteInProgress:!1});case V:return Object(g.a)({},e,{errorMsg:t.errorMsg,deleteSiteInProgress:!1});default:return e}},loginMethods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case W:return Object(g.a)({},e,{errorMsg:null,getLoginMethodsInProgress:!0});case B:return Object(g.a)({},e,{errorMsg:null,loginMethods:t.response.data,getLoginMethodsInProgress:!1});case H:return Object(g.a)({},e,{errorMsg:t.errorMsg,getLoginMethodsInProgress:!1});default:return e}}}),Z=function(e,t){return"LOGOUT"===t.type&&(e=void 0),Q(e,t)},$=r(64),ee=Object(i.createStore)(Z,Object($.composeWithDevTools)(Object(i.applyMiddleware)(u.a))),te=Object(p.a)(),re=ee,ne=r(14),ae=r(15),oe=r(17),se=r(16),ce=r(18),le=r(149),ie=r(25),ue=r.n(ie),pe=r(30),ge=r.n(pe),de=r(38),Pe=r.n(de),Ee=r(66),be=r.n(Ee),me=r(65),Oe=r.n(me),ye=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(oe.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(a)))).state={user:void 0},r.click=function(){console.log("fsg"),te.push({pathname:"/userPolicy"})},r}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return a.a.createElement(ue.a,{bg:"light",expand:"lg"},a.a.createElement(ue.a.Brand,{href:"#/"},"Access system"),a.a.createElement(ue.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(ue.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(ge.a,{className:"mr-auto"},a.a.createElement(ge.a.Link,{href:"#/userPolicy"},"User policy"),a.a.createElement(ge.a.Link,{href:"#/computerPolicy"},"Computer policy")),a.a.createElement(Oe.a,{inline:!0},a.a.createElement(Pe.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),a.a.createElement(be.a,{variant:"outline-success"},"Search"))))}}]),t}(n.Component),Ie=Object(c.b)(function(e){return{}},function(e){return{}})(ye),Se=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(oe.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(a)))).state={user:void 0},r}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",null,"computer policy")}}]),t}(n.Component),he=Object(c.b)(function(e){return{}},function(e){return{}})(Se),ve=r(32);r(24);Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_STAGE;var fe=function(){return{type:d}},_e=function(e){return{type:P,response:e}};var Ae=function(){return{type:_}},Me=function(e){return{type:A,response:e}};var Te=function(){return{type:R}},je=function(e){return{type:k,response:e}};var Ce=function(){return{type:W}},Le=function(e){return{type:B,response:e}},Ue=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(oe.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(a)))).state={policy:null},r.getPolicy=function(e){r.props.getApplications(),r.props.getSites(),r.props.getLoginMethods(),r.props.getPolicy(e)},r.savePolicy=function(){r.props.savePolicy(r.state.policy)},r}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.getPolicy()}},{key:"componentDidUpdate",value:function(e){this.props.policy!==e.policy&&this.setState({policy:this.props.policy})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return this.state.policy&&this.props.applications&&this.props.sites&&this.props.loginMethods?a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("h2",null,"User policy: ",this.state.policy.name),a.a.createElement("h3",null,"Banned apps"),a.a.createElement(ve.a,{isMulti:!0,options:this.props.applications,defaultValue:this.state.policy.bannedApps,onChange:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{bannedApps:t})}})}}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Banned sites"),a.a.createElement(ve.a,{isMulti:!0,options:this.props.sites,defaultValue:this.state.policy.bannedSites,onChange:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{bannedSites:t})}})}}),a.a.createElement("hr",null),a.a.createElement("h3",null,"Login methods"),a.a.createElement(ve.a,{isMulti:!0,options:this.props.loginMethods,defaultValue:this.state.policy.loginMethods,onChange:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{loginMethods:t})}})}}),a.a.createElement("hr",null)),a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-md btn-outline-primary"},"Cancel"),"\xa0",a.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",onClick:this.savePolicy},"Save"))):a.a.createElement("div",{className:"container"},a.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}))}}]),t}(n.Component),De=Object(c.b)(function(e){return{policy:e.userPolicy.userPolicy,applications:e.applications.applications,loginMethods:e.loginMethods.loginMethods,sites:e.sites.sites}},function(e){return{getPolicy:function(t){e(function(e){e(fe()),e(_e({data:{id:1,name:"Default policy",bannedApps:[{label:"WORD",value:"word.exe"},{label:"NOTEPAD",value:"notepad.exe"}],bannedSites:[{label:"vk",value:"vk.com"}],loginMethods:[{label:"password",value:"password"}],enableRDP:!1}}))})},savePolicy:function(t){var r;e((r=t,function(e){console.log(r)}))},getApplications:function(){e(function(e){e(Ae()),e(Me({data:[{label:"WORD",value:"word.exe"},{label:"NOTEPAD",value:"notepad.exe"},{label:"EXEL",value:"exel.exe"}]}))})},getSites:function(){e(function(e){e(Te()),e(je({data:[{label:"vk",value:"vk.com"},{label:"fb",value:"facebook.com"}]}))})},getLoginMethods:function(){e(function(e){e(Ce()),e(Le({data:[{label:"password",value:"password"},{label:"finger print",value:"fingerPrint"}]}))})}}})(Ue),Re=r(70),ke=r.n(Re),Ne=(r(138),function(e){function t(){return Object(ne.a)(this,t),Object(oe.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:ke.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Edit ",a.a.createElement("code",null,"src/App.js")," and save to reload."),a.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(n.Component)),we=function(e){function t(){return Object(ne.a)(this,t),Object(oe.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(Ie,null),a.a.createElement(le.a,{exact:!0,path:"/",component:Ne}),a.a.createElement(le.a,{path:"/computerPolicy/:computerPolicyId?",component:he}),a.a.createElement(le.a,{path:"/userPolicy/:userPolicyId?",component:De}))}}]),t}(n.Component);r(141),r(143);s.a.render(a.a.createElement(c.a,{store:re},a.a.createElement(l.a,null,a.a.createElement(we,null))),document.getElementById("root"))},70:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,r){e.exports=r(145)}},[[73,2,1]]]);
//# sourceMappingURL=main.6cd374e8.chunk.js.map