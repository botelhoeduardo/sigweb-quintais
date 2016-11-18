/**
 * A geocoder extension for OpenLayers 3.
 * https://github.com/jonataswalker/ol3-geocoder
 * Version: v2.1.0
 * Built: 2016-06-16T11:50:12-0300
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Geocoder=t()}(this,function(){"use strict";var e="ol3-geocoder",t="-container",r="-search",n="-btn-search",s="-loading",a="-result",o="-search-expanded",i="-country",l="-city",c="-road",u="ol-control",p="form-geocoder",d="-input-search",m="gcd-input",h={ADDRESSCHOSEN:"addresschosen"},f=[new ol.style.Style({image:new ol.style.Icon({anchor:[.5,1],src:["data:image/png;base64,","iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAABmJLR0QA/wD/AP+gvaeT","AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AQWCiErd9Z21AAABAJJREFUWMPVm","U1oXFUUx3/3zatJx04SDOgiVUMSgrXJwpqIKy26SrKoLjQgCkIFW7otuCvdllbo1q6Epg","vNQvtx710lEFdihwpSjdikJLGJWEhrM9MyX7nPxbypwzBv5n3cqXpgmOHOuff/mzPn3Pf","ueWDBpqZnrPq1M5EUVitZ+9wPvA0cAgaALqAIbAI3gAWt5HbjvCcGXROdmp4RwDDwBfBW","iKmLwKfAqlbSiwvvJAAeAeaBWyGB8f1uAfNT0zMj/jqdjXQd8Ds+sJsguyrAe1rJb6NGX","MQAPgJ8k7QefPOAd7WSl6OAi4jAk8D3cdKqhRngda3k9bDgUSL9NLAO9GPftoEXtZIPrR","WiXyzHwwAbA8WyoFAUFMsCY0JB9wPHwxalGyH3T4RxHByo8MZEgf4+w/ZfDt9lu9n4I5T","MCeBzP8+tQL8KDAZuA7swOljh4yM5JsaKGAPGA0fABzN5sje7+PJyht/WXNxU8O/1dbK2","9ulPWn05tL/CqWP3GR8tUSgKSmVBpVJ9LxQF46MlTh27z9D+SiKdqNCBFw/jwexUnr4eg","xfwx3oe9PUYZqfyGC+eThzo4SCYTNpweLLQtuCMgcOTBTLp4B8XpBMXuqnfroGxkTIi5M","YpRNV/1yTjCQv9oHmkBXu7vRD1/s/1b2+3h+eJSDpxoa83G0w5HisbLqRCrpKClQ2XlON","F0okL/XXTyQ6sbe1h/Y7bNkWEgPU7Lmtbe3CcaDpxoS8CuaYbfcpj7mqmVXE9Ltq5qxnc","VKBjztexBl0Azgd9uZTt4spimlJZkHKqUa29Ug6UyoIri2mWsl2tNM77OlZvmIaBn4B00","6tiRfDSUIk3JwocerlIzz7DTt7hxi9dLGW7+fX2U7huYJQfAeNayduduDX9Cni/3X5sPI","HnVSPtCK9VDj/OZa3krPVbUx++J+y2FNF6tZI71s+IfhR2gNOWgU9rJXeinBUjnxGBF4A","fgWcsAN8DXgE2OnJGbIC/CHxoAXpOK/lRx1sIvn1mKTVirRO377EFnE0IfFYrudXxvkdD","bvcCvwOZGEvkgOeBB0+kwwTU9tIccClmlC8Bubj9vKQNyAPAzxHX8YCDWsnluLpOAmB84","fmIU+e1kstJ2r42OkVH/S5R2G7S0aSCsaFrHU+tZB44F3LaOa1k/l/pTzfZSQ4APwD7Wr","jmgdeA5STAttKjltsLbdwWkhSf1UjXRfxZ4M8WLs9pJe/a0HIsAeMDnQlwOaOVvPufeFD","UJLcH/H27t6EtcBDYTJrLViNdl9ubwLWG4Wv+uDUTWDb/LLlSNzSilVy1qeFYBsYHvOAP","XdBKrtrK5Y5A19lJqo8kTnZi8U6kRy0YY8BNwNgqwP+1/Q09w5giQWRk7AAAAABJRU5Er","kJggg=="].join("")})})],y={OSM:"osm",MAPQUEST:"mapquest",GOOGLE:"google",PHOTON:"photon",PELIAS:"pelias"},g={provider:y.OSM,placeholder:"Search for an address",featureStyle:f,lang:"en-US",limit:5,keepOpen:!1,preventDefault:!1,debug:!1},v={toQueryString:function(e){var t=this;return Object.keys(e).reduce(function(r,n){return r.push("object"==typeof e[n]?t.toQueryString(e[n]):encodeURIComponent(n)+"="+encodeURIComponent(e[n])),r},[]).join("&")},encodeUrlXhr:function(e,t){if(t&&"object"==typeof t){var r=this.toQueryString(t);e+=(/\?/.test(e)?"&":"?")+r}return e},json:function(e,t){var r=new XMLHttpRequest,n={},s=function(){200===r.status&&n.ready.call(void 0,JSON.parse(r.response))},a=function(){console.info("Cannot XHR "+JSON.stringify(e))};return e=this.encodeUrlXhr(e,t),r.open("GET",e,!0),r.setRequestHeader("Accept","application/json"),r.onload=s,r.onerror=a,r.send(null),{when:function(e){n.ready=e.ready}}},now:function(){if("performance"in window==0&&(window.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==0){var e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-e}}return window.performance.now()},flyTo:function(e,t,r,n){n=n||2.388657133911758,r=r||500;var s=e.getView(),a=ol.animation.pan({duration:r,source:s.getCenter()}),o=ol.animation.zoom({duration:r,resolution:s.getResolution()});e.beforeRender(a,o),s.setCenter(t),s.setResolution(n)},randomId:function(e){var t=this.now().toString(36);return e?e+t:t},isNumeric:function(e){return/^\d+$/.test(e)},classRegex:function(e){return new RegExp("(^|\\s+) "+e+" (\\s+|$)")},addClass:function(e,t,r){var n=this;if(Array.isArray(e))return void e.forEach(function(e){n.addClass(e,t)});for(var s=Array.isArray(t)?t:t.split(/\s+/),a=s.length;a--;)n.hasClass(e,s[a])||n._addClass(e,s[a],r)},_addClass:function(e,t,r){var n=this;e.classList?e.classList.add(t):e.className=(e.className+" "+t).trim(),r&&this.isNumeric(r)&&window.setTimeout(function(){n._removeClass(e,t)},r)},removeClass:function(e,t,r){var n=this;if(Array.isArray(e))return void e.forEach(function(e){n.removeClass(e,t,r)});for(var s=Array.isArray(t)?t:t.split(/\s+/),a=s.length;a--;)n.hasClass(e,s[a])&&n._removeClass(e,s[a],r)},_removeClass:function(e,t,r){var n=this;e.classList?e.classList.remove(t):e.className=e.className.replace(this.classRegex(t)," ").trim(),r&&this.isNumeric(r)&&window.setTimeout(function(){n._addClass(e,t)},r)},hasClass:function(e,t){return e.classList?e.classList.contains(t):this.classRegex(t).test(e.className)},toggleClass:function(e,t){var r=this;return Array.isArray(e)?void e.forEach(function(e){r.toggleClass(e,t)}):void(e.classList?e.classList.toggle(t):this.hasClass(e,t)?this._removeClass(e,t):this._addClass(e,t))},$:function(e){return e="#"===e[0]?e.substr(1,e.length):e,document.getElementById(e)},isElement:function(e){return"HTMLElement"in window?!!e&&e instanceof HTMLElement:!!e&&"object"==typeof e&&1===e.nodeType&&!!e.nodeName},getAllChildren:function(e,t){return[].slice.call(e.getElementsByTagName(t))},isEmpty:function(e){return!e||0===e.length},emptyArray:function(e){for(;e.length;)e.pop()},anyMatchInArray:function(e,t){return e.some(function(e){return t.indexOf(e)>=0})},everyMatchInArray:function(e,t){return t.every(function(t){return e.indexOf(t)>=0})},anyItemHasValue:function(e,t){void 0===t&&(t=!1);for(var r in e)this.isEmpty(e[r])||(t=!0);return t},removeAllChildren:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},removeAll:function(e){for(var t;t=e[0];)t.parentNode.removeChild(t)},getChildren:function(e,t){return[].filter.call(e.childNodes,function(e){return t?1==e.nodeType&&e.tagName.toLowerCase()==t:1==e.nodeType})},template:function(e,t){var r=this;return e.replace(/\{ *([\w_-]+) *\}/g,function(e,n){var s=void 0===t[n]?"":t[n];return r.htmlEscape(s)})},htmlEscape:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},mergeOptions:function(e,t){var r={};for(var n in e)r[n]=e[n];for(var s in t)r[s]=t[s];return r},createElement:function(e,t){var r;if(Array.isArray(e)){if(r=document.createElement(e[0]),e[1].id&&(r.id=e[1].id),e[1].classname&&(r.className=e[1].classname),e[1].attr){var n=e[1].attr;if(Array.isArray(n))for(var s=-1;++s<n.length;)r.setAttribute(n[s].name,n[s].value);else r.setAttribute(n.name,n.value)}}else r=document.createElement(e);r.innerHTML=t;for(var a=document.createDocumentFragment();r.childNodes[0];)a.appendChild(r.childNodes[0]);return r.appendChild(a),r},assert:function(e,t){if(void 0===t&&(t="Assertion failed"),!e){if("undefined"!=typeof Error)throw new Error(t);throw t}}},A=function(){this.settings={url:"//photon.komoot.de/api/",params:{q:"",limit:10,lang:"en"},langs:["de","it","fr","en"]}};A.prototype.getParameters=function(e){return e.lang=e.lang.toLowerCase(),{url:this.settings.url,params:{q:e.query,limit:e.limit||this.settings.params.limit,lang:this.settings.langs.indexOf(e.lang)>-1?e.lang:this.settings.params.lang}}},A.prototype.handleResponse=function(e){return e.map(function(e){return{lon:e.geometry.coordinates[0],lat:e.geometry.coordinates[1],address:{name:e.properties.name,postcode:e.properties.postcode,city:e.properties.city,state:e.properties.state,country:e.properties.country},original:{formatted:e.properties.name,details:e.properties}}})};var w=function(){this.settings={url:"//nominatim.openstreetmap.org/search/",params:{q:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}};w.prototype.getParameters=function(e){return{url:this.settings.url,params:{q:e.query,format:"json",addressdetails:1,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,"accept-language":e.lang||this.settings.params["accept-language"]}}},w.prototype.handleResponse=function(e){return e.map(function(e){return{lon:e.lon,lat:e.lat,address:{name:e.address.neighbourhood||"",road:e.address.road||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}}})};var C=function(){this.settings={url:"//open.mapquestapi.com/nominatim/v1/search.php",params:{q:"",key:"",format:"json",addressdetails:1,limit:10,countrycodes:"","accept-language":"en-US"}}};C.prototype.getParameters=function(e){return{url:this.settings.url,params:{q:e.query,key:e.key,format:"json",addressdetails:1,limit:e.limit||this.settings.params.limit,countrycodes:e.countrycodes||this.settings.params.countrycodes,"accept-language":e.lang||this.settings.params["accept-language"]}}},C.prototype.handleResponse=function(e){return e.map(function(e){return{lon:e.lon,lat:e.lat,address:{name:e.address.neighbourhood||"",road:e.address.road||"",postcode:e.address.postcode,city:e.address.city||e.address.town,state:e.address.state,country:e.address.country},original:{formatted:e.display_name,details:e.address}}})};var S=function(){this.settings={url:"//search.mapzen.com/v1/search",params:{text:"",key:"",size:10}}};S.prototype.getParameters=function(e){return{url:this.settings.url,params:{text:e.query,key:e.key,size:e.limit||this.settings.params.size}}},S.prototype.handleResponse=function(e){return e.map(function(e){return{lon:e.geometry.coordinates[0],lat:e.geometry.coordinates[1],address:{name:e.properties.name,house_number:e.properties.housenumber,postcode:e.properties.postalcode,road:e.properties.street,city:e.properties.city,state:e.properties.region,country:e.properties.country},original:{formatted:e.properties.label,details:e.properties}}})};var E=function(){this.settings={url:"//maps.googleapis.com/maps/api/geocode/json",params:{address:"",key:"",language:"en-US"}}};E.prototype.getParameters=function(e){return{url:this.settings.url,params:{address:e.query,key:e.key,language:e.lang||this.settings.params.language}}},E.prototype.handleResponse=function(e){var t=["point_of_interest","establishment","natural_feature","airport"],r=["street_address","route","sublocality_level_5","intersection"],n=["postal_code"],s=["locality"],a=["administrative_area_level_1"],o=["country"],i=function(e){var i={name:"",road:"",postcode:"",city:"",state:"",country:""};return e.forEach(function(e){v.anyMatchInArray(e.types,t)?i.name=e.long_name:v.anyMatchInArray(e.types,r)?i.road=e.long_name:v.anyMatchInArray(e.types,n)?i.postcode=e.long_name:v.anyMatchInArray(e.types,s)?i.city=e.long_name:v.anyMatchInArray(e.types,a)?i.state=e.long_name:v.anyMatchInArray(e.types,o)&&(i.country=e.long_name)}),i},l=[];return e.forEach(function(e){var t=i(e.address_components);v.anyItemHasValue(t)&&l.push({lon:e.geometry.location.lng,lat:e.geometry.location.lat,address:{name:t.name,postcode:t.postcode,road:t.road,city:t.city,state:t.state,country:t.country},original:{formatted:e.formatted_address,details:e.address_components}})}),l};var b=function(e){return this.Base=e,this.layer_name=v.randomId("geocoder-layer-"),this.layer=new ol.layer.Vector({name:this.layer_name,source:new ol.source.Vector}),this.options=e.options,this.options.provider=this.options.provider.toLowerCase(),this.els=this.createControl(),this.container=this.els.container,this.registered_listeners={map_click:!1},this.setListeners(),this.Photon=new A,this.OpenStreet=new w,this.MapQuest=new C,this.Pelias=new S,this.Google=new E,this};b.prototype.createControl=function(){var s=v.createElement(["div",{classname:e+t}],b.html),o={container:s,control:s.querySelector("."+(e+r)),btn_search:s.querySelector("."+(e+n)),input_search:s.querySelector("."+(e+d)),result_container:s.querySelector("."+(e+a))};return o.input_search.placeholder=this.options.placeholder,o},b.prototype.setListeners=function(){var t=this,r=function(){v.hasClass(t.els.control,e+o)?t.collapse():t.expand()},n=function(e){if(13==e.keyCode){e.preventDefault();var r=v.htmlEscape(t.els.input_search.value);t.query(r)}};this.els.input_search.addEventListener("keydown",n,!1),this.els.btn_search.addEventListener("click",r,!1)},b.prototype.query=function(t){var r=this,n=this.options,a=this.els.input_search,o=this.getProvider({query:t,provider:n.provider,key:n.key,lang:n.lang,countrycodes:n.countrycodes,limit:n.limit});this.clearResults(),v.addClass(a,e+s),v.json(o.url,o.params).when({ready:function(t){n.debug&&console.info(t),v.removeClass(a,e+s);var o;switch(n.provider){case y.OSM:o=t.length>0?r.OpenStreet.handleResponse(t):void 0;break;case y.MAPQUEST:o=t.length>0?r.MapQuest.handleResponse(t):void 0;break;case y.PELIAS:o=t.features.length>0?r.Pelias.handleResponse(t.features):void 0;break;case y.PHOTON:o=t.features.length>0?r.Photon.handleResponse(t.features):void 0;break;case y.GOOGLE:o=t.results.length>0?r.Google.handleResponse(t.results):void 0}o&&(r.createList(o),r.listenMapClick())},error:function(){v.removeClass(a,e+s);var t=v.createElement("li","<h5>Error! No internet connection?</h5>");r.els.result_container.appendChild(t)}})},b.prototype.createList=function(e){var t=this,r=this.els.result_container;e.forEach(function(e){var n=t.addressTemplate(e.address),s='<a href="#">'+n+"</a>",a=v.createElement("li",s);a.addEventListener("click",function(r){r.preventDefault(),t.chosen(e,n,e.address,e.original)},!1),r.appendChild(a)})},b.prototype.chosen=function(e,t,r,n){var s=this.Base.getMap(),a=ol.proj.transform([parseFloat(e.lon),parseFloat(e.lat)],"EPSG:4326",s.getView().getProjection()),o={formatted:t,details:r,original:n};if(this.options.keepOpen===!1&&this.clearResults(!0),this.options.preventDefault===!0)this.Base.dispatchEvent({type:h.ADDRESSCHOSEN,address:o,coordinate:a});else{v.flyTo(s,a);var i=this.createFeature(a,o);this.Base.dispatchEvent({type:h.ADDRESSCHOSEN,address:o,feature:i,coordinate:a})}},b.prototype.createFeature=function(e){var t=new ol.Feature(new ol.geom.Point(e));this.addLayer(),t.setStyle(this.options.featureStyle),t.setId(v.randomId("geocoder-ft-")),this.getSource().addFeature(t)},b.prototype.addressTemplate=function(t){var r=[];return t.name&&r.push('<span class="'+e+c+'">{name}</span>'),(t.road||t.building||t.house_number)&&r.push('<span class="'+e+c+'">{building} {road} {house_number}</span>'),(t.city||t.town||t.village)&&r.push('<span class="'+e+l+'">{postcode} {city} {town} {village}</span>'),(t.state||t.country)&&r.push('<span class="'+e+i+'">{state} {country}</span>'),v.template(r.join("<br>"),t)},b.prototype.getProvider=function(e){var t;switch(e.provider){case y.OSM:t=this.OpenStreet.getParameters(e);break;case y.MAPQUEST:t=this.MapQuest.getParameters(e);break;case y.PHOTON:t=this.Photon.getParameters(e);break;case y.GOOGLE:t=this.Google.getParameters(e);break;case y.PELIAS:t=this.Pelias.getParameters(e)}return t},b.prototype.expand=function(){var t=this;v.removeClass(this.els.input_search,e+s),v.addClass(this.els.control,e+o),window.setTimeout(function(){t.els.input_search.focus()},100),this.listenMapClick()},b.prototype.collapse=function(){this.els.input_search.value="",this.els.input_search.blur(),v.removeClass(this.els.control,e+o),this.clearResults()},b.prototype.listenMapClick=function(){if(!this.registered_listeners.map_click){var e=this,t=this.Base.getMap().getTargetElement();this.registered_listeners.map_click=!0,t.addEventListener("click",{handleEvent:function(r){e.clearResults(!0),t.removeEventListener(r.type,this,!1),e.registered_listeners.map_click=!1}},!1)}},b.prototype.clearResults=function(e){e?this.collapse():v.removeAllChildren(this.els.result_container)},b.prototype.getSource=function(){return this.layer.getSource()},b.prototype.addLayer=function(){var e=this,t=!1,r=this.Base.getMap();r.getLayers().forEach(function(r){r===e.layer&&(t=!0)}),t||r.addLayer(this.layer)},b.html=['<div class="',e+r," ",u,'">',"<button",' type="button"',' class="'+e+n+'">',"</button>",'<form id="'+p+'" action="javascript:void(0);">',"<input",' type="text"',' id="'+m+'"',' class="'+e+d+'"',' placeholder="Search ...">',"</form>","</div>",'<ul class="',e+a,'"></ul>'].join("");var L=function(e){function t(r,n){void 0===r&&(r="nominatim"),void 0===n&&(n={}),v.assert("string"==typeof r,"@param `control_type` should be string type!"),v.assert("object"==typeof n,"@param `opt_options` should be object type!"),this.options=v.mergeOptions(g,n),t.Nominatim=new b(this),e.call(this,{element:t.Nominatim.container})}return t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getLayer=function(){return t.Nominatim.layer},t.prototype.getSource=function(){return this.getLayer().getSource()},t}(ol.control.Control);return L});
