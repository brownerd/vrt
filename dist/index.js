module.exports=(e=>{let t=Object.assign({},{belowColor:"hsla(300deg,100%,50%, 1)",aboveColor:"hsla(200deg,100%,50%, 1)",aboveKey:"188,188",belowKey:"190,190",closeKey:"191"},e);const o=document.createElement("div");o.classList.add("vrt__box");let n=[],d=!1;function l(){let e=document.createDocumentFragment(),t=(n=function(){let e=getComputedStyle(document.documentElement),{lineHeight:t}=e;return t}(),parseInt(n,10));var n;for(let o=0,n=Math.floor(document.documentElement.scrollHeight/t);o<n;o++){let o=document.createElement("div");o.className="vrt__row",o.style.height=t+"px",e.appendChild(o)}o.appendChild(e)}function i(){l(),document.body.appendChild(o),o.style.zIndex=1e3,o.classList.add("above"),n=[],d=!0}function s(){l(),document.body.appendChild(o),o.style.zIndex=-1e3,o.classList.add("below"),n=[],d=!0}function r(){for(;o.firstChild;)o.removeChild(o.firstChild);o.classList.remove("above"),document.body.removeChild(o),n=[],d=!1}document.addEventListener("keydown",function(e){const o=t.aboveKey,l=t.belowKey,c=t.closeKey;if(n.push(e.keyCode),n.toString().includes(o)&&!1===d)i();else if(n.toString().includes(l)&&!1===d)s();else{if(!n.toString().includes(c)||!0!==d)return;r()}});const c=`\n    .vrt__box {\n      left: 0;\n      top: 0;\n      position: absolute;\n      width: 100%;\n    }\n\n    .vrt__row {\n      box-shadow: inset 0px -1px 0px ${t.belowColor};\n    }\n    \n    .vrt__box.above .vrt__row {\n      box-shadow: inset 0px -1px 0px ${t.aboveColor};\n    }\n  `,a=document.createElement("style"),u=document.createTextNode(c);return a.appendChild(u),document.head.appendChild(a),{aboveGrid:i,belowGrid:s,closeGrid:r}});