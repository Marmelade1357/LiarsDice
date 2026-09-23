var Xf=0,xu=1,qf=2;var Os=1,Yf=2,Nr=3,ds=0,hn=1,xt=2,$t=0,fs=1,bi=2,_u=3,vu=4,tc=5;var qn=100,Zf=101,$f=102,Jf=103,Kf=104,Bs=200,jf=201,Qf=202,ep=203,yu=204,Mu=205,Zo=206,tp=207,$o=208,np=209,ip=210,sp=211,rp=212,op=213,ap=214,vl=0,yl=1,Ml=2,pr=3,Sl=4,bl=5,El=6,Tl=7,Su=0,lp=1,cp=2,ai=0,Jo=1,Ko=2,jo=3,ps=4,Qo=5,ea=6,ta=7;var bu=300,ms=301,Hs=302,nc=303,ic=304,na=306,en=1e3,mi=1001,wl=1002,qt=1003,hp=1004;var ia=1005;var cn=1006,sc=1007;var gs=1008;var pn=1009,Eu=1010,Tu=1011,Ur=1012,rc=1013,li=1014,Yn=1015,Vt=1016,oc=1017,ac=1018,xs=1020,wu=35902,Au=35899,Ru=1021,Cu=1022,Cn=1023,xi=1026,Ei=1027,lc=1028,cc=1029,_s=1030,hc=1031;var uc=1033,sa=33776,ra=33777,oa=33778,aa=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,xc=37492,_c=37496,vc=37488,yc=37489,la=37490,Mc=37491,Sc=37808,bc=37809,Ec=37810,Tc=37811,wc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Dc=37818,Lc=37819,Nc=37820,Uc=37821,Fc=36492,Oc=36494,Bc=36495,Hc=36283,zc=36284,ca=36285,Gc=36286;var _o=2300,Al=2301,xl=2302,su=2303,ru=2400,ou=2401,au=2402;var up=3200;var ha=0,dp=1,Yi="",Gt="srgb",vo="srgb-linear",yo="linear",_t="srgb";var _l=7680;var fp=519,pp=512,mp=513,gp=514,kc=515,xp=516,_p=517,Vc=518,vp=519,Pu=35044;var Iu="300 es",ii=2e3,mr=2001;function um(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){let i=Mo("canvas");return i.style.display="block",i}var rf={},gr=null;function So(...i){let e="THREE."+i.shift();gr?gr("log",e,...i):console.log(e,...i)}function Mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Mp(i);let e="THREE."+i.shift();if(gr)gr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=Mp(i);let e="THREE."+i.shift();if(gr)gr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){let e=i.join(" ");e in rf||(rf[e]=!0,Je(...i))}function Sp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var bp={[vl]:yl,[Ml]:El,[Sl]:Tl,[pr]:bl,[yl]:vl,[El]:Ml,[Tl]:Sl,[bl]:pr},_i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],of=1234567,po=Math.PI/180,xr=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function fm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function pm(i,e,t){return i!==e?(t-i)/(e-i):0}function mo(i,e,t){return(1-t)*i+t*e}function mm(i,e,t,n){return mo(i,e,1-Math.exp(-t*n))}function gm(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function xm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _m(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function vm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ym(i,e){return i+Math.random()*(e-i)}function Mm(i){return i*(.5-Math.random())}function Sm(i){i!==void 0&&(of=i);let e=of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bm(i){return i*po}function Em(i){return i*xr}function Tm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pn={DEG2RAD:po,RAD2DEG:xr,generateUUID:gi,clamp:ut,euclideanModulo:Du,mapLinear:fm,inverseLerp:pm,lerp:mo,damp:mm,pingpong:gm,smoothstep:xm,smootherstep:_m,randInt:vm,randFloat:ym,randFloatSpread:Mm,seededRandom:Sm,degToRad:bm,radToDeg:Em,isPowerOfTwo:Tm,ceilPowerOfTwo:wm,floorPowerOfTwo:Am,setQuaternionFromProperEuler:Rm,normalize:Et,denormalize:ni},ne=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(af.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(af.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dh=new C,af=new an,et=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],E=s[4],x=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*y+a*M+l*S,r[3]=o*m+a*E+l*b,r[6]=o*p+a*x+l*A,r[1]=c*y+h*M+d*S,r[4]=c*m+h*E+d*b,r[7]=c*p+h*x+d*A,r[2]=u*y+f*M+g*S,r[5]=u*m+f*E+g*b,r[8]=u*p+f*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new et,lf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){let i={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vo]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:lf,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}var pt=Cm();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=Mo("canvas")),$s.width=e.width,$s.height=e.height;let s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ki(t[n]/255)*255):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pm=0,_r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Im=0,Uh=new C,vn=class i extends _i{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=cn,o=gs,a=Cn,l=pn,c=i.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=gi(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Uh).x}get height(){return this.source.getSize(Uh).y}get depth(){return this.source.getSize(Uh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case en:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case en:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=bu;vn.DEFAULT_ANISOTROPY=1;var Ft=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,x=(f+1)/2,S=(p+1)/2,b=(h+u)/4,A=(d+y)/4,_=(g+m)/4;return E>x&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=A/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cl=class extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new vn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends Cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var nt=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,y,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-a*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=y+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=y-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Lm)}lookAt(e,t,n){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),ts.crossVectors(n,Un),ts.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),ts.crossVectors(n,Un)),ts.normalize(),ka.crossVectors(Un,ts),s[0]=ts.x,s[4]=ka.x,s[8]=Un.x,s[1]=ts.y,s[5]=ka.y,s[9]=Un.y,s[2]=ts.z,s[6]=ka.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],E=n[7],x=n[11],S=n[15],b=s[0],A=s[4],_=s[8],w=s[12],I=s[1],D=s[5],L=s[9],k=s[13],N=s[2],z=s[6],q=s[10],F=s[14],X=s[3],O=s[7],V=s[11],j=s[15];return r[0]=o*b+a*I+l*N+c*X,r[4]=o*A+a*D+l*z+c*O,r[8]=o*_+a*L+l*q+c*V,r[12]=o*w+a*k+l*F+c*j,r[1]=h*b+d*I+u*N+f*X,r[5]=h*A+d*D+u*z+f*O,r[9]=h*_+d*L+u*q+f*V,r[13]=h*w+d*k+u*F+f*j,r[2]=g*b+y*I+m*N+p*X,r[6]=g*A+y*D+m*z+p*O,r[10]=g*_+y*L+m*q+p*V,r[14]=g*w+y*k+m*F+p*j,r[3]=M*b+E*I+x*N+S*X,r[7]=M*A+E*D+x*z+S*O,r[11]=M*_+E*L+x*q+S*V,r[15]=M*w+E*k+x*F+S*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],M=l*f-c*u,E=a*f-c*d,x=a*u-l*d,S=o*f-c*h,b=o*u-l*h,A=o*d-a*h;return t*(y*M-m*E+p*x)-n*(g*M-m*S+p*b)+s*(g*E-y*S+p*A)-r*(g*x-y*b+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=t*a-n*o,E=t*l-s*o,x=t*c-r*o,S=n*l-s*a,b=n*c-r*a,A=s*c-r*l,_=h*y-d*g,w=h*m-u*g,I=h*p-f*g,D=d*m-u*y,L=d*p-f*y,k=u*p-f*m,N=M*k-E*L+x*D+S*I-b*w+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(a*k-l*L+c*D)*z,e[1]=(s*L-n*k-r*D)*z,e[2]=(y*A-m*b+p*S)*z,e[3]=(u*b-d*A-f*S)*z,e[4]=(l*I-o*k-c*w)*z,e[5]=(t*k-s*I+r*w)*z,e[6]=(m*x-g*A-p*E)*z,e[7]=(h*A-u*x+f*E)*z,e[8]=(o*L-a*I+c*_)*z,e[9]=(n*I-t*L-r*_)*z,e[10]=(g*b-y*x+p*M)*z,e[11]=(d*x-h*b-f*M)*z,e[12]=(a*w-o*D-l*_)*z,e[13]=(t*D-n*w+s*_)*z,e[14]=(y*E-g*S-m*M)*z,e[15]=(h*S-d*E+u*M)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,M=l*c,E=l*h,x=l*d,S=n.x,b=n.y,A=n.z;return s[0]=(1-(y+p))*S,s[1]=(f+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+E)*A,s[9]=(m-M)*A,s[10]=(1-(u+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Js.set(s[0],s[1],s[2]).length(),a=Js.set(s[4],s[5],s[6]).length(),l=Js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,h=1/a,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===mr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===ii)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===mr)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Js=new C,jn=new nt,Dm=new C(0,0,0),Lm=new C(1,1,1),ts=new C,ka=new C,Un=new C,hf=new nt,uf=new an,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Nm=0,df=new C,Ks=new an,Fi=new nt,Va=new C,no=new C,Um=new C,Fm=new an,ff=new C(1,0,0),pf=new C(0,1,0),mf=new C(0,0,1),gf={type:"added"},Om={type:"removed"},js={type:"childadded",child:null},Fh={type:"childremoved",child:null},tn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Vn,n=new an,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new et}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(ff,e)}rotateY(e){return this.rotateOnAxis(pf,e)}rotateZ(e){return this.rotateOnAxis(mf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ff,e)}translateY(e){return this.translateOnAxis(pf,e)}translateZ(e){return this.translateOnAxis(mf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(no,Va,this.up):Fi.lookAt(Va,no,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gf),js.child=e,this.dispatchEvent(js),js.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),Fh.child=e,this.dispatchEvent(Fh),Fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gf),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new C(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Oh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=Du(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Oh(o,r,e+1/3),this.g=Oh(o,r,e),this.b=Oh(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return pt.workingToColorSpace(fn.copy(this),e),Math.round(ut(fn.r*255,0,255))*65536+Math.round(ut(fn.g*255,0,255))*256+Math.round(ut(fn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Gt){pt.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Wa);let n=mo(ns.h,Wa.h,t),s=mo(ns.s,Wa.s,t),r=mo(ns.l,Wa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new xe;xe.NAMES=Ep;var Eo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Mr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new C,Oi=new C,Bh=new C,Bi=new C,Qs=new C,er=new C,xf=new C,Hh=new C,zh=new C,Gh=new C,kh=new Ft,Vh=new Ft,Wh=new Ft,Gi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qn.subVectors(s,t),Oi.subVectors(n,t),Bh.subVectors(e,t);let o=Qn.dot(Qn),a=Qn.dot(Oi),l=Qn.dot(Bh),c=Oi.dot(Oi),h=Oi.dot(Bh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(o,Bi.y),l.addScaledVector(a,Bi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return kh.setScalar(0),Vh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Wh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kh,r.x),o.addScaledVector(Vh,r.y),o.addScaledVector(Wh,r.z),o}static isFrontFacing(e,t,n,s){return Qn.subVectors(n,t),Oi.subVectors(e,t),Qn.cross(Oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),Qn.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,n),er.subVectors(r,n),Hh.subVectors(e,n);let l=Qs.dot(Hh),c=er.dot(Hh);if(l<=0&&c<=0)return t.copy(n);zh.subVectors(e,s);let h=Qs.dot(zh),d=er.dot(zh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qs,o);Gh.subVectors(e,r);let f=Qs.dot(Gh),g=er.dot(Gh);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(er,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return xf.subVectors(r,s),a=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(xf,a);let p=1/(m+y+u);return o=y*p,a=u*p,t.copy(n).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),qa.subVectors(this.max,io),tr.subVectors(e.a,io),nr.subVectors(e.b,io),ir.subVectors(e.c,io),is.subVectors(nr,tr),ss.subVectors(ir,nr),ws.subVectors(tr,ir);let t=[0,-is.z,is.y,0,-ss.z,ss.y,0,-ws.z,ws.y,is.z,0,-is.x,ss.z,0,-ss.x,ws.z,0,-ws.x,-is.y,is.x,0,-ss.y,ss.x,0,-ws.y,ws.x,0];return!Xh(t,tr,nr,ir,qa)||(t=[1,0,0,0,1,0,0,0,1],!Xh(t,tr,nr,ir,qa))?!1:(Ya.crossVectors(is,ss),t=[Ya.x,Ya.y,Ya.z],Xh(t,tr,nr,ir,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hi=[new C,new C,new C,new C,new C,new C,new C,new C],ei=new C,Xa=new vi,tr=new C,nr=new C,ir=new C,is=new C,ss=new C,ws=new C,io=new C,qa=new C,Ya=new C,As=new C;function Xh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){As.fromArray(i,r);let a=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),h=n.dot(As);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qt=new C,Za=new ne,Hm=0,Ut=class extends _i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var To=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var wo=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Oe=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},zm=new vi,so=new C,qh=new C,yi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);let t=so.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(qh)),this.expandByPoint(so.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gm=0,kn=new nt,Yh=new tn,sr=new C,Fn=new vi,ro=new vi,rn=new C,dt=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?wo:To)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Yh.lookAt(e),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Oe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Fn.min,ro.min),Fn.expandByPoint(rn),rn.addVectors(Fn.max,ro.max),Fn.expandByPoint(rn)):(Fn.expandByPoint(ro.min),Fn.expandByPoint(ro.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),rn.add(sr)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new C,l[_]=new C;let c=new C,h=new C,d=new C,u=new ne,f=new ne,g=new ne,y=new C,m=new C;function p(_,w,I){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[_].add(y),a[w].add(y),a[I].add(y),l[_].add(m),l[w].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,w=M.length;_<w;++_){let I=M[_],D=I.start,L=I.count;for(let k=D,N=D+L;k<N;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new C,x=new C,S=new C,b=new C;function A(_){S.fromBufferAttribute(s,_),b.copy(S);let w=a[_];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(b,w);let D=x.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,w=M.length;_<w;++_){let I=M[_],D=I.start,L=I.count;for(let k=D,N=D+L;k<N;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ut(u,h,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ao=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pu,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},_n=new C,Sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){So("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){So("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new C,km=new C,Vm=new et,ti=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zh.subVectors(n,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vm.getNormalMatrix(e),s=this.coplanarPoint(Zh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wm=0,Wn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=fs,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},si=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rr,oo=new C,or=new C,ar=new C,lr=new ne,ao=new ne,Tp=new nt,$a=new C,lo=new C,Ja=new C,_f=new ne,$h=new ne,vf=new ne,Mi=class extends tn{constructor(e=new si){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new Sr(n,3,0,!1)),rr.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ka($a.set(-.5,-.5,0),ar,o,or,s,r),Ka(lo.set(.5,-.5,0),ar,o,or,s,r),Ka(Ja.set(.5,.5,0),ar,o,or,s,r),_f.set(0,0),$h.set(1,0),vf.set(1,1);let a=e.ray.intersectTriangle($a,lo,Ja,!1,oo);if(a===null&&(Ka(lo.set(-.5,.5,0),ar,o,or,s,r),$h.set(0,1),a=e.ray.intersectTriangle($a,Ja,lo,!1,oo),a===null))return;let l=e.ray.origin.distanceTo(oo);l<e.near||l>e.far||t.push({distance:l,point:oo.clone(),uv:Gi.getInterpolation(oo,$a,lo,Ja,_f,$h,vf,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(i,e,t,n,s,r){lr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ao.x=r*lr.x-s*lr.y,ao.y=s*lr.x+r*lr.y):ao.copy(lr),i.copy(e),i.x+=ao.x,i.y+=ao.y,i.applyMatrix4(Tp)}var zi=new C,Jh=new C,ja=new C,Qa=new C,Ds=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jh.copy(e).add(t).multiplyScalar(.5),ja.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Jh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ja),a=Qa.dot(this.direction),l=-Qa.dot(ja),c=Qa.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jh).addScaledVector(ja,u),f}intersectSphere(e,t){if(e.radius<0)return null;zi.subVectors(e.center,this.origin);let n=zi.dot(this.direction),s=zi.dot(zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,y=t.y-o.y,m=t.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,_,w,I,D,L,k,N,z,q,F,X;if(x>=S&&x>=b?(w=l,L=d,z=g,X=p,l>=0?(A=c,_=h,I=u,D=f,k=y,N=m,q=M,F=E):(A=h,_=c,I=f,D=u,k=m,N=y,q=E,F=M)):S>=b?(w=c,L=u,z=y,X=M,c>=0?(A=h,_=l,I=f,D=d,k=m,N=g,q=E,F=p):(A=l,_=h,I=d,D=f,k=g,N=m,q=p,F=E)):(w=h,L=f,z=m,X=E,h>=0?(A=l,_=c,I=d,D=u,k=g,N=y,q=p,F=M):(A=c,_=l,I=u,D=d,k=y,N=g,q=M,F=p)),w===0)return null;let O=A/w,V=_/w,j=1/w,be=I-O*L,Te=D-V*L,st=k-O*z,Qe=N-V*z,Ze=q-O*X,J=F-V*X,te=Ze*Qe-J*st,me=be*J-Te*Ze,Ne=st*Te-Qe*be;if(s){if(te<0||me<0||Ne<0)return null}else if((te<0||me<0||Ne<0)&&(te>0||me>0||Ne>0))return null;let fe=te+me+Ne;if(fe===0)return null;let ke=j*(te*L+me*z+Ne*X);return(fe>0?ke<0:ke>0)?null:this.at(ke/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yf=new nt,Rs=new Ds,el=new yi,Mf=new C,tl=new C,nl=new C,il=new C,Kh=new C,sl=new C,Sf=new C,rl=new C,rt=class extends tn{constructor(e=new dt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Kh.fromBufferAttribute(d,e),o?sl.addScaledVector(Kh,h):sl.addScaledVector(Kh.sub(t),h))}t.add(sl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(r),Rs.copy(e.ray).recast(e.near),!(el.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(el,Mf)===null||Rs.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(yf.copy(r).invert(),Rs.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let b=a.getX(x),A=a.getX(x+1),_=a.getX(x+2);s=ol(this,p,e,n,c,h,d,b,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=ol(this,o,e,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let b=x,A=x+1,_=x+2;s=ol(this,p,e,n,c,h,d,b,A,_),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,E=m+1,x=m+2;s=ol(this,o,e,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Xm(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;rl.copy(a),rl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rl);return c<t.near||c>t.far?null:{distance:c,point:rl.clone(),object:i}}function ol(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,tl),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let h=Xm(i,e,t,n,tl,nl,il,Sf);if(h){let d=new C;Gi.getBarycoord(Sf,tl,nl,il,d),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,l,c,d,new ne)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,l,c,d,new ne)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Gi.getNormal(tl,nl,il,u.normal),h.face=u,h.barycoord=d}return h}var Vi=class extends vn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new nt,bf=new nt,al=[],Ef=new vi,qm=new nt,co=new rt,ho=new yi,Ls=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new br(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Ef.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ho.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),bf.multiplyMatrices(n,cr),co.matrixWorld=bf,co.raycast(e,al);for(let o=0,a=al.length;o<a;o++){let l=al[o];l.instanceId=r,l.object=this,t.push(l)}al.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new br(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vi(new Float32Array(s*this.count),s,this.count,lc,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new yi,Ym=new ne(.5,.5),ll=new C,Er=class{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-M).normalize(),s[1].setComponents(c+o,f+h,p+g,S+M).normalize(),s[2].setComponents(c+a,f+d,p+y,S+E).normalize(),s[3].setComponents(c-a,f-d,p-y,S-E).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,S-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-x).normalize(),t===ii)s[5].setComponents(c+l,f+u,p+m,S+x).normalize();else if(t===mr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);let t=Ym.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Il=new C,Dl=new C,Tf=new nt,uo=new Ds,cl=new yi,jh=new C,wf=new C,Ll=class extends tn{constructor(e=new dt,t=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Il.fromBufferAttribute(t,s-1),Dl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Il.distanceTo(Dl);e.setAttribute("lineDistance",new Oe(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Tf.copy(s).invert(),uo.copy(e.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),E=hl(this,e,uo,l,p,M,y);E&&t.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=hl(this,e,uo,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=hl(this,e,uo,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=hl(this,e,uo,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Il.fromBufferAttribute(a,s),Dl.fromBufferAttribute(a,r),t.distanceSqToSegment(Il,Dl,jh,wf)>n)return;jh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(jh);if(!(c<e.near||c>e.far))return{distance:c,point:wf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Af=new C,Rf=new C,Ro=class extends Ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Af.fromBufferAttribute(t,s),Rf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Af.distanceTo(Rf);e.setAttribute("lineDistance",new Oe(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Nl=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cf=new nt,lu=new Ds,ul=new yi,dl=new C,Co=class extends tn{constructor(e=new dt,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;Cf.copy(s).invert(),lu.copy(e.ray).applyMatrix4(Cf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);dl.fromBufferAttribute(d,m),Pf(dl,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)dl.fromBufferAttribute(d,g),Pf(dl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pf(i,e,t,n,s,r,o){let a=lu.distanceSqToPoint(i);if(a<t){let l=new C;lu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Po=class extends vn{constructor(e=[],t=ms,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xn=class extends vn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends vn{constructor(e,t,n=li,s,r,o,a=qt,l=qt,c,h=xi,d=1){if(h!==xi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ul=class extends Si{constructor(e,t=li,n=ms,s,r,o=qt,a=qt,l,c=xi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Io=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2));function g(y,m,p,M,E,x,S,b,A,_,w){let I=x/A,D=S/_,L=x/2,k=S/2,N=b/2,z=A+1,q=_+1,F=0,X=0,O=new C;for(let V=0;V<q;V++){let j=V*D-k;for(let be=0;be<z;be++){let Te=be*I-L;O[y]=Te*M,O[m]=j*E,O[p]=N,c.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[p]=b>0?1:-1,h.push(O.x,O.y,O.z),d.push(be/A),d.push(1-V/_),F+=1}}for(let V=0;V<_;V++)for(let j=0;j<A;j++){let be=u+j+z*V,Te=u+j+z*(V+1),st=u+(j+1)+z*(V+1),Qe=u+(j+1)+z*V;l.push(be,Te,Qe),l.push(Te,st,Qe),X+=6}a.addGroup(f,X,w),f+=X,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var os=class i extends dt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("normal",new Oe(a,3)),this.setAttribute("uv",new Oe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends dt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;M(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(f,2));function M(){let x=new C,S=new C,b=0,A=(t-e)/n;for(let _=0;_<=r;_++){let w=[],I=_/r,D=I*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,N=k*l+a,z=Math.sin(N),q=Math.cos(N);S.x=D*z,S.y=-I*n+m,S.z=D*q,d.push(S.x,S.y,S.z),x.set(z,A,q).normalize(),u.push(x.x,x.y,x.z),f.push(k,1-I),w.push(g++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let I=y[w][_],D=y[w+1][_],L=y[w+1][_+1],k=y[w][_+1];(e>0||w!==0)&&(h.push(I,D,k),b+=3),(t>0||w!==r-1)&&(h.push(D,L,k),b+=3)}c.addGroup(p,b,0),p+=b}function E(x){let S=g,b=new ne,A=new C,_=0,w=x===!0?e:t,I=x===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let D=g;for(let L=0;L<=s;L++){let N=L/s*l+a,z=Math.cos(N),q=Math.sin(N);A.x=w*q,A.y=m*I,A.z=w*z,d.push(A.x,A.y,A.z),u.push(0,I,0),b.x=z*.5+.5,b.y=q*.5*I+.5,f.push(b.x,b.y),g++}for(let L=0;L<s;L++){let k=S+L,N=D+L;x===!0?h.push(N,N+1,k):h.push(N+1,N,k),_+=3}c.addGroup(p,_,x===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class i extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wr=class i extends dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Oe(r,3)),this.setAttribute("normal",new Oe(r.slice(),3)),this.setAttribute("uv",new Oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new C,x=new C,S=new C;for(let b=0;b<t.length;b+=3)f(t[b+0],E),f(t[b+1],x),f(t[b+2],S),l(E,x,S,M)}function l(M,E,x,S){let b=S+1,A=[];for(let _=0;_<=b;_++){A[_]=[];let w=M.clone().lerp(x,_/b),I=E.clone().lerp(x,_/b),D=b-_;for(let L=0;L<=D;L++)L===0&&_===b?A[_][L]=w:A[_][L]=w.clone().lerp(I,L/D)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){let I=Math.floor(w/2);w%2===0?(u(A[_][I+1]),u(A[_+1][I]),u(A[_][I])):(u(A[_][I+1]),u(A[_+1][I+1]),u(A[_+1][I]))}}function c(M){let E=new C;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(M),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let M=new C;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(x,1-S)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let E=o[M+0],x=o[M+2],S=o[M+4],b=Math.max(E,x,S),A=Math.min(E,x,S);b>.9&&A<.1&&(E<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let x=M*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function g(){let M=new C,E=new C,x=new C,S=new C,b=new ne,A=new ne,_=new ne;for(let w=0,I=0;w<r.length;w+=9,I+=6){M.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[I+0],o[I+1]),A.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),S.copy(M).add(E).add(x).divideScalar(3);let D=m(S);y(b,I+0,M,D),y(A,I+2,E,D),y(_,I+4,x,D)}}function y(M,E,x,S){S<0&&M.x===1&&(o[E]=M.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Do=class i extends wr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new nt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ut(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ut(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fl=class extends Ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var If=new C,Df=new C,Qh=new Lu,eu=new Lu,tu=new Lu,ln=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Df.subVectors(s[0],s[1]).add(s[0]),c=Df);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(If.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=If),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Qh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),eu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),tu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),eu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),tu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qh.calc(l),eu.calc(l),tu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Zm(i,e){let t=1-i;return t*t*e}function $m(i,e){return 2*(1-i)*i*e}function Jm(i,e){return i*i*e}function go(i,e,t,n){return Zm(i,e)+$m(i,t)+Jm(i,n)}function Km(i,e){let t=1-i;return t*t*t*e}function jm(i,e){let t=1-i;return 3*t*t*i*e}function Qm(i,e){return 3*(1-i)*i*i*e}function eg(i,e){return i*i*i*e}function xo(i,e,t,n,s){return Km(i,e)+jm(i,t)+Qm(i,n)+eg(i,s)}var Lo=class extends On{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,s.x,r.x,o.x,a.x),xo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends On{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xo(e,s.x,r.x,o.x,a.x),xo(e,s.y,r.y,o.y,a.y),xo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends On{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bl=class extends On{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends On{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(go(e,s.x,r.x,o.x),go(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends On{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(go(e,s.x,r.x,o.x),go(e,s.y,r.y,o.y),go(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Lf(a,l.x,c.x,h.x,d.x),Lf(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Hl=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:ln,CubicBezierCurve:Lo,CubicBezierCurve3:Ol,EllipseCurve:Ar,LineCurve:No,LineCurve3:Bl,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Ns,SplineCurve:Fo}),zl=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Hl[s.type]().fromJSON(s))}return this}},Oo=class extends zl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new No(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Uo(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Lo(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wi=class extends Oo{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Oo().fromJSON(s))}return this}};function tg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=wp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=og(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Bo(r,o,t,a,l,c,0),o}function wp(i,e,t,n,s){let r;if(s===xg(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nf(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nf(o/n|0,i[o],i[o+1],r);return r&&Rr(r,r.next)&&(zo(r),r=r.next),r}function Us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ug(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ig(i,n,s,r):ng(i)){e.push(l.i,i.i,c.i),zo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sg(Us(i),e),Bo(i,e,t,n,s,r,2)):o===2&&rg(i,e,t,n,s,r):Bo(Us(i),e,t,n,s,r,1);break}}}function ng(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&fo(s,a,r,l,o,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ig(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),y=Math.max(a,l,c),m=Math.max(h,d,u),p=cu(f,g,e,t,n),M=cu(y,m,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fo(a,h,l,d,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fo(a,h,l,d,c,u,x.x,x.y)&&Bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&fo(a,h,l,d,c,u,E.x,E.y)&&Bt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fo(a,h,l,d,c,u,x.x,x.y)&&Bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function sg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Rr(n,s)&&Rp(n,t,t.next,s)&&Ho(n,s)&&Ho(s,n)&&(e.push(n.i,t.i,s.i),zo(t),zo(t.next),t=i=s),t=t.next}while(t!==i);return Us(t)}function rg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pg(o,a)){let l=Cp(o,a);o=Us(o,o.next),l=Us(l,l.next),Bo(o,e,t,n,s,r,0),Bo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function og(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=wp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(fg(c))}s.sort(ag);for(let r=0;r<s.length;r++)t=lg(s[r],t);return t}function ag(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function lg(i,e){let t=cg(i,e);if(!t)return e;let n=Cp(t,i);return Us(n,n.next),Us(t,t.next)}function cg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Rr(i,t))return t;do{if(Rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ap(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ho(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&hg(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function hg(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function ug(i,e,t,n){let s=i;do s.z===0&&(s.z=cu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dg(s)}function dg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function cu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function fg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ap(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function fo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ap(i,e,t,n,s,r,o,a)}function pg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!mg(i,e)&&(Ho(i,e)&&Ho(e,i)&&gg(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Rr(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rr(i,e){return i.x===e.x&&i.y===e.y}function Rp(i,e,t,n){let s=pl(Bt(i,e,t)),r=pl(Bt(i,e,n)),o=pl(Bt(t,n,i)),a=pl(Bt(t,n,e));return!!(s!==r&&o!==a||s===0&&fl(i,t,e)||r===0&&fl(i,n,e)||o===0&&fl(t,i,n)||a===0&&fl(t,e,n))}function fl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function pl(i){return i>0?1:i<0?-1:0}function mg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ho(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function gg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cp(i,e){let t=hu(i.i,i.x,i.y),n=hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nf(i,e,t,n){let s=hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var uu=class{static triangulate(e,t,n=2){return tg(e,t,n)}},Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Uf(e),Ff(n,e);let o=e.length;t.forEach(Uf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Ff(n,t[l]);let a=uu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Uf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ff(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var as=class i extends dt{constructor(e=new Wi([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Oe(s,3)),this.setAttribute("uv",new Oe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:_g,E,x=!1,S,b,A,_;if(p){E=p.getSpacedPoints(h),x=!0,u=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,ie),b=new C,A=new C,_=new C}u||(m=0,f=0,g=0,y=0);let w=a.extractPoints(c),I=w.shape,D=w.holes;if(!Ps.isClockWise(I)){I=I.reverse();for(let ie=0,le=D.length;ie<le;ie++){let ue=D[ie];Ps.isClockWise(ue)&&(D[ie]=ue.reverse())}}function k(ie){let ue=10000000000000001e-36,de=ie[0];for(let Q=1;Q<=ie.length;Q++){let he=Q%ie.length,pe=ie[he],ve=pe.x-de.x,se=pe.y-de.y,P=ve*ve+se*se,Me=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(de.x),Math.abs(de.y)),Se=ue*Me*Me;if(P<=Se){ie.splice(he,1),Q--;continue}de=pe}}k(I),D.forEach(k);let N=D.length,z=I;for(let ie=0;ie<N;ie++){let le=D[ie];I=I.concat(le)}function q(ie,le,ue){return le||Ke("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(le,ue)}let F=I.length;function X(ie,le,ue){let de,Q,he,pe=ie.x-le.x,ve=ie.y-le.y,se=ue.x-ie.x,P=ue.y-ie.y,Me=pe*pe+ve*ve,Se=pe*P-ve*se;if(Math.abs(Se)>Number.EPSILON){let R=Math.sqrt(Me),v=Math.sqrt(se*se+P*P),U=le.x-ve/R,W=le.y+pe/R,G=ue.x-P/v,oe=ue.y+se/v,ae=((G-U)*P-(oe-W)*se)/(pe*P-ve*se);de=U+pe*ae-ie.x,Q=W+ve*ae-ie.y;let $=de*de+Q*Q;if($<=2)return new ne(de,Q);he=Math.sqrt($/2)}else{let R=!1;pe>Number.EPSILON?se>Number.EPSILON&&(R=!0):pe<-Number.EPSILON?se<-Number.EPSILON&&(R=!0):Math.sign(ve)===Math.sign(P)&&(R=!0),R?(de=-ve,Q=pe,he=Math.sqrt(Me)):(de=pe,Q=ve,he=Math.sqrt(Me/2))}return new ne(de/he,Q/he)}let O=[];for(let ie=0,le=z.length,ue=le-1,de=ie+1;ie<le;ie++,ue++,de++)ue===le&&(ue=0),de===le&&(de=0),O[ie]=X(z[ie],z[ue],z[de]);let V=[],j,be=O.concat();for(let ie=0,le=N;ie<le;ie++){let ue=D[ie];j=[];for(let de=0,Q=ue.length,he=Q-1,pe=de+1;de<Q;de++,he++,pe++)he===Q&&(he=0),pe===Q&&(pe=0),j[de]=X(ue[de],ue[he],ue[pe]);V.push(j),be=be.concat(j)}let Te;if(m===0)Te=Ps.triangulateShape(z,D);else{let ie=[],le=[];for(let ue=0;ue<m;ue++){let de=ue/m,Q=f*Math.cos(de*Math.PI/2),he=g*Math.sin(de*Math.PI/2)+y;for(let pe=0,ve=z.length;pe<ve;pe++){let se=q(z[pe],O[pe],he);me(se.x,se.y,-Q),de===0&&ie.push(se)}for(let pe=0,ve=N;pe<ve;pe++){let se=D[pe];j=V[pe];let P=[];for(let Me=0,Se=se.length;Me<Se;Me++){let R=q(se[Me],j[Me],he);me(R.x,R.y,-Q),de===0&&P.push(R)}de===0&&le.push(P)}}Te=Ps.triangulateShape(ie,le)}let st=Te.length,Qe=g+y;for(let ie=0;ie<F;ie++){let le=u?q(I[ie],be[ie],Qe):I[ie];x?(A.copy(S.normals[0]).multiplyScalar(le.x),b.copy(S.binormals[0]).multiplyScalar(le.y),_.copy(E[0]).add(A).add(b),me(_.x,_.y,_.z)):me(le.x,le.y,0)}for(let ie=1;ie<=h;ie++)for(let le=0;le<F;le++){let ue=u?q(I[le],be[le],Qe):I[le];x?(A.copy(S.normals[ie]).multiplyScalar(ue.x),b.copy(S.binormals[ie]).multiplyScalar(ue.y),_.copy(E[ie]).add(A).add(b),me(_.x,_.y,_.z)):me(ue.x,ue.y,d/h*ie)}for(let ie=m-1;ie>=0;ie--){let le=ie/m,ue=f*Math.cos(le*Math.PI/2),de=g*Math.sin(le*Math.PI/2)+y;for(let Q=0,he=z.length;Q<he;Q++){let pe=q(z[Q],O[Q],de);me(pe.x,pe.y,d+ue)}for(let Q=0,he=D.length;Q<he;Q++){let pe=D[Q];j=V[Q];for(let ve=0,se=pe.length;ve<se;ve++){let P=q(pe[ve],j[ve],de);x?me(P.x,P.y+E[h-1].y,E[h-1].x+ue):me(P.x,P.y,d+ue)}}}Ze(),J();function Ze(){let ie=s.length/3;if(u){let le=0,ue=F*le;for(let de=0;de<st;de++){let Q=Te[de];Ne(Q[2]+ue,Q[1]+ue,Q[0]+ue)}le=h+m*2,ue=F*le;for(let de=0;de<st;de++){let Q=Te[de];Ne(Q[0]+ue,Q[1]+ue,Q[2]+ue)}}else{for(let le=0;le<st;le++){let ue=Te[le];Ne(ue[2],ue[1],ue[0])}for(let le=0;le<st;le++){let ue=Te[le];Ne(ue[0]+F*h,ue[1]+F*h,ue[2]+F*h)}}n.addGroup(ie,s.length/3-ie,0)}function J(){let ie=s.length/3,le=0;te(z,le),le+=z.length;for(let ue=0,de=D.length;ue<de;ue++){let Q=D[ue];te(Q,le),le+=Q.length}n.addGroup(ie,s.length/3-ie,1)}function te(ie,le){let ue=ie.length;for(;--ue>=0;){let de=ue,Q=ue-1;Q<0&&(Q=ie.length-1);for(let he=0,pe=h+m*2;he<pe;he++){let ve=F*he,se=F*(he+1),P=le+de+ve,Me=le+Q+ve,Se=le+Q+se,R=le+de+se;fe(P,Me,Se,R)}}}function me(ie,le,ue){l.push(ie),l.push(le),l.push(ue)}function Ne(ie,le,ue){ke(ie),ke(le),ke(ue);let de=s.length/3,Q=M.generateTopUV(n,s,de-3,de-2,de-1);lt(Q[0]),lt(Q[1]),lt(Q[2])}function fe(ie,le,ue,de){ke(ie),ke(le),ke(de),ke(le),ke(ue),ke(de);let Q=s.length/3,he=M.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);lt(he[0]),lt(he[1]),lt(he[3]),lt(he[1]),lt(he[2]),lt(he[3])}function ke(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function lt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Hl[s.type]().fromJSON(s)),new i(n,e.options)}},_g={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-d),new ne(u,1-g),new ne(y,1-p)]:[new ne(a,1-l),new ne(h,1-d),new ne(f,1-g),new ne(m,1-p)]}};function vg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Cr=class i extends wr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Xi=class i extends dt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ut(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new C,u=new ne,f=new C,g=new C,y=new C,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=t;M++){let E=n+M*h*s,x=Math.sin(E),S=Math.cos(E);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*x,d.y=e[b].y,d.z=e[b].x*S,o.push(d.x,d.y,d.z),u.x=M/t,u.y=b/(e.length-1),a.push(u.x,u.y);let A=l[3*b+0]*x,_=l[3*b+1],w=l[3*b+0]*S;c.push(A,_,w)}}for(let M=0;M<t;M++)for(let E=0;E<e.length-1;E++){let x=E+M*e.length,S=x,b=x+e.length,A=x+e.length+1,_=x+1;r.push(S,b,_),r.push(A,_,b)}this.setIndex(r),this.setAttribute("position",new Oe(o,3)),this.setAttribute("uv",new Oe(a,2)),this.setAttribute("normal",new Oe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Go=class i extends wr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zt=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let E=0;E<c;E++){let x=E*d-r;g.push(x,-M,0),y.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let E=M+c*p,x=M+c*(p+1),S=M+1+c*(p+1),b=M+1+c*p;f.push(E,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Fs=class i extends dt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new C,g=new ne;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let M=p+m,E=M,x=M+n+1,S=M+n+2,b=M+1;a.push(E,x,b),a.push(x,S,b)}}this.setIndex(a),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ct=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],E=p/n,x=o+E*a,S=e*Math.cos(x),b=Math.sqrt(e*e-S*S),A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let w=_/t,I=s+w*r;d.x=-b*Math.cos(I),d.y=S,d.z=b*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+A,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let E=h[p][M+1],x=h[p][M],S=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(E,x,b),(p!==n-1||l<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var It=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ri=class i extends dt{constructor(e=new Ns(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ne,h=new C,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(f,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),M(),p()}function m(E){h=e.getPointAt(E/t,h);let x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){let A=b/s*Math.PI*2,_=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+_*S.x,l.y=w*x.y+_*S.y,l.z=w*x.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),A=(s+1)*E+x,_=(s+1)*(E-1)+x;g.push(S,b,_),g.push(b,A,_)}}function M(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)c.x=E/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Of(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Of(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Of(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function yg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var yn={clone:zs,merge:mn},Mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vt=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mg,this.fragmentShader=Sg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pr=class extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ko=class extends Wn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Gl=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ls=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ls{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+M*o[c+S]+E*o[l+S]+x*o[d+S];return r}},Wl=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Xl=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ql=class extends ls{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*u+g*2,M=d[p],E=d[p+1],x=e*u+g*2,S=h[x],b=h[x+1],A=Eg(n,t,M,S,s);r[g]=Pp(A,y,E,b,m)}return r}};function Pp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Eg(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Pp(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=bg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hr(t,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hr(e.times,Array),values:hr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),nu(e.settings)&&(n.settings={inTangents:hr(e.settings.inTangents,Array),outTangents:hr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ql(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case Al:t=this.InterpolantFactoryMethodLinear;break;case xl:t=this.InterpolantFactoryMethodSmooth;break;case su:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;nu(this.settings)&&(Bf(this.settings.inTangents,e),Bf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Al;var cs=class extends Bn{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=_o;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Yl.prototype.ValueTypeName="color";var Zl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Zl.prototype.ValueTypeName="number";var $l=class extends ls{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Bn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=_o;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new Kl,jl=class{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dr=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},iu=new nt,Hf=new C,zf=new C,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(iu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===mr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ml=new C,gl=new an,pi=new C,Xo=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ml,gl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new C,Gf=new ne,kf=new ne,on=class extends Xo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,kf),t.subVectors(kf,Gf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var du=class extends Wo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Lr=class extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},us=class extends Xo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fu=class extends Wo{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qi=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new fu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ur=-90,dr=1,Ql=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ur,dr,e,t);s.layers=this.layers,this.add(s);let r=new on(ur,dr,e,t);r.layers=this.layers,this.add(r);let o=new on(ur,dr,e,t);o.layers=this.layers,this.add(o);let a=new on(ur,dr,e,t);a.layers=this.layers,this.add(a);let l=new on(ur,dr,e,t);l.layers=this.layers,this.add(l);let c=new on(ur,dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ec=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},qo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Tg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Tg(){this._document.hidden===!1&&this.reset()}var Uu="\\[\\]\\.:\\/",wg=new RegExp("["+Uu+"]","g"),Fu="[^"+Uu+"]",Ag="[^"+Uu.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Fu),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),Dg=new RegExp("^"+Rg+Cg+Pg+Ig+"$"),Lg=["material","materials","bones","map"],pu=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Dg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=pu;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);var Vf=new nt,Yo=class{constructor(e,t,n=0,s=1/0){this.ray=new Ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(e,t=!0,n=[]){return mu(e,this,n,t),n.sort(Wf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)mu(e[s],this,n,t);return n.sort(Wf),n}};function Wf(i,e){return i.distance-e.distance}function mu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)mu(r[o],e,t,!0)}}var gu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Ou(i,e,t,n){let s=Ng(n);switch(t){case Ru:return i*e;case lc:return i*e/s.components*s.byteLength;case cc:return i*e/s.components*s.byteLength;case _s:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case Cu:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(i,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(i,8)*Math.max(e,8)/2;case gc:case xc:case vc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _c:case la:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fc:case Oc:case Bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ca:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ng(i){switch(i){case pn:case Eu:return{byteLength:1,components:1};case Ur:case Tu:case Vt:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case li:case rc:case Yn:return{byteLength:4,components:1};case wu:case Au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qp(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hg(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$g=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ex=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,__=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:zg,alphahash_pars_fragment:Gg,alphamap_fragment:kg,alphamap_pars_fragment:Vg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:Zg,batching_vertex:$g,begin_vertex:Jg,beginnormal_vertex:Kg,bsdfs:jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:xx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:yx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Dx,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:Ex,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Rx,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Px,lights_pars_begin:Ix,lights_toon_fragment:Lx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:Bx,lights_fragment_begin:Hx,lights_fragment_maps:zx,lights_fragment_end:Gx,lightprobes_pars_fragment:kx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:Xx,logdepthbuf_vertex:qx,map_fragment:Yx,map_pars_fragment:Zx,map_particle_fragment:$x,map_particle_pars_fragment:Jx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Qx,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:f_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:x_,dithering_fragment:__,dithering_pars_fragment:v_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:S_,shadowmap_pars_vertex:b_,shadowmap_vertex:E_,shadowmask_pars_fragment:T_,skinbase_vertex:w_,skinning_pars_vertex:A_,skinning_vertex:R_,skinnormal_vertex:C_,specularmap_fragment:P_,specularmap_pars_fragment:I_,tonemapping_fragment:D_,tonemapping_pars_fragment:L_,transmission_fragment:N_,transmission_pars_fragment:U_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:B_,worldpos_vertex:H_,background_vert:z_,background_frag:G_,backgroundCube_vert:k_,backgroundCube_frag:V_,cube_vert:W_,cube_frag:X_,depth_vert:q_,depth_frag:Y_,distance_vert:Z_,distance_frag:$_,equirect_vert:J_,equirect_frag:K_,linedashed_vert:j_,linedashed_frag:Q_,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:sv,meshmatcap_frag:rv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:hv,meshphysical_frag:uv,meshtoon_vert:dv,meshtoon_frag:fv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:xv,sprite_vert:_v,sprite_frag:vv},Re={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},wi={basic:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:mn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:mn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:mn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new xe(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:mn([Re.points,Re.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:mn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:mn([Re.common,Re.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:mn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:mn([Re.sprite,Re.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:mn([Re.common,Re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:mn([Re.lights,Re.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};wi.physical={uniforms:mn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Wc={r:0,b:0,g:0},yv=new nt,e0=new et;e0.set(-1,0,0,0,1,0,0,0,1);function Mv(i,e,t,n,s,r){let o=new xe(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let x=M.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(M){let E=!1,x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===na)?(c===void 0&&(c=new rt(new Yt(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:zs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=pt.getTransfer(x.colorSpace)!==_t,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new rt(new Zt(2,2),new vt({name:"BackgroundMaterial",uniforms:zs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pt.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Wc,Nu(i)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function Sv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,L,k,N,z){let q=!1,F=d(D,N,k,L);r!==F&&(r=F,c(r.object)),q=f(D,N,k,z),q&&g(D,N,k,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(D,L,k,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,L,k,N){let z=N.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let F=D.isInstancedMesh===!0?D.id:0,X=q[F];X===void 0&&(X={},q[F]=X);let O=X[k.id];O===void 0&&(O={},X[k.id]=O);let V=O[z];return V===void 0&&(V=u(l()),O[z]=V),V}function u(D){let L=[],k=[],N=[];for(let z=0;z<t;z++)L[z]=0,k[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,L,k,N){let z=r.attributes,q=L.attributes,F=0,X=k.getAttributes();for(let O in X)if(X[O].location>=0){let j=z[O],be=q[O];if(be===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),j===void 0||j.attribute!==be||be&&j.data!==be.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function g(D,L,k,N){let z={},q=L.attributes,F=0,X=k.getAttributes();for(let O in X)if(X[O].location>=0){let j=q[O];j===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let be={};be.attribute=j,j&&j.data&&(be.data=j.data),z[O]=be,F++}r.attributes=z,r.attributesNum=F,r.index=N}function y(){let D=r.newAttributes;for(let L=0,k=D.length;L<k;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){let k=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;k[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),z[D]!==L&&(i.vertexAttribDivisor(D,L),z[D]=L)}function M(){let D=r.newAttributes,L=r.enabledAttributes;for(let k=0,N=L.length;k<N;k++)L[k]!==D[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function E(D,L,k,N,z,q,F){F===!0?i.vertexAttribIPointer(D,L,k,z,q):i.vertexAttribPointer(D,L,k,N,z,q)}function x(D,L,k,N){y();let z=N.attributes,q=k.getAttributes(),F=L.defaultAttributeValues;for(let X in q){let O=q[X];if(O.location>=0){let V=z[X];if(V===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){let j=V.normalized,be=V.itemSize,Te=e.get(V);if(Te===void 0)continue;let st=Te.buffer,Qe=Te.type,Ze=Te.bytesPerElement,J=Qe===i.INT||Qe===i.UNSIGNED_INT||V.gpuType===rc;if(V.isInterleavedBufferAttribute){let te=V.data,me=te.stride,Ne=V.offset;if(te.isInstancedInterleavedBuffer){for(let fe=0;fe<O.locationSize;fe++)p(O.location+fe,te.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<O.locationSize;fe++)m(O.location+fe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let fe=0;fe<O.locationSize;fe++)E(O.location+fe,be/O.locationSize,Qe,j,me*Ze,(Ne+be/O.locationSize*fe)*Ze,J)}else{if(V.isInstancedBufferAttribute){for(let te=0;te<O.locationSize;te++)p(O.location+te,V.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let te=0;te<O.locationSize;te++)m(O.location+te);i.bindBuffer(i.ARRAY_BUFFER,st);for(let te=0;te<O.locationSize;te++)E(O.location+te,be/O.locationSize,Qe,j,be*Ze,be/O.locationSize*te*Ze,J)}}else if(F!==void 0){let j=F[X];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(O.location,j);break;case 3:i.vertexAttrib3fv(O.location,j);break;case 4:i.vertexAttrib4fv(O.location,j);break;default:i.vertexAttrib1fv(O.location,j)}}}}M()}function S(){w();for(let D in n){let L=n[D];for(let k in L){let N=L[k];for(let z in N){let q=N[z];for(let F in q)h(q[F].object),delete q[F];delete N[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let k in L){let N=L[k];for(let z in N){let q=N[z];for(let F in q)h(q[F].object),delete q[F];delete N[z]}}delete n[D.id]}function A(D){for(let L in n){let k=n[L];for(let N in k){let z=k[N];if(z[D.id]===void 0)continue;let q=z[D.id];for(let F in q)h(q[F].object),delete q[F];delete z[D.id]}}}function _(D){for(let L in n){let k=n[L],N=D.isInstancedMesh===!0?D.id:0,z=k[N];if(z!==void 0){for(let q in z){let F=z[q];for(let X in F)h(F[X].object),delete F[X];delete z[q]}delete k[N],Object.keys(k).length===0&&delete n[L]}}}function w(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function bv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ev(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==pn&&A!==Yn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Tv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ti,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,x=p.clippingState||null;l.value=x,x=h(g,u,E,f);for(let S=0;S!==E;++S)x[S]=t[S];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==y;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Or=4,wv=6,Av=20,Rv=256,ua=new us,Dp=new xe,Bu=null,Hu=0,zu=0,Gu=!1,Cv=new C,Gs=new C,qc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Cv}=r;Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,zu),this._renderer.xr.enabled=Gu,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),zu=this._renderer.getActiveMipmapLevel(),Gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Vt,format:Cn,colorSpace:vo,depthBuffer:!1},s=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pv(r)),this._blurMaterial=Dv(r,e,t),this._ggxMaterial=Iv(r,e,t)}return s}_compileMaterial(e){let t=new rt(new dt,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,s,r){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Dp),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Yt,new kt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Dp),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;Fr(s,x*S,E>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(y,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ms||e.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ua)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Or?n-g+Or:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Fr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,ua),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Fr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(a,ua)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Or?s-this._lodMax+Or:0),u=4*(this._cubeSize-h);Fr(t,d,u,3*h,2*h),o.setRenderTarget(t),o.render(l,ua)}};function Pv(i){let e=[],t=[],n=i,s=i-Or+1+wv;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,E=p>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(x,f*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Gs.set(1,A,b):p===1?Gs.set(-b,1,-A):p===2?Gs.set(-b,A,1):p===3?Gs.set(-1,A,-b):p===4?Gs.set(-b,-1,A):Gs.set(b,A,-1),Gs.toArray(y,(p*u+S)*f)}}let m=new dt;m.setAttribute("position",new Ut(g,f)),m.setAttribute("outputDirection",new Ut(y,f)),t.push(new rt(m,null)),n>Or&&n--}return{lodMeshes:t,sizeLods:e}}function Lp(i,e,t){let n=new Nt(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Iv(i,e,t){return new vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Dv(i,e,t){return new vt({name:"SphericalGaussianBlur",defines:{SAMPLES:Av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Np(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Up(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Po(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yt(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:$t});r.uniforms.tEquirect.value=t;let o=new rt(s,r),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=cn),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Lv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===nc||f===ic)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Yc(g.height);return y.fromEquirectangularTexture(i,u),e.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===nc||f===ic,y=f===ms||f===Hs;if(g||y){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new qc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new qc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===nc?u.mapping=ms:f===ic&&(u.mapping=Hs),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Nv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Is("WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,x=M.length;E<x;E+=3){let S=M[E+0],b=M[E+1],A=M[E+2];u.push(S,b,b,A,A,S)}}else{let M=g.array;y=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){let S=E+0,b=E+1,A=E+2;u.push(S,b,b,A,A,S)}}let m=new(g.count>=65535?wo:To)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,e,t){let n=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=a.attributes.position.count*E,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*S*4*d),A=new bo(b,x,S,d);A.type=Yn,A.needsUpdate=!0;let _=E*4;for(let I=0;I<d;I++){let D=m[I],L=p[I],k=M[I],N=x*S*4*I;for(let z=0;z<D.count;z++){let q=z*_;f===!0&&(s.fromBufferAttribute(D,z),b[N+q+0]=s.x,b[N+q+1]=s.y,b[N+q+2]=s.z,b[N+q+3]=0),g===!0&&(s.fromBufferAttribute(L,z),b[N+q+4]=s.x,b[N+q+5]=s.y,b[N+q+6]=s.z,b[N+q+7]=0),y===!0&&(s.fromBufferAttribute(k,z),b[N+q+8]=s.x,b[N+q+9]=s.y,b[N+q+10]=s.z,b[N+q+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new ne(x,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Hv(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var zv={[Jo]:"LINEAR_TONE_MAPPING",[Ko]:"REINHARD_TONE_MAPPING",[jo]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[ea]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Qo]:"CUSTOM_TONE_MAPPING"};function Gv(i,e,t,n,s,r){let o=new Nt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new dt;c.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Oe([0,2,0,0,2,0],2));let h=new Pr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new rt(c,h),u=new us(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<M.length;b++){let A=M[b];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;let S=o.width,b=o.height;M.length>0&&a===null&&(a=new Nt(S,b,{type:Vt,depthBuffer:!1,stencilBuffer:!1}),l=new Nt(S,b,{type:Vt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let _=M[A];_.setSize&&_.setSize(S,b)}},this.begin=function(x,S){if(y||x.toneMapping===ai&&M.length===0)return!1;if(p=S,S!==null){let b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,y=!0;let b=o,A=a;for(let _=0;_<M.length;_++){let w=M[_];w.enabled!==!1&&(w.render(x,A,b,S),w.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},pt.getTransfer(f)===_t&&(h.defines.SRGB_TRANSFER="");let _=zv[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var t0=new vn,Wu=new Si(1,1),n0=new bo,i0=new Pl,s0=new Po,Fp=[],Op=[],Bp=new Float32Array(16),Hp=new Float32Array(9),zp=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Fp[s];if(r===void 0&&(r=new Float32Array(s),Fp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $c(i,e){let t=Op[e];t===void 0&&(t=new Int32Array(e),Op[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function qv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;zp.set(n),i.uniformMatrix2fv(this.addr,!1,zp),sn(t,n)}}function Yv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Hp.set(n),i.uniformMatrix3fv(this.addr,!1,Hp),sn(t,n)}}function Zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Bp.set(n),i.uniformMatrix4fv(this.addr,!1,Bp),sn(t,n)}}function $v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function iy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=t.isReversedDepthBuffer()?Vc:kc,r=Wu):r=t0,t.setTexture2D(e||r,s)}function sy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||i0,s)}function ry(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||s0,s)}function oy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||n0,s)}function ay(i){switch(i){case 5126:return kv;case 35664:return Vv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return $v;case 35667:case 35671:return Jv;case 35668:case 35672:return Kv;case 35669:case 35673:return jv;case 5125:return Qv;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return oy}}function ly(i,e){i.uniform1fv(this.addr,e)}function cy(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function hy(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function uy(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function xy(i,e){i.uniform3iv(this.addr,e)}function _y(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function by(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wu:o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ey(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function Ty(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function wy(i,e,t){let n=this.cache,s=e.length,r=$c(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function Ay(i){switch(i){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return xy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return wy}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ay(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ay(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ku=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function Ry(i,e,t){let n=i.name,s=n.length;for(ku.lastIndex=0;;){let r=ku.exec(n),o=ku.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gp(t,c===void 0?new Xu(a,i,e):new qu(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Yu(a),Gp(t,d)),t=d}}}var Br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Ry(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function kp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cy=37297,Py=0;function Iy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vp=new et;function Dy(i){pt._getMatrix(Vp,pt.workingColorSpace,i);let e=`mat3( ${Vp.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Iy(i.getShaderSource(e),a)}else return r}function Ly(i,e){let t=Dy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ny={[Jo]:"Linear",[Ko]:"Reinhard",[jo]:"Cineon",[ps]:"ACESFilmic",[ea]:"AgX",[ta]:"Neutral",[Qo]:"Custom"};function Uy(i,e){let t=Ny[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xc=new C;function Fy(){pt.getLuminanceCoefficients(Xc);let i=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function By(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fa(i){return i!==""}function Xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zu(i){return i.replace(zy,ky)}var Gy=new Map;function ky(i,e){let t=ft[e];if(t===void 0){let n=Gy.get(e);if(n!==void 0)t=ft[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zu(t)}var Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yp(i){return i.replace(Vy,Wy)}function Wy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Xy={[Os]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function qy(i){return Xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yy={[ms]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE_UV"};function Zy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $y={[Hs]:"ENVMAP_MODE_REFRACTION"};function Jy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ky={[Su]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function jy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ky[i.combine]||"ENVMAP_BLENDING_NONE"}function Qy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=qy(t),c=Zy(t),h=Jy(t),d=jy(t),u=Qy(t),f=Oy(t),g=By(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ft.tonemapping_pars_fragment:"",t.toneMapping!==ai?Uy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Ly("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),o=Zu(o),o=Xp(o,t),o=qp(o,t),a=Zu(a),a=Xp(a,t),a=qp(a,t),o=Yp(o),a=Yp(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+m+o,x=M+p+a,S=kp(s,s.VERTEX_SHADER,E),b=kp(s,s.FRAGMENT_SHADER,x);s.attachShader(y,S),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(D){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(b)||"",z=L.trim(),q=k.trim(),F=N.trim(),X=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,b);else{let V=Wp(s,S,"vertex"),j=Wp(s,b,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+V+`
`+j)}else z!==""?Je("WebGLProgram: Program Info Log:",z):(q===""||F==="")&&(O=!1);O&&(D.diagnostics={runnable:X,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(S),s.deleteShader(b),_=new Br(s,y),w=Hy(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,Cy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Py++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}var tM=0,$u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ju(e),t.set(e,n)),n}},Ju=class{constructor(e){this.id=tM++,this.code=e,this.usedTimes=0}};function nM(i){return i===_s||i===la||i===ca}function iM(i,e,t,n,s,r){let o=new vr,a=new $u,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,I,D,L,k){let N=D.fog,z=L.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||q,F),O=X&&X.mapping===na?X.image.height:null,V=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=j!==void 0?j.length:0,Te=0;z.morphAttributes.position!==void 0&&(Te=1),z.morphAttributes.normal!==void 0&&(Te=2),z.morphAttributes.color!==void 0&&(Te=3);let st,Qe,Ze,J;if(V){let Ct=wi[V];st=Ct.vertexShader,Qe=Ct.fragmentShader}else{st=_.vertexShader,Qe=_.fragmentShader;let Ct=a.getVertexShaderStage(_),Mt=a.getFragmentShaderStage(_);a.update(_,Ct,Mt),Ze=Ct.id,J=Mt.id}let te=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,fe=L.isBatchedMesh===!0,ke=!!_.map,lt=!!_.matcap,ie=!!X,le=!!_.aoMap,ue=!!_.lightMap,de=!!_.bumpMap&&_.wireframe===!1,Q=!!_.normalMap,he=!!_.displacementMap,pe=!!_.emissiveMap,ve=!!_.metalnessMap,se=!!_.roughnessMap,P=_.anisotropy>0,Me=_.clearcoat>0,Se=_.dispersion>0,R=_.retroreflectivity>0,v=_.iridescence>0,U=_.sheen>0,W=_.transmission>0,G=P&&!!_.anisotropyMap,oe=Me&&!!_.clearcoatMap,ae=Me&&!!_.clearcoatNormalMap,$=Me&&!!_.clearcoatRoughnessMap,ee=v&&!!_.iridescenceMap,ge=v&&!!_.iridescenceThicknessMap,Be=U&&!!_.sheenColorMap,ye=U&&!!_.sheenRoughnessMap,_e=!!_.specularMap,Ue=!!_.specularColorMap,Ve=!!_.specularIntensityMap,je=W&&!!_.transmissionMap,H=W&&!!_.thicknessMap,we=!!_.gradientMap,re=!!_.alphaMap,Ae=_.alphaTest>0,De=!!_.alphaHash,ce=!!_.extensions,qe=ai;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(qe=i.toneMapping);let Ge={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:st,fragmentShader:Qe,defines:_.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:fe,batchingColor:fe&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:lt,envMap:ie,envMapMode:ie&&X.mapping,envMapCubeUVHeight:O,aoMap:le,lightMap:ue,bumpMap:de,normalMap:Q,displacementMap:he,emissiveMap:pe,normalMapObjectSpace:Q&&_.normalMapType===dp,normalMapTangentSpace:Q&&_.normalMapType===ha,packedNormalMap:Q&&_.normalMapType===ha&&nM(_.normalMap.format),metalnessMap:ve,roughnessMap:se,anisotropy:P,anisotropyMap:G,clearcoat:Me,clearcoatMap:oe,clearcoatNormalMap:ae,clearcoatRoughnessMap:$,dispersion:Se,retroreflection:R,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:U,sheenColorMap:Be,sheenRoughnessMap:ye,specularMap:_e,specularColorMap:Ue,specularIntensityMap:Ve,transmission:W,transmissionMap:je,thicknessMap:H,gradientMap:we,opaque:_.transparent===!1&&_.blending===fs&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:Ae,alphaHash:De,combine:_.combine,mapUv:ke&&g(_.map.channel),aoMapUv:le&&g(_.aoMap.channel),lightMapUv:ue&&g(_.lightMap.channel),bumpMapUv:de&&g(_.bumpMap.channel),normalMapUv:Q&&g(_.normalMap.channel),displacementMapUv:he&&g(_.displacementMap.channel),emissiveMapUv:pe&&g(_.emissiveMap.channel),metalnessMapUv:ve&&g(_.metalnessMap.channel),roughnessMapUv:se&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:oe&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&g(_.sheenRoughnessMap.channel),specularMapUv:_e&&g(_.specularMap.channel),specularColorMapUv:Ue&&g(_.specularColorMap.channel),specularIntensityMapUv:Ve&&g(_.specularIntensityMap.channel),transmissionMapUv:je&&g(_.transmissionMap.channel),thicknessMapUv:H&&g(_.thicknessMap.channel),alphaMapUv:re&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||P),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(ke||re),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&Q===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Te,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:pe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xt,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)w.push(I),w.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(w,_),M(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){let w=f[_.type],I;if(w){let D=wi[w];I=yn.clone(D.uniforms)}else I=_.uniforms;return I}function x(_,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new eM(i,w,_,s),c.push(I),h.set(w,I)),I}function S(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function sM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function $p(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function l(u,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let E=a(u,f,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,f,g,y,m,p){let M=a(u,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,f){t.length>1&&t.sort(u||rM),n.length>1&&n.sort(f||$p),s.length>1&&s.sort(f||$p)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function oM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Jp,i.set(n,[o])):s>=r.length?(o=new Jp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function aM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new xe};break;case"SpotLight":t={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function lM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cM=0;function hM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uM(i){let e=new aM,t=lM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new nt,o=new nt;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,E=0,x=0,S=0,b=0,A=0,_=0,w=0,I=0;c.sort(hM);for(let L=0,k=c.length;L<k;L++){let N=c[L],z=N.color,q=N.intensity,F=N.distance,X=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===_s?X=N.shadow.map.texture:X=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*q,d+=z.g*q,u+=z.b*q;else if(N.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(N.sh.coefficients[O],q);I++}else if(N.isSunLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,j=t.get(N);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=X;let be=V.getViewportCount();for(let Te=0;Te<be;Te++)n.sunShadowMatrix[y+Te]=V.getMatrix(Te),n.sunShadowCascade[y+Te]=V._cascadeData[Te];y+=be,g++}n.sun[f]=O,f++}else if(N.isDirectionalLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let V=N.shadow,j=t.get(N);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=N.shadow.matrix,S++}n.directional[m]=O,m++}else if(N.isSpotLight){let O=e.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(z).multiplyScalar(q),O.distance=F,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,n.spot[M]=O;let V=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,V.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[M]=V.matrix,N.castShadow){let j=t.get(N);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=X,A++}M++}else if(N.isRectAreaLight){let O=e.get(N);O.color.copy(z).multiplyScalar(q),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=O,E++}else if(N.isPointLight){let O=e.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity),O.distance=N.distance,O.decay=N.decay,N.castShadow){let V=N.shadow,j=t.get(N);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=N.shadow.matrix,b++}n.point[p]=O,p++}else if(N.isHemisphereLight){let O=e.get(N);O.skyColor.copy(N.color).multiplyScalar(q),O.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[x]=O,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==_||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=_,D.numLightProbes=I,n.version=cM++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let x=c[M];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Kp(i){let e=new uM(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function dM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kp(i),e.set(s,[a])):r>=o.length?(a=new Kp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],gM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],jp=new nt,da=new C,Vu=new C;function xM(i,e,t){let n=new Er,s=new ne,r=new ne,o=new Ft,a=new Gl,l=new kl,c={},h=t.maxTextureSize,d={[ds]:hn,[hn]:ds,[xt]:xt},u=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let p=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Yf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending($t),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==this.type;k&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=b.length;N<z;N++){let q=b[N],F=q.shadow;if(F===void 0){Je("WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Nr){if(q.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Nt(s.x,s.y,{format:_s,type:Vt,minFilter:cn,magFilter:cn,generateMipmaps:!1}),F.map.texture.name=q.name+".shadowMap",F.map.depthTexture=new Si(s.x,s.y,Yn),F.map.depthTexture.name=q.name+".shadowMapDepth",F.map.depthTexture.format=xi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt}else q.isPointLight?(F.map=new Yc(s.x),F.map.depthTexture=new Ul(s.x,li)):(F.map=new Nt(s.x,s.y),F.map.depthTexture=new Si(s.x,s.y,li)),F.map.depthTexture.name=q.name+".shadowMap",F.map.depthTexture.format=xi,this.type===Os?(F.map.depthTexture.compareFunction=O?Vc:kc,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=qt,F.map.depthTexture.magFilter=qt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let V=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();q.isPointLight!==!0&&F.updateMatrices(q,_);for(let j=0;j<V;j++){let be=F.getCamera(j);if(q.isPointLight){let Te=F.camera,st=F.matrix,Qe=q.distance||Te.far;Qe!==Te.far&&(Te.far=Qe,Te.updateProjectionMatrix()),da.setFromMatrixPosition(q.matrixWorld),Te.position.copy(da),Vu.copy(Te.position),Vu.add(mM[j]),Te.up.copy(gM[j]),Te.lookAt(Vu),Te.updateMatrixWorld(),st.makeTranslation(-da.x,-da.y,-da.z),jp.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),F._frustum.setFromProjectionMatrix(jp,Te.coordinateSystem,Te.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,j),i.clear();else{j===0&&(i.setRenderTarget(F.map),i.clear());let Te=F.getViewport(j);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),L.viewport(o)}n=F.getFrustum(j),x(A,_,be,q,this.type)}F.isPointLightShadow!==!0&&this.type===Nr&&M(F,_),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,D)};function M(b,A){let _=e.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Nt(s.x,s.y,{format:_s,type:Vt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,_,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,_,f,y,null)}function E(b,A,_,w){let I=null,D=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)I=D;else if(I=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=I.uuid,k=A.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let z=N[k];z===void 0&&(z=I.clone(),N[k]=z,A.addEventListener("dispose",S)),I=z}if(I.visible=A.visible,I.wireframe=A.wireframe,w===Nr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=i.properties.get(I);L.light=_}return I}function x(b,A,_,w,I){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Nr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let k=e.update(b),N=b.material;if(Array.isArray(N)){let z=k.groups;for(let q=0,F=z.length;q<F;q++){let X=z[q],O=N[X.materialIndex];if(O&&O.visible){let V=E(b,O,w,I);b.onBeforeShadow(i,b,A,_,k,V,X),i.renderBufferDirect(_,null,k,V,b,X),b.onAfterShadow(i,b,A,_,k,V,X)}}}else if(N.visible){let z=E(b,N,w,I);b.onBeforeShadow(i,b,A,_,k,z,null),i.renderBufferDirect(_,null,k,z,b,null),b.onAfterShadow(i,b,A,_,k,z,null)}}let L=b.children;for(let k=0,N=L.length;k<N;k++)x(L[k],A,_,w,I)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let w=c[_],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function _M(i,e){function t(){let H=!1,we=new Ft,re=null,Ae=new Ft(0,0,0,0);return{setMask:function(De){re!==De&&!H&&(i.colorMask(De,De,De,De),re=De)},setLocked:function(De){H=De},setClear:function(De,ce,qe,Ge,Ct){Ct===!0&&(De*=Ge,ce*=Ge,qe*=Ge),we.set(De,ce,qe,Ge),Ae.equals(we)===!1&&(i.clearColor(De,ce,qe,Ge),Ae.copy(we))},reset:function(){H=!1,re=null,Ae.set(-1,0,0,0)}}}function n(){let H=!1,we=!1,re=null,Ae=null,De=null;return{setReversed:function(ce){if(we!==ce){let qe=e.get("EXT_clip_control");ce?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=ce;let Ge=De;De=null,this.setClear(Ge)}},getReversed:function(){return we},setTest:function(ce){ce?te(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ce){re!==ce&&!H&&(i.depthMask(ce),re=ce)},setFunc:function(ce){if(we&&(ce=bp[ce]),Ae!==ce){switch(ce){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ce}},setLocked:function(ce){H=ce},setClear:function(ce){De!==ce&&(De=ce,we&&(ce=1-ce),i.clearDepth(ce))},reset:function(){H=!1,re=null,Ae=null,De=null,we=!1}}}function s(){let H=!1,we=null,re=null,Ae=null,De=null,ce=null,qe=null,Ge=null,Ct=null;return{setTest:function(Mt){H||(Mt?te(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Mt){we!==Mt&&!H&&(i.stencilMask(Mt),we=Mt)},setFunc:function(Mt,Kn,di){(re!==Mt||Ae!==Kn||De!==di)&&(i.stencilFunc(Mt,Kn,di),re=Mt,Ae=Kn,De=di)},setOp:function(Mt,Kn,di){(ce!==Mt||qe!==Kn||Ge!==di)&&(i.stencilOp(Mt,Kn,di),ce=Mt,qe=Kn,Ge=di)},setLocked:function(Mt){H=Mt},setClear:function(Mt){Ct!==Mt&&(i.clearStencil(Mt),Ct=Mt)},reset:function(){H=!1,we=null,re=null,Ae=null,De=null,ce=null,qe=null,Ge=null,Ct=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,A=null,_=new xe(0,0,0),w=0,I=!1,D=null,L=null,k=null,N=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=X>=2);let V=null,j={},be=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),st=new Ft().fromArray(be),Qe=new Ft().fromArray(Te);function Ze(H,we,re,Ae){let De=new Uint8Array(4),ce=i.createTexture();i.bindTexture(H,ce),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<re;qe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(we+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return ce}let J={};J[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(pr),de(!1),Q(xu),te(i.CULL_FACE),le($t);function te(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function me(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ne(H,we){return u[H]!==we?(i.bindFramebuffer(H,we),u[H]=we,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function fe(H,we){let re=g,Ae=!1;if(H){re=f.get(we),re===void 0&&(re=[],f.set(we,re));let De=H.textures;if(re.length!==De.length||re[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,qe=De.length;ce<qe;ce++)re[ce]=i.COLOR_ATTACHMENT0+ce;re.length=De.length,Ae=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(re)}function ke(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let lt={[qn]:i.FUNC_ADD,[Zf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};lt[Jf]=i.MIN,lt[Kf]=i.MAX;let ie={[Bs]:i.ZERO,[jf]:i.ONE,[Qf]:i.SRC_COLOR,[yu]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[$o]:i.DST_COLOR,[Zo]:i.DST_ALPHA,[ep]:i.ONE_MINUS_SRC_COLOR,[Mu]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[op]:i.CONSTANT_ALPHA,[ap]:i.ONE_MINUS_CONSTANT_ALPHA};function le(H,we,re,Ae,De,ce,qe,Ge,Ct,Mt){if(H===$t){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),H!==tc){if(H!==p||Mt!==I){if((M!==qn||S!==qn)&&(i.blendEquation(i.FUNC_ADD),M=qn,S=qn),Mt)switch(H){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",H);break}else switch(H){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _u:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vu:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",H);break}E=null,x=null,b=null,A=null,_.set(0,0,0),w=0,p=H,I=Mt}return}De=De||we,ce=ce||re,qe=qe||Ae,(we!==M||De!==S)&&(i.blendEquationSeparate(lt[we],lt[De]),M=we,S=De),(re!==E||Ae!==x||ce!==b||qe!==A)&&(i.blendFuncSeparate(ie[re],ie[Ae],ie[ce],ie[qe]),E=re,x=Ae,b=ce,A=qe),(Ge.equals(_)===!1||Ct!==w)&&(i.blendColor(Ge.r,Ge.g,Ge.b,Ct),_.copy(Ge),w=Ct),p=H,I=!1}function ue(H,we){H.side===xt?me(i.CULL_FACE):te(i.CULL_FACE);let re=H.side===hn;we&&(re=!re),de(re),H.blending===fs&&H.transparent===!1?le($t):le(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ae=H.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function Q(H){H!==Xf?(te(i.CULL_FACE),H!==L&&(H===xu?i.cullFace(i.BACK):H===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),L=H}function he(H){H!==k&&(F&&i.lineWidth(H),k=H)}function pe(H,we,re){H?(te(i.POLYGON_OFFSET_FILL),(N!==we||z!==re)&&(N=we,z=re,o.getReversed()&&(we=-we),i.polygonOffset(we,re))):me(i.POLYGON_OFFSET_FILL)}function ve(H){H?te(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function se(H){H===void 0&&(H=i.TEXTURE0+q-1),V!==H&&(i.activeTexture(H),V=H)}function P(H,we,re){re===void 0&&(V===null?re=i.TEXTURE0+q-1:re=V);let Ae=j[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[re]=Ae),(Ae.type!==H||Ae.texture!==we)&&(V!==re&&(i.activeTexture(re),V=re),i.bindTexture(H,we||J[H]),Ae.type=H,Ae.texture=we)}function Me(){let H=j[V];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function v(){try{i.texSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function U(){try{i.texSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function oe(){try{i.texStorage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ae(){try{i.texStorage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function $(){try{i.texImage2D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ee(){try{i.texImage3D(...arguments)}catch(H){Ke("WebGLState:",H)}}function ge(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Be(H,we){d[H]!==we&&(i.pixelStorei(H,we),d[H]=we)}function ye(H){st.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),st.copy(H))}function _e(H){Qe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Qe.copy(H))}function Ue(H,we){let re=c.get(we);re===void 0&&(re=new WeakMap,c.set(we,re));let Ae=re.get(H);Ae===void 0&&(Ae=i.getUniformBlockIndex(we,H.name),re.set(H,Ae))}function Ve(H,we){let Ae=c.get(we).get(H);l.get(we)!==Ae&&(i.uniformBlockBinding(we,Ae,H.__bindingPointIndex),l.set(we,Ae))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,j={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,A=null,_=new xe(0,0,0),w=0,I=!1,D=null,L=null,k=null,N=null,z=null,st.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:me,bindFramebuffer:Ne,drawBuffers:fe,useProgram:ke,setBlending:le,setMaterial:ue,setFlipSided:de,setCullFace:Q,setLineWidth:he,setPolygonOffset:pe,setScissorTest:ve,activeTexture:se,bindTexture:P,unbindTexture:Me,compressedTexImage2D:Se,compressedTexImage3D:R,texImage2D:$,texImage3D:ee,pixelStorei:Be,getParameter:ge,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:oe,texStorage3D:ae,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:W,compressedTexSubImage3D:G,scissor:ye,viewport:_e,reset:je}}function vM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,v){return g?new OffscreenCanvas(R,v):Mo("canvas")}function m(R,v,U){let W=1,G=Se(R);if((G.width>U||G.height>U)&&(W=U/Math.max(G.width,G.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let oe=Math.floor(W*G.width),ae=Math.floor(W*G.height);u===void 0&&(u=y(oe,ae));let $=v?y(oe,ae):u;return $.width=oe,$.height=ae,$.getContext("2d").drawImage(R,0,0,oe,ae),Je("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+oe+"x"+ae+")."),$}else return"data"in R&&Je("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,v,U,W,G,oe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(U===i.FLOAT&&($=i.R32F),U===i.HALF_FLOAT&&($=i.R16F),U===i.UNSIGNED_BYTE&&($=i.R8),U===i.UNSIGNED_SHORT&&ae&&($=ae.R16_EXT),U===i.SHORT&&ae&&($=ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.R8UI),U===i.UNSIGNED_SHORT&&($=i.R16UI),U===i.UNSIGNED_INT&&($=i.R32UI),U===i.BYTE&&($=i.R8I),U===i.SHORT&&($=i.R16I),U===i.INT&&($=i.R32I)),v===i.RG&&(U===i.FLOAT&&($=i.RG32F),U===i.HALF_FLOAT&&($=i.RG16F),U===i.UNSIGNED_BYTE&&($=i.RG8),U===i.UNSIGNED_SHORT&&ae&&($=ae.RG16_EXT),U===i.SHORT&&ae&&($=ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RG8UI),U===i.UNSIGNED_SHORT&&($=i.RG16UI),U===i.UNSIGNED_INT&&($=i.RG32UI),U===i.BYTE&&($=i.RG8I),U===i.SHORT&&($=i.RG16I),U===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGB8UI),U===i.UNSIGNED_SHORT&&($=i.RGB16UI),U===i.UNSIGNED_INT&&($=i.RGB32UI),U===i.BYTE&&($=i.RGB8I),U===i.SHORT&&($=i.RGB16I),U===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGBA8UI),U===i.UNSIGNED_SHORT&&($=i.RGBA16UI),U===i.UNSIGNED_INT&&($=i.RGBA32UI),U===i.BYTE&&($=i.RGBA8I),U===i.SHORT&&($=i.RGBA16I),U===i.INT&&($=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_SHORT&&ae&&($=ae.RGB16_EXT),U===i.SHORT&&ae&&($=ae.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){let ee=oe?yo:pt.getTransfer(G);U===i.FLOAT&&($=i.RGBA32F),U===i.HALF_FLOAT&&($=i.RGBA16F),U===i.UNSIGNED_BYTE&&($=ee===_t?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&ae&&($=ae.RGBA16_EXT),U===i.SHORT&&ae&&($=ae.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(R,v){let U;return R?v===null||v===li||v===xs?U=i.DEPTH24_STENCIL8:v===Yn?U=i.DEPTH32F_STENCIL8:v===Ur&&(U=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===li||v===xs?U=i.DEPTH_COMPONENT24:v===Yn?U=i.DEPTH_COMPONENT32F:v===Ur&&(U=i.DEPTH_COMPONENT16),U}function b(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){let v=R.target;v.removeEventListener("dispose",A),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(R){let v=R.target;v.removeEventListener("dispose",_),D(v)}function w(R){let v=n.get(R);if(v.__webglInit===void 0)return;let U=R.source,W=f.get(U);if(W){let G=W[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&I(R),Object.keys(W).length===0&&f.delete(U)}n.remove(R)}function I(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let U=R.source,W=f.get(U);delete W[v.__cacheKey],o.memory.textures--}function D(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let G=0;G<v.__webglFramebuffer[W].length;G++)i.deleteFramebuffer(v.__webglFramebuffer[W][G]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=R.textures;for(let W=0,G=U.length;W<G;W++){let oe=n.get(U[W]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(U[W])}n.remove(R)}let L=0;function k(){L=0}function N(){return L}function z(R){L=R}function q(){let R=L;return R>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function F(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function X(R,v){let U=n.get(R);if(R.isVideoTexture&&P(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let W=R.image;if(W===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,R,v);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function O(R,v){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){me(U,R,v);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function V(R,v){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){me(U,R,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function j(R,v){let U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Ne(U,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let be={[en]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},Te={[qt]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[sc]:i.LINEAR_MIPMAP_NEAREST,[gs]:i.LINEAR_MIPMAP_LINEAR},st={[pp]:i.NEVER,[vp]:i.ALWAYS,[mp]:i.LESS,[kc]:i.LEQUAL,[gp]:i.EQUAL,[Vc]:i.GEQUAL,[xp]:i.GREATER,[_p]:i.NOTEQUAL};function Qe(R,v){if(v.type===Yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===sc||v.magFilter===ia||v.magFilter===gs||v.minFilter===cn||v.minFilter===sc||v.minFilter===ia||v.minFilter===gs)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,be[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,be[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,be[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Te[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==ia&&v.minFilter!==gs||v.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(R,v){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));let W=v.source,G=f.get(W);G===void 0&&(G={},f.set(W,G));let oe=F(v);if(oe!==R.__cacheKey){G[oe]===void 0&&(G[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),G[oe].usedTimes++;let ae=G[R.__cacheKey];ae!==void 0&&(G[R.__cacheKey].usedTimes--,ae.usedTimes===0&&I(v)),R.__cacheKey=oe,R.__webglTexture=G[oe].texture}return U}function J(R,v,U){return Math.floor(Math.floor(R/U)/v)}function te(R,v,U,W){let oe=R.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,W,v.data);else{oe.sort((Be,ye)=>Be.start-ye.start);let ae=0;for(let Be=1;Be<oe.length;Be++){let ye=oe[ae],_e=oe[Be],Ue=ye.start+ye.count,Ve=J(_e.start,v.width,4),je=J(ye.start,v.width,4);_e.start<=Ue+1&&Ve===je&&J(_e.start+_e.count-1,v.width,4)===Ve?ye.count=Math.max(ye.count,_e.start+_e.count-ye.start):(++ae,oe[ae]=_e)}oe.length=ae+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Be=0,ye=oe.length;Be<ye;Be++){let _e=oe[Be],Ue=Math.floor(_e.start/4),Ve=Math.ceil(_e.count/4),je=Ue%v.width,H=Math.floor(Ue/v.width),we=Ve,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,je),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,je,H,we,re,U,W,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function me(R,v,U){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);let G=Ze(R,v),oe=v.source;t.bindTexture(W,R.__webglTexture,i.TEXTURE0+U);let ae=n.get(oe);if(oe.version!==ae.__version||G===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let re=pt.getPrimaries(pt.workingColorSpace),Ae=v.colorSpace===Yi?null:pt.getPrimaries(v.colorSpace),De=v.colorSpace===Yi||re===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,s.maxTextureSize);ee=Me(v,ee);let ge=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),ye=x(v.internalFormat,ge,Be,v.normalized,v.colorSpace,v.isVideoTexture);Qe(W,v);let _e,Ue=v.mipmaps,Ve=v.isVideoTexture!==!0,je=ae.__version===void 0||G===!0,H=oe.dataReady,we=b(v,ee);if(v.isDepthTexture)ye=S(v.format===Ei,v.type),je&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,ge,Be,null));else if(v.isDataTexture)if(Ue.length>0){Ve&&je&&t.texStorage2D(i.TEXTURE_2D,we,ye,Ue[0].width,Ue[0].height);for(let re=0,Ae=Ue.length;re<Ae;re++)_e=Ue[re],Ve?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,_e.width,_e.height,ge,Be,_e.data):t.texImage2D(i.TEXTURE_2D,re,ye,_e.width,_e.height,0,ge,Be,_e.data);v.generateMipmaps=!1}else Ve?(je&&t.texStorage2D(i.TEXTURE_2D,we,ye,ee.width,ee.height),H&&te(v,ee,ge,Be)):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,ge,Be,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ye,Ue[0].width,Ue[0].height,ee.depth);for(let re=0,Ae=Ue.length;re<Ae;re++)if(_e=Ue[re],v.format!==Cn)if(ge!==null)if(Ve){if(H)if(v.layerUpdates.size>0){let De=Ou(_e.width,_e.height,v.format,v.type);for(let ce of v.layerUpdates){let qe=_e.data.subarray(ce*De/_e.data.BYTES_PER_ELEMENT,(ce+1)*De/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ce,_e.width,_e.height,1,ge,qe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ee.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,ye,_e.width,_e.height,ee.depth,0,_e.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,_e.width,_e.height,ee.depth,ge,Be,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,ye,_e.width,_e.height,ee.depth,0,ge,Be,_e.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ve&&je&&t.texStorage2D(i.TEXTURE_2D,we,ye,Ue[0].width,Ue[0].height);for(let re=0,Ae=Ue.length;re<Ae;re++)_e=Ue[re],v.format!==Cn?ge!==null?Ve?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,re,ye,_e.width,_e.height,0,_e.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,_e.width,_e.height,ge,Be,_e.data):t.texImage2D(i.TEXTURE_2D,re,ye,_e.width,_e.height,0,ge,Be,_e.data)}else if(v.isDataArrayTexture)if(Ve){if(je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,ye,ee.width,ee.height,ee.depth),H)if(v.layerUpdates.size>0){let re=Ou(ee.width,ee.height,v.format,v.type);for(let Ae of v.layerUpdates){let De=ee.data.subarray(Ae*re/ee.data.BYTES_PER_ELEMENT,(Ae+1)*re/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,ee.width,ee.height,1,ge,Be,De)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Be,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,ge,Be,ee.data);else if(v.isData3DTexture)Ve?(je&&t.texStorage3D(i.TEXTURE_3D,we,ye,ee.width,ee.height,ee.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Be,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,ge,Be,ee.data);else if(v.isFramebufferTexture){if(je)if(Ve)t.texStorage2D(i.TEXTURE_2D,we,ye,ee.width,ee.height);else{let re=ee.width,Ae=ee.height;for(let De=0;De<we;De++)t.texImage2D(i.TEXTURE_2D,De,ye,re,Ae,0,ge,Be,null),re>>=1,Ae>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ee.parentNode!==re){re.appendChild(ee),d.add(v),re.onpaint=Ae=>{let De=Ae.changedElements;for(let ce of d)De.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let De=i.RGBA,ce=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,ce,qe,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&je){let re=Se(Ue[0]);t.texStorage2D(i.TEXTURE_2D,we,ye,re.width,re.height)}for(let re=0,Ae=Ue.length;re<Ae;re++)_e=Ue[re],Ve?H&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,ge,Be,_e):t.texImage2D(i.TEXTURE_2D,re,ye,ge,Be,_e);v.generateMipmaps=!1}else if(Ve){if(je){let re=Se(ee);t.texStorage2D(i.TEXTURE_2D,we,ye,re.width,re.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Be,ee)}else t.texImage2D(i.TEXTURE_2D,0,ye,ge,Be,ee);p(v)&&M(W),ae.__version=oe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ne(R,v,U){if(v.image.length!==6)return;let W=Ze(R,v),G=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);let oe=n.get(G);if(G.version!==oe.__version||W===!0){t.activeTexture(i.TEXTURE0+U);let ae=pt.getPrimaries(pt.workingColorSpace),$=v.colorSpace===Yi?null:pt.getPrimaries(v.colorSpace),ee=v.colorSpace===Yi||ae===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let ce=0;ce<6;ce++)!ge&&!Be?ye[ce]=m(v.image[ce],!0,s.maxCubemapSize):ye[ce]=Be?v.image[ce].image:v.image[ce],ye[ce]=Me(v,ye[ce]);let _e=ye[0],Ue=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type),je=x(v.internalFormat,Ue,Ve,v.normalized,v.colorSpace),H=v.isVideoTexture!==!0,we=oe.__version===void 0||W===!0,re=G.dataReady,Ae=b(v,_e);Qe(i.TEXTURE_CUBE_MAP,v);let De;if(ge){H&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,je,_e.width,_e.height);for(let ce=0;ce<6;ce++){De=ye[ce].mipmaps;for(let qe=0;qe<De.length;qe++){let Ge=De[qe];v.format!==Cn?Ue!==null?H?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,0,0,Ge.width,Ge.height,Ue,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,je,Ge.width,Ge.height,0,Ge.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,0,0,Ge.width,Ge.height,Ue,Ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe,je,Ge.width,Ge.height,0,Ue,Ve,Ge.data)}}}else{if(De=v.mipmaps,H&&we){De.length>0&&Ae++;let ce=Se(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Be){H?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ye[ce].width,ye[ce].height,Ue,Ve,ye[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,ye[ce].width,ye[ce].height,0,Ue,Ve,ye[ce].data);for(let qe=0;qe<De.length;qe++){let Ct=De[qe].image[ce].image;H?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,0,0,Ct.width,Ct.height,Ue,Ve,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,je,Ct.width,Ct.height,0,Ue,Ve,Ct.data)}}else{H?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ue,Ve,ye[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,je,Ue,Ve,ye[ce]);for(let qe=0;qe<De.length;qe++){let Ge=De[qe];H?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,0,0,Ue,Ve,Ge.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,qe+1,je,Ue,Ve,Ge.image[ce])}}}p(v)&&M(i.TEXTURE_CUBE_MAP),oe.__version=G.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function fe(R,v,U,W,G,oe){let ae=r.convert(U.format,U.colorSpace),$=r.convert(U.type),ee=x(U.internalFormat,ae,$,U.normalized,U.colorSpace),ge=n.get(v),Be=n.get(U);if(Be.__renderTarget=v,!ge.__hasExternalTextures){let ye=Math.max(1,v.width>>oe),_e=Math.max(1,v.height>>oe);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,oe,ee,ye,_e,v.depth,0,ae,$,null):t.texImage2D(G,oe,ee,ye,_e,0,ae,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,G,Be.__webglTexture,0,ve(v)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,G,Be.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let W=v.depthTexture,G=W&&W.isDepthTexture?W.type:null,oe=S(v.stencilBuffer,G),ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(v),oe,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(v),oe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,oe,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,R)}else{let W=v.textures;for(let G=0;G<W.length;G++){let oe=W[G],ae=r.convert(oe.format,oe.colorSpace),$=r.convert(oe.type),ee=x(oe.internalFormat,ae,$,oe.normalized,oe.colorSpace);se(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(v),ee,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(R,v,U){let W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let G=n.get(v.depthTexture);if(G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(G.__webglInit===void 0&&(G.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),G.__webglTexture===void 0){G.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v.depthTexture);let ge=r.convert(v.depthTexture.format),Be=r.convert(v.depthTexture.type),ye;v.depthTexture.format===xi?ye=i.DEPTH_COMPONENT24:v.depthTexture.format===Ei&&(ye=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ye,v.width,v.height,0,ge,Be,null)}}else X(v.depthTexture,0);let oe=G.__webglTexture,ae=ve(v),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,ee=v.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===xi)se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,oe,0);else if(v.depthTexture.format===Ei)se(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let v=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",G)};W.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=W}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let W=0;W<6;W++)lt(v.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?lt(v.__webglFramebuffer[0],R,0):lt(v.__webglFramebuffer,R,0)}else if(U){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),ke(v.__webglDepthbuffer[W],R,!1);else{let G=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,oe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ke(v.__webglDepthbuffer,R,!1);else{let G=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,v,U){let W=n.get(R);v!==void 0&&fe(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&ie(R)}function ue(R){let v=R.texture,U=n.get(R),W=n.get(v);R.addEventListener("dispose",_);let G=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ae=G.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),oe){U.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[$]=[];for(let ee=0;ee<v.mipmaps.length;ee++)U.__webglFramebuffer[$][ee]=i.createFramebuffer()}else U.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)U.__webglFramebuffer[$]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ae)for(let $=0,ee=G.length;$<ee;$++){let ge=n.get(G[$]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&se(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let $=0;$<G.length;$++){let ee=G[$];U.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[$]);let ge=r.convert(ee.format,ee.colorSpace),Be=r.convert(ee.type),ye=x(ee.internalFormat,ge,Be,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),_e=ve(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,U.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)fe(U.__webglFramebuffer[$][ee],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else fe(U.__webglFramebuffer[$],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let $=0,ee=G.length;$<ee;$++){let ge=G[$],Be=n.get(ge),ye=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Be.__webglTexture),Qe(ye,ge),fe(U.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+$,ye,0),p(ge)&&M(ye)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),Qe($,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)fe(U.__webglFramebuffer[ee],R,v,i.COLOR_ATTACHMENT0,$,ee);else fe(U.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,$,0);p(v)&&M($),t.unbindTexture()}R.depthBuffer&&ie(R)}function de(R){let v=R.textures;for(let U=0,W=v.length;U<W;U++){let G=v[U];if(p(G)){let oe=E(R),ae=n.get(G).__webglTexture;t.bindTexture(oe,ae),M(oe),t.unbindTexture()}}}let Q=[],he=[];function pe(R){if(R.samples>0){if(se(R)===!1){let v=R.textures,U=R.width,W=R.height,G=i.COLOR_BUFFER_BIT,oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(R),$=v.length>1;if($)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ee=R.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);let Be=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,G,i.NEAREST),l===!0&&(Q.length=0,he.length=0,Q.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Q.push(oe),he.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,he)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);let Be=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ve(R){return Math.min(s.maxSamples,R.samples)}function se(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Me(R,v){let U=R.colorSpace,W=R.format,G=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==vo&&U!==Yi&&(pt.getTransfer(U)===_t?(W!==Cn||G!==pn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",U)),v}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yM(i,e){function t(n,s=Yi){let r,o=pt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eu)return i.BYTE;if(n===Tu)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Vt)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Cu)return i.RGB;if(n===Cn)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===_s)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===sa||n===ra||n===oa||n===aa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===xc||n===_c||n===vc||n===yc||n===la||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gc||n===xc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return r.COMPRESSED_R11_EAC;if(n===yc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===Oc||n===Bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===zc||n===ca||n===Gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Io(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new vt({vertexShader:MM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends _i{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Ku,p={},M=t.getContextAttributes(),E=null,x=null,S=[],b=[],A=new ne,_=null,w=null,I=new on;I.viewport=new Ft;let D=new on;D.viewport=new Ft;let L=[I,D],k=new ec,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=S[J];return te===void 0&&(te=new yr,S[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=S[J];return te===void 0&&(te=new yr,S[J]=te),te.getGripSpace()},this.getHand=function(J){let te=S[J];return te===void 0&&(te=new yr,S[J]=te),te.getHandSpace()};function q(J){let te=b.indexOf(J.inputSource);if(te===-1)return;let me=S[te];me!==void 0&&(me.update(J.inputSource,J.frame,c||o),me.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let J=0;J<S.length;J++){let te=b[J];te!==null&&(b[J]=null,S[J].disconnect(te))}N=null,z=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?Ei:xi,Ne=M.stencil?xs:li);let ke={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ke),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Nt(u.textureWidth,u.textureHeight,{format:Cn,type:pn,depthTexture:new Si(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let te=0;te<J.removed.length;te++){let me=J.removed[te],Ne=b.indexOf(me);Ne>=0&&(b[Ne]=null,S[Ne].disconnect(me))}for(let te=0;te<J.added.length;te++){let me=J.added[te],Ne=b.indexOf(me);if(Ne===-1){for(let ke=0;ke<S.length;ke++)if(ke>=b.length){b.push(me),Ne=ke;break}else if(b[ke]===null){b[ke]=me,Ne=ke;break}if(Ne===-1)break}let fe=S[Ne];fe&&fe.connect(me)}}let O=new C,V=new C;function j(J,te,me){O.setFromMatrixPosition(te.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);let Ne=O.distanceTo(V),fe=te.projectionMatrix.elements,ke=me.projectionMatrix.elements,lt=fe[14]/(fe[10]-1),ie=fe[14]/(fe[10]+1),le=(fe[9]+1)/fe[5],ue=(fe[9]-1)/fe[5],de=(fe[8]-1)/fe[0],Q=(ke[8]+1)/ke[0],he=lt*de,pe=lt*Q,ve=Ne/(-de+Q),se=ve*-de;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(se),J.translateZ(ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),fe[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let P=lt+ve,Me=ie+ve,Se=he-se,R=pe+(Ne-se),v=le*ie/Me*P,U=ue*ie/Me*P;J.projectionMatrix.makePerspective(Se,R,v,U,P,Me),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,me=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=D.near=I.near=te,k.far=D.far=I.far=me,(N!==k.near||z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,z=k.far),k.layers.mask=J.layers.mask|6,I.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let Ne=J.parent,fe=k.cameras;be(k,Ne);for(let ke=0;ke<fe.length;ke++)be(fe[ke],Ne);fe.length===2?j(k,I,D):k.projectionMatrix.copy(I.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Te(J,k,Ne)};function Te(J,te,me){me===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let st=null;function Qe(J,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ne=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let ie=0;ie<me.length;ie++){let le=me[ie],ue=null;if(f!==null)ue=f.getViewport(le);else{let Q=d.getViewSubImage(u,le);ue=Q.viewport,ie===0&&(e.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(x))}let de=L[ie];de===void 0&&(de=new on,de.layers.enable(ie),de.viewport=new Ft,L[ie]=de),de.matrix.fromArray(le.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(le.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(k.matrix.copy(de.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(de)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let ie=d.getDepthInformation(me[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,s.renderState)}if(fe&&fe.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let ie=0;ie<me.length;ie++){let le=me[ie].camera;if(le){let ue=p[le];ue||(ue=new Io,p[le]=ue);let de=d.getCameraImage(le);ue.sourceTexture=de}}}}for(let me=0;me<S.length;me++){let Ne=b[me],fe=S[me];Ne!==null&&fe!==void 0&&fe.update(Ne,te,c||o)}st&&st(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Ze=new Qp;Ze.setAnimationLoop(Qe),this.setAnimationLoop=function(J){st=J},this.dispose=function(){}}},bM=new nt,r0=new et;r0.set(-1,0,0,0,1,0,0,0,1);function EM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(bM.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(r0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(m(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",M));let A=S.program;n.updateUBOMapping(x,A);let _=e.render.frame;r[x.id]!==_&&(u(x),r[x.id]=_)}function h(x){let S=d();x.__bindingPointIndex=S;let b=i.createBuffer(),A=x.__size,_=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],b=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,w=b.length;_<w;_++){let I=b[_];if(Array.isArray(I))for(let D=0,L=I.length;D<L;D++)f(I[D],_,D,A);else f(I,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,b,A){if(y(x,S,b,A)===!0){let _=x.__offset,w=x.value;if(Array.isArray(w)){let I=0;for(let D=0;D<w.length;D++){let L=w[D],k=p(L);g(L,x.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function y(x,S,b,A){let _=x.value,w=S+"_"+b;if(A[w]===void 0)return typeof _=="number"||typeof _=="boolean"?A[w]=_:ArrayBuffer.isView(_)?A[w]=_.slice():A[w]=_.clone(),!0;{let I=A[w];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return A[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function m(x){let S=x.uniforms,b=0,A=16;for(let w=0,I=S.length;w<I;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,k=D.length;L<k;L++){let N=D[L],z=Array.isArray(N.value)?N.value:[N.value];for(let q=0,F=z.length;q<F;q++){let X=z[q],O=p(X),V=b%A,j=V%O.boundary,be=V+j;b+=j,be!==0&&A-be<O.storage&&(b+=A-be),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=O.storage}}}let _=b%A;return _>0&&(b+=A-_),x.__size=b,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var wM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function AM(){return Ti===null&&(Ti=new Vi(wM,16,16,_s,Vt),Ti.name="DFG_LUT",Ti.minFilter=cn,Ti.magFilter=cn,Ti.wrapS=mi,Ti.wrapT=mi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var pa=class{constructor(e={}){let{canvas:t=yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([uc,hc,cc]),p=new Set([pn,li,Ur,xs,oc,ac]),M=new Uint32Array(4),E=new Int32Array(4),x=new C,S=null,b=null,A=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,L=null,k=null,N=null,z=null;this._outputColorSpace=Gt;let q=0,F=0,X=null,O=-1,V=null,j=new Ft,be=new Ft,Te=null,st=new xe(0),Qe=0,Ze=t.width,J=t.height,te=1,me=null,Ne=null,fe=new Ft(0,0,Ze,J),ke=new Ft(0,0,Ze,J),lt=!1,ie=new Er,le=!1,ue=!1,de=new nt,Q=new C,he=new Ft,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function se(){return X===null?te:1}let P=n;function Me(T,B){return t.getContext(T,B)}let Se,R,v,U,W,G,oe,ae,$,ee,ge,Be,ye,_e,Ue,Ve,je,H,we,re,Ae,De,ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",Kn,!1),P===null){let B="webgl2";if(P=Me(B,T),P===null)throw Me(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(T){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),Ke("WebGLRenderer: "+T.message),T}function qe(){Se=new Nv(P),Se.init(),Ae=new yM(P,Se),R=new Ev(P,Se,e,Ae),v=new _M(P,Se),R.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),k=P.createFramebuffer(),N=P.createFramebuffer(),z=P.createFramebuffer(),U=new Ov(P),W=new sM,G=new vM(P,Se,v,W,R,Ae,U),oe=new Lv(I),ae=new Hg(P),De=new Sv(P,ae),$=new Uv(P,ae,U,De),ee=new Hv(P,$,ae,De,U),H=new Bv(P,R,G),Ue=new Tv(W),ge=new iM(I,oe,Se,R,De,Ue),Be=new EM(I,W),ye=new oM,_e=new dM(Se),je=new Mv(I,oe,v,ee,g,l),Ve=new xM(I,ee,R),ce=new TM(P,U,R,v),we=new bv(P,Se,U),re=new Fv(P,Se,U),U.programs=ge.programs,I.capabilities=R,I.extensions=Se,I.properties=W,I.renderLists=ye,I.shadowMap=Ve,I.state=v,I.info=U}y!==pn&&(w=new Gv(y,t.width,t.height,a,s,r));let Ge=new ju(I,P);this.xr=Ge,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Ze,J,!1))},this.getSize=function(T){return T.set(Ze,J)},this.setSize=function(T,B,K=!0){if(Ge.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=T,J=B,t.width=Math.floor(T*te),t.height=Math.floor(B*te),K===!0&&(t.style.width=T+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Ze*te,J*te).floor()},this.setDrawingBufferSize=function(T,B,K){Ze=T,J=B,te=K,t.width=Math.floor(T*K),t.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(y===pn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,B,K,Y){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,B,K,Y),v.viewport(j.copy(fe).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,B,K,Y){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,B,K,Y),v.scissor(be.copy(ke).multiplyScalar(te).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(T){v.setScissorTest(lt=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,K=!0){let Y=0;if(T){let Z=!1;if(X!==null){let Ie=X.texture.format;Z=m.has(Ie)}if(Z){let Ie=X.texture.type,Fe=p.has(Ie),Pe=je.getClearColor(),He=je.getClearAlpha(),We=Pe.r,ht=Pe.g,mt=Pe.b;Fe?(M[0]=We,M[1]=ht,M[2]=mt,M[3]=He,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=We,E[1]=ht,E[2]=mt,E[3]=He,P.clearBufferiv(P.COLOR,0,E))}else Y|=P.COLOR_BUFFER_BIT}B&&(Y|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Kn,!1),je.dispose(),ye.dispose(),_e.dispose(),W.dispose(),oe.dispose(),ee.dispose(),De.dispose(),ce.dispose(),ge.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",$d),Ge.removeEventListener("sessionend",Jd),Ts.stop()};function Ct(T){T.preventDefault(),So("WebGLRenderer: Context Lost."),D=!0}function Mt(){So("WebGLRenderer: Context Restored."),D=!1;let T=U.autoReset,B=Ve.enabled,K=Ve.autoUpdate,Y=Ve.needsUpdate,Z=Ve.type;qe(),U.autoReset=T,Ve.enabled=B,Ve.autoUpdate=K,Ve.needsUpdate=Y,Ve.type=Z}function Kn(T){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function di(T){let B=T.target;B.removeEventListener("dispose",di),sm(B)}function sm(T){rm(T),W.remove(T)}function rm(T){let B=W.get(T).programs;B!==void 0&&(B.forEach(function(K){ge.releaseProgram(K)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,Y,Z,Ie){B===null&&(B=pe);let Fe=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pe=lm(T,B,K,Y,Z);v.setMaterial(Y,Fe);let He=K.index,We=1;if(Y.wireframe===!0){if(He=$.getWireframeAttribute(K),He===void 0)return;We=2}let ht=K.drawRange,mt=K.attributes.position,ze=ht.start*We,St=(ht.start+ht.count)*We;Ie!==null&&(ze=Math.max(ze,Ie.start*We),St=Math.min(St,(Ie.start+Ie.count)*We)),He!==null?(ze=Math.max(ze,0),St=Math.min(St,He.count)):mt!=null&&(ze=Math.max(ze,0),St=Math.min(St,mt.count));let jt=St-ze;if(jt<0||jt===1/0)return;De.setup(Z,Y,Pe,K,He);let Dt,Rt=we;if(He!==null&&(Dt=ae.get(He),Rt=re,Rt.setIndex(Dt)),Z.isMesh)Y.wireframe===!0?(v.setLineWidth(Y.wireframeLinewidth*se()),Rt.setMode(P.LINES)):Rt.setMode(P.TRIANGLES);else if(Z.isLine){let un=Y.linewidth;un===void 0&&(un=1),v.setLineWidth(un*se()),Z.isLineSegments?Rt.setMode(P.LINES):Z.isLineLoop?Rt.setMode(P.LINE_LOOP):Rt.setMode(P.LINE_STRIP)}else Z.isPoints?Rt.setMode(P.POINTS):Z.isSprite&&Rt.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Se.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let un=Z._multiDrawStarts,Le=Z._multiDrawCounts,xn=Z._multiDrawCount,gt=He?ae.get(He).bytesPerElement:1,Gn=W.get(Y).currentProgram.getUniforms();for(let fi=0;fi<xn;fi++)Gn.setValue(P,"_gl_DrawID",fi),Rt.render(un[fi]/gt,Le[fi])}else if(Z.isInstancedMesh)Rt.renderInstances(ze,jt,Z.count);else if(K.isInstancedBufferGeometry){let un=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Le=Math.min(K.instanceCount,un);Rt.renderInstances(ze,jt,Le)}else Rt.render(ze,jt)};function Zd(T,B,K,Y){L!==null&&T.isNodeMaterial&&L.setObject(Y,T),le===!0&&Ue.setState(T,K,!1),T.transparent===!0&&T.side===xt&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Ga(T,B,Y),T.side=ds,T.needsUpdate=!0,Ga(T,B,Y),T.side=xt):Ga(T,B,Y)}this.compile=function(T,B,K=null){K===null&&(K=T),L!==null&&L.renderStart(T,B,K),b=_e.get(K),b.init(B),_.push(b),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),T!==K&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ue=this.localClippingEnabled,le=Ue.init(this.clippingPlanes,ue),le===!0&&Ue.setGlobalState(this.clippingPlanes,B),L!==null&&Ve.render(b.state.shadowsArray,K,B);let Y=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ie=Z.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){let Pe=Ie[Fe];Zd(Pe,K,B,Z),Y.add(Pe)}else Zd(Ie,K,B,Z),Y.add(Ie)}),b=_.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(T,B,K=null){let Y=this.compile(T,B,K);return new Promise(Z=>{function Ie(){if(Y.forEach(function(Fe){let He=W.get(Fe).currentProgram;(He===void 0||He.isReady())&&Y.delete(Fe)}),Y.size===0){Z(T);return}setTimeout(Ie,10)}Se.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ph=null;function om(T){Ph&&Ph(T)}function $d(){Ts.stop()}function Jd(){Ts.start()}let Ts=new Qp;Ts.setAnimationLoop(om),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(T){Ph=T,Ge.setAnimationLoop(T),T===null?Ts.stop():Ts.start()},Ge.addEventListener("sessionstart",$d),Ge.addEventListener("sessionend",Jd),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,B);let K=Ge.enabled===!0&&Ge.isPresenting===!0,Y=w!==null&&(X===null||K)&&w.begin(I,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(B),B=Ge.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,X),b=_e.get(T,_.length),b.init(B),b.state.textureUnits=G.getTextureUnits(),_.push(b),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ie.setFromProjectionMatrix(de,ii,B.reversedDepth),ue=this.localClippingEnabled,le=Ue.init(this.clippingPlanes,ue),S=ye.get(T,A.length),S.init(),A.push(S),Ge.enabled===!0&&Ge.isPresenting===!0){let Fe=I.xr.getDepthSensingMesh();Fe!==null&&Ih(Fe,B,-1/0,I.sortObjects)}Ih(T,B,0,I.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(me,Ne),ve=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1,ve&&je.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ue.beginShadows();let Z=b.state.shadowsArray;if(Ve.render(Z,T,B),le===!0&&Ue.endShadows(),(Y&&w.hasRenderPass())===!1){let Fe=S.opaque,Pe=S.transmissive;if(b.setupLights(),B.isArrayCamera){let He=B.cameras;if(Pe.length>0)for(let We=0,ht=He.length;We<ht;We++){let mt=He[We];jd(Fe,Pe,T,mt)}ve&&je.render(T);for(let We=0,ht=He.length;We<ht;We++){let mt=He[We];Kd(S,T,mt,mt.viewport)}}else Pe.length>0&&jd(Fe,Pe,T,B),ve&&je.render(T),Kd(S,T,B)}X!==null&&F===0&&(G.updateMultisampleRenderTarget(X),G.updateRenderTargetMipmap(X)),Y&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),De.resetDefaultState(),O=-1,V=null,_.pop(),_.length>0?(b=_[_.length-1],G.setTextureUnits(b.state.textureUnits),le===!0&&Ue.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function Ih(T,B,K,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ie)){Y&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);let Fe=ee.update(T),Pe=T.material;Pe.visible&&S.push(T,Fe,Pe,K,he.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ie))){let Fe=ee.update(T),Pe=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),he.copy(Fe.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){let He=Fe.groups;for(let We=0,ht=He.length;We<ht;We++){let mt=He[We],ze=Pe[mt.materialIndex];ze&&ze.visible&&S.push(T,Fe,ze,K,he.z,mt,B)}}else Pe.visible&&S.push(T,Fe,Pe,K,he.z,null,B)}}let Ie=T.children;for(let Fe=0,Pe=Ie.length;Fe<Pe;Fe++)Ih(Ie[Fe],B,K,Y)}function Kd(T,B,K,Y){let{opaque:Z,transmissive:Ie,transparent:Fe}=T;b.setupLightsView(K),le===!0&&Ue.setGlobalState(I.clippingPlanes,K),Y&&v.viewport(j.copy(Y)),Z.length>0&&za(Z,B,K),Ie.length>0&&za(Ie,B,K),Fe.length>0&&za(Fe,B,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function jd(T,B,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let ze=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Nt(1,1,{generateMipmaps:!0,type:ze?Vt:pn,minFilter:gs,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ie=b.state.transmissionRenderTarget[Y.id],Fe=Y.viewport||j;Ie.setSize(Fe.z*I.transmissionResolutionScale,Fe.w*I.transmissionResolutionScale);let Pe=I.getRenderTarget(),He=I.getActiveCubeFace(),We=I.getActiveMipmapLevel();I.setRenderTarget(Ie),I.getClearColor(st),Qe=I.getClearAlpha(),Qe<1&&I.setClearColor(16777215,.5),I.clear(),ve&&je.render(K);let ht=I.toneMapping;I.toneMapping=ai;let mt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),le===!0&&Ue.setGlobalState(I.clippingPlanes,Y),za(T,K,Y),G.updateMultisampleRenderTarget(Ie),G.updateRenderTargetMipmap(Ie),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let St=0,jt=B.length;St<jt;St++){let Dt=B[St],{object:Rt,geometry:un,material:Le,group:xn}=Dt;if(Le.side===xt&&Rt.layers.test(Y.layers)){let gt=Le.side;Le.side=hn,Le.needsUpdate=!0,Qd(Rt,K,Y,un,Le,xn),Le.side=gt,Le.needsUpdate=!0,ze=!0}}ze===!0&&(G.updateMultisampleRenderTarget(Ie),G.updateRenderTargetMipmap(Ie))}I.setRenderTarget(Pe,He,We),I.setClearColor(st,Qe),mt!==void 0&&(Y.viewport=mt),I.toneMapping=ht}function za(T,B,K){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,Ie=T.length;Z<Ie;Z++){let Fe=T[Z],{object:Pe,geometry:He,group:We}=Fe,ht=Fe.material;ht.allowOverride===!0&&Y!==null&&(ht=Y),Pe.layers.test(K.layers)&&Qd(Pe,B,K,He,ht,We)}}function Qd(T,B,K,Y,Z,Ie){L!==null&&Z.isNodeMaterial&&L.setObject(T,Z),T.onBeforeRender(I,B,K,Y,Z,Ie),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(I,B,K,Y,T,Ie),Z.transparent===!0&&Z.side===xt&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,I.renderBufferDirect(K,B,Y,Z,T,Ie),Z.side=ds,Z.needsUpdate=!0,I.renderBufferDirect(K,B,Y,Z,T,Ie),Z.side=xt):I.renderBufferDirect(K,B,Y,Z,T,Ie),T.onAfterRender(I,B,K,Y,Z,Ie)}function Ga(T,B,K){B.isScene!==!0&&(B=pe);let Y=W.get(T),Z=b.state.lights,Ie=b.state.shadowsArray,Fe=Z.state.version,Pe=ge.getParameters(T,Z.state,Ie,B,K,b.state.lightProbeGridArray),He=ge.getProgramCacheKey(Pe),We=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let ht=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=oe.get(T.envMap||Y.environment,ht),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",di),We=new Map,Y.programs=We);let mt=We.get(He);if(mt!==void 0){if(Y.currentProgram===mt&&Y.lightsStateVersion===Fe)return tf(T,Pe),mt}else Pe.uniforms=ge.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,K,Pe),T.onBeforeCompile(Pe,I),mt=ge.acquireProgram(Pe,He),We.set(He,mt),Y.uniforms=Pe.uniforms;let ze=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=Ue.uniform),tf(T,Pe),Y.needsLights=hm(T),Y.lightsStateVersion=Fe,Y.needsLights&&(ze.ambientLightColor.value=Z.state.ambient,ze.lightProbe.value=Z.state.probe,ze.sunLights.value=Z.state.sun,ze.sunLightShadows.value=Z.state.sunShadow,ze.directionalLights.value=Z.state.directional,ze.directionalLightShadows.value=Z.state.directionalShadow,ze.spotLights.value=Z.state.spot,ze.spotLightShadows.value=Z.state.spotShadow,ze.rectAreaLights.value=Z.state.rectArea,ze.ltc_1.value=Z.state.rectAreaLTC1,ze.ltc_2.value=Z.state.rectAreaLTC2,ze.pointLights.value=Z.state.point,ze.pointLightShadows.value=Z.state.pointShadow,ze.hemisphereLights.value=Z.state.hemi,ze.sunShadowMatrix.value=Z.state.sunShadowMatrix,ze.sunShadowCascade.value=Z.state.sunShadowCascade,ze.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ze.spotLightMatrix.value=Z.state.spotLightMatrix,ze.spotLightMap.value=Z.state.spotLightMap,ze.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=mt,Y.uniformsList=null,mt}function ef(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Br.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function tf(T,B){let K=W.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function am(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let K=0,Y=T.length;K<Y;K++){let Z=T[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function lm(T,B,K,Y,Z){B.isScene!==!0&&(B=pe),G.resetTextureUnits();let Ie=B.fog,Fe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Pe=X===null?I.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:pt.workingColorSpace,He=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=oe.get(Y.envMap||Fe,He),ht=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,mt=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,jt=!!K.morphAttributes.color,Dt=ai;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Dt=I.toneMapping);let Rt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,un=Rt!==void 0?Rt.length:0,Le=W.get(Y),xn=b.state.lights;if(le===!0&&(ue===!0||T!==V)){let Pt=T===V&&Y.id===O;Ue.setState(Y,T,Pt)}let gt=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==xn.state.version||Le.outputColorSpace!==Pe||Z.isBatchedMesh&&Le.batching===!1||!Z.isBatchedMesh&&Le.batching===!0||Z.isBatchedMesh&&Le.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Le.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Le.instancing===!1||!Z.isInstancedMesh&&Le.instancing===!0||Z.isSkinnedMesh&&Le.skinning===!1||!Z.isSkinnedMesh&&Le.skinning===!0||Z.isInstancedMesh&&Le.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Le.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Le.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Le.instancingMorph===!1&&Z.morphTexture!==null||Le.envMap!==We||Y.fog===!0&&Le.fog!==Ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Ue.numPlanes||Le.numIntersection!==Ue.numIntersection)||Le.vertexAlphas!==ht||Le.vertexTangents!==mt||Le.morphTargets!==ze||Le.morphNormals!==St||Le.morphColors!==jt||Le.toneMapping!==Dt||Le.morphTargetsCount!==un||!!Le.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Le.__version=Y.version);let Gn=Le.currentProgram;gt===!0&&(Gn=Ga(Y,B,Z),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,Gn,Le));let fi=!1,ji=!1,Ys=!1,wt=Gn.getUniforms(),Xt=Le.uniforms;if(v.useProgram(Gn.program)&&(fi=!0,ji=!0,Ys=!0),Y.id!==O&&(O=Y.id,ji=!0),Le.needsLights){let Pt=am(b.state.lightProbeGridArray,Z);Le.lightProbeGrid!==Pt&&(Le.lightProbeGrid=Pt,ji=!0)}if(fi||V!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(P,"projectionMatrix",T.projectionMatrix),wt.setValue(P,"viewMatrix",T.matrixWorldInverse);let es=wt.map.cameraPosition;es!==void 0&&es.setValue(P,Q.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,ji=!0,Ys=!0)}if(Le.needsLights&&(xn.state.sunShadowMap.length>0&&wt.setValue(P,"sunShadowMap",xn.state.sunShadowMap,G),xn.state.directionalShadowMap.length>0&&wt.setValue(P,"directionalShadowMap",xn.state.directionalShadowMap,G),xn.state.spotShadowMap.length>0&&wt.setValue(P,"spotShadowMap",xn.state.spotShadowMap,G),xn.state.pointShadowMap.length>0&&wt.setValue(P,"pointShadowMap",xn.state.pointShadowMap,G)),Z.isSkinnedMesh){wt.setOptional(P,Z,"bindMatrix"),wt.setOptional(P,Z,"bindMatrixInverse");let Pt=Z.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(P,"boneTexture",Pt.boneTexture,G))}Z.isBatchedMesh&&(wt.setOptional(P,Z,"batchingTexture"),wt.setValue(P,"batchingTexture",Z._matricesTexture,G),wt.setOptional(P,Z,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",Z._indirectTexture,G),wt.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",Z._colorsTexture,G));let Qi=K.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&H.update(Z,K,Gn),(ji||Le.receiveShadow!==Z.receiveShadow)&&(Le.receiveShadow=Z.receiveShadow,wt.setValue(P,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Xt.envMapIntensity.value=B.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=AM()),ji){if(wt.setValue(P,"toneMappingExposure",I.toneMappingExposure),Le.needsLights&&cm(Xt,Ys),Ie&&Y.fog===!0&&Be.refreshFogUniforms(Xt,Ie),Be.refreshMaterialUniforms(Xt,Y,te,J,b.state.transmissionRenderTarget[T.id]),Le.needsLights&&Le.lightProbeGrid){let Pt=Le.lightProbeGrid;Xt.probesSH.value=Pt.texture,Xt.probesMin.value.copy(Pt.boundingBox.min),Xt.probesMax.value.copy(Pt.boundingBox.max),Xt.probesResolution.value.copy(Pt.resolution)}Br.upload(P,ef(Le),Xt,G)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Br.upload(P,ef(Le),Xt,G),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&wt.setValue(P,"center",Z.center),wt.setValue(P,"modelViewMatrix",Z.modelViewMatrix),wt.setValue(P,"normalMatrix",Z.normalMatrix),wt.setValue(P,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Pt=Y.uniformsGroups;for(let es=0,Zs=Pt.length;es<Zs;es++){let sf=Pt[es];ce.update(sf,Gn),ce.bind(sf,Gn)}}return Gn}function cm(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function hm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,B,K){let Y=W.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=B,W.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let K=W.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){X=T,q=B,F=K;let Y=null,Z=!1,Ie=!1;if(T){let Pe=W.get(T);if(Pe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,Pe.__webglFramebuffer),j.copy(T.viewport),be.copy(T.scissor),Te=T.scissorTest,v.viewport(j),v.scissor(be),v.setScissorTest(Te),O=-1;return}else if(Pe.__webglFramebuffer===void 0)G.setupRenderTarget(T);else if(Pe.__hasExternalTextures)G.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ht=T.depthTexture;if(Pe.__boundDepthTexture!==ht){if(ht!==null&&W.has(ht)&&(T.width!==ht.image.width||T.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(T)}}let He=T.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ie=!0);let We=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[B])?Y=We[B][K]:Y=We[B],Z=!0):T.samples>0&&G.useMultisampledRTT(T)===!1?Y=W.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[K]:Y=We,j.copy(T.viewport),be.copy(T.scissor),Te=T.scissorTest}else j.copy(fe).multiplyScalar(te).floor(),be.copy(ke).multiplyScalar(te).floor(),Te=lt;if(K!==0&&(Y=k),v.bindFramebuffer(P.FRAMEBUFFER,Y)&&v.drawBuffers(T,Y),v.viewport(j),v.scissor(be),v.setScissorTest(Te),Z){let Pe=W.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,K)}else if(Ie){let Pe=B;for(let He=0;He<T.textures.length;He++){let We=W.get(T.textures[He]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+He,We.__webglTexture,K,Pe)}}else if(T!==null&&K!==0){let Pe=W.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,K)}O=-1};function nf(T){let B=W.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=R.textureFormatReadable(T.format),B.__typeReadable=R.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,K,Y,Z,Ie,Fe,Pe=0){if(!(T&&T.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He){v.bindFramebuffer(P.FRAMEBUFFER,He);try{let We=T.textures[Pe],ht=We.format,mt=We.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pe);let ze=nf(We);if(ze.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&K>=0&&K<=T.height-Z&&P.readPixels(B,K,Y,Z,Ae.convert(ht),Ae.convert(mt),Ie)}finally{let We=X!==null?W.get(X).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,Y,Z,Ie,Fe,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(He=He[Fe]),He)if(B>=0&&B<=T.width-Y&&K>=0&&K<=T.height-Z){v.bindFramebuffer(P.FRAMEBUFFER,He);let We=T.textures[Pe],ht=We.format,mt=We.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pe);let ze=nf(We);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,Ie.byteLength,P.STREAM_READ),P.readPixels(B,K,Y,Z,Ae.convert(ht),Ae.convert(mt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let jt=X!==null?W.get(X).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,jt);let Dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Sp(P,Dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ie),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(St),P.deleteSync(Dt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(T.image.width*Y),Ie=Math.floor(T.image.height*Y),Fe=B!==null?B.x:0,Pe=B!==null?B.y:0;G.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Fe,Pe,Z,Ie),v.unbindTexture()},this.copyTextureToTexture=function(T,B,K=null,Y=null,Z=0,Ie=0){let Fe,Pe,He,We,ht,mt,ze,St,jt,Dt=T.isCompressedTexture?T.mipmaps[Ie]:T.image;if(K!==null)Fe=K.max.x-K.min.x,Pe=K.max.y-K.min.y,He=K.isBox3?K.max.z-K.min.z:1,We=K.min.x,ht=K.min.y,mt=K.isBox3?K.min.z:0;else{let Xt=Math.pow(2,-Z);Fe=Math.floor(Dt.width*Xt),Pe=Math.floor(Dt.height*Xt),T.isDataArrayTexture?He=Dt.depth:T.isData3DTexture?He=Math.floor(Dt.depth*Xt):He=1,We=0,ht=0,mt=0}Y!==null?(ze=Y.x,St=Y.y,jt=Y.z):(ze=0,St=0,jt=0);let Rt=Ae.convert(B.format),un=Ae.convert(B.type),Le;B.isData3DTexture?(G.setTexture3D(B,0),Le=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(G.setTexture2DArray(B,0),Le=P.TEXTURE_2D_ARRAY):(G.setTexture2D(B,0),Le=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let xn=v.getParameter(P.UNPACK_ROW_LENGTH),gt=v.getParameter(P.UNPACK_IMAGE_HEIGHT),Gn=v.getParameter(P.UNPACK_SKIP_PIXELS),fi=v.getParameter(P.UNPACK_SKIP_ROWS),ji=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,We),v.pixelStorei(P.UNPACK_SKIP_ROWS,ht),v.pixelStorei(P.UNPACK_SKIP_IMAGES,mt);let Ys=T.isDataArrayTexture||T.isData3DTexture,wt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Xt=W.get(T),Qi=W.get(B),Pt=W.get(Xt.__renderTarget),es=W.get(Qi.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,Pt.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Zs=0;Zs<He;Zs++)Ys&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(T).__webglTexture,Z,mt+Zs),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(B).__webglTexture,Ie,jt+Zs)),P.blitFramebuffer(We,ht,Fe,Pe,ze,St,Fe,Pe,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||W.has(T)){let Xt=W.get(T),Qi=W.get(B);v.bindFramebuffer(P.READ_FRAMEBUFFER,N),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,z);for(let Pt=0;Pt<He;Pt++)Ys?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,Z,mt+Pt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,Z),wt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qi.__webglTexture,Ie,jt+Pt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qi.__webglTexture,Ie),Z!==0?P.blitFramebuffer(We,ht,Fe,Pe,ze,St,Fe,Pe,P.COLOR_BUFFER_BIT,P.NEAREST):wt?P.copyTexSubImage3D(Le,Ie,ze,St,jt+Pt,We,ht,Fe,Pe):P.copyTexSubImage2D(Le,Ie,ze,St,We,ht,Fe,Pe);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else wt?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Le,Ie,ze,St,jt,Fe,Pe,He,Rt,un,Dt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,Ie,ze,St,jt,Fe,Pe,He,Rt,Dt.data):P.texSubImage3D(Le,Ie,ze,St,jt,Fe,Pe,He,Rt,un,Dt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ie,ze,St,Fe,Pe,Rt,un,Dt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ie,ze,St,Dt.width,Dt.height,Rt,Dt.data):P.texSubImage2D(P.TEXTURE_2D,Ie,ze,St,Fe,Pe,Rt,un,Dt);v.pixelStorei(P.UNPACK_ROW_LENGTH,xn),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Gn),v.pixelStorei(P.UNPACK_SKIP_ROWS,fi),v.pixelStorei(P.UNPACK_SKIP_IMAGES,ji),Ie===0&&B.generateMipmaps&&P.generateMipmap(Le),v.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&G.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?G.setTextureCube(T,0):T.isData3DTexture?G.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?G.setTexture2DArray(T,0):G.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){q=0,F=0,X=null,v.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};function zr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new dt,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=o0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let g=o0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function o0(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ut(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){let y=h.getComponent(u,g);a.setComponent(u+d,g,y)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ed(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,E=a.length;M<E;M++){let x=a[M],S=i.attributes[x];l[x]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let b=i.morphAttributes[x];b&&(c[x]||(c[x]=[]),b.forEach((A,_)=>{let w=new A.array.constructor(A.count*A.itemSize);c[x][_]=new A.constructor(w,A.itemSize,A.normalized)}))}let f=e*.5,g=Math.log10(1/e),y=Math.pow(10,g),m=f*y;for(let M=0;M<r;M++){let E=n?n.getX(M):M,x="";for(let S=0,b=a.length;S<b;S++){let A=a[S],_=i.getAttribute(A),w=_.itemSize;for(let I=0;I<w;I++)x+=`${Math.trunc(_[d[I]](E)*y+m)},`}if(x in t)h.push(t[x]);else{for(let S=0,b=a.length;S<b;S++){let A=a[S],_=i.getAttribute(A),w=i.morphAttributes[A],I=_.itemSize,D=l[A],L=c[A];for(let k=0;k<I;k++){let N=d[k],z=u[k];if(D[z](o,_[N](E)),w)for(let q=0,F=w.length;q<F;q++)L[q][z](o,w[q][N](E))}}t[x]=o,h.push(o),o++}}let p=i.clone();for(let M in i.attributes){let E=l[M];if(p.setAttribute(M,new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)),M in c)for(let x=0;x<c[M].length;x++){let S=c[M][x];p.morphAttributes[M][x]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var Kc=[[16118246,16118246,16777215],[15976762,15976762,16507786],[9136711,3108414,13218444],[10263716,9079443,13816536],[7227950,7227950,11569762],[15327432,13081180,16183520],[3881792,3881792,7039858],[14263146,14263146,15782568]],jc=[8003106,1981030,2906672,5913120,4991582,6969884,1858138,3026484],Qc=[11739178,2050720,14721056,9054858,2787930],ma=[1906708,5913120,8003106,1981030,2906672,4991582],ga=[11739178,2050720,1906708,9054858,2787930,14721056],u0={PLUMAGE:Kc,COATS:jc,SCARVES:Qc,HAT_COLORS:ma,BANDANA_COLORS:ga};function RM(i,e){if(e)return e;let t=(i>>>15)%3;return{body:(i>>>3)%Kc.length,top:"coat",topColor:i%jc.length,hat:t===0?"feather":t===1?"tricorn":"bandana",hatColor:(i>>>18)%5,patch:(i>>>9)%3===0,scarf:1+(i>>>20)%Qc.length,earring:(i>>>11)%3===0,hook:!1}}var td={};function CM(i){if(td[i])return td[i];let e=document.createElement("canvas");e.width=16,e.height=64;let t=e.getContext("2d");t.fillStyle="#f2ecdc",t.fillRect(0,0,16,64),t.fillStyle="#"+new xe(i).getHexString();for(let s=0;s<64;s+=16)t.fillRect(0,s,16,8);let n=new Xn(e);return n.colorSpace=Gt,n.wrapS=n.wrapT=en,td[i]=n,n}var nd={};function PM(i){if(nd[i])return nd[i];let e=document.createElement("canvas");e.width=64,e.height=16;let t=e.getContext("2d"),n=new xe(i);t.fillStyle="#"+n.getHexString(),t.fillRect(0,0,64,16),t.fillStyle="rgba(0,0,0,0.22)";for(let r=0;r<64;r+=4)t.fillRect(r,0,1.5,16);t.fillStyle="rgba(255,255,255,0.08)";for(let r=2;r<64;r+=4)t.fillRect(r,0,1,16);let s=new Xn(e);return s.colorSpace=Gt,s.wrapS=s.wrapT=en,s.repeat.set(10,1),nd[i]=s,s}var id=new C(1,.96,1.06);function a0(i,e){return i.clone().normalize().multiplyScalar(e).multiply(id)}function l0(i,e,t){let n=[];for(let s=0;s<i.length-1;s++){let r=i[s].clone().normalize(),o=i[s+1].clone().normalize(),a=r.angleTo(o);for(let l=0;l<t;l++){let c=l/t,h=a<1e-4?r.clone():r.clone().multiplyScalar(Math.sin((1-c)*a)/Math.sin(a)).add(o.clone().multiplyScalar(Math.sin(c*a)/Math.sin(a)));n.push(a0(h,e))}}return n.push(a0(i[i.length-1],e)),new ln(n)}function IM(i,e,t){let n=new Wi;n.moveTo(-i,0),n.bezierCurveTo(-i*.9,e*.75,-i*.45,e,0,e),n.bezierCurveTo(i*.45,e,i*.9,e*.75,i,0),n.quadraticCurveTo(0,e*.18,-i,0);let s=new as(n,{depth:t,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1,curveSegments:20});s.translate(0,0,-t/2);let r=[];return n.curves.slice(0,2).forEach((o,a)=>o.getPoints(20).forEach((l,c)=>{(a===0||c>0)&&r.push(new C(l.x,l.y,0))})),{geo:s,arc:r}}var DM=15897130;function LM(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function c0(i,e){return new oi({color:i,roughness:.78,sheen:.6,sheenRoughness:.6,sheenColor:new xe(e||16777215)})}function Gr(i){return new oi({color:i,roughness:.85,sheen:.8,sheenRoughness:.5,sheenColor:new xe(i).lerp(new xe(16777215),.35)})}function Xe(i,e,t=!0,n=!0){let s=new rt(i,e);return s.castShadow=t,s.receiveShadow=n,s}var ci=[[0,0],[.09,.004],[.155,.022],[.2,.06],[.222,.11],[.226,.16],[.217,.21],[.196,.26],[.168,.305],[.142,.345],[.124,.385],[.114,.425],[.108,.465],[.104,.5]];function Mn(i,e,t,n){return new Xi(i.map(([s,r])=>new ne(s,r)),e,t||0,n===void 0?Math.PI*2:n)}function Ai(i){for(let e=1;e<ci.length;e++){let[t,n]=ci[e],[s,r]=ci[e-1];if(i<=n)return s+(t-s)*((i-r)/(n-r||1))}return ci[ci.length-1][0]}function Jc(i,e,t,n){let s=[];for(let o=0;o<=6;o++){let a=-Math.PI/2+o/6*(Math.PI/2);s.push([Math.cos(a)*i,-t/2+Math.sin(a)*i+i])}for(let o=0;o<=6;o++){let a=o/6*(Math.PI/2);s.push([Math.cos(a)*e,t/2-e+Math.sin(a)*e])}return Mn(s,n||12)}function NM(i,e,t,n){let s=new ct(1,28,16),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=r.getZ(o),h=Math.max(0,-c);a*=e*(.85+.45*h),l*=t*(1-.35*h),n?l-=.004*h:l+=.012*h*h+(l>0?0:.004),c*=i,r.setXYZ(o,a,l,c)}return s.computeVertexNormals(),s}function UM(i,e,t){let r=[],o=[],a=[];for(let c=0;c<=7;c++){let h=c/7;for(let d=0;d<=72;d++){let u=d/72*Math.PI*2,f=(1-Math.cos(3*(u-Math.PI)))/2,g=e*(1-.2*f),y=i+(g-i)*h,m=t*Math.pow(h,1.6)*(.3+.7*f);r.push(Math.sin(u)*y,m,Math.cos(u)*y),a.push(d/72,h)}}for(let c=0;c<7;c++)for(let h=0;h<72;h++){let d=c*73+h,u=d+72+1;o.push(d,u,d+1,u,u+1,d+1)}let l=new dt;return l.setAttribute("position",new Oe(r,3)),l.setAttribute("uv",new Oe(a,2)),l.setIndex(o),l.computeVertexNormals(),{geo:l,edge:c=>{let h=(1-Math.cos(3*(c-Math.PI)))/2,d=e*(1-.2*h);return new C(Math.sin(c)*d,t*(.3+.7*h),Math.cos(c)*d)}}}function FM(){let i=new Wi;i.moveTo(0,.01),i.quadraticCurveTo(-.03,-.01,-.055,-.075),i.quadraticCurveTo(-.035,-.07,-.025,-.085),i.quadraticCurveTo(-.01,-.075,0,-.095),i.quadraticCurveTo(.01,-.075,.025,-.085),i.quadraticCurveTo(.035,-.07,.055,-.075),i.quadraticCurveTo(.03,-.01,0,.01);let e=new as(i,{depth:.008,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2,curveSegments:6});return e.rotateX(Math.PI/2),e}function h0(){let i=document.createElement("canvas");i.width=64,i.height=256;let e=i.getContext("2d");e.clearRect(0,0,64,256),e.strokeStyle="#ffffff",e.lineWidth=3,e.beginPath(),e.moveTo(32,250),e.lineTo(32,8),e.stroke();for(let n=20;n<240;n+=5){let s=26*Math.sin(n/256*Math.PI)+4;e.beginPath(),e.moveTo(32,n+6),e.lineTo(32-s,n-4),e.stroke(),e.beginPath(),e.moveTo(32,n+6),e.lineTo(32+s,n-4),e.stroke()}let t=new Xn(i);return t.colorSpace=Gt,t}var kr=null;function sd(i,e,t,n){let s=LM(i)>>>0,r=RM(s,n),o=new $e,a=Kc[r.body%Kc.length],l=jc[r.topColor%jc.length],c=c0(a[0],16777215),h=c0(a[1],16777215),d=Gr(l),u=new oi({color:DM,roughness:.4,clearcoat:.6,clearcoatRoughness:.35}),f=new tt({color:14200394,roughness:.3,metalness:.9}),g=new tt({color:1775122,roughness:.7}),y=Gr(15920348),m={g:o,coat:d,skin:c},p=new oi({map:CM(l),roughness:.85,sheen:.6,sheenRoughness:.5}),M=r.top==="coat"||r.top==="officer",E=M?d:r.top==="shirt"?p:y,x=Xe(t.barrelGeometry(.17,.2,.46),t.woodMat());x.position.set(0,.23,.05),e||o.add(x),m.stool=x;let S=new $e;if(o.add(S),m.body=S,S.position.set(0,.46,.04),m.shoulder={x:.195,y:.46+.31,z:0},!e){let q=Jc(.02,.017,.16,8),F=FM();[-.075,.075].forEach(se=>{let P=Xe(q,u);P.position.set(se,-.02,-.17),P.rotation.x=.25,S.add(P);let Me=Xe(F,u);Me.position.set(se,-.1,-.2),Me.rotation.set(-.35,se>0?-.15:.15,0),S.add(Me)});let X=new $e;S.add(X),m.torso=X;let O=Mn(ci,30);O.scale(1,1,1.1);let V=O.attributes.position,j=new Float32Array(V.count*3),be=new xe(a[0]),Te=new xe(a[2]),st=new xe;for(let se=0;se<V.count;se++){let P=V.getX(se),Me=V.getY(se),Se=V.getZ(se),R=Math.hypot(P,Se/1.1)||1,v=Math.max(0,-Se/1.1/R),U=Math.pow(v,1.6)*Pn.smoothstep(Me,.02,.12)*(1-Pn.smoothstep(Me,.32,.44));st.copy(be).lerp(Te,U),j[se*3]=st.r,j[se*3+1]=st.g,j[se*3+2]=st.b}O.setAttribute("color",new Ut(j,3));let Qe=c.clone();Qe.color.set(16777215),Qe.vertexColors=!0,X.add(Xe(O,Qe));let Ze=Xe(Mn([[0,0],[.055,.02],[.072,.06],[.06,.11],[.03,.15],[0,.165]],16),c);Ze.scale.set(1.35,1,.55),Ze.position.set(0,.035,.2),Ze.rotation.x=1.2,X.add(Ze);let J=r.top==="shirt"||r.top==="sailor"?0:r.top==="vest"?1.25:r.top==="officer"?.8:.95,te=(se,P,Me)=>new C(Math.sin(Me)*se,P,Math.cos(Me)*se*1.1);if(r.top==="sailor"){let se=ci.filter(([,v])=>v>=.06&&v<=.4).map(([v,U])=>[v*1.05+.004,U]);se.unshift([Ai(.035)*1.05+.01,.035]);let P=Mn(se,40);P.scale(1,1,1.1),X.add(Xe(P,y));let Me=Ai(.41)*1.05+.006,Se=Mn([[Me-.002,.425],[Me+.02,.41],[Me+.05,.38],[Me+.072,.34],[Me+.078,.315]],40,Math.PI+.55,Math.PI*2-1.1);Se.scale(1,1,1.1);let R=d.clone();R.side=xt,X.add(Xe(Se,R)),[.006,.018].forEach(v=>{let U=[];for(let W=0;W<=30;W++){let G=Math.PI+.55+W/30*(Math.PI*2-1.1);U.push(te(Me+.078-v*.9+.002,.315+v*1.2,G))}X.add(Xe(new ri(new ln(U),60,.0028,4,!1),y,!1,!1))})}else if(r.top==="shirt"){let se=ci.filter(([,v])=>v>=.06&&v<=.4).map(([v,U])=>[v*1.05+.004,U]);se.unshift([Ai(.035)*1.05+.01,.035]);let P=Mn(se,40);P.scale(1,1,1.1);let Me=P.attributes.uv;for(let v=0;v<Me.count;v++)Me.setY(v,Me.getY(v)*7);let Se=p;X.add(Xe(P,Se));let R=Xe(new It(Ai(.4)*1.05+.006,.008,6,32),Gr(l));R.rotation.x=Math.PI/2,R.scale.set(1,1.1,1),R.position.y=.4,X.add(R)}else{let se=r.top==="vest"?.36:.39,P=ci.filter(([,G])=>G>=.06&&G<=se).map(([G,oe])=>[G*1.07+.004,oe]);P.unshift([Ai(.035)*1.07+.012,r.top==="vest"?.075:.035]),r.top==="vest"&&P.splice(1,P.findIndex(([,G])=>G>.09)-1);let Me=Mn(P,40,Math.PI+J/2,Math.PI*2-J);Me.scale(1,1,1.1);let Se=d.clone();Se.side=xt,X.add(Xe(Me,Se));let R=[],v=P.length;for(let G=v-1;G>=0;G--)R.push(te(P[G][0]+.003,P[G][1],Math.PI+J/2));for(let G=1;G<24;G++){let oe=Math.PI+J/2+G/24*(Math.PI*2-J);R.push(te(P[0][0]+.003,P[0][1],oe))}for(let G=0;G<v;G++)R.push(te(P[G][0]+.003,P[G][1],Math.PI-J/2));let U=Xe(new ri(new ln(R),90,.007,5,!1),f,!1,!1);if(X.add(U),(r.top==="officer"?[.17,.22,.27,.32]:[.14,.21].concat(r.top==="coat"?[.28]:[])).forEach(G=>[1,-1].forEach(oe=>{let ae=Xe(new ct(r.top==="officer"?.009:.011,8,6),f,!1,!1);ae.position.copy(te(Ai(G)*1.07+.012,G,Math.PI+oe*(J/2+(r.top==="officer"?.1:.12)))),X.add(ae)})),r.top==="officer"){[1,-1].forEach(ae=>{let $=new $e;$.position.set(ae*.165,.37,0),$.rotation.z=-ae*.55,X.add($);let ee=Xe(new ot(.05,.055,.014,20),f,!1,!1);ee.scale.set(1,1,.8),$.add(ee);let ge=Xe(new ot(.055,.062,.034,24,1,!0),new tt({color:14200394,roughness:.5,metalness:.7,side:xt}),!1,!1);ge.scale.set(1,1,.8),ge.position.y=-.018,$.add(ge)});let G=ci.filter(([,ae])=>ae>=.14&&ae<=.4).map(([ae,$])=>[ae*1.035+.003,$]),oe=Mn(G,24,Math.PI-J/2-.05,J+.1);oe.scale(1,1,1.1),X.add(Xe(oe,y))}if(M){let G=Ai(.385)*1.07+.004,oe=Mn([[G-.004,.37],[G+.006,.385],[G+.016,.415],[G+.03,.44],[G+.024,.446]],36,Math.PI+J/2+.25,Math.PI*2-J-.5);oe.scale(1,1,1.1),X.add(Xe(oe,Se))}else{let G=ci.filter(([,ae])=>ae>=.3&&ae<=.41).map(([ae,$])=>[ae*1.03+.002,$]),oe=Mn(G,32);oe.scale(1,1,1.1),X.add(Xe(oe,y))}}let me=Xe(new It(Ai(.12)*1.1+.004,.016,6,40),new tt({color:3022096,roughness:.55}));me.rotation.x=Math.PI/2,me.scale.set(1,1.1,1),me.position.y=.12,X.add(me);let Ne=Xe(new It(.022,.006,4,4),f,!1,!1);if(Ne.rotation.z=Math.PI/4,Ne.position.set(0,.12,-(Ai(.12)*1.1+.004)*1.1-.012),X.add(Ne),r.scarf>0){let se=Gr(Qc[(r.scarf-1)%Qc.length]),P=Xe(new It(Ai(.425)*1.02+.006,.02,8,32),se);P.rotation.x=Math.PI/2-.08,P.scale.set(1,1.1,1),P.position.set(0,.425,0),X.add(P);let Me=Xe(new ct(.024,10,8),se);Me.position.set(.02,.41,-.13),X.add(Me);let Se=Xe(Mn([[0,0],[.02,.018],[.018,.055],[0,.08]],8),se);Se.scale.set(1,1,.45),Se.position.set(.025,.4,-.135),Se.rotation.set(Math.PI-.25,0,.25),X.add(Se)}let fe=new $e;fe.position.set(0,.565,-.025),X.add(fe),m.head=fe;let ke=Xe(new ct(.14,28,20),h);ke.scale.set(1,.96,1.06),fe.add(ke);let lt=Xe(NM(.115,.06,.034,!1),u);lt.position.set(0,-.036,-.16),lt.rotation.x=-.05,fe.add(lt);let ie=Xe(new It(.052,.0025,4,24,Math.PI*.8),new tt({color:9058832,roughness:.7}),!1,!1);ie.rotation.set(Math.PI/2,0,Math.PI*1.1),ie.scale.set(1.1,1.9,1),ie.position.set(0,-.041,-.155),fe.add(ie);let le=new tt({color:10768922,roughness:.6});[-1,1].forEach(se=>{let P=Xe(new ct(.0032,6,4),le,!1,!1);P.scale.set(1,.5,2.2),P.position.set(se*.013,-.011,-.212),fe.add(P)});let ue=new tt({color:16777215,roughness:.3}),de=new tt({color:723723,roughness:.15}),Q=new kt({color:16777215}),he=new tt({color:new xe(a[1]).multiplyScalar(.3),roughness:.85}),pe=!!r.patch;m.lids=[],m.brows=[],[-1,1].forEach((se,P)=>{let Me=new C(se*.42,.2,-.885).normalize(),Se=new $e;if(Se.position.copy(Me).multiplyScalar(.125),Se.lookAt(Se.position.clone().add(Me)),fe.add(Se),pe&&P===0){let $=new tt({color:1380622,roughness:.55}),ee=new $e;ee.scale.copy(id),fe.add(ee);let ge=.3,Be=Xe(new ct(.1435,24,8,0,Math.PI*2,0,ge),$,!1,!1);Be.quaternion.setFromUnitVectors(new C(0,1,0),Me),ee.add(Be);let ye=Xe(new It(.1435*Math.sin(ge),.0035,5,28),$,!1,!1);ye.rotation.x=Math.PI/2,ye.position.y=.1435*Math.cos(ge);let _e=new $e;_e.add(ye),_e.quaternion.copy(Be.quaternion),ee.add(_e);let Ue=.1432,Ve=l0([Me.clone().add(new C(.12,.3,0)),new C(-se*.25,.8,-.55),new C(-se*.35,.75,.55),new C(0,.2,1)],Ue,12),je=l0([Me.clone().add(new C(se*.3,-.05,0)),new C(se*1,.1,-.15),new C(se*.7,.12,.7),new C(0,.2,1)],Ue,12);[Ve,je].forEach(H=>fe.add(Xe(new ri(H,48,.0042,5,!1),$,!1,!1)));return}let R=Xe(new ct(.04,16,12),ue,!1,!1);R.scale.set(1,1.15,.7),Se.add(R);let v=Xe(new ct(.018,14,10),de,!1,!1);v.position.set(-se*.003,-.002,.021),v.scale.set(1,1.2,.5),Se.add(v);let U=new rt(new ct(.0055,8,6),Q);U.position.set(-se*.007+.004,.01,.027),Se.add(U);let W=Xe(new ct(.0405,20,10,0,Math.PI*2,0,Math.PI*.5),h,!1,!1);W.scale.set(1.04,1.2,.76);let G=new $e;G.add(W),Se.add(G);let oe={pivot:G,open:-1.5,closed:1.52};G.rotation.x=oe.open,m.lids.push(oe);let ae=Xe(Jc(.0095,.007,.068,6),he,!1,!1);ae.rotation.set(0,0,Math.PI/2+se*.18),ae.position.set(0,.058,.004),Se.add(ae),m.brows.push({m:ae,sd:se,y0:.058,z0:ae.rotation.z,lift:0,tilt:0})});let ve=r.hat==="feather"?0:r.hat==="tricorn"?1:r.hat==="bandana"?2:r.hat==="captain"?4:r.hat==="beanie"?5:3;if(ve===4){let se=Gr(ma[r.hatColor%ma.length]),P=new $e;P.position.set(0,.085,.01),P.rotation.x=-.1,fe.add(P),m.hat=P;let Me=Xe(new ct(.128,28,10,0,Math.PI*2,0,Math.PI/2),se);Me.scale.set(1,.62,1.02),P.add(Me);let Se=.24,R=.15;[-1,1].forEach(ae=>{let $=IM(Se,R,.012),ee=Xe($.geo,se);ee.position.set(0,0,ae*.045),ee.rotation.x=ae*.2,P.add(ee);let ge=Xe(new ri(new ln($.arc),60,.0095,6,!1),f,!1,!1);ge.position.copy(ee.position),ge.rotation.copy(ee.rotation),P.add(ge)});let v=Xe(new ot(.026,.026,.008,18),new tt({color:11017250,roughness:.6}),!1,!1);v.rotation.x=Math.PI/2-.2,v.position.set(.1,.07,-.058),P.add(v);let U=Xe(new ct(.009,8,6),f,!1,!1);U.position.set(.1,.07,-.064),P.add(U),kr||(kr=h0());let W=new Zt(.06,.24,1,8),G=W.attributes.position;for(let ae=0;ae<G.count;ae++){let $=G.getY(ae)+.12;G.setZ(ae,$*$*.9)}W.computeVertexNormals();let oe=new rt(W,new tt({map:kr,color:15921126,alphaTest:.4,side:xt,roughness:.9}));oe.position.set(.02,.19,0),oe.rotation.set(0,Math.PI/2,-.35),P.add(oe)}else if(ve===5){let se=new tt({map:PM(ga[r.hatColor%ga.length]),roughness:.95}),P=new $e;P.scale.copy(id),P.rotation.x=.16,P.position.y=.006,fe.add(P);let Me=Math.PI*.4,Se=.15,R=Xe(new ct(Se,32,14,0,Math.PI*2,0,Me),se);R.scale.set(1,1.12,1),P.add(R);let v=Se*Math.sin(Me),U=Se*Math.cos(Me)*1.12,W=Xe(Mn([[v-.002,U+.036],[v+.009,U+.034],[v+.014,U+.02],[v+.013,U+.002],[v+.006,U-.008],[v-.004,U-.006]],40),se);P.add(W)}else if(ve<2){let se=Gr(ma[r.hatColor%ma.length]),P=new $e;P.position.set(0,.1,.008),P.rotation.x=-.12,fe.add(P),m.hat=P;let Me=UM(.098,.205,.085),Se=Xe(Me.geo,se.clone());Se.material.side=xt,P.add(Se);let R=Xe(Mn([[.118,0],[.117,.04],[.108,.078],[.083,.105],[.044,.12],[0,.123]],28),se);R.scale.set(1,1,1.05),P.add(R);let v=[];for(let G=0;G<96;G++)v.push(Me.edge(G/96*Math.PI*2));P.add(Xe(new ri(new ln(v,!0),160,.0048,5,!0),f,!1,!1));let U=Xe(new It(.118,.0075,5,32),f,!1,!1);U.rotation.x=Math.PI/2,U.position.y=.012,U.scale.set(1,1.05,1),P.add(U);let W=new rt(new Zt(.07,.07),new kt({map:t.skullTexture(),transparent:!0,depthWrite:!1}));if(W.position.set(0,.058,-.126),W.rotation.set(-.1,Math.PI,0),P.add(W),ve===0){kr||(kr=h0());let G=new Zt(.065,.3,1,10),oe=G.attributes.position;for(let $=0;$<oe.count;$++){let ee=oe.getY($)+.15;oe.setZ($,ee*ee*1.1)}G.computeVertexNormals();let ae=new rt(G,new tt({map:kr,color:[12597547,15921126,2779824][s%3],alphaTest:.4,side:xt,roughness:.9}));ae.castShadow=!0,ae.position.set(.095,.15,.06),ae.rotation.set(-.5,.4,-.55),P.add(ae)}}else if(ve===2){let se=new oi({map:t.dotTexture(ga[r.hatColor%ga.length]),roughness:.85,sheen:.8,sheenRoughness:.5}),P=Xe(new ct(.147,30,14,0,Math.PI*2,0,Math.PI*.4),se);P.scale.set(1,.97,1.07),P.rotation.x=.4,P.position.y=.006,fe.add(P);let Me=Xe(new It(.147*Math.sin(Math.PI*.4),.007,6,40),se);Me.rotation.x=Math.PI/2,Me.position.y=.147*Math.cos(Math.PI*.4);let Se=new $e;Se.add(Me),Se.scale.set(1,.97,1.07),Se.rotation.x=.4,Se.position.y=.006,fe.add(Se);let R=Xe(new ct(.03,10,8),se);R.position.set(0,.04,.15),fe.add(R),[-1,1].forEach(v=>{let U=Xe(Mn([[0,0],[.024,.02],[.022,.075],[.004,.12]],8),se);U.scale.set(1,1,.35),U.position.set(v*.018,.03,.16),U.rotation.set(Math.PI-.45,0,v*.35),fe.add(U)})}if(r.earring){let se=Xe(new It(.019,.0035,6,20),f,!1,!1);se.position.set(.128,-.07,.02),se.rotation.set(0,Math.PI/2-.3,0),fe.add(se)}}let b=e?.3:.22,A=e?.3:.22,_=Jc(.052,.045,b,12),w=Jc(.042,.05,A,12),I=Mn([[.04,-.03],[.056,-.028],[.06,0],[.056,.022],[.042,.024]],16),D=new It(.058,.006,5,20);D.rotateX(Math.PI/2),D.translate(0,.022,0);let L=(()=>{let q=new ct(1,16,10);q.scale(.05,.07,.022),q.translate(0,.045,0);let F=[-.45,0,.45].map((X,O)=>{let V=new ct(1,12,8);return V.scale(.026,.04,.016),V.translate(0,.1-(O===1?0:.012),0),V.rotateZ(X*.5),V});return t.mergeGeometries([q,...F])})(),k=r.hook?(()=>{let q=new ot(.036,.03,.035,16);q.translate(0,.0175,0);let F=new ot(.007,.008,.05,8);F.translate(0,.06,0);let X=new It(.026,.007,8,20,Math.PI*1.25);X.rotateZ(-Math.PI*.25),X.translate(-.026,.085,0);let O=new Rn(.007,.018,8);return O.rotateZ(Math.PI*.5),O.translate(-.05,.068,0),{wood:q,iron:t.mergeGeometries([F,X,O].map(V=>V.toNonIndexed()))}})():null,N=new tt({color:12105920,roughness:.3,metalness:.9}),z=new tt({color:6964518,roughness:.8});return m.arms=[1,-1].map(q=>{let F=Xe(_,E),X=Xe(w,E),O=new $e;O.add(Xe(I,M||r.top==="sailor"?d:y)),O.add(Xe(D,f,!1,!1));let V;return k&&q===-1?(V=new $e,V.add(Xe(k.wood,z)),V.add(Xe(k.iron,N))):V=Xe(L,c),o.add(F),o.add(X),o.add(O),o.add(V),{side:q,upper:F,fore:X,cuff:O,hand:V,L1:b,L2:A,short:e}}),o.userData.parts=m,m.head&&(m.hat&&(t.batchStatic(m.hat,!0),m.hat.userData.dynamic=!0),m.head.children.forEach(q=>{q.isGroup&&(q.userData.dynamic=!0)}),t.batchStatic(m.head,!0),m.head.userData.dynamic=!0,t.batchStatic(m.torso,!0),m.torso.userData.dynamic=!0,t.batchStatic(m.body,!0)),m}function _a(i){let e=i>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)%1e5/1e5)}function hi(i,e,t=!0,n=!0){let s=new rt(i,e);return s.castShadow=t,s.receiveShadow=n,s}function ud(i,e){let t=i.attributes.position,n=new Float32Array(t.count*3),s=new xe;for(let r=0;r<t.count;r++)e(s,t.getX(r),t.getY(r),t.getZ(r),r),n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b;return i.setAttribute("color",new Ut(n,3)),i}function cd(i){let e=i.index?i.toNonIndexed():i,t=new dt;if(["position","normal","uv","color"].forEach(n=>{e.attributes[n]&&t.setAttribute(n,e.attributes[n])}),t.attributes.uv||t.setAttribute("uv",new Ut(new Float32Array(t.attributes.position.count*2),2)),!t.attributes.color){let n=new Float32Array(t.attributes.position.count*3).fill(1);t.setAttribute("color",new Ut(n,3))}return t}function dd(i){return zr(i.map(cd))}function xa(i,e,t,n,s){let r=i.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=[],h=[],d=new xe;for(let f=0;f<=e;f++){let g=f/e,y=i.getPointAt(g),m=r.normals[f],p=r.binormals[f],M=n(g);for(let E=0;E<=t;E++){let x=E/t*Math.PI*2,S=Math.cos(x)*m.x+Math.sin(x)*p.x,b=Math.cos(x)*m.y+Math.sin(x)*p.y,A=Math.cos(x)*m.z+Math.sin(x)*p.z;o.push(y.x+S*M,y.y+b*M,y.z+A*M),a.push(S,b,A),l.push(E/t,g),s?s(d,g,x):d.setRGB(1,1,1),c.push(d.r,d.g,d.b)}}for(let f=0;f<e;f++)for(let g=0;g<t;g++){let y=f*(t+1)+g,m=y+t+1;h.push(y,m,y+1,m,m+1,y+1)}let u=new dt;return u.setAttribute("position",new Oe(o,3)),u.setAttribute("normal",new Oe(a,3)),u.setAttribute("uv",new Oe(l,2)),u.setAttribute("color",new Oe(c,3)),u.setIndex(h),u}var rd=null;function OM(){if(rd)return rd;let i=document.createElement("canvas");i.width=128,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#a68c6c"),t.addColorStop(1,"#8a7358"),e.fillStyle=t,e.fillRect(0,0,128,256);for(let s=0;s<260;s++)e.fillStyle=`rgba(${40+Math.random()*30},${30+Math.random()*20},20,${.1+Math.random()*.2})`,e.fillRect(Math.random()*128,Math.random()*256,1+Math.random()*2,6+Math.random()*20);e.fillStyle="rgba(45,32,20,0.75)",e.fillRect(0,0,128,10),e.fillStyle="rgba(190,165,130,0.35)",e.fillRect(0,10,128,6);let n=new Xn(i);return n.colorSpace=Gt,n.wrapS=n.wrapT=en,rd=n,n}function BM(i,e,t,n){let s=[],r=[],o=[],a=[],l=[],c=new xe,h=x=>new C(Math.cos(e)*i*x,Math.sin(e)*i*x-(Math.sin(e)+(n?.9:.42))*i*x*x,0),d=[];for(let x=0;x<=12;x++)d.push(h(x/12));let u=new ln(d),f=n?new xe(9071162):new xe().setHSL(.25+t()*.04,.55,.3+t()*.06),g=n?new xe(11569744):new xe().setHSL(.2+t()*.03,.6,.45);s.push(xa(u,20,5,x=>.028*(1-x)+.004,(x,S)=>x.copy(f).lerp(g,S*.6)));let y=26,m=0;for(let x of[1,-1]){for(let S=0;S<=y;S++){let b=.07+S/y*.91,A=u.getPointAt(b),_=u.getTangentAt(b),w=i*.42*Math.pow(Math.sin(Math.PI*Math.min(1,b*1.05)),.55)*(1-.25*b)+.02,D=new C(0,0,x).clone().multiplyScalar(Math.cos(.5)).addScaledVector(_,Math.sin(.5)).add(new C(0,-(n?.9:.3+.3*b),0)).normalize();for(let L=0;L<=2;L++){let k=L/2,N=A.clone().addScaledVector(D,w*k).addScaledVector(new C(0,-1,0),w*k*k*.3);r.push(N.x,N.y,N.z),l.push(S/y,k),c.copy(f).lerp(g,.25+k*.55*(.6+.4*b)+b*.2);let z=.9+t()*.2;o.push(c.r*z,c.g*z,c.b*z)}}for(let S=0;S<y;S++)for(let b=0;b<2;b++){let A=m+S*3+b,_=A+3;a.push(A,_,A+1,_,_+1,A+1)}m+=(y+1)*3}let p=new dt;p.setAttribute("position",new Oe(r,3)),p.setAttribute("color",new Oe(o,3)),p.setAttribute("uv",new Oe(l,2)),p.setIndex(a),p.computeVertexNormals();let M=cd(s[0]),E=M.attributes.uv;for(let x=0;x<E.count;x++)E.setXY(x,.5,.012);return zr([M,cd(p)])}var od=null;function HM(){if(od)return od;let i=1024,e=128,t=document.createElement("canvas");t.width=i,t.height=e;let n=t.getContext("2d");n.clearRect(0,0,i,e),n.fillStyle="rgb(215,210,170)",n.fillRect(0,e-5,i,5);let s=58;for(let o=0;o<s;o++){let a=4+o/s*(i-8)+Math.sin(o*7.1)*3,l=30+Math.sin(o*3.3)*8,c=17+Math.sin(o*1.7)*3,h=3+Math.abs(Math.sin(o*2.9))*14,d=n.createLinearGradient(0,e,0,h),u=225+Math.sin(o*5.3)*20;d.addColorStop(0,`rgb(${u-45},${u-35},${u-50})`),d.addColorStop(.45,`rgb(${u},${u},${u-12})`),d.addColorStop(1,`rgb(${u-15},${u-8},${u-30})`),n.fillStyle=d,n.beginPath(),n.moveTo(a-c*.5,e),n.quadraticCurveTo(a+l*.3-c,e*.45,a+l,h),n.quadraticCurveTo(a+l*.3+c,e*.45,a+c*.5,e),n.closePath(),n.fill(),n.strokeStyle="rgba(255,255,235,0.3)",n.lineWidth=1.4,n.beginPath(),n.moveTo(a,e),n.quadraticCurveTo(a+l*.3,e*.45,a+l,h+2),n.stroke()}let r=new Xn(t);return r.colorSpace=Gt,r.anisotropy=8,od=r,r}var ad=null,ld=null,d0=null;function f0(i,e,t,n,s,r){let o=_a(r*7919+13);ad||(ad=new tt({vertexColors:!0,map:HM(),alphaTest:.4,alphaToCoverage:!0,side:xt,roughness:.72}),ld=new tt({map:OM(),vertexColors:!0,roughness:.95,emissive:2365454,emissiveIntensity:1}),d0=new tt({color:5914402,roughness:.6}));let a=new $e,l=new C(n*t*.45,t,s*t*.45),c=new ln([new C(0,-.2,0),new C(l.x*.08,t*.3,l.z*.08),new C(l.x*.4,t*.65,l.z*.4),l]),h=Math.round(t*5),d=xa(c,Math.round(t*22),14,p=>{let M=.2-.085*p+(p<.05?(.05-p)*2.2:0),E=Math.pow(Math.abs(Math.sin(p*h*Math.PI)),4);return M*(1+.07*E)},(p,M)=>p.setRGB(.95-.15*M,.95-.12*M,.95-.1*M)),u=d.attributes.uv;for(let p=0;p<u.count;p++)u.setY(p,u.getY(p)*h);a.add(hi(d,ld));let f=new $e;f.position.copy(l),a.add(f);let g=hi(new ct(.2,12,10),ld);g.scale.set(1,.8,1),f.add(g);let y=[],m=11+Math.floor(o()*3);for(let p=0;p<m;p++){let M=p>=m-2,E=(2.3+o()*.8)*(t/5.5*.4+.6),x=M?-.2:.25+o()*.55,S=new $e;S.rotation.y=p/m*Math.PI*2+o()*.4,S.add(hi(BM(E,x,o,M),ad,!0,!1)),S.userData.dynamic=!0,f.add(S),y.push({obj:S,base:0,ph:p*.7+r})}for(let p=0;p<5;p++){let M=hi(new ct(.11,12,10),d0);M.scale.set(1,1.1,1),M.position.set(Math.cos(p*1.3+r)*.16,-.16-p%2*.06,Math.sin(p*1.3+r)*.16),f.add(M)}return a.position.set(i,0,e),{group:a,fronds:y}}function hd(i,e,t){return Math.sin(i*3.1+e*1.7)*Math.cos(t*2.9-i*1.3)*.5+Math.sin(i*7.3+t*5.1+e*4.3)*.25+Math.sin(e*11.7+t*9.1)*.12}function p0(i){let e=_a(i),t=[],n=5+Math.floor(e()*4);for(let s=0;s<n;s++){let r=.28+e()*.3,o=ed(new Cr(r,3).deleteAttribute("normal").deleteAttribute("uv")),a=o.attributes.position;for(let h=0;h<a.count;h++){let d=a.getX(h),u=a.getY(h),f=a.getZ(h),g=1+hd(d*5+s,u*5,f*5)*.18;a.setXYZ(h,d*g,u*g*.85,f*g)}o.translate((e()-.5)*.7,r*.6+e()*.15,(e()-.5)*.7),o.computeVertexNormals();let l=.24+e()*.08,c=.22+e()*.1;ud(o,(h,d,u)=>h.setHSL(l,.55,c+u*.12)),t.push(o)}return dd(t)}function m0(i){let e=_a(i),t=[],n=[],s=[],r=0,o=new xe;for(let l=0;l<14;l++){let c=e()*Math.PI*2,h=.2+e()*.5,d=.25+e()*.3,u=.02,f=Math.cos(c),g=Math.sin(c),y=(e()-.5)*.12,m=(e()-.5)*.12;for(let p=0;p<=3;p++){let M=p/3,E=y+f*h*d*M*M,x=d*M,S=m+g*h*d*M*M,b=u*(1-M);t.push(E-g*b,x,S+f*b,E+g*b,x,S-f*b),o.setHSL(.17+e()*.06,.5,.25+M*.25),n.push(o.r,o.g,o.b,o.r,o.g,o.b)}for(let p=0;p<3;p++){let M=r+p*2;s.push(M,M+1,M+2,M+1,M+3,M+2)}r+=8}let a=new dt;return a.setAttribute("position",new Oe(t,3)),a.setAttribute("color",new Oe(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function g0(i,e){let t=ed(new Cr(e,4).deleteAttribute("normal").deleteAttribute("uv")),n=t.attributes.position,s=i*1.37;for(let a=0;a<n.count;a++){let l=n.getX(a),c=n.getY(a),h=n.getZ(a),u=1+hd(l/e*1.4+s,c/e*1.4,h/e*1.4-s)*.22;n.setXYZ(a,l*u,Math.max(-e*.35,c*u*.7),h*u*1.1)}t.computeVertexNormals();let r=_a(i),o=new xe().setHSL(.08+r()*.04,.08+r()*.06,.34+r()*.08);return ud(t,(a,l,c,h)=>{let d=hd(l*9,c*9,h*9);a.copy(o).multiplyScalar(.8+d*.35+(c>e*.3?.08:0))}),t}function x0(){let i=new Wi;for(let t=0;t<=10;t++){let n=t/10*Math.PI*2+Math.PI/2,s=t%2?.035:.1,r=Math.cos(n)*s,o=Math.sin(n)*s;t===0?i.moveTo(r,o):i.lineTo(r,o)}let e=new as(i,{depth:.012,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:3});return e.rotateX(-Math.PI/2),e}function _0(){let i=new ct(.07,18,8,-Math.PI/2-.9,1.8+Math.PI/2*0,0,Math.PI/2),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getY(t),r=e.getZ(t),o=Math.atan2(r,n);e.setXYZ(t,n,s*.35+Math.abs(Math.sin(o*9))*.004,r)}return i.computeVertexNormals(),i}function fd(i){let e=_a(i),t=[];for(let r=0;r<5;r++)t.push(new C(r*.45,.08+Math.sin(r*1.3+i)*.05,(e()-.5)*.25));let n=xa(new ln(t),24,8,r=>.1*(1-r*.6),(r,o,a)=>r.setRGB(.62+Math.sin(a*5)*.05,.58,.52)),s=xa(new ln([new C(.9,.1,0),new C(1.2,.3,.3),new C(1.35,.45,.55)]),10,6,r=>.05*(1-r*.8),r=>r.setRGB(.6,.56,.5));return dd([n,s])}function zM(i){let n=[];for(let m=0;m<=34;m++)n.push(-7+m/34*14.5);let s=m=>{let p=(m+.3)/7.4,M=1.85*Math.pow(Math.max(0,1-p*p),.45);return m>2&&(M*=1-.35*Math.pow((m-2)/5.5,1.4)),m<-5.5&&(M*=.9),Math.max(.05,M)},r=m=>1.1+.55*Pn.smoothstep(m,4,7.4)+1.3*Pn.smoothstep(-m,3.8,6.2),o=m=>1.9*Math.pow(s(m)/1.85,.7),a=[],l=[],c=[],h=new xe,d=new xe(i.hull),u=new xe(i.stripe||9071146),f=new xe(13214282);for(let m=0;m<=34;m++){let p=n[m],M=s(p),E=o(p),x=r(p);for(let S=0;S<=16;S++){let b=S/16*Math.PI,A=Math.sin(b),_=M*Math.cos(b)*(1-.12*Math.pow(1-A,2)),w=x-E*Math.pow(A,.85);a.push(p,w,_);let I=x-w;h.copy(d),I<.12?h.copy(f):I>.45&&I<.72&&h.copy(u),I>1.25&&h.multiplyScalar(.7),l.push(h.r,h.g,h.b)}}for(let m=0;m<34;m++)for(let p=0;p<16;p++){let M=m*17+p,E=M+16+1;c.push(M,M+1,E,E,M+1,E+1)}let g=a.length/3;for(let m=0;m<=34;m++){let p=n[m],M=s(p)*.98,E=r(p)-.12;a.push(p,E,M,p,E,-M),l.push(.45,.33,.2,.45,.33,.2)}for(let m=0;m<34;m++){let p=g+m*2;c.push(p,p+2,p+1,p+1,p+2,p+3)}let y=new dt;return y.setAttribute("position",new Oe(a,3)),y.setAttribute("color",new Oe(l,3)),y.setIndex(c),y.computeVertexNormals(),{geo:y,width:s,deckY:r}}function GM(i,e,t,n,s){let r=new Zt(i,e,10,8),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=l/i,d=(c+e/2)/e,u=c;n&&d<.02&&(u+=Math.sin(l*7+s)*.25+Math.sin(l*17)*.1);let f=Math.cos(h*Math.PI)*t*(.35+.65*Math.sin(Math.PI*Math.min(1,d*1.1)));o.setXYZ(a,l,u,f)}return r.computeVertexNormals(),r}function v0(i,e,t){let n=new $e,s=zM(i),r=new tt({vertexColors:!0,roughness:.8,side:xt});n.add(hi(s.geo,r,!1,!1));let o=new tt({color:2759954,roughness:.8}),a=new Tr({color:1708556,transparent:!0,opacity:.8}),l=new tt({color:788486,roughness:1}),c=new tt({color:3811860,emissive:16756816,emissiveIntensity:0});t.push(c);for(let y=0;y<7;y++){let m=-4.2+y*1.3;[1,-1].forEach(p=>{let M=hi(new Zt(.34,.3),l,!1,!1);M.position.set(m,s.deckY(m)-.62,p*(s.width(m)+.02)),M.rotation.y=p>0?0:Math.PI,n.add(M)})}for(let y=0;y<4;y++){let m=hi(new Zt(.3,.38),c,!1,!1);m.position.set(-7.02,s.deckY(-7)-.8-(y>=2?.55:0),-.9+y%2*1.8*.5+.2),m.rotation.y=-Math.PI/2,n.add(m)}let h=hi(new ot(.08,.12,5,8),o,!1,!1);h.rotation.z=-Math.PI/2+.35,h.position.set(8.8,s.deckY(7.3)+.9,0),n.add(h);let d=new tt({color:i.sail,roughness:1,side:xt}),u=[],f=i.masts||[-3.6,.6,4.2];f.forEach((y,m)=>{let p=(m===1||f.length===1?15.5:13)*(i.mastScale||1),M=s.deckY(y)-.12,E=hi(new ot(.13,.2,p,8),o,!1,!1);E.position.set(y,M+p/2,0),n.add(E);let x=new C(y,M+p,0);for(let S=0;S<3;S++){let b=6.4-S*1.5,A=3.4-S*.55,_=M+4.6+S*3.9,w=hi(new ot(.07,.07,b+.6,6),o,!1,!1);w.rotation.x=Math.PI/2,w.position.set(y,_,0),n.add(w);let I=hi(GM(b,A,i.billow||.8,i.ragged,m*3+S),d,!1,!1);I.rotation.y=Math.PI/2,I.position.set(y+.15,_-A/2-.05,0),n.add(I),[1,-1].forEach(D=>{u.push(y,_,D*(b/2+.25),y-.6,s.deckY(y-.6),D*s.width(y-.6))})}if([1,-1].forEach(S=>{for(let b=-1;b<=1;b++)u.push(x.x,x.y-.4,0,y+b*.5,M+.1,S*s.width(y+b*.5))}),m<f.length-1&&u.push(x.x,x.y-.6,0,f[m+1],M+p*.55,0),m===f.length-1&&u.push(x.x,x.y-.6,0,10.8,s.deckY(7.3)+1.8,0),m===Math.floor(f.length/2)&&e){let S=new rt(new Zt(2.4,1.6,8,2),new kt({map:e,side:xt,fog:!0}));S.position.set(y-1.2,x.y+.6,0),n.userData.flag=S,n.add(S)}});let g=new dt;return g.setAttribute("position",new Oe(u,3)),n.add(new Ro(g,a)),n}function y0(){let t=[],n=[],s=[],r=new xe,o=d=>.62*Math.pow(Math.max(0,1-Math.pow(Math.max(0,d)/1.55,2)),.6)*(d<0?1-.25*Math.pow(-d/1.3,2):1);for(let d=0;d<=20;d++){let u=-1.3+d/20*2.85,f=Math.max(.03,o(u)),g=.42+.12*Math.pow(Math.abs(u)/1.4,2);for(let y=0;y<=10;y++){let m=y/10*Math.PI,p=f*Math.cos(m),M=g-.4*Math.min(1,f/.4)*Math.pow(Math.sin(m),.7);t.push(u,M,p);let E=Math.floor((M+.1)*18)%2;r.setRGB(.5+E*.06,.34+E*.04,.2),(y===0||y===10)&&r.setRGB(.32,.22,.13),n.push(r.r,r.g,r.b)}}for(let d=0;d<20;d++)for(let u=0;u<10;u++){let f=d*11+u,g=f+10+1;s.push(f,f+1,g,g,f+1,g+1)}let a=new dt;a.setAttribute("position",new Oe(t,3)),a.setAttribute("color",new Oe(n,3)),a.setIndex(s),a.computeVertexNormals();let l=[-.6,.1,.75].map(d=>{let u=new Yt(.16,.04,o(d)*1.9);return u.translate(d,.28,0),ud(u,f=>f.setRGB(.45,.31,.18))}),c=xa(new ln([...Array(15)].map((d,u)=>{let f=-1.3+u/14*2.85;return new C(f,.42+.12*Math.pow(Math.abs(f)/1.4,2),Math.max(.03,o(f)))})),30,5,()=>.025,d=>d.setRGB(.32,.22,.13)),h=c.clone();return h.scale(1,1,-1),dd([a,...l,c,h])}var Ri={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},VM=new us(-1,1,1,-1,0,1),pd=class extends dt{constructor(){super(),this.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Oe([0,2,0,0,2,0],2))}},WM=new pd,Ci=class{constructor(e){this._mesh=new rt(WM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,VM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Vr=class extends Sn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yn.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ci(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var va=class extends Sn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},eh=class extends Sn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var th=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Nt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vr(Ri),this.copyPass.material.blending=$t,this.timer=new qo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}va!==void 0&&(o instanceof va?n=!0:o instanceof eh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nh=class extends Sn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var M0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Wr=class i extends Sn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nt(r,o,{type:Vt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Nt(r,o,{type:Vt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Nt(r,o,{type:Vt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=M0;this.highPassUniforms=yn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yn.clone(Ri.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:Ri.vertexShader,fragmentShader:Ri.fragmentShader,premultipliedAlpha:!0,blending:bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new Ci(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new vt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Wr.BlurDirectionX=new ne(1,0);Wr.BlurDirectionY=new ne(0,1);var ya={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ih=class extends Sn{constructor(){super(),this.isOutputPass=!0,this.uniforms=yn.clone(ya.uniforms),this.material=new Pr({name:ya.name,uniforms:this.uniforms,vertexShader:ya.vertexShader,fragmentShader:ya.fragmentShader}),this._fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ma={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new nt},cameraProjectionMatrixInverse:{value:new nt},cameraWorldMatrix:{value:new nt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Sa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},sh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function S0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=XM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Vi(s,e,e);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}function XM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var ba={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:md(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new nt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function md(i,e,t){let n=qM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function qM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new C(Math.cos(r),Math.sin(r),o))}return n}var rh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,y=t-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let M=g-m+h,E=y-p+h,x=g-1+2*h,S=y-1+2*h,b=l&255,A=c&255,_=this.perm[b+this.perm[A]]%12,w=this.perm[b+m+this.perm[A+p]]%12,I=this.perm[b+1+this.perm[A+1]]%12,D=.5-g*g-y*y;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[_],g,y));let L=.5-M*M-E*E;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[w],M,E));let k=.5-x*x-S*S;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[I],x,S)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,y=h-g,m=d-g,p=u-g,M=e-y,E=t-m,x=n-p,S,b,A,_,w,I;M>=E?E>=x?(S=1,b=0,A=0,_=1,w=1,I=0):M>=x?(S=1,b=0,A=0,_=1,w=0,I=1):(S=0,b=0,A=1,_=1,w=0,I=1):E<x?(S=0,b=0,A=1,_=0,w=1,I=1):M<x?(S=0,b=1,A=0,_=0,w=1,I=1):(S=0,b=1,A=0,_=1,w=1,I=0);let D=M-S+f,L=E-b+f,k=x-A+f,N=M-_+2*f,z=E-w+2*f,q=x-I+2*f,F=M-1+3*f,X=E-1+3*f,O=x-1+3*f,V=h&255,j=d&255,be=u&255,Te=this.perm[V+this.perm[j+this.perm[be]]]%12,st=this.perm[V+S+this.perm[j+b+this.perm[be+A]]]%12,Qe=this.perm[V+_+this.perm[j+w+this.perm[be+I]]]%12,Ze=this.perm[V+1+this.perm[j+1+this.perm[be+1]]]%12,J=.6-M*M-E*E-x*x;J<0?s=0:(J*=J,s=J*J*this._dot3(this.grad3[Te],M,E,x));let te=.6-D*D-L*L-k*k;te<0?r=0:(te*=te,r=te*te*this._dot3(this.grad3[st],D,L,k));let me=.6-N*N-z*z-q*q;me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[Qe],N,z,q));let Ne=.6-F*F-X*X-O*O;return Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this._dot3(this.grad3[Ze],F,X,O)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,y=(e+t+n+s)*l,m=Math.floor(e+y),p=Math.floor(t+y),M=Math.floor(n+y),E=Math.floor(s+y),x=(m+p+M+E)*c,S=m-x,b=p-x,A=M-x,_=E-x,w=e-S,I=t-b,D=n-A,L=s-_,k=w>I?32:0,N=w>D?16:0,z=I>D?8:0,q=w>L?4:0,F=I>L?2:0,X=D>L?1:0,O=k+N+z+q+F+X,V=o[O][0]>=3?1:0,j=o[O][1]>=3?1:0,be=o[O][2]>=3?1:0,Te=o[O][3]>=3?1:0,st=o[O][0]>=2?1:0,Qe=o[O][1]>=2?1:0,Ze=o[O][2]>=2?1:0,J=o[O][3]>=2?1:0,te=o[O][0]>=1?1:0,me=o[O][1]>=1?1:0,Ne=o[O][2]>=1?1:0,fe=o[O][3]>=1?1:0,ke=w-V+c,lt=I-j+c,ie=D-be+c,le=L-Te+c,ue=w-st+2*c,de=I-Qe+2*c,Q=D-Ze+2*c,he=L-J+2*c,pe=w-te+3*c,ve=I-me+3*c,se=D-Ne+3*c,P=L-fe+3*c,Me=w-1+4*c,Se=I-1+4*c,R=D-1+4*c,v=L-1+4*c,U=m&255,W=p&255,G=M&255,oe=E&255,ae=a[U+a[W+a[G+a[oe]]]]%32,$=a[U+V+a[W+j+a[G+be+a[oe+Te]]]]%32,ee=a[U+st+a[W+Qe+a[G+Ze+a[oe+J]]]]%32,ge=a[U+te+a[W+me+a[G+Ne+a[oe+fe]]]]%32,Be=a[U+1+a[W+1+a[G+1+a[oe+1]]]]%32,ye=.6-w*w-I*I-D*D-L*L;ye<0?h=0:(ye*=ye,h=ye*ye*this._dot4(r[ae],w,I,D,L));let _e=.6-ke*ke-lt*lt-ie*ie-le*le;_e<0?d=0:(_e*=_e,d=_e*_e*this._dot4(r[$],ke,lt,ie,le));let Ue=.6-ue*ue-de*de-Q*Q-he*he;Ue<0?u=0:(Ue*=Ue,u=Ue*Ue*this._dot4(r[ee],ue,de,Q,he));let Ve=.6-pe*pe-ve*ve-se*se-P*P;Ve<0?f=0:(Ve*=Ve,f=Ve*Ve*this._dot4(r[ge],pe,ve,se,P));let je=.6-Me*Me-Se*Se-R*R-v*v;return je<0?g=0:(je*=je,g=je*je*this._dot4(r[Be],Me,Se,R,v)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ea=class i extends Sn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=S0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Nt(this.width,this.height,{type:Vt,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new vt({defines:Object.assign({},Ma.defines),uniforms:yn.clone(Ma.uniforms),vertexShader:Ma.vertexShader,fragmentShader:Ma.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ko,this.normalMaterial.blending=$t,this.pdMaterial=new vt({defines:Object.assign({},ba.defines),uniforms:yn.clone(ba.uniforms),vertexShader:ba.vertexShader,fragmentShader:ba.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new vt({defines:Object.assign({},Sa.defines),uniforms:yn.clone(Sa.uniforms),vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new vt({uniforms:yn.clone(Ri.uniforms),vertexShader:Ri.vertexShader,fragmentShader:Ri.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:$o,blendDst:Bs,blendEquation:qn,blendSrcAlpha:Zo,blendDstAlpha:Bs,blendEquationAlpha:qn}),this.blendMaterial=new vt({uniforms:yn.clone(sh.uniforms),vertexShader:sh.vertexShader,fragmentShader:sh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:tc,blendSrc:$o,blendDst:Bs,blendEquation:qn,blendSrcAlpha:Zo,blendDstAlpha:Bs,blendEquationAlpha:qn}),this._fsQuad=new Ci(null),this._originalClearColor=new xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Si,this.depthTexture.format=Ei,this.depthTexture.type=xs,this.normalRenderTarget=new Nt(this.width,this.height,{minFilter:qt,magFilter:qt,type:Vt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=md(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new rh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Vi(s,e,e,Cn,pn);return r.wrapS=en,r.wrapT=en,r.needsUpdate=!0,r}};Ea.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var wn=null,Sh=null,In=null,bh=null,vs=[],YM={uniforms:{tDiffuse:{value:null},night:{value:0},vignette:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float night; uniform float vignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.08 - night * 0.12);                 // S\xE4ttigung
      col = col + (col - 0.5) * 0.06 * (1.0 - col) * col * 4.0;     // sanfte S-Kurve
      vec3 warm = vec3(1.035, 1.0, 0.95), cool = vec3(0.93, 0.98, 1.06);
      col *= mix(warm, cool, night);
      col = mix(col, col * vec3(1.0, 0.97, 0.9), smoothstep(0.55, 1.0, l) * 0.25); // warme Lichter
      vec2 d = vUv - 0.5; float v = smoothstep(0.85, 0.2, length(d * vec2(1.1, 1.0)));
      col *= mix(1.0 - vignette - night * 0.12, 1.0, v);
      gl_FragColor = vec4(col, c.a);
    }`},Hd='"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',Qr='Georgia, "Times New Roman", serif',Wt=.78,Li=.23,Ki=.138,ph=.113,mh=.058,ZM=.78,b0=new C(.3,0,.02);var at=null,zt,Ce,At,bt,Vs,Eh,gh=!1,E0=new Yo,T0=new ne,xh=[],yt={},zn=[],An=null,bn=null,gn=.9,La=1.32,w0="",gd=null,Ia=null,Ni=null,Ad="",Ss=null,Ji=null,B0=[],zd=[],H0=[],Gd=[],$n={},Zn=null,Ta=null,ks=null,Da=null,Rd=!1;function NT(i){ks=i||null,Rd=!0}var Ws=0,Tn=null,$M=3600;function UT(){Ws=performance.now()}var Cd=null,_h=null;function FT(i,e){_h=i?{kind:i,p:e}:null}function OT(i){Cd=i,Ws=i===null?0:1}function A0(){Ws=0}var jr=[],Pd=!1,Xr=0,Di=0,bs=-.28,R0=0,C0=0;var Id={round:-1,dice:[]},Kr=0,z0=4,$r=!1,it=0,Th=1,Na=-.3,kd=0,Dd=!1,Jt=null,Hn=null;function JM(){if(!At||!bt)return .05;let i=Math.max(300,bt.clientHeight||600);return 2*(i>1300?38:i>950?32:27)/i*Math.tan(At.fov*Math.PI/360)}function G0(i){let e=JM();i.label.scale.set(e*512/96,e,1),i.bubble.scale.set(.4*Th,.4*Th*200/420,1)}var vh=0;function Kt(i,e=!0){let t=new Xn(i);return e&&(t.colorSpace=Gt),t.anisotropy=z0,t}function Nn(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Ua(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function k0(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Ui(i,e,t){return Math.max(e,Math.min(t,i))}function Dn(i,e,t){return i+(e-i)*t}function Ha(i,e,t,n){let s={t0:performance.now()+e,dur:i,fn:t,done:n};return xh.push(s),s}function Vd(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Ye(i,e=.8,t){return new tt(Object.assign({color:i,roughness:e},t||{}))}function Ee(i,e,t=!0,n=!0){let s=new rt(i,e);return s.castShadow=t,s.receiveShadow=n,s}function V0(i,e,t,n,s,r){let o=n*.095,a={a:[.27,.27],b:[.73,.27],c:[.27,.5],d:[.5,.5],e:[.73,.5],f:[.27,.73],g:[.73,.73]},l={1:["d"],2:["a","g"],3:["a","d","g"],4:["a","b","f","g"],5:["a","b","d","f","g"],6:["a","b","c","e","f","g"]};i.fillStyle=s===1?"#9a1a1a":r,l[s].forEach(c=>{i.beginPath(),i.arc(e+a[c][0]*n,t+a[c][1]*n,s===1?o*1.5:o,0,Math.PI*2),i.fill()})}function wh(i,e,t,n,s){i.save(),i.fillStyle="#f3ead2",Ua(i,e,t,n,n,n*.18),i.fill(),i.lineWidth=n*.05,i.strokeStyle="#2a1a0a",i.stroke(),V0(i,e,t,n,s,"#1a120a"),i.restore()}var oh={};function KM(i){if(oh[i])return oh[i];let e=Nn(128,128),t=e.getContext("2d"),n=t.createRadialGradient(64,64,10,64,64,90);return n.addColorStop(0,"#f6eed8"),n.addColorStop(1,"#d9c9a2"),t.fillStyle=n,t.fillRect(0,0,128,128),t.strokeStyle="rgba(90,60,20,0.35)",t.lineWidth=6,t.strokeRect(3,3,122,122),V0(t,0,0,128,i,"#1c130b"),oh[i]=Kt(e),oh[i]}function Es(i,e,t,n,s){let r=Nn(i,e),o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,i,e);let a=i/n;for(let l=0;l<n;l++){o.fillStyle=`rgba(${s?20:60},${s?10:35},${s?5:15},${Math.random()*.25})`,o.fillRect(l*a,0,a,e);for(let c=0;c<26;c++){let h=l*a+Math.random()*a;o.strokeStyle=`rgba(30,15,5,${.08+Math.random()*.18})`,o.lineWidth=1+Math.random()*2,o.beginPath(),o.moveTo(h,0),o.bezierCurveTo(h+(Math.random()-.5)*12,e*.33,h+(Math.random()-.5)*12,e*.66,h+(Math.random()-.5)*6,e),o.stroke()}o.fillStyle="rgba(15,8,3,0.8)",o.fillRect(l*a,0,3,e)}return r}function jM(){let e=Nn(512,512),t=e.getContext("2d");t.fillStyle="#dcc394",t.fillRect(0,0,512,512);for(let s=0;s<60;s++){let r=Math.random()*512,o=Math.random()*512,a=30+Math.random()*90,l=Math.random()<.5;for(let c of[-512,0,512])for(let h of[-512,0,512]){let d=r+c,u=o+h;if(d+a<0||d-a>512||u+a<0||u-a>512)continue;let f=t.createRadialGradient(d,u,0,d,u,a);f.addColorStop(0,l?"rgba(235,205,150,0.18)":"rgba(185,160,115,0.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.fillRect(d-a,u-a,a*2,a*2)}}for(let s=0;s<512;s+=7){t.strokeStyle=`rgba(150,120,80,${.06+Math.random()*.06})`,t.lineWidth=2;let r=o=>Math.sin(o/512*Math.PI*2*3+s*.2)*3;t.beginPath();for(let o=0;o<=512;o+=16)t.lineTo(o,s+r(o));t.stroke(),t.strokeStyle="rgba(255,245,220,0.07)",t.lineWidth=1.5,t.beginPath();for(let o=0;o<=512;o+=16)t.lineTo(o,s+2+r(o));t.stroke()}for(let s=0;s<4e4;s++){let r=Math.random();t.fillStyle=r<.45?`rgba(255,245,215,${Math.random()*.35})`:r<.9?`rgba(120,95,60,${Math.random()*.25})`:`rgba(90,80,70,${Math.random()*.4})`,t.fillRect(Math.random()*512,Math.random()*512,1+Math.random(),1+Math.random())}let n=Kt(e);return n.wrapS=n.wrapT=en,n.repeat.set(9,9),n}function QM(){let i=Nn(512,256),e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#b98a5a"),t.addColorStop(.5,"#a67646"),t.addColorStop(1,"#8d6038"),e.fillStyle=t,e.fillRect(0,0,512,256);for(let r=0;r<90;r++){let o=Math.random()*512,a=Math.random()*256,l=8+Math.random()*30,c=e.createRadialGradient(o,a,0,o,a,l),h=Math.random()<.6;c.addColorStop(0,h?"rgba(60,35,15,0.22)":"rgba(230,190,140,0.16)"),c.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=c,e.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<9e3;r++)e.fillStyle=`rgba(40,22,8,${Math.random()*.16})`,e.fillRect(Math.random()*512,Math.random()*256,1.5,1.5);e.lineCap="round";for(let r=0;r<70;r++){let o=Math.random()*512,a=Math.random()*256,l=6+Math.random()*26,c=(Math.random()-.5)*1.2;e.strokeStyle=`rgba(235,205,160,${.12+Math.random()*.2})`,e.lineWidth=.8+Math.random(),e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.cos(c)*l,a+Math.sin(c)*l),e.stroke()}let n=(r,o,a,l)=>{e.strokeStyle="rgba(40,22,8,0.5)",e.lineWidth=4,e.setLineDash([]),e.beginPath(),e.moveTo(r,o+1.5),e.lineTo(a,l+1.5),e.stroke(),e.strokeStyle="rgba(240,215,165,0.9)",e.lineWidth=2.2,e.setLineDash([7,6]),e.beginPath(),e.moveTo(r,o),e.lineTo(a,l),e.stroke(),e.setLineDash([])};n(0,26,512,26),n(0,232,512,232),n(40,26,40,232),e.save(),e.globalAlpha=.7,qd(e,296,128,1.05,"#3a200c"),e.restore();let s=Kt(i);return s.wrapS=en,s}var Fa=new C(-.72,.2,-.66).normalize(),Wd=new C(.55,.42,-.72).normalize(),Ln=0,W0=0,yh=null,Ld=null,X0=null,q0=[];function e1(){let i=new ct(500,32,16),e=new vt({side:hn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:Fa},moonDir:{value:Wd},night:{value:0},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vDir;
      uniform float time;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(h2(i), h2(i+vec2(1,0)), f.x), mix(h2(i+vec2(0,1)), h2(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vDir);
        float y = max(d.y, -0.05);
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 zenith = mix(mix(vec3(0.10,0.22,0.45), vec3(0.08,0.10,0.28), n1), vec3(0.01,0.02,0.06), n2);
        vec3 mid = mix(mix(vec3(0.45,0.55,0.75), vec3(0.42,0.30,0.48), n1), vec3(0.03,0.05,0.13), n2);
        vec3 horizon = mix(mix(vec3(1.0,0.66,0.42), vec3(0.95,0.36,0.2), n1), vec3(0.07,0.09,0.18), n2);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.18, y));
        col = mix(col, zenith, smoothstep(0.18, 0.7, y));
        float sunVis = 1.0 - smoothstep(0.6, 0.9, night);
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.5,0.2) * pow(s, 6.0) * 0.55 * sunVis;
        col += vec3(1.0,0.8,0.55) * pow(s, 60.0) * 0.8 * sunVis;
        col += vec3(1.0,0.9,0.7) * smoothstep(0.9985, 0.9993, s) * 3.0 * sunVis * step(-0.02, d.y);
        // Sterne und Mond
        vec3 cell = floor(d * 260.0);
        float h = hash(cell);
        float star = step(0.9965, h) * (0.6 + 0.4 * hash(cell + 7.0));
        col += vec3(0.9,0.95,1.0) * star * n2 * smoothstep(0.03, 0.25, y);
        float m = max(dot(d, moonDir), 0.0);
        col += vec3(0.95,0.97,1.0) * smoothstep(0.99955, 0.99975, m) * 2.2 * n2;
        col += vec3(0.4,0.5,0.8) * pow(m, 80.0) * 0.35 * n2;
        // Wolken: fbm-Rauschen auf eine Himmelsebene projiziert, von der Sonne angestrahlt
        if (d.y > 0.0) {
          vec2 uv = d.xz / (d.y + 0.12) * 1.6;
          float c1 = fbm(uv * 0.9 + vec2(time * 0.004, 0.0));
          float c2 = fbm(uv * 2.3 - vec2(0.0, time * 0.006));
          float cov = smoothstep(0.52, 0.78, c1 * 0.75 + c2 * 0.35);
          cov *= smoothstep(0.015, 0.1, d.y) * (1.0 - smoothstep(0.55, 0.9, d.y) * 0.6);
          float lit = pow(max(dot(d, sunDir), 0.0), 3.0);
          vec3 cDay = mix(vec3(0.98,0.9,0.85), vec3(1.0,0.72,0.5), smoothstep(0.0, 0.3, 1.0 - d.y * 3.0));
          vec3 cDusk = mix(vec3(0.55,0.3,0.4), vec3(1.0,0.5,0.3), lit);
          vec3 cNight = vec3(0.07,0.08,0.13);
          vec3 cc = mix(mix(cDay, cDusk, n1), cNight, n2);
          cc += vec3(1.0,0.7,0.45) * lit * 0.5 * sunVis;
          float shade = 0.75 + 0.25 * smoothstep(0.5, 0.8, c2);
          col = mix(col, cc * shade, cov * 0.85);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`});Ji=new rt(i,e),Ji.userData.dynamic=!0,Ji.renderOrder=-10,Ce.add(Ji)}function t1(){let i=$r?96:160,e=new Zt(900,900,i,i);e.rotateX(-Math.PI/2);let t=new vt({fog:!1,uniforms:{time:{value:0},sunDir:{value:Fa},moonDir:{value:Wd},night:{value:0}},vertexShader:`
      uniform float time; varying vec3 vPos; varying float vH;
      float wave(vec2 p){
        return sin(p.x*0.35 + time*1.1)*0.12 + sin(p.y*0.28 - time*0.9)*0.1
             + sin((p.x+p.y)*0.8 + time*1.9)*0.04 + sin((p.x-p.y)*1.3 - time*2.3)*0.025;
      }
      void main(){
        vec3 p = position;
        float d = length(p.xz);
        // N\xE4he: feinere Wellen, Ferne: flacher (Detail geht ohnehin verloren)
        float amp = mix(1.0, 0.25, smoothstep(40.0, 200.0, d));
        p.y += wave(p.xz) * amp;
        vH = p.y;
        vPos = (modelMatrix * vec4(p,1.0)).xyz;
        gl_Position = projectionMatrix * viewMatrix * vec4(vPos,1.0);
      }`,fragmentShader:`
      uniform float time; uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vPos; varying float vH;
      float coast(float a){ return 1.0 + 0.06*sin(3.0*a+0.7) + 0.04*sin(5.0*a+2.1) + 0.025*sin(8.0*a+4.0); }
      void main(){
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 dx = dFdx(vPos); vec3 dy = dFdy(vPos);
        vec3 n = normalize(cross(dx, dy)); if (n.y < 0.0) n = -n;
        // feine Kr\xE4uselwellen als Normalen-St\xF6rung (in der Ferne schw\xE4cher)
        vec2 q = vPos.xz;
        float fade = 1.0 - smoothstep(25.0, 160.0, length(q));
        vec2 g = vec2(0.0);
        g += vec2(0.9, 0.4) * cos(dot(q, vec2(0.9, 0.4)) * 2.2 + time * 2.1) * 0.10;
        g += vec2(-0.3, 1.0) * cos(dot(q, vec2(-0.3, 1.0)) * 3.1 - time * 2.7) * 0.08;
        g += vec2(0.7, -0.7) * cos(dot(q, vec2(0.7, -0.7)) * 5.3 + time * 3.3) * 0.06;
        g += vec2(-0.8, -0.5) * cos(dot(q, vec2(-0.8, -0.5)) * 8.1 - time * 4.1) * 0.04;
        n = normalize(n + vec3(g.x, 0.0, g.y) * fade);
        vec3 v = normalize(cameraPosition - vPos);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float ang = atan(vPos.z, vPos.x);
        float cf = coast(ang);
        float d = length(vPos.xz);
        float dc = d / cf; // Abstand relativ zur K\xFCstenlinie
        vec3 deep = mix(vec3(0.03,0.16,0.28), vec3(0.01,0.035,0.08), n2);
        vec3 shallow = mix(vec3(0.12,0.62,0.62), vec3(0.03,0.13,0.18), n2);
        vec3 col = mix(shallow, deep, smoothstep(11.5, 26.0, dc));
        // Riff-Flecken im flachen Wasser
        float reef = sin(vPos.x*0.9 + sin(vPos.z*0.7)*1.5) * sin(vPos.z*1.1 + sin(vPos.x*0.5)*1.3);
        col = mix(col, col * vec3(0.72, 0.85, 0.8), smoothstep(0.35, 0.8, reef) * (1.0 - smoothstep(12.5, 19.0, dc)) * 0.6 * (1.0 - n2));
        vec3 hz = mix(mix(vec3(1.0,0.7,0.5), vec3(0.9,0.4,0.25), n1), vec3(0.07,0.09,0.18), n2);
        vec3 up = mix(vec3(0.45,0.55,0.75), vec3(0.03,0.05,0.13), n2);
        vec3 skyc = mix(hz, up, clamp(v.y*3.0,0.0,1.0));
        col = mix(col, skyc, clamp(fres*0.85, 0.0, 0.85));
        vec3 r = reflect(-v, n);
        float s = max(dot(r, sunDir), 0.0);
        col += mix(vec3(1.0,0.75,0.45), vec3(1.0,0.4,0.2), n1) * (pow(s, 90.0) * 2.2 + pow(s, 12.0) * 0.18) * (1.0 - smoothstep(0.6, 0.9, night));
        float mo = max(dot(r, moonDir), 0.0);
        col += vec3(0.75,0.82,1.0) * (pow(mo, 120.0) * 1.6 + pow(mo, 16.0) * 0.08) * n2;
        // Schaum an der K\xFCste
        float swash = sin(time*0.8 + ang*7.0)*0.25;
        float shore = 1.0 - smoothstep(0.0, 1.2, abs(dc - 11.3 - swash/cf) * cf);
        float foam = shore * (0.55 + 0.45*sin(dc*6.0 - time*2.5));
        // zweite, schw\xE4chere Brandungslinie weiter drau\xDFen
        float outer = 1.0 - smoothstep(0.0, 0.35, abs(dc - 13.2 - sin(time*0.6 + ang*5.0)*0.35));
        foam += outer * 0.35 * (0.5 + 0.5*sin(ang*23.0 + time*0.7));
        foam += smoothstep(0.13, 0.2, vH) * 0.35 * (1.0 - smoothstep(30.0, 90.0, d));
        col = mix(col, mix(vec3(0.95,0.97,0.95), vec3(0.35,0.4,0.5), n2), clamp(foam, 0.0, 0.9));
        // Dunst am Horizont
        col = mix(col, hz, smoothstep(120.0, 430.0, d));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`});Ss=new rt(e,t),Ss.userData.dynamic=!0,Ss.position.y=-.62,Ce.add(Ss)}function Ms(i){return 1+.06*Math.sin(3*i+.7)+.04*Math.sin(5*i+2.1)+.025*Math.sin(8*i+4)}function Jn(i,e){let t=Math.hypot(i,e);if(t<4.2)return 0;let n=1+(Ms(Math.atan2(e,i))-1)*Pn.smoothstep(t,4.4,9.3),s=t/(14*n);return-1.5+1.5*Math.sqrt(Math.max(0,1-s*s))}function n1(){let i=jM(),e=Ye(16777215,1,{map:i,vertexColors:!0}),t=new ct(1,128,40,0,Math.PI*2,0,Math.PI/2),n=t.attributes.position;for(let F=0;F<n.count;F++){let X=n.getX(F),O=n.getY(F),V=n.getZ(F),j=1-Pn.smoothstep(O,.75,.95),be=(1+(Ms(Math.atan2(V,X))-1)*j)*(1+(Math.sin(X*13)*Math.cos(V*11)*.02+Math.sin(X*29+V*17)*.008)*(1-O));n.setXYZ(F,X*be,O+(Math.sin(X*9+V*4)*.012+Math.sin(V*15-X*6)*.006)*(1-O)*(O<.95?1:0),V*be)}t.computeVertexNormals();let s=new Float32Array(n.count*3);for(let F=0;F<n.count;F++){let X=Math.hypot(n.getX(F),n.getZ(F))*14/Ms(Math.atan2(n.getZ(F),n.getX(F))),O=Pn.smoothstep(X,9.6,11),V=1-O*.42;s[F*3]=V,s[F*3+1]=V*(1-O*.02),s[F*3+2]=V*(1-O*.05)}t.setAttribute("color",new Ut(s,3));let r=Ee(t,e,!1,!0);r.scale.set(14,1.5,14),r.position.y=-1.5,Ce.add(r);let o=Ee(new os(4.2,64),Ye(16777215,1,{map:i}),!1,!0);o.rotation.x=-Math.PI/2,o.position.y=.002,Ce.add(o);let a=new tt({vertexColors:!0,roughness:.92});[[10.2,.4,.9],[9.6,1.3,.6],[11.4,2.2,1.3],[10.4,3.5,.5],[10.8,4.2,.8],[9.9,5.4,.45],[11.8,.9,1.1],[10.1,-1.2,.7],[11.5,-.4,1.4],[9.8,2.6,.35]].forEach(([F,X,O],V)=>{let j=Math.cos(X)*F*Ms(X),be=Math.sin(X)*F*Ms(X),Te=Ee(g0(V+3,O),a);Te.position.set(j,Math.max(-.75,Jn(j,be))-O*.15,be),Te.rotation.y=V*1.7,Ce.add(Te)});let c=new tt({vertexColors:!0,roughness:.85});[[-6.8,-1.8],[-7.6,1.2],[6.4,-3.2],[7.8,-.6],[-2.2,-7.2],[4.4,-6.6],[-5.2,-5.9],[8.2,3],[-8.5,-3.6],[1,-8.3],[-6.6,4.9],[5.4,6.2]].forEach(([F,X],O)=>{let V=Ee(p0(O*31+7),c);V.position.set(F,Jn(F,X)-.05,X),V.scale.setScalar(.8+O%3*.25),V.rotation.y=O,Ce.add(V)});let h=m0(11),d=new tt({vertexColors:!0,side:xt,roughness:.9}),u=90,f=new Ls(h,d,u),g=new nt,y=new an,m=new C,p=new C,M=0,E=0;for(;M<u&&E<2e3;){E++;let F=Math.random()*Math.PI*2,X=4.8+Math.random()*4.6,O=Math.cos(F)*X,V=Math.sin(F)*X;if(V>2&&Math.abs(O)<3)continue;p.set(O,Jn(O,V)-.02,V),y.setFromAxisAngle(new C(0,1,0),Math.random()*6.28);let j=.7+Math.random()*.9;m.set(j,j,j),g.compose(p,y,m),f.setMatrixAt(M++,g)}f.count=M,f.castShadow=!1,f.receiveShadow=!0,f.userData.dynamic=!0,Ce.add(f);let x=x0(),S=Ye(14708794,.6);[[3.3,5.4,.3],[-4.6,6.8,1.5],[7.2,-5.9,2.2],[-8.9,1.9,.8]].forEach(([F,X,O])=>{let V=Ee(x,S);V.position.set(F,Jn(F,X)+.01,X),V.rotation.y=O,Ce.add(V)});let b=_0(),A=[Ye(15917776,.5),Ye(15777968,.5),Ye(15259832,.5)];for(let F=0;F<16;F++){let X=F*2.3+.4,O=5.5+F*.37%4,V=Math.cos(X)*O,j=Math.sin(X)*O,be=Ee(b,A[F%3],!1,!0);be.position.set(V,Jn(V,j)+.005,j),be.rotation.y=F*1.1,be.scale.setScalar(.8+F%4*.2),Ce.add(be)}let _=Ee(fd(5),new tt({vertexColors:!0,roughness:.95}));_.position.set(6.4,Jn(6.4,5.6)-.02,5.6),_.rotation.y=2.2,Ce.add(_);let w=Ee(fd(9),new tt({vertexColors:!0,roughness:.95}));w.position.set(-8.6,Jn(-8.6,-4.4)-.02,-4.4),w.rotation.y=.7,w.scale.setScalar(.8),Ce.add(w);let I=new os(.12,7);I.rotateX(-Math.PI/2);let D=new tt({color:5923120,roughness:.9}),L=new Ls(I,D,70),k=new nt,N=new an,z=new C,q=new C;for(let F=0;F<70;F++){let X=F/70*Math.PI*2+Math.sin(F*7.3)*.04,O=10.4*Ms(X)+Math.sin(F*3.7)*.15,V=Math.cos(X)*O,j=Math.sin(X)*O;q.set(V,Jn(V,j)+.012,j),N.setFromAxisAngle(new C(0,1,0),X+Math.sin(F)*.6),z.set(1.4+Math.abs(Math.sin(F*1.3))*1.6,1,.35+Math.abs(Math.cos(F*2.1))*.3),k.compose(q,N,z),L.setMatrixAt(F,k)}L.receiveShadow=!0,L.userData.dynamic=!0,Ce.add(L)}function Xs(i,e,t,n,s,r){let o=f0(i,e,t,n,s,r);return Ce.add(o.group),o.fronds.forEach(a=>B0.push(a)),o.group}var Y0=[];function xd(i){let e=v0(i,Z0(),Y0),t=e.userData.flag;return t&&Gd.push({mesh:t,base:t.geometry.attributes.position.array.slice(),ph:i.x,amp:.25}),e.position.set(i.x,-.35,i.z),e.rotation.y=i.rot||0,e.scale.setScalar(i.scale||1),e.userData.dynamic=!0,Ce.add(e),H0.push({g:e,bob:i.bob||0,speed:i.speed||0,path:i.path||null}),e}function i1(){xd({hull:1446157,sail:1841690,ragged:!0,x:-95,z:-150,rot:.5,bob:0}),xd({hull:5913118,sail:15722191,stripe:9054746,billow:.9,x:-180,z:-85,rot:0,scale:.8,bob:1,speed:2.2,path:{from:-190,to:190}}),xd({hull:3810838,sail:14274484,stripe:2047851,masts:[-2.5,2.5],x:60,z:-55,rot:2.6,scale:.7,bob:2})}var ah=null;function Z0(){if(ah)return ah;let i=Nn(256,170),e=i.getContext("2d");return e.fillStyle="#121212",e.fillRect(0,0,256,170),qd(e,128,70,1.25,"#f1ead8"),ah=Kt(i),ah}function s1(){let i=Ye(16777215,.85,{map:Kt(Es(256,128,"#7a5230",6))}),e=Ye(2762532,.45,{metalness:.7}),t=Ye(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.45});[[-7.2,-5.4,6.4,.4,-.5,3],[8.6,1.6,5,.6,-.2,5],[-8.4,3.6,5.6,-.6,.2,6],[2.6,-7.8,5.8,.2,-.6,8],[-3.2,-8.3,4.4,-.3,-.5,9],[5.6,-5.8,4.6,.5,-.3,10]].forEach(([Q,he,pe,ve,se,P])=>{let Me=Xs(Q,he,pe,ve,se,P);Me.position.y=Jn(Q,he)});let n=Ee(new ot(.06,.08,5.2,8),Ye(4862752,.9));n.position.set(-1.4,2.6,-5.2),Ce.add(n);let s=Ee(new ct(.1,10,8),t);s.position.set(-1.4,5.25,-5.2),Ce.add(s);let r=new rt(new Zt(1.6,1.05,12,4),new tt({map:Z0(),side:xt,roughness:1}));r.geometry.translate(.8,0,0),r.position.set(-1.35,4.6,-5.2),r.rotation.y=.35,Ce.add(r),r.userData.dynamic=!0,Gd.push({mesh:r,base:r.geometry.attributes.position.array.slice(),ph:0,amp:.12,fromPole:!0});let o=new $e,a=Ee(new Yt(.55,.3,1),i);a.position.y=.3,o.add(a),[[-.3,.3],[.3,.3],[-.3,-.3],[.3,-.3]].forEach(([Q,he])=>{let pe=Ee(new ot(.17,.17,.08,14),i);pe.rotation.z=Math.PI/2,pe.position.set(Q,.17,he),o.add(pe)});let l=Ee(new ot(.11,.17,1.5,16),e);l.rotation.x=Math.PI/2-.15,l.position.set(0,.55,-.35),o.add(l);let c=Ee(new It(.12,.03,8,16),e);c.position.set(0,.66,-1.1),o.add(c),o.position.set(4.9,0,-4.4),o.rotation.y=-.75,Ce.add(o);let h=new ct(.1,12,10);[[0,0,0],[.2,0,0],[.1,0,.17],[.1,.16,.06]].forEach(([Q,he,pe])=>{let ve=Ee(h,e);ve.position.set(5.5+Q,.1+he,-3.6+pe),Ce.add(ve)});let d=Ee(new Rn(.75,.5,18),t);d.position.set(1.2,.25,-5.6),Ce.add(d);let u=new ot(.045,.045,.01,12);for(let Q=0;Q<70;Q++){let he=Math.random()*Math.PI*2,pe=.2+Math.random()*1.1,ve=Ee(u,t,!1,!0);ve.position.set(1.2+Math.cos(he)*pe,.006+(pe<.7?(.7-pe)*.6:0),-5.6+Math.sin(he)*pe),ve.rotation.set(Math.random()*.5,Math.random()*3,Math.random()*.5),Ce.add(ve)}let f=[13639744,2121952,2142304,9453776];for(let Q=0;Q<14;Q++){let he=Ee(new Go(.05,0),Ye(f[Q%4],.15,{metalness:.2,emissive:f[Q%4],emissiveIntensity:.25}),!1,!1),pe=Math.random()*Math.PI*2,ve=Math.random()*.6;he.position.set(1.2+Math.cos(pe)*ve,.12+(.6-ve)*.55,-5.6+Math.sin(pe)*ve),Ce.add(he)}let g=Ee(new ot(.12,.1,.1,8,1,!0),t);g.position.set(1.2,.54,-5.6),g.rotation.z=.3,Ce.add(g);let y=new $e,m=Ee(new Yt(.7,.36,.45),i);m.position.y=.18,y.add(m);let p=new $e;p.position.set(0,.36,-.225),p.rotation.x=-1.9,y.add(p);let M=Ee(new ot(.225,.225,.7,14,1,!1,0,Math.PI),i);M.rotation.z=Math.PI/2,M.position.z=.225,p.add(M);let E=Ee(new Yt(.64,.05,.4),t);E.position.y=.35,y.add(E),y.position.set(2.3,0,-5.3),y.rotation.y=-.4,Ce.add(y);let x=Ye(15261896,.8),S=Ee(new ct(.12,12,10),x);S.scale.set(1,.9,1.1),S.position.set(.3,.1,-5.1),Ce.add(S),[[-.04],[.04]].forEach(([Q])=>{let he=Ee(new ct(.03,8,6),Ye(1118481,.9),!1,!1);he.position.set(.3+Q,.12,-5),Ce.add(he)});let b=new $e,A=Ee(new ot(.05,.05,1.5,8),e);A.position.y=.75,b.add(A);let _=Ee(new ot(.04,.04,.8,8),e);_.rotation.z=Math.PI/2,_.position.y=1.3,b.add(_);let w=Ee(new It(.1,.025,8,16),e);w.position.y=1.55,b.add(w);let I=Ee(new It(.45,.05,8,20,Math.PI),e);I.rotation.z=Math.PI,I.position.y=.45,b.add(I),b.position.set(-5.9,-.15,-2.4),b.rotation.set(.25,.6,.2),Ce.add(b);let D=-6.2,L=-7,k=Ee(y0(),new tt({vertexColors:!0,roughness:.85,side:xt}));k.position.set(D,Jn(D,L)-.12,L),k.rotation.set(.05,.9,.12),Ce.add(k),[.35,-.3].forEach((Q,he)=>{let pe=new $e,ve=Ee(new ot(.025,.025,1.9,6),Ye(8018488));ve.rotation.z=Math.PI/2,pe.add(ve);let se=Ee(new Yt(.45,.02,.14),Ye(8018488));se.position.x=.95,pe.add(se),pe.position.set(D+(he?.3:-.2),Jn(D,L)+.32,L+Q),pe.rotation.set(.1,.9+(he?.25:-.2),.08),Ce.add(pe)});let N=Ye(16777215,.85,{map:Kt(Es(128,128,"#8a6a3a",4))});[[-2.8,.25,3.8,.2,.5],[-2.2,.25,4.1,-.3,.5],[-2.5,.72,3.95,.5,.44],[3.6,.2,3.6,.4,.4]].forEach(([Q,he,pe,ve,se])=>{let P=Ee(new Yt(se,se,se),N);P.position.set(Q,he,pe),P.rotation.y=ve,Ce.add(P)});let z=new $e;for(let Q=0;Q<5;Q++){let he=Ee(new ot(.05,.06,.7,6),Ye(3810324,.95));he.rotation.set(Math.PI/2-.25,Q/5*Math.PI*2,0),he.position.set(Math.sin(Q/5*Math.PI*2)*.12,.1,Math.cos(Q/5*Math.PI*2)*.12),z.add(he)}for(let Q=0;Q<8;Q++){let he=Ee(new Do(.1,0),Ye(6973024,.95,{flatShading:!0}));he.position.set(Math.cos(Q*.785)*.45,.05,Math.sin(Q*.785)*.45),z.add(he)}let q=new kt({color:16747056,transparent:!0,opacity:.9}),F=new rt(new Rn(.22,.6,8),q);F.position.y=.35,z.add(F);let X=new rt(new Rn(.12,.4,8),new kt({color:16773280}));X.position.y=.28,z.add(X);let O=new Mi(new si({map:Rh(),color:16747056,transparent:!0,depthWrite:!1,blending:bi}));O.scale.set(2.2,2.2,1),O.position.y=.4,z.add(O),z.position.set(-5.6,0,.9),Ce.add(z),F.userData.dynamic=X.userData.dynamic=!0,zd.push({flame:F,inner:X,glow:O,ph:11});let V=Ee(new ot(.02,.02,1.1,6),Ye(4862752));V.rotation.z=Math.PI/2,V.position.set(-5.6,.75,.9),Ce.add(V),[-.5,.5].forEach(Q=>{let he=Ee(new ot(.025,.025,.8,6),Ye(4862752));he.position.set(-5.6+Q,.4,.9),Ce.add(he)});let j=new C(8.35,1.5,1.8),be=new C(6.75,1.5,4.25),Te=j.clone().lerp(be,.5);Te.y=.75;let st=new Ns(j,Te,be),Qe=Ee(new ri(st,20,.22,8,!1),Ye(14272928,.95,{side:xt}));Qe.scale.set(1,1,1),Ce.add(Qe);let Ze=new $e,J=Ee(new ct(.09,12,10),Ye(13904426,.7));J.scale.set(1,1.35,1),J.position.y=.12,Ze.add(J);let te=Ee(new ct(.065,12,10),Ye(13904426,.7));te.position.set(0,.27,-.02),Ze.add(te);let me=Ee(new Rn(.025,.07,6),Ye(15851696,.5));me.rotation.x=-Math.PI/2-.5,me.position.set(0,.25,-.08),Ze.add(me),[-1,1].forEach(Q=>{let he=Ee(new ct(.06,10,8),Ye(Q>0?2777296:15909402,.7));he.scale.set(.4,1.3,.9),he.position.set(Q*.08,.12,.02),Ze.add(he);let pe=Ee(new ct(.012,6,5),Ye(1118481),!1,!1);pe.position.set(Q*.045,.29,-.05),Ze.add(pe)});let Ne=Ee(new Rn(.035,.25,6),Ye(2777296,.7));Ne.rotation.x=2.6,Ne.position.set(0,0,.1),Ze.add(Ne),Ze.position.set(-3.45,1.8,-1.6),Ze.rotation.y=.9,Ce.add(Ze),Ze.userData.dynamic=!0,$n.parrot=Ze;let fe=new $e,ke=Ye(13647914,.6),lt=Ee(new ct(.09,12,8),ke);lt.scale.set(1.3,.5,1),lt.position.y=.06,fe.add(lt),[-1,1].forEach(Q=>{let he=Ee(new ct(.035,8,6),ke);he.scale.set(1.2,.8,1.6),he.position.set(Q*.12,.07,-.08),fe.add(he);for(let ve=0;ve<3;ve++){let se=Ee(new ot(.008,.008,.12,4),ke,!1,!1);se.rotation.z=Q*1,se.position.set(Q*.12,.03,-.03+ve*.04),fe.add(se)}let pe=Ee(new ct(.014,6,5),Ye(1118481),!1,!1);pe.position.set(Q*.03,.12,-.06),fe.add(pe)}),Ce.add(fe),fe.userData.dynamic=!0,$n.crab=fe,$n.gulls=[];let ie=new kt({color:16052458,side:xt});for(let Q=0;Q<4;Q++){let he=new $e,pe=new rt(new Zt(.9,.18),ie);pe.geometry.translate(-.45,0,0),he.add(pe);let ve=new rt(new Zt(.9,.18),ie);ve.geometry.translate(.45,0,0),he.add(ve),pe.rotation.x=ve.rotation.x=-Math.PI/2;let se=new $e;se.add(pe);let P=new $e;P.add(ve),he.add(se),he.add(P),he.userData.dynamic=!0,Ce.add(he),$n.gulls.push({g:he,wl:se,wr:P,r:16+Q*6,h:11+Q*2.5,sp:.12+Q*.03,ph:Q*1.7})}let le=Ee(new ct(1,24,12,0,Math.PI*2,0,Math.PI/2),Ye(14270346,1),!1,!1);le.scale.set(14,3,10),le.position.set(150,-1.2,-230),Ce.add(le);let ue=Xs(150,-230,7,.5,.2,12);ue.scale.setScalar(2.4),ue.position.y=1.5;let de=Xs(158,-226,6,-.4,.3,13);de.scale.setScalar(2),de.position.y=1}function _d(i,e){let t=new $e,n=Ee(new ot(.04,.05,1.7,6),Ye(4862752,.9));n.position.y=.85,t.add(n);let s=Ee(new ot(.1,.06,.18,8),Ye(2760728,.7));s.position.y=1.72,t.add(s);let r=new kt({color:16752704,transparent:!0,opacity:.9}),o=new rt(new Rn(.09,.32,8),r);o.position.y=1.95,t.add(o);let a=new rt(new Rn(.05,.2,8),new kt({color:16773280}));a.position.y=1.9,t.add(a);let l=new Mi(new si({map:Rh(),color:16751168,transparent:!0,depthWrite:!1,blending:bi}));l.scale.set(1.1,1.1,1),l.position.y=1.95,t.add(l),t.position.set(i,0,e),Ce.add(t),o.userData.dynamic=a.userData.dynamic=!0,zd.push({flame:o,inner:a,glow:l,ph:i*3+e})}var vd=null;function Nd(i,e){if(!vd){let n=Nn(64,64),s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.45,"rgba(0,0,0,0.55)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,64,64),vd=Kt(n,!1)}let t=new rt(new Zt(i*2,i*2),new kt({map:vd,transparent:!0,opacity:e,depthWrite:!1,color:2759178,polygonOffset:!0,polygonOffsetFactor:-2}));return t.rotation.x=-Math.PI/2,t.renderOrder=1,t}var qs={systems:[],mist:[]};function yd(i,e,t,n){let s=new dt;s.setAttribute("position",new Oe(new Float32Array(i*3),3)),s.setAttribute("color",new Oe(new Float32Array(i*3),3)),s.setAttribute("alpha",new Oe(new Float32Array(i).fill(1),1));let r=new vt({uniforms:{map:{value:Rh()},size:{value:e},scale:{value:600}},vertexShader:"attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float size; uniform float scale; void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC, a); }",transparent:!0,depthWrite:!1,blending:n?bi:fs}),o=new Co(s,r);return o.frustumCulled=!1,o.userData.dynamic=!0,Ce.add(o),o}function r1(){let i=Nn(64,64),e=i.getContext("2d");return e.fillStyle="rgba(70,45,20,1)",e.beginPath(),e.moveTo(32,58),e.quadraticCurveTo(20,50,8,16),e.quadraticCurveTo(14,18,18,12),e.quadraticCurveTo(24,20,32,6),e.quadraticCurveTo(40,20,46,12),e.quadraticCurveTo(50,18,56,16),e.quadraticCurveTo(44,50,32,58),e.fill(),Kt(i)}function o1(){let i=yd(40,.07,16777215,!0);qs.systems.push({pts:i,kind:"sparks",n:40,data:Array.from({length:40},()=>({life:Math.random()*1.6,max:1.2+Math.random()*.8,x:0,y:0,z:0,vx:0,vy:0,vz:0})),origin:new C(-5.6,.3,.9)});let e=yd(46,.1,16777215,!0);qs.systems.push({pts:e,kind:"flies",n:46,data:Array.from({length:46},(E,x)=>{let S=Math.random()*Math.PI*2,b=4.8+Math.random()*4.2;return{x:Math.cos(S)*b,z:Math.sin(S)*b,y:.3+Math.random()*1.3,ph:Math.random()*20,sp:.3+Math.random()*.5}})});let t=yd(90,.2,16777215,!1),n=[[11.4,2.2],[11.8,.9],[11.5,-.4]].map(([E,x])=>new C(Math.cos(x)*E*Ms(x),-.45,Math.sin(x)*E*Ms(x)));qs.systems.push({pts:t,kind:"spray",n:90,rocks:n,next:n.map((E,x)=>1+x*1.3),data:Array.from({length:90},()=>({life:1,max:1,x:0,y:-5,z:0,vx:0,vy:0,vz:0}))});let s=[],r=new ln([new C(-5.7,0,-6.2),new C(-4.4,0,-4.6),new C(-3,0,-3.9),new C(-2,0,-2.6),new C(-1.5,0,-1.9)]),o=26;for(let E=0;E<o;E++){let x=E/(o-1),S=r.getPointAt(x),b=r.getTangentAt(x),A=(E%2?1:-1)*.07,_=S.x+b.z*A,w=S.z-b.x*A;s.push({x:_,z:w,a:Math.atan2(b.x,b.z)})}let a=new kt({map:r1(),transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),l=new Zt(.13,.13);l.rotateX(-Math.PI/2);let c=new Ls(l,a,s.length),h=new nt,d=new an,u=new C(1,1,1),f=new C,g=new C(0,1,0);s.forEach((E,x)=>{f.set(E.x,Jn(E.x,E.z)+.006,E.z),d.setFromAxisAngle(g,E.a+Math.PI),h.compose(f,d,u),c.setMatrixAt(x,h)}),c.userData.dynamic=!0,c.renderOrder=1,Ce.add(c);let y=Nn(4,64),m=y.getContext("2d"),p=m.createLinearGradient(0,0,0,64);p.addColorStop(0,"rgba(255,255,255,0)"),p.addColorStop(.55,"rgba(255,255,255,0.8)"),p.addColorStop(.8,"rgba(255,255,255,0.6)"),p.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=p,m.fillRect(0,0,4,64);let M=Kt(y);[[24,2.2,-.2],[42,4.5,.2],[70,7,.6]].forEach(([E,x,S])=>{let b=new rt(new ot(E,E,x,64,1,!0),new kt({map:M,color:12110056,transparent:!0,opacity:0,depthWrite:!1,side:xt,fog:!1}));b.position.y=S+x/2-.6,b.userData.dynamic=!0,b.renderOrder=2,b.visible=!1,Ce.add(b),qs.mist.push(b)})}function a1(i){qs.systems.forEach(t=>{let n=t.pts.geometry.attributes.position,s=t.pts.geometry.attributes.color;if(t.kind==="sparks"){let r=.7+Ln*.6;t.data.forEach((o,a)=>{o.life+=i,o.life>o.max&&(o.life=0,o.max=1+Math.random()*1,o.x=t.origin.x+(Math.random()-.5)*.25,o.y=t.origin.y,o.z=t.origin.z+(Math.random()-.5)*.25,o.vx=(Math.random()-.5)*.25,o.vy=.7+Math.random()*.7,o.vz=(Math.random()-.5)*.25),o.x+=(o.vx+Math.sin(it*3+a)*.12)*i,o.y+=o.vy*i,o.z+=o.vz*i,o.vy*=.995;let l=1-o.life/o.max;n.setXYZ(a,o.x,o.y,o.z),s.setXYZ(a,1*l*r,.55*l*l*r,.15*l*l*l*r)})}else if(t.kind==="flies"){let r=Ot(.35,.85,Ln);if(t.pts.visible=r>.01,!t.pts.visible)return;t.data.forEach((o,a)=>{let l=it*o.sp+o.ph;n.setXYZ(a,o.x+Math.sin(l*.9)*.6,o.y+Math.sin(l*1.7)*.25,o.z+Math.cos(l*.7)*.6);let c=Math.pow(Math.max(0,Math.sin(l*2.3)),3)*r;s.setXYZ(a,.85*c,1*c,.35*c)})}else if(t.kind==="spray"){t.next.forEach((a,l)=>{if(t.next[l]=a-i,t.next[l]<=0){t.next[l]=2.5+Math.random()*3;let c=t.rocks[l],h=new C(c.x,0,c.z).normalize(),d=0;t.data.forEach(u=>{d<26&&u.life>=u.max&&(d++,u.life=0,u.max=.8+Math.random()*.6,u.x=c.x+(Math.random()-.5)*.5,u.y=c.y+.1,u.z=c.z+(Math.random()-.5)*.5,u.vx=-h.x*.6+(Math.random()-.5)*.8,u.vy=1.4+Math.random()*1.4,u.vz=-h.z*.6+(Math.random()-.5)*.8)})}});let r=t.pts.geometry.attributes.alpha,o=1-Ln*.55;t.data.forEach((a,l)=>{a.life<a.max&&(a.life+=i,a.vy-=4.5*i,a.x+=a.vx*i,a.y+=a.vy*i,a.z+=a.vz*i);let c=a.life<a.max?1-a.life/a.max:0;n.setXYZ(l,a.x,a.life<a.max?a.y:-9,a.z),s.setXYZ(l,.97*o,.99*o,1*o),r.setX(l,Math.min(1,c*1.6)*.85)}),r.needsUpdate=!0}n.needsUpdate=!0,s.needsUpdate=!0});let e=Ot(.45,1,Ln);qs.mist.forEach((t,n)=>{t.visible=e>.01,t.material.opacity=e*(.45-n*.09)*(.85+Math.sin(it*.2+n)*.15),t.rotation.y=it*.004*(n%2?1:-1)})}var lh=null;function Rh(){if(lh)return lh;let i=Nn(64,64),e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),lh=Kt(i),lh}function l1(){let i=new $e,e=Ye(16777215,.8,{map:Kt(Es(256,128,"#6a4222",5))}),t=Ye(2762016,.5,{metalness:.6}),n=Ee(new Yt(.9,.45,.55),e);n.position.y=.225,i.add(n);let s=Ee(new ot(.275,.275,.9,16,1,!1,0,Math.PI),e);s.rotation.z=Math.PI/2,s.position.set(0,.45,0);let r=new $e;r.position.set(0,.45,-.275),s.position.set(0,0,.275),r.add(s),r.rotation.x=-1.2,i.add(r),[-.35,.35].forEach(u=>{let f=Ee(new Yt(.05,.47,.57),t);f.position.set(u,.225,0),i.add(f)});let o=Ye(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.4}),a=new ot(.045,.045,.01,14);for(let u=0;u<40;u++){let f=Ee(a,o,!1,!1);f.position.set((Math.random()-.5)*.8,.44+Math.random()*.06,(Math.random()-.5)*.45),f.rotation.set(Math.random()*.6,Math.random()*3,Math.random()*.6),i.add(f)}for(let u=0;u<14;u++){let f=Ee(a,o,!1,!0);f.position.set(.5+Math.random()*.5,.006,(Math.random()-.5)*.7),f.rotation.y=Math.random()*3,i.add(f)}i.position.set(3.1,0,-2.4),i.rotation.y=-.7,Ce.add(i);let l=Xd(.3,.36,.9),c=Ye(16777215,.85,{map:Kt(Es(256,128,"#7a5230",10))});[[-3.2,-1.9,0],[-3.75,-1.3,.5],[-3.45,-1.6,2]].forEach(([u,f,g],y)=>{let m=Ee(l,c);y===2?m.position.set(u,.9+.45,f):m.position.set(u,.45,f),m.rotation.y=g,Ce.add(m),$0(m,.36,.9)});let h=Ee(new Yt(.06,2.2,.06),Ye(6965802));h.position.set(-2.4,.9,3.4),h.rotation.z=.3,Ce.add(h);let d=Ee(new Yt(.25,.6,.03),Ye(6965802));d.position.set(0,1.2,0),h.add(d)}function Xd(i,e,t){let n=[];for(let s=0;s<=10;s++){let r=s/10;n.push(new ne(i+(e-i)*Math.sin(Math.PI*r),r*t-t/2))}return n.unshift(new ne(0,-t/2)),n.push(new ne(0,t/2)),new Xi(n,20)}function $0(i,e,t){let n=Ye(2828068,.5,{metalness:.6});[-.36,0,.36].forEach(s=>{let r=s*t,o=s===0?e+.005:e*.94,a=Ee(new It(o,.012,6,24),n,!1,!1);a.rotation.x=Math.PI/2,a.position.y=r,i.add(a)})}function Ch(i,e){i.updateMatrixWorld(!0);let t=new nt().copy(i.matrixWorld).invert(),n=new Map;(function r(o){if(!(o.userData.dynamic&&o!==i)){if(o.isMesh&&!o.isInstancedMesh&&o.material&&!Array.isArray(o.material)&&!o.material.transparent&&o.geometry.attributes.uv){let a=`${o.material.uuid}|${o.castShadow}|${o.receiveShadow}`;n.has(a)||n.set(a,[]),n.get(a).push(o)}o.children.slice().forEach(r)}})(i);let s=0;return n.forEach(r=>{if(r.length<2)return;let a=r.every(d=>d.geometry.attributes.color)?["position","normal","uv","color"]:["position","normal","uv"],l=r.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone(),f=new dt;return a.forEach(g=>{u.attributes[g]&&f.setAttribute(g,u.attributes[g])}),f.applyMatrix4(e?new nt().multiplyMatrices(t,d.matrixWorld):d.matrixWorld),f}),c=zr(l,!1);if(!c)return;let h=new rt(c,r[0].material);h.castShadow=r[0].castShadow,h.receiveShadow=r[0].receiveShadow,i.add(h),r.forEach(d=>{d.parent&&d.parent.remove(d)}),s+=r.length}),s}function c1(i){return Math.max(.8,i*.95/(Math.PI*2)+.22)}function h1(i){bn&&(Ce.remove(bn),bn.traverse(E=>{E.geometry&&E.geometry.dispose()})),gn=c1(i),La=gn+.36,bn=new $e;let e=Kt(Es(512,512,"#6b4526",7)),t=Ee(new ot(gn,gn,.06,64),[Ye(4861464,.85),Ye(16777215,.7,{map:e}),Ye(3810322,.9)]);t.position.y=Wt-.03,bn.add(t);let n=Ee(new It(gn+.005,.018,8,80),Ye(3813416,.45,{metalness:.7}),!1,!1);n.rotation.x=Math.PI/2,n.position.y=Wt-.03,bn.add(n);let s=Ye(9075296,.4,{metalness:.8}),r=Math.round(gn*16);for(let E=0;E<r;E++){let x=E/r*Math.PI*2,S=Ee(new ct(.012,6,4),s,!1,!1);S.position.set(Math.cos(x)*(gn+.02),Wt-.03,Math.sin(x)*(gn+.02)),bn.add(S)}let o=Ye(16777215,.85,{map:Kt(Es(256,128,"#6a4526",12))}),a=Ee(Xd(.3+gn*.12,.36+gn*.14,Wt-.06),o);a.position.y=(Wt-.06)/2,bn.add(a);let l=Nd(gn*1.05,.5);l.position.y=.006,l.userData.dynamic=!0,bn.add(l),$0(a,.36+gn*.14,Wt-.06);let c=new $e,h=new oi({color:2902562,roughness:.12,metalness:0,clearcoat:1,transparent:!0,opacity:.88}),d=new Xi([[0,0],[.034,0],[.038,.006],[.038,.1],[.03,.125],[.013,.145],[.012,.19],[.015,.195],[.014,.2],[0,.2]].map(([E,x])=>new ne(E,x)),18);c.add(Ee(d,h));let u=Ee(new ot(.0105,.011,.025,10),Ye(11569754,.9));u.position.y=.205,c.add(u);let f=Ee(new ot(.0385,.0385,.045,18,1,!0),Ye(15259824,.9,{side:xt}),!1,!1);f.position.y=.06,c.add(f),c.position.set(.17,Wt,-.09),c.rotation.y=.6,bn.add(c);let g=Ye(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.35}),y=new ot(.022,.022,.006,14);[[-.16,.06,5],[-.12,.12,2],[-.19,.12,1]].forEach(([E,x,S])=>{for(let b=0;b<S;b++){let A=Ee(y,g,!1,!0);A.position.set(E+Math.sin(b*2.1)*.003,Wt+.003+b*.006,x+Math.cos(b*1.7)*.003),bn.add(A)}});let m=new $e,p=Ee(new Yt(.12,.003,.018),Ye(13158608,.25,{metalness:.9}),!1,!0);p.position.x=.06,m.add(p);let M=Ee(new ot(.009,.009,.07,8),Ye(3810324,.7),!1,!0);M.rotation.z=Math.PI/2,M.position.x=-.035,m.add(M),m.position.set(.02,Wt+.009,.17),m.rotation.y=.5,bn.add(m),gd=u1(),gd.userData.dynamic=!0,bn.add(gd),Ch(bn,!0),Ce.add(bn)}function u1(){let i=new $e,e=Ye(2761760,.45,{metalness:.7}),t=Ee(new ot(.07,.08,.03,12),e);t.position.y=.015,i.add(t);let n=new rt(new ot(.055,.055,.13,12,1,!0),new tt({color:16760944,emissive:16751152,emissiveIntensity:1.3,transparent:!0,opacity:.75,side:xt}));n.position.y=.1,i.add(n);let s=Ee(new Rn(.075,.06,12),e);s.position.y=.195,i.add(s);let r=Ee(new It(.025,.006,6,12),e);r.position.y=.24,i.add(r),[0,1,2,3].forEach(a=>{let l=Ee(new Yt(.008,.13,.008),e),c=a/4*Math.PI*2+.4;l.position.set(Math.cos(c)*.058,.1,Math.sin(c)*.058),i.add(l)});let o=new Mi(new si({map:Rh(),color:16752720,transparent:!0,depthWrite:!1,blending:bi,opacity:.8}));return o.scale.set(.5,.5,1),o.position.y=.1,i.add(o),i.userData.glow=o,i.position.y=Wt,i}var qr=null,ch=null;function d1(){if(qr)return qr;let i=[new ne(0,Li-.012),new ne(ph-.012,Li-.012),new ne(Ki-.012,.004),new ne(Ki,0),new ne(Ki+.004,.012),new ne(ph,Li-.01),new ne(ph-.01,Li),new ne(0,Li)];qr=new Xi(i,36);let e=qr.attributes.position,t=qr.attributes.uv;for(let n=0;n<e.count;n++)t.setY(n,Ui(e.getY(n)/Li,0,1));return qr}function f1(i){if(!ch){let o=QM();ch=[16777215,14268576,14725264,13154472].map(a=>new tt({color:a,map:o,roughness:.68,side:xt}))}let e=new $e,t=Ee(d1(),ch[i%ch.length]);e.add(t);let n=Ye(12621896,.42,{metalness:.85}),s=Ee(new It(Ki+.004,.007,6,36),n,!1,!1);s.rotation.x=Math.PI/2,s.position.y=.012,e.add(s);let r=Ee(new It(ph+.002,.006,6,36),n,!1,!1);return r.rotation.x=Math.PI/2,r.position.y=Li-.03,e.add(r),e.userData.body=t,e}var p1=new Yt(mh,mh,mh),m1=[2,5,1,6,3,4];function g1(i,e){let t=m1.map(s=>new tt({map:KM(s),roughness:.45,emissive:16760896,emissiveIntensity:0})),n=Ee(p1,t);return x1(n,i,e),n}function x1(i,e,t){let n=new Vn;e===6?n.set(Math.PI,0,0):e===2?n.set(0,0,Math.PI/2):e===5?n.set(0,0,-Math.PI/2):e===3?n.set(-Math.PI/2,0,0):e===4&&n.set(Math.PI/2,0,0);let s=new an().setFromEuler(n),r=new an().setFromAxisAngle(new C(0,1,0),t||0);i.quaternion.copy(r.multiply(s)),i.userData.value=e}var P0=[[0,0],[.068,.035],[-.066,.04],[.012,-.072],[-.058,-.048],[.07,-.042],[-.004,.08]];var I0=null,Md={};function _1(i){if(Md[i])return Md[i];let e=Nn(128,128),t=e.getContext("2d");t.fillStyle="#"+new xe(i).getHexString(),t.fillRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.85)";for(let s=8;s<128;s+=22)for(let r=s/22%2?8:19;r<128;r+=22)t.beginPath(),t.arc(r,s,4,0,Math.PI*2),t.fill();let n=Kt(e);return n.wrapS=n.wrapT=en,n.repeat.set(3,2),Md[i]=n,n}var J0={barrelGeometry:(i,e,t)=>Xd(i,e,t),woodMat:()=>I0||(I0=Ye(16777215,.85,{map:Kt(Es(128,64,"#6a4526",8))})),skullTexture:()=>v1(),dotTexture:i=>_1(i),mergeGeometries:i=>zr(i.map(e=>{let t=e.index?e.toNonIndexed():e,n=new dt;return["position","normal","uv"].forEach(s=>{t.attributes[s]&&n.setAttribute(s,t.attributes[s])}),n})),batchStatic:(i,e)=>Ch(i,e)};function K0(i,e,t){return sd(i,e,J0,t)}var BT=u0,hh=null;function v1(){if(hh)return hh;let i=Nn(128,128),e=i.getContext("2d");return qd(e,64,60,1,"#f1ead8","rgba(0,0,0,0)"),hh=Kt(i),hh}function qd(i,e,t,n,s,r){i.save(),i.translate(e,t),i.scale(n,n),i.strokeStyle=s,i.lineWidth=12,i.lineCap="round",i.beginPath(),i.moveTo(-40,20),i.lineTo(40,58),i.moveTo(40,20),i.lineTo(-40,58),i.stroke(),i.fillStyle=s,[[-44,20],[-40,12],[44,20],[40,12],[-44,58],[-38,64],[44,58],[38,64]].forEach(([o,a])=>{i.beginPath(),i.arc(o,a,7,0,Math.PI*2),i.fill()}),i.beginPath(),i.arc(0,-8,30,0,Math.PI*2),i.fill(),i.fillRect(-16,12,32,20),i.fillStyle="#111",i.beginPath(),i.arc(-11,-8,8,0,Math.PI*2),i.arc(11,-8,8,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(0,2),i.lineTo(-5,12),i.lineTo(5,12),i.closePath(),i.fill(),i.fillRect(-10,24,3,8),i.fillRect(-2,24,3,8),i.fillRect(6,24,3,8),i.restore()}var Ht=new C,En=new C,Jr=new C,Pa=new C(0,1,0);function Sd(i,e,t,n){Ht.subVectors(t,e);let s=Ht.length();i.position.copy(e).addScaledVector(Ht,.5),i.scale.set(1,Math.max(.001,n?s/n:s),1),i.quaternion.setFromUnitVectors(Pa,Ht.normalize())}function Ah(i,e,t){let n=i.L1||.34,s=i.L2||.34,r=En.subVectors(t,e),o=r.length(),a=(n+s)*.995,l=Jr.copy(t);o>a&&(l.copy(e).addScaledVector(r.normalize(),a),o=a);let c=new C().addVectors(e,l).multiplyScalar(.5),h=Math.sqrt(Math.max(0,n*n-o/2*(o/2))),d=new C().subVectors(l,e).normalize(),u=new C(i.side*.8,-1,.25);u.addScaledVector(d,-u.dot(d)).normalize();let f=c.addScaledVector(u,h);if(Sd(i.upper,e,f,n),i.short){let g=f.clone().lerp(l,.55);Sd(i.fore,g,l,s),i.fore.scale.x=i.fore.scale.z=.85}else Sd(i.fore,f,l,s);i.cuff.position.copy(f).lerp(l,.86),i.cuff.quaternion.copy(i.fore.quaternion),i.hand.position.copy(l),i.hand.quaternion.copy(i.fore.quaternion)}function Ud(i,e,t,n){let s=Nn(i,e),r=new Mi(new si({map:Kt(s),transparent:!0,depthWrite:!1,depthTest:!0,sizeAttenuation:!n}));return r.userData.cv=s,r.scale.set(t,t*e/i,1),r.renderOrder=5,r}function y1(i,e){let t=i.userData.cv,n=t.getContext("2d"),s=t.width,r=t.height;n.clearRect(0,0,s,r),n.font=`600 40px ${Hd}`;let o=(e.out?"\u2620 ":"")+(e.host?"\u{1F451} ":"")+(e.bot?"\u{1F916} ":"")+e.name;for(;n.measureText(o).width>s-90&&o.length>3;)o=o.slice(0,-2);let a=Math.min(s-24,n.measureText(o).width+52),l=(s-a)/2,c=14,h=r-28,d=h/2,u=()=>{n.beginPath(),n.moveTo(l+d,c),n.arcTo(l+a,c,l+a,c+h,d),n.arcTo(l+a,c+h,l,c+h,d),n.arcTo(l,c+h,l,c,d),n.arcTo(l,c,l+a,c,d),n.closePath()};if(n.save(),e.turn&&(n.shadowColor="rgba(244,201,93,0.75)",n.shadowBlur=14),n.fillStyle=e.turn?"rgba(74,50,18,0.93)":"rgba(22,16,11,0.8)",u(),n.fill(),n.restore(),e.turn&&e.progress!==null&&e.progress!==void 0){u(),n.lineWidth=5,n.strokeStyle="rgba(244,201,93,0.22)",n.stroke();let f=2*(a-2*d)+2*Math.PI*d;n.save(),n.setLineDash([f*e.progress,f+10]),n.strokeStyle=e.progress<.27?"#ff6a4a":"#f4c95d",n.beginPath(),n.moveTo(s/2,c),n.arcTo(l+a,c,l+a,c+h,d),n.arcTo(l+a,c+h,l,c+h,d),n.arcTo(l,c+h,l,c,d),n.arcTo(l,c,l+a,c,d),n.lineTo(s/2,c),n.stroke(),n.restore()}else u(),n.lineWidth=e.turn?5:2.5,n.strokeStyle=e.turn?"#f4c95d":"rgba(217,179,106,0.42)",n.stroke();n.textAlign="center",n.textBaseline="middle",n.fillStyle=e.out?"#9a9088":e.away?"#e0a060":e.turn?"#ffe6b0":"#f5ebd6",n.fillText(o,s/2,r/2+2),i.material.map.needsUpdate=!0}function M1(i,e){let t=i.userData.cv,n=t.getContext("2d"),s=t.width,r=t.height;n.clearRect(0,0,s,r);let o=e.kind==="liar"||e.kind==="spot";if(n.fillStyle=o?"#b3242a":"#f6ecd2",Ua(n,10,10,s-20,r-50,36),n.fill(),n.beginPath(),n.moveTo(s/2-22,r-42),n.lineTo(s/2,r-6),n.lineTo(s/2+22,r-42),n.closePath(),n.fill(),n.lineWidth=5,n.strokeStyle=o?"#ffd0c0":"#6a4a20",Ua(n,10,10,s-20,r-50,36),n.stroke(),n.textAlign="center",n.textBaseline="middle",o)n.fillStyle="#fff",n.font=`900 64px ${Qr}`,n.fillText(e.kind==="spot"?"Genau!":"L\xFCgner!",s/2,(r-40)/2+6);else{n.fillStyle="#2a1a0a",n.font=`900 70px ${Qr}`;let a=`${e.qty} \xD7`,l=n.measureText(a).width,c=78,h=l+18+c;n.textAlign="left",n.fillText(a,s/2-h/2,(r-40)/2+6),wh(n,s/2-h/2+l+18,(r-40)/2-c/2+4,c,e.face)}i.material.map.needsUpdate=!0}function S1(i,e){let t=i.userData.cv,n=t.getContext("2d"),s=t.width,r=t.height;if(n.clearRect(0,0,s,r),!e){i.material.map.needsUpdate=!0;return}if(n.fillStyle=e.tone==="good"?"rgba(20,70,40,0.88)":e.tone==="bad"?"rgba(110,20,20,0.9)":"rgba(14,26,38,0.85)",Ua(n,8,8,s-16,r-16,30),n.fill(),n.lineWidth=4,n.strokeStyle="#d9b36a",n.stroke(),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#e8d6a8",n.font=`600 30px ${Hd}`,n.fillText(e.top,s/2,44),n.fillStyle="#fff4dc",n.font=`900 64px ${Qr}`,e.face){let o=`${e.qty} \xD7`,a=n.measureText(o).width,l=66,c=a+14+l;n.textAlign="left",n.fillText(o,s/2-c/2,112),wh(n,s/2-c/2+a+14,112-l/2,l,e.face)}else n.fillText(e.big||"",s/2,112);i.material.map.needsUpdate=!0}function b1(i,e){let t=new $e;Ce.add(t);let n=K0(i.id,e,i.avatar);t.add(n.g);let s=new $e;Ce.add(s);let r=new $e;r.position.set(0,0,-Ki),s.add(r);let o=new $e;r.add(o);let a=f1(Vd(i.id));o.add(a);let l=new $e;s.add(l);let c=new rt(new Fs(.2,.235,40),new kt({color:16042333,transparent:!0,opacity:0,side:xt,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.003,s.add(c);let h=Nd(.2,.32);if(h.position.y=.002,s.add(h),!e){let y=Nd(.42,.45);y.position.set(0,.008,.05),t.add(y)}let d=e?null:E1();d&&n.g.add(d);let u=Ud(512,96,.5,!0);u.position.set(0,1.5,.05);let f=Ud(420,200,.4);f.position.set(.46,1.45,-.05),f.visible=!1,f.renderOrder=6,e||(t.add(u),t.add(f));let g={id:i.id,isMe:e,frame:t,parts:n,cupRoot:s,mug:d,idle:null,nextIdle:0,expr:null,tiltG:r,flipG:o,cup:a,diceG:l,ring:c,label:u,bubble:f,pose:{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0},hold:0,holdTarget:0,anim:null,peek:0,peekOn:!1,labelKey:"",out:!1,lookYaw:0,lookCur:0,nod:0,slam:0,bubbleUntil:0,bubbleSticky:!1,dice:[],diceRound:-1};return eo(g),g}var Pi=null;function E1(){Pi||(Pi={body:new ot(.033,.037,.085,14).translate(0,.0425,0),band:new It(.036,.004,5,18).rotateX(Math.PI/2),handle:new It(.022,.006,6,12,Math.PI).rotateZ(-Math.PI/2).translate(.037,.045,0),rum:new os(.03,14).rotateX(-Math.PI/2).translate(0,.078,0),wood:Ye(16777215,.8,{map:Kt(Es(128,64,"#7a5230",6))}),iron:Ye(2828068,.45,{metalness:.7}),liquid:Ye(4858888,.2)});let i=new $e;return i.add(Ee(Pi.body,Pi.wood)),[.014,.07].forEach(e=>{let t=Ee(Pi.band,Pi.iron,!1,!1);t.position.y=e,i.add(t)}),i.add(Ee(Pi.handle,Pi.iron)),i.add(Ee(Pi.rum,Pi.liquid,!1,!1)),Ch(i,!0),i.userData.rest=new C(-.3,Wt,-.5),i.position.copy(i.userData.rest),i}function T1(i,e){return i==="sad"?[.006,e*.42]:i==="angry"?[-.007,-e*.34]:i==="happy"?[.013,e*.14]:i==="skeptic"?e>0?[.018,e*.18]:[-.006,-e*.24]:[0,0]}function j0(i,e,t){(i.brows||[]).forEach(n=>{let[s,r]=T1(e,n.sd);n.lift+=(s-n.lift)*t,n.tilt+=(r-n.tilt)*t,n.m.position.y=n.y0+n.lift,n.m.rotation.z=n.z0+n.tilt})}function wa(i,e,t){let n=yt[i];n&&!n.isMe&&(n.expr={kind:e,until:performance.now()+t})}function D0(i){Ce.remove(i.frame),Ce.remove(i.cupRoot)}function w1(i){let e=i.players,t=e.length,n=e.map(r=>r.id+":"+JSON.stringify(r.avatar||null)).join(",")+"|"+i.meId;if(n===w0)return!1;w0=n,h1(t),Object.keys(yt).forEach(r=>{e.find(o=>o.id===r)||(D0(yt[r]),delete yt[r])});let s=Math.max(0,e.findIndex(r=>r.id===i.meId));zn=[];for(let r=0;r<t;r++){let o=e[(s+r)%t],a=yt[o.id],l=o.id===i.meId,c=JSON.stringify(o.avatar||null);a&&(a.isMe!==l||a.avKey!==c)&&(D0(a),delete yt[o.id],a=null),a||(a=yt[o.id]=b1(o,l),a.avKey=c,G0(a));let h=Math.PI/2+r*Math.PI*2/t,d=Math.cos(h),u=Math.sin(h);a.dir=new C(d,0,u),a.rot=Math.atan2(d,u),a.frame.position.set(d*La,0,u*La),a.frame.rotation.y=a.rot;let f=u,g=-d;a.cupRoot.position.set(d*(gn-.22)+f*.12,Wt,u*(gn-.22)+g*.12),a.cupRoot.rotation.y=a.rot,a.idx=r,zn.push(a)}return!0}function eo(i){let e=i.pose,t=e.flip*Math.PI;i.flipG.position.set(b0.x*e.side+e.shx,e.lift+Li*(1-Math.cos(t))/2+e.shy,Ki+b0.z*e.side+e.shz),i.flipG.rotation.set(e.wob*.6,0,t+e.wob),i.tiltG.rotation.x=-e.tilt}var bd=new C;function A1(i){return i.isMe?bd.set(Ki*.98,Li*.5,Ki*.35):bd.set(0,Li*.55,Ki*.95),i.flipG.localToWorld(bd)}function Oa(i,e){i.holdTarget=e}function Ba(i){for(;i.diceG.children.length;){let e=i.diceG.children[0];i.diceG.remove(e),Array.isArray(e.material)&&e.material.forEach(t=>t.dispose())}i.dice=[]}function to(i,e,t){Ba(i);let n=Vd(i.id+"|"+t);e.forEach((s,r)=>{let o=P0[r%P0.length],a=(n>>r*3)%7/7-.5,l=g1(s,a*1.2+r);l.position.set(o[0]+a*.01,mh/2+.001,o[1]-a*.01),i.diceG.add(l),i.dice.push(l)})}function L0(i,e,t,n,s){let r=Object.assign({},i.pose);i.anim&&(i.anim.cancelled=!0);let o=Ha(e,t,a=>{if(o.cancelled)return;let l=k0(a);Object.keys(n).forEach(c=>{i.pose[c]=Dn(r[c],n[c],l)}),eo(i)},()=>{o.cancelled||(i.anim===o&&(i.anim=null),s&&s())});return i.anim=o,o}function R1(i,e,t){let n=i.pose;i.anim&&(i.anim.cancelled=!0),Oa(i,1);let s=Object.assign({},n),r=380,o=1050,a=320,l=Math.random()*6,c=Ha(r+o+a,e,h=>{if(c.cancelled)return;let d=h*(r+o+a);if(d<r){let u=k0(d/r);n.side=Dn(s.side,0,u),n.flip=Dn(s.flip,1,u),n.lift=Dn(s.lift,.2,u),n.tilt=Dn(s.tilt,0,u),n.shx=n.shy=n.shz=n.wob=0,u>.6&&i.diceG.children.length&&Ba(i)}else if(d<r+o){let u=(d-r)/o,f=Math.sin(Math.PI*u);n.side=0,n.flip=1,n.lift=.2+f*.06,n.tilt=0,n.shx=Math.sin(u*48+l)*.035*f,n.shz=Math.cos(u*41+l)*.03*f,n.shy=Math.abs(Math.sin(u*30))*.03*f,n.wob=Math.sin(u*44+l)*.12*f}else{let u=(d-r-o)/a,f=u*u;n.shx=n.shy=n.shz=n.wob=0,n.side=0,n.flip=Dn(1,0,Math.min(1,u*1.6)),n.lift=Dn(.2,0,f)}eo(i)},()=>{c.cancelled||(Object.assign(n,{side:0,flip:0,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),eo(i),i.anim===c&&(i.anim=null),t&&t())});if(i.anim=c,at&&at.sound){for(let h=0;h<9;h++)setTimeout(()=>at.sound("rattle",i.isMe?1:.45),e+r+h*110+Math.random()*40);setTimeout(()=>at.sound("slam",i.isMe?1:.5),e+r+o+a-20)}}function C1(i,e){Oa(i,1),i.peekOn=!1,L0(i,380,e,{lift:.22,tilt:0,flip:.25},()=>{L0(i,480,0,{side:1,flip:1,lift:0},()=>{Oa(i,0),at&&at.sound&&at.sound("thud",.4)})})}function HT(i){at=i,Vs=i.container,bt=document.createElement("canvas"),bt.className="scene3d-canvas",Vs.insertBefore(bt,Vs.firstChild),$r=(navigator.hardwareConcurrency||8)<=4||Math.min(window.innerWidth,window.innerHeight)<500,zt=new pa({canvas:bt,antialias:!0,powerPreference:"high-performance"}),zt.setPixelRatio(Math.min(window.devicePixelRatio||1,$r?1.5:2)),zt.shadowMap.enabled=!0,zt.shadowMap.type=Os,zt.toneMapping=ps,zt.toneMappingExposure=1.05,z0=Math.min(8,zt.capabilities.getMaxAnisotropy()),Ce=new Mr,Ce.fog=new Eo(15775114,40,260),At=new on(60,1,.05,1200);let e=new Dr(16768184,8018500,1.05);Ce.add(e),Ld=e,Zn=new qi(16763024,2.6),Zn.position.copy(Fa).multiplyScalar(30),Zn.castShadow=!0,Zn.shadow.mapSize.set($r?1024:2048,$r?1024:2048);let t=Zn.shadow.camera;t.left=-5,t.right=5,t.top=5,t.bottom=-5,t.near=5,t.far=60,Zn.shadow.bias=-5e-4,Zn.shadow.normalBias=.02,Ce.add(Zn),Ce.add(Zn.target),Ia=new Lr(16752720,2.2,6,1.6),Ia.position.set(0,Wt+.35,0),Ce.add(Ia);let n=new qi(11124991,.6);if(n.position.set(3,5,9),Ce.add(n),X0=n,yh=new qi(10466559,0),yh.position.copy(Wd).multiplyScalar(30),Ce.add(yh),[[2.2,1.95,-3.3,5],[-5.6,.6,.9,7],[-2.4,1.95,-2.9,5]].forEach(([o,a,l,c])=>{let h=new Lr(16748608,0,c,1.5);h.position.set(o,a,l),Ce.add(h),q0.push(h)}),e1(),t1(),n1(),Xs(-3.6,-3.4,5.6,.5,-.2,1),Xs(4.2,-1.2,4.8,.7,.3,4),Xs(-4.6,2.8,6.2,-.4,.6,7),Xs(6.5,4.5,5.2,.3,.4,2),i1(),l1(),s1(),_d(-2.4,-2.9),_d(2.7,2.6),_d(2.2,-3.3),o1(),Ch(Ce),!$r)try{let o=new Nt(256,256,{type:Vt,samples:zt.capabilities.isWebGL2?4:0});wn=new th(zt,o),wn.addPass(new nh(Ce,At));try{In=new Ea(Ce,At,256,256),In.updateGtaoMaterial({radius:.32,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1}),In.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),In.blendIntensity=.85,In._overrideVisibility=function(){let a=this._visibilityCache;this.scene.traverse(l=>{l.visible&&(l.isSprite||l.isPoints||l.isLine||l===Ji||l.material&&!Array.isArray(l.material)&&(l.material.transparent||l.material.alphaTest>0))&&(l.visible=!1,a.push(l))})},wn.addPass(In)}catch{In=null}Sh=new Wr(new ne(256,256),.32,.55,.86),wn.addPass(Sh),wn.addPass(new ih),bh=new Vr(YM),wn.addPass(bh)}catch{wn=null}Ni=Ud(512,160,.62),Ni.position.set(0,Wt+.5,0),Ni.visible=!1,Ni.renderOrder=7,Ce.add(Ni),Jt=new Mi(new si({map:Kt(Nn(512,288)),transparent:!0,depthTest:!1,depthWrite:!1})),Jt.userData.cv=Jt.material.map.image,Jt.renderOrder=30,Jt.visible=!1,Jt.position.set(0,Wt+.7,0),Ce.add(Jt);let s=null;bt.addEventListener("contextmenu",o=>o.preventDefault()),bt.addEventListener("pointerdown",o=>{A0(),Tn=Tn?Object.assign(Tn,{released:!0}):null,s={x:o.clientX,y:o.clientY,yaw:Di,pitch:bs,moved:!1,id:o.pointerId};try{bt.setPointerCapture(o.pointerId)}catch{}}),bt.addEventListener("pointermove",o=>{if(s&&s.id===o.pointerId){let a=o.clientX-s.x,l=o.clientY-s.y;if(Math.hypot(a,l)>5&&(s.moved=!0),s.moved){let c=2.2/Math.max(300,bt.clientWidth);Di=Ui(s.yaw-a*c*1.2,-1.35,1.35),bs=Ui(s.pitch-l*c,-1.05,.35),kd=performance.now()}}else o.pointerType!=="touch"&&(bt.style.cursor=N0(o)?"pointer":"grab")});let r=o=>{if(!s)return;let a=!s.moved;s=null,a&&N0(o)&&at.onCupClick&&at.onCupClick()};bt.addEventListener("pointerup",r),bt.addEventListener("pointercancel",()=>{s=null}),bt.addEventListener("dblclick",()=>P1()),bt.addEventListener("webglcontextlost",o=>o.preventDefault()),window.addEventListener("keydown",A0),Eh=new ResizeObserver(Fd),Eh.observe(Vs),Fd(),bs=Na,zt.setAnimationLoop(X1)}function N0(i){let e=An&&yt[An.meId];if(!e||e.out)return!1;let t=bt.getBoundingClientRect();return T0.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),E0.setFromCamera(T0,At),E0.intersectObject(e.cup,!0).length>0}function Fd(){if(!Vs||!zt)return;let i=Vs.clientWidth,e=Vs.clientHeight;if(!i||!e)return;zt.setSize(i,e,!1),wn&&wn.setSize(i,e),At.aspect=i/e;let t=At.aspect<1;Dd=t;let n=(t?76:98)*(Math.PI/180),s=2*Math.atan(Math.tan(n/2)/At.aspect)*(180/Math.PI);At.fov=Ui(Math.max(58,s),58,100),At.updateProjectionMatrix(),Th=t?1.7:At.aspect<1.4?1.25:1,Na=t?-.42:-.34,Object.values(yt).forEach(a=>G0(a));let r=e*zt.getPixelRatio()/(2*Math.tan(At.fov*Math.PI/360));qs.systems.forEach(a=>{a.pts.material.uniforms.scale.value=r});let o=t?1.15:Th;Ni&&Ni.scale.set(.62*o,.62*o*160/512,1)}function P1(){Di=0,bs=Na,kd=0}function zT(i){let e=gh;gh=i,bt&&(i&&!e?(bt.style.display="block",bt.style.opacity="0",requestAnimationFrame(()=>requestAnimationFrame(()=>{bt.style.opacity="1"})),vh=0,Fd()):!i&&e&&(bt.style.opacity="0",setTimeout(()=>{gh||(bt.style.display="none")},350)))}function GT(i,e){let t=yt[i];t&&(t.isMe||(t.peekOn=!!e))}function kT(i){Pd=!!i;let e=An&&yt[An.meId];e&&(e.peekOn=Pd),at&&at.sound&&i&&at.sound("lift",.6)}function VT(i,e){let t=yt[i];t&&(t.lookYaw=e)}function U0(i){let e=An;return e&&e.gamePhase==="bidding"&&!i.anim&&i.pose.flip<.01&&!i.out}function Q0(i){return!i||!i.turnMs||!i.turnDeadline?null:Ui((i.turnDeadline-Date.now())/i.turnMs,0,1)}function em(i,e,t){let n=t.currentTurnId===e.id,s=n?Q0(t):null,r=[e.name,e.eliminated,n,e.isBot,e.connected,e.isHost,s===null?"":Math.round(s*80)].join("|");i.labelKey!==r&&(i.labelKey=r,y1(i.label,{name:e.name,dice:e.dice,out:e.eliminated,turn:n,bot:e.isBot,away:!e.connected&&!e.isBot,host:e.isHost,progress:s}))}function F0(i,e,t,n){i.isMe||(M1(i.bubble,e),i.bubble.visible=!0,i.bubbleUntil=performance.now()+t,i.bubbleSticky=!!n)}function uh(i){let e=i?JSON.stringify(i):"";if(e!==Ad){if(Ad=e,!i){Ni.visible=!1;return}S1(Ni,i),Ni.visible=!0}}function I1(i){let e=i.reveal;i.gamePhase==="bidding"&&Jt&&(Jt.visible=!1),zn.forEach(t=>{let n=i.players.find(r=>r.id===t.id);if(!n||t.anim)return;let s=n.eliminated&&!(e&&e.dice&&e.dice[n.id]);if(t.out=n.eliminated,t.cupRoot.visible=!s,i.gamePhase==="bidding")Object.assign(t.pose,{flip:0,side:0,lift:0,tilt:t.pose.tilt,shx:0,shy:0,shz:0,wob:0}),Oa(t,1),t.isMe?i.myDice&&i.myDiceRound===i.roundNo&&t.diceRound!==i.roundNo&&(to(t,i.myDice,i.roundNo),t.diceRound=i.roundNo):t.diceRound!==-2&&(Ba(t),t.diceRound=-2);else if(i.gamePhase==="reveal"||i.gamePhase==="over"){Object.assign(t.pose,{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),Oa(t,0);let r="rv"+i.roundNo;e&&e.dice&&e.dice[n.id]&&t.diceRound!==r&&(to(t,e.dice[n.id],r),t.diceRound=r)}eo(t)}),i.reveal&&!(Hn&&Hn.key==="rv"+i.roundNo)&&(tm(i.reveal,!0),nm(i.reveal))}function tm(i,e){zn.forEach(t=>{t.dice.forEach(n=>{let s=n.userData.value,r=s===i.bid.face||i.wildOnes&&s===1&&i.bid.face!==1;n.userData.match=e&&r,n.userData.dim=e&&!r,n.material.forEach(o=>{o.emissiveIntensity=0,o.color.setScalar(e&&!r?.45:1)})})})}function D1(i){if(!zt)return;let e=An;An=i;let t=w1(i);i.players.forEach(r=>{let o=yt[r.id];o&&(em(o,r,i),o.turn=i.currentTurnId===r.id,o.out&&!r.eliminated&&(o.out=!1,o.anim||(o.cupRoot.visible=!0)),i.phase==="lobby"&&(o.cheer=!1),!o.isMe&&r.peeking!==void 0&&(o.peekOn=!!r.peeking),!o.isMe&&r.look!==void 0&&!r.isBot&&(o.lookYaw=r.look))}),i.myDice&&(Id={round:i.myDiceRound,dice:i.myDice}),Da=i.spectDice&&i.phase==="playing"?{round:i.myDiceRound,dice:i.spectDice}:null,Da||(ks=null);let n=yt[i.meId];n&&i.gamePhase==="bidding"&&!n.anim&&n.pose.flip<.01&&i.myDiceRound===i.roundNo&&n.diceRound!==i.roundNo&&i.myDice&&(to(n,i.myDice,i.roundNo),n.diceRound=i.roundNo);let s=`${i.roundNo}|${i.gamePhase}`;if((t||!e||e.phaseKey!==s&&!i.expectAnim)&&I1(i),i.phaseKey=s,Yd&&i.gamePhase==="bidding")uh(null);else if(i.gamePhase==="bidding"&&i.bid){let r=i.players.find(o=>o.id===i.bid.id);uh({top:`Gebot von ${r?r.name:"?"}`,qty:i.bid.qty,face:i.bid.face})}else i.gamePhase==="bidding"?uh({top:`Runde ${i.roundNo}`,big:"Neue Runde"}):uh(null);i.startDice>2&&i.totalDice&&(W0=Ui((i.startDice-i.totalDice)/(i.startDice-2),0,1)),i.bid||zn.forEach(r=>{r.bubbleSticky&&!r.bubble.userData.challenge&&(r.bubble.visible=!1,r.bubbleSticky=!1)})}function L1(i){let e=Math.max(180,Math.min(380,2600/Math.max(1,i))),t=1600,n=t+i*e;return{step:e,countStart:t,countEnd:n,verdict:n+350,banner:n+1300}}function N1(i,e,t){return i===e||t&&i===1&&e!==1}function Od(i){let e=Jt.userData.cv,t=e.getContext("2d"),n=e.width,s=e.height;if(t.clearRect(0,0,n,s),t.textAlign="center",t.textBaseline="middle",t.lineJoin="round",i.num!==void 0)t.font=`900 190px ${Qr}`,t.lineWidth=22,t.strokeStyle="rgba(20,10,0,0.85)",t.strokeText(String(i.num),n/2-50,130),t.fillStyle="#f4d58d",t.fillText(String(i.num),n/2-50,130),wh(t,n/2+60,72,110,i.face);else{t.font=`900 118px ${Qr}`,t.lineWidth=20,t.strokeStyle="rgba(0,0,0,0.85)",t.strokeText(i.big,n/2,96),t.fillStyle=i.color,t.fillText(i.big,n/2,96),t.font=`700 40px ${Hd}`;let r=`${i.actual} \xD7`,o=`liegen \xB7 Gebot ${i.qty}`,a=t.measureText(r).width,l=t.measureText(o).width,c=46,h=12,d=a+h+c+h+l,u=n/2-d/2;t.fillStyle="rgba(10,20,30,0.82)",Ua(t,u-20,176,d+40,70,35),t.fill(),t.fillStyle="#fff4dc",t.textAlign="left",t.fillText(r,u,212),u+=a+h,wh(t,u,212-c/2,c,i.face),u+=c+h,t.fillText(o,u,212)}Jt.material.map.needsUpdate=!0,Jt.visible=!0,Jt.userData.popT=performance.now()}function nm(i){let e=i.kind!=="spot",t=e?i.correct?"Gelogen!":"Stimmt!":i.correct?"Genau!":"Daneben!",n=e&&i.correct||!e&&!i.correct?"#ff6a55":"#7fe39a";Od({big:t,color:n,actual:i.actual,qty:i.bid.qty,face:i.bid.face})}function U1(i){let e=i.position.y,t=i.rotation.y;i.userData.match=!0,Ha(320,0,n=>{i.position.y=e+Math.sin(Math.PI*n)*.12+n*.012,i.rotation.y=t+n*Math.PI*.5,i.scale.setScalar(1+n*.14)})}function WT(i){!An||!zt||i.forEach(e=>{switch(e.t){case"roll":{let t=An,n=0;Hn=null,Jt.visible=!1,zn.forEach(s=>{s.cheer=!1}),Tn=null,jr.forEach(s=>Ce.remove(s.m)),jr=[],zn.forEach(s=>{let r=t.players.find(a=>a.id===s.id);if(s.out=!!(r&&r.eliminated),s.expr=null,s.idle=null,!r||r.eliminated){s.cupRoot.visible=!1,Ba(s);return}s.cupRoot.visible=!0,s.peekOn=!1,s.bubble&&(s.bubble.visible=!1,s.bubbleSticky=!1,s.bubble.userData.challenge=!1);let o=n++*60;R1(s,o,()=>{s.isMe?Id.round===e.round&&(to(s,Id.dice,e.round),s.diceRound=e.round):(Ba(s),s.diceRound=-2),s.isMe&&(Kr=.18)})}),tm({bid:{face:0}},!1);break}case"bid":{let t=yt[e.id];if(!t)break;zn.forEach(n=>{n!==t&&!n.bubble.userData.challenge&&(n.bubbleSticky=!1,n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+400))}),t.bubble.userData.challenge=!1,Yd||F0(t,{qty:e.qty,face:e.face},6e4,!0),t.nod=1,zn.filter(n=>n!==t&&!n.isMe&&!n.out).forEach(n=>{Math.random()<.45&&wa(n.id,"skeptic",1800+Math.random()*1500)}),at&&at.sound&&(at.sound("bid",.4),at.sound("quack",t.isMe?.35:.5,fh(t.id),1));break}case"challenge":{let t=yt[e.id];if(!t)break;zn.forEach(n=>{n!==t&&n.id!==e.bidderId&&(n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+200))}),F0(t,{kind:e.kind},6e4,!0),t.bubble.userData.challenge=!0,t.slam=1,t.flap=1,Kr=.25,Ta={caller:e.id,bidder:e.bidderId},wa(e.id,"angry",2600),e.bidderId&&wa(e.bidderId,"skeptic",2600),at&&at.sound&&(at.sound("slam",.9),at.sound("liar",.7),at.sound("quack",.7,fh(t.id)*.85,2));break}case"reveal":{let t="rv"+An.roundNo,n=L1(e.actual),s=An.reveal?An.reveal.wildOnes:!0,r=performance.now();Hn={t0:r,plan:n,key:t,ev:e},Jt.visible=!1;let o=0;zn.forEach(a=>{let l=e.dice[a.id];l&&(a.cupRoot.visible=!0,to(a,l,t),a.diceRound=t,C1(a,350+o++*90))}),setTimeout(()=>{if(!Hn||Hn.t0!==r)return;let a=[];zn.forEach(l=>l.dice.forEach(c=>{let h=N1(c.userData.value,e.bid.face,s);c.userData.dim=!h,c.material.forEach(d=>{d.color.setScalar(h?1:.4),d.emissiveIntensity=0}),h&&a.push(c)})),a.length||(Od({num:0,face:e.bid.face}),at&&at.sound&&at.sound("count",.6,0)),a.forEach((l,c)=>setTimeout(()=>{!Hn||Hn.t0!==r||(U1(l),Od({num:c+1,face:e.bid.face}),at&&at.sound&&at.sound("count",.7,c))},c*n.step))},n.countStart),setTimeout(()=>{!Hn||Hn.t0!==r||(nm(e),at&&at.sound&&at.sound("verdict",.9,e.correct))},n.verdict);break}case"loseDie":{setTimeout(()=>{let t=yt[e.id];if(!t)return;let n=t.dice.filter(s=>s.visible).pop();if(n){let s=n.position.clone(),r=6+Math.random()*4;Ha(1500,0,o=>{n.position.set(s.x+o*.5,s.y+Math.sin(Math.PI*o*.8)*1.3+o*.3,s.z+o*3.2),n.rotation.x=o*r,n.rotation.z=o*r*.7,n.material.forEach(a=>{a.color.setRGB(1,1-o*.6,1-o*.6),a.transparent=!0,a.opacity=o<.75?1:1-(o-.75)/.25})},()=>{n.visible=!1})}if(wd("\u22121 \u{1F3B2}",t,"#ff8a7a"),t.nod=1,wa(e.id,"sad",4200),Ta){let s=Ta.caller===e.id?Ta.bidder:Ta.caller;s&&wa(s,"happy",3800)}at&&at.sound&&(at.sound("lose",.7),at.sound("quack",.4,fh(t.id)*.8,1))},dh(800));break}case"gainDie":{setTimeout(()=>{let t=yt[e.id];t&&(wd("+1 \u{1F3B2}",t,"#8aff9a"),t.flap=1)},dh(800));break}case"out":{setTimeout(()=>{let t=yt[e.id];t&&(wd("\u2620",t,"#ffffff"),t.out=!0)},dh(2e3));break}case"over":{setTimeout(()=>{let t=yt[e.id];t&&(t.cheer=!0,W1(t),t.isMe||(Tn={id:t.id,t0:performance.now()}),at&&at.sound&&(at.sound("win",1),at.sound("quack",.6,fh(t.id)*1.1,3)))},dh(2300));break}default:break}})}function Ot(i,e,t){let n=Ui((t-i)/(e-i),0,1);return n*n*(3-2*n)}var Ed=new xe,XT=new xe,F1=new xe(16763024),O1=new xe(16738872),B1=new xe(15775114),H1=new xe(12607562),z1=new xe(922662),G1=new xe(16767152),k1=new xe(6977712),O0=-1,Td=0;function V1(i){let e=Bd!==null?Bd:W0,t=Td?Math.min(2,(performance.now()-Td)/1e3):0;if(Td=performance.now(),Ln+=(e-Ln)*(1-Math.exp(-t*.45)),Math.abs(Ln-O0)<5e-4)return;O0=Ln;let n=Ln,s=Dn(.2,-.14,Ot(0,.85,n));Fa.set(-.72,s,-.66).normalize(),Ji&&(Ji.material.uniforms.night.value=n),Ss&&(Ss.material.uniforms.night.value=n),Zn.position.copy(Fa).multiplyScalar(30),Zn.intensity=2.6*(1-Ot(.4,.85,n)),Zn.color.copy(F1).lerp(O1,Ot(.15,.7,n)),yh.intensity=.75*Ot(.55,1,n),Ld.intensity=Dn(.9,.32,Ot(.2,1,n)),Ld.color.copy(G1).lerp(k1,Ot(.3,1,n)),X0.intensity=Dn(.35,.18,n),Ed.copy(B1).lerp(H1,Ot(0,.6,n)),Ed.lerp(z1,Ot(.5,1,n)),Ce.fog.color.copy(Ed),zt.toneMappingExposure=Dn(1.05,1.22,Ot(.4,1,n)),Sh&&(Sh.strength=Dn(.32,.75,Ot(.3,1,n))),Y0.forEach(r=>{r.emissiveIntensity=2.2*Ot(.35,.85,n)})}var Bd=null,Mh=null;function qT(i){Mh=i}function YT(){return{calls:zt.info.render.calls,triangles:zt.info.render.triangles}}function ZT(i){Bd=i==null?null:Ui(i,0,1)}function dh(i){return Hn?Math.max(0,Hn.t0+Hn.plan.verdict+i-performance.now()):i}function fh(i){return .8+(Vd(i)>>>5)%9/20}function wd(i,e,t){let n=Nn(384,128),s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle",s.font=`900 80px ${Qr}`,s.lineWidth=12,s.strokeStyle="rgba(0,0,0,0.85)",s.strokeText(i,192,66),s.fillStyle=t,s.fillText(i,192,66);let r=new Mi(new si({map:Kt(n),transparent:!0,depthTest:!1,depthWrite:!1}));r.renderOrder=20,r.scale.set(.6,.2,1);let o=e.cupRoot.position.clone();o.y+=.35,e.isMe&&(o.multiplyScalar(.45),o.y=Wt+.22),r.position.copy(o),Ce.add(r),Ha(1800,0,a=>{r.position.y=o.y+a*.5,r.material.opacity=a<.7?1:1-(a-.7)/.3},()=>{Ce.remove(r),r.material.map.dispose(),r.material.dispose()})}function W1(i){let e=new tt({color:15909450,metalness:.9,roughness:.3,emissive:4861952}),t=new ot(.03,.03,.006,12),n=i.cupRoot.position.clone();for(let s=0;s<80;s++){let r=new rt(t,e);r.position.copy(n),r.position.y+=.3,Ce.add(r),jr.push({m:r,vx:(Math.random()-.5)*2.5,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5,life:2.6+Math.random(),spin:Math.random()*12})}}var Aa=new C,Ra=new C,Ii=new C,Zi=new C,Ca=new C,$i=new an,ui=new an,Yr=new Vn(0,0,0,"YXZ"),ys=new nt;function X1(){if(!gh)return;let i=performance.now(),e=vh?(i-vh)/1e3:.016,t=Math.min(.05,e);vh=i,it+=t;for(let o=xh.length-1;o>=0;o--){let a=xh[o];if(i<a.t0)continue;let l=Math.min(1,(i-a.t0)/a.dur);a.fn(l,!a.started),a.started=!0,l>=1&&(xh.splice(o,1),a.done&&a.done())}Ss&&(Ss.material.uniforms.time.value=it),Ji&&(Ji.material.uniforms.time.value=it);let n=.55+.45*Math.sin(it*.21)*Math.sin(it*.13+1.3);if(B0.forEach(o=>{o.obj.rotation.z=o.base+Math.sin(it*1.3+o.ph)*.05*(.7+n)+n*.03,o.obj.rotation.x=Math.sin(it*.9+o.ph)*.03*(.7+n)+Math.sin(it*6.5+o.ph*3)*.006*n}),zd.forEach(o=>{let a=1+Math.sin(it*17+o.ph)*.08+Math.sin(it*29+o.ph)*.06;o.flame.scale.set(1,a,1),o.inner.scale.set(1,a*.95,1),o.glow.material.opacity=(.55+Math.sin(it*13+o.ph)*.12)*(1+Ln*.7),o.glow.scale.setScalar((o.baseScale||(o.baseScale=o.glow.scale.x))*(1+Ln*.9))}),Ia&&(Ia.intensity=(2+Math.sin(it*11)*.15+Math.sin(it*23)*.1)*(1+Ln*1.8)),q0.forEach((o,a)=>{o.intensity=3.2*Ot(.35,.9,Ln)*(1+Math.sin(it*15+a*2)*.12)}),H0.forEach(o=>{if(o.g.rotation.z=Math.sin(it*.6+o.bob)*.03,o.g.rotation.x=Math.sin(it*.45+o.bob)*.02,o.g.position.y=-.35+Math.sin(it*.8+o.bob)*.15,o.speed){let a=o.path.to-o.path.from;o.g.position.x=o.path.from+(it*o.speed+a*.35)%a}}),Gd.forEach(o=>{let a=o.mesh.geometry.attributes.position,l=o.base;for(let c=0;c<a.count;c++){let h=l[c*3],d=l[c*3+1],u=o.fromPole?h:h+1.2;a.setZ(c,Math.sin(u*3.2-it*5+o.ph)*o.amp*u*.8+Math.sin(d*4+it*3)*.02)}a.needsUpdate=!0}),$n.crab){let o=Math.sin(it*.35);$n.crab.position.set(2.2+o*1.6,0,-4+Math.cos(it*.21)*.5),$n.crab.rotation.y=Math.PI/2+Math.sin(it*9)*.08}if($n.parrot&&($n.parrot.rotation.y=.9+Math.sin(it*.7)*.5,$n.parrot.children[1].rotation.x=Math.max(0,Math.sin(it*2.3))*.3),$n.gulls&&$n.gulls.forEach(o=>{let a=it*o.sp+o.ph;o.g.position.set(Math.cos(a)*o.r-4,o.h+Math.sin(it*.8+o.ph)*.6,Math.sin(a)*o.r-14),o.g.rotation.y=-a;let l=Math.sin(it*6+o.ph)*.45;o.wl.rotation.z=l,o.wr.rotation.z=-l}),V1(t),a1(t),Jt&&Jt.visible){let o=1+.35*Math.max(0,1-(i-(Jt.userData.popT||0))/260),a=(Dd?.95:.8)*o;Jt.scale.set(a,a*288/512,1)}let s=An;zn.forEach(o=>{let a=o.pose,l=o.peekOn&&U0(o)?1:0;o.peek+=(l-o.peek)*Math.min(1,t*9),!o.anim&&a.flip<.01&&(a.tilt=o.peek*ZM*(o.isMe?1:.8),eo(o)),o.hold+=(o.holdTarget-o.hold)*Math.min(1,t*8);let c=o.turn?Q0(s):null;if(c!==null){let A=Math.round(c*90);o.ringKey!==A&&(o.ringKey=A,o.ring.geometry.dispose(),o.ring.geometry=new Fs(.2,.245,48,1,Math.PI/2,Math.max(.001,c)*Math.PI*2),o.ring.material.color.set(c<.27?16734778:16042333)),o.ring.material.opacity=.85;let _=s.players.find(w=>w.id===o.id);_&&em(o,_,s)}else o.ringKey!=="full"&&(o.ringKey="full",o.ring.geometry.dispose(),o.ring.geometry=new Fs(.2,.235,48),o.ring.material.color.set(16042333)),o.ring.material.opacity=o.turn?.45+Math.sin(it*5)*.3:0;let h=!o.isMe&&Da&&s&&s.gamePhase==="bidding"&&Da.round===s.roundNo?Da.dice[o.id]:null,d=o.cup.userData.body;h&&!o.xray?(o.xray=d.material,d.material=d.material.clone(),d.material.transparent=!0,d.material.opacity=.3,d.material.depthWrite=!1):!h&&o.xray&&(d.material.dispose(),d.material=o.xray,o.xray=null),h&&!o.anim&&a.flip<.01&&o.diceRound!=="sp"+s.roundNo&&(to(o,h,"sp"+s.roundNo),o.diceRound="sp"+s.roundNo),o.dice.forEach(A=>{A.userData.match&&A.material.forEach(_=>{_.emissiveIntensity=.35+Math.sin(it*5)*.2})}),o.bubble.visible&&i>o.bubbleUntil&&(o.bubble.visible=!1);let u=o.parts;u.g.updateMatrixWorld(!0);let f=null,g=0,y=0;if(!o.isMe&&u.head){let A=s&&s.phase==="playing"&&s.gamePhase==="bidding"&&!o.out&&!o.anim&&o.peek<.05&&!o.cheer&&!(o.slam>0)&&!(o.flap>0);if(o.nextIdle||(o.nextIdle=i+2500+Math.random()*7e3),!o.idle&&A&&i>o.nextIdle){let _=o.turn?["drum","scratch","drum"]:["sip","sip","drum","stretch","look","scratch"],w=_[Math.floor(Math.random()*_.length)];o.idle={kind:w,t0:i,dur:{sip:3600,drum:2400,stretch:2300,look:3e3,scratch:2e3}[w],dir:Math.random()<.5?-1:1}}_h&&(o.idle={kind:_h.kind,t0:i-_h.p*1e3,dur:1e3,dir:1}),o.idle&&(g=(i-o.idle.t0)/o.idle.dur,g>=1||!A&&o.idle.kind!=="sip"?(o.idle=null,o.nextIdle=i+4e3+Math.random()*9e3):(f=o.idle.kind,y=Ot(0,.18,g)*(1-Ot(.8,1,g))))}let m=f==="sip"?Ot(.2,.4,g)*(1-Ot(.66,.84,g)):0;if(!o.isMe&&u.head){let A=o.lookYaw||0,_=s&&s.currentTurnId&&yt[s.currentTurnId];yt[o.id]&&(!s||!s.players.find(L=>L.id===o.id&&!L.isBot))&&_&&_!==o?(Zi.copy(_.frame.position),u.g.worldToLocal(Zi),A=Ui(Math.atan2(-Zi.x,-Zi.z),-1.1,1.1)):s&&s.players.find(L=>L.id===o.id&&L.isBot)&&_===o&&(A=Math.sin(it*.7+o.idx)*.25),o.lookCur+=(A-o.lookCur)*Math.min(1,t*4),o.nod=Math.max(0,o.nod-t*1.6);let w=Math.sin((1-o.nod)*Math.PI*2)*o.nod*.25,I=o.flap>0?Math.sin(it*30)*.25*o.flap:0;u.head.rotation.set(.1+o.peek*.55+w+(o.out?.85:0)-(o.cheer?.35:0),o.lookCur*(1-o.peek*.8)+I,o.out?.2:Math.sin(it*.5+o.idx*1.3)*.08),u.torso.rotation.x=-(o.peek*.22)-(o.slam>0?Math.sin(o.slam*Math.PI)*.18:0)+(o.out?.35:0)-Math.sin(it*1.4+o.idx)*.012,u.body.position.y=.46+(o.cheer?Math.abs(Math.sin(it*7+o.idx))*.08:0),f==="look"&&(u.head.rotation.y+=(o.idle.dir*.95-u.head.rotation.y)*y),f==="stretch"&&(u.torso.rotation.x-=.15*y,u.head.rotation.x-=.3*y),f==="scratch"&&(u.head.rotation.z+=.12*y),m>0&&(u.head.rotation.x-=m*.38);let D=o.out?"sad":o.cheer?"happy":o.expr&&i<o.expr.until?o.expr.kind:f==="look"?"skeptic":null;if(j0(u,D,Math.min(1,t*8)),u.lids&&u.lids.length){o.nextBlink||(o.nextBlink=i+1e3+Math.random()*3e3);let L=(i-o.nextBlink)/150,k=L>0&&L<1?Math.sin(L*Math.PI):0;L>=1&&(o.nextBlink=i+2e3+Math.random()*3500);let N=o.expr&&i<o.expr.until?o.expr.kind:null,z=o.out?.8:o.peek>.3?.3:N==="angry"?.26:N==="sad"?.34:o.cheer||N==="happy"?0:m>.5?.55:.06;u.lids.forEach(q=>{q.pivot.rotation.x=Pn.lerp(q.open,q.closed,Math.max(z,k))})}}o.flap=Math.max(0,(o.flap||0)-t/1.3),o.slam=Math.max(0,o.slam-t*1.8);let p=o.isMe?0:u.torso?u.torso.rotation.x:0,M=u.shoulder||{x:.2,y:.76,z:0};Aa.set(M.x,M.y+p*.1,M.z+p*.3),Ra.set(-M.x,M.y+p*.1,M.z+p*.3),o.isMe&&(Aa.set(.42,.92,0),Ra.set(-.36,.92,.05));let E=-(La-gn);Ii.set(.2,Wt+.03,E-.08);let x=A1(o);Zi.copy(x),u.g.worldToLocal(Zi);let S=o.cupRoot.visible?o.hold:0;Ca.copy(Ii).lerp(Zi,S),Ii.set(-.2,Wt+.03+(o.slam>0?Math.sin(o.slam*Math.PI)*.25:0),E-.1);let b=o.cheer?1:o.flap>0?Math.min(1,(1-o.flap)*5)*Math.min(1,o.flap*3):0;if(!o.isMe&&(b>0||o.out)){let A=o.cheer?14:26,_=o.out?-.35:.2+Math.sin(it*A)*.1;Ht.set(.33,_,o.out?.02:-.08).add(Aa),En.set(-.33,_,o.out?.02:-.08).add(Ra);let w=o.out?1:b;Ca.lerp(Ht,w),Ii.lerp(En,w)}if(o.mug){let A=o.mug;if(A.userData.rest.set(-.3,Wt,E-.14),f==="sip"){let _=Ot(0,.17,g)*(1-Ot(.88,1,g));Ht.set(-.03,.9,-.23),A.position.copy(A.userData.rest).lerp(Ht,m),A.rotation.set(m*1.2,0,m*.15),En.copy(A.position).add(Jr.set(.055,.045,.02)),Ii.lerp(En,_)}else A.position.copy(A.userData.rest),A.rotation.set(0,0,0)}f==="drum"?(Ii.y+=Math.abs(Math.sin(it*17))*.03*y,Ii.x+=Math.sin(it*3.5)*.03*y):f==="scratch"?(Ht.set(-.13,1.08+Math.sin(it*24)*.012,.03),Ii.lerp(Ht,y)):f==="stretch"&&(Ht.set(.3,.36,.1).add(Aa),En.set(-.3,.36,.1).add(Ra),Ca.lerp(Ht,y*(1-S)),Ii.lerp(En,y)),Ah(u.arms[0],Aa,Ca),Ah(u.arms[1],Ra,Ii),o.mug&&(o.mug.visible=!o.out||f==="sip"),u.arms.forEach(A=>{let _=!(o.isMe&&o.out);A.fore.visible=A.cuff.visible=A.hand.visible=_,A.upper.visible=_&&!o.isMe})});let r=s&&yt[s.meId];if(r){let o=Pd&&U0(r)?1:0;if(Xr+=(o-Xr)*Math.min(1,t*6),i-kd>5e3&&Xr<.05&&!ks){let c=0,h=s.gamePhase==="bidding"&&s.currentTurnId&&s.currentTurnId!==s.meId?yt[s.currentTurnId]:null;h&&(Jr.copy(h.frame.position),r.frame.worldToLocal(Jr),c=Ui(Math.atan2(-Jr.x,-Jr.z)*.55,-.85,.85)),Di+=(c-Di)*Math.min(1,t*1.1),bs+=(Na-bs)*Math.min(1,t*1.1)}let a=Dd?Zi.set(0,1.78,.02):Zi.set(0,1.42,.3);if(r.frame.localToWorld(a),Yr.set(bs,r.rot+Di,0,"YXZ"),$i.setFromEuler(Yr),Xr>.001){let c=Ca.set(-.1,1.08,-.1);r.frame.localToWorld(c),a.lerp(c,Xr);let h=r.cupRoot.position.clone();h.y+=.02,h.addScaledVector(r.dir,.02),ys.lookAt(a,h,Pa),ui.setFromRotationMatrix(ys),$i.slerp(ui,Xr)}if(Ws){let c=Cd!==null?Cd:(i-Ws)/$M;if(c>=1||c<0)Ws=0;else{let h=Ot(0,1,c),d=Math.atan2(a.x,a.z),u=Math.hypot(a.x,a.z),f=d+2.6*(1-h),g=Dn(1.1,u,Ot(.3,1,h)),y=Dn(11,a.y,1-Math.pow(1-h,1.6));Ht.set(Math.sin(f)*g,y,Math.cos(f)*g),En.set(0,Wt+.15,0),ys.lookAt(Ht,En,Pa),ui.setFromRotationMatrix(ys),ui.slerp($i,Ot(.6,1,c)),a.copy(Ht),$i.copy(ui)}}if(Tn&&!Tn.released&&s.phase==="gameover"&&yt[Tn.id]){let c=yt[Tn.id],h=Ot(0,1,(i-Tn.t0)/2e3),d=Math.sin((i-Tn.t0)/3e3)*.18;Ht.set(.5+d,1.62,-1.45),c.frame.localToWorld(Ht),En.set(-.42,.98,0),c.frame.localToWorld(En),c.bubble.visible=!1,Jt&&h>.05&&(Jt.visible=!1),ys.lookAt(Ht,En,Pa),ui.setFromRotationMatrix(ys),a.lerp(Ht,h),$i.slerp(ui,h)}else Tn&&s.phase!=="gameover"&&(Tn=null);let l=ks&&yt[ks]&&!yt[ks].isMe?yt[ks]:null;if(l&&!Ws&&!(Tn&&!Tn.released&&s.phase==="gameover")&&(Ht.set(.32,1.62,.82),l.frame.localToWorld(Ht),En.set(0,Wt+.05,-(La-gn)-.55),l.frame.localToWorld(En),ys.lookAt(Ht,En,Pa),ui.setFromRotationMatrix(ys),Yr.setFromQuaternion(ui,"YXZ"),Yr.y+=Di,Yr.x+=(bs-Na)*.8,ui.setFromEuler(Yr),a.copy(Ht),$i.copy(ui)),Rd){let c=Math.min(1,t*3.5);At.position.lerp(a,c),At.quaternion.slerp($i,c),At.position.distanceTo(a)<.01&&(Rd=!!l),$i.copy(At.quaternion),a.copy(At.position)}At.position.copy(a),Kr>0&&(Kr=Math.max(0,Kr-t),At.position.y+=Math.sin(it*90)*Kr*.02),At.quaternion.copy($i),Mh&&(At.position.set(...Mh.pos),At.lookAt(...Mh.look)),at&&at.onLook&&i-R0>400&&Math.abs(Di-C0)>.06&&(R0=i,C0=Di,at.onLook(Di))}else At.position.set(0,3.2,4.2),At.lookAt(0,Wt,0);for(let o=jr.length-1;o>=0;o--){let a=jr[o];a.life-=t,a.vy-=6*t,a.m.position.x+=a.vx*t,a.m.position.y=Math.max(.01,a.m.position.y+a.vy*t),a.m.position.z+=a.vz*t,a.m.position.y<=.011?(a.vx*=.9,a.vz*=.9,a.vy=0):(a.m.rotation.x+=a.spin*t,a.m.rotation.z+=a.spin*t),a.life<=0&&(Ce.remove(a.m),jr.splice(o,1))}if(bh&&(bh.uniforms.night.value=Ln),wn){vs.length||(vs.t0=i),vs.push(e);let o=i-vs.t0;if(vs.length>=90||vs.length>=3&&o>4e3){let a=vs.slice().sort((c,h)=>c-h),l=a[Math.floor(a.length/2)];vs=[],l>1/38&&(In&&In.enabled?In.enabled=!1:wn=null)}}wn?wn.render():zt.render(Ce,At)}function $T(){zt&&(zt.setAnimationLoop(null),zt.dispose()),Eh&&Eh.disconnect(),bt&&bt.parentNode&&bt.parentNode.removeChild(bt)}function JT(){let i={};Ce.children.forEach((n,s)=>{let r=0;n.traverse(a=>{(a.isMesh||a.isSprite)&&a.visible&&r++});let o=(n.type||"x")+(n.userData.dynamic?"*":"");i[o]=(i[o]||0)+r});let e=Object.values(yt)[1],t=0;return e&&e.frame.traverse(n=>{n.isMesh&&t++}),i.perSeatFrame=t,i}function KT(i,e){let t=[];return i.forEach((n,s)=>{let[r,o]=Array.isArray(n)?n:[n,null],a=K0(r,!1,o),l=a.g;l.position.set((s-(i.length-1)/2)*.62,0,3.6),l.rotation.y=Math.PI,Ce.add(l),a.lids&&e!==void 0&&a.lids.forEach(h=>{h.pivot.rotation.x=Pn.lerp(h.open,h.closed,e)});let c=a.shoulder;a.arms.forEach(h=>{let d=new C(h.side*c.x,c.y,c.z);Ah(h,d,new C(h.side*.26,.55,-.12))}),im.push(a),t.push([l.position.x,l.position.z])}),t}var im=[];function jT(i){im.forEach((e,t)=>j0(e,i[t%i.length],1))}var Tt=null;function QT(i){if(Tt){Tt.canvas.parentNode!==i&&i.appendChild(Tt.canvas);return}let e=document.createElement("canvas");e.className="preview-canvas",i.appendChild(e);let t=new pa({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.toneMapping=ps,t.toneMappingExposure=1.1,t.shadowMap.enabled=!0;let n=new Mr;n.add(new Dr(16771280,4864560,1.1));let s=new qi(16767152,2.4);s.position.set(-2,4,-3),s.castShadow=!0,n.add(s);let r=new qi(10470655,1.2);r.position.set(3,2,3),n.add(r);let o=new rt(new os(.7,40),new tt({color:14270346,roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let a=new on(32,1,.05,20);a.position.set(0,1.04,-1.8),a.lookAt(0,.82,0);let l=new $e;n.add(l),Tt={canvas:e,r:t,sc:n,cam:a,holder:l,spin:0,drag:null,avKey:""},e.addEventListener("pointerdown",h=>{Tt.drag={x:h.clientX,spin:Tt.spin};try{e.setPointerCapture(h.pointerId)}catch{}}),e.addEventListener("pointermove",h=>{Tt.drag&&(Tt.spin=Tt.drag.spin+(h.clientX-Tt.drag.x)*.012)}),e.addEventListener("pointerup",()=>{Tt.drag=null,Tt.idleFrom=performance.now()});let c=performance.now();t.setAnimationLoop(()=>{if(!e.isConnected||e.offsetParent===null)return;let h=e.clientWidth,d=e.clientHeight;h&&d&&(e.width!==Math.round(h*t.getPixelRatio())||e.height!==Math.round(d*t.getPixelRatio()))&&(t.setSize(h,d,!1),a.aspect=h/d,a.updateProjectionMatrix());let u=performance.now(),f=Math.min(.05,(u-c)/1e3);if(c=u,!Tt.drag&&(!Tt.idleFrom||u-Tt.idleFrom>2500)&&(Tt.spin+=f*.5),l.rotation.y=Tt.spin,Tt.parts){let g=u/1e3%3.7,y=g<.15?Math.sin(g/.15*Math.PI):0;(Tt.parts.lids||[]).forEach(m=>{m.pivot.rotation.x=Pn.lerp(m.open,m.closed,Math.max(.06,y))}),Tt.parts.head&&Tt.parts.head.rotation.set(.05,Math.sin(u/1400)*.25,Math.sin(u/2100)*.05)}t.render(n,a)})}function ew(i){if(!Tt)return;let e=JSON.stringify(i);if(e===Tt.avKey)return;for(Tt.avKey=e;Tt.holder.children.length;)Tt.holder.remove(Tt.holder.children[0]);let t=sd("preview",!1,J0,i),n=t.shoulder;t.arms.forEach(s=>Ah(s,new C(s.side*n.x,n.y,n.z),new C(s.side*.2,.62,-.22))),t.g.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),Tt.holder.add(t.g),Tt.parts=t}var Yd=!1;function tw(i){Yd=!!(i&&i.bidBadges),Ad="__",An&&D1(Object.assign({},An,{expectAnim:!1}))}var Zr=new C;function nw(i){let e=yt[i];return!e||e.isMe||!At||!bt||(e.label.getWorldPosition(Zr),Zr.y+=.03,Zr.project(At),Zr.z>1)?null:{x:(Zr.x+1)/2*bt.clientWidth,y:(1-Zr.y)/2*bt.clientHeight}}function iw(i){return i&&i.noComposer&&(wn=null),i&&i.noAo&&In&&(In.enabled=!1),i&&i.hide&&Ce.traverse(e=>{e.userData&&e.userData.tag===i.hide&&(e.visible=!1)}),{composer:!!wn,ao:!!(In&&In.enabled),calls:zt.info.render.calls}}export{JT as debugCounts,jT as debugExpr,KT as debugGallery,FT as debugIdle,OT as debugIntro,iw as debugPerf,$T as dispose,WT as events,HT as init,QT as initPreview,BT as palettes,UT as playIntro,P1 as resetView,nw as screenPos,qT as setDebugCam,tw as setHudOptions,VT as setLook,kT as setMyPeek,ZT as setNight,GT as setPeek,ew as setPreviewAvatar,NT as setSpectate,zT as setVisible,YT as stats,D1 as update};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
