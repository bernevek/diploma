(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,r){},171:function(e,t,r){},175:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(17),s=r.n(a),c=r(24),i=r(178),l=r(26),u=r(78),p=r(38),g=r(2),d="GET_USER_POLICY_START",m="GET_USER_POLICY_SUCCESS",E="GET_USER_POLICY_FAIL",P="SAVE_USER_POLICY_START",h="SAVE_USER_POLICY_SUCCESS",y="SAVE_USER_POLICY_FAIL",f="GET_COMPUTER_POLICY_START",O="GET_COMPUTER_POLICY_SUCCESS",b="GET_COMPUTER_POLICY_FAIL",S="SAVE_COMPUTER_POLICY_START",I="SAVE_COMPUTER_POLICY_SUCCESS",v="SAVE_COMPUTER_POLICY_FAIL",M="GET_APPLICATIONS_START",_="GET_APPLICATIONS_SUCCESS",A="GET_APPLICATIONS_FAIL",j="ADD_APPLICATION_START",T="ADD_APPLICATION_SUCCESS",C="ADD_APPLICATION_FAIL",L="DELETE_APPLICATION_START",U="DELETE_APPLICATION_SUCCESS",D="DELETE_APPLICATION_FAIL",N="GET_SITES_START",k="GET_SITES_SUCCESS",R="GET_SITES_FAIL",w="ADD_SITE_START",G="ADD_SITE_SUCCESS",Y="ADD_SITE_FAIL",F="DELETE_SITE_START",V="DELETE_SITE_SUCCESS",B="DELETE_SITE_FAIL",J="GET_LOGIN_METHODS_START",q="GET_LOGIN_METHODS_SUCCESS",x="GET_LOGIN_METHODS_FAIL",W={errorMsg:null,computerPolicy:null,saveComputerPolicyInProgress:!1,getComputerPolicyInProgress:!1};var H={errorMsg:null,userPolicy:null,saveUserPolicyInProgress:!1,getUserPolicyInProgress:!1};var z={errorMsg:null,applications:null,addApplicationInProgress:!1,getApplicationsInProgress:!1,deleteApplicationInProgress:!1};var K={errorMsg:null,sites:null,addSiteInProgress:!1,getSitesInProgress:!1,deleteSiteInProgress:!1};var Q={errorMsg:null,loginMethods:null,getLoginMethodsInProgress:!1};var X=Object(l.combineReducers)({computerPolicy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(g.a)({},e,{errorMsg:null,saveComputerPolicyInProgress:!0});case I:return Object(g.a)({},e,{errorMsg:null,computerPolicy:t.response.data,saveComputerPolicyInProgress:!1});case v:return Object(g.a)({},e,{errorMsg:t.errorMsg,saveComputerPolicyInProgress:!1});case f:return Object(g.a)({},e,{errorMsg:null,getComputerPolicyInProgress:!0});case O:return Object(g.a)({},e,{errorMsg:null,computerPolicy:t.response.data,getComputerPolicyInProgress:!1});case b:return Object(g.a)({},e,{errorMsg:t.errorMsg,getComputerPolicyInProgress:!1});default:return e}},userPolicy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case P:return Object(g.a)({},e,{errorMsg:null,saveUserPolicyInProgress:!0});case h:return Object(g.a)({},e,{errorMsg:null,saveUserPolicyInProgress:!1});case y:return Object(g.a)({},e,{errorMsg:t.errorMsg,saveUserPolicyInProgress:!1});case d:return Object(g.a)({},e,{errorMsg:null,getUserPolicyInProgress:!0});case m:return Object(g.a)({},e,{errorMsg:null,userPolicy:t.response.data,getUserPolicyInProgress:!1});case E:return Object(g.a)({},e,{errorMsg:t.errorMsg,getUserPolicyInProgress:!1});default:return e}},applications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return Object(g.a)({},e,{errorMsg:null,addApplicationInProgress:!0});case T:return Object(g.a)({},e,{errorMsg:null,addApplicationInProgress:!1,applications:t.response.data});case C:return Object(g.a)({},e,{errorMsg:t.errorMsg,addApplicationInProgress:!1});case M:return Object(g.a)({},e,{errorMsg:null,getApplicationsInProgress:!0});case _:return Object(g.a)({},e,{errorMsg:null,applications:t.response.data,getApplicationsInProgress:!1});case A:return Object(g.a)({},e,{errorMsg:t.errorMsg,getApplicationsInProgress:!1});case L:return Object(g.a)({},e,{errorMsg:null,deleteApplicationInProgress:!0});case U:return Object(g.a)({},e,{errorMsg:null,applications:t.response.data,deleteApplicationInProgress:!1});case D:return Object(g.a)({},e,{errorMsg:t.errorMsg,deleteApplicationInProgress:!1});default:return e}},sites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(g.a)({},e,{errorMsg:null,addSiteInProgress:!0});case G:return Object(g.a)({},e,{errorMsg:null,addSiteInProgress:!1,sites:t.response.data});case Y:return Object(g.a)({},e,{errorMsg:t.errorMsg,addSiteInProgress:!1});case N:return Object(g.a)({},e,{errorMsg:null,getSitesInProgress:!0});case k:return Object(g.a)({},e,{errorMsg:null,sites:t.response.data,getSitesInProgress:!1});case R:return Object(g.a)({},e,{errorMsg:t.errorMsg,getSitesInProgress:!1});case F:return Object(g.a)({},e,{errorMsg:null,deleteSiteInProgress:!0});case V:return Object(g.a)({},e,{errorMsg:null,sites:t.response.data,deleteSiteInProgress:!1});case B:return Object(g.a)({},e,{errorMsg:t.errorMsg,deleteSiteInProgress:!1});default:return e}},loginMethods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case J:return Object(g.a)({},e,{errorMsg:null,getLoginMethodsInProgress:!0});case q:return Object(g.a)({},e,{errorMsg:null,loginMethods:t.response.data,getLoginMethodsInProgress:!1});case x:return Object(g.a)({},e,{errorMsg:t.errorMsg,getLoginMethodsInProgress:!1});default:return e}}}),Z=function(e,t){return"LOGOUT"===t.type&&(e=void 0),X(e,t)},$=r(79),ee=Object(l.createStore)(Z,Object($.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),te=Object(p.a)(),re=ee,ne=r(18),oe=r(19),ae=r(21),se=r(20),ce=r(22),ie=r(179),le=r(35),ue=r.n(le),pe=r(39),ge=r.n(pe),de=r(52),me=r.n(de),Ee=r(51),Pe=r.n(Ee),he=r(82),ye=r.n(he),fe=r(28),Oe=r.n(fe),be=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(ae.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(o)))).state={user:void 0},r.click=function(){console.log("fsg"),te.push({pathname:"/userPolicy"})},r}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement(ue.a,{bg:"light",expand:"lg"},o.a.createElement(ue.a.Brand,{href:"#/"},"Access system"),o.a.createElement(ue.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(ue.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(ge.a,{className:"mr-auto"},o.a.createElement(Oe.a,{title:"User",id:"basic-nav-dropdown"},o.a.createElement(Oe.a.Item,{href:"#"},"Users"),o.a.createElement(Oe.a.Item,{href:"#/userPolicy"},"User policies")),o.a.createElement(Oe.a,{title:"Computer",id:"basic-nav-dropdown"},o.a.createElement(Oe.a.Item,{href:"#"},"Computers"),o.a.createElement(Oe.a.Item,{href:"#/computerPolicy"},"Computer policies")),o.a.createElement(ge.a.Link,{href:"#"},"Applications"),o.a.createElement(ge.a.Link,{href:"#"},"Sites")),o.a.createElement(ye.a,{inline:!0},o.a.createElement(me.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),o.a.createElement(Pe.a,{variant:"outline-success"},"Search"))))}}]),t}(n.Component),Se=Object(c.b)(function(e){return{}},function(e){return{}})(be),Ie=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(ae.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(o)))).state={user:void 0},r}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",null,"computer policy")}}]),t}(n.Component),ve=Object(c.b)(function(e){return{}},function(e){return{}})(Ie),Me=r(23),_e=r.n(Me),Ae="";Ae="dev"===Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_STAGE?"http://localhost:8080/api":"/api";var je=function(e){return Ae+"/userPolicy/"+e},Te=function(e){return Ae+"/userPolicy/"+e},Ce=function(){return Ae+"/application"},Le=function(){return Ae+"/site"},Ue=function(){return Ae+"/loginMethod"};var De=function(){return{type:P}},Ne=function(e){return{type:h,response:e}},ke=function(e){return{type:y,errorMsg:e}};var Re=function(){return{type:d}},we=function(e){return{type:m,response:e}},Ge=function(e){return{type:E,errorMsg:e}},Ye=r(41);var Fe=function(){return{type:J}},Ve=function(e){return{type:q,response:e}},Be=function(e){return{type:x,errorMsg:e}};var Je=function(){return{type:M}},qe=function(e){return{type:_,response:e}},xe=function(e){return{type:A,errorMsg:e}};var We=function(){return{type:N}},He=function(e){return{type:k,response:e}},ze=function(e){return{type:R,errorMsg:e}},Ke=function(e){function t(){return Object(ne.a)(this,t),Object(ae.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){this.props.getApplications(),this.props.getSites(),this.props.getLoginMethods()}},{key:"render",value:function(){var e=this;return this.props.applications&&this.props.sites&&this.props.loginMethods?o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("h2",null,this.props.policyType," policy: ",this.props.policy.name),o.a.createElement("h3",null,"Banned apps"),o.a.createElement(Ye.a,{isMulti:!0,options:this.props.applications,defaultValue:this.props.policy.bannedApps,onChange:function(t){e.props.setBannedApps(t)}}),o.a.createElement("hr",null),o.a.createElement("h3",null,"Banned sites"),o.a.createElement(Ye.a,{isMulti:!0,options:this.props.sites,defaultValue:this.props.policy.bannedSites,onChange:function(t){e.props.setBannedSites(t)}}),o.a.createElement("hr",null),o.a.createElement("h3",null,"Login methods"),o.a.createElement(Ye.a,{isMulti:!0,options:this.props.loginMethods,defaultValue:this.props.policy.loginMethods,onChange:function(t){e.props.setLoginMethods(t)}}),o.a.createElement("hr",null)),o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"btn btn-md btn-outline-primary"},"Cancel"),"\xa0",o.a.createElement("button",{type:"button",className:"btn btn-md btn-primary",onClick:this.props.savePolicy},"Save"))):o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}))}}]),t}(n.Component),Qe=Object(c.b)(function(e){return{applications:e.applications.applications,loginMethods:e.loginMethods.loginMethods,sites:e.sites.sites}},function(e){return{getApplications:function(){e(function(e){return e(Je()),_e.a.get(Ce()).then(function(t){e(qe(t))}).catch(function(t){alert(JSON.parse(t.request.response).reason),e(xe(t.message))})})},getSites:function(){e(function(e){return e(We()),_e.a.get(Le()).then(function(t){e(He(t))}).catch(function(t){alert(JSON.parse(t.request.response).reason),e(ze(t.message))})})},getLoginMethods:function(){e(function(e){return e(Fe()),_e.a.get(Ue()).then(function(t){e(Ve(t))}).catch(function(t){alert(JSON.parse(t.request.response).reason),e(Be(t.message))})})}}})(Ke),Xe=function(e){function t(){var e,r;Object(ne.a)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=Object(ae.a)(this,(e=Object(se.a)(t)).call.apply(e,[this].concat(o)))).state={policy:null},r.getPolicy=function(e){r.props.getPolicy(e)},r.savePolicy=function(){r.props.savePolicy(r.state.policy)},r}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){this.getPolicy(0)}},{key:"componentDidUpdate",value:function(e){this.props.policy!==e.policy&&this.setState({policy:this.props.policy})}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return this.state.policy?o.a.createElement(Qe,{policyType:"User",policy:this.state.policy,setBannedApps:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{bannedApps:t})}})},setBannedSites:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{bannedSites:t})}})},setLoginMethods:function(t){e.setState(function(e){return{policy:Object(g.a)({},e.policy,{loginMethods:t})}})},savePolicy:this.savePolicy}):o.a.createElement("div",{className:"container"},o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}))}}]),t}(n.Component),Ze=Object(c.b)(function(e){return{policy:e.userPolicy.userPolicy}},function(e){return{getPolicy:function(t){var r;e((r=t,function(e){return e(Re()),_e.a.get(je(r)).then(function(t){e(we(t))}).catch(function(t){alert(JSON.parse(t.request.response).reason),e(Ge(t.message))})}))},savePolicy:function(t){var r;e((r=t,function(e){return e(De()),_e.a.put(Te(r.id),r).then(function(t){e(Ne(t))}).catch(function(t){alert(JSON.parse(t.request.response).reason),e(ke(t.message))})}))}}})(Xe),$e=r(86),et=r.n($e),tt=(r(168),function(e){function t(){return Object(ne.a)(this,t),Object(ae.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:et.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(n.Component)),rt=function(e){function t(){return Object(ne.a)(this,t),Object(ae.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(oe.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Se,null),o.a.createElement(ie.a,{exact:!0,path:"/",component:tt}),o.a.createElement(ie.a,{path:"/computerPolicy/:computerPolicyId?",component:ve}),o.a.createElement(ie.a,{path:"/userPolicy/:userPolicyId?",component:Ze}))}}]),t}(n.Component);r(171),r(173);s.a.render(o.a.createElement(c.a,{store:re},o.a.createElement(i.a,null,o.a.createElement(rt,null))),document.getElementById("root"))},86:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},89:function(e,t,r){e.exports=r(175)}},[[89,2,1]]]);
//# sourceMappingURL=main.fbe969f6.chunk.js.map