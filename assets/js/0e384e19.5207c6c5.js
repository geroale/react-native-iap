(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"React Native IAP",description:"This react-native module will help you access the In-app purchases capabilities of your phone on the Android, iOS platforms and the Amazon platform (Beta).",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/dooboolab/react-native-iap/edit/master/docs/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installing",permalink:"/docs/installing"}},p=[{value:"Package limitations",id:"package-limitations",children:[]}],s={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This react-native module will help you access the In-app purchases capabilities of your phone on the Android, iOS platforms and the Amazon platform (Beta)."),(0,o.kt)("p",null,"Keep in mind react-native-iap will provide the basic features you need but is not a turnkey solution, implementing In-app purchases in your app will still require quite some work."),(0,o.kt)("p",null,"To get started right away, follow the instructions on ",(0,o.kt)("a",{parentName:"p",href:"/docs/installing"},"Installing")," and then go to the ",(0,o.kt)("strong",{parentName:"p"},"Getting started")," section."),(0,o.kt)("h2",{id:"package-limitations"},"Package limitations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep in mind")," ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-iap")," will provide the basic features you need but is not a turnkey solution, implementing In-app purchases in your app will still require quite some work."),(0,o.kt)("p",null,"Also, implementing the client side is only one side of the coin, you'll have to implement the server side to validate your receipts (which is probably the most time consuming part to do it correctly)."))}u.isMDXComponent=!0}}]);