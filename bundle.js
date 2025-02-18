/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const t={toURL(t,e){let s=encodeURIComponent(t);return "text"===e?s="data:text/plain;charset=utf-8,"+s:"svg"===e&&(s="data:image/svg+xml,"+s),s},image:{hitCanvasSize:100,maxCacheSize:4096e3,maxPatternSize:8847360,crossOrigin:"anonymous",getRealURL(e){const{prefix:s,suffix:r}=t.image;return !r||e.startsWith("data:")||e.startsWith("blob:")||(e+=(e.includes("?")?"&":"?")+r),s&&"/"===e[0]&&(e=s+e),e}}},e={},s={RUNTIME:"runtime",LEAF:"leaf",TASK:"task",CNAVAS:"canvas",IMAGE:"image",types:{},create(t){const{types:e}=r;return e[t]?e[t]++:(e[t]=1,0)}},r=s,{round:i,pow:n,PI:o}=Math,a={within:(t,e,s)=>("object"==typeof e&&(s=e.max,e=e.min),void 0!==e&&t<e&&(t=e),void 0!==s&&t>s&&(t=s),t),fourNumber(t,e){let s;if(t instanceof Array)switch(t.length){case 4:s=void 0===e?t:[...t];break;case 2:s=[t[0],t[1],t[0],t[1]];break;case 3:s=[t[0],t[1],t[2],t[1]];break;case 1:t=t[0];break;default:t=0;}if(s||(s=[t,t,t,t]),e)for(let t=0;t<4;t++)s[t]>e&&(s[t]=e);return s},formatRotation:(t,e)=>(t%=360,e?t<0&&(t+=360):(t>180&&(t-=360),t<-180&&(t+=360)),a.float(t)),getGapRotation(t,e,s=0){let r=t+s;if(e>1){const t=Math.abs(r%e);(t<1||t>e-1)&&(r=Math.round(r/e)*e);}return r-s},float(t,e){const s=void 0!==e?n(10,e):1e12;return -0===(t=i(t*s)/s)?0:t},getScaleData:(t,e,s,r)=>(r||(r={}),e?(r.scaleX=("number"==typeof e?e:e.width)/s.width,r.scaleY=("number"==typeof e?e:e.height)/s.height):t&&a.assignScale(r,t),r),assignScale(t,e){"number"==typeof e?t.scaleX=t.scaleY=e:(t.scaleX=e.x,t.scaleY=e.y);}},h=o/180,l=2*o,d=o/2;function u(){return {x:0,y:0}}function _(){return {a:1,b:0,c:0,d:1,e:0,f:0}}const{sin:p,cos:f,acos:g,sqrt:y}=Math,{float:m}=a,x={};function w(){return Object.assign(Object.assign(Object.assign({},{a:1,b:0,c:0,d:1,e:0,f:0}),{x:0,y:0,width:0,height:0}),{scaleX:1,scaleY:1,rotation:0,skewX:0,skewY:0})}const b={defaultMatrix:{a:1,b:0,c:0,d:1,e:0,f:0},defaultWorld:w(),tempMatrix:{},set(t,e=1,s=0,r=0,i=1,n=0,o=0){t.a=e,t.b=s,t.c=r,t.d=i,t.e=n,t.f=o;},get:_,getWorld:w,copy(t,e){t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t.e=e.e,t.f=e.f;},translate(t,e,s){t.e+=e,t.f+=s;},translateInner(t,e,s,r){t.e+=t.a*e+t.c*s,t.f+=t.b*e+t.d*s,r&&(t.e-=e,t.f-=s);},scale(t,e,s=e){t.a*=e,t.b*=e,t.c*=s,t.d*=s;},scaleOfOuter(t,e,s,r){v.toInnerPoint(t,e,x),v.scaleOfInner(t,x,s,r);},scaleOfInner(t,e,s,r=s){v.translateInner(t,e.x,e.y),v.scale(t,s,r),v.translateInner(t,-e.x,-e.y);},rotate(t,e){const{a:s,b:r,c:i,d:n}=t,o=f(e*=h),a=p(e);t.a=s*o-r*a,t.b=s*a+r*o,t.c=i*o-n*a,t.d=i*a+n*o;},rotateOfOuter(t,e,s){v.toInnerPoint(t,e,x),v.rotateOfInner(t,x,s);},rotateOfInner(t,e,s){v.translateInner(t,e.x,e.y),v.rotate(t,s),v.translateInner(t,-e.x,-e.y);},skew(t,e,s){const{a:r,b:i,c:n,d:o}=t;s&&(s*=h,t.a=r+n*s,t.b=i+o*s),e&&(e*=h,t.c=n+r*e,t.d=o+i*e);},skewOfOuter(t,e,s,r){v.toInnerPoint(t,e,x),v.skewOfInner(t,x,s,r);},skewOfInner(t,e,s,r=0){v.translateInner(t,e.x,e.y),v.skew(t,s,r),v.translateInner(t,-e.x,-e.y);},multiply(t,e){const{a:s,b:r,c:i,d:n,e:o,f:a}=t;t.a=e.a*s+e.b*i,t.b=e.a*r+e.b*n,t.c=e.c*s+e.d*i,t.d=e.c*r+e.d*n,t.e=e.e*s+e.f*i+o,t.f=e.e*r+e.f*n+a;},multiplyParent(t,e,s,r,i,n){let{e:o,f:a}=t;if(n&&(o+=n.scrollX,a+=n.scrollY),s||(s=t),void 0===r&&(r=1!==t.a||t.b||t.c||1!==t.d),r){const{a:r,b:n,c:o,d:a}=t;s.a=r*e.a+n*e.c,s.b=r*e.b+n*e.d,s.c=o*e.a+a*e.c,s.d=o*e.b+a*e.d,i&&(s.scaleX=e.scaleX*i.scaleX,s.scaleY=e.scaleY*i.scaleY);}else s.a=e.a,s.b=e.b,s.c=e.c,s.d=e.d,i&&(s.scaleX=e.scaleX,s.scaleY=e.scaleY);s.e=o*e.a+a*e.c+e.e,s.f=o*e.b+a*e.d+e.f;},divide(t,e){v.multiply(t,v.tempInvert(e));},divideParent(t,e){v.multiplyParent(t,v.tempInvert(e));},tempInvert(t){const{tempMatrix:e}=v;return v.copy(e,t),v.invert(e),e},invert(t){const{a:e,b:s,c:r,d:i,e:n,f:o}=t;if(s||r){const a=1/(e*i-s*r);t.a=i*a,t.b=-s*a,t.c=-r*a,t.d=e*a,t.e=-(n*i-o*r)*a,t.f=-(o*e-n*s)*a;}else if(1===e&&1===i)t.e=-n,t.f=-o;else {const s=1/(e*i);t.a=i*s,t.d=e*s,t.e=-n*i*s,t.f=-o*e*s;}},toOuterPoint(t,e,s,r){const{x:i,y:n}=e;s||(s=e),s.x=i*t.a+n*t.c,s.y=i*t.b+n*t.d,r||(s.x+=t.e,s.y+=t.f);},toInnerPoint(t,e,s,r){const{a:i,b:n,c:o,d:a}=t,h=1/(i*a-n*o),{x:l,y:d}=e;if(s||(s=e),s.x=(l*a-d*o)*h,s.y=(d*i-l*n)*h,!r){const{e:e,f:r}=t;s.x-=(e*a-r*o)*h,s.y-=(r*i-e*n)*h;}},setLayout(t,e,s,r,i){const{x:n,y:o,scaleX:a,scaleY:l}=e;if(void 0===i&&(i=e.rotation||e.skewX||e.skewY),i){const{rotation:s,skewX:r,skewY:i}=e,n=s*h,o=f(n),d=p(n);if(r||i){const e=r*h,s=i*h;t.a=(o+s*-d)*a,t.b=(d+s*o)*a,t.c=(e*o-d)*l,t.d=(o+e*d)*l;}else t.a=o*a,t.b=d*a,t.c=-d*l,t.d=o*l;}else t.a=a,t.b=0,t.c=0,t.d=l;t.e=n,t.f=o,(s=s||r)&&v.translateInner(t,-s.x,-s.y,!r);},getLayout(t,e,s,r){const{a:i,b:n,c:o,d:a,e:l,f:u}=t;let c,_,x,w,b,v=l,B=u;if(n||o){const t=i*a-n*o;if(o&&!r){c=y(i*i+n*n),_=t/c;const e=i/c;x=n>0?g(e):-g(e);}else {_=y(o*o+a*a),c=t/_;const e=o/_;x=d-(a>0?g(-e):-g(e));}const e=m(f(x)),s=p(x);c=m(c),_=m(_),w=e?m((o/_+s)/e/h,9):0,b=e?m((n/c-s)/e/h,9):0,x=m(x/h);}else c=i,_=a,x=w=b=0;return (e=s||e)&&(v+=e.x*i+e.y*o,B+=e.x*n+e.y*a,s||(v-=e.x,B-=e.y)),{x:v,y:B,scaleX:c,scaleY:_,rotation:x,skewX:w,skewY:b}},withScale(t,e,s=e){const r=t;if(!e||!s){const{a:r,b:i,c:n,d:o}=t;i||n?s=(r*o-i*n)/(e=y(r*r+i*i)):(e=r,s=o);}return r.scaleX=e,r.scaleY=s,r},reset(t){v.set(t);}},v=b,{toInnerPoint:B$1,toOuterPoint:k$1}=b,{sin:C,cos:O,abs:T,sqrt:P,atan2:R,min:S,PI:L}=Math,I$1={defaultPoint:{x:0,y:0},tempPoint:{},tempRadiusPoint:{},set(t,e=0,s=0){t.x=e,t.y=s;},setRadius(t,e,s){t.radiusX=e,t.radiusY=void 0===s?e:s;},copy(t,e){t.x=e.x,t.y=e.y;},copyFrom(t,e,s){t.x=e,t.y=s;},move(t,e,s){t.x+=e,t.y+=s;},scale(t,e,s=e){t.x&&(t.x*=e),t.y&&(t.y*=s);},scaleOf(t,e,s,r=s){t.x+=(t.x-e.x)*(s-1),t.y+=(t.y-e.y)*(r-1);},rotate(t,e,s){s||(s=E.defaultPoint);const r=O(e*=h),i=C(e),n=t.x-s.x,o=t.y-s.y;t.x=s.x+n*r-o*i,t.y=s.y+n*i+o*r;},tempToInnerOf(t,e){const{tempPoint:s}=E;return A$1(s,t),B$1(e,s,s),s},tempToOuterOf(t,e){const{tempPoint:s}=E;return A$1(s,t),k$1(e,s,s),s},tempToInnerRadiusPointOf(t,e){const{tempRadiusPoint:s}=E;return A$1(s,t),E.toInnerRadiusPointOf(t,e,s),s},toInnerRadiusPointOf(t,e,s){s||(s=t),B$1(e,t,s),s.radiusX=Math.abs(t.radiusX/e.scaleX),s.radiusY=Math.abs(t.radiusY/e.scaleY);},toInnerOf(t,e,s){B$1(e,t,s);},toOuterOf(t,e,s){k$1(e,t,s);},getCenter:(t,e)=>({x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}),getCenterX:(t,e)=>t+(e-t)/2,getCenterY:(t,e)=>t+(e-t)/2,getDistance:(t,e)=>M(t.x,t.y,e.x,e.y),getDistanceFrom(t,e,s,r){const i=T(s-t),n=T(r-e);return P(i*i+n*n)},getMinDistanceFrom:(t,e,s,r,i,n)=>S(M(t,e,s,r),M(s,r,i,n)),getAngle:(t,e)=>W$1(t,e)/h,getRotation:(t,e,s,r)=>(r||(r=e),E.getRadianFrom(t.x,t.y,e.x,e.y,s.x,s.y,r.x,r.y)/h),getRadianFrom(t,e,s,r,i,n,o,a){void 0===o&&(o=s,a=r);let h=R(e-r,t-s);const d=R(n-a,i-o)-h;return d<-L?d+l:d},getAtan2:(t,e)=>R(e.y-t.y,e.x-t.x),getDistancePoint(t,e,s,r){const i=W$1(t,e);return (e=r?e:{}).x=t.x+O(i)*s,e.y=t.y+C(i)*s,e},toNumberPoints(t){let e=t;return "object"==typeof t[0]&&(e=[],t.forEach((t=>e.push(t.x,t.y)))),e},reset(t){}},E=I$1,{getDistanceFrom:M,copy:A$1,getAtan2:W$1}=E;let N$2 = class N{constructor(t,e){this.set(t,e);}set(t,e){return "object"==typeof t?I$1.copy(this,t):I$1.set(this,t,e),this}get(){const{x:t,y:e}=this;return {x:t,y:e}}clone(){return new N(this)}move(t,e){return I$1.move(this,t,e),this}scale(t,e){return I$1.scale(this,t,e),this}scaleOf(t,e,s){return I$1.scaleOf(this,t,e,s),this}rotate(t,e){return I$1.rotate(this,t,e),this}rotateOf(t,e){return I$1.rotate(this,e,t),this}getRotation(t,e,s){return I$1.getRotation(this,t,e,s)}toInnerOf(t,e){return I$1.toInnerOf(this,t,e),this}toOuterOf(t,e){return I$1.toOuterOf(this,t,e),this}getCenter(t){return new N(I$1.getCenter(this,t))}getDistance(t){return I$1.getDistance(this,t)}getDistancePoint(t,e,s){return new N(I$1.getDistancePoint(this,t,e,s))}getAngle(t){return I$1.getAngle(this,t)}getAtan2(t){return I$1.getAtan2(this,t)}reset(){return this}};new N$2;let X$2 = class X{constructor(t,e,s,r,i,n){this.set(t,e,s,r,i,n);}set(t,e,s,r,i,n){return "object"==typeof t?b.copy(this,t):b.set(this,t,e,s,r,i,n),this}setWith(t){return b.copy(this,t),this.scaleX=t.scaleX,this.scaleY=t.scaleY,this}get(){const{a:t,b:e,c:s,d:r,e:i,f:n}=this;return {a:t,b:e,c:s,d:r,e:i,f:n}}clone(){return new X(this)}translate(t,e){return b.translate(this,t,e),this}translateInner(t,e){return b.translateInner(this,t,e),this}scale(t,e){return b.scale(this,t,e),this}scaleWith(t,e){return b.scale(this,t,e),this.scaleX*=t,this.scaleY*=e||t,this}scaleOfOuter(t,e,s){return b.scaleOfOuter(this,t,e,s),this}scaleOfInner(t,e,s){return b.scaleOfInner(this,t,e,s),this}rotate(t){return b.rotate(this,t),this}rotateOfOuter(t,e){return b.rotateOfOuter(this,t,e),this}rotateOfInner(t,e){return b.rotateOfInner(this,t,e),this}skew(t,e){return b.skew(this,t,e),this}skewOfOuter(t,e,s){return b.skewOfOuter(this,t,e,s),this}skewOfInner(t,e,s){return b.skewOfInner(this,t,e,s),this}multiply(t){return b.multiply(this,t),this}multiplyParent(t){return b.multiplyParent(this,t),this}divide(t){return b.divide(this,t),this}divideParent(t){return b.divideParent(this,t),this}invert(){return b.invert(this),this}invertWith(){return b.invert(this),this.scaleX=1/this.scaleX,this.scaleY=1/this.scaleY,this}toOuterPoint(t,e,s){b.toOuterPoint(this,t,e,s);}toInnerPoint(t,e,s){b.toInnerPoint(this,t,e,s);}setLayout(t,e,s){return b.setLayout(this,t,e,s),this}getLayout(t,e,s){return b.getLayout(this,t,e,s)}withScale(t,e){return b.withScale(this,t,e)}reset(){b.reset(this);}};new X$2;const z$1={tempPointBounds:{},setPoint(t,e,s){t.minX=t.maxX=e,t.minY=t.maxY=s;},addPoint(t,e,s){t.minX=e<t.minX?e:t.minX,t.minY=s<t.minY?s:t.minY,t.maxX=e>t.maxX?e:t.maxX,t.maxY=s>t.maxY?s:t.maxY;},addBounds(t,e,s,r,i){F$1(t,e,s),F$1(t,e+r,s+i);},copy(t,e){t.minX=e.minX,t.minY=e.minY,t.maxX=e.maxX,t.maxY=e.maxY;},addPointBounds(t,e){t.minX=e.minX<t.minX?e.minX:t.minX,t.minY=e.minY<t.minY?e.minY:t.minY,t.maxX=e.maxX>t.maxX?e.maxX:t.maxX,t.maxY=e.maxY>t.maxY?e.maxY:t.maxY;},toBounds(t,e){e.x=t.minX,e.y=t.minY,e.width=t.maxX-t.minX,e.height=t.maxY-t.minY;}},{addPoint:F$1}=z$1,{tempPointBounds:j$1,setPoint:U,addPoint:G$1,toBounds:H$2}=z$1,{toOuterPoint:q$2}=b,{float:V$1,fourNumber:Q$2}=a,{floor:Z$2,ceil:J$2}=Math;let $$2,K$1,tt$2,et$2;const st$2={},rt$2={},it$2={tempBounds:{},set(t,e=0,s=0,r=0,i=0){t.x=e,t.y=s,t.width=r,t.height=i;},copy(t,e){t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height;},copyAndSpread(t,e,s,r,i){const{x:n,y:o,width:a,height:h}=e;if(s instanceof Array){const e=Q$2(s);r?nt$2.set(t,n+e[3],o+e[0],a-e[1]-e[3],h-e[2]-e[0]):nt$2.set(t,n-e[3],o-e[0],a+e[1]+e[3],h+e[2]+e[0]);}else r&&(s=-s),nt$2.set(t,n-s,o-s,a+2*s,h+2*s);i&&("width"===i?(t.y=o,t.height=h):(t.x=n,t.width=a));},minX:t=>t.width>0?t.x:t.x+t.width,minY:t=>t.height>0?t.y:t.y+t.height,maxX:t=>t.width>0?t.x+t.width:t.x,maxY:t=>t.height>0?t.y+t.height:t.y,move(t,e,s){t.x+=e,t.y+=s;},getByMove:(t,e,s)=>(t=Object.assign({},t),nt$2.move(t,e,s),t),toOffsetOutBounds(t,e,s){e?at$2(e,t):e=t,s?(e.offsetX=-(nt$2.maxX(s)-t.x),e.offsetY=-(nt$2.maxY(s)-t.y)):(e.offsetX=t.x+t.width,e.offsetY=t.y+t.height),nt$2.move(e,-e.offsetX,-e.offsetY);},scale(t,e,s=e){I$1.scale(t,e,s),t.width*=e,t.height*=s;},scaleOf(t,e,s,r=s){I$1.scaleOf(t,e,s,r),t.width*=s,t.height*=r;},tempToOuterOf:(t,e)=>(nt$2.copy(nt$2.tempBounds,t),nt$2.toOuterOf(nt$2.tempBounds,e),nt$2.tempBounds),getOuterOf:(t,e)=>(t=Object.assign({},t),nt$2.toOuterOf(t,e),t),toOuterOf(t,e,s){if(s||(s=t),0===e.b&&0===e.c){const{a:r,d:i}=e;r>0?(s.width=t.width*r,s.x=e.e+t.x*r):(s.width=t.width*-r,s.x=e.e+t.x*r-s.width),i>0?(s.height=t.height*i,s.y=e.f+t.y*i):(s.height=t.height*-i,s.y=e.f+t.y*i-s.height);}else st$2.x=t.x,st$2.y=t.y,q$2(e,st$2,rt$2),U(j$1,rt$2.x,rt$2.y),st$2.x=t.x+t.width,q$2(e,st$2,rt$2),G$1(j$1,rt$2.x,rt$2.y),st$2.y=t.y+t.height,q$2(e,st$2,rt$2),G$1(j$1,rt$2.x,rt$2.y),st$2.x=t.x,q$2(e,st$2,rt$2),G$1(j$1,rt$2.x,rt$2.y),H$2(j$1,s);},toInnerOf(t,e,s){s||(s=t),nt$2.move(s,-e.e,-e.f),nt$2.scale(s,1/e.a,1/e.d);},getFitMatrix(t,e,s=1){const r=Math.min(s,Math.min(t.width/e.width,t.height/e.height));return new X$2(r,0,0,r,-e.x*r,-e.y*r)},getSpread(t,e,s){const r={};return nt$2.copyAndSpread(r,t,e,!1,s),r},spread(t,e,s){nt$2.copyAndSpread(t,t,e,!1,s);},shrink(t,e,s){nt$2.copyAndSpread(t,t,e,!0,s);},ceil(t){const{x:e,y:s}=t;t.x=Z$2(t.x),t.y=Z$2(t.y),t.width=e>t.x?J$2(t.width+e-t.x):J$2(t.width),t.height=s>t.y?J$2(t.height+s-t.y):J$2(t.height);},unsign(t){t.width<0&&(t.x+=t.width,t.width=-t.width),t.height<0&&(t.y+=t.height,t.height=-t.height);},float(t,e){t.x=V$1(t.x,e),t.y=V$1(t.y,e),t.width=V$1(t.width,e),t.height=V$1(t.height,e);},add(t,e,s){$$2=t.x+t.width,K$1=t.y+t.height,tt$2=e.x,et$2=e.y,s||(tt$2+=e.width,et$2+=e.height),$$2=$$2>tt$2?$$2:tt$2,K$1=K$1>et$2?K$1:et$2,t.x=t.x<e.x?t.x:e.x,t.y=t.y<e.y?t.y:e.y,t.width=$$2-t.x,t.height=K$1-t.y;},addList(t,e){nt$2.setListWithFn(t,e,void 0,!0);},setList(t,e,s=!1){nt$2.setListWithFn(t,e,void 0,s);},addListWithFn(t,e,s){nt$2.setListWithFn(t,e,s,!0);},setListWithFn(t,e,s,r=!1){let i,n=!0;for(let o=0,a=e.length;o<a;o++)i=s?s(e[o]):e[o],i&&(i.width||i.height)&&(n?(n=!1,r||at$2(t,i)):ot$2(t,i));n&&nt$2.reset(t);},setPoints(t,e){e.forEach(((t,e)=>0===e?U(j$1,t.x,t.y):G$1(j$1,t.x,t.y))),H$2(j$1,t);},setPoint(t,e){nt$2.set(t,e.x,e.y);},addPoint(t,e){ot$2(t,e,!0);},getPoints(t){const{x:e,y:s,width:r,height:i}=t;return [{x:e,y:s},{x:e+r,y:s},{x:e+r,y:s+i},{x:e,y:s+i}]},hitRadiusPoint:(t,e,s)=>(s&&(e=I$1.tempToInnerRadiusPointOf(e,s)),e.x>=t.x-e.radiusX&&e.x<=t.x+t.width+e.radiusX&&e.y>=t.y-e.radiusY&&e.y<=t.y+t.height+e.radiusY),hitPoint:(t,e,s)=>(s&&(e=I$1.tempToInnerOf(e,s)),e.x>=t.x&&e.x<=t.x+t.width&&e.y>=t.y&&e.y<=t.y+t.height),hit:(t,e,s)=>(s&&(e=nt$2.tempToOuterOf(e,s)),!(t.y+t.height<e.y||e.y+e.height<t.y||t.x+t.width<e.x||e.x+e.width<t.x)),includes:(t,e,s)=>(s&&(e=nt$2.tempToOuterOf(e,s)),t.x<=e.x&&t.y<=e.y&&t.x+t.width>=e.x+e.width&&t.y+t.height>=e.y+e.height),getIntersectData(t,e,s){if(s&&(e=nt$2.tempToOuterOf(e,s)),!nt$2.hit(t,e))return {x:0,y:0,width:0,height:0};let{x:r,y:i,width:n,height:o}=e;return $$2=r+n,K$1=i+o,tt$2=t.x+t.width,et$2=t.y+t.height,r=r>t.x?r:t.x,i=i>t.y?i:t.y,$$2=$$2<tt$2?$$2:tt$2,K$1=K$1<et$2?K$1:et$2,n=$$2-r,o=K$1-i,{x:r,y:i,width:n,height:o}},intersect(t,e,s){nt$2.copy(t,nt$2.getIntersectData(t,e,s));},isSame:(t,e)=>t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height,isEmpty:t=>0===t.x&&0===t.y&&0===t.width&&0===t.height,reset(t){nt$2.set(t);}},nt$2=it$2,{add:ot$2,copy:at$2}=nt$2;let ht$2 = class ht{get minX(){return it$2.minX(this)}get minY(){return it$2.minY(this)}get maxX(){return it$2.maxX(this)}get maxY(){return it$2.maxY(this)}constructor(t,e,s,r){this.set(t,e,s,r);}set(t,e,s,r){return "object"==typeof t?it$2.copy(this,t):it$2.set(this,t,e,s,r),this}get(){const{x:t,y:e,width:s,height:r}=this;return {x:t,y:e,width:s,height:r}}clone(){return new ht(this)}move(t,e){return it$2.move(this,t,e),this}scale(t,e){return it$2.scale(this,t,e),this}scaleOf(t,e,s){return it$2.scaleOf(this,t,e,s),this}toOuterOf(t,e){return it$2.toOuterOf(this,t,e),this}toInnerOf(t,e){return it$2.toInnerOf(this,t,e),this}getFitMatrix(t,e){return it$2.getFitMatrix(this,t,e)}spread(t,e){return it$2.spread(this,t,e),this}shrink(t,e){return it$2.shrink(this,t,e),this}ceil(){return it$2.ceil(this),this}unsign(){return it$2.unsign(this),this}float(t){return it$2.float(this,t),this}add(t){return it$2.add(this,t),this}addList(t){return it$2.setList(this,t,!0),this}setList(t){return it$2.setList(this,t),this}addListWithFn(t,e){return it$2.setListWithFn(this,t,e,!0),this}setListWithFn(t,e){return it$2.setListWithFn(this,t,e),this}setPoint(t){return it$2.setPoint(this,t),this}setPoints(t){return it$2.setPoints(this,t),this}addPoint(t){return it$2.addPoint(this,t),this}getPoints(){return it$2.getPoints(this)}hitPoint(t,e){return it$2.hitPoint(this,t,e)}hitRadiusPoint(t,e){return it$2.hitRadiusPoint(this,t,e)}hit(t,e){return it$2.hit(this,t,e)}includes(t,e){return it$2.includes(this,t,e)}intersect(t,e){return it$2.intersect(this,t,e),this}getIntersect(t,e){return new ht(it$2.getIntersectData(this,t,e))}isSame(t){return it$2.isSame(this,t)}isEmpty(){return it$2.isEmpty(this)}reset(){it$2.reset(this);}};const lt$3=new ht$2;let dt$3 = class dt{constructor(t,e,s,r,i,n){"object"==typeof t?this.copy(t):this.set(t,e,s,r,i,n);}set(t=0,e=0,s=0,r=0,i=0,n=0){this.top=t,this.right=e,this.bottom=s,this.left=r,this.width=i,this.height=n;}copy(t){const{top:e,right:s,bottom:r,left:i,width:n,height:o}=t;this.set(e,s,r,i,n,o);}getBoundsFrom(t){const{top:e,right:s,bottom:r,left:i,width:n,height:o}=this;return new ht$2(i,e,n||t.width-i-s,o||t.height-e-r)}};var ut$3,ct$3;!function(t){t[t.top=0]="top",t[t.right=1]="right",t[t.bottom=2]="bottom",t[t.left=3]="left";}(ut$3||(ut$3={})),function(t){t[t.topLeft=0]="topLeft",t[t.top=1]="top",t[t.topRight=2]="topRight",t[t.right=3]="right",t[t.bottomRight=4]="bottomRight",t[t.bottom=5]="bottom",t[t.bottomLeft=6]="bottomLeft",t[t.left=7]="left",t[t.center=8]="center",t[t["top-left"]=0]="top-left",t[t["top-right"]=2]="top-right",t[t["bottom-right"]=4]="bottom-right",t[t["bottom-left"]=6]="bottom-left";}(ct$3||(ct$3={}));const _t$2=[{x:0,y:0},{x:.5,y:0},{x:1,y:0},{x:1,y:.5},{x:1,y:1},{x:.5,y:1},{x:0,y:1},{x:0,y:.5},{x:.5,y:.5}];_t$2.forEach((t=>t.type="percent"));const pt$3={directionData:_t$2,tempPoint:{},get:ft$3,toPoint(t,e,s,r,i){const n=ft$3(t);s.x=n.x,s.y=n.y,"percent"===n.type&&(s.x*=e.width,s.y*=e.height,i&&(s.x-=i.x,s.y-=i.y,n.x&&(s.x-=1===n.x?i.width:.5===n.x?n.x*i.width:0),n.y&&(s.y-=1===n.y?i.height:.5===n.y?n.y*i.height:0))),r||(s.x+=e.x,s.y+=e.y);}};function ft$3(t){return "string"==typeof t?_t$2[ct$3[t]]:t}const{toPoint:gt$3}=pt$3,yt$3={toPoint(t,e,s,r,i){gt$3(t,s,r,i,e);}},mt$3={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,".":1,e:1,E:1};let xt$2 = class xt{constructor(t){this.repeatMap={},this.name=t;}static get(t){return new xt(t)}static set filter(t){this.filterList=wt$3(t);}static set exclude(t){this.excludeList=wt$3(t);}log(...t){if(bt$2.enable){if(bt$2.filterList.length&&bt$2.filterList.every((t=>t!==this.name)))return;if(bt$2.excludeList.length&&bt$2.excludeList.some((t=>t===this.name)))return;console.log("%c"+this.name,"color:#21ae62",...t);}}tip(...t){bt$2.enable&&this.warn(...t);}warn(...t){bt$2.showWarn&&console.warn(this.name,...t);}repeat(t,...e){this.repeatMap[t]||(this.warn("repeat:"+t,...e),this.repeatMap[t]=!0);}error(...t){try{throw new Error}catch(e){console.error(this.name,...t,e);}}};function wt$3(t){return t?"string"==typeof t&&(t=[t]):t=[],t}xt$2.filterList=[],xt$2.excludeList=[],xt$2.showWarn=!0;const bt$2=xt$2,vt$3=xt$2.get("RunTime"),Bt$2={currentId:0,currentName:"",idMap:{},nameMap:{},nameToIdMap:{},start(t,e){const r=s.create(s.RUNTIME);return kt$1.currentId=kt$1.idMap[r]=e?performance.now():Date.now(),kt$1.currentName=kt$1.nameMap[r]=t,kt$1.nameToIdMap[t]=r,r},end(t,e){const s=kt$1.idMap[t],r=kt$1.nameMap[t],i=e?(performance.now()-s)/1e3:Date.now()-s;kt$1.idMap[t]=kt$1.nameMap[t]=kt$1.nameToIdMap[r]=void 0,vt$3.log(r,i,"ms");},endOfName(t,e){const s=kt$1.nameToIdMap[t];void 0!==s&&kt$1.end(s,e);}},kt$1=Bt$2,Ct$2=[],Ot$3={list:{},add(t,...e){this.list[t]=!0,Ct$2.push(...e);},has(t,e){const s=this.list[t];return !s&&e&&this.need(t),s},need(t){console.error("need plugin: "+(t.includes("-x")?"":"@leafer-in/")+t);}};setTimeout((()=>Ct$2.forEach((t=>Ot$3.has(t,!0)))));const Tt$3=xt$2.get("UICreator"),Pt$3={list:{},register(t){const{__tag:e}=t.prototype;Rt$2[e]&&Tt$3.repeat(e),Rt$2[e]=t;},get(t,e,s,r,i,n){Rt$2[t]||Tt$3.error("not register "+t);const o=new Rt$2[t](e);return void 0!==s&&(o.x=s,r&&(o.y=r),i&&(o.width=i),n&&(o.height=n)),o}},{list:Rt$2}=Pt$3,St$2=xt$2.get("EventCreator"),Lt$2={nameList:{},register(t){let e;Object.keys(t).forEach((s=>{e=t[s],"string"==typeof e&&(It$2[e]&&St$2.repeat(e),It$2[e]=t);}));},changeName(t,e){const s=It$2[t];if(s){const r=Object.keys(s).find((e=>s[e]===t));r&&(s[r]=e,It$2[e]=s);}},has(t){return !!this.nameList[t]},get:(t,...e)=>new It$2[t](...e)},{nameList:It$2}=Lt$2;let Et$3 = class Et{constructor(){this.list=[];}add(t){t.manager=this,this.list.push(t);}get(t){let s;const{list:r}=this;for(let e=0,i=r.length;e<i;e++)if(s=r[e],s.recycled&&s.isSameSize(t))return s.recycled=!1,s.manager||(s.manager=this),s;const i=e.canvas(t);return this.add(i),i}recycle(t){t.recycled=!0;}clearRecycled(){let t;const e=[];for(let s=0,r=this.list.length;s<r;s++)t=this.list[s],t.recycled?t.destroy():e.push(t);this.list=e;}clear(){this.list.forEach((t=>{t.destroy();})),this.list.length=0;}destroy(){this.clear();}};const Mt$2={default:(t,e)=>(At$2(e,t),At$2(t,e),t),assign(t,e,s){let r;Object.keys(e).forEach((i=>{var n,o;if(r=e[i],(null==r?void 0:r.constructor)===Object&&(null===(n=t[i])||void 0===n?void 0:n.constructor)===Object)return At$2(t[i],e[i],s&&s[i]);s&&i in s?(null===(o=s[i])||void 0===o?void 0:o.constructor)===Object&&At$2(t[i]={},e[i],s[i]):t[i]=e[i];}));},copyAttrs:(t,e,s)=>(s.forEach((s=>{void 0!==e[s]&&(t[s]=e[s]);})),t),clone:t=>JSON.parse(JSON.stringify(t)),toMap(t){const e={};for(let s=0,r=t.length;s<r;s++)e[t[s]]=!0;return e}},{assign:At$2}=Mt$2;let Wt$2 = class Wt{get __useNaturalRatio(){return !0}get __isLinePath(){const{path:t}=this;return t&&6===t.length&&1===t[0]}get __blendMode(){if(this.eraser&&"path"!==this.eraser)return "destination-out";const{blendMode:t}=this;return "pass-through"===t?null:t}constructor(t){this.__leaf=t;}__get(t){if(this.__input){const e=this.__input[t];if(void 0!==e)return e}return this[t]}__getData(){const t={tag:this.__leaf.tag},{__input:e}=this;let s;for(let r in this)"_"!==r[0]&&(s=e?e[r]:void 0,t[r]=void 0===s?this[r]:s);return t}__setInput(t,e){this.__input||(this.__input={}),this.__input[t]=e;}__getInput(t){if(this.__input){const e=this.__input[t];if(void 0!==e)return e}if("path"!==t||this.__pathInputed)return this["_"+t]}__removeInput(t){this.__input&&void 0!==this.__input[t]&&(this.__input[t]=void 0);}__getInputData(t,e){const s={};if(t)if(t instanceof Array)for(let e of t)s[e]=this.__getInput(e);else for(let e in t)s[e]=this.__getInput(e);else {let t,e,{__input:r}=this;s.tag=this.__leaf.tag;for(let i in this)if("_"!==i[0]&&(t=this["_"+i],void 0!==t)){if("path"===i&&!this.__pathInputed)continue;e=r?r[i]:void 0,s[i]=void 0===e?t:e;}}if(e&&e.matrix){const{a:t,b:e,c:r,d:i,e:n,f:o}=this.__leaf.__localMatrix;s.matrix={a:t,b:e,c:r,d:i,e:n,f:o};}return s}__setMiddle(t,e){this.__middle||(this.__middle={}),this.__middle[t]=e;}__getMiddle(t){return this.__middle&&this.__middle[t]}__checkSingle(){const t=this;if("pass-through"===t.blendMode){const e=this.__leaf;t.opacity<1&&(e.isBranch||t.__hasMultiPaint)||e.__hasEraser||t.eraser?t.__single=!0:t.__single&&(t.__single=!1);}else t.__single=!0;}__removeNaturalSize(){this.__naturalWidth=this.__naturalHeight=void 0;}destroy(){this.__input=this.__middle=null;}};var Nt$2;!function(t){t[t.No=0]="No",t[t.Yes=1]="Yes",t[t.NoAndSkip=2]="NoAndSkip",t[t.YesAndSkip=3]="YesAndSkip";}(Nt$2||(Nt$2={}));const Yt$2={};function Dt$3(t,e,s,r){var i,n=arguments.length,o=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(n<3?i(o):n>3?i(e,s,o):i(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}function zt$2(t,e,s,r){return new(s||(s=Promise))((function(i,n){function o(t){try{h(r.next(t));}catch(t){n(t);}}function a(t){try{h(r.throw(t));}catch(t){n(t);}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e);}))).then(o,a);}h((r=r.apply(t,e||[])).next());}))}function Ft$2(t){return (e,s)=>{t||(t=s),Object.defineProperty(e,s,{get(){return this.context[t]},set(e){this.context[t]=e;}});}}"function"==typeof SuppressedError&&SuppressedError;const jt$2=[];function Ut$2(){return (t,e)=>{jt$2.push(e);}}const Gt$2=[];let Ht$2 = class Ht{set blendMode(t){"normal"===t&&(t="source-over"),this.context.globalCompositeOperation=t;}get blendMode(){return this.context.globalCompositeOperation}set dashPattern(t){this.context.setLineDash(t||Gt$2);}get dashPattern(){return this.context.getLineDash()}__bindContext(){let t;jt$2.forEach((e=>{t=this.context[e],t&&(this[e]=t.bind(this.context));})),this.textBaseline="alphabetic";}setTransform(t,e,s,r,i,n){}resetTransform(){}getTransform(){}save(){}restore(){}transform(t,e,s,r,i,n){"object"==typeof t?this.context.transform(t.a,t.b,t.c,t.d,t.e,t.f):this.context.transform(t,e,s,r,i,n);}translate(t,e){}scale(t,e){}rotate(t){}fill(t,e){}stroke(t){}clip(t,e){}fillRect(t,e,s,r){}strokeRect(t,e,s,r){}clearRect(t,e,s,r){}drawImage(t,e,s,r,i,n,o,a,h){switch(arguments.length){case 9:if(e<0){const t=-e/r*a;r+=e,e=0,n+=t,a-=t;}if(s<0){const t=-s/i*h;i+=s,s=0,o+=t,h-=t;}this.context.drawImage(t,e,s,r,i,n,o,a,h);break;case 5:this.context.drawImage(t,e,s,r,i);break;case 3:this.context.drawImage(t,e,s);}}beginPath(){}moveTo(t,e){}lineTo(t,e){}bezierCurveTo(t,e,s,r,i,n){}quadraticCurveTo(t,e,s,r){}closePath(){}arc(t,e,s,r,i,n){}arcTo(t,e,s,r,i){}ellipse(t,e,s,r,i,n,o,a){}rect(t,e,s,r){}roundRect(t,e,s,r,i){}createConicGradient(t,e,s){}createLinearGradient(t,e,s,r){}createPattern(t,e){}createRadialGradient(t,e,s,r,i,n){}fillText(t,e,s,r){}measureText(t){}strokeText(t,e,s,r){}destroy(){this.context=null;}};Dt$3([Ft$2("imageSmoothingEnabled")],Ht$2.prototype,"smooth",void 0),Dt$3([Ft$2("imageSmoothingQuality")],Ht$2.prototype,"smoothLevel",void 0),Dt$3([Ft$2("globalAlpha")],Ht$2.prototype,"opacity",void 0),Dt$3([Ft$2()],Ht$2.prototype,"fillStyle",void 0),Dt$3([Ft$2()],Ht$2.prototype,"strokeStyle",void 0),Dt$3([Ft$2("lineWidth")],Ht$2.prototype,"strokeWidth",void 0),Dt$3([Ft$2("lineCap")],Ht$2.prototype,"strokeCap",void 0),Dt$3([Ft$2("lineJoin")],Ht$2.prototype,"strokeJoin",void 0),Dt$3([Ft$2("lineDashOffset")],Ht$2.prototype,"dashOffset",void 0),Dt$3([Ft$2()],Ht$2.prototype,"miterLimit",void 0),Dt$3([Ft$2()],Ht$2.prototype,"shadowBlur",void 0),Dt$3([Ft$2()],Ht$2.prototype,"shadowColor",void 0),Dt$3([Ft$2()],Ht$2.prototype,"shadowOffsetX",void 0),Dt$3([Ft$2()],Ht$2.prototype,"shadowOffsetY",void 0),Dt$3([Ft$2()],Ht$2.prototype,"filter",void 0),Dt$3([Ft$2()],Ht$2.prototype,"font",void 0),Dt$3([Ft$2()],Ht$2.prototype,"fontKerning",void 0),Dt$3([Ft$2()],Ht$2.prototype,"fontStretch",void 0),Dt$3([Ft$2()],Ht$2.prototype,"fontVariantCaps",void 0),Dt$3([Ft$2()],Ht$2.prototype,"textAlign",void 0),Dt$3([Ft$2()],Ht$2.prototype,"textBaseline",void 0),Dt$3([Ft$2()],Ht$2.prototype,"textRendering",void 0),Dt$3([Ft$2()],Ht$2.prototype,"wordSpacing",void 0),Dt$3([Ft$2()],Ht$2.prototype,"letterSpacing",void 0),Dt$3([Ft$2()],Ht$2.prototype,"direction",void 0),Dt$3([Ut$2()],Ht$2.prototype,"setTransform",null),Dt$3([Ut$2()],Ht$2.prototype,"resetTransform",null),Dt$3([Ut$2()],Ht$2.prototype,"getTransform",null),Dt$3([Ut$2()],Ht$2.prototype,"save",null),Dt$3([Ut$2()],Ht$2.prototype,"restore",null),Dt$3([Ut$2()],Ht$2.prototype,"translate",null),Dt$3([Ut$2()],Ht$2.prototype,"scale",null),Dt$3([Ut$2()],Ht$2.prototype,"rotate",null),Dt$3([Ut$2()],Ht$2.prototype,"fill",null),Dt$3([Ut$2()],Ht$2.prototype,"stroke",null),Dt$3([Ut$2()],Ht$2.prototype,"clip",null),Dt$3([Ut$2()],Ht$2.prototype,"fillRect",null),Dt$3([Ut$2()],Ht$2.prototype,"strokeRect",null),Dt$3([Ut$2()],Ht$2.prototype,"clearRect",null),Dt$3([Ut$2()],Ht$2.prototype,"beginPath",null),Dt$3([Ut$2()],Ht$2.prototype,"moveTo",null),Dt$3([Ut$2()],Ht$2.prototype,"lineTo",null),Dt$3([Ut$2()],Ht$2.prototype,"bezierCurveTo",null),Dt$3([Ut$2()],Ht$2.prototype,"quadraticCurveTo",null),Dt$3([Ut$2()],Ht$2.prototype,"closePath",null),Dt$3([Ut$2()],Ht$2.prototype,"arc",null),Dt$3([Ut$2()],Ht$2.prototype,"arcTo",null),Dt$3([Ut$2()],Ht$2.prototype,"ellipse",null),Dt$3([Ut$2()],Ht$2.prototype,"rect",null),Dt$3([Ut$2()],Ht$2.prototype,"roundRect",null),Dt$3([Ut$2()],Ht$2.prototype,"createConicGradient",null),Dt$3([Ut$2()],Ht$2.prototype,"createLinearGradient",null),Dt$3([Ut$2()],Ht$2.prototype,"createPattern",null),Dt$3([Ut$2()],Ht$2.prototype,"createRadialGradient",null),Dt$3([Ut$2()],Ht$2.prototype,"fillText",null),Dt$3([Ut$2()],Ht$2.prototype,"measureText",null),Dt$3([Ut$2()],Ht$2.prototype,"strokeText",null);const{copy:qt$2}=b,Vt$2={width:1,height:1,pixelRatio:1},Qt$2=["width","height","pixelRatio"];let Zt$2 = class Zt extends Ht$2{get width(){return this.size.width}get height(){return this.size.height}get pixelRatio(){return this.size.pixelRatio}get pixelWidth(){return this.width*this.pixelRatio}get pixelHeight(){return this.height*this.pixelRatio}get allowBackgroundColor(){return this.view&&this.parentView}constructor(e,r){super(),this.size={},this.worldTransform={},e||(e=Vt$2),e.pixelRatio||(e.pixelRatio=t.devicePixelRatio),this.manager=r,this.innerId=s.create(s.CNAVAS);const{width:i,height:n,pixelRatio:o}=e;this.autoLayout=!i||!n,this.size.pixelRatio=o,this.config=e,this.init();}init(){}__createContext(){const{view:t}=this,{contextSettings:e}=this.config;this.context=e?t.getContext("2d",e):t.getContext("2d"),this.__bindContext();}export(t,e){}toBlob(t,e){}toDataURL(t,e){}saveAs(t,e){}resize(t,e=!0){if(this.isSameSize(t))return;let s;this.context&&!this.unreal&&e&&this.width&&(s=this.getSameCanvas(),s.copyWorld(this));const r=this.size;Mt$2.copyAttrs(r,t,Qt$2),Qt$2.forEach((t=>r[t]||(r[t]=1))),this.bounds=new ht$2(0,0,this.width,this.height),this.context&&!this.unreal&&(this.updateViewSize(),this.smooth=this.config.smooth),this.updateClientBounds(),this.context&&!this.unreal&&s&&(this.clearWorld(s.bounds),this.copyWorld(s),s.recycle());}updateViewSize(){}updateClientBounds(){}getClientBounds(t){return t&&this.updateClientBounds(),this.clientBounds||this.bounds}startAutoLayout(t,e){}stopAutoLayout(){}setCursor(t){}setWorld(t,e){const{pixelRatio:s}=this,r=this.worldTransform;if(e){const{a:i,b:n,c:o,d:a,e:h,f:l}=e;this.setTransform(r.a=(t.a*i+t.b*o)*s,r.b=(t.a*n+t.b*a)*s,r.c=(t.c*i+t.d*o)*s,r.d=(t.c*n+t.d*a)*s,r.e=(t.e*i+t.f*o+h)*s,r.f=(t.e*n+t.f*a+l)*s);}else this.setTransform(r.a=t.a*s,r.b=t.b*s,r.c=t.c*s,r.d=t.d*s,r.e=t.e*s,r.f=t.f*s);}useWorldTransform(t){t&&(this.worldTransform=t);const e=this.worldTransform;e&&this.setTransform(e.a,e.b,e.c,e.d,e.e,e.f);}setStroke(t,e,s){e&&(this.strokeWidth=e),t&&(this.strokeStyle=t),s&&this.setStrokeOptions(s);}setStrokeOptions(t){this.strokeCap="none"===t.strokeCap?"butt":t.strokeCap,this.strokeJoin=t.strokeJoin,this.dashPattern=t.dashPattern,this.dashOffset=t.dashOffset,this.miterLimit=t.miterLimit;}saveBlendMode(t){this.savedBlendMode=this.blendMode,this.blendMode=t;}restoreBlendMode(){this.blendMode=this.savedBlendMode;}hitFill(t,e){return !0}hitStroke(t,e){return !0}hitPixel(t,e,s=1){return !0}setWorldShadow(t,e,s,r){const{pixelRatio:i}=this;this.shadowOffsetX=t*i,this.shadowOffsetY=e*i,this.shadowBlur=s*i,this.shadowColor=r||"black";}setWorldBlur(t){const{pixelRatio:e}=this;this.filter=`blur(${t*e}px)`;}copyWorld(t,e,s,r){if(r&&(this.blendMode=r),e){const{pixelRatio:r}=this;s||(s=e),this.drawImage(t.view,e.x*r,e.y*r,e.width*r,e.height*r,s.x*r,s.y*r,s.width*r,s.height*r);}else this.drawImage(t.view,0,0);r&&(this.blendMode="source-over");}copyWorldToInner(t,e,s,r){if(r&&(this.blendMode=r),e.b||e.c)this.save(),this.resetTransform(),this.copyWorld(t,e,it$2.tempToOuterOf(s,e)),this.restore();else {const{pixelRatio:r}=this;this.drawImage(t.view,e.x*r,e.y*r,e.width*r,e.height*r,s.x,s.y,s.width,s.height);}r&&(this.blendMode="source-over");}copyWorldByReset(t,e,s,r,i){this.resetTransform(),this.copyWorld(t,e,s,r),i||this.useWorldTransform();}useGrayscaleAlpha(t){let e,s;this.setTempBounds(t,!0,!0);const{context:r}=this,i=r.getImageData(lt$3.x,lt$3.y,lt$3.width,lt$3.height),{data:n}=i;for(let t=0,r=n.length;t<r;t+=4)s=.299*n[t]+.587*n[t+1]+.114*n[t+2],(e=n[t+3])&&(n[t+3]=255===e?s:e*(s/255));r.putImageData(i,lt$3.x,lt$3.y);}useMask(t,e,s){this.copyWorld(t,e,s,"destination-in");}useEraser(t,e,s){this.copyWorld(t,e,s,"destination-out");}fillWorld(t,e,s){s&&(this.blendMode=s),this.fillStyle=e,this.setTempBounds(t),this.fillRect(lt$3.x,lt$3.y,lt$3.width,lt$3.height),s&&(this.blendMode="source-over");}strokeWorld(t,e,s){s&&(this.blendMode=s),this.strokeStyle=e,this.setTempBounds(t),this.strokeRect(lt$3.x,lt$3.y,lt$3.width,lt$3.height),s&&(this.blendMode="source-over");}clearWorld(t,e){this.setTempBounds(t,e),this.clearRect(lt$3.x,lt$3.y,lt$3.width,lt$3.height);}clipWorld(t,e){this.beginPath(),this.setTempBounds(t,e),this.rect(lt$3.x,lt$3.y,lt$3.width,lt$3.height),this.clip();}clear(){const{pixelRatio:t}=this;this.clearRect(0,0,this.width*t+2,this.height*t+2);}setTempBounds(t,e,s){lt$3.set(t),s&&lt$3.intersect(this.bounds),lt$3.scale(this.pixelRatio),e&&lt$3.ceil();}isSameSize(t){return this.width===t.width&&this.height===t.height&&this.pixelRatio===t.pixelRatio}getSameCanvas(t,s){const r=this.manager?this.manager.get(this.size):e.canvas(Object.assign({},this.size));return r.save(),t&&(qt$2(r.worldTransform,this.worldTransform),r.useWorldTransform()),s&&(r.smooth=this.smooth),r}recycle(t){this.recycled||(this.restore(),t?this.clearWorld(t,!0):this.clear(),this.manager?this.manager.recycle(this):this.destroy());}updateRender(t){}unrealCanvas(){}destroy(){this.manager=this.view=this.parentView=null;}};const Jt$2={creator:{},parse(t,e){},convertToCanvasData(t,e){}},$t$2={N:21,D:22,X:23,G:24,F:25,O:26,P:27,U:28},Kt$2=Object.assign({M:1,m:10,L:2,l:20,H:3,h:30,V:4,v:40,C:5,c:50,S:6,s:60,Q:7,q:70,T:8,t:80,A:9,a:90,Z:11,z:11,R:12},$t$2),te$2={M:3,m:3,L:3,l:3,H:2,h:2,V:2,v:2,C:7,c:7,S:5,s:5,Q:5,q:5,T:3,t:3,A:8,a:8,Z:1,z:1,N:5,D:9,X:6,G:9,F:5,O:7,P:4,U:6},ee$2={m:10,l:20,H:3,h:30,V:4,v:40,c:50,S:6,s:60,q:70,T:8,t:80,A:9,a:90},se$2=Object.assign(Object.assign({},ee$2),$t$2),re$2=Kt$2,ie$2={};for(let t in re$2)ie$2[re$2[t]]=t;const ne$2={};for(let t in re$2)ne$2[re$2[t]]=te$2[t];const oe$2={drawRoundRect(t,e,s,r,i,n){const o=a.fourNumber(n,Math.min(r/2,i/2)),h=e+r,l=s+i;o[0]?t.moveTo(e+o[0],s):t.moveTo(e,s),o[1]?t.arcTo(h,s,h,l,o[1]):t.lineTo(h,s),o[2]?t.arcTo(h,l,e,l,o[2]):t.lineTo(h,l),o[3]?t.arcTo(e,l,e,s,o[3]):t.lineTo(e,l),o[0]?t.arcTo(e,s,h,s,o[0]):t.lineTo(e,s);}},{sin:ae$2,cos:he$2,atan2:le$2,ceil:de$2,abs:ue$2,PI:ce$2,sqrt:_e$2,pow:pe$2}=Math,{setPoint:fe$2,addPoint:ge$2}=z$1,{set:ye$2,toNumberPoints:me$2}=I$1,{M:xe$2,L:we$2,C:be$2,Q:ve$2,Z:Be$2}=Kt$2,ke$2={},Ce$2={points(t,e,s,r){let i=me$2(e);if(t.push(xe$2,i[0],i[1]),s&&i.length>5){let e,n,o,a,h,l,d,u,c,_,p,f,g,y=i.length;const m=!0===s?.5:s;r&&(i=[i[y-2],i[y-1],...i,i[0],i[1],i[2],i[3]],y=i.length);for(let s=2;s<y-2;s+=2)e=i[s-2],n=i[s-1],o=i[s],a=i[s+1],h=i[s+2],l=i[s+3],p=_e$2(pe$2(o-e,2)+pe$2(a-n,2)),f=_e$2(pe$2(h-o,2)+pe$2(l-a,2)),g=p+f,p=m*p/g,f=m*f/g,h-=e,l-=n,d=o-p*h,u=a-p*l,2===s?r||t.push(ve$2,d,u,o,a):t.push(be$2,c,_,d,u,o,a),c=o+f*h,_=a+f*l;r||t.push(ve$2,c,_,i[y-2],i[y-1]);}else for(let e=2,s=i.length;e<s;e+=2)t.push(we$2,i[e],i[e+1]);r&&t.push(Be$2);},rect(t,e,s,r,i){Jt$2.creator.path=t,Jt$2.creator.moveTo(e,s).lineTo(e+r,s).lineTo(e+r,s+i).lineTo(e,s+i).lineTo(e,s);},roundRect(t,e,s,r,i,n){Jt$2.creator.path=[],oe$2.drawRoundRect(Jt$2.creator,e,s,r,i,n),t.push(...Jt$2.convertToCanvasData(Jt$2.creator.path,!0));},arcTo(t,e,s,r,i,n,o,a,u,c,_){const p=r-e,f=i-s,g=n-r,y=o-i;let m=le$2(f,p),x=le$2(y,g),w=x-m;if(w<0&&(w+=l),w===ce$2||ue$2(p+f)<1e-12||ue$2(g+y)<1e-12)return t&&t.push(we$2,r,i),u&&(fe$2(u,e,s),ge$2(u,r,i)),_&&ye$2(_,e,s),void(c&&ye$2(c,r,i));const b=p*y-g*f<0,v=b?-1:1,B=a/he$2(w/2),k=r+B*he$2(m+w/2+d*v),C=i+B*ae$2(m+w/2+d*v);return m-=d*v,x-=d*v,Pe$2(t,k,C,a,a,0,m/h,x/h,b,u,c,_)},arc:(t,e,s,r,i,n,o,a,h,l)=>Pe$2(t,e,s,r,r,0,i,n,o,a,h,l),ellipse(t,e,s,r,i,n,o,a,u,c,_,p){const f=n*h,g=ae$2(f),y=he$2(f);let m=o*h,x=a*h;m>ce$2&&(m-=l),x<0&&(x+=l);let w=x-m;w<0?w+=l:w>l&&(w-=l),u&&(w-=l);const b=de$2(ue$2(w/d)),v=w/b,B=ae$2(v/4),k=8/3*B*B/ae$2(v/2);x=m+v;let C,O,T,P,R,S,L,I,E=he$2(m),M=ae$2(m),A=T=y*r*E-g*i*M,W=P=g*r*E+y*i*M,N=e+T,Y=s+P;t&&t.push(t.length?we$2:xe$2,N,Y),c&&fe$2(c,N,Y),p&&ye$2(p,N,Y);for(let n=0;n<b;n++)C=he$2(x),O=ae$2(x),T=y*r*C-g*i*O,P=g*r*C+y*i*O,R=e+A-k*(y*r*M+g*i*E),S=s+W-k*(g*r*M-y*i*E),L=e+T+k*(y*r*O+g*i*C),I=s+P+k*(g*r*O-y*i*C),t&&t.push(be$2,R,S,L,I,e+T,s+P),c&&Te$2(e+A,s+W,R,S,L,I,e+T,s+P,c,!0),A=T,W=P,E=C,M=O,m=x,x+=v;_&&ye$2(_,e+T,s+P);},quadraticCurveTo(t,e,s,r,i,n,o){t.push(be$2,(e+2*r)/3,(s+2*i)/3,(n+2*r)/3,(o+2*i)/3,n,o);},toTwoPointBoundsByQuadraticCurve(t,e,s,r,i,n,o,a){Te$2(t,e,(t+2*s)/3,(e+2*r)/3,(i+2*s)/3,(n+2*r)/3,i,n,o,a);},toTwoPointBounds(t,e,s,r,i,n,o,a,h,l){const d=[];let u,c,_,p,f,g,y,m,x=t,w=s,b=i,v=o;for(let t=0;t<2;++t)if(1==t&&(x=e,w=r,b=n,v=a),u=-3*x+9*w-9*b+3*v,c=6*x-12*w+6*b,_=3*w-3*x,Math.abs(u)<1e-12){if(Math.abs(c)<1e-12)continue;p=-_/c,0<p&&p<1&&d.push(p);}else y=c*c-4*_*u,m=Math.sqrt(y),y<0||(f=(-c+m)/(2*u),0<f&&f<1&&d.push(f),g=(-c-m)/(2*u),0<g&&g<1&&d.push(g));l?ge$2(h,t,e):fe$2(h,t,e),ge$2(h,o,a);for(let l=0,u=d.length;l<u;l++)Oe$2(d[l],t,e,s,r,i,n,o,a,ke$2),ge$2(h,ke$2.x,ke$2.y);},getPointAndSet(t,e,s,r,i,n,o,a,h,l){const d=1-t,u=d*d*d,c=3*d*d*t,_=3*d*t*t,p=t*t*t;l.x=u*e+c*r+_*n+p*a,l.y=u*s+c*i+_*o+p*h;},getPoint(t,e,s,r,i,n,o,a,h){const l={};return Oe$2(t,e,s,r,i,n,o,a,h,l),l}},{getPointAndSet:Oe$2,toTwoPointBounds:Te$2,ellipse:Pe$2}=Ce$2,{sin:Re$2,cos:Se$2,sqrt:Le$2,atan2:Ie$2}=Math,{ellipse:Ee$2}=Ce$2,Me$2={ellipticalArc(e,s,r,i,n,o,a,d,u,c,_){const p=(u-s)/2,f=(c-r)/2,g=o*h,y=Re$2(g),m=Se$2(g),x=-m*p-y*f,w=-m*f+y*p,b=i*i,v=n*n,B=w*w,k=x*x,C=b*v-b*B-v*k;let O=0;if(C<0){const t=Le$2(1-C/(b*v));i*=t,n*=t;}else O=(a===d?-1:1)*Le$2(C/(b*B+v*k));const T=O*i*w/n,P=-O*n*x/i,R=Ie$2((w-P)/n,(x-T)/i),S=Ie$2((-w-P)/n,(-x-T)/i);let L=S-R;0===d&&L>0?L-=l:1===d&&L<0&&(L+=l);const I=s+p+m*T-y*P,E=r+f+y*T+m*P,M=L<0?1:0;_||t.ellipseToCurve?Ee$2(e,I,E,i,n,o,R/h,S/h,M):i!==n||o?e.push(Kt$2.G,I,E,i,n,o,R/h,S/h,M):e.push(Kt$2.O,I,E,i,R/h,S/h,M);}},{M:Ae$2,m:We$2,L:Ne$1,l:Ye$2,H:Xe$2,h:De$2,V:ze$2,v:Fe$2,C:je$2,c:Ue$2,S:Ge$2,s:He$2,Q:qe$2,q:Ve$2,T:Qe$1,t:Ze$1,A:Je$2,a:$e$1,Z:Ke$1,z:ts,N:es,D:ss,X:rs,G:is,F:ns,O:os,P:as,U:hs}=Kt$2,{rect:ls,roundRect:ds,arcTo:us,arc:cs,ellipse:_s,quadraticCurveTo:ps}=Ce$2,{ellipticalArc:fs}=Me$2,gs=xt$2.get("PathConvert"),ys={},ms={current:{dot:0},stringify(t,e){let s,r,i,n=0,o=t.length,h="";for(;n<o;){r=t[n],s=ne$2[r],h+=r===i?" ":ie$2[r];for(let r=1;r<s;r++)h+=a.float(t[n+r],e),r===s-1||(h+=" ");i=r,n+=s;}return h},parse(t,e){let s,r,i,n="";const o=[],a=e?se$2:ee$2;for(let e=0,h=t.length;e<h;e++)r=t[e],mt$3[r]?("."===r&&(xs.dot&&(ws(o,n),n=""),xs.dot++),"0"===n&&"."!==r&&(ws(o,n),n=""),n+=r):Kt$2[r]?(n&&(ws(o,n),n=""),xs.name=Kt$2[r],xs.length=te$2[r],xs.index=0,ws(o,xs.name),!s&&a[r]&&(s=!0)):"-"===r||"+"===r?"e"===i||"E"===i?n+=r:(n&&ws(o,n),n=r):n&&(ws(o,n),n=""),i=r;return n&&ws(o,n),s?ms.toCanvasData(o,e):o},toCanvasData(t,e){let s,r,i,n,o,a=0,h=0,l=0,d=0,u=0,c=t.length;const _=[];for(;u<c;){switch(i=t[u],i){case We$2:t[u+1]+=a,t[u+2]+=h;case Ae$2:a=t[u+1],h=t[u+2],_.push(Ae$2,a,h),u+=3;break;case De$2:t[u+1]+=a;case Xe$2:a=t[u+1],_.push(Ne$1,a,h),u+=2;break;case Fe$2:t[u+1]+=h;case ze$2:h=t[u+1],_.push(Ne$1,a,h),u+=2;break;case Ye$2:t[u+1]+=a,t[u+2]+=h;case Ne$1:a=t[u+1],h=t[u+2],_.push(Ne$1,a,h),u+=3;break;case He$2:t[u+1]+=a,t[u+2]+=h,t[u+3]+=a,t[u+4]+=h,i=Ge$2;case Ge$2:o=n===je$2||n===Ge$2,l=o?2*a-s:t[u+1],d=o?2*h-r:t[u+2],s=t[u+1],r=t[u+2],a=t[u+3],h=t[u+4],_.push(je$2,l,d,s,r,a,h),u+=5;break;case Ue$2:t[u+1]+=a,t[u+2]+=h,t[u+3]+=a,t[u+4]+=h,t[u+5]+=a,t[u+6]+=h,i=je$2;case je$2:s=t[u+3],r=t[u+4],a=t[u+5],h=t[u+6],_.push(je$2,t[u+1],t[u+2],s,r,a,h),u+=7;break;case Ze$1:t[u+1]+=a,t[u+2]+=h,i=Qe$1;case Qe$1:o=n===qe$2||n===Qe$1,s=o?2*a-s:t[u+1],r=o?2*h-r:t[u+2],e?ps(_,a,h,s,r,t[u+1],t[u+2]):_.push(qe$2,s,r,t[u+1],t[u+2]),a=t[u+1],h=t[u+2],u+=3;break;case Ve$2:t[u+1]+=a,t[u+2]+=h,t[u+3]+=a,t[u+4]+=h,i=qe$2;case qe$2:s=t[u+1],r=t[u+2],e?ps(_,a,h,s,r,t[u+3],t[u+4]):_.push(qe$2,s,r,t[u+3],t[u+4]),a=t[u+3],h=t[u+4],u+=5;break;case $e$1:t[u+6]+=a,t[u+7]+=h;case Je$2:fs(_,a,h,t[u+1],t[u+2],t[u+3],t[u+4],t[u+5],t[u+6],t[u+7],e),a=t[u+6],h=t[u+7],u+=8;break;case ts:case Ke$1:_.push(Ke$1),u++;break;case es:a=t[u+1],h=t[u+2],e?ls(_,a,h,t[u+3],t[u+4]):bs(_,t,u,5),u+=5;break;case ss:a=t[u+1],h=t[u+2],e?ds(_,a,h,t[u+3],t[u+4],[t[u+5],t[u+6],t[u+7],t[u+8]]):bs(_,t,u,9),u+=9;break;case rs:a=t[u+1],h=t[u+2],e?ds(_,a,h,t[u+3],t[u+4],t[u+5]):bs(_,t,u,6),u+=6;break;case is:_s(e?_:bs(_,t,u,9),t[u+1],t[u+2],t[u+3],t[u+4],t[u+5],t[u+6],t[u+7],t[u+8],null,ys),a=ys.x,h=ys.y,u+=9;break;case ns:e?_s(_,t[u+1],t[u+2],t[u+3],t[u+4],0,0,360,!1):bs(_,t,u,5),a=t[u+1]+t[u+3],h=t[u+2],u+=5;break;case os:cs(e?_:bs(_,t,u,7),t[u+1],t[u+2],t[u+3],t[u+4],t[u+5],t[u+6],null,ys),a=ys.x,h=ys.y,u+=7;break;case as:e?cs(_,t[u+1],t[u+2],t[u+3],0,360,!1):bs(_,t,u,4),a=t[u+1]+t[u+3],h=t[u+2],u+=4;break;case hs:us(e?_:bs(_,t,u,6),a,h,t[u+1],t[u+2],t[u+3],t[u+4],t[u+5],null,ys),a=ys.x,h=ys.y,u+=6;break;default:return gs.error(`command: ${i} [index:${u}]`,t),_}n=i;}return _},objectToCanvasData(t){const e=[];return t.forEach((t=>{switch(t.name){case"M":e.push(Ae$2,t.x,t.y);break;case"L":e.push(Ne$1,t.x,t.y);break;case"C":e.push(je$2,t.x1,t.y1,t.x2,t.y2,t.x,t.y);break;case"Q":e.push(qe$2,t.x1,t.y1,t.x,t.y);break;case"Z":e.push(Ke$1);}})),e},copyData(t,e,s,r){for(let i=s,n=s+r;i<n;i++)t.push(e[i]);},pushData(t,e){xs.index===xs.length&&(xs.index=1,t.push(xs.name)),t.push(Number(e)),xs.index++,xs.dot=0;}},{current:xs,pushData:ws,copyData:bs}=ms,{M:vs,L:Bs,C:ks,Q:Cs,Z:Os,N:Ts,D:Ps,X:Rs,G:Ss,F:Ls,O:Is,P:Es,U:Ms}=Kt$2,{getMinDistanceFrom:As,getRadianFrom:Ws}=I$1,{tan:Ns,min:Ys,abs:Xs}=Math,Ds={},zs={beginPath(t){t.length=0;},moveTo(t,e,s){t.push(vs,e,s);},lineTo(t,e,s){t.push(Bs,e,s);},bezierCurveTo(t,e,s,r,i,n,o){t.push(ks,e,s,r,i,n,o);},quadraticCurveTo(t,e,s,r,i){t.push(Cs,e,s,r,i);},closePath(t){t.push(Os);},rect(t,e,s,r,i){t.push(Ts,e,s,r,i);},roundRect(t,e,s,r,i,n){if("number"==typeof n)t.push(Rs,e,s,r,i,n);else {const o=a.fourNumber(n);o?t.push(Ps,e,s,r,i,...o):t.push(Ts,e,s,r,i);}},ellipse(t,e,s,r,i,n,o,a,h){void 0===n?t.push(Ls,e,s,r,i):(void 0===o&&(o=0),void 0===a&&(a=360),t.push(Ss,e,s,r,i,n,o,a,h?1:0));},arc(t,e,s,r,i,n,o){void 0===i?t.push(Es,e,s,r):(void 0===n&&(n=360),t.push(Is,e,s,r,i,n,o?1:0));},arcTo(t,e,s,r,i,n,o,a){if(void 0!==o){const h=Ns(Ws(o,a,e,s,r,i)/2)*(As(o,a,e,s,r,i)/2);t.push(Ms,e,s,r,i,Ys(n,Xs(h)));}else t.push(Ms,e,s,r,i,n);},drawEllipse(t,e,s,r,i,n,o,a,h){Ce$2.ellipse(null,e,s,r,i,void 0===n?0:n,void 0===o?0:o,void 0===a?360:a,h,null,null,Ds),t.push(vs,Ds.x,Ds.y),Fs(t,e,s,r,i,n,o,a,h);},drawArc(t,e,s,r,i,n,o){Ce$2.arc(null,e,s,r,void 0===i?0:i,void 0===n?360:n,o,null,null,Ds),t.push(vs,Ds.x,Ds.y),js(t,e,s,r,i,n,o);},drawPoints(t,e,s,r){Ce$2.points(t,e,s,r);}},{ellipse:Fs,arc:js}=zs,{moveTo:Us,lineTo:Gs,quadraticCurveTo:Hs,bezierCurveTo:qs,closePath:Vs,beginPath:Qs,rect:Zs,roundRect:Js,ellipse:$s,arc:Ks,arcTo:tr,drawEllipse:er,drawArc:sr,drawPoints:rr}=zs;class ir{set path(t){this.__path=t;}get path(){return this.__path}constructor(t){this.set(t);}set(t){return this.__path=t?"string"==typeof t?Jt$2.parse(t):t:[],this}beginPath(){return Qs(this.__path),this.paint(),this}moveTo(t,e){return Us(this.__path,t,e),this.paint(),this}lineTo(t,e){return Gs(this.__path,t,e),this.paint(),this}bezierCurveTo(t,e,s,r,i,n){return qs(this.__path,t,e,s,r,i,n),this.paint(),this}quadraticCurveTo(t,e,s,r){return Hs(this.__path,t,e,s,r),this.paint(),this}closePath(){return Vs(this.__path),this.paint(),this}rect(t,e,s,r){return Zs(this.__path,t,e,s,r),this.paint(),this}roundRect(t,e,s,r,i){return Js(this.__path,t,e,s,r,i),this.paint(),this}ellipse(t,e,s,r,i,n,o,a){return $s(this.__path,t,e,s,r,i,n,o,a),this.paint(),this}arc(t,e,s,r,i,n){return Ks(this.__path,t,e,s,r,i,n),this.paint(),this}arcTo(t,e,s,r,i){return tr(this.__path,t,e,s,r,i),this.paint(),this}drawEllipse(t,e,s,r,i,n,o,a){return er(this.__path,t,e,s,r,i,n,o,a),this.paint(),this}drawArc(t,e,s,r,i,n){return sr(this.__path,t,e,s,r,i,n),this.paint(),this}drawPoints(t,e,s){return rr(this.__path,t,e,s),this.paint(),this}clearPath(){return this.beginPath()}paint(){}}const{M:nr,L:or,C:ar,Q:hr,Z:lr,N:dr,D:ur,X:cr,G:_r,F:pr,O:fr,P:gr,U:yr}=Kt$2,mr=xt$2.get("PathDrawer"),xr={drawPathByData(t,e){if(!e)return;let s,r=0,i=e.length;for(;r<i;)switch(s=e[r],s){case nr:t.moveTo(e[r+1],e[r+2]),r+=3;break;case or:t.lineTo(e[r+1],e[r+2]),r+=3;break;case ar:t.bezierCurveTo(e[r+1],e[r+2],e[r+3],e[r+4],e[r+5],e[r+6]),r+=7;break;case hr:t.quadraticCurveTo(e[r+1],e[r+2],e[r+3],e[r+4]),r+=5;break;case lr:t.closePath(),r+=1;break;case dr:t.rect(e[r+1],e[r+2],e[r+3],e[r+4]),r+=5;break;case ur:t.roundRect(e[r+1],e[r+2],e[r+3],e[r+4],[e[r+5],e[r+6],e[r+7],e[r+8]]),r+=9;break;case cr:t.roundRect(e[r+1],e[r+2],e[r+3],e[r+4],e[r+5]),r+=6;break;case _r:t.ellipse(e[r+1],e[r+2],e[r+3],e[r+4],e[r+5]*h,e[r+6]*h,e[r+7]*h,e[r+8]),r+=9;break;case pr:t.ellipse(e[r+1],e[r+2],e[r+3],e[r+4],0,0,l,!1),r+=5;break;case fr:t.arc(e[r+1],e[r+2],e[r+3],e[r+4]*h,e[r+5]*h,e[r+6]),r+=7;break;case gr:t.arc(e[r+1],e[r+2],e[r+3],0,l,!1),r+=4;break;case yr:t.arcTo(e[r+1],e[r+2],e[r+3],e[r+4],e[r+5]),r+=6;break;default:return void mr.error(`command: ${s} [index:${r}]`,e)}}},{M:wr,L:br,C:vr,Q:Br,Z:kr,N:Cr,D:Or,X:Tr,G:Pr,F:Rr,O:Sr,P:Lr,U:Ir}=Kt$2,{toTwoPointBounds:Er,toTwoPointBoundsByQuadraticCurve:Mr,arcTo:Ar,arc:Wr,ellipse:Nr}=Ce$2,{addPointBounds:Yr,copy:Xr,addPoint:Dr,setPoint:zr,addBounds:Fr,toBounds:jr}=z$1,Ur=xt$2.get("PathBounds");let Gr,Hr,qr;const Vr={},Qr={},Zr={},Jr={toBounds(t,e){Jr.toTwoPointBounds(t,Qr),jr(Qr,e);},toTwoPointBounds(t,e){if(!t||!t.length)return zr(e,0,0);let s,r,i,n,o,a=0,h=0,l=0;const d=t.length;for(;a<d;)switch(o=t[a],0===a&&(o===kr||o===vr||o===Br?zr(e,h,l):zr(e,t[a+1],t[a+2])),o){case wr:case br:h=t[a+1],l=t[a+2],Dr(e,h,l),a+=3;break;case vr:i=t[a+5],n=t[a+6],Er(h,l,t[a+1],t[a+2],t[a+3],t[a+4],i,n,Vr),Yr(e,Vr),h=i,l=n,a+=7;break;case Br:s=t[a+1],r=t[a+2],i=t[a+3],n=t[a+4],Mr(h,l,s,r,i,n,Vr),Yr(e,Vr),h=i,l=n,a+=5;break;case kr:a+=1;break;case Cr:h=t[a+1],l=t[a+2],Fr(e,h,l,t[a+3],t[a+4]),a+=5;break;case Or:case Tr:h=t[a+1],l=t[a+2],Fr(e,h,l,t[a+3],t[a+4]),a+=o===Or?9:6;break;case Pr:Nr(null,t[a+1],t[a+2],t[a+3],t[a+4],t[a+5],t[a+6],t[a+7],t[a+8],Vr,Zr),0===a?Xr(e,Vr):Yr(e,Vr),h=Zr.x,l=Zr.y,a+=9;break;case Rr:h=t[a+1],l=t[a+2],Hr=t[a+3],qr=t[a+4],Fr(e,h-Hr,l-qr,2*Hr,2*qr),h+=Hr,a+=5;break;case Sr:Wr(null,t[a+1],t[a+2],t[a+3],t[a+4],t[a+5],t[a+6],Vr,Zr),0===a?Xr(e,Vr):Yr(e,Vr),h=Zr.x,l=Zr.y,a+=7;break;case Lr:h=t[a+1],l=t[a+2],Gr=t[a+3],Fr(e,h-Gr,l-Gr,2*Gr,2*Gr),h+=Gr,a+=4;break;case Ir:Ar(null,h,l,t[a+1],t[a+2],t[a+3],t[a+4],t[a+5],Vr,Zr),0===a?Xr(e,Vr):Yr(e,Vr),h=Zr.x,l=Zr.y,a+=6;break;default:return void Ur.error(`command: ${o} [index:${a}]`,t)}}},{M:$r,L:Kr,C:ti$1,Z:ei$1}=Kt$2,{getCenterX:si$1,getCenterY:ri$1}=I$1,{arcTo:ii$1}=zs,ni$1={smooth(t,e,s){let r,i=0,n=0,o=0,a=0,h=0,l=0,d=0,u=0,c=0;const _=t.length,p=[];for(;i<_;)switch(r=t[i],r){case $r:a=u=t[i+1],h=c=t[i+2],i+=3,t[i]===Kr?(l=t[i+1],d=t[i+2],p.push($r,si$1(a,l),ri$1(h,d))):p.push($r,a,h);break;case Kr:switch(n=t[i+1],o=t[i+2],i+=3,t[i]){case Kr:ii$1(p,n,o,t[i+1],t[i+2],e,u,c);break;case ei$1:ii$1(p,n,o,a,h,e,u,c);break;default:p.push(Kr,n,o);}u=n,c=o;break;case ti$1:p.push(ti$1,t[i+1],t[i+2],t[i+3],t[i+4],t[i+5],t[i+6]),i+=7;break;case ei$1:ii$1(p,a,h,l,d,e,u,c),p.push(ei$1),i+=1;}return r!==ei$1&&(p[1]=a,p[2]=h),p}};Jt$2.creator=new ir,Jt$2.parse=ms.parse,Jt$2.convertToCanvasData=ms.toCanvasData;const oi$1=new ir,{drawRoundRect:ai$1}=oe$2;function hi$1(t){!function(t){t&&!t.roundRect&&(t.roundRect=function(t,e,s,r,i){ai$1(this,t,e,s,r,i);});}(t);}const li$1={opacityTypes:["png","webp","svg"],upperCaseTypeMap:{},mineType:t=>!t||t.startsWith("image")?t:("jpg"===t&&(t="jpeg"),"image/"+t),fileType(t){const e=t.split(".");return e[e.length-1]},isOpaqueImage(t){const e=di$1.fileType(t);return ["jpg","jpeg"].some((t=>t===e))},getExportOptions(t){switch(typeof t){case"object":return t;case"number":return {quality:t};case"boolean":return {blob:t};default:return {}}}},di$1=li$1;di$1.opacityTypes.forEach((t=>di$1.upperCaseTypeMap[t]=t.toUpperCase()));const ui$1=xt$2.get("TaskProcessor");let ci$1 = class ci{constructor(t){this.parallel=!0,this.time=1,this.id=s.create(s.TASK),this.task=t;}run(){return zt$2(this,void 0,void 0,(function*(){try{this.task&&!this.isComplete&&this.parent.running&&(yield this.task());}catch(t){ui$1.error(t);}}))}complete(){this.isComplete=!0,this.parent=null,this.task=null;}cancel(){this.isCancel=!0,this.complete();}};let _i$1 = class _i{get total(){return this.list.length+this.delayNumber}get finishedIndex(){return this.isComplete?0:this.index+this.parallelSuccessNumber}get remain(){return this.isComplete?this.total:this.total-this.finishedIndex}get percent(){const{total:t}=this;let e=0,s=0;for(let r=0;r<t;r++)r<=this.finishedIndex?(s+=this.list[r].time,r===this.finishedIndex&&(e=s)):e+=this.list[r].time;return this.isComplete?1:s/e}constructor(t){this.config={parallel:6},this.list=[],this.running=!1,this.isComplete=!0,this.index=0,this.delayNumber=0,t&&Mt$2.assign(this.config,t),this.empty();}add(t,e){let s,r,i,n;const o=new ci$1(t);return o.parent=this,"number"==typeof e?n=e:e&&(r=e.parallel,s=e.start,i=e.time,n=e.delay),i&&(o.time=i),!1===r&&(o.parallel=!1),void 0===n?this.push(o,s):(this.delayNumber++,setTimeout((()=>{this.delayNumber&&(this.delayNumber--,this.push(o,s));}),n)),this.isComplete=!1,o}push(t,e){this.list.push(t),!1===e||this.timer||(this.timer=setTimeout((()=>this.start())));}empty(){this.index=0,this.parallelSuccessNumber=0,this.list=[],this.parallelList=[],this.delayNumber=0;}start(){this.running||(this.running=!0,this.isComplete=!1,this.run());}pause(){clearTimeout(this.timer),this.timer=null,this.running=!1;}resume(){this.start();}skip(){this.index++,this.resume();}stop(){this.isComplete=!0,this.list.forEach((t=>{t.isComplete||t.cancel();})),this.pause(),this.empty();}run(){this.running&&(this.setParallelList(),this.parallelList.length>1?this.runParallelTasks():this.remain?this.runTask():this.onComplete());}runTask(){const t=this.list[this.index];t?t.run().then((()=>{this.onTask(t),this.index++,this.nextTask();})).catch((t=>{this.onError(t);})):this.nextTask();}runParallelTasks(){this.parallelList.forEach((t=>this.runParallelTask(t)));}runParallelTask(t){t.run().then((()=>{this.onTask(t),this.fillParallelTask();})).catch((t=>{this.onParallelError(t);}));}nextTask(){this.total===this.finishedIndex?this.onComplete():this.timer=setTimeout((()=>this.run()));}setParallelList(){let t;this.parallelList=[],this.parallelSuccessNumber=0;let e=this.index+this.config.parallel;e>this.list.length&&(e=this.list.length);for(let s=this.index;s<e&&(t=this.list[s],t.parallel);s++)this.parallelList.push(t);}fillParallelTask(){let t;const e=this.parallelList;this.parallelSuccessNumber++,e.pop();const s=e.length,r=this.finishedIndex+s;if(e.length){if(!this.running)return;r<this.total&&(t=this.list[r],t&&t.parallel&&(e.push(t),this.runParallelTask(t)));}else this.index+=this.parallelSuccessNumber,this.parallelSuccessNumber=0,this.nextTask();}onComplete(){this.stop(),this.config.onComplete&&this.config.onComplete();}onTask(t){t.complete(),this.config.onTask&&this.config.onTask();}onParallelError(t){this.parallelList.forEach((t=>{t.parallel=!1;})),this.parallelList.length=0,this.parallelSuccessNumber=0,this.onError(t);}onError(t){this.pause(),this.config.onError&&this.config.onError(t);}destroy(){this.stop();}};const pi$1={map:{},recycledList:[],tasker:new _i$1,patternTasker:new _i$1,get isComplete(){return fi$1.tasker.isComplete},get(t){let s=fi$1.map[t.url];return s||(s=e.image(t),fi$1.map[t.url]=s),s.use++,s},recycle(t){t.use--,setTimeout((()=>{t.use||fi$1.recycledList.push(t);}));},clearRecycled(){const t=fi$1.recycledList;t.length>100&&(t.forEach((t=>{!t.use&&t.url&&(delete fi$1.map[t.url],t.destroy());})),t.length=0);},hasOpacityPixel:t=>li$1.opacityTypes.some((e=>fi$1.isFormat(e,t))),isFormat(t,e){if(e.format===t)return !0;const{url:s}=e;if(s.startsWith("data:")){if(s.startsWith("data:"+li$1.mineType(t)))return !0}else {if(s.includes("."+t)||s.includes("."+li$1.upperCaseTypeMap[t]))return !0;if("png"===t&&!s.includes("."))return !0}return !1},destroy(){fi$1.map={},fi$1.recycledList=[];}},fi$1=pi$1,{IMAGE:gi$1,create:yi$1}=s;let mi$1 = class mi{get url(){return this.config.url}get completed(){return this.ready||!!this.error}constructor(t){this.use=0,this.waitComplete=[],this.innerId=yi$1(gi$1),this.config=t||{url:""},this.isSVG=pi$1.isFormat("svg",t),this.hasOpacityPixel=pi$1.hasOpacityPixel(t);}load(e,s){return this.loading||(this.loading=!0,pi$1.tasker.add((()=>zt$2(this,void 0,void 0,(function*(){return yield t.origin.loadImage(this.url).then((t=>{this.ready=!0,this.width=t.naturalWidth||t.width,this.height=t.naturalHeight||t.height,this.view=t,this.onComplete(!0);})).catch((t=>{this.error=t,this.onComplete(!1);}))}))))),this.waitComplete.push(e,s),this.waitComplete.length-2}unload(t,e){const s=this.waitComplete;if(e){const e=s[t+1];e&&e({type:"stop"});}s[t]=s[t+1]=void 0;}onComplete(t){let e;this.waitComplete.forEach(((s,r)=>{e=r%2,s&&(t?e||s(this):e&&s(this.error));})),this.waitComplete.length=0,this.loading=!1;}getCanvas(e,s,r,i){if(e||(e=this.width),s||(s=this.height),this.cache){let{params:t,data:e}=this.cache;for(let s in t)if(t[s]!==arguments[s]){e=null;break}if(e)return e}const n=t.origin.createCanvas(e,s),o=n.getContext("2d");return r&&(o.globalAlpha=r),o.drawImage(this.view,0,0,e,s),this.cache=this.use>1?{data:n,params:arguments}:null,n}getPattern(e,s,r,i){const n=t.canvas.createPattern(e,s);try{r&&n.setTransform&&(n.setTransform(r),r=null);}catch(t){}return i&&(i.transform=r),n}destroy(){this.config={url:""},this.cache=null,this.waitComplete.length=0;}};function xi$1(t,e,s,r){r||(s.configurable=s.enumerable=!0),Object.defineProperty(t,e,s);}function wi$1(t,e){return Object.getOwnPropertyDescriptor(t,e)}function bi$1(t,e){return (s,r)=>Bi$1(s,r,t,e&&e(r))}function vi$1(t){return t}function Bi$1(t,e,s,r){const i={get(){return this.__getAttr(e)},set(t){this.__setAttr(e,t);}};xi$1(t,e,Object.assign(i,r||{})),Zi(t,e,s);}function ki$1(t){return bi$1(t)}function Ci$1(t,e){return bi$1(t,(t=>({set(s){this.__setAttr(t,s,e)&&(this.__layout.matrixChanged||this.__layout.matrixChange());}})))}function Oi$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__hasAutoLayout=!!(this.origin||this.around||this.flow),this.__local||this.__layout.createLocal(),Li$1(this));}})))}function Ti$1(t,e){return bi$1(t,(t=>({set(s){this.__setAttr(t,s,e)&&(this.__layout.scaleChanged||this.__layout.scaleChange());}})))}function Pi$1(t,e){return bi$1(t,(t=>({set(s){this.__setAttr(t,s,e)&&(this.__layout.rotationChanged||this.__layout.rotationChange());}})))}function Ri$1(t,e){return bi$1(t,(t=>({set(s){this.__setAttr(t,s,e)&&Li$1(this);}})))}function Si$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(Li$1(this),this.__.__removeNaturalSize());}})))}function Li$1(t){t.__layout.boxChanged||t.__layout.boxChange(),t.__hasAutoLayout&&(t.__layout.matrixChanged||t.__layout.matrixChange());}function Ii$1(t){return bi$1(t,(t=>({set(e){const s=this.__;2!==s.__pathInputed&&(s.__pathInputed=e?1:0),e||(s.__pathForRender=void 0),this.__setAttr(t,e),Li$1(this);}})))}const Ei$1=Ri$1;function Mi$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&Ai$1(this);}})))}function Ai$1(t){t.__layout.strokeChanged||t.__layout.strokeChange(),t.__.__useArrow&&Li$1(t);}const Wi$1=Mi$1;function Ni(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e),this.__layout.renderChanged||this.__layout.renderChange();}})))}function Yi(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__layout.surfaceChanged||this.__layout.surfaceChange());}})))}function Xi(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__layout.opacityChanged||this.__layout.opacityChange()),this.mask&&zi$1(this);}})))}function Di$1(t){return bi$1(t,(t=>({set(e){const s=this.visible;if(!0===s&&0===e){if(this.animationOut)return this.__runAnimation("out",(()=>Fi$1(this,t,e,s)))}else 0===s&&!0===e&&this.animation&&this.__runAnimation("in");Fi$1(this,t,e,s),this.mask&&zi$1(this);}})))}function zi$1(t){const{parent:e}=t;if(e){const{__hasMask:t}=e;e.__updateMask(),t!==e.__hasMask&&e.forceUpdate();}}function Fi$1(t,e,s,r){t.__setAttr(e,s)&&(t.__layout.opacityChanged||t.__layout.opacityChange(),0!==r&&0!==s||Li$1(t));}function ji$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__layout.surfaceChanged||this.__layout.surfaceChange(),this.waitParent((()=>{this.parent.__layout.childrenSortChange();})));}})))}function Ui$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__layout.boxChanged||this.__layout.boxChange(),this.waitParent((()=>{this.parent.__updateMask(e);})));}})))}function Gi$1(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&this.waitParent((()=>{this.parent.__updateEraser(e);}));}})))}function Hi(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e)&&(this.__layout.hitCanvasChanged=!0,xt$2.showHitView&&(this.__layout.surfaceChanged||this.__layout.surfaceChange()),this.leafer&&this.leafer.updateCursor());}})))}function qi(t){return bi$1(t,(t=>({set(e){this.__setAttr(t,e),this.leafer&&this.leafer.updateCursor();}})))}function Vi$1(t){return (e,s)=>{xi$1(e,"__DataProcessor",{get:()=>t});}}function Zi(t,e,s){const r=t.__DataProcessor.prototype,i="_"+e,n=function(t){return "set"+t.charAt(0).toUpperCase()+t.slice(1)}(e),o={get(){const t=this[i];return void 0===t?s:t},set(t){this[i]=t;}};if(void 0===s)o.get=function(){return this[i]};else if("object"==typeof s){const{clone:t}=Mt$2;o.get=function(){let e=this[i];return void 0===e&&(this[i]=e=t(s)),e};}"width"===e?o.get=function(){const t=this[i];if(void 0===t){const t=this;return t._height&&t.__naturalWidth&&t.__useNaturalRatio?t._height*t.__naturalWidth/t.__naturalHeight:t.__naturalWidth||s}return t}:"height"===e&&(o.get=function(){const t=this[i];if(void 0===t){const t=this;return t._width&&t.__naturalHeight&&t.__useNaturalRatio?t._width*t.__naturalHeight/t.__naturalWidth:t.__naturalHeight||s}return t});let a,h=r;for(;!a&&h;)a=wi$1(h,e),h=h.__proto__;a&&a.set&&(o.set=a.set),r[n]&&(o.set=r[n],delete r[n]),xi$1(r,e,o);}const Ji=new xt$2("rewrite"),$i=[],Ki=["destroy","constructor"];function tn(t){return (e,s)=>{$i.push({name:e.constructor.name+"."+s,run:()=>{e[s]=t;}});}}function en(){return t=>{sn();}}function sn(t){$i.length&&($i.forEach((e=>{t&&Ji.error(e.name,"需在Class上装饰@rewriteAble()"),e.run();})),$i.length=0);}function rn(t,e){return s=>{var r;(t.prototype?(r=t.prototype,Object.getOwnPropertyNames(r)):Object.keys(t)).forEach((r=>{if(!(Ki.includes(r)||e&&e.includes(r)))if(t.prototype){wi$1(t.prototype,r).writable&&(s.prototype[r]=t.prototype[r]);}else s.prototype[r]=t[r];}));}}function nn(){return t=>{Pt$3.register(t);}}function on(){return t=>{Lt$2.register(t);}}setTimeout((()=>sn(!0)));const{copy:an,toInnerPoint:hn,toOuterPoint:ln,scaleOfOuter:dn,rotateOfOuter:un,skewOfOuter:cn,multiplyParent:_n,divideParent:pn,getLayout:fn}=b,gn={},yn={updateAllMatrix(t,e,s){if(e&&t.__hasAutoLayout&&t.__layout.matrixChanged&&(s=!0),wn(t,e,s),t.isBranch){const{children:r}=t;for(let t=0,i=r.length;t<i;t++)xn(r[t],e,s);}},updateMatrix(t,e,s){const r=t.__layout;e?s&&(r.waitAutoLayout=!0,t.__hasAutoLayout&&(r.matrixChanged=!1)):r.waitAutoLayout&&(r.waitAutoLayout=!1),r.matrixChanged&&t.__updateLocalMatrix(),r.waitAutoLayout||t.__updateWorldMatrix();},updateBounds(t){const e=t.__layout;e.boundsChanged&&t.__updateLocalBounds(),e.waitAutoLayout||t.__updateWorldBounds();},updateAllWorldOpacity(t){if(t.__updateWorldOpacity(),t.isBranch){const{children:e}=t;for(let t=0,s=e.length;t<s;t++)bn(e[t]);}},updateAllChange(t){if(bn(t),t.__updateChange(),t.isBranch){const{children:e}=t;for(let t=0,s=e.length;t<s;t++)vn(e[t]);}},worldHittable(t){for(;t;){if(!t.__.hittable)return !1;t=t.parent;}return !0},moveWorld(t,e,s=0,r,i){const n="object"==typeof e?Object.assign({},e):{x:e,y:s};r?ln(t.localTransform,n,n,!0):t.parent&&hn(t.parent.worldTransform,n,n,!0),mn.moveLocal(t,n.x,n.y,i);},moveLocal(t,e,s=0,r){"object"==typeof e&&(s=e.y,e=e.x),e+=t.x,s+=t.y,r?t.animate({x:e,y:s},r):(t.x=e,t.y=s);},zoomOfWorld(t,e,s,r,i,n){mn.zoomOfLocal(t,Bn(t,e),s,r,i,n);},zoomOfLocal(t,e,s,r=s,i,n){const o=t.__localMatrix;if("number"!=typeof r&&(r&&(n=r),r=s),an(gn,o),dn(gn,e,s,r),t.origin||t.around)mn.setTransform(t,gn,i,n);else {const e=t.x+gn.e-o.e,a=t.y+gn.f-o.f;n&&!i?t.animate({x:e,y:a,scaleX:t.scaleX*s,scaleY:t.scaleY*r},n):(t.x=e,t.y=a,t.scaleResize(s,r,!0!==i));}},rotateOfWorld(t,e,s,r){mn.rotateOfLocal(t,Bn(t,e),s,r);},rotateOfLocal(t,e,s,r){const i=t.__localMatrix;an(gn,i),un(gn,e,s),t.origin||t.around?mn.setTransform(t,gn,!1,r):t.set({x:t.x+gn.e-i.e,y:t.y+gn.f-i.f,rotation:a.formatRotation(t.rotation+s)},r);},skewOfWorld(t,e,s,r,i,n){mn.skewOfLocal(t,Bn(t,e),s,r,i,n);},skewOfLocal(t,e,s,r=0,i,n){an(gn,t.__localMatrix),cn(gn,e,s,r),mn.setTransform(t,gn,i,n);},transformWorld(t,e,s,r){an(gn,t.worldTransform),_n(gn,e),t.parent&&pn(gn,t.parent.worldTransform),mn.setTransform(t,gn,s,r);},transform(t,e,s,r){an(gn,t.localTransform),_n(gn,e),mn.setTransform(t,gn,s,r);},setTransform(t,e,s,r){const i=t.__,n=i.origin&&mn.getInnerOrigin(t,i.origin),o=fn(e,n,i.around&&mn.getInnerOrigin(t,i.around));if(s){const e=o.scaleX/t.scaleX,s=o.scaleY/t.scaleY;if(delete o.scaleX,delete o.scaleY,n){it$2.scale(t.boxBounds,Math.abs(e),Math.abs(s));const r=mn.getInnerOrigin(t,i.origin);I$1.move(o,n.x-r.x,n.y-r.y);}t.set(o),t.scaleResize(e,s,!1);}else t.set(o,r);},getFlipTransform(t,e){const s={a:1,b:0,c:0,d:1,e:0,f:0},r="x"===e?1:-1;return dn(s,mn.getLocalOrigin(t,"center"),-1*r,1*r),s},getLocalOrigin:(t,e)=>I$1.tempToOuterOf(mn.getInnerOrigin(t,e),t.localTransform),getInnerOrigin(t,e){const s={};return pt$3.toPoint(e,t.boxBounds,s),s},getRelativeWorld:(t,e,s)=>(an(gn,t.worldTransform),pn(gn,e.worldTransform),s?gn:Object.assign({},gn)),drop(t,e,s,r){t.setTransform(mn.getRelativeWorld(t,e,!0),r),e.add(t,s);},hasParent(t,e){if(!e)return !1;for(;t;){if(e===t)return !0;t=t.parent;}}},mn=yn,{updateAllMatrix:xn,updateMatrix:wn,updateAllWorldOpacity:bn,updateAllChange:vn}=mn;function Bn(t,e){return t.__layout.update(),t.parent?I$1.tempToInnerOf(e,t.parent.__world):e}const kn={worldBounds:t=>t.__world,localBoxBounds:t=>t.__.eraser||0===t.__.visible?null:t.__local||t.__layout,localStrokeBounds:t=>t.__.eraser||0===t.__.visible?null:t.__layout.localStrokeBounds,localRenderBounds:t=>t.__.eraser||0===t.__.visible?null:t.__layout.localRenderBounds,maskLocalBoxBounds:t=>t.__.mask?t.__localBoxBounds:null,maskLocalStrokeBounds:t=>t.__.mask?t.__layout.localStrokeBounds:null,maskLocalRenderBounds:t=>t.__.mask?t.__layout.localRenderBounds:null,excludeRenderBounds:(t,e)=>!(!e.bounds||e.bounds.hit(t.__world,e.matrix))||!(!e.hideBounds||!e.hideBounds.includes(t.__world,e.matrix))},{updateBounds:Cn}=yn,On={sort:(t,e)=>t.__.zIndex===e.__.zIndex?t.__tempNumber-e.__tempNumber:t.__.zIndex-e.__.zIndex,pushAllChildBranch(t,e){if(t.__tempNumber=1,t.__.__childBranchNumber){const{children:s}=t;for(let r=0,i=s.length;r<i;r++)(t=s[r]).isBranch&&(t.__tempNumber=1,e.add(t),Tn(t,e));}},pushAllParent(t,e){const{keys:s}=e;if(s)for(;t.parent&&void 0===s[t.parent.innerId];)e.add(t.parent),t=t.parent;else for(;t.parent;)e.add(t.parent),t=t.parent;},pushAllBranchStack(t,e){let s=e.length;const{children:r}=t;for(let t=0,s=r.length;t<s;t++)r[t].isBranch&&e.push(r[t]);for(let t=s,r=e.length;t<r;t++)Pn(e[t],e);},updateBounds(t,e){const s=[t];Pn(t,s),Rn(s,e);},updateBoundsByBranchStack(t,e){let s,r;for(let i=t.length-1;i>-1;i--){s=t[i],r=s.children;for(let t=0,e=r.length;t<e;t++)Cn(r[t]);e&&e===s||Cn(s);}}},{pushAllChildBranch:Tn,pushAllBranchStack:Pn,updateBoundsByBranchStack:Rn}=On,Sn={run(t){if(t&&t.length){const e=t.length;for(let s=0;s<e;s++)t[s]();t.length===e?t.length=0:t.splice(0,e);}}},{getRelativeWorld:Ln}=yn,{toOuterOf:In,getPoints:En,copy:Mn}=it$2,An="_localContentBounds",Wn="_worldContentBounds",Nn="_worldBoxBounds",Yn="_worldStrokeBounds";class Xn{get contentBounds(){return this._contentBounds||this.boxBounds}set contentBounds(t){this._contentBounds=t;}get strokeBounds(){return this._strokeBounds||this.boxBounds}get renderBounds(){return this._renderBounds||this.boxBounds}get localContentBounds(){return In(this.contentBounds,this.leaf.__localMatrix,this[An]||(this[An]={})),this[An]}get localStrokeBounds(){return this._localStrokeBounds||this}get localRenderBounds(){return this._localRenderBounds||this}get worldContentBounds(){return In(this.contentBounds,this.leaf.__world,this[Wn]||(this[Wn]={})),this[Wn]}get worldBoxBounds(){return In(this.boxBounds,this.leaf.__world,this[Nn]||(this[Nn]={})),this[Nn]}get worldStrokeBounds(){return In(this.strokeBounds,this.leaf.__world,this[Yn]||(this[Yn]={})),this[Yn]}get a(){return 1}get b(){return 0}get c(){return 0}get d(){return 1}get e(){return this.leaf.__.x}get f(){return this.leaf.__.y}get x(){return this.e+this.boxBounds.x}get y(){return this.f+this.boxBounds.y}get width(){return this.boxBounds.width}get height(){return this.boxBounds.height}constructor(t){this.leaf=t,this.boxBounds={x:0,y:0,width:0,height:0},this.leaf.__local&&(this._localRenderBounds=this._localStrokeBounds=this.leaf.__local),this.boxChange(),this.matrixChange();}createLocal(){const t=this.leaf.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0};this._localStrokeBounds||(this._localStrokeBounds=t),this._localRenderBounds||(this._localRenderBounds=t);}update(){const{leafer:e}=this.leaf;if(e)e.ready?e.watcher.changed&&e.layouter.layout():e.start();else {let e=this.leaf;for(;e.parent&&!e.parent.leafer;)e=e.parent;t.layout(e);}}getTransform(t="world"){this.update();const{leaf:e}=this;switch(t){case"world":return e.__world;case"local":return e.__localMatrix;case"inner":return b.defaultMatrix;case"page":t=e.zoomLayer;default:return Ln(e,t)}}getBounds(t,e="world"){switch(this.update(),e){case"world":return this.getWorldBounds(t);case"local":return this.getLocalBounds(t);case"inner":return this.getInnerBounds(t);case"page":e=this.leaf.zoomLayer;default:return new ht$2(this.getInnerBounds(t)).toOuterOf(this.getTransform(e))}}getInnerBounds(t="box"){switch(t){case"render":return this.renderBounds;case"content":if(this.contentBounds)return this.contentBounds;case"box":return this.boxBounds;case"stroke":return this.strokeBounds}}getLocalBounds(t="box"){switch(t){case"render":return this.localRenderBounds;case"stroke":return this.localStrokeBounds;case"content":if(this.contentBounds)return this.localContentBounds;case"box":return this.leaf.__localBoxBounds}}getWorldBounds(t="box"){switch(t){case"render":return this.leaf.__world;case"stroke":return this.worldStrokeBounds;case"content":if(this.contentBounds)return this.worldContentBounds;case"box":return this.worldBoxBounds}}getLayoutBounds(t,e="world",s){const{leaf:r}=this;let i,n,o,a=this.getInnerBounds(t);switch(e){case"world":i=r.getWorldPoint(a),n=r.__world;break;case"local":const{scaleX:t,scaleY:s,rotation:h,skewX:l,skewY:d}=r.__;o={scaleX:t,scaleY:s,rotation:h,skewX:l,skewY:d},i=r.getLocalPointByInner(a);break;case"inner":i=a,n=b.defaultMatrix;break;case"page":e=r.zoomLayer;default:i=r.getWorldPoint(a,e),n=Ln(r,e,!0);}if(o||(o=b.getLayout(n)),Mn(o,a),I$1.copy(o,i),s){const{scaleX:t,scaleY:e}=o,s=Math.abs(t),r=Math.abs(e);1===s&&1===r||(o.scaleX/=s,o.scaleY/=r,o.width*=s,o.height*=r);}return o}getLayoutPoints(t,e="world"){const{leaf:s}=this,r=En(this.getInnerBounds(t));let i;switch(e){case"world":i=null;break;case"local":i=s.parent;break;case"inner":break;case"page":e=s.zoomLayer;default:i=e;}return void 0!==i&&r.forEach((t=>s.innerToWorld(t,null,!1,i))),r}shrinkContent(){const{x:t,y:e,width:s,height:r}=this.boxBounds;this._contentBounds={x:t,y:e,width:s,height:r};}spreadStroke(){const{x:t,y:e,width:s,height:r}=this.strokeBounds;this._strokeBounds={x:t,y:e,width:s,height:r},this._localStrokeBounds={x:t,y:e,width:s,height:r},this.renderSpread||this.spreadRenderCancel();}spreadRender(){const{x:t,y:e,width:s,height:r}=this.renderBounds;this._renderBounds={x:t,y:e,width:s,height:r},this._localRenderBounds={x:t,y:e,width:s,height:r};}shrinkContentCancel(){this._contentBounds=void 0;}spreadStrokeCancel(){const t=this.renderBounds===this.strokeBounds;this._strokeBounds=this.boxBounds,this._localStrokeBounds=this.leaf.__localBoxBounds,t&&this.spreadRenderCancel();}spreadRenderCancel(){this._renderBounds=this._strokeBounds,this._localRenderBounds=this._localStrokeBounds;}boxChange(){this.boxChanged=!0,this.localBoxChanged||this.localBoxChange(),this.hitCanvasChanged=!0;}localBoxChange(){this.localBoxChanged=!0,this.boundsChanged=!0;}strokeChange(){this.strokeChanged=!0,this.strokeSpread||(this.strokeSpread=1),this.boundsChanged=!0,this.hitCanvasChanged=!0;}renderChange(){this.renderChanged=!0,this.renderSpread||(this.renderSpread=1),this.boundsChanged=!0;}scaleChange(){this.scaleChanged=!0,this._scaleOrRotationChange();}rotationChange(){this.rotationChanged=!0,this.affectRotation=!0,this._scaleOrRotationChange();}_scaleOrRotationChange(){this.affectScaleOrRotation=!0,this.matrixChange(),this.leaf.__local||this.createLocal();}matrixChange(){this.matrixChanged=!0,this.localBoxChanged||this.localBoxChange();}surfaceChange(){this.surfaceChanged=!0;}opacityChange(){this.opacityChanged=!0,this.surfaceChanged||this.surfaceChange();}childrenSortChange(){this.childrenSortChanged||(this.childrenSortChanged=!0,this.leaf.forceUpdate("surface"));}destroy(){}}class Dn{constructor(t,e){this.bubbles=!1,this.type=t,e&&(this.target=e);}stopDefault(){this.isStopDefault=!0,this.origin&&t.event.stopDefault(this.origin);}stopNow(){this.isStopNow=!0,this.isStop=!0,this.origin&&t.event.stopNow(this.origin);}stop(){this.isStop=!0,this.origin&&t.event.stop(this.origin);}}class zn extends Dn{constructor(t,e,s){super(t,e),this.parent=s,this.child=e;}}zn.ADD="child.add",zn.REMOVE="child.remove",zn.CREATED="created",zn.MOUNTED="mounted",zn.UNMOUNTED="unmounted",zn.DESTROY="destroy";class Fn extends Dn{constructor(t,e,s,r,i){super(t,e),this.attrName=s,this.oldValue=r,this.newValue=i;}}Fn.CHANGE="property.change",Fn.LEAFER_CHANGE="property.leafer_change";class jn extends Dn{constructor(t,e){super(t),Object.assign(this,e);}}jn.LOAD="image.load",jn.LOADED="image.loaded",jn.ERROR="image.error";class Un extends Dn{get bigger(){if(!this.old)return !0;const{width:t,height:e}=this.old;return this.width>=t&&this.height>=e}get smaller(){return !this.bigger}get samePixelRatio(){return !this.old||this.pixelRatio===this.old.pixelRatio}constructor(t,e){"object"==typeof t?(super(Un.RESIZE),Object.assign(this,t)):super(t),this.old=e;}}Un.RESIZE="resize";class Gn extends Dn{constructor(t,e){super(t),this.data=e;}}Gn.REQUEST="watch.request",Gn.DATA="watch.data";class Hn extends Dn{constructor(t,e,s){super(t),e&&(this.data=e,this.times=s);}}Hn.REQUEST="layout.request",Hn.START="layout.start",Hn.BEFORE="layout.before",Hn.LAYOUT="layout",Hn.AFTER="layout.after",Hn.AGAIN="layout.again",Hn.END="layout.end";class qn extends Dn{constructor(t,e,s,r){super(t),e&&(this.times=e),s&&(this.renderBounds=s,this.renderOptions=r);}}qn.REQUEST="render.request",qn.CHILD_START="render.child_start",qn.START="render.start",qn.BEFORE="render.before",qn.RENDER="render",qn.AFTER="render.after",qn.AGAIN="render.again",qn.END="render.end",qn.NEXT="render.next";class Vn extends Dn{}Vn.START="leafer.start",Vn.BEFORE_READY="leafer.before_ready",Vn.READY="leafer.ready",Vn.AFTER_READY="leafer.after_ready",Vn.VIEW_READY="leafer.view_ready",Vn.VIEW_COMPLETED="leafer.view_completed",Vn.STOP="leafer.stop",Vn.RESTART="leafer.restart",Vn.END="leafer.end";const Qn={};class Zn{set event(t){this.on(t);}on(t,e,s){if(!e){let e,s=t;for(let t in s)e=s[t],e instanceof Array?this.on(t,e[0],e[1]):this.on(t,e);return}let r,i,n;s&&("once"===s?i=!0:"boolean"==typeof s?r=s:(r=s.capture,i=s.once));const o=Jn(this,r,!0),a="string"==typeof t?t.split(" "):t,h=i?{listener:e,once:i}:{listener:e};a.forEach((t=>{t&&(n=o[t],n?-1===n.findIndex((t=>t.listener===e))&&n.push(h):o[t]=[h]);}));}off(t,e,s){if(t){const r="string"==typeof t?t.split(" "):t;if(e){let t,i,n;s&&(t="boolean"==typeof s?s:"once"!==s&&s.capture);const o=Jn(this,t);r.forEach((t=>{t&&(i=o[t],i&&(n=i.findIndex((t=>t.listener===e)),n>-1&&i.splice(n,1),i.length||delete o[t]));}));}else {const{__bubbleMap:t,__captureMap:e}=this;r.forEach((s=>{t&&delete t[s],e&&delete e[s];}));}}else this.__bubbleMap=this.__captureMap=void 0;}on_(t,e,s,r){return s&&(e=e.bind(s)),this.on(t,e,r),{type:t,current:this,listener:e,options:r}}off_(t){if(!t)return;const e=t instanceof Array?t:[t];e.forEach((t=>t.current.off(t.type,t.listener,t.options))),e.length=0;}once(t,e,s){this.on(t,e,{once:!0,capture:s});}emit(t,e,s){!e&&Lt$2.has(t)&&(e=Lt$2.get(t,{type:t,target:this,current:this}));const r=Jn(this,s)[t];if(r){let i;for(let n=0,o=r.length;n<o&&!((i=r[n])&&(i.listener(e),i.once&&(this.off(t,i.listener,s),n--,o--),e&&e.isStopNow));n++);}this.syncEventer&&this.syncEventer.emitEvent(e,s);}emitEvent(t,e){t.current=this,this.emit(t.type,t,e);}hasEvent(t,e){if(this.syncEventer&&this.syncEventer.hasEvent(t,e))return !0;const{__bubbleMap:s,__captureMap:r}=this,i=s&&s[t],n=r&&r[t];return !!(void 0===e?i||n:e?n:i)}destroy(){this.__captureMap=this.__bubbleMap=this.syncEventer=null;}}function Jn(t,e,s){if(e){const{__captureMap:e}=t;return e||(s?t.__captureMap={}:Qn)}{const{__bubbleMap:e}=t;return e||(s?t.__bubbleMap={}:Qn)}}const{on:$n,on_:Kn,off:to,off_:eo,once:so,emit:ro,emitEvent:io,hasEvent:no,destroy:oo}=Zn.prototype,ao={on:$n,on_:Kn,off:to,off_:eo,once:so,emit:ro,emitEvent:io,hasEvent:no,destroyEventer:oo},{isFinite:ho}=Number,lo=xt$2.get("setAttr"),uo={__setAttr(t,e,s){if(this.leaferIsCreated){const r=this.__.__getInput(t);if(s&&!ho(e)&&void 0!==e&&(lo.warn(this.innerName,t,e),e=void 0),"object"==typeof e||r!==e){this.__realSetAttr(t,e);const{CHANGE:s}=Fn,i=new Fn(s,this,t,r,e);return this.isLeafer?this.emitEvent(new Fn(Fn.LEAFER_CHANGE,this,t,r,e)):this.hasEvent(s)&&this.emitEvent(i),this.leafer.emitEvent(i),!0}return !1}return this.__realSetAttr(t,e),!0},__realSetAttr(t,e){const s=this.__;s[t]=e,this.__proxyData&&this.setProxyAttr(t,e),s.normalStyle&&(this.lockNormalStyle||void 0===s.normalStyle[t]||(s.normalStyle[t]=e));},__getAttr(t){return this.__proxyData?this.getProxyAttr(t):this.__.__get(t)}},{setLayout:co,multiplyParent:_o,translateInner:po,defaultWorld:fo}=b,{toPoint:go,tempPoint:yo}=pt$3,mo={__updateWorldMatrix(){_o(this.__local||this.__layout,this.parent?this.parent.__world:fo,this.__world,!!this.__layout.affectScaleOrRotation,this.__,this.parent&&this.parent.__);},__updateLocalMatrix(){if(this.__local){const t=this.__layout,e=this.__local,s=this.__;t.affectScaleOrRotation&&(t.scaleChanged||t.rotationChanged)&&(co(e,s,null,null,t.affectRotation),t.scaleChanged=t.rotationChanged=!1),e.e=s.x+s.offsetX,e.f=s.y+s.offsetY,(s.around||s.origin)&&(go(s.around||s.origin,t.boxBounds,yo),po(e,-yo.x,-yo.y,!s.around));}this.__layout.matrixChanged=!1;}},{updateMatrix:xo,updateAllMatrix:wo}=yn,{updateBounds:bo}=On,{toOuterOf:vo,copyAndSpread:Bo,copy:ko}=it$2,{toBounds:Co}=Jr,Oo={__updateWorldBounds(){vo(this.__layout.renderBounds,this.__world,this.__world),this.__layout.resized&&(this.__onUpdateSize(),this.__layout.resized=!1);},__updateLocalBounds(){const t=this.__layout;t.boxChanged&&(this.__.__pathInputed||this.__updatePath(),this.__updateRenderPath(),this.__updateBoxBounds(),t.resized=!0),t.localBoxChanged&&(this.__local&&this.__updateLocalBoxBounds(),t.localBoxChanged=!1,t.strokeSpread&&(t.strokeChanged=!0),t.renderSpread&&(t.renderChanged=!0),this.parent&&this.parent.__layout.boxChange()),t.boxChanged=!1,t.strokeChanged&&(t.strokeSpread=this.__updateStrokeSpread(),t.strokeSpread?(t.strokeBounds===t.boxBounds&&t.spreadStroke(),this.__updateStrokeBounds(),this.__updateLocalStrokeBounds()):t.spreadStrokeCancel(),t.strokeChanged=!1,(t.renderSpread||t.strokeSpread!==t.strokeBoxSpread)&&(t.renderChanged=!0),this.parent&&this.parent.__layout.strokeChange(),t.resized=!0),t.renderChanged&&(t.renderSpread=this.__updateRenderSpread(),t.renderSpread?(t.renderBounds!==t.boxBounds&&t.renderBounds!==t.strokeBounds||t.spreadRender(),this.__updateRenderBounds(),this.__updateLocalRenderBounds()):t.spreadRenderCancel(),t.renderChanged=!1,this.parent&&this.parent.__layout.renderChange()),t.boundsChanged=!1;},__updateLocalBoxBounds(){this.__hasMotionPath&&this.__updateMotionPath(),this.__hasAutoLayout&&this.__updateAutoLayout(),vo(this.__layout.boxBounds,this.__local,this.__local);},__updateLocalStrokeBounds(){vo(this.__layout.strokeBounds,this.__localMatrix,this.__layout.localStrokeBounds);},__updateLocalRenderBounds(){vo(this.__layout.renderBounds,this.__localMatrix,this.__layout.localRenderBounds);},__updateBoxBounds(){const t=this.__layout.boxBounds,e=this.__;e.__pathInputed?Co(e.path,t):(t.x=0,t.y=0,t.width=e.width,t.height=e.height);},__updateAutoLayout(){this.__layout.matrixChanged=!0,this.isBranch?(this.__extraUpdate(),this.__.flow?(this.__layout.boxChanged&&this.__updateFlowLayout(),wo(this),bo(this,this),this.__.__autoSide&&this.__updateBoxBounds(!0)):(wo(this),bo(this,this))):xo(this);},__updateNaturalSize(){const{__:t,__layout:e}=this;t.__naturalWidth=e.boxBounds.width,t.__naturalHeight=e.boxBounds.height;},__updateStrokeBounds(){const t=this.__layout;Bo(t.strokeBounds,t.boxBounds,t.strokeBoxSpread);},__updateRenderBounds(){const t=this.__layout;t.renderSpread>0?Bo(t.renderBounds,t.boxBounds,t.renderSpread):ko(t.renderBounds,t.strokeBounds);}},To={__render(t,e){if(this.__worldOpacity)if(t.setWorld(this.__nowWorld=this.__getNowWorld(e)),t.opacity=this.__.opacity,this.__.__single){if("path"===this.__.eraser)return this.__renderEraser(t,e);const s=t.getSameCanvas(!0,!0);this.__draw(s,e),this.__worldFlipped?t.copyWorldByReset(s,this.__nowWorld,null,this.__.__blendMode,!0):t.copyWorldToInner(s,this.__nowWorld,this.__layout.renderBounds,this.__.__blendMode),s.recycle(this.__nowWorld);}else this.__draw(t,e);},__clip(t,e){this.__worldOpacity&&(t.setWorld(this.__nowWorld=this.__getNowWorld(e)),this.__drawRenderPath(t),this.windingRule?t.clip(this.windingRule):t.clip());},__updateWorldOpacity(){this.__worldOpacity=this.__.visible?this.parent?this.parent.__worldOpacity*this.__.opacity:this.__.opacity:0,this.__layout.opacityChanged&&(this.__layout.opacityChanged=!1);}},{excludeRenderBounds:Po}=kn,Ro={__updateChange(){const{__layout:t}=this;t.childrenSortChanged&&(this.__updateSortChildren(),t.childrenSortChanged=!1),this.__.__checkSingle();},__render(t,e){if(this.__nowWorld=this.__getNowWorld(e),this.__worldOpacity)if(this.__.__single){if("path"===this.__.eraser)return this.__renderEraser(t,e);const s=t.getSameCanvas(!1,!0);this.__renderBranch(s,e);const r=this.__nowWorld;t.opacity=this.__.opacity,t.copyWorldByReset(s,r,r,this.__.__blendMode,!0),s.recycle(r);}else this.__renderBranch(t,e);},__renderBranch(t,e){if(this.__hasMask)this.__renderMask(t,e);else {const{children:s}=this;for(let r=0,i=s.length;r<i;r++)Po(s[r],e)||s[r].__render(t,e);}},__clip(t,e){if(this.__worldOpacity){const{children:s}=this;for(let r=0,i=s.length;r<i;r++)Po(s[r],e)||s[r].__clip(t,e);}}},{LEAF:So,create:Lo}=s,{toInnerPoint:Io,toOuterPoint:Eo,multiplyParent:Mo}=b,{toOuterOf:Ao}=it$2,{copy:Wo,move:No}=I$1,{moveLocal:Yo,zoomOfLocal:Xo,rotateOfLocal:Do,skewOfLocal:zo,moveWorld:Fo,zoomOfWorld:jo,rotateOfWorld:Uo,skewOfWorld:Go,transform:Ho,transformWorld:qo,setTransform:Vo,getFlipTransform:Qo,getLocalOrigin:Zo,getRelativeWorld:Jo,drop:$o}=yn;let Ko=class{get tag(){return this.__tag}set tag(t){}get __tag(){return "Leaf"}get innerName(){return this.__.name||this.tag+this.innerId}get __DataProcessor(){return Wt$2}get __LayoutProcessor(){return Xn}get leaferIsCreated(){return this.leafer&&this.leafer.created}get leaferIsReady(){return this.leafer&&this.leafer.ready}get isLeafer(){return !1}get isBranch(){return !1}get isBranchLeaf(){return !1}get __localMatrix(){return this.__local||this.__layout}get __localBoxBounds(){return this.__local||this.__layout}get worldTransform(){return this.__layout.getTransform("world")}get localTransform(){return this.__layout.getTransform("local")}get boxBounds(){return this.getBounds("box","inner")}get renderBounds(){return this.getBounds("render","inner")}get worldBoxBounds(){return this.getBounds("box")}get worldStrokeBounds(){return this.getBounds("stroke")}get worldRenderBounds(){return this.getBounds("render")}get worldOpacity(){return this.__layout.update(),this.__worldOpacity}get __worldFlipped(){return this.__world.scaleX<0||this.__world.scaleY<0}get __onlyHitMask(){return this.__hasMask&&!this.__.hitChildren}get __ignoreHitWorld(){return (this.__hasMask||this.__hasEraser)&&this.__.hitChildren}get __inLazyBounds(){return this.leaferIsCreated&&this.leafer.lazyBounds.hit(this.__world)}get pathInputed(){return this.__.__pathInputed}set event(t){this.on(t);}constructor(t){this.innerId=Lo(So),this.reset(t),this.__bubbleMap&&this.__emitLifeEvent(zn.CREATED);}reset(t){this.leafer&&this.leafer.forceRender(this.__world),this.__world={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0,scaleX:1,scaleY:1},null!==t&&(this.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0}),this.__worldOpacity=1,this.__=new this.__DataProcessor(this),this.__layout=new this.__LayoutProcessor(this),this.__level&&this.resetCustom(),t&&(t.__&&(t=t.toJSON()),t.children?this.set(t):Object.assign(this,t));}resetCustom(){this.__hasMask=this.__hasEraser=null,this.forceUpdate();}waitParent(t,e){e&&(t=t.bind(e)),this.parent?t():this.on(zn.ADD,t,"once");}waitLeafer(t,e){e&&(t=t.bind(e)),this.leafer?t():this.on(zn.MOUNTED,t,"once");}nextRender(t,e,s){this.leafer?this.leafer.nextRender(t,e,s):this.waitLeafer((()=>this.leafer.nextRender(t,e,s)));}removeNextRender(t){this.nextRender(t,null,"off");}__bindLeafer(t){if(this.isLeafer&&null!==t&&(t=this),this.leafer&&!t&&this.leafer.leafs--,this.leafer=t,t?(t.leafs++,this.__level=this.parent?this.parent.__level+1:1,this.animation&&this.__runAnimation("in"),this.__bubbleMap&&this.__emitLifeEvent(zn.MOUNTED)):this.__emitLifeEvent(zn.UNMOUNTED),this.isBranch){const{children:e}=this;for(let s=0,r=e.length;s<r;s++)e[s].__bindLeafer(t);}}set(t,e){}get(t){}setAttr(t,e){this[t]=e;}getAttr(t){return this[t]}getComputedAttr(t){return this.__[t]}toJSON(t){return t&&this.__layout.update(),this.__.__getInputData(null,t)}toString(t){return JSON.stringify(this.toJSON(t))}toSVG(){}__SVG(t){}toHTML(){}__setAttr(t,e){return !0}__getAttr(t){}setProxyAttr(t,e){}getProxyAttr(t){}find(t,e){}findTag(t){}findOne(t,e){}findId(t){}focus(t){}updateState(){}updateLayout(){this.__layout.update();}forceUpdate(t){void 0===t?t="width":"surface"===t&&(t="blendMode");const e=this.__.__getInput(t);this.__[t]=void 0===e?null:void 0,this[t]=e;}forceRender(t,e){this.forceUpdate("surface");}__extraUpdate(){this.leaferIsReady&&this.leafer.layouter.addExtra(this);}__updateWorldMatrix(){}__updateLocalMatrix(){}__updateWorldBounds(){}__updateLocalBounds(){}__updateLocalBoxBounds(){}__updateLocalStrokeBounds(){}__updateLocalRenderBounds(){}__updateBoxBounds(){}__updateContentBounds(){}__updateStrokeBounds(){}__updateRenderBounds(){}__updateAutoLayout(){}__updateFlowLayout(){}__updateNaturalSize(){}__updateStrokeSpread(){return 0}__updateRenderSpread(){return 0}__onUpdateSize(){}__updateEraser(t){this.__hasEraser=!!t||this.children.some((t=>t.__.eraser));}__renderEraser(t,e){t.save(),this.__clip(t,e);const{renderBounds:s}=this.__layout;t.clearRect(s.x,s.y,s.width,s.height),t.restore();}__updateMask(t){this.__hasMask=this.children.some((t=>t.__.mask&&t.__.visible&&t.__.opacity));}__renderMask(t,e){}__getNowWorld(t){if(t.matrix){this.__cameraWorld||(this.__cameraWorld={});const e=this.__cameraWorld;return Mo(this.__world,t.matrix,e,void 0,this.__world),Ao(this.__layout.renderBounds,e,e),e}return this.__world}getTransform(t){return this.__layout.getTransform(t||"local")}getBounds(t,e){return this.__layout.getBounds(t,e)}getLayoutBounds(t,e,s){return this.__layout.getLayoutBounds(t,e,s)}getLayoutPoints(t,e){return this.__layout.getLayoutPoints(t,e)}getWorldBounds(t,e,s){const r=e?Jo(this,e):this.worldTransform,i=s?t:{};return Ao(t,r,i),i}worldToLocal(t,e,s,r){this.parent?this.parent.worldToInner(t,e,s,r):e&&Wo(e,t);}localToWorld(t,e,s,r){this.parent?this.parent.innerToWorld(t,e,s,r):e&&Wo(e,t);}worldToInner(t,e,s,r){r&&(r.innerToWorld(t,e,s),t=e||t),Io(this.worldTransform,t,e,s);}innerToWorld(t,e,s,r){Eo(this.worldTransform,t,e,s),r&&r.worldToInner(e||t,null,s);}getBoxPoint(t,e,s,r){return this.getBoxPointByInner(this.getInnerPoint(t,e,s,r),null,null,!0)}getBoxPointByInner(t,e,s,r){const i=r?t:Object.assign({},t),{x:n,y:o}=this.boxBounds;return No(i,-n,-o),i}getInnerPoint(t,e,s,r){const i=r?t:{};return this.worldToInner(t,i,s,e),i}getInnerPointByBox(t,e,s,r){const i=r?t:Object.assign({},t),{x:n,y:o}=this.boxBounds;return No(i,n,o),i}getInnerPointByLocal(t,e,s,r){return this.getInnerPoint(t,this.parent,s,r)}getLocalPoint(t,e,s,r){const i=r?t:{};return this.worldToLocal(t,i,s,e),i}getLocalPointByInner(t,e,s,r){return this.getWorldPoint(t,this.parent,s,r)}getPagePoint(t,e,s,r){return (this.leafer?this.leafer.zoomLayer:this).getInnerPoint(t,e,s,r)}getWorldPoint(t,e,s,r){const i=r?t:{};return this.innerToWorld(t,i,s,e),i}getWorldPointByBox(t,e,s,r){return this.getWorldPoint(this.getInnerPointByBox(t,null,null,r),e,s,!0)}getWorldPointByLocal(t,e,s,r){const i=r?t:{};return this.localToWorld(t,i,s,e),i}getWorldPointByPage(t,e,s,r){return (this.leafer?this.leafer.zoomLayer:this).getWorldPoint(t,e,s,r)}setTransform(t,e,s){Vo(this,t,e,s);}transform(t,e,s){Ho(this,t,e,s);}move(t,e,s){Yo(this,t,e,s);}moveInner(t,e,s){Fo(this,t,e,!0,s);}scaleOf(t,e,s,r,i){Xo(this,Zo(this,t),e,s,r,i);}rotateOf(t,e,s){Do(this,Zo(this,t),e,s);}skewOf(t,e,s,r,i){zo(this,Zo(this,t),e,s,r,i);}transformWorld(t,e,s){qo(this,t,e,s);}moveWorld(t,e,s){Fo(this,t,e,!1,s);}scaleOfWorld(t,e,s,r,i){jo(this,t,e,s,r,i);}rotateOfWorld(t,e){Uo(this,t,e);}skewOfWorld(t,e,s,r,i){Go(this,t,e,s,r,i);}flip(t,e){Ho(this,Qo(this,t),!1,e);}scaleResize(t,e=t,s){this.scaleX*=t,this.scaleY*=e;}__scaleResize(t,e){}resizeWidth(t){}resizeHeight(t){}__hitWorld(t){return !0}__hit(t){return !0}__hitFill(t){return !0}__hitStroke(t,e){return !0}__hitPixel(t){return !0}__drawHitPath(t){}__updateHitCanvas(){}__render(t,e){}__drawFast(t,e){}__draw(t,e){}__clip(t,e){}__renderShape(t,e,s,r){}__updateWorldOpacity(){}__updateChange(){}__drawPath(t){}__drawRenderPath(t){}__updatePath(){}__updateRenderPath(){}getMotionPathData(){return Ot$3.need("path")}getMotionPoint(t){return Ot$3.need("path")}getMotionTotal(){return 0}__updateMotionPath(){}__runAnimation(t,e){}__updateSortChildren(){}add(t,e){}remove(t,e){this.parent&&this.parent.remove(this,e);}dropTo(t,e,s){$o(this,t,e,s);}on(t,e,s){}off(t,e,s){}on_(t,e,s,r){}off_(t){}once(t,e,s){}emit(t,e,s){}emitEvent(t,e){}hasEvent(t,e){return !1}static changeAttr(t,e,s){s?this.addAttr(t,e,s):Zi(this.prototype,t,e);}static addAttr(t,e,s){s||(s=Ri$1),s(e)(this.prototype,t);}__emitLifeEvent(t){this.hasEvent(t)&&this.emitEvent(new zn(t,this,this.parent));}destroy(){this.destroyed||(this.parent&&this.remove(),this.children&&this.clear(),this.__emitLifeEvent(zn.DESTROY),this.__.destroy(),this.__layout.destroy(),this.destroyEventer(),this.destroyed=!0);}};Ko=Dt$3([rn(uo),rn(mo),rn(Oo),rn(ao),rn(To)],Ko);const{setListWithFn:ta}=it$2,{sort:ea}=On,{localBoxBounds:sa,localStrokeBounds:ra,localRenderBounds:ia,maskLocalBoxBounds:na,maskLocalStrokeBounds:oa,maskLocalRenderBounds:aa}=kn,ha=new xt$2("Branch");let la=class extends Ko{__updateStrokeSpread(){const{children:t}=this;for(let e=0,s=t.length;e<s;e++)if(t[e].__layout.strokeSpread)return 1;return 0}__updateRenderSpread(){const{children:t}=this;for(let e=0,s=t.length;e<s;e++)if(t[e].__layout.renderSpread)return 1;return 0}__updateBoxBounds(){ta(this.__layout.boxBounds,this.children,this.__hasMask?na:sa);}__updateStrokeBounds(){ta(this.__layout.strokeBounds,this.children,this.__hasMask?oa:ra);}__updateRenderBounds(){ta(this.__layout.renderBounds,this.children,this.__hasMask?aa:ia);}__updateSortChildren(){let t;const{children:e}=this;if(e.length>1){for(let s=0,r=e.length;s<r;s++)e[s].__tempNumber=s,e[s].__.zIndex&&(t=!0);e.sort(ea),this.__layout.affectChildrenSort=t;}}add(t,e){if(t===this||t.destroyed)return ha.warn("add self or destroyed");const s=void 0===e;if(!t.__){if(t instanceof Array)return t.forEach((t=>{this.add(t,e),s||e++;}));t=Pt$3.get(t.tag,t);}t.parent&&t.parent.remove(t),t.parent=this,s?this.children.push(t):this.children.splice(e,0,t),t.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||0)+1);const r=t.__layout;r.boxChanged||r.boxChange(),r.matrixChanged||r.matrixChange(),t.__bubbleMap&&t.__emitLifeEvent(zn.ADD),this.leafer&&(t.__bindLeafer(this.leafer),this.leafer.created&&this.__emitChildEvent(zn.ADD,t)),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange();}addMany(...t){this.add(t);}remove(t,e){t?t.__?t.animationOut?t.__runAnimation("out",(()=>this.__remove(t,e))):this.__remove(t,e):this.find(t).forEach((t=>this.remove(t,e))):void 0===t&&super.remove(null,e);}removeAll(t){const{children:e}=this;e.length&&(this.children=[],this.__preRemove(),this.__.__childBranchNumber=0,e.forEach((e=>{this.__realRemoveChild(e),t&&e.destroy();})));}clear(){this.removeAll(!0);}__remove(t,e){const s=this.children.indexOf(t);s>-1&&(this.children.splice(s,1),t.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||1)-1),this.__preRemove(),this.__realRemoveChild(t),e&&t.destroy());}__preRemove(){this.__hasMask&&this.__updateMask(),this.__hasEraser&&this.__updateEraser(),this.__layout.boxChange(),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange();}__realRemoveChild(t){t.__emitLifeEvent(zn.REMOVE),t.parent=null,this.leafer&&(t.__bindLeafer(null),this.leafer.created&&(this.__emitChildEvent(zn.REMOVE,t),this.leafer.hitCanvasManager&&this.leafer.hitCanvasManager.clear()));}__emitChildEvent(t,e){const s=new zn(t,e,this);this.hasEvent(t)&&!this.isLeafer&&this.emitEvent(s),this.leafer.emitEvent(s);}};la=Dt$3([rn(Ro)],la);class da{get length(){return this.list.length}constructor(t){this.reset(),t&&(t instanceof Array?this.addList(t):this.add(t));}has(t){return t&&void 0!==this.keys[t.innerId]}indexAt(t){return this.list[t]}indexOf(t){const e=this.keys[t.innerId];return void 0===e?-1:e}add(t){const{list:e,keys:s}=this;void 0===s[t.innerId]&&(e.push(t),s[t.innerId]=e.length-1);}addAt(t,e=0){const{keys:s}=this;if(void 0===s[t.innerId]){const{list:r}=this;for(let t=e,i=r.length;t<i;t++)s[r[t].innerId]++;0===e?r.unshift(t):(e>r.length&&(e=r.length),r.splice(e,0,t)),s[t.innerId]=e;}}addList(t){for(let e=0;e<t.length;e++)this.add(t[e]);}remove(t){const{list:e}=this;let s;for(let r=0,i=e.length;r<i;r++)void 0!==s?this.keys[e[r].innerId]=r-1:e[r].innerId===t.innerId&&(s=r,delete this.keys[t.innerId]);void 0!==s&&e.splice(s,1);}sort(t){const{list:e}=this;t?e.sort(((t,e)=>e.__level-t.__level)):e.sort(((t,e)=>t.__level-e.__level));}forEach(t){this.list.forEach(t);}clone(){const t=new da;return t.list=[...this.list],t.keys=Object.assign({},this.keys),t}update(){this.keys={};const{list:t,keys:e}=this;for(let s=0,r=t.length;s<r;s++)e[t[s].innerId]=s;}reset(){this.list=[],this.keys={};}destroy(){this.reset();}}class ua{get length(){return this._length}constructor(t){this._length=0,this.reset(),t&&(t instanceof Array?this.addList(t):this.add(t));}has(t){return void 0!==this.keys[t.innerId]}without(t){return void 0===this.keys[t.innerId]}sort(t){const{levels:e}=this;t?e.sort(((t,e)=>e-t)):e.sort(((t,e)=>t-e));}addList(t){t.forEach((t=>{this.add(t);}));}add(t){const{keys:e,levelMap:s}=this;e[t.innerId]||(e[t.innerId]=1,s[t.__level]?s[t.__level].push(t):(s[t.__level]=[t],this.levels.push(t.__level)),this._length++);}forEach(t){let e;this.levels.forEach((s=>{e=this.levelMap[s];for(let s=0,r=e.length;s<r;s++)t(e[s]);}));}reset(){this.levelMap={},this.keys={},this.levels=[],this._length=0;}destroy(){this.levelMap=null;}}

function dt$2(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}function pt$2(i){return bi$1(i,(t=>vi$1({set(e){this.__setAttr(t,e),e&&(this.__.__useEffect=!0),this.__layout.renderChanged||this.__layout.renderChange();}})))}function lt$2(i){return bi$1(i,(t=>vi$1({set(e){this.__setAttr(t,e),this.__layout.boxChanged||this.__layout.boxChange(),this.__updateSize();}})))}function ut$2(){return (t,e)=>{const s="_"+e;xi$1(t,e,{set(t){this.isLeafer&&(this[s]=t);},get(){return this.isApp?this.tree.zoomLayer:this.isLeafer?this[s]||this:this.leafer&&this.leafer.zoomLayer}});}}"function"==typeof SuppressedError&&SuppressedError;const ct$2={},yt$2={},gt$2={number:(t,e)=>"object"==typeof t?"percent"===t.type?t.value*e:t.value:t},vt$2={},ft$2={},wt$2={},xt$1={},mt$2={},Rt$1={},St$1={setStyleName:(t,e,i)=>Ot$3.need("state"),set:(t,e)=>Ot$3.need("state")},{parse:Bt$1,objectToCanvasData:bt$1}=ms,Ct$1={},At$1=xt$2.get("UIData");let Pt$2 = class Pt extends Wt$2{get scale(){const{scaleX:t,scaleY:e}=this;return t!==e?{x:t,y:e}:t}get __strokeWidth(){const{strokeWidth:t,strokeWidthFixed:e}=this;if(e){const e=this.__leaf;let{scaleX:i}=e.__nowWorld||e.__world;return i<0&&(i=-i),i>1?t/i:t}return t}get __hasStroke(){return this.stroke&&this.strokeWidth}get __hasMultiPaint(){const t=this;return !!(t.__isFills&&t.fill.length>1||t.__isStrokes&&t.stroke.length>1||t.__useEffect)||t.fill&&this.__hasStroke}get __clipAfterFill(){const t=this;return t.cornerRadius||t.innerShadow||t.__pathInputed}get __hasSurface(){return this.fill||this.stroke}get __autoWidth(){return !this._width}get __autoHeight(){return !this._height}get __autoSide(){return !this._width||!this._height}get __autoSize(){return !this._width&&!this._height}setVisible(t){this._visible=t;const{leafer:e}=this.__leaf;e&&(e.watcher.hasVisible=!0);}setWidth(t){t<0?(this._width=-t,this.__leaf.scaleX*=-1,At$1.warn("width < 0, instead -scaleX ",this)):this._width=t;}setHeight(t){t<0?(this._height=-t,this.__leaf.scaleY*=-1,At$1.warn("height < 0, instead -scaleY",this)):this._height=t;}setFill(t){this.__naturalWidth&&this.__removeNaturalSize(),"string"!=typeof t&&t?"object"==typeof t&&(this.__setInput("fill",t),this.__leaf.__layout.boxChanged||this.__leaf.__layout.boxChange(),this.__isFills=!0,this._fill||(this._fill=Ct$1)):(this.__isFills&&(this.__removeInput("fill"),wt$2.recycleImage("fill",this),this.__isFills=!1,this.__pixelFill&&(this.__pixelFill=!1)),this._fill=t);}setStroke(t){"string"!=typeof t&&t?"object"==typeof t&&(this.__setInput("stroke",t),this.__leaf.__layout.boxChanged||this.__leaf.__layout.boxChange(),this.__isStrokes=!0,this._stroke||(this._stroke=Ct$1)):(this.__isStrokes&&(this.__removeInput("stroke"),wt$2.recycleImage("stroke",this),this.__isStrokes=!1,this.__pixelStroke&&(this.__pixelStroke=!1)),this._stroke=t);}setPath(t){const e="string"==typeof t;e||t&&"object"==typeof t[0]?(this.__setInput("path",t),this._path=e?Bt$1(t):bt$1(t)):(this.__input&&this.__removeInput("path"),this._path=t);}setShadow(t){this.__setInput("shadow",t),t instanceof Array?(t.some((t=>!1===t.visible))&&(t=t.filter((t=>!1!==t.visible))),this._shadow=t.length?t:null):this._shadow=t&&!1!==t.visible?[t]:null;}setInnerShadow(t){this.__setInput("innerShadow",t),t instanceof Array?(t.some((t=>!1===t.visible))&&(t=t.filter((t=>!1!==t.visible))),this._innerShadow=t.length?t:null):this._innerShadow=t&&!1!==t.visible?[t]:null;}__computePaint(){const{fill:t,stroke:e}=this.__input;t&&ft$2.compute("fill",this.__leaf),e&&ft$2.compute("stroke",this.__leaf),this.__needComputePaint=!1;}};let Ft$1 = class Ft extends Pt$2{};let Dt$2 = class Dt extends Ft$1{get __boxStroke(){return !this.__pathInputed}get __drawAfterFill(){const t=this;return "hide"===t.overflow&&(t.__clipAfterFill||t.innerShadow)&&t.__leaf.children.length}get __clipAfterFill(){return this.__leaf.isOverflow||super.__clipAfterFill}};let It$1 = class It extends Ft$1{__getInputData(t,e){const i=super.__getInputData(t,e);return Qt$2.forEach((t=>delete i[t])),i}};let Et$2 = class Et extends Dt$2{};let Wt$1 = class Wt extends Pt$2{};let Lt$1 = class Lt extends Pt$2{get __boxStroke(){return !this.__pathInputed}};let zt$1 = class zt extends Pt$2{get __boxStroke(){return !this.__pathInputed}};let Tt$2 = class Tt extends Pt$2{};let Mt$1 = class Mt extends Pt$2{};let Ot$2 = class Ot extends Pt$2{get __pathInputed(){return 2}};let Nt$1 = class Nt extends Ft$1{};const Vt$1={thin:100,"extra-light":200,light:300,normal:400,medium:500,"semi-bold":600,bold:700,"extra-bold":800,black:900};let jt$1 = class jt extends Pt$2{get __useNaturalRatio(){return !1}setFontWeight(t){"string"==typeof t?(this.__setInput("fontWeight",t),this._fontWeight=Vt$1[t]||400):(this.__input&&this.__removeInput("fontWeight"),this._fontWeight=t);}};let Ht$1 = class Ht extends Lt$1{setUrl(t){this.__setImageFill(t),this._url=t;}__setImageFill(t){this.__leaf.image&&(this.__leaf.image=null),this.fill=t?{type:"image",mode:"stretch",url:t}:void 0;}__getData(){const t=super.__getData();return delete t.fill,t}__getInputData(t,e){const i=super.__getInputData(t,e);return delete i.fill,i}};let Yt$1 = class Yt extends Lt$1{get __isCanvas(){return !0}get __drawAfterFill(){return !0}__getInputData(t,e){const i=super.__getInputData(t,e);return i.url=this.__leaf.canvas.toDataURL("image/png"),i}};const Xt$1={__updateStrokeSpread(){let t=0,e=0;const i=this.__,{strokeAlign:s,strokeWidth:o}=i;if((i.stroke||"all"===i.hitStroke)&&o&&"inside"!==s&&(e=t="center"===s?o/2:o,!i.__boxStroke)){const e=i.__isLinePath?0:10*t,s="none"===i.strokeCap?0:o;t+=Math.max(e,s);}return i.__useArrow&&(t+=5*o),this.__layout.strokeBoxSpread=e,t},__updateRenderSpread(){let t=0;const{shadow:e,innerShadow:i,blur:s,backgroundBlur:o}=this.__;e&&e.forEach((e=>t=Math.max(t,Math.max(Math.abs(e.y),Math.abs(e.x))+(e.spread>0?e.spread:0)+1.5*e.blur))),s&&(t=Math.max(t,s));let r=t=Math.ceil(t);return i&&i.forEach((t=>r=Math.max(r,Math.max(Math.abs(t.y),Math.abs(t.x))+(t.spread<0?-t.spread:0)+1.5*t.blur))),o&&(r=Math.max(r,o)),this.__layout.renderShapeSpread=r,t+(this.__layout.strokeSpread||0)}},Ut$1={__updateChange(){const t=this.__;if(t.__useEffect){const{shadow:e,innerShadow:i,blur:s,backgroundBlur:o}=this.__;t.__useEffect=!!(e||i||s||o);}t.__checkSingle();t.__isFills||t.__isStrokes||t.cornerRadius||t.__useEffect?t.__complex=!0:t.__complex&&(t.__complex=!1);},__drawFast(t,e){qt$1(this,t,e);},__draw(t,e){const i=this.__;if(i.__complex){i.__needComputePaint&&i.__computePaint();const{fill:s,stroke:o,__drawAfterFill:r}=i;if(this.__drawRenderPath(t),i.__useEffect){const a=ft$2.shape(this,t,e);this.__nowWorld=this.__getNowWorld(e);const{shadow:n,innerShadow:_}=i;n&&mt$2.shadow(this,t,a),s&&(i.__isFills?ft$2.fills(s,this,t):ft$2.fill(s,this,t)),r&&this.__drawAfterFill(t,e),_&&mt$2.innerShadow(this,t,a),o&&(i.__isStrokes?ft$2.strokes(o,this,t):ft$2.stroke(o,this,t)),a.worldCanvas&&a.worldCanvas.recycle(),a.canvas.recycle();}else s&&(i.__isFills?ft$2.fills(s,this,t):ft$2.fill(s,this,t)),r&&this.__drawAfterFill(t,e),o&&(i.__isStrokes?ft$2.strokes(o,this,t):ft$2.stroke(o,this,t));}else i.__pathInputed?qt$1(this,t,e):this.__drawFast(t,e);},__renderShape(t,e,i,s){if(this.__worldOpacity){t.setWorld(this.__nowWorld=this.__getNowWorld(e));const{fill:o,stroke:r}=this.__;this.__drawRenderPath(t),o&&!i&&(this.__.__pixelFill?ft$2.fills(o,this,t):ft$2.fill("#000000",this,t)),this.__.__isCanvas&&this.__drawAfterFill(t,e),r&&!s&&(this.__.__pixelStroke?ft$2.strokes(r,this,t):ft$2.stroke("#000000",this,t));}},__drawAfterFill(t,e){this.__.__clipAfterFill?(t.save(),this.windingRule?t.clip(this.windingRule):t.clip(),this.__drawContent(t,e),t.restore()):this.__drawContent(t,e);}};function qt$1(t,e,i){const{fill:s,stroke:o,__drawAfterFill:r}=t.__;t.__drawRenderPath(e),s&&ft$2.fill(s,t,e),r&&t.__drawAfterFill(e,i),o&&ft$2.stroke(o,t,e);}const Gt$1={__drawFast(t,e){let{width:i,height:s,fill:o,stroke:r,__drawAfterFill:a}=this.__;if(o&&(t.fillStyle=o,t.fillRect(0,0,i,s)),a&&this.__drawAfterFill(t,e),r){const{strokeAlign:o,__strokeWidth:a}=this.__;if(!a)return;t.setStroke(r,a,this.__);const n=a/2;switch(o){case"center":t.strokeRect(0,0,i,s);break;case"inside":i-=a,s-=a,i<0||s<0?(t.save(),this.__clip(t,e),t.strokeRect(n,n,i,s),t.restore()):t.strokeRect(n,n,i,s);break;case"outside":t.strokeRect(-n,-n,i+a,s+a);}}}};var Jt$1;let $t$1=Jt$1=class extends Ko{get app(){return this.leafer&&this.leafer.app}get isFrame(){return !1}set scale(t){a.assignScale(this,t);}get scale(){return this.__.scale}get pen(){const{path:t}=this.__;return oi$1.set(this.path=t||[]),t||this.__drawPathByBox(oi$1),oi$1}get editConfig(){}get editOuter(){return ""}get editInner(){return ""}constructor(t){super(t);}reset(t){}set(t,e){t&&(e?"temp"===e?(this.lockNormalStyle=!0,Object.assign(this,t),this.lockNormalStyle=!1):this.animate(t,e):Object.assign(this,t));}get(t){return "string"==typeof t?this.__.__getInput(t):this.__.__getInputData(t)}createProxyData(){}find(t,e){return Ot$3.need("find")}findTag(t){return this.find({tag:t})}findOne(t,e){return Ot$3.need("find")}findId(t){return this.findOne({id:t})}getPath(t,e){this.__layout.update();let i=e?this.__.__pathForRender:this.__.path;return i||(oi$1.set(i=[]),this.__drawPathByBox(oi$1)),t?ms.toCanvasData(i,!0):i}getPathString(t,e,i){return ms.stringify(this.getPath(t,e),i)}load(){this.__.__computePaint();}__onUpdateSize(){if(this.__.__input){const t=this.__;!t.lazy||this.__inLazyBounds||Rt$1.running?t.__computePaint():t.__needComputePaint=!0;}}__updateRenderPath(){if(this.__.path){const t=this.__;t.__pathForRender=t.cornerRadius?ni$1.smooth(t.path,t.cornerRadius,t.cornerSmoothing):t.path,t.__useArrow&&vt$2.addArrows(this,!t.cornerRadius);}}__drawRenderPath(t){t.beginPath(),this.__drawPathByData(t,this.__.__pathForRender);}__drawPath(t){t.beginPath(),this.__drawPathByData(t,this.__.path);}__drawPathByData(t,e){e?xr.drawPathByData(t,e):this.__drawPathByBox(t);}__drawPathByBox(t){const{x:e,y:i,width:s,height:o}=this.__layout.boxBounds;if(this.__.cornerRadius){const{cornerRadius:r}=this.__;t.roundRect(e,i,s,o,"number"==typeof r?[r]:r);}else t.rect(e,i,s,o);}animate(t,e,i,o){return Ot$3.need("animate")}killAnimate(t,e){}export(t,e){return Ot$3.need("export")}clone(t){const e=this.toJSON();return t&&Object.assign(e,t),Jt$1.one(e)}static one(t,e,i,s,o){return Pt$3.get(t.tag||this.prototype.__tag,t,e,i,s,o)}static registerUI(){nn()(this);}static registerData(t){Vi$1(t)(this.prototype);}static setEditConfig(t){}static setEditOuter(t){}static setEditInner(t){}destroy(){this.fill=this.stroke=null,this.__animate&&this.killAnimate(),super.destroy();}};dt$2([Vi$1(Pt$2)],$t$1.prototype,"__",void 0),dt$2([ut$2()],$t$1.prototype,"zoomLayer",void 0),dt$2([ki$1("")],$t$1.prototype,"id",void 0),dt$2([ki$1("")],$t$1.prototype,"name",void 0),dt$2([ki$1("")],$t$1.prototype,"className",void 0),dt$2([Yi("pass-through")],$t$1.prototype,"blendMode",void 0),dt$2([Xi(1)],$t$1.prototype,"opacity",void 0),dt$2([Di$1(!0)],$t$1.prototype,"visible",void 0),dt$2([Yi(!1)],$t$1.prototype,"locked",void 0),dt$2([ji$1(0)],$t$1.prototype,"zIndex",void 0),dt$2([Ui$1(!1)],$t$1.prototype,"mask",void 0),dt$2([Gi$1(!1)],$t$1.prototype,"eraser",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"x",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"y",void 0),dt$2([Ri$1(100,!0)],$t$1.prototype,"width",void 0),dt$2([Ri$1(100,!0)],$t$1.prototype,"height",void 0),dt$2([Ti$1(1,!0)],$t$1.prototype,"scaleX",void 0),dt$2([Ti$1(1,!0)],$t$1.prototype,"scaleY",void 0),dt$2([Pi$1(0,!0)],$t$1.prototype,"rotation",void 0),dt$2([Pi$1(0,!0)],$t$1.prototype,"skewX",void 0),dt$2([Pi$1(0,!0)],$t$1.prototype,"skewY",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"offsetX",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"offsetY",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"scrollX",void 0),dt$2([Ci$1(0,!0)],$t$1.prototype,"scrollY",void 0),dt$2([Oi$1()],$t$1.prototype,"origin",void 0),dt$2([Oi$1()],$t$1.prototype,"around",void 0),dt$2([ki$1(!1)],$t$1.prototype,"lazy",void 0),dt$2([Si$1(1)],$t$1.prototype,"pixelRatio",void 0),dt$2([Ii$1()],$t$1.prototype,"path",void 0),dt$2([Ei$1()],$t$1.prototype,"windingRule",void 0),dt$2([Ei$1(!0)],$t$1.prototype,"closed",void 0),dt$2([Ri$1(0)],$t$1.prototype,"padding",void 0),dt$2([Ri$1(!1)],$t$1.prototype,"lockRatio",void 0),dt$2([Ri$1()],$t$1.prototype,"widthRange",void 0),dt$2([Ri$1()],$t$1.prototype,"heightRange",void 0),dt$2([ki$1(!1)],$t$1.prototype,"draggable",void 0),dt$2([ki$1()],$t$1.prototype,"dragBounds",void 0),dt$2([ki$1(!1)],$t$1.prototype,"editable",void 0),dt$2([Hi(!0)],$t$1.prototype,"hittable",void 0),dt$2([Hi("path")],$t$1.prototype,"hitFill",void 0),dt$2([Wi$1("path")],$t$1.prototype,"hitStroke",void 0),dt$2([Hi(!1)],$t$1.prototype,"hitBox",void 0),dt$2([Hi(!0)],$t$1.prototype,"hitChildren",void 0),dt$2([Hi(!0)],$t$1.prototype,"hitSelf",void 0),dt$2([Hi()],$t$1.prototype,"hitRadius",void 0),dt$2([qi("")],$t$1.prototype,"cursor",void 0),dt$2([Yi()],$t$1.prototype,"fill",void 0),dt$2([Wi$1()],$t$1.prototype,"stroke",void 0),dt$2([Wi$1("inside")],$t$1.prototype,"strokeAlign",void 0),dt$2([Wi$1(1)],$t$1.prototype,"strokeWidth",void 0),dt$2([Wi$1(!1)],$t$1.prototype,"strokeWidthFixed",void 0),dt$2([Wi$1("none")],$t$1.prototype,"strokeCap",void 0),dt$2([Wi$1("miter")],$t$1.prototype,"strokeJoin",void 0),dt$2([Wi$1()],$t$1.prototype,"dashPattern",void 0),dt$2([Wi$1()],$t$1.prototype,"dashOffset",void 0),dt$2([Wi$1(10)],$t$1.prototype,"miterLimit",void 0),dt$2([Ei$1(0)],$t$1.prototype,"cornerRadius",void 0),dt$2([Ei$1()],$t$1.prototype,"cornerSmoothing",void 0),dt$2([pt$2()],$t$1.prototype,"shadow",void 0),dt$2([pt$2()],$t$1.prototype,"innerShadow",void 0),dt$2([pt$2()],$t$1.prototype,"blur",void 0),dt$2([pt$2()],$t$1.prototype,"backgroundBlur",void 0),dt$2([pt$2()],$t$1.prototype,"grayscale",void 0),dt$2([ki$1({})],$t$1.prototype,"data",void 0),dt$2([tn(Ko.prototype.reset)],$t$1.prototype,"reset",null),$t$1=Jt$1=dt$2([rn(Xt$1),rn(Ut$1),en()],$t$1);let Kt$1=class Kt extends $t$1{get __tag(){return "Group"}get isBranch(){return !0}constructor(t){super(t);}reset(t){this.__setBranch(),super.reset(t);}__setBranch(){this.children||(this.children=[]);}set(t,e){if(t)if(t.children){const{children:i}=t;delete t.children,this.children?this.clear():this.__setBranch(),super.set(t,e),i.forEach((t=>this.add(t))),t.children=i;}else super.set(t,e);}toJSON(t){const e=super.toJSON(t);return e.children=this.children.map((e=>e.toJSON(t))),e}pick(t,e){}addAt(t,e){this.add(t,e);}addAfter(t,e){this.add(t,this.children.indexOf(e)+1);}addBefore(t,e){this.add(t,this.children.indexOf(e));}add(t,e){}addMany(...t){}remove(t,e){}removeAll(t){}clear(){}};var Qt$1;dt$2([Vi$1(Ft$1)],Kt$1.prototype,"__",void 0),Kt$1=dt$2([rn(la),nn()],Kt$1);const Zt$1=xt$2.get("Leafer");let te$1=Qt$1=class extends Kt$1{get __tag(){return "Leafer"}get isApp(){return !1}get app(){return this.parent||this}get isLeafer(){return !0}get imageReady(){return this.viewReady&&pi$1.isComplete}get layoutLocked(){return !this.layouter.running}get FPS(){return this.renderer?this.renderer.FPS:60}get cursorPoint(){return this.interaction&&this.interaction.hoverData||{x:this.width/2,y:this.height/2}}get clientBounds(){return this.canvas&&this.canvas.getClientBounds()}constructor(t,e){super(e),this.config={start:!0,hittable:!0,smooth:!0,lazySpeard:100},this.leafs=0,this.__eventIds=[],this.__controllers=[],this.__readyWait=[],this.__viewReadyWait=[],this.__viewCompletedWait=[],this.__nextRenderWait=[],this.userConfig=t,t&&(t.view||t.width)&&this.init(t),Qt$1.list.add(this);}init(t,e$1){if(this.canvas)return;let i;const{config:s}=this;this.__setLeafer(this),e$1&&(this.parentApp=e$1,this.__bindApp(e$1),i=e$1.running),t&&(this.parent=e$1,this.initType(t.type),this.parent=void 0,Mt$2.assign(s,t));const o=this.canvas=e.canvas(s);this.__controllers.push(this.renderer=e.renderer(this,o,s),this.watcher=e.watcher(this,s),this.layouter=e.layouter(this,s)),this.isApp&&this.__setApp(),this.__checkAutoLayout(s,e$1),this.view=o.view,e$1||(this.selector=e.selector(this),this.interaction=e.interaction(this,o,this.selector,s),this.interaction&&(this.__controllers.unshift(this.interaction),this.hitCanvasManager=e.hitCanvasManager()),this.canvasManager=new Et$3,i=s.start),this.hittable=s.hittable,this.fill=s.fill,this.canvasManager.add(o),this.__listenEvents(),i&&(this.__startTimer=setTimeout(this.start.bind(this))),Sn.run(this.__initWait),this.onInit();}onInit(){}initType(t){}set(t,e){this.waitInit((()=>{super.set(t,e);}));}start(){clearTimeout(this.__startTimer),!this.running&&this.canvas&&(this.running=!0,this.ready?this.emitLeafer(Vn.RESTART):this.emitLeafer(Vn.START),this.__controllers.forEach((t=>t.start())),this.isApp||this.renderer.render());}stop(){clearTimeout(this.__startTimer),this.running&&this.canvas&&(this.__controllers.forEach((t=>t.stop())),this.running=!1,this.emitLeafer(Vn.STOP));}unlockLayout(){this.layouter.start(),this.updateLayout();}lockLayout(){this.updateLayout(),this.layouter.stop();}resize(t){const e=Mt$2.copyAttrs({},t,Qt$2);Object.keys(e).forEach((t=>this[t]=e[t]));}forceRender(t,e){const{renderer:i}=this;i&&(i.addBlock(t?new ht$2(t):this.canvas.bounds),this.viewReady&&(e?i.render():i.update()));}requestRender(t=!1){this.renderer&&this.renderer.update(t);}updateCursor(t){const e=this.interaction;e&&(t?e.setCursor(t):e.updateCursor());}updateLazyBounds(){this.lazyBounds=this.canvas.bounds.clone().spread(this.config.lazySpeard);}__doResize(t){const{canvas:e}=this;if(!e||e.isSameSize(t))return;const i=Mt$2.copyAttrs({},this.canvas,Qt$2);e.resize(t),this.updateLazyBounds(),this.__onResize(new Un(t,i));}__onResize(t){this.emitEvent(t),Mt$2.copyAttrs(this.__,t,Qt$2),setTimeout((()=>{this.canvasManager&&this.canvasManager.clearRecycled();}),0);}__setApp(){}__bindApp(t){this.selector=t.selector,this.interaction=t.interaction,this.canvasManager=t.canvasManager,this.hitCanvasManager=t.hitCanvasManager;}__setLeafer(t){this.leafer=t,this.__level=1;}__checkAutoLayout(t,e){e||(t.width&&t.height||(this.autoLayout=new dt$3(t)),this.canvas.startAutoLayout(this.autoLayout,this.__onResize.bind(this)));}__setAttr(t,e){return this.canvas&&(Qt$2.includes(t)?this.__changeCanvasSize(t,e):"fill"===t?this.__changeFill(e):"hittable"===t?this.parent||(this.canvas.hittable=e):"zIndex"===t&&(this.canvas.zIndex=e,setTimeout((()=>this.parent&&this.parent.__updateSortChildren())))),super.__setAttr(t,e)}__getAttr(t){return this.canvas&&Qt$2.includes(t)?this.canvas[t]:super.__getAttr(t)}__changeCanvasSize(t,e){const i=Mt$2.copyAttrs({},this.canvas,Qt$2);i[t]=this.config[t]=e,e&&this.canvas.stopAutoLayout(),this.__doResize(i);}__changeFill(t){this.config.fill=t,this.canvas.allowBackgroundColor?this.canvas.backgroundColor=t:this.forceRender();}__onCreated(){this.created=!0;}__onReady(){this.ready=!0,this.emitLeafer(Vn.BEFORE_READY),this.emitLeafer(Vn.READY),this.emitLeafer(Vn.AFTER_READY),Sn.run(this.__readyWait);}__onViewReady(){this.viewReady||(this.viewReady=!0,this.emitLeafer(Vn.VIEW_READY),Sn.run(this.__viewReadyWait));}__onLayoutEnd(){const{grow:t,growWidth:e,growHeight:i}=this.config;if(t){let{width:s,height:o,pixelRatio:r}=this;const a="box"===t?this.worldBoxBounds:this.__world;!1!==e&&(s=Math.max(1,a.x+a.width)),!1!==i&&(o=Math.max(1,a.y+a.height)),this.__doResize({width:s,height:o,pixelRatio:r});}this.ready||this.__onReady();}__onNextRender(){if(this.viewReady){Sn.run(this.__nextRenderWait);const{imageReady:t}=this;t&&!this.viewCompleted&&this.__checkViewCompleted(),t||(this.viewCompleted=!1,this.requestRender());}else this.requestRender();}__checkViewCompleted(t=!0){this.nextRender((()=>{this.imageReady&&(t&&this.emitLeafer(Vn.VIEW_COMPLETED),Sn.run(this.__viewCompletedWait),this.viewCompleted=!0);}));}__onWatchData(){this.watcher.childrenChanged&&this.interaction&&this.nextRender((()=>this.interaction.updateCursor()));}waitInit(t,e){e&&(t=t.bind(e)),this.__initWait||(this.__initWait=[]),this.canvas?t():this.__initWait.push(t);}waitReady(t,e){e&&(t=t.bind(e)),this.ready?t():this.__readyWait.push(t);}waitViewReady(t,e){e&&(t=t.bind(e)),this.viewReady?t():this.__viewReadyWait.push(t);}waitViewCompleted(t,e){e&&(t=t.bind(e)),this.__viewCompletedWait.push(t),this.viewCompleted?this.__checkViewCompleted(!1):this.running||this.start();}nextRender(t,e,i){e&&(t=t.bind(e));const s=this.__nextRenderWait;if(i){for(let e=0;e<s.length;e++)if(s[e]===t){s.splice(e,1);break}}else s.push(t);this.requestRender();}zoom(t,e,i){return Ot$3.need("view")}getValidMove(t,e){return {x:t,y:e}}getValidScale(t){return t}getWorldPointByClient(t,e){return this.interaction&&this.interaction.getLocal(t,e)}getPagePointByClient(t,e){return this.getPagePoint(this.getWorldPointByClient(t,e))}updateClientBounds(){this.canvas&&this.canvas.updateClientBounds();}receiveEvent(t){}emitLeafer(t){this.emitEvent(new Vn(t,this));}__listenEvents(){const t=Bt$2.start("FirstCreate "+this.innerName);this.once(Vn.START,(()=>Bt$2.end(t))),this.once(Hn.START,(()=>this.updateLazyBounds())),this.once(qn.START,(()=>this.__onCreated())),this.once(qn.END,(()=>this.__onViewReady())),this.__eventIds.push(this.on_(Gn.DATA,this.__onWatchData,this),this.on_(Hn.END,this.__onLayoutEnd,this),this.on_(qn.NEXT,this.__onNextRender,this));}__removeListenEvents(){this.off_(this.__eventIds),this.__eventIds.length=0;}destroy(t){const e=()=>{if(!this.destroyed){Qt$1.list.remove(this);try{this.stop(),this.emitEvent(new Vn(Vn.END,this)),this.__removeListenEvents(),this.__controllers.forEach((t=>!(this.parent&&t===this.interaction)&&t.destroy())),this.__controllers.length=0,this.parent||(this.selector&&this.selector.destroy(),this.hitCanvasManager&&this.hitCanvasManager.destroy(),this.canvasManager.destroy()),this.canvas.destroy(),this.config.view=this.view=this.parentApp=null,this.userConfig&&(this.userConfig.view=null),super.destroy(),setTimeout((()=>{pi$1.clearRecycled();}),100);}catch(t){Zt$1.error(t);}}};t?e():setTimeout(e);}};te$1.list=new da,dt$2([Vi$1(It$1)],te$1.prototype,"__",void 0),dt$2([Ri$1()],te$1.prototype,"pixelRatio",void 0),te$1=Qt$1=dt$2([nn()],te$1);let ee$1=class ee extends $t$1{get __tag(){return "Rect"}constructor(t){super(t);}};dt$2([Vi$1(Lt$1)],ee$1.prototype,"__",void 0),ee$1=dt$2([rn(Gt$1),en(),nn()],ee$1);const{copy:ie$1,add:se$1,includes:oe$1}=it$2,re$1=ee$1.prototype,ae$1=Kt$1.prototype,ne$1={};let _e$1=class _e extends Kt$1{get __tag(){return "Box"}get isBranchLeaf(){return !0}constructor(t){super(t),this.__layout.renderChanged||this.__layout.renderChange();}__updateStrokeSpread(){return 0}__updateRectRenderSpread(){return 0}__updateRenderSpread(){return this.__updateRectRenderSpread()||-1}__updateRectBoxBounds(){}__updateBoxBounds(t){const e=this.__;if(this.children.length)if(e.__autoSide){e.__hasSurface&&this.__extraUpdate(),super.__updateBoxBounds();const{boxBounds:t}=this.__layout;e.__autoSize||(e.__autoWidth?(t.width+=t.x,t.x=0,t.height=e.height,t.y=0):(t.height+=t.y,t.y=0,t.width=e.width,t.x=0)),this.__updateNaturalSize();}else this.__updateRectBoxBounds();else this.__updateRectBoxBounds();}__updateStrokeBounds(){}__updateRenderBounds(){let t;const{renderBounds:e}=this.__layout;this.children.length?(super.__updateRenderBounds(),ie$1(ne$1,e),this.__updateRectRenderBounds(),t=!oe$1(e,ne$1),t&&"hide"!==this.__.overflow&&se$1(e,ne$1)):this.__updateRectRenderBounds(),!this.isOverflow!=!t&&(this.isOverflow=t);}__updateRectRenderBounds(){}__updateRectChange(){}__updateChange(){super.__updateChange(),this.__updateRectChange();}__renderRect(t,e){}__renderGroup(t,e){}__render(t,e){this.__.__drawAfterFill?this.__renderRect(t,e):(this.__renderRect(t,e),this.children.length&&this.__renderGroup(t,e));}__drawContent(t,e){this.__renderGroup(t,e),this.__.__hasStroke&&(t.setWorld(this.__nowWorld),this.__drawRenderPath(t));}};dt$2([Vi$1(Dt$2)],_e$1.prototype,"__",void 0),dt$2([ki$1(!1)],_e$1.prototype,"resizeChildren",void 0),dt$2([Ni("show")],_e$1.prototype,"overflow",void 0),dt$2([tn(re$1.__updateStrokeSpread)],_e$1.prototype,"__updateStrokeSpread",null),dt$2([tn(re$1.__updateRenderSpread)],_e$1.prototype,"__updateRectRenderSpread",null),dt$2([tn(re$1.__updateBoxBounds)],_e$1.prototype,"__updateRectBoxBounds",null),dt$2([tn(re$1.__updateStrokeBounds)],_e$1.prototype,"__updateStrokeBounds",null),dt$2([tn(re$1.__updateRenderBounds)],_e$1.prototype,"__updateRectRenderBounds",null),dt$2([tn(re$1.__updateChange)],_e$1.prototype,"__updateRectChange",null),dt$2([tn(re$1.__render)],_e$1.prototype,"__renderRect",null),dt$2([tn(ae$1.__render)],_e$1.prototype,"__renderGroup",null),_e$1=dt$2([en(),nn()],_e$1);let he$1=class he extends _e$1{get __tag(){return "Frame"}get isFrame(){return !0}constructor(t){super(t);}};dt$2([Vi$1(Et$2)],he$1.prototype,"__",void 0),dt$2([Yi("#FFFFFF")],he$1.prototype,"fill",void 0),dt$2([Ni("hide")],he$1.prototype,"overflow",void 0),he$1=dt$2([nn()],he$1);const{moveTo:de$1,closePath:pe$1,ellipse:le$1}=zs;let ue$1=class ue extends $t$1{get __tag(){return "Ellipse"}constructor(t){super(t);}__updatePath(){const{width:t$1,height:e,innerRadius:i,startAngle:s,endAngle:o}=this.__,r=t$1/2,a=e/2,n=this.__.path=[];i?(s||o?(i<1&&le$1(n,r,a,r*i,a*i,0,s,o,!1),le$1(n,r,a,r,a,0,o,s,!0),i<1&&pe$1(n)):(i<1&&(le$1(n,r,a,r*i,a*i),de$1(n,t$1,a)),le$1(n,r,a,r,a,0,360,0,!0)),t.ellipseToCurve&&(this.__.path=this.getPath(!0))):s||o?(de$1(n,r,a),le$1(n,r,a,r,a,0,s,o,!1),pe$1(n)):le$1(n,r,a,r,a);}};dt$2([Vi$1(zt$1)],ue$1.prototype,"__",void 0),dt$2([Ei$1(0)],ue$1.prototype,"innerRadius",void 0),dt$2([Ei$1(0)],ue$1.prototype,"startAngle",void 0),dt$2([Ei$1(0)],ue$1.prototype,"endAngle",void 0),ue$1=dt$2([nn()],ue$1);const{moveTo:ce$1,lineTo:ye$1,drawPoints:ge$1}=zs,{rotate:ve$1,getAngle:fe$1,getDistance:we$1,defaultPoint:xe$1}=I$1,{toBounds:me$1}=Jr;let Re$1=class Re extends $t$1{get __tag(){return "Line"}get toPoint(){const{width:t,rotation:e}=this.__,i=u();return t&&(i.x=t),e&&ve$1(i,e),i}set toPoint(t){this.width=we$1(xe$1,t),this.rotation=fe$1(xe$1,t),this.height&&(this.height=0);}constructor(t){super(t);}__updatePath(){const t=this.__,e=t.path=[];t.points?ge$1(e,t.points,!1,t.closed):(ce$1(e,0,0),ye$1(e,this.width,0));}__updateRenderPath(){const t=this.__;!this.pathInputed&&t.points&&t.curve?(ge$1(t.__pathForRender=[],t.points,t.curve,t.closed),t.__useArrow&&vt$2.addArrows(this,!1)):super.__updateRenderPath();}__updateBoxBounds(){this.points?me$1(this.__.__pathForRender,this.__layout.boxBounds):super.__updateBoxBounds();}};dt$2([Vi$1(Wt$1)],Re$1.prototype,"__",void 0),dt$2([Mi$1("center")],Re$1.prototype,"strokeAlign",void 0),dt$2([Ri$1(0)],Re$1.prototype,"height",void 0),dt$2([Ei$1()],Re$1.prototype,"points",void 0),dt$2([Ei$1(0)],Re$1.prototype,"curve",void 0),dt$2([Ei$1(!1)],Re$1.prototype,"closed",void 0),Re$1=dt$2([nn()],Re$1);const{sin:Se$1,cos:ke$1,PI:Be$1}=Math,{moveTo:be$1,lineTo:Ce$1,closePath:Ae$1,drawPoints:Pe$1}=zs,Fe$1=Re$1.prototype;let De$1=class De extends $t$1{get __tag(){return "Polygon"}constructor(t){super(t);}__updatePath(){const t=this.__.path=[];if(this.__.points)Pe$1(t,this.__.points,!1,!0);else {const{width:e,height:i,sides:s}=this.__,o=e/2,r=i/2;be$1(t,o,0);for(let e=1;e<s;e++)Ce$1(t,o+o*Se$1(2*e*Be$1/s),r-r*ke$1(2*e*Be$1/s));}Ae$1(t);}__updateRenderPath(){}__updateBoxBounds(){}};dt$2([Vi$1(Tt$2)],De$1.prototype,"__",void 0),dt$2([Ei$1(3)],De$1.prototype,"sides",void 0),dt$2([Ei$1()],De$1.prototype,"points",void 0),dt$2([Ei$1(0)],De$1.prototype,"curve",void 0),dt$2([tn(Fe$1.__updateRenderPath)],De$1.prototype,"__updateRenderPath",null),dt$2([tn(Fe$1.__updateBoxBounds)],De$1.prototype,"__updateBoxBounds",null),De$1=dt$2([en(),nn()],De$1);const{sin:Ie$1,cos:Ee$1,PI:We$1}=Math,{moveTo:Le$1,lineTo:ze$1,closePath:Te$1}=zs;let Me$1=class Me extends $t$1{get __tag(){return "Star"}constructor(t){super(t);}__updatePath(){const{width:t,height:e,corners:i,innerRadius:s}=this.__,o=t/2,r=e/2,a=this.__.path=[];Le$1(a,o,0);for(let t=1;t<2*i;t++)ze$1(a,o+(t%2==0?o:o*s)*Ie$1(t*We$1/i),r-(t%2==0?r:r*s)*Ee$1(t*We$1/i));Te$1(a);}};dt$2([Vi$1(Mt$1)],Me$1.prototype,"__",void 0),dt$2([Ei$1(5)],Me$1.prototype,"corners",void 0),dt$2([Ei$1(.382)],Me$1.prototype,"innerRadius",void 0),Me$1=dt$2([nn()],Me$1);let Oe$1=class Oe extends ee$1{get __tag(){return "Image"}get ready(){return !!this.image&&this.image.ready}constructor(t){super(t),this.on(jn.LOADED,(t=>{"fill"===t.attrName&&t.attrValue.url===this.url&&(this.image=t.image);}));}destroy(){this.image=null,super.destroy();}};dt$2([Vi$1(Ht$1)],Oe$1.prototype,"__",void 0),dt$2([Ri$1("")],Oe$1.prototype,"url",void 0),Oe$1=dt$2([nn()],Oe$1);let Ve$1=class Ve extends ee$1{get __tag(){return "Canvas"}get ready(){return !this.url}constructor(t){super(t),this.canvas=e.canvas(this.__),this.context=this.canvas.context,t&&t.url&&this.drawImage(t.url);}drawImage(t){new mi$1({url:t}).load((t=>{this.context.drawImage(t.view,0,0),this.url=void 0,this.paint(),this.emitEvent(new jn(jn.LOADED,{image:t}));}));}draw(t,e,i,s){const o=new X$2(t.worldTransform).invert(),r=new X$2;e&&r.translate(e.x,e.y),i&&("number"==typeof i?r.scale(i):r.scale(i.x,i.y)),s&&r.rotate(s),o.multiplyParent(r),t.__render(this.canvas,{matrix:o.withScale()}),this.paint();}paint(){this.forceRender();}__drawContent(t,e){const{width:i,height:s}=this.__,{view:o}=this.canvas;t.drawImage(o,0,0,o.width,o.height,0,0,i,s);}__updateSize(){const{canvas:t}=this;if(t){const{smooth:e,safeResize:i}=this.__;t.resize(this.__,i),t.smooth!==e&&(t.smooth=e);}}destroy(){this.canvas&&(this.canvas.destroy(),this.canvas=this.context=null),super.destroy();}};dt$2([Vi$1(Yt$1)],Ve$1.prototype,"__",void 0),dt$2([lt$2(100)],Ve$1.prototype,"width",void 0),dt$2([lt$2(100)],Ve$1.prototype,"height",void 0),dt$2([lt$2(1)],Ve$1.prototype,"pixelRatio",void 0),dt$2([lt$2(!0)],Ve$1.prototype,"smooth",void 0),dt$2([ki$1(!1)],Ve$1.prototype,"safeResize",void 0),dt$2([lt$2()],Ve$1.prototype,"contextSettings",void 0),Ve$1=dt$2([nn()],Ve$1);const{copyAndSpread:je$1,includes:He$1,isSame:Ye$1,spread:Xe$1,setList:Ue$1}=it$2;let qe$1=class qe extends $t$1{get __tag(){return "Text"}get textDrawData(){return this.__layout.update(),this.__.__textDrawData}constructor(t){super(t);}__drawHitPath(t){const{__lineHeight:e,fontSize:i,__baseLine:s,__textDrawData:o}=this.__;t.beginPath(),this.__.__letterSpacing<0?this.__drawPathByData(t):o.rows.forEach((o=>t.rect(o.x,o.y-s,o.width,e<i?i:e)));}__drawPathByData(t,e){const{x:i,y:s,width:o,height:r}=this.__layout.boxBounds;t.rect(i,s,o,r);}__drawRenderPath(t){t.font=this.__.__font;}__updateTextDrawData(){const t=this.__,{lineHeight:e,letterSpacing:i,fontFamily:s,fontSize:o,fontWeight:r,italic:a$1,textCase:n,textOverflow:_,padding:h}=t;t.__lineHeight=gt$2.number(e,o),t.__letterSpacing=gt$2.number(i,o),t.__padding=h?a.fourNumber(h):void 0,t.__baseLine=t.__lineHeight-(t.__lineHeight-.7*o)/2,t.__font=`${a$1?"italic ":""}${"small-caps"===n?"small-caps ":""}${"normal"!==r?r+" ":""}${o}px ${s}`,t.__clipText="show"!==_&&!t.__autoSize,t.__textDrawData=ct$2.getDrawData(t.text,this.__);}__updateBoxBounds(){const t=this.__,e=this.__layout,{fontSize:i,italic:s,padding:o,__autoWidth:r,__autoHeight:a}=t;this.__updateTextDrawData();const{bounds:n}=t.__textDrawData,_=e.boxBounds;if(t.__lineHeight<i&&Xe$1(n,i/2),r||a){if(_.x=r?n.x:0,_.y=a?n.y:0,_.width=r?n.width:t.width,_.height=a?n.height:t.height,o){const[e,i,s,o]=t.__padding;r&&(_.x-=o,_.width+=i+o),a&&(_.y-=e,_.height+=s+e);}this.__updateNaturalSize();}else super.__updateBoxBounds();s&&(_.width+=.16*i);const h=He$1(_,n)?_:n;Ye$1(h,e.contentBounds)?t.__textBoxBounds=h:(e.contentBounds=h,e.renderChanged=!0,Ue$1(t.__textBoxBounds={},[_,n]));}__updateRenderSpread(){let t=super.__updateRenderSpread();return t||(t=this.__layout.boxBounds===this.__layout.contentBounds?0:1),t}__updateRenderBounds(){je$1(this.__layout.renderBounds,this.__.__textBoxBounds,this.__layout.renderSpread);}};dt$2([Vi$1(jt$1)],qe$1.prototype,"__",void 0),dt$2([Ri$1(0)],qe$1.prototype,"width",void 0),dt$2([Ri$1(0)],qe$1.prototype,"height",void 0),dt$2([ki$1(!1)],qe$1.prototype,"resizeFontSize",void 0),dt$2([Yi("#000000")],qe$1.prototype,"fill",void 0),dt$2([Mi$1("outside")],qe$1.prototype,"strokeAlign",void 0),dt$2([Hi("all")],qe$1.prototype,"hitFill",void 0),dt$2([Ri$1("")],qe$1.prototype,"text",void 0),dt$2([Ri$1("caption")],qe$1.prototype,"fontFamily",void 0),dt$2([Ri$1(12)],qe$1.prototype,"fontSize",void 0),dt$2([Ri$1("normal")],qe$1.prototype,"fontWeight",void 0),dt$2([Ri$1(!1)],qe$1.prototype,"italic",void 0),dt$2([Ri$1("none")],qe$1.prototype,"textCase",void 0),dt$2([Ri$1("none")],qe$1.prototype,"textDecoration",void 0),dt$2([Ri$1(0)],qe$1.prototype,"letterSpacing",void 0),dt$2([Ri$1({type:"percent",value:1.5})],qe$1.prototype,"lineHeight",void 0),dt$2([Ri$1(0)],qe$1.prototype,"paraIndent",void 0),dt$2([Ri$1(0)],qe$1.prototype,"paraSpacing",void 0),dt$2([Ri$1("x")],qe$1.prototype,"writingMode",void 0),dt$2([Ri$1("left")],qe$1.prototype,"textAlign",void 0),dt$2([Ri$1("top")],qe$1.prototype,"verticalAlign",void 0),dt$2([Ri$1(!0)],qe$1.prototype,"autoSizeAlign",void 0),dt$2([Ri$1("normal")],qe$1.prototype,"textWrap",void 0),dt$2([Ri$1("show")],qe$1.prototype,"textOverflow",void 0),qe$1=dt$2([nn()],qe$1);let Ge$1=class Ge extends $t$1{get __tag(){return "Path"}constructor(t){super(t);}};dt$2([Vi$1(Ot$2)],Ge$1.prototype,"__",void 0),dt$2([Mi$1("center")],Ge$1.prototype,"strokeAlign",void 0),Ge$1=dt$2([nn()],Ge$1);let Je$1=class Je extends Kt$1{get __tag(){return "Pen"}constructor(t){super(t);}setStyle(t){const e=this.pathElement=new Ge$1(t);return this.pathStyle=t,this.__path=e.path||(e.path=[]),this.add(e),this}beginPath(){return this}moveTo(t,e){return this}lineTo(t,e){return this}bezierCurveTo(t,e,i,s,o,r){return this}quadraticCurveTo(t,e,i,s){return this}closePath(){return this}rect(t,e,i,s){return this}roundRect(t,e,i,s,o){return this}ellipse(t,e,i,s,o,r,a,n){return this}arc(t,e,i,s,o,r){return this}arcTo(t,e,i,s,o){return this}drawEllipse(t,e,i,s,o,r,a,n){return this}drawArc(t,e,i,s,o,r){return this}drawPoints(t,e,i){return this}clearPath(){return this}paint(){this.pathElement.__layout.boxChanged||this.pathElement.forceUpdate("path");}};dt$2([Vi$1(Nt$1)],Je$1.prototype,"__",void 0),dt$2([(t,e)=>{xi$1(t,e,{get(){return this.__path}});}],Je$1.prototype,"path",void 0),Je$1=dt$2([rn(ir,["set","path","paint"]),nn()],Je$1);

function k(t,e,i,s){var a,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(a=t[h])&&(n=(r<3?a(n):r>3?a(e,i,n):a(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;let H$1=class H extends te$1{get __tag(){return "App"}get isApp(){return !0}constructor(t,e){super(t,e);}init(t,e$1){if(super.init(t,e$1),t){const{ground:e$1,tree:i,sky:s,editor:a}=t;e$1&&(this.ground=this.addLeafer(e$1)),(i||a)&&(this.tree=this.addLeafer(i||{type:t.type||"design"})),(s||a)&&(this.sky=this.addLeafer(s)),a&&this.sky.add(this.editor=e.editor(a));}}__setApp(){const{canvas:t}=this,{realCanvas:e,view:i}=this.config;e||i===this.canvas.view||!t.parentView?this.realCanvas=!0:t.unrealCanvas(),this.leafer=this,this.watcher.disable(),this.layouter.disable(),this.__eventIds.push(this.on_(Fn.CHANGE,this.__onPropertyChange,this));}start(){super.start(),this.children.forEach((t=>t.start()));}stop(){this.children.forEach((t=>t.stop())),super.stop();}unlockLayout(){super.unlockLayout(),this.children.forEach((t=>t.unlockLayout()));}lockLayout(){super.lockLayout(),this.children.forEach((t=>t.lockLayout()));}forceRender(t,e){this.children.forEach((i=>i.forceRender(t,e)));}addLeafer(e){const i=new te$1(e);return this.add(i),i}add(t,e){if(!t.view){if(this.realCanvas&&!this.canvas.bounds)return void setTimeout((()=>this.add(t,e)),10);t.init(this.__getChildConfig(t.userConfig),this);}super.add(t,e),void 0!==e&&(t.canvas.childIndex=e),this.__listenChildEvents(t);}__onPropertyChange(){xt$2.showHitView&&this.children.forEach((t=>t.forceUpdate("surface")));}__onCreated(){this.created=this.children.every((t=>t.created));}__onReady(){this.children.every((t=>t.ready))&&super.__onReady();}__onViewReady(){this.children.every((t=>t.viewReady))&&super.__onViewReady();}__onChildRenderEnd(t){this.renderer.addBlock(t.renderBounds),this.viewReady&&this.renderer.update();}__render(t,e){if(t.context){const i=e.matrix;i&&t.setTransform(i.a,i.b,i.c,i.d,i.e,i.f),this.children.forEach((e=>t.copyWorld(e.canvas)));}}__onResize(t){this.children.forEach((e=>e.resize(t))),super.__onResize(t);}updateLayout(){this.children.forEach((t=>t.updateLayout()));}__getChildConfig(t){let e=Object.assign({},this.config);return e.hittable=e.realCanvas=void 0,t&&Mt$2.assign(e,t),this.autoLayout&&Mt$2.copyAttrs(e,this,Qt$2),e.view=this.realCanvas?void 0:this.view,e.fill=void 0,e}__listenChildEvents(t){t.once(Hn.END,(()=>this.__onReady())),t.once(qn.START,(()=>this.__onCreated())),t.once(qn.END,(()=>this.__onViewReady())),this.realCanvas&&this.__eventIds.push(t.on_(qn.END,this.__onChildRenderEnd,this));}};H$1=k([nn()],H$1);const A={},B={isHoldSpaceKey:()=>B.isHold("Space"),isHold:t=>A[t],setDownCode(t){A[t]||(A[t]=!0);},setUpCode(t){A[t]=!1;}},I={LEFT:1,RIGHT:2,MIDDLE:4,defaultLeft(t){t.buttons||(t.buttons=1);},left:t=>1===t.buttons,right:t=>2===t.buttons,middle:t=>4===t.buttons};let N$1 = class N extends Dn{get spaceKey(){return B.isHoldSpaceKey()}get left(){return I.left(this)}get right(){return I.right(this)}get middle(){return I.middle(this)}constructor(t){super(t.type),this.bubbles=!0,Object.assign(this,t);}getBoxPoint(t){return (t||this.current).getBoxPoint(this)}getInnerPoint(t){return (t||this.current).getInnerPoint(this)}getLocalPoint(t){return (t||this.current).getLocalPoint(this)}getPagePoint(){return this.current.getPagePoint(this)}getInner(t){return this.getInnerPoint(t)}getLocal(t){return this.getLocalPoint(t)}getPage(){return this.getPagePoint()}static changeName(t,e){Lt$2.changeName(t,e);}};let F=class extends N$1{};F.POINTER="pointer",F.BEFORE_DOWN="pointer.before_down",F.BEFORE_MOVE="pointer.before_move",F.BEFORE_UP="pointer.before_up",F.DOWN="pointer.down",F.MOVE="pointer.move",F.UP="pointer.up",F.OVER="pointer.over",F.OUT="pointer.out",F.ENTER="pointer.enter",F.LEAVE="pointer.leave",F.TAP="tap",F.DOUBLE_TAP="double_tap",F.CLICK="click",F.DOUBLE_CLICK="double_click",F.LONG_PRESS="long_press",F.LONG_TAP="long_tap",F.MENU="pointer.menu",F.MENU_TAP="pointer.menu_tap",F=k([on()],F);const W={};let V=class extends F{static setList(t){this.list=t instanceof da?t:new da(t);}static setData(t){this.data=t;}static getValidMove(t,e,i){const{draggable:s,dragBounds:a}=t,r=t.getLocalPoint(i,null,!0);return I$1.move(r,e.x-t.x,e.y-t.y),a&&this.getMoveInDragBounds(t.__local,"parent"===a?t.parent.boxBounds:a,r,!0),"x"===s&&(r.y=0),"y"===s&&(r.x=0),r}static getMoveInDragBounds(t,e,i,s){const a=t.x+i.x,r=t.y+i.y,n=a+t.width,h=r+t.height,o=e.x+e.width,d=e.y+e.height;return s||(i=Object.assign({},i)),it$2.includes(t,e)?(a>e.x?i.x+=e.x-a:n<o&&(i.x+=o-n),r>e.y?i.y+=e.y-r:h<d&&(i.y+=d-h)):(a<e.x?i.x+=e.x-a:n>o&&(i.x+=o-n),r<e.y?i.y+=e.y-r:h>d&&(i.y+=d-h)),i}getPageMove(t){return this.assignMove(t),this.current.getPagePoint(W,null,!0)}getInnerMove(t,e){return t||(t=this.current),this.assignMove(e),t.getInnerPoint(W,null,!0)}getLocalMove(t,e){return t||(t=this.current),this.assignMove(e),t.getLocalPoint(W,null,!0)}getPageTotal(){return this.getPageMove(!0)}getInnerTotal(t){return this.getInnerMove(t,!0)}getLocalTotal(t){return this.getLocalMove(t,!0)}getPageBounds(){const t=this.getPageTotal(),e=this.getPagePoint(),i={};return it$2.set(i,e.x-t.x,e.y-t.y,t.x,t.y),it$2.unsign(i),i}assignMove(t){W.x=t?this.totalX:this.moveX,W.y=t?this.totalY:this.moveY;}};V.BEFORE_DRAG="drag.before_drag",V.START="drag.start",V.DRAG="drag",V.END="drag.end",V.OVER="drag.over",V.OUT="drag.out",V.ENTER="drag.enter",V.LEAVE="drag.leave",V=k([on()],V);let j=class extends F{static setList(t){V.setList(t);}static setData(t){V.setData(t);}};j.DROP="drop",j=k([on()],j);let z=class extends V{};z.BEFORE_MOVE="move.before_move",z.START="move.start",z.MOVE="move",z.END="move.end",z=k([on()],z);let G=class extends N$1{};G.BEFORE_ROTATE="rotate.before_rotate",G.START="rotate.start",G.ROTATE="rotate",G.END="rotate.end",G=k([on()],G);let X$1=class X extends V{};X$1.SWIPE="swipe",X$1.LEFT="swipe.left",X$1.RIGHT="swipe.right",X$1.UP="swipe.up",X$1.DOWN="swipe.down",X$1=k([on()],X$1);let Y=class extends N$1{};Y.BEFORE_ZOOM="zoom.before_zoom",Y.START="zoom.start",Y.ZOOM="zoom",Y.END="zoom.end",Y=k([on()],Y);let Z$1=class Z extends N$1{};Z$1.DOWN="key.down",Z$1.HOLD="key.hold",Z$1.UP="key.up",Z$1=k([on()],Z$1);const q$1={getDragEventData:(t,e,i)=>Object.assign(Object.assign({},i),{x:i.x,y:i.y,moveX:i.x-e.x,moveY:i.y-e.y,totalX:i.x-t.x,totalY:i.y-t.y}),getDropEventData:(t,e,i)=>Object.assign(Object.assign({},t),{list:e,data:i}),getSwipeDirection:t=>t<-45&&t>-135?X$1.UP:t>45&&t<135?X$1.DOWN:t<=45&&t>=-45?X$1.RIGHT:X$1.LEFT,getSwipeEventData:(t,e,i)=>Object.assign(Object.assign({},i),{moveX:e.moveX,moveY:e.moveY,totalX:i.x-t.x,totalY:i.y-t.y,type:J$1.getSwipeDirection(I$1.getAngle(t,i))}),getBase(t){const e=1===t.button?4:t.button;return {altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,buttons:void 0===t.buttons?1:0===t.buttons?e:t.buttons,origin:t}},pathHasEventType(t,e){const{list:i}=t;for(let t=0,s=i.length;t<s;t++)if(i[t].hasEvent(e))return !0;return !1},filterPathByEventType(t,e){const i=new da,{list:s}=t;for(let t=0,a=s.length;t<a;t++)s[t].hasEvent(e)&&i.add(s[t]);return i},pathCanDrag:t=>t&&t.list.some((t=>t.draggable||t.editable||!t.isLeafer&&t.hasEvent(V.DRAG))),pathHasOutside:t=>t&&t.list.some((t=>t.isOutside))},J$1=q$1,Q$1=new da,{getDragEventData:$$1,getDropEventData:tt$1,getSwipeEventData:et$1}=q$1;let it$1 = class it{constructor(t){this.interaction=t;}setDragData(t){this.animateWait&&this.dragEndReal(),this.downData=this.interaction.downData,this.dragData=$$1(t,t,t),this.canAnimate=this.canDragOut=!0;}getList(t,e){const{proxy:i}=this.interaction.selector,s=i&&i.list.length,a=V.list||this.draggableList||Q$1;return this.dragging&&(s?t?Q$1:new da(e?[...i.list,...i.dragHoverExclude]:i.list):a)}checkDrag(t,e){const{interaction:i}=this;if(this.moving&&t.buttons<1)return this.canAnimate=!1,void i.pointerCancel();!this.moving&&e&&(this.moving=i.canMove(this.downData)||i.isHoldRightKey||i.isMobileDragEmpty)&&(this.dragData.moveType="drag",i.emit(z.START,this.dragData)),this.moving||this.dragStart(t,e),this.drag(t);}dragStart(t,e){this.dragging||(this.dragging=e&&I.left(t),this.dragging&&(this.interaction.emit(V.START,this.dragData),this.getDraggableList(this.dragData.path),this.setDragStartPoints(this.realDraggableList=this.getList(!0))));}setDragStartPoints(t){this.dragStartPoints={},t.forEach((t=>this.dragStartPoints[t.innerId]={x:t.x,y:t.y}));}getDraggableList(t){let e;for(let i=0,s=t.length;i<s;i++)if(e=t.list[i],(e.draggable||e.editable)&&e.hitSelf&&!e.locked){this.draggableList=new da(e);break}}drag(t){const{interaction:e,dragData:i,downData:s}=this,{path:a,throughPath:r}=s;this.dragData=$$1(s,i,t),r&&(this.dragData.throughPath=r),this.dragData.path=a,this.moving?(this.dragData.moveType="drag",e.emit(z.BEFORE_MOVE,this.dragData),e.emit(z.MOVE,this.dragData)):this.dragging&&(this.dragReal(),e.emit(V.BEFORE_DRAG,this.dragData),e.emit(V.DRAG,this.dragData));}dragReal(){const{running:t}=this.interaction,e=this.realDraggableList;if(e.length&&t){const{totalX:t,totalY:i}=this.dragData;e.forEach((e=>e.draggable&&e.move(V.getValidMove(e,this.dragStartPoints[e.innerId],{x:t,y:i}))));}}dragOverOrOut(t){const{interaction:e}=this,{dragOverPath:i}=this,{path:s}=t;this.dragOverPath=s,i?s.indexAt(0)!==i.indexAt(0)&&(e.emit(V.OUT,t,i),e.emit(V.OVER,t,s)):e.emit(V.OVER,t,s);}dragEnterOrLeave(t){const{interaction:e}=this,{dragEnterPath:i}=this,{path:s}=t;e.emit(V.LEAVE,t,i,s),e.emit(V.ENTER,t,s,i),this.dragEnterPath=s;}dragEnd(t,e){(this.dragging||this.moving)&&(this.checkDragEndAnimate(t,e)||this.dragEndReal(t));}dragEndReal(t){const{interaction:e,downData:i,dragData:s}=this;t||(t=s);const{path:a,throughPath:r}=i,n=$$1(i,t,t);if(r&&(n.throughPath=r),n.path=a,this.moving&&(this.moving=!1,n.moveType="drag",e.emit(z.END,n)),this.dragging){const a=this.getList();this.dragging=!1,e.emit(V.END,n),this.swipe(t,i,s,n),this.drop(t,a,this.dragEnterPath);}this.autoMoveCancel(),this.dragReset(),this.animate(null,"off");}swipe(t,e,i,s){const{interaction:a}=this;if(I$1.getDistance(e,t)>a.config.pointer.swipeDistance){const t=et$1(e,i,s);this.interaction.emit(t.type,t);}}drop(t,e,i){const s=tt$1(t,e,V.data);s.path=i,this.interaction.emit(j.DROP,s),this.interaction.emit(V.LEAVE,t,i);}dragReset(){V.list=V.data=this.draggableList=this.dragData=this.downData=this.dragOverPath=this.dragEnterPath=null;}checkDragEndAnimate(t,e){return !1}animate(t,e){}checkDragOut(t){}autoMoveOnDragOut(t){}autoMoveCancel(){}destroy(){this.dragReset();}};const st$1=xt$2.get("emit");const at$1=["move","zoom","rotate","key"];function rt$1(t,e,i,s,a){if(at$1.some((t=>e.startsWith(t)))&&t.__.hitChildren&&!ht$1(t,a)){let r;for(let n=0,h=t.children.length;n<h;n++)r=t.children[n],!i.path.has(r)&&r.__.hittable&&nt$1(r,e,i,s,a);}}function nt$1(t,i,s,a,r){if(t.destroyed)return !1;if(t.__.hitSelf&&!ht$1(t,r)&&(St$1.updateEventStyle&&!a&&St$1.updateEventStyle(t,i),t.hasEvent(i,a))){s.phase=a?1:t===s.target?2:3;const e=Lt$2.get(i,s);if(t.emitEvent(e,a),e.isStop)return !0}return !1}function ht$1(t,e){return e&&e.has(t)}const ot$1={wheel:{zoomSpeed:.5,moveSpeed:.5,rotateSpeed:.5,delta:{x:20,y:8}},pointer:{hitRadius:5,tapTime:120,longPressTime:800,transformTime:500,hover:!0,dragHover:!0,dragDistance:2,swipeDistance:20},touch:{preventDefault:"auto"},multiTouch:{},move:{autoDistance:2},zoom:{},cursor:!0,keyEvent:!0},{pathHasEventType:dt$1,pathCanDrag:lt$1,pathHasOutside:gt$1}=q$1;let ct$1 = class ct{get dragging(){return this.dragger.dragging}get transforming(){return this.transformer.transforming}get moveMode(){return !0===this.m.drag||this.isHoldSpaceKey||this.isHoldMiddleKey||this.isHoldRightKey&&this.dragger.moving||this.isDragEmpty}get canHover(){return this.p.hover&&!this.config.mobile}get isDragEmpty(){return this.m.dragEmpty&&this.isRootPath(this.hoverData)&&(!this.downData||this.isRootPath(this.downData))}get isMobileDragEmpty(){return this.m.dragEmpty&&!this.canHover&&this.downData&&this.isTreePath(this.downData)}get isHoldMiddleKey(){return this.m.holdMiddleKey&&this.downData&&I.middle(this.downData)}get isHoldRightKey(){return this.m.holdRightKey&&this.downData&&I.right(this.downData)}get isHoldSpaceKey(){return this.m.holdSpaceKey&&B.isHoldSpaceKey()}get m(){return this.config.move}get p(){return this.config.pointer}get hitRadius(){return this.p.hitRadius}constructor(t,e,i,s){this.config=Mt$2.clone(ot$1),this.tapCount=0,this.downKeyMap={},this.target=t,this.canvas=e,this.selector=i,this.defaultPath=new da(t),this.createTransformer(),this.dragger=new it$1(this),s&&(this.config=Mt$2.default(s,this.config)),this.__listenEvents();}start(){this.running=!0;}stop(){this.running=!1;}receive(t){}pointerDown(t,e){t||(t=this.hoverData),t&&(I.defaultLeft(t),this.updateDownData(t),this.checkPath(t,e),this.downTime=Date.now(),this.emit(F.BEFORE_DOWN,t),this.emit(F.DOWN,t),I.left(t)&&(this.tapWait(),this.longPressWait(t)),this.waitRightTap=I.right(t),this.dragger.setDragData(t),this.isHoldRightKey||this.updateCursor(t));}pointerMove(t){if(t||(t=this.hoverData),!t)return;const{downData:e}=this;e&&I.defaultLeft(t);(this.canvas.bounds.hitPoint(t)||e)&&(this.pointerMoveReal(t),e&&this.dragger.checkDragOut(t));}pointerMoveReal(t){if(this.emit(F.BEFORE_MOVE,t,this.defaultPath),this.downData){const e=I$1.getDistance(this.downData,t)>this.p.dragDistance;e&&(this.waitTap&&this.pointerWaitCancel(),this.waitRightTap=!1),this.dragger.checkDrag(t,e);}this.dragger.moving||(this.updateHoverData(t),this.checkPath(t),this.emit(F.MOVE,t),this.pointerHover(t),this.dragging&&(this.dragger.dragOverOrOut(t),this.dragger.dragEnterOrLeave(t))),this.updateCursor(this.downData||t);}pointerUp(t){const{downData:e}=this;if(t||(t=e),!e)return;I.defaultLeft(t),t.multiTouch=e.multiTouch,this.findPath(t);const i=Object.assign(Object.assign({},t),{path:t.path.clone()});t.path.addList(e.path.list),this.checkPath(t),this.downData=null,this.emit(F.BEFORE_UP,t),this.emit(F.UP,t),this.touchLeave(t),t.isCancel||(this.tap(t),this.menuTap(t)),this.dragger.dragEnd(t),this.updateCursor(i);}pointerCancel(){const t=Object.assign({},this.dragger.dragData);t.isCancel=!0,this.pointerUp(t);}menu(t){this.findPath(t),this.emit(F.MENU,t),this.waitMenuTap=!0,!this.downData&&this.waitRightTap&&this.menuTap(t);}menuTap(t){this.waitRightTap&&this.waitMenuTap&&(this.emit(F.MENU_TAP,t),this.waitRightTap=this.waitMenuTap=!1);}createTransformer(){}move(t){}zoom(t){}rotate(t){}transformEnd(){}wheel(t){}multiTouch(t,e){}keyDown(t){if(!this.config.keyEvent)return;const{code:e}=t;this.downKeyMap[e]||(this.downKeyMap[e]=!0,B.setDownCode(e),this.emit(Z$1.HOLD,t,this.defaultPath),this.moveMode&&(this.cancelHover(),this.updateCursor())),this.emit(Z$1.DOWN,t,this.defaultPath);}keyUp(t){if(!this.config.keyEvent)return;const{code:e}=t;this.downKeyMap[e]=!1,B.setUpCode(e),this.emit(Z$1.UP,t,this.defaultPath),"grab"===this.cursor&&this.updateCursor();}pointerHover(t){!this.canHover||this.dragging&&!this.p.dragHover||(t.path||(t.path=new da),this.pointerOverOrOut(t),this.pointerEnterOrLeave(t));}pointerOverOrOut(t){const{path:e}=t,{overPath:i}=this;this.overPath=e,i?e.indexAt(0)!==i.indexAt(0)&&(this.emit(F.OUT,t,i),this.emit(F.OVER,t,e)):this.emit(F.OVER,t,e);}pointerEnterOrLeave(t){let{path:e}=t;this.downData&&!this.moveMode&&(e=e.clone(),this.downData.path.forEach((t=>e.add(t))));const{enterPath:i}=this;this.enterPath=e,this.emit(F.LEAVE,t,i,e),this.emit(F.ENTER,t,e,i);}touchLeave(t){"touch"===t.pointerType&&this.enterPath&&(this.emit(F.LEAVE,t),this.dragger.dragging&&this.emit(j.LEAVE,t));}tap(t){const{pointer:e}=this.config,i=this.longTap(t);if(!e.tapMore&&i)return;if(!this.waitTap)return;e.tapMore&&this.emitTap(t);const s=Date.now()-this.downTime,a=[F.DOUBLE_TAP,F.DOUBLE_CLICK].some((e=>dt$1(t.path,e)));s<e.tapTime+50&&a?(this.tapCount++,2===this.tapCount?(this.tapWaitCancel(),this.emitDoubleTap(t)):(clearTimeout(this.tapTimer),this.tapTimer=setTimeout((()=>{e.tapMore||(this.tapWaitCancel(),this.emitTap(t));}),e.tapTime))):e.tapMore||(this.tapWaitCancel(),this.emitTap(t));}findPath(t,e){const{hitRadius:i,through:s}=this.p,{bottomList:a}=this,r=this.selector.getByPoint(t,i,Object.assign({bottomList:a,name:t.type},e||{through:s}));return r.throughPath&&(t.throughPath=r.throughPath),t.path=r.path,r.path}isRootPath(t){return t&&t.path.list[0].isLeafer}isTreePath(t){const e=this.target.app;return !(!e||!e.isApp)&&(e.editor&&!t.path.has(e.editor)&&t.path.has(e.tree)&&!t.target.syncEventer)}checkPath(t,e){(e||this.moveMode&&!gt$1(t.path))&&(t.path=this.defaultPath);}canMove(t){return t&&(this.moveMode||"auto"===this.m.drag&&!lt$1(t.path))&&!gt$1(t.path)}isDrag(t){return this.dragger.getList().has(t)}isPress(t){return this.downData&&this.downData.path.has(t)}isHover(t){return this.enterPath&&this.enterPath.has(t)}isFocus(t){return this.focusData===t}cancelHover(){const{hoverData:t}=this;t&&(t.path=this.defaultPath,this.pointerHover(t));}updateDownData(t,e,i){const{downData:s}=this;!t&&s&&(t=s),t&&(this.findPath(t,e),i&&s&&t.path.addList(s.path.list),this.downData=t);}updateHoverData(t){t||(t=this.hoverData),t&&(this.findPath(t,{exclude:this.dragger.getList(!1,!0),name:F.MOVE}),this.hoverData=t);}updateCursor(t){if(!this.config.cursor||!this.canHover)return;if(t||(this.updateHoverData(),t=this.downData||this.hoverData),this.dragger.moving)return this.setCursor("grabbing");if(this.canMove(t))return this.setCursor(this.downData?"grabbing":"grab");if(!t)return;let e,i;const{path:s}=t;for(let t=0,a=s.length;t<a&&(e=s.list[t],i=e.syncEventer&&e.syncEventer.cursor||e.cursor,!i);t++);this.setCursor(i);}setCursor(t){this.cursor=t;}getLocal(t,e){const i=this.canvas.getClientBounds(e);return {x:t.clientX-i.x,y:t.clientY-i.y}}emitTap(t){this.emit(F.TAP,t),this.emit(F.CLICK,t);}emitDoubleTap(t){this.emit(F.DOUBLE_TAP,t),this.emit(F.DOUBLE_CLICK,t);}pointerWaitCancel(){this.tapWaitCancel(),this.longPressWaitCancel();}tapWait(){clearTimeout(this.tapTimer),this.waitTap=!0;}tapWaitCancel(){clearTimeout(this.tapTimer),this.waitTap=!1,this.tapCount=0;}longPressWait(t){clearTimeout(this.longPressTimer),this.longPressTimer=setTimeout((()=>{this.longPressed=!0,this.emit(F.LONG_PRESS,t);}),this.p.longPressTime);}longTap(t){let e;return this.longPressed&&(this.emit(F.LONG_TAP,t),(dt$1(t.path,F.LONG_TAP)||dt$1(t.path,F.LONG_PRESS))&&(e=!0)),this.longPressWaitCancel(),e}longPressWaitCancel(){clearTimeout(this.longPressTimer),this.longPressed=!1;}__onResize(){const{dragOut:t}=this.m;this.shrinkCanvasBounds=new ht$2(this.canvas.bounds),this.shrinkCanvasBounds.spread(-("number"==typeof t?t:2));}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(Un.RESIZE,this.__onResize,this)],t.once(Vn.READY,(()=>this.__onResize()));}__removeListenEvents(){this.target.off_(this.__eventIds),this.__eventIds.length=0;}emit(t,e,i,s){this.running&&function(t,e,i,s){if(!i&&!e.path)return;let a;e.type=t,i?e=Object.assign(Object.assign({},e),{path:i}):i=e.path,e.target=i.indexAt(0);try{for(let r=i.length-1;r>-1;r--){if(a=i.list[r],nt$1(a,t,e,!0,s))return;a.isApp&&rt$1(a,t,e,!0,s);}for(let r=0,n=i.length;r<n;r++)if(a=i.list[r],a.isApp&&rt$1(a,t,e,!1,s),nt$1(a,t,e,!1,s))return}catch(t){st$1.error(t);}}(t,e,i,s);}destroy(){this.__eventIds.length&&(this.stop(),this.__removeListenEvents(),this.dragger.destroy(),this.transformer&&this.transformer.destroy(),this.downData=this.overPath=this.enterPath=null);}};let ut$1 = class ut{static set(t,e){this.custom[t]=e;}static get(t){return this.custom[t]}};ut$1.custom={};let pt$1 = class pt extends Et$3{constructor(){super(...arguments),this.maxTotal=1e3,this.pathList=new da,this.pixelList=new da;}getPixelType(t,e$1){return this.__autoClear(),this.pixelList.add(t),e.hitCanvas(e$1)}getPathType(t){return this.__autoClear(),this.pathList.add(t),e.hitCanvas()}clearImageType(){this.__clearLeafList(this.pixelList);}clearPathType(){this.__clearLeafList(this.pathList);}__clearLeafList(t){t.length&&(t.forEach((t=>{t.__hitCanvas&&(t.__hitCanvas.destroy(),t.__hitCanvas=null);})),t.reset());}__autoClear(){this.pathList.length+this.pixelList.length>this.maxTotal&&this.clear();}clear(){this.clearPathType(),this.clearImageType();}};const{toInnerRadiusPointOf:_t$1,copy:vt$1,setRadius:mt$1}=I$1,ft$1={},yt$1=Ko.prototype;yt$1.__hitWorld=function(t){if(!this.__.hitSelf)return !1;this.__.hitRadius&&(vt$1(ft$1,t),mt$1(t=ft$1,this.__.hitRadius)),_t$1(t,this.__world,ft$1);const{width:e,height:i}=this.__world,s=e<10&&i<10;if(this.__.hitBox||s){if(it$2.hitRadiusPoint(this.__layout.boxBounds,ft$1))return !0;if(s)return !1}return !this.__layout.hitCanvasChanged&&this.__hitCanvas||(this.__updateHitCanvas(),this.__layout.boundsChanged||(this.__layout.hitCanvasChanged=!1)),this.__hit(ft$1)},yt$1.__hitFill=function(t){var e;return null===(e=this.__hitCanvas)||void 0===e?void 0:e.hitFill(t,this.__.windingRule)},yt$1.__hitStroke=function(t,e){var i;return null===(i=this.__hitCanvas)||void 0===i?void 0:i.hitStroke(t,e)},yt$1.__hitPixel=function(t){var e;return null===(e=this.__hitCanvas)||void 0===e?void 0:e.hitPixel(t,this.__layout.renderBounds,this.__hitCanvas.hitScale)},yt$1.__drawHitPath=function(t){t&&this.__drawRenderPath(t);};const Et$1=new X$2,Dt$1=$t$1.prototype;Dt$1.__updateHitCanvas=function(){const t$1=this.__,{hitCanvasManager:e}=this.leafer,i=(t$1.__pixelFill||t$1.__isCanvas)&&"pixel"===t$1.hitFill,a=t$1.__pixelStroke&&"pixel"===t$1.hitStroke,r=i||a;this.__hitCanvas||(this.__hitCanvas=r?e.getPixelType(this,{contextSettings:{willReadFrequently:!0}}):e.getPathType(this));const n=this.__hitCanvas;if(r){const{renderBounds:e}=this.__layout,r=t.image.hitCanvasSize,h=n.hitScale=lt$3.set(0,0,r,r).getFitMatrix(e).a,{x:o,y:d,width:l,height:g}=lt$3.set(e).scale(h);n.resize({width:l,height:g,pixelRatio:1}),n.clear(),pi$1.patternLocked=!0,this.__renderShape(n,{matrix:Et$1.setWith(this.__world).scaleWith(1/h).invertWith().translate(-o,-d)},!i,!a),pi$1.patternLocked=!1,n.resetTransform(),t$1.__isHitPixel=!0;}else t$1.__isHitPixel&&(t$1.__isHitPixel=!1);this.__drawHitPath(n),n.setStrokeOptions(t$1);},Dt$1.__hit=function(t$1){"miniapp"===t.name&&this.__drawHitPath(this.__hitCanvas);const e=this.__;if(e.__isHitPixel&&this.__hitPixel(t$1))return !0;const{hitFill:i}=e,s=(e.fill||e.__isCanvas)&&("path"===i||"pixel"===i&&!(e.__pixelFill||e.__isCanvas))||"all"===i;if(s&&this.__hitFill(t$1))return !0;const{hitStroke:a,__strokeWidth:r}=e,n=e.stroke&&("path"===a||"pixel"===a&&!e.__pixelStroke)||"all"===a;if(!s&&!n)return !1;const h=2*t$1.radiusX;let o=h;if(n)switch(e.strokeAlign){case"inside":if(o+=2*r,!s&&this.__hitFill(t$1)&&this.__hitStroke(t$1,o))return !0;o=h;break;case"center":o+=r;break;case"outside":if(o+=2*r,!s){if(!this.__hitFill(t$1)&&this.__hitStroke(t$1,o))return !0;o=h;}}return !!o&&this.__hitStroke(t$1,o)};const Pt$1=$t$1.prototype,wt$1=ee$1.prototype,Tt$1=_e$1.prototype;wt$1.__updateHitCanvas=Tt$1.__updateHitCanvas=function(){this.stroke||this.cornerRadius||(this.fill||this.__.__isCanvas)&&"pixel"===this.hitFill||"all"===this.hitStroke?Pt$1.__updateHitCanvas.call(this):this.__hitCanvas&&(this.__hitCanvas=null);},wt$1.__hitFill=Tt$1.__hitFill=function(t){return this.__hitCanvas?Pt$1.__hitFill.call(this,t):it$2.hitRadiusPoint(this.__layout.boxBounds,t)},Kt$1.prototype.pick=function(t$1,e$1){return this.leafer||this.updateLayout(),e$1||(e$1=Yt$2),function(t$1){return t$1.leafer?t$1.leafer.selector:t.selector||(t.selector=e.selector())}(this).getByPoint(t$1,e$1.hitRadius||0,Object.assign(Object.assign({},e$1),{target:this}))};const Ot$1=Zt$2.prototype;Ot$1.hitFill=function(t,e){return e?this.context.isPointInPath(t.x,t.y,e):this.context.isPointInPath(t.x,t.y)},Ot$1.hitStroke=function(t,e){return this.strokeWidth=e,this.context.isPointInStroke(t.x,t.y)},Ot$1.hitPixel=function(t,e,i=1){let{x:s,y:a,radiusX:r,radiusY:n}=t;e&&(s-=e.x,a-=e.y),lt$3.set(s-r,a-n,2*r,2*n).scale(i).ceil();const{data:h}=this.context.getImageData(lt$3.x,lt$3.y,lt$3.width||1,lt$3.height||1);for(let t=0,e=h.length;t<e;t+=4)if(h[t+3]>0)return !0;return h[3]>0};

const X=xt$2.get("LeaferCanvas");class H extends Zt$2{set zIndex(t){const{style:e}=this.view;e.zIndex=t,this.setAbsolute(this.view);}set childIndex(t){const{view:e,parentView:i}=this;if(e&&i){const s=i.children[t];s?(this.setAbsolute(s),i.insertBefore(e,s)):i.appendChild(s);}}init(){const{config:t$1}=this,e=t$1.view||t$1.canvas;e?this.__createViewFrom(e):this.__createView();const{style:s}=this.view;if(s.display||(s.display="block"),this.parentView=this.view.parentElement,this.parentView){const t=this.parentView.style;t.webkitUserSelect=t.userSelect="none";}t.syncDomFont&&!this.parentView&&(s.display="none",document.body.appendChild(this.view)),this.__createContext(),this.autoLayout||this.resize(t$1);}set backgroundColor(t){this.view.style.backgroundColor=t;}get backgroundColor(){return this.view.style.backgroundColor}set hittable(t){this.view.style.pointerEvents=t?"auto":"none";}get hittable(){return "none"!==this.view.style.pointerEvents}__createView(){this.view=document.createElement("canvas");}__createViewFrom(t){let e="string"==typeof t?document.getElementById(t):t;if(e)if(e instanceof HTMLCanvasElement)this.view=e;else {let t=e;if(e===window||e===document){const e=document.createElement("div"),{style:i}=e;i.position="absolute",i.top=i.bottom=i.left=i.right="0px",document.body.appendChild(e),t=e;}this.__createView();const i=this.view;t.hasChildNodes()&&(this.setAbsolute(i),t.style.position||(t.style.position="relative")),t.appendChild(i);}else X.error(`no id: ${t}`),this.__createView();}setAbsolute(t){const{style:e}=t;e.position="absolute",e.top=e.left="0px";}updateViewSize(){const{width:t,height:e,pixelRatio:i}=this,{style:s}=this.view;s.width=t+"px",s.height=e+"px",this.view.width=Math.ceil(t*i),this.view.height=Math.ceil(e*i);}updateClientBounds(){this.view.parentElement&&(this.clientBounds=this.view.getBoundingClientRect());}startAutoLayout(t$1,e){if(this.resizeListener=e,t$1){this.autoBounds=t$1;try{this.resizeObserver=new ResizeObserver((t=>{this.updateClientBounds();for(const e of t)this.checkAutoBounds(e.contentRect);}));const t=this.parentView;t?(this.resizeObserver.observe(t),this.checkAutoBounds(t.getBoundingClientRect())):(this.checkAutoBounds(this.view),X.warn("no parent"));}catch(t){this.imitateResizeObserver();}}else window.addEventListener("resize",this.windowListener=()=>{const t$1=t.devicePixelRatio;if(this.pixelRatio!==t$1){const{width:e,height:i}=this;this.emitResize({width:e,height:i,pixelRatio:t$1});}});}imitateResizeObserver(){this.autoLayout&&(this.parentView&&this.checkAutoBounds(this.parentView.getBoundingClientRect()),t.requestRender(this.imitateResizeObserver.bind(this)));}checkAutoBounds(t$1){const e=this.view,{x:s,y:n,width:o,height:r}=this.autoBounds.getBoundsFrom(t$1),a={width:o,height:r,pixelRatio:t.devicePixelRatio};if(!this.isSameSize(a)){const{style:t}=e;t.marginLeft=s+"px",t.marginTop=n+"px",this.emitResize(a);}}stopAutoLayout(){this.autoLayout=!1,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeListener=this.resizeObserver=null;}emitResize(t){const e={};Mt$2.copyAttrs(e,this,Qt$2),this.resize(t),this.resizeListener&&void 0!==this.width&&this.resizeListener(new Un(t,e));}unrealCanvas(){if(!this.unreal&&this.parentView){const t=this.view;t&&t.remove(),this.view=this.parentView,this.unreal=!0;}}destroy(){if(this.view){if(this.stopAutoLayout(),this.windowListener&&(window.removeEventListener("resize",this.windowListener),this.windowListener=null),!this.unreal){const t=this.view;t.parentElement&&t.remove();}super.destroy();}}}hi$1(CanvasRenderingContext2D.prototype),hi$1(Path2D.prototype);const{mineType:N,fileType:q}=li$1;function K(t$1,e$1){t.origin={createCanvas(t,e){const i=document.createElement("canvas");return i.width=t,i.height=e,i},canvasToDataURL:(t,e,i)=>{const s=N(e),n=t.toDataURL(s,i);return "image/bmp"===s?n.replace("image/png;","image/bmp;"):n},canvasToBolb:(t,e,i)=>new Promise((s=>t.toBlob(s,N(e),i))),canvasSaveAs:(t$1,e,s)=>{const n=t$1.toDataURL(N(q(e)),s);return t.origin.download(n,e)},download:(t,e)=>new Promise((i=>{let s=document.createElement("a");s.href=t,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),i();})),loadImage:t$1=>new Promise(((e,s)=>{const n=new t.origin.Image,{crossOrigin:o}=t.image;o&&(n.setAttribute("crossOrigin",o),n.crossOrigin=o),n.onload=()=>{e(n);},n.onerror=t=>{s(t);},n.src=t.image.getRealURL(t$1);})),Image:Image,PointerEvent:PointerEvent,DragEvent:DragEvent},t.event={stopDefault(t){t.preventDefault();},stopNow(t){t.stopImmediatePropagation();},stop(t){t.stopPropagation();}},t.canvas=e.canvas(),t.conicGradientSupport=!!t.canvas.context.createConicGradient;}Object.assign(e,{canvas:(t,e)=>new H(t,e),image:t=>new mi$1(t)}),t.name="web",t.isMobile="ontouchstart"in window,t.requestRender=function(t){window.requestAnimationFrame(t);},xi$1(t,"devicePixelRatio",{get:()=>devicePixelRatio});const{userAgent:Q}=navigator;Q.indexOf("Firefox")>-1?(t.conicGradientRotate90=!0,t.intWheelDeltaY=!0,t.syncDomFont=!0):Q.indexOf("Safari")>-1&&-1===Q.indexOf("Chrome")&&(t.fullImageShadow=!0),Q.indexOf("Windows")>-1?(t.os="Windows",t.intWheelDeltaY=!0):Q.indexOf("Mac")>-1?t.os="Mac":Q.indexOf("Linux")>-1&&(t.os="Linux");class ${get childrenChanged(){return this.hasAdd||this.hasRemove||this.hasVisible}get updatedList(){if(this.hasRemove){const t=new da;return this.__updatedList.list.forEach((e=>{e.leafer&&t.add(e);})),t}return this.__updatedList}constructor(t,e){this.totalTimes=0,this.config={},this.__updatedList=new da,this.target=t,e&&(this.config=Mt$2.default(e,this.config)),this.__listenEvents();}start(){this.disabled||(this.running=!0);}stop(){this.running=!1;}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0;}update(){this.changed=!0,this.running&&this.target.emit(qn.REQUEST);}__onAttrChange(t){this.__updatedList.add(t.target),this.update();}__onChildEvent(t){t.type===zn.ADD?(this.hasAdd=!0,this.__pushChild(t.child)):(this.hasRemove=!0,this.__updatedList.add(t.parent)),this.update();}__pushChild(t){this.__updatedList.add(t),t.isBranch&&this.__loopChildren(t);}__loopChildren(t){const{children:e}=t;for(let t=0,i=e.length;t<i;t++)this.__pushChild(e[t]);}__onRquestData(){this.target.emitEvent(new Gn(Gn.DATA,{updatedList:this.updatedList})),this.__updatedList=new da,this.totalTimes++,this.changed=!1,this.hasVisible=!1,this.hasRemove=!1,this.hasAdd=!1;}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(Fn.CHANGE,this.__onAttrChange,this),t.on_([zn.ADD,zn.REMOVE],this.__onChildEvent,this),t.on_(Gn.REQUEST,this.__onRquestData,this)];}__removeListenEvents(){this.target.off_(this.__eventIds);}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=null,this.__updatedList=null);}}const{updateAllMatrix:Z,updateBounds:J,updateAllWorldOpacity:tt}=yn,{pushAllChildBranch:et,pushAllParent:it}=On;const{worldBounds:st}=kn,nt={x:0,y:0,width:1e5,height:1e5};class ot{constructor(t){this.updatedBounds=new ht$2,this.beforeBounds=new ht$2,this.afterBounds=new ht$2,t instanceof Array&&(t=new da(t)),this.updatedList=t;}setBefore(){this.beforeBounds.setListWithFn(this.updatedList.list,st);}setAfter(){const{list:t}=this.updatedList;t.some((t=>t.noBounds))?this.afterBounds.set(nt):this.afterBounds.setListWithFn(t,st),this.updatedBounds.setList([this.beforeBounds,this.afterBounds]);}merge(t){this.updatedList.addList(t.updatedList.list),this.beforeBounds.add(t.beforeBounds),this.afterBounds.add(t.afterBounds),this.updatedBounds.add(t.updatedBounds);}destroy(){this.updatedList=null;}}const{updateAllMatrix:rt,updateAllChange:at}=yn,ht=xt$2.get("Layouter");class lt{constructor(t,e){this.totalTimes=0,this.config={},this.__levelList=new ua,this.target=t,e&&(this.config=Mt$2.default(e,this.config)),this.__listenEvents();}start(){this.disabled||(this.running=!0);}stop(){this.running=!1;}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0;}layout(){if(!this.running)return;const{target:t}=this;this.times=0;try{t.emit(Hn.START),this.layoutOnce(),t.emitEvent(new Hn(Hn.END,this.layoutedBlocks,this.times));}catch(t){ht.error(t);}this.layoutedBlocks=null;}layoutAgain(){this.layouting?this.waitAgain=!0:this.layoutOnce();}layoutOnce(){return this.layouting?ht.warn("layouting"):this.times>3?ht.warn("layout max times"):(this.times++,this.totalTimes++,this.layouting=!0,this.target.emit(Gn.REQUEST),this.totalTimes>1?this.partLayout():this.fullLayout(),this.layouting=!1,void(this.waitAgain&&(this.waitAgain=!1,this.layoutOnce())))}partLayout(){var t;if(!(null===(t=this.__updatedList)||void 0===t?void 0:t.length))return;const e=Bt$2.start("PartLayout"),{target:i,__updatedList:s}=this,{BEFORE:n,LAYOUT:o,AFTER:r}=Hn,a=this.getBlocks(s);a.forEach((t=>t.setBefore())),i.emitEvent(new Hn(n,a,this.times)),this.extraBlock=null,s.sort(),function(t,e){let i;t.list.forEach((t=>{i=t.__layout,e.without(t)&&!i.proxyZoom&&(i.matrixChanged?(Z(t,!0),e.add(t),t.isBranch&&et(t,e),it(t,e)):i.boundsChanged&&(e.add(t),t.isBranch&&(t.__tempNumber=0),it(t,e)));}));}(s,this.__levelList),function(t){let e,i,s;t.sort(!0),t.levels.forEach((n=>{e=t.levelMap[n];for(let t=0,n=e.length;t<n;t++){if(i=e[t],i.isBranch&&i.__tempNumber){s=i.children;for(let t=0,e=s.length;t<e;t++)s[t].isBranch||J(s[t]);}J(i);}}));}(this.__levelList),function(t){let e;t.list.forEach((t=>{e=t.__layout,e.opacityChanged&&tt(t),e.stateStyleChanged&&setTimeout((()=>e.stateStyleChanged&&t.updateState())),t.__updateChange();}));}(s),this.extraBlock&&a.push(this.extraBlock),a.forEach((t=>t.setAfter())),i.emitEvent(new Hn(o,a,this.times)),i.emitEvent(new Hn(r,a,this.times)),this.addBlocks(a),this.__levelList.reset(),this.__updatedList=null,Bt$2.end(e);}fullLayout(){const t=Bt$2.start("FullLayout"),{target:e}=this,{BEFORE:i,LAYOUT:s,AFTER:n}=Hn,o=this.getBlocks(new da(e));e.emitEvent(new Hn(i,o,this.times)),lt.fullLayout(e),o.forEach((t=>{t.setAfter();})),e.emitEvent(new Hn(s,o,this.times)),e.emitEvent(new Hn(n,o,this.times)),this.addBlocks(o),Bt$2.end(t);}static fullLayout(t){rt(t,!0),t.isBranch?On.updateBounds(t):yn.updateBounds(t),at(t);}addExtra(t){if(!this.__updatedList.has(t)){const{updatedList:e,beforeBounds:i}=this.extraBlock||(this.extraBlock=new ot([]));e.length?i.add(t.__world):i.set(t.__world),e.add(t);}}createBlock(t){return new ot(t)}getBlocks(t){return [this.createBlock(t)]}addBlocks(t){this.layoutedBlocks?this.layoutedBlocks.push(...t):this.layoutedBlocks=t;}__onReceiveWatchData(t){this.__updatedList=t.data.updatedList;}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(Hn.REQUEST,this.layout,this),t.on_(Hn.AGAIN,this.layoutAgain,this),t.on_(Gn.DATA,this.__onReceiveWatchData,this)];}__removeListenEvents(){this.target.off_(this.__eventIds);}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.config=null);}}const ct=xt$2.get("Renderer");class dt{get needFill(){return !(this.canvas.allowBackgroundColor||!this.config.fill)}constructor(t,e,i){this.FPS=60,this.totalTimes=0,this.times=0,this.config={usePartRender:!0,maxFPS:60},this.target=t,this.canvas=e,i&&(this.config=Mt$2.default(i,this.config)),this.__listenEvents();}start(){this.running=!0,this.update(!1);}stop(){this.running=!1;}update(t=!0){this.changed||(this.changed=t),this.__requestRender();}requestLayout(){this.target.emit(Hn.REQUEST);}render(t){if(!this.running||!this.canvas.view)return this.update();const{target:e}=this;this.times=0,this.totalBounds=new ht$2,ct.log(e.innerName,"---\x3e");try{e.isApp||e.app.emit(qn.CHILD_START,e),this.emitRender(qn.START),this.renderOnce(t),this.emitRender(qn.END,this.totalBounds),pi$1.clearRecycled();}catch(t){this.rendering=!1,ct.error(t);}ct.log("-------------|");}renderAgain(){this.rendering?this.waitAgain=!0:this.renderOnce();}renderOnce(t){if(this.rendering)return ct.warn("rendering");if(this.times>3)return ct.warn("render max times");if(this.times++,this.totalTimes++,this.rendering=!0,this.changed=!1,this.renderBounds=new ht$2,this.renderOptions={},t)this.emitRender(qn.BEFORE),t();else {if(this.requestLayout(),this.ignore)return void(this.ignore=this.rendering=!1);this.emitRender(qn.BEFORE),this.config.usePartRender&&this.totalTimes>1?this.partRender():this.fullRender();}this.emitRender(qn.RENDER,this.renderBounds,this.renderOptions),this.emitRender(qn.AFTER,this.renderBounds,this.renderOptions),this.updateBlocks=null,this.rendering=!1,this.waitAgain&&(this.waitAgain=!1,this.renderOnce());}partRender(){const{canvas:t,updateBlocks:e}=this;e&&(this.mergeBlocks(),e.forEach((e=>{t.bounds.hit(e)&&!e.isEmpty()&&this.clipRender(e);})));}clipRender(e){const i=Bt$2.start("PartRender"),{canvas:s}=this,n=e.getIntersect(s.bounds),o=e.includes(this.target.__world),r=new ht$2(n);s.save(),o&&!xt$2.showRepaint?s.clear():(n.spread(10+1/this.canvas.pixelRatio).ceil(),s.clearWorld(n,!0),s.clipWorld(n,!0)),this.__render(n,o,r),s.restore(),Bt$2.end(i);}fullRender(){const t=Bt$2.start("FullRender"),{canvas:e}=this;e.save(),e.clear(),this.__render(e.bounds,!0),e.restore(),Bt$2.end(t);}__render(e,i,s){const n=e.includes(this.target.__world)?{includes:i}:{bounds:e,includes:i};this.needFill&&this.canvas.fillWorld(e,this.config.fill),xt$2.showRepaint&&this.canvas.strokeWorld(e,"red"),this.target.__render(this.canvas,n),this.renderBounds=s=s||e,this.renderOptions=n,this.totalBounds.isEmpty()?this.totalBounds=s:this.totalBounds.add(s),xt$2.showHitView&&this.renderHitView(n),xt$2.showBoundsView&&this.renderBoundsView(n),this.canvas.updateRender(s);}renderHitView(t){}renderBoundsView(t){}addBlock(t){this.updateBlocks||(this.updateBlocks=[]),this.updateBlocks.push(t);}mergeBlocks(){const{updateBlocks:t}=this;if(t){const e=new ht$2;e.setList(t),t.length=0,t.push(e);}}__requestRender(){if(this.requestTime)return;const t$1=this.requestTime=Date.now();t.requestRender((()=>{this.FPS=Math.min(60,Math.ceil(1e3/(Date.now()-t$1))),this.requestTime=0,this.running&&(this.changed&&this.canvas.view&&this.render(),this.target.emit(qn.NEXT));}));}__onResize(t){if(!this.canvas.unreal){if(t.bigger||!t.samePixelRatio){const{width:e,height:i}=t.old;if(!new ht$2(0,0,e,i).includes(this.target.__world)||this.needFill||!t.samePixelRatio)return this.addBlock(this.canvas.bounds),void this.target.forceUpdate("surface")}this.addBlock(new ht$2(0,0,1,1)),this.update();}}__onLayoutEnd(t){t.data&&t.data.map((t=>{let e;t.updatedList&&t.updatedList.list.some((t=>(e=!t.__world.width||!t.__world.height,e&&(t.isLeafer||ct.tip(t.innerName,": empty"),e=!t.isBranch||t.isBranchLeaf),e))),this.addBlock(e?this.canvas.bounds:t.updatedBounds);}));}emitRender(t,e,i){this.target.emitEvent(new qn(t,this.times,e,i));}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(qn.REQUEST,this.update,this),t.on_(Hn.END,this.__onLayoutEnd,this),t.on_(qn.AGAIN,this.renderAgain,this),t.on_(Un.RESIZE,this.__onResize,this)];}__removeListenEvents(){this.target.off_(this.__eventIds);}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.canvas=this.config=null);}}const{hitRadiusPoint:ut}=it$2;class pt{constructor(t,e){this.target=t,this.selector=e;}getByPoint(t,e,i){e||(e=0),i||(i={});const s=i.through||!1,n=i.ignoreHittable||!1,o=i.target||this.target;this.exclude=i.exclude||null,this.point={x:t.x,y:t.y,radiusX:e,radiusY:e},this.findList=new da(i.findList),i.findList||this.hitBranch(o);const{list:r}=this.findList,a=this.getBestMatchLeaf(r,i.bottomList,n),h=n?this.getPath(a):this.getHitablePath(a);return this.clear(),s?{path:h,target:a,throughPath:r.length?this.getThroughPath(r):h}:{path:h,target:a}}getBestMatchLeaf(t,e,i){if(t.length){let e;this.findList=new da;const{x:s,y:n}=this.point,o={x:s,y:n,radiusX:0,radiusY:0};for(let s=0,n=t.length;s<n;s++)if(e=t[s],(i||yn.worldHittable(e))&&(this.hitChild(e,o),this.findList.length))return this.findList.list[0]}if(e)for(let t=0,i=e.length;t<i;t++)if(this.hitChild(e[t].target,this.point,e[t].proxy),this.findList.length)return this.findList.list[0];return t[0]}getPath(t){const e=new da;for(;t;)e.add(t),t=t.parent;return this.target&&e.add(this.target),e}getHitablePath(t){const e=this.getPath(t&&t.hittable?t:null);let i,s=new da;for(let t=e.list.length-1;t>-1&&(i=e.list[t],i.__.hittable)&&(s.addAt(i,0),i.__.hitChildren);t--);return s}getThroughPath(t){const e=new da,i=[];for(let e=t.length-1;e>-1;e--)i.push(this.getPath(t[e]));let s,n,o;for(let t=0,r=i.length;t<r;t++){s=i[t],n=i[t+1];for(let t=0,i=s.length;t<i&&(o=s.list[t],!n||!n.has(o));t++)e.add(o);}return e}hitBranch(t){this.eachFind(t.children,t.__onlyHitMask);}eachFind(t,e){let i,s;const{point:n}=this;for(let o=t.length-1;o>-1;o--)i=t[o],!i.__.visible||e&&!i.__.mask||(s=!!i.__.hitRadius||ut(i.__world,n),i.isBranch?(s||i.__ignoreHitWorld)&&(this.eachFind(i.children,i.__onlyHitMask),i.isBranchLeaf&&this.hitChild(i,n)):s&&this.hitChild(i,n));}hitChild(t,e,i){if((!this.exclude||!this.exclude.has(t))&&t.__hitWorld(e)){const{parent:s}=t;if(s&&s.__hasMask&&!t.__.mask&&!s.children.some((t=>t.__.mask&&t.__hitWorld(e))))return;this.findList.add(i||t);}}clear(){this.point=null,this.findList=null,this.exclude=null;}destroy(){this.clear();}}class gt{constructor(t,e$1){this.config={},e$1&&(this.config=Mt$2.default(e$1,this.config)),this.picker=new pt(this.target=t,this),this.finder=e.finder&&e.finder();}getByPoint(t$1,e,s){return t.backgrounder&&this.target&&this.target.updateLayout(),this.picker.getByPoint(t$1,e,s)}getBy(t,e,i,s){return this.finder?this.finder.getBy(t,e,i,s):Ot$3.need("find")}destroy(){this.picker.destroy(),this.finder&&this.finder.destroy();}}Object.assign(e,{watcher:(t,e)=>new $(t,e),layouter:(t,e)=>new lt(t,e),renderer:(t,e,i)=>new dt(t,e,i),selector:(t,e)=>new gt(t,e)}),t.layout=lt.fullLayout;const ft={convert(t,e){const i=q$1.getBase(t),s=Object.assign(Object.assign({},i),{x:e.x,y:e.y,width:t.width,height:t.height,pointerType:t.pointerType,pressure:t.pressure});return "pen"===s.pointerType&&(s.tangentialPressure=t.tangentialPressure,s.tiltX=t.tiltX,s.tiltY=t.tiltY,s.twist=t.twist),s},convertMouse(t,e){const i=q$1.getBase(t);return Object.assign(Object.assign({},i),{x:e.x,y:e.y,width:1,height:1,pointerType:"mouse",pressure:.5})},convertTouch(t,e){const i=ft.getTouch(t),s=q$1.getBase(t);return Object.assign(Object.assign({},s),{x:e.x,y:e.y,width:1,height:1,pointerType:"touch",multiTouch:t.touches.length>1,pressure:i.force})},getTouch:t=>t.targetTouches[0]||t.changedTouches[0]},_t={convert(t){const e=q$1.getBase(t);return Object.assign(Object.assign({},e),{code:t.code,key:t.key})}},{pathCanDrag:wt}=q$1;class vt extends ct$1{__listenEvents(){super.__listenEvents();const t=this.view=this.canvas.view;this.viewEvents={pointerdown:this.onPointerDown,mousedown:this.onMouseDown,touchstart:this.onTouchStart,pointerleave:this.onPointerLeave,contextmenu:this.onContextMenu,wheel:this.onWheel,gesturestart:this.onGesturestart,gesturechange:this.onGesturechange,gestureend:this.onGestureend},this.windowEvents={pointermove:this.onPointerMove,pointerup:this.onPointerUp,pointercancel:this.onPointerCancel,mousemove:this.onMouseMove,mouseup:this.onMouseUp,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel,keydown:this.onKeyDown,keyup:this.onKeyUp,scroll:this.onScroll};const{viewEvents:e,windowEvents:i}=this;for(let i in e)e[i]=e[i].bind(this),t.addEventListener(i,e[i]);for(let t in i)i[t]=i[t].bind(this),window.addEventListener(t,i[t]);}__removeListenEvents(){super.__removeListenEvents();const{viewEvents:t,windowEvents:e}=this;for(let e in t)this.view.removeEventListener(e,t[e]),this.viewEvents={};for(let t in e)window.removeEventListener(t,e[t]),this.windowEvents={};}getTouches(t){const e=[];for(let i=0,s=t.length;i<s;i++)e.push(t[i]);return e}preventDefaultPointer(t){const{pointer:e}=this.config;e.preventDefault&&t.preventDefault();}preventDefaultWheel(t){const{wheel:e}=this.config;e.preventDefault&&t.preventDefault();}preventWindowPointer(t){return !this.downData&&t.target!==this.view}onKeyDown(t){this.keyDown(_t.convert(t));}onKeyUp(t){this.keyUp(_t.convert(t));}onContextMenu(t){this.config.pointer.preventDefaultMenu&&t.preventDefault(),this.menu(ft.convert(t,this.getLocal(t)));}onScroll(){this.canvas.updateClientBounds();}onPointerDown(t){this.preventDefaultPointer(t),this.config.pointer.touch||this.useMultiTouch||(this.usePointer||(this.usePointer=!0),this.pointerDown(ft.convert(t,this.getLocal(t))));}onPointerMove(t,e){if(this.config.pointer.touch||this.useMultiTouch||this.preventWindowPointer(t))return;this.usePointer||(this.usePointer=!0);const i=ft.convert(t,this.getLocal(t,!0));e?this.pointerHover(i):this.pointerMove(i);}onPointerLeave(t){this.onPointerMove(t,!0);}onPointerUp(t){this.downData&&this.preventDefaultPointer(t),this.config.pointer.touch||this.useMultiTouch||this.preventWindowPointer(t)||this.pointerUp(ft.convert(t,this.getLocal(t)));}onPointerCancel(){this.useMultiTouch||this.pointerCancel();}onMouseDown(t){this.preventDefaultPointer(t),this.useTouch||this.usePointer||this.pointerDown(ft.convertMouse(t,this.getLocal(t)));}onMouseMove(t){this.useTouch||this.usePointer||this.preventWindowPointer(t)||this.pointerMove(ft.convertMouse(t,this.getLocal(t,!0)));}onMouseUp(t){this.downData&&this.preventDefaultPointer(t),this.useTouch||this.usePointer||this.preventWindowPointer(t)||this.pointerUp(ft.convertMouse(t,this.getLocal(t)));}onMouseCancel(){this.useTouch||this.usePointer||this.pointerCancel();}onTouchStart(t){const e=ft.getTouch(t),i=this.getLocal(e,!0),{preventDefault:s}=this.config.touch;(!0===s||"auto"===s&&wt(this.findPath(i)))&&t.preventDefault(),this.multiTouchStart(t),this.usePointer||(this.touchTimer&&(window.clearTimeout(this.touchTimer),this.touchTimer=0),this.useTouch=!0,this.pointerDown(ft.convertTouch(t,i)));}onTouchMove(t){if(this.multiTouchMove(t),this.usePointer||this.preventWindowPointer(t))return;const e=ft.getTouch(t);this.pointerMove(ft.convertTouch(t,this.getLocal(e)));}onTouchEnd(t){if(this.multiTouchEnd(),this.usePointer||this.preventWindowPointer(t))return;this.touchTimer&&clearTimeout(this.touchTimer),this.touchTimer=setTimeout((()=>{this.useTouch=!1;}),500);const e=ft.getTouch(t);this.pointerUp(ft.convertTouch(t,this.getLocal(e)));}onTouchCancel(){this.usePointer||this.pointerCancel();}multiTouchStart(t){this.useMultiTouch=t.touches.length>1,this.touches=this.useMultiTouch?this.getTouches(t.touches):void 0,this.useMultiTouch&&this.pointerCancel();}multiTouchMove(t){if(this.useMultiTouch&&t.touches.length>1){const e=this.getTouches(t.touches),i=this.getKeepTouchList(this.touches,e);i.length>1&&(this.multiTouch(q$1.getBase(t),i),this.touches=e);}}multiTouchEnd(){this.touches=null,this.useMultiTouch=!1,this.transformEnd();}getKeepTouchList(t,e){let i;const s=[];return t.forEach((t=>{i=e.find((e=>e.identifier===t.identifier)),i&&s.push({from:this.getLocal(t),to:this.getLocal(i)});})),s}getLocalTouchs(t){return t.map((t=>this.getLocal(t)))}onWheel(t){this.preventDefaultWheel(t),this.wheel(Object.assign(Object.assign(Object.assign({},q$1.getBase(t)),this.getLocal(t)),{deltaX:t.deltaX,deltaY:t.deltaY}));}onGesturestart(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.lastGestureScale=1,this.lastGestureRotation=0);}onGesturechange(t){if(this.useMultiTouch)return;this.preventDefaultWheel(t);const e=q$1.getBase(t);Object.assign(e,this.getLocal(t));const i=t.scale/this.lastGestureScale,s=(t.rotation-this.lastGestureRotation)/Math.PI*180*(a.within(this.config.wheel.rotateSpeed,0,1)/4+.1);this.zoom(Object.assign(Object.assign({},e),{scale:i*i})),this.rotate(Object.assign(Object.assign({},e),{rotation:s})),this.lastGestureScale=t.scale,this.lastGestureRotation=t.rotation;}onGestureend(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.transformEnd());}setCursor(t){super.setCursor(t);const e=[];this.eachCursor(t,e),"object"==typeof e[e.length-1]&&e.push("default"),this.canvas.view.style.cursor=e.map((t=>"object"==typeof t?`url(${t.url}) ${t.x||0} ${t.y||0}`:t)).join(",");}eachCursor(t,e,i=0){if(i++,t instanceof Array)t.forEach((t=>this.eachCursor(t,e,i)));else {const s="string"==typeof t&&ut$1.get(t);s&&i<2?this.eachCursor(s,e,i):e.push(t);}}destroy(){this.view&&(super.destroy(),this.view=null,this.touches=null);}}function yt(t,e){let i;const{rows:s,decorationY:n,decorationHeight:o}=t.__.__textDrawData;for(let t=0,r=s.length;t<r;t++)i=s[t],i.text?e.fillText(i.text,i.x,i.y):i.data&&i.data.forEach((t=>{e.fillText(t.char,t.x,i.y);})),n&&e.fillRect(i.x,i.y+n,i.width,o);}function mt(t,e,i){const{strokeAlign:s}=e.__,n="string"!=typeof t;switch(s){case"center":i.setStroke(n?void 0:t,e.__.strokeWidth,e.__),n?Bt(t,!0,e,i):xt(e,i);break;case"inside":bt("inside",t,n,e,i);break;case"outside":bt("outside",t,n,e,i);}}function bt(t,e,i,s,n){const{__strokeWidth:o,__font:r}=s.__,a=n.getSameCanvas(!0,!0);a.setStroke(i?void 0:e,2*o,s.__),a.font=r,i?Bt(e,!0,s,a):xt(s,a),a.blendMode="outside"===t?"destination-out":"destination-in",yt(s,a),a.blendMode="normal",s.__worldFlipped?n.copyWorldByReset(a,s.__nowWorld):n.copyWorldToInner(a,s.__nowWorld,s.__layout.renderBounds),a.recycle(s.__nowWorld);}function xt(t,e){let i;const{rows:s,decorationY:n,decorationHeight:o}=t.__.__textDrawData;for(let t=0,r=s.length;t<r;t++)i=s[t],i.text?e.strokeText(i.text,i.x,i.y):i.data&&i.data.forEach((t=>{e.strokeText(t.char,t.x,i.y);})),n&&e.strokeRect(i.x,i.y+n,i.width,o);}function Bt(t,e,i,s){let n;for(let o=0,r=t.length;o<r;o++)n=t[o],n.image&&wt$2.checkImage(i,s,n,!1)||n.style&&(s.strokeStyle=n.style,n.blendMode?(s.saveBlendMode(n.blendMode),e?xt(i,s):s.stroke(),s.restoreBlendMode()):e?xt(i,s):s.stroke());}function Lt(t,e){t.__.dashPattern&&(e.beginPath(),t.__drawPathByData(e,t.__.__pathForArrow),e.dashPattern=null,e.stroke());}const{getSpread:Et,getOuterOf:kt,getByMove:Tt,getIntersectData:Rt}=it$2;let St;function Mt(t,e,i){if("object"!=typeof e||!1===e.visible||0===e.opacity)return;const{boxBounds:s}=i.__layout;switch(e.type){case"solid":let{type:n,blendMode:o,color:r,opacity:a}=e;return {type:n,blendMode:o,style:yt$2.string(r,a)};case"image":return wt$2.image(i,t,e,s,!St||!St[e.url]);case"linear":return xt$1.linearGradient(e,s);case"radial":return xt$1.radialGradient(e,s);case"angular":return xt$1.conicGradient(e,s);default:return void 0!==e.r?{type:"solid",style:yt$2.string(e)}:void 0}}const Ct={compute:function(t,e){const i=e.__,s=[];let n,o=i.__input[t];o instanceof Array||(o=[o]),St=wt$2.recycleImage(t,i);for(let i,n=0,r=o.length;n<r;n++)i=Mt(t,o[n],e),i&&s.push(i);i["_"+t]=s.length?s:void 0,s.length&&s[0].image&&(n=s[0].image.hasOpacityPixel),"fill"===t?i.__pixelFill=n:i.__pixelStroke=n;},fill:function(t,e,i){i.fillStyle=t,e.__.__font?yt(e,i):e.__.windingRule?i.fill(e.__.windingRule):i.fill();},fills:function(t,e,i){let s;const{windingRule:n,__font:o}=e.__;for(let r=0,a=t.length;r<a;r++)s=t[r],s.image&&wt$2.checkImage(e,i,s,!o)||s.style&&(i.fillStyle=s.style,s.transform?(i.save(),i.transform(s.transform),s.blendMode&&(i.blendMode=s.blendMode),o?yt(e,i):n?i.fill(n):i.fill(),i.restore()):s.blendMode?(i.saveBlendMode(s.blendMode),o?yt(e,i):n?i.fill(n):i.fill(),i.restoreBlendMode()):o?yt(e,i):n?i.fill(n):i.fill());},fillText:yt,stroke:function(t,e,i){const s=e.__,{__strokeWidth:n,strokeAlign:o,__font:r}=s;if(n)if(r)mt(t,e,i);else switch(o){case"center":i.setStroke(t,n,s),i.stroke(),s.__useArrow&&Lt(e,i);break;case"inside":i.save(),i.setStroke(t,2*n,s),s.windingRule?i.clip(s.windingRule):i.clip(),i.stroke(),i.restore();break;case"outside":const o=i.getSameCanvas(!0,!0);o.setStroke(t,2*n,s),e.__drawRenderPath(o),o.stroke(),s.windingRule?o.clip(s.windingRule):o.clip(),o.clearWorld(e.__layout.renderBounds),e.__worldFlipped?i.copyWorldByReset(o,e.__nowWorld):i.copyWorldToInner(o,e.__nowWorld,e.__layout.renderBounds),o.recycle(e.__nowWorld);}},strokes:function(t,e,i){const s=e.__,{__strokeWidth:n,strokeAlign:o,__font:r}=s;if(n)if(r)mt(t,e,i);else switch(o){case"center":i.setStroke(void 0,n,s),Bt(t,!1,e,i),s.__useArrow&&Lt(e,i);break;case"inside":i.save(),i.setStroke(void 0,2*n,s),s.windingRule?i.clip(s.windingRule):i.clip(),Bt(t,!1,e,i),i.restore();break;case"outside":const{renderBounds:o}=e.__layout,r=i.getSameCanvas(!0,!0);e.__drawRenderPath(r),r.setStroke(void 0,2*n,s),Bt(t,!1,e,r),s.windingRule?r.clip(s.windingRule):r.clip(),r.clearWorld(o),e.__worldFlipped?i.copyWorldByReset(r,e.__nowWorld):i.copyWorldToInner(r,e.__nowWorld,o),r.recycle(e.__nowWorld);}},strokeText:mt,drawTextStroke:xt,shape:function(t,e,i){const s=e.getSameCanvas(),n=t.__nowWorld;let o,r,a,h,{scaleX:l,scaleY:c}=n;if(l<0&&(l=-l),c<0&&(c=-c),e.bounds.includes(n))h=s,o=a=n;else {const{renderShapeSpread:s}=t.__layout,d=Rt(s?Et(e.bounds,l===c?s*l:[s*c,s*l]):e.bounds,n);r=e.bounds.getFitMatrix(d);let{a:u,d:p}=r;if(r.a<1&&(h=e.getSameCanvas(),t.__renderShape(h,i),l*=u,c*=p),a=kt(n,r),o=Tt(a,-r.e,-r.f),i.matrix){const{matrix:t}=i;r.multiply(t),u*=t.scaleX,p*=t.scaleY;}i=Object.assign(Object.assign({},i),{matrix:r.withScale(u,p)});}return t.__renderShape(s,i),{canvas:s,matrix:r,bounds:o,worldCanvas:h,shapeBounds:a,scaleX:l,scaleY:c}}};let Pt={};const{get:At,rotateOfOuter:Ot,translate:Wt,scaleOfOuter:Dt,scale:It,rotate:zt}=b;function Ft(t,e,i,s,n,o,r){const a=At();Wt(a,e.x+i,e.y+s),It(a,n,o),r&&Ot(a,{x:e.x+e.width/2,y:e.y+e.height/2},r),t.transform=a;}function jt(t,e,i,s,n,o,r){const a=At();Wt(a,e.x+i,e.y+s),n&&It(a,n,o),r&&zt(a,r),t.transform=a;}function Gt(t,e,i,s,n,o,r,a,h,l){const c=At();if(h)if("center"===l)Ot(c,{x:i/2,y:s/2},h);else switch(zt(c,h),h){case 90:Wt(c,s,0);break;case 180:Wt(c,i,s);break;case 270:Wt(c,0,i);}Pt.x=e.x+n,Pt.y=e.y+o,Wt(c,Pt.x,Pt.y),r&&Dt(c,Pt,r,a),t.transform=c;}const{get:Ut,translate:Vt}=b,Yt=new ht$2,Xt={},Ht={};function Nt(t,e,i,s){const{blendMode:n,sync:o}=i;n&&(t.blendMode=n),o&&(t.sync=o),t.data=qt(i,s,e);}function qt(t,e,i){let{width:s,height:n}=i;t.padding&&(e=Yt.set(e).shrink(t.padding)),"strench"===t.mode&&(t.mode="stretch");const{opacity:o,mode:r,align:a$1,offset:h,scale:l,size:c,rotation:d,repeat:u}=t,p=e.width===s&&e.height===n,g={mode:r},f="center"!==a$1&&(d||0)%180==90,_=f?n:s,w=f?s:n;let v,y,m=0,b=0;if(r&&"cover"!==r&&"fit"!==r)(l||c)&&(a.getScaleData(l,c,i,Ht),v=Ht.scaleX,y=Ht.scaleY);else if(!p||d){const t=e.width/_,i=e.height/w;v=y="fit"===r?Math.min(t,i):Math.max(t,i),m+=(e.width-s*v)/2,b+=(e.height-n*y)/2;}if(a$1){const t={x:m,y:b,width:_,height:w};v&&(t.width*=v,t.height*=y),yt$3.toPoint(a$1,t,e,Xt,!0),m+=Xt.x,b+=Xt.y;}switch(h&&(m+=h.x,b+=h.y),r){case"stretch":p||(s=e.width,n=e.height);break;case"normal":case"clip":(m||b||v||d)&&jt(g,e,m,b,v,y,d);break;case"repeat":(!p||v||d)&&Gt(g,e,s,n,m,b,v,y,d,a$1),u||(g.repeat="repeat");break;default:v&&Ft(g,e,m,b,v,y,d);}return g.transform||(e.x||e.y)&&(g.transform=Ut(),Vt(g.transform,e.x,e.y)),v&&"stretch"!==r&&(g.scaleX=v,g.scaleY=y),g.width=s,g.height=n,o&&(g.opacity=o),u&&(g.repeat="string"==typeof u?"x"===u?"repeat-x":"repeat-y":"repeat"),g}let Kt,Qt=new ht$2;const{isSame:$t}=it$2;function Zt(t,e,i,s,n,o){if("fill"===e&&!t.__.__naturalWidth){const e=t.__;if(e.__naturalWidth=s.width/e.pixelRatio,e.__naturalHeight=s.height/e.pixelRatio,e.__autoSide)return t.forceUpdate("width"),t.__proxyData&&(t.setProxyAttr("width",e.width),t.setProxyAttr("height",e.height)),!1}return n.data||Nt(n,s,i,o),!0}function Jt(t,e){ie(t,jn.LOAD,e);}function te(t,e){ie(t,jn.LOADED,e);}function ee(t,e,i){e.error=i,t.forceUpdate("surface"),ie(t,jn.ERROR,e);}function ie(t,e,i){t.hasEvent(e)&&t.emitEvent(new jn(e,i));}function se(t,e){const{leafer:i}=t;i&&i.viewReady&&(i.renderer.ignore=e);}const{get:ne,scale:oe,copy:re}=b,{ceil:ae,abs:he}=Math;function le(t$1,e,s){let{scaleX:n,scaleY:o}=pi$1.patternLocked?t$1.__world:t$1.__nowWorld;const r=n+"-"+o+"-"+s;if(e.patternId===r||t$1.destroyed)return !1;{n=he(n),o=he(o);const{image:t$1,data:a}=e;let h,l,{width:c,height:d,scaleX:u,scaleY:p,opacity:g,transform:f,repeat:_}=a;u&&(l=ne(),re(l,f),oe(l,1/u,1/p),n*=u,o*=p),n*=s,o*=s,c*=n,d*=o;const w=c*d;if(!_&&w>t.image.maxCacheSize)return !1;let v=t.image.maxPatternSize;if(!t$1.isSVG){const e=t$1.width*t$1.height;v>e&&(v=e);}w>v&&(h=Math.sqrt(w/v)),h&&(n/=h,o/=h,c/=h,d/=h),u&&(n/=u,o/=p),(f||1!==n||1!==o)&&(l||(l=ne(),f&&re(l,f)),oe(l,1/n,1/o));const y=t$1.getCanvas(ae(c)||1,ae(d)||1,g),m=t$1.getPattern(y,_||t.origin.noRepeat||"no-repeat",l,e);return e.style=m,e.patternId=r,!0}}function ce(t,e,i,s){return new(i||(i=Promise))((function(n,o){function r(t){try{h(s.next(t));}catch(t){o(t);}}function a(t){try{h(s.throw(t));}catch(t){o(t);}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e);}))).then(r,a);}h((s=s.apply(t,e||[])).next());}))}"function"==typeof SuppressedError&&SuppressedError;const{abs:de}=Math;const ue={image:function(t,e,i,s,n){let o,r;const a=pi$1.get(i);return Kt&&i===Kt.paint&&$t(s,Kt.boxBounds)?o=Kt.leafPaint:(o={type:i.type,image:a},Kt=a.use>1?{leafPaint:o,paint:i,boxBounds:Qt.set(s)}:null),(n||a.loading)&&(r={image:a,attrName:e,attrValue:i}),a.ready?(Zt(t,e,i,a,o,s),n&&(Jt(t,r),te(t,r))):a.error?n&&ee(t,r,a.error):(n&&(se(t,!0),Jt(t,r)),o.loadId=a.load((()=>{se(t,!1),t.destroyed||(Zt(t,e,i,a,o,s)&&(a.hasOpacityPixel&&(t.__layout.hitCanvasChanged=!0),t.forceUpdate("surface")),te(t,r)),o.loadId=null;}),(e=>{se(t,!1),ee(t,r,e),o.loadId=null;}))),o},checkImage:function(t$1,e,s,n){const{scaleX:o,scaleY:r}=pi$1.patternLocked?t$1.__world:t$1.__nowWorld,{pixelRatio:a}=e;if(!s.data||s.patternId===o+"-"+r+"-"+a&&!Rt$1.running)return !1;{const{data:h}=s;if(n)if(h.repeat)n=!1;else {let{width:t$1,height:e}=h;t$1*=de(o)*a,e*=de(r)*a,h.scaleX&&(t$1*=h.scaleX,e*=h.scaleY),n=t$1*e>t.image.maxCacheSize||Rt$1.running;}return n?(e.save(),t$1.windingRule?e.clip(t$1.windingRule):e.clip(),s.blendMode&&(e.blendMode=s.blendMode),h.opacity&&(e.opacity*=h.opacity),h.transform&&e.transform(h.transform),e.drawImage(s.image.view,0,0,h.width,h.height),e.restore(),!0):(!s.style||s.sync||Rt$1.running?le(t$1,s,a):s.patternTask||(s.patternTask=pi$1.patternTasker.add((()=>ce(this,void 0,void 0,(function*(){s.patternTask=null,e.bounds.hit(t$1.__nowWorld)&&le(t$1,s,a),t$1.forceUpdate("surface");}))),300)),!1)}},createPattern:le,recycleImage:function(t,e){const i=e["_"+t];if(i instanceof Array){let s,n,o,r;for(let a=0,h=i.length;a<h;a++)s=i[a].image,r=s&&s.url,r&&(n||(n={}),n[r]=!0,pi$1.recycle(s),s.loading&&(o||(o=e.__input&&e.__input[t]||[],o instanceof Array||(o=[o])),s.unload(i[a].loadId,!o.some((t=>t.url===r)))));return n}return null},createData:Nt,getPatternData:qt,fillOrFitMode:Ft,clipMode:jt,repeatMode:Gt},{toPoint:pe}=pt$3,ge={},fe={};function _e(t,e,i){if(e){let s;for(let n=0,o=e.length;n<o;n++)s=e[n],"string"==typeof s?t.addColorStop(n/(o-1),yt$2.string(s,i)):t.addColorStop(s.offset,yt$2.string(s.color,i));}}const{getAngle:we,getDistance:ve}=I$1,{get:ye,rotateOfOuter:me,scaleOfOuter:be}=b,{toPoint:xe}=pt$3,Be={},Le={};function Ee(t,e,i,s,n){let o;const{width:r,height:a}=t;if(r!==a||s){const t=we(e,i);o=ye(),n?(be(o,e,r/a*(s||1),1),me(o,e,t+90)):(be(o,e,1,r/a*(s||1)),me(o,e,t));}return o}const{getDistance:ke}=I$1,{toPoint:Te}=pt$3,Re={},Se={};const Me={linearGradient:function(t$1,e){let{from:s,to:n,type:o,blendMode:r,opacity:a}=t$1;pe(s||"top",e,ge),pe(n||"bottom",e,fe);const h=t.canvas.createLinearGradient(ge.x,ge.y,fe.x,fe.y);_e(h,t$1.stops,a);const l={type:o,style:h};return r&&(l.blendMode=r),l},radialGradient:function(t$1,e){let{from:s,to:n,type:o,opacity:r,blendMode:a,stretch:h}=t$1;xe(s||"center",e,Be),xe(n||"bottom",e,Le);const l=t.canvas.createRadialGradient(Be.x,Be.y,0,Be.x,Be.y,ve(Be,Le));_e(l,t$1.stops,r);const c={type:o,style:l},d=Ee(e,Be,Le,h,!0);return d&&(c.transform=d),a&&(c.blendMode=a),c},conicGradient:function(t$1,e){let{from:s,to:n,type:o,opacity:r,blendMode:a,stretch:h}=t$1;Te(s||"center",e,Re),Te(n||"bottom",e,Se);const l=t.conicGradientSupport?t.canvas.createConicGradient(0,Re.x,Re.y):t.canvas.createRadialGradient(Re.x,Re.y,0,Re.x,Re.y,ke(Re,Se));_e(l,t$1.stops,r);const c={type:o,style:l},d=Ee(e,Re,Se,h||1,t.conicGradientRotate90);return d&&(c.transform=d),a&&(c.blendMode=a),c},getTransform:Ee},{copy:Ce,toOffsetOutBounds:Pe}=it$2,Ae={},Oe={};function We(t$1,e,s,n){const{bounds:o,shapeBounds:r}=n;if(t.fullImageShadow){if(Ce(Ae,t$1.bounds),Ae.x+=e.x-r.x,Ae.y+=e.y-r.y,s){const{matrix:t}=n;Ae.x-=(o.x+(t?t.e:0)+o.width/2)*(s-1),Ae.y-=(o.y+(t?t.f:0)+o.height/2)*(s-1),Ae.width*=s,Ae.height*=s;}t$1.copyWorld(n.canvas,t$1.bounds,Ae);}else s&&(Ce(Ae,e),Ae.x-=e.width/2*(s-1),Ae.y-=e.height/2*(s-1),Ae.width*=s,Ae.height*=s),t$1.copyWorld(n.canvas,r,s?Ae:e);}const{toOffsetOutBounds:De}=it$2,Ie={};const ze={shadow:function(t,e,i){let s,n;const{__nowWorld:o,__layout:r}=t,{shadow:a}=t.__,{worldCanvas:h,bounds:l,shapeBounds:c,scaleX:d,scaleY:u}=i,p=e.getSameCanvas(),g=a.length-1;Pe(l,Oe),a.forEach(((a,f)=>{p.setWorldShadow(Oe.offsetX+a.x*d,Oe.offsetY+a.y*u,a.blur*d,yt$2.string(a.color)),n=a.spread?1+2*a.spread/(r.boxBounds.width+2*(r.strokeBoxSpread||0)):0,We(p,Oe,n,i),s=l,a.box&&(p.restore(),p.save(),h&&(p.copyWorld(p,l,o,"copy"),s=o),h?p.copyWorld(h,o,o,"destination-out"):p.copyWorld(i.canvas,c,l,"destination-out")),t.__worldFlipped?e.copyWorldByReset(p,s,o,a.blendMode):e.copyWorldToInner(p,s,r.renderBounds,a.blendMode),g&&f<g&&p.clearWorld(s,!0);})),p.recycle(s);},innerShadow:function(t,e,i){let s,n;const{__nowWorld:o,__layout:r}=t,{innerShadow:a}=t.__,{worldCanvas:h,bounds:l,shapeBounds:c,scaleX:d,scaleY:u}=i,p=e.getSameCanvas(),g=a.length-1;De(l,Ie),a.forEach(((a,f)=>{p.save(),p.setWorldShadow(Ie.offsetX+a.x*d,Ie.offsetY+a.y*u,a.blur*d),n=a.spread?1-2*a.spread/(r.boxBounds.width+2*(r.strokeBoxSpread||0)):0,We(p,Ie,n,i),p.restore(),h?(p.copyWorld(p,l,o,"copy"),p.copyWorld(h,o,o,"source-out"),s=o):(p.copyWorld(i.canvas,c,l,"source-out"),s=l),p.fillWorld(s,yt$2.string(a.color),"source-in"),t.__worldFlipped?e.copyWorldByReset(p,s,o,a.blendMode):e.copyWorldToInner(p,s,r.renderBounds,a.blendMode),g&&f<g&&p.clearWorld(s,!0);})),p.recycle(s);},blur:function(t,e,i){const{blur:s}=t.__;i.setWorldBlur(s*t.__nowWorld.a),i.copyWorldToInner(e,t.__nowWorld,t.__layout.renderBounds),i.filter="none";},backgroundBlur:function(t,e,i){}},{excludeRenderBounds:Fe}=kn;function je(t,e,i,s,n,o){switch(e){case"grayscale":n.useGrayscaleAlpha(t.__nowWorld);case"alpha":!function(t,e,i,s){const n=t.__nowWorld;i.resetTransform(),i.opacity=1,i.useMask(s,n),s.recycle(n),Ue(t,e,i,1);}(t,i,s,n);break;case"opacity-path":Ue(t,i,s,o);break;case"path":i.restore();}}function Ge(t){return t.getSameCanvas(!1,!0)}function Ue(t,e,i,s){const n=t.__nowWorld;e.resetTransform(),e.opacity=s,e.copyWorld(i,n),i.recycle(n);}Kt$1.prototype.__renderMask=function(t,e){let i,s,n,o,r,a;const{children:h}=this;for(let l=0,c=h.length;l<c;l++)i=h[l],a=i.__.mask,a&&(r&&(je(this,r,t,n,s,o),s=n=null),"path"===a||"clipping-path"===a?(i.opacity<1?(r="opacity-path",o=i.opacity,n||(n=Ge(t))):(r="path",t.save()),i.__clip(n||t,e)):(r="grayscale"===a?"grayscale":"alpha",s||(s=Ge(t)),n||(n=Ge(t)),i.__render(s,e)),"clipping"!==a&&"clipping-path"!==a)||Fe(i,e)||i.__render(n||t,e);je(this,r,t,n,s,o);};const Ve=">)]}%!?,.:;'\"》）」〉』〗】〕｝┐＞’”！？，、。：；‰",Ye=Ve+"_#~&*+\\=|≮≯≈≠＝…",Xe=new RegExp([[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743],[11904,12031],[12032,12255],[12272,12287],[12288,12351],[12736,12783],[12800,13055],[13056,13311],[63744,64255],[65072,65103],[127488,127743],[194560,195103]].map((([t,e])=>`[\\u${t.toString(16)}-\\u${e.toString(16)}]`)).join("|"));function He(t){const e={};return t.split("").forEach((t=>e[t]=!0)),e}const Ne=He("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"),qe=He("{[(<'\"《（「〈『〖【〔｛┌＜‘“＝¥￥＄€£￡¢￠"),Ke=He(Ve),Qe=He(Ye),$e=He("- —／～｜┆·");var Ze;!function(t){t[t.Letter=0]="Letter",t[t.Single=1]="Single",t[t.Before=2]="Before",t[t.After=3]="After",t[t.Symbol=4]="Symbol",t[t.Break=5]="Break";}(Ze||(Ze={}));const{Letter:Je,Single:ti,Before:ei,After:ii,Symbol:si,Break:ni}=Ze;function oi(t){return Ne[t]?Je:$e[t]?ni:qe[t]?ei:Ke[t]?ii:Qe[t]?si:Xe.test(t)?ti:Je}const ri={trimRight(t){const{words:e}=t;let i,s=0,n=e.length;for(let o=n-1;o>-1&&(i=e[o].data[0]," "===i.char);o--)s++,t.width-=i.width;s&&e.splice(n-s,s);}};function ai(t,e,i){switch(e){case"title":return i?t.toUpperCase():t;case"upper":return t.toUpperCase();case"lower":return t.toLowerCase();default:return t}}const{trimRight:hi}=ri,{Letter:li,Single:ci,Before:di,After:ui,Symbol:pi,Break:gi}=Ze;let fi,_i,wi,vi,yi,mi,bi,xi,Bi,Li,Ei,ki,Ti,Ri,Si,Mi,Ci,Pi=[];function Ai(t,e){Bi&&!xi&&(xi=Bi),fi.data.push({char:t,width:e}),wi+=e;}function Oi(){vi+=wi,fi.width=wi,_i.words.push(fi),fi={data:[]},wi=0;}function Wi(){Ri&&(Si.paraNumber++,_i.paraStart=!0,Ri=!1),Bi&&(_i.startCharSize=xi,_i.endCharSize=Bi,xi=0),_i.width=vi,Mi.width?hi(_i):Ci&&Di(),Pi.push(_i),_i={words:[]},vi=0;}function Di(){vi>(Si.maxWidth||0)&&(Si.maxWidth=vi);}const{top:Ii,right:zi,bottom:Fi,left:ji}=ut$3;function Gi(t,e,i){const{bounds:s,rows:n}=t;s[e]+=i;for(let t=0;t<n.length;t++)n[t][e]+=i;}const Ui={getDrawData:function(t$1,e){"string"!=typeof t$1&&(t$1=String(t$1));let s=0,n=0,o=e.__getInput("width")||0,r=e.__getInput("height")||0;const{textDecoration:a,__font:h,__padding:l}=e;l&&(o?(s=l[ji],o-=l[zi]+l[ji]):e.autoSizeAlign||(s=l[ji]),r?(n=l[Ii],r-=l[Ii]+l[Fi]):e.autoSizeAlign||(n=l[Ii]));const c={bounds:{x:s,y:n,width:o,height:r},rows:[],paraNumber:0,font:t.canvas.font=h};return function(t$1,e,s){Si=t$1,Pi=t$1.rows,Mi=t$1.bounds,Ci=!Mi.width&&!s.autoSizeAlign;const{__letterSpacing:n,paraIndent:o,textCase:r}=s,{canvas:a}=t,{width:h,height:l}=Mi;if(h||l||n||"none"!==r){const t="none"!==s.textWrap,i="break"===s.textWrap;Ri=!0,Ei=null,xi=bi=Bi=wi=vi=0,fi={data:[]},_i={words:[]};for(let s=0,l=e.length;s<l;s++)mi=e[s],"\n"===mi?(wi&&Oi(),_i.paraEnd=!0,Wi(),Ri=!0):(Li=oi(mi),Li===li&&"none"!==r&&(mi=ai(mi,r,!wi)),bi=a.measureText(mi).width,n&&(n<0&&(Bi=bi),bi+=n),ki=Li===ci&&(Ei===ci||Ei===li)||Ei===ci&&Li!==ui,Ti=!(Li!==di&&Li!==ci||Ei!==pi&&Ei!==ui),yi=Ri&&o?h-o:h,t&&h&&vi+wi+bi>yi&&(i?(wi&&Oi(),vi&&Wi()):(Ti||(Ti=Li===li&&Ei==ui),ki||Ti||Li===gi||Li===di||Li===ci||wi+bi>yi?(wi&&Oi(),vi&&Wi()):vi&&Wi()))," "===mi&&!0!==Ri&&vi+wi===0||(Li===gi?(" "===mi&&wi&&Oi(),Ai(mi,bi),Oi()):ki||Ti?(wi&&Oi(),Ai(mi,bi)):Ai(mi,bi)),Ei=Li);wi&&Oi(),vi&&Wi(),Pi.length>0&&(Pi[Pi.length-1].paraEnd=!0);}else e.split("\n").forEach((t=>{Si.paraNumber++,vi=a.measureText(t).width,Pi.push({x:o||0,text:t,width:vi,paraStart:!0}),Ci&&Di();}));}(c,t$1,e),l&&function(t,e,i,s,n){if(!s&&i.autoSizeAlign)switch(i.textAlign){case"left":Gi(e,"x",t[ji]);break;case"right":Gi(e,"x",-t[zi]);}if(!n&&i.autoSizeAlign)switch(i.verticalAlign){case"top":Gi(e,"y",t[Ii]);break;case"bottom":Gi(e,"y",-t[Fi]);}}(l,c,e,o,r),function(t,e){const{rows:i,bounds:s}=t,{__lineHeight:n,__baseLine:o,__letterSpacing:r,__clipText:a,textAlign:h,verticalAlign:l,paraSpacing:c,autoSizeAlign:d}=e;let{x:u,y:p,width:g,height:f}=s,_=n*i.length+(c?c*(t.paraNumber-1):0),w=o;if(a&&_>f)_=Math.max(f,n),t.overflow=i.length;else if(f||d)switch(l){case"middle":p+=(f-_)/2;break;case"bottom":p+=f-_;}w+=p;let v,y,m,b=g||d?g:t.maxWidth;for(let o=0,l=i.length;o<l;o++){if(v=i[o],v.x=u,v.width<g||v.width>g&&!a)switch(h){case"center":v.x+=(b-v.width)/2;break;case"right":v.x+=b-v.width;}v.paraStart&&c&&o>0&&(w+=c),v.y=w,w+=n,t.overflow>o&&w>_&&(v.isOverflow=!0,t.overflow=o+1),y=v.x,m=v.width,r<0&&(v.width<0?(m=-v.width+e.fontSize+r,y-=m,m+=e.fontSize):m-=r),y<s.x&&(s.x=y),m>s.width&&(s.width=m),a&&g&&g<m&&(v.isOverflow=!0,t.overflow||(t.overflow=i.length));}s.y=p,s.height=_;}(c,e),function(t,e,i){const{rows:s}=t,{textAlign:n,paraIndent:o,letterSpacing:r}=e;let a,h,l,c,d,u;s.forEach((t=>{t.words&&(l=o&&t.paraStart?o:0,u=t.words.length,h=i&&("justify"===n||"both"===n)&&u>1?(i-t.width-l)/(u-1):0,c=r||t.isOverflow?0:h>.01?1:2,t.isOverflow&&!r&&(t.textMode=!0),2===c?(t.x+=l,function(t){t.text="",t.words.forEach((e=>{e.data.forEach((e=>{t.text+=e.char;}));}));}(t)):(t.x+=l,a=t.x,t.data=[],t.words.forEach(((e,i)=>{1===c?(d={char:"",x:a},a=function(t,e,i){return t.forEach((t=>{i.char+=t.char,e+=t.width;})),e}(e.data,a,d),(t.isOverflow||" "!==d.char)&&t.data.push(d)):a=function(t,e,i,s){return t.forEach((t=>{(s||" "!==t.char)&&(t.x=e,i.push(t)),e+=t.width;})),e}(e.data,a,t.data,t.isOverflow),!h||t.paraEnd&&"both"!==n||i===u-1||(a+=h,t.width+=h);}))),t.words=null);}));}(c,e,o),c.overflow&&function(t$1,e,s,n){if(!n)return;const{rows:o,overflow:r}=t$1;let{textOverflow:a}=e;if(o.splice(r),a&&"show"!==a){let t$1,h;"hide"===a?a="":"ellipsis"===a&&(a="...");const l=a?t.canvas.measureText(a).width:0,c=s+n-l;("none"===e.textWrap?o:[o[r-1]]).forEach((e=>{if(e.isOverflow&&e.data){let i=e.data.length-1;for(let s=i;s>-1&&(t$1=e.data[s],h=t$1.x+t$1.width,!(s===i&&h<c));s--){if(h<c&&" "!==t$1.char){e.data.splice(s+1),e.width-=t$1.width;break}e.width-=t$1.width;}e.width+=l,e.data.push({char:a,x:h}),e.textMode&&function(t){t.text="",t.data.forEach((e=>{t.text+=e.char;})),t.data=null;}(e);}}));}}(c,e,s,o),"none"!==a&&function(t,e){const{fontSize:i}=e;switch(t.decorationHeight=i/11,e.textDecoration){case"under":t.decorationY=.15*i;break;case"delete":t.decorationY=.35*-i;}}(c,e),c}};const Vi={string:function(t,e){const i="number"==typeof e&&1!==e;if("string"==typeof t){if(!i||!yt$2.object)return t;t=yt$2.object(t);}let s=void 0===t.a?1:t.a;i&&(s*=e);const n=t.r+","+t.g+","+t.b;return 1===s?"rgb("+n+")":"rgba("+n+","+s+")"}};Object.assign(ct$2,Ui),Object.assign(yt$2,Vi),Object.assign(ft$2,Ct),Object.assign(wt$2,ue),Object.assign(xt$1,Me),Object.assign(mt$2,ze),Object.assign(e,{interaction:(t,e,i,s)=>new vt(t,e,i,s),hitCanvas:(t,e)=>new H(t,e),hitCanvasManager:()=>new pt$1}),K();

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class StringSet {
    entries = {};
    size = 0;
    add(value) {
        let contains = this.entries[value];
        this.entries[value] = true;
        if (!contains) {
            this.size++;
            return true;
        }
        return false;
    }
    addAll(values) {
        let oldSize = this.size;
        for (var i = 0, n = values.length; i < n; i++)
            this.add(values[i]);
        return oldSize != this.size;
    }
    contains(value) {
        return this.entries[value];
    }
    clear() {
        this.entries = {};
        this.size = 0;
    }
}
class Color {
    r;
    g;
    b;
    a;
    static WHITE = new Color(1, 1, 1, 1);
    static RED = new Color(1, 0, 0, 1);
    static GREEN = new Color(0, 1, 0, 1);
    static BLUE = new Color(0, 0, 1, 1);
    static MAGENTA = new Color(1, 0, 1, 1);
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    set(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this.clamp();
    }
    setFromColor(c) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        this.a = c.a;
        return this;
    }
    setFromString(hex) {
        hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
        this.r = parseInt(hex.substr(0, 2), 16) / 255;
        this.g = parseInt(hex.substr(2, 2), 16) / 255;
        this.b = parseInt(hex.substr(4, 2), 16) / 255;
        this.a = hex.length != 8 ? 1 : parseInt(hex.substr(6, 2), 16) / 255;
        return this;
    }
    add(r, g, b, a) {
        this.r += r;
        this.g += g;
        this.b += b;
        this.a += a;
        return this.clamp();
    }
    clamp() {
        if (this.r < 0)
            this.r = 0;
        else if (this.r > 1)
            this.r = 1;
        if (this.g < 0)
            this.g = 0;
        else if (this.g > 1)
            this.g = 1;
        if (this.b < 0)
            this.b = 0;
        else if (this.b > 1)
            this.b = 1;
        if (this.a < 0)
            this.a = 0;
        else if (this.a > 1)
            this.a = 1;
        return this;
    }
    static rgba8888ToColor(color, value) {
        color.r = ((value & 0xff000000) >>> 24) / 255;
        color.g = ((value & 0x00ff0000) >>> 16) / 255;
        color.b = ((value & 0x0000ff00) >>> 8) / 255;
        color.a = ((value & 0x000000ff)) / 255;
    }
    static rgb888ToColor(color, value) {
        color.r = ((value & 0x00ff0000) >>> 16) / 255;
        color.g = ((value & 0x0000ff00) >>> 8) / 255;
        color.b = ((value & 0x000000ff)) / 255;
    }
    toRgb888() {
        const hex = (x) => ("0" + (x * 255).toString(16)).slice(-2);
        return Number("0x" + hex(this.r) + hex(this.g) + hex(this.b));
    }
    static fromString(hex) {
        return new Color().setFromString(hex);
    }
}
class MathUtils {
    static PI = 3.1415927;
    static PI2 = MathUtils.PI * 2;
    static invPI2 = 1 / MathUtils.PI2;
    static radiansToDegrees = 180 / MathUtils.PI;
    static radDeg = MathUtils.radiansToDegrees;
    static degreesToRadians = MathUtils.PI / 180;
    static degRad = MathUtils.degreesToRadians;
    static clamp(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }
    static cosDeg(degrees) {
        return Math.cos(degrees * MathUtils.degRad);
    }
    static sinDeg(degrees) {
        return Math.sin(degrees * MathUtils.degRad);
    }
    static atan2Deg(y, x) {
        return Math.atan2(y, x) * MathUtils.degRad;
    }
    static signum(value) {
        return value > 0 ? 1 : value < 0 ? -1 : 0;
    }
    static toInt(x) {
        return x > 0 ? Math.floor(x) : Math.ceil(x);
    }
    static cbrt(x) {
        let y = Math.pow(Math.abs(x), 1 / 3);
        return x < 0 ? -y : y;
    }
    static randomTriangular(min, max) {
        return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
    }
    static randomTriangularWith(min, max, mode) {
        let u = Math.random();
        let d = max - min;
        if (u <= (mode - min) / d)
            return min + Math.sqrt(u * d * (mode - min));
        return max - Math.sqrt((1 - u) * d * (max - mode));
    }
    static isPowerOfTwo(value) {
        return value && (value & (value - 1)) === 0;
    }
}
class Utils {
    static SUPPORTS_TYPED_ARRAYS = typeof (Float32Array) !== "undefined";
    static arrayCopy(source, sourceStart, dest, destStart, numElements) {
        for (let i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
            dest[j] = source[i];
        }
    }
    static arrayFill(array, fromIndex, toIndex, value) {
        for (let i = fromIndex; i < toIndex; i++)
            array[i] = value;
    }
    static setArraySize(array, size, value = 0) {
        let oldSize = array.length;
        if (oldSize == size)
            return array;
        array.length = size;
        if (oldSize < size) {
            for (let i = oldSize; i < size; i++)
                array[i] = value;
        }
        return array;
    }
    static ensureArrayCapacity(array, size, value = 0) {
        if (array.length >= size)
            return array;
        return Utils.setArraySize(array, size, value);
    }
    static newArray(size, defaultValue) {
        let array = new Array(size);
        for (let i = 0; i < size; i++)
            array[i] = defaultValue;
        return array;
    }
    static newFloatArray(size) {
        if (Utils.SUPPORTS_TYPED_ARRAYS)
            return new Float32Array(size);
        else {
            let array = new Array(size);
            for (let i = 0; i < array.length; i++)
                array[i] = 0;
            return array;
        }
    }
    static newShortArray(size) {
        if (Utils.SUPPORTS_TYPED_ARRAYS)
            return new Int16Array(size);
        else {
            let array = new Array(size);
            for (let i = 0; i < array.length; i++)
                array[i] = 0;
            return array;
        }
    }
    static toFloatArray(array) {
        return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
    }
    static toSinglePrecision(value) {
        return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
    }
    // This function is used to fix WebKit 602 specific issue described at http://esotericsoftware.com/forum/iOS-10-disappearing-graphics-10109
    static webkit602BugfixHelper(alpha, blend) {
    }
    static contains(array, element, identity = true) {
        for (var i = 0; i < array.length; i++)
            if (array[i] == element)
                return true;
        return false;
    }
    static enumValue(type, name) {
        return type[name[0].toUpperCase() + name.slice(1)];
    }
}
class Pool {
    items = new Array();
    instantiator;
    constructor(instantiator) {
        this.instantiator = instantiator;
    }
    obtain() {
        return this.items.length > 0 ? this.items.pop() : this.instantiator();
    }
    free(item) {
        if (item.reset)
            item.reset();
        this.items.push(item);
    }
    freeAll(items) {
        for (let i = 0; i < items.length; i++)
            this.free(items[i]);
    }
    clear() {
        this.items.length = 0;
    }
}
class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    length() {
        let x = this.x;
        let y = this.y;
        return Math.sqrt(x * x + y * y);
    }
    normalize() {
        let len = this.length();
        if (len != 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** The base class for all attachments. */
class Attachment {
    name;
    constructor(name) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
    }
}
/** Base class for an attachment with vertices that are transformed by one or more bones and can be deformed by a slot's
 * {@link Slot#deform}. */
class VertexAttachment extends Attachment {
    static nextID = 0;
    /** The unique ID for this attachment. */
    id = VertexAttachment.nextID++;
    /** The bones which affect the {@link #getVertices()}. The array entries are, for each vertex, the number of bones affecting
     * the vertex followed by that many bone indices, which is the index of the bone in {@link Skeleton#bones}. Will be null
     * if this attachment has no weights. */
    bones = null;
    /** The vertex positions in the bone's coordinate system. For a non-weighted attachment, the values are `x,y`
     * entries for each vertex. For a weighted attachment, the values are `x,y,weight` entries for each bone affecting
     * each vertex. */
    vertices = [];
    /** The maximum number of world vertex values that can be output by
     * {@link #computeWorldVertices()} using the `count` parameter. */
    worldVerticesLength = 0;
    /** Timelines for the timeline attachment are also applied to this attachment.
     * May be null if no attachment-specific timelines should be applied. */
    timelineAttachment = this;
    constructor(name) {
        super(name);
    }
    /** Transforms the attachment's local {@link #vertices} to world coordinates. If the slot's {@link Slot#deform} is
     * not empty, it is used to deform the vertices.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide.
     * @param start The index of the first {@link #vertices} value to transform. Each vertex has 2 values, x and y.
     * @param count The number of world vertex values to output. Must be <= {@link #worldVerticesLength} - `start`.
     * @param worldVertices The output world vertices. Must have a length >= `offset` + `count` *
     *           `stride` / 2.
     * @param offset The `worldVertices` index to begin writing values.
     * @param stride The number of `worldVertices` entries between the value pairs written. */
    computeWorldVertices(slot, start, count, worldVertices, offset, stride) {
        count = offset + (count >> 1) * stride;
        let skeleton = slot.bone.skeleton;
        let deformArray = slot.deform;
        let vertices = this.vertices;
        let bones = this.bones;
        if (!bones) {
            if (deformArray.length > 0)
                vertices = deformArray;
            let bone = slot.bone;
            let x = bone.worldX;
            let y = bone.worldY;
            let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
            for (let v = start, w = offset; w < count; v += 2, w += stride) {
                let vx = vertices[v], vy = vertices[v + 1];
                worldVertices[w] = vx * a + vy * b + x;
                worldVertices[w + 1] = vx * c + vy * d + y;
            }
            return;
        }
        let v = 0, skip = 0;
        for (let i = 0; i < start; i += 2) {
            let n = bones[v];
            v += n + 1;
            skip += n;
        }
        let skeletonBones = skeleton.bones;
        if (deformArray.length == 0) {
            for (let w = offset, b = skip * 3; w < count; w += stride) {
                let wx = 0, wy = 0;
                let n = bones[v++];
                n += v;
                for (; v < n; v++, b += 3) {
                    let bone = skeletonBones[bones[v]];
                    let vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
                    wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
                    wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
                }
                worldVertices[w] = wx;
                worldVertices[w + 1] = wy;
            }
        }
        else {
            let deform = deformArray;
            for (let w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
                let wx = 0, wy = 0;
                let n = bones[v++];
                n += v;
                for (; v < n; v++, b += 3, f += 2) {
                    let bone = skeletonBones[bones[v]];
                    let vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
                    wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
                    wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
                }
                worldVertices[w] = wx;
                worldVertices[w + 1] = wy;
            }
        }
    }
    /** Does not copy id (generated) or name (set on construction). **/
    copyTo(attachment) {
        if (this.bones) {
            attachment.bones = new Array(this.bones.length);
            Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
        }
        else
            attachment.bones = null;
        if (this.vertices) {
            attachment.vertices = Utils.newFloatArray(this.vertices.length);
            Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
        }
        attachment.worldVerticesLength = this.worldVerticesLength;
        attachment.timelineAttachment = this.timelineAttachment;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class Sequence {
    static _nextID = 0;
    id = Sequence.nextID();
    regions;
    start = 0;
    digits = 0;
    /** The index of the region to show for the setup pose. */
    setupIndex = 0;
    constructor(count) {
        this.regions = new Array(count);
    }
    copy() {
        let copy = new Sequence(this.regions.length);
        Utils.arrayCopy(this.regions, 0, copy.regions, 0, this.regions.length);
        copy.start = this.start;
        copy.digits = this.digits;
        copy.setupIndex = this.setupIndex;
        return copy;
    }
    apply(slot, attachment) {
        let index = slot.sequenceIndex;
        if (index == -1)
            index = this.setupIndex;
        if (index >= this.regions.length)
            index = this.regions.length - 1;
        let region = this.regions[index];
        if (attachment.region != region) {
            attachment.region = region;
            attachment.updateRegion();
        }
    }
    getPath(basePath, index) {
        let result = basePath;
        let frame = (this.start + index).toString();
        for (let i = this.digits - frame.length; i > 0; i--)
            result += "0";
        result += frame;
        return result;
    }
    static nextID() {
        return Sequence._nextID++;
    }
}
var SequenceMode;
(function (SequenceMode) {
    SequenceMode[SequenceMode["hold"] = 0] = "hold";
    SequenceMode[SequenceMode["once"] = 1] = "once";
    SequenceMode[SequenceMode["loop"] = 2] = "loop";
    SequenceMode[SequenceMode["pingpong"] = 3] = "pingpong";
    SequenceMode[SequenceMode["onceReverse"] = 4] = "onceReverse";
    SequenceMode[SequenceMode["loopReverse"] = 5] = "loopReverse";
    SequenceMode[SequenceMode["pingpongReverse"] = 6] = "pingpongReverse";
})(SequenceMode || (SequenceMode = {}));
const SequenceModeValues = [
    SequenceMode.hold,
    SequenceMode.once,
    SequenceMode.loop,
    SequenceMode.pingpong,
    SequenceMode.onceReverse,
    SequenceMode.loopReverse,
    SequenceMode.pingpongReverse
];

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** A simple container for a list of timelines and a name. */
class Animation {
    /** The animation's name, which is unique across all animations in the skeleton. */
    name;
    timelines = [];
    timelineIds = new StringSet();
    /** The duration of the animation in seconds, which is the highest time of all keys in the timeline. */
    duration;
    constructor(name, timelines, duration) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
        this.setTimelines(timelines);
        this.duration = duration;
    }
    setTimelines(timelines) {
        if (!timelines)
            throw new Error("timelines cannot be null.");
        this.timelines = timelines;
        this.timelineIds.clear();
        for (var i = 0; i < timelines.length; i++)
            this.timelineIds.addAll(timelines[i].getPropertyIds());
    }
    hasTimeline(ids) {
        for (let i = 0; i < ids.length; i++)
            if (this.timelineIds.contains(ids[i]))
                return true;
        return false;
    }
    /** Applies all the animation's timelines to the specified skeleton.
     *
     * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}.
     * @param loop If true, the animation repeats after {@link #getDuration()}.
     * @param events May be null to ignore fired events. */
    apply(skeleton, lastTime, time, loop, events, alpha, blend, direction) {
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        if (loop && this.duration != 0) {
            time %= this.duration;
            if (lastTime > 0)
                lastTime %= this.duration;
        }
        let timelines = this.timelines;
        for (let i = 0, n = timelines.length; i < n; i++)
            timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
    }
}
/** Controls how a timeline value is mixed with the setup pose value or current pose value when a timeline's `alpha`
 * < 1.
 *
 * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}. */
var MixBlend;
(function (MixBlend) {
    /** Transitions from the setup value to the timeline value (the current value is not used). Before the first key, the setup
     * value is set. */
    MixBlend[MixBlend["setup"] = 0] = "setup";
    /** Transitions from the current value to the timeline value. Before the first key, transitions from the current value to
     * the setup value. Timelines which perform instant transitions, such as {@link DrawOrderTimeline} or
     * {@link AttachmentTimeline}, use the setup value before the first key.
     *
     * `first` is intended for the first animations applied, not for animations layered on top of those. */
    MixBlend[MixBlend["first"] = 1] = "first";
    /** Transitions from the current value to the timeline value. No change is made before the first key (the current value is
     * kept until the first key).
     *
     * `replace` is intended for animations layered on top of others, not for the first animations applied. */
    MixBlend[MixBlend["replace"] = 2] = "replace";
    /** Transitions from the current value to the current value plus the timeline value. No change is made before the first key
     * (the current value is kept until the first key).
     *
     * `add` is intended for animations layered on top of others, not for the first animations applied. Properties
     * keyed by additive animations must be set manually or by another animation before applying the additive animations, else
     * the property values will increase continually. */
    MixBlend[MixBlend["add"] = 3] = "add";
})(MixBlend || (MixBlend = {}));
/** Indicates whether a timeline's `alpha` is mixing out over time toward 0 (the setup or current pose value) or
 * mixing in toward 1 (the timeline's value).
 *
 * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}. */
var MixDirection;
(function (MixDirection) {
    MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
    MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
})(MixDirection || (MixDirection = {}));
const Property = {
    rotate: 0,
    x: 1,
    y: 2,
    scaleX: 3,
    scaleY: 4,
    shearX: 5,
    shearY: 6,
    inherit: 7,
    rgb: 8,
    alpha: 9,
    rgb2: 10,
    attachment: 11,
    deform: 12,
    event: 13,
    drawOrder: 14,
    ikConstraint: 15,
    transformConstraint: 16,
    pathConstraintPosition: 17,
    pathConstraintSpacing: 18,
    pathConstraintMix: 19,
    physicsConstraintInertia: 20,
    physicsConstraintStrength: 21,
    physicsConstraintDamping: 22,
    physicsConstraintMass: 23,
    physicsConstraintWind: 24,
    physicsConstraintGravity: 25,
    physicsConstraintMix: 26,
    physicsConstraintReset: 27,
    sequence: 28,
};
/** The interface for all timelines. */
class Timeline {
    propertyIds;
    frames;
    constructor(frameCount, propertyIds) {
        this.propertyIds = propertyIds;
        this.frames = Utils.newFloatArray(frameCount * this.getFrameEntries());
    }
    getPropertyIds() {
        return this.propertyIds;
    }
    getFrameEntries() {
        return 1;
    }
    getFrameCount() {
        return this.frames.length / this.getFrameEntries();
    }
    getDuration() {
        return this.frames[this.frames.length - this.getFrameEntries()];
    }
    static search1(frames, time) {
        let n = frames.length;
        for (let i = 1; i < n; i++)
            if (frames[i] > time)
                return i - 1;
        return n - 1;
    }
    static search(frames, time, step) {
        let n = frames.length;
        for (let i = step; i < n; i += step)
            if (frames[i] > time)
                return i - step;
        return n - step;
    }
}
/** The base class for timelines that use interpolation between key frame values. */
class CurveTimeline extends Timeline {
    curves; // type, x, y, ...
    constructor(frameCount, bezierCount, propertyIds) {
        super(frameCount, propertyIds);
        this.curves = Utils.newFloatArray(frameCount + bezierCount * 18 /*BEZIER_SIZE*/);
        this.curves[frameCount - 1] = 1 /*STEPPED*/;
    }
    /** Sets the specified key frame to linear interpolation. */
    setLinear(frame) {
        this.curves[frame] = 0 /*LINEAR*/;
    }
    /** Sets the specified key frame to stepped interpolation. */
    setStepped(frame) {
        this.curves[frame] = 1 /*STEPPED*/;
    }
    /** Shrinks the storage for Bezier curves, for use when <code>bezierCount</code> (specified in the constructor) was larger
     * than the actual number of Bezier curves. */
    shrink(bezierCount) {
        let size = this.getFrameCount() + bezierCount * 18 /*BEZIER_SIZE*/;
        if (this.curves.length > size) {
            let newCurves = Utils.newFloatArray(size);
            Utils.arrayCopy(this.curves, 0, newCurves, 0, size);
            this.curves = newCurves;
        }
    }
    /** Stores the segments for the specified Bezier curve. For timelines that modify multiple values, there may be more than
     * one curve per frame.
     * @param bezier The ordinal of this Bezier curve for this timeline, between 0 and <code>bezierCount - 1</code> (specified
     *           in the constructor), inclusive.
     * @param frame Between 0 and <code>frameCount - 1</code>, inclusive.
     * @param value The index of the value for this frame that this curve is used for.
     * @param time1 The time for the first key.
     * @param value1 The value for the first key.
     * @param cx1 The time for the first Bezier handle.
     * @param cy1 The value for the first Bezier handle.
     * @param cx2 The time of the second Bezier handle.
     * @param cy2 The value for the second Bezier handle.
     * @param time2 The time for the second key.
     * @param value2 The value for the second key. */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
        let curves = this.curves;
        let i = this.getFrameCount() + bezier * 18 /*BEZIER_SIZE*/;
        if (value == 0)
            curves[frame] = 2 /*BEZIER*/ + i;
        let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = (value1 - cy1 * 2 + cy2) * 0.03;
        let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006, dddy = ((cy1 - cy2) * 3 - value1 + value2) * 0.006;
        let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
        let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = (cy1 - value1) * 0.3 + tmpy + dddy * 0.16666667;
        let x = time1 + dx, y = value1 + dy;
        for (let n = i + 18 /*BEZIER_SIZE*/; i < n; i += 2) {
            curves[i] = x;
            curves[i + 1] = y;
            dx += ddx;
            dy += ddy;
            ddx += dddx;
            ddy += dddy;
            x += dx;
            y += dy;
        }
    }
    /** Returns the Bezier interpolated value for the specified time.
     * @param frameIndex The index into {@link #getFrames()} for the values of the frame before <code>time</code>.
     * @param valueOffset The offset from <code>frameIndex</code> to the value this curve is used for.
     * @param i The index of the Bezier segments. See {@link #getCurveType(int)}. */
    getBezierValue(time, frameIndex, valueOffset, i) {
        let curves = this.curves;
        if (curves[i] > time) {
            let x = this.frames[frameIndex], y = this.frames[frameIndex + valueOffset];
            return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
        }
        let n = i + 18 /*BEZIER_SIZE*/;
        for (i += 2; i < n; i += 2) {
            if (curves[i] >= time) {
                let x = curves[i - 2], y = curves[i - 1];
                return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
            }
        }
        frameIndex += this.getFrameEntries();
        let x = curves[n - 2], y = curves[n - 1];
        return y + (time - x) / (this.frames[frameIndex] - x) * (this.frames[frameIndex + valueOffset] - y);
    }
}
class CurveTimeline1 extends CurveTimeline {
    constructor(frameCount, bezierCount, propertyId) {
        super(frameCount, bezierCount, [propertyId]);
    }
    getFrameEntries() {
        return 2 /*ENTRIES*/;
    }
    /** Sets the time and value for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value) {
        frame <<= 1;
        this.frames[frame] = time;
        this.frames[frame + 1 /*VALUE*/] = value;
    }
    /** Returns the interpolated value for the specified time. */
    getCurveValue(time) {
        let frames = this.frames;
        let i = frames.length - 2;
        for (let ii = 2; ii <= i; ii += 2) {
            if (frames[ii] > time) {
                i = ii - 2;
                break;
            }
        }
        let curveType = this.curves[i >> 1];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i], value = frames[i + 1 /*VALUE*/];
                return value + (time - before) / (frames[i + 2 /*ENTRIES*/] - before) * (frames[i + 2 /*ENTRIES*/ + 1 /*VALUE*/] - value);
            case 1 /*STEPPED*/:
                return frames[i + 1 /*VALUE*/];
        }
        return this.getBezierValue(time, i, 1 /*VALUE*/, curveType - 2 /*BEZIER*/);
    }
    getRelativeValue(time, alpha, blend, current, setup) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time);
        switch (blend) {
            case MixBlend.setup:
                return setup + value * alpha;
            case MixBlend.first:
            case MixBlend.replace:
                value += setup - current;
        }
        return current + value * alpha;
    }
    getAbsoluteValue(time, alpha, blend, current, setup) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time);
        if (blend == MixBlend.setup)
            return setup + (value - setup) * alpha;
        return current + (value - current) * alpha;
    }
    getAbsoluteValue2(time, alpha, blend, current, setup, value) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        if (blend == MixBlend.setup)
            return setup + (value - setup) * alpha;
        return current + (value - current) * alpha;
    }
    getScaleValue(time, alpha, blend, direction, current, setup) {
        const frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time) * setup;
        if (alpha == 1) {
            if (blend == MixBlend.add)
                return current + value - setup;
            return value;
        }
        // Mixing out uses sign of setup or current pose, else use sign of key.
        if (direction == MixDirection.mixOut) {
            switch (blend) {
                case MixBlend.setup:
                    return setup + (Math.abs(value) * MathUtils.signum(setup) - setup) * alpha;
                case MixBlend.first:
                case MixBlend.replace:
                    return current + (Math.abs(value) * MathUtils.signum(current) - current) * alpha;
            }
        }
        else {
            let s = 0;
            switch (blend) {
                case MixBlend.setup:
                    s = Math.abs(setup) * MathUtils.signum(value);
                    return s + (value - s) * alpha;
                case MixBlend.first:
                case MixBlend.replace:
                    s = Math.abs(current) * MathUtils.signum(value);
                    return s + (value - s) * alpha;
            }
        }
        return current + (value - setup) * alpha;
    }
}
/** The base class for a {@link CurveTimeline} which sets two properties. */
class CurveTimeline2 extends CurveTimeline {
    /** @param bezierCount The maximum number of Bezier curves. See {@link #shrink(int)}.
     * @param propertyIds Unique identifiers for the properties the timeline modifies. */
    constructor(frameCount, bezierCount, propertyId1, propertyId2) {
        super(frameCount, bezierCount, [propertyId1, propertyId2]);
    }
    getFrameEntries() {
        return 3 /*ENTRIES*/;
    }
    /** Sets the time and values for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value1, value2) {
        frame *= 3 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*VALUE1*/] = value1;
        this.frames[frame + 2 /*VALUE2*/] = value2;
    }
}
/** Changes a bone's local {@link Bone#rotation}. */
class RotateTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.rotate + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.rotation = this.getRelativeValue(time, alpha, blend, bone.rotation, bone.data.rotation);
    }
}
/** Changes a bone's local {@link Bone#x} and {@link Bone#y}. */
class TranslateTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.x + "|" + boneIndex, Property.y + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.x = bone.data.x;
                    bone.y = bone.data.y;
                    return;
                case MixBlend.first:
                    bone.x += (bone.data.x - bone.x) * alpha;
                    bone.y += (bone.data.y - bone.y) * alpha;
            }
            return;
        }
        let x = 0, y = 0;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        switch (blend) {
            case MixBlend.setup:
                bone.x = bone.data.x + x * alpha;
                bone.y = bone.data.y + y * alpha;
                break;
            case MixBlend.first:
            case MixBlend.replace:
                bone.x += (bone.data.x + x - bone.x) * alpha;
                bone.y += (bone.data.y + y - bone.y) * alpha;
                break;
            case MixBlend.add:
                bone.x += x * alpha;
                bone.y += y * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#x}. */
class TranslateXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.x + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.x = this.getRelativeValue(time, alpha, blend, bone.x, bone.data.x);
    }
}
/** Changes a bone's local {@link Bone#x}. */
class TranslateYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.y + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.y = this.getRelativeValue(time, alpha, blend, bone.y, bone.data.y);
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleX + "|" + boneIndex, Property.scaleY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.scaleX = bone.data.scaleX;
                    bone.scaleY = bone.data.scaleY;
                    return;
                case MixBlend.first:
                    bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
                    bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
            }
            return;
        }
        let x, y;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        x *= bone.data.scaleX;
        y *= bone.data.scaleY;
        if (alpha == 1) {
            if (blend == MixBlend.add) {
                bone.scaleX += x - bone.data.scaleX;
                bone.scaleY += y - bone.data.scaleY;
            }
            else {
                bone.scaleX = x;
                bone.scaleY = y;
            }
        }
        else {
            let bx = 0, by = 0;
            if (direction == MixDirection.mixOut) {
                switch (blend) {
                    case MixBlend.setup:
                        bx = bone.data.scaleX;
                        by = bone.data.scaleY;
                        bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
                        bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bx = bone.scaleX;
                        by = bone.scaleY;
                        bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
                        bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
                        break;
                    case MixBlend.add:
                        bone.scaleX += (x - bone.data.scaleX) * alpha;
                        bone.scaleY += (y - bone.data.scaleY) * alpha;
                }
            }
            else {
                switch (blend) {
                    case MixBlend.setup:
                        bx = Math.abs(bone.data.scaleX) * MathUtils.signum(x);
                        by = Math.abs(bone.data.scaleY) * MathUtils.signum(y);
                        bone.scaleX = bx + (x - bx) * alpha;
                        bone.scaleY = by + (y - by) * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bx = Math.abs(bone.scaleX) * MathUtils.signum(x);
                        by = Math.abs(bone.scaleY) * MathUtils.signum(y);
                        bone.scaleX = bx + (x - bx) * alpha;
                        bone.scaleY = by + (y - by) * alpha;
                        break;
                    case MixBlend.add:
                        bone.scaleX += (x - bone.data.scaleX) * alpha;
                        bone.scaleY += (y - bone.data.scaleY) * alpha;
                }
            }
        }
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleX + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.scaleX = this.getScaleValue(time, alpha, blend, direction, bone.scaleX, bone.data.scaleX);
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.scaleY = this.getScaleValue(time, alpha, blend, direction, bone.scaleY, bone.data.scaleY);
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearX + "|" + boneIndex, Property.shearY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.shearX = bone.data.shearX;
                    bone.shearY = bone.data.shearY;
                    return;
                case MixBlend.first:
                    bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
                    bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
            }
            return;
        }
        let x = 0, y = 0;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        switch (blend) {
            case MixBlend.setup:
                bone.shearX = bone.data.shearX + x * alpha;
                bone.shearY = bone.data.shearY + y * alpha;
                break;
            case MixBlend.first:
            case MixBlend.replace:
                bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
                bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
                break;
            case MixBlend.add:
                bone.shearX += x * alpha;
                bone.shearY += y * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearX + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.shearX = this.getRelativeValue(time, alpha, blend, bone.shearX, bone.data.shearX);
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.shearY = this.getRelativeValue(time, alpha, blend, bone.shearY, bone.data.shearY);
    }
}
class InheritTimeline extends Timeline {
    boneIndex = 0;
    constructor(frameCount, boneIndex) {
        super(frameCount, [Property.inherit + "|" + boneIndex]);
        this.boneIndex = boneIndex;
    }
    getFrameEntries() {
        return 2 /*ENTRIES*/;
    }
    /** Sets the transform mode for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, inherit) {
        frame *= 2 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*INHERIT*/] = inherit;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                bone.inherit = bone.data.inherit;
            return;
        }
        let frames = this.frames;
        if (time < frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                bone.inherit = bone.data.inherit;
            return;
        }
        bone.inherit = this.frames[Timeline.search(frames, time, 2 /*ENTRIES*/) + 1 /*INHERIT*/];
    }
}
/** Changes a slot's {@link Slot#color}. */
class RGBATimeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.alpha + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 5 /*ENTRIES*/;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b, a) {
        frame *= 5 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*A*/] = a;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let color = slot.color;
        if (time < frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.setFromColor(setup);
                    return;
                case MixBlend.first:
                    color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
            }
            return;
        }
        let r = 0, g = 0, b = 0, a = 0;
        let i = Timeline.search(frames, time, 5 /*ENTRIES*/);
        let curveType = this.curves[i / 5 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                let t = (time - before) / (frames[i + 5 /*ENTRIES*/] - before);
                r += (frames[i + 5 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 5 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 5 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                a += (frames[i + 5 /*ENTRIES*/ + 4 /*A*/] - a) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                a = this.getBezierValue(time, i, 4 /*A*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
        }
        if (alpha == 1)
            color.set(r, g, b, a);
        else {
            if (blend == MixBlend.setup)
                color.setFromColor(slot.data.color);
            color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
        }
    }
}
/** Changes a slot's {@link Slot#color}. */
class RGBTimeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 4 /*ENTRIES*/;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b) {
        frame <<= 2;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let color = slot.color;
        if (time < frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.r = setup.r;
                    color.g = setup.g;
                    color.b = setup.b;
                    return;
                case MixBlend.first:
                    color.r += (setup.r - color.r) * alpha;
                    color.g += (setup.g - color.g) * alpha;
                    color.b += (setup.b - color.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0;
        let i = Timeline.search(frames, time, 4 /*ENTRIES*/);
        let curveType = this.curves[i >> 2];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                let t = (time - before) / (frames[i + 4 /*ENTRIES*/] - before);
                r += (frames[i + 4 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 4 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 4 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            color.r = r;
            color.g = g;
            color.b = b;
        }
        else {
            if (blend == MixBlend.setup) {
                let setup = slot.data.color;
                color.r = setup.r;
                color.g = setup.g;
                color.b = setup.b;
            }
            color.r += (r - color.r) * alpha;
            color.g += (g - color.g) * alpha;
            color.b += (b - color.b) * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class AlphaTimeline extends CurveTimeline1 {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, Property.alpha + "|" + slotIndex);
        this.slotIndex = slotIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let color = slot.color;
        if (time < this.frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.a = setup.a;
                    return;
                case MixBlend.first:
                    color.a += (setup.a - color.a) * alpha;
            }
            return;
        }
        let a = this.getCurveValue(time);
        if (alpha == 1)
            color.a = a;
        else {
            if (blend == MixBlend.setup)
                color.a = slot.data.color.a;
            color.a += (a - color.a) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#color} and {@link Slot#darkColor} for two color tinting. */
class RGBA2Timeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.alpha + "|" + slotIndex,
            Property.rgb2 + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 8 /*ENTRIES*/;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, a, r2, g2, b2) {
        frame <<= 3;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*A*/] = a;
        this.frames[frame + 5 /*R2*/] = r2;
        this.frames[frame + 6 /*G2*/] = g2;
        this.frames[frame + 7 /*B2*/] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let light = slot.color, dark = slot.darkColor;
        if (time < frames[0]) {
            let setupLight = slot.data.color, setupDark = slot.data.darkColor;
            switch (blend) {
                case MixBlend.setup:
                    light.setFromColor(setupLight);
                    dark.r = setupDark.r;
                    dark.g = setupDark.g;
                    dark.b = setupDark.b;
                    return;
                case MixBlend.first:
                    light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
                    dark.r += (setupDark.r - dark.r) * alpha;
                    dark.g += (setupDark.g - dark.g) * alpha;
                    dark.b += (setupDark.b - dark.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
        let i = Timeline.search(frames, time, 8 /*ENTRIES*/);
        let curveType = this.curves[i >> 3];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                r2 = frames[i + 5 /*R2*/];
                g2 = frames[i + 6 /*G2*/];
                b2 = frames[i + 7 /*B2*/];
                let t = (time - before) / (frames[i + 8 /*ENTRIES*/] - before);
                r += (frames[i + 8 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 8 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 8 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                a += (frames[i + 8 /*ENTRIES*/ + 4 /*A*/] - a) * t;
                r2 += (frames[i + 8 /*ENTRIES*/ + 5 /*R2*/] - r2) * t;
                g2 += (frames[i + 8 /*ENTRIES*/ + 6 /*G2*/] - g2) * t;
                b2 += (frames[i + 8 /*ENTRIES*/ + 7 /*B2*/] - b2) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                r2 = frames[i + 5 /*R2*/];
                g2 = frames[i + 6 /*G2*/];
                b2 = frames[i + 7 /*B2*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                a = this.getBezierValue(time, i, 4 /*A*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                r2 = this.getBezierValue(time, i, 5 /*R2*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                g2 = this.getBezierValue(time, i, 6 /*G2*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
                b2 = this.getBezierValue(time, i, 7 /*B2*/, curveType + 18 /*BEZIER_SIZE*/ * 6 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            light.set(r, g, b, a);
            dark.r = r2;
            dark.g = g2;
            dark.b = b2;
        }
        else {
            if (blend == MixBlend.setup) {
                light.setFromColor(slot.data.color);
                let setupDark = slot.data.darkColor;
                dark.r = setupDark.r;
                dark.g = setupDark.g;
                dark.b = setupDark.b;
            }
            light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
            dark.r += (r2 - dark.r) * alpha;
            dark.g += (g2 - dark.g) * alpha;
            dark.b += (b2 - dark.b) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#color} and {@link Slot#darkColor} for two color tinting. */
class RGB2Timeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.rgb2 + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 7 /*ENTRIES*/;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, r2, g2, b2) {
        frame *= 7 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*R2*/] = r2;
        this.frames[frame + 5 /*G2*/] = g2;
        this.frames[frame + 6 /*B2*/] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let light = slot.color, dark = slot.darkColor;
        if (time < frames[0]) {
            let setupLight = slot.data.color, setupDark = slot.data.darkColor;
            switch (blend) {
                case MixBlend.setup:
                    light.r = setupLight.r;
                    light.g = setupLight.g;
                    light.b = setupLight.b;
                    dark.r = setupDark.r;
                    dark.g = setupDark.g;
                    dark.b = setupDark.b;
                    return;
                case MixBlend.first:
                    light.r += (setupLight.r - light.r) * alpha;
                    light.g += (setupLight.g - light.g) * alpha;
                    light.b += (setupLight.b - light.b) * alpha;
                    dark.r += (setupDark.r - dark.r) * alpha;
                    dark.g += (setupDark.g - dark.g) * alpha;
                    dark.b += (setupDark.b - dark.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0, r2 = 0, g2 = 0, b2 = 0;
        let i = Timeline.search(frames, time, 7 /*ENTRIES*/);
        let curveType = this.curves[i / 7 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                r2 = frames[i + 4 /*R2*/];
                g2 = frames[i + 5 /*G2*/];
                b2 = frames[i + 6 /*B2*/];
                let t = (time - before) / (frames[i + 7 /*ENTRIES*/] - before);
                r += (frames[i + 7 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 7 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 7 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                r2 += (frames[i + 7 /*ENTRIES*/ + 4 /*R2*/] - r2) * t;
                g2 += (frames[i + 7 /*ENTRIES*/ + 5 /*G2*/] - g2) * t;
                b2 += (frames[i + 7 /*ENTRIES*/ + 6 /*B2*/] - b2) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                r2 = frames[i + 4 /*R2*/];
                g2 = frames[i + 5 /*G2*/];
                b2 = frames[i + 6 /*B2*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                r2 = this.getBezierValue(time, i, 4 /*R2*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                g2 = this.getBezierValue(time, i, 5 /*G2*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                b2 = this.getBezierValue(time, i, 6 /*B2*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            light.r = r;
            light.g = g;
            light.b = b;
            dark.r = r2;
            dark.g = g2;
            dark.b = b2;
        }
        else {
            if (blend == MixBlend.setup) {
                let setupLight = slot.data.color, setupDark = slot.data.darkColor;
                light.r = setupLight.r;
                light.g = setupLight.g;
                light.b = setupLight.b;
                dark.r = setupDark.r;
                dark.g = setupDark.g;
                dark.b = setupDark.b;
            }
            light.r += (r - light.r) * alpha;
            light.g += (g - light.g) * alpha;
            light.b += (b - light.b) * alpha;
            dark.r += (r2 - dark.r) * alpha;
            dark.g += (g2 - dark.g) * alpha;
            dark.b += (b2 - dark.b) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#attachment}. */
class AttachmentTimeline extends Timeline {
    slotIndex = 0;
    /** The attachment name for each key frame. May contain null values to clear the attachment. */
    attachmentNames;
    constructor(frameCount, slotIndex) {
        super(frameCount, [
            Property.attachment + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
        this.attachmentNames = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the attachment name for the specified key frame. */
    setFrame(frame, time, attachmentName) {
        this.frames[frame] = time;
        this.attachmentNames[frame] = attachmentName;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                this.setAttachment(skeleton, slot, slot.data.attachmentName);
            return;
        }
        if (time < this.frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                this.setAttachment(skeleton, slot, slot.data.attachmentName);
            return;
        }
        this.setAttachment(skeleton, slot, this.attachmentNames[Timeline.search1(this.frames, time)]);
    }
    setAttachment(skeleton, slot, attachmentName) {
        slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
    }
}
/** Changes a slot's {@link Slot#deform} to deform a {@link VertexAttachment}. */
class DeformTimeline extends CurveTimeline {
    slotIndex = 0;
    /** The attachment that will be deformed. */
    attachment;
    /** The vertices for each key frame. */
    vertices;
    constructor(frameCount, bezierCount, slotIndex, attachment) {
        super(frameCount, bezierCount, [
            Property.deform + "|" + slotIndex + "|" + attachment.id
        ]);
        this.slotIndex = slotIndex;
        this.attachment = attachment;
        this.vertices = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the vertices for the specified key frame.
     * @param vertices Vertex positions for an unweighted VertexAttachment, or deform offsets if it has weights. */
    setFrame(frame, time, vertices) {
        this.frames[frame] = time;
        this.vertices[frame] = vertices;
    }
    /** @param value1 Ignored (0 is used for a deform timeline).
     * @param value2 Ignored (1 is used for a deform timeline). */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
        let curves = this.curves;
        let i = this.getFrameCount() + bezier * 18 /*BEZIER_SIZE*/;
        if (value == 0)
            curves[frame] = 2 /*BEZIER*/ + i;
        let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = cy2 * 0.03 - cy1 * 0.06;
        let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006, dddy = (cy1 - cy2 + 0.33333333) * 0.018;
        let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
        let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = cy1 * 0.3 + tmpy + dddy * 0.16666667;
        let x = time1 + dx, y = dy;
        for (let n = i + 18 /*BEZIER_SIZE*/; i < n; i += 2) {
            curves[i] = x;
            curves[i + 1] = y;
            dx += ddx;
            dy += ddy;
            ddx += dddx;
            ddy += dddy;
            x += dx;
            y += dy;
        }
    }
    getCurvePercent(time, frame) {
        let curves = this.curves;
        let i = curves[frame];
        switch (i) {
            case 0 /*LINEAR*/:
                let x = this.frames[frame];
                return (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
            case 1 /*STEPPED*/:
                return 0;
        }
        i -= 2 /*BEZIER*/;
        if (curves[i] > time) {
            let x = this.frames[frame];
            return curves[i + 1] * (time - x) / (curves[i] - x);
        }
        let n = i + 18 /*BEZIER_SIZE*/;
        for (i += 2; i < n; i += 2) {
            if (curves[i] >= time) {
                let x = curves[i - 2], y = curves[i - 1];
                return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
            }
        }
        let x = curves[n - 2], y = curves[n - 1];
        return y + (1 - y) * (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let slotAttachment = slot.getAttachment();
        if (!slotAttachment)
            return;
        if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.timelineAttachment != this.attachment)
            return;
        let deform = slot.deform;
        if (deform.length == 0)
            blend = MixBlend.setup;
        let vertices = this.vertices;
        let vertexCount = vertices[0].length;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    deform.length = 0;
                    return;
                case MixBlend.first:
                    if (alpha == 1) {
                        deform.length = 0;
                        return;
                    }
                    deform.length = vertexCount;
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions.
                        let setupVertices = vertexAttachment.vertices;
                        for (var i = 0; i < vertexCount; i++)
                            deform[i] += (setupVertices[i] - deform[i]) * alpha;
                    }
                    else {
                        // Weighted deform offsets.
                        alpha = 1 - alpha;
                        for (var i = 0; i < vertexCount; i++)
                            deform[i] *= alpha;
                    }
            }
            return;
        }
        deform.length = vertexCount;
        if (time >= frames[frames.length - 1]) {
            let lastVertices = vertices[frames.length - 1];
            if (alpha == 1) {
                if (blend == MixBlend.add) {
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += lastVertices[i] - setupVertices[i];
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += lastVertices[i];
                    }
                }
                else
                    Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
            }
            else {
                switch (blend) {
                    case MixBlend.setup: {
                        let vertexAttachment = slotAttachment;
                        if (!vertexAttachment.bones) {
                            // Unweighted vertex positions, with alpha.
                            let setupVertices = vertexAttachment.vertices;
                            for (let i = 0; i < vertexCount; i++) {
                                let setup = setupVertices[i];
                                deform[i] = setup + (lastVertices[i] - setup) * alpha;
                            }
                        }
                        else {
                            // Weighted deform offsets, with alpha.
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] = lastVertices[i] * alpha;
                        }
                        break;
                    }
                    case MixBlend.first:
                    case MixBlend.replace:
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += (lastVertices[i] - deform[i]) * alpha;
                        break;
                    case MixBlend.add:
                        let vertexAttachment = slotAttachment;
                        if (!vertexAttachment.bones) {
                            // Unweighted vertex positions, with alpha.
                            let setupVertices = vertexAttachment.vertices;
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] += (lastVertices[i] - setupVertices[i]) * alpha;
                        }
                        else {
                            // Weighted deform offsets, with alpha.
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] += lastVertices[i] * alpha;
                        }
                }
            }
            return;
        }
        // Interpolate between the previous frame and the current frame.
        let frame = Timeline.search1(frames, time);
        let percent = this.getCurvePercent(time, frame);
        let prevVertices = vertices[frame];
        let nextVertices = vertices[frame + 1];
        if (alpha == 1) {
            if (blend == MixBlend.add) {
                let vertexAttachment = slotAttachment;
                if (!vertexAttachment.bones) {
                    // Unweighted vertex positions, with alpha.
                    let setupVertices = vertexAttachment.vertices;
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += prev + (nextVertices[i] - prev) * percent - setupVertices[i];
                    }
                }
                else {
                    // Weighted deform offsets, with alpha.
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += prev + (nextVertices[i] - prev) * percent;
                    }
                }
            }
            else {
                for (let i = 0; i < vertexCount; i++) {
                    let prev = prevVertices[i];
                    deform[i] = prev + (nextVertices[i] - prev) * percent;
                }
            }
        }
        else {
            switch (blend) {
                case MixBlend.setup: {
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i], setup = setupVertices[i];
                            deform[i] = setup + (prev + (nextVertices[i] - prev) * percent - setup) * alpha;
                        }
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] = (prev + (nextVertices[i] - prev) * percent) * alpha;
                        }
                    }
                    break;
                }
                case MixBlend.first:
                case MixBlend.replace:
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += (prev + (nextVertices[i] - prev) * percent - deform[i]) * alpha;
                    }
                    break;
                case MixBlend.add:
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] += (prev + (nextVertices[i] - prev) * percent - setupVertices[i]) * alpha;
                        }
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] += (prev + (nextVertices[i] - prev) * percent) * alpha;
                        }
                    }
            }
        }
    }
}
/** Fires an {@link Event} when specific animation times are reached. */
class EventTimeline extends Timeline {
    static propertyIds = ["" + Property.event];
    /** The event for each key frame. */
    events;
    constructor(frameCount) {
        super(frameCount, EventTimeline.propertyIds);
        this.events = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the event for the specified key frame. */
    setFrame(frame, event) {
        this.frames[frame] = event.time;
        this.events[frame] = event;
    }
    /** Fires events for frames > `lastTime` and <= `time`. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        if (!firedEvents)
            return;
        let frames = this.frames;
        let frameCount = this.frames.length;
        if (lastTime > time) { // Apply after lastTime for looped animations.
            this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
            lastTime = -1;
        }
        else if (lastTime >= frames[frameCount - 1]) // Last time is after last frame.
            return;
        if (time < frames[0])
            return;
        let i = 0;
        if (lastTime < frames[0])
            i = 0;
        else {
            i = Timeline.search1(frames, lastTime) + 1;
            let frameTime = frames[i];
            while (i > 0) { // Fire multiple events with the same frame.
                if (frames[i - 1] != frameTime)
                    break;
                i--;
            }
        }
        for (; i < frameCount && time >= frames[i]; i++)
            firedEvents.push(this.events[i]);
    }
}
/** Changes a skeleton's {@link Skeleton#drawOrder}. */
class DrawOrderTimeline extends Timeline {
    static propertyIds = ["" + Property.drawOrder];
    /** The draw order for each key frame. See {@link #setFrame(int, float, int[])}. */
    drawOrders;
    constructor(frameCount) {
        super(frameCount, DrawOrderTimeline.propertyIds);
        this.drawOrders = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the draw order for the specified key frame.
     * @param drawOrder For each slot in {@link Skeleton#slots}, the index of the new draw order. May be null to use setup pose
     *           draw order. */
    setFrame(frame, time, drawOrder) {
        this.frames[frame] = time;
        this.drawOrders[frame] = drawOrder;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
            return;
        }
        if (time < this.frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
            return;
        }
        let idx = Timeline.search1(this.frames, time);
        let drawOrderToSetupIndex = this.drawOrders[idx];
        if (!drawOrderToSetupIndex)
            Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        else {
            let drawOrder = skeleton.drawOrder;
            let slots = skeleton.slots;
            for (let i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
                drawOrder[i] = slots[drawOrderToSetupIndex[i]];
        }
    }
}
/** Changes an IK constraint's {@link IkConstraint#mix}, {@link IkConstraint#softness},
 * {@link IkConstraint#bendDirection}, {@link IkConstraint#stretch}, and {@link IkConstraint#compress}. */
class IkConstraintTimeline extends CurveTimeline {
    /** The index of the IK constraint in {@link Skeleton#getIkConstraints()} that will be changed when this timeline is applied */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, ikConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.ikConstraint + "|" + ikConstraintIndex
        ]);
        this.constraintIndex = ikConstraintIndex;
    }
    getFrameEntries() {
        return 6 /*ENTRIES*/;
    }
    /** Sets the time in seconds, mix, softness, bend direction, compress, and stretch for the specified key frame. */
    setFrame(frame, time, mix, softness, bendDirection, compress, stretch) {
        frame *= 6 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*MIX*/] = mix;
        this.frames[frame + 2 /*SOFTNESS*/] = softness;
        this.frames[frame + 3 /*BEND_DIRECTION*/] = bendDirection;
        this.frames[frame + 4 /*COMPRESS*/] = compress ? 1 : 0;
        this.frames[frame + 5 /*STRETCH*/] = stretch ? 1 : 0;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.ikConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    constraint.mix = constraint.data.mix;
                    constraint.softness = constraint.data.softness;
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.compress = constraint.data.compress;
                    constraint.stretch = constraint.data.stretch;
                    return;
                case MixBlend.first:
                    constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
                    constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.compress = constraint.data.compress;
                    constraint.stretch = constraint.data.stretch;
            }
            return;
        }
        let mix = 0, softness = 0;
        let i = Timeline.search(frames, time, 6 /*ENTRIES*/);
        let curveType = this.curves[i / 6 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                mix = frames[i + 1 /*MIX*/];
                softness = frames[i + 2 /*SOFTNESS*/];
                let t = (time - before) / (frames[i + 6 /*ENTRIES*/] - before);
                mix += (frames[i + 6 /*ENTRIES*/ + 1 /*MIX*/] - mix) * t;
                softness += (frames[i + 6 /*ENTRIES*/ + 2 /*SOFTNESS*/] - softness) * t;
                break;
            case 1 /*STEPPED*/:
                mix = frames[i + 1 /*MIX*/];
                softness = frames[i + 2 /*SOFTNESS*/];
                break;
            default:
                mix = this.getBezierValue(time, i, 1 /*MIX*/, curveType - 2 /*BEZIER*/);
                softness = this.getBezierValue(time, i, 2 /*SOFTNESS*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            constraint.mix = constraint.data.mix + (mix - constraint.data.mix) * alpha;
            constraint.softness = constraint.data.softness + (softness - constraint.data.softness) * alpha;
            if (direction == MixDirection.mixOut) {
                constraint.bendDirection = constraint.data.bendDirection;
                constraint.compress = constraint.data.compress;
                constraint.stretch = constraint.data.stretch;
            }
            else {
                constraint.bendDirection = frames[i + 3 /*BEND_DIRECTION*/];
                constraint.compress = frames[i + 4 /*COMPRESS*/] != 0;
                constraint.stretch = frames[i + 5 /*STRETCH*/] != 0;
            }
        }
        else {
            constraint.mix += (mix - constraint.mix) * alpha;
            constraint.softness += (softness - constraint.softness) * alpha;
            if (direction == MixDirection.mixIn) {
                constraint.bendDirection = frames[i + 3 /*BEND_DIRECTION*/];
                constraint.compress = frames[i + 4 /*COMPRESS*/] != 0;
                constraint.stretch = frames[i + 5 /*STRETCH*/] != 0;
            }
        }
    }
}
/** Changes a transform constraint's {@link TransformConstraint#rotateMix}, {@link TransformConstraint#translateMix},
 * {@link TransformConstraint#scaleMix}, and {@link TransformConstraint#shearMix}. */
class TransformConstraintTimeline extends CurveTimeline {
    /** The index of the transform constraint slot in {@link Skeleton#transformConstraints} that will be changed. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, transformConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.transformConstraint + "|" + transformConstraintIndex
        ]);
        this.constraintIndex = transformConstraintIndex;
    }
    getFrameEntries() {
        return 7 /*ENTRIES*/;
    }
    /** The time in seconds, rotate mix, translate mix, scale mix, and shear mix for the specified key frame. */
    setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY) {
        let frames = this.frames;
        frame *= 7 /*ENTRIES*/;
        frames[frame] = time;
        frames[frame + 1 /*ROTATE*/] = mixRotate;
        frames[frame + 2 /*X*/] = mixX;
        frames[frame + 3 /*Y*/] = mixY;
        frames[frame + 4 /*SCALEX*/] = mixScaleX;
        frames[frame + 5 /*SCALEY*/] = mixScaleY;
        frames[frame + 6 /*SHEARY*/] = mixShearY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.transformConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            let data = constraint.data;
            switch (blend) {
                case MixBlend.setup:
                    constraint.mixRotate = data.mixRotate;
                    constraint.mixX = data.mixX;
                    constraint.mixY = data.mixY;
                    constraint.mixScaleX = data.mixScaleX;
                    constraint.mixScaleY = data.mixScaleY;
                    constraint.mixShearY = data.mixShearY;
                    return;
                case MixBlend.first:
                    constraint.mixRotate += (data.mixRotate - constraint.mixRotate) * alpha;
                    constraint.mixX += (data.mixX - constraint.mixX) * alpha;
                    constraint.mixY += (data.mixY - constraint.mixY) * alpha;
                    constraint.mixScaleX += (data.mixScaleX - constraint.mixScaleX) * alpha;
                    constraint.mixScaleY += (data.mixScaleY - constraint.mixScaleY) * alpha;
                    constraint.mixShearY += (data.mixShearY - constraint.mixShearY) * alpha;
            }
            return;
        }
        let rotate, x, y, scaleX, scaleY, shearY;
        let i = Timeline.search(frames, time, 7 /*ENTRIES*/);
        let curveType = this.curves[i / 7 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                scaleX = frames[i + 4 /*SCALEX*/];
                scaleY = frames[i + 5 /*SCALEY*/];
                shearY = frames[i + 6 /*SHEARY*/];
                let t = (time - before) / (frames[i + 7 /*ENTRIES*/] - before);
                rotate += (frames[i + 7 /*ENTRIES*/ + 1 /*ROTATE*/] - rotate) * t;
                x += (frames[i + 7 /*ENTRIES*/ + 2 /*X*/] - x) * t;
                y += (frames[i + 7 /*ENTRIES*/ + 3 /*Y*/] - y) * t;
                scaleX += (frames[i + 7 /*ENTRIES*/ + 4 /*SCALEX*/] - scaleX) * t;
                scaleY += (frames[i + 7 /*ENTRIES*/ + 5 /*SCALEY*/] - scaleY) * t;
                shearY += (frames[i + 7 /*ENTRIES*/ + 6 /*SHEARY*/] - shearY) * t;
                break;
            case 1 /*STEPPED*/:
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                scaleX = frames[i + 4 /*SCALEX*/];
                scaleY = frames[i + 5 /*SCALEY*/];
                shearY = frames[i + 6 /*SHEARY*/];
                break;
            default:
                rotate = this.getBezierValue(time, i, 1 /*ROTATE*/, curveType - 2 /*BEZIER*/);
                x = this.getBezierValue(time, i, 2 /*X*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 3 /*Y*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                scaleX = this.getBezierValue(time, i, 4 /*SCALEX*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                scaleY = this.getBezierValue(time, i, 5 /*SCALEY*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                shearY = this.getBezierValue(time, i, 6 /*SHEARY*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            let data = constraint.data;
            constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
            constraint.mixX = data.mixX + (x - data.mixX) * alpha;
            constraint.mixY = data.mixY + (y - data.mixY) * alpha;
            constraint.mixScaleX = data.mixScaleX + (scaleX - data.mixScaleX) * alpha;
            constraint.mixScaleY = data.mixScaleY + (scaleY - data.mixScaleY) * alpha;
            constraint.mixShearY = data.mixShearY + (shearY - data.mixShearY) * alpha;
        }
        else {
            constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
            constraint.mixX += (x - constraint.mixX) * alpha;
            constraint.mixY += (y - constraint.mixY) * alpha;
            constraint.mixScaleX += (scaleX - constraint.mixScaleX) * alpha;
            constraint.mixScaleY += (scaleY - constraint.mixScaleY) * alpha;
            constraint.mixShearY += (shearY - constraint.mixShearY) * alpha;
        }
    }
}
/** Changes a path constraint's {@link PathConstraint#position}. */
class PathConstraintPositionTimeline extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, Property.pathConstraintPosition + "|" + pathConstraintIndex);
        this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (constraint.active)
            constraint.position = this.getAbsoluteValue(time, alpha, blend, constraint.position, constraint.data.position);
    }
}
/** Changes a path constraint's {@link PathConstraint#spacing}. */
class PathConstraintSpacingTimeline extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, Property.pathConstraintSpacing + "|" + pathConstraintIndex);
        this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (constraint.active)
            constraint.spacing = this.getAbsoluteValue(time, alpha, blend, constraint.spacing, constraint.data.spacing);
    }
}
/** Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#getMixX()}, and
 * {@link PathConstraint#getMixY()}. */
class PathConstraintMixTimeline extends CurveTimeline {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.pathConstraintMix + "|" + pathConstraintIndex
        ]);
        this.constraintIndex = pathConstraintIndex;
    }
    getFrameEntries() {
        return 4 /*ENTRIES*/;
    }
    setFrame(frame, time, mixRotate, mixX, mixY) {
        let frames = this.frames;
        frame <<= 2;
        frames[frame] = time;
        frames[frame + 1 /*ROTATE*/] = mixRotate;
        frames[frame + 2 /*X*/] = mixX;
        frames[frame + 3 /*Y*/] = mixY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    constraint.mixRotate = constraint.data.mixRotate;
                    constraint.mixX = constraint.data.mixX;
                    constraint.mixY = constraint.data.mixY;
                    return;
                case MixBlend.first:
                    constraint.mixRotate += (constraint.data.mixRotate - constraint.mixRotate) * alpha;
                    constraint.mixX += (constraint.data.mixX - constraint.mixX) * alpha;
                    constraint.mixY += (constraint.data.mixY - constraint.mixY) * alpha;
            }
            return;
        }
        let rotate, x, y;
        let i = Timeline.search(frames, time, 4 /*ENTRIES*/);
        let curveType = this.curves[i >> 2];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                let t = (time - before) / (frames[i + 4 /*ENTRIES*/] - before);
                rotate += (frames[i + 4 /*ENTRIES*/ + 1 /*ROTATE*/] - rotate) * t;
                x += (frames[i + 4 /*ENTRIES*/ + 2 /*X*/] - x) * t;
                y += (frames[i + 4 /*ENTRIES*/ + 3 /*Y*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                break;
            default:
                rotate = this.getBezierValue(time, i, 1 /*ROTATE*/, curveType - 2 /*BEZIER*/);
                x = this.getBezierValue(time, i, 2 /*X*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 3 /*Y*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            let data = constraint.data;
            constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
            constraint.mixX = data.mixX + (x - data.mixX) * alpha;
            constraint.mixY = data.mixY + (y - data.mixY) * alpha;
        }
        else {
            constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
            constraint.mixX += (x - constraint.mixX) * alpha;
            constraint.mixY += (y - constraint.mixY) * alpha;
        }
    }
}
/** The base class for most {@link PhysicsConstraint} timelines. */
class PhysicsConstraintTimeline extends CurveTimeline1 {
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be changed when this timeline
     * is applied, or -1 if all physics constraints in the skeleton will be changed. */
    constraintIndex = 0;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, bezierCount, physicsConstraintIndex, property) {
        super(frameCount, bezierCount, property + "|" + physicsConstraintIndex);
        this.constraintIndex = physicsConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint;
        if (this.constraintIndex == -1) {
            const value = time >= this.frames[0] ? this.getCurveValue(time) : 0;
            for (const constraint of skeleton.physicsConstraints) {
                if (constraint.active && this.global(constraint.data))
                    this.set(constraint, this.getAbsoluteValue2(time, alpha, blend, this.get(constraint), this.setup(constraint), value));
            }
        }
        else {
            constraint = skeleton.physicsConstraints[this.constraintIndex];
            if (constraint.active)
                this.set(constraint, this.getAbsoluteValue(time, alpha, blend, this.get(constraint), this.setup(constraint)));
        }
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getInertia()}. */
class PhysicsConstraintInertiaTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintInertia);
    }
    setup(constraint) {
        return constraint.data.inertia;
    }
    get(constraint) {
        return constraint.inertia;
    }
    set(constraint, value) {
        constraint.inertia = value;
    }
    global(constraint) {
        return constraint.inertiaGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getStrength()}. */
class PhysicsConstraintStrengthTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintStrength);
    }
    setup(constraint) {
        return constraint.data.strength;
    }
    get(constraint) {
        return constraint.strength;
    }
    set(constraint, value) {
        constraint.strength = value;
    }
    global(constraint) {
        return constraint.strengthGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getDamping()}. */
class PhysicsConstraintDampingTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintDamping);
    }
    setup(constraint) {
        return constraint.data.damping;
    }
    get(constraint) {
        return constraint.damping;
    }
    set(constraint, value) {
        constraint.damping = value;
    }
    global(constraint) {
        return constraint.dampingGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getMassInverse()}. The timeline values are not inverted. */
class PhysicsConstraintMassTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMass);
    }
    setup(constraint) {
        return 1 / constraint.data.massInverse;
    }
    get(constraint) {
        return 1 / constraint.massInverse;
    }
    set(constraint, value) {
        constraint.massInverse = 1 / value;
    }
    global(constraint) {
        return constraint.massGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getWind()}. */
class PhysicsConstraintWindTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintWind);
    }
    setup(constraint) {
        return constraint.data.wind;
    }
    get(constraint) {
        return constraint.wind;
    }
    set(constraint, value) {
        constraint.wind = value;
    }
    global(constraint) {
        return constraint.windGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getGravity()}. */
class PhysicsConstraintGravityTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintGravity);
    }
    setup(constraint) {
        return constraint.data.gravity;
    }
    get(constraint) {
        return constraint.gravity;
    }
    set(constraint, value) {
        constraint.gravity = value;
    }
    global(constraint) {
        return constraint.gravityGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getMix()}. */
class PhysicsConstraintMixTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMix);
    }
    setup(constraint) {
        return constraint.data.mix;
    }
    get(constraint) {
        return constraint.mix;
    }
    set(constraint, value) {
        constraint.mix = value;
    }
    global(constraint) {
        return constraint.mixGlobal;
    }
}
/** Resets a physics constraint when specific animation times are reached. */
class PhysicsConstraintResetTimeline extends Timeline {
    static propertyIds = [Property.physicsConstraintReset.toString()];
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be reset when this timeline is
    * applied, or -1 if all physics constraints in the skeleton will be reset. */
    constraintIndex;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, physicsConstraintIndex) {
        super(frameCount, PhysicsConstraintResetTimeline.propertyIds);
        this.constraintIndex = physicsConstraintIndex;
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive. */
    setFrame(frame, time) {
        this.frames[frame] = time;
    }
    /** Resets the physics constraint when frames > <code>lastTime</code> and <= <code>time</code>. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint;
        if (this.constraintIndex != -1) {
            constraint = skeleton.physicsConstraints[this.constraintIndex];
            if (!constraint.active)
                return;
        }
        const frames = this.frames;
        if (lastTime > time) { // Apply after lastTime for looped animations.
            this.apply(skeleton, lastTime, Number.MAX_VALUE, [], alpha, blend, direction);
            lastTime = -1;
        }
        else if (lastTime >= frames[frames.length - 1]) // Last time is after last frame.
            return;
        if (time < frames[0])
            return;
        if (lastTime < frames[0] || time >= frames[Timeline.search1(frames, lastTime) + 1]) {
            if (constraint != null)
                constraint.reset();
            else {
                for (const constraint of skeleton.physicsConstraints) {
                    if (constraint.active)
                        constraint.reset();
                }
            }
        }
    }
}
/** Changes a slot's {@link Slot#getSequenceIndex()} for an attachment's {@link Sequence}. */
class SequenceTimeline extends Timeline {
    static ENTRIES = 3;
    static MODE = 1;
    static DELAY = 2;
    slotIndex;
    attachment;
    constructor(frameCount, slotIndex, attachment) {
        super(frameCount, [
            Property.sequence + "|" + slotIndex + "|" + attachment.sequence.id
        ]);
        this.slotIndex = slotIndex;
        this.attachment = attachment;
    }
    getFrameEntries() {
        return SequenceTimeline.ENTRIES;
    }
    getSlotIndex() {
        return this.slotIndex;
    }
    getAttachment() {
        return this.attachment;
    }
    /** Sets the time, mode, index, and frame time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time Seconds between frames. */
    setFrame(frame, time, mode, index, delay) {
        let frames = this.frames;
        frame *= SequenceTimeline.ENTRIES;
        frames[frame] = time;
        frames[frame + SequenceTimeline.MODE] = mode | (index << 4);
        frames[frame + SequenceTimeline.DELAY] = delay;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let slotAttachment = slot.attachment;
        let attachment = this.attachment;
        if (slotAttachment != attachment) {
            if (!(slotAttachment instanceof VertexAttachment)
                || slotAttachment.timelineAttachment != attachment)
                return;
        }
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                slot.sequenceIndex = -1;
            return;
        }
        let frames = this.frames;
        if (time < frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                slot.sequenceIndex = -1;
            return;
        }
        let i = Timeline.search(frames, time, SequenceTimeline.ENTRIES);
        let before = frames[i];
        let modeAndIndex = frames[i + SequenceTimeline.MODE];
        let delay = frames[i + SequenceTimeline.DELAY];
        if (!this.attachment.sequence)
            return;
        let index = modeAndIndex >> 4, count = this.attachment.sequence.regions.length;
        let mode = SequenceModeValues[modeAndIndex & 0xf];
        if (mode != SequenceMode.hold) {
            index += (((time - before) / delay + 0.00001) | 0);
            switch (mode) {
                case SequenceMode.once:
                    index = Math.min(count - 1, index);
                    break;
                case SequenceMode.loop:
                    index %= count;
                    break;
                case SequenceMode.pingpong: {
                    let n = (count << 1) - 2;
                    index = n == 0 ? 0 : index % n;
                    if (index >= count)
                        index = n - index;
                    break;
                }
                case SequenceMode.onceReverse:
                    index = Math.max(count - 1 - index, 0);
                    break;
                case SequenceMode.loopReverse:
                    index = count - 1 - (index % count);
                    break;
                case SequenceMode.pingpongReverse: {
                    let n = (count << 1) - 2;
                    index = n == 0 ? 0 : (index + count - 1) % n;
                    if (index >= count)
                        index = n - index;
                }
            }
        }
        slot.sequenceIndex = index;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Applies animations over time, queues animations for later playback, mixes (crossfading) between animations, and applies
 * multiple animations on top of each other (layering).
 *
 * See [Applying Animations](http://esotericsoftware.com/spine-applying-animations/) in the Spine Runtimes Guide. */
class AnimationState {
    static _emptyAnimation = new Animation("<empty>", [], 0);
    static emptyAnimation() {
        return AnimationState._emptyAnimation;
    }
    /** The AnimationStateData to look up mix durations. */
    data;
    /** The list of tracks that currently have animations, which may contain null entries. */
    tracks = new Array();
    /** Multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower
     * or faster. Defaults to 1.
     *
     * See TrackEntry {@link TrackEntry#timeScale} for affecting a single animation. */
    timeScale = 1;
    unkeyedState = 0;
    events = new Array();
    listeners = new Array();
    queue = new EventQueue(this);
    propertyIDs = new StringSet();
    animationsChanged = false;
    trackEntryPool = new Pool(() => new TrackEntry());
    constructor(data) {
        this.data = data;
    }
    /** Increments each track entry {@link TrackEntry#trackTime()}, setting queued animations as current if needed. */
    update(delta) {
        delta *= this.timeScale;
        let tracks = this.tracks;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let current = tracks[i];
            if (!current)
                continue;
            current.animationLast = current.nextAnimationLast;
            current.trackLast = current.nextTrackLast;
            let currentDelta = delta * current.timeScale;
            if (current.delay > 0) {
                current.delay -= currentDelta;
                if (current.delay > 0)
                    continue;
                currentDelta = -current.delay;
                current.delay = 0;
            }
            let next = current.next;
            if (next) {
                // When the next entry's delay is passed, change to the next entry, preserving leftover time.
                let nextTime = current.trackLast - next.delay;
                if (nextTime >= 0) {
                    next.delay = 0;
                    next.trackTime += current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
                    current.trackTime += currentDelta;
                    this.setCurrent(i, next, true);
                    while (next.mixingFrom) {
                        next.mixTime += delta;
                        next = next.mixingFrom;
                    }
                    continue;
                }
            }
            else if (current.trackLast >= current.trackEnd && !current.mixingFrom) {
                tracks[i] = null;
                this.queue.end(current);
                this.clearNext(current);
                continue;
            }
            if (current.mixingFrom && this.updateMixingFrom(current, delta)) {
                // End mixing from entries once all have completed.
                let from = current.mixingFrom;
                current.mixingFrom = null;
                if (from)
                    from.mixingTo = null;
                while (from) {
                    this.queue.end(from);
                    from = from.mixingFrom;
                }
            }
            current.trackTime += currentDelta;
        }
        this.queue.drain();
    }
    /** Returns true when all mixing from entries are complete. */
    updateMixingFrom(to, delta) {
        let from = to.mixingFrom;
        if (!from)
            return true;
        let finished = this.updateMixingFrom(from, delta);
        from.animationLast = from.nextAnimationLast;
        from.trackLast = from.nextTrackLast;
        if (to.nextTrackLast != -1) { // The from entry was applied at least once.
            const discard = to.mixTime == 0 && from.mixTime == 0; // Discard the from entry when neither have advanced yet.
            if (to.mixTime >= to.mixDuration || discard) {
                // Require totalAlpha == 0 to ensure mixing is complete or the transition is a single frame or discarded.
                if (from.totalAlpha == 0 || to.mixDuration == 0 || discard) {
                    to.mixingFrom = from.mixingFrom;
                    if (from.mixingFrom != null)
                        from.mixingFrom.mixingTo = to;
                    to.interruptAlpha = from.interruptAlpha;
                    this.queue.end(from);
                }
                return finished;
            }
        }
        from.trackTime += delta * from.timeScale;
        to.mixTime += delta;
        return false;
    }
    /** Poses the skeleton using the track entry animations. There are no side effects other than invoking listeners, so the
     * animation state can be applied to multiple skeletons to pose them identically.
     * @returns True if any animations were applied. */
    apply(skeleton) {
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        if (this.animationsChanged)
            this._animationsChanged();
        let events = this.events;
        let tracks = this.tracks;
        let applied = false;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let current = tracks[i];
            if (!current || current.delay > 0)
                continue;
            applied = true;
            let blend = i == 0 ? MixBlend.first : current.mixBlend;
            // Apply mixing from entries first.
            let alpha = current.alpha;
            if (current.mixingFrom)
                alpha *= this.applyMixingFrom(current, skeleton, blend);
            else if (current.trackTime >= current.trackEnd && !current.next)
                alpha = 0;
            let attachments = alpha >= current.alphaAttachmentThreshold;
            // Apply current entry.
            let animationLast = current.animationLast, animationTime = current.getAnimationTime(), applyTime = animationTime;
            let applyEvents = events;
            if (current.reverse) {
                applyTime = current.animation.duration - applyTime;
                applyEvents = null;
            }
            let timelines = current.animation.timelines;
            let timelineCount = timelines.length;
            if ((i == 0 && alpha == 1) || blend == MixBlend.add) {
                if (i == 0)
                    attachments = true;
                for (let ii = 0; ii < timelineCount; ii++) {
                    var timeline = timelines[ii];
                    if (timeline instanceof AttachmentTimeline)
                        this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
                    else
                        timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, blend, MixDirection.mixIn);
                }
            }
            else {
                let timelineMode = current.timelineMode;
                let shortestRotation = current.shortestRotation;
                let firstFrame = !shortestRotation && current.timelinesRotation.length != timelineCount << 1;
                if (firstFrame)
                    current.timelinesRotation.length = timelineCount << 1;
                for (let ii = 0; ii < timelineCount; ii++) {
                    let timeline = timelines[ii];
                    let timelineBlend = timelineMode[ii] == SUBSEQUENT ? blend : MixBlend.setup;
                    if (!shortestRotation && timeline instanceof RotateTimeline) {
                        this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, current.timelinesRotation, ii << 1, firstFrame);
                    }
                    else if (timeline instanceof AttachmentTimeline) {
                        this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
                    }
                    else {
                        timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, timelineBlend, MixDirection.mixIn);
                    }
                }
            }
            this.queueEvents(current, animationTime);
            events.length = 0;
            current.nextAnimationLast = animationTime;
            current.nextTrackLast = current.trackTime;
        }
        // Set slots attachments to the setup pose, if needed. This occurs if an animation that is mixing out sets attachments so
        // subsequent timelines see any deform, but the subsequent timelines don't set an attachment (eg they are also mixing out or
        // the time is before the first key).
        var setupState = this.unkeyedState + SETUP;
        var slots = skeleton.slots;
        for (var i = 0, n = skeleton.slots.length; i < n; i++) {
            var slot = slots[i];
            if (slot.attachmentState == setupState) {
                var attachmentName = slot.data.attachmentName;
                slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
            }
        }
        this.unkeyedState += 2; // Increasing after each use avoids the need to reset attachmentState for every slot.
        this.queue.drain();
        return applied;
    }
    applyMixingFrom(to, skeleton, blend) {
        let from = to.mixingFrom;
        if (from.mixingFrom)
            this.applyMixingFrom(from, skeleton, blend);
        let mix = 0;
        if (to.mixDuration == 0) { // Single frame mix to undo mixingFrom changes.
            mix = 1;
            if (blend == MixBlend.first)
                blend = MixBlend.setup;
        }
        else {
            mix = to.mixTime / to.mixDuration;
            if (mix > 1)
                mix = 1;
            if (blend != MixBlend.first)
                blend = from.mixBlend;
        }
        let attachments = mix < from.mixAttachmentThreshold, drawOrder = mix < from.mixDrawOrderThreshold;
        let timelines = from.animation.timelines;
        let timelineCount = timelines.length;
        let alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
        let animationLast = from.animationLast, animationTime = from.getAnimationTime(), applyTime = animationTime;
        let events = null;
        if (from.reverse)
            applyTime = from.animation.duration - applyTime;
        else if (mix < from.eventThreshold)
            events = this.events;
        if (blend == MixBlend.add) {
            for (let i = 0; i < timelineCount; i++)
                timelines[i].apply(skeleton, animationLast, applyTime, events, alphaMix, blend, MixDirection.mixOut);
        }
        else {
            let timelineMode = from.timelineMode;
            let timelineHoldMix = from.timelineHoldMix;
            let shortestRotation = from.shortestRotation;
            let firstFrame = !shortestRotation && from.timelinesRotation.length != timelineCount << 1;
            if (firstFrame)
                from.timelinesRotation.length = timelineCount << 1;
            from.totalAlpha = 0;
            for (let i = 0; i < timelineCount; i++) {
                let timeline = timelines[i];
                let direction = MixDirection.mixOut;
                let timelineBlend;
                let alpha = 0;
                switch (timelineMode[i]) {
                    case SUBSEQUENT:
                        if (!drawOrder && timeline instanceof DrawOrderTimeline)
                            continue;
                        timelineBlend = blend;
                        alpha = alphaMix;
                        break;
                    case FIRST:
                        timelineBlend = MixBlend.setup;
                        alpha = alphaMix;
                        break;
                    case HOLD_SUBSEQUENT:
                        timelineBlend = blend;
                        alpha = alphaHold;
                        break;
                    case HOLD_FIRST:
                        timelineBlend = MixBlend.setup;
                        alpha = alphaHold;
                        break;
                    default:
                        timelineBlend = MixBlend.setup;
                        let holdMix = timelineHoldMix[i];
                        alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
                        break;
                }
                from.totalAlpha += alpha;
                if (!shortestRotation && timeline instanceof RotateTimeline)
                    this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, from.timelinesRotation, i << 1, firstFrame);
                else if (timeline instanceof AttachmentTimeline)
                    this.applyAttachmentTimeline(timeline, skeleton, applyTime, timelineBlend, attachments && alpha >= from.alphaAttachmentThreshold);
                else {
                    if (drawOrder && timeline instanceof DrawOrderTimeline && timelineBlend == MixBlend.setup)
                        direction = MixDirection.mixIn;
                    timeline.apply(skeleton, animationLast, applyTime, events, alpha, timelineBlend, direction);
                }
            }
        }
        if (to.mixDuration > 0)
            this.queueEvents(from, animationTime);
        this.events.length = 0;
        from.nextAnimationLast = animationTime;
        from.nextTrackLast = from.trackTime;
        return mix;
    }
    applyAttachmentTimeline(timeline, skeleton, time, blend, attachments) {
        var slot = skeleton.slots[timeline.slotIndex];
        if (!slot.bone.active)
            return;
        if (time < timeline.frames[0]) { // Time is before first frame.
            if (blend == MixBlend.setup || blend == MixBlend.first)
                this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
        }
        else
            this.setAttachment(skeleton, slot, timeline.attachmentNames[Timeline.search1(timeline.frames, time)], attachments);
        // If an attachment wasn't set (ie before the first frame or attachments is false), set the setup attachment later.
        if (slot.attachmentState <= this.unkeyedState)
            slot.attachmentState = this.unkeyedState + SETUP;
    }
    setAttachment(skeleton, slot, attachmentName, attachments) {
        slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
        if (attachments)
            slot.attachmentState = this.unkeyedState + CURRENT;
    }
    applyRotateTimeline(timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
        if (firstFrame)
            timelinesRotation[i] = 0;
        if (alpha == 1) {
            timeline.apply(skeleton, 0, time, null, 1, blend, MixDirection.mixIn);
            return;
        }
        let bone = skeleton.bones[timeline.boneIndex];
        if (!bone.active)
            return;
        let frames = timeline.frames;
        let r1 = 0, r2 = 0;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.rotation = bone.data.rotation;
                default:
                    return;
                case MixBlend.first:
                    r1 = bone.rotation;
                    r2 = bone.data.rotation;
            }
        }
        else {
            r1 = blend == MixBlend.setup ? bone.data.rotation : bone.rotation;
            r2 = bone.data.rotation + timeline.getCurveValue(time);
        }
        // Mix between rotations using the direction of the shortest route on the first frame while detecting crosses.
        let total = 0, diff = r2 - r1;
        diff -= Math.ceil(diff / 360 - 0.5) * 360;
        if (diff == 0) {
            total = timelinesRotation[i];
        }
        else {
            let lastTotal = 0, lastDiff = 0;
            if (firstFrame) {
                lastTotal = 0;
                lastDiff = diff;
            }
            else {
                lastTotal = timelinesRotation[i];
                lastDiff = timelinesRotation[i + 1];
            }
            let loops = lastTotal - lastTotal % 360;
            total = diff + loops;
            let current = diff >= 0, dir = lastTotal >= 0;
            if (Math.abs(lastDiff) <= 90 && MathUtils.signum(lastDiff) != MathUtils.signum(diff)) {
                if (Math.abs(lastTotal - loops) > 180) {
                    total += 360 * MathUtils.signum(lastTotal);
                    dir = current;
                }
                else if (loops != 0)
                    total -= 360 * MathUtils.signum(lastTotal);
                else
                    dir = current;
            }
            if (dir != current)
                total += 360 * MathUtils.signum(lastTotal);
            timelinesRotation[i] = total;
        }
        timelinesRotation[i + 1] = diff;
        bone.rotation = r1 + total * alpha;
    }
    queueEvents(entry, animationTime) {
        let animationStart = entry.animationStart, animationEnd = entry.animationEnd;
        let duration = animationEnd - animationStart;
        let trackLastWrapped = entry.trackLast % duration;
        // Queue events before complete.
        let events = this.events;
        let i = 0, n = events.length;
        for (; i < n; i++) {
            let event = events[i];
            if (event.time < trackLastWrapped)
                break;
            if (event.time > animationEnd)
                continue; // Discard events outside animation start/end.
            this.queue.event(entry, event);
        }
        // Queue complete if completed a loop iteration or the animation.
        let complete = false;
        if (entry.loop) {
            if (duration == 0)
                complete = true;
            else {
                const cycles = Math.floor(entry.trackTime / duration);
                complete = cycles > 0 && cycles > Math.floor(entry.trackLast / duration);
            }
        }
        else
            complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
        if (complete)
            this.queue.complete(entry);
        // Queue events after complete.
        for (; i < n; i++) {
            let event = events[i];
            if (event.time < animationStart)
                continue; // Discard events outside animation start/end.
            this.queue.event(entry, event);
        }
    }
    /** Removes all animations from all tracks, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTracks() {
        let oldDrainDisabled = this.queue.drainDisabled;
        this.queue.drainDisabled = true;
        for (let i = 0, n = this.tracks.length; i < n; i++)
            this.clearTrack(i);
        this.tracks.length = 0;
        this.queue.drainDisabled = oldDrainDisabled;
        this.queue.drain();
    }
    /** Removes all animations from the track, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTrack(trackIndex) {
        if (trackIndex >= this.tracks.length)
            return;
        let current = this.tracks[trackIndex];
        if (!current)
            return;
        this.queue.end(current);
        this.clearNext(current);
        let entry = current;
        while (true) {
            let from = entry.mixingFrom;
            if (!from)
                break;
            this.queue.end(from);
            entry.mixingFrom = null;
            entry.mixingTo = null;
            entry = from;
        }
        this.tracks[current.trackIndex] = null;
        this.queue.drain();
    }
    setCurrent(index, current, interrupt) {
        let from = this.expandToIndex(index);
        this.tracks[index] = current;
        current.previous = null;
        if (from) {
            if (interrupt)
                this.queue.interrupt(from);
            current.mixingFrom = from;
            from.mixingTo = current;
            current.mixTime = 0;
            // Store the interrupted mix percentage.
            if (from.mixingFrom && from.mixDuration > 0)
                current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
            from.timelinesRotation.length = 0; // Reset rotation for mixing out, in case entry was mixed in.
        }
        this.queue.start(current);
    }
    /** Sets an animation by name.
      *
      * See {@link #setAnimationWith()}. */
    setAnimation(trackIndex, animationName, loop = false) {
        let animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation)
            throw new Error("Animation not found: " + animationName);
        return this.setAnimationWith(trackIndex, animation, loop);
    }
    /** Sets the current animation for a track, discarding any queued animations. If the formerly current track entry was never
     * applied to a skeleton, it is replaced (not mixed from).
     * @param loop If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     *           duration. In either case {@link TrackEntry#trackEnd} determines when the track is cleared.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    setAnimationWith(trackIndex, animation, loop = false) {
        if (!animation)
            throw new Error("animation cannot be null.");
        let interrupt = true;
        let current = this.expandToIndex(trackIndex);
        if (current) {
            if (current.nextTrackLast == -1) {
                // Don't mix from an entry that was never applied.
                this.tracks[trackIndex] = current.mixingFrom;
                this.queue.interrupt(current);
                this.queue.end(current);
                this.clearNext(current);
                current = current.mixingFrom;
                interrupt = false;
            }
            else
                this.clearNext(current);
        }
        let entry = this.trackEntry(trackIndex, animation, loop, current);
        this.setCurrent(trackIndex, entry, interrupt);
        this.queue.drain();
        return entry;
    }
    /** Queues an animation by name.
     *
     * See {@link #addAnimationWith()}. */
    addAnimation(trackIndex, animationName, loop = false, delay = 0) {
        let animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation)
            throw new Error("Animation not found: " + animationName);
        return this.addAnimationWith(trackIndex, animation, loop, delay);
    }
    /** Adds an animation to be played after the current or last queued animation for a track. If the track is empty, it is
     * equivalent to calling {@link #setAnimationWith()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration (from the {@link AnimationStateData}) plus the specified `delay` (ie the mix
     *           ends at (`delay` = 0) or before (`delay` < 0) the previous track entry duration). If the
     *           previous entry is looping, its next loop completion is used instead of its duration.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addAnimationWith(trackIndex, animation, loop = false, delay = 0) {
        if (!animation)
            throw new Error("animation cannot be null.");
        let last = this.expandToIndex(trackIndex);
        if (last) {
            while (last.next)
                last = last.next;
        }
        let entry = this.trackEntry(trackIndex, animation, loop, last);
        if (!last) {
            this.setCurrent(trackIndex, entry, true);
            this.queue.drain();
        }
        else {
            last.next = entry;
            entry.previous = last;
            if (delay <= 0)
                delay += last.getTrackComplete() - entry.mixDuration;
        }
        entry.delay = delay;
        return entry;
    }
    /** Sets an empty animation for a track, discarding any queued animations, and sets the track entry's
     * {@link TrackEntry#mixduration}. An empty animation has no timelines and serves as a placeholder for mixing in or out.
     *
     * Mixing out is done by setting an empty animation with a mix duration using either {@link #setEmptyAnimation()},
     * {@link #setEmptyAnimations()}, or {@link #addEmptyAnimation()}. Mixing to an empty animation causes
     * the previous animation to be applied less and less over the mix duration. Properties keyed in the previous animation
     * transition to the value from lower tracks or to the setup pose value if no lower tracks key the property. A mix duration of
     * 0 still mixes out over one frame.
     *
     * Mixing in is done by first setting an empty animation, then adding an animation using
     * {@link #addAnimation()} and on the returned track entry, set the
     * {@link TrackEntry#setMixDuration()}. Mixing from an empty animation causes the new animation to be applied more and
     * more over the mix duration. Properties keyed in the new animation transition from the value from lower tracks or from the
     * setup pose value if no lower tracks key the property to the value keyed in the new animation. */
    setEmptyAnimation(trackIndex, mixDuration = 0) {
        let entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation(), false);
        entry.mixDuration = mixDuration;
        entry.trackEnd = mixDuration;
        return entry;
    }
    /** Adds an empty animation to be played after the current or last queued animation for a track, and sets the track entry's
     * {@link TrackEntry#mixDuration}. If the track is empty, it is equivalent to calling
     * {@link #setEmptyAnimation()}.
     *
     * See {@link #setEmptyAnimation()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration plus the specified `delay` (ie the mix ends at (`delay` = 0) or
     *           before (`delay` < 0) the previous track entry duration). If the previous entry is looping, its next
     *           loop completion is used instead of its duration.
     * @return A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addEmptyAnimation(trackIndex, mixDuration = 0, delay = 0) {
        let entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation(), false, delay);
        if (delay <= 0)
            entry.delay += entry.mixDuration - mixDuration;
        entry.mixDuration = mixDuration;
        entry.trackEnd = mixDuration;
        return entry;
    }
    /** Sets an empty animation for every track, discarding any queued animations, and mixes to it over the specified mix
      * duration. */
    setEmptyAnimations(mixDuration = 0) {
        let oldDrainDisabled = this.queue.drainDisabled;
        this.queue.drainDisabled = true;
        for (let i = 0, n = this.tracks.length; i < n; i++) {
            let current = this.tracks[i];
            if (current)
                this.setEmptyAnimation(current.trackIndex, mixDuration);
        }
        this.queue.drainDisabled = oldDrainDisabled;
        this.queue.drain();
    }
    expandToIndex(index) {
        if (index < this.tracks.length)
            return this.tracks[index];
        Utils.ensureArrayCapacity(this.tracks, index + 1, null);
        this.tracks.length = index + 1;
        return null;
    }
    /** @param last May be null. */
    trackEntry(trackIndex, animation, loop, last) {
        let entry = this.trackEntryPool.obtain();
        entry.reset();
        entry.trackIndex = trackIndex;
        entry.animation = animation;
        entry.loop = loop;
        entry.holdPrevious = false;
        entry.reverse = false;
        entry.shortestRotation = false;
        entry.eventThreshold = 0;
        entry.alphaAttachmentThreshold = 0;
        entry.mixAttachmentThreshold = 0;
        entry.mixDrawOrderThreshold = 0;
        entry.animationStart = 0;
        entry.animationEnd = animation.duration;
        entry.animationLast = -1;
        entry.nextAnimationLast = -1;
        entry.delay = 0;
        entry.trackTime = 0;
        entry.trackLast = -1;
        entry.nextTrackLast = -1;
        entry.trackEnd = Number.MAX_VALUE;
        entry.timeScale = 1;
        entry.alpha = 1;
        entry.mixTime = 0;
        entry.mixDuration = !last ? 0 : this.data.getMix(last.animation, animation);
        entry.interruptAlpha = 1;
        entry.totalAlpha = 0;
        entry.mixBlend = MixBlend.replace;
        return entry;
    }
    /** Removes the {@link TrackEntry#getNext() next entry} and all entries after it for the specified entry. */
    clearNext(entry) {
        let next = entry.next;
        while (next) {
            this.queue.dispose(next);
            next = next.next;
        }
        entry.next = null;
    }
    _animationsChanged() {
        this.animationsChanged = false;
        this.propertyIDs.clear();
        let tracks = this.tracks;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let entry = tracks[i];
            if (!entry)
                continue;
            while (entry.mixingFrom)
                entry = entry.mixingFrom;
            do {
                if (!entry.mixingTo || entry.mixBlend != MixBlend.add)
                    this.computeHold(entry);
                entry = entry.mixingTo;
            } while (entry);
        }
    }
    computeHold(entry) {
        let to = entry.mixingTo;
        let timelines = entry.animation.timelines;
        let timelinesCount = entry.animation.timelines.length;
        let timelineMode = entry.timelineMode;
        timelineMode.length = timelinesCount;
        let timelineHoldMix = entry.timelineHoldMix;
        timelineHoldMix.length = 0;
        let propertyIDs = this.propertyIDs;
        if (to && to.holdPrevious) {
            for (let i = 0; i < timelinesCount; i++)
                timelineMode[i] = propertyIDs.addAll(timelines[i].getPropertyIds()) ? HOLD_FIRST : HOLD_SUBSEQUENT;
            return;
        }
        outer: for (let i = 0; i < timelinesCount; i++) {
            let timeline = timelines[i];
            let ids = timeline.getPropertyIds();
            if (!propertyIDs.addAll(ids))
                timelineMode[i] = SUBSEQUENT;
            else if (!to || timeline instanceof AttachmentTimeline || timeline instanceof DrawOrderTimeline
                || timeline instanceof EventTimeline || !to.animation.hasTimeline(ids)) {
                timelineMode[i] = FIRST;
            }
            else {
                for (let next = to.mixingTo; next; next = next.mixingTo) {
                    if (next.animation.hasTimeline(ids))
                        continue;
                    if (entry.mixDuration > 0) {
                        timelineMode[i] = HOLD_MIX;
                        timelineHoldMix[i] = next;
                        continue outer;
                    }
                    break;
                }
                timelineMode[i] = HOLD_FIRST;
            }
        }
    }
    /** Returns the track entry for the animation currently playing on the track, or null if no animation is currently playing. */
    getCurrent(trackIndex) {
        if (trackIndex >= this.tracks.length)
            return null;
        return this.tracks[trackIndex];
    }
    /** Adds a listener to receive events for all track entries. */
    addListener(listener) {
        if (!listener)
            throw new Error("listener cannot be null.");
        this.listeners.push(listener);
    }
    /** Removes the listener added with {@link #addListener()}. */
    removeListener(listener) {
        let index = this.listeners.indexOf(listener);
        if (index >= 0)
            this.listeners.splice(index, 1);
    }
    /** Removes all listeners added with {@link #addListener()}. */
    clearListeners() {
        this.listeners.length = 0;
    }
    /** Discards all listener notifications that have not yet been delivered. This can be useful to call from an
     * {@link AnimationStateListener} when it is known that further notifications that may have been already queued for delivery
     * are not wanted because new animations are being set. */
    clearListenerNotifications() {
        this.queue.clear();
    }
}
/** Stores settings and other state for the playback of an animation on an {@link AnimationState} track.
 *
 * References to a track entry must not be kept after the {@link AnimationStateListener#dispose()} event occurs. */
class TrackEntry {
    /** The animation to apply for this track entry. */
    animation = null;
    previous = null;
    /** The animation queued to start after this animation, or null. `next` makes up a linked list. */
    next = null;
    /** The track entry for the previous animation when mixing from the previous animation to this animation, or null if no
     * mixing is currently occuring. When mixing from multiple animations, `mixingFrom` makes up a linked list. */
    mixingFrom = null;
    /** The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is
     * currently occuring. When mixing to multiple animations, `mixingTo` makes up a linked list. */
    mixingTo = null;
    /** The listener for events generated by this track entry, or null.
     *
     * A track entry returned from {@link AnimationState#setAnimation()} is already the current animation
     * for the track, so the track entry listener {@link AnimationStateListener#start()} will not be called. */
    listener = null;
    /** The index of the track where this track entry is either current or queued.
     *
     * See {@link AnimationState#getCurrent()}. */
    trackIndex = 0;
    /** If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     * duration. */
    loop = false;
    /** If true, when mixing from the previous animation to this animation, the previous animation is applied as normal instead
     * of being mixed out.
     *
     * When mixing between animations that key the same property, if a lower track also keys that property then the value will
     * briefly dip toward the lower track value during the mix. This happens because the first animation mixes from 100% to 0%
     * while the second animation mixes from 0% to 100%. Setting `holdPrevious` to true applies the first animation
     * at 100% during the mix so the lower track value is overwritten. Such dipping does not occur on the lowest track which
     * keys the property, only when a higher track also keys the property.
     *
     * Snapping will occur if `holdPrevious` is true and this animation does not key all the same properties as the
     * previous animation. */
    holdPrevious = false;
    reverse = false;
    shortestRotation = false;
    /** When the mix percentage ({@link #mixTime} / {@link #mixDuration}) is less than the
     * `eventThreshold`, event timelines are applied while this animation is being mixed out. Defaults to 0, so event
     * timelines are not applied while this animation is being mixed out. */
    eventThreshold = 0;
    /** When the mix percentage ({@link #mixtime} / {@link #mixDuration}) is less than the
     * `attachmentThreshold`, attachment timelines are applied while this animation is being mixed out. Defaults to
     * 0, so attachment timelines are not applied while this animation is being mixed out. */
    mixAttachmentThreshold = 0;
    /** When {@link #getAlpha()} is greater than <code>alphaAttachmentThreshold</code>, attachment timelines are applied.
     * Defaults to 0, so attachment timelines are always applied. */
    alphaAttachmentThreshold = 0;
    /** When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
     * <code>mixDrawOrderThreshold</code>, draw order timelines are applied while this animation is being mixed out. Defaults to
     * 0, so draw order timelines are not applied while this animation is being mixed out. */
    mixDrawOrderThreshold = 0;
    /** Seconds when this animation starts, both initially and after looping. Defaults to 0.
     *
     * When changing the `animationStart` time, it often makes sense to set {@link #animationLast} to the same
     * value to prevent timeline keys before the start time from triggering. */
    animationStart = 0;
    /** Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will
     * loop back to {@link #animationStart} at this time. Defaults to the animation {@link Animation#duration}. */
    animationEnd = 0;
    /** The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this
     * animation is applied, event timelines will fire all events between the `animationLast` time (exclusive) and
     * `animationTime` (inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation
     * is applied. */
    animationLast = 0;
    nextAnimationLast = 0;
    /** Seconds to postpone playing the animation. When this track entry is the current track entry, `delay`
     * postpones incrementing the {@link #trackTime}. When this track entry is queued, `delay` is the time from
     * the start of the previous animation to when this track entry will become the current track entry (ie when the previous
     * track entry {@link TrackEntry#trackTime} >= this track entry's `delay`).
     *
     * {@link #timeScale} affects the delay. */
    delay = 0;
    /** Current time in seconds this track entry has been the current track entry. The track time determines
     * {@link #animationTime}. The track time can be set to start the animation at a time other than 0, without affecting
     * looping. */
    trackTime = 0;
    trackLast = 0;
    nextTrackLast = 0;
    /** The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float
     * value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time
     * is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the
     * properties keyed by the animation are set to the setup pose and the track is cleared.
     *
     * It may be desired to use {@link AnimationState#addEmptyAnimation()} rather than have the animation
     * abruptly cease being applied. */
    trackEnd = 0;
    /** Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or
     * faster. Defaults to 1.
     *
     * {@link #mixTime} is not affected by track entry time scale, so {@link #mixDuration} may need to be adjusted to
     * match the animation speed.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, assuming time scale to be 1. If
     * the time scale is not 1, the delay may need to be adjusted.
     *
     * See AnimationState {@link AnimationState#timeScale} for affecting all animations. */
    timeScale = 0;
    /** Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults
     * to 1, which overwrites the skeleton's current pose with this animation.
     *
     * Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to
     * use alpha on track 0 if the skeleton pose is from the last frame render. */
    alpha = 0;
    /** Seconds from 0 to the {@link #getMixDuration()} when mixing from the previous animation to this animation. May be
     * slightly more than `mixDuration` when the mix is complete. */
    mixTime = 0;
    /** Seconds for mixing from the previous animation to this animation. Defaults to the value provided by AnimationStateData
     * {@link AnimationStateData#getMix()} based on the animation before this animation (if any).
     *
     * A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the
     * properties it was animating.
     *
     * The `mixDuration` can be set manually rather than use the value from
     * {@link AnimationStateData#getMix()}. In that case, the `mixDuration` can be set for a new
     * track entry only before {@link AnimationState#update(float)} is first called.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, not a mix duration set
     * afterward. */
    _mixDuration = 0;
    interruptAlpha = 0;
    totalAlpha = 0;
    get mixDuration() {
        return this._mixDuration;
    }
    set mixDuration(mixDuration) {
        this._mixDuration = mixDuration;
    }
    setMixDurationWithDelay(mixDuration, delay) {
        this._mixDuration = mixDuration;
        if (this.previous != null && delay <= 0)
            delay += this.previous.getTrackComplete() - mixDuration;
        this.delay = delay;
    }
    /** Controls how properties keyed in the animation are mixed with lower tracks. Defaults to {@link MixBlend#replace}, which
     * replaces the values from the lower tracks with the animation values. {@link MixBlend#add} adds the animation values to
     * the values from the lower tracks.
     *
     * The `mixBlend` can be set for a new track entry only before {@link AnimationState#apply()} is first
     * called. */
    mixBlend = MixBlend.replace;
    timelineMode = new Array();
    timelineHoldMix = new Array();
    timelinesRotation = new Array();
    reset() {
        this.next = null;
        this.previous = null;
        this.mixingFrom = null;
        this.mixingTo = null;
        this.animation = null;
        this.listener = null;
        this.timelineMode.length = 0;
        this.timelineHoldMix.length = 0;
        this.timelinesRotation.length = 0;
    }
    /** Uses {@link #trackTime} to compute the `animationTime`, which is between {@link #animationStart}
     * and {@link #animationEnd}. When the `trackTime` is 0, the `animationTime` is equal to the
     * `animationStart` time. */
    getAnimationTime() {
        if (this.loop) {
            let duration = this.animationEnd - this.animationStart;
            if (duration == 0)
                return this.animationStart;
            return (this.trackTime % duration) + this.animationStart;
        }
        return Math.min(this.trackTime + this.animationStart, this.animationEnd);
    }
    setAnimationLast(animationLast) {
        this.animationLast = animationLast;
        this.nextAnimationLast = animationLast;
    }
    /** Returns true if at least one loop has been completed.
     *
     * See {@link AnimationStateListener#complete()}. */
    isComplete() {
        return this.trackTime >= this.animationEnd - this.animationStart;
    }
    /** Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the
     * long way around when using {@link #alpha} and starting animations on other tracks.
     *
     * Mixing with {@link MixBlend#replace} involves finding a rotation between two others, which has two possible solutions:
     * the short way or the long way around. The two rotations likely change over time, so which direction is the short or long
     * way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the
     * long way. TrackEntry chooses the short way the first time it is applied and remembers that direction. */
    resetRotationDirections() {
        this.timelinesRotation.length = 0;
    }
    getTrackComplete() {
        let duration = this.animationEnd - this.animationStart;
        if (duration != 0) {
            if (this.loop)
                return duration * (1 + ((this.trackTime / duration) | 0)); // Completion of next loop.
            if (this.trackTime < duration)
                return duration; // Before duration.
        }
        return this.trackTime; // Next update.
    }
    /** Returns true if this track entry has been applied at least once.
     * <p>
     * See {@link AnimationState#apply(Skeleton)}. */
    wasApplied() {
        return this.nextTrackLast != -1;
    }
    /** Returns true if there is a {@link #getNext()} track entry and it will become the current track entry during the next
     * {@link AnimationState#update(float)}. */
    isNextReady() {
        return this.next != null && this.nextTrackLast - this.next.delay >= 0;
    }
}
class EventQueue {
    objects = [];
    drainDisabled = false;
    animState;
    constructor(animState) {
        this.animState = animState;
    }
    start(entry) {
        this.objects.push(EventType.start);
        this.objects.push(entry);
        this.animState.animationsChanged = true;
    }
    interrupt(entry) {
        this.objects.push(EventType.interrupt);
        this.objects.push(entry);
    }
    end(entry) {
        this.objects.push(EventType.end);
        this.objects.push(entry);
        this.animState.animationsChanged = true;
    }
    dispose(entry) {
        this.objects.push(EventType.dispose);
        this.objects.push(entry);
    }
    complete(entry) {
        this.objects.push(EventType.complete);
        this.objects.push(entry);
    }
    event(entry, event) {
        this.objects.push(EventType.event);
        this.objects.push(entry);
        this.objects.push(event);
    }
    drain() {
        if (this.drainDisabled)
            return;
        this.drainDisabled = true;
        let objects = this.objects;
        let listeners = this.animState.listeners;
        for (let i = 0; i < objects.length; i += 2) {
            let type = objects[i];
            let entry = objects[i + 1];
            switch (type) {
                case EventType.start:
                    if (entry.listener && entry.listener.start)
                        entry.listener.start(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.start)
                            listener.start(entry);
                    }
                    break;
                case EventType.interrupt:
                    if (entry.listener && entry.listener.interrupt)
                        entry.listener.interrupt(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.interrupt)
                            listener.interrupt(entry);
                    }
                    break;
                case EventType.end:
                    if (entry.listener && entry.listener.end)
                        entry.listener.end(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.end)
                            listener.end(entry);
                    }
                // Fall through.
                case EventType.dispose:
                    if (entry.listener && entry.listener.dispose)
                        entry.listener.dispose(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.dispose)
                            listener.dispose(entry);
                    }
                    this.animState.trackEntryPool.free(entry);
                    break;
                case EventType.complete:
                    if (entry.listener && entry.listener.complete)
                        entry.listener.complete(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.complete)
                            listener.complete(entry);
                    }
                    break;
                case EventType.event:
                    let event = objects[i++ + 2];
                    if (entry.listener && entry.listener.event)
                        entry.listener.event(entry, event);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.event)
                            listener.event(entry, event);
                    }
                    break;
            }
        }
        this.clear();
        this.drainDisabled = false;
    }
    clear() {
        this.objects.length = 0;
    }
}
var EventType;
(function (EventType) {
    EventType[EventType["start"] = 0] = "start";
    EventType[EventType["interrupt"] = 1] = "interrupt";
    EventType[EventType["end"] = 2] = "end";
    EventType[EventType["dispose"] = 3] = "dispose";
    EventType[EventType["complete"] = 4] = "complete";
    EventType[EventType["event"] = 5] = "event";
})(EventType || (EventType = {}));
/** 1. A previously applied timeline has set this property.
 *
 * Result: Mix from the current pose to the timeline pose. */
const SUBSEQUENT = 0;
/** 1. This is the first timeline to set this property.
 * 2. The next track entry applied after this one does not have a timeline to set this property.
 *
 * Result: Mix from the setup pose to the timeline pose. */
const FIRST = 1;
/** 1) A previously applied timeline has set this property.<br>
 * 2) The next track entry to be applied does have a timeline to set this property.<br>
 * 3) The next track entry after that one does not have a timeline to set this property.<br>
 * Result: Mix from the current pose to the timeline pose, but do not mix out. This avoids "dipping" when crossfading
 * animations that key the same property. A subsequent timeline will set this property using a mix. */
const HOLD_SUBSEQUENT = 2;
/** 1) This is the first timeline to set this property.<br>
 * 2) The next track entry to be applied does have a timeline to set this property.<br>
 * 3) The next track entry after that one does not have a timeline to set this property.<br>
 * Result: Mix from the setup pose to the timeline pose, but do not mix out. This avoids "dipping" when crossfading animations
 * that key the same property. A subsequent timeline will set this property using a mix. */
const HOLD_FIRST = 3;
/** 1. This is the first timeline to set this property.
 * 2. The next track entry to be applied does have a timeline to set this property.
 * 3. The next track entry after that one does have a timeline to set this property.
 * 4. timelineHoldMix stores the first subsequent track entry that does not have a timeline to set this property.
 *
 * Result: The same as HOLD except the mix percentage from the timelineHoldMix track entry is used. This handles when more than
 * 2 track entries in a row have a timeline that sets the same property.
 *
 * Eg, A -> B -> C -> D where A, B, and C have a timeline setting same property, but D does not. When A is applied, to avoid
 * "dipping" A is not mixed out, however D (the first entry that doesn't set the property) mixing in is used to mix out A
 * (which affects B and C). Without using D to mix out, A would be applied fully until mixing completes, then snap into
 * place. */
const HOLD_MIX = 4;
const SETUP = 1;
const CURRENT = 2;

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. */
class AnimationStateData {
    /** The SkeletonData to look up animations when they are specified by name. */
    skeletonData;
    animationToMixTime = {};
    /** The mix duration to use when no mix duration has been defined between two animations. */
    defaultMix = 0;
    constructor(skeletonData) {
        if (!skeletonData)
            throw new Error("skeletonData cannot be null.");
        this.skeletonData = skeletonData;
    }
    /** Sets a mix duration by animation name.
     *
     * See {@link #setMixWith()}. */
    setMix(fromName, toName, duration) {
        let from = this.skeletonData.findAnimation(fromName);
        if (!from)
            throw new Error("Animation not found: " + fromName);
        let to = this.skeletonData.findAnimation(toName);
        if (!to)
            throw new Error("Animation not found: " + toName);
        this.setMixWith(from, to, duration);
    }
    /** Sets the mix duration when changing from the specified animation to the other.
     *
     * See {@link TrackEntry#mixDuration}. */
    setMixWith(from, to, duration) {
        if (!from)
            throw new Error("from cannot be null.");
        if (!to)
            throw new Error("to cannot be null.");
        let key = from.name + "." + to.name;
        this.animationToMixTime[key] = duration;
    }
    /** Returns the mix duration to use when changing from the specified animation to the other, or the {@link #defaultMix} if
      * no mix duration has been set. */
    getMix(from, to) {
        let key = from.name + "." + to.name;
        let value = this.animationToMixTime[key];
        return value === undefined ? this.defaultMix : value;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment with vertices that make up a polygon. Can be used for hit detection, creating physics bodies, spawning particle
 * effects, and more.
 *
 * See {@link SkeletonBounds} and [Bounding Boxes](http://esotericsoftware.com/spine-bounding-boxes) in the Spine User
 * Guide. */
class BoundingBoxAttachment extends VertexAttachment {
    color = new Color(1, 1, 1, 1);
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new BoundingBoxAttachment(this.name);
        this.copyTo(copy);
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment with vertices that make up a polygon used for clipping the rendering of other attachments. */
class ClippingAttachment extends VertexAttachment {
    /** Clipping is performed between the clipping polygon's slot and the end slot. Returns null if clipping is done until the end of
     * the skeleton's rendering. */
    endSlot = null;
    // Nonessential.
    /** The color of the clipping polygon as it was in Spine. Available only when nonessential data was exported. Clipping polygons
     * are not usually rendered at runtime. */
    color = new Color(0.2275, 0.2275, 0.8078, 1); // ce3a3aff
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new ClippingAttachment(this.name);
        this.copyTo(copy);
        copy.endSlot = this.endSlot;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class Texture {
    _image;
    constructor(image) {
        this._image = image;
    }
    getImage() {
        return this._image;
    }
}
var TextureFilter;
(function (TextureFilter) {
    TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
    TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
    TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
    TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
    TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
    TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
    TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear"; // WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
})(TextureFilter || (TextureFilter = {}));
var TextureWrap;
(function (TextureWrap) {
    TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
    TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
    TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat"; // WebGLRenderingContext.REPEAT
})(TextureWrap || (TextureWrap = {}));
class TextureRegion {
    texture;
    u = 0;
    v = 0;
    u2 = 0;
    v2 = 0;
    width = 0;
    height = 0;
    degrees = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class TextureAtlas {
    pages = new Array();
    regions = new Array();
    constructor(atlasText) {
        let reader = new TextureAtlasReader(atlasText);
        let entry = new Array(4);
        let pageFields = {};
        pageFields["size"] = (page) => {
            page.width = parseInt(entry[1]);
            page.height = parseInt(entry[2]);
        };
        pageFields["format"] = () => {
            // page.format = Format[tuple[0]]; we don't need format in WebGL
        };
        pageFields["filter"] = (page) => {
            page.minFilter = Utils.enumValue(TextureFilter, entry[1]);
            page.magFilter = Utils.enumValue(TextureFilter, entry[2]);
        };
        pageFields["repeat"] = (page) => {
            if (entry[1].indexOf('x') != -1)
                page.uWrap = TextureWrap.Repeat;
            if (entry[1].indexOf('y') != -1)
                page.vWrap = TextureWrap.Repeat;
        };
        pageFields["pma"] = (page) => {
            page.pma = entry[1] == "true";
        };
        var regionFields = {};
        regionFields["xy"] = (region) => {
            region.x = parseInt(entry[1]);
            region.y = parseInt(entry[2]);
        };
        regionFields["size"] = (region) => {
            region.width = parseInt(entry[1]);
            region.height = parseInt(entry[2]);
        };
        regionFields["bounds"] = (region) => {
            region.x = parseInt(entry[1]);
            region.y = parseInt(entry[2]);
            region.width = parseInt(entry[3]);
            region.height = parseInt(entry[4]);
        };
        regionFields["offset"] = (region) => {
            region.offsetX = parseInt(entry[1]);
            region.offsetY = parseInt(entry[2]);
        };
        regionFields["orig"] = (region) => {
            region.originalWidth = parseInt(entry[1]);
            region.originalHeight = parseInt(entry[2]);
        };
        regionFields["offsets"] = (region) => {
            region.offsetX = parseInt(entry[1]);
            region.offsetY = parseInt(entry[2]);
            region.originalWidth = parseInt(entry[3]);
            region.originalHeight = parseInt(entry[4]);
        };
        regionFields["rotate"] = (region) => {
            let value = entry[1];
            if (value == "true")
                region.degrees = 90;
            else if (value != "false")
                region.degrees = parseInt(value);
        };
        regionFields["index"] = (region) => {
            region.index = parseInt(entry[1]);
        };
        let line = reader.readLine();
        // Ignore empty lines before first entry.
        while (line && line.trim().length == 0)
            line = reader.readLine();
        // Header entries.
        while (true) {
            if (!line || line.trim().length == 0)
                break;
            if (reader.readEntry(entry, line) == 0)
                break; // Silently ignore all header fields.
            line = reader.readLine();
        }
        // Page and region entries.
        let page = null;
        let names = null;
        let values = null;
        while (true) {
            if (line === null)
                break;
            if (line.trim().length == 0) {
                page = null;
                line = reader.readLine();
            }
            else if (!page) {
                page = new TextureAtlasPage(line.trim());
                while (true) {
                    if (reader.readEntry(entry, line = reader.readLine()) == 0)
                        break;
                    let field = pageFields[entry[0]];
                    if (field)
                        field(page);
                }
                this.pages.push(page);
            }
            else {
                let region = new TextureAtlasRegion(page, line);
                while (true) {
                    let count = reader.readEntry(entry, line = reader.readLine());
                    if (count == 0)
                        break;
                    let field = regionFields[entry[0]];
                    if (field)
                        field(region);
                    else {
                        if (!names)
                            names = [];
                        if (!values)
                            values = [];
                        names.push(entry[0]);
                        let entryValues = [];
                        for (let i = 0; i < count; i++)
                            entryValues.push(parseInt(entry[i + 1]));
                        values.push(entryValues);
                    }
                }
                if (region.originalWidth == 0 && region.originalHeight == 0) {
                    region.originalWidth = region.width;
                    region.originalHeight = region.height;
                }
                if (names && names.length > 0 && values && values.length > 0) {
                    region.names = names;
                    region.values = values;
                    names = null;
                    values = null;
                }
                region.u = region.x / page.width;
                region.v = region.y / page.height;
                if (region.degrees == 90) {
                    region.u2 = (region.x + region.height) / page.width;
                    region.v2 = (region.y + region.width) / page.height;
                }
                else {
                    region.u2 = (region.x + region.width) / page.width;
                    region.v2 = (region.y + region.height) / page.height;
                }
                this.regions.push(region);
            }
        }
    }
    findRegion(name) {
        for (let i = 0; i < this.regions.length; i++) {
            if (this.regions[i].name == name) {
                return this.regions[i];
            }
        }
        return null;
    }
    setTextures(assetManager, pathPrefix = "") {
        for (let page of this.pages)
            page.setTexture(assetManager.get(pathPrefix + page.name));
    }
    dispose() {
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].texture?.dispose();
        }
    }
}
class TextureAtlasReader {
    lines;
    index = 0;
    constructor(text) {
        this.lines = text.split(/\r\n|\r|\n/);
    }
    readLine() {
        if (this.index >= this.lines.length)
            return null;
        return this.lines[this.index++];
    }
    readEntry(entry, line) {
        if (!line)
            return 0;
        line = line.trim();
        if (line.length == 0)
            return 0;
        let colon = line.indexOf(':');
        if (colon == -1)
            return 0;
        entry[0] = line.substr(0, colon).trim();
        for (let i = 1, lastMatch = colon + 1;; i++) {
            let comma = line.indexOf(',', lastMatch);
            if (comma == -1) {
                entry[i] = line.substr(lastMatch).trim();
                return i;
            }
            entry[i] = line.substr(lastMatch, comma - lastMatch).trim();
            lastMatch = comma + 1;
            if (i == 4)
                return 4;
        }
    }
}
class TextureAtlasPage {
    name;
    minFilter = TextureFilter.Nearest;
    magFilter = TextureFilter.Nearest;
    uWrap = TextureWrap.ClampToEdge;
    vWrap = TextureWrap.ClampToEdge;
    texture = null;
    width = 0;
    height = 0;
    pma = false;
    regions = new Array();
    constructor(name) {
        this.name = name;
    }
    setTexture(texture) {
        this.texture = texture;
        texture.setFilters(this.minFilter, this.magFilter);
        texture.setWraps(this.uWrap, this.vWrap);
        for (let region of this.regions)
            region.texture = texture;
    }
}
class TextureAtlasRegion extends TextureRegion {
    page;
    name;
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
    index = 0;
    degrees = 0;
    names = null;
    values = null;
    constructor(page, name) {
        super();
        this.page = page;
        this.name = name;
        page.regions.push(this);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment that displays a textured mesh. A mesh has hull vertices and internal vertices within the hull. Holes are not
 * supported. Each vertex has UVs (texture coordinates) and triangles are used to map an image on to the mesh.
 *
 * See [Mesh attachments](http://esotericsoftware.com/spine-meshes) in the Spine User Guide. */
class MeshAttachment extends VertexAttachment {
    region = null;
    /** The name of the texture region for this attachment. */
    path;
    /** The UV pair for each vertex, normalized within the texture region. */
    regionUVs = [];
    /** The UV pair for each vertex, normalized within the entire texture.
     *
     * See {@link #updateUVs}. */
    uvs = [];
    /** Triplets of vertex indices which describe the mesh's triangulation. */
    triangles = [];
    /** The color to tint the mesh. */
    color = new Color(1, 1, 1, 1);
    /** The width of the mesh's image. Available only when nonessential data was exported. */
    width = 0;
    /** The height of the mesh's image. Available only when nonessential data was exported. */
    height = 0;
    /** The number of entries at the beginning of {@link #vertices} that make up the mesh hull. */
    hullLength = 0;
    /** Vertex index pairs describing edges for controling triangulation. Mesh triangles will never cross edges. Only available if
     * nonessential data was exported. Triangulation is not performed at runtime. */
    edges = [];
    parentMesh = null;
    sequence = null;
    tempColor = new Color(0, 0, 0, 0);
    constructor(name, path) {
        super(name);
        this.path = path;
    }
    /** Calculates {@link #uvs} using the {@link #regionUVs} and region. Must be called if the region, the region's properties, or
     * the {@link #regionUVs} are changed. */
    updateRegion() {
        if (!this.region)
            throw new Error("Region not set.");
        let regionUVs = this.regionUVs;
        if (!this.uvs || this.uvs.length != regionUVs.length)
            this.uvs = Utils.newFloatArray(regionUVs.length);
        let uvs = this.uvs;
        let n = this.uvs.length;
        let u = this.region.u, v = this.region.v, width = 0, height = 0;
        if (this.region instanceof TextureAtlasRegion) {
            let region = this.region, page = region.page;
            let textureWidth = page.width, textureHeight = page.height;
            switch (region.degrees) {
                case 90:
                    u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
                    v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
                    width = region.originalHeight / textureWidth;
                    height = region.originalWidth / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + regionUVs[i + 1] * width;
                        uvs[i + 1] = v + (1 - regionUVs[i]) * height;
                    }
                    return;
                case 180:
                    u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
                    v -= region.offsetY / textureHeight;
                    width = region.originalWidth / textureWidth;
                    height = region.originalHeight / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + (1 - regionUVs[i]) * width;
                        uvs[i + 1] = v + (1 - regionUVs[i + 1]) * height;
                    }
                    return;
                case 270:
                    u -= region.offsetY / textureWidth;
                    v -= region.offsetX / textureHeight;
                    width = region.originalHeight / textureWidth;
                    height = region.originalWidth / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + (1 - regionUVs[i + 1]) * width;
                        uvs[i + 1] = v + regionUVs[i] * height;
                    }
                    return;
            }
            u -= region.offsetX / textureWidth;
            v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;
        }
        else if (!this.region) {
            u = v = 0;
            width = height = 1;
        }
        else {
            width = this.region.u2 - u;
            height = this.region.v2 - v;
        }
        for (let i = 0; i < n; i += 2) {
            uvs[i] = u + regionUVs[i] * width;
            uvs[i + 1] = v + regionUVs[i + 1] * height;
        }
    }
    /** The parent mesh if this is a linked mesh, else null. A linked mesh shares the {@link #bones}, {@link #vertices},
     * {@link #regionUVs}, {@link #triangles}, {@link #hullLength}, {@link #edges}, {@link #width}, and {@link #height} with the
     * parent mesh, but may have a different {@link #name} or {@link #path} (and therefore a different texture). */
    getParentMesh() {
        return this.parentMesh;
    }
    /** @param parentMesh May be null. */
    setParentMesh(parentMesh) {
        this.parentMesh = parentMesh;
        if (parentMesh) {
            this.bones = parentMesh.bones;
            this.vertices = parentMesh.vertices;
            this.worldVerticesLength = parentMesh.worldVerticesLength;
            this.regionUVs = parentMesh.regionUVs;
            this.triangles = parentMesh.triangles;
            this.hullLength = parentMesh.hullLength;
            this.worldVerticesLength = parentMesh.worldVerticesLength;
        }
    }
    copy() {
        if (this.parentMesh)
            return this.newLinkedMesh();
        let copy = new MeshAttachment(this.name, this.path);
        copy.region = this.region;
        copy.color.setFromColor(this.color);
        this.copyTo(copy);
        copy.regionUVs = new Array(this.regionUVs.length);
        Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
        copy.uvs = new Array(this.uvs.length);
        Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
        copy.triangles = new Array(this.triangles.length);
        Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
        copy.hullLength = this.hullLength;
        copy.sequence = this.sequence != null ? this.sequence.copy() : null;
        // Nonessential.
        if (this.edges) {
            copy.edges = new Array(this.edges.length);
            Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
        }
        copy.width = this.width;
        copy.height = this.height;
        return copy;
    }
    computeWorldVertices(slot, start, count, worldVertices, offset, stride) {
        if (this.sequence != null)
            this.sequence.apply(slot, this);
        super.computeWorldVertices(slot, start, count, worldVertices, offset, stride);
    }
    /** Returns a new mesh with the {@link #parentMesh} set to this mesh's parent mesh, if any, else to this mesh. **/
    newLinkedMesh() {
        let copy = new MeshAttachment(this.name, this.path);
        copy.region = this.region;
        copy.color.setFromColor(this.color);
        copy.timelineAttachment = this.timelineAttachment;
        copy.setParentMesh(this.parentMesh ? this.parentMesh : this);
        if (copy.region != null)
            copy.updateRegion();
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment whose vertices make up a composite Bezier curve.
 *
 * See {@link PathConstraint} and [Paths](http://esotericsoftware.com/spine-paths) in the Spine User Guide. */
class PathAttachment extends VertexAttachment {
    /** The lengths along the path in the setup pose from the start of the path to the end of each Bezier curve. */
    lengths = [];
    /** If true, the start and end knots are connected. */
    closed = false;
    /** If true, additional calculations are performed to make calculating positions along the path more accurate. If false, fewer
     * calculations are performed but calculating positions along the path is less accurate. */
    constantSpeed = false;
    /** The color of the path as it was in Spine. Available only when nonessential data was exported. Paths are not usually
     * rendered at runtime. */
    color = new Color(1, 1, 1, 1);
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new PathAttachment(this.name);
        this.copyTo(copy);
        copy.lengths = new Array(this.lengths.length);
        Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
        copy.closed = closed;
        copy.constantSpeed = this.constantSpeed;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment which is a single point and a rotation. This can be used to spawn projectiles, particles, etc. A bone can be
 * used in similar ways, but a PointAttachment is slightly less expensive to compute and can be hidden, shown, and placed in a
 * skin.
 *
 * See [Point Attachments](http://esotericsoftware.com/spine-point-attachments) in the Spine User Guide. */
class PointAttachment extends VertexAttachment {
    x = 0;
    y = 0;
    rotation = 0;
    /** The color of the point attachment as it was in Spine. Available only when nonessential data was exported. Point attachments
     * are not usually rendered at runtime. */
    color = new Color(0.38, 0.94, 0, 1);
    constructor(name) {
        super(name);
    }
    computeWorldPosition(bone, point) {
        point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
        point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
        return point;
    }
    computeWorldRotation(bone) {
        const r = this.rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
        const x = cos * bone.a + sin * bone.b;
        const y = cos * bone.c + sin * bone.d;
        return MathUtils.atan2Deg(y, x);
    }
    copy() {
        let copy = new PointAttachment(this.name);
        copy.x = this.x;
        copy.y = this.y;
        copy.rotation = this.rotation;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment that displays a textured quadrilateral.
 *
 * See [Region attachments](http://esotericsoftware.com/spine-regions) in the Spine User Guide. */
class RegionAttachment extends Attachment {
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local rotation. */
    rotation = 0;
    /** The width of the region attachment in Spine. */
    width = 0;
    /** The height of the region attachment in Spine. */
    height = 0;
    /** The color to tint the region attachment. */
    color = new Color(1, 1, 1, 1);
    /** The name of the texture region for this attachment. */
    path;
    region = null;
    sequence = null;
    /** For each of the 4 vertices, a pair of <code>x,y</code> values that is the local position of the vertex.
     *
     * See {@link #updateOffset()}. */
    offset = Utils.newFloatArray(8);
    uvs = Utils.newFloatArray(8);
    tempColor = new Color(1, 1, 1, 1);
    constructor(name, path) {
        super(name);
        this.path = path;
    }
    /** Calculates the {@link #offset} using the region settings. Must be called after changing region settings. */
    updateRegion() {
        if (!this.region)
            throw new Error("Region not set.");
        let region = this.region;
        let uvs = this.uvs;
        if (region == null) {
            uvs[0] = 0;
            uvs[1] = 0;
            uvs[2] = 0;
            uvs[3] = 1;
            uvs[4] = 1;
            uvs[5] = 1;
            uvs[6] = 1;
            uvs[7] = 0;
            return;
        }
        let regionScaleX = this.width / this.region.originalWidth * this.scaleX;
        let regionScaleY = this.height / this.region.originalHeight * this.scaleY;
        let localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
        let localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
        let localX2 = localX + this.region.width * regionScaleX;
        let localY2 = localY + this.region.height * regionScaleY;
        let radians = this.rotation * MathUtils.degRad;
        let cos = Math.cos(radians);
        let sin = Math.sin(radians);
        let x = this.x, y = this.y;
        let localXCos = localX * cos + x;
        let localXSin = localX * sin;
        let localYCos = localY * cos + y;
        let localYSin = localY * sin;
        let localX2Cos = localX2 * cos + x;
        let localX2Sin = localX2 * sin;
        let localY2Cos = localY2 * cos + y;
        let localY2Sin = localY2 * sin;
        let offset = this.offset;
        offset[0] = localXCos - localYSin;
        offset[1] = localYCos + localXSin;
        offset[2] = localXCos - localY2Sin;
        offset[3] = localY2Cos + localXSin;
        offset[4] = localX2Cos - localY2Sin;
        offset[5] = localY2Cos + localX2Sin;
        offset[6] = localX2Cos - localYSin;
        offset[7] = localYCos + localX2Sin;
        if (region.degrees == 90) {
            uvs[0] = region.u2;
            uvs[1] = region.v2;
            uvs[2] = region.u;
            uvs[3] = region.v2;
            uvs[4] = region.u;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v;
        }
        else {
            uvs[0] = region.u;
            uvs[1] = region.v2;
            uvs[2] = region.u;
            uvs[3] = region.v;
            uvs[4] = region.u2;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v2;
        }
    }
    /** Transforms the attachment's four vertices to world coordinates. If the attachment has a {@link #sequence}, the region may
     * be changed.
     * <p>
     * See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide.
     * @param worldVertices The output world vertices. Must have a length >= <code>offset</code> + 8.
     * @param offset The <code>worldVertices</code> index to begin writing values.
     * @param stride The number of <code>worldVertices</code> entries between the value pairs written. */
    computeWorldVertices(slot, worldVertices, offset, stride) {
        if (this.sequence != null)
            this.sequence.apply(slot, this);
        let bone = slot.bone;
        let vertexOffset = this.offset;
        let x = bone.worldX, y = bone.worldY;
        let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
        let offsetX = 0, offsetY = 0;
        offsetX = vertexOffset[0];
        offsetY = vertexOffset[1];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // br
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[2];
        offsetY = vertexOffset[3];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // bl
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[4];
        offsetY = vertexOffset[5];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // ul
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[6];
        offsetY = vertexOffset[7];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // ur
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
    }
    copy() {
        let copy = new RegionAttachment(this.name, this.path);
        copy.region = this.region;
        copy.x = this.x;
        copy.y = this.y;
        copy.scaleX = this.scaleX;
        copy.scaleY = this.scaleY;
        copy.rotation = this.rotation;
        copy.width = this.width;
        copy.height = this.height;
        Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
        Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
        copy.color.setFromColor(this.color);
        copy.sequence = this.sequence != null ? this.sequence.copy() : null;
        return copy;
    }
    static X1 = 0;
    static Y1 = 1;
    static C1R = 2;
    static C1G = 3;
    static C1B = 4;
    static C1A = 5;
    static U1 = 6;
    static V1 = 7;
    static X2 = 8;
    static Y2 = 9;
    static C2R = 10;
    static C2G = 11;
    static C2B = 12;
    static C2A = 13;
    static U2 = 14;
    static V2 = 15;
    static X3 = 16;
    static Y3 = 17;
    static C3R = 18;
    static C3G = 19;
    static C3B = 20;
    static C3A = 21;
    static U3 = 22;
    static V3 = 23;
    static X4 = 24;
    static Y4 = 25;
    static C4R = 26;
    static C4G = 27;
    static C4B = 28;
    static C4A = 29;
    static U4 = 30;
    static V4 = 31;
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An {@link AttachmentLoader} that configures attachments using texture regions from an {@link TextureAtlas}.
 *
 * See [Loading skeleton data](http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data) in the
 * Spine Runtimes Guide. */
class AtlasAttachmentLoader {
    atlas;
    constructor(atlas) {
        this.atlas = atlas;
    }
    loadSequence(name, basePath, sequence) {
        let regions = sequence.regions;
        for (let i = 0, n = regions.length; i < n; i++) {
            let path = sequence.getPath(basePath, i);
            let region = this.atlas.findRegion(path);
            if (region == null)
                throw new Error("Region not found in atlas: " + path + " (sequence: " + name + ")");
            regions[i] = region;
        }
    }
    newRegionAttachment(skin, name, path, sequence) {
        let attachment = new RegionAttachment(name, path);
        if (sequence != null) {
            this.loadSequence(name, path, sequence);
        }
        else {
            let region = this.atlas.findRegion(path);
            if (!region)
                throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
            attachment.region = region;
        }
        return attachment;
    }
    newMeshAttachment(skin, name, path, sequence) {
        let attachment = new MeshAttachment(name, path);
        if (sequence != null) {
            this.loadSequence(name, path, sequence);
        }
        else {
            let region = this.atlas.findRegion(path);
            if (!region)
                throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
            attachment.region = region;
        }
        return attachment;
    }
    newBoundingBoxAttachment(skin, name) {
        return new BoundingBoxAttachment(name);
    }
    newPathAttachment(skin, name) {
        return new PathAttachment(name);
    }
    newPointAttachment(skin, name) {
        return new PointAttachment(name);
    }
    newClippingAttachment(skin, name) {
        return new ClippingAttachment(name);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link Bone}. */
class BoneData {
    /** The index of the bone in {@link Skeleton#getBones()}. */
    index = 0;
    /** The name of the bone, which is unique across all bones in the skeleton. */
    name;
    /** @returns May be null. */
    parent = null;
    /** The bone's length. */
    length = 0;
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local shearX. */
    shearX = 0;
    /** The local shearX. */
    shearY = 0;
    /** The transform mode for how parent world transforms affect this bone. */
    inherit = Inherit.Normal;
    /** When true, {@link Skeleton#updateWorldTransform()} only updates this bone if the {@link Skeleton#skin} contains this
      * bone.
      * @see Skin#bones */
    skinRequired = false;
    /** The color of the bone as it was in Spine. Available only when nonessential data was exported. Bones are not usually
     * rendered at runtime. */
    color = new Color();
    /** The bone icon as it was in Spine, or null if nonessential data was not exported. */
    icon;
    /** False if the bone was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = false;
    constructor(index, name, parent) {
        if (index < 0)
            throw new Error("index must be >= 0.");
        if (!name)
            throw new Error("name cannot be null.");
        this.index = index;
        this.name = name;
        this.parent = parent;
    }
}
/** Determines how a bone inherits world transforms from parent bones. */
var Inherit;
(function (Inherit) {
    Inherit[Inherit["Normal"] = 0] = "Normal";
    Inherit[Inherit["OnlyTranslation"] = 1] = "OnlyTranslation";
    Inherit[Inherit["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
    Inherit[Inherit["NoScale"] = 3] = "NoScale";
    Inherit[Inherit["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
})(Inherit || (Inherit = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores a bone's current pose.
 *
 * A bone has a local transform which is used to compute its world transform. A bone also has an applied transform, which is a
 * local transform that can be applied to compute the world transform. The local transform and applied transform may differ if a
 * constraint or application code modifies the world transform after it was computed from the local transform. */
class Bone {
    /** The bone's setup pose data. */
    data;
    /** The skeleton this bone belongs to. */
    skeleton;
    /** The parent bone, or null if this is the root bone. */
    parent = null;
    /** The immediate children of this bone. */
    children = new Array();
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 0;
    /** The local scaleY. */
    scaleY = 0;
    /** The local shearX. */
    shearX = 0;
    /** The local shearY. */
    shearY = 0;
    /** The applied local x translation. */
    ax = 0;
    /** The applied local y translation. */
    ay = 0;
    /** The applied local rotation in degrees, counter clockwise. */
    arotation = 0;
    /** The applied local scaleX. */
    ascaleX = 0;
    /** The applied local scaleY. */
    ascaleY = 0;
    /** The applied local shearX. */
    ashearX = 0;
    /** The applied local shearY. */
    ashearY = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    a = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    b = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    c = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    d = 0;
    /** The world X position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldY = 0;
    /** The world Y position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldX = 0;
    inherit = Inherit.Normal;
    sorted = false;
    active = false;
    /** @param parent May be null. */
    constructor(data, skeleton, parent) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.skeleton = skeleton;
        this.parent = parent;
        this.setToSetupPose();
    }
    /** Returns false when the bone has not been computed because {@link BoneData#skinRequired} is true and the
      * {@link Skeleton#skin active skin} does not {@link Skin#bones contain} this bone. */
    isActive() {
        return this.active;
    }
    /** Computes the world transform using the parent bone and this bone's local applied transform. */
    update(physics) {
        this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this.ashearY);
    }
    /** Computes the world transform using the parent bone and this bone's local transform.
     *
     * See {@link #updateWorldTransformWith()}. */
    updateWorldTransform() {
        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
    }
    /** Computes the world transform using the parent bone and the specified local transform. The applied transform is set to the
     * specified local transform. Child bones are not updated.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransformWith(x, y, rotation, scaleX, scaleY, shearX, shearY) {
        this.ax = x;
        this.ay = y;
        this.arotation = rotation;
        this.ascaleX = scaleX;
        this.ascaleY = scaleY;
        this.ashearX = shearX;
        this.ashearY = shearY;
        let parent = this.parent;
        if (!parent) { // Root bone.
            let skeleton = this.skeleton;
            const sx = skeleton.scaleX, sy = skeleton.scaleY;
            const rx = (rotation + shearX) * MathUtils.degRad;
            const ry = (rotation + 90 + shearY) * MathUtils.degRad;
            this.a = Math.cos(rx) * scaleX * sx;
            this.b = Math.cos(ry) * scaleY * sx;
            this.c = Math.sin(rx) * scaleX * sy;
            this.d = Math.sin(ry) * scaleY * sy;
            this.worldX = x * sx + skeleton.x;
            this.worldY = y * sy + skeleton.y;
            return;
        }
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        this.worldX = pa * x + pb * y + parent.worldX;
        this.worldY = pc * x + pd * y + parent.worldY;
        switch (this.inherit) {
            case Inherit.Normal: {
                const rx = (rotation + shearX) * MathUtils.degRad;
                const ry = (rotation + 90 + shearY) * MathUtils.degRad;
                const la = Math.cos(rx) * scaleX;
                const lb = Math.cos(ry) * scaleY;
                const lc = Math.sin(rx) * scaleX;
                const ld = Math.sin(ry) * scaleY;
                this.a = pa * la + pb * lc;
                this.b = pa * lb + pb * ld;
                this.c = pc * la + pd * lc;
                this.d = pc * lb + pd * ld;
                return;
            }
            case Inherit.OnlyTranslation: {
                const rx = (rotation + shearX) * MathUtils.degRad;
                const ry = (rotation + 90 + shearY) * MathUtils.degRad;
                this.a = Math.cos(rx) * scaleX;
                this.b = Math.cos(ry) * scaleY;
                this.c = Math.sin(rx) * scaleX;
                this.d = Math.sin(ry) * scaleY;
                break;
            }
            case Inherit.NoRotationOrReflection: {
                let sx = 1 / this.skeleton.scaleX, sy = 1 / this.skeleton.scaleY;
                pa *= sx;
                pc *= sy;
                let s = pa * pa + pc * pc;
                let prx = 0;
                if (s > 0.0001) {
                    s = Math.abs(pa * pd * sy - pb * sx * pc) / s;
                    pb = pc * s;
                    pd = pa * s;
                    prx = Math.atan2(pc, pa) * MathUtils.radDeg;
                }
                else {
                    pa = 0;
                    pc = 0;
                    prx = 90 - Math.atan2(pd, pb) * MathUtils.radDeg;
                }
                const rx = (rotation + shearX - prx) * MathUtils.degRad;
                const ry = (rotation + shearY - prx + 90) * MathUtils.degRad;
                const la = Math.cos(rx) * scaleX;
                const lb = Math.cos(ry) * scaleY;
                const lc = Math.sin(rx) * scaleX;
                const ld = Math.sin(ry) * scaleY;
                this.a = pa * la - pb * lc;
                this.b = pa * lb - pb * ld;
                this.c = pc * la + pd * lc;
                this.d = pc * lb + pd * ld;
                break;
            }
            case Inherit.NoScale:
            case Inherit.NoScaleOrReflection: {
                rotation *= MathUtils.degRad;
                const cos = Math.cos(rotation), sin = Math.sin(rotation);
                let za = (pa * cos + pb * sin) / this.skeleton.scaleX;
                let zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
                let s = Math.sqrt(za * za + zc * zc);
                if (s > 0.00001)
                    s = 1 / s;
                za *= s;
                zc *= s;
                s = Math.sqrt(za * za + zc * zc);
                if (this.inherit == Inherit.NoScale
                    && (pa * pd - pb * pc < 0) != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0))
                    s = -s;
                rotation = Math.PI / 2 + Math.atan2(zc, za);
                const zb = Math.cos(rotation) * s;
                const zd = Math.sin(rotation) * s;
                shearX *= MathUtils.degRad;
                shearY = (90 + shearY) * MathUtils.degRad;
                const la = Math.cos(shearX) * scaleX;
                const lb = Math.cos(shearY) * scaleY;
                const lc = Math.sin(shearX) * scaleX;
                const ld = Math.sin(shearY) * scaleY;
                this.a = za * la + zb * lc;
                this.b = za * lb + zb * ld;
                this.c = zc * la + zd * lc;
                this.d = zc * lb + zd * ld;
                break;
            }
        }
        this.a *= this.skeleton.scaleX;
        this.b *= this.skeleton.scaleX;
        this.c *= this.skeleton.scaleY;
        this.d *= this.skeleton.scaleY;
    }
    /** Sets this bone's local transform to the setup pose. */
    setToSetupPose() {
        let data = this.data;
        this.x = data.x;
        this.y = data.y;
        this.rotation = data.rotation;
        this.scaleX = data.scaleX;
        this.scaleY = data.scaleY;
        this.shearX = data.shearX;
        this.shearY = data.shearY;
        this.inherit = data.inherit;
    }
    /** Computes the applied transform values from the world transform.
     *
     * If the world transform is modified (by a constraint, {@link #rotateWorld(float)}, etc) then this method should be called so
     * the applied transform matches the world transform. The applied transform may be needed by other code (eg to apply other
     * constraints).
     *
     * Some information is ambiguous in the world transform, such as -1,-1 scale versus 180 rotation. The applied transform after
     * calling this method is equivalent to the local transform used to compute the world transform, but may not be identical. */
    updateAppliedTransform() {
        let parent = this.parent;
        if (!parent) {
            this.ax = this.worldX - this.skeleton.x;
            this.ay = this.worldY - this.skeleton.y;
            this.arotation = Math.atan2(this.c, this.a) * MathUtils.radDeg;
            this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
            this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
            this.ashearX = 0;
            this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * MathUtils.radDeg;
            return;
        }
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        let pid = 1 / (pa * pd - pb * pc);
        let ia = pd * pid, ib = pb * pid, ic = pc * pid, id = pa * pid;
        let dx = this.worldX - parent.worldX, dy = this.worldY - parent.worldY;
        this.ax = (dx * ia - dy * ib);
        this.ay = (dy * id - dx * ic);
        let ra, rb, rc, rd;
        if (this.inherit == Inherit.OnlyTranslation) {
            ra = this.a;
            rb = this.b;
            rc = this.c;
            rd = this.d;
        }
        else {
            switch (this.inherit) {
                case Inherit.NoRotationOrReflection: {
                    let s = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
                    pb = -pc * this.skeleton.scaleX * s / this.skeleton.scaleY;
                    pd = pa * this.skeleton.scaleY * s / this.skeleton.scaleX;
                    pid = 1 / (pa * pd - pb * pc);
                    ia = pd * pid;
                    ib = pb * pid;
                    break;
                }
                case Inherit.NoScale:
                case Inherit.NoScaleOrReflection:
                    let cos = MathUtils.cosDeg(this.rotation), sin = MathUtils.sinDeg(this.rotation);
                    pa = (pa * cos + pb * sin) / this.skeleton.scaleX;
                    pc = (pc * cos + pd * sin) / this.skeleton.scaleY;
                    let s = Math.sqrt(pa * pa + pc * pc);
                    if (s > 0.00001)
                        s = 1 / s;
                    pa *= s;
                    pc *= s;
                    s = Math.sqrt(pa * pa + pc * pc);
                    if (this.inherit == Inherit.NoScale && pid < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0))
                        s = -s;
                    let r = MathUtils.PI / 2 + Math.atan2(pc, pa);
                    pb = Math.cos(r) * s;
                    pd = Math.sin(r) * s;
                    pid = 1 / (pa * pd - pb * pc);
                    ia = pd * pid;
                    ib = pb * pid;
                    ic = pc * pid;
                    id = pa * pid;
            }
            ra = ia * this.a - ib * this.c;
            rb = ia * this.b - ib * this.d;
            rc = id * this.c - ic * this.a;
            rd = id * this.d - ic * this.b;
        }
        this.ashearX = 0;
        this.ascaleX = Math.sqrt(ra * ra + rc * rc);
        if (this.ascaleX > 0.0001) {
            let det = ra * rd - rb * rc;
            this.ascaleY = det / this.ascaleX;
            this.ashearY = -Math.atan2(ra * rb + rc * rd, det) * MathUtils.radDeg;
            this.arotation = Math.atan2(rc, ra) * MathUtils.radDeg;
        }
        else {
            this.ascaleX = 0;
            this.ascaleY = Math.sqrt(rb * rb + rd * rd);
            this.ashearY = 0;
            this.arotation = 90 - Math.atan2(rd, rb) * MathUtils.radDeg;
        }
    }
    /** The world rotation for the X axis, calculated using {@link #a} and {@link #c}. */
    getWorldRotationX() {
        return Math.atan2(this.c, this.a) * MathUtils.radDeg;
    }
    /** The world rotation for the Y axis, calculated using {@link #b} and {@link #d}. */
    getWorldRotationY() {
        return Math.atan2(this.d, this.b) * MathUtils.radDeg;
    }
    /** The magnitude (always positive) of the world scale X, calculated using {@link #a} and {@link #c}. */
    getWorldScaleX() {
        return Math.sqrt(this.a * this.a + this.c * this.c);
    }
    /** The magnitude (always positive) of the world scale Y, calculated using {@link #b} and {@link #d}. */
    getWorldScaleY() {
        return Math.sqrt(this.b * this.b + this.d * this.d);
    }
    /** Transforms a point from world coordinates to the bone's local coordinates. */
    worldToLocal(world) {
        let invDet = 1 / (this.a * this.d - this.b * this.c);
        let x = world.x - this.worldX, y = world.y - this.worldY;
        world.x = x * this.d * invDet - y * this.b * invDet;
        world.y = y * this.a * invDet - x * this.c * invDet;
        return world;
    }
    /** Transforms a point from the bone's local coordinates to world coordinates. */
    localToWorld(local) {
        let x = local.x, y = local.y;
        local.x = x * this.a + y * this.b + this.worldX;
        local.y = x * this.c + y * this.d + this.worldY;
        return local;
    }
    /** Transforms a point from world coordinates to the parent bone's local coordinates. */
    worldToParent(world) {
        if (world == null)
            throw new Error("world cannot be null.");
        return this.parent == null ? world : this.parent.worldToLocal(world);
    }
    /** Transforms a point from the parent bone's coordinates to world coordinates. */
    parentToWorld(world) {
        if (world == null)
            throw new Error("world cannot be null.");
        return this.parent == null ? world : this.parent.localToWorld(world);
    }
    /** Transforms a world rotation to a local rotation. */
    worldToLocalRotation(worldRotation) {
        let sin = MathUtils.sinDeg(worldRotation), cos = MathUtils.cosDeg(worldRotation);
        return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * MathUtils.radDeg + this.rotation - this.shearX;
    }
    /** Transforms a local rotation to a world rotation. */
    localToWorldRotation(localRotation) {
        localRotation -= this.rotation - this.shearX;
        let sin = MathUtils.sinDeg(localRotation), cos = MathUtils.cosDeg(localRotation);
        return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * MathUtils.radDeg;
    }
    /** Rotates the world transform the specified amount.
     * <p>
     * After changes are made to the world transform, {@link #updateAppliedTransform()} should be called and
     * {@link #update(Physics)} will need to be called on any child bones, recursively. */
    rotateWorld(degrees) {
        degrees *= MathUtils.degRad;
        const sin = Math.sin(degrees), cos = Math.cos(degrees);
        const ra = this.a, rb = this.b;
        this.a = cos * ra - sin * this.c;
        this.b = cos * rb - sin * this.d;
        this.c = sin * ra + cos * this.c;
        this.d = sin * rb + cos * this.d;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** The base class for all constraint datas. */
class ConstraintData {
    name;
    order;
    skinRequired;
    constructor(name, order, skinRequired) {
        this.name = name;
        this.order = order;
        this.skinRequired = skinRequired;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class AssetManagerBase {
    pathPrefix = "";
    textureLoader;
    downloader;
    assets = {};
    errors = {};
    toLoad = 0;
    loaded = 0;
    constructor(textureLoader, pathPrefix = "", downloader = new Downloader()) {
        this.textureLoader = textureLoader;
        this.pathPrefix = pathPrefix;
        this.downloader = downloader;
    }
    start(path) {
        this.toLoad++;
        return this.pathPrefix + path;
    }
    success(callback, path, asset) {
        this.toLoad--;
        this.loaded++;
        this.assets[path] = asset;
        if (callback)
            callback(path, asset);
    }
    error(callback, path, message) {
        this.toLoad--;
        this.loaded++;
        this.errors[path] = message;
        if (callback)
            callback(path, message);
    }
    loadAll() {
        let promise = new Promise((resolve, reject) => {
            let check = () => {
                if (this.isLoadingComplete()) {
                    if (this.hasErrors())
                        reject(this.errors);
                    else
                        resolve(this);
                    return;
                }
                requestAnimationFrame(check);
            };
            requestAnimationFrame(check);
        });
        return promise;
    }
    setRawDataURI(path, data) {
        this.downloader.rawDataUris[this.pathPrefix + path] = data;
    }
    loadBinary(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadBinary(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load binary ${path}: status ${status}, ${responseText}`);
        });
    }
    loadText(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadText(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load text ${path}: status ${status}, ${responseText}`);
        });
    }
    loadJson(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadJson(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load JSON ${path}: status ${status}, ${responseText}`);
        });
    }
    loadTexture(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        let isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
        let isWebWorker = !isBrowser; // && typeof importScripts !== 'undefined';
        if (isWebWorker) {
            fetch(path, { mode: "cors" }).then((response) => {
                if (response.ok)
                    return response.blob();
                this.error(error, path, `Couldn't load image: ${path}`);
                return null;
            }).then((blob) => {
                return blob ? createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" }) : null;
            }).then((bitmap) => {
                if (bitmap)
                    this.success(success, path, this.textureLoader(bitmap));
            });
        }
        else {
            let image = new Image();
            image.crossOrigin = "anonymous";
            image.onload = () => {
                this.success(success, path, this.textureLoader(image));
            };
            image.onerror = () => {
                this.error(error, path, `Couldn't load image: ${path}`);
            };
            if (this.downloader.rawDataUris[path])
                path = this.downloader.rawDataUris[path];
            image.src = path;
        }
    }
    loadTextureAtlas(path, success = () => { }, error = () => { }, fileAlias) {
        let index = path.lastIndexOf("/");
        let parent = index >= 0 ? path.substring(0, index + 1) : "";
        path = this.start(path);
        this.downloader.downloadText(path, (atlasText) => {
            try {
                let atlas = new TextureAtlas(atlasText);
                let toLoad = atlas.pages.length, abort = false;
                for (let page of atlas.pages) {
                    this.loadTexture(!fileAlias ? parent + page.name : fileAlias[page.name], (imagePath, texture) => {
                        if (!abort) {
                            page.setTexture(texture);
                            if (--toLoad == 0)
                                this.success(success, path, atlas);
                        }
                    }, (imagePath, message) => {
                        if (!abort)
                            this.error(error, path, `Couldn't load texture atlas ${path} page image: ${imagePath}`);
                        abort = true;
                    });
                }
            }
            catch (e) {
                this.error(error, path, `Couldn't parse texture atlas ${path}: ${e.message}`);
            }
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`);
        });
    }
    get(path) {
        return this.assets[this.pathPrefix + path];
    }
    require(path) {
        path = this.pathPrefix + path;
        let asset = this.assets[path];
        if (asset)
            return asset;
        let error = this.errors[path];
        throw Error("Asset not found: " + path + (error ? "\n" + error : ""));
    }
    remove(path) {
        path = this.pathPrefix + path;
        let asset = this.assets[path];
        if (asset.dispose)
            asset.dispose();
        delete this.assets[path];
        return asset;
    }
    removeAll() {
        for (let key in this.assets) {
            let asset = this.assets[key];
            if (asset.dispose)
                asset.dispose();
        }
        this.assets = {};
    }
    isLoadingComplete() {
        return this.toLoad == 0;
    }
    getToLoad() {
        return this.toLoad;
    }
    getLoaded() {
        return this.loaded;
    }
    dispose() {
        this.removeAll();
    }
    hasErrors() {
        return Object.keys(this.errors).length > 0;
    }
    getErrors() {
        return this.errors;
    }
}
class Downloader {
    callbacks = {};
    rawDataUris = {};
    dataUriToString(dataUri) {
        if (!dataUri.startsWith("data:")) {
            throw new Error("Not a data URI.");
        }
        let base64Idx = dataUri.indexOf("base64,");
        if (base64Idx != -1) {
            base64Idx += "base64,".length;
            return atob(dataUri.substr(base64Idx));
        }
        else {
            return dataUri.substr(dataUri.indexOf(",") + 1);
        }
    }
    base64ToUint8Array(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }
    dataUriToUint8Array(dataUri) {
        if (!dataUri.startsWith("data:")) {
            throw new Error("Not a data URI.");
        }
        let base64Idx = dataUri.indexOf("base64,");
        if (base64Idx == -1)
            throw new Error("Not a binary data URI.");
        base64Idx += "base64,".length;
        return this.base64ToUint8Array(dataUri.substr(base64Idx));
    }
    downloadText(url, success, error) {
        if (this.start(url, success, error))
            return;
        if (this.rawDataUris[url]) {
            try {
                let dataUri = this.rawDataUris[url];
                this.finish(url, 200, this.dataUriToString(dataUri));
            }
            catch (e) {
                this.finish(url, 400, JSON.stringify(e));
            }
            return;
        }
        let request = new XMLHttpRequest();
        request.overrideMimeType("text/html");
        request.open("GET", url, true);
        let done = () => {
            this.finish(url, request.status, request.responseText);
        };
        request.onload = done;
        request.onerror = done;
        request.send();
    }
    downloadJson(url, success, error) {
        this.downloadText(url, (data) => {
            success(JSON.parse(data));
        }, error);
    }
    downloadBinary(url, success, error) {
        if (this.start(url, success, error))
            return;
        if (this.rawDataUris[url]) {
            try {
                let dataUri = this.rawDataUris[url];
                this.finish(url, 200, this.dataUriToUint8Array(dataUri));
            }
            catch (e) {
                this.finish(url, 400, JSON.stringify(e));
            }
            return;
        }
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        let onerror = () => {
            this.finish(url, request.status, request.response);
        };
        request.onload = () => {
            if (request.status == 200 || request.status == 0)
                this.finish(url, 200, new Uint8Array(request.response));
            else
                onerror();
        };
        request.onerror = onerror;
        request.send();
    }
    start(url, success, error) {
        let callbacks = this.callbacks[url];
        try {
            if (callbacks)
                return true;
            this.callbacks[url] = callbacks = [];
        }
        finally {
            callbacks.push(success, error);
        }
    }
    finish(url, status, data) {
        let callbacks = this.callbacks[url];
        delete this.callbacks[url];
        let args = status == 200 || status == 0 ? [data] : [status, data];
        for (let i = args.length - 1, n = callbacks.length; i < n; i += 2)
            callbacks[i].apply(null, args);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose values for an {@link Event}.
 *
 * See Timeline {@link Timeline#apply()},
 * AnimationStateListener {@link AnimationStateListener#event()}, and
 * [Events](http://esotericsoftware.com/spine-events) in the Spine User Guide. */
class Event {
    data;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    time = 0;
    volume = 0;
    balance = 0;
    constructor(time, data) {
        if (!data)
            throw new Error("data cannot be null.");
        this.time = time;
        this.data = data;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose values for an {@link Event}.
 *
 * See [Events](http://esotericsoftware.com/spine-events) in the Spine User Guide. */
class EventData {
    name;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    audioPath = null;
    volume = 0;
    balance = 0;
    constructor(name) {
        this.name = name;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for an IK constraint. An IK constraint adjusts the rotation of 1 or 2 constrained bones so the tip of
 * the last bone is as close to the target bone as possible.
 *
 * See [IK constraints](http://esotericsoftware.com/spine-ik-constraints) in the Spine User Guide. */
class IkConstraint {
    /** The IK constraint's setup pose data. */
    data;
    /** The bones that will be modified by this IK constraint. */
    bones;
    /** The bone that is the IK target. */
    target;
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 1;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}`);
            this.bones.push(bone);
        }
        let target = skeleton.findBone(data.target.name);
        if (!target)
            throw new Error(`Couldn't find bone ${data.target.name}`);
        this.target = target;
        this.mix = data.mix;
        this.softness = data.softness;
        this.bendDirection = data.bendDirection;
        this.compress = data.compress;
        this.stretch = data.stretch;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.mix = data.mix;
        this.softness = data.softness;
        this.bendDirection = data.bendDirection;
        this.compress = data.compress;
        this.stretch = data.stretch;
    }
    update(physics) {
        if (this.mix == 0)
            return;
        let target = this.target;
        let bones = this.bones;
        switch (bones.length) {
            case 1:
                this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
                break;
            case 2:
                this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness, this.mix);
                break;
        }
    }
    /** Applies 1 bone IK. The target is specified in the world coordinate system. */
    apply1(bone, targetX, targetY, compress, stretch, uniform, alpha) {
        let p = bone.parent;
        if (!p)
            throw new Error("IK bone must have parent.");
        let pa = p.a, pb = p.b, pc = p.c, pd = p.d;
        let rotationIK = -bone.ashearX - bone.arotation, tx = 0, ty = 0;
        switch (bone.inherit) {
            case Inherit.OnlyTranslation:
                tx = (targetX - bone.worldX) * MathUtils.signum(bone.skeleton.scaleX);
                ty = (targetY - bone.worldY) * MathUtils.signum(bone.skeleton.scaleY);
                break;
            case Inherit.NoRotationOrReflection:
                let s = Math.abs(pa * pd - pb * pc) / Math.max(0.0001, pa * pa + pc * pc);
                let sa = pa / bone.skeleton.scaleX;
                let sc = pc / bone.skeleton.scaleY;
                pb = -sc * s * bone.skeleton.scaleX;
                pd = sa * s * bone.skeleton.scaleY;
                rotationIK += Math.atan2(sc, sa) * MathUtils.radDeg;
            // Fall through
            default:
                let x = targetX - p.worldX, y = targetY - p.worldY;
                let d = pa * pd - pb * pc;
                if (Math.abs(d) <= 0.0001) {
                    tx = 0;
                    ty = 0;
                }
                else {
                    tx = (x * pd - y * pb) / d - bone.ax;
                    ty = (y * pa - x * pc) / d - bone.ay;
                }
        }
        rotationIK += Math.atan2(ty, tx) * MathUtils.radDeg;
        if (bone.ascaleX < 0)
            rotationIK += 180;
        if (rotationIK > 180)
            rotationIK -= 360;
        else if (rotationIK < -180)
            rotationIK += 360;
        let sx = bone.ascaleX, sy = bone.ascaleY;
        if (compress || stretch) {
            switch (bone.inherit) {
                case Inherit.NoScale:
                case Inherit.NoScaleOrReflection:
                    tx = targetX - bone.worldX;
                    ty = targetY - bone.worldY;
            }
            const b = bone.data.length * sx;
            if (b > 0.0001) {
                const dd = tx * tx + ty * ty;
                if ((compress && dd < b * b) || (stretch && dd > b * b)) {
                    const s = (Math.sqrt(dd) / b - 1) * alpha + 1;
                    sx *= s;
                    if (uniform)
                        sy *= s;
                }
            }
        }
        bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
    }
    /** Applies 2 bone IK. The target is specified in the world coordinate system.
     * @param child A direct descendant of the parent bone. */
    apply2(parent, child, targetX, targetY, bendDir, stretch, uniform, softness, alpha) {
        if (parent.inherit != Inherit.Normal || child.inherit != Inherit.Normal)
            return;
        let px = parent.ax, py = parent.ay, psx = parent.ascaleX, psy = parent.ascaleY, sx = psx, sy = psy, csx = child.ascaleX;
        let os1 = 0, os2 = 0, s2 = 0;
        if (psx < 0) {
            psx = -psx;
            os1 = 180;
            s2 = -1;
        }
        else {
            os1 = 0;
            s2 = 1;
        }
        if (psy < 0) {
            psy = -psy;
            s2 = -s2;
        }
        if (csx < 0) {
            csx = -csx;
            os2 = 180;
        }
        else
            os2 = 0;
        let cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = parent.a, b = parent.b, c = parent.c, d = parent.d;
        let u = Math.abs(psx - psy) <= 0.0001;
        if (!u || stretch) {
            cy = 0;
            cwx = a * cx + parent.worldX;
            cwy = c * cx + parent.worldY;
        }
        else {
            cy = child.ay;
            cwx = a * cx + b * cy + parent.worldX;
            cwy = c * cx + d * cy + parent.worldY;
        }
        let pp = parent.parent;
        if (!pp)
            throw new Error("IK parent must itself have a parent.");
        a = pp.a;
        b = pp.b;
        c = pp.c;
        d = pp.d;
        let id = a * d - b * c, x = cwx - pp.worldX, y = cwy - pp.worldY;
        id = Math.abs(id) <= 0.0001 ? 0 : 1 / id;
        let dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
        let l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1, a2;
        if (l1 < 0.0001) {
            this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
            child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
            return;
        }
        x = targetX - pp.worldX;
        y = targetY - pp.worldY;
        let tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
        let dd = tx * tx + ty * ty;
        if (softness != 0) {
            softness *= psx * (csx + 1) * 0.5;
            let td = Math.sqrt(dd), sd = td - l1 - l2 * psx + softness;
            if (sd > 0) {
                let p = Math.min(1, sd / (softness * 2)) - 1;
                p = (sd - softness * (1 - p * p)) / td;
                tx -= p * tx;
                ty -= p * ty;
                dd = tx * tx + ty * ty;
            }
        }
        outer: if (u) {
            l2 *= psx;
            let cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
            if (cos < -1) {
                cos = -1;
                a2 = Math.PI * bendDir;
            }
            else if (cos > 1) {
                cos = 1;
                a2 = 0;
                if (stretch) {
                    a = (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
                    sx *= a;
                    if (uniform)
                        sy *= a;
                }
            }
            else
                a2 = Math.acos(cos) * bendDir;
            a = l1 + l2 * cos;
            b = l2 * Math.sin(a2);
            a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
        }
        else {
            a = psx * l2;
            b = psy * l2;
            let aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
            c = bb * l1 * l1 + aa * dd - aa * bb;
            let c1 = -2 * bb * l1, c2 = bb - aa;
            d = c1 * c1 - 4 * c2 * c;
            if (d >= 0) {
                let q = Math.sqrt(d);
                if (c1 < 0)
                    q = -q;
                q = -(c1 + q) * 0.5;
                let r0 = q / c2, r1 = c / q;
                let r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
                r0 = dd - r * r;
                if (r0 >= 0) {
                    y = Math.sqrt(r0) * bendDir;
                    a1 = ta - Math.atan2(y, r);
                    a2 = Math.atan2(y / psy, (r - l1) / psx);
                    break outer;
                }
            }
            let minAngle = MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
            let maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
            c = -a * l1 / (aa - bb);
            if (c >= -1 && c <= 1) {
                c = Math.acos(c);
                x = a * Math.cos(c) + l1;
                y = b * Math.sin(c);
                d = x * x + y * y;
                if (d < minDist) {
                    minAngle = c;
                    minDist = d;
                    minX = x;
                    minY = y;
                }
                if (d > maxDist) {
                    maxAngle = c;
                    maxDist = d;
                    maxX = x;
                    maxY = y;
                }
            }
            if (dd <= (minDist + maxDist) * 0.5) {
                a1 = ta - Math.atan2(minY * bendDir, minX);
                a2 = minAngle * bendDir;
            }
            else {
                a1 = ta - Math.atan2(maxY * bendDir, maxX);
                a2 = maxAngle * bendDir;
            }
        }
        let os = Math.atan2(cy, cx) * s2;
        let rotation = parent.arotation;
        a1 = (a1 - os) * MathUtils.radDeg + os1 - rotation;
        if (a1 > 180)
            a1 -= 360;
        else if (a1 < -180) //
            a1 += 360;
        parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, sy, 0, 0);
        rotation = child.arotation;
        a2 = ((a2 + os) * MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
        if (a2 > 180)
            a2 -= 360;
        else if (a2 < -180) //
            a2 += 360;
        child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for an {@link IkConstraint}.
 * <p>
 * See [IK constraints](http://esotericsoftware.com/spine-ik-constraints) in the Spine User Guide. */
class IkConstraintData extends ConstraintData {
    /** The bones that are constrained by this IK constraint. */
    bones = new Array();
    /** The bone that is the IK target. */
    _target = null;
    set target(boneData) { this._target = boneData; }
    get target() {
        if (!this._target)
            throw new Error("BoneData not set.");
        else
            return this._target;
    }
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** When true, only a single bone is being constrained, and {@link #getCompress()} or {@link #getStretch()} is used, the bone
     * is scaled on both the X and Y axes. */
    uniform = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 0;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link PathConstraint}.
 *
 * See [path constraints](http://esotericsoftware.com/spine-path-constraints) in the Spine User Guide. */
class PathConstraintData extends ConstraintData {
    /** The bones that will be modified by this path constraint. */
    bones = new Array();
    /** The slot whose path attachment will be used to constrained the bones. */
    _target = null;
    set target(slotData) { this._target = slotData; }
    get target() {
        if (!this._target)
            throw new Error("SlotData not set.");
        else
            return this._target;
    }
    /** The mode for positioning the first bone on the path. */
    positionMode = PositionMode.Fixed;
    /** The mode for positioning the bones after the first bone on the path. */
    spacingMode = SpacingMode.Fixed;
    /** The mode for adjusting the rotation of the bones. */
    rotateMode = RotateMode.Chain;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    constructor(name) {
        super(name, 0, false);
    }
}
/** Controls how the first bone is positioned along the path.
 *
 * See [position](http://esotericsoftware.com/spine-path-constraints#Position) in the Spine User Guide. */
var PositionMode;
(function (PositionMode) {
    PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
    PositionMode[PositionMode["Percent"] = 1] = "Percent";
})(PositionMode || (PositionMode = {}));
/** Controls how bones after the first bone are positioned along the path.
 *
 * See [spacing](http://esotericsoftware.com/spine-path-constraints#Spacing) in the Spine User Guide. */
var SpacingMode;
(function (SpacingMode) {
    SpacingMode[SpacingMode["Length"] = 0] = "Length";
    SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
    SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
    SpacingMode[SpacingMode["Proportional"] = 3] = "Proportional";
})(SpacingMode || (SpacingMode = {}));
/** Controls how bones are rotated, translated, and scaled to match the path.
 *
 * See [rotate mix](http://esotericsoftware.com/spine-path-constraints#Rotate-mix) in the Spine User Guide. */
var RotateMode;
(function (RotateMode) {
    RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
    RotateMode[RotateMode["Chain"] = 1] = "Chain";
    RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
})(RotateMode || (RotateMode = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a path constraint. A path constraint adjusts the rotation, translation, and scale of the
 * constrained bones so they follow a {@link PathAttachment}.
 *
 * See [Path constraints](http://esotericsoftware.com/spine-path-constraints) in the Spine User Guide. */
class PathConstraint {
    static NONE = -1;
    static BEFORE = -2;
    static AFTER = -3;
    static epsilon = 0.00001;
    /** The path constraint's setup pose data. */
    data;
    /** The bones that will be modified by this path constraint. */
    bones;
    /** The slot whose path attachment will be used to constrained the bones. */
    target;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    spaces = new Array();
    positions = new Array();
    world = new Array();
    curves = new Array();
    lengths = new Array();
    segments = new Array();
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0, n = data.bones.length; i < n; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
            this.bones.push(bone);
        }
        let target = skeleton.findSlot(data.target.name);
        if (!target)
            throw new Error(`Couldn't find target bone ${data.target.name}`);
        this.target = target;
        this.position = data.position;
        this.spacing = data.spacing;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.position = data.position;
        this.spacing = data.spacing;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
    }
    update(physics) {
        let attachment = this.target.getAttachment();
        if (!(attachment instanceof PathAttachment))
            return;
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY;
        if (mixRotate == 0 && mixX == 0 && mixY == 0)
            return;
        let data = this.data;
        let tangents = data.rotateMode == RotateMode.Tangent, scale = data.rotateMode == RotateMode.ChainScale;
        let bones = this.bones;
        let boneCount = bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
        let spaces = Utils.setArraySize(this.spaces, spacesCount), lengths = scale ? this.lengths = Utils.setArraySize(this.lengths, boneCount) : [];
        let spacing = this.spacing;
        switch (data.spacingMode) {
            case SpacingMode.Percent:
                if (scale) {
                    for (let i = 0, n = spacesCount - 1; i < n; i++) {
                        let bone = bones[i];
                        let setupLength = bone.data.length;
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        lengths[i] = Math.sqrt(x * x + y * y);
                    }
                }
                Utils.arrayFill(spaces, 1, spacesCount, spacing);
                break;
            case SpacingMode.Proportional:
                let sum = 0;
                for (let i = 0, n = spacesCount - 1; i < n;) {
                    let bone = bones[i];
                    let setupLength = bone.data.length;
                    if (setupLength < PathConstraint.epsilon) {
                        if (scale)
                            lengths[i] = 0;
                        spaces[++i] = spacing;
                    }
                    else {
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        let length = Math.sqrt(x * x + y * y);
                        if (scale)
                            lengths[i] = length;
                        spaces[++i] = length;
                        sum += length;
                    }
                }
                if (sum > 0) {
                    sum = spacesCount / sum * spacing;
                    for (let i = 1; i < spacesCount; i++)
                        spaces[i] *= sum;
                }
                break;
            default:
                let lengthSpacing = data.spacingMode == SpacingMode.Length;
                for (let i = 0, n = spacesCount - 1; i < n;) {
                    let bone = bones[i];
                    let setupLength = bone.data.length;
                    if (setupLength < PathConstraint.epsilon) {
                        if (scale)
                            lengths[i] = 0;
                        spaces[++i] = spacing;
                    }
                    else {
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        let length = Math.sqrt(x * x + y * y);
                        if (scale)
                            lengths[i] = length;
                        spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length / setupLength;
                    }
                }
        }
        let positions = this.computeWorldPositions(attachment, spacesCount, tangents);
        let boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
        let tip = false;
        if (offsetRotation == 0)
            tip = data.rotateMode == RotateMode.Chain;
        else {
            tip = false;
            let p = this.target.bone;
            offsetRotation *= p.a * p.d - p.b * p.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
        }
        for (let i = 0, p = 3; i < boneCount; i++, p += 3) {
            let bone = bones[i];
            bone.worldX += (boneX - bone.worldX) * mixX;
            bone.worldY += (boneY - bone.worldY) * mixY;
            let x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
            if (scale) {
                let length = lengths[i];
                if (length != 0) {
                    let s = (Math.sqrt(dx * dx + dy * dy) / length - 1) * mixRotate + 1;
                    bone.a *= s;
                    bone.c *= s;
                }
            }
            boneX = x;
            boneY = y;
            if (mixRotate > 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d, r = 0, cos = 0, sin = 0;
                if (tangents)
                    r = positions[p - 1];
                else if (spaces[i + 1] == 0)
                    r = positions[p + 2];
                else
                    r = Math.atan2(dy, dx);
                r -= Math.atan2(c, a);
                if (tip) {
                    cos = Math.cos(r);
                    sin = Math.sin(r);
                    let length = bone.data.length;
                    boneX += (length * (cos * a - sin * c) - dx) * mixRotate;
                    boneY += (length * (sin * a + cos * c) - dy) * mixRotate;
                }
                else {
                    r += offsetRotation;
                }
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                cos = Math.cos(r);
                sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            bone.updateAppliedTransform();
        }
    }
    computeWorldPositions(path, spacesCount, tangents) {
        let target = this.target;
        let position = this.position;
        let spaces = this.spaces, out = Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = this.world;
        let closed = path.closed;
        let verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = PathConstraint.NONE;
        if (!path.constantSpeed) {
            let lengths = path.lengths;
            curveCount -= closed ? 1 : 2;
            let pathLength = lengths[curveCount];
            if (this.data.positionMode == PositionMode.Percent)
                position *= pathLength;
            let multiplier;
            switch (this.data.spacingMode) {
                case SpacingMode.Percent:
                    multiplier = pathLength;
                    break;
                case SpacingMode.Proportional:
                    multiplier = pathLength / spacesCount;
                    break;
                default:
                    multiplier = 1;
            }
            world = Utils.setArraySize(this.world, 8);
            for (let i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
                let space = spaces[i] * multiplier;
                position += space;
                let p = position;
                if (closed) {
                    p %= pathLength;
                    if (p < 0)
                        p += pathLength;
                    curve = 0;
                }
                else if (p < 0) {
                    if (prevCurve != PathConstraint.BEFORE) {
                        prevCurve = PathConstraint.BEFORE;
                        path.computeWorldVertices(target, 2, 4, world, 0, 2);
                    }
                    this.addBeforePosition(p, world, 0, out, o);
                    continue;
                }
                else if (p > pathLength) {
                    if (prevCurve != PathConstraint.AFTER) {
                        prevCurve = PathConstraint.AFTER;
                        path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
                    }
                    this.addAfterPosition(p - pathLength, world, 0, out, o);
                    continue;
                }
                // Determine curve containing position.
                for (;; curve++) {
                    let length = lengths[curve];
                    if (p > length)
                        continue;
                    if (curve == 0)
                        p /= length;
                    else {
                        let prev = lengths[curve - 1];
                        p = (p - prev) / (length - prev);
                    }
                    break;
                }
                if (curve != prevCurve) {
                    prevCurve = curve;
                    if (closed && curve == curveCount) {
                        path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
                        path.computeWorldVertices(target, 0, 4, world, 4, 2);
                    }
                    else
                        path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
                }
                this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || (i > 0 && space == 0));
            }
            return out;
        }
        // World vertices.
        if (closed) {
            verticesLength += 2;
            world = Utils.setArraySize(this.world, verticesLength);
            path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
            path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
            world[verticesLength - 2] = world[0];
            world[verticesLength - 1] = world[1];
        }
        else {
            curveCount--;
            verticesLength -= 4;
            world = Utils.setArraySize(this.world, verticesLength);
            path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
        }
        // Curve lengths.
        let curves = Utils.setArraySize(this.curves, curveCount);
        let pathLength = 0;
        let x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
        let tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
        for (let i = 0, w = 2; i < curveCount; i++, w += 6) {
            cx1 = world[w];
            cy1 = world[w + 1];
            cx2 = world[w + 2];
            cy2 = world[w + 3];
            x2 = world[w + 4];
            y2 = world[w + 5];
            tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
            tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
            dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
            dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
            ddfx = tmpx * 2 + dddfx;
            ddfy = tmpy * 2 + dddfy;
            dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
            dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx;
            dfy += ddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx + dddfx;
            dfy += ddfy + dddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            curves[i] = pathLength;
            x1 = x2;
            y1 = y2;
        }
        if (this.data.positionMode == PositionMode.Percent)
            position *= pathLength;
        let multiplier;
        switch (this.data.spacingMode) {
            case SpacingMode.Percent:
                multiplier = pathLength;
                break;
            case SpacingMode.Proportional:
                multiplier = pathLength / spacesCount;
                break;
            default:
                multiplier = 1;
        }
        let segments = this.segments;
        let curveLength = 0;
        for (let i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
            let space = spaces[i] * multiplier;
            position += space;
            let p = position;
            if (closed) {
                p %= pathLength;
                if (p < 0)
                    p += pathLength;
                curve = 0;
            }
            else if (p < 0) {
                this.addBeforePosition(p, world, 0, out, o);
                continue;
            }
            else if (p > pathLength) {
                this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
                continue;
            }
            // Determine curve containing position.
            for (;; curve++) {
                let length = curves[curve];
                if (p > length)
                    continue;
                if (curve == 0)
                    p /= length;
                else {
                    let prev = curves[curve - 1];
                    p = (p - prev) / (length - prev);
                }
                break;
            }
            // Curve segment lengths.
            if (curve != prevCurve) {
                prevCurve = curve;
                let ii = curve * 6;
                x1 = world[ii];
                y1 = world[ii + 1];
                cx1 = world[ii + 2];
                cy1 = world[ii + 3];
                cx2 = world[ii + 4];
                cy2 = world[ii + 5];
                x2 = world[ii + 6];
                y2 = world[ii + 7];
                tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
                tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
                dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
                dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
                ddfx = tmpx * 2 + dddfx;
                ddfy = tmpy * 2 + dddfy;
                dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
                dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
                curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
                segments[0] = curveLength;
                for (ii = 1; ii < 8; ii++) {
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    segments[ii] = curveLength;
                }
                dfx += ddfx;
                dfy += ddfy;
                curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                segments[8] = curveLength;
                dfx += ddfx + dddfx;
                dfy += ddfy + dddfy;
                curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                segments[9] = curveLength;
                segment = 0;
            }
            // Weight by segment length.
            p *= curveLength;
            for (;; segment++) {
                let length = segments[segment];
                if (p > length)
                    continue;
                if (segment == 0)
                    p /= length;
                else {
                    let prev = segments[segment - 1];
                    p = segment + (p - prev) / (length - prev);
                }
                break;
            }
            this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || (i > 0 && space == 0));
        }
        return out;
    }
    addBeforePosition(p, temp, i, out, o) {
        let x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
        out[o] = x1 + p * Math.cos(r);
        out[o + 1] = y1 + p * Math.sin(r);
        out[o + 2] = r;
    }
    addAfterPosition(p, temp, i, out, o) {
        let x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
        out[o] = x1 + p * Math.cos(r);
        out[o + 1] = y1 + p * Math.sin(r);
        out[o + 2] = r;
    }
    addCurvePosition(p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
        if (p == 0 || isNaN(p)) {
            out[o] = x1;
            out[o + 1] = y1;
            out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
            return;
        }
        let tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
        let ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
        let x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
        out[o] = x;
        out[o + 1] = y;
        if (tangents) {
            if (p < 0.001)
                out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
            else
                out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a physics constraint. A physics constraint applies physics to bones.
 * <p>
 * See <a href="http://esotericsoftware.com/spine-physics-constraints">Physics constraints</a> in the Spine User Guide. */
class PhysicsConstraint {
    data;
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(bone) { this._bone = bone; }
    get bone() {
        if (!this._bone)
            throw new Error("Bone not set.");
        else
            return this._bone;
    }
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    mix = 0;
    _reset = true;
    ux = 0;
    uy = 0;
    cx = 0;
    cy = 0;
    tx = 0;
    ty = 0;
    xOffset = 0;
    xVelocity = 0;
    yOffset = 0;
    yVelocity = 0;
    rotateOffset = 0;
    rotateVelocity = 0;
    scaleOffset = 0;
    scaleVelocity = 0;
    active = false;
    skeleton;
    remaining = 0;
    lastTime = 0;
    constructor(data, skeleton) {
        this.data = data;
        this.skeleton = skeleton;
        this.bone = skeleton.bones[data.bone.index];
        this.inertia = data.inertia;
        this.strength = data.strength;
        this.damping = data.damping;
        this.massInverse = data.massInverse;
        this.wind = data.wind;
        this.gravity = data.gravity;
        this.mix = data.mix;
    }
    reset() {
        this.remaining = 0;
        this.lastTime = this.skeleton.time;
        this._reset = true;
        this.xOffset = 0;
        this.xVelocity = 0;
        this.yOffset = 0;
        this.yVelocity = 0;
        this.rotateOffset = 0;
        this.rotateVelocity = 0;
        this.scaleOffset = 0;
        this.scaleVelocity = 0;
    }
    setToSetupPose() {
        const data = this.data;
        this.inertia = data.inertia;
        this.strength = data.strength;
        this.damping = data.damping;
        this.massInverse = data.massInverse;
        this.wind = data.wind;
        this.gravity = data.gravity;
        this.mix = data.mix;
    }
    isActive() {
        return this.active;
    }
    /** Applies the constraint to the constrained bones. */
    update(physics) {
        const mix = this.mix;
        if (mix == 0)
            return;
        const x = this.data.x > 0, y = this.data.y > 0, rotateOrShearX = this.data.rotate > 0 || this.data.shearX > 0, scaleX = this.data.scaleX > 0;
        const bone = this.bone;
        const l = bone.data.length;
        switch (physics) {
            case Physics.none:
                return;
            case Physics.reset:
                this.reset();
            // Fall through.
            case Physics.update:
                const skeleton = this.skeleton;
                const delta = Math.max(this.skeleton.time - this.lastTime, 0);
                this.remaining += delta;
                this.lastTime = skeleton.time;
                const bx = bone.worldX, by = bone.worldY;
                if (this._reset) {
                    this._reset = false;
                    this.ux = bx;
                    this.uy = by;
                }
                else {
                    let a = this.remaining, i = this.inertia, t = this.data.step, f = this.skeleton.data.referenceScale, d = -1;
                    let qx = this.data.limit * delta, qy = qx * Math.abs(skeleton.scaleY);
                    qx *= Math.abs(skeleton.scaleX);
                    if (x || y) {
                        if (x) {
                            const u = (this.ux - bx) * i;
                            this.xOffset += u > qx ? qx : u < -qx ? -qx : u;
                            this.ux = bx;
                        }
                        if (y) {
                            const u = (this.uy - by) * i;
                            this.yOffset += u > qy ? qy : u < -qy ? -qy : u;
                            this.uy = by;
                        }
                        if (a >= t) {
                            d = Math.pow(this.damping, 60 * t);
                            const m = this.massInverse * t, e = this.strength, w = this.wind * f * skeleton.scaleX, g = this.gravity * f * skeleton.scaleY;
                            do {
                                if (x) {
                                    this.xVelocity += (w - this.xOffset * e) * m;
                                    this.xOffset += this.xVelocity * t;
                                    this.xVelocity *= d;
                                }
                                if (y) {
                                    this.yVelocity -= (g + this.yOffset * e) * m;
                                    this.yOffset += this.yVelocity * t;
                                    this.yVelocity *= d;
                                }
                                a -= t;
                            } while (a >= t);
                        }
                        if (x)
                            bone.worldX += this.xOffset * mix * this.data.x;
                        if (y)
                            bone.worldY += this.yOffset * mix * this.data.y;
                    }
                    if (rotateOrShearX || scaleX) {
                        let ca = Math.atan2(bone.c, bone.a), c = 0, s = 0, mr = 0;
                        let dx = this.cx - bone.worldX, dy = this.cy - bone.worldY;
                        if (dx > qx)
                            dx = qx;
                        else if (dx < -qx) //
                            dx = -qx;
                        if (dy > qy)
                            dy = qy;
                        else if (dy < -qy) //
                            dy = -qy;
                        if (rotateOrShearX) {
                            mr = (this.data.rotate + this.data.shearX) * mix;
                            let r = Math.atan2(dy + this.ty, dx + this.tx) - ca - this.rotateOffset * mr;
                            this.rotateOffset += (r - Math.ceil(r * MathUtils.invPI2 - 0.5) * MathUtils.PI2) * i;
                            r = this.rotateOffset * mr + ca;
                            c = Math.cos(r);
                            s = Math.sin(r);
                            if (scaleX) {
                                r = l * bone.getWorldScaleX();
                                if (r > 0)
                                    this.scaleOffset += (dx * c + dy * s) * i / r;
                            }
                        }
                        else {
                            c = Math.cos(ca);
                            s = Math.sin(ca);
                            const r = l * bone.getWorldScaleX();
                            if (r > 0)
                                this.scaleOffset += (dx * c + dy * s) * i / r;
                        }
                        a = this.remaining;
                        if (a >= t) {
                            if (d == -1)
                                d = Math.pow(this.damping, 60 * t);
                            const m = this.massInverse * t, e = this.strength, w = this.wind, g = (this.gravity), h = l / f;
                            while (true) {
                                a -= t;
                                if (scaleX) {
                                    this.scaleVelocity += (w * c - g * s - this.scaleOffset * e) * m;
                                    this.scaleOffset += this.scaleVelocity * t;
                                    this.scaleVelocity *= d;
                                }
                                if (rotateOrShearX) {
                                    this.rotateVelocity -= ((w * s + g * c) * h + this.rotateOffset * e) * m;
                                    this.rotateOffset += this.rotateVelocity * t;
                                    this.rotateVelocity *= d;
                                    if (a < t)
                                        break;
                                    const r = this.rotateOffset * mr + ca;
                                    c = Math.cos(r);
                                    s = Math.sin(r);
                                }
                                else if (a < t) //
                                    break;
                            }
                        }
                    }
                    this.remaining = a;
                }
                this.cx = bone.worldX;
                this.cy = bone.worldY;
                break;
            case Physics.pose:
                if (x)
                    bone.worldX += this.xOffset * mix * this.data.x;
                if (y)
                    bone.worldY += this.yOffset * mix * this.data.y;
        }
        if (rotateOrShearX) {
            let o = this.rotateOffset * mix, s = 0, c = 0, a = 0;
            if (this.data.shearX > 0) {
                let r = 0;
                if (this.data.rotate > 0) {
                    r = o * this.data.rotate;
                    s = Math.sin(r);
                    c = Math.cos(r);
                    a = bone.b;
                    bone.b = c * a - s * bone.d;
                    bone.d = s * a + c * bone.d;
                }
                r += o * this.data.shearX;
                s = Math.sin(r);
                c = Math.cos(r);
                a = bone.a;
                bone.a = c * a - s * bone.c;
                bone.c = s * a + c * bone.c;
            }
            else {
                o *= this.data.rotate;
                s = Math.sin(o);
                c = Math.cos(o);
                a = bone.a;
                bone.a = c * a - s * bone.c;
                bone.c = s * a + c * bone.c;
                a = bone.b;
                bone.b = c * a - s * bone.d;
                bone.d = s * a + c * bone.d;
            }
        }
        if (scaleX) {
            const s = 1 + this.scaleOffset * mix * this.data.scaleX;
            bone.a *= s;
            bone.c *= s;
        }
        if (physics != Physics.pose) {
            this.tx = l * bone.a;
            this.ty = l * bone.c;
        }
        bone.updateAppliedTransform();
    }
    /** Translates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone moved an additional
     * amount in world space. */
    translate(x, y) {
        this.ux -= x;
        this.uy -= y;
        this.cx -= x;
        this.cy -= y;
    }
    /** Rotates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone rotated around the
     * specified point in world space. */
    rotate(x, y, degrees) {
        const r = degrees * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
        const dx = this.cx - x, dy = this.cy - y;
        this.translate(dx * cos - dy * sin - dx, dx * sin + dy * cos - dy);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores a slot's current pose. Slots organize attachments for {@link Skeleton#drawOrder} purposes and provide a place to store
 * state for an attachment. State cannot be stored in an attachment itself because attachments are stateless and may be shared
 * across multiple skeletons. */
class Slot {
    /** The slot's setup pose data. */
    data;
    /** The bone this slot belongs to. */
    bone;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color;
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    attachment = null;
    attachmentState = 0;
    /** The index of the texture region to display when the slot's attachment has a {@link Sequence}. -1 represents the
     * {@link Sequence#getSetupIndex()}. */
    sequenceIndex = -1;
    /** Values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a
     * weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions.
     *
     * See {@link VertexAttachment#computeWorldVertices()} and {@link DeformTimeline}. */
    deform = new Array();
    constructor(data, bone) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!bone)
            throw new Error("bone cannot be null.");
        this.data = data;
        this.bone = bone;
        this.color = new Color();
        this.darkColor = !data.darkColor ? null : new Color();
        this.setToSetupPose();
    }
    /** The skeleton this slot belongs to. */
    getSkeleton() {
        return this.bone.skeleton;
    }
    /** The current attachment for the slot, or null if the slot has no attachment. */
    getAttachment() {
        return this.attachment;
    }
    /** Sets the slot's attachment and, if the attachment changed, resets {@link #sequenceIndex} and clears the {@link #deform}.
     * The deform is not cleared if the old attachment has the same {@link VertexAttachment#getTimelineAttachment()} as the
     * specified attachment. */
    setAttachment(attachment) {
        if (this.attachment == attachment)
            return;
        if (!(attachment instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment)
            || attachment.timelineAttachment != this.attachment.timelineAttachment) {
            this.deform.length = 0;
        }
        this.attachment = attachment;
        this.sequenceIndex = -1;
    }
    /** Sets this slot to the setup pose. */
    setToSetupPose() {
        this.color.setFromColor(this.data.color);
        if (this.darkColor)
            this.darkColor.setFromColor(this.data.darkColor);
        if (!this.data.attachmentName)
            this.attachment = null;
        else {
            this.attachment = null;
            this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a transform constraint. A transform constraint adjusts the world transform of the constrained
 * bones to match that of the target bone.
 *
 * See [Transform constraints](http://esotericsoftware.com/spine-transform-constraints) in the Spine User Guide. */
class TransformConstraint {
    /** The transform constraint's setup pose data. */
    data;
    /** The bones that will be modified by this transform constraint. */
    bones;
    /** The target bone whose world transform will be copied to the constrained bones. */
    target;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    temp = new Vector2();
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
            this.bones.push(bone);
        }
        let target = skeleton.findBone(data.target.name);
        if (!target)
            throw new Error(`Couldn't find target bone ${data.target.name}.`);
        this.target = target;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
        this.mixScaleX = data.mixScaleX;
        this.mixScaleY = data.mixScaleY;
        this.mixShearY = data.mixShearY;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
        this.mixScaleX = data.mixScaleX;
        this.mixScaleY = data.mixScaleY;
        this.mixShearY = data.mixShearY;
    }
    update(physics) {
        if (this.mixRotate == 0 && this.mixX == 0 && this.mixY == 0 && this.mixScaleX == 0 && this.mixScaleY == 0 && this.mixShearY == 0)
            return;
        if (this.data.local) {
            if (this.data.relative)
                this.applyRelativeLocal();
            else
                this.applyAbsoluteLocal();
        }
        else {
            if (this.data.relative)
                this.applyRelativeWorld();
            else
                this.applyAbsoluteWorld();
        }
    }
    applyAbsoluteWorld() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let translate = mixX != 0 || mixY != 0;
        let target = this.target;
        let ta = target.a, tb = target.b, tc = target.c, td = target.d;
        let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
        let offsetRotation = this.data.offsetRotation * degRadReflect;
        let offsetShearY = this.data.offsetShearY * degRadReflect;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (mixRotate != 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
                let r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                let cos = Math.cos(r), sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            if (translate) {
                let temp = this.temp;
                target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                bone.worldX += (temp.x - bone.worldX) * mixX;
                bone.worldY += (temp.y - bone.worldY) * mixY;
            }
            if (mixScaleX != 0) {
                let s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
                if (s != 0)
                    s = (s + (Math.sqrt(ta * ta + tc * tc) - s + this.data.offsetScaleX) * mixScaleX) / s;
                bone.a *= s;
                bone.c *= s;
            }
            if (mixScaleY != 0) {
                let s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
                if (s != 0)
                    s = (s + (Math.sqrt(tb * tb + td * td) - s + this.data.offsetScaleY) * mixScaleY) / s;
                bone.b *= s;
                bone.d *= s;
            }
            if (mixShearY > 0) {
                let b = bone.b, d = bone.d;
                let by = Math.atan2(d, b);
                let r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r = by + (r + offsetShearY) * mixShearY;
                let s = Math.sqrt(b * b + d * d);
                bone.b = Math.cos(r) * s;
                bone.d = Math.sin(r) * s;
            }
            bone.updateAppliedTransform();
        }
    }
    applyRelativeWorld() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let translate = mixX != 0 || mixY != 0;
        let target = this.target;
        let ta = target.a, tb = target.b, tc = target.c, td = target.d;
        let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
        let offsetRotation = this.data.offsetRotation * degRadReflect, offsetShearY = this.data.offsetShearY * degRadReflect;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (mixRotate != 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
                let r = Math.atan2(tc, ta) + offsetRotation;
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                let cos = Math.cos(r), sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            if (translate) {
                let temp = this.temp;
                target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                bone.worldX += temp.x * mixX;
                bone.worldY += temp.y * mixY;
            }
            if (mixScaleX != 0) {
                let s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * mixScaleX + 1;
                bone.a *= s;
                bone.c *= s;
            }
            if (mixScaleY != 0) {
                let s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * mixScaleY + 1;
                bone.b *= s;
                bone.d *= s;
            }
            if (mixShearY > 0) {
                let r = Math.atan2(td, tb) - Math.atan2(tc, ta);
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                let b = bone.b, d = bone.d;
                r = Math.atan2(d, b) + (r - MathUtils.PI / 2 + offsetShearY) * mixShearY;
                let s = Math.sqrt(b * b + d * d);
                bone.b = Math.cos(r) * s;
                bone.d = Math.sin(r) * s;
            }
            bone.updateAppliedTransform();
        }
    }
    applyAbsoluteLocal() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let target = this.target;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            let rotation = bone.arotation;
            if (mixRotate != 0)
                rotation += (target.arotation - rotation + this.data.offsetRotation) * mixRotate;
            let x = bone.ax, y = bone.ay;
            x += (target.ax - x + this.data.offsetX) * mixX;
            y += (target.ay - y + this.data.offsetY) * mixY;
            let scaleX = bone.ascaleX, scaleY = bone.ascaleY;
            if (mixScaleX != 0 && scaleX != 0)
                scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * mixScaleX) / scaleX;
            if (mixScaleY != 0 && scaleY != 0)
                scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * mixScaleY) / scaleY;
            let shearY = bone.ashearY;
            if (mixShearY != 0)
                shearY += (target.ashearY - shearY + this.data.offsetShearY) * mixShearY;
            bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
        }
    }
    applyRelativeLocal() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let target = this.target;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            let rotation = bone.arotation + (target.arotation + this.data.offsetRotation) * mixRotate;
            let x = bone.ax + (target.ax + this.data.offsetX) * mixX;
            let y = bone.ay + (target.ay + this.data.offsetY) * mixY;
            let scaleX = bone.ascaleX * (((target.ascaleX - 1 + this.data.offsetScaleX) * mixScaleX) + 1);
            let scaleY = bone.ascaleY * (((target.ascaleY - 1 + this.data.offsetScaleY) * mixScaleY) + 1);
            let shearY = bone.ashearY + (target.ashearY + this.data.offsetShearY) * mixShearY;
            bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a skeleton.
 *
 * See [Instance objects](http://esotericsoftware.com/spine-runtime-architecture#Instance-objects) in the Spine Runtimes Guide. */
class Skeleton {
    static quadTriangles = [0, 1, 2, 2, 3, 0];
    static yDown = false;
    /** The skeleton's setup pose data. */
    data;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones;
    /** The skeleton's slots in the setup pose draw order. */
    slots;
    /** The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order. */
    drawOrder;
    /** The skeleton's IK constraints. */
    ikConstraints;
    /** The skeleton's transform constraints. */
    transformConstraints;
    /** The skeleton's path constraints. */
    pathConstraints;
    /** The skeleton's physics constraints. */
    physicsConstraints;
    /** The list of bones and constraints, sorted in the order they should be updated, as computed by {@link #updateCache()}. */
    _updateCache = new Array();
    /** The skeleton's current skin. May be null. */
    skin = null;
    /** The color to tint all the skeleton's attachments. */
    color;
    /** Scales the entire skeleton on the X axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    scaleX = 1;
    /** Scales the entire skeleton on the Y axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    _scaleY = 1;
    get scaleY() {
        return Skeleton.yDown ? -this._scaleY : this._scaleY;
    }
    set scaleY(scaleY) {
        this._scaleY = scaleY;
    }
    /** Sets the skeleton X position, which is added to the root bone worldX position. */
    x = 0;
    /** Sets the skeleton Y position, which is added to the root bone worldY position. */
    y = 0;
    /** Returns the skeleton's time. This is used for time-based manipulations, such as {@link PhysicsConstraint}.
     * <p>
     * See {@link #update(float)}. */
    time = 0;
    constructor(data) {
        if (!data)
            throw new Error("data cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let boneData = data.bones[i];
            let bone;
            if (!boneData.parent)
                bone = new Bone(boneData, this, null);
            else {
                let parent = this.bones[boneData.parent.index];
                bone = new Bone(boneData, this, parent);
                parent.children.push(bone);
            }
            this.bones.push(bone);
        }
        this.slots = new Array();
        this.drawOrder = new Array();
        for (let i = 0; i < data.slots.length; i++) {
            let slotData = data.slots[i];
            let bone = this.bones[slotData.boneData.index];
            let slot = new Slot(slotData, bone);
            this.slots.push(slot);
            this.drawOrder.push(slot);
        }
        this.ikConstraints = new Array();
        for (let i = 0; i < data.ikConstraints.length; i++) {
            let ikConstraintData = data.ikConstraints[i];
            this.ikConstraints.push(new IkConstraint(ikConstraintData, this));
        }
        this.transformConstraints = new Array();
        for (let i = 0; i < data.transformConstraints.length; i++) {
            let transformConstraintData = data.transformConstraints[i];
            this.transformConstraints.push(new TransformConstraint(transformConstraintData, this));
        }
        this.pathConstraints = new Array();
        for (let i = 0; i < data.pathConstraints.length; i++) {
            let pathConstraintData = data.pathConstraints[i];
            this.pathConstraints.push(new PathConstraint(pathConstraintData, this));
        }
        this.physicsConstraints = new Array();
        for (let i = 0; i < data.physicsConstraints.length; i++) {
            let physicsConstraintData = data.physicsConstraints[i];
            this.physicsConstraints.push(new PhysicsConstraint(physicsConstraintData, this));
        }
        this.color = new Color(1, 1, 1, 1);
        this.updateCache();
    }
    /** Caches information about bones and constraints. Must be called if the {@link #getSkin()} is modified or if bones,
     * constraints, or weighted path attachments are added or removed. */
    updateCache() {
        let updateCache = this._updateCache;
        updateCache.length = 0;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            bone.sorted = bone.data.skinRequired;
            bone.active = !bone.sorted;
        }
        if (this.skin) {
            let skinBones = this.skin.bones;
            for (let i = 0, n = this.skin.bones.length; i < n; i++) {
                let bone = this.bones[skinBones[i].index];
                do {
                    bone.sorted = false;
                    bone.active = true;
                    bone = bone.parent;
                } while (bone);
            }
        }
        // IK first, lowest hierarchy depth first.
        let ikConstraints = this.ikConstraints;
        let transformConstraints = this.transformConstraints;
        let pathConstraints = this.pathConstraints;
        let physicsConstraints = this.physicsConstraints;
        let ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length, physicsCount = this.physicsConstraints.length;
        let constraintCount = ikCount + transformCount + pathCount + physicsCount;
        outer: for (let i = 0; i < constraintCount; i++) {
            for (let ii = 0; ii < ikCount; ii++) {
                let constraint = ikConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortIkConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < transformCount; ii++) {
                let constraint = transformConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortTransformConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < pathCount; ii++) {
                let constraint = pathConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortPathConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < physicsCount; ii++) {
                const constraint = physicsConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortPhysicsConstraint(constraint);
                    continue outer;
                }
            }
        }
        for (let i = 0, n = bones.length; i < n; i++)
            this.sortBone(bones[i]);
    }
    sortIkConstraint(constraint) {
        constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        let target = constraint.target;
        this.sortBone(target);
        let constrained = constraint.bones;
        let parent = constrained[0];
        this.sortBone(parent);
        if (constrained.length == 1) {
            this._updateCache.push(constraint);
            this.sortReset(parent.children);
        }
        else {
            let child = constrained[constrained.length - 1];
            this.sortBone(child);
            this._updateCache.push(constraint);
            this.sortReset(parent.children);
            child.sorted = true;
        }
    }
    sortPathConstraint(constraint) {
        constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        let slot = constraint.target;
        let slotIndex = slot.data.index;
        let slotBone = slot.bone;
        if (this.skin)
            this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
        if (this.data.defaultSkin && this.data.defaultSkin != this.skin)
            this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
        for (let i = 0, n = this.data.skins.length; i < n; i++)
            this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
        let attachment = slot.getAttachment();
        if (attachment instanceof PathAttachment)
            this.sortPathConstraintAttachmentWith(attachment, slotBone);
        let constrained = constraint.bones;
        let boneCount = constrained.length;
        for (let i = 0; i < boneCount; i++)
            this.sortBone(constrained[i]);
        this._updateCache.push(constraint);
        for (let i = 0; i < boneCount; i++)
            this.sortReset(constrained[i].children);
        for (let i = 0; i < boneCount; i++)
            constrained[i].sorted = true;
    }
    sortTransformConstraint(constraint) {
        constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        this.sortBone(constraint.target);
        let constrained = constraint.bones;
        let boneCount = constrained.length;
        if (constraint.data.local) {
            for (let i = 0; i < boneCount; i++) {
                let child = constrained[i];
                this.sortBone(child.parent);
                this.sortBone(child);
            }
        }
        else {
            for (let i = 0; i < boneCount; i++) {
                this.sortBone(constrained[i]);
            }
        }
        this._updateCache.push(constraint);
        for (let i = 0; i < boneCount; i++)
            this.sortReset(constrained[i].children);
        for (let i = 0; i < boneCount; i++)
            constrained[i].sorted = true;
    }
    sortPathConstraintAttachment(skin, slotIndex, slotBone) {
        let attachments = skin.attachments[slotIndex];
        if (!attachments)
            return;
        for (let key in attachments) {
            this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
        }
    }
    sortPathConstraintAttachmentWith(attachment, slotBone) {
        if (!(attachment instanceof PathAttachment))
            return;
        let pathBones = attachment.bones;
        if (!pathBones)
            this.sortBone(slotBone);
        else {
            let bones = this.bones;
            for (let i = 0, n = pathBones.length; i < n;) {
                let nn = pathBones[i++];
                nn += i;
                while (i < nn)
                    this.sortBone(bones[pathBones[i++]]);
            }
        }
    }
    sortPhysicsConstraint(constraint) {
        const bone = constraint.bone;
        constraint.active = bone.active && (!constraint.data.skinRequired || (this.skin != null && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        this.sortBone(bone);
        this._updateCache.push(constraint);
        this.sortReset(bone.children);
        bone.sorted = true;
    }
    sortBone(bone) {
        if (!bone)
            return;
        if (bone.sorted)
            return;
        let parent = bone.parent;
        if (parent)
            this.sortBone(parent);
        bone.sorted = true;
        this._updateCache.push(bone);
    }
    sortReset(bones) {
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (!bone.active)
                continue;
            if (bone.sorted)
                this.sortReset(bone.children);
            bone.sorted = false;
        }
    }
    /** Updates the world transform for each bone and applies all constraints.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransform(physics) {
        if (physics === undefined || physics === null)
            throw new Error("physics is undefined");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            bone.ax = bone.x;
            bone.ay = bone.y;
            bone.arotation = bone.rotation;
            bone.ascaleX = bone.scaleX;
            bone.ascaleY = bone.scaleY;
            bone.ashearX = bone.shearX;
            bone.ashearY = bone.shearY;
        }
        let updateCache = this._updateCache;
        for (let i = 0, n = updateCache.length; i < n; i++)
            updateCache[i].update(physics);
    }
    updateWorldTransformWith(physics, parent) {
        if (!parent)
            throw new Error("parent cannot be null.");
        let bones = this.bones;
        for (let i = 1, n = bones.length; i < n; i++) { // Skip root bone.
            let bone = bones[i];
            bone.ax = bone.x;
            bone.ay = bone.y;
            bone.arotation = bone.rotation;
            bone.ascaleX = bone.scaleX;
            bone.ascaleY = bone.scaleY;
            bone.ashearX = bone.shearX;
            bone.ashearY = bone.shearY;
        }
        // Apply the parent bone transform to the root bone. The root bone always inherits scale, rotation and reflection.
        let rootBone = this.getRootBone();
        if (!rootBone)
            throw new Error("Root bone must not be null.");
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        rootBone.worldX = pa * this.x + pb * this.y + parent.worldX;
        rootBone.worldY = pc * this.x + pd * this.y + parent.worldY;
        const rx = (rootBone.rotation + rootBone.shearX) * MathUtils.degRad;
        const ry = (rootBone.rotation + 90 + rootBone.shearY) * MathUtils.degRad;
        const la = Math.cos(rx) * rootBone.scaleX;
        const lb = Math.cos(ry) * rootBone.scaleY;
        const lc = Math.sin(rx) * rootBone.scaleX;
        const ld = Math.sin(ry) * rootBone.scaleY;
        rootBone.a = (pa * la + pb * lc) * this.scaleX;
        rootBone.b = (pa * lb + pb * ld) * this.scaleX;
        rootBone.c = (pc * la + pd * lc) * this.scaleY;
        rootBone.d = (pc * lb + pd * ld) * this.scaleY;
        // Update everything except root bone.
        let updateCache = this._updateCache;
        for (let i = 0, n = updateCache.length; i < n; i++) {
            let updatable = updateCache[i];
            if (updatable != rootBone)
                updatable.update(physics);
        }
    }
    /** Sets the bones, constraints, and slots to their setup pose values. */
    setToSetupPose() {
        this.setBonesToSetupPose();
        this.setSlotsToSetupPose();
    }
    /** Sets the bones and constraints to their setup pose values. */
    setBonesToSetupPose() {
        for (const bone of this.bones)
            bone.setToSetupPose();
        for (const constraint of this.ikConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.transformConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.pathConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.physicsConstraints)
            constraint.setToSetupPose();
    }
    /** Sets the slots and draw order to their setup pose values. */
    setSlotsToSetupPose() {
        let slots = this.slots;
        Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
        for (let i = 0, n = slots.length; i < n; i++)
            slots[i].setToSetupPose();
    }
    /** @returns May return null. */
    getRootBone() {
        if (this.bones.length == 0)
            return null;
        return this.bones[0];
    }
    /** @returns May be null. */
    findBone(boneName) {
        if (!boneName)
            throw new Error("boneName cannot be null.");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (bone.data.name == boneName)
                return bone;
        }
        return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * repeatedly.
     * @returns May be null. */
    findSlot(slotName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.data.name == slotName)
                return slot;
        }
        return null;
    }
    /** Sets a skin by name.
     *
     * See {@link #setSkin()}. */
    setSkinByName(skinName) {
        let skin = this.data.findSkin(skinName);
        if (!skin)
            throw new Error("Skin not found: " + skinName);
        this.setSkin(skin);
    }
    /** Sets the skin used to look up attachments before looking in the {@link SkeletonData#defaultSkin default skin}. If the
     * skin is changed, {@link #updateCache()} is called.
     *
     * Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no
     * old skin, each slot's setup mode attachment is attached from the new skin.
     *
     * After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling
     * {@link #setSlotsToSetupPose()}. Also, often {@link AnimationState#apply()} is called before the next time the
     * skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new skin.
     * @param newSkin May be null. */
    setSkin(newSkin) {
        if (newSkin == this.skin)
            return;
        if (newSkin) {
            if (this.skin)
                newSkin.attachAll(this, this.skin);
            else {
                let slots = this.slots;
                for (let i = 0, n = slots.length; i < n; i++) {
                    let slot = slots[i];
                    let name = slot.data.attachmentName;
                    if (name) {
                        let attachment = newSkin.getAttachment(i, name);
                        if (attachment)
                            slot.setAttachment(attachment);
                    }
                }
            }
        }
        this.skin = newSkin;
        this.updateCache();
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot name and attachment
     * name.
     *
     * See {@link #getAttachment()}.
     * @returns May be null. */
    getAttachmentByName(slotName, attachmentName) {
        let slot = this.data.findSlot(slotName);
        if (!slot)
            throw new Error(`Can't find slot with name ${slotName}`);
        return this.getAttachment(slot.index, attachmentName);
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot index and
     * attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.
     *
     * See [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide.
     * @returns May be null. */
    getAttachment(slotIndex, attachmentName) {
        if (!attachmentName)
            throw new Error("attachmentName cannot be null.");
        if (this.skin) {
            let attachment = this.skin.getAttachment(slotIndex, attachmentName);
            if (attachment)
                return attachment;
        }
        if (this.data.defaultSkin)
            return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
        return null;
    }
    /** A convenience method to set an attachment by finding the slot with {@link #findSlot()}, finding the attachment with
     * {@link #getAttachment()}, then setting the slot's {@link Slot#attachment}.
     * @param attachmentName May be null to clear the slot's attachment. */
    setAttachment(slotName, attachmentName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.data.name == slotName) {
                let attachment = null;
                if (attachmentName) {
                    attachment = this.getAttachment(i, attachmentName);
                    if (!attachment)
                        throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
                }
                slot.setAttachment(attachment);
                return;
            }
        }
        throw new Error("Slot not found: " + slotName);
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findIkConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.ikConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it repeatedly.
     * @return May be null. */
    findTransformConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.transformConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findPathConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.pathConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this
     * method than to call it repeatedly. */
    findPhysicsConstraint(constraintName) {
        if (constraintName == null)
            throw new Error("constraintName cannot be null.");
        return this.physicsConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose as `{ x: number, y: number, width: number, height: number }`.
     * Note that this method will create temporary objects which can add to garbage collection pressure. Use `getBounds()` if garbage collection is a concern. */
    getBoundsRect(clipper) {
        let offset = new Vector2();
        let size = new Vector2();
        this.getBounds(offset, size, undefined, clipper);
        return { x: offset.x, y: offset.y, width: size.x, height: size.y };
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.
     * @param offset An output value, the distance from the skeleton origin to the bottom left corner of the AABB.
     * @param size An output value, the width and height of the AABB.
     * @param temp Working memory to temporarily store attachments' computed world vertices.
     * @param clipper {@link SkeletonClipping} to use. If <code>null</code>, no clipping is applied. */
    getBounds(offset, size, temp = new Array(2), clipper = null) {
        if (!offset)
            throw new Error("offset cannot be null.");
        if (!size)
            throw new Error("size cannot be null.");
        let drawOrder = this.drawOrder;
        let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            if (!slot.bone.active)
                continue;
            let verticesLength = 0;
            let vertices = null;
            let triangles = null;
            let attachment = slot.getAttachment();
            if (attachment instanceof RegionAttachment) {
                verticesLength = 8;
                vertices = Utils.setArraySize(temp, verticesLength, 0);
                attachment.computeWorldVertices(slot, vertices, 0, 2);
                triangles = Skeleton.quadTriangles;
            }
            else if (attachment instanceof MeshAttachment) {
                let mesh = attachment;
                verticesLength = mesh.worldVerticesLength;
                vertices = Utils.setArraySize(temp, verticesLength, 0);
                mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
                triangles = mesh.triangles;
            }
            else if (attachment instanceof ClippingAttachment && clipper != null) {
                clipper.clipStart(slot, attachment);
                continue;
            }
            if (vertices && triangles) {
                if (clipper != null && clipper.isClipping()) {
                    clipper.clipTriangles(vertices, triangles, triangles.length);
                    vertices = clipper.clippedVertices;
                    verticesLength = clipper.clippedVertices.length;
                }
                for (let ii = 0, nn = vertices.length; ii < nn; ii += 2) {
                    let x = vertices[ii], y = vertices[ii + 1];
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
            if (clipper != null)
                clipper.clipEndWithSlot(slot);
        }
        if (clipper != null)
            clipper.clipEnd();
        offset.set(minX, minY);
        size.set(maxX - minX, maxY - minY);
    }
    /** Increments the skeleton's {@link #time}. */
    update(delta) {
        this.time += delta;
    }
    physicsTranslate(x, y) {
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++)
            physicsConstraints[i].translate(x, y);
    }
    /** Calls {@link PhysicsConstraint#rotate(float, float, float)} for each physics constraint. */
    physicsRotate(x, y, degrees) {
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++)
            physicsConstraints[i].rotate(x, y, degrees);
    }
}
/** Determines how physics and other non-deterministic updates are applied. */
var Physics;
(function (Physics) {
    /** Physics are not updated or applied. */
    Physics[Physics["none"] = 0] = "none";
    /** Physics are reset to the current pose. */
    Physics[Physics["reset"] = 1] = "reset";
    /** Physics are updated and the pose from physics is applied. */
    Physics[Physics["update"] = 2] = "update";
    /** Physics are not updated but the pose from physics is applied. */
    Physics[Physics["pose"] = 3] = "pose";
})(Physics || (Physics = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link PhysicsConstraint}.
 * <p>
 * See <a href="http://esotericsoftware.com/spine-physics-constraints">Physics constraints</a> in the Spine User Guide. */
class PhysicsConstraintData extends ConstraintData {
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(boneData) { this._bone = boneData; }
    get bone() {
        if (!this._bone)
            throw new Error("BoneData not set.");
        else
            return this._bone;
    }
    x = 0;
    y = 0;
    rotate = 0;
    scaleX = 0;
    shearX = 0;
    limit = 0;
    step = 0;
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
    mix = 0;
    inertiaGlobal = false;
    strengthGlobal = false;
    dampingGlobal = false;
    massGlobal = false;
    windGlobal = false;
    gravityGlobal = false;
    mixGlobal = false;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose and all of the stateless data for a skeleton.
 *
 * See [Data objects](http://esotericsoftware.com/spine-runtime-architecture#Data-objects) in the Spine Runtimes
 * Guide. */
class SkeletonData {
    /** The skeleton's name, which by default is the name of the skeleton data file, if possible. May be null. */
    name = null;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones = new Array(); // Ordered parents first.
    /** The skeleton's slots in the setup pose draw order. */
    slots = new Array(); // Setup pose draw order.
    skins = new Array();
    /** The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.
     *
     * See {@link Skeleton#getAttachmentByName()}.
     * May be null. */
    defaultSkin = null;
    /** The skeleton's events. */
    events = new Array();
    /** The skeleton's animations. */
    animations = new Array();
    /** The skeleton's IK constraints. */
    ikConstraints = new Array();
    /** The skeleton's transform constraints. */
    transformConstraints = new Array();
    /** The skeleton's path constraints. */
    pathConstraints = new Array();
    /** The skeleton's physics constraints. */
    physicsConstraints = new Array();
    /** The X coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    x = 0;
    /** The Y coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    y = 0;
    /** The width of the skeleton's axis aligned bounding box in the setup pose. */
    width = 0;
    /** The height of the skeleton's axis aligned bounding box in the setup pose. */
    height = 0;
    /** Baseline scale factor for applying distance-dependent effects on non-scalable properties, such as angle or scale. Default
     * is 100. */
    referenceScale = 100;
    /** The Spine version used to export the skeleton data, or null. */
    version = null;
    /** The skeleton data hash. This value will change if any of the skeleton data has changed. May be null. */
    hash = null;
    // Nonessential
    /** The dopesheet FPS in Spine. Available only when nonessential data was exported. */
    fps = 0;
    /** The path to the images directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    imagesPath = null;
    /** The path to the audio directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    audioPath = null;
    /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findBone(boneName) {
        if (!boneName)
            throw new Error("boneName cannot be null.");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (bone.name == boneName)
                return bone;
        }
        return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSlot(slotName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.name == slotName)
                return slot;
        }
        return null;
    }
    /** Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSkin(skinName) {
        if (!skinName)
            throw new Error("skinName cannot be null.");
        let skins = this.skins;
        for (let i = 0, n = skins.length; i < n; i++) {
            let skin = skins[i];
            if (skin.name == skinName)
                return skin;
        }
        return null;
    }
    /** Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findEvent(eventDataName) {
        if (!eventDataName)
            throw new Error("eventDataName cannot be null.");
        let events = this.events;
        for (let i = 0, n = events.length; i < n; i++) {
            let event = events[i];
            if (event.name == eventDataName)
                return event;
        }
        return null;
    }
    /** Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to
     * call it multiple times.
     * @returns May be null. */
    findAnimation(animationName) {
        if (!animationName)
            throw new Error("animationName cannot be null.");
        let animations = this.animations;
        for (let i = 0, n = animations.length; i < n; i++) {
            let animation = animations[i];
            if (animation.name == animationName)
                return animation;
        }
        return null;
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findIkConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const ikConstraints = this.ikConstraints;
        for (let i = 0, n = ikConstraints.length; i < n; i++) {
            const constraint = ikConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it multiple times.
     * @return May be null. */
    findTransformConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const transformConstraints = this.transformConstraints;
        for (let i = 0, n = transformConstraints.length; i < n; i++) {
            const constraint = transformConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPathConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const pathConstraints = this.pathConstraints;
        for (let i = 0, n = pathConstraints.length; i < n; i++) {
            const constraint = pathConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPhysicsConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++) {
            const constraint = physicsConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores an entry in the skin consisting of the slot index, name, and attachment **/
class SkinEntry {
    slotIndex;
    name;
    attachment;
    constructor(slotIndex = 0, name, attachment) {
        this.slotIndex = slotIndex;
        this.name = name;
        this.attachment = attachment;
    }
}
/** Stores attachments by slot index and attachment name.
 *
 * See SkeletonData {@link SkeletonData#defaultSkin}, Skeleton {@link Skeleton#skin}, and
 * [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide. */
class Skin {
    /** The skin's name, which is unique across all skins in the skeleton. */
    name;
    attachments = new Array();
    bones = Array();
    constraints = new Array();
    /** The color of the skin as it was in Spine, or a default color if nonessential data was not exported. */
    color = new Color(0.99607843, 0.61960787, 0.30980393, 1); // fe9e4fff
    constructor(name) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
    }
    /** Adds an attachment to the skin for the specified slot index and name. */
    setAttachment(slotIndex, name, attachment) {
        if (!attachment)
            throw new Error("attachment cannot be null.");
        let attachments = this.attachments;
        if (slotIndex >= attachments.length)
            attachments.length = slotIndex + 1;
        if (!attachments[slotIndex])
            attachments[slotIndex] = {};
        attachments[slotIndex][name] = attachment;
    }
    /** Adds all attachments, bones, and constraints from the specified skin to this skin. */
    addSkin(skin) {
        for (let i = 0; i < skin.bones.length; i++) {
            let bone = skin.bones[i];
            let contained = false;
            for (let ii = 0; ii < this.bones.length; ii++) {
                if (this.bones[ii] == bone) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.bones.push(bone);
        }
        for (let i = 0; i < skin.constraints.length; i++) {
            let constraint = skin.constraints[i];
            let contained = false;
            for (let ii = 0; ii < this.constraints.length; ii++) {
                if (this.constraints[ii] == constraint) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.constraints.push(constraint);
        }
        let attachments = skin.getAttachments();
        for (let i = 0; i < attachments.length; i++) {
            var attachment = attachments[i];
            this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        }
    }
    /** Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not
     * copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals. */
    copySkin(skin) {
        for (let i = 0; i < skin.bones.length; i++) {
            let bone = skin.bones[i];
            let contained = false;
            for (let ii = 0; ii < this.bones.length; ii++) {
                if (this.bones[ii] == bone) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.bones.push(bone);
        }
        for (let i = 0; i < skin.constraints.length; i++) {
            let constraint = skin.constraints[i];
            let contained = false;
            for (let ii = 0; ii < this.constraints.length; ii++) {
                if (this.constraints[ii] == constraint) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.constraints.push(constraint);
        }
        let attachments = skin.getAttachments();
        for (let i = 0; i < attachments.length; i++) {
            var attachment = attachments[i];
            if (!attachment.attachment)
                continue;
            if (attachment.attachment instanceof MeshAttachment) {
                attachment.attachment = attachment.attachment.newLinkedMesh();
                this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
            }
            else {
                attachment.attachment = attachment.attachment.copy();
                this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
            }
        }
    }
    /** Returns the attachment for the specified slot index and name, or null. */
    getAttachment(slotIndex, name) {
        let dictionary = this.attachments[slotIndex];
        return dictionary ? dictionary[name] : null;
    }
    /** Removes the attachment in the skin for the specified slot index and name, if any. */
    removeAttachment(slotIndex, name) {
        let dictionary = this.attachments[slotIndex];
        if (dictionary)
            delete dictionary[name];
    }
    /** Returns all attachments in this skin. */
    getAttachments() {
        let entries = new Array();
        for (var i = 0; i < this.attachments.length; i++) {
            let slotAttachments = this.attachments[i];
            if (slotAttachments) {
                for (let name in slotAttachments) {
                    let attachment = slotAttachments[name];
                    if (attachment)
                        entries.push(new SkinEntry(i, name, attachment));
                }
            }
        }
        return entries;
    }
    /** Returns all attachments in this skin for the specified slot index. */
    getAttachmentsForSlot(slotIndex, attachments) {
        let slotAttachments = this.attachments[slotIndex];
        if (slotAttachments) {
            for (let name in slotAttachments) {
                let attachment = slotAttachments[name];
                if (attachment)
                    attachments.push(new SkinEntry(slotIndex, name, attachment));
            }
        }
    }
    /** Clears all attachments, bones, and constraints. */
    clear() {
        this.attachments.length = 0;
        this.bones.length = 0;
        this.constraints.length = 0;
    }
    /** Attach each attachment in this skin if the corresponding attachment in the old skin is currently attached. */
    attachAll(skeleton, oldSkin) {
        let slotIndex = 0;
        for (let i = 0; i < skeleton.slots.length; i++) {
            let slot = skeleton.slots[i];
            let slotAttachment = slot.getAttachment();
            if (slotAttachment && slotIndex < oldSkin.attachments.length) {
                let dictionary = oldSkin.attachments[slotIndex];
                for (let key in dictionary) {
                    let skinAttachment = dictionary[key];
                    if (slotAttachment == skinAttachment) {
                        let attachment = this.getAttachment(slotIndex, key);
                        if (attachment)
                            slot.setAttachment(attachment);
                        break;
                    }
                }
            }
            slotIndex++;
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link Slot}. */
class SlotData {
    /** The index of the slot in {@link Skeleton#getSlots()}. */
    index = 0;
    /** The name of the slot, which is unique across all slots in the skeleton. */
    name;
    /** The bone this slot belongs to. */
    boneData;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color = new Color(1, 1, 1, 1);
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    /** The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible. */
    attachmentName = null;
    /** The blend mode for drawing the slot's attachment. */
    blendMode = BlendMode.Normal;
    /** False if the slot was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = true;
    constructor(index, name, boneData) {
        if (index < 0)
            throw new Error("index must be >= 0.");
        if (!name)
            throw new Error("name cannot be null.");
        if (!boneData)
            throw new Error("boneData cannot be null.");
        this.index = index;
        this.name = name;
        this.boneData = boneData;
    }
}
/** Determines how images are blended with existing pixels when drawn. */
var BlendMode;
(function (BlendMode) {
    BlendMode[BlendMode["Normal"] = 0] = "Normal";
    BlendMode[BlendMode["Additive"] = 1] = "Additive";
    BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
    BlendMode[BlendMode["Screen"] = 3] = "Screen";
})(BlendMode || (BlendMode = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link TransformConstraint}.
 *
 * See [Transform constraints](http://esotericsoftware.com/spine-transform-constraints) in the Spine User Guide. */
class TransformConstraintData extends ConstraintData {
    /** The bones that will be modified by this transform constraint. */
    bones = new Array();
    /** The target bone whose world transform will be copied to the constrained bones. */
    _target = null;
    set target(boneData) { this._target = boneData; }
    get target() {
        if (!this._target)
            throw new Error("BoneData not set.");
        else
            return this._target;
    }
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** An offset added to the constrained bone X translation. */
    offsetX = 0;
    /** An offset added to the constrained bone Y translation. */
    offsetY = 0;
    /** An offset added to the constrained bone scaleX. */
    offsetScaleX = 0;
    /** An offset added to the constrained bone scaleY. */
    offsetScaleY = 0;
    /** An offset added to the constrained bone shearY. */
    offsetShearY = 0;
    relative = false;
    local = false;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Loads skeleton data in the Spine binary format.
 *
 * See [Spine binary format](http://esotericsoftware.com/spine-binary-format) and
 * [JSON and binary data](http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data) in the Spine
 * Runtimes Guide. */
class SkeletonBinary {
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    attachmentLoader;
    linkedMeshes = new Array();
    constructor(attachmentLoader) {
        this.attachmentLoader = attachmentLoader;
    }
    readSkeletonData(binary) {
        let scale = this.scale;
        let skeletonData = new SkeletonData();
        skeletonData.name = ""; // BOZO
        let input = new BinaryInput(binary);
        let lowHash = input.readInt32();
        let highHash = input.readInt32();
        skeletonData.hash = highHash == 0 && lowHash == 0 ? null : highHash.toString(16) + lowHash.toString(16);
        skeletonData.version = input.readString();
        skeletonData.x = input.readFloat();
        skeletonData.y = input.readFloat();
        skeletonData.width = input.readFloat();
        skeletonData.height = input.readFloat();
        skeletonData.referenceScale = input.readFloat() * scale;
        let nonessential = input.readBoolean();
        if (nonessential) {
            skeletonData.fps = input.readFloat();
            skeletonData.imagesPath = input.readString();
            skeletonData.audioPath = input.readString();
        }
        let n = 0;
        // Strings.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let str = input.readString();
            if (!str)
                throw new Error("String in string table must not be null.");
            input.strings.push(str);
        }
        // Bones.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Bone name must not be null.");
            let parent = i == 0 ? null : skeletonData.bones[input.readInt(true)];
            let data = new BoneData(i, name, parent);
            data.rotation = input.readFloat();
            data.x = input.readFloat() * scale;
            data.y = input.readFloat() * scale;
            data.scaleX = input.readFloat();
            data.scaleY = input.readFloat();
            data.shearX = input.readFloat();
            data.shearY = input.readFloat();
            data.length = input.readFloat() * scale;
            data.inherit = input.readByte();
            data.skinRequired = input.readBoolean();
            if (nonessential) {
                Color.rgba8888ToColor(data.color, input.readInt32());
                data.icon = input.readString() ?? undefined;
                data.visible = input.readBoolean();
            }
            skeletonData.bones.push(data);
        }
        // Slots.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let slotName = input.readString();
            if (!slotName)
                throw new Error("Slot name must not be null.");
            let boneData = skeletonData.bones[input.readInt(true)];
            let data = new SlotData(i, slotName, boneData);
            Color.rgba8888ToColor(data.color, input.readInt32());
            let darkColor = input.readInt32();
            if (darkColor != -1)
                Color.rgb888ToColor(data.darkColor = new Color(), darkColor);
            data.attachmentName = input.readStringRef();
            data.blendMode = input.readInt(true);
            if (nonessential)
                data.visible = input.readBoolean();
            skeletonData.slots.push(data);
        }
        // IK constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("IK constraint data name must not be null.");
            let data = new IkConstraintData(name);
            data.order = input.readInt(true);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            data.bendDirection = (flags & 2) != 0 ? 1 : -1;
            data.compress = (flags & 4) != 0;
            data.stretch = (flags & 8) != 0;
            data.uniform = (flags & 16) != 0;
            if ((flags & 32) != 0)
                data.mix = (flags & 64) != 0 ? input.readFloat() : 1;
            if ((flags & 128) != 0)
                data.softness = input.readFloat() * scale;
            skeletonData.ikConstraints.push(data);
        }
        // Transform constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Transform constraint data name must not be null.");
            let data = new TransformConstraintData(name);
            data.order = input.readInt(true);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            data.local = (flags & 2) != 0;
            data.relative = (flags & 4) != 0;
            if ((flags & 8) != 0)
                data.offsetRotation = input.readFloat();
            if ((flags & 16) != 0)
                data.offsetX = input.readFloat() * scale;
            if ((flags & 32) != 0)
                data.offsetY = input.readFloat() * scale;
            if ((flags & 64) != 0)
                data.offsetScaleX = input.readFloat();
            if ((flags & 128) != 0)
                data.offsetScaleY = input.readFloat();
            flags = input.readByte();
            if ((flags & 1) != 0)
                data.offsetShearY = input.readFloat();
            if ((flags & 2) != 0)
                data.mixRotate = input.readFloat();
            if ((flags & 4) != 0)
                data.mixX = input.readFloat();
            if ((flags & 8) != 0)
                data.mixY = input.readFloat();
            if ((flags & 16) != 0)
                data.mixScaleX = input.readFloat();
            if ((flags & 32) != 0)
                data.mixScaleY = input.readFloat();
            if ((flags & 64) != 0)
                data.mixShearY = input.readFloat();
            skeletonData.transformConstraints.push(data);
        }
        // Path constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Path constraint data name must not be null.");
            let data = new PathConstraintData(name);
            data.order = input.readInt(true);
            data.skinRequired = input.readBoolean();
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.slots[input.readInt(true)];
            const flags = input.readByte();
            data.positionMode = flags & 1;
            data.spacingMode = (flags >> 1) & 3;
            data.rotateMode = (flags >> 3) & 3;
            if ((flags & 128) != 0)
                data.offsetRotation = input.readFloat();
            data.position = input.readFloat();
            if (data.positionMode == PositionMode.Fixed)
                data.position *= scale;
            data.spacing = input.readFloat();
            if (data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed)
                data.spacing *= scale;
            data.mixRotate = input.readFloat();
            data.mixX = input.readFloat();
            data.mixY = input.readFloat();
            skeletonData.pathConstraints.push(data);
        }
        // Physics constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            const name = input.readString();
            if (!name)
                throw new Error("Physics constraint data name must not be null.");
            const data = new PhysicsConstraintData(name);
            data.order = input.readInt(true);
            data.bone = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            if ((flags & 2) != 0)
                data.x = input.readFloat();
            if ((flags & 4) != 0)
                data.y = input.readFloat();
            if ((flags & 8) != 0)
                data.rotate = input.readFloat();
            if ((flags & 16) != 0)
                data.scaleX = input.readFloat();
            if ((flags & 32) != 0)
                data.shearX = input.readFloat();
            data.limit = ((flags & 64) != 0 ? input.readFloat() : 5000) * scale;
            data.step = 1 / input.readUnsignedByte();
            data.inertia = input.readFloat();
            data.strength = input.readFloat();
            data.damping = input.readFloat();
            data.massInverse = (flags & 128) != 0 ? input.readFloat() : 1;
            data.wind = input.readFloat();
            data.gravity = input.readFloat();
            flags = input.readByte();
            if ((flags & 1) != 0)
                data.inertiaGlobal = true;
            if ((flags & 2) != 0)
                data.strengthGlobal = true;
            if ((flags & 4) != 0)
                data.dampingGlobal = true;
            if ((flags & 8) != 0)
                data.massGlobal = true;
            if ((flags & 16) != 0)
                data.windGlobal = true;
            if ((flags & 32) != 0)
                data.gravityGlobal = true;
            if ((flags & 64) != 0)
                data.mixGlobal = true;
            data.mix = (flags & 128) != 0 ? input.readFloat() : 1;
            skeletonData.physicsConstraints.push(data);
        }
        // Default skin.
        let defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
        if (defaultSkin) {
            skeletonData.defaultSkin = defaultSkin;
            skeletonData.skins.push(defaultSkin);
        }
        // Skins.
        {
            let i = skeletonData.skins.length;
            Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));
            for (; i < n; i++) {
                let skin = this.readSkin(input, skeletonData, false, nonessential);
                if (!skin)
                    throw new Error("readSkin() should not have returned null.");
                skeletonData.skins[i] = skin;
            }
        }
        // Linked meshes.
        n = this.linkedMeshes.length;
        for (let i = 0; i < n; i++) {
            let linkedMesh = this.linkedMeshes[i];
            const skin = skeletonData.skins[linkedMesh.skinIndex];
            if (!linkedMesh.parent)
                throw new Error("Linked mesh parent must not be null");
            let parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
            if (!parent)
                throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
            linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
            linkedMesh.mesh.setParentMesh(parent);
            if (linkedMesh.mesh.region != null)
                linkedMesh.mesh.updateRegion();
        }
        this.linkedMeshes.length = 0;
        // Events.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let eventName = input.readString();
            if (!eventName)
                throw new Error("Event data name must not be null");
            let data = new EventData(eventName);
            data.intValue = input.readInt(false);
            data.floatValue = input.readFloat();
            data.stringValue = input.readString();
            data.audioPath = input.readString();
            if (data.audioPath) {
                data.volume = input.readFloat();
                data.balance = input.readFloat();
            }
            skeletonData.events.push(data);
        }
        // Animations.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let animationName = input.readString();
            if (!animationName)
                throw new Error("Animatio name must not be null.");
            skeletonData.animations.push(this.readAnimation(input, animationName, skeletonData));
        }
        return skeletonData;
    }
    readSkin(input, skeletonData, defaultSkin, nonessential) {
        let skin = null;
        let slotCount = 0;
        if (defaultSkin) {
            slotCount = input.readInt(true);
            if (slotCount == 0)
                return null;
            skin = new Skin("default");
        }
        else {
            let skinName = input.readString();
            if (!skinName)
                throw new Error("Skin name must not be null.");
            skin = new Skin(skinName);
            if (nonessential)
                Color.rgba8888ToColor(skin.color, input.readInt32());
            skin.bones.length = input.readInt(true);
            for (let i = 0, n = skin.bones.length; i < n; i++)
                skin.bones[i] = skeletonData.bones[input.readInt(true)];
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.physicsConstraints[input.readInt(true)]);
            slotCount = input.readInt(true);
        }
        for (let i = 0; i < slotCount; i++) {
            let slotIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let name = input.readStringRef();
                if (!name)
                    throw new Error("Attachment name must not be null");
                let attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
                if (attachment)
                    skin.setAttachment(slotIndex, name, attachment);
            }
        }
        return skin;
    }
    readAttachment(input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
        let scale = this.scale;
        let flags = input.readByte();
        const name = (flags & 8) != 0 ? input.readStringRef() : attachmentName;
        if (!name)
            throw new Error("Attachment name must not be null");
        switch ((flags & 0b111)) { // BUG?
            case AttachmentType.Region: {
                let path = (flags & 16) != 0 ? input.readStringRef() : null;
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                let rotation = (flags & 128) != 0 ? input.readFloat() : 0;
                let x = input.readFloat();
                let y = input.readFloat();
                let scaleX = input.readFloat();
                let scaleY = input.readFloat();
                let width = input.readFloat();
                let height = input.readFloat();
                if (!path)
                    path = name;
                let region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
                if (!region)
                    return null;
                region.path = path;
                region.x = x * scale;
                region.y = y * scale;
                region.scaleX = scaleX;
                region.scaleY = scaleY;
                region.rotation = rotation;
                region.width = width * scale;
                region.height = height * scale;
                Color.rgba8888ToColor(region.color, color);
                region.sequence = sequence;
                if (sequence == null)
                    region.updateRegion();
                return region;
            }
            case AttachmentType.BoundingBox: {
                let vertices = this.readVertices(input, (flags & 16) != 0);
                let color = nonessential ? input.readInt32() : 0;
                let box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
                if (!box)
                    return null;
                box.worldVerticesLength = vertices.length;
                box.vertices = vertices.vertices;
                box.bones = vertices.bones;
                if (nonessential)
                    Color.rgba8888ToColor(box.color, color);
                return box;
            }
            case AttachmentType.Mesh: {
                let path = (flags & 16) != 0 ? input.readStringRef() : name;
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                const hullLength = input.readInt(true);
                const vertices = this.readVertices(input, (flags & 128) != 0);
                const uvs = this.readFloatArray(input, vertices.length, 1);
                const triangles = this.readShortArray(input, (vertices.length - hullLength - 2) * 3);
                let edges = [];
                let width = 0, height = 0;
                if (nonessential) {
                    edges = this.readShortArray(input, input.readInt(true));
                    width = input.readFloat();
                    height = input.readFloat();
                }
                if (!path)
                    path = name;
                let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
                if (!mesh)
                    return null;
                mesh.path = path;
                Color.rgba8888ToColor(mesh.color, color);
                mesh.bones = vertices.bones;
                mesh.vertices = vertices.vertices;
                mesh.worldVerticesLength = vertices.length;
                mesh.triangles = triangles;
                mesh.regionUVs = uvs;
                if (sequence == null)
                    mesh.updateRegion();
                mesh.hullLength = hullLength << 1;
                mesh.sequence = sequence;
                if (nonessential) {
                    mesh.edges = edges;
                    mesh.width = width * scale;
                    mesh.height = height * scale;
                }
                return mesh;
            }
            case AttachmentType.LinkedMesh: {
                const path = (flags & 16) != 0 ? input.readStringRef() : name;
                if (path == null)
                    throw new Error("Path of linked mesh must not be null");
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                const inheritTimelines = (flags & 128) != 0;
                const skinIndex = input.readInt(true);
                const parent = input.readStringRef();
                let width = 0, height = 0;
                if (nonessential) {
                    width = input.readFloat();
                    height = input.readFloat();
                }
                let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
                if (!mesh)
                    return null;
                mesh.path = path;
                Color.rgba8888ToColor(mesh.color, color);
                mesh.sequence = sequence;
                if (nonessential) {
                    mesh.width = width * scale;
                    mesh.height = height * scale;
                }
                this.linkedMeshes.push(new LinkedMesh(mesh, skinIndex, slotIndex, parent, inheritTimelines));
                return mesh;
            }
            case AttachmentType.Path: {
                const closed = (flags & 16) != 0;
                const constantSpeed = (flags & 32) != 0;
                const vertices = this.readVertices(input, (flags & 64) != 0);
                const lengths = Utils.newArray(vertices.length / 6, 0);
                for (let i = 0, n = lengths.length; i < n; i++)
                    lengths[i] = input.readFloat() * scale;
                const color = nonessential ? input.readInt32() : 0;
                const path = this.attachmentLoader.newPathAttachment(skin, name);
                if (!path)
                    return null;
                path.closed = closed;
                path.constantSpeed = constantSpeed;
                path.worldVerticesLength = vertices.length;
                path.vertices = vertices.vertices;
                path.bones = vertices.bones;
                path.lengths = lengths;
                if (nonessential)
                    Color.rgba8888ToColor(path.color, color);
                return path;
            }
            case AttachmentType.Point: {
                const rotation = input.readFloat();
                const x = input.readFloat();
                const y = input.readFloat();
                const color = nonessential ? input.readInt32() : 0;
                const point = this.attachmentLoader.newPointAttachment(skin, name);
                if (!point)
                    return null;
                point.x = x * scale;
                point.y = y * scale;
                point.rotation = rotation;
                if (nonessential)
                    Color.rgba8888ToColor(point.color, color);
                return point;
            }
            case AttachmentType.Clipping: {
                const endSlotIndex = input.readInt(true);
                const vertices = this.readVertices(input, (flags & 16) != 0);
                let color = nonessential ? input.readInt32() : 0;
                let clip = this.attachmentLoader.newClippingAttachment(skin, name);
                if (!clip)
                    return null;
                clip.endSlot = skeletonData.slots[endSlotIndex];
                clip.worldVerticesLength = vertices.length;
                clip.vertices = vertices.vertices;
                clip.bones = vertices.bones;
                if (nonessential)
                    Color.rgba8888ToColor(clip.color, color);
                return clip;
            }
        }
        return null;
    }
    readSequence(input) {
        let sequence = new Sequence(input.readInt(true));
        sequence.start = input.readInt(true);
        sequence.digits = input.readInt(true);
        sequence.setupIndex = input.readInt(true);
        return sequence;
    }
    readVertices(input, weighted) {
        const scale = this.scale;
        const vertexCount = input.readInt(true);
        const vertices = new Vertices();
        vertices.length = vertexCount << 1;
        if (!weighted) {
            vertices.vertices = this.readFloatArray(input, vertices.length, scale);
            return vertices;
        }
        let weights = new Array();
        let bonesArray = new Array();
        for (let i = 0; i < vertexCount; i++) {
            let boneCount = input.readInt(true);
            bonesArray.push(boneCount);
            for (let ii = 0; ii < boneCount; ii++) {
                bonesArray.push(input.readInt(true));
                weights.push(input.readFloat() * scale);
                weights.push(input.readFloat() * scale);
                weights.push(input.readFloat());
            }
        }
        vertices.vertices = Utils.toFloatArray(weights);
        vertices.bones = bonesArray;
        return vertices;
    }
    readFloatArray(input, n, scale) {
        let array = new Array(n);
        if (scale == 1) {
            for (let i = 0; i < n; i++)
                array[i] = input.readFloat();
        }
        else {
            for (let i = 0; i < n; i++)
                array[i] = input.readFloat() * scale;
        }
        return array;
    }
    readShortArray(input, n) {
        let array = new Array(n);
        for (let i = 0; i < n; i++)
            array[i] = input.readInt(true);
        return array;
    }
    readAnimation(input, name, skeletonData) {
        input.readInt(true); // Number of timelines.
        let timelines = new Array();
        let scale = this.scale;
        // Slot timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let slotIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let timelineType = input.readByte();
                let frameCount = input.readInt(true);
                let frameLast = frameCount - 1;
                switch (timelineType) {
                    case SLOT_ATTACHMENT: {
                        let timeline = new AttachmentTimeline(frameCount, slotIndex);
                        for (let frame = 0; frame < frameCount; frame++)
                            timeline.setFrame(frame, input.readFloat(), input.readStringRef());
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGBA: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBATimeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let a = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, a);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let r2 = input.readUnsignedByte() / 255.0;
                            let g2 = input.readUnsignedByte() / 255.0;
                            let b2 = input.readUnsignedByte() / 255.0;
                            let a2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, a2, 1);
                            }
                            time = time2;
                            r = r2;
                            g = g2;
                            b = b2;
                            a = a2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGB: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBTimeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let r2 = input.readUnsignedByte() / 255.0;
                            let g2 = input.readUnsignedByte() / 255.0;
                            let b2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                            }
                            time = time2;
                            r = r2;
                            g = g2;
                            b = b2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGBA2: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBA2Timeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let a = input.readUnsignedByte() / 255.0;
                        let r2 = input.readUnsignedByte() / 255.0;
                        let g2 = input.readUnsignedByte() / 255.0;
                        let b2 = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, a, r2, g2, b2);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let nr = input.readUnsignedByte() / 255.0;
                            let ng = input.readUnsignedByte() / 255.0;
                            let nb = input.readUnsignedByte() / 255.0;
                            let na = input.readUnsignedByte() / 255.0;
                            let nr2 = input.readUnsignedByte() / 255.0;
                            let ng2 = input.readUnsignedByte() / 255.0;
                            let nb2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, na, 1);
                                    setBezier(input, timeline, bezier++, frame, 4, time, time2, r2, nr2, 1);
                                    setBezier(input, timeline, bezier++, frame, 5, time, time2, g2, ng2, 1);
                                    setBezier(input, timeline, bezier++, frame, 6, time, time2, b2, nb2, 1);
                            }
                            time = time2;
                            r = nr;
                            g = ng;
                            b = nb;
                            a = na;
                            r2 = nr2;
                            g2 = ng2;
                            b2 = nb2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGB2: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGB2Timeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let r2 = input.readUnsignedByte() / 255.0;
                        let g2 = input.readUnsignedByte() / 255.0;
                        let b2 = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, r2, g2, b2);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let nr = input.readUnsignedByte() / 255.0;
                            let ng = input.readUnsignedByte() / 255.0;
                            let nb = input.readUnsignedByte() / 255.0;
                            let nr2 = input.readUnsignedByte() / 255.0;
                            let ng2 = input.readUnsignedByte() / 255.0;
                            let nb2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, r2, nr2, 1);
                                    setBezier(input, timeline, bezier++, frame, 4, time, time2, g2, ng2, 1);
                                    setBezier(input, timeline, bezier++, frame, 5, time, time2, b2, nb2, 1);
                            }
                            time = time2;
                            r = nr;
                            g = ng;
                            b = nb;
                            r2 = nr2;
                            g2 = ng2;
                            b2 = nb2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_ALPHA: {
                        let timeline = new AlphaTimeline(frameCount, input.readInt(true), slotIndex);
                        let time = input.readFloat(), a = input.readUnsignedByte() / 255;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, a);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let a2 = input.readUnsignedByte() / 255;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, a, a2, 1);
                            }
                            time = time2;
                            a = a2;
                        }
                        timelines.push(timeline);
                    }
                }
            }
        }
        // Bone timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let boneIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let type = input.readByte(), frameCount = input.readInt(true);
                if (type == BONE_INHERIT) {
                    let timeline = new InheritTimeline(frameCount, boneIndex);
                    for (let frame = 0; frame < frameCount; frame++) {
                        timeline.setFrame(frame, input.readFloat(), input.readByte());
                    }
                    timelines.push(timeline);
                    continue;
                }
                let bezierCount = input.readInt(true);
                switch (type) {
                    case BONE_ROTATE:
                        timelines.push(readTimeline1(input, new RotateTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_TRANSLATE:
                        timelines.push(readTimeline2(input, new TranslateTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_TRANSLATEX:
                        timelines.push(readTimeline1(input, new TranslateXTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_TRANSLATEY:
                        timelines.push(readTimeline1(input, new TranslateYTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_SCALE:
                        timelines.push(readTimeline2(input, new ScaleTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SCALEX:
                        timelines.push(readTimeline1(input, new ScaleXTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SCALEY:
                        timelines.push(readTimeline1(input, new ScaleYTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEAR:
                        timelines.push(readTimeline2(input, new ShearTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEARX:
                        timelines.push(readTimeline1(input, new ShearXTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEARY:
                        timelines.push(readTimeline1(input, new ShearYTimeline(frameCount, bezierCount, boneIndex), 1));
                }
            }
        }
        // IK constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
            let timeline = new IkConstraintTimeline(frameCount, input.readInt(true), index);
            let flags = input.readByte();
            let time = input.readFloat(), mix = (flags & 1) != 0 ? ((flags & 2) != 0 ? input.readFloat() : 1) : 0;
            let softness = (flags & 4) != 0 ? input.readFloat() * scale : 0;
            for (let frame = 0, bezier = 0;; frame++) {
                timeline.setFrame(frame, time, mix, softness, (flags & 8) != 0 ? 1 : -1, (flags & 16) != 0, (flags & 32) != 0);
                if (frame == frameLast)
                    break;
                flags = input.readByte();
                const time2 = input.readFloat(), mix2 = (flags & 1) != 0 ? ((flags & 2) != 0 ? input.readFloat() : 1) : 0;
                const softness2 = (flags & 4) != 0 ? input.readFloat() * scale : 0;
                if ((flags & 64) != 0) {
                    timeline.setStepped(frame);
                }
                else if ((flags & 128) != 0) {
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mix, mix2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, softness, softness2, scale);
                }
                time = time2;
                mix = mix2;
                softness = softness2;
            }
            timelines.push(timeline);
        }
        // Transform constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
            let timeline = new TransformConstraintTimeline(frameCount, input.readInt(true), index);
            let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat(), mixScaleX = input.readFloat(), mixScaleY = input.readFloat(), mixShearY = input.readFloat();
            for (let frame = 0, bezier = 0;; frame++) {
                timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
                if (frame == frameLast)
                    break;
                let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat(), mixScaleX2 = input.readFloat(), mixScaleY2 = input.readFloat(), mixShearY2 = input.readFloat();
                switch (input.readByte()) {
                    case CURVE_STEPPED:
                        timeline.setStepped(frame);
                        break;
                    case CURVE_BEZIER:
                        setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                        setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                        setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                        setBezier(input, timeline, bezier++, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
                        setBezier(input, timeline, bezier++, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
                        setBezier(input, timeline, bezier++, frame, 5, time, time2, mixShearY, mixShearY2, 1);
                }
                time = time2;
                mixRotate = mixRotate2;
                mixX = mixX2;
                mixY = mixY2;
                mixScaleX = mixScaleX2;
                mixScaleY = mixScaleY2;
                mixShearY = mixShearY2;
            }
            timelines.push(timeline);
        }
        // Path constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true);
            let data = skeletonData.pathConstraints[index];
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                const type = input.readByte(), frameCount = input.readInt(true), bezierCount = input.readInt(true);
                switch (type) {
                    case PATH_POSITION:
                        timelines
                            .push(readTimeline1(input, new PathConstraintPositionTimeline(frameCount, bezierCount, index), data.positionMode == PositionMode.Fixed ? scale : 1));
                        break;
                    case PATH_SPACING:
                        timelines
                            .push(readTimeline1(input, new PathConstraintSpacingTimeline(frameCount, bezierCount, index), data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed ? scale : 1));
                        break;
                    case PATH_MIX:
                        let timeline = new PathConstraintMixTimeline(frameCount, bezierCount, index);
                        let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat();
                        for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
                            timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat();
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                            }
                            time = time2;
                            mixRotate = mixRotate2;
                            mixX = mixX2;
                            mixY = mixY2;
                        }
                        timelines.push(timeline);
                }
            }
        }
        // Physics timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            const index = input.readInt(true) - 1;
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                const type = input.readByte(), frameCount = input.readInt(true);
                if (type == PHYSICS_RESET) {
                    const timeline = new PhysicsConstraintResetTimeline(frameCount, index);
                    for (let frame = 0; frame < frameCount; frame++)
                        timeline.setFrame(frame, input.readFloat());
                    timelines.push(timeline);
                    continue;
                }
                const bezierCount = input.readInt(true);
                switch (type) {
                    case PHYSICS_INERTIA:
                        timelines.push(readTimeline1(input, new PhysicsConstraintInertiaTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_STRENGTH:
                        timelines.push(readTimeline1(input, new PhysicsConstraintStrengthTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_DAMPING:
                        timelines.push(readTimeline1(input, new PhysicsConstraintDampingTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_MASS:
                        timelines.push(readTimeline1(input, new PhysicsConstraintMassTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_WIND:
                        timelines.push(readTimeline1(input, new PhysicsConstraintWindTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_GRAVITY:
                        timelines.push(readTimeline1(input, new PhysicsConstraintGravityTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_MIX:
                        timelines.push(readTimeline1(input, new PhysicsConstraintMixTimeline(frameCount, bezierCount, index), 1));
                }
            }
        }
        // Deform timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let skin = skeletonData.skins[input.readInt(true)];
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let slotIndex = input.readInt(true);
                for (let iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
                    let attachmentName = input.readStringRef();
                    if (!attachmentName)
                        throw new Error("attachmentName must not be null.");
                    let attachment = skin.getAttachment(slotIndex, attachmentName);
                    let timelineType = input.readByte();
                    let frameCount = input.readInt(true);
                    let frameLast = frameCount - 1;
                    switch (timelineType) {
                        case ATTACHMENT_DEFORM: {
                            let vertexAttachment = attachment;
                            let weighted = vertexAttachment.bones;
                            let vertices = vertexAttachment.vertices;
                            let deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                            let bezierCount = input.readInt(true);
                            let timeline = new DeformTimeline(frameCount, bezierCount, slotIndex, vertexAttachment);
                            let time = input.readFloat();
                            for (let frame = 0, bezier = 0;; frame++) {
                                let deform;
                                let end = input.readInt(true);
                                if (end == 0)
                                    deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                                else {
                                    deform = Utils.newFloatArray(deformLength);
                                    let start = input.readInt(true);
                                    end += start;
                                    if (scale == 1) {
                                        for (let v = start; v < end; v++)
                                            deform[v] = input.readFloat();
                                    }
                                    else {
                                        for (let v = start; v < end; v++)
                                            deform[v] = input.readFloat() * scale;
                                    }
                                    if (!weighted) {
                                        for (let v = 0, vn = deform.length; v < vn; v++)
                                            deform[v] += vertices[v];
                                    }
                                }
                                timeline.setFrame(frame, time, deform);
                                if (frame == frameLast)
                                    break;
                                let time2 = input.readFloat();
                                switch (input.readByte()) {
                                    case CURVE_STEPPED:
                                        timeline.setStepped(frame);
                                        break;
                                    case CURVE_BEZIER:
                                        setBezier(input, timeline, bezier++, frame, 0, time, time2, 0, 1, 1);
                                }
                                time = time2;
                            }
                            timelines.push(timeline);
                            break;
                        }
                        case ATTACHMENT_SEQUENCE: {
                            let timeline = new SequenceTimeline(frameCount, slotIndex, attachment);
                            for (let frame = 0; frame < frameCount; frame++) {
                                let time = input.readFloat();
                                let modeAndIndex = input.readInt32();
                                timeline.setFrame(frame, time, SequenceModeValues[modeAndIndex & 0xf], modeAndIndex >> 4, input.readFloat());
                            }
                            timelines.push(timeline);
                            break;
                        }
                    }
                }
            }
        }
        // Draw order timeline.
        let drawOrderCount = input.readInt(true);
        if (drawOrderCount > 0) {
            let timeline = new DrawOrderTimeline(drawOrderCount);
            let slotCount = skeletonData.slots.length;
            for (let i = 0; i < drawOrderCount; i++) {
                let time = input.readFloat();
                let offsetCount = input.readInt(true);
                let drawOrder = Utils.newArray(slotCount, 0);
                for (let ii = slotCount - 1; ii >= 0; ii--)
                    drawOrder[ii] = -1;
                let unchanged = Utils.newArray(slotCount - offsetCount, 0);
                let originalIndex = 0, unchangedIndex = 0;
                for (let ii = 0; ii < offsetCount; ii++) {
                    let slotIndex = input.readInt(true);
                    // Collect unchanged items.
                    while (originalIndex != slotIndex)
                        unchanged[unchangedIndex++] = originalIndex++;
                    // Set changed items.
                    drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
                }
                // Collect remaining unchanged items.
                while (originalIndex < slotCount)
                    unchanged[unchangedIndex++] = originalIndex++;
                // Fill in unchanged items.
                for (let ii = slotCount - 1; ii >= 0; ii--)
                    if (drawOrder[ii] == -1)
                        drawOrder[ii] = unchanged[--unchangedIndex];
                timeline.setFrame(i, time, drawOrder);
            }
            timelines.push(timeline);
        }
        // Event timeline.
        let eventCount = input.readInt(true);
        if (eventCount > 0) {
            let timeline = new EventTimeline(eventCount);
            for (let i = 0; i < eventCount; i++) {
                let time = input.readFloat();
                let eventData = skeletonData.events[input.readInt(true)];
                let event = new Event(time, eventData);
                event.intValue = input.readInt(false);
                event.floatValue = input.readFloat();
                event.stringValue = input.readString();
                if (event.stringValue == null)
                    event.stringValue = eventData.stringValue;
                if (event.data.audioPath) {
                    event.volume = input.readFloat();
                    event.balance = input.readFloat();
                }
                timeline.setFrame(i, event);
            }
            timelines.push(timeline);
        }
        let duration = 0;
        for (let i = 0, n = timelines.length; i < n; i++)
            duration = Math.max(duration, timelines[i].getDuration());
        return new Animation(name, timelines, duration);
    }
}
class BinaryInput {
    strings;
    index;
    buffer;
    constructor(data, strings = new Array(), index = 0, buffer = new DataView(data instanceof ArrayBuffer ? data : data.buffer)) {
        this.strings = strings;
        this.index = index;
        this.buffer = buffer;
    }
    readByte() {
        return this.buffer.getInt8(this.index++);
    }
    readUnsignedByte() {
        return this.buffer.getUint8(this.index++);
    }
    readShort() {
        let value = this.buffer.getInt16(this.index);
        this.index += 2;
        return value;
    }
    readInt32() {
        let value = this.buffer.getInt32(this.index);
        this.index += 4;
        return value;
    }
    readInt(optimizePositive) {
        let b = this.readByte();
        let result = b & 0x7F;
        if ((b & 0x80) != 0) {
            b = this.readByte();
            result |= (b & 0x7F) << 7;
            if ((b & 0x80) != 0) {
                b = this.readByte();
                result |= (b & 0x7F) << 14;
                if ((b & 0x80) != 0) {
                    b = this.readByte();
                    result |= (b & 0x7F) << 21;
                    if ((b & 0x80) != 0) {
                        b = this.readByte();
                        result |= (b & 0x7F) << 28;
                    }
                }
            }
        }
        return optimizePositive ? result : ((result >>> 1) ^ -(result & 1));
    }
    readStringRef() {
        let index = this.readInt(true);
        return index == 0 ? null : this.strings[index - 1];
    }
    readString() {
        let byteCount = this.readInt(true);
        switch (byteCount) {
            case 0:
                return null;
            case 1:
                return "";
        }
        byteCount--;
        let chars = "";
        for (let i = 0; i < byteCount;) {
            let b = this.readUnsignedByte();
            switch (b >> 4) {
                case 12:
                case 13:
                    chars += String.fromCharCode(((b & 0x1F) << 6 | this.readByte() & 0x3F));
                    i += 2;
                    break;
                case 14:
                    chars += String.fromCharCode(((b & 0x0F) << 12 | (this.readByte() & 0x3F) << 6 | this.readByte() & 0x3F));
                    i += 3;
                    break;
                default:
                    chars += String.fromCharCode(b);
                    i++;
            }
        }
        return chars;
    }
    readFloat() {
        let value = this.buffer.getFloat32(this.index);
        this.index += 4;
        return value;
    }
    readBoolean() {
        return this.readByte() != 0;
    }
}
class LinkedMesh {
    parent;
    skinIndex;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skinIndex, slotIndex, parent, inheritDeform) {
        this.mesh = mesh;
        this.skinIndex = skinIndex;
        this.slotIndex = slotIndex;
        this.parent = parent;
        this.inheritTimeline = inheritDeform;
    }
}
class Vertices {
    bones;
    vertices;
    length;
    constructor(bones = null, vertices = null, length = 0) {
        this.bones = bones;
        this.vertices = vertices;
        this.length = length;
    }
}
var AttachmentType;
(function (AttachmentType) {
    AttachmentType[AttachmentType["Region"] = 0] = "Region";
    AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
    AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
    AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
    AttachmentType[AttachmentType["Path"] = 4] = "Path";
    AttachmentType[AttachmentType["Point"] = 5] = "Point";
    AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
})(AttachmentType || (AttachmentType = {}));
function readTimeline1(input, timeline, scale) {
    let time = input.readFloat(), value = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
        timeline.setFrame(frame, time, value);
        if (frame == frameLast)
            break;
        let time2 = input.readFloat(), value2 = input.readFloat() * scale;
        switch (input.readByte()) {
            case CURVE_STEPPED:
                timeline.setStepped(frame);
                break;
            case CURVE_BEZIER:
                setBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
        }
        time = time2;
        value = value2;
    }
    return timeline;
}
function readTimeline2(input, timeline, scale) {
    let time = input.readFloat(), value1 = input.readFloat() * scale, value2 = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
        timeline.setFrame(frame, time, value1, value2);
        if (frame == frameLast)
            break;
        let time2 = input.readFloat(), nvalue1 = input.readFloat() * scale, nvalue2 = input.readFloat() * scale;
        switch (input.readByte()) {
            case CURVE_STEPPED:
                timeline.setStepped(frame);
                break;
            case CURVE_BEZIER:
                setBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
                setBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
        }
        time = time2;
        value1 = nvalue1;
        value2 = nvalue2;
    }
    return timeline;
}
function setBezier(input, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    timeline.setBezier(bezier, frame, value, time1, value1, input.readFloat(), input.readFloat() * scale, input.readFloat(), input.readFloat() * scale, time2, value2);
}
const BONE_ROTATE = 0;
const BONE_TRANSLATE = 1;
const BONE_TRANSLATEX = 2;
const BONE_TRANSLATEY = 3;
const BONE_SCALE = 4;
const BONE_SCALEX = 5;
const BONE_SCALEY = 6;
const BONE_SHEAR = 7;
const BONE_SHEARX = 8;
const BONE_SHEARY = 9;
const BONE_INHERIT = 10;
const SLOT_ATTACHMENT = 0;
const SLOT_RGBA = 1;
const SLOT_RGB = 2;
const SLOT_RGBA2 = 3;
const SLOT_RGB2 = 4;
const SLOT_ALPHA = 5;
const ATTACHMENT_DEFORM = 0;
const ATTACHMENT_SEQUENCE = 1;
const PATH_POSITION = 0;
const PATH_SPACING = 1;
const PATH_MIX = 2;
const PHYSICS_INERTIA = 0;
const PHYSICS_STRENGTH = 1;
const PHYSICS_DAMPING = 2;
const PHYSICS_MASS = 4;
const PHYSICS_WIND = 5;
const PHYSICS_GRAVITY = 6;
const PHYSICS_MIX = 7;
const PHYSICS_RESET = 8;
const CURVE_STEPPED = 1;
const CURVE_BEZIER = 2;

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
(() => {
    if (typeof Math.fround === "undefined") {
        Math.fround = (function (array) {
            return function (x) {
                return array[0] = x, array[0];
            };
        })(new Float32Array(1));
    }
})();

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class CanvasTexture extends Texture {
    constructor(image) {
        super(image);
    }
    setFilters(minFilter, magFilter) { }
    setWraps(uWrap, vWrap) { }
    dispose() { }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class AssetManager extends AssetManagerBase {
    constructor(pathPrefix = "", downloader = new Downloader()) {
        super((image) => { return new CanvasTexture(image); }, pathPrefix, downloader);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
const worldVertices = Utils.newFloatArray(8);
class SkeletonRenderer {
    static QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
    static VERTEX_SIZE = 2 + 2 + 4;
    ctx;
    triangleRendering = false;
    debugRendering = false;
    vertices = Utils.newFloatArray(8 * 1024);
    tempColor = new Color();
    constructor(context) {
        this.ctx = context;
    }
    draw(skeleton) {
        if (this.triangleRendering)
            this.drawTriangles(skeleton);
        else
            this.drawImages(skeleton);
    }
    drawImages(skeleton) {
        let ctx = this.ctx;
        let color = this.tempColor;
        let skeletonColor = skeleton.color;
        let drawOrder = skeleton.drawOrder;
        if (this.debugRendering)
            ctx.strokeStyle = "green";
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            let bone = slot.bone;
            if (!bone.active)
                continue;
            let attachment = slot.getAttachment();
            if (!(attachment instanceof RegionAttachment))
                continue;
            attachment.computeWorldVertices(slot, worldVertices, 0, 2);
            let region = attachment.region;
            let image = region.texture.getImage();
            let slotColor = slot.color;
            let regionColor = attachment.color;
            color.set(skeletonColor.r * slotColor.r * regionColor.r, skeletonColor.g * slotColor.g * regionColor.g, skeletonColor.b * slotColor.b * regionColor.b, skeletonColor.a * slotColor.a * regionColor.a);
            ctx.save();
            ctx.transform(bone.a, bone.c, bone.b, bone.d, bone.worldX, bone.worldY);
            ctx.translate(attachment.offset[0], attachment.offset[1]);
            ctx.rotate(attachment.rotation * Math.PI / 180);
            let atlasScale = attachment.width / region.originalWidth;
            ctx.scale(atlasScale * attachment.scaleX, atlasScale * attachment.scaleY);
            let w = region.width, h = region.height;
            ctx.translate(w / 2, h / 2);
            if (attachment.region.degrees == 90) {
                let t = w;
                w = h;
                h = t;
                ctx.rotate(-Math.PI / 2);
            }
            ctx.scale(1, -1);
            ctx.translate(-w / 2, -h / 2);
            ctx.globalAlpha = color.a;
            ctx.drawImage(image, image.width * region.u, image.height * region.v, w, h, 0, 0, w, h);
            if (this.debugRendering)
                ctx.strokeRect(0, 0, w, h);
            ctx.restore();
        }
    }
    drawTriangles(skeleton) {
        let ctx = this.ctx;
        let color = this.tempColor;
        let skeletonColor = skeleton.color;
        let drawOrder = skeleton.drawOrder;
        let blendMode = null;
        let vertices = this.vertices;
        let triangles = null;
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            let attachment = slot.getAttachment();
            let texture;
            if (attachment instanceof RegionAttachment) {
                let regionAttachment = attachment;
                vertices = this.computeRegionVertices(slot, regionAttachment, false);
                triangles = SkeletonRenderer.QUAD_TRIANGLES;
                texture = regionAttachment.region.texture.getImage();
            }
            else if (attachment instanceof MeshAttachment) {
                let mesh = attachment;
                vertices = this.computeMeshVertices(slot, mesh, false);
                triangles = mesh.triangles;
                texture = mesh.region.texture.getImage();
            }
            else
                continue;
            if (texture) {
                if (slot.data.blendMode != blendMode)
                    blendMode = slot.data.blendMode;
                let slotColor = slot.color;
                let attachmentColor = attachment.color;
                color.set(skeletonColor.r * slotColor.r * attachmentColor.r, skeletonColor.g * slotColor.g * attachmentColor.g, skeletonColor.b * slotColor.b * attachmentColor.b, skeletonColor.a * slotColor.a * attachmentColor.a);
                ctx.globalAlpha = color.a;
                for (var j = 0; j < triangles.length; j += 3) {
                    let t1 = triangles[j] * 8, t2 = triangles[j + 1] * 8, t3 = triangles[j + 2] * 8;
                    let x0 = vertices[t1], y0 = vertices[t1 + 1], u0 = vertices[t1 + 6], v0 = vertices[t1 + 7];
                    let x1 = vertices[t2], y1 = vertices[t2 + 1], u1 = vertices[t2 + 6], v1 = vertices[t2 + 7];
                    let x2 = vertices[t3], y2 = vertices[t3 + 1], u2 = vertices[t3 + 6], v2 = vertices[t3 + 7];
                    this.drawTriangle(texture, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2);
                    if (this.debugRendering) {
                        ctx.strokeStyle = "green";
                        ctx.beginPath();
                        ctx.moveTo(x0, y0);
                        ctx.lineTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.lineTo(x0, y0);
                        ctx.stroke();
                    }
                }
            }
        }
        this.ctx.globalAlpha = 1;
    }
    // Adapted from http://extremelysatisfactorytotalitarianism.com/blog/?p=2120
    // Apache 2 licensed
    drawTriangle(img, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2) {
        let ctx = this.ctx;
        const width = img.width - 1;
        const height = img.height - 1;
        u0 *= width;
        v0 *= height;
        u1 *= width;
        v1 *= height;
        u2 *= width;
        v2 *= height;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        x1 -= x0;
        y1 -= y0;
        x2 -= x0;
        y2 -= y0;
        u1 -= u0;
        v1 -= v0;
        u2 -= u0;
        v2 -= v0;
        let det = u1 * v2 - u2 * v1;
        if (det == 0)
            return;
        det = 1 / det;
        // linear transformation
        const a = (v2 * x1 - v1 * x2) * det;
        const b = (v2 * y1 - v1 * y2) * det;
        const c = (u1 * x2 - u2 * x1) * det;
        const d = (u1 * y2 - u2 * y1) * det;
        // translation
        const e = x0 - a * u0 - c * v0;
        const f = y0 - b * u0 - d * v0;
        ctx.save();
        ctx.transform(a, b, c, d, e, f);
        ctx.clip();
        ctx.drawImage(img, 0, 0);
        ctx.restore();
    }
    computeRegionVertices(slot, region, pma) {
        let skeletonColor = slot.bone.skeleton.color;
        let slotColor = slot.color;
        let regionColor = region.color;
        let alpha = skeletonColor.a * slotColor.a * regionColor.a;
        let multiplier = pma ? alpha : 1;
        let color = this.tempColor;
        color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
        region.computeWorldVertices(slot, this.vertices, 0, SkeletonRenderer.VERTEX_SIZE);
        let vertices = this.vertices;
        let uvs = region.uvs;
        vertices[RegionAttachment.C1R] = color.r;
        vertices[RegionAttachment.C1G] = color.g;
        vertices[RegionAttachment.C1B] = color.b;
        vertices[RegionAttachment.C1A] = color.a;
        vertices[RegionAttachment.U1] = uvs[0];
        vertices[RegionAttachment.V1] = uvs[1];
        vertices[RegionAttachment.C2R] = color.r;
        vertices[RegionAttachment.C2G] = color.g;
        vertices[RegionAttachment.C2B] = color.b;
        vertices[RegionAttachment.C2A] = color.a;
        vertices[RegionAttachment.U2] = uvs[2];
        vertices[RegionAttachment.V2] = uvs[3];
        vertices[RegionAttachment.C3R] = color.r;
        vertices[RegionAttachment.C3G] = color.g;
        vertices[RegionAttachment.C3B] = color.b;
        vertices[RegionAttachment.C3A] = color.a;
        vertices[RegionAttachment.U3] = uvs[4];
        vertices[RegionAttachment.V3] = uvs[5];
        vertices[RegionAttachment.C4R] = color.r;
        vertices[RegionAttachment.C4G] = color.g;
        vertices[RegionAttachment.C4B] = color.b;
        vertices[RegionAttachment.C4A] = color.a;
        vertices[RegionAttachment.U4] = uvs[6];
        vertices[RegionAttachment.V4] = uvs[7];
        return vertices;
    }
    computeMeshVertices(slot, mesh, pma) {
        let skeletonColor = slot.bone.skeleton.color;
        let slotColor = slot.color;
        let regionColor = mesh.color;
        let alpha = skeletonColor.a * slotColor.a * regionColor.a;
        let multiplier = pma ? alpha : 1;
        let color = this.tempColor;
        color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
        let vertexCount = mesh.worldVerticesLength / 2;
        let vertices = this.vertices;
        if (vertices.length < mesh.worldVerticesLength)
            this.vertices = vertices = Utils.newFloatArray(mesh.worldVerticesLength);
        mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, SkeletonRenderer.VERTEX_SIZE);
        let uvs = mesh.uvs;
        for (let i = 0, u = 0, v = 2; i < vertexCount; i++) {
            vertices[v++] = color.r;
            vertices[v++] = color.g;
            vertices[v++] = color.b;
            vertices[v++] = color.a;
            vertices[v++] = uvs[u++];
            vertices[v++] = uvs[u++];
            v += 2;
        }
        return vertices;
    }
}

let Spine = class Spine extends $t$1 {
    get __tag() {
        return 'Spine';
    }
    constructor(props) {
        super(props);
        this.initSpine = (canvas) => __awaiter(this, void 0, void 0, function* () {
            if (this.skeleton)
                return;
            const context = canvas.getContext('2d');
            this.skeletonRenderer = new SkeletonRenderer(context);
            this.skeletonRenderer.triangleRendering = true;
            this.skeleton = new Skeleton(this.skeletonData);
            this.skeleton.setToSetupPose();
            this.skeleton.updateWorldTransform(Physics.update);
            var animationStateData = new AnimationStateData(this.skeleton.data);
            animationStateData.defaultMix = 0.2;
            this.animationState = new AnimationState(animationStateData);
            const hasIdle = this.skeletonData.animations.find(item => item.name === 'idle');
            this.animationState.setAnimation(0, hasIdle ? 'idle' : this.skeletonData.animations[0].name, true);
            this.lastFrameTime = Date.now() / 1000;
            this.skeleton.x = this.skeletonData.x + this.skeletonData.width;
            this.skeleton.y = this.skeletonData.y + this.skeletonData.height;
            this.skeleton.scaleX = 1;
            this.skeleton.scaleY = -1;
        });
        this.__updateBoxBounds = () => {
            const box = this.__layout.boxBounds;
            if (this.skeleton) {
                const Rect = this.skeleton.getBoundsRect();
                box.x = Rect.x;
                box.y = Rect.y;
                box.width = Rect.width;
                box.height = Rect.height;
                this.forceUpdate('width');
            }
            else {
                box.x = 0;
                box.y = 0;
                box.width = this.skeletonData.width;
                box.height = this.skeletonData.height;
            }
        };
        this.__draw = (canvas) => {
            this.initSpine(canvas.view);
            this.render();
        };
        this.render = () => {
            var now = Date.now() / 1000;
            var delta = now - this.lastFrameTime;
            this.lastFrameTime = now;
            this.animationState.update(delta);
            this.animationState.apply(this.skeleton);
            this.skeleton.updateWorldTransform(Physics.update);
            this.skeletonRenderer.draw(this.skeleton);
            this.__updateBoxBounds();
        };
        this.skeletonData = props.skeletonData;
    }
};
Spine = __decorate([
    nn()
], Spine);
const loadAsset = (_a) => __awaiter(void 0, [_a], void 0, function* ({ baseUrl, skelName, atlasName, }) {
    const assetManager = new AssetManager(baseUrl);
    assetManager.loadBinary(skelName);
    assetManager.loadTextureAtlas(atlasName);
    yield assetManager.loadAll();
    let atlas = assetManager.require(atlasName);
    let atlasLoader = new AtlasAttachmentLoader(atlas);
    let skeletonBinary = new SkeletonBinary(atlasLoader);
    let skeletonData = skeletonBinary.readSkeletonData(assetManager.require(skelName));
    return skeletonData;
});

(() => __awaiter(void 0, void 0, void 0, function* () {
    renderHeader();
    const skeletonData = yield loadAsset({
        baseUrl: `models/spineboy/`,
        skelName: 'spineboy.skel',
        atlasName: 'spineboy.atlas',
    });
    console.log('Leafer', te$1);
    const leafer = new te$1({ view: window });
    const spine = new Spine({
        x: 200,
        y: 200,
        scale: 0.3,
        skeletonData: skeletonData,
    });
    const rect = new ee$1({
        x: 200,
        y: 200,
        width: 400,
        height: 400,
        fill: '#32cd79',
        draggable: true,
    });
    leafer.add(rect);
    leafer.add(spine);
    const div = document.createElement('div');
    div.setAttribute('style', 'position:fixed;top:60px;left:0;');
    skeletonData.animations.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = item.name;
        btn.onclick = () => {
            spine.animationState.setAnimation(0, item.name, true);
        };
        div.appendChild(btn);
    });
    document.body.appendChild(div);
}))();
function renderHeader() {
    const fragment = document.createDocumentFragment();
    const left = document.createElement("div");
    left.setAttribute("style", "font-size:24px;font-weight:bold;flex:1");
    left.textContent = "leafer-x-spine(骨骼动画)";
    const right = document.createElement("div");
    right.setAttribute("style", "display:flex;align-items:center;");
    const npmLink = document.createElement("a");
    npmLink.href = "https://www.npmjs.com/package/leafer-x-spine";
    npmLink.setAttribute("target", "_blank");
    npmLink.setAttribute("style", "padding-right:12px;");
    npmLink.innerHTML = `
  <img src="https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png" style="width:32px;height:32px;" />
  `;
    const githubLink = document.createElement("a");
    githubLink.setAttribute("target", "_blank");
    githubLink.href = "https://github.com/sulgweb/leafer-x-spine";
    githubLink.innerHTML = `<svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>`;
    right.appendChild(npmLink);
    right.appendChild(githubLink);
    const div = document.createElement("div");
    div.setAttribute("style", "z-index:1000;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ccc;position: fixed;top:0;left:0;width:100%;height:60px;background:#fff;padding:0 12px;box-sizing:border-box;");
    div.appendChild(left);
    div.appendChild(right);
    fragment.appendChild(div);
    document.body.appendChild(fragment);
}
