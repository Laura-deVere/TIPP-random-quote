parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L8WI":[function(require,module,exports) {
const t=(()=>{const t={quote:document.getElementById("quote"),author:document.getElementById("author"),reload:document.getElementById("reload")},e=async()=>{return fetch("https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes",data={},{method:"GET",headers:{"Content-Type":"application/json",Accept:"application / json, text / plain, */*"},body:JSON.stringify(data)}).then(t=>t.json()).catch(t=>{console.log(t.status)})},n=(t,e)=>{return Math.round(Math.random()*(t-e)+e)},o=(e,a)=>{t.quote.textContent=e.text,t.author.textContent=e.author?e.author:"Unknown",t.author.addEventListener("click",()=>((t,e)=>{let a=[];return e.forEach(e=>{null!==e.author&&-1!==e.author.indexOf(t)&&a.push(e)}),o(a[n(a.length-1,0)],a)})(e.author,a))},a=async()=>{const t=await e();let a=t.length,r=t[n(a,0)];o(r,t)};t.reload.addEventListener("click",a),a()})();
},{}]},{},["L8WI"], null)
//# sourceMappingURL=dist/mains.74d01b01.js.map