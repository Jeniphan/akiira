(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3514:function(e,t,a){"use strict";var n=a(5318),r=a(8);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(7154)),o=n(a(9713)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(7294)),s=n(a(4184)),l=a(1929);function m(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}var d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},u=function(e){var t,a=e.prefixCls,n=e.className,r=e.checked,m=e.onChange,u=e.onClick,x=d(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,c.useContext(l.ConfigContext).getPrefixCls)("tag",a),f=(0,s.default)(p,(t={},(0,o.default)(t,"".concat(p,"-checkable"),!0),(0,o.default)(t,"".concat(p,"-checkable-checked"),r),t),n);return c.createElement("span",(0,i.default)({},x,{className:f,onClick:function(e){null===m||void 0===m||m(!r),null===u||void 0===u||u(e)}}))};t.default=u},9361:function(e,t,a){"use strict";var n=a(5318),r=a(8);t.Z=void 0;var i=n(a(9713)),o=n(a(7154)),c=n(a(3038)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(7294)),l=n(a(4184)),m=n(a(8475)),d=n(a(753)),u=n(a(3514)),x=a(1929),p=a(5471),f=n(a(1539));function h(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var k=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},y=new RegExp("^(".concat(p.PresetColorTypes.join("|"),")(-inverse)?$")),v=new RegExp("^(".concat(p.PresetStatusColorTypes.join("|"),")$")),b=function(e,t){var a,n=e.prefixCls,r=e.className,u=e.style,p=e.children,h=e.icon,b=e.color,g=e.onClose,_=e.closeIcon,j=e.closable,O=void 0!==j&&j,E=k(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=s.useContext(x.ConfigContext),A=w.getPrefixCls,D=w.direction,P=s.useState(!0),S=(0,c.default)(P,2),C=S[0],N=S[1];s.useEffect((function(){"visible"in E&&N(E.visible)}),[E.visible]);var B=function(){return!!b&&(y.test(b)||v.test(b))},M=(0,o.default)({backgroundColor:b&&!B()?b:void 0},u),V=B(),G=A("tag",n),F=(0,l.default)(G,(a={},(0,i.default)(a,"".concat(G,"-").concat(b),V),(0,i.default)(a,"".concat(G,"-has-color"),b&&!V),(0,i.default)(a,"".concat(G,"-hidden"),!C),(0,i.default)(a,"".concat(G,"-rtl"),"rtl"===D),a),r),T=function(e){e.stopPropagation(),null===g||void 0===g||g(e),e.defaultPrevented||"visible"in E||N(!1)},R="onClick"in E||p&&"a"===p.type,I=(0,m.default)(E,["visible"]),W=h||null,L=W?s.createElement(s.Fragment,null,W,s.createElement("span",null,p)):p,H=s.createElement("span",(0,o.default)({},I,{ref:t,className:F,style:M}),L,O?_?s.createElement("span",{className:"".concat(G,"-close-icon"),onClick:T},_):s.createElement(d.default,{className:"".concat(G,"-close-icon"),onClick:T}):null);return R?s.createElement(f.default,null,H):H},g=s.forwardRef(b);g.displayName="Tag",g.CheckableTag=u.default;var _=g;t.Z=_},7785:function(e,t,a){"use strict";a(7108),a(7309)},8e3:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var r=((n=a(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},5646:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(i.AmpStateContext))};var n,r=(n=a(7294))&&n.__esModule?n:{default:n},i=a(8e3);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return a||r&&o}},2717:function(e,t,a){"use strict";var n=a(930);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(7294)),c=(i=a(1585))&&i.__esModule?i:{default:i},s=a(8e3),l=a(5850),m=a(5646);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var x=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var a=o.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var i=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var s=0,l=x.length;s<l;s++){var m=x[s];if(r.props.hasOwnProperty(m))if("charSet"===m)a.has(m)?i=!1:a.add(m);else{var d=r.props[m],u=n[m]||new Set;"name"===m&&o||!u.has(d)?(u.add(d),n[m]=u):i=!1}}}return i}}()).reverse().map((function(e,a){var i=e.key||a;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:i})}))}var f=function(e){var t=e.children,a=o.useContext(s.AmpStateContext),n=o.useContext(l.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:p,headManager:n,inAmpMode:m.isInAmpMode(a)},t)};t.default=f},1585:function(e,t,a){"use strict";var n=a(7980),r=a(3227),i=a(8361),o=(a(2191),a(5971)),c=a(2715),s=a(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=s(e);if(t){var r=s(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(7294));var d=function(e){o(a,e);var t=l(a);function a(e){var i;return r(this,a),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(m.Component);t.default=d},9658:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var n=a(9008),r=(a(1025),a(5400)),i=a(7294),o=a(7436),c=a.n(o),s=a(7882),l=JSON.parse('{"v":"5.6.1","fr":30,"ip":0,"op":46,"w":300,"h":300,"nm":"scroll","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"\u30b7\u30a7\u30a4\u30d7\u30ec\u30a4\u30e4\u30fc 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[148,129,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[1,10]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":26,"s":[1,100]},{"t":38,"s":[1,0]}],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,-50],"to":[0,8.333],"ti":[0,-16.667]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[0,0],"to":[0,16.667],"ti":[0,-8.333]},{"t":38,"s":[0,50]}],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"\u9577\u65b9\u5f62\u30d1\u30b9 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"\u7dda 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u5857\u308a 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3,50],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u9577\u65b9\u5f62 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":46,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"SCROLL Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[145,50.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[63.918,63.918,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.571,0],[0,2.514],[2.755,1.088],[0,1.523],[-2.224,0],[-0.508,-0.314],[0,0],[1.644,0],[0,-2.538],[-2.659,-0.967],[0,-1.499],[2.151,0],[0.943,0.604]],"o":[[0.87,0.58],[3.843,0],[0,-2.393],[-2.248,-0.87],[0,-1.112],[1.474,0],[0,0],[-0.701,-0.411],[-3.166,0],[0,2.272],[2.199,0.822],[0,1.668],[-1.45,0],[0,0]],"v":[[1.015,-0.798],[5.172,0.266],[10.852,-4.447],[6.719,-9.233],[3.48,-12.375],[6.55,-14.816],[9.62,-14.043],[10.2,-15.759],[6.623,-16.556],[1.354,-12.133],[5.656,-7.493],[8.725,-4.278],[5.317,-1.499],[1.571,-2.562]],"c":true},"ix":2},"nm":"S","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"S","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.305,0],[0,4.012],[-3.819,0],[-0.773,-0.387],[0,0],[2.006,0],[0,-5.124],[-4.592,0],[-0.749,0.387]],"o":[[-0.846,0.411],[-3.94,0],[0,-4.278],[1.354,0],[0,0],[-0.556,-0.29],[-5.052,0],[0,5.366],[1.982,0],[0,0]],"v":[[27.018,-2.199],[23.561,-1.523],[17.326,-8.073],[23.682,-14.792],[26.945,-14.115],[27.477,-15.831],[23.61,-16.556],[15.102,-8],[23.126,0.266],[27.429,-0.508]],"c":true},"ix":2},"nm":"C","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"C","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.483,-2.248],[-0.266,-0.459],[0,0],[0.532,2.272],[1.233,0.435],[0,0],[0,2.127],[0.798,0.701],[2.248,0],[1.063,-0.218]],"o":[[0,0],[0,0],[0,0],[1.909,0.073],[0.435,2.03],[0,0],[-0.314,-0.628],[-0.411,-1.692],[0,0],[1.692,-0.58],[0,-1.281],[-1.015,-0.918],[-1.426,0],[0,0]],"v":[[32.389,0],[34.491,0],[34.491,-7.058],[36.473,-7.058],[39.76,-3.891],[40.824,0],[42.999,0],[41.766,-4.471],[39.374,-7.759],[39.374,-7.831],[42.443,-11.964],[41.162,-15.058],[36.425,-16.411],[32.389,-16.049]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.015,0],[0,-2.103],[2.248,0],[0,0]],"o":[[0.363,-0.097],[2.224,0],[0,1.861],[0,0],[0,0]],"v":[[34.491,-14.574],[36.57,-14.768],[40.316,-11.747],[36.642,-8.653],[34.491,-8.653]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"R","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,5.583],[4.471,0],[0,-5.172],[-4.326,0]],"o":[[4.133,0],[0,-4.834],[-4.351,0],[0,4.931],[0,0]],"v":[[54.153,0.266],[61.694,-8.314],[54.346,-16.556],[46.805,-8],[54.129,0.266]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,3.432],[-3.505,0],[0,-3.239],[3.335,0]],"o":[[-3.311,0],[0,-3.529],[3.505,0],[0,3.698],[0,0]],"v":[[54.201,-1.45],[49.005,-8.049],[54.25,-14.84],[59.446,-8.218],[54.226,-1.45]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"O","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[66.684,0],[75.772,0],[75.772,-1.764],[68.811,-1.764],[68.811,-16.291],[66.684,-16.291]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"L","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[80.411,0],[89.499,0],[89.499,-1.764],[82.538,-1.764],[82.538,-16.291],[80.411,-16.291]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.921569943896,0.921569943896,0.921569943896,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"L","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}'),m=JSON.parse('{"v":"5.6.1","fr":30,"ip":0,"op":60,"w":100,"h":100,"nm":"scroll","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"\u30b7\u30a7\u30a4\u30d7\u30ec\u30a4\u30e4\u30fc 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[49.33333333333335,43.000000000000014,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[33.33333333333334,33.33333333333334,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[1,10]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":26,"s":[1,100]},{"t":38,"s":[1,0]}],"ix":2},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,-50],"to":[0,8.333],"ti":[0,-16.667]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":26,"s":[0,0],"to":[0,16.667],"ti":[0,-8.333]},{"t":38,"s":[0,50]}],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"\u9577\u65b9\u5f62\u30d1\u30b9 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,0],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"\u7dda 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,0],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"\u5857\u308a 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[3,50],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"\u9577\u65b9\u5f62 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":46,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"SCROLL Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[48.33333333333334,16.83333333333334,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[21.306000000000004,21.306000000000004,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.571,0],[0,2.514],[2.755,1.088],[0,1.523],[-2.224,0],[-0.508,-0.314],[0,0],[1.644,0],[0,-2.538],[-2.659,-0.967],[0,-1.499],[2.151,0],[0.943,0.604]],"o":[[0.87,0.58],[3.843,0],[0,-2.393],[-2.248,-0.87],[0,-1.112],[1.474,0],[0,0],[-0.701,-0.411],[-3.166,0],[0,2.272],[2.199,0.822],[0,1.668],[-1.45,0],[0,0]],"v":[[1.015,-0.798],[5.172,0.266],[10.852,-4.447],[6.719,-9.233],[3.48,-12.375],[6.55,-14.816],[9.62,-14.043],[10.2,-15.759],[6.623,-16.556],[1.354,-12.133],[5.656,-7.493],[8.725,-4.278],[5.317,-1.499],[1.571,-2.562]],"c":true},"ix":2},"nm":"S","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,0],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"S","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1.305,0],[0,4.012],[-3.819,0],[-0.773,-0.387],[0,0],[2.006,0],[0,-5.124],[-4.592,0],[-0.749,0.387]],"o":[[-0.846,0.411],[-3.94,0],[0,-4.278],[1.354,0],[0,0],[-0.556,-0.29],[-5.052,0],[0,5.366],[1.982,0],[0,0]],"v":[[27.018,-2.199],[23.561,-1.523],[17.326,-8.073],[23.682,-14.792],[26.945,-14.115],[27.477,-15.831],[23.61,-16.556],[15.102,-8],[23.126,0.266],[27.429,-0.508]],"c":true},"ix":2},"nm":"C","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"C","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-0.483,-2.248],[-0.266,-0.459],[0,0],[0.532,2.272],[1.233,0.435],[0,0],[0,2.127],[0.798,0.701],[2.248,0],[1.063,-0.218]],"o":[[0,0],[0,0],[0,0],[1.909,0.073],[0.435,2.03],[0,0],[-0.314,-0.628],[-0.411,-1.692],[0,0],[1.692,-0.58],[0,-1.281],[-1.015,-0.918],[-1.426,0],[0,0]],"v":[[32.389,0],[34.491,0],[34.491,-7.058],[36.473,-7.058],[39.76,-3.891],[40.824,0],[42.999,0],[41.766,-4.471],[39.374,-7.759],[39.374,-7.831],[42.443,-11.964],[41.162,-15.058],[36.425,-16.411],[32.389,-16.049]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[-1.015,0],[0,-2.103],[2.248,0],[0,0]],"o":[[0.363,-0.097],[2.224,0],[0,1.861],[0,0],[0,0]],"v":[[34.491,-14.574],[36.57,-14.768],[40.316,-11.747],[36.642,-8.653],[34.491,-8.653]],"c":true},"ix":2},"nm":"R","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"R","np":5,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,5.583],[4.471,0],[0,-5.172],[-4.326,0]],"o":[[4.133,0],[0,-4.834],[-4.351,0],[0,4.931],[0,0]],"v":[[54.153,0.266],[61.694,-8.314],[54.346,-16.556],[46.805,-8],[54.129,0.266]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,3.432],[-3.505,0],[0,-3.239],[3.335,0]],"o":[[-3.311,0],[0,-3.529],[3.505,0],[0,3.698],[0,0]],"v":[[54.201,-1.45],[49.005,-8.049],[54.25,-14.84],[59.446,-8.218],[54.226,-1.45]],"c":true},"ix":2},"nm":"O","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"O","np":5,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[66.684,0],[75.772,0],[75.772,-1.764],[68.811,-1.764],[68.811,-16.291],[66.684,-16.291]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"L","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[80.411,0],[89.499,0],[89.499,-1.764],[82.538,-1.764],[82.538,-16.291],[80.411,-16.291]],"c":true},"ix":2},"nm":"L","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"L","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}'),d=a(9464),u=a(9389),x=a(5893);function p(){var e={loop:!0,autoplay:!0,animationData:l,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},t={loop:!0,autoplay:!0,animationData:m,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},a=(0,u.b)();return(0,x.jsx)("div",{children:(0,x.jsx)(d.Z,{options:"dark"==a.theme?e:t,height:200,width:100})})}function f(){var e=(0,u.b)();return(0,x.jsxs)("div",{className:"".concat(c().titlecontent," relative h-[100vh] w-full"),children:[(0,x.jsx)("div",{className:"".concat(c().screenanimate," absolute z-[40] bottom-[3rem]"),children:(0,x.jsx)(p,{})}),(0,x.jsx)("div",{className:"w-full h-full flex items-center",children:(0,x.jsxs)("div",{className:"".concat(c().content," row items-center"),children:[(0,x.jsx)("div",{className:"col-lg-2 ".concat(c().ul_icon),children:(0,x.jsxs)("ul",{className:"".concat(c().ul_icon_content," ").concat("dark"==e.theme?"text-[#fafafa6e]":"text-[#3f3f3f6e]"),children:[(0,x.jsx)("li",{className:"py-[1rem]",children:(0,x.jsx)(s.k1O,{className:"w-[2rem] h-[2rem]"})}),(0,x.jsx)("li",{className:"py-[1rem]",children:(0,x.jsx)(s.NQh,{className:"w-[2rem] h-[2rem]"})}),(0,x.jsx)("li",{className:"py-[1rem]",children:(0,x.jsx)(s.rFR,{className:"w-[2rem] h-[2rem]"})})]})}),(0,x.jsxs)("div",{className:"col-lg-5 gap-3",children:[(0,x.jsxs)("div",{className:"".concat(c().title," ").concat("dark"==e.theme?"text-[#fafafa]":"text-[#3f3f3f]"),children:[(0,x.jsx)("h1",{className:"".concat("dark"==e.theme?"text-[#fafafa]":"text-[#3f3f3f]"),children:"Hi' I am"}),(0,x.jsx)("h2",{className:"".concat("dark"==e.theme?"text-[#fafafa]":"text-[#3f3f3f]"),children:"Jetniphan Pukkham"}),(0,x.jsx)("h3",{className:"".concat("dark"==e.theme?"text-[#fafafa6e]":"text-[#3f3f3f6e]"),children:"Web Developer"}),(0,x.jsx)("div",{className:"personal pt-[2rem]",children:(0,x.jsx)("span",{children:"Web Developer with hands-on experience in JavaScript, TypeScript, html, CSS, Angular Framework, NextJS. And also experience in Back-End Developer such as Nodejs, Express, NestJS Framework, GCP, and others."})})]}),(0,x.jsx)("div",{className:"flex justify-content-center w-full pt-[2rem]",children:(0,x.jsx)("div",{className:"".concat(c().button),children:(0,x.jsx)(r.default,{className:"".concat(c().button_text),type:"primary",shape:"round",icon:(0,x.jsx)(s.EpS,{className:"text-[18px]"}),children:"Contactme"})})})]}),(0,x.jsx)("div",{className:"col-lg-5 w-full flex justify-content-center",children:(0,x.jsx)("div",{className:"".concat(c().img),children:(0,x.jsx)("img",{src:"/IMG_4099.jpg",alt:"profile"})})})]})})]})}var h=a(9470),k=a.n(h),y=(a(7785),a(9361)),v=a(8633),b=a.n(v);function g(){var e=(0,u.b)();return(0,x.jsxs)("div",{className:"".concat(b().about," w-full row justify-content-center h-[100vh] pt-[100px] m-0"),children:[(0,x.jsxs)("div",{className:"text-center ".concat("dark"==e.theme?b().title_dark:b().title),children:[(0,x.jsx)("h1",{children:"Aboutme"}),(0,x.jsx)("p",{children:"Personal Profile"})]}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-6 flex justify-content-center",children:(0,x.jsx)("div",{className:"".concat(b().img),children:(0,x.jsx)("img",{src:"/aboutme.jpg",alt:"about"})})}),(0,x.jsxs)("div",{className:"".concat(b().content," col-lg-6"),children:[(0,x.jsxs)("div",{className:"".concat("dark"==e.theme?b().header_dark:b().header," gap-4"),children:[(0,x.jsx)("h1",{children:"Jetniphan Pukkham"}),(0,x.jsx)(y.Z,{color:"#7868e6",children:"FrontEnd"}),(0,x.jsx)(y.Z,{color:"#7868e6",children:"BackEnd"}),(0,x.jsx)(y.Z,{color:"#7868e6",children:"FullStack"})]}),(0,x.jsx)("div",{className:"".concat("dark"==e.theme?b().text_dark:b().text," pt-[1rem] leading-relaxed"),children:(0,x.jsx)("p",{children:"Hello. My name is Jetniphan Pukkham, everyone call me Jaay. I'm studying at King Mongkut's University of Technology Thonburi. My major was Electronic and Telecommunication Engineer. I'm interested about Web Development."})}),(0,x.jsx)("div",{className:"button w-full flex flex justify-content-center pt-[2rem]",children:(0,x.jsx)(r.default,{className:"".concat(b().button_text),type:"primary",shape:"round",icon:(0,x.jsx)(s.Tg4,{className:"text-[18px]"}),children:"Resume"})})]})]})]})}var _=function(){var e=(0,u.b)();return(0,i.useEffect)((function(){var t=localStorage.getItem("theme");void 0==t?localStorage.setItem("theme",e.theme):e.setTheme("dark"==t?"dark":"light")}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(n.default,{children:[(0,x.jsx)("title",{children:"Jetniphan Pukkham-@All about me."}),(0,x.jsx)("meta",{name:"theme-color",content:"#FC4F4F"}),(0,x.jsx)("meta",{property:"og:type",content:"website"}),(0,x.jsx)("meta",{name:"description",content:"Jetniphan Pukkham-@All about me."}),(0,x.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,x.jsx)("div",{className:"".concat("dark"==e.theme?"bg-content":".bg-content-light"," content"),children:(0,x.jsxs)("div",{className:"container pt-[70px]",children:[(0,x.jsx)("div",{className:"padding_in pr-[100px] pl-[100px]",children:(0,x.jsx)(k(),{bottom:!0,when:e.animation,children:(0,x.jsx)(f,{})})}),(0,x.jsx)("div",{className:"twocontent row w-full m-0 pr-[100px] pl-[100px]",children:(0,x.jsx)(g,{})})]})})]})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9658)}])},8633:function(e){e.exports={title_dark:"aboutme_title_dark__YcfO3",title:"aboutme_title__qbAxC",img:"aboutme_img__f4pex",header_dark:"aboutme_header_dark__qQwLw",header:"aboutme_header__5kEya",button_text:"aboutme_button_text__zU0Wu",text_dark:"aboutme_text_dark__ogChw",text:"aboutme_text__u_WrM",content:"aboutme_content___Zj4M"}},7436:function(e){e.exports={ul_icon_content:"titlecontent_ul_icon_content__XCvOy",title:"titlecontent_title__ssWVy",button:"titlecontent_button__VrpyP",button_text:"titlecontent_button_text__xH1sE",img:"titlecontent_img__czQ_6",screenanimate:"titlecontent_screenanimate__7bhQc",titlecontent:"titlecontent_titlecontent__KhnlQ",ul_icon:"titlecontent_ul_icon__BYGyK",content:"titlecontent_content__dHG1p"}},7309:function(){},9008:function(e,t,a){e.exports=a(2717)}},function(e){e.O(0,[359,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);