!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e["leaflet-simple-map-screenshoter"]=e["leaflet-simple-map-screenshoter"]||{})}(this,function(e){"use strict";var t=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e){!function(t){function n(e,t){function n(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width=t.width+"px"),t.height&&(e.style.height=t.height+"px"),t.style&&Object.keys(t.style).forEach(function(n){e.style[n]=t.style[n]}),e}return t=t||{},c(t),Promise.resolve(e).then(function(e){return l(e,t.filter,!0)}).then(u).then(h).then(n).then(function(n){return f(n,t.width||d.width(e),t.height||d.height(e))})}function r(e,t){return s(e,t||{}).then(function(t){return t.getContext("2d").getImageData(0,0,d.width(e),d.height(e)).data})}function o(e,t){return s(e,t||{}).then(function(e){return e.toDataURL()})}function i(e,t){return t=t||{},s(e,t).then(function(e){return e.toDataURL("image/jpeg",t.quality||1)})}function a(e,t){return s(e,t||{}).then(d.canvasToBlob)}function c(e){void 0===e.imagePlaceholder?w.impl.options.imagePlaceholder=M.imagePlaceholder:w.impl.options.imagePlaceholder=e.imagePlaceholder,void 0===e.cacheBust?w.impl.options.cacheBust=M.cacheBust:w.impl.options.cacheBust=e.cacheBust}function s(e,t){function r(e){var n=document.createElement("canvas");if(n.width=t.width||d.width(e),n.height=t.height||d.height(e),t.bgcolor){var r=n.getContext("2d");r.fillStyle=t.bgcolor,r.fillRect(0,0,n.width,n.height)}return n}return n(e,t).then(d.makeImage).then(d.delay(100)).then(function(t){var n=r(e);return n.getContext("2d").drawImage(t,0,0),n})}function l(e,t,n){function r(e){return e instanceof HTMLCanvasElement?d.makeImage(e.toDataURL()):e.cloneNode(!1)}function o(e,t,n){var r=e.childNodes;return 0===r.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&e.appendChild(t)})}),r}(t,d.asArray(r),n).then(function(){return t})}function i(e,t){function n(){!function(e,t){e.cssText?t.cssText=e.cssText:function(e,t){d.asArray(e).forEach(function(n){t.setProperty(n,e.getPropertyValue(n),e.getPropertyPriority(n))})}(e,t)}(window.getComputedStyle(e),t.style)}function r(){function n(n){var r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=d.uid();t.className=t.className+" "+i;var a=document.createElement("style");a.appendChild(function(e,t,n){var r="."+e+":"+t,o=n.cssText?function(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}(n):function(e){function t(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}return d.asArray(e).map(t).join("; ")+";"}(n);return document.createTextNode(r+"{"+o+"}")}(i,n,r)),t.appendChild(a)}}[":before",":after"].forEach(function(e){n(e)})}function o(){e instanceof HTMLTextAreaElement&&(t.innerHTML=e.value),e instanceof HTMLInputElement&&t.setAttribute("value",e.value)}function i(){t instanceof SVGElement&&(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t instanceof SVGRectElement&&["width","height"].forEach(function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))}return t instanceof Element?Promise.resolve().then(n).then(r).then(o).then(i).then(function(){return t}):t}return n||!t||t(e)?Promise.resolve(e).then(r).then(function(n){return o(e,n,t)}).then(function(t){return i(e,t)}):Promise.resolve()}function u(e){return m.resolveAll().then(function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e})}function h(e){return g.inlineAll(e).then(function(){return e})}function f(e,t,n){return Promise.resolve(e).then(function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)}).then(d.escapeXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+n+'">'+e+"</svg>"}).then(function(e){return"data:image/svg+xml;charset=utf-8,"+e})}var d=function(){function e(){var e="application/font-woff";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);return t?t[1]:""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return-1!==e.search(/^(data:)/)}function o(e){return new Promise(function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}function i(e){return e.toBlob?new Promise(function(t){e.toBlob(t)}):o(e)}function a(e,t){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=t,o.href=e,o.href}function c(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e})}function s(e){var t=3e4;return w.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise(function(n){function r(){if(4===a.readyState){if(200!==a.status)return void(c?n(c):i("cannot fetch resource: "+e+", status: "+a.status));var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)},t.readAsDataURL(a.response)}}function o(){c?n(c):i("timeout of "+t+"ms occured while fetching resource: "+e)}function i(e){console.error(e),n("")}var a=new XMLHttpRequest;a.onreadystatechange=r,a.ontimeout=o,a.responseType="blob",a.timeout=t,a.open("GET",e,!0),a.send();var c;if(w.impl.options.imagePlaceholder){var s=w.impl.options.imagePlaceholder.split(/,/);s&&s[1]&&(c=s[1])}})}function l(e,t){return"data:"+t+";base64,"+e}function u(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function h(e){return function(t){return new Promise(function(n){setTimeout(function(){n(t)},e)})}}function f(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}function d(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function p(e){var t=g(e,"border-left-width"),n=g(e,"border-right-width");return e.scrollWidth+t+n}function m(e){var t=g(e,"border-top-width"),n=g(e,"border-bottom-width");return e.scrollHeight+t+n}function g(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}return{escape:u,parseExtension:t,mimeType:n,dataAsUrl:l,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:s,uid:function(){var e=0;return function(){return"u"+function(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}()+e++}}(),delay:h,asArray:f,escapeXhtml:d,makeImage:c,width:p,height:m}}(),p=function(){function e(e){return-1!==e.search(o)}function t(e){for(var t,n=[];null!==(t=o.exec(e));)n.push(t[1]);return n.filter(function(e){return!d.isDataUrl(e)})}function n(e,t,n,r){function o(e){return new RegExp("(url\\(['\"]?)("+d.escape(e)+")(['\"]?\\))","g")}return Promise.resolve(t).then(function(e){return n?d.resolveUrl(e,n):e}).then(r||d.getAndEncode).then(function(e){return d.dataAsUrl(e,d.mimeType(t))}).then(function(n){return e.replace(o(t),"$1"+n+"$3")})}function r(r,o,i){return function(){return!e(r)}()?Promise.resolve(r):Promise.resolve(r).then(t).then(function(e){var t=Promise.resolve(r);return e.forEach(function(e){t=t.then(function(t){return n(t,e,o,i)})}),t})}var o=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:r,shouldProcess:e,impl:{readUrls:t,inline:n}}}(),m=function(){function e(){return t(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})}function t(){function e(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return p.shouldProcess(e.style.getPropertyValue("src"))})}function t(e){var t=[];return e.forEach(function(e){try{d.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}}),t}function n(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return p.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}return Promise.resolve(d.asArray(document.styleSheets)).then(t).then(e).then(function(e){return e.map(n)})}return{resolveAll:e,impl:{readAll:t}}}(),g=function(){function e(e){function t(t){return d.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src).then(t||d.getAndEncode).then(function(t){return d.dataAsUrl(t,d.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n,e.onerror=r,e.src=t})})}return{inline:t}}function t(n){return n instanceof Element?function(e){var t=e.style.getPropertyValue("background");return t?p.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e}):Promise.resolve(e)}(n).then(function(){return n instanceof HTMLImageElement?e(n).inline():Promise.all(d.asArray(n.childNodes).map(function(e){return t(e)}))}):Promise.resolve(n)}return{inlineAll:t,impl:{newImage:e}}}(),M={imagePlaceholder:void 0,cacheBust:!1},w={toSvg:n,toPng:o,toJpeg:i,toBlob:a,toPixelData:r,impl:{fontFaces:m,images:g,util:d,inliner:p,options:{}}};e.exports=w}()})),n=L.Control.extend({options:{cropImageByInnerWH:!0,hidden:!1,domtoimageOptions:{},position:"topleft",screenName:"screen",iconUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIGlkPSJjYW1lcmEiPjxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMTYsOS41MDFjLTQuNDE5LDAtOCwzLjU4MS04LDhjMCw0LjQxOCwzLjU4MSw4LDgsOGM0LjQxOCwwLDgtMy41ODIsOC04UzIwLjQxOCw5LjUwMSwxNiw5LjUwMXogTTIwLjU1NSwyMS40MDZjLTIuMTU2LDIuNTE2LTUuOTQzLDIuODA3LTguNDU5LDAuNjVjLTIuNTE3LTIuMTU2LTIuODA3LTUuOTQ0LTAuNjUtOC40NTljMi4xNTUtMi41MTcsNS45NDMtMi44MDcsOC40NTktMC42NUMyMi40MiwxNS4xMDIsMjIuNzExLDE4Ljg5MSwyMC41NTUsMjEuNDA2eiIvPjxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMTYsMTMuNTAxYy0yLjIwOSwwLTMuOTk5LDEuNzkxLTQsMy45OTl2MC4wMDJjMCwwLjI3NSwwLjIyNCwwLjUsMC41LDAuNXMwLjUtMC4yMjUsMC41LTAuNVYxNy41YzAuMDAxLTEuNjU2LDEuMzQzLTIuOTk5LDMtMi45OTljMC4yNzYsMCwwLjUtMC4yMjQsMC41LTAuNVMxNi4yNzYsMTMuNTAxLDE2LDEzLjUwMXoiLz48cGF0aCBzdHlsZT0iZmlsbDojMDEwMDAyOyIgZD0iTTI5LjQ5Miw4LjU0MmwtNC4zMzQtMC43MjNsLTEuMzczLTMuNDM0QzIzLjMyNiwzLjI0LDIyLjIzMiwyLjUsMjEsMi41SDExYy0xLjIzMiwwLTIuMzI2LDAuNzQtMi43ODYsMS44ODZMNi44NDIsNy44MTlMMi41MDksOC41NDJDMS4wNTUsOC43ODMsMCwxMC4wMjcsMCwxMS41djE1YzAsMS42NTQsMS4zNDYsMywzLDNoMjZjMS42NTQsMCwzLTEuMzQ2LDMtM3YtMTVDMzIsMTAuMDI3LDMwLjk0NSw4Ljc4MywyOS40OTIsOC41NDJ6IE0zMCwyNi41YzAsMC41NTMtMC40NDcsMS0xLDFIM2MtMC41NTMsMC0xLTAuNDQ3LTEtMXYtMTVjMC0wLjQ4OSwwLjM1NC0wLjkwNiwwLjgzNi0wLjk4Nkw4LjI4LDkuNjA3bDEuNzkxLTQuNDc4QzEwLjIyNCw0Ljc1LDEwLjU5MSw0LjUsMTEsNC41aDEwYzAuNDA4LDAsMC43NzUsMC4yNDksMC45MjgsMC42MjlsMS43OTEsNC40NzhsNS40NDUsMC45MDdDMjkuNjQ2LDEwLjU5NCwzMCwxMS4wMTEsMzAsMTEuNVYyNi41eiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+",hideElementsWithSelectors:[".leaflet-control-container"],onCropBorderSize:2,caption:null,captionFontSize:15,captionFont:"Arial",captionColor:"black",captionBgColor:"white",captionOffset:5,mimeType:"image/png",debugMode:!1},onAdd:function(){return this._container=L.DomUtil.create("div","leaflet-control-simpleMapScreenshoter"),this._link=null,this._screenState={status:1,promise:null},!1===this.options.hidden&&this._addScreenBtn(),this._container},takeScreen:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blob",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={};for(var o in this.options)n.hasOwnProperty(o)?r[o]=n[o]:r[o]=this.options[o];return 2===this._screenState.status?this._screenState.promise:(this._map.fire("simpleMapScreenshoter.takeScreen"),this._screenState.status=2,this._setElementsVisible(!1),this._screenState.promise=this._getPixelData(r).then(function(t){return e._setElementsVisible(!0),e._toCanvas(t,r)}).then(function(n){return"image"===t?e._canvasToImage(n,r):"canvas"===t?n:e._canvasToBlob(n)}).then(function(t){return e._screenState.status=1,e._map.fire("simpleMapScreenshoter.done"),t}).catch(function(t){return e._setElementsVisible(!0),e._screenState.status=1,e._map.fire("simpleMapScreenshoter.error",{e:t}),Promise.reject(t)}),this._screenState.promise)},_setElementsVisible:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.options.hideElementsWithSelectors.forEach(function(n){var r=e._map._container.querySelectorAll(n),o=!0,i=!1,a=void 0;try{for(var c,s=r[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){c.value.style.opacity=!1===t?0:1}}catch(e){i=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw a}}})},_canvasToImage:function(e,t){var n=t.mimeType,r=e.toDataURL(n);return-1===r.indexOf("base64")?Promise.reject(new Error("Base64 image generation error")):Promise.resolve(r)},_canvasToBlob:function(e){return new Promise(function(t,n){e.toBlob(function(e){t(e)},"image/png")})},_toCanvas:function(e,t){var n=t.captionOffset,r=t.caption,o=t.captionFontSize,i=t.captionFont,a=t.captionColor,c=t.captionBgColor,s=this._node,l=s.screenHeight,u=s.screenWidth,h=document.createElement("canvas");h.width=u,h.height=l;for(var f=h.getContext("2d"),d=f.createImageData(u,l),p=0;p<e.length;++p)d.data[p]=e[p];f.putImageData(d,0,0),d=null;var m=document.createElement("canvas"),g=m.getContext("2d"),M=0,w=0,v=l,y=u;if(!0===this.options.cropImageByInnerWH){for(var L=0,x=l,j=u,T={},P={},C=[],S=0,D=0;D<l;++D){S=0;for(var N=0;N<u;++N)L=4*D*u+4*N,0===e[L+4]&&S++;S===u&&C.push(D)}var b=this._getMinAndMaxOnValuesBreak(C);M=b.min,x=b.max;for(var E=[],I=0,z=w;z<j;++z){I=0;for(var A=0;A<l;++A)L=4*A*u+4*z,0===e[L+4]&&I++;I===l&&E.push(z)}var U=this._getMinAndMaxOnValuesBreak(E);w=U.min,j=U.max,(0===w&&0===j||null===j)&&(j=u),(0===M&&0===x||null===x)&&(x=l),!0===this.options.debugMode&&(console.log("emptyYLine",C),console.log("minMaxY",b),console.log("emptyXLine",E),console.log("minMaxX",U),console.log("debugX",P),console.log("debugY",T)),0===M&&x===l&&0===w&&j===u||(M+=this.options.onCropBorderSize,x-=this.options.onCropBorderSize,w+=this.options.onCropBorderSize,j-=this.options.onCropBorderSize),v=x-M,y=j-w,m.width=y,m.height=v}else m.width=y,m.height=v;var k=null;return r&&(k="function"==typeof r?r.call(this):r),null!==k&&(m.height=m.height+(n+o+n),g.beginPath(),g.rect(0,0,m.width,m.height),g.fillStyle=c,g.fill(),g.save()),g.drawImage(h,w,M,y,v,0,0,y,v),null!==k&&(g.font=o+"px "+i,g.fillStyle=a,g.fillText(k,n,v+n+o)),Promise.resolve(m)},_getMinAndMaxOnValuesBreak:function(e){for(var t=0,n=0,r=!1,o=1;o<e.length;o++){if(e[o]-1!==e[o-1]){n=e[o],r=!0;break}t=e[o]}return!1===r&&e[0]>1?(t=0,n=e[0]):!1===r&&(t=e[e.length-1]||0,n=null),{min:t,max:n}},_getPixelData:function(e){var n=e.domtoimageOptions,r=void 0===n?{}:n,o=this._map.getContainer(),i=this._map.getPane("mapPane");i.style.width=2*o.clientWidth+"px",i.style.height=2*o.clientHeight+"px",i.style.overflow="hidden";var a=function(){i.style.width="initial",i.style.height="initial",i.style.overflow="initial"};return this._node={node:o,screenHeight:o.scrollHeight,screenWidth:o.scrollWidth},t.toPixelData(o,r).then(function(e){return a(),e}).catch(function(e){return a(),Promise.reject(e)})},_addScreenBtn:function(){this._link=L.DomUtil.create("a","leaflet-control-simpleMapScreenshoter-btn",this._container),this._addCss(),L.DomEvent.addListener(this._link,"click",this._onScreenBtn,this),L.DomEvent.disableClickPropagation(this._link)},_addCss:function(){var e="\n    .leaflet-control-simpleMapScreenshoter{\n       border: 2px solid rgba(0,0,0,0.2);\n       background-clip: padding-box;\n    }\n    .leaflet-control-simpleMapScreenshoter a{\n       background-color: #fff;\n       border-bottom: 1px solid #ccc;\n       width: 30px;\n       height: 30px;\n       line-height: 30px;\n       display: block;\n       text-align: center;\n       text-decoration: none;\n       color: black;\n       overflow: hidden;\n       border-radius: 2px;\n       background-image: url('"+this.options.iconUrl+"');\n       background-position: 46% 41%;\n       background-repeat: no-repeat;\n       background-size: 63%;\n    }\n    .leaflet-control-simpleMapScreenshoter a:hover{\n       cursor: pointer;\n    }\n    ",t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.appendChild(document.createTextNode(e)),t.appendChild(n)},_onScreenBtn:function(){var e=this;this._map.fire("simpleMapScreenshoter.click"),this.takeScreen().then(function(t){var n=document.createElement("a"),r=window.URL.createObjectURL(t);document.body.appendChild(n),n.href=r;var o="function"==typeof e.options.screenName?e.options.screenName.call(e):e.options.screenName;n.download=o+".png",n.click(),window.URL.revokeObjectURL(r)}).catch(function(t){e._map.fire("simpleMapScreenshoter.error",{e:t})})}}),r=function(){L.Control.SimpleMapScreenshoter=n,L.simpleMapScreenshoter=function(e){return new L.Control.SimpleMapScreenshoter(e)}}();e.default=r,e.SimpleMapScreenshoter=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=leaflet-simple-map-screenshoter.js.map
