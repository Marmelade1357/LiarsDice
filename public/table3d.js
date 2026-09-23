var Gf=0,pu=1,kf=2;var Ls=1,Vf=2,Pr=3,hs=0,hn=1,xe=2,Ye=0,us=1,Si=2,mu=3,gu=4,Zl=5;var Xn=100,Wf=101,Xf=102,qf=103,Yf=104,Ns=200,Zf=201,$f=202,Jf=203,xu=204,_u=205,Wo=206,Kf=207,Xo=208,jf=209,Qf=210,tp=211,ep=212,np=213,ip=214,dl=0,fl=1,pl=2,hr=3,ml=4,gl=5,xl=6,_l=7,vu=0,sp=1,rp=2,ai=0,qo=1,Yo=2,Zo=3,ds=4,$o=5,Jo=6,Ko=7;var yu=300,fs=301,Us=302,$l=303,Jl=304,jo=306,Qe=1e3,pi=1001,vl=1002,We=1003,op=1004;var Qo=1005;var cn=1006,Kl=1007;var ps=1008;var pn=1009,Mu=1010,Su=1011,Ir=1012,jl=1013,li=1014,qn=1015,ke=1016,Ql=1017,tc=1018,ms=1020,bu=35902,Eu=35899,Tu=1021,wu=1022,An=1023,gi=1026,bi=1027,ec=1028,nc=1029,gs=1030,ic=1031;var sc=1033,ta=33776,ea=33777,na=33778,ia=33779,rc=35840,oc=35841,ac=35842,lc=35843,cc=36196,hc=37492,uc=37496,dc=37488,fc=37489,sa=37490,pc=37491,mc=37808,gc=37809,xc=37810,_c=37811,vc=37812,yc=37813,Mc=37814,Sc=37815,bc=37816,Ec=37817,Tc=37818,wc=37819,Ac=37820,Rc=37821,Cc=36492,Pc=36494,Ic=36495,Dc=36283,Lc=36284,ra=36285,Nc=36286;var po=2300,yl=2301,hl=2302,eu=2303,nu=2400,iu=2401,su=2402;var ap=3200;var oa=0,lp=1,Xi="",ze="srgb",mo="srgb-linear",go="linear",_e="srgb";var ul=7680;var cp=519,hp=512,up=513,dp=514,Uc=515,fp=516,pp=517,Fc=518,mp=519,Au=35044;var Ru="300 es",ii=2e3,ur=2001;function lm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){let i=xo("canvas");return i.style.display="block",i}var tf={},dr=null;function _o(...i){let t="THREE."+i.shift();dr?dr("log",t,...i):console.log(t,...i)}function xp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=xp(i);let t="THREE."+i.shift();if(dr)dr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=xp(i);let t="THREE."+i.shift();if(dr)dr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function As(...i){let t=i.join(" ");t in tf||(tf[t]=!0,Jt(...i))}function _p(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var vp={[dl]:fl,[pl]:xl,[ml]:_l,[hr]:gl,[fl]:dl,[xl]:pl,[_l]:ml,[gl]:hr},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=1234567,co=Math.PI/180,fr=180/Math.PI;function mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function hm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function um(i,t,e){return i!==t?(e-i)/(t-i):0}function ho(i,t,e){return(1-e)*i+e*t}function dm(i,t,e,n){return ho(i,t,1-Math.exp(-e*n))}function fm(i,t=1){return t-Math.abs(Cu(i,t*2)-t)}function pm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function mm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function gm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xm(i,t){return i+Math.random()*(t-i)}function _m(i){return i*(.5-Math.random())}function vm(i){i!==void 0&&(ef=i);let t=ef+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ym(i){return i*co}function Mm(i){return i*fr}function Sm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function bm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Rn={DEG2RAD:co,RAD2DEG:fr,generateUUID:mi,clamp:ue,euclideanModulo:Cu,mapLinear:hm,inverseLerp:um,lerp:ho,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:xm,randFloatSpread:_m,seededRandom:vm,degToRad:ym,radToDeg:Mm,isPowerOfTwo:Sm,ceilPowerOfTwo:bm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:Tm,normalize:be,denormalize:ni},nt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],y=r[o+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+y*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ch.copy(this).projectOnVector(t),this.sub(Ch)}reflect(t){return this.sub(Ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ch=new C,nf=new an,te=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],M=s[1],E=s[4],x=s[7],S=s[2],b=s[5],R=s[8];return r[0]=o*y+a*M+l*S,r[3]=o*m+a*E+l*b,r[6]=o*p+a*x+l*R,r[1]=c*y+h*M+d*S,r[4]=c*m+h*E+d*b,r[7]=c*p+h*x+d*R,r[2]=u*y+f*M+g*S,r[5]=u*m+f*E+g*b,r[8]=u*p+f*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ph.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ph.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ph.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ph=new te,sf=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){let i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:t,whitePoint:n,transfer:go,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var pe=wm();function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xs,Ml=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xs===void 0&&(Xs=xo("canvas")),Xs.width=t.width,Xs.height=t.height;let s=Xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Am=0,pr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ih(s[o].image)):r.push(Ih(s[o]))}else r=Ih(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ih(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var Rm=0,Dh=new C,_n=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pi,s=pi,r=cn,o=ps,a=An,l=pn,c=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=mi(),this.name="",this.source=new pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qe:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qe:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=yu;_n.DEFAULT_ANISOTROPY=1;var Ue=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,x=(f+1)/2,S=(p+1)/2,b=(h+u)/4,R=(d+y)/4,v=(g+m)/4;return E>x&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=R/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=v/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sl=class extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new _n(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Sl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vo=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bl=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ne=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Pm)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Qi.crossVectors(n,Ln),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Qi.crossVectors(n,Ln)),Qi.normalize(),Ua.crossVectors(Ln,Qi),s[0]=Qi.x,s[4]=Ua.x,s[8]=Ln.x,s[1]=Qi.y,s[5]=Ua.y,s[9]=Ln.y,s[2]=Qi.z,s[6]=Ua.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],M=n[3],E=n[7],x=n[11],S=n[15],b=s[0],R=s[4],v=s[8],w=s[12],I=s[1],D=s[5],N=s[9],G=s[13],L=s[2],k=s[6],q=s[10],F=s[14],X=s[3],O=s[7],V=s[11],j=s[15];return r[0]=o*b+a*I+l*L+c*X,r[4]=o*R+a*D+l*k+c*O,r[8]=o*v+a*N+l*q+c*V,r[12]=o*w+a*G+l*F+c*j,r[1]=h*b+d*I+u*L+f*X,r[5]=h*R+d*D+u*k+f*O,r[9]=h*v+d*N+u*q+f*V,r[13]=h*w+d*G+u*F+f*j,r[2]=g*b+y*I+m*L+p*X,r[6]=g*R+y*D+m*k+p*O,r[10]=g*v+y*N+m*q+p*V,r[14]=g*w+y*G+m*F+p*j,r[3]=M*b+E*I+x*L+S*X,r[7]=M*R+E*D+x*k+S*O,r[11]=M*v+E*N+x*q+S*V,r[15]=M*w+E*G+x*F+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=l*f-c*u,E=a*f-c*d,x=a*u-l*d,S=o*f-c*h,b=o*u-l*h,R=o*d-a*h;return e*(y*M-m*E+p*x)-n*(g*M-m*S+p*b)+s*(g*E-y*S+p*R)-r*(g*x-y*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=e*a-n*o,E=e*l-s*o,x=e*c-r*o,S=n*l-s*a,b=n*c-r*a,R=s*c-r*l,v=h*y-d*g,w=h*m-u*g,I=h*p-f*g,D=d*m-u*y,N=d*p-f*y,G=u*p-f*m,L=M*G-E*N+x*D+S*I-b*w+R*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(a*G-l*N+c*D)*k,t[1]=(s*N-n*G-r*D)*k,t[2]=(y*R-m*b+p*S)*k,t[3]=(u*b-d*R-f*S)*k,t[4]=(l*I-o*G-c*w)*k,t[5]=(e*G-s*I+r*w)*k,t[6]=(m*x-g*R-p*E)*k,t[7]=(h*R-u*x+f*E)*k,t[8]=(o*N-a*I+c*v)*k,t[9]=(n*I-e*N-r*v)*k,t[10]=(g*b-y*x+p*M)*k,t[11]=(d*x-h*b-f*M)*k,t[12]=(a*w-o*D-l*v)*k,t[13]=(e*D-n*w+s*v)*k,t[14]=(y*E-g*S-m*M)*k,t[15]=(h*S-d*E+u*M)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,y=o*h,m=o*d,p=a*d,M=l*c,E=l*h,x=l*d,S=n.x,b=n.y,R=n.z;return s[0]=(1-(y+p))*S,s[1]=(f+x)*S,s[2]=(g-E)*S,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(m-M)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=qs.set(s[0],s[1],s[2]).length(),a=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,h=1/a,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(o-r),y=o*r/(o-r);else if(a===ii)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ur)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ii,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(o-r),y=o/(o-r);else if(a===ii)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===ur)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qs=new C,jn=new ne,Cm=new C(0,0,0),Pm=new C(1,1,1),Qi=new C,Ua=new C,Ln=new C,of=new ne,af=new an,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(of,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return af.setFromEuler(this),this.setFromQuaternion(af,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Im=0,lf=new C,Ys=new an,Ni=new ne,Fa=new C,jr=new C,Dm=new C,Lm=new an,cf=new C(1,0,0),hf=new C(0,1,0),uf=new C(0,0,1),df={type:"added"},Nm={type:"removed"},Zs={type:"childadded",child:null},Lh={type:"childremoved",child:null},tn=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new kn,n=new an,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new te}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,e){return Ys.setFromAxisAngle(t,e),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(cf,t)}rotateY(t){return this.rotateOnAxis(hf,t)}rotateZ(t){return this.rotateOnAxis(uf,t)}translateOnAxis(t,e){return lf.copy(t).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cf,t)}translateY(t){return this.translateOnAxis(hf,t)}translateZ(t){return this.translateOnAxis(uf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(jr,Fa,this.up):Ni.lookAt(Fa,jr,this.up),this.quaternion.setFromRotationMatrix(Ni),s&&(Ni.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(df),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nm),Lh.child=t,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(df),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,Dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new C(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $t=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Um={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Um)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Nh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Cu(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nh(o,r,t+1/3),this.g=Nh(o,r,t),this.b=Nh(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return pe.workingToColorSpace(fn.copy(this),t),Math.round(ue(fn.r*255,0,255))*65536+Math.round(ue(fn.g*255,0,255))*256+Math.round(ue(fn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=ze){pe.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ts),this.setHSL(ts.h+t,ts.s+e,ts.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ts),t.getHSL(Oa);let n=ho(ts.h,Oa.h,e),s=ho(ts.s,Oa.s,e),r=ho(ts.l,Oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new xt;xt.NAMES=yp;var yo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new C,Ui=new C,Uh=new C,Fi=new C,$s=new C,Js=new C,ff=new C,Fh=new C,Oh=new C,Bh=new C,Hh=new Ue,zh=new Ue,Gh=new Ue,Hi=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ui.subVectors(n,e),Uh.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ui),l=Qn.dot(Uh),c=Ui.dot(Ui),h=Ui.dot(Uh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Hh.setScalar(0),zh.setScalar(0),Gh.setScalar(0),Hh.fromBufferAttribute(t,e),zh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hh,r.x),o.addScaledVector(zh,r.y),o.addScaledVector(Gh,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ui.subVectors(t,e),Qn.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Qn.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;$s.subVectors(s,n),Js.subVectors(r,n),Fh.subVectors(t,n);let l=$s.dot(Fh),c=Js.dot(Fh);if(l<=0&&c<=0)return e.copy(n);Oh.subVectors(t,s);let h=$s.dot(Oh),d=Js.dot(Oh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector($s,o);Bh.subVectors(t,r);let f=$s.dot(Bh),g=Js.dot(Bh);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Js,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ff.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ff,a);let p=1/(m+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector($s,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_i=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(t.matrixWorld),this.union(Ba)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Ha.subVectors(this.max,Qr),Ks.subVectors(t.a,Qr),js.subVectors(t.b,Qr),Qs.subVectors(t.c,Qr),es.subVectors(js,Ks),ns.subVectors(Qs,js),Ss.subVectors(Ks,Qs);let e=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ss.z,Ss.y,es.z,0,-es.x,ns.z,0,-ns.x,Ss.z,0,-Ss.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ss.y,Ss.x,0];return!kh(e,Ks,js,Qs,Ha)||(e=[1,0,0,0,1,0,0,0,1],!kh(e,Ks,js,Qs,Ha))?!1:(za.crossVectors(es,ns),e=[za.x,za.y,za.z],kh(e,Ks,js,Qs,Ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new C,new C,new C,new C,new C,new C,new C,new C],ti=new C,Ba=new _i,Ks=new C,js=new C,Qs=new C,es=new C,ns=new C,Ss=new C,Qr=new C,Ha=new C,za=new C,bs=new C;function kh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){bs.fromArray(i,r);let a=s.x*Math.abs(bs.x)+s.y*Math.abs(bs.y)+s.z*Math.abs(bs.z),l=t.dot(bs),c=e.dot(bs),h=n.dot(bs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var je=new C,Ga=new nt,Fm=0,Ne=class extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Au,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ga.fromBufferAttribute(this,e),Ga.applyMatrix3(t),this.setXY(e,Ga.x,Ga.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Mo=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var So=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ot=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Om=new _i,to=new C,Vh=new C,vi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Om.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;to.subVectors(t,this.center);let e=to.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(to,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(to.copy(t.center).add(Vh)),this.expandByPoint(to.copy(t.center).sub(Vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bm=0,Gn=new ne,Wh=new tn,tr=new C,Nn=new _i,eo=new _i,rn=new C,de=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lm(t)?So:Mo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Nn.min,eo.min),Nn.expandByPoint(rn),rn.addVectors(Nn.max,eo.max),Nn.expandByPoint(rn)):(Nn.expandByPoint(eo.min),Nn.expandByPoint(eo.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),rn.add(tr)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new C,l[v]=new C;let c=new C,h=new C,d=new C,u=new nt,f=new nt,g=new nt,y=new C,m=new C;function p(v,w,I){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[v].add(y),a[w].add(y),a[I].add(y),l[v].add(m),l[w].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let v=0,w=M.length;v<w;++v){let I=M[v],D=I.start,N=I.count;for(let G=D,L=D+N;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let E=new C,x=new C,S=new C,b=new C;function R(v){S.fromBufferAttribute(s,v),b.copy(S);let w=a[v];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),x.crossVectors(b,w);let D=x.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,w=M.length;v<w;++v){let I=M[v],D=I.start,N=I.count;for(let G=D,L=D+N;G<L;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ne(u,h,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Au,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},xn=new C,_r=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Xh=new C,Hm=new C,zm=new te,ei=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xh.subVectors(n,e).cross(Hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||zm.getNormalMatrix(t),s=this.coplanarPoint(Xh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gm=0,Vn=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=us,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=_u,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},er,no=new C,nr=new C,ir=new C,sr=new nt,io=new nt,Mp=new ne,ka=new C,so=new C,Va=new C,pf=new nt,qh=new nt,mf=new nt,yi=class extends tn{constructor(t=new si){if(super(),this.isSprite=!0,this.type="Sprite",er===void 0){er=new de;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bo(e,5);er.setIndex([0,1,2,0,2,3]),er.setAttribute("position",new _r(n,3,0,!1)),er.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=er,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wa(ka.set(-.5,-.5,0),ir,o,nr,s,r),Wa(so.set(.5,-.5,0),ir,o,nr,s,r),Wa(Va.set(.5,.5,0),ir,o,nr,s,r),pf.set(0,0),qh.set(1,0),mf.set(1,1);let a=t.ray.intersectTriangle(ka,so,Va,!1,no);if(a===null&&(Wa(so.set(-.5,.5,0),ir,o,nr,s,r),qh.set(0,1),a=t.ray.intersectTriangle(ka,Va,so,!1,no),a===null))return;let l=t.ray.origin.distanceTo(no);l<t.near||l>t.far||e.push({distance:l,point:no.clone(),uv:Hi.getInterpolation(no,ka,so,Va,pf,qh,mf,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wa(i,t,e,n,s,r){sr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(io.x=r*sr.x-s*sr.y,io.y=s*sr.x+r*sr.y):io.copy(sr),i.copy(t),i.x+=io.x,i.y+=io.y,i.applyMatrix4(Mp)}var Bi=new C,Yh=new C,Xa=new C,qa=new C,Rs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bi.copy(this.origin).addScaledVector(this.direction,e),Bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yh.copy(t).add(e).multiplyScalar(.5),Xa.copy(e).sub(t).normalize(),qa.copy(this.origin).sub(Yh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xa),a=qa.dot(this.direction),l=-qa.dot(Xa),c=qa.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yh).addScaledVector(Xa,u),f}intersectSphere(t,e){if(t.radius<0)return null;Bi.subVectors(t.center,this.origin);let n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,y=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h),R,v,w,I,D,N,G,L,k,q,F,X;if(x>=S&&x>=b?(w=l,N=d,k=g,X=p,l>=0?(R=c,v=h,I=u,D=f,G=y,L=m,q=M,F=E):(R=h,v=c,I=f,D=u,G=m,L=y,q=E,F=M)):S>=b?(w=c,N=u,k=y,X=M,c>=0?(R=h,v=l,I=f,D=d,G=m,L=g,q=E,F=p):(R=l,v=h,I=d,D=f,G=g,L=m,q=p,F=E)):(w=h,N=f,k=m,X=E,h>=0?(R=l,v=c,I=d,D=u,G=g,L=y,q=p,F=M):(R=c,v=l,I=u,D=d,G=y,L=g,q=M,F=p)),w===0)return null;let O=R/w,V=v/w,j=1/w,bt=I-O*N,Tt=D-V*N,se=G-O*k,Qt=L-V*k,Zt=q-O*X,J=F-V*X,et=Zt*Qt-J*se,mt=bt*J-Tt*Zt,Nt=se*Tt-Qt*bt;if(s){if(et<0||mt<0||Nt<0)return null}else if((et<0||mt<0||Nt<0)&&(et>0||mt>0||Nt>0))return null;let ft=et+mt+Nt;if(ft===0)return null;let kt=j*(et*N+mt*k+Nt*X);return(ft>0?kt<0:kt>0)?null:this.at(kt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gf=new ne,Es=new Rs,Ya=new vi,xf=new C,Za=new C,$a=new C,Ja=new C,Zh=new C,Ka=new C,_f=new C,ja=new C,re=class extends tn{constructor(t=new de,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Zh.fromBufferAttribute(d,t),o?Ka.addScaledVector(Zh,h):Ka.addScaledVector(Zh.sub(e),h))}e.add(Ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(Ya.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Ya,xf)===null||Es.origin.distanceToSquared(xf)>(t.far-t.near)**2))&&(gf.copy(r).invert(),Es.copy(t.ray).applyMatrix4(gf),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let b=a.getX(x),R=a.getX(x+1),v=a.getX(x+2);s=Qa(this,p,t,n,c,h,d,b,R,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Qa(this,o,t,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,S=E;x<S;x+=3){let b=x,R=x+1,v=x+2;s=Qa(this,p,t,n,c,h,d,b,R,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,E=m+1,x=m+2;s=Qa(this,o,t,n,c,h,d,M,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function km(i,t,e,n,s,r,o,a){let l;if(t.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===hs,a),l===null)return null;ja.copy(a),ja.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ja);return c<e.near||c>e.far?null:{distance:c,point:ja.clone(),object:i}}function Qa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Za),i.getVertexPosition(l,$a),i.getVertexPosition(c,Ja);let h=km(i,t,e,n,Za,$a,Ja,_f);if(h){let d=new C;Hi.getBarycoord(_f,Za,$a,Ja,d),s&&(h.uv=Hi.getInterpolatedAttribute(s,a,l,c,d,new nt)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,l,c,d,new nt)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Hi.getNormal(Za,$a,Ja,u.normal),h.face=u,h.barycoord=d}return h}var Gi=class extends _n{constructor(t=null,e=1,n=1,s,r,o,a,l,c=We,h=We,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new ne,vf=new ne,tl=[],yf=new _i,Vm=new ne,ro=new re,oo=new vi,Cs=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),yf.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(yf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),oo.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),vf.multiplyMatrices(n,rr),ro.matrixWorld=vf,ro.raycast(t,tl);for(let o=0,a=tl.length;o<a;o++){let l=tl[o];l.instanceId=r,l.object=this,e.push(l)}tl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gi(new Float32Array(s*this.count),s,this.count,ec,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new vi,Wm=new nt(.5,.5),el=new C,yr=class{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],E=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-M).normalize(),s[1].setComponents(c+o,f+h,p+g,S+M).normalize(),s[2].setComponents(c+a,f+d,p+y,S+E).normalize(),s[3].setComponents(c-a,f-d,p-y,S-E).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,S-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-x).normalize(),e===ii)s[5].setComponents(c+l,f+u,p+m,S+x).normalize();else if(e===ur)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=Wm.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(el.x=s.normal.x>0?t.max.x:t.min.x,el.y=s.normal.y>0?t.max.y:t.min.y,el.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},El=new C,Tl=new C,Mf=new ne,ao=new Rs,nl=new vi,$h=new C,Sf=new C,wl=class extends tn{constructor(t=new de,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)El.fromBufferAttribute(e,s-1),Tl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=El.distanceTo(Tl);t.setAttribute("lineDistance",new Ot(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,t.ray.intersectsSphere(nl)===!1)return;Mf.copy(s).invert(),ao.copy(t.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=h.getX(y),M=h.getX(y+1),E=il(this,t,ao,l,p,M,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),p=il(this,t,ao,l,y,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=f,m=g-1;y<m;y+=c){let p=il(this,t,ao,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=il(this,t,ao,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function il(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(El.fromBufferAttribute(a,s),Tl.fromBufferAttribute(a,r),e.distanceSqToSegment(El,Tl,$h,Sf)>n)return;$h.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($h);if(!(c<t.near||c>t.far))return{distance:c,point:Sf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var bf=new C,Ef=new C,Eo=class extends wl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bf.fromBufferAttribute(e,s),Ef.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bf.distanceTo(Ef);t.setAttribute("lineDistance",new Ot(n,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Al=class extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tf=new ne,ru=new Rs,sl=new vi,rl=new C,To=class extends tn{constructor(t=new de,e=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,t.ray.intersectsSphere(sl)===!1)return;Tf.copy(s).invert(),ru.copy(t.ray).applyMatrix4(Tf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);rl.fromBufferAttribute(d,m),wf(rl,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,y=f;g<y;g++)rl.fromBufferAttribute(d,g),wf(rl,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function wf(i,t,e,n,s,r,o){let a=ru.distanceSqToPoint(i);if(a<e){let l=new C;ru.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var wo=class extends _n{constructor(t=[],e=fs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends _n{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends _n{constructor(t,e,n=li,s,r,o,a=We,l=We,c,h=gi,d=1){if(h!==gi&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rl=class extends Mi{constructor(t,e=li,n=fs,s,r,o=We,a=We,l,c=gi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ao=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xe=class i extends de{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2));function g(y,m,p,M,E,x,S,b,R,v,w){let I=x/R,D=S/v,N=x/2,G=S/2,L=b/2,k=R+1,q=v+1,F=0,X=0,O=new C;for(let V=0;V<q;V++){let j=V*D-G;for(let bt=0;bt<k;bt++){let Tt=bt*I-N;O[y]=Tt*M,O[m]=j*E,O[p]=L,c.push(O.x,O.y,O.z),O[y]=0,O[m]=0,O[p]=b>0?1:-1,h.push(O.x,O.y,O.z),d.push(bt/R),d.push(1-V/v),F+=1}}for(let V=0;V<v;V++)for(let j=0;j<R;j++){let bt=u+j+k*V,Tt=u+j+k*(V+1),se=u+(j+1)+k*(V+1),Qt=u+(j+1)+k*V;l.push(bt,Tt,Qt),l.push(Tt,se,Qt),X+=6}a.addGroup(f,X,w),f+=X,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ss=class i extends de{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},oe=class i extends de{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;M(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function M(){let x=new C,S=new C,b=0,R=(e-t)/n;for(let v=0;v<=r;v++){let w=[],I=v/r,D=I*(e-t)+t;for(let N=0;N<=s;N++){let G=N/s,L=G*l+a,k=Math.sin(L),q=Math.cos(L);S.x=D*k,S.y=-I*n+m,S.z=D*q,d.push(S.x,S.y,S.z),x.set(k,R,q).normalize(),u.push(x.x,x.y,x.z),f.push(G,1-I),w.push(g++)}y.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let I=y[w][v],D=y[w+1][v],N=y[w+1][v+1],G=y[w][v+1];(t>0||w!==0)&&(h.push(I,D,G),b+=3),(e>0||w!==r-1)&&(h.push(D,N,G),b+=3)}c.addGroup(p,b,0),p+=b}function E(x){let S=g,b=new nt,R=new C,v=0,w=x===!0?t:e,I=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let D=g;for(let N=0;N<=s;N++){let L=N/s*l+a,k=Math.cos(L),q=Math.sin(L);R.x=w*q,R.y=m*I,R.z=w*k,d.push(R.x,R.y,R.z),u.push(0,I,0),b.x=k*.5+.5,b.y=q*.5*I+.5,f.push(b.x,b.y),g++}for(let N=0;N<s;N++){let G=S+N,L=D+N;x===!0?h.push(L,L+1,G):h.push(L+1,L,G),v+=3}c.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wn=class i extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Sr=class i extends de{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let E=new C,x=new C,S=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],E),f(e[b+1],x),f(e[b+2],S),l(E,x,S,M)}function l(M,E,x,S){let b=S+1,R=[];for(let v=0;v<=b;v++){R[v]=[];let w=M.clone().lerp(x,v/b),I=E.clone().lerp(x,v/b),D=b-v;for(let N=0;N<=D;N++)N===0&&v===b?R[v][N]=w:R[v][N]=w.clone().lerp(I,N/D)}for(let v=0;v<b;v++)for(let w=0;w<2*(b-v)-1;w++){let I=Math.floor(w/2);w%2===0?(u(R[v][I+1]),u(R[v+1][I]),u(R[v][I])):(u(R[v][I+1]),u(R[v+1][I+1]),u(R[v+1][I]))}}function c(M){let E=new C;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(M),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let M=new C;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let x=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(x,1-S)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){let E=o[M+0],x=o[M+2],S=o[M+4],b=Math.max(E,x,S),R=Math.min(E,x,S);b>.9&&R<.1&&(E<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,E){let x=M*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){let M=new C,E=new C,x=new C,S=new C,b=new nt,R=new nt,v=new nt;for(let w=0,I=0;w<r.length;w+=9,I+=6){M.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),v.set(o[I+4],o[I+5]),S.copy(M).add(E).add(x).divideScalar(3);let D=m(S);y(b,I+0,M,D),y(R,I+2,E,D),y(v,I+4,x,D)}}function y(M,E,x,S){S<0&&M.x===1&&(o[E]=M.x-1),x.x===0&&x.z===0&&(o[E]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ro=class i extends Sr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ue(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ue(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},br=class extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends br{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Af=new C,Rf=new C,Jh=new Pu,Kh=new Pu,jh=new Pu,ln=class extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Rf.subVectors(s[0],s[1]).add(s[0]),c=Rf);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Af.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Af),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Jh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Kh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),jh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Kh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),jh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jh.calc(l),Kh.calc(l),jh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Xm(i,t){let e=1-i;return e*e*t}function qm(i,t){return 2*(1-i)*i*t}function Ym(i,t){return i*i*t}function uo(i,t,e,n){return Xm(i,t)+qm(i,e)+Ym(i,n)}function Zm(i,t){let e=1-i;return e*e*e*t}function $m(i,t){let e=1-i;return 3*e*e*i*t}function Jm(i,t){return 3*(1-i)*i*i*t}function Km(i,t){return i*i*i*t}function fo(i,t,e,n,s){return Zm(i,t)+$m(i,e)+Jm(i,n)+Km(i,s)}var Co=class extends Un{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Pl=class extends Un{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Un{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends Un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Un{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,s.x,r.x,o.x),uo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends Un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,s.x,r.x,o.x),uo(t,s.y,r.y,o.y),uo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Cf(a,l.x,c.x,h.x,d.x),Cf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:ln,CubicBezierCurve:Co,CubicBezierCurve3:Pl,EllipseCurve:br,LineCurve:Po,LineCurve3:Il,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Ps,SplineCurve:Do}),Ll=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Lo=class extends Ll{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Io(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Co(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new br(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ki=class extends Lo{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lo().fromJSON(s))}return this}};function jm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Sp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ig(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return No(r,o,e,a,l,c,0),o}function Sp(i,t,e,n,s){let r;if(s===pg(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Pf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Pf(o/n|0,i[o],i[o+1],r);return r&&Er(r,r.next)&&(Fo(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Er(e,e.next)||Oe(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function No(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lg(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?tg(i,n,s,r):Qm(i)){t.push(l.i,i.i,c.i),Fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=eg(Is(i),t),No(i,t,e,n,s,r,2)):o===2&&ng(i,t,e,n,s,r):No(Is(i),t,e,n,s,r,1);break}}}function Qm(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&lo(s,a,r,l,o,c,g.x,g.y)&&Oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),y=Math.max(a,l,c),m=Math.max(h,d,u),p=ou(f,g,t,e,n),M=ou(y,m,t,e,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=M;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&lo(a,h,l,d,c,u,E.x,E.y)&&Oe(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&lo(a,h,l,d,c,u,x.x,x.y)&&Oe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&lo(a,h,l,d,c,u,E.x,E.y)&&Oe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&lo(a,h,l,d,c,u,x.x,x.y)&&Oe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function eg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Er(n,s)&&Ep(n,e,e.next,s)&&Uo(n,s)&&Uo(s,n)&&(t.push(n.i,e.i,s.i),Fo(e),Fo(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function ng(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ug(o,a)){let l=Tp(o,a);o=Is(o,o.next),l=Is(l,l.next),No(o,t,e,n,s,r,0),No(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ig(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Sp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(hg(c))}s.sort(sg);for(let r=0;r<s.length;r++)e=rg(s[r],e);return e}function sg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function rg(i,t){let e=og(i,t);if(!e)return t;let n=Tp(e,i);return Is(n,n.next),Is(e,e.next)}function og(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Er(i,e))return e;do{if(Er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&bp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Uo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&ag(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function ag(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function lg(i,t,e,n){let s=i;do s.z===0&&(s.z=ou(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cg(s)}function cg(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ou(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function lo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&bp(i,t,e,n,s,r,o,a)}function ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dg(i,t)&&(Uo(i,t)&&Uo(t,i)&&fg(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Er(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Er(i,t){return i.x===t.x&&i.y===t.y}function Ep(i,t,e,n){let s=al(Oe(i,t,e)),r=al(Oe(i,t,n)),o=al(Oe(e,n,i)),a=al(Oe(e,n,t));return!!(s!==r&&o!==a||s===0&&ol(i,e,t)||r===0&&ol(i,n,t)||o===0&&ol(e,i,n)||a===0&&ol(e,t,n))}function ol(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function al(i){return i>0?1:i<0?-1:0}function dg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ep(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Uo(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function fg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Tp(i,t){let e=au(i.i,i.x,i.y),n=au(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pf(i,t,e,n){let s=au(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function au(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var lu=class{static triangulate(t,e,n=2){return jm(t,e,n)}},ws=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];If(t),Df(n,t);let o=t.length;e.forEach(If);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Df(n,e[l]);let a=lu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function If(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Df(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var rs=class i extends de{constructor(t=new ki([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ot(s,3)),this.setAttribute("uv",new Ot(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:mg,E,x=!1,S,b,R,v;if(p){E=p.getSpacedPoints(h),x=!0,u=!1;let it=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,it),b=new C,R=new C,v=new C}u||(m=0,f=0,g=0,y=0);let w=a.extractPoints(c),I=w.shape,D=w.holes;if(!ws.isClockWise(I)){I=I.reverse();for(let it=0,lt=D.length;it<lt;it++){let ut=D[it];ws.isClockWise(ut)&&(D[it]=ut.reverse())}}function G(it){let ut=10000000000000001e-36,dt=it[0];for(let Q=1;Q<=it.length;Q++){let ht=Q%it.length,pt=it[ht],vt=pt.x-dt.x,st=pt.y-dt.y,P=vt*vt+st*st,Mt=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(dt.x),Math.abs(dt.y)),St=ut*Mt*Mt;if(P<=St){it.splice(ht,1),Q--;continue}dt=pt}}G(I),D.forEach(G);let L=D.length,k=I;for(let it=0;it<L;it++){let lt=D[it];I=I.concat(lt)}function q(it,lt,ut){return lt||Kt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(lt,ut)}let F=I.length;function X(it,lt,ut){let dt,Q,ht,pt=it.x-lt.x,vt=it.y-lt.y,st=ut.x-it.x,P=ut.y-it.y,Mt=pt*pt+vt*vt,St=pt*P-vt*st;if(Math.abs(St)>Number.EPSILON){let A=Math.sqrt(Mt),_=Math.sqrt(st*st+P*P),U=lt.x-vt/A,W=lt.y+pt/A,z=ut.x-P/_,ot=ut.y+st/_,at=((z-U)*P-(ot-W)*st)/(pt*P-vt*st);dt=U+pt*at-it.x,Q=W+vt*at-it.y;let $=dt*dt+Q*Q;if($<=2)return new nt(dt,Q);ht=Math.sqrt($/2)}else{let A=!1;pt>Number.EPSILON?st>Number.EPSILON&&(A=!0):pt<-Number.EPSILON?st<-Number.EPSILON&&(A=!0):Math.sign(vt)===Math.sign(P)&&(A=!0),A?(dt=-vt,Q=pt,ht=Math.sqrt(Mt)):(dt=pt,Q=vt,ht=Math.sqrt(Mt/2))}return new nt(dt/ht,Q/ht)}let O=[];for(let it=0,lt=k.length,ut=lt-1,dt=it+1;it<lt;it++,ut++,dt++)ut===lt&&(ut=0),dt===lt&&(dt=0),O[it]=X(k[it],k[ut],k[dt]);let V=[],j,bt=O.concat();for(let it=0,lt=L;it<lt;it++){let ut=D[it];j=[];for(let dt=0,Q=ut.length,ht=Q-1,pt=dt+1;dt<Q;dt++,ht++,pt++)ht===Q&&(ht=0),pt===Q&&(pt=0),j[dt]=X(ut[dt],ut[ht],ut[pt]);V.push(j),bt=bt.concat(j)}let Tt;if(m===0)Tt=ws.triangulateShape(k,D);else{let it=[],lt=[];for(let ut=0;ut<m;ut++){let dt=ut/m,Q=f*Math.cos(dt*Math.PI/2),ht=g*Math.sin(dt*Math.PI/2)+y;for(let pt=0,vt=k.length;pt<vt;pt++){let st=q(k[pt],O[pt],ht);mt(st.x,st.y,-Q),dt===0&&it.push(st)}for(let pt=0,vt=L;pt<vt;pt++){let st=D[pt];j=V[pt];let P=[];for(let Mt=0,St=st.length;Mt<St;Mt++){let A=q(st[Mt],j[Mt],ht);mt(A.x,A.y,-Q),dt===0&&P.push(A)}dt===0&&lt.push(P)}}Tt=ws.triangulateShape(it,lt)}let se=Tt.length,Qt=g+y;for(let it=0;it<F;it++){let lt=u?q(I[it],bt[it],Qt):I[it];x?(R.copy(S.normals[0]).multiplyScalar(lt.x),b.copy(S.binormals[0]).multiplyScalar(lt.y),v.copy(E[0]).add(R).add(b),mt(v.x,v.y,v.z)):mt(lt.x,lt.y,0)}for(let it=1;it<=h;it++)for(let lt=0;lt<F;lt++){let ut=u?q(I[lt],bt[lt],Qt):I[lt];x?(R.copy(S.normals[it]).multiplyScalar(ut.x),b.copy(S.binormals[it]).multiplyScalar(ut.y),v.copy(E[it]).add(R).add(b),mt(v.x,v.y,v.z)):mt(ut.x,ut.y,d/h*it)}for(let it=m-1;it>=0;it--){let lt=it/m,ut=f*Math.cos(lt*Math.PI/2),dt=g*Math.sin(lt*Math.PI/2)+y;for(let Q=0,ht=k.length;Q<ht;Q++){let pt=q(k[Q],O[Q],dt);mt(pt.x,pt.y,d+ut)}for(let Q=0,ht=D.length;Q<ht;Q++){let pt=D[Q];j=V[Q];for(let vt=0,st=pt.length;vt<st;vt++){let P=q(pt[vt],j[vt],dt);x?mt(P.x,P.y+E[h-1].y,E[h-1].x+ut):mt(P.x,P.y,d+ut)}}}Zt(),J();function Zt(){let it=s.length/3;if(u){let lt=0,ut=F*lt;for(let dt=0;dt<se;dt++){let Q=Tt[dt];Nt(Q[2]+ut,Q[1]+ut,Q[0]+ut)}lt=h+m*2,ut=F*lt;for(let dt=0;dt<se;dt++){let Q=Tt[dt];Nt(Q[0]+ut,Q[1]+ut,Q[2]+ut)}}else{for(let lt=0;lt<se;lt++){let ut=Tt[lt];Nt(ut[2],ut[1],ut[0])}for(let lt=0;lt<se;lt++){let ut=Tt[lt];Nt(ut[0]+F*h,ut[1]+F*h,ut[2]+F*h)}}n.addGroup(it,s.length/3-it,0)}function J(){let it=s.length/3,lt=0;et(k,lt),lt+=k.length;for(let ut=0,dt=D.length;ut<dt;ut++){let Q=D[ut];et(Q,lt),lt+=Q.length}n.addGroup(it,s.length/3-it,1)}function et(it,lt){let ut=it.length;for(;--ut>=0;){let dt=ut,Q=ut-1;Q<0&&(Q=it.length-1);for(let ht=0,pt=h+m*2;ht<pt;ht++){let vt=F*ht,st=F*(ht+1),P=lt+dt+vt,Mt=lt+Q+vt,St=lt+Q+st,A=lt+dt+st;ft(P,Mt,St,A)}}}function mt(it,lt,ut){l.push(it),l.push(lt),l.push(ut)}function Nt(it,lt,ut){kt(it),kt(lt),kt(ut);let dt=s.length/3,Q=M.generateTopUV(n,s,dt-3,dt-2,dt-1);le(Q[0]),le(Q[1]),le(Q[2])}function ft(it,lt,ut,dt){kt(it),kt(lt),kt(dt),kt(lt),kt(ut),kt(dt);let Q=s.length/3,ht=M.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);le(ht[0]),le(ht[1]),le(ht[3]),le(ht[1]),le(ht[2]),le(ht[3])}function kt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function le(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new i(n,t.options)}},mg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-d),new nt(u,1-g),new nt(y,1-p)]:[new nt(a,1-l),new nt(h,1-d),new nt(f,1-g),new nt(m,1-p)]}};function gg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tr=class i extends Sr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Vi=class i extends de{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ue(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new C,u=new nt,f=new C,g=new C,y=new C,m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=e;M++){let E=n+M*h*s,x=Math.sin(E),S=Math.cos(E);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*x,d.y=t[b].y,d.z=t[b].x*S,o.push(d.x,d.y,d.z),u.x=M/e,u.y=b/(t.length-1),a.push(u.x,u.y);let R=l[3*b+0]*x,v=l[3*b+1],w=l[3*b+0]*S;c.push(R,v,w)}}for(let M=0;M<e;M++)for(let E=0;E<t.length-1;E++){let x=E+M*t.length,S=x,b=x+t.length,R=x+t.length+1,v=x+1;r.push(S,b,v),r.push(R,v,b)}this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("uv",new Ot(a,2)),this.setAttribute("normal",new Ot(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Oo=class i extends Sr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qe=class i extends de{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let E=0;E<c;E++){let x=E*d-r;g.push(x,-M,0),y.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let E=M+c*p,x=M+c*(p+1),S=M+1+c*(p+1),b=M+1+c*p;f.push(E,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ds=class i extends de{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new C,g=new nt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let M=p+m,E=M,x=M+n+1,S=M+n+2,b=M+1;a.push(E,x,b),a.push(x,S,b)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ce=class i extends de{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let M=[],E=p/n,x=o+E*a,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S),R=0;p===0&&o===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let v=0;v<=e;v++){let w=v/e,I=s+w*r;d.x=-b*Math.cos(I),d.y=S,d.z=b*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+R,1-E),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let E=h[p][M+1],x=h[p][M],S=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&f.push(E,x,b),(p!==n-1||l<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Pe=class i extends de{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let y=0;y<=n;y++){let m=o+y/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,M=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,x=(s+1)*y+m;l.push(p,M,x),l.push(M,E,x)}this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ri=class i extends de{constructor(t=new Ps(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new nt,h=new C,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),M(),p()}function m(E){h=t.getPointAt(E/e,h);let x=o.normals[E],S=o.binormals[E];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,v=Math.sin(R),w=-Math.cos(R);l.x=w*x.x+v*S.x,l.y=w*x.y+v*S.y,l.z=w*x.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=e;E++)for(let x=1;x<=s;x++){let S=(s+1)*(E-1)+(x-1),b=(s+1)*E+(x-1),R=(s+1)*E+x,v=(s+1)*(E-1)+x;g.push(S,b,v),g.push(b,R,v)}}function M(){for(let E=0;E<=e;E++)for(let x=0;x<=s;x++)c.x=E/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Dl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Fs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Lf(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Fs(i[e]);for(let s in n)t[s]=n[s]}return t}function Lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function xg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var vn={clone:Fs,merge:mn},_g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ve=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_g,this.fragmentShader=vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=xg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new te().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wr=class extends ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ee=class extends Vn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oi=class extends ee{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Bo=class extends Vn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Nl=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var os=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fl=class extends os{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case iu:r=t,a=2*e-n;break;case su:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case iu:o=t,l=2*n-e;break;case su:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,M=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+M*o[c+S]+E*o[l+S]+x*o[d+S];return r}},Ol=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Bl=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hl=class extends os{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*y+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let y=o[c+g],m=o[l+g],p=f*u+g*2,M=d[p],E=d[p+1],x=t*u+g*2,S=h[x],b=h[x+1],R=Mg(n,e,M,S,s);r[g]=wp(R,y,E,b,m)}return r}};function wp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yg(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mg(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=wp(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=yg(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Qh(t.settings)&&(n.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case hl:e=this.InterpolantFactoryMethodSmooth;break;case eu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return hl;case this.InterpolantFactoryMethodBezier:return eu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Qh(this.settings)&&(Nf(this.settings.inTangents,t),Nf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&cm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Qh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=yl;var as=class extends Fn{constructor(t,e,n){super(t,e,n)}};as.prototype.ValueTypeName="bool";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=po;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var zl=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};zl.prototype.ValueTypeName="color";var Gl=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};Gl.prototype.ValueTypeName="number";var kl=class extends os{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ho=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new kl(this.times,this.values,this.getValueSize(),t)}};Ho.prototype.ValueTypeName="quaternion";Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends Fn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=po;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};Vl.prototype.ValueTypeName="vector";var Wl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ap=new Wl,Xl=class{constructor(t){this.manager=t!==void 0?t:Ap,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Rr=class extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},tu=new ne,Uf=new C,Ff=new C,zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uf),Ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ff),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ur||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(tu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ll=new C,cl=new an,fi=new C,Go=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ll,cl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ll,cl,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ll,cl,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},is=new C,Of=new nt,Bf=new nt,on=class extends Go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,e){return this.getViewBounds(t,Of,Bf),e.subVectors(Bf,Of)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var cu=class extends zo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Cr=class extends Ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cs=class extends Go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hu=class extends zo{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wi=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new hu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ar=-90,lr=1,ql=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ar,lr,t,e);s.layers=this.layers,this.add(s);let r=new on(ar,lr,t,e);r.layers=this.layers,this.add(r);let o=new on(ar,lr,t,e);o.layers=this.layers,this.add(o);let a=new on(ar,lr,t,e);a.layers=this.layers,this.add(a);let l=new on(ar,lr,t,e);l.layers=this.layers,this.add(l);let c=new on(ar,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yl=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ko=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Sg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Sg(){this._document.hidden===!1&&this.reset()}var Du="\\[\\]\\.:\\/",bg=new RegExp("["+Du+"]","g"),Lu="[^"+Du+"]",Eg="[^"+Du.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",Lu),wg=/(WCOD+)?/.source.replace("WCOD",Eg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),Cg=new RegExp("^"+Tg+wg+Ag+Rg+"$"),Pg=["material","materials","bones","map"],uu=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(t){let e=Cg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=uu;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);var Hf=new ne,Vo=class{constructor(t,e,n=0,s=1/0){this.ray=new Rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(t,e=!0,n=[]){return du(t,this,n,e),n.sort(zf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)du(t[s],this,n,e);return n.sort(zf),n}};function zf(i,t){return i.distance-t.distance}function du(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)du(r[o],t,e,!0)}}var fu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Nu(i,t,e,n){let s=Ig(n);switch(e){case Tu:return i*t;case ec:return i*t/s.components*s.byteLength;case nc:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case wu:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case sc:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:case lc:return Math.max(i,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(i,8)*Math.max(t,8)/2;case cc:case hc:case dc:case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case uc:case sa:case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cc:case Pc:case Ic:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case Nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(i){switch(i){case pn:case Mu:return{byteLength:1,components:1};case Ir:case Su:case ke:return{byteLength:2,components:1};case Ql:case tc:return{byteLength:2,components:4};case li:case jl:case qn:return{byteLength:4,components:1};case bu:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $p(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
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
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nx=`PhysicalMaterial material;
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
#endif`,Ux=`uniform sampler2D dfgLUT;
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
}`,Fx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,T_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B_=`uniform sampler2D t2D;
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
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,q_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,j_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Og,alphahash_pars_fragment:Bg,alphamap_fragment:Hg,alphamap_pars_fragment:zg,alphatest_fragment:Gg,alphatest_pars_fragment:kg,aomap_fragment:Vg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:Yg,beginnormal_vertex:Zg,bsdfs:$g,iridescence_fragment:Jg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:Qg,clipping_planes_pars_vertex:tx,clipping_planes_vertex:ex,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:sx,color_vertex:rx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:hx,emissivemap_fragment:ux,emissivemap_pars_fragment:dx,colorspace_fragment:fx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:xx,envmap_pars_vertex:_x,envmap_physical_pars_fragment:Cx,envmap_vertex:vx,fog_vertex:yx,fog_pars_vertex:Mx,fog_fragment:Sx,fog_pars_fragment:bx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Tx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:Ix,lights_phong_fragment:Dx,lights_phong_pars_fragment:Lx,lights_physical_fragment:Nx,lights_physical_pars_fragment:Ux,lights_fragment_begin:Fx,lights_fragment_maps:Ox,lights_fragment_end:Bx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Vx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:qx,map_particle_pars_fragment:Yx,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:$x,morphinstance_vertex:Jx,morphcolor_vertex:Kx,morphnormal_vertex:jx,morphtarget_pars_vertex:Qx,morphtarget_vertex:t_,normal_fragment_begin:e_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:E_,skinning_vertex:T_,skinnormal_vertex:w_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:D_,uv_pars_fragment:L_,uv_pars_vertex:N_,uv_vertex:U_,worldpos_vertex:F_,background_vert:O_,background_frag:B_,backgroundCube_vert:H_,backgroundCube_frag:z_,cube_vert:G_,cube_frag:k_,depth_vert:V_,depth_frag:W_,distance_vert:X_,distance_frag:q_,equirect_vert:Y_,equirect_frag:Z_,linedashed_vert:$_,linedashed_frag:J_,meshbasic_vert:K_,meshbasic_frag:j_,meshlambert_vert:Q_,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},Rt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ti={basic:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([Rt.points,Rt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([Rt.common,Rt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([Rt.sprite,Rt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:mn([Rt.common,Rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:mn([Rt.lights,Rt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ti.physical={uniforms:mn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Oc={r:0,b:0,g:0},xv=new ne,Jp=new te;Jp.set(-1,0,0,0,1,0,0,0,1);function _v(i,t,e,n,s,r){let o=new xt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let x=M.backgroundBlurriness>0;E=t.get(E,x)}return E}function g(M){let E=!1,x=f(M);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let x=f(E);x&&(x.isCubeTexture||x.mapping===jo)?(c===void 0&&(c=new re(new Xe(1,1,1),new ve({name:"BackgroundCubeMaterial",uniforms:Fs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jp),c.material.toneMapped=pe.getTransfer(x.colorSpace)!==_e,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new re(new qe(2,2),new ve({name:"BackgroundMaterial",uniforms:Fs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=pe.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,E){M.getRGB(Oc,Iu(i)),e.buffers.color.setClear(Oc.r,Oc.g,Oc.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:y,dispose:p}}function vv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,N,G,L,k){let q=!1,F=d(D,L,G,N);r!==F&&(r=F,c(r.object)),q=f(D,L,G,k),q&&g(D,L,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(D,N,G,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,N,G,L){let k=L.wireframe===!0,q=n[N.id];q===void 0&&(q={},n[N.id]=q);let F=D.isInstancedMesh===!0?D.id:0,X=q[F];X===void 0&&(X={},q[F]=X);let O=X[G.id];O===void 0&&(O={},X[G.id]=O);let V=O[k];return V===void 0&&(V=u(l()),O[k]=V),V}function u(D){let N=[],G=[],L=[];for(let k=0;k<e;k++)N[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,N,G,L){let k=r.attributes,q=N.attributes,F=0,X=G.getAttributes();for(let O in X)if(X[O].location>=0){let j=k[O],bt=q[O];if(bt===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(D,N,G,L){let k={},q=N.attributes,F=0,X=G.getAttributes();for(let O in X)if(X[O].location>=0){let j=q[O];j===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),k[O]=bt,F++}r.attributes=k,r.attributesNum=F,r.index=L}function y(){let D=r.newAttributes;for(let N=0,G=D.length;N<G;N++)D[N]=0}function m(D){p(D,0)}function p(D,N){let G=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;G[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),k[D]!==N&&(i.vertexAttribDivisor(D,N),k[D]=N)}function M(){let D=r.newAttributes,N=r.enabledAttributes;for(let G=0,L=N.length;G<L;G++)N[G]!==D[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function E(D,N,G,L,k,q,F){F===!0?i.vertexAttribIPointer(D,N,G,k,q):i.vertexAttribPointer(D,N,G,L,k,q)}function x(D,N,G,L){y();let k=L.attributes,q=G.getAttributes(),F=N.defaultAttributeValues;for(let X in q){let O=q[X];if(O.location>=0){let V=k[X];if(V===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){let j=V.normalized,bt=V.itemSize,Tt=t.get(V);if(Tt===void 0)continue;let se=Tt.buffer,Qt=Tt.type,Zt=Tt.bytesPerElement,J=Qt===i.INT||Qt===i.UNSIGNED_INT||V.gpuType===jl;if(V.isInterleavedBufferAttribute){let et=V.data,mt=et.stride,Nt=V.offset;if(et.isInstancedInterleavedBuffer){for(let ft=0;ft<O.locationSize;ft++)p(O.location+ft,et.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<O.locationSize;ft++)m(O.location+ft);i.bindBuffer(i.ARRAY_BUFFER,se);for(let ft=0;ft<O.locationSize;ft++)E(O.location+ft,bt/O.locationSize,Qt,j,mt*Zt,(Nt+bt/O.locationSize*ft)*Zt,J)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<O.locationSize;et++)p(O.location+et,V.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<O.locationSize;et++)m(O.location+et);i.bindBuffer(i.ARRAY_BUFFER,se);for(let et=0;et<O.locationSize;et++)E(O.location+et,bt/O.locationSize,Qt,j,bt*Zt,bt/O.locationSize*et*Zt,J)}}else if(F!==void 0){let j=F[X];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(O.location,j);break;case 3:i.vertexAttrib3fv(O.location,j);break;case 4:i.vertexAttrib4fv(O.location,j);break;default:i.vertexAttrib1fv(O.location,j)}}}}M()}function S(){w();for(let D in n){let N=n[D];for(let G in N){let L=N[G];for(let k in L){let q=L[k];for(let F in q)h(q[F].object),delete q[F];delete L[k]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let N=n[D.id];for(let G in N){let L=N[G];for(let k in L){let q=L[k];for(let F in q)h(q[F].object),delete q[F];delete L[k]}}delete n[D.id]}function R(D){for(let N in n){let G=n[N];for(let L in G){let k=G[L];if(k[D.id]===void 0)continue;let q=k[D.id];for(let F in q)h(q[F].object),delete q[F];delete k[D.id]}}}function v(D){for(let N in n){let G=n[N],L=D.isInstancedMesh===!0?D.id:0,k=G[L];if(k!==void 0){for(let q in k){let F=k[q];for(let X in F)h(F[X].object),delete F[X];delete k[q]}delete G[L],Object.keys(G).length===0&&delete n[N]}}}function w(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function yv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Mv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pn&&R!==qn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,maxSamples:S,samples:b}}function Sv(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ei,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,E=M*4,x=p.clippingState||null;l.value=x,x=h(g,u,E,f);for(let S=0;S!==E;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==y;++E,x+=4)o.copy(d[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Lr=4,bv=6,Ev=20,Tv=256,aa=new cs,Rp=new xt,Uu=null,Fu=0,Ou=0,Bu=!1,wv=new C,Os=new C,Hc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=wv}=r;Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Uu,Fu,Ou),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uu=this._renderer.getRenderTarget(),Fu=this._renderer.getActiveCubeFace(),Ou=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ke,format:An,colorSpace:mo,depthBuffer:!1},s=Cp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Av(r)),this._blurMaterial=Cv(r,t,e),this._ggxMaterial=Rv(r,t,e)}return s}_compileMaterial(t){let e=new re(new de,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let l=new on(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Rp),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new Xe,new Ge({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Rp),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;Dr(s,x*S,E>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-Lr?n-g+Lr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Dr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(a,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Dr(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Lr?s-this._lodMax+Lr:0),u=4*(this._cubeSize-h);Dr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,aa)}};function Av(i){let t=[],e=[],n=i,s=i-Lr+1+bv;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,E=p>2?0:-1,x=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(x,f*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Os.set(1,R,b):p===1?Os.set(-b,1,-R):p===2?Os.set(-b,R,1):p===3?Os.set(-1,R,-b):p===4?Os.set(-b,-1,R):Os.set(b,R,-1),Os.toArray(y,(p*u+S)*f)}}let m=new de;m.setAttribute("position",new Ne(g,f)),m.setAttribute("outputDirection",new Ne(y,f)),e.push(new re(m,null)),n>Lr&&n--}return{lodMeshes:e,sizeLods:t}}function Cp(i,t,e){let n=new Le(i,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rv(i,t,e){return new ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Cv(i,t,e){return new ve({name:"SphericalGaussianBlur",defines:{SAMPLES:Ev,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Pp(){return new ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Ip(){return new ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zc=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new ve({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Ye});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=cn),new ql(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Pv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===$l||f===Jl)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new zc(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===$l||f===Jl,y=f===fs||f===Us;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Hc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new Hc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===$l?u.mapping=fs:f===Jl&&(u.mapping=Us),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Iv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Dv(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let M=f.array;y=f.version;for(let E=0,x=M.length;E<x;E+=3){let S=M[E+0],b=M[E+1],R=M[E+2];u.push(S,b,b,R,R,S)}}else{let M=g.array;y=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){let S=E+0,b=E+1,R=E+2;u.push(S,b,b,R,R,S)}}let m=new(g.count>=65535?So:Mo)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Lv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Uv(i,t,e){let n=new WeakMap,s=new Ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let x=a.attributes.position.count*E,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*S*4*d),R=new vo(b,x,S,d);R.type=qn,R.needsUpdate=!0;let v=E*4;for(let I=0;I<d;I++){let D=m[I],N=p[I],G=M[I],L=x*S*4*I;for(let k=0;k<D.count;k++){let q=k*v;f===!0&&(s.fromBufferAttribute(D,k),b[L+q+0]=s.x,b[L+q+1]=s.y,b[L+q+2]=s.z,b[L+q+3]=0),g===!0&&(s.fromBufferAttribute(N,k),b[L+q+4]=s.x,b[L+q+5]=s.y,b[L+q+6]=s.z,b[L+q+7]=0),y===!0&&(s.fromBufferAttribute(G,k),b[L+q+8]=s.x,b[L+q+9]=s.y,b[L+q+10]=s.z,b[L+q+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new nt(x,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fv(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ov={[qo]:"LINEAR_TONE_MAPPING",[Yo]:"REINHARD_TONE_MAPPING",[Zo]:"CINEON_TONE_MAPPING",[ds]:"ACES_FILMIC_TONE_MAPPING",[Jo]:"AGX_TONE_MAPPING",[Ko]:"NEUTRAL_TONE_MAPPING",[$o]:"CUSTOM_TONE_MAPPING"};function Bv(i,t,e,n,s,r){let o=new Le(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new de;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new wr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new re(c,h),u=new cs(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,M=[],E=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<M.length;b++){let R=M[b];R.setSize&&R.setSize(x,S)}},this.setEffects=function(x){M=x,E=M.length>0&&M[0].isRenderPass===!0;let S=o.width,b=o.height;M.length>0&&a===null&&(a=new Le(S,b,{type:ke,depthBuffer:!1,stencilBuffer:!1}),l=new Le(S,b,{type:ke,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let v=M[R];v.setSize&&v.setSize(S,b)}},this.begin=function(x,S){if(y||x.toneMapping===ai&&M.length===0)return!1;if(p=S,S!==null){let b=S.width,R=S.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return E},this.end=function(x,S){x.toneMapping=m,y=!0;let b=o,R=a;for(let v=0;v<M.length;v++){let w=M[v];w.enabled!==!1&&(w.render(x,R,b,S),w.needsSwap!==!1&&(b=R,R=R===a?l:a))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},pe.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");let v=Ov[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Kp=new _n,Gu=new Mi(1,1),jp=new vo,Qp=new bl,t0=new wo,Dp=[],Lp=[],Np=new Float32Array(16),Up=new Float32Array(9),Fp=new Float32Array(4);function Ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Dp[s];if(r===void 0&&(r=new Float32Array(s),Dp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function en(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function nn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kc(i,t){let e=Lp[t];e===void 0&&(e=new Int32Array(t),Lp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Hv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2fv(this.addr,t),nn(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;i.uniform3fv(this.addr,t),nn(e,t)}}function kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4fv(this.addr,t),nn(e,t)}}function Vv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Fp.set(n),i.uniformMatrix2fv(this.addr,!1,Fp),nn(e,n)}}function Wv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Up.set(n),i.uniformMatrix3fv(this.addr,!1,Up),nn(e,n)}}function Xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Np.set(n),i.uniformMatrix4fv(this.addr,!1,Np),nn(e,n)}}function qv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2iv(this.addr,t),nn(e,t)}}function Zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3iv(this.addr,t),nn(e,t)}}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4iv(this.addr,t),nn(e,t)}}function Jv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;i.uniform2uiv(this.addr,t),nn(e,t)}}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;i.uniform3uiv(this.addr,t),nn(e,t)}}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;i.uniform4uiv(this.addr,t),nn(e,t)}}function ty(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gu.compareFunction=e.isReversedDepthBuffer()?Fc:Uc,r=Gu):r=Kp,e.setTexture2D(t||r,s)}function ey(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qp,s)}function ny(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||t0,s)}function iy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jp,s)}function sy(i){switch(i){case 5126:return Hv;case 35664:return zv;case 35665:return Gv;case 35666:return kv;case 35674:return Vv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Yv;case 35668:case 35672:return Zv;case 35669:case 35673:return $v;case 5125:return Jv;case 36294:return Kv;case 36295:return jv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ny;case 36289:case 36303:case 36311:case 36292:return iy}}function ry(i,t){i.uniform1fv(this.addr,t)}function oy(i,t){let e=Ur(t,this.size,2);i.uniform2fv(this.addr,e)}function ay(i,t){let e=Ur(t,this.size,3);i.uniform3fv(this.addr,e)}function ly(i,t){let e=Ur(t,this.size,4);i.uniform4fv(this.addr,e)}function cy(i,t){let e=Ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hy(i,t){let e=Ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uy(i,t){let e=Ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dy(i,t){i.uniform1iv(this.addr,t)}function fy(i,t){i.uniform2iv(this.addr,t)}function py(i,t){i.uniform3iv(this.addr,t)}function my(i,t){i.uniform4iv(this.addr,t)}function gy(i,t){i.uniform1uiv(this.addr,t)}function xy(i,t){i.uniform2uiv(this.addr,t)}function _y(i,t){i.uniform3uiv(this.addr,t)}function vy(i,t){i.uniform4uiv(this.addr,t)}function yy(i,t,e){let n=this.cache,s=t.length,r=kc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gu:o=Kp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function My(i,t,e){let n=this.cache,s=t.length,r=kc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qp,r[o])}function Sy(i,t,e){let n=this.cache,s=t.length,r=kc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||t0,r[o])}function by(i,t,e){let n=this.cache,s=t.length,r=kc(e,s);en(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||jp,r[o])}function Ey(i){switch(i){case 5126:return ry;case 35664:return oy;case 35665:return ay;case 35666:return ly;case 35674:return cy;case 35675:return hy;case 35676:return uy;case 5124:case 35670:return dy;case 35667:case 35671:return fy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return xy;case 36295:return _y;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return by}}var ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sy(e.type)}},Vu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ey(e.type)}},Wu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Op(i,t){i.seq.push(t),i.map[t.id]=t}function Ty(i,t,e){let n=i.name,s=n.length;for(Hu.lastIndex=0;;){let r=Hu.exec(n),o=Hu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Op(e,c===void 0?new ku(a,i,t):new Vu(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Wu(a),Op(e,d)),e=d}}}var Nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ty(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Bp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var wy=37297,Ay=0;function Ry(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Hp=new te;function Cy(i){pe._getMatrix(Hp,pe.workingColorSpace,i);let t=`mat3( ${Hp.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ry(i.getShaderSource(t),a)}else return r}function Py(i,t){let e=Cy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Iy={[qo]:"Linear",[Yo]:"Reinhard",[Zo]:"Cineon",[ds]:"ACESFilmic",[Jo]:"AgX",[Ko]:"Neutral",[$o]:"Custom"};function Dy(i,t){let e=Iy[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bc=new C;function Ly(){pe.getLuminanceCoefficients(Bc);let i=Bc.x.toFixed(4),t=Bc.y.toFixed(4),e=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ny(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Uy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ca(i){return i!==""}function Gp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(i){return i.replace(Oy,Hy)}var By=new Map;function Hy(i,t){let e=fe[t];if(e===void 0){let n=By.get(t);if(n!==void 0)e=fe[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xu(e)}var zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vp(i){return i.replace(zy,Gy)}function Gy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wp(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ky={[Ls]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function Vy(i){return ky[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wy={[fs]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function Xy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var qy={[Us]:"ENVMAP_MODE_REFRACTION"};function Yy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zy={[vu]:"ENVMAP_BLENDING_MULTIPLY",[sp]:"ENVMAP_BLENDING_MIX",[rp]:"ENVMAP_BLENDING_ADD"};function $y(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zy[i.combine]||"ENVMAP_BLENDING_NONE"}function Jy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ky(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Vy(e),c=Xy(e),h=Yy(e),d=$y(e),u=Jy(e),f=Ny(e),g=Uy(r),y=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?fe.tonemapping_pars_fragment:"",e.toneMapping!==ai?Dy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,Py("linearToOutputTexel",e.outputColorSpace),Ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),o=Xu(o),o=Gp(o,e),o=kp(o,e),a=Xu(a),a=Gp(a,e),a=kp(a,e),o=Vp(o),a=Vp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=M+m+o,x=M+p+a,S=Bp(s,s.VERTEX_SHADER,E),b=Bp(s,s.FRAGMENT_SHADER,x);s.attachShader(y,S),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(b)||"",k=N.trim(),q=G.trim(),F=L.trim(),X=!0,O=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,S,b);else{let V=zp(s,S,"vertex"),j=zp(s,b,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+V+`
`+j)}else k!==""?Jt("WebGLProgram: Program Info Log:",k):(q===""||F==="")&&(O=!1);O&&(D.diagnostics={runnable:X,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(S),s.deleteShader(b),v=new Nr(s,y),w=Fy(s,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,wy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ay++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}var jy=0,qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yu(t),e.set(t,n)),n}},Yu=class{constructor(t){this.id=jy++,this.code=t,this.usedTimes=0}};function Qy(i){return i===gs||i===sa||i===ra}function tM(i,t,e,n,s,r){let o=new mr,a=new qu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,w,I,D,N,G){let L=D.fog,k=N.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=t.get(v.envMap||q,F),O=X&&X.mapping===jo?X.image.height:null,V=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Jt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=j!==void 0?j.length:0,Tt=0;k.morphAttributes.position!==void 0&&(Tt=1),k.morphAttributes.normal!==void 0&&(Tt=2),k.morphAttributes.color!==void 0&&(Tt=3);let se,Qt,Zt,J;if(V){let Re=Ti[V];se=Re.vertexShader,Qt=Re.fragmentShader}else{se=v.vertexShader,Qt=v.fragmentShader;let Re=a.getVertexShaderStage(v),ye=a.getFragmentShaderStage(v);a.update(v,Re,ye),Zt=Re.id,J=ye.id}let et=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Nt=N.isInstancedMesh===!0,ft=N.isBatchedMesh===!0,kt=!!v.map,le=!!v.matcap,it=!!X,lt=!!v.aoMap,ut=!!v.lightMap,dt=!!v.bumpMap&&v.wireframe===!1,Q=!!v.normalMap,ht=!!v.displacementMap,pt=!!v.emissiveMap,vt=!!v.metalnessMap,st=!!v.roughnessMap,P=v.anisotropy>0,Mt=v.clearcoat>0,St=v.dispersion>0,A=v.retroreflectivity>0,_=v.iridescence>0,U=v.sheen>0,W=v.transmission>0,z=P&&!!v.anisotropyMap,ot=Mt&&!!v.clearcoatMap,at=Mt&&!!v.clearcoatNormalMap,$=Mt&&!!v.clearcoatRoughnessMap,tt=_&&!!v.iridescenceMap,gt=_&&!!v.iridescenceThicknessMap,Bt=U&&!!v.sheenColorMap,yt=U&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Ut=!!v.specularColorMap,Vt=!!v.specularIntensityMap,jt=W&&!!v.transmissionMap,H=W&&!!v.thicknessMap,wt=!!v.gradientMap,rt=!!v.alphaMap,At=v.alphaTest>0,Dt=!!v.alphaHash,ct=!!v.extensions,qt=ai;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(qt=i.toneMapping);let Gt={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:se,fragmentShader:Qt,defines:v.defines,customVertexShaderID:Zt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ft,batchingColor:ft&&N._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&N.instanceColor!==null,instancingMorph:Nt&&N.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:le,envMap:it,envMapMode:it&&X.mapping,envMapCubeUVHeight:O,aoMap:lt,lightMap:ut,bumpMap:dt,normalMap:Q,displacementMap:ht,emissiveMap:pt,normalMapObjectSpace:Q&&v.normalMapType===lp,normalMapTangentSpace:Q&&v.normalMapType===oa,packedNormalMap:Q&&v.normalMapType===oa&&Qy(v.normalMap.format),metalnessMap:vt,roughnessMap:st,anisotropy:P,anisotropyMap:z,clearcoat:Mt,clearcoatMap:ot,clearcoatNormalMap:at,clearcoatRoughnessMap:$,dispersion:St,retroreflection:A,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:gt,sheen:U,sheenColorMap:Bt,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Ut,specularIntensityMap:Vt,transmission:W,transmissionMap:jt,thicknessMap:H,gradientMap:wt,opaque:v.transparent===!1&&v.blending===us&&v.alphaToCoverage===!1,alphaMap:rt,alphaTest:At,alphaHash:Dt,combine:v.combine,mapUv:kt&&g(v.map.channel),aoMapUv:lt&&g(v.aoMap.channel),lightMapUv:ut&&g(v.lightMap.channel),bumpMapUv:dt&&g(v.bumpMap.channel),normalMapUv:Q&&g(v.normalMap.channel),displacementMapUv:ht&&g(v.displacementMap.channel),emissiveMapUv:pt&&g(v.emissiveMap.channel),metalnessMapUv:vt&&g(v.metalnessMap.channel),roughnessMapUv:st&&g(v.roughnessMap.channel),anisotropyMapUv:z&&g(v.anisotropyMap.channel),clearcoatMapUv:ot&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(v.sheenRoughnessMap.channel),specularMapUv:_t&&g(v.specularMap.channel),specularColorMapUv:Ut&&g(v.specularColorMap.channel),specularIntensityMapUv:Vt&&g(v.specularIntensityMap.channel),transmissionMapUv:jt&&g(v.transmissionMap.channel),thicknessMapUv:H&&g(v.thicknessMap.channel),alphaMapUv:rt&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Q||P),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(kt||rt),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Q===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&pe.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===xe,flipSided:v.side===hn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ct&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&v.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function E(v){let w=f[v.type],I;if(w){let D=Ti[w];I=vn.clone(D.uniforms)}else I=v.uniforms;return I}function x(v,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new Ky(i,w,v,s),c.push(I),h.set(w,I)),I}function S(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function eM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function nM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,y,m,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function l(u,f,g,y,m,p,M){M.reversedDepth===!0&&(m=-m);let E=a(u,f,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,y,m,p){let M=a(u,f,g,y,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||nM),n.length>1&&n.sort(f||Xp),s.length>1&&s.sort(f||Xp)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function iM(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qp,i.set(n,[o])):s>=r.length?(o=new qp,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new xt};break;case"SpotLight":e={position:new C,direction:new C,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function rM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var oM=0;function aM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lM(i){let t=new sM,e=rM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ne,o=new ne;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,E=0,x=0,S=0,b=0,R=0,v=0,w=0,I=0;c.sort(aM);for(let N=0,G=c.length;N<G;N++){let L=c[N],k=L.color,q=L.intensity,F=L.distance,X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===gs?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],q);I++}else if(L.isSunLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,j=e.get(L);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=X;let bt=V.getViewportCount();for(let Tt=0;Tt<bt;Tt++)n.sunShadowMatrix[y+Tt]=V.getMatrix(Tt),n.sunShadowCascade[y+Tt]=V._cascadeData[Tt];y+=bt,g++}n.sun[f]=O,f++}else if(L.isDirectionalLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let V=L.shadow,j=e.get(L);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=O,m++}else if(L.isSpotLight){let O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(k).multiplyScalar(q),O.distance=F,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[M]=O;let V=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,V.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[M]=V.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=X,R++}M++}else if(L.isRectAreaLight){let O=t.get(L);O.color.copy(k).multiplyScalar(q),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=O,E++}else if(L.isPointLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let V=L.shadow,j=e.get(L);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=O,p++}else if(L.isHemisphereLight){let O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(q),O.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[x]=O,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==x||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==v||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=x,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=v,D.numLightProbes=I,n.version=oM++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let x=c[M];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(x.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){let S=n.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Yp(i){let t=new lM(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cM(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yp(i),t.set(s,[a])):r>=o.length?(a=new Yp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`,dM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],fM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Zp=new ne,la=new C,zu=new C;function pM(i,t,e){let n=new yr,s=new nt,r=new nt,o=new Ue,a=new Nl,l=new Ul,c={},h=e.maxTextureSize,d={[hs]:hn,[hn]:hs,[xe]:xe},u=new ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:hM,fragmentShader:uM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new de;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new re(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let p=this.type;this.render=function(b,R,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Vf&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Ye),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){let q=b[L],F=q.shadow;if(F===void 0){Jt("WebGLShadowMap:",q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));let O=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=O,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Pr){if(q.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Le(s.x,s.y,{format:gs,type:ke,minFilter:cn,magFilter:cn,generateMipmaps:!1}),F.map.texture.name=q.name+".shadowMap",F.map.depthTexture=new Mi(s.x,s.y,qn),F.map.depthTexture.name=q.name+".shadowMapDepth",F.map.depthTexture.format=gi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We}else q.isPointLight?(F.map=new zc(s.x),F.map.depthTexture=new Rl(s.x,li)):(F.map=new Le(s.x,s.y),F.map.depthTexture=new Mi(s.x,s.y,li)),F.map.depthTexture.name=q.name+".shadowMap",F.map.depthTexture.format=gi,this.type===Ls?(F.map.depthTexture.compareFunction=O?Fc:Uc,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let V=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();q.isPointLight!==!0&&F.updateMatrices(q,v);for(let j=0;j<V;j++){let bt=F.getCamera(j);if(q.isPointLight){let Tt=F.camera,se=F.matrix,Qt=q.distance||Tt.far;Qt!==Tt.far&&(Tt.far=Qt,Tt.updateProjectionMatrix()),la.setFromMatrixPosition(q.matrixWorld),Tt.position.copy(la),zu.copy(Tt.position),zu.add(dM[j]),Tt.up.copy(fM[j]),Tt.lookAt(zu),Tt.updateMatrixWorld(),se.makeTranslation(-la.x,-la.y,-la.z),Zp.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Zp,Tt.coordinateSystem,Tt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,j),i.clear();else{j===0&&(i.setRenderTarget(F.map),i.clear());let Tt=F.getViewport(j);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),N.viewport(o)}n=F.getFrustum(j),x(R,v,bt,q,this.type)}F.isPointLightShadow!==!0&&this.type===Pr&&M(F,v),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,D)};function M(b,R){let v=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Le(s.x,s.y,{format:gs,type:ke}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,v,f,y,null)}function E(b,R,v,w){let I=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)I=D;else if(I=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let N=I.uuid,G=R.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let k=L[G];k===void 0&&(k=I.clone(),L[G]=k,R.addEventListener("dispose",S)),I=k}if(I.visible=R.visible,I.wireframe=R.wireframe,w===Pr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=i.properties.get(I);N.light=v}return I}function x(b,R,v,w,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Pr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let G=t.update(b),L=b.material;if(Array.isArray(L)){let k=G.groups;for(let q=0,F=k.length;q<F;q++){let X=k[q],O=L[X.materialIndex];if(O&&O.visible){let V=E(b,O,w,I);b.onBeforeShadow(i,b,R,v,G,V,X),i.renderBufferDirect(v,null,G,V,b,X),b.onAfterShadow(i,b,R,v,G,V,X)}}}else if(L.visible){let k=E(b,L,w,I);b.onBeforeShadow(i,b,R,v,G,k,null),i.renderBufferDirect(v,null,G,k,b,null),b.onAfterShadow(i,b,R,v,G,k,null)}}let N=b.children;for(let G=0,L=N.length;G<L;G++)x(N[G],R,v,w,I)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let w=c[v],I=b.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function mM(i,t){function e(){let H=!1,wt=new Ue,rt=null,At=new Ue(0,0,0,0);return{setMask:function(Dt){rt!==Dt&&!H&&(i.colorMask(Dt,Dt,Dt,Dt),rt=Dt)},setLocked:function(Dt){H=Dt},setClear:function(Dt,ct,qt,Gt,Re){Re===!0&&(Dt*=Gt,ct*=Gt,qt*=Gt),wt.set(Dt,ct,qt,Gt),At.equals(wt)===!1&&(i.clearColor(Dt,ct,qt,Gt),At.copy(wt))},reset:function(){H=!1,rt=null,At.set(-1,0,0,0)}}}function n(){let H=!1,wt=!1,rt=null,At=null,Dt=null;return{setReversed:function(ct){if(wt!==ct){let qt=t.get("EXT_clip_control");ct?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),wt=ct;let Gt=Dt;Dt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(ct){ct?et(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!H&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(wt&&(ct=vp[ct]),At!==ct){switch(ct){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case _l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=ct}},setLocked:function(ct){H=ct},setClear:function(ct){Dt!==ct&&(Dt=ct,wt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){H=!1,rt=null,At=null,Dt=null,wt=!1}}}function s(){let H=!1,wt=null,rt=null,At=null,Dt=null,ct=null,qt=null,Gt=null,Re=null;return{setTest:function(ye){H||(ye?et(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ye){wt!==ye&&!H&&(i.stencilMask(ye),wt=ye)},setFunc:function(ye,Kn,ui){(rt!==ye||At!==Kn||Dt!==ui)&&(i.stencilFunc(ye,Kn,ui),rt=ye,At=Kn,Dt=ui)},setOp:function(ye,Kn,ui){(ct!==ye||qt!==Kn||Gt!==ui)&&(i.stencilOp(ye,Kn,ui),ct=ye,qt=Kn,Gt=ui)},setLocked:function(ye){H=ye},setClear:function(ye){Re!==ye&&(i.clearStencil(ye),Re=ye)},reset:function(){H=!1,wt=null,rt=null,At=null,Dt=null,ct=null,qt=null,Gt=null,Re=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,R=null,v=new xt(0,0,0),w=0,I=!1,D=null,N=null,G=null,L=null,k=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,X=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=X>=2);let V=null,j={},bt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),se=new Ue().fromArray(bt),Qt=new Ue().fromArray(Tt);function Zt(H,wt,rt,At){let Dt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(H,ct),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<rt;qt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(wt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return ct}let J={};J[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(hr),dt(!1),Q(pu),et(i.CULL_FACE),lt(Ye);function et(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function mt(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Nt(H,wt){return u[H]!==wt?(i.bindFramebuffer(H,wt),u[H]=wt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function ft(H,wt){let rt=g,At=!1;if(H){rt=f.get(wt),rt===void 0&&(rt=[],f.set(wt,rt));let Dt=H.textures;if(rt.length!==Dt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,qt=Dt.length;ct<qt;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=Dt.length,At=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,At=!0);At&&i.drawBuffers(rt)}function kt(H){return y!==H?(i.useProgram(H),y=H,!0):!1}let le={[Xn]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};le[qf]=i.MIN,le[Yf]=i.MAX;let it={[Ns]:i.ZERO,[Zf]:i.ONE,[$f]:i.SRC_COLOR,[xu]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[Jf]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[tp]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[np]:i.CONSTANT_ALPHA,[ip]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(H,wt,rt,At,Dt,ct,qt,Gt,Re,ye){if(H===Ye){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),H!==Zl){if(H!==p||ye!==I){if((M!==Xn||S!==Xn)&&(i.blendEquation(i.FUNC_ADD),M=Xn,S=Xn),ye)switch(H){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",H);break}else switch(H){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mu:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gu:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",H);break}E=null,x=null,b=null,R=null,v.set(0,0,0),w=0,p=H,I=ye}return}Dt=Dt||wt,ct=ct||rt,qt=qt||At,(wt!==M||Dt!==S)&&(i.blendEquationSeparate(le[wt],le[Dt]),M=wt,S=Dt),(rt!==E||At!==x||ct!==b||qt!==R)&&(i.blendFuncSeparate(it[rt],it[At],it[ct],it[qt]),E=rt,x=At,b=ct,R=qt),(Gt.equals(v)===!1||Re!==w)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Re),v.copy(Gt),w=Re),p=H,I=!1}function ut(H,wt){H.side===xe?mt(i.CULL_FACE):et(i.CULL_FACE);let rt=H.side===hn;wt&&(rt=!rt),dt(rt),H.blending===us&&H.transparent===!1?lt(Ye):lt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let At=H.stencilWrite;a.setTest(At),At&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),pt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function Q(H){H!==Gf?(et(i.CULL_FACE),H!==N&&(H===pu?i.cullFace(i.BACK):H===kf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),N=H}function ht(H){H!==G&&(F&&i.lineWidth(H),G=H)}function pt(H,wt,rt){H?(et(i.POLYGON_OFFSET_FILL),(L!==wt||k!==rt)&&(L=wt,k=rt,o.getReversed()&&(wt=-wt),i.polygonOffset(wt,rt))):mt(i.POLYGON_OFFSET_FILL)}function vt(H){H?et(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function st(H){H===void 0&&(H=i.TEXTURE0+q-1),V!==H&&(i.activeTexture(H),V=H)}function P(H,wt,rt){rt===void 0&&(V===null?rt=i.TEXTURE0+q-1:rt=V);let At=j[rt];At===void 0&&(At={type:void 0,texture:void 0},j[rt]=At),(At.type!==H||At.texture!==wt)&&(V!==rt&&(i.activeTexture(rt),V=rt),i.bindTexture(H,wt||J[H]),At.type=H,At.texture=wt)}function Mt(){let H=j[V];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function St(){try{i.compressedTexImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function _(){try{i.texSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function U(){try{i.texSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function z(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function ot(){try{i.texStorage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function at(){try{i.texStorage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function $(){try{i.texImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function tt(){try{i.texImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function gt(H){return d[H]!==void 0?d[H]:i.getParameter(H)}function Bt(H,wt){d[H]!==wt&&(i.pixelStorei(H,wt),d[H]=wt)}function yt(H){se.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),se.copy(H))}function _t(H){Qt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Qt.copy(H))}function Ut(H,wt){let rt=c.get(wt);rt===void 0&&(rt=new WeakMap,c.set(wt,rt));let At=rt.get(H);At===void 0&&(At=i.getUniformBlockIndex(wt,H.name),rt.set(H,At))}function Vt(H,wt){let At=c.get(wt).get(H);l.get(wt)!==At&&(i.uniformBlockBinding(wt,At,H.__bindingPointIndex),l.set(wt,At))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,j={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,E=null,x=null,S=null,b=null,R=null,v=new xt(0,0,0),w=0,I=!1,D=null,N=null,G=null,L=null,k=null,se.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:mt,bindFramebuffer:Nt,drawBuffers:ft,useProgram:kt,setBlending:lt,setMaterial:ut,setFlipSided:dt,setCullFace:Q,setLineWidth:ht,setPolygonOffset:pt,setScissorTest:vt,activeTexture:st,bindTexture:P,unbindTexture:Mt,compressedTexImage2D:St,compressedTexImage3D:A,texImage2D:$,texImage3D:tt,pixelStorei:Bt,getParameter:gt,updateUBOMapping:Ut,uniformBlockBinding:Vt,texStorage2D:ot,texStorage3D:at,texSubImage2D:_,texSubImage3D:U,compressedTexSubImage2D:W,compressedTexSubImage3D:z,scissor:yt,viewport:_t,reset:jt}}function gM(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):xo("canvas")}function m(A,_,U){let W=1,z=St(A);if((z.width>U||z.height>U)&&(W=U/Math.max(z.width,z.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ot=Math.floor(W*z.width),at=Math.floor(W*z.height);u===void 0&&(u=y(ot,at));let $=_?y(ot,at):u;return $.width=ot,$.height=at,$.getContext("2d").drawImage(A,0,0,ot,at),Jt("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+ot+"x"+at+")."),$}else return"data"in A&&Jt("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,_,U,W,z,ot=!1){if(A!==null){if(i[A]!==void 0)return i[A];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;W&&(at=t.get("EXT_texture_norm16"),at||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(U===i.FLOAT&&($=i.R32F),U===i.HALF_FLOAT&&($=i.R16F),U===i.UNSIGNED_BYTE&&($=i.R8),U===i.UNSIGNED_SHORT&&at&&($=at.R16_EXT),U===i.SHORT&&at&&($=at.R16_SNORM_EXT)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.R8UI),U===i.UNSIGNED_SHORT&&($=i.R16UI),U===i.UNSIGNED_INT&&($=i.R32UI),U===i.BYTE&&($=i.R8I),U===i.SHORT&&($=i.R16I),U===i.INT&&($=i.R32I)),_===i.RG&&(U===i.FLOAT&&($=i.RG32F),U===i.HALF_FLOAT&&($=i.RG16F),U===i.UNSIGNED_BYTE&&($=i.RG8),U===i.UNSIGNED_SHORT&&at&&($=at.RG16_EXT),U===i.SHORT&&at&&($=at.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RG8UI),U===i.UNSIGNED_SHORT&&($=i.RG16UI),U===i.UNSIGNED_INT&&($=i.RG32UI),U===i.BYTE&&($=i.RG8I),U===i.SHORT&&($=i.RG16I),U===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGB8UI),U===i.UNSIGNED_SHORT&&($=i.RGB16UI),U===i.UNSIGNED_INT&&($=i.RGB32UI),U===i.BYTE&&($=i.RGB8I),U===i.SHORT&&($=i.RGB16I),U===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&($=i.RGBA8UI),U===i.UNSIGNED_SHORT&&($=i.RGBA16UI),U===i.UNSIGNED_INT&&($=i.RGBA32UI),U===i.BYTE&&($=i.RGBA8I),U===i.SHORT&&($=i.RGBA16I),U===i.INT&&($=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_SHORT&&at&&($=at.RGB16_EXT),U===i.SHORT&&at&&($=at.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){let tt=ot?go:pe.getTransfer(z);U===i.FLOAT&&($=i.RGBA32F),U===i.HALF_FLOAT&&($=i.RGBA16F),U===i.UNSIGNED_BYTE&&($=tt===_e?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&at&&($=at.RGBA16_EXT),U===i.SHORT&&at&&($=at.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function S(A,_){let U;return A?_===null||_===li||_===ms?U=i.DEPTH24_STENCIL8:_===qn?U=i.DEPTH32F_STENCIL8:_===Ir&&(U=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===ms?U=i.DEPTH_COMPONENT24:_===qn?U=i.DEPTH_COMPONENT32F:_===Ir&&(U=i.DEPTH_COMPONENT16),U}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(A){let _=A.target;_.removeEventListener("dispose",v),D(_)}function w(A){let _=n.get(A);if(_.__webglInit===void 0)return;let U=A.source,W=f.get(U);if(W){let z=W[_.__cacheKey];z.usedTimes--,z.usedTimes===0&&I(A),Object.keys(W).length===0&&f.delete(U)}n.remove(A)}function I(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let U=A.source,W=f.get(U);delete W[_.__cacheKey],o.memory.textures--}function D(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let z=0;z<_.__webglFramebuffer[W].length;z++)i.deleteFramebuffer(_.__webglFramebuffer[W][z]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=A.textures;for(let W=0,z=U.length;W<z;W++){let ot=n.get(U[W]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(U[W])}n.remove(A)}let N=0;function G(){N=0}function L(){return N}function k(A){N=A}function q(){let A=N;return A>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function F(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function X(A,_){let U=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let W=A.image;if(W===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(U,A,_);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function O(A,_){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){mt(U,A,_);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function V(A,_){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){mt(U,A,_);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function j(A,_){let U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Nt(U,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let bt={[Qe]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},Tt={[We]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Kl]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},se={[hp]:i.NEVER,[mp]:i.ALWAYS,[up]:i.LESS,[Uc]:i.LEQUAL,[dp]:i.EQUAL,[Fc]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function Qt(A,_){if(_.type===qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===Kl||_.magFilter===Qo||_.magFilter===ps||_.minFilter===cn||_.minFilter===Kl||_.minFilter===Qo||_.minFilter===ps)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,bt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,bt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,bt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Tt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Tt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,se[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==Qo&&_.minFilter!==ps||_.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Zt(A,_){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let W=_.source,z=f.get(W);z===void 0&&(z={},f.set(W,z));let ot=F(_);if(ot!==A.__cacheKey){z[ot]===void 0&&(z[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),z[ot].usedTimes++;let at=z[A.__cacheKey];at!==void 0&&(z[A.__cacheKey].usedTimes--,at.usedTimes===0&&I(_)),A.__cacheKey=ot,A.__webglTexture=z[ot].texture}return U}function J(A,_,U){return Math.floor(Math.floor(A/U)/_)}function et(A,_,U,W){let ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,W,_.data);else{ot.sort((Bt,yt)=>Bt.start-yt.start);let at=0;for(let Bt=1;Bt<ot.length;Bt++){let yt=ot[at],_t=ot[Bt],Ut=yt.start+yt.count,Vt=J(_t.start,_.width,4),jt=J(yt.start,_.width,4);_t.start<=Ut+1&&Vt===jt&&J(_t.start+_t.count-1,_.width,4)===Vt?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++at,ot[at]=_t)}ot.length=at+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Bt=0,yt=ot.length;Bt<yt;Bt++){let _t=ot[Bt],Ut=Math.floor(_t.start/4),Vt=Math.ceil(_t.count/4),jt=Ut%_.width,H=Math.floor(Ut/_.width),wt=Vt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,jt,H,wt,rt,U,W,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function mt(A,_,U){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let z=Zt(A,_),ot=_.source;e.bindTexture(W,A.__webglTexture,i.TEXTURE0+U);let at=n.get(ot);if(ot.version!==at.__version||z===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let rt=pe.getPrimaries(pe.workingColorSpace),At=_.colorSpace===Xi?null:pe.getPrimaries(_.colorSpace),Dt=_.colorSpace===Xi||rt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=Mt(_,tt);let gt=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),yt=x(_.internalFormat,gt,Bt,_.normalized,_.colorSpace,_.isVideoTexture);Qt(W,_);let _t,Ut=_.mipmaps,Vt=_.isVideoTexture!==!0,jt=at.__version===void 0||z===!0,H=ot.dataReady,wt=b(_,tt);if(_.isDepthTexture)yt=S(_.format===bi,_.type),jt&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,yt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,yt,tt.width,tt.height,0,gt,Bt,null));else if(_.isDataTexture)if(Ut.length>0){Vt&&jt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,Ut[0].width,Ut[0].height);for(let rt=0,At=Ut.length;rt<At;rt++)_t=Ut[rt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,Bt,_t.data):e.texImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,gt,Bt,_t.data);_.generateMipmaps=!1}else Vt?(jt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,tt.width,tt.height),H&&et(_,tt,gt,Bt)):e.texImage2D(i.TEXTURE_2D,0,yt,tt.width,tt.height,0,gt,Bt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,yt,Ut[0].width,Ut[0].height,tt.depth);for(let rt=0,At=Ut.length;rt<At;rt++)if(_t=Ut[rt],_.format!==An)if(gt!==null)if(Vt){if(H)if(_.layerUpdates.size>0){let Dt=Nu(_t.width,_t.height,_.format,_.type);for(let ct of _.layerUpdates){let qt=_t.data.subarray(ct*Dt/_t.data.BYTES_PER_ELEMENT,(ct+1)*Dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,_t.width,_t.height,1,gt,qt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,tt.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,yt,_t.width,_t.height,tt.depth,0,_t.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,tt.depth,gt,Bt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,yt,_t.width,_t.height,tt.depth,0,gt,Bt,_t.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Vt&&jt&&e.texStorage2D(i.TEXTURE_2D,wt,yt,Ut[0].width,Ut[0].height);for(let rt=0,At=Ut.length;rt<At;rt++)_t=Ut[rt],_.format!==An?gt!==null?Vt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,_t.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,gt,Bt,_t.data):e.texImage2D(i.TEXTURE_2D,rt,yt,_t.width,_t.height,0,gt,Bt,_t.data)}else if(_.isDataArrayTexture)if(Vt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,yt,tt.width,tt.height,tt.depth),H)if(_.layerUpdates.size>0){let rt=Nu(tt.width,tt.height,_.format,_.type);for(let At of _.layerUpdates){let Dt=tt.data.subarray(At*rt/tt.data.BYTES_PER_ELEMENT,(At+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,tt.width,tt.height,1,gt,Bt,Dt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,tt.width,tt.height,tt.depth,0,gt,Bt,tt.data);else if(_.isData3DTexture)Vt?(jt&&e.texStorage3D(i.TEXTURE_3D,wt,yt,tt.width,tt.height,tt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,tt.width,tt.height,tt.depth,0,gt,Bt,tt.data);else if(_.isFramebufferTexture){if(jt)if(Vt)e.texStorage2D(i.TEXTURE_2D,wt,yt,tt.width,tt.height);else{let rt=tt.width,At=tt.height;for(let Dt=0;Dt<wt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,yt,rt,At,0,gt,Bt,null),rt>>=1,At>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),tt.parentNode!==rt){rt.appendChild(tt),d.add(_),rt.onpaint=At=>{let Dt=At.changedElements;for(let ct of d)Dt.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let Dt=i.RGBA,ct=i.RGBA,qt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Dt,ct,qt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Vt&&jt){let rt=St(Ut[0]);e.texStorage2D(i.TEXTURE_2D,wt,yt,rt.width,rt.height)}for(let rt=0,At=Ut.length;rt<At;rt++)_t=Ut[rt],Vt?H&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt,Bt,_t):e.texImage2D(i.TEXTURE_2D,rt,yt,gt,Bt,_t);_.generateMipmaps=!1}else if(Vt){if(jt){let rt=St(tt);e.texStorage2D(i.TEXTURE_2D,wt,yt,rt.width,rt.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,yt,gt,Bt,tt);p(_)&&M(W),at.__version=ot.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Nt(A,_,U){if(_.image.length!==6)return;let W=Zt(A,_),z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let ot=n.get(z);if(z.version!==ot.__version||W===!0){e.activeTexture(i.TEXTURE0+U);let at=pe.getPrimaries(pe.workingColorSpace),$=_.colorSpace===Xi?null:pe.getPrimaries(_.colorSpace),tt=_.colorSpace===Xi||at===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let gt=_.isCompressedTexture||_.image[0].isCompressedTexture,Bt=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!gt&&!Bt?yt[ct]=m(_.image[ct],!0,s.maxCubemapSize):yt[ct]=Bt?_.image[ct].image:_.image[ct],yt[ct]=Mt(_,yt[ct]);let _t=yt[0],Ut=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type),jt=x(_.internalFormat,Ut,Vt,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,wt=ot.__version===void 0||W===!0,rt=z.dataReady,At=b(_,_t);Qt(i.TEXTURE_CUBE_MAP,_);let Dt;if(gt){H&&wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,_t.width,_t.height);for(let ct=0;ct<6;ct++){Dt=yt[ct].mipmaps;for(let qt=0;qt<Dt.length;qt++){let Gt=Dt[qt];_.format!==An?Ut!==null?H?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt,0,0,Gt.width,Gt.height,Ut,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt,jt,Gt.width,Gt.height,0,Gt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt,0,0,Gt.width,Gt.height,Ut,Vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt,jt,Gt.width,Gt.height,0,Ut,Vt,Gt.data)}}}else{if(Dt=_.mipmaps,H&&wt){Dt.length>0&&At++;let ct=St(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Bt){H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Ut,Vt,yt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,yt[ct].width,yt[ct].height,0,Ut,Vt,yt[ct].data);for(let qt=0;qt<Dt.length;qt++){let Re=Dt[qt].image[ct].image;H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt+1,0,0,Re.width,Re.height,Ut,Vt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt+1,jt,Re.width,Re.height,0,Ut,Vt,Re.data)}}else{H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ut,Vt,yt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,Ut,Vt,yt[ct]);for(let qt=0;qt<Dt.length;qt++){let Gt=Dt[qt];H?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt+1,0,0,Ut,Vt,Gt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,qt+1,jt,Ut,Vt,Gt.image[ct])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),ot.__version=z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ft(A,_,U,W,z,ot){let at=r.convert(U.format,U.colorSpace),$=r.convert(U.type),tt=x(U.internalFormat,at,$,U.normalized,U.colorSpace),gt=n.get(_),Bt=n.get(U);if(Bt.__renderTarget=_,!gt.__hasExternalTextures){let yt=Math.max(1,_.width>>ot),_t=Math.max(1,_.height>>ot);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?e.texImage3D(z,ot,tt,yt,_t,_.depth,0,at,$,null):e.texImage2D(z,ot,tt,yt,_t,0,at,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,z,Bt.__webglTexture,0,vt(_)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,z,Bt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(A,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let W=_.depthTexture,z=W&&W.isDepthTexture?W.type:null,ot=S(_.stencilBuffer,z),at=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(_),ot,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,A)}else{let W=_.textures;for(let z=0;z<W.length;z++){let ot=W[z],at=r.convert(ot.format,ot.colorSpace),$=r.convert(ot.type),tt=x(ot.internalFormat,at,$,ot.normalized,ot.colorSpace);st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt(_),tt,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt(_),tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(A,_,U){let W=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let z=n.get(_.depthTexture);if(z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(z.__webglInit===void 0&&(z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),z.__webglTexture===void 0){z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_.depthTexture);let gt=r.convert(_.depthTexture.format),Bt=r.convert(_.depthTexture.type),yt;_.depthTexture.format===gi?yt=i.DEPTH_COMPONENT24:_.depthTexture.format===bi&&(yt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,_.width,_.height,0,gt,Bt,null)}}else X(_.depthTexture,0);let ot=z.__webglTexture,at=vt(_),$=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,tt=_.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===gi)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,ot,0);else if(_.depthTexture.format===bi)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,$,ot,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,tt,$,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(A){let _=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",z)};W.addEventListener("dispose",z),_.__depthDisposeCallback=z}_.__boundDepthTexture=W}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let W=0;W<6;W++)le(_.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?le(_.__webglFramebuffer[0],A,0):le(_.__webglFramebuffer,A,0)}else if(U){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),kt(_.__webglDepthbuffer[W],A,!1);else{let z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,ot)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),kt(_.__webglDepthbuffer,A,!1);else{let z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,_,U){let W=n.get(A);_!==void 0&&ft(W.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&it(A)}function ut(A){let _=A.texture,U=n.get(A),W=n.get(_);A.addEventListener("dispose",v);let z=A.textures,ot=A.isWebGLCubeRenderTarget===!0,at=z.length>1;if(at||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,o.memory.textures++),ot){U.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[$]=[];for(let tt=0;tt<_.mipmaps.length;tt++)U.__webglFramebuffer[$][tt]=i.createFramebuffer()}else U.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)U.__webglFramebuffer[$]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(at)for(let $=0,tt=z.length;$<tt;$++){let gt=n.get(z[$]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&st(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let $=0;$<z.length;$++){let tt=z[$];U.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[$]);let gt=r.convert(tt.format,tt.colorSpace),Bt=r.convert(tt.type),yt=x(tt.internalFormat,gt,Bt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),_t=vt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,yt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,U.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(U.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)ft(U.__webglFramebuffer[$][tt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,tt);else ft(U.__webglFramebuffer[$],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let $=0,tt=z.length;$<tt;$++){let gt=z[$],Bt=n.get(gt),yt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(yt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Bt.__webglTexture),Qt(yt,gt),ft(U.__webglFramebuffer,A,gt,i.COLOR_ATTACHMENT0+$,yt,0),p(gt)&&M(yt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,W.__webglTexture),Qt($,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)ft(U.__webglFramebuffer[tt],A,_,i.COLOR_ATTACHMENT0,$,tt);else ft(U.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,$,0);p(_)&&M($),e.unbindTexture()}A.depthBuffer&&it(A)}function dt(A){let _=A.textures;for(let U=0,W=_.length;U<W;U++){let z=_[U];if(p(z)){let ot=E(A),at=n.get(z).__webglTexture;e.bindTexture(ot,at),M(ot),e.unbindTexture()}}}let Q=[],ht=[];function pt(A){if(A.samples>0){if(st(A)===!1){let _=A.textures,U=A.width,W=A.height,z=i.COLOR_BUFFER_BIT,ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(A),$=_.length>1;if($)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let Bt=n.get(_[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,z,i.NEAREST),l===!0&&(Q.length=0,ht.length=0,Q.push(i.COLOR_ATTACHMENT0+gt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Q.push(ot),ht.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let Bt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function vt(A){return Math.min(s.maxSamples,A.samples)}function st(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Mt(A,_){let U=A.colorSpace,W=A.format,z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==mo&&U!==Xi&&(pe.getTransfer(U)===_e?(W!==An||z!==pn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",U)),_}function St(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xM(i,t){function e(n,s=Xi){let r,o=pe.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===Su)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===ke)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===wu)return i.RGB;if(n===An)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===nc)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===ic)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===lc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===sa||n===pc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cc||n===hc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dc)return r.COMPRESSED_R11_EAC;if(n===fc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===pc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mc||n===gc||n===xc||n===_c||n===vc||n===yc||n===Mc||n===Sc||n===bc||n===Ec||n===Tc||n===wc||n===Ac||n===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ec)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Pc||n===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cc)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Lc||n===ra||n===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var _M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`,Zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ve({vertexShader:_M,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Zu,p={},M=e.getContextAttributes(),E=null,x=null,S=[],b=[],R=new nt,v=null,w=null,I=new on;I.viewport=new Ue;let D=new on;D.viewport=new Ue;let N=[I,D],G=new Yl,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=S[J];return et===void 0&&(et=new gr,S[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=S[J];return et===void 0&&(et=new gr,S[J]=et),et.getGripSpace()},this.getHand=function(J){let et=S[J];return et===void 0&&(et=new gr,S[J]=et),et.getHandSpace()};function q(J){let et=b.indexOf(J.inputSource);if(et===-1)return;let mt=S[et];mt!==void 0&&(mt.update(J.inputSource,J.frame,c||o),mt.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let J=0;J<S.length;J++){let et=b[J];et!==null&&(b[J]=null,S[J].disconnect(et))}L=null,k=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Nt=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=M.stencil?bi:gi,Nt=M.stencil?ms:li);let kt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Le(u.textureWidth,u.textureHeight,{format:An,type:pn,depthTexture:new Mi(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Le(f.framebufferWidth,f.framebufferHeight,{format:An,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let et=0;et<J.removed.length;et++){let mt=J.removed[et],Nt=b.indexOf(mt);Nt>=0&&(b[Nt]=null,S[Nt].disconnect(mt))}for(let et=0;et<J.added.length;et++){let mt=J.added[et],Nt=b.indexOf(mt);if(Nt===-1){for(let kt=0;kt<S.length;kt++)if(kt>=b.length){b.push(mt),Nt=kt;break}else if(b[kt]===null){b[kt]=mt,Nt=kt;break}if(Nt===-1)break}let ft=S[Nt];ft&&ft.connect(mt)}}let O=new C,V=new C;function j(J,et,mt){O.setFromMatrixPosition(et.matrixWorld),V.setFromMatrixPosition(mt.matrixWorld);let Nt=O.distanceTo(V),ft=et.projectionMatrix.elements,kt=mt.projectionMatrix.elements,le=ft[14]/(ft[10]-1),it=ft[14]/(ft[10]+1),lt=(ft[9]+1)/ft[5],ut=(ft[9]-1)/ft[5],dt=(ft[8]-1)/ft[0],Q=(kt[8]+1)/kt[0],ht=le*dt,pt=le*Q,vt=Nt/(-dt+Q),st=vt*-dt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(st),J.translateZ(vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let P=le+vt,Mt=it+vt,St=ht-st,A=pt+(Nt-st),_=lt*it/Mt*P,U=ut*it/Mt*P;J.projectionMatrix.makePerspective(St,A,_,U,P,Mt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,mt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),G.near=D.near=I.near=et,G.far=D.far=I.far=mt,(L!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,k=G.far),G.layers.mask=J.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Nt=J.parent,ft=G.cameras;bt(G,Nt);for(let kt=0;kt<ft.length;kt++)bt(ft[kt],Nt);ft.length===2?j(G,I,D):G.projectionMatrix.copy(I.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Tt(J,G,Nt)};function Tt(J,et,mt){mt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return p[J]};let se=null;function Qt(J,et){if(h=et.getViewerPose(c||o),g=et,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Nt=!1;mt.length!==G.cameras.length&&(G.cameras.length=0,Nt=!0);for(let it=0;it<mt.length;it++){let lt=mt[it],ut=null;if(f!==null)ut=f.getViewport(lt);else{let Q=d.getViewSubImage(u,lt);ut=Q.viewport,it===0&&(t.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(x))}let dt=N[it];dt===void 0&&(dt=new on,dt.layers.enable(it),dt.viewport=new Ue,N[it]=dt),dt.matrix.fromArray(lt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(lt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(ut.x,ut.y,ut.width,ut.height),it===0&&(G.matrix.copy(dt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Nt===!0&&G.cameras.push(dt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let it=d.getDepthInformation(mt[0]);it&&it.isValid&&it.texture&&m.init(it,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let it=0;it<mt.length;it++){let lt=mt[it].camera;if(lt){let ut=p[lt];ut||(ut=new Ao,p[lt]=ut);let dt=d.getCameraImage(lt);ut.sourceTexture=dt}}}}for(let mt=0;mt<S.length;mt++){let Nt=b[mt],ft=S[mt];Nt!==null&&ft!==void 0&&ft.update(Nt,et,c||o)}se&&se(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Zt=new $p;Zt.setAnimationLoop(Qt),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}},yM=new ne,e0=new te;e0.set(-1,0,0,0,1,0,0,0,1);function MM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Iu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(yM.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(e0),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function SM(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(m(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",M));let R=S.program;n.updateUBOMapping(x,R);let v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){let S=d();x.__bindingPointIndex=S;let b=i.createBuffer(),R=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,w=b.length;v<w;v++){let I=b[v];if(Array.isArray(I))for(let D=0,N=I.length;D<N;D++)f(I[D],v,D,R);else f(I,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,b,R){if(y(x,S,b,R)===!0){let v=x.__offset,w=x.value;if(Array.isArray(w)){let I=0;for(let D=0;D<w.length;D++){let N=w[D],G=p(N);g(N,x.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function y(x,S,b,R){let v=x.value,w=S+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{let I=R[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function m(x){let S=x.uniforms,b=0,R=16;for(let w=0,I=S.length;w<I;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,G=D.length;N<G;N++){let L=D[N],k=Array.isArray(L.value)?L.value:[L.value];for(let q=0,F=k.length;q<F;q++){let X=k[q],O=p(X),V=b%R,j=V%O.boundary,bt=V+j;b+=j,bt!==0&&R-bt<O.storage&&(b+=R-bt),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=O.storage}}}let v=b%R;return v>0&&(b+=R-v),x.__size=b,x.__cache={},this}function p(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),S}function M(x){let S=x.target;S.removeEventListener("dispose",M);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var bM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function EM(){return Ei===null&&(Ei=new Gi(bM,16,16,gs,ke),Ei.name="DFG_LUT",Ei.minFilter=cn,Ei.magFilter=cn,Ei.wrapS=pi,Ei.wrapT=pi,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var ha=class{constructor(t={}){let{canvas:e=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=f,m=new Set([sc,ic,nc]),p=new Set([pn,li,Ir,ms,Ql,tc]),M=new Uint32Array(4),E=new Int32Array(4),x=new C,S=null,b=null,R=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,N=null,G=null,L=null,k=null;this._outputColorSpace=ze;let q=0,F=0,X=null,O=-1,V=null,j=new Ue,bt=new Ue,Tt=null,se=new xt(0),Qt=0,Zt=e.width,J=e.height,et=1,mt=null,Nt=null,ft=new Ue(0,0,Zt,J),kt=new Ue(0,0,Zt,J),le=!1,it=new yr,lt=!1,ut=!1,dt=new ne,Q=new C,ht=new Ue,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function st(){return X===null?et:1}let P=n;function Mt(T,B){return e.getContext(T,B)}let St,A,_,U,W,z,ot,at,$,tt,gt,Bt,yt,_t,Ut,Vt,jt,H,wt,rt,At,Dt,ct;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),P===null){let B="webgl2";if(P=Mt(B,T),P===null)throw Mt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qt()}catch(T){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),Kt("WebGLRenderer: "+T.message),T}function qt(){St=new Iv(P),St.init(),At=new xM(P,St),A=new Mv(P,St,t,At),_=new mM(P,St),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=P.createFramebuffer(),L=P.createFramebuffer(),k=P.createFramebuffer(),U=new Nv(P),W=new eM,z=new gM(P,St,_,W,A,At,U),ot=new Pv(I),at=new Fg(P),Dt=new vv(P,at),$=new Dv(P,at,U,Dt),tt=new Fv(P,$,at,Dt,U),H=new Uv(P,A,z),Ut=new Sv(W),gt=new tM(I,ot,St,A,Dt,Ut),Bt=new MM(I,W),yt=new iM,_t=new cM(St),jt=new _v(I,ot,_,tt,g,l),Vt=new pM(I,tt,A),ct=new SM(P,U,A,_),wt=new yv(P,St,U),rt=new Lv(P,St,U),U.programs=gt.programs,I.capabilities=A,I.extensions=St,I.properties=W,I.renderLists=yt,I.shadowMap=Vt,I.state=_,I.info=U}y!==pn&&(w=new Bv(y,e.width,e.height,a,s,r));let Gt=new $u(I,P);this.xr=Gt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=St.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=St.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(T){T!==void 0&&(et=T,this.setSize(Zt,J,!1))},this.getSize=function(T){return T.set(Zt,J)},this.setSize=function(T,B,K=!0){if(Gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=T,J=B,e.width=Math.floor(T*et),e.height=Math.floor(B*et),K===!0&&(e.style.width=T+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Zt*et,J*et).floor()},this.setDrawingBufferSize=function(T,B,K){Zt=T,J=B,et=K,e.width=Math.floor(T*K),e.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(y===pn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(ft)},this.setViewport=function(T,B,K,Y){T.isVector4?ft.set(T.x,T.y,T.z,T.w):ft.set(T,B,K,Y),_.viewport(j.copy(ft).multiplyScalar(et).round())},this.getScissor=function(T){return T.copy(kt)},this.setScissor=function(T,B,K,Y){T.isVector4?kt.set(T.x,T.y,T.z,T.w):kt.set(T,B,K,Y),_.scissor(bt.copy(kt).multiplyScalar(et).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){_.setScissorTest(le=T)},this.setOpaqueSort=function(T){mt=T},this.setTransparentSort=function(T){Nt=T},this.getClearColor=function(T){return T.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,K=!0){let Y=0;if(T){let Z=!1;if(X!==null){let It=X.texture.format;Z=m.has(It)}if(Z){let It=X.texture.type,Ft=p.has(It),Ct=jt.getClearColor(),Ht=jt.getClearAlpha(),Wt=Ct.r,he=Ct.g,me=Ct.b;Ft?(M[0]=Wt,M[1]=he,M[2]=me,M[3]=Ht,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=Wt,E[1]=he,E[2]=me,E[3]=Ht,P.clearBufferiv(P.COLOR,0,E))}else Y|=P.COLOR_BUFFER_BIT}B&&(Y|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),jt.dispose(),yt.dispose(),_t.dispose(),W.dispose(),ot.dispose(),tt.dispose(),Dt.dispose(),ct.dispose(),gt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Xd),Gt.removeEventListener("sessionend",qd),Ms.stop()};function Re(T){T.preventDefault(),_o("WebGLRenderer: Context Lost."),D=!0}function ye(){_o("WebGLRenderer: Context Restored."),D=!1;let T=U.autoReset,B=Vt.enabled,K=Vt.autoUpdate,Y=Vt.needsUpdate,Z=Vt.type;qt(),U.autoReset=T,Vt.enabled=B,Vt.autoUpdate=K,Vt.needsUpdate=Y,Vt.type=Z}function Kn(T){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ui(T){let B=T.target;B.removeEventListener("dispose",ui),em(B)}function em(T){nm(T),W.remove(T)}function nm(T){let B=W.get(T).programs;B!==void 0&&(B.forEach(function(K){gt.releaseProgram(K)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,Y,Z,It){B===null&&(B=pt);let Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ct=rm(T,B,K,Y,Z);_.setMaterial(Y,Ft);let Ht=K.index,Wt=1;if(Y.wireframe===!0){if(Ht=$.getWireframeAttribute(K),Ht===void 0)return;Wt=2}let he=K.drawRange,me=K.attributes.position,zt=he.start*Wt,Me=(he.start+he.count)*Wt;It!==null&&(zt=Math.max(zt,It.start*Wt),Me=Math.min(Me,(It.start+It.count)*Wt)),Ht!==null?(zt=Math.max(zt,0),Me=Math.min(Me,Ht.count)):me!=null&&(zt=Math.max(zt,0),Me=Math.min(Me,me.count));let Ke=Me-zt;if(Ke<0||Ke===1/0)return;Dt.setup(Z,Y,Ct,K,Ht);let Ie,Ae=wt;if(Ht!==null&&(Ie=at.get(Ht),Ae=rt,Ae.setIndex(Ie)),Z.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*st()),Ae.setMode(P.LINES)):Ae.setMode(P.TRIANGLES);else if(Z.isLine){let un=Y.linewidth;un===void 0&&(un=1),_.setLineWidth(un*st()),Z.isLineSegments?Ae.setMode(P.LINES):Z.isLineLoop?Ae.setMode(P.LINE_LOOP):Ae.setMode(P.LINE_STRIP)}else Z.isPoints?Ae.setMode(P.POINTS):Z.isSprite&&Ae.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let un=Z._multiDrawStarts,Lt=Z._multiDrawCounts,gn=Z._multiDrawCount,ge=Ht?at.get(Ht).bytesPerElement:1,zn=W.get(Y).currentProgram.getUniforms();for(let di=0;di<gn;di++)zn.setValue(P,"_gl_DrawID",di),Ae.render(un[di]/ge,Lt[di])}else if(Z.isInstancedMesh)Ae.renderInstances(zt,Ke,Z.count);else if(K.isInstancedBufferGeometry){let un=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,un);Ae.renderInstances(zt,Ke,Lt)}else Ae.render(zt,Ke)};function Wd(T,B,K,Y){N!==null&&T.isNodeMaterial&&N.setObject(Y,T),lt===!0&&Ut.setState(T,K,!1),T.transparent===!0&&T.side===xe&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Na(T,B,Y),T.side=hs,T.needsUpdate=!0,Na(T,B,Y),T.side=xe):Na(T,B,Y)}this.compile=function(T,B,K=null){K===null&&(K=T),N!==null&&N.renderStart(T,B,K),b=_t.get(K),b.init(B),v.push(b),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),T!==K&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(B.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ut=this.localClippingEnabled,lt=Ut.init(this.clippingPlanes,ut),lt===!0&&Ut.setGlobalState(this.clippingPlanes,B),N!==null&&Vt.render(b.state.shadowsArray,K,B);let Y=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let It=Z.material;if(It)if(Array.isArray(It))for(let Ft=0;Ft<It.length;Ft++){let Ct=It[Ft];Wd(Ct,K,B,Z),Y.add(Ct)}else Wd(It,K,B,Z),Y.add(It)}),b=v.pop(),N!==null&&N.renderEnd(),Y},this.compileAsync=function(T,B,K=null){let Y=this.compile(T,B,K);return new Promise(Z=>{function It(){if(Y.forEach(function(Ft){let Ht=W.get(Ft).currentProgram;(Ht===void 0||Ht.isReady())&&Y.delete(Ft)}),Y.size===0){Z(T);return}setTimeout(It,10)}St.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ah=null;function im(T){Ah&&Ah(T)}function Xd(){Ms.stop()}function qd(){Ms.start()}let Ms=new $p;Ms.setAnimationLoop(im),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(T){Ah=T,Gt.setAnimationLoop(T),T===null?Ms.stop():Ms.start()},Gt.addEventListener("sessionstart",Xd),Gt.addEventListener("sessionend",qd),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(T,B);let K=Gt.enabled===!0&&Gt.isPresenting===!0,Y=w!==null&&(X===null||K)&&w.begin(I,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(B),B=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,X),b=_t.get(T,v.length),b.init(B),b.state.textureUnits=z.getTextureUnits(),v.push(b),dt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(dt,ii,B.reversedDepth),ut=this.localClippingEnabled,lt=Ut.init(this.clippingPlanes,ut),S=yt.get(T,R.length),S.init(),R.push(S),Gt.enabled===!0&&Gt.isPresenting===!0){let Ft=I.xr.getDepthSensingMesh();Ft!==null&&Rh(Ft,B,-1/0,I.sortObjects)}Rh(T,B,0,I.sortObjects),S.finish(),N!==null&&N.updateLights(b.state.lightsArray),I.sortObjects===!0&&S.sort(mt,Nt),vt=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,vt&&jt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&Ut.beginShadows();let Z=b.state.shadowsArray;if(Vt.render(Z,T,B),lt===!0&&Ut.endShadows(),(Y&&w.hasRenderPass())===!1){let Ft=S.opaque,Ct=S.transmissive;if(b.setupLights(),B.isArrayCamera){let Ht=B.cameras;if(Ct.length>0)for(let Wt=0,he=Ht.length;Wt<he;Wt++){let me=Ht[Wt];Zd(Ft,Ct,T,me)}vt&&jt.render(T);for(let Wt=0,he=Ht.length;Wt<he;Wt++){let me=Ht[Wt];Yd(S,T,me,me.viewport)}}else Ct.length>0&&Zd(Ft,Ct,T,B),vt&&jt.render(T),Yd(S,T,B)}X!==null&&F===0&&(z.updateMultisampleRenderTarget(X),z.updateRenderTargetMipmap(X)),Y&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Dt.resetDefaultState(),O=-1,V=null,v.pop(),v.length>0?(b=v[v.length-1],z.setTextureUnits(b.state.textureUnits),lt===!0&&Ut.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,N!==null&&N.renderEnd()};function Rh(T,B,K,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(it)){Y&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);let Ft=tt.update(T),Ct=T.material;Ct.visible&&S.push(T,Ft,Ct,K,ht.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(it))){let Ft=tt.update(T),Ct=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ht.copy(Ft.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(Ct)){let Ht=Ft.groups;for(let Wt=0,he=Ht.length;Wt<he;Wt++){let me=Ht[Wt],zt=Ct[me.materialIndex];zt&&zt.visible&&S.push(T,Ft,zt,K,ht.z,me,B)}}else Ct.visible&&S.push(T,Ft,Ct,K,ht.z,null,B)}}let It=T.children;for(let Ft=0,Ct=It.length;Ft<Ct;Ft++)Rh(It[Ft],B,K,Y)}function Yd(T,B,K,Y){let{opaque:Z,transmissive:It,transparent:Ft}=T;b.setupLightsView(K),lt===!0&&Ut.setGlobalState(I.clippingPlanes,K),Y&&_.viewport(j.copy(Y)),Z.length>0&&La(Z,B,K),It.length>0&&La(It,B,K),Ft.length>0&&La(Ft,B,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Zd(T,B,K,Y){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let zt=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Le(1,1,{generateMipmaps:!0,type:zt?ke:pn,minFilter:ps,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let It=b.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||j;It.setSize(Ft.z*I.transmissionResolutionScale,Ft.w*I.transmissionResolutionScale);let Ct=I.getRenderTarget(),Ht=I.getActiveCubeFace(),Wt=I.getActiveMipmapLevel();I.setRenderTarget(It),I.getClearColor(se),Qt=I.getClearAlpha(),Qt<1&&I.setClearColor(16777215,.5),I.clear(),vt&&jt.render(K);let he=I.toneMapping;I.toneMapping=ai;let me=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),lt===!0&&Ut.setGlobalState(I.clippingPlanes,Y),La(T,K,Y),z.updateMultisampleRenderTarget(It),z.updateRenderTargetMipmap(It),St.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Me=0,Ke=B.length;Me<Ke;Me++){let Ie=B[Me],{object:Ae,geometry:un,material:Lt,group:gn}=Ie;if(Lt.side===xe&&Ae.layers.test(Y.layers)){let ge=Lt.side;Lt.side=hn,Lt.needsUpdate=!0,$d(Ae,K,Y,un,Lt,gn),Lt.side=ge,Lt.needsUpdate=!0,zt=!0}}zt===!0&&(z.updateMultisampleRenderTarget(It),z.updateRenderTargetMipmap(It))}I.setRenderTarget(Ct,Ht,Wt),I.setClearColor(se,Qt),me!==void 0&&(Y.viewport=me),I.toneMapping=he}function La(T,B,K){let Y=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,It=T.length;Z<It;Z++){let Ft=T[Z],{object:Ct,geometry:Ht,group:Wt}=Ft,he=Ft.material;he.allowOverride===!0&&Y!==null&&(he=Y),Ct.layers.test(K.layers)&&$d(Ct,B,K,Ht,he,Wt)}}function $d(T,B,K,Y,Z,It){N!==null&&Z.isNodeMaterial&&N.setObject(T,Z),T.onBeforeRender(I,B,K,Y,Z,It),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(I,B,K,Y,T,It),Z.transparent===!0&&Z.side===xe&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,I.renderBufferDirect(K,B,Y,Z,T,It),Z.side=hs,Z.needsUpdate=!0,I.renderBufferDirect(K,B,Y,Z,T,It),Z.side=xe):I.renderBufferDirect(K,B,Y,Z,T,It),T.onAfterRender(I,B,K,Y,Z,It)}function Na(T,B,K){B.isScene!==!0&&(B=pt);let Y=W.get(T),Z=b.state.lights,It=b.state.shadowsArray,Ft=Z.state.version,Ct=gt.getParameters(T,Z.state,It,B,K,b.state.lightProbeGridArray),Ht=gt.getProgramCacheKey(Ct),Wt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;let he=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=ot.get(T.envMap||Y.environment,he),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",ui),Wt=new Map,Y.programs=Wt);let me=Wt.get(Ht);if(me!==void 0){if(Y.currentProgram===me&&Y.lightsStateVersion===Ft)return Kd(T,Ct),me}else Ct.uniforms=gt.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,K,Ct),T.onBeforeCompile(Ct,I),me=gt.acquireProgram(Ct,Ht),Wt.set(Ht,me),Y.uniforms=Ct.uniforms;let zt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=Ut.uniform),Kd(T,Ct),Y.needsLights=am(T),Y.lightsStateVersion=Ft,Y.needsLights&&(zt.ambientLightColor.value=Z.state.ambient,zt.lightProbe.value=Z.state.probe,zt.sunLights.value=Z.state.sun,zt.sunLightShadows.value=Z.state.sunShadow,zt.directionalLights.value=Z.state.directional,zt.directionalLightShadows.value=Z.state.directionalShadow,zt.spotLights.value=Z.state.spot,zt.spotLightShadows.value=Z.state.spotShadow,zt.rectAreaLights.value=Z.state.rectArea,zt.ltc_1.value=Z.state.rectAreaLTC1,zt.ltc_2.value=Z.state.rectAreaLTC2,zt.pointLights.value=Z.state.point,zt.pointLightShadows.value=Z.state.pointShadow,zt.hemisphereLights.value=Z.state.hemi,zt.sunShadowMatrix.value=Z.state.sunShadowMatrix,zt.sunShadowCascade.value=Z.state.sunShadowCascade,zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,zt.spotLightMatrix.value=Z.state.spotLightMatrix,zt.spotLightMap.value=Z.state.spotLightMap,zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=me,Y.uniformsList=null,me}function Jd(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Kd(T,B){let K=W.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function sm(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let K=0,Y=T.length;K<Y;K++){let Z=T[K];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function rm(T,B,K,Y,Z){B.isScene!==!0&&(B=pt),z.resetTextureUnits();let It=B.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Ct=X===null?I.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:pe.workingColorSpace,Ht=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Wt=ot.get(Y.envMap||Ft,Ht),he=Y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,me=!!K.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!K.morphAttributes.position,Me=!!K.morphAttributes.normal,Ke=!!K.morphAttributes.color,Ie=ai;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ie=I.toneMapping);let Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,un=Ae!==void 0?Ae.length:0,Lt=W.get(Y),gn=b.state.lights;if(lt===!0&&(ut===!0||T!==V)){let Ce=T===V&&Y.id===O;Ut.setState(Y,T,Ce)}let ge=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==gn.state.version||Lt.outputColorSpace!==Ct||Z.isBatchedMesh&&Lt.batching===!1||!Z.isBatchedMesh&&Lt.batching===!0||Z.isBatchedMesh&&Lt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Lt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Lt.instancing===!1||!Z.isInstancedMesh&&Lt.instancing===!0||Z.isSkinnedMesh&&Lt.skinning===!1||!Z.isSkinnedMesh&&Lt.skinning===!0||Z.isInstancedMesh&&Lt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Lt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Lt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Lt.instancingMorph===!1&&Z.morphTexture!==null||Lt.envMap!==Wt||Y.fog===!0&&Lt.fog!==It||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Ut.numPlanes||Lt.numIntersection!==Ut.numIntersection)||Lt.vertexAlphas!==he||Lt.vertexTangents!==me||Lt.morphTargets!==zt||Lt.morphNormals!==Me||Lt.morphColors!==Ke||Lt.toneMapping!==Ie||Lt.morphTargetsCount!==un||!!Lt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Lt.__version=Y.version);let zn=Lt.currentProgram;ge===!0&&(zn=Na(Y,B,Z),N&&Y.isNodeMaterial&&N.onUpdateProgram(Y,zn,Lt));let di=!1,Ji=!1,Vs=!1,Te=zn.getUniforms(),Ve=Lt.uniforms;if(_.useProgram(zn.program)&&(di=!0,Ji=!0,Vs=!0),Y.id!==O&&(O=Y.id,Ji=!0),Lt.needsLights){let Ce=sm(b.state.lightProbeGridArray,Z);Lt.lightProbeGrid!==Ce&&(Lt.lightProbeGrid=Ce,Ji=!0)}if(di||V!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Te.setValue(P,"projectionMatrix",T.projectionMatrix),Te.setValue(P,"viewMatrix",T.matrixWorldInverse);let ji=Te.map.cameraPosition;ji!==void 0&&ji.setValue(P,Q.setFromMatrixPosition(T.matrixWorld)),A.logarithmicDepthBuffer&&Te.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Te.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,Ji=!0,Vs=!0)}if(Lt.needsLights&&(gn.state.sunShadowMap.length>0&&Te.setValue(P,"sunShadowMap",gn.state.sunShadowMap,z),gn.state.directionalShadowMap.length>0&&Te.setValue(P,"directionalShadowMap",gn.state.directionalShadowMap,z),gn.state.spotShadowMap.length>0&&Te.setValue(P,"spotShadowMap",gn.state.spotShadowMap,z),gn.state.pointShadowMap.length>0&&Te.setValue(P,"pointShadowMap",gn.state.pointShadowMap,z)),Z.isSkinnedMesh){Te.setOptional(P,Z,"bindMatrix"),Te.setOptional(P,Z,"bindMatrixInverse");let Ce=Z.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Te.setValue(P,"boneTexture",Ce.boneTexture,z))}Z.isBatchedMesh&&(Te.setOptional(P,Z,"batchingTexture"),Te.setValue(P,"batchingTexture",Z._matricesTexture,z),Te.setOptional(P,Z,"batchingIdTexture"),Te.setValue(P,"batchingIdTexture",Z._indirectTexture,z),Te.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Te.setValue(P,"batchingColorTexture",Z._colorsTexture,z));let Ki=K.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&H.update(Z,K,zn),(Ji||Lt.receiveShadow!==Z.receiveShadow)&&(Lt.receiveShadow=Z.receiveShadow,Te.setValue(P,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Ve.envMapIntensity.value=B.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=EM()),Ji){if(Te.setValue(P,"toneMappingExposure",I.toneMappingExposure),Lt.needsLights&&om(Ve,Vs),It&&Y.fog===!0&&Bt.refreshFogUniforms(Ve,It),Bt.refreshMaterialUniforms(Ve,Y,et,J,b.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.lightProbeGrid){let Ce=Lt.lightProbeGrid;Ve.probesSH.value=Ce.texture,Ve.probesMin.value.copy(Ce.boundingBox.min),Ve.probesMax.value.copy(Ce.boundingBox.max),Ve.probesResolution.value.copy(Ce.resolution)}Nr.upload(P,Jd(Lt),Ve,z)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Nr.upload(P,Jd(Lt),Ve,z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Te.setValue(P,"center",Z.center),Te.setValue(P,"modelViewMatrix",Z.modelViewMatrix),Te.setValue(P,"normalMatrix",Z.normalMatrix),Te.setValue(P,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let Ce=Y.uniformsGroups;for(let ji=0,Ws=Ce.length;ji<Ws;ji++){let Qd=Ce[ji];ct.update(Qd,zn),ct.bind(Qd,zn)}}return zn}function om(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function am(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,B,K){let Y=W.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=B,W.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:K,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let K=W.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){X=T,q=B,F=K;let Y=null,Z=!1,It=!1;if(T){let Ct=W.get(T);if(Ct.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,Ct.__webglFramebuffer),j.copy(T.viewport),bt.copy(T.scissor),Tt=T.scissorTest,_.viewport(j),_.scissor(bt),_.setScissorTest(Tt),O=-1;return}else if(Ct.__webglFramebuffer===void 0)z.setupRenderTarget(T);else if(Ct.__hasExternalTextures)z.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let he=T.depthTexture;if(Ct.__boundDepthTexture!==he){if(he!==null&&W.has(he)&&(T.width!==he.image.width||T.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(It=!0);let Wt=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[B])?Y=Wt[B][K]:Y=Wt[B],Z=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?Y=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?Y=Wt[K]:Y=Wt,j.copy(T.viewport),bt.copy(T.scissor),Tt=T.scissorTest}else j.copy(ft).multiplyScalar(et).floor(),bt.copy(kt).multiplyScalar(et).floor(),Tt=le;if(K!==0&&(Y=G),_.bindFramebuffer(P.FRAMEBUFFER,Y)&&_.drawBuffers(T,Y),_.viewport(j),_.scissor(bt),_.setScissorTest(Tt),Z){let Ct=W.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ct.__webglTexture,K)}else if(It){let Ct=B;for(let Ht=0;Ht<T.textures.length;Ht++){let Wt=W.get(T.textures[Ht]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,K,Ct)}}else if(T!==null&&K!==0){let Ct=W.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,K)}O=-1};function jd(T){let B=W.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=A.textureFormatReadable(T.format),B.__typeReadable=A.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,K,Y,Z,It,Ft,Ct=0){if(!(T&&T.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){_.bindFramebuffer(P.FRAMEBUFFER,Ht);try{let Wt=T.textures[Ct],he=Wt.format,me=Wt.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ct);let zt=jd(Wt);if(zt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&K>=0&&K<=T.height-Z&&P.readPixels(B,K,Y,Z,At.convert(he),At.convert(me),It)}finally{let Wt=X!==null?W.get(X).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,Y,Z,It,Ft,Ct=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(B>=0&&B<=T.width-Y&&K>=0&&K<=T.height-Z){_.bindFramebuffer(P.FRAMEBUFFER,Ht);let Wt=T.textures[Ct],he=Wt.format,me=Wt.type;T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ct);let zt=jd(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,It.byteLength,P.STREAM_READ),P.readPixels(B,K,Y,Z,At.convert(he),At.convert(me),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ke=X!==null?W.get(X).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ke);let Ie=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await _p(P,Ie,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,It),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Me),P.deleteSync(Ie),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,K=0){let Y=Math.pow(2,-K),Z=Math.floor(T.image.width*Y),It=Math.floor(T.image.height*Y),Ft=B!==null?B.x:0,Ct=B!==null?B.y:0;z.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Ft,Ct,Z,It),_.unbindTexture()},this.copyTextureToTexture=function(T,B,K=null,Y=null,Z=0,It=0){let Ft,Ct,Ht,Wt,he,me,zt,Me,Ke,Ie=T.isCompressedTexture?T.mipmaps[It]:T.image;if(K!==null)Ft=K.max.x-K.min.x,Ct=K.max.y-K.min.y,Ht=K.isBox3?K.max.z-K.min.z:1,Wt=K.min.x,he=K.min.y,me=K.isBox3?K.min.z:0;else{let Ve=Math.pow(2,-Z);Ft=Math.floor(Ie.width*Ve),Ct=Math.floor(Ie.height*Ve),T.isDataArrayTexture?Ht=Ie.depth:T.isData3DTexture?Ht=Math.floor(Ie.depth*Ve):Ht=1,Wt=0,he=0,me=0}Y!==null?(zt=Y.x,Me=Y.y,Ke=Y.z):(zt=0,Me=0,Ke=0);let Ae=At.convert(B.format),un=At.convert(B.type),Lt;B.isData3DTexture?(z.setTexture3D(B,0),Lt=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(z.setTexture2DArray(B,0),Lt=P.TEXTURE_2D_ARRAY):(z.setTexture2D(B,0),Lt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let gn=_.getParameter(P.UNPACK_ROW_LENGTH),ge=_.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=_.getParameter(P.UNPACK_SKIP_PIXELS),di=_.getParameter(P.UNPACK_SKIP_ROWS),Ji=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,Ie.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),_.pixelStorei(P.UNPACK_SKIP_ROWS,he),_.pixelStorei(P.UNPACK_SKIP_IMAGES,me);let Vs=T.isDataArrayTexture||T.isData3DTexture,Te=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Ve=W.get(T),Ki=W.get(B),Ce=W.get(Ve.__renderTarget),ji=W.get(Ki.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,Ce.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ws=0;Ws<Ht;Ws++)Vs&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(T).__webglTexture,Z,me+Ws),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,W.get(B).__webglTexture,It,Ke+Ws)),P.blitFramebuffer(Wt,he,Ft,Ct,zt,Me,Ft,Ct,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||W.has(T)){let Ve=W.get(T),Ki=W.get(B);_.bindFramebuffer(P.READ_FRAMEBUFFER,L),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let Ce=0;Ce<Ht;Ce++)Vs?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ve.__webglTexture,Z,me+Ce):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ve.__webglTexture,Z),Te?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ki.__webglTexture,It,Ke+Ce):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ki.__webglTexture,It),Z!==0?P.blitFramebuffer(Wt,he,Ft,Ct,zt,Me,Ft,Ct,P.COLOR_BUFFER_BIT,P.NEAREST):Te?P.copyTexSubImage3D(Lt,It,zt,Me,Ke+Ce,Wt,he,Ft,Ct):P.copyTexSubImage2D(Lt,It,zt,Me,Wt,he,Ft,Ct);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Te?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Lt,It,zt,Me,Ke,Ft,Ct,Ht,Ae,un,Ie.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,It,zt,Me,Ke,Ft,Ct,Ht,Ae,Ie.data):P.texSubImage3D(Lt,It,zt,Me,Ke,Ft,Ct,Ht,Ae,un,Ie):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,It,zt,Me,Ft,Ct,Ae,un,Ie.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,It,zt,Me,Ie.width,Ie.height,Ae,Ie.data):P.texSubImage2D(P.TEXTURE_2D,It,zt,Me,Ft,Ct,Ae,un,Ie);_.pixelStorei(P.UNPACK_ROW_LENGTH,gn),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge),_.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),_.pixelStorei(P.UNPACK_SKIP_ROWS,di),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Ji),It===0&&B.generateMipmaps&&P.generateMipmap(Lt),_.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){q=0,F=0,X=null,_.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};function Fr(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new de,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=n0(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[h].length;++y)f.push(o[h][y][u]);let g=n0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function n0(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ne(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);a.setComponent(u+d,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Ku(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let M=0,E=a.length;M<E;M++){let x=a[M],S=i.attributes[x];l[x]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let b=i.morphAttributes[x];b&&(c[x]||(c[x]=[]),b.forEach((R,v)=>{let w=new R.array.constructor(R.count*R.itemSize);c[x][v]=new R.constructor(w,R.itemSize,R.normalized)}))}let f=t*.5,g=Math.log10(1/t),y=Math.pow(10,g),m=f*y;for(let M=0;M<r;M++){let E=n?n.getX(M):M,x="";for(let S=0,b=a.length;S<b;S++){let R=a[S],v=i.getAttribute(R),w=v.itemSize;for(let I=0;I<w;I++)x+=`${Math.trunc(v[d[I]](E)*y+m)},`}if(x in e)h.push(e[x]);else{for(let S=0,b=a.length;S<b;S++){let R=a[S],v=i.getAttribute(R),w=i.morphAttributes[R],I=v.itemSize,D=l[R],N=c[R];for(let G=0;G<I;G++){let L=d[G],k=u[G];if(D[k](o,v[L](E)),w)for(let q=0,F=w.length;q<F;q++)N[q][k](o,w[q][L](E))}}e[x]=o,h.push(o),o++}}let p=i.clone();for(let M in i.attributes){let E=l[M];if(p.setAttribute(M,new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)),M in c)for(let x=0;x<c[M].length;x++){let S=c[M][x];p.morphAttributes[M][x]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var Wc=[[16118246,16118246,16777215],[15976762,15976762,16507786],[9136711,3108414,13218444],[10263716,9079443,13816536],[7227950,7227950,11569762],[15327432,13081180,16183520],[3881792,3881792,7039858],[14263146,14263146,15782568]],Xc=[8003106,1981030,2906672,5913120,4991582,6969884,1858138,3026484],qc=[11739178,2050720,14721056,9054858,2787930],ua=[1906708,5913120,8003106,1981030,2906672,4991582],da=[11739178,2050720,1906708,9054858,2787930,14721056],a0={PLUMAGE:Wc,COATS:Xc,SCARVES:qc,HAT_COLORS:ua,BANDANA_COLORS:da};function TM(i,t){if(t)return t;let e=(i>>>15)%3;return{body:(i>>>3)%Wc.length,top:"coat",topColor:i%Xc.length,hat:e===0?"feather":e===1?"tricorn":"bandana",hatColor:(i>>>18)%5,patch:(i>>>9)%3===0,scarf:1+(i>>>20)%qc.length,earring:(i>>>11)%3===0,hook:!1}}var ju={};function wM(i){if(ju[i])return ju[i];let t=document.createElement("canvas");t.width=16,t.height=64;let e=t.getContext("2d");e.fillStyle="#f2ecdc",e.fillRect(0,0,16,64),e.fillStyle="#"+new xt(i).getHexString();for(let s=0;s<64;s+=16)e.fillRect(0,s,16,8);let n=new Wn(t);return n.colorSpace=ze,n.wrapS=n.wrapT=Qe,ju[i]=n,n}var Qu={};function AM(i){if(Qu[i])return Qu[i];let t=document.createElement("canvas");t.width=64,t.height=16;let e=t.getContext("2d"),n=new xt(i);e.fillStyle="#"+n.getHexString(),e.fillRect(0,0,64,16),e.fillStyle="rgba(0,0,0,0.22)";for(let r=0;r<64;r+=4)e.fillRect(r,0,1.5,16);e.fillStyle="rgba(255,255,255,0.08)";for(let r=2;r<64;r+=4)e.fillRect(r,0,1,16);let s=new Wn(t);return s.colorSpace=ze,s.wrapS=s.wrapT=Qe,s.repeat.set(10,1),Qu[i]=s,s}var td=new C(1,.96,1.06);function i0(i,t){return i.clone().normalize().multiplyScalar(t).multiply(td)}function s0(i,t,e){let n=[];for(let s=0;s<i.length-1;s++){let r=i[s].clone().normalize(),o=i[s+1].clone().normalize(),a=r.angleTo(o);for(let l=0;l<e;l++){let c=l/e,h=a<1e-4?r.clone():r.clone().multiplyScalar(Math.sin((1-c)*a)/Math.sin(a)).add(o.clone().multiplyScalar(Math.sin(c*a)/Math.sin(a)));n.push(i0(h,t))}}return n.push(i0(i[i.length-1],t)),new ln(n)}function RM(i,t,e){let n=new ki;n.moveTo(-i,0),n.bezierCurveTo(-i*.9,t*.75,-i*.45,t,0,t),n.bezierCurveTo(i*.45,t,i*.9,t*.75,i,0),n.quadraticCurveTo(0,t*.18,-i,0);let s=new rs(n,{depth:e,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1,curveSegments:20});s.translate(0,0,-e/2);let r=[];return n.curves.slice(0,2).forEach((o,a)=>o.getPoints(20).forEach((l,c)=>{(a===0||c>0)&&r.push(new C(l.x,l.y,0))})),{geo:s,arc:r}}var CM=15897130;function PM(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function r0(i,t){return new oi({color:i,roughness:.78,sheen:.6,sheenRoughness:.6,sheenColor:new xt(t||16777215)})}function Or(i){return new oi({color:i,roughness:.85,sheen:.8,sheenRoughness:.5,sheenColor:new xt(i).lerp(new xt(16777215),.35)})}function Xt(i,t,e=!0,n=!0){let s=new re(i,t);return s.castShadow=e,s.receiveShadow=n,s}var ci=[[0,0],[.09,.004],[.155,.022],[.2,.06],[.222,.11],[.226,.16],[.217,.21],[.196,.26],[.168,.305],[.142,.345],[.124,.385],[.114,.425],[.108,.465],[.104,.5]];function yn(i,t,e,n){return new Vi(i.map(([s,r])=>new nt(s,r)),t,e||0,n===void 0?Math.PI*2:n)}function wi(i){for(let t=1;t<ci.length;t++){let[e,n]=ci[t],[s,r]=ci[t-1];if(i<=n)return s+(e-s)*((i-r)/(n-r||1))}return ci[ci.length-1][0]}function Vc(i,t,e,n){let s=[];for(let o=0;o<=6;o++){let a=-Math.PI/2+o/6*(Math.PI/2);s.push([Math.cos(a)*i,-e/2+Math.sin(a)*i+i])}for(let o=0;o<=6;o++){let a=o/6*(Math.PI/2);s.push([Math.cos(a)*t,e/2-t+Math.sin(a)*t])}return yn(s,n||12)}function IM(i,t,e,n){let s=new ce(1,28,16),r=s.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),l=r.getY(o),c=r.getZ(o),h=Math.max(0,-c);a*=t*(.85+.45*h),l*=e*(1-.35*h),n?l-=.004*h:l+=.012*h*h+(l>0?0:.004),c*=i,r.setXYZ(o,a,l,c)}return s.computeVertexNormals(),s}function DM(i,t,e){let r=[],o=[],a=[];for(let c=0;c<=7;c++){let h=c/7;for(let d=0;d<=72;d++){let u=d/72*Math.PI*2,f=(1-Math.cos(3*(u-Math.PI)))/2,g=t*(1-.2*f),y=i+(g-i)*h,m=e*Math.pow(h,1.6)*(.3+.7*f);r.push(Math.sin(u)*y,m,Math.cos(u)*y),a.push(d/72,h)}}for(let c=0;c<7;c++)for(let h=0;h<72;h++){let d=c*73+h,u=d+72+1;o.push(d,u,d+1,u,u+1,d+1)}let l=new de;return l.setAttribute("position",new Ot(r,3)),l.setAttribute("uv",new Ot(a,2)),l.setIndex(o),l.computeVertexNormals(),{geo:l,edge:c=>{let h=(1-Math.cos(3*(c-Math.PI)))/2,d=t*(1-.2*h);return new C(Math.sin(c)*d,e*(.3+.7*h),Math.cos(c)*d)}}}function LM(){let i=new ki;i.moveTo(0,.01),i.quadraticCurveTo(-.03,-.01,-.055,-.075),i.quadraticCurveTo(-.035,-.07,-.025,-.085),i.quadraticCurveTo(-.01,-.075,0,-.095),i.quadraticCurveTo(.01,-.075,.025,-.085),i.quadraticCurveTo(.035,-.07,.055,-.075),i.quadraticCurveTo(.03,-.01,0,.01);let t=new rs(i,{depth:.008,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2,curveSegments:6});return t.rotateX(Math.PI/2),t}function o0(){let i=document.createElement("canvas");i.width=64,i.height=256;let t=i.getContext("2d");t.clearRect(0,0,64,256),t.strokeStyle="#ffffff",t.lineWidth=3,t.beginPath(),t.moveTo(32,250),t.lineTo(32,8),t.stroke();for(let n=20;n<240;n+=5){let s=26*Math.sin(n/256*Math.PI)+4;t.beginPath(),t.moveTo(32,n+6),t.lineTo(32-s,n-4),t.stroke(),t.beginPath(),t.moveTo(32,n+6),t.lineTo(32+s,n-4),t.stroke()}let e=new Wn(i);return e.colorSpace=ze,e}var Br=null;function ed(i,t,e,n){let s=PM(i)>>>0,r=TM(s,n),o=new $t,a=Wc[r.body%Wc.length],l=Xc[r.topColor%Xc.length],c=r0(a[0],16777215),h=r0(a[1],16777215),d=Or(l),u=new oi({color:CM,roughness:.4,clearcoat:.6,clearcoatRoughness:.35}),f=new ee({color:14200394,roughness:.3,metalness:.9}),g=new ee({color:1775122,roughness:.7}),y=Or(15920348),m={g:o,coat:d,skin:c},p=new oi({map:wM(l),roughness:.85,sheen:.6,sheenRoughness:.5}),M=r.top==="coat"||r.top==="officer",E=M?d:r.top==="shirt"?p:y,x=Xt(e.barrelGeometry(.17,.2,.46),e.woodMat());x.position.set(0,.23,.05),t||o.add(x),m.stool=x;let S=new $t;if(o.add(S),m.body=S,S.position.set(0,.46,.04),m.shoulder={x:.195,y:.46+.31,z:0},!t){let q=Vc(.02,.017,.16,8),F=LM();[-.075,.075].forEach(st=>{let P=Xt(q,u);P.position.set(st,-.02,-.17),P.rotation.x=.25,S.add(P);let Mt=Xt(F,u);Mt.position.set(st,-.1,-.2),Mt.rotation.set(-.35,st>0?-.15:.15,0),S.add(Mt)});let X=new $t;S.add(X),m.torso=X;let O=yn(ci,30);O.scale(1,1,1.1);let V=O.attributes.position,j=new Float32Array(V.count*3),bt=new xt(a[0]),Tt=new xt(a[2]),se=new xt;for(let st=0;st<V.count;st++){let P=V.getX(st),Mt=V.getY(st),St=V.getZ(st),A=Math.hypot(P,St/1.1)||1,_=Math.max(0,-St/1.1/A),U=Math.pow(_,1.6)*Rn.smoothstep(Mt,.02,.12)*(1-Rn.smoothstep(Mt,.32,.44));se.copy(bt).lerp(Tt,U),j[st*3]=se.r,j[st*3+1]=se.g,j[st*3+2]=se.b}O.setAttribute("color",new Ne(j,3));let Qt=c.clone();Qt.color.set(16777215),Qt.vertexColors=!0,X.add(Xt(O,Qt));let Zt=Xt(yn([[0,0],[.055,.02],[.072,.06],[.06,.11],[.03,.15],[0,.165]],16),c);Zt.scale.set(1.35,1,.55),Zt.position.set(0,.035,.2),Zt.rotation.x=1.2,X.add(Zt);let J=r.top==="shirt"||r.top==="sailor"?0:r.top==="vest"?1.25:r.top==="officer"?.8:.95,et=(st,P,Mt)=>new C(Math.sin(Mt)*st,P,Math.cos(Mt)*st*1.1);if(r.top==="sailor"){let st=ci.filter(([,_])=>_>=.06&&_<=.4).map(([_,U])=>[_*1.05+.004,U]);st.unshift([wi(.035)*1.05+.01,.035]);let P=yn(st,40);P.scale(1,1,1.1),X.add(Xt(P,y));let Mt=wi(.41)*1.05+.006,St=yn([[Mt-.002,.425],[Mt+.02,.41],[Mt+.05,.38],[Mt+.072,.34],[Mt+.078,.315]],40,Math.PI+.55,Math.PI*2-1.1);St.scale(1,1,1.1);let A=d.clone();A.side=xe,X.add(Xt(St,A)),[.006,.018].forEach(_=>{let U=[];for(let W=0;W<=30;W++){let z=Math.PI+.55+W/30*(Math.PI*2-1.1);U.push(et(Mt+.078-_*.9+.002,.315+_*1.2,z))}X.add(Xt(new ri(new ln(U),60,.0028,4,!1),y,!1,!1))})}else if(r.top==="shirt"){let st=ci.filter(([,_])=>_>=.06&&_<=.4).map(([_,U])=>[_*1.05+.004,U]);st.unshift([wi(.035)*1.05+.01,.035]);let P=yn(st,40);P.scale(1,1,1.1);let Mt=P.attributes.uv;for(let _=0;_<Mt.count;_++)Mt.setY(_,Mt.getY(_)*7);let St=p;X.add(Xt(P,St));let A=Xt(new Pe(wi(.4)*1.05+.006,.008,6,32),Or(l));A.rotation.x=Math.PI/2,A.scale.set(1,1.1,1),A.position.y=.4,X.add(A)}else{let st=r.top==="vest"?.36:.39,P=ci.filter(([,z])=>z>=.06&&z<=st).map(([z,ot])=>[z*1.07+.004,ot]);P.unshift([wi(.035)*1.07+.012,r.top==="vest"?.075:.035]),r.top==="vest"&&P.splice(1,P.findIndex(([,z])=>z>.09)-1);let Mt=yn(P,40,Math.PI+J/2,Math.PI*2-J);Mt.scale(1,1,1.1);let St=d.clone();St.side=xe,X.add(Xt(Mt,St));let A=[],_=P.length;for(let z=_-1;z>=0;z--)A.push(et(P[z][0]+.003,P[z][1],Math.PI+J/2));for(let z=1;z<24;z++){let ot=Math.PI+J/2+z/24*(Math.PI*2-J);A.push(et(P[0][0]+.003,P[0][1],ot))}for(let z=0;z<_;z++)A.push(et(P[z][0]+.003,P[z][1],Math.PI-J/2));let U=Xt(new ri(new ln(A),90,.007,5,!1),f,!1,!1);if(X.add(U),(r.top==="officer"?[.17,.22,.27,.32]:[.14,.21].concat(r.top==="coat"?[.28]:[])).forEach(z=>[1,-1].forEach(ot=>{let at=Xt(new ce(r.top==="officer"?.009:.011,8,6),f,!1,!1);at.position.copy(et(wi(z)*1.07+.012,z,Math.PI+ot*(J/2+(r.top==="officer"?.1:.12)))),X.add(at)})),r.top==="officer"){[1,-1].forEach(at=>{let $=new $t;$.position.set(at*.165,.37,0),$.rotation.z=-at*.55,X.add($);let tt=Xt(new oe(.05,.055,.014,20),f,!1,!1);tt.scale.set(1,1,.8),$.add(tt);let gt=Xt(new oe(.055,.062,.034,24,1,!0),new ee({color:14200394,roughness:.5,metalness:.7,side:xe}),!1,!1);gt.scale.set(1,1,.8),gt.position.y=-.018,$.add(gt)});let z=ci.filter(([,at])=>at>=.14&&at<=.4).map(([at,$])=>[at*1.035+.003,$]),ot=yn(z,24,Math.PI-J/2-.05,J+.1);ot.scale(1,1,1.1),X.add(Xt(ot,y))}if(M){let z=wi(.385)*1.07+.004,ot=yn([[z-.004,.37],[z+.006,.385],[z+.016,.415],[z+.03,.44],[z+.024,.446]],36,Math.PI+J/2+.25,Math.PI*2-J-.5);ot.scale(1,1,1.1),X.add(Xt(ot,St))}else{let z=ci.filter(([,at])=>at>=.3&&at<=.41).map(([at,$])=>[at*1.03+.002,$]),ot=yn(z,32);ot.scale(1,1,1.1),X.add(Xt(ot,y))}}let mt=Xt(new Pe(wi(.12)*1.1+.004,.016,6,40),new ee({color:3022096,roughness:.55}));mt.rotation.x=Math.PI/2,mt.scale.set(1,1.1,1),mt.position.y=.12,X.add(mt);let Nt=Xt(new Pe(.022,.006,4,4),f,!1,!1);if(Nt.rotation.z=Math.PI/4,Nt.position.set(0,.12,-(wi(.12)*1.1+.004)*1.1-.012),X.add(Nt),r.scarf>0){let st=Or(qc[(r.scarf-1)%qc.length]),P=Xt(new Pe(wi(.425)*1.02+.006,.02,8,32),st);P.rotation.x=Math.PI/2-.08,P.scale.set(1,1.1,1),P.position.set(0,.425,0),X.add(P);let Mt=Xt(new ce(.024,10,8),st);Mt.position.set(.02,.41,-.13),X.add(Mt);let St=Xt(yn([[0,0],[.02,.018],[.018,.055],[0,.08]],8),st);St.scale.set(1,1,.45),St.position.set(.025,.4,-.135),St.rotation.set(Math.PI-.25,0,.25),X.add(St)}let ft=new $t;ft.position.set(0,.565,-.025),X.add(ft),m.head=ft;let kt=Xt(new ce(.14,28,20),h);kt.scale.set(1,.96,1.06),ft.add(kt);let le=Xt(IM(.115,.06,.034,!1),u);le.position.set(0,-.036,-.16),le.rotation.x=-.05,ft.add(le);let it=Xt(new Pe(.052,.0025,4,24,Math.PI*.8),new ee({color:9058832,roughness:.7}),!1,!1);it.rotation.set(Math.PI/2,0,Math.PI*1.1),it.scale.set(1.1,1.9,1),it.position.set(0,-.041,-.155),ft.add(it);let lt=new ee({color:10768922,roughness:.6});[-1,1].forEach(st=>{let P=Xt(new ce(.0032,6,4),lt,!1,!1);P.scale.set(1,.5,2.2),P.position.set(st*.013,-.011,-.212),ft.add(P)});let ut=new ee({color:16777215,roughness:.3}),dt=new ee({color:723723,roughness:.15}),Q=new Ge({color:16777215}),ht=new ee({color:new xt(a[1]).multiplyScalar(.3),roughness:.85}),pt=!!r.patch;m.lids=[],m.brows=[],[-1,1].forEach((st,P)=>{let Mt=new C(st*.42,.2,-.885).normalize(),St=new $t;if(St.position.copy(Mt).multiplyScalar(.125),St.lookAt(St.position.clone().add(Mt)),ft.add(St),pt&&P===0){let $=new ee({color:1380622,roughness:.55}),tt=new $t;tt.scale.copy(td),ft.add(tt);let gt=.3,Bt=Xt(new ce(.1435,24,8,0,Math.PI*2,0,gt),$,!1,!1);Bt.quaternion.setFromUnitVectors(new C(0,1,0),Mt),tt.add(Bt);let yt=Xt(new Pe(.1435*Math.sin(gt),.0035,5,28),$,!1,!1);yt.rotation.x=Math.PI/2,yt.position.y=.1435*Math.cos(gt);let _t=new $t;_t.add(yt),_t.quaternion.copy(Bt.quaternion),tt.add(_t);let Ut=.1432,Vt=s0([Mt.clone().add(new C(.12,.3,0)),new C(-st*.25,.8,-.55),new C(-st*.35,.75,.55),new C(0,.2,1)],Ut,12),jt=s0([Mt.clone().add(new C(st*.3,-.05,0)),new C(st*1,.1,-.15),new C(st*.7,.12,.7),new C(0,.2,1)],Ut,12);[Vt,jt].forEach(H=>ft.add(Xt(new ri(H,48,.0042,5,!1),$,!1,!1)));return}let A=Xt(new ce(.04,16,12),ut,!1,!1);A.scale.set(1,1.15,.7),St.add(A);let _=Xt(new ce(.018,14,10),dt,!1,!1);_.position.set(-st*.003,-.002,.021),_.scale.set(1,1.2,.5),St.add(_);let U=new re(new ce(.0055,8,6),Q);U.position.set(-st*.007+.004,.01,.027),St.add(U);let W=Xt(new ce(.0405,20,10,0,Math.PI*2,0,Math.PI*.5),h,!1,!1);W.scale.set(1.04,1.2,.76);let z=new $t;z.add(W),St.add(z);let ot={pivot:z,open:-1.5,closed:1.52};z.rotation.x=ot.open,m.lids.push(ot);let at=Xt(Vc(.0095,.007,.068,6),ht,!1,!1);at.rotation.set(0,0,Math.PI/2+st*.18),at.position.set(0,.058,.004),St.add(at),m.brows.push({m:at,sd:st,y0:.058,z0:at.rotation.z,lift:0,tilt:0})});let vt=r.hat==="feather"?0:r.hat==="tricorn"?1:r.hat==="bandana"?2:r.hat==="captain"?4:r.hat==="beanie"?5:3;if(vt===4){let st=Or(ua[r.hatColor%ua.length]),P=new $t;P.position.set(0,.085,.01),P.rotation.x=-.1,ft.add(P),m.hat=P;let Mt=Xt(new ce(.128,28,10,0,Math.PI*2,0,Math.PI/2),st);Mt.scale.set(1,.62,1.02),P.add(Mt);let St=.24,A=.15;[-1,1].forEach(at=>{let $=RM(St,A,.012),tt=Xt($.geo,st);tt.position.set(0,0,at*.045),tt.rotation.x=at*.2,P.add(tt);let gt=Xt(new ri(new ln($.arc),60,.0095,6,!1),f,!1,!1);gt.position.copy(tt.position),gt.rotation.copy(tt.rotation),P.add(gt)});let _=Xt(new oe(.026,.026,.008,18),new ee({color:11017250,roughness:.6}),!1,!1);_.rotation.x=Math.PI/2-.2,_.position.set(.1,.07,-.058),P.add(_);let U=Xt(new ce(.009,8,6),f,!1,!1);U.position.set(.1,.07,-.064),P.add(U),Br||(Br=o0());let W=new qe(.06,.24,1,8),z=W.attributes.position;for(let at=0;at<z.count;at++){let $=z.getY(at)+.12;z.setZ(at,$*$*.9)}W.computeVertexNormals();let ot=new re(W,new ee({map:Br,color:15921126,alphaTest:.4,side:xe,roughness:.9}));ot.position.set(.02,.19,0),ot.rotation.set(0,Math.PI/2,-.35),P.add(ot)}else if(vt===5){let st=new ee({map:AM(da[r.hatColor%da.length]),roughness:.95}),P=new $t;P.scale.copy(td),P.rotation.x=.16,P.position.y=.006,ft.add(P);let Mt=Math.PI*.4,St=.15,A=Xt(new ce(St,32,14,0,Math.PI*2,0,Mt),st);A.scale.set(1,1.12,1),P.add(A);let _=St*Math.sin(Mt),U=St*Math.cos(Mt)*1.12,W=Xt(yn([[_-.002,U+.036],[_+.009,U+.034],[_+.014,U+.02],[_+.013,U+.002],[_+.006,U-.008],[_-.004,U-.006]],40),st);P.add(W)}else if(vt<2){let st=Or(ua[r.hatColor%ua.length]),P=new $t;P.position.set(0,.1,.008),P.rotation.x=-.12,ft.add(P),m.hat=P;let Mt=DM(.098,.205,.085),St=Xt(Mt.geo,st.clone());St.material.side=xe,P.add(St);let A=Xt(yn([[.118,0],[.117,.04],[.108,.078],[.083,.105],[.044,.12],[0,.123]],28),st);A.scale.set(1,1,1.05),P.add(A);let _=[];for(let z=0;z<96;z++)_.push(Mt.edge(z/96*Math.PI*2));P.add(Xt(new ri(new ln(_,!0),160,.0048,5,!0),f,!1,!1));let U=Xt(new Pe(.118,.0075,5,32),f,!1,!1);U.rotation.x=Math.PI/2,U.position.y=.012,U.scale.set(1,1.05,1),P.add(U);let W=new re(new qe(.07,.07),new Ge({map:e.skullTexture(),transparent:!0,depthWrite:!1}));if(W.position.set(0,.058,-.126),W.rotation.set(-.1,Math.PI,0),P.add(W),vt===0){Br||(Br=o0());let z=new qe(.065,.3,1,10),ot=z.attributes.position;for(let $=0;$<ot.count;$++){let tt=ot.getY($)+.15;ot.setZ($,tt*tt*1.1)}z.computeVertexNormals();let at=new re(z,new ee({map:Br,color:[12597547,15921126,2779824][s%3],alphaTest:.4,side:xe,roughness:.9}));at.castShadow=!0,at.position.set(.095,.15,.06),at.rotation.set(-.5,.4,-.55),P.add(at)}}else if(vt===2){let st=new oi({map:e.dotTexture(da[r.hatColor%da.length]),roughness:.85,sheen:.8,sheenRoughness:.5}),P=Xt(new ce(.147,30,14,0,Math.PI*2,0,Math.PI*.4),st);P.scale.set(1,.97,1.07),P.rotation.x=.4,P.position.y=.006,ft.add(P);let Mt=Xt(new Pe(.147*Math.sin(Math.PI*.4),.007,6,40),st);Mt.rotation.x=Math.PI/2,Mt.position.y=.147*Math.cos(Math.PI*.4);let St=new $t;St.add(Mt),St.scale.set(1,.97,1.07),St.rotation.x=.4,St.position.y=.006,ft.add(St);let A=Xt(new ce(.03,10,8),st);A.position.set(0,.04,.15),ft.add(A),[-1,1].forEach(_=>{let U=Xt(yn([[0,0],[.024,.02],[.022,.075],[.004,.12]],8),st);U.scale.set(1,1,.35),U.position.set(_*.018,.03,.16),U.rotation.set(Math.PI-.45,0,_*.35),ft.add(U)})}if(r.earring){let st=Xt(new Pe(.019,.0035,6,20),f,!1,!1);st.position.set(.128,-.07,.02),st.rotation.set(0,Math.PI/2-.3,0),ft.add(st)}}let b=t?.3:.22,R=t?.3:.22,v=Vc(.052,.045,b,12),w=Vc(.042,.05,R,12),I=yn([[.04,-.03],[.056,-.028],[.06,0],[.056,.022],[.042,.024]],16),D=new Pe(.058,.006,5,20);D.rotateX(Math.PI/2),D.translate(0,.022,0);let N=(()=>{let q=new ce(1,16,10);q.scale(.05,.07,.022),q.translate(0,.045,0);let F=[-.45,0,.45].map((X,O)=>{let V=new ce(1,12,8);return V.scale(.026,.04,.016),V.translate(0,.1-(O===1?0:.012),0),V.rotateZ(X*.5),V});return e.mergeGeometries([q,...F])})(),G=r.hook?(()=>{let q=new oe(.036,.03,.035,16);q.translate(0,.0175,0);let F=new oe(.007,.008,.05,8);F.translate(0,.06,0);let X=new Pe(.026,.007,8,20,Math.PI*1.25);X.rotateZ(-Math.PI*.25),X.translate(-.026,.085,0);let O=new wn(.007,.018,8);return O.rotateZ(Math.PI*.5),O.translate(-.05,.068,0),{wood:q,iron:e.mergeGeometries([F,X,O].map(V=>V.toNonIndexed()))}})():null,L=new ee({color:12105920,roughness:.3,metalness:.9}),k=new ee({color:6964518,roughness:.8});return m.arms=[1,-1].map(q=>{let F=Xt(v,E),X=Xt(w,E),O=new $t;O.add(Xt(I,M||r.top==="sailor"?d:y)),O.add(Xt(D,f,!1,!1));let V;return G&&q===-1?(V=new $t,V.add(Xt(G.wood,k)),V.add(Xt(G.iron,L))):V=Xt(N,c),o.add(F),o.add(X),o.add(O),o.add(V),{side:q,upper:F,fore:X,cuff:O,hand:V,L1:b,L2:R,short:t}}),o.userData.parts=m,m.head&&(m.hat&&(e.batchStatic(m.hat,!0),m.hat.userData.dynamic=!0),m.head.children.forEach(q=>{q.isGroup&&(q.userData.dynamic=!0)}),e.batchStatic(m.head,!0),m.head.userData.dynamic=!0,e.batchStatic(m.torso,!0),m.torso.userData.dynamic=!0,e.batchStatic(m.body,!0)),m}function pa(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)%1e5/1e5)}function hi(i,t,e=!0,n=!0){let s=new re(i,t);return s.castShadow=e,s.receiveShadow=n,s}function ld(i,t){let e=i.attributes.position,n=new Float32Array(e.count*3),s=new xt;for(let r=0;r<e.count;r++)t(s,e.getX(r),e.getY(r),e.getZ(r),r),n[r*3]=s.r,n[r*3+1]=s.g,n[r*3+2]=s.b;return i.setAttribute("color",new Ne(n,3)),i}function od(i){let t=i.index?i.toNonIndexed():i,e=new de;if(["position","normal","uv","color"].forEach(n=>{t.attributes[n]&&e.setAttribute(n,t.attributes[n])}),e.attributes.uv||e.setAttribute("uv",new Ne(new Float32Array(e.attributes.position.count*2),2)),!e.attributes.color){let n=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new Ne(n,3))}return e}function cd(i){return Fr(i.map(od))}function fa(i,t,e,n,s){let r=i.computeFrenetFrames(t,!1),o=[],a=[],l=[],c=[],h=[],d=new xt;for(let f=0;f<=t;f++){let g=f/t,y=i.getPointAt(g),m=r.normals[f],p=r.binormals[f],M=n(g);for(let E=0;E<=e;E++){let x=E/e*Math.PI*2,S=Math.cos(x)*m.x+Math.sin(x)*p.x,b=Math.cos(x)*m.y+Math.sin(x)*p.y,R=Math.cos(x)*m.z+Math.sin(x)*p.z;o.push(y.x+S*M,y.y+b*M,y.z+R*M),a.push(S,b,R),l.push(E/e,g),s?s(d,g,x):d.setRGB(1,1,1),c.push(d.r,d.g,d.b)}}for(let f=0;f<t;f++)for(let g=0;g<e;g++){let y=f*(e+1)+g,m=y+e+1;h.push(y,m,y+1,m,m+1,y+1)}let u=new de;return u.setAttribute("position",new Ot(o,3)),u.setAttribute("normal",new Ot(a,3)),u.setAttribute("uv",new Ot(l,2)),u.setAttribute("color",new Ot(c,3)),u.setIndex(h),u}var nd=null;function NM(){if(nd)return nd;let i=document.createElement("canvas");i.width=128,i.height=256;let t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#a68c6c"),e.addColorStop(1,"#8a7358"),t.fillStyle=e,t.fillRect(0,0,128,256);for(let s=0;s<260;s++)t.fillStyle=`rgba(${40+Math.random()*30},${30+Math.random()*20},20,${.1+Math.random()*.2})`,t.fillRect(Math.random()*128,Math.random()*256,1+Math.random()*2,6+Math.random()*20);t.fillStyle="rgba(45,32,20,0.75)",t.fillRect(0,0,128,10),t.fillStyle="rgba(190,165,130,0.35)",t.fillRect(0,10,128,6);let n=new Wn(i);return n.colorSpace=ze,n.wrapS=n.wrapT=Qe,nd=n,n}function UM(i,t,e,n){let s=[],r=[],o=[],a=[],l=[],c=new xt,h=x=>new C(Math.cos(t)*i*x,Math.sin(t)*i*x-(Math.sin(t)+(n?.9:.42))*i*x*x,0),d=[];for(let x=0;x<=12;x++)d.push(h(x/12));let u=new ln(d),f=n?new xt(9071162):new xt().setHSL(.25+e()*.04,.55,.3+e()*.06),g=n?new xt(11569744):new xt().setHSL(.2+e()*.03,.6,.45);s.push(fa(u,20,5,x=>.028*(1-x)+.004,(x,S)=>x.copy(f).lerp(g,S*.6)));let y=26,m=0;for(let x of[1,-1]){for(let S=0;S<=y;S++){let b=.07+S/y*.91,R=u.getPointAt(b),v=u.getTangentAt(b),w=i*.42*Math.pow(Math.sin(Math.PI*Math.min(1,b*1.05)),.55)*(1-.25*b)+.02,D=new C(0,0,x).clone().multiplyScalar(Math.cos(.5)).addScaledVector(v,Math.sin(.5)).add(new C(0,-(n?.9:.3+.3*b),0)).normalize();for(let N=0;N<=2;N++){let G=N/2,L=R.clone().addScaledVector(D,w*G).addScaledVector(new C(0,-1,0),w*G*G*.3);r.push(L.x,L.y,L.z),l.push(S/y,G),c.copy(f).lerp(g,.25+G*.55*(.6+.4*b)+b*.2);let k=.9+e()*.2;o.push(c.r*k,c.g*k,c.b*k)}}for(let S=0;S<y;S++)for(let b=0;b<2;b++){let R=m+S*3+b,v=R+3;a.push(R,v,R+1,v,v+1,R+1)}m+=(y+1)*3}let p=new de;p.setAttribute("position",new Ot(r,3)),p.setAttribute("color",new Ot(o,3)),p.setAttribute("uv",new Ot(l,2)),p.setIndex(a),p.computeVertexNormals();let M=od(s[0]),E=M.attributes.uv;for(let x=0;x<E.count;x++)E.setXY(x,.5,.012);return Fr([M,od(p)])}var id=null;function FM(){if(id)return id;let i=1024,t=128,e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");n.clearRect(0,0,i,t),n.fillStyle="rgb(215,210,170)",n.fillRect(0,t-5,i,5);let s=58;for(let o=0;o<s;o++){let a=4+o/s*(i-8)+Math.sin(o*7.1)*3,l=30+Math.sin(o*3.3)*8,c=17+Math.sin(o*1.7)*3,h=3+Math.abs(Math.sin(o*2.9))*14,d=n.createLinearGradient(0,t,0,h),u=225+Math.sin(o*5.3)*20;d.addColorStop(0,`rgb(${u-45},${u-35},${u-50})`),d.addColorStop(.45,`rgb(${u},${u},${u-12})`),d.addColorStop(1,`rgb(${u-15},${u-8},${u-30})`),n.fillStyle=d,n.beginPath(),n.moveTo(a-c*.5,t),n.quadraticCurveTo(a+l*.3-c,t*.45,a+l,h),n.quadraticCurveTo(a+l*.3+c,t*.45,a+c*.5,t),n.closePath(),n.fill(),n.strokeStyle="rgba(255,255,235,0.3)",n.lineWidth=1.4,n.beginPath(),n.moveTo(a,t),n.quadraticCurveTo(a+l*.3,t*.45,a+l,h+2),n.stroke()}let r=new Wn(e);return r.colorSpace=ze,r.anisotropy=8,id=r,r}var sd=null,rd=null,l0=null;function c0(i,t,e,n,s,r){let o=pa(r*7919+13);sd||(sd=new ee({vertexColors:!0,map:FM(),alphaTest:.4,alphaToCoverage:!0,side:xe,roughness:.72}),rd=new ee({map:NM(),vertexColors:!0,roughness:.95,emissive:2365454,emissiveIntensity:1}),l0=new ee({color:5914402,roughness:.6}));let a=new $t,l=new C(n*e*.45,e,s*e*.45),c=new ln([new C(0,-.2,0),new C(l.x*.08,e*.3,l.z*.08),new C(l.x*.4,e*.65,l.z*.4),l]),h=Math.round(e*5),d=fa(c,Math.round(e*22),14,p=>{let M=.2-.085*p+(p<.05?(.05-p)*2.2:0),E=Math.pow(Math.abs(Math.sin(p*h*Math.PI)),4);return M*(1+.07*E)},(p,M)=>p.setRGB(.95-.15*M,.95-.12*M,.95-.1*M)),u=d.attributes.uv;for(let p=0;p<u.count;p++)u.setY(p,u.getY(p)*h);a.add(hi(d,rd));let f=new $t;f.position.copy(l),a.add(f);let g=hi(new ce(.2,12,10),rd);g.scale.set(1,.8,1),f.add(g);let y=[],m=11+Math.floor(o()*3);for(let p=0;p<m;p++){let M=p>=m-2,E=(2.3+o()*.8)*(e/5.5*.4+.6),x=M?-.2:.25+o()*.55,S=new $t;S.rotation.y=p/m*Math.PI*2+o()*.4,S.add(hi(UM(E,x,o,M),sd,!0,!1)),S.userData.dynamic=!0,f.add(S),y.push({obj:S,base:0,ph:p*.7+r})}for(let p=0;p<5;p++){let M=hi(new ce(.11,12,10),l0);M.scale.set(1,1.1,1),M.position.set(Math.cos(p*1.3+r)*.16,-.16-p%2*.06,Math.sin(p*1.3+r)*.16),f.add(M)}return a.position.set(i,0,t),{group:a,fronds:y}}function ad(i,t,e){return Math.sin(i*3.1+t*1.7)*Math.cos(e*2.9-i*1.3)*.5+Math.sin(i*7.3+e*5.1+t*4.3)*.25+Math.sin(t*11.7+e*9.1)*.12}function h0(i){let t=pa(i),e=[],n=5+Math.floor(t()*4);for(let s=0;s<n;s++){let r=.28+t()*.3,o=Ku(new Tr(r,3).deleteAttribute("normal").deleteAttribute("uv")),a=o.attributes.position;for(let h=0;h<a.count;h++){let d=a.getX(h),u=a.getY(h),f=a.getZ(h),g=1+ad(d*5+s,u*5,f*5)*.18;a.setXYZ(h,d*g,u*g*.85,f*g)}o.translate((t()-.5)*.7,r*.6+t()*.15,(t()-.5)*.7),o.computeVertexNormals();let l=.24+t()*.08,c=.22+t()*.1;ld(o,(h,d,u)=>h.setHSL(l,.55,c+u*.12)),e.push(o)}return cd(e)}function u0(i){let t=pa(i),e=[],n=[],s=[],r=0,o=new xt;for(let l=0;l<14;l++){let c=t()*Math.PI*2,h=.2+t()*.5,d=.25+t()*.3,u=.02,f=Math.cos(c),g=Math.sin(c),y=(t()-.5)*.12,m=(t()-.5)*.12;for(let p=0;p<=3;p++){let M=p/3,E=y+f*h*d*M*M,x=d*M,S=m+g*h*d*M*M,b=u*(1-M);e.push(E-g*b,x,S+f*b,E+g*b,x,S-f*b),o.setHSL(.17+t()*.06,.5,.25+M*.25),n.push(o.r,o.g,o.b,o.r,o.g,o.b)}for(let p=0;p<3;p++){let M=r+p*2;s.push(M,M+1,M+2,M+1,M+3,M+2)}r+=8}let a=new de;return a.setAttribute("position",new Ot(e,3)),a.setAttribute("color",new Ot(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function d0(i,t){let e=Ku(new Tr(t,4).deleteAttribute("normal").deleteAttribute("uv")),n=e.attributes.position,s=i*1.37;for(let a=0;a<n.count;a++){let l=n.getX(a),c=n.getY(a),h=n.getZ(a),u=1+ad(l/t*1.4+s,c/t*1.4,h/t*1.4-s)*.22;n.setXYZ(a,l*u,Math.max(-t*.35,c*u*.7),h*u*1.1)}e.computeVertexNormals();let r=pa(i),o=new xt().setHSL(.08+r()*.04,.08+r()*.06,.34+r()*.08);return ld(e,(a,l,c,h)=>{let d=ad(l*9,c*9,h*9);a.copy(o).multiplyScalar(.8+d*.35+(c>t*.3?.08:0))}),e}function f0(){let i=new ki;for(let e=0;e<=10;e++){let n=e/10*Math.PI*2+Math.PI/2,s=e%2?.035:.1,r=Math.cos(n)*s,o=Math.sin(n)*s;e===0?i.moveTo(r,o):i.lineTo(r,o)}let t=new rs(i,{depth:.012,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:3});return t.rotateX(-Math.PI/2),t}function p0(){let i=new ce(.07,18,8,-Math.PI/2-.9,1.8+Math.PI/2*0,0,Math.PI/2),t=i.attributes.position;for(let e=0;e<t.count;e++){let n=t.getX(e),s=t.getY(e),r=t.getZ(e),o=Math.atan2(r,n);t.setXYZ(e,n,s*.35+Math.abs(Math.sin(o*9))*.004,r)}return i.computeVertexNormals(),i}function hd(i){let t=pa(i),e=[];for(let r=0;r<5;r++)e.push(new C(r*.45,.08+Math.sin(r*1.3+i)*.05,(t()-.5)*.25));let n=fa(new ln(e),24,8,r=>.1*(1-r*.6),(r,o,a)=>r.setRGB(.62+Math.sin(a*5)*.05,.58,.52)),s=fa(new ln([new C(.9,.1,0),new C(1.2,.3,.3),new C(1.35,.45,.55)]),10,6,r=>.05*(1-r*.8),r=>r.setRGB(.6,.56,.5));return cd([n,s])}function OM(i){let n=[];for(let m=0;m<=34;m++)n.push(-7+m/34*14.5);let s=m=>{let p=(m+.3)/7.4,M=1.85*Math.pow(Math.max(0,1-p*p),.45);return m>2&&(M*=1-.35*Math.pow((m-2)/5.5,1.4)),m<-5.5&&(M*=.9),Math.max(.05,M)},r=m=>1.1+.55*Rn.smoothstep(m,4,7.4)+1.3*Rn.smoothstep(-m,3.8,6.2),o=m=>1.9*Math.pow(s(m)/1.85,.7),a=[],l=[],c=[],h=new xt,d=new xt(i.hull),u=new xt(i.stripe||9071146),f=new xt(13214282);for(let m=0;m<=34;m++){let p=n[m],M=s(p),E=o(p),x=r(p);for(let S=0;S<=16;S++){let b=S/16*Math.PI,R=Math.sin(b),v=M*Math.cos(b)*(1-.12*Math.pow(1-R,2)),w=x-E*Math.pow(R,.85);a.push(p,w,v);let I=x-w;h.copy(d),I<.12?h.copy(f):I>.45&&I<.72&&h.copy(u),I>1.25&&h.multiplyScalar(.7),l.push(h.r,h.g,h.b)}}for(let m=0;m<34;m++)for(let p=0;p<16;p++){let M=m*17+p,E=M+16+1;c.push(M,M+1,E,E,M+1,E+1)}let g=a.length/3;for(let m=0;m<=34;m++){let p=n[m],M=s(p)*.98,E=r(p)-.12;a.push(p,E,M,p,E,-M),l.push(.45,.33,.2,.45,.33,.2)}for(let m=0;m<34;m++){let p=g+m*2;c.push(p,p+2,p+1,p+1,p+2,p+3)}let y=new de;return y.setAttribute("position",new Ot(a,3)),y.setAttribute("color",new Ot(l,3)),y.setIndex(c),y.computeVertexNormals(),{geo:y,width:s,deckY:r}}function BM(i,t,e,n,s){let r=new qe(i,t,10,8),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=l/i,d=(c+t/2)/t,u=c;n&&d<.02&&(u+=Math.sin(l*7+s)*.25+Math.sin(l*17)*.1);let f=Math.cos(h*Math.PI)*e*(.35+.65*Math.sin(Math.PI*Math.min(1,d*1.1)));o.setXYZ(a,l,u,f)}return r.computeVertexNormals(),r}function m0(i,t,e){let n=new $t,s=OM(i),r=new ee({vertexColors:!0,roughness:.8,side:xe});n.add(hi(s.geo,r,!1,!1));let o=new ee({color:2759954,roughness:.8}),a=new Mr({color:1708556,transparent:!0,opacity:.8}),l=new ee({color:788486,roughness:1}),c=new ee({color:3811860,emissive:16756816,emissiveIntensity:0});e.push(c);for(let y=0;y<7;y++){let m=-4.2+y*1.3;[1,-1].forEach(p=>{let M=hi(new qe(.34,.3),l,!1,!1);M.position.set(m,s.deckY(m)-.62,p*(s.width(m)+.02)),M.rotation.y=p>0?0:Math.PI,n.add(M)})}for(let y=0;y<4;y++){let m=hi(new qe(.3,.38),c,!1,!1);m.position.set(-7.02,s.deckY(-7)-.8-(y>=2?.55:0),-.9+y%2*1.8*.5+.2),m.rotation.y=-Math.PI/2,n.add(m)}let h=hi(new oe(.08,.12,5,8),o,!1,!1);h.rotation.z=-Math.PI/2+.35,h.position.set(8.8,s.deckY(7.3)+.9,0),n.add(h);let d=new ee({color:i.sail,roughness:1,side:xe}),u=[],f=i.masts||[-3.6,.6,4.2];f.forEach((y,m)=>{let p=(m===1||f.length===1?15.5:13)*(i.mastScale||1),M=s.deckY(y)-.12,E=hi(new oe(.13,.2,p,8),o,!1,!1);E.position.set(y,M+p/2,0),n.add(E);let x=new C(y,M+p,0);for(let S=0;S<3;S++){let b=6.4-S*1.5,R=3.4-S*.55,v=M+4.6+S*3.9,w=hi(new oe(.07,.07,b+.6,6),o,!1,!1);w.rotation.x=Math.PI/2,w.position.set(y,v,0),n.add(w);let I=hi(BM(b,R,i.billow||.8,i.ragged,m*3+S),d,!1,!1);I.rotation.y=Math.PI/2,I.position.set(y+.15,v-R/2-.05,0),n.add(I),[1,-1].forEach(D=>{u.push(y,v,D*(b/2+.25),y-.6,s.deckY(y-.6),D*s.width(y-.6))})}if([1,-1].forEach(S=>{for(let b=-1;b<=1;b++)u.push(x.x,x.y-.4,0,y+b*.5,M+.1,S*s.width(y+b*.5))}),m<f.length-1&&u.push(x.x,x.y-.6,0,f[m+1],M+p*.55,0),m===f.length-1&&u.push(x.x,x.y-.6,0,10.8,s.deckY(7.3)+1.8,0),m===Math.floor(f.length/2)&&t){let S=new re(new qe(2.4,1.6,8,2),new Ge({map:t,side:xe,fog:!0}));S.position.set(y-1.2,x.y+.6,0),n.userData.flag=S,n.add(S)}});let g=new de;return g.setAttribute("position",new Ot(u,3)),n.add(new Eo(g,a)),n}function g0(){let e=[],n=[],s=[],r=new xt,o=d=>.62*Math.pow(Math.max(0,1-Math.pow(Math.max(0,d)/1.55,2)),.6)*(d<0?1-.25*Math.pow(-d/1.3,2):1);for(let d=0;d<=20;d++){let u=-1.3+d/20*2.85,f=Math.max(.03,o(u)),g=.42+.12*Math.pow(Math.abs(u)/1.4,2);for(let y=0;y<=10;y++){let m=y/10*Math.PI,p=f*Math.cos(m),M=g-.4*Math.min(1,f/.4)*Math.pow(Math.sin(m),.7);e.push(u,M,p);let E=Math.floor((M+.1)*18)%2;r.setRGB(.5+E*.06,.34+E*.04,.2),(y===0||y===10)&&r.setRGB(.32,.22,.13),n.push(r.r,r.g,r.b)}}for(let d=0;d<20;d++)for(let u=0;u<10;u++){let f=d*11+u,g=f+10+1;s.push(f,f+1,g,g,f+1,g+1)}let a=new de;a.setAttribute("position",new Ot(e,3)),a.setAttribute("color",new Ot(n,3)),a.setIndex(s),a.computeVertexNormals();let l=[-.6,.1,.75].map(d=>{let u=new Xe(.16,.04,o(d)*1.9);return u.translate(d,.28,0),ld(u,f=>f.setRGB(.45,.31,.18))}),c=fa(new ln([...Array(15)].map((d,u)=>{let f=-1.3+u/14*2.85;return new C(f,.42+.12*Math.pow(Math.abs(f)/1.4,2),Math.max(.03,o(f)))})),30,5,()=>.025,d=>d.setRGB(.32,.22,.13)),h=c.clone();return h.scale(1,1,-1),cd([a,...l,c,h])}var Ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zM=new cs(-1,1,1,-1,0,1),ud=class extends de{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}},GM=new ud,Ri=class{constructor(t){this._mesh=new re(GM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Hr=class extends Mn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vn.clone(t.uniforms),this.material=new ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ri(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends Mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yc=class extends Mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Zc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hr(Ai),this.copyPass.material.blending=Ye,this.timer=new ko}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(o instanceof ma?n=!0:o instanceof Yc&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $c=class extends Mn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var x0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class i extends Mn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,o,{type:ke,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Le(r,o,{type:ke,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Le(r,o,{type:ke,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=x0;this.highPassUniforms=vn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vn.clone(Ai.uniforms),this.blendMaterial=new ve({uniforms:this.copyUniforms,vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,premultipliedAlpha:!0,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new Ge,this._fsQuad=new Ri(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ve({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};zr.BlurDirectionX=new nt(1,0);zr.BlurDirectionY=new nt(0,1);var ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jc=class extends Mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vn.clone(ga.uniforms),this.material=new wr({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new Ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ds?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ne},cameraProjectionMatrixInverse:{value:new ne},cameraWorldMatrix:{value:new ne},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new C(-1,-1,-1)},sceneBoxMax:{value:new C(1,1,1)}},vertexShader:`

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
		}`},_a={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Kc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function _0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=kM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new C(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Gi(s,t,t);return r.wrapS=Qe,r.wrapT=Qe,r.needsUpdate=!0,r}function kM(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var va={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:dd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new nt},cameraProjectionMatrixInverse:{value:new ne},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function dd(i,t,e){let n=VM(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function VM(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new C(Math.cos(r),Math.sin(r),o))}return n}var jc=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=t-u,y=e-f,m,p;g>y?(m=1,p=0):(m=0,p=1);let M=g-m+h,E=y-p+h,x=g-1+2*h,S=y-1+2*h,b=l&255,R=c&255,v=this.perm[b+this.perm[R]]%12,w=this.perm[b+m+this.perm[R+p]]%12,I=this.perm[b+1+this.perm[R+1]]%12,D=.5-g*g-y*y;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[v],g,y));let N=.5-M*M-E*E;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[w],M,E));let G=.5-x*x-S*S;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[I],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,y=h-g,m=d-g,p=u-g,M=t-y,E=e-m,x=n-p,S,b,R,v,w,I;M>=E?E>=x?(S=1,b=0,R=0,v=1,w=1,I=0):M>=x?(S=1,b=0,R=0,v=1,w=0,I=1):(S=0,b=0,R=1,v=1,w=0,I=1):E<x?(S=0,b=0,R=1,v=0,w=1,I=1):M<x?(S=0,b=1,R=0,v=0,w=1,I=1):(S=0,b=1,R=0,v=1,w=1,I=0);let D=M-S+f,N=E-b+f,G=x-R+f,L=M-v+2*f,k=E-w+2*f,q=x-I+2*f,F=M-1+3*f,X=E-1+3*f,O=x-1+3*f,V=h&255,j=d&255,bt=u&255,Tt=this.perm[V+this.perm[j+this.perm[bt]]]%12,se=this.perm[V+S+this.perm[j+b+this.perm[bt+R]]]%12,Qt=this.perm[V+v+this.perm[j+w+this.perm[bt+I]]]%12,Zt=this.perm[V+1+this.perm[j+1+this.perm[bt+1]]]%12,J=.6-M*M-E*E-x*x;J<0?s=0:(J*=J,s=J*J*this._dot3(this.grad3[Tt],M,E,x));let et=.6-D*D-N*N-G*G;et<0?r=0:(et*=et,r=et*et*this._dot3(this.grad3[se],D,N,G));let mt=.6-L*L-k*k-q*q;mt<0?o=0:(mt*=mt,o=mt*mt*this._dot3(this.grad3[Qt],L,k,q));let Nt=.6-F*F-X*X-O*O;return Nt<0?a=0:(Nt*=Nt,a=Nt*Nt*this._dot3(this.grad3[Zt],F,X,O)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,g,y=(t+e+n+s)*l,m=Math.floor(t+y),p=Math.floor(e+y),M=Math.floor(n+y),E=Math.floor(s+y),x=(m+p+M+E)*c,S=m-x,b=p-x,R=M-x,v=E-x,w=t-S,I=e-b,D=n-R,N=s-v,G=w>I?32:0,L=w>D?16:0,k=I>D?8:0,q=w>N?4:0,F=I>N?2:0,X=D>N?1:0,O=G+L+k+q+F+X,V=o[O][0]>=3?1:0,j=o[O][1]>=3?1:0,bt=o[O][2]>=3?1:0,Tt=o[O][3]>=3?1:0,se=o[O][0]>=2?1:0,Qt=o[O][1]>=2?1:0,Zt=o[O][2]>=2?1:0,J=o[O][3]>=2?1:0,et=o[O][0]>=1?1:0,mt=o[O][1]>=1?1:0,Nt=o[O][2]>=1?1:0,ft=o[O][3]>=1?1:0,kt=w-V+c,le=I-j+c,it=D-bt+c,lt=N-Tt+c,ut=w-se+2*c,dt=I-Qt+2*c,Q=D-Zt+2*c,ht=N-J+2*c,pt=w-et+3*c,vt=I-mt+3*c,st=D-Nt+3*c,P=N-ft+3*c,Mt=w-1+4*c,St=I-1+4*c,A=D-1+4*c,_=N-1+4*c,U=m&255,W=p&255,z=M&255,ot=E&255,at=a[U+a[W+a[z+a[ot]]]]%32,$=a[U+V+a[W+j+a[z+bt+a[ot+Tt]]]]%32,tt=a[U+se+a[W+Qt+a[z+Zt+a[ot+J]]]]%32,gt=a[U+et+a[W+mt+a[z+Nt+a[ot+ft]]]]%32,Bt=a[U+1+a[W+1+a[z+1+a[ot+1]]]]%32,yt=.6-w*w-I*I-D*D-N*N;yt<0?h=0:(yt*=yt,h=yt*yt*this._dot4(r[at],w,I,D,N));let _t=.6-kt*kt-le*le-it*it-lt*lt;_t<0?d=0:(_t*=_t,d=_t*_t*this._dot4(r[$],kt,le,it,lt));let Ut=.6-ut*ut-dt*dt-Q*Q-ht*ht;Ut<0?u=0:(Ut*=Ut,u=Ut*Ut*this._dot4(r[tt],ut,dt,Q,ht));let Vt=.6-pt*pt-vt*vt-st*st-P*P;Vt<0?f=0:(Vt*=Vt,f=Vt*Vt*this._dot4(r[gt],pt,vt,st,P));let jt=.6-Mt*Mt-St*St-A*A-_*_;return jt<0?g=0:(jt*=jt,g=jt*jt*this._dot4(r[Bt],Mt,St,A,_)),27*(h+d+u+f+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var ya=class i extends Mn{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=_0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Le(this.width,this.height,{type:ke,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ve({defines:Object.assign({},xa.defines),uniforms:vn.clone(xa.uniforms),vertexShader:xa.vertexShader,fragmentShader:xa.fragmentShader,blending:Ye,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Bo,this.normalMaterial.blending=Ye,this.pdMaterial=new ve({defines:Object.assign({},va.defines),uniforms:vn.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ve({defines:Object.assign({},_a.defines),uniforms:vn.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,blending:Ye}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ve({uniforms:vn.clone(Ai.uniforms),vertexShader:Ai.vertexShader,fragmentShader:Ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xo,blendDst:Ns,blendEquation:Xn,blendSrcAlpha:Wo,blendDstAlpha:Ns,blendEquationAlpha:Xn}),this.blendMaterial=new ve({uniforms:vn.clone(Kc.uniforms),vertexShader:Kc.vertexShader,fragmentShader:Kc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Zl,blendSrc:Xo,blendDst:Ns,blendEquation:Xn,blendSrcAlpha:Wo,blendDstAlpha:Ns,blendEquationAlpha:Xn}),this._fsQuad=new Ri(null),this._originalClearColor=new xt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Mi,this.depthTexture.format=bi,this.depthTexture.type=ms,this.normalRenderTarget=new Le(this.width,this.height,{minFilter:We,magFilter:We,type:ke,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=dd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ye,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ye,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ye,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ye,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ye,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new jc,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Gi(s,t,t,An,pn);return r.wrapS=Qe,r.wrapT=Qe,r.needsUpdate=!0,r}};ya.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var En=null,xh=null,Cn=null,_h=null,xs=[],WM={uniforms:{tDiffuse:{value:null},night:{value:0},vignette:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},Ud='"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',Jr='Georgia, "Times New Roman", serif',Ze=.78,Ii=.23,$i=.138,ah=.113,lh=.058,XM=.78,v0=new C(.3,0,.02);var ae=null,Be,Pt,He,Se,Hs,vh,ch=!1,y0=new Vo,M0=new nt,hh=[],we={},Hn=[],Tn=null,Sn=null,bn=.9,yh=1.32,S0="",fd=null,wa=null,Di=null,Ed="",vs=null,Zi=null,U0=[],Fd=[],F0=[],Od=[],$n={},Zn=null,Ma=null,$r=0,On=null,qM=3600;function IT(){$r=performance.now()}var Td=null,uh=null;function DT(i,t){uh=i?{kind:i,p:t}:null}function LT(i){Td=i,$r=i===null?0:1}function b0(){$r=0}var dh=[],wd=!1,Gr=0,Yi=0,ks=-.28,E0=0,T0=0;var Ad={round:-1,dice:[]},Zr=0,O0=4,qr=!1,ie=0,Mh=1,Eh=-.3,Bd=0,Rd=!1,$e=null,Bn=null;function YM(){if(!He||!Se)return .05;let i=Math.max(300,Se.clientHeight||600);return 2*(i>1300?38:i>950?32:27)/i*Math.tan(He.fov*Math.PI/360)}function B0(i){let t=YM();i.label.scale.set(t*512/96,t,1),i.bubble.scale.set(.4*Mh,.4*Mh*200/420,1)}var fh=0;function Je(i,t=!0){let e=new Wn(i);return t&&(e.colorSpace=ze),e.anisotropy=O0,e}function Dn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Aa(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function H0(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function Li(i,t,e){return Math.max(t,Math.min(e,i))}function Pn(i,t,e){return i+(t-i)*e}function Da(i,t,e,n){let s={t0:performance.now()+t,dur:i,fn:e,done:n};return hh.push(s),s}function Hd(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Yt(i,t=.8,e){return new ee(Object.assign({color:i,roughness:t},e||{}))}function Et(i,t,e=!0,n=!0){let s=new re(i,t);return s.castShadow=e,s.receiveShadow=n,s}function z0(i,t,e,n,s,r){let o=n*.095,a={a:[.27,.27],b:[.73,.27],c:[.27,.5],d:[.5,.5],e:[.73,.5],f:[.27,.73],g:[.73,.73]},l={1:["d"],2:["a","g"],3:["a","d","g"],4:["a","b","f","g"],5:["a","b","d","f","g"],6:["a","b","c","e","f","g"]};i.fillStyle=s===1?"#9a1a1a":r,l[s].forEach(c=>{i.beginPath(),i.arc(t+a[c][0]*n,e+a[c][1]*n,s===1?o*1.5:o,0,Math.PI*2),i.fill()})}function Sh(i,t,e,n,s){i.save(),i.fillStyle="#f3ead2",Aa(i,t,e,n,n,n*.18),i.fill(),i.lineWidth=n*.05,i.strokeStyle="#2a1a0a",i.stroke(),z0(i,t,e,n,s,"#1a120a"),i.restore()}var Qc={};function ZM(i){if(Qc[i])return Qc[i];let t=Dn(128,128),e=t.getContext("2d"),n=e.createRadialGradient(64,64,10,64,64,90);return n.addColorStop(0,"#f6eed8"),n.addColorStop(1,"#d9c9a2"),e.fillStyle=n,e.fillRect(0,0,128,128),e.strokeStyle="rgba(90,60,20,0.35)",e.lineWidth=6,e.strokeRect(3,3,122,122),z0(e,0,0,128,i,"#1c130b"),Qc[i]=Je(t),Qc[i]}function ys(i,t,e,n,s){let r=Dn(i,t),o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,0,i,t);let a=i/n;for(let l=0;l<n;l++){o.fillStyle=`rgba(${s?20:60},${s?10:35},${s?5:15},${Math.random()*.25})`,o.fillRect(l*a,0,a,t);for(let c=0;c<26;c++){let h=l*a+Math.random()*a;o.strokeStyle=`rgba(30,15,5,${.08+Math.random()*.18})`,o.lineWidth=1+Math.random()*2,o.beginPath(),o.moveTo(h,0),o.bezierCurveTo(h+(Math.random()-.5)*12,t*.33,h+(Math.random()-.5)*12,t*.66,h+(Math.random()-.5)*6,t),o.stroke()}o.fillStyle="rgba(15,8,3,0.8)",o.fillRect(l*a,0,3,t)}return r}function $M(){let t=Dn(512,512),e=t.getContext("2d");e.fillStyle="#dcc394",e.fillRect(0,0,512,512);for(let s=0;s<60;s++){let r=Math.random()*512,o=Math.random()*512,a=30+Math.random()*90,l=Math.random()<.5;for(let c of[-512,0,512])for(let h of[-512,0,512]){let d=r+c,u=o+h;if(d+a<0||d-a>512||u+a<0||u-a>512)continue;let f=e.createRadialGradient(d,u,0,d,u,a);f.addColorStop(0,l?"rgba(235,205,150,0.18)":"rgba(185,160,115,0.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.fillRect(d-a,u-a,a*2,a*2)}}for(let s=0;s<512;s+=7){e.strokeStyle=`rgba(150,120,80,${.06+Math.random()*.06})`,e.lineWidth=2;let r=o=>Math.sin(o/512*Math.PI*2*3+s*.2)*3;e.beginPath();for(let o=0;o<=512;o+=16)e.lineTo(o,s+r(o));e.stroke(),e.strokeStyle="rgba(255,245,220,0.07)",e.lineWidth=1.5,e.beginPath();for(let o=0;o<=512;o+=16)e.lineTo(o,s+2+r(o));e.stroke()}for(let s=0;s<4e4;s++){let r=Math.random();e.fillStyle=r<.45?`rgba(255,245,215,${Math.random()*.35})`:r<.9?`rgba(120,95,60,${Math.random()*.25})`:`rgba(90,80,70,${Math.random()*.4})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random(),1+Math.random())}let n=Je(t);return n.wrapS=n.wrapT=Qe,n.repeat.set(9,9),n}function JM(){let i=Dn(512,256),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#b98a5a"),e.addColorStop(.5,"#a67646"),e.addColorStop(1,"#8d6038"),t.fillStyle=e,t.fillRect(0,0,512,256);for(let r=0;r<90;r++){let o=Math.random()*512,a=Math.random()*256,l=8+Math.random()*30,c=t.createRadialGradient(o,a,0,o,a,l),h=Math.random()<.6;c.addColorStop(0,h?"rgba(60,35,15,0.22)":"rgba(230,190,140,0.16)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(o-l,a-l,l*2,l*2)}for(let r=0;r<9e3;r++)t.fillStyle=`rgba(40,22,8,${Math.random()*.16})`,t.fillRect(Math.random()*512,Math.random()*256,1.5,1.5);t.lineCap="round";for(let r=0;r<70;r++){let o=Math.random()*512,a=Math.random()*256,l=6+Math.random()*26,c=(Math.random()-.5)*1.2;t.strokeStyle=`rgba(235,205,160,${.12+Math.random()*.2})`,t.lineWidth=.8+Math.random(),t.beginPath(),t.moveTo(o,a),t.lineTo(o+Math.cos(c)*l,a+Math.sin(c)*l),t.stroke()}let n=(r,o,a,l)=>{t.strokeStyle="rgba(40,22,8,0.5)",t.lineWidth=4,t.setLineDash([]),t.beginPath(),t.moveTo(r,o+1.5),t.lineTo(a,l+1.5),t.stroke(),t.strokeStyle="rgba(240,215,165,0.9)",t.lineWidth=2.2,t.setLineDash([7,6]),t.beginPath(),t.moveTo(r,o),t.lineTo(a,l),t.stroke(),t.setLineDash([])};n(0,26,512,26),n(0,232,512,232),n(40,26,40,232),t.save(),t.globalAlpha=.7,kd(t,296,128,1.05,"#3a200c"),t.restore();let s=Je(i);return s.wrapS=Qe,s}var Ra=new C(-.72,.2,-.66).normalize(),zd=new C(.55,.42,-.72).normalize(),In=0,G0=0,ph=null,Cd=null,k0=null,V0=[];function KM(){let i=new ce(500,32,16),t=new ve({side:hn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:Ra},moonDir:{value:zd},night:{value:0},time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`});Zi=new re(i,t),Zi.userData.dynamic=!0,Zi.renderOrder=-10,Pt.add(Zi)}function jM(){let i=qr?96:160,t=new qe(900,900,i,i);t.rotateX(-Math.PI/2);let e=new ve({fog:!1,uniforms:{time:{value:0},sunDir:{value:Ra},moonDir:{value:zd},night:{value:0}},vertexShader:`
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
      }`});vs=new re(t,e),vs.userData.dynamic=!0,vs.position.y=-.62,Pt.add(vs)}function _s(i){return 1+.06*Math.sin(3*i+.7)+.04*Math.sin(5*i+2.1)+.025*Math.sin(8*i+4)}function Jn(i,t){let e=Math.hypot(i,t);if(e<4.2)return 0;let n=1+(_s(Math.atan2(t,i))-1)*Rn.smoothstep(e,4.4,9.3),s=e/(14*n);return-1.5+1.5*Math.sqrt(Math.max(0,1-s*s))}function QM(){let i=$M(),t=Yt(16777215,1,{map:i,vertexColors:!0}),e=new ce(1,128,40,0,Math.PI*2,0,Math.PI/2),n=e.attributes.position;for(let F=0;F<n.count;F++){let X=n.getX(F),O=n.getY(F),V=n.getZ(F),j=1-Rn.smoothstep(O,.75,.95),bt=(1+(_s(Math.atan2(V,X))-1)*j)*(1+(Math.sin(X*13)*Math.cos(V*11)*.02+Math.sin(X*29+V*17)*.008)*(1-O));n.setXYZ(F,X*bt,O+(Math.sin(X*9+V*4)*.012+Math.sin(V*15-X*6)*.006)*(1-O)*(O<.95?1:0),V*bt)}e.computeVertexNormals();let s=new Float32Array(n.count*3);for(let F=0;F<n.count;F++){let X=Math.hypot(n.getX(F),n.getZ(F))*14/_s(Math.atan2(n.getZ(F),n.getX(F))),O=Rn.smoothstep(X,9.6,11),V=1-O*.42;s[F*3]=V,s[F*3+1]=V*(1-O*.02),s[F*3+2]=V*(1-O*.05)}e.setAttribute("color",new Ne(s,3));let r=Et(e,t,!1,!0);r.scale.set(14,1.5,14),r.position.y=-1.5,Pt.add(r);let o=Et(new ss(4.2,64),Yt(16777215,1,{map:i}),!1,!0);o.rotation.x=-Math.PI/2,o.position.y=.002,Pt.add(o);let a=new ee({vertexColors:!0,roughness:.92});[[10.2,.4,.9],[9.6,1.3,.6],[11.4,2.2,1.3],[10.4,3.5,.5],[10.8,4.2,.8],[9.9,5.4,.45],[11.8,.9,1.1],[10.1,-1.2,.7],[11.5,-.4,1.4],[9.8,2.6,.35]].forEach(([F,X,O],V)=>{let j=Math.cos(X)*F*_s(X),bt=Math.sin(X)*F*_s(X),Tt=Et(d0(V+3,O),a);Tt.position.set(j,Math.max(-.75,Jn(j,bt))-O*.15,bt),Tt.rotation.y=V*1.7,Pt.add(Tt)});let c=new ee({vertexColors:!0,roughness:.85});[[-6.8,-1.8],[-7.6,1.2],[6.4,-3.2],[7.8,-.6],[-2.2,-7.2],[4.4,-6.6],[-5.2,-5.9],[8.2,3],[-8.5,-3.6],[1,-8.3],[-6.6,4.9],[5.4,6.2]].forEach(([F,X],O)=>{let V=Et(h0(O*31+7),c);V.position.set(F,Jn(F,X)-.05,X),V.scale.setScalar(.8+O%3*.25),V.rotation.y=O,Pt.add(V)});let h=u0(11),d=new ee({vertexColors:!0,side:xe,roughness:.9}),u=90,f=new Cs(h,d,u),g=new ne,y=new an,m=new C,p=new C,M=0,E=0;for(;M<u&&E<2e3;){E++;let F=Math.random()*Math.PI*2,X=4.8+Math.random()*4.6,O=Math.cos(F)*X,V=Math.sin(F)*X;if(V>2&&Math.abs(O)<3)continue;p.set(O,Jn(O,V)-.02,V),y.setFromAxisAngle(new C(0,1,0),Math.random()*6.28);let j=.7+Math.random()*.9;m.set(j,j,j),g.compose(p,y,m),f.setMatrixAt(M++,g)}f.count=M,f.castShadow=!1,f.receiveShadow=!0,f.userData.dynamic=!0,Pt.add(f);let x=f0(),S=Yt(14708794,.6);[[3.3,5.4,.3],[-4.6,6.8,1.5],[7.2,-5.9,2.2],[-8.9,1.9,.8]].forEach(([F,X,O])=>{let V=Et(x,S);V.position.set(F,Jn(F,X)+.01,X),V.rotation.y=O,Pt.add(V)});let b=p0(),R=[Yt(15917776,.5),Yt(15777968,.5),Yt(15259832,.5)];for(let F=0;F<16;F++){let X=F*2.3+.4,O=5.5+F*.37%4,V=Math.cos(X)*O,j=Math.sin(X)*O,bt=Et(b,R[F%3],!1,!0);bt.position.set(V,Jn(V,j)+.005,j),bt.rotation.y=F*1.1,bt.scale.setScalar(.8+F%4*.2),Pt.add(bt)}let v=Et(hd(5),new ee({vertexColors:!0,roughness:.95}));v.position.set(6.4,Jn(6.4,5.6)-.02,5.6),v.rotation.y=2.2,Pt.add(v);let w=Et(hd(9),new ee({vertexColors:!0,roughness:.95}));w.position.set(-8.6,Jn(-8.6,-4.4)-.02,-4.4),w.rotation.y=.7,w.scale.setScalar(.8),Pt.add(w);let I=new ss(.12,7);I.rotateX(-Math.PI/2);let D=new ee({color:5923120,roughness:.9}),N=new Cs(I,D,70),G=new ne,L=new an,k=new C,q=new C;for(let F=0;F<70;F++){let X=F/70*Math.PI*2+Math.sin(F*7.3)*.04,O=10.4*_s(X)+Math.sin(F*3.7)*.15,V=Math.cos(X)*O,j=Math.sin(X)*O;q.set(V,Jn(V,j)+.012,j),L.setFromAxisAngle(new C(0,1,0),X+Math.sin(F)*.6),k.set(1.4+Math.abs(Math.sin(F*1.3))*1.6,1,.35+Math.abs(Math.cos(F*2.1))*.3),G.compose(q,L,k),N.setMatrixAt(F,G)}N.receiveShadow=!0,N.userData.dynamic=!0,Pt.add(N)}function zs(i,t,e,n,s,r){let o=c0(i,t,e,n,s,r);return Pt.add(o.group),o.fronds.forEach(a=>U0.push(a)),o.group}var W0=[];function pd(i){let t=m0(i,X0(),W0),e=t.userData.flag;return e&&Od.push({mesh:e,base:e.geometry.attributes.position.array.slice(),ph:i.x,amp:.25}),t.position.set(i.x,-.35,i.z),t.rotation.y=i.rot||0,t.scale.setScalar(i.scale||1),t.userData.dynamic=!0,Pt.add(t),F0.push({g:t,bob:i.bob||0,speed:i.speed||0,path:i.path||null}),t}function t1(){pd({hull:1446157,sail:1841690,ragged:!0,x:-95,z:-150,rot:.5,bob:0}),pd({hull:5913118,sail:15722191,stripe:9054746,billow:.9,x:-180,z:-85,rot:0,scale:.8,bob:1,speed:2.2,path:{from:-190,to:190}}),pd({hull:3810838,sail:14274484,stripe:2047851,masts:[-2.5,2.5],x:60,z:-55,rot:2.6,scale:.7,bob:2})}var th=null;function X0(){if(th)return th;let i=Dn(256,170),t=i.getContext("2d");return t.fillStyle="#121212",t.fillRect(0,0,256,170),kd(t,128,70,1.25,"#f1ead8"),th=Je(i),th}function e1(){let i=Yt(16777215,.85,{map:Je(ys(256,128,"#7a5230",6))}),t=Yt(2762532,.45,{metalness:.7}),e=Yt(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.45});[[-7.2,-5.4,6.4,.4,-.5,3],[8.6,1.6,5,.6,-.2,5],[-8.4,3.6,5.6,-.6,.2,6],[2.6,-7.8,5.8,.2,-.6,8],[-3.2,-8.3,4.4,-.3,-.5,9],[5.6,-5.8,4.6,.5,-.3,10]].forEach(([Q,ht,pt,vt,st,P])=>{let Mt=zs(Q,ht,pt,vt,st,P);Mt.position.y=Jn(Q,ht)});let n=Et(new oe(.06,.08,5.2,8),Yt(4862752,.9));n.position.set(-1.4,2.6,-5.2),Pt.add(n);let s=Et(new ce(.1,10,8),e);s.position.set(-1.4,5.25,-5.2),Pt.add(s);let r=new re(new qe(1.6,1.05,12,4),new ee({map:X0(),side:xe,roughness:1}));r.geometry.translate(.8,0,0),r.position.set(-1.35,4.6,-5.2),r.rotation.y=.35,Pt.add(r),r.userData.dynamic=!0,Od.push({mesh:r,base:r.geometry.attributes.position.array.slice(),ph:0,amp:.12,fromPole:!0});let o=new $t,a=Et(new Xe(.55,.3,1),i);a.position.y=.3,o.add(a),[[-.3,.3],[.3,.3],[-.3,-.3],[.3,-.3]].forEach(([Q,ht])=>{let pt=Et(new oe(.17,.17,.08,14),i);pt.rotation.z=Math.PI/2,pt.position.set(Q,.17,ht),o.add(pt)});let l=Et(new oe(.11,.17,1.5,16),t);l.rotation.x=Math.PI/2-.15,l.position.set(0,.55,-.35),o.add(l);let c=Et(new Pe(.12,.03,8,16),t);c.position.set(0,.66,-1.1),o.add(c),o.position.set(4.9,0,-4.4),o.rotation.y=-.75,Pt.add(o);let h=new ce(.1,12,10);[[0,0,0],[.2,0,0],[.1,0,.17],[.1,.16,.06]].forEach(([Q,ht,pt])=>{let vt=Et(h,t);vt.position.set(5.5+Q,.1+ht,-3.6+pt),Pt.add(vt)});let d=Et(new wn(.75,.5,18),e);d.position.set(1.2,.25,-5.6),Pt.add(d);let u=new oe(.045,.045,.01,12);for(let Q=0;Q<70;Q++){let ht=Math.random()*Math.PI*2,pt=.2+Math.random()*1.1,vt=Et(u,e,!1,!0);vt.position.set(1.2+Math.cos(ht)*pt,.006+(pt<.7?(.7-pt)*.6:0),-5.6+Math.sin(ht)*pt),vt.rotation.set(Math.random()*.5,Math.random()*3,Math.random()*.5),Pt.add(vt)}let f=[13639744,2121952,2142304,9453776];for(let Q=0;Q<14;Q++){let ht=Et(new Oo(.05,0),Yt(f[Q%4],.15,{metalness:.2,emissive:f[Q%4],emissiveIntensity:.25}),!1,!1),pt=Math.random()*Math.PI*2,vt=Math.random()*.6;ht.position.set(1.2+Math.cos(pt)*vt,.12+(.6-vt)*.55,-5.6+Math.sin(pt)*vt),Pt.add(ht)}let g=Et(new oe(.12,.1,.1,8,1,!0),e);g.position.set(1.2,.54,-5.6),g.rotation.z=.3,Pt.add(g);let y=new $t,m=Et(new Xe(.7,.36,.45),i);m.position.y=.18,y.add(m);let p=new $t;p.position.set(0,.36,-.225),p.rotation.x=-1.9,y.add(p);let M=Et(new oe(.225,.225,.7,14,1,!1,0,Math.PI),i);M.rotation.z=Math.PI/2,M.position.z=.225,p.add(M);let E=Et(new Xe(.64,.05,.4),e);E.position.y=.35,y.add(E),y.position.set(2.3,0,-5.3),y.rotation.y=-.4,Pt.add(y);let x=Yt(15261896,.8),S=Et(new ce(.12,12,10),x);S.scale.set(1,.9,1.1),S.position.set(.3,.1,-5.1),Pt.add(S),[[-.04],[.04]].forEach(([Q])=>{let ht=Et(new ce(.03,8,6),Yt(1118481,.9),!1,!1);ht.position.set(.3+Q,.12,-5),Pt.add(ht)});let b=new $t,R=Et(new oe(.05,.05,1.5,8),t);R.position.y=.75,b.add(R);let v=Et(new oe(.04,.04,.8,8),t);v.rotation.z=Math.PI/2,v.position.y=1.3,b.add(v);let w=Et(new Pe(.1,.025,8,16),t);w.position.y=1.55,b.add(w);let I=Et(new Pe(.45,.05,8,20,Math.PI),t);I.rotation.z=Math.PI,I.position.y=.45,b.add(I),b.position.set(-5.9,-.15,-2.4),b.rotation.set(.25,.6,.2),Pt.add(b);let D=-6.2,N=-7,G=Et(g0(),new ee({vertexColors:!0,roughness:.85,side:xe}));G.position.set(D,Jn(D,N)-.12,N),G.rotation.set(.05,.9,.12),Pt.add(G),[.35,-.3].forEach((Q,ht)=>{let pt=new $t,vt=Et(new oe(.025,.025,1.9,6),Yt(8018488));vt.rotation.z=Math.PI/2,pt.add(vt);let st=Et(new Xe(.45,.02,.14),Yt(8018488));st.position.x=.95,pt.add(st),pt.position.set(D+(ht?.3:-.2),Jn(D,N)+.32,N+Q),pt.rotation.set(.1,.9+(ht?.25:-.2),.08),Pt.add(pt)});let L=Yt(16777215,.85,{map:Je(ys(128,128,"#8a6a3a",4))});[[-2.8,.25,3.8,.2,.5],[-2.2,.25,4.1,-.3,.5],[-2.5,.72,3.95,.5,.44],[3.6,.2,3.6,.4,.4]].forEach(([Q,ht,pt,vt,st])=>{let P=Et(new Xe(st,st,st),L);P.position.set(Q,ht,pt),P.rotation.y=vt,Pt.add(P)});let k=new $t;for(let Q=0;Q<5;Q++){let ht=Et(new oe(.05,.06,.7,6),Yt(3810324,.95));ht.rotation.set(Math.PI/2-.25,Q/5*Math.PI*2,0),ht.position.set(Math.sin(Q/5*Math.PI*2)*.12,.1,Math.cos(Q/5*Math.PI*2)*.12),k.add(ht)}for(let Q=0;Q<8;Q++){let ht=Et(new Ro(.1,0),Yt(6973024,.95,{flatShading:!0}));ht.position.set(Math.cos(Q*.785)*.45,.05,Math.sin(Q*.785)*.45),k.add(ht)}let q=new Ge({color:16747056,transparent:!0,opacity:.9}),F=new re(new wn(.22,.6,8),q);F.position.y=.35,k.add(F);let X=new re(new wn(.12,.4,8),new Ge({color:16773280}));X.position.y=.28,k.add(X);let O=new yi(new si({map:Th(),color:16747056,transparent:!0,depthWrite:!1,blending:Si}));O.scale.set(2.2,2.2,1),O.position.y=.4,k.add(O),k.position.set(-5.6,0,.9),Pt.add(k),F.userData.dynamic=X.userData.dynamic=!0,Fd.push({flame:F,inner:X,glow:O,ph:11});let V=Et(new oe(.02,.02,1.1,6),Yt(4862752));V.rotation.z=Math.PI/2,V.position.set(-5.6,.75,.9),Pt.add(V),[-.5,.5].forEach(Q=>{let ht=Et(new oe(.025,.025,.8,6),Yt(4862752));ht.position.set(-5.6+Q,.4,.9),Pt.add(ht)});let j=new C(8.35,1.5,1.8),bt=new C(6.75,1.5,4.25),Tt=j.clone().lerp(bt,.5);Tt.y=.75;let se=new Ps(j,Tt,bt),Qt=Et(new ri(se,20,.22,8,!1),Yt(14272928,.95,{side:xe}));Qt.scale.set(1,1,1),Pt.add(Qt);let Zt=new $t,J=Et(new ce(.09,12,10),Yt(13904426,.7));J.scale.set(1,1.35,1),J.position.y=.12,Zt.add(J);let et=Et(new ce(.065,12,10),Yt(13904426,.7));et.position.set(0,.27,-.02),Zt.add(et);let mt=Et(new wn(.025,.07,6),Yt(15851696,.5));mt.rotation.x=-Math.PI/2-.5,mt.position.set(0,.25,-.08),Zt.add(mt),[-1,1].forEach(Q=>{let ht=Et(new ce(.06,10,8),Yt(Q>0?2777296:15909402,.7));ht.scale.set(.4,1.3,.9),ht.position.set(Q*.08,.12,.02),Zt.add(ht);let pt=Et(new ce(.012,6,5),Yt(1118481),!1,!1);pt.position.set(Q*.045,.29,-.05),Zt.add(pt)});let Nt=Et(new wn(.035,.25,6),Yt(2777296,.7));Nt.rotation.x=2.6,Nt.position.set(0,0,.1),Zt.add(Nt),Zt.position.set(-3.45,1.8,-1.6),Zt.rotation.y=.9,Pt.add(Zt),Zt.userData.dynamic=!0,$n.parrot=Zt;let ft=new $t,kt=Yt(13647914,.6),le=Et(new ce(.09,12,8),kt);le.scale.set(1.3,.5,1),le.position.y=.06,ft.add(le),[-1,1].forEach(Q=>{let ht=Et(new ce(.035,8,6),kt);ht.scale.set(1.2,.8,1.6),ht.position.set(Q*.12,.07,-.08),ft.add(ht);for(let vt=0;vt<3;vt++){let st=Et(new oe(.008,.008,.12,4),kt,!1,!1);st.rotation.z=Q*1,st.position.set(Q*.12,.03,-.03+vt*.04),ft.add(st)}let pt=Et(new ce(.014,6,5),Yt(1118481),!1,!1);pt.position.set(Q*.03,.12,-.06),ft.add(pt)}),Pt.add(ft),ft.userData.dynamic=!0,$n.crab=ft,$n.gulls=[];let it=new Ge({color:16052458,side:xe});for(let Q=0;Q<4;Q++){let ht=new $t,pt=new re(new qe(.9,.18),it);pt.geometry.translate(-.45,0,0),ht.add(pt);let vt=new re(new qe(.9,.18),it);vt.geometry.translate(.45,0,0),ht.add(vt),pt.rotation.x=vt.rotation.x=-Math.PI/2;let st=new $t;st.add(pt);let P=new $t;P.add(vt),ht.add(st),ht.add(P),ht.userData.dynamic=!0,Pt.add(ht),$n.gulls.push({g:ht,wl:st,wr:P,r:16+Q*6,h:11+Q*2.5,sp:.12+Q*.03,ph:Q*1.7})}let lt=Et(new ce(1,24,12,0,Math.PI*2,0,Math.PI/2),Yt(14270346,1),!1,!1);lt.scale.set(14,3,10),lt.position.set(150,-1.2,-230),Pt.add(lt);let ut=zs(150,-230,7,.5,.2,12);ut.scale.setScalar(2.4),ut.position.y=1.5;let dt=zs(158,-226,6,-.4,.3,13);dt.scale.setScalar(2),dt.position.y=1}function md(i,t){let e=new $t,n=Et(new oe(.04,.05,1.7,6),Yt(4862752,.9));n.position.y=.85,e.add(n);let s=Et(new oe(.1,.06,.18,8),Yt(2760728,.7));s.position.y=1.72,e.add(s);let r=new Ge({color:16752704,transparent:!0,opacity:.9}),o=new re(new wn(.09,.32,8),r);o.position.y=1.95,e.add(o);let a=new re(new wn(.05,.2,8),new Ge({color:16773280}));a.position.y=1.9,e.add(a);let l=new yi(new si({map:Th(),color:16751168,transparent:!0,depthWrite:!1,blending:Si}));l.scale.set(1.1,1.1,1),l.position.y=1.95,e.add(l),e.position.set(i,0,t),Pt.add(e),o.userData.dynamic=a.userData.dynamic=!0,Fd.push({flame:o,inner:a,glow:l,ph:i*3+t})}var gd=null;function Pd(i,t){if(!gd){let n=Dn(64,64),s=n.getContext("2d"),r=s.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(.45,"rgba(0,0,0,0.55)"),r.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=r,s.fillRect(0,0,64,64),gd=Je(n,!1)}let e=new re(new qe(i*2,i*2),new Ge({map:gd,transparent:!0,opacity:t,depthWrite:!1,color:2759178,polygonOffset:!0,polygonOffsetFactor:-2}));return e.rotation.x=-Math.PI/2,e.renderOrder=1,e}var Gs={systems:[],mist:[]};function xd(i,t,e,n){let s=new de;s.setAttribute("position",new Ot(new Float32Array(i*3),3)),s.setAttribute("color",new Ot(new Float32Array(i*3),3)),s.setAttribute("alpha",new Ot(new Float32Array(i).fill(1),1));let r=new ve({uniforms:{map:{value:Th()},size:{value:t},scale:{value:600}},vertexShader:"attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float size; uniform float scale; void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC, a); }",transparent:!0,depthWrite:!1,blending:n?Si:us}),o=new To(s,r);return o.frustumCulled=!1,o.userData.dynamic=!0,Pt.add(o),o}function n1(){let i=Dn(64,64),t=i.getContext("2d");return t.fillStyle="rgba(70,45,20,1)",t.beginPath(),t.moveTo(32,58),t.quadraticCurveTo(20,50,8,16),t.quadraticCurveTo(14,18,18,12),t.quadraticCurveTo(24,20,32,6),t.quadraticCurveTo(40,20,46,12),t.quadraticCurveTo(50,18,56,16),t.quadraticCurveTo(44,50,32,58),t.fill(),Je(i)}function i1(){let i=xd(40,.07,16777215,!0);Gs.systems.push({pts:i,kind:"sparks",n:40,data:Array.from({length:40},()=>({life:Math.random()*1.6,max:1.2+Math.random()*.8,x:0,y:0,z:0,vx:0,vy:0,vz:0})),origin:new C(-5.6,.3,.9)});let t=xd(46,.1,16777215,!0);Gs.systems.push({pts:t,kind:"flies",n:46,data:Array.from({length:46},(E,x)=>{let S=Math.random()*Math.PI*2,b=4.8+Math.random()*4.2;return{x:Math.cos(S)*b,z:Math.sin(S)*b,y:.3+Math.random()*1.3,ph:Math.random()*20,sp:.3+Math.random()*.5}})});let e=xd(90,.2,16777215,!1),n=[[11.4,2.2],[11.8,.9],[11.5,-.4]].map(([E,x])=>new C(Math.cos(x)*E*_s(x),-.45,Math.sin(x)*E*_s(x)));Gs.systems.push({pts:e,kind:"spray",n:90,rocks:n,next:n.map((E,x)=>1+x*1.3),data:Array.from({length:90},()=>({life:1,max:1,x:0,y:-5,z:0,vx:0,vy:0,vz:0}))});let s=[],r=new ln([new C(-5.7,0,-6.2),new C(-4.4,0,-4.6),new C(-3,0,-3.9),new C(-2,0,-2.6),new C(-1.5,0,-1.9)]),o=26;for(let E=0;E<o;E++){let x=E/(o-1),S=r.getPointAt(x),b=r.getTangentAt(x),R=(E%2?1:-1)*.07,v=S.x+b.z*R,w=S.z-b.x*R;s.push({x:v,z:w,a:Math.atan2(b.x,b.z)})}let a=new Ge({map:n1(),transparent:!0,opacity:.32,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),l=new qe(.13,.13);l.rotateX(-Math.PI/2);let c=new Cs(l,a,s.length),h=new ne,d=new an,u=new C(1,1,1),f=new C,g=new C(0,1,0);s.forEach((E,x)=>{f.set(E.x,Jn(E.x,E.z)+.006,E.z),d.setFromAxisAngle(g,E.a+Math.PI),h.compose(f,d,u),c.setMatrixAt(x,h)}),c.userData.dynamic=!0,c.renderOrder=1,Pt.add(c);let y=Dn(4,64),m=y.getContext("2d"),p=m.createLinearGradient(0,0,0,64);p.addColorStop(0,"rgba(255,255,255,0)"),p.addColorStop(.55,"rgba(255,255,255,0.8)"),p.addColorStop(.8,"rgba(255,255,255,0.6)"),p.addColorStop(1,"rgba(255,255,255,0)"),m.fillStyle=p,m.fillRect(0,0,4,64);let M=Je(y);[[24,2.2,-.2],[42,4.5,.2],[70,7,.6]].forEach(([E,x,S])=>{let b=new re(new oe(E,E,x,64,1,!0),new Ge({map:M,color:12110056,transparent:!0,opacity:0,depthWrite:!1,side:xe,fog:!1}));b.position.y=S+x/2-.6,b.userData.dynamic=!0,b.renderOrder=2,b.visible=!1,Pt.add(b),Gs.mist.push(b)})}function s1(i){Gs.systems.forEach(e=>{let n=e.pts.geometry.attributes.position,s=e.pts.geometry.attributes.color;if(e.kind==="sparks"){let r=.7+In*.6;e.data.forEach((o,a)=>{o.life+=i,o.life>o.max&&(o.life=0,o.max=1+Math.random()*1,o.x=e.origin.x+(Math.random()-.5)*.25,o.y=e.origin.y,o.z=e.origin.z+(Math.random()-.5)*.25,o.vx=(Math.random()-.5)*.25,o.vy=.7+Math.random()*.7,o.vz=(Math.random()-.5)*.25),o.x+=(o.vx+Math.sin(ie*3+a)*.12)*i,o.y+=o.vy*i,o.z+=o.vz*i,o.vy*=.995;let l=1-o.life/o.max;n.setXYZ(a,o.x,o.y,o.z),s.setXYZ(a,1*l*r,.55*l*l*r,.15*l*l*l*r)})}else if(e.kind==="flies"){let r=Fe(.35,.85,In);if(e.pts.visible=r>.01,!e.pts.visible)return;e.data.forEach((o,a)=>{let l=ie*o.sp+o.ph;n.setXYZ(a,o.x+Math.sin(l*.9)*.6,o.y+Math.sin(l*1.7)*.25,o.z+Math.cos(l*.7)*.6);let c=Math.pow(Math.max(0,Math.sin(l*2.3)),3)*r;s.setXYZ(a,.85*c,1*c,.35*c)})}else if(e.kind==="spray"){e.next.forEach((a,l)=>{if(e.next[l]=a-i,e.next[l]<=0){e.next[l]=2.5+Math.random()*3;let c=e.rocks[l],h=new C(c.x,0,c.z).normalize(),d=0;e.data.forEach(u=>{d<26&&u.life>=u.max&&(d++,u.life=0,u.max=.8+Math.random()*.6,u.x=c.x+(Math.random()-.5)*.5,u.y=c.y+.1,u.z=c.z+(Math.random()-.5)*.5,u.vx=-h.x*.6+(Math.random()-.5)*.8,u.vy=1.4+Math.random()*1.4,u.vz=-h.z*.6+(Math.random()-.5)*.8)})}});let r=e.pts.geometry.attributes.alpha,o=1-In*.55;e.data.forEach((a,l)=>{a.life<a.max&&(a.life+=i,a.vy-=4.5*i,a.x+=a.vx*i,a.y+=a.vy*i,a.z+=a.vz*i);let c=a.life<a.max?1-a.life/a.max:0;n.setXYZ(l,a.x,a.life<a.max?a.y:-9,a.z),s.setXYZ(l,.97*o,.99*o,1*o),r.setX(l,Math.min(1,c*1.6)*.85)}),r.needsUpdate=!0}n.needsUpdate=!0,s.needsUpdate=!0});let t=Fe(.45,1,In);Gs.mist.forEach((e,n)=>{e.visible=t>.01,e.material.opacity=t*(.45-n*.09)*(.85+Math.sin(ie*.2+n)*.15),e.rotation.y=ie*.004*(n%2?1:-1)})}var eh=null;function Th(){if(eh)return eh;let i=Dn(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),eh=Je(i),eh}function r1(){let i=new $t,t=Yt(16777215,.8,{map:Je(ys(256,128,"#6a4222",5))}),e=Yt(2762016,.5,{metalness:.6}),n=Et(new Xe(.9,.45,.55),t);n.position.y=.225,i.add(n);let s=Et(new oe(.275,.275,.9,16,1,!1,0,Math.PI),t);s.rotation.z=Math.PI/2,s.position.set(0,.45,0);let r=new $t;r.position.set(0,.45,-.275),s.position.set(0,0,.275),r.add(s),r.rotation.x=-1.2,i.add(r),[-.35,.35].forEach(u=>{let f=Et(new Xe(.05,.47,.57),e);f.position.set(u,.225,0),i.add(f)});let o=Yt(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.4}),a=new oe(.045,.045,.01,14);for(let u=0;u<40;u++){let f=Et(a,o,!1,!1);f.position.set((Math.random()-.5)*.8,.44+Math.random()*.06,(Math.random()-.5)*.45),f.rotation.set(Math.random()*.6,Math.random()*3,Math.random()*.6),i.add(f)}for(let u=0;u<14;u++){let f=Et(a,o,!1,!0);f.position.set(.5+Math.random()*.5,.006,(Math.random()-.5)*.7),f.rotation.y=Math.random()*3,i.add(f)}i.position.set(3.1,0,-2.4),i.rotation.y=-.7,Pt.add(i);let l=Gd(.3,.36,.9),c=Yt(16777215,.85,{map:Je(ys(256,128,"#7a5230",10))});[[-3.2,-1.9,0],[-3.75,-1.3,.5],[-3.45,-1.6,2]].forEach(([u,f,g],y)=>{let m=Et(l,c);y===2?m.position.set(u,.9+.45,f):m.position.set(u,.45,f),m.rotation.y=g,Pt.add(m),q0(m,.36,.9)});let h=Et(new Xe(.06,2.2,.06),Yt(6965802));h.position.set(-2.4,.9,3.4),h.rotation.z=.3,Pt.add(h);let d=Et(new Xe(.25,.6,.03),Yt(6965802));d.position.set(0,1.2,0),h.add(d)}function Gd(i,t,e){let n=[];for(let s=0;s<=10;s++){let r=s/10;n.push(new nt(i+(t-i)*Math.sin(Math.PI*r),r*e-e/2))}return n.unshift(new nt(0,-e/2)),n.push(new nt(0,e/2)),new Vi(n,20)}function q0(i,t,e){let n=Yt(2828068,.5,{metalness:.6});[-.36,0,.36].forEach(s=>{let r=s*e,o=s===0?t+.005:t*.94,a=Et(new Pe(o,.012,6,24),n,!1,!1);a.rotation.x=Math.PI/2,a.position.y=r,i.add(a)})}function wh(i,t){i.updateMatrixWorld(!0);let e=new ne().copy(i.matrixWorld).invert(),n=new Map;(function r(o){if(!(o.userData.dynamic&&o!==i)){if(o.isMesh&&!o.isInstancedMesh&&o.material&&!Array.isArray(o.material)&&!o.material.transparent&&o.geometry.attributes.uv){let a=`${o.material.uuid}|${o.castShadow}|${o.receiveShadow}`;n.has(a)||n.set(a,[]),n.get(a).push(o)}o.children.slice().forEach(r)}})(i);let s=0;return n.forEach(r=>{if(r.length<2)return;let a=r.every(d=>d.geometry.attributes.color)?["position","normal","uv","color"]:["position","normal","uv"],l=r.map(d=>{let u=d.geometry.index?d.geometry.toNonIndexed():d.geometry.clone(),f=new de;return a.forEach(g=>{u.attributes[g]&&f.setAttribute(g,u.attributes[g])}),f.applyMatrix4(t?new ne().multiplyMatrices(e,d.matrixWorld):d.matrixWorld),f}),c=Fr(l,!1);if(!c)return;let h=new re(c,r[0].material);h.castShadow=r[0].castShadow,h.receiveShadow=r[0].receiveShadow,i.add(h),r.forEach(d=>{d.parent&&d.parent.remove(d)}),s+=r.length}),s}function o1(i){return Math.max(.8,i*.95/(Math.PI*2)+.22)}function a1(i){Sn&&(Pt.remove(Sn),Sn.traverse(E=>{E.geometry&&E.geometry.dispose()})),bn=o1(i),yh=bn+.36,Sn=new $t;let t=Je(ys(512,512,"#6b4526",7)),e=Et(new oe(bn,bn,.06,64),[Yt(4861464,.85),Yt(16777215,.7,{map:t}),Yt(3810322,.9)]);e.position.y=Ze-.03,Sn.add(e);let n=Et(new Pe(bn+.005,.018,8,80),Yt(3813416,.45,{metalness:.7}),!1,!1);n.rotation.x=Math.PI/2,n.position.y=Ze-.03,Sn.add(n);let s=Yt(9075296,.4,{metalness:.8}),r=Math.round(bn*16);for(let E=0;E<r;E++){let x=E/r*Math.PI*2,S=Et(new ce(.012,6,4),s,!1,!1);S.position.set(Math.cos(x)*(bn+.02),Ze-.03,Math.sin(x)*(bn+.02)),Sn.add(S)}let o=Yt(16777215,.85,{map:Je(ys(256,128,"#6a4526",12))}),a=Et(Gd(.3+bn*.12,.36+bn*.14,Ze-.06),o);a.position.y=(Ze-.06)/2,Sn.add(a);let l=Pd(bn*1.05,.5);l.position.y=.006,l.userData.dynamic=!0,Sn.add(l),q0(a,.36+bn*.14,Ze-.06);let c=new $t,h=new oi({color:2902562,roughness:.12,metalness:0,clearcoat:1,transparent:!0,opacity:.88}),d=new Vi([[0,0],[.034,0],[.038,.006],[.038,.1],[.03,.125],[.013,.145],[.012,.19],[.015,.195],[.014,.2],[0,.2]].map(([E,x])=>new nt(E,x)),18);c.add(Et(d,h));let u=Et(new oe(.0105,.011,.025,10),Yt(11569754,.9));u.position.y=.205,c.add(u);let f=Et(new oe(.0385,.0385,.045,18,1,!0),Yt(15259824,.9,{side:xe}),!1,!1);f.position.y=.06,c.add(f),c.position.set(.17,Ze,-.09),c.rotation.y=.6,Sn.add(c);let g=Yt(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.35}),y=new oe(.022,.022,.006,14);[[-.16,.06,5],[-.12,.12,2],[-.19,.12,1]].forEach(([E,x,S])=>{for(let b=0;b<S;b++){let R=Et(y,g,!1,!0);R.position.set(E+Math.sin(b*2.1)*.003,Ze+.003+b*.006,x+Math.cos(b*1.7)*.003),Sn.add(R)}});let m=new $t,p=Et(new Xe(.12,.003,.018),Yt(13158608,.25,{metalness:.9}),!1,!0);p.position.x=.06,m.add(p);let M=Et(new oe(.009,.009,.07,8),Yt(3810324,.7),!1,!0);M.rotation.z=Math.PI/2,M.position.x=-.035,m.add(M),m.position.set(.02,Ze+.009,.17),m.rotation.y=.5,Sn.add(m),fd=l1(),fd.userData.dynamic=!0,Sn.add(fd),wh(Sn,!0),Pt.add(Sn)}function l1(){let i=new $t,t=Yt(2761760,.45,{metalness:.7}),e=Et(new oe(.07,.08,.03,12),t);e.position.y=.015,i.add(e);let n=new re(new oe(.055,.055,.13,12,1,!0),new ee({color:16760944,emissive:16751152,emissiveIntensity:1.3,transparent:!0,opacity:.75,side:xe}));n.position.y=.1,i.add(n);let s=Et(new wn(.075,.06,12),t);s.position.y=.195,i.add(s);let r=Et(new Pe(.025,.006,6,12),t);r.position.y=.24,i.add(r),[0,1,2,3].forEach(a=>{let l=Et(new Xe(.008,.13,.008),t),c=a/4*Math.PI*2+.4;l.position.set(Math.cos(c)*.058,.1,Math.sin(c)*.058),i.add(l)});let o=new yi(new si({map:Th(),color:16752720,transparent:!0,depthWrite:!1,blending:Si,opacity:.8}));return o.scale.set(.5,.5,1),o.position.y=.1,i.add(o),i.userData.glow=o,i.position.y=Ze,i}var kr=null,nh=null;function c1(){if(kr)return kr;let i=[new nt(0,Ii-.012),new nt(ah-.012,Ii-.012),new nt($i-.012,.004),new nt($i,0),new nt($i+.004,.012),new nt(ah,Ii-.01),new nt(ah-.01,Ii),new nt(0,Ii)];kr=new Vi(i,36);let t=kr.attributes.position,e=kr.attributes.uv;for(let n=0;n<t.count;n++)e.setY(n,Li(t.getY(n)/Ii,0,1));return kr}function h1(i){if(!nh){let o=JM();nh=[16777215,14268576,14725264,13154472].map(a=>new ee({color:a,map:o,roughness:.68,side:xe}))}let t=new $t,e=Et(c1(),nh[i%nh.length]);t.add(e);let n=Yt(12621896,.42,{metalness:.85}),s=Et(new Pe($i+.004,.007,6,36),n,!1,!1);s.rotation.x=Math.PI/2,s.position.y=.012,t.add(s);let r=Et(new Pe(ah+.002,.006,6,36),n,!1,!1);return r.rotation.x=Math.PI/2,r.position.y=Ii-.03,t.add(r),t.userData.body=e,t}var u1=new Xe(lh,lh,lh),d1=[2,5,1,6,3,4];function f1(i,t){let e=d1.map(s=>new ee({map:ZM(s),roughness:.45,emissive:16760896,emissiveIntensity:0})),n=Et(u1,e);return p1(n,i,t),n}function p1(i,t,e){let n=new kn;t===6?n.set(Math.PI,0,0):t===2?n.set(0,0,Math.PI/2):t===5?n.set(0,0,-Math.PI/2):t===3?n.set(-Math.PI/2,0,0):t===4&&n.set(Math.PI/2,0,0);let s=new an().setFromEuler(n),r=new an().setFromAxisAngle(new C(0,1,0),e||0);i.quaternion.copy(r.multiply(s)),i.userData.value=t}var w0=[[0,0],[.068,.035],[-.066,.04],[.012,-.072],[-.058,-.048],[.07,-.042],[-.004,.08]];var A0=null,_d={};function m1(i){if(_d[i])return _d[i];let t=Dn(128,128),e=t.getContext("2d");e.fillStyle="#"+new xt(i).getHexString(),e.fillRect(0,0,128,128),e.fillStyle="rgba(255,255,255,0.85)";for(let s=8;s<128;s+=22)for(let r=s/22%2?8:19;r<128;r+=22)e.beginPath(),e.arc(r,s,4,0,Math.PI*2),e.fill();let n=Je(t);return n.wrapS=n.wrapT=Qe,n.repeat.set(3,2),_d[i]=n,n}var Y0={barrelGeometry:(i,t,e)=>Gd(i,t,e),woodMat:()=>A0||(A0=Yt(16777215,.85,{map:Je(ys(128,64,"#6a4526",8))})),skullTexture:()=>g1(),dotTexture:i=>m1(i),mergeGeometries:i=>Fr(i.map(t=>{let e=t.index?t.toNonIndexed():t,n=new de;return["position","normal","uv"].forEach(s=>{e.attributes[s]&&n.setAttribute(s,e.attributes[s])}),n})),batchStatic:(i,t)=>wh(i,t)};function Z0(i,t,e){return ed(i,t,Y0,e)}var NT=a0,ih=null;function g1(){if(ih)return ih;let i=Dn(128,128),t=i.getContext("2d");return kd(t,64,60,1,"#f1ead8","rgba(0,0,0,0)"),ih=Je(i),ih}function kd(i,t,e,n,s,r){i.save(),i.translate(t,e),i.scale(n,n),i.strokeStyle=s,i.lineWidth=12,i.lineCap="round",i.beginPath(),i.moveTo(-40,20),i.lineTo(40,58),i.moveTo(40,20),i.lineTo(-40,58),i.stroke(),i.fillStyle=s,[[-44,20],[-40,12],[44,20],[40,12],[-44,58],[-38,64],[44,58],[38,64]].forEach(([o,a])=>{i.beginPath(),i.arc(o,a,7,0,Math.PI*2),i.fill()}),i.beginPath(),i.arc(0,-8,30,0,Math.PI*2),i.fill(),i.fillRect(-16,12,32,20),i.fillStyle="#111",i.beginPath(),i.arc(-11,-8,8,0,Math.PI*2),i.arc(11,-8,8,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(0,2),i.lineTo(-5,12),i.lineTo(5,12),i.closePath(),i.fill(),i.fillRect(-10,24,3,8),i.fillRect(-2,24,3,8),i.fillRect(6,24,3,8),i.restore()}var sn=new C,Yn=new C,Yr=new C,mh=new C(0,1,0);function vd(i,t,e,n){sn.subVectors(e,t);let s=sn.length();i.position.copy(t).addScaledVector(sn,.5),i.scale.set(1,Math.max(.001,n?s/n:s),1),i.quaternion.setFromUnitVectors(mh,sn.normalize())}function bh(i,t,e){let n=i.L1||.34,s=i.L2||.34,r=Yn.subVectors(e,t),o=r.length(),a=(n+s)*.995,l=Yr.copy(e);o>a&&(l.copy(t).addScaledVector(r.normalize(),a),o=a);let c=new C().addVectors(t,l).multiplyScalar(.5),h=Math.sqrt(Math.max(0,n*n-o/2*(o/2))),d=new C().subVectors(l,t).normalize(),u=new C(i.side*.8,-1,.25);u.addScaledVector(d,-u.dot(d)).normalize();let f=c.addScaledVector(u,h);if(vd(i.upper,t,f,n),i.short){let g=f.clone().lerp(l,.55);vd(i.fore,g,l,s),i.fore.scale.x=i.fore.scale.z=.85}else vd(i.fore,f,l,s);i.cuff.position.copy(f).lerp(l,.86),i.cuff.quaternion.copy(i.fore.quaternion),i.hand.position.copy(l),i.hand.quaternion.copy(i.fore.quaternion)}function Id(i,t,e,n){let s=Dn(i,t),r=new yi(new si({map:Je(s),transparent:!0,depthWrite:!1,depthTest:!0,sizeAttenuation:!n}));return r.userData.cv=s,r.scale.set(e,e*t/i,1),r.renderOrder=5,r}function x1(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;n.clearRect(0,0,s,r),n.font=`600 40px ${Ud}`;let o=(t.out?"\u2620 ":"")+(t.host?"\u{1F451} ":"")+(t.bot?"\u{1F916} ":"")+t.name;for(;n.measureText(o).width>s-90&&o.length>3;)o=o.slice(0,-2);let a=Math.min(s-24,n.measureText(o).width+52),l=(s-a)/2,c=14,h=r-28,d=h/2,u=()=>{n.beginPath(),n.moveTo(l+d,c),n.arcTo(l+a,c,l+a,c+h,d),n.arcTo(l+a,c+h,l,c+h,d),n.arcTo(l,c+h,l,c,d),n.arcTo(l,c,l+a,c,d),n.closePath()};if(n.save(),t.turn&&(n.shadowColor="rgba(244,201,93,0.75)",n.shadowBlur=14),n.fillStyle=t.turn?"rgba(74,50,18,0.93)":"rgba(22,16,11,0.8)",u(),n.fill(),n.restore(),t.turn&&t.progress!==null&&t.progress!==void 0){u(),n.lineWidth=5,n.strokeStyle="rgba(244,201,93,0.22)",n.stroke();let f=2*(a-2*d)+2*Math.PI*d;n.save(),n.setLineDash([f*t.progress,f+10]),n.strokeStyle=t.progress<.27?"#ff6a4a":"#f4c95d",n.beginPath(),n.moveTo(s/2,c),n.arcTo(l+a,c,l+a,c+h,d),n.arcTo(l+a,c+h,l,c+h,d),n.arcTo(l,c+h,l,c,d),n.arcTo(l,c,l+a,c,d),n.lineTo(s/2,c),n.stroke(),n.restore()}else u(),n.lineWidth=t.turn?5:2.5,n.strokeStyle=t.turn?"#f4c95d":"rgba(217,179,106,0.42)",n.stroke();n.textAlign="center",n.textBaseline="middle",n.fillStyle=t.out?"#9a9088":t.away?"#e0a060":t.turn?"#ffe6b0":"#f5ebd6",n.fillText(o,s/2,r/2+2),i.material.map.needsUpdate=!0}function _1(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;n.clearRect(0,0,s,r);let o=t.kind==="liar"||t.kind==="spot";if(n.fillStyle=o?"#b3242a":"#f6ecd2",Aa(n,10,10,s-20,r-50,36),n.fill(),n.beginPath(),n.moveTo(s/2-22,r-42),n.lineTo(s/2,r-6),n.lineTo(s/2+22,r-42),n.closePath(),n.fill(),n.lineWidth=5,n.strokeStyle=o?"#ffd0c0":"#6a4a20",Aa(n,10,10,s-20,r-50,36),n.stroke(),n.textAlign="center",n.textBaseline="middle",o)n.fillStyle="#fff",n.font=`900 64px ${Jr}`,n.fillText(t.kind==="spot"?"Genau!":"L\xFCgner!",s/2,(r-40)/2+6);else{n.fillStyle="#2a1a0a",n.font=`900 70px ${Jr}`;let a=`${t.qty} \xD7`,l=n.measureText(a).width,c=78,h=l+18+c;n.textAlign="left",n.fillText(a,s/2-h/2,(r-40)/2+6),Sh(n,s/2-h/2+l+18,(r-40)/2-c/2+4,c,t.face)}i.material.map.needsUpdate=!0}function v1(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;if(n.clearRect(0,0,s,r),!t){i.material.map.needsUpdate=!0;return}if(n.fillStyle=t.tone==="good"?"rgba(20,70,40,0.88)":t.tone==="bad"?"rgba(110,20,20,0.9)":"rgba(14,26,38,0.85)",Aa(n,8,8,s-16,r-16,30),n.fill(),n.lineWidth=4,n.strokeStyle="#d9b36a",n.stroke(),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#e8d6a8",n.font=`600 30px ${Ud}`,n.fillText(t.top,s/2,44),n.fillStyle="#fff4dc",n.font=`900 64px ${Jr}`,t.face){let o=`${t.qty} \xD7`,a=n.measureText(o).width,l=66,c=a+14+l;n.textAlign="left",n.fillText(o,s/2-c/2,112),Sh(n,s/2-c/2+a+14,112-l/2,l,t.face)}else n.fillText(t.big||"",s/2,112);i.material.map.needsUpdate=!0}function y1(i,t){let e=new $t;Pt.add(e);let n=Z0(i.id,t,i.avatar);e.add(n.g);let s=new $t;Pt.add(s);let r=new $t;r.position.set(0,0,-$i),s.add(r);let o=new $t;r.add(o);let a=h1(Hd(i.id));o.add(a);let l=new $t;s.add(l);let c=new re(new Ds(.2,.235,40),new Ge({color:16042333,transparent:!0,opacity:0,side:xe,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.003,s.add(c);let h=Pd(.2,.32);if(h.position.y=.002,s.add(h),!t){let y=Pd(.42,.45);y.position.set(0,.008,.05),e.add(y)}let d=t?null:M1();d&&n.g.add(d);let u=Id(512,96,.5,!0);u.position.set(0,1.5,.05);let f=Id(420,200,.4);f.position.set(.46,1.45,-.05),f.visible=!1,f.renderOrder=6,t||(e.add(u),e.add(f));let g={id:i.id,isMe:t,frame:e,parts:n,cupRoot:s,mug:d,idle:null,nextIdle:0,expr:null,tiltG:r,flipG:o,cup:a,diceG:l,ring:c,label:u,bubble:f,pose:{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0},hold:0,holdTarget:0,anim:null,peek:0,peekOn:!1,labelKey:"",out:!1,lookYaw:0,lookCur:0,nod:0,slam:0,bubbleUntil:0,bubbleSticky:!1,dice:[],diceRound:-1};return Kr(g),g}var Ci=null;function M1(){Ci||(Ci={body:new oe(.033,.037,.085,14).translate(0,.0425,0),band:new Pe(.036,.004,5,18).rotateX(Math.PI/2),handle:new Pe(.022,.006,6,12,Math.PI).rotateZ(-Math.PI/2).translate(.037,.045,0),rum:new ss(.03,14).rotateX(-Math.PI/2).translate(0,.078,0),wood:Yt(16777215,.8,{map:Je(ys(128,64,"#7a5230",6))}),iron:Yt(2828068,.45,{metalness:.7}),liquid:Yt(4858888,.2)});let i=new $t;return i.add(Et(Ci.body,Ci.wood)),[.014,.07].forEach(t=>{let e=Et(Ci.band,Ci.iron,!1,!1);e.position.y=t,i.add(e)}),i.add(Et(Ci.handle,Ci.iron)),i.add(Et(Ci.rum,Ci.liquid,!1,!1)),wh(i,!0),i.userData.rest=new C(-.3,Ze,-.5),i.position.copy(i.userData.rest),i}function S1(i,t){return i==="sad"?[.006,t*.42]:i==="angry"?[-.007,-t*.34]:i==="happy"?[.013,t*.14]:i==="skeptic"?t>0?[.018,t*.18]:[-.006,-t*.24]:[0,0]}function $0(i,t,e){(i.brows||[]).forEach(n=>{let[s,r]=S1(t,n.sd);n.lift+=(s-n.lift)*e,n.tilt+=(r-n.tilt)*e,n.m.position.y=n.y0+n.lift,n.m.rotation.z=n.z0+n.tilt})}function Sa(i,t,e){let n=we[i];n&&!n.isMe&&(n.expr={kind:t,until:performance.now()+e})}function R0(i){Pt.remove(i.frame),Pt.remove(i.cupRoot)}function b1(i){let t=i.players,e=t.length,n=t.map(r=>r.id+":"+JSON.stringify(r.avatar||null)).join(",")+"|"+i.meId;if(n===S0)return!1;S0=n,a1(e),Object.keys(we).forEach(r=>{t.find(o=>o.id===r)||(R0(we[r]),delete we[r])});let s=Math.max(0,t.findIndex(r=>r.id===i.meId));Hn=[];for(let r=0;r<e;r++){let o=t[(s+r)%e],a=we[o.id],l=o.id===i.meId,c=JSON.stringify(o.avatar||null);a&&(a.isMe!==l||a.avKey!==c)&&(R0(a),delete we[o.id],a=null),a||(a=we[o.id]=y1(o,l),a.avKey=c,B0(a));let h=Math.PI/2+r*Math.PI*2/e,d=Math.cos(h),u=Math.sin(h);a.dir=new C(d,0,u),a.rot=Math.atan2(d,u),a.frame.position.set(d*yh,0,u*yh),a.frame.rotation.y=a.rot;let f=u,g=-d;a.cupRoot.position.set(d*(bn-.22)+f*.12,Ze,u*(bn-.22)+g*.12),a.cupRoot.rotation.y=a.rot,a.idx=r,Hn.push(a)}return!0}function Kr(i){let t=i.pose,e=t.flip*Math.PI;i.flipG.position.set(v0.x*t.side+t.shx,t.lift+Ii*(1-Math.cos(e))/2+t.shy,$i+v0.z*t.side+t.shz),i.flipG.rotation.set(t.wob*.6,0,e+t.wob),i.tiltG.rotation.x=-t.tilt}var yd=new C;function E1(i){return i.isMe?yd.set($i*.98,Ii*.5,$i*.35):yd.set(0,Ii*.55,$i*.95),i.flipG.localToWorld(yd)}function Ca(i,t){i.holdTarget=t}function Pa(i){for(;i.diceG.children.length;){let t=i.diceG.children[0];i.diceG.remove(t),Array.isArray(t.material)&&t.material.forEach(e=>e.dispose())}i.dice=[]}function Ia(i,t,e){Pa(i);let n=Hd(i.id+"|"+e);t.forEach((s,r)=>{let o=w0[r%w0.length],a=(n>>r*3)%7/7-.5,l=f1(s,a*1.2+r);l.position.set(o[0]+a*.01,lh/2+.001,o[1]-a*.01),i.diceG.add(l),i.dice.push(l)})}function C0(i,t,e,n,s){let r=Object.assign({},i.pose);i.anim&&(i.anim.cancelled=!0);let o=Da(t,e,a=>{if(o.cancelled)return;let l=H0(a);Object.keys(n).forEach(c=>{i.pose[c]=Pn(r[c],n[c],l)}),Kr(i)},()=>{o.cancelled||(i.anim===o&&(i.anim=null),s&&s())});return i.anim=o,o}function T1(i,t,e){let n=i.pose;i.anim&&(i.anim.cancelled=!0),Ca(i,1);let s=Object.assign({},n),r=380,o=1050,a=320,l=Math.random()*6,c=Da(r+o+a,t,h=>{if(c.cancelled)return;let d=h*(r+o+a);if(d<r){let u=H0(d/r);n.side=Pn(s.side,0,u),n.flip=Pn(s.flip,1,u),n.lift=Pn(s.lift,.2,u),n.tilt=Pn(s.tilt,0,u),n.shx=n.shy=n.shz=n.wob=0,u>.6&&i.diceG.children.length&&Pa(i)}else if(d<r+o){let u=(d-r)/o,f=Math.sin(Math.PI*u);n.side=0,n.flip=1,n.lift=.2+f*.06,n.tilt=0,n.shx=Math.sin(u*48+l)*.035*f,n.shz=Math.cos(u*41+l)*.03*f,n.shy=Math.abs(Math.sin(u*30))*.03*f,n.wob=Math.sin(u*44+l)*.12*f}else{let u=(d-r-o)/a,f=u*u;n.shx=n.shy=n.shz=n.wob=0,n.side=0,n.flip=Pn(1,0,Math.min(1,u*1.6)),n.lift=Pn(.2,0,f)}Kr(i)},()=>{c.cancelled||(Object.assign(n,{side:0,flip:0,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),Kr(i),i.anim===c&&(i.anim=null),e&&e())});if(i.anim=c,ae&&ae.sound){for(let h=0;h<9;h++)setTimeout(()=>ae.sound("rattle",i.isMe?1:.45),t+r+h*110+Math.random()*40);setTimeout(()=>ae.sound("slam",i.isMe?1:.5),t+r+o+a-20)}}function w1(i,t){Ca(i,1),i.peekOn=!1,C0(i,380,t,{lift:.22,tilt:0,flip:.25},()=>{C0(i,480,0,{side:1,flip:1,lift:0},()=>{Ca(i,0),ae&&ae.sound&&ae.sound("thud",.4)})})}function UT(i){ae=i,Hs=i.container,Se=document.createElement("canvas"),Se.className="scene3d-canvas",Hs.insertBefore(Se,Hs.firstChild),qr=(navigator.hardwareConcurrency||8)<=4||Math.min(window.innerWidth,window.innerHeight)<500,Be=new ha({canvas:Se,antialias:!0,powerPreference:"high-performance"}),Be.setPixelRatio(Math.min(window.devicePixelRatio||1,qr?1.5:2)),Be.shadowMap.enabled=!0,Be.shadowMap.type=Ls,Be.toneMapping=ds,Be.toneMappingExposure=1.05,O0=Math.min(8,Be.capabilities.getMaxAnisotropy()),Pt=new xr,Pt.fog=new yo(15775114,40,260),He=new on(60,1,.05,1200);let t=new Rr(16768184,8018500,1.05);Pt.add(t),Cd=t,Zn=new Wi(16763024,2.6),Zn.position.copy(Ra).multiplyScalar(30),Zn.castShadow=!0,Zn.shadow.mapSize.set(qr?1024:2048,qr?1024:2048);let e=Zn.shadow.camera;e.left=-5,e.right=5,e.top=5,e.bottom=-5,e.near=5,e.far=60,Zn.shadow.bias=-5e-4,Zn.shadow.normalBias=.02,Pt.add(Zn),Pt.add(Zn.target),wa=new Cr(16752720,2.2,6,1.6),wa.position.set(0,Ze+.35,0),Pt.add(wa);let n=new Wi(11124991,.6);if(n.position.set(3,5,9),Pt.add(n),k0=n,ph=new Wi(10466559,0),ph.position.copy(zd).multiplyScalar(30),Pt.add(ph),[[2.2,1.95,-3.3,5],[-5.6,.6,.9,7],[-2.4,1.95,-2.9,5]].forEach(([o,a,l,c])=>{let h=new Cr(16748608,0,c,1.5);h.position.set(o,a,l),Pt.add(h),V0.push(h)}),KM(),jM(),QM(),zs(-3.6,-3.4,5.6,.5,-.2,1),zs(4.2,-1.2,4.8,.7,.3,4),zs(-4.6,2.8,6.2,-.4,.6,7),zs(6.5,4.5,5.2,.3,.4,2),t1(),r1(),e1(),md(-2.4,-2.9),md(2.7,2.6),md(2.2,-3.3),i1(),wh(Pt),!qr)try{let o=new Le(256,256,{type:ke,samples:Be.capabilities.isWebGL2?4:0});En=new Zc(Be,o),En.addPass(new $c(Pt,He));try{Cn=new ya(Pt,He,256,256),Cn.updateGtaoMaterial({radius:.32,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12,distanceFallOff:1}),Cn.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),Cn.blendIntensity=.85,Cn._overrideVisibility=function(){let a=this._visibilityCache;this.scene.traverse(l=>{l.visible&&(l.isSprite||l.isPoints||l.isLine||l===Zi||l.material&&!Array.isArray(l.material)&&(l.material.transparent||l.material.alphaTest>0))&&(l.visible=!1,a.push(l))})},En.addPass(Cn)}catch{Cn=null}xh=new zr(new nt(256,256),.32,.55,.86),En.addPass(xh),En.addPass(new Jc),_h=new Hr(WM),En.addPass(_h)}catch{En=null}Di=Id(512,160,.62),Di.position.set(0,Ze+.5,0),Di.visible=!1,Di.renderOrder=7,Pt.add(Di),$e=new yi(new si({map:Je(Dn(512,288)),transparent:!0,depthTest:!1,depthWrite:!1})),$e.userData.cv=$e.material.map.image,$e.renderOrder=30,$e.visible=!1,$e.position.set(0,Ze+.7,0),Pt.add($e);let s=null;Se.addEventListener("contextmenu",o=>o.preventDefault()),Se.addEventListener("pointerdown",o=>{b0(),On=On?Object.assign(On,{released:!0}):null,s={x:o.clientX,y:o.clientY,yaw:Yi,pitch:ks,moved:!1,id:o.pointerId};try{Se.setPointerCapture(o.pointerId)}catch{}}),Se.addEventListener("pointermove",o=>{if(s&&s.id===o.pointerId){let a=o.clientX-s.x,l=o.clientY-s.y;if(Math.hypot(a,l)>5&&(s.moved=!0),s.moved){let c=2.2/Math.max(300,Se.clientWidth);Yi=Li(s.yaw-a*c*1.2,-1.35,1.35),ks=Li(s.pitch-l*c,-1.05,.35),Bd=performance.now()}}else o.pointerType!=="touch"&&(Se.style.cursor=P0(o)?"pointer":"grab")});let r=o=>{if(!s)return;let a=!s.moved;s=null,a&&P0(o)&&ae.onCupClick&&ae.onCupClick()};Se.addEventListener("pointerup",r),Se.addEventListener("pointercancel",()=>{s=null}),Se.addEventListener("dblclick",()=>A1()),Se.addEventListener("webglcontextlost",o=>o.preventDefault()),window.addEventListener("keydown",b0),vh=new ResizeObserver(Dd),vh.observe(Hs),Dd(),ks=Eh,Be.setAnimationLoop(k1)}function P0(i){let t=Tn&&we[Tn.meId];if(!t||t.out)return!1;let e=Se.getBoundingClientRect();return M0.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),y0.setFromCamera(M0,He),y0.intersectObject(t.cup,!0).length>0}function Dd(){if(!Hs||!Be)return;let i=Hs.clientWidth,t=Hs.clientHeight;if(!i||!t)return;Be.setSize(i,t,!1),En&&En.setSize(i,t),He.aspect=i/t;let e=He.aspect<1;Rd=e;let n=(e?76:98)*(Math.PI/180),s=2*Math.atan(Math.tan(n/2)/He.aspect)*(180/Math.PI);He.fov=Li(Math.max(58,s),58,100),He.updateProjectionMatrix(),Mh=e?1.7:He.aspect<1.4?1.25:1,Eh=e?-.42:-.34,Object.values(we).forEach(a=>B0(a));let r=t*Be.getPixelRatio()/(2*Math.tan(He.fov*Math.PI/360));Gs.systems.forEach(a=>{a.pts.material.uniforms.scale.value=r});let o=e?1.15:Mh;Di&&Di.scale.set(.62*o,.62*o*160/512,1)}function A1(){Yi=0,ks=Eh,Bd=0}function FT(i){let t=ch;ch=i,Se&&(i&&!t?(Se.style.display="block",Se.style.opacity="0",requestAnimationFrame(()=>requestAnimationFrame(()=>{Se.style.opacity="1"})),fh=0,Dd()):!i&&t&&(Se.style.opacity="0",setTimeout(()=>{ch||(Se.style.display="none")},350)))}function OT(i,t){let e=we[i];e&&(e.isMe||(e.peekOn=!!t))}function BT(i){wd=!!i;let t=Tn&&we[Tn.meId];t&&(t.peekOn=wd),ae&&ae.sound&&i&&ae.sound("lift",.6)}function HT(i,t){let e=we[i];e&&(e.lookYaw=t)}function I0(i){let t=Tn;return t&&t.gamePhase==="bidding"&&!i.anim&&i.pose.flip<.01&&!i.out}function J0(i){return!i||!i.turnMs||!i.turnDeadline?null:Li((i.turnDeadline-Date.now())/i.turnMs,0,1)}function K0(i,t,e){let n=e.currentTurnId===t.id,s=n?J0(e):null,r=[t.name,t.eliminated,n,t.isBot,t.connected,t.isHost,s===null?"":Math.round(s*80)].join("|");i.labelKey!==r&&(i.labelKey=r,x1(i.label,{name:t.name,dice:t.dice,out:t.eliminated,turn:n,bot:t.isBot,away:!t.connected&&!t.isBot,host:t.isHost,progress:s}))}function D0(i,t,e,n){i.isMe||(_1(i.bubble,t),i.bubble.visible=!0,i.bubbleUntil=performance.now()+e,i.bubbleSticky=!!n)}function sh(i){let t=i?JSON.stringify(i):"";if(t!==Ed){if(Ed=t,!i){Di.visible=!1;return}v1(Di,i),Di.visible=!0}}function R1(i){let t=i.reveal;i.gamePhase==="bidding"&&$e&&($e.visible=!1),Hn.forEach(e=>{let n=i.players.find(r=>r.id===e.id);if(!n||e.anim)return;let s=n.eliminated&&!(t&&t.dice&&t.dice[n.id]);if(e.out=n.eliminated,e.cupRoot.visible=!s,i.gamePhase==="bidding")Object.assign(e.pose,{flip:0,side:0,lift:0,tilt:e.pose.tilt,shx:0,shy:0,shz:0,wob:0}),Ca(e,1),e.isMe?i.myDice&&i.myDiceRound===i.roundNo&&e.diceRound!==i.roundNo&&(Ia(e,i.myDice,i.roundNo),e.diceRound=i.roundNo):e.diceRound!==-2&&(Pa(e),e.diceRound=-2);else if(i.gamePhase==="reveal"||i.gamePhase==="over"){Object.assign(e.pose,{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),Ca(e,0);let r="rv"+i.roundNo;t&&t.dice&&t.dice[n.id]&&e.diceRound!==r&&(Ia(e,t.dice[n.id],r),e.diceRound=r)}Kr(e)}),i.reveal&&!(Bn&&Bn.key==="rv"+i.roundNo)&&(j0(i.reveal,!0),Q0(i.reveal))}function j0(i,t){Hn.forEach(e=>{e.dice.forEach(n=>{let s=n.userData.value,r=s===i.bid.face||i.wildOnes&&s===1&&i.bid.face!==1;n.userData.match=t&&r,n.userData.dim=t&&!r,n.material.forEach(o=>{o.emissiveIntensity=0,o.color.setScalar(t&&!r?.45:1)})})})}function C1(i){if(!Be)return;let t=Tn;Tn=i;let e=b1(i);i.players.forEach(r=>{let o=we[r.id];o&&(K0(o,r,i),o.turn=i.currentTurnId===r.id,!o.isMe&&r.peeking!==void 0&&(o.peekOn=!!r.peeking),!o.isMe&&r.look!==void 0&&!r.isBot&&(o.lookYaw=r.look))}),i.myDice&&(Ad={round:i.myDiceRound,dice:i.myDice});let n=we[i.meId];n&&i.gamePhase==="bidding"&&!n.anim&&n.pose.flip<.01&&i.myDiceRound===i.roundNo&&n.diceRound!==i.roundNo&&i.myDice&&(Ia(n,i.myDice,i.roundNo),n.diceRound=i.roundNo);let s=`${i.roundNo}|${i.gamePhase}`;if((e||!t||t.phaseKey!==s&&!i.expectAnim)&&R1(i),i.phaseKey=s,Vd&&i.gamePhase==="bidding")sh(null);else if(i.gamePhase==="bidding"&&i.bid){let r=i.players.find(o=>o.id===i.bid.id);sh({top:`Gebot von ${r?r.name:"?"}`,qty:i.bid.qty,face:i.bid.face})}else i.gamePhase==="bidding"?sh({top:`Runde ${i.roundNo}`,big:"Neue Runde"}):sh(null);i.startDice>2&&i.totalDice&&(G0=Li((i.startDice-i.totalDice)/(i.startDice-2),0,1)),i.bid||Hn.forEach(r=>{r.bubbleSticky&&!r.bubble.userData.challenge&&(r.bubble.visible=!1,r.bubbleSticky=!1)})}function P1(i){let t=Math.max(180,Math.min(380,2600/Math.max(1,i))),e=1600,n=e+i*t;return{step:t,countStart:e,countEnd:n,verdict:n+350,banner:n+1300}}function I1(i,t,e){return i===t||e&&i===1&&t!==1}function Ld(i){let t=$e.userData.cv,e=t.getContext("2d"),n=t.width,s=t.height;if(e.clearRect(0,0,n,s),e.textAlign="center",e.textBaseline="middle",e.lineJoin="round",i.num!==void 0)e.font=`900 190px ${Jr}`,e.lineWidth=22,e.strokeStyle="rgba(20,10,0,0.85)",e.strokeText(String(i.num),n/2-50,130),e.fillStyle="#f4d58d",e.fillText(String(i.num),n/2-50,130),Sh(e,n/2+60,72,110,i.face);else{e.font=`900 118px ${Jr}`,e.lineWidth=20,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(i.big,n/2,96),e.fillStyle=i.color,e.fillText(i.big,n/2,96),e.font=`700 40px ${Ud}`;let r=`${i.actual} \xD7`,o=`liegen \xB7 Gebot ${i.qty}`,a=e.measureText(r).width,l=e.measureText(o).width,c=46,h=12,d=a+h+c+h+l,u=n/2-d/2;e.fillStyle="rgba(10,20,30,0.82)",Aa(e,u-20,176,d+40,70,35),e.fill(),e.fillStyle="#fff4dc",e.textAlign="left",e.fillText(r,u,212),u+=a+h,Sh(e,u,212-c/2,c,i.face),u+=c+h,e.fillText(o,u,212)}$e.material.map.needsUpdate=!0,$e.visible=!0,$e.userData.popT=performance.now()}function Q0(i){let t=i.kind!=="spot",e=t?i.correct?"Gelogen!":"Stimmt!":i.correct?"Genau!":"Daneben!",n=t&&i.correct||!t&&!i.correct?"#ff6a55":"#7fe39a";Ld({big:e,color:n,actual:i.actual,qty:i.bid.qty,face:i.bid.face})}function D1(i){let t=i.position.y,e=i.rotation.y;i.userData.match=!0,Da(320,0,n=>{i.position.y=t+Math.sin(Math.PI*n)*.12+n*.012,i.rotation.y=e+n*Math.PI*.5,i.scale.setScalar(1+n*.14)})}function zT(i){!Tn||!Be||i.forEach(t=>{switch(t.t){case"roll":{let e=Tn,n=0;Bn=null,$e.visible=!1,Hn.forEach(s=>{s.cheer=!1}),On=null,Hn.forEach(s=>{let r=e.players.find(a=>a.id===s.id);if(!r||r.eliminated){s.cupRoot.visible=!1,Pa(s);return}s.cupRoot.visible=!0,s.peekOn=!1,s.bubble&&(s.bubble.visible=!1,s.bubbleSticky=!1,s.bubble.userData.challenge=!1);let o=n++*60;T1(s,o,()=>{s.isMe?Ad.round===t.round&&(Ia(s,Ad.dice,t.round),s.diceRound=t.round):(Pa(s),s.diceRound=-2),s.isMe&&(Zr=.18)})}),j0({bid:{face:0}},!1);break}case"bid":{let e=we[t.id];if(!e)break;Hn.forEach(n=>{n!==e&&!n.bubble.userData.challenge&&(n.bubbleSticky=!1,n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+400))}),e.bubble.userData.challenge=!1,Vd||D0(e,{qty:t.qty,face:t.face},6e4,!0),e.nod=1,Hn.filter(n=>n!==e&&!n.isMe&&!n.out).forEach(n=>{Math.random()<.45&&Sa(n.id,"skeptic",1800+Math.random()*1500)}),ae&&ae.sound&&(ae.sound("bid",.4),ae.sound("quack",e.isMe?.35:.5,oh(e.id),1));break}case"challenge":{let e=we[t.id];if(!e)break;Hn.forEach(n=>{n!==e&&n.id!==t.bidderId&&(n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+200))}),D0(e,{kind:t.kind},6e4,!0),e.bubble.userData.challenge=!0,e.slam=1,e.flap=1,Zr=.25,Ma={caller:t.id,bidder:t.bidderId},Sa(t.id,"angry",2600),t.bidderId&&Sa(t.bidderId,"skeptic",2600),ae&&ae.sound&&(ae.sound("slam",.9),ae.sound("liar",.7),ae.sound("quack",.7,oh(e.id)*.85,2));break}case"reveal":{let e="rv"+Tn.roundNo,n=P1(t.actual),s=Tn.reveal?Tn.reveal.wildOnes:!0,r=performance.now();Bn={t0:r,plan:n,key:e,ev:t},$e.visible=!1;let o=0;Hn.forEach(a=>{let l=t.dice[a.id];l&&(a.cupRoot.visible=!0,Ia(a,l,e),a.diceRound=e,w1(a,350+o++*90))}),setTimeout(()=>{if(!Bn||Bn.t0!==r)return;let a=[];Hn.forEach(l=>l.dice.forEach(c=>{let h=I1(c.userData.value,t.bid.face,s);c.userData.dim=!h,c.material.forEach(d=>{d.color.setScalar(h?1:.4),d.emissiveIntensity=0}),h&&a.push(c)})),a.length||(Ld({num:0,face:t.bid.face}),ae&&ae.sound&&ae.sound("count",.6,0)),a.forEach((l,c)=>setTimeout(()=>{!Bn||Bn.t0!==r||(D1(l),Ld({num:c+1,face:t.bid.face}),ae&&ae.sound&&ae.sound("count",.7,c))},c*n.step))},n.countStart),setTimeout(()=>{!Bn||Bn.t0!==r||(Q0(t),ae&&ae.sound&&ae.sound("verdict",.9,t.correct))},n.verdict);break}case"loseDie":{setTimeout(()=>{let e=we[t.id];if(!e)return;let n=e.dice.filter(s=>s.visible).pop();if(n){let s=n.position.clone(),r=6+Math.random()*4;Da(1500,0,o=>{n.position.set(s.x+o*.5,s.y+Math.sin(Math.PI*o*.8)*1.3+o*.3,s.z+o*3.2),n.rotation.x=o*r,n.rotation.z=o*r*.7,n.material.forEach(a=>{a.color.setRGB(1,1-o*.6,1-o*.6),a.transparent=!0,a.opacity=o<.75?1:1-(o-.75)/.25})},()=>{n.visible=!1})}if(bd("\u22121 \u{1F3B2}",e,"#ff8a7a"),e.nod=1,Sa(t.id,"sad",4200),Ma){let s=Ma.caller===t.id?Ma.bidder:Ma.caller;s&&Sa(s,"happy",3800)}ae&&ae.sound&&(ae.sound("lose",.7),ae.sound("quack",.4,oh(e.id)*.8,1))},rh(800));break}case"gainDie":{setTimeout(()=>{let e=we[t.id];e&&(bd("+1 \u{1F3B2}",e,"#8aff9a"),e.flap=1)},rh(800));break}case"out":{setTimeout(()=>{let e=we[t.id];e&&(bd("\u2620",e,"#ffffff"),e.out=!0)},rh(2e3));break}case"over":{setTimeout(()=>{let e=we[t.id];e&&(e.cheer=!0,G1(e),e.isMe||(On={id:e.id,t0:performance.now()}),ae&&ae.sound&&(ae.sound("win",1),ae.sound("quack",.6,oh(e.id)*1.1,3)))},rh(2300));break}default:break}})}function Fe(i,t,e){let n=Li((e-i)/(t-i),0,1);return n*n*(3-2*n)}var Md=new xt,GT=new xt,L1=new xt(16763024),N1=new xt(16738872),U1=new xt(15775114),F1=new xt(12607562),O1=new xt(922662),B1=new xt(16767152),H1=new xt(6977712),L0=-1,Sd=0;function z1(i){let t=Nd!==null?Nd:G0,e=Sd?Math.min(2,(performance.now()-Sd)/1e3):0;if(Sd=performance.now(),In+=(t-In)*(1-Math.exp(-e*.45)),Math.abs(In-L0)<5e-4)return;L0=In;let n=In,s=Pn(.2,-.14,Fe(0,.85,n));Ra.set(-.72,s,-.66).normalize(),Zi&&(Zi.material.uniforms.night.value=n),vs&&(vs.material.uniforms.night.value=n),Zn.position.copy(Ra).multiplyScalar(30),Zn.intensity=2.6*(1-Fe(.4,.85,n)),Zn.color.copy(L1).lerp(N1,Fe(.15,.7,n)),ph.intensity=.75*Fe(.55,1,n),Cd.intensity=Pn(.9,.32,Fe(.2,1,n)),Cd.color.copy(B1).lerp(H1,Fe(.3,1,n)),k0.intensity=Pn(.35,.18,n),Md.copy(U1).lerp(F1,Fe(0,.6,n)),Md.lerp(O1,Fe(.5,1,n)),Pt.fog.color.copy(Md),Be.toneMappingExposure=Pn(1.05,1.22,Fe(.4,1,n)),xh&&(xh.strength=Pn(.32,.75,Fe(.3,1,n))),W0.forEach(r=>{r.emissiveIntensity=2.2*Fe(.35,.85,n)})}var Nd=null,gh=null;function kT(i){gh=i}function VT(){return{calls:Be.info.render.calls,triangles:Be.info.render.triangles}}function WT(i){Nd=i==null?null:Li(i,0,1)}function rh(i){return Bn?Math.max(0,Bn.t0+Bn.plan.verdict+i-performance.now()):i}function oh(i){return .8+(Hd(i)>>>5)%9/20}function bd(i,t,e){let n=Dn(384,128),s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle",s.font=`900 80px ${Jr}`,s.lineWidth=12,s.strokeStyle="rgba(0,0,0,0.85)",s.strokeText(i,192,66),s.fillStyle=e,s.fillText(i,192,66);let r=new yi(new si({map:Je(n),transparent:!0,depthTest:!1,depthWrite:!1}));r.renderOrder=20,r.scale.set(.6,.2,1);let o=t.cupRoot.position.clone();o.y+=.35,t.isMe&&(o.multiplyScalar(.45),o.y=Ze+.22),r.position.copy(o),Pt.add(r),Da(1800,0,a=>{r.position.y=o.y+a*.5,r.material.opacity=a<.7?1:1-(a-.7)/.3},()=>{Pt.remove(r),r.material.map.dispose(),r.material.dispose()})}function G1(i){let t=new ee({color:15909450,metalness:.9,roughness:.3,emissive:4861952}),e=new oe(.03,.03,.006,12),n=i.cupRoot.position.clone();for(let s=0;s<80;s++){let r=new re(e,t);r.position.copy(n),r.position.y+=.3,Pt.add(r),dh.push({m:r,vx:(Math.random()-.5)*2.5,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5,life:2.6+Math.random(),spin:Math.random()*12})}}var ba=new C,Ea=new C,Pi=new C,qi=new C,Ta=new C,Vr=new an,Bs=new an,N0=new kn(0,0,0,"YXZ"),Wr=new ne;function k1(){if(!ch)return;let i=performance.now(),t=fh?(i-fh)/1e3:.016,e=Math.min(.05,t);fh=i,ie+=e;for(let o=hh.length-1;o>=0;o--){let a=hh[o];if(i<a.t0)continue;let l=Math.min(1,(i-a.t0)/a.dur);a.fn(l,!a.started),a.started=!0,l>=1&&(hh.splice(o,1),a.done&&a.done())}vs&&(vs.material.uniforms.time.value=ie),Zi&&(Zi.material.uniforms.time.value=ie);let n=.55+.45*Math.sin(ie*.21)*Math.sin(ie*.13+1.3);if(U0.forEach(o=>{o.obj.rotation.z=o.base+Math.sin(ie*1.3+o.ph)*.05*(.7+n)+n*.03,o.obj.rotation.x=Math.sin(ie*.9+o.ph)*.03*(.7+n)+Math.sin(ie*6.5+o.ph*3)*.006*n}),Fd.forEach(o=>{let a=1+Math.sin(ie*17+o.ph)*.08+Math.sin(ie*29+o.ph)*.06;o.flame.scale.set(1,a,1),o.inner.scale.set(1,a*.95,1),o.glow.material.opacity=(.55+Math.sin(ie*13+o.ph)*.12)*(1+In*.7),o.glow.scale.setScalar((o.baseScale||(o.baseScale=o.glow.scale.x))*(1+In*.9))}),wa&&(wa.intensity=(2+Math.sin(ie*11)*.15+Math.sin(ie*23)*.1)*(1+In*1.8)),V0.forEach((o,a)=>{o.intensity=3.2*Fe(.35,.9,In)*(1+Math.sin(ie*15+a*2)*.12)}),F0.forEach(o=>{if(o.g.rotation.z=Math.sin(ie*.6+o.bob)*.03,o.g.rotation.x=Math.sin(ie*.45+o.bob)*.02,o.g.position.y=-.35+Math.sin(ie*.8+o.bob)*.15,o.speed){let a=o.path.to-o.path.from;o.g.position.x=o.path.from+(ie*o.speed+a*.35)%a}}),Od.forEach(o=>{let a=o.mesh.geometry.attributes.position,l=o.base;for(let c=0;c<a.count;c++){let h=l[c*3],d=l[c*3+1],u=o.fromPole?h:h+1.2;a.setZ(c,Math.sin(u*3.2-ie*5+o.ph)*o.amp*u*.8+Math.sin(d*4+ie*3)*.02)}a.needsUpdate=!0}),$n.crab){let o=Math.sin(ie*.35);$n.crab.position.set(2.2+o*1.6,0,-4+Math.cos(ie*.21)*.5),$n.crab.rotation.y=Math.PI/2+Math.sin(ie*9)*.08}if($n.parrot&&($n.parrot.rotation.y=.9+Math.sin(ie*.7)*.5,$n.parrot.children[1].rotation.x=Math.max(0,Math.sin(ie*2.3))*.3),$n.gulls&&$n.gulls.forEach(o=>{let a=ie*o.sp+o.ph;o.g.position.set(Math.cos(a)*o.r-4,o.h+Math.sin(ie*.8+o.ph)*.6,Math.sin(a)*o.r-14),o.g.rotation.y=-a;let l=Math.sin(ie*6+o.ph)*.45;o.wl.rotation.z=l,o.wr.rotation.z=-l}),z1(e),s1(e),$e&&$e.visible){let o=1+.35*Math.max(0,1-(i-($e.userData.popT||0))/260),a=(Rd?.95:.8)*o;$e.scale.set(a,a*288/512,1)}let s=Tn;Hn.forEach(o=>{let a=o.pose,l=o.peekOn&&I0(o)?1:0;o.peek+=(l-o.peek)*Math.min(1,e*9),!o.anim&&a.flip<.01&&(a.tilt=o.peek*XM*(o.isMe?1:.8),Kr(o)),o.hold+=(o.holdTarget-o.hold)*Math.min(1,e*8);let c=o.turn?J0(s):null;if(c!==null){let S=Math.round(c*90);o.ringKey!==S&&(o.ringKey=S,o.ring.geometry.dispose(),o.ring.geometry=new Ds(.2,.245,48,1,Math.PI/2,Math.max(.001,c)*Math.PI*2),o.ring.material.color.set(c<.27?16734778:16042333)),o.ring.material.opacity=.85;let b=s.players.find(R=>R.id===o.id);b&&K0(o,b,s)}else o.ringKey!=="full"&&(o.ringKey="full",o.ring.geometry.dispose(),o.ring.geometry=new Ds(.2,.235,48),o.ring.material.color.set(16042333)),o.ring.material.opacity=o.turn?.45+Math.sin(ie*5)*.3:0;o.dice.forEach(S=>{S.userData.match&&S.material.forEach(b=>{b.emissiveIntensity=.35+Math.sin(ie*5)*.2})}),o.bubble.visible&&i>o.bubbleUntil&&(o.bubble.visible=!1);let h=o.parts;h.g.updateMatrixWorld(!0);let d=null,u=0,f=0;if(!o.isMe&&h.head){let S=s&&s.phase==="playing"&&s.gamePhase==="bidding"&&!o.out&&!o.anim&&o.peek<.05&&!o.cheer&&!(o.slam>0)&&!(o.flap>0);if(o.nextIdle||(o.nextIdle=i+2500+Math.random()*7e3),!o.idle&&S&&i>o.nextIdle){let b=o.turn?["drum","scratch","drum"]:["sip","sip","drum","stretch","look","scratch"],R=b[Math.floor(Math.random()*b.length)];o.idle={kind:R,t0:i,dur:{sip:3600,drum:2400,stretch:2300,look:3e3,scratch:2e3}[R],dir:Math.random()<.5?-1:1}}uh&&(o.idle={kind:uh.kind,t0:i-uh.p*1e3,dur:1e3,dir:1}),o.idle&&(u=(i-o.idle.t0)/o.idle.dur,u>=1||!S&&o.idle.kind!=="sip"?(o.idle=null,o.nextIdle=i+4e3+Math.random()*9e3):(d=o.idle.kind,f=Fe(0,.18,u)*(1-Fe(.8,1,u))))}let g=d==="sip"?Fe(.2,.4,u)*(1-Fe(.66,.84,u)):0;if(!o.isMe&&h.head){let S=o.lookYaw||0,b=s&&s.currentTurnId&&we[s.currentTurnId];we[o.id]&&(!s||!s.players.find(I=>I.id===o.id&&!I.isBot))&&b&&b!==o?(qi.copy(b.frame.position),h.g.worldToLocal(qi),S=Li(Math.atan2(-qi.x,-qi.z),-1.1,1.1)):s&&s.players.find(I=>I.id===o.id&&I.isBot)&&b===o&&(S=Math.sin(ie*.7+o.idx)*.25),o.lookCur+=(S-o.lookCur)*Math.min(1,e*4),o.nod=Math.max(0,o.nod-e*1.6);let R=Math.sin((1-o.nod)*Math.PI*2)*o.nod*.25,v=o.flap>0?Math.sin(ie*30)*.25*o.flap:0;h.head.rotation.set(.1+o.peek*.55+R+(o.out?.85:0)-(o.cheer?.35:0),o.lookCur*(1-o.peek*.8)+v,o.out?.2:Math.sin(ie*.5+o.idx*1.3)*.08),h.torso.rotation.x=-(o.peek*.22)-(o.slam>0?Math.sin(o.slam*Math.PI)*.18:0)+(o.out?.35:0)-Math.sin(ie*1.4+o.idx)*.012,h.body.position.y=.46+(o.cheer?Math.abs(Math.sin(ie*7+o.idx))*.08:0),d==="look"&&(h.head.rotation.y+=(o.idle.dir*.95-h.head.rotation.y)*f),d==="stretch"&&(h.torso.rotation.x-=.15*f,h.head.rotation.x-=.3*f),d==="scratch"&&(h.head.rotation.z+=.12*f),g>0&&(h.head.rotation.x-=g*.38);let w=o.out?"sad":o.cheer?"happy":o.expr&&i<o.expr.until?o.expr.kind:d==="look"?"skeptic":null;if($0(h,w,Math.min(1,e*8)),h.lids&&h.lids.length){o.nextBlink||(o.nextBlink=i+1e3+Math.random()*3e3);let I=(i-o.nextBlink)/150,D=I>0&&I<1?Math.sin(I*Math.PI):0;I>=1&&(o.nextBlink=i+2e3+Math.random()*3500);let N=o.expr&&i<o.expr.until?o.expr.kind:null,G=o.out?.8:o.peek>.3?.3:N==="angry"?.26:N==="sad"?.34:o.cheer||N==="happy"?0:g>.5?.55:.06;h.lids.forEach(L=>{L.pivot.rotation.x=Rn.lerp(L.open,L.closed,Math.max(G,D))})}}o.flap=Math.max(0,(o.flap||0)-e/1.3),o.slam=Math.max(0,o.slam-e*1.8);let y=o.isMe?0:h.torso?h.torso.rotation.x:0,m=h.shoulder||{x:.2,y:.76,z:0};ba.set(m.x,m.y+y*.1,m.z+y*.3),Ea.set(-m.x,m.y+y*.1,m.z+y*.3),o.isMe&&(ba.set(.42,.92,0),Ea.set(-.36,.92,.05));let p=-(yh-bn);Pi.set(.2,Ze+.03,p-.08);let M=E1(o);qi.copy(M),h.g.worldToLocal(qi);let E=o.cupRoot.visible?o.hold:0;Ta.copy(Pi).lerp(qi,E),Pi.set(-.2,Ze+.03+(o.slam>0?Math.sin(o.slam*Math.PI)*.25:0),p-.1);let x=o.cheer?1:o.flap>0?Math.min(1,(1-o.flap)*5)*Math.min(1,o.flap*3):0;if(!o.isMe&&(x>0||o.out)){let S=o.cheer?14:26,b=o.out?-.35:.2+Math.sin(ie*S)*.1;sn.set(.33,b,o.out?.02:-.08).add(ba),Yn.set(-.33,b,o.out?.02:-.08).add(Ea);let R=o.out?1:x;Ta.lerp(sn,R),Pi.lerp(Yn,R)}if(o.mug){let S=o.mug;if(S.userData.rest.set(-.3,Ze,p-.14),d==="sip"){let b=Fe(0,.17,u)*(1-Fe(.88,1,u));sn.set(-.03,.9,-.23),S.position.copy(S.userData.rest).lerp(sn,g),S.rotation.set(g*1.2,0,g*.15),Yn.copy(S.position).add(Yr.set(.055,.045,.02)),Pi.lerp(Yn,b)}else S.position.copy(S.userData.rest),S.rotation.set(0,0,0)}d==="drum"?(Pi.y+=Math.abs(Math.sin(ie*17))*.03*f,Pi.x+=Math.sin(ie*3.5)*.03*f):d==="scratch"?(sn.set(-.13,1.08+Math.sin(ie*24)*.012,.03),Pi.lerp(sn,f)):d==="stretch"&&(sn.set(.3,.36,.1).add(ba),Yn.set(-.3,.36,.1).add(Ea),Ta.lerp(sn,f*(1-E)),Pi.lerp(Yn,f)),bh(h.arms[0],ba,Ta),bh(h.arms[1],Ea,Pi),o.mug&&(o.mug.visible=!o.out||d==="sip"),h.arms.forEach(S=>{let b=!(o.isMe&&o.out);S.fore.visible=S.cuff.visible=S.hand.visible=b,S.upper.visible=b&&!o.isMe})});let r=s&&we[s.meId];if(r){let o=wd&&I0(r)?1:0;if(Gr+=(o-Gr)*Math.min(1,e*6),i-Bd>5e3&&Gr<.05){let l=0,c=s.gamePhase==="bidding"&&s.currentTurnId&&s.currentTurnId!==s.meId?we[s.currentTurnId]:null;c&&(Yr.copy(c.frame.position),r.frame.worldToLocal(Yr),l=Li(Math.atan2(-Yr.x,-Yr.z)*.55,-.85,.85)),Yi+=(l-Yi)*Math.min(1,e*1.1),ks+=(Eh-ks)*Math.min(1,e*1.1)}let a=Rd?qi.set(0,1.78,.02):qi.set(0,1.42,.3);if(r.frame.localToWorld(a),N0.set(ks,r.rot+Yi,0,"YXZ"),Vr.setFromEuler(N0),Gr>.001){let l=Ta.set(-.1,1.08,-.1);r.frame.localToWorld(l),a.lerp(l,Gr);let c=r.cupRoot.position.clone();c.y+=.02,c.addScaledVector(r.dir,.02),Wr.lookAt(a,c,mh),Bs.setFromRotationMatrix(Wr),Vr.slerp(Bs,Gr)}if($r){let l=Td!==null?Td:(i-$r)/qM;if(l>=1||l<0)$r=0;else{let c=Fe(0,1,l),h=Math.atan2(a.x,a.z),d=Math.hypot(a.x,a.z),u=h+2.6*(1-c),f=Pn(1.1,d,Fe(.3,1,c)),g=Pn(11,a.y,1-Math.pow(1-c,1.6));sn.set(Math.sin(u)*f,g,Math.cos(u)*f),Yn.set(0,Ze+.15,0),Wr.lookAt(sn,Yn,mh),Bs.setFromRotationMatrix(Wr),Bs.slerp(Vr,Fe(.6,1,l)),a.copy(sn),Vr.copy(Bs)}}if(On&&!On.released&&s.phase==="gameover"&&we[On.id]){let l=we[On.id],c=Fe(0,1,(i-On.t0)/2e3),h=Math.sin((i-On.t0)/3e3)*.18;sn.set(.5+h,1.62,-1.45),l.frame.localToWorld(sn),Yn.set(-.42,.98,0),l.frame.localToWorld(Yn),l.bubble.visible=!1,$e&&c>.05&&($e.visible=!1),Wr.lookAt(sn,Yn,mh),Bs.setFromRotationMatrix(Wr),a.lerp(sn,c),Vr.slerp(Bs,c)}else On&&s.phase!=="gameover"&&(On=null);He.position.copy(a),Zr>0&&(Zr=Math.max(0,Zr-e),He.position.y+=Math.sin(ie*90)*Zr*.02),He.quaternion.copy(Vr),gh&&(He.position.set(...gh.pos),He.lookAt(...gh.look)),ae&&ae.onLook&&i-E0>400&&Math.abs(Yi-T0)>.06&&(E0=i,T0=Yi,ae.onLook(Yi))}else He.position.set(0,3.2,4.2),He.lookAt(0,Ze,0);for(let o=dh.length-1;o>=0;o--){let a=dh[o];a.life-=e,a.vy-=6*e,a.m.position.x+=a.vx*e,a.m.position.y=Math.max(.01,a.m.position.y+a.vy*e),a.m.position.z+=a.vz*e,a.m.position.y<=.011?(a.vx*=.9,a.vz*=.9,a.vy=0):(a.m.rotation.x+=a.spin*e,a.m.rotation.z+=a.spin*e),a.life<=0&&(Pt.remove(a.m),dh.splice(o,1))}if(_h&&(_h.uniforms.night.value=In),En){xs.length||(xs.t0=i),xs.push(t);let o=i-xs.t0;if(xs.length>=90||xs.length>=3&&o>4e3){let a=xs.slice().sort((c,h)=>c-h),l=a[Math.floor(a.length/2)];xs=[],l>1/38&&(Cn&&Cn.enabled?Cn.enabled=!1:En=null)}}En?En.render():Be.render(Pt,He)}function XT(){Be&&(Be.setAnimationLoop(null),Be.dispose()),vh&&vh.disconnect(),Se&&Se.parentNode&&Se.parentNode.removeChild(Se)}function qT(){let i={};Pt.children.forEach((n,s)=>{let r=0;n.traverse(a=>{(a.isMesh||a.isSprite)&&a.visible&&r++});let o=(n.type||"x")+(n.userData.dynamic?"*":"");i[o]=(i[o]||0)+r});let t=Object.values(we)[1],e=0;return t&&t.frame.traverse(n=>{n.isMesh&&e++}),i.perSeatFrame=e,i}function YT(i,t){let e=[];return i.forEach((n,s)=>{let[r,o]=Array.isArray(n)?n:[n,null],a=Z0(r,!1,o),l=a.g;l.position.set((s-(i.length-1)/2)*.62,0,3.6),l.rotation.y=Math.PI,Pt.add(l),a.lids&&t!==void 0&&a.lids.forEach(h=>{h.pivot.rotation.x=Rn.lerp(h.open,h.closed,t)});let c=a.shoulder;a.arms.forEach(h=>{let d=new C(h.side*c.x,c.y,c.z);bh(h,d,new C(h.side*.26,.55,-.12))}),tm.push(a),e.push([l.position.x,l.position.z])}),e}var tm=[];function ZT(i){tm.forEach((t,e)=>$0(t,i[e%i.length],1))}var Ee=null;function $T(i){if(Ee){Ee.canvas.parentNode!==i&&i.appendChild(Ee.canvas);return}let t=document.createElement("canvas");t.className="preview-canvas",i.appendChild(t);let e=new ha({canvas:t,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.toneMapping=ds,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0;let n=new xr;n.add(new Rr(16771280,4864560,1.1));let s=new Wi(16767152,2.4);s.position.set(-2,4,-3),s.castShadow=!0,n.add(s);let r=new Wi(10470655,1.2);r.position.set(3,2,3),n.add(r);let o=new re(new ss(.7,40),new ee({color:14270346,roughness:1}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,n.add(o);let a=new on(32,1,.05,20);a.position.set(0,1.04,-1.8),a.lookAt(0,.82,0);let l=new $t;n.add(l),Ee={canvas:t,r:e,sc:n,cam:a,holder:l,spin:0,drag:null,avKey:""},t.addEventListener("pointerdown",h=>{Ee.drag={x:h.clientX,spin:Ee.spin};try{t.setPointerCapture(h.pointerId)}catch{}}),t.addEventListener("pointermove",h=>{Ee.drag&&(Ee.spin=Ee.drag.spin+(h.clientX-Ee.drag.x)*.012)}),t.addEventListener("pointerup",()=>{Ee.drag=null,Ee.idleFrom=performance.now()});let c=performance.now();e.setAnimationLoop(()=>{if(!t.isConnected||t.offsetParent===null)return;let h=t.clientWidth,d=t.clientHeight;h&&d&&(t.width!==Math.round(h*e.getPixelRatio())||t.height!==Math.round(d*e.getPixelRatio()))&&(e.setSize(h,d,!1),a.aspect=h/d,a.updateProjectionMatrix());let u=performance.now(),f=Math.min(.05,(u-c)/1e3);if(c=u,!Ee.drag&&(!Ee.idleFrom||u-Ee.idleFrom>2500)&&(Ee.spin+=f*.5),l.rotation.y=Ee.spin,Ee.parts){let g=u/1e3%3.7,y=g<.15?Math.sin(g/.15*Math.PI):0;(Ee.parts.lids||[]).forEach(m=>{m.pivot.rotation.x=Rn.lerp(m.open,m.closed,Math.max(.06,y))}),Ee.parts.head&&Ee.parts.head.rotation.set(.05,Math.sin(u/1400)*.25,Math.sin(u/2100)*.05)}e.render(n,a)})}function JT(i){if(!Ee)return;let t=JSON.stringify(i);if(t===Ee.avKey)return;for(Ee.avKey=t;Ee.holder.children.length;)Ee.holder.remove(Ee.holder.children[0]);let e=ed("preview",!1,Y0,i),n=e.shoulder;e.arms.forEach(s=>bh(s,new C(s.side*n.x,n.y,n.z),new C(s.side*.2,.62,-.22))),e.g.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),Ee.holder.add(e.g),Ee.parts=e}var Vd=!1;function KT(i){Vd=!!(i&&i.bidBadges),Ed="__",Tn&&C1(Object.assign({},Tn,{expectAnim:!1}))}var Xr=new C;function jT(i){let t=we[i];return!t||t.isMe||!He||!Se||(t.label.getWorldPosition(Xr),Xr.y+=.03,Xr.project(He),Xr.z>1)?null:{x:(Xr.x+1)/2*Se.clientWidth,y:(1-Xr.y)/2*Se.clientHeight}}function QT(i){return i&&i.noComposer&&(En=null),i&&i.noAo&&Cn&&(Cn.enabled=!1),i&&i.hide&&Pt.traverse(t=>{t.userData&&t.userData.tag===i.hide&&(t.visible=!1)}),{composer:!!En,ao:!!(Cn&&Cn.enabled),calls:Be.info.render.calls}}export{qT as debugCounts,ZT as debugExpr,YT as debugGallery,DT as debugIdle,LT as debugIntro,QT as debugPerf,XT as dispose,zT as events,UT as init,$T as initPreview,NT as palettes,IT as playIntro,A1 as resetView,jT as screenPos,kT as setDebugCam,KT as setHudOptions,HT as setLook,BT as setMyPeek,WT as setNight,OT as setPeek,JT as setPreviewAvatar,FT as setVisible,VT as stats,C1 as update};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
