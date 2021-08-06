(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[418],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:100},p={unversionedId:"manual_install",id:"manual_install",isDocsHomePage:!1,title:"Manual installation",description:"iOS",source:"@site/docs/manual_install.md",sourceDirName:".",slug:"/manual_install",permalink:"/docs/manual_install",editUrl:"https://github.com/dooboolab/react-native-iap/edit/master/docs/docs/manual_install.md",version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Product",permalink:"/docs/api_reference/product"},next:{title:"Amazon IAP Support",permalink:"/docs/amazon"}},d=[],s={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"ios"},"iOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In XCode, in the project navigator, right click ",(0,i.kt)("inlineCode",{parentName:"li"},"Libraries")," \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Files to [your project's name]")),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"react-native-iap")," and add ",(0,i.kt)("inlineCode",{parentName:"li"},"RNIap.xcodeproj")),(0,i.kt)("li",{parentName:"ol"},"In XCode, in the project navigator, select your project. Add ",(0,i.kt)("inlineCode",{parentName:"li"},"libRNIap.a")," to your project's ",(0,i.kt)("inlineCode",{parentName:"li"},"Build Phases")," \u279c ",(0,i.kt)("inlineCode",{parentName:"li"},"Link Binary With Libraries")),(0,i.kt)("li",{parentName:"ol"},"Run your project (",(0,i.kt)("inlineCode",{parentName:"li"},"Cmd+R"),")<")),(0,i.kt)("h4",{id:"ios-with-podfile"},"iOS with Podfile"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up ",(0,i.kt)("inlineCode",{parentName:"li"},"ios/Podfile"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"pod 'RNIap', :path => '../node_modules/react-native-iap'"))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"pod install"))),(0,i.kt)("h4",{id:"android"},"Android"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open up ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/[...]/MainApplication.java")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"import com.dooboolab.RNIap.RNIapPackage;")," to the imports at the top of the file"),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"new RNIapPackage()")," to the list returned by the ",(0,i.kt)("inlineCode",{parentName:"li"},"getPackages()")," method"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Append the following lines to ",(0,i.kt)("inlineCode",{parentName:"p"},"android/settings.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"include ':react-native-iap'\nproject(':react-native-iap').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-iap/android')\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert the following lines inside the dependencies block in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"compile project(':react-native-iap')\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You have two options depending on the stores you support:"),(0,i.kt)("p",{parentName:"li"},"a. If you only need for Google Play IAP, Insert this inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultConfig")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"defaultConfig {\n      ...\n      // react-native-iap: we only use the Google Play flavor\n      missingDimensionStrategy 'store', 'play'\n  }\n")),(0,i.kt)("p",{parentName:"li"},"b. If you are using it for both Google Play and Amazon, insert the following lines inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," block in ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/build.gradle")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'android {\n  ...\n  flavorDimensions "appstore"\n  productFlavors{\n      googlePlay{\n          dimension "appstore"\n          missingDimensionStrategy "store", "play"\n      }\n      amazon{\n          dimension "appstore"\n          missingDimensionStrategy "store", "amazon"\n      }\n  }\n}\n')))))}c.isMDXComponent=!0}}]);