(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},I5cv:function(e,t,r){var n=r("XKFU"),o=r("Kuth"),c=r("2OiF"),a=r("y3w9"),i=r("0/R4"),u=r("eeVq"),f=r("8MEG"),l=(r("dyZX").Reflect||{}).construct,p=u((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),s=!u((function(){l((function(){}))}));n(n.S+n.F*(p||s),"Reflect",{construct:function(e,t){c(e),a(t);var r=arguments.length<3?e:c(arguments[2]);if(s&&!p)return l(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(f.apply(e,n))}var u=r.prototype,y=o(i(u)?u:Object.prototype),m=Function.apply.call(e,y,t);return i(m)?m:y}})},X8hv:function(e,t,r){function n(e,t,r){return(n=o()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var p=r("q1tI"),s=r("7ljp"),y=s.useMDXComponents,m=s.mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,o=e.children,c=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["scope","components","children"]),i=y(r),u=d(t),l=p.useMemo((function(){if(!o)return null;var e=f({React:p,mdx:m},u),t=Object.keys(e),r=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(r)))}),[o,t]);return p.createElement(l,f({components:i},c))}},sweJ:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y})),r.d(t,"pageQuery",(function(){return m}));var n=r("q1tI"),o=r.n(n),c=r("hlFM"),a=r("ofer"),i=r("RD7I"),u=r("9eSz"),f=r.n(u),l=r("A2+M"),p=r("7oih"),s=Object(i.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Merriweather, Georgia, serif",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}}}}));function y(e){var t=e.data,r=s(),n=t.mdx,i=n.frontmatter,u=i.featuredImage,y=i.title,m=n.body;return o.a.createElement(p.a,null,o.a.createElement(c.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},o.a.createElement(c.a,{padding:2},o.a.createElement(c.a,{marginBottom:1},o.a.createElement(a.a,{variant:"h4",style:{fontFamily:"Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"}},y)),o.a.createElement(f.a,{fluid:u.childImageSharp.fluid,style:{borderRadius:2}}),o.a.createElement("article",{className:r.article},o.a.createElement(l.MDXRenderer,null,m)))))}var m="3761546879"}}]);
//# sourceMappingURL=component---src-templates-page-js-a24bfb03bb252aac586f.js.map