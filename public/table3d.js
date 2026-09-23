var lu=0,uc=1,cu=2;var Wi=1,hu=2,Ns=3,Ri=0,We=1,Ae=2,Yn=0,Us=1,Xi=2,dc=3,fc=4,uu=5;var qi=100,du=101,fu=102,pu=103,mu=104,gu=200,_u=201,xu=202,yu=203,pc=204,mc=205,vu=206,Mu=207,Su=208,bu=209,Eu=210,Tu=211,wu=212,Au=213,Ru=214,ba=0,Ea=1,Ta=2,vs=3,wa=4,Aa=5,Ra=6,Ca=7,gc=0,Cu=1,Iu=2,Dn=0,_c=1,xc=2,yc=3,Cr=4,vc=5,Mc=6,Sc=7;var bc=300,Ci=301,Yi=302,oo=303,lo=304,Ir=306,Si=1e3,Vn=1001,Ia=1002,Be=1003,Pu=1004;var Pr=1005;var ke=1006,co=1007;var Ii=1008;var ln=1009,Ec=1010,Tc=1011,Fs=1012,ho=1013,Nn=1014,Un=1015,Fn=1016,uo=1017,fo=1018,Os=1020,wc=35902,Ac=35899,Rc=1021,Cc=1022,Mn=1023,Wn=1026,Pi=1027,Ic=1028,po=1029,Li=1030,mo=1031;var go=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,_o=35840,xo=35841,yo=35842,vo=35843,Mo=36196,So=37492,bo=37496,Eo=37488,To=37489,Fr=37490,wo=37491,Ao=37808,Ro=37809,Co=37810,Io=37811,Po=37812,Lo=37813,Do=37814,No=37815,Uo=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,Ho=37821,Go=36492,ko=36494,Vo=36495,Wo=36283,Xo=36284,Or=36285,qo=36286;var sr=2300,Pa=2301,Ma=2302,nc=2303,ic=2400,sc=2401,rc=2402;var Lu=3200;var Yo=0,Du=1,ai="",Qe="srgb",rr="srgb-linear",ar="linear",he="srgb";var Sa=7680;var Nu=519,Uu=512,Fu=513,Ou=514,Zo=515,Bu=516,zu=517,Jo=518,Hu=519,Pc=35044;var Lc="300 es",Pn=2e3,Ms=2001;function xf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=or("canvas");return i.style.display="block",i}var Nh={},Ss=null;function lr(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=ku(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=ku(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in Nh||(Nh[t]=!0,Ut(...i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Wu={[ba]:Ea,[Ta]:Ra,[wa]:Ca,[vs]:Aa,[Ea]:ba,[Ra]:Ta,[Ca]:wa,[Aa]:vs},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cl=Math.PI/180,La=180/Math.PI;function Mi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function vf(i,t){return(i%t+t)%t}function Il(i,t,e){return(1-e)*i+e*t}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new C,Uh=new tn,zt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],S=s[1],w=s[4],v=s[7],E=s[2],b=s[5],R=s[8];return r[0]=a*y+o*S+l*E,r[3]=a*m+o*w+l*b,r[6]=a*p+o*v+l*R,r[1]=c*y+h*S+d*E,r[4]=c*m+h*w+d*b,r[7]=c*p+h*v+d*R,r[2]=u*y+f*S+g*E,r[5]=u*m+f*w+g*b,r[8]=u*p+f*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ll=new zt,Fh=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let i={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rr]:{primaries:t,whitePoint:n,transfer:ar,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Fh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var te=Mf();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=or("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dl(s[a].image)):r.push(Dl(s[a]))}else r=Dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var bf=0,Nl=new C,en=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=ke,a=Ii,o=Mn,l=ln,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Mi(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=bc;en.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,E=(p+1)/2,b=(h+u)/4,R=(d+y)/4,x=(g+m)/4;return w>v&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new en(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ue=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ef,t,Tf)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),gi.crossVectors(n,un),gi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),gi.crossVectors(n,un)),gi.normalize(),jr.crossVectors(un,gi),s[0]=gi.x,s[4]=jr.x,s[8]=un.x,s[1]=gi.y,s[5]=jr.y,s[9]=un.y,s[2]=gi.z,s[6]=jr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],w=n[7],v=n[11],E=n[15],b=s[0],R=s[4],x=s[8],T=s[12],I=s[1],U=s[5],F=s[9],G=s[13],L=s[2],H=s[6],W=s[10],V=s[14],Z=s[3],X=s[7],K=s[11],et=s[15];return r[0]=a*b+o*I+l*L+c*Z,r[4]=a*R+o*U+l*H+c*X,r[8]=a*x+o*F+l*W+c*K,r[12]=a*T+o*G+l*V+c*et,r[1]=h*b+d*I+u*L+f*Z,r[5]=h*R+d*U+u*H+f*X,r[9]=h*x+d*F+u*W+f*K,r[13]=h*T+d*G+u*V+f*et,r[2]=g*b+y*I+m*L+p*Z,r[6]=g*R+y*U+m*H+p*X,r[10]=g*x+y*F+m*W+p*K,r[14]=g*T+y*G+m*V+p*et,r[3]=S*b+w*I+v*L+E*Z,r[7]=S*R+w*U+v*H+E*X,r[11]=S*x+w*F+v*W+E*K,r[15]=S*T+w*G+v*V+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=l*f-c*u,w=o*f-c*d,v=o*u-l*d,E=a*f-c*h,b=a*u-l*h,R=a*d-o*h;return e*(y*S-m*w+p*v)-n*(g*S-m*E+p*b)+s*(g*w-y*E+p*R)-r*(g*v-y*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,v=e*c-r*a,E=n*l-s*o,b=n*c-r*o,R=s*c-r*l,x=h*y-d*g,T=h*m-u*g,I=h*p-f*g,U=d*m-u*y,F=d*p-f*y,G=u*p-f*m,L=S*G-w*F+v*U+E*I-b*T+R*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/L;return t[0]=(o*G-l*F+c*U)*H,t[1]=(s*F-n*G-r*U)*H,t[2]=(y*R-m*b+p*E)*H,t[3]=(u*b-d*R-f*E)*H,t[4]=(l*I-a*G-c*T)*H,t[5]=(e*G-s*I+r*T)*H,t[6]=(m*v-g*R-p*w)*H,t[7]=(h*R-u*v+f*w)*H,t[8]=(a*F-o*I+c*x)*H,t[9]=(n*I-e*F-r*x)*H,t[10]=(g*b-y*v+p*S)*H,t[11]=(d*v-h*b-f*S)*H,t[12]=(o*T-a*U-l*x)*H,t[13]=(e*U-n*T+s*x)*H,t[14]=(y*w-g*E-m*S)*H,t[15]=(h*E-d*w+u*S)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,S=l*c,w=l*h,v=l*d,E=n.x,b=n.y,R=n.z;return s[0]=(1-(y+p))*E,s[1]=(f+v)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(m-S)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=is.set(s[0],s[1],s[2]).length(),o=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),An.copy(this);let c=1/a,h=1/o,d=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ms)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ms)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new C,An=new ue,Ef=new C(0,0,0),Tf=new C(1,1,1),gi=new C,jr=new C,un=new C,Bh=new ue,zh=new tn,xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wf=0,Hh=new C,ss=new tn,Qn=new ue,ta=new C,Js=new C,Af=new C,Rf=new tn,Gh=new C(1,0,0),kh=new C(0,1,0),Vh=new C(0,0,1),Wh={type:"added"},Cf={type:"removed"},rs={type:"childadded",child:null},Ul={type:"childremoved",child:null},Ve=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new xn,n=new tn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Hh.copy(t).applyQuaternion(this.quaternion),this.position.add(Hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Js,ta,this.up):Qn.lookAt(ta,Js,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Qn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),rs.child=t,this.dispatchEvent(rs),rs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),Ul.child=t,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new C(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(If)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=vf(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fl(a,r,t+1/3),this.g=Fl(a,r,t),this.b=Fl(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return te.workingToColorSpace(Ye.copy(this),t),Math.round(Zt(Ye.r*255,0,255))*65536+Math.round(Zt(Ye.g*255,0,255))*256+Math.round(Zt(Ye.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Qe){te.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(ea);let n=Il(_i.h,ea.h,e),s=Il(_i.s,ea.s,e),r=Il(_i.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Ft;Ft.NAMES=Xu;var hr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ur=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new C,jn=new C,Ol=new C,ti=new C,as=new C,os=new C,Xh=new C,Bl=new C,zl=new C,Hl=new C,Gl=new Se,kl=new Se,Vl=new Se,ii=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),jn.subVectors(n,e),Ol.subVectors(t,e);let a=Rn.dot(Rn),o=Rn.dot(jn),l=Rn.dot(Ol),c=jn.dot(jn),h=jn.dot(Ol),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Gl.setScalar(0),kl.setScalar(0),Vl.setScalar(0),Gl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),Vl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Gl,r.x),a.addScaledVector(kl,r.y),a.addScaledVector(Vl,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),jn.subVectors(t,e),Rn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;as.subVectors(s,n),os.subVectors(r,n),Bl.subVectors(t,n);let l=as.dot(Bl),c=os.dot(Bl);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,s);let h=as.dot(zl),d=os.dot(zl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(as,a);Hl.subVectors(t,r);let f=as.dot(Hl),g=os.dot(Hl);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(os,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Xh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Xh,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),ia.subVectors(this.max,$s),ls.subVectors(t.a,$s),cs.subVectors(t.b,$s),hs.subVectors(t.c,$s),xi.subVectors(cs,ls),yi.subVectors(hs,cs),Fi.subVectors(ls,hs);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Fi.z,Fi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Fi.z,0,-Fi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Fi.y,Fi.x,0];return!Wl(e,ls,cs,hs,ia)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,ls,cs,hs,ia))?!1:(sa.crossVectors(xi,yi),e=[sa.x,sa.y,sa.z],Wl(e,ls,cs,hs,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new C,new C,new C,new C,new C,new C,new C,new C],Cn=new C,na=new bi,ls=new C,cs=new C,hs=new C,xi=new C,yi=new C,Fi=new C,$s=new C,ia=new C,sa=new C,Oi=new C;function Wl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new C,ra=new rt,Pf=0,je=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qt=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lf=new bi,Ks=new C,Xl=new C,ws=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ks.subVectors(t,this.center);let e=Ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ks.copy(t.center).add(Xl)),this.expandByPoint(Ks.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Df=0,_n=new ue,ql=new Ve,us=new C,dn=new bi,Qs=new bi,Oe=new C,Te=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?fr:dr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return ql.lookAt(t),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(dn.min,Qs.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,Qs.max),dn.expandByPoint(Oe)):(dn.expandByPoint(Qs.min),dn.expandByPoint(Qs.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),Oe.add(us)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new je(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new C,l[x]=new C;let c=new C,h=new C,d=new C,u=new rt,f=new rt,g=new rt,y=new C,m=new C;function p(x,T,I){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[x].add(y),o[T].add(y),o[I].add(y),l[x].add(m),l[T].add(m),l[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){let I=S[x],U=I.start,F=I.count;for(let G=U,L=U+F;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let w=new C,v=new C,E=new C,b=new C;function R(x){E.fromBufferAttribute(s,x),b.copy(E);let T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(b,T);let U=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,U)}for(let x=0,T=S.length;x<T;++x){let I=S[x],U=I.start,F=I.count;for(let G=U,L=U+F;G<L;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new je(u,h,d)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},pr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ke=new C,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){lr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yl=new C,Nf=new C,Uf=new zt,In=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yl.subVectors(n,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(Yl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ff=0,ri=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=Us,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ln=class extends ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ds,js=new C,fs=new C,ps=new C,ms=new rt,tr=new rt,qu=new ue,aa=new C,er=new C,oa=new C,qh=new rt,Zl=new rt,Yh=new rt,qn=class extends Ve{constructor(t=new Ln){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new As(n,3,0,!1)),ds.setAttribute("uv",new As(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;la(aa.set(-.5,-.5,0),ps,a,fs,s,r),la(er.set(.5,-.5,0),ps,a,fs,s,r),la(oa.set(.5,.5,0),ps,a,fs,s,r),qh.set(0,0),Zl.set(1,0),Yh.set(1,1);let o=t.ray.intersectTriangle(aa,er,oa,!1,js);if(o===null&&(la(er.set(-.5,.5,0),ps,a,fs,s,r),Zl.set(0,1),o=t.ray.intersectTriangle(aa,oa,er,!1,js),o===null))return;let l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:ii.getInterpolation(js,aa,er,oa,qh,Zl,Yh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function la(i,t,e,n,s,r){ms.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ms.x-s*ms.y,tr.y=s*ms.x+r*ms.y):tr.copy(ms),i.copy(t),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(qu)}var ni=new C,Jl=new C,ca=new C,ha=new C,mr=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jl.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(Jl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jl).addScaledVector(ca,u),f}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(h),R,x,T,I,U,F,G,L,H,W,V,Z;if(v>=E&&v>=b?(T=l,F=d,H=g,Z=p,l>=0?(R=c,x=h,I=u,U=f,G=y,L=m,W=S,V=w):(R=h,x=c,I=f,U=u,G=m,L=y,W=w,V=S)):E>=b?(T=c,F=u,H=y,Z=S,c>=0?(R=h,x=l,I=f,U=d,G=m,L=g,W=w,V=p):(R=l,x=h,I=d,U=f,G=g,L=m,W=p,V=w)):(T=h,F=f,H=m,Z=w,h>=0?(R=l,x=c,I=d,U=u,G=g,L=y,W=p,V=S):(R=c,x=l,I=u,U=d,G=y,L=g,W=S,V=p)),T===0)return null;let X=R/T,K=x/T,et=1/T,vt=I-X*F,bt=U-K*F,ee=G-X*H,$t=L-K*H,ne=W-X*Z,J=V-K*Z,tt=ne*$t-J*ee,ut=vt*J-bt*ne,Ot=ee*bt-$t*vt;if(s){if(tt<0||ut<0||Ot<0)return null}else if((tt<0||ut<0||Ot<0)&&(tt>0||ut>0||Ot>0))return null;let xt=tt+ut+Ot;if(xt===0)return null;let Gt=et*(tt*F+ut*H+Ot*Z);return(xt>0?Gt<0:Gt>0)?null:this.at(Gt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new ue,Bi=new mr,ua=new ws,Jh=new C,da=new C,fa=new C,pa=new C,$l=new C,ma=new C,$h=new C,ga=new C,de=class extends Ve{constructor(t=new Te,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&($l.fromBufferAttribute(d,t),a?ma.addScaledVector($l,h):ma.addScaledVector($l.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(ua.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ua,Jh)===null||Bi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=o.getX(v),R=o.getX(v+1),x=o.getX(v+2);s=_a(this,p,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=_a(this,a,t,n,c,h,d,S,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=v,R=v+1,x=v+2;s=_a(this,p,t,n,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,w=m+1,v=m+2;s=_a(this,a,t,n,c,h,d,S,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Of(i,t,e,n,s,r,a,o){let l;if(t.side===We?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ri,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:i}}function _a(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let h=Of(i,t,e,n,da,fa,pa,$h);if(h){let d=new C;ii.getBarycoord($h,da,fa,pa,d),s&&(h.uv=ii.getInterpolatedAttribute(s,o,l,c,d,new rt)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,l,c,d,new rt)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};ii.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var Fa=class extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zi=new ws,Bf=new rt(.5,.5),xa=new C,Rs=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,a=new In){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-S).normalize(),s[1].setComponents(c+a,f+h,p+g,E+S).normalize(),s[2].setComponents(c+o,f+d,p+y,E+w).normalize(),s[3].setComponents(c-o,f-d,p-y,E-w).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,E-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-v).normalize(),e===Pn)s[5].setComponents(c+l,f+u,p+m,E+v).normalize();else if(e===Ms)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Bf.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xa.x=s.normal.x>0?t.max.x:t.min.x,xa.y=s.normal.y>0?t.max.y:t.min.y,xa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends en{constructor(t=[],e=Ci,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_r=class extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ei=class extends en{constructor(t,e,n=Nn,s,r,a,o=Be,l=Be,c,h=Wn,d=1){if(h!==Wn&&h!==Pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Oa=class extends Ei{constructor(t,e=Nn,n=Ci,s,r,a=Be,o=Be,l,c=Wn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},we=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2));function g(y,m,p,S,w,v,E,b,R,x,T){let I=v/R,U=E/x,F=v/2,G=E/2,L=b/2,H=R+1,W=x+1,V=0,Z=0,X=new C;for(let K=0;K<W;K++){let et=K*U-G;for(let vt=0;vt<H;vt++){let bt=vt*I-F;X[y]=bt*S,X[m]=et*w,X[p]=L,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[p]=b>0?1:-1,h.push(X.x,X.y,X.z),d.push(vt/R),d.push(1-K/x),V+=1}}for(let K=0;K<x;K++)for(let et=0;et<R;et++){let vt=u+et+H*K,bt=u+et+H*(K+1),ee=u+(et+1)+H*(K+1),$t=u+(et+1)+H*K;l.push(vt,bt,$t),l.push(bt,ee,$t),Z+=6}o.addGroup(f,Z,T),f+=Z,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yr=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(o,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ie=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function S(){let v=new C,E=new C,b=0,R=(e-t)/n;for(let x=0;x<=r;x++){let T=[],I=x/r,U=I*(e-t)+t;for(let F=0;F<=s;F++){let G=F/s,L=G*l+o,H=Math.sin(L),W=Math.cos(L);E.x=U*H,E.y=-I*n+m,E.z=U*W,d.push(E.x,E.y,E.z),v.set(H,R,W).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-I),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let I=y[T][x],U=y[T+1][x],F=y[T+1][x+1],G=y[T][x+1];(t>0||T!==0)&&(h.push(I,U,G),b+=3),(e>0||T!==r-1)&&(h.push(U,F,G),b+=3)}c.addGroup(p,b,0),p+=b}function w(v){let E=g,b=new rt,R=new C,x=0,T=v===!0?t:e,I=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let U=g;for(let F=0;F<=s;F++){let L=F/s*l+o,H=Math.cos(L),W=Math.sin(L);R.x=T*W,R.y=m*I,R.z=T*H,d.push(R.x,R.y,R.z),u.push(0,I,0),b.x=H*.5+.5,b.y=W*.5*I+.5,f.push(b.x,b.y),g++}for(let F=0;F<s;F++){let G=E+F,L=U+F;v===!0?h.push(L,L+1,G):h.push(L+1,L,G),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class i extends ie{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vr=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new C,v=new C,E=new C;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],v),f(e[b+2],E),l(w,v,E,S)}function l(S,w,v,E){let b=E+1,R=[];for(let x=0;x<=b;x++){R[x]=[];let T=S.clone().lerp(v,x/b),I=w.clone().lerp(v,x/b),U=b-x;for(let F=0;F<=U;F++)F===0&&x===b?R[x][F]=T:R[x][F]=T.clone().lerp(I,F/U)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){let I=Math.floor(T/2);T%2===0?(u(R[x][I+1]),u(R[x+1][I]),u(R[x][I])):(u(R[x][I+1]),u(R[x+1][I+1]),u(R[x+1][I]))}}function c(S){let w=new C;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(S),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let S=new C;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(v,1-E)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let w=a[S+0],v=a[S+2],E=a[S+4],b=Math.max(w,v,E),R=Math.min(w,v,E);b>.9&&R<.1&&(w<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,w){let v=S*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){let S=new C,w=new C,v=new C,E=new C,b=new rt,R=new rt,x=new rt;for(let T=0,I=0;T<r.length;T+=9,I+=6){S.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),b.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),x.set(a[I+4],a[I+5]),E.copy(S).add(w).add(v).divideScalar(3);let U=m(E);y(b,I+0,S,U),y(R,I+2,w,U),y(x,I+4,v,U)}}function y(S,w,v,E){E<0&&S.x===1&&(a[w]=S.x-1),v.x===0&&v.z===0&&(a[w]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Cs=class i extends vr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ba=class extends Mr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Kh=new C,Qh=new C,Kl=new Dc,Ql=new Dc,jl=new Dc,za=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qh.subVectors(s[0],s[1]).add(s[0]),c=Qh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Kh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Kl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Ql.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),jl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ql.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),jl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Kl.calc(l),Ql.calc(l),jl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function jh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function zf(i,t){let e=1-i;return e*e*t}function Hf(i,t){return 2*(1-i)*i*t}function Gf(i,t){return i*i*t}function nr(i,t,e,n){return zf(i,t)+Hf(i,e)+Gf(i,n)}function kf(i,t){let e=1-i;return e*e*e*t}function Vf(i,t){let e=1-i;return 3*e*e*i*t}function Wf(i,t){return 3*(1-i)*i*i*t}function Xf(i,t){return i*i*i*t}function ir(i,t,e,n,s){return kf(i,t)+Vf(i,e)+Wf(i,n)+Xf(i,s)}var Ha=class extends yn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends yn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y),ir(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends yn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends yn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends yn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gi=class extends yn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y),nr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(jh(o,l.x,c.x,h.x,d.x),jh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},qf=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:za,CubicBezierCurve:Ha,CubicBezierCurve3:Ga,EllipseCurve:Mr,LineCurve:ka,LineCurve3:Va,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Gi,SplineCurve:Xa});var Is=class i extends Te{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,u=new rt,f=new C,g=new C,y=new C,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let S=0;S<=e;S++){let w=n+S*h*s,v=Math.sin(w),E=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*E,a.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),o.push(u.x,u.y);let R=l[3*b+0]*v,x=l[3*b+1],T=l[3*b+0]*E;c.push(R,x,T)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let v=w+S*t.length,E=v,b=v+t.length,R=v+t.length+1,x=v+1;r.push(E,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new Qt(a,3)),this.setAttribute("uv",new Qt(o,2)),this.setAttribute("normal",new Qt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Sr=class i extends vr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},on=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let w=0;w<c;w++){let v=w*d-r;g.push(v,-S,0),y.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let w=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),b=S+1+c*p;f.push(w,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ki=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new C,g=new rt;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let S=p+m,w=S,v=S+n+1,E=S+n+2,b=S+1;o.push(w,v,b),o.push(v,E,b)}}this.setIndex(o),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ae=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],w=p/n,v=a+w*o,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let T=x/e,I=s+T*r;d.x=-b*Math.cos(I),d.y=E,d.z=b*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+R,1-w),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=h[p][S+1],v=h[p][S],E=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&f.push(w,v,b),(p!==n-1||l<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(y,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ze=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,w=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,S,v),l.push(S,w,v)}this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var br=class i extends Te{constructor(t=new Gi(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new rt,h=new C,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(f,2));function y(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),S(),p()}function m(w){h=t.getPointAt(w/e,h);let v=a.normals[w],E=a.binormals[w];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,x=Math.sin(R),T=-Math.cos(R);l.x=T*v.x+x*E.x,l.y=T*v.y+x*E.y,l.z=T*v.z+x*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let E=(s+1)*(w-1)+(v-1),b=(s+1)*w+(v-1),R=(s+1)*w+v,x=(s+1)*(w-1)+v;g.push(E,b,x),g.push(b,R,x)}}function S(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new qf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(tu(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(tu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Yu={clone:Zi,merge:Je},Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ze=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},qa=class extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vn=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ya=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Za=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function tc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,S=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+S*a[c+E]+w*a[l+E]+v*a[d+E];return r}},$a=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ka=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qa=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,S=d[p],w=d[p+1],v=t*u+g*2,E=h[v],b=h[v+1],R=Kf(n,e,S,E,s);r[g]=Zu(R,y,w,b,m)}return r}};function Zu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $f(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Kf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Zu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=$f(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),tc(t.settings)&&(n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case sr:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return sr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return Ma;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;tc(this.settings)&&(eu(this.settings.inTangents,t),eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Nt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&yf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,tc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Pa;var wi=class extends fn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=sr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var to=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};to.prototype.ValueTypeName="number";var eo=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Er=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends fn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=sr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="vector";var io=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ju=new io,so=class{constructor(t){this.manager=t!==void 0?t:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};so.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Tr=class extends Ps{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ec=new ue,nu=new C,iu=new C,wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nu.setFromMatrixPosition(t.matrixWorld),e.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ya=new C,va=new tn,Gn=new C,Ar=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ya,va,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ya,va,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ya,va,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new C,su=new rt,ru=new rt,Ge=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,su,ru),e.subVectors(ru,su)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ac=class extends wr{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}},Ls=class extends Ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ds=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},oc=class extends wr{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vi=class extends Ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _s=-90,xs=1,ro=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(_s,xs,t,e);s.layers=this.layers,this.add(s);let r=new Ge(_s,xs,t,e);r.layers=this.layers,this.add(r);let a=new Ge(_s,xs,t,e);a.layers=this.layers,this.add(a);let o=new Ge(_s,xs,t,e);o.layers=this.layers,this.add(o);let l=new Ge(_s,xs,t,e);l.layers=this.layers,this.add(l);let c=new Ge(_s,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ao=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uc="\\[\\]\\.:\\/",Qf=new RegExp("["+Uc+"]","g"),Fc="[^"+Uc+"]",jf="[^"+Uc.replace("\\.","")+"]",tp=/((?:WC+[\/:])*)/.source.replace("WC",Fc),ep=/(WCOD+)?/.source.replace("WCOD",jf),np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fc),ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fc),sp=new RegExp("^"+tp+ep+np+ip+"$"),rp=["material","materials","bones","map"],lc=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(t){let e=sp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=lc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Jx=new Float32Array(1);var au=new ue,Rr=class{constructor(t,e,n=0,s=1/0){this.ray=new mr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return cc(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)cc(t[s],this,n,e);return n.sort(ou),n}};function ou(i,t){return i.distance-t.distance}function cc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)cc(r[a],t,e,!0)}}var hc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Oc(i,t,e,n){let s=ap(n);switch(e){case Rc:return i*t;case Ic:return i*t/s.components*s.byteLength;case po:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case mo:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case go:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case vo:return Math.max(i,16)*Math.max(t,8)/4;case _o:case yo:return Math.max(i,8)*Math.max(t,8)/2;case Mo:case So:case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Fr:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Go:case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ap(i){switch(i){case ln:case Ec:return{byteLength:1,components:1};case Fs:case Tc:case Fn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case Nn:case ho:case Un:return{byteLength:4,components:1};case wc:case Ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _d(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
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
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yp=`#ifdef USE_AOMAP
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
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ap=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bp=`vec3 transformedNormal = objectNormal;
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
#endif`,zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
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
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hm=`PhysicalMaterial material;
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
#endif`,um=`uniform sampler2D dfgLUT;
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
}`,dm=`
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
#endif`,fm=`#if defined( RE_IndirectDiffuse )
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
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fm=`#ifdef USE_NORMALMAP
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
#endif`,Om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o0=`#ifdef USE_TRANSMISSION
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
#endif`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p0=`uniform sampler2D t2D;
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,v0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,S0=`#define DISTANCE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`uniform float scale;
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
}`,w0=`uniform vec3 diffuse;
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
}`,A0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,P0=`#define MATCAP
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
}`,L0=`#define MATCAP
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
}`,D0=`#define NORMAL
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
}`,N0=`#define NORMAL
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
}`,U0=`#define PHONG
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
}`,F0=`#define PHONG
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
}`,O0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,H0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,W0=`uniform vec3 color;
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
}`,X0=`uniform float rotation;
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
}`,q0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:_p,alphatest_pars_fragment:xp,aomap_fragment:yp,aomap_pars_fragment:vp,batching_pars_vertex:Mp,batching_vertex:Sp,begin_vertex:bp,beginnormal_vertex:Ep,bsdfs:Tp,iridescence_fragment:wp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Pp,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Up,common:Fp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Bp,displacementmap_pars_vertex:zp,displacementmap_vertex:Hp,emissivemap_fragment:Gp,emissivemap_pars_fragment:kp,colorspace_fragment:Vp,colorspace_pars_fragment:Wp,envmap_fragment:Xp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Yp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:rm,envmap_vertex:Jp,fog_vertex:$p,fog_pars_vertex:Kp,fog_fragment:Qp,fog_pars_fragment:jp,gradientmap_pars_fragment:tm,lightmap_pars_fragment:em,lights_lambert_fragment:nm,lights_lambert_pars_fragment:im,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:om,lights_phong_fragment:lm,lights_phong_pars_fragment:cm,lights_physical_fragment:hm,lights_physical_pars_fragment:um,lights_fragment_begin:dm,lights_fragment_maps:fm,lights_fragment_end:pm,lightprobes_pars_fragment:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:ym,map_fragment:vm,map_pars_fragment:Mm,map_particle_fragment:Sm,map_particle_pars_fragment:bm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:Tm,morphinstance_vertex:wm,morphcolor_vertex:Am,morphnormal_vertex:Rm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Im,normal_fragment_begin:Pm,normal_fragment_maps:Lm,normal_pars_fragment:Dm,normal_pars_vertex:Nm,normal_vertex:Um,normalmap_pars_fragment:Fm,clearcoat_normal_fragment_begin:Om,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:Gm,packing:km,premultiplied_alpha_fragment:Vm,project_vertex:Wm,dithering_fragment:Xm,dithering_pars_fragment:qm,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:$m,shadowmap_vertex:Km,shadowmask_pars_fragment:Qm,skinbase_vertex:jm,skinning_pars_vertex:t0,skinning_vertex:e0,skinnormal_vertex:n0,specularmap_fragment:i0,specularmap_pars_fragment:s0,tonemapping_fragment:r0,tonemapping_pars_fragment:a0,transmission_fragment:o0,transmission_pars_fragment:l0,uv_pars_fragment:c0,uv_pars_vertex:h0,uv_vertex:u0,worldpos_vertex:d0,background_vert:f0,background_frag:p0,backgroundCube_vert:m0,backgroundCube_frag:g0,cube_vert:_0,cube_frag:x0,depth_vert:y0,depth_frag:v0,distance_vert:M0,distance_frag:S0,equirect_vert:b0,equirect_frag:E0,linedashed_vert:T0,linedashed_frag:w0,meshbasic_vert:A0,meshbasic_frag:R0,meshlambert_vert:C0,meshlambert_frag:I0,meshmatcap_vert:P0,meshmatcap_frag:L0,meshnormal_vert:D0,meshnormal_frag:N0,meshphong_vert:U0,meshphong_frag:F0,meshphysical_vert:O0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:G0,points_frag:k0,shadow_vert:V0,shadow_frag:W0,sprite_vert:X0,sprite_frag:q0},ft={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Jn={basic:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Je([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Je([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Je([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Ft(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Je([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Je([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Je([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Je([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Je([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Je([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Je([ft.lights,ft.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Jn.physical={uniforms:Je([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var $o={r:0,b:0,g:0},Y0=new ue,xd=new zt;xd.set(-1,0,0,0,1,0,0,0,1);function Z0(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(S){let w=!1,v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ir)?(c===void 0&&(c=new de(new we(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Zi(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xd),c.material.toneMapped=te.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new de(new on(2,2),new Ze({name:"BackgroundMaterial",uniforms:Zi(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB($o,Nc(i)),e.buffers.color.setClear($o.r,$o.g,$o.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function J0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,F,G,L,H){let W=!1,V=d(U,L,G,F);r!==V&&(r=V,c(r.object)),W=f(U,L,G,H),W&&g(U,L,G,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(U,F,G,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,F,G,L){let H=L.wireframe===!0,W=n[F.id];W===void 0&&(W={},n[F.id]=W);let V=U.isInstancedMesh===!0?U.id:0,Z=W[V];Z===void 0&&(Z={},W[V]=Z);let X=Z[G.id];X===void 0&&(X={},Z[G.id]=X);let K=X[H];return K===void 0&&(K=u(l()),X[H]=K),K}function u(U){let F=[],G=[],L=[];for(let H=0;H<e;H++)F[H]=0,G[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,F,G,L){let H=r.attributes,W=F.attributes,V=0,Z=G.getAttributes();for(let X in Z)if(Z[X].location>=0){let et=H[X],vt=W[X];if(vt===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(vt=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(vt=U.instanceColor)),et===void 0||et.attribute!==vt||vt&&et.data!==vt.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function g(U,F,G,L){let H={},W=F.attributes,V=0,Z=G.getAttributes();for(let X in Z)if(Z[X].location>=0){let et=W[X];et===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let vt={};vt.attribute=et,et&&et.data&&(vt.data=et.data),H[X]=vt,V++}r.attributes=H,r.attributesNum=V,r.index=L}function y(){let U=r.newAttributes;for(let F=0,G=U.length;F<G;F++)U[F]=0}function m(U){p(U,0)}function p(U,F){let G=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;G[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),H[U]!==F&&(i.vertexAttribDivisor(U,F),H[U]=F)}function S(){let U=r.newAttributes,F=r.enabledAttributes;for(let G=0,L=F.length;G<L;G++)F[G]!==U[G]&&(i.disableVertexAttribArray(G),F[G]=0)}function w(U,F,G,L,H,W,V){V===!0?i.vertexAttribIPointer(U,F,G,H,W):i.vertexAttribPointer(U,F,G,L,H,W)}function v(U,F,G,L){y();let H=L.attributes,W=G.getAttributes(),V=F.defaultAttributeValues;for(let Z in W){let X=W[Z];if(X.location>=0){let K=H[Z];if(K===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){let et=K.normalized,vt=K.itemSize,bt=t.get(K);if(bt===void 0)continue;let ee=bt.buffer,$t=bt.type,ne=bt.bytesPerElement,J=$t===i.INT||$t===i.UNSIGNED_INT||K.gpuType===ho;if(K.isInterleavedBufferAttribute){let tt=K.data,ut=tt.stride,Ot=K.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<X.locationSize;xt++)p(X.location+xt,tt.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<X.locationSize;xt++)m(X.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let xt=0;xt<X.locationSize;xt++)w(X.location+xt,vt/X.locationSize,$t,et,ut*ne,(Ot+vt/X.locationSize*xt)*ne,J)}else{if(K.isInstancedBufferAttribute){for(let tt=0;tt<X.locationSize;tt++)p(X.location+tt,K.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let tt=0;tt<X.locationSize;tt++)m(X.location+tt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let tt=0;tt<X.locationSize;tt++)w(X.location+tt,vt/X.locationSize,$t,et,vt*ne,vt/X.locationSize*tt*ne,J)}}else if(V!==void 0){let et=V[Z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}S()}function E(){T();for(let U in n){let F=n[U];for(let G in F){let L=F[G];for(let H in L){let W=L[H];for(let V in W)h(W[V].object),delete W[V];delete L[H]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let G in F){let L=F[G];for(let H in L){let W=L[H];for(let V in W)h(W[V].object),delete W[V];delete L[H]}}delete n[U.id]}function R(U){for(let F in n){let G=n[F];for(let L in G){let H=G[L];if(H[U.id]===void 0)continue;let W=H[U.id];for(let V in W)h(W[V].object),delete W[V];delete H[U.id]}}}function x(U){for(let F in n){let G=n[F],L=U.isInstancedMesh===!0?U.id:0,H=G[L];if(H!==void 0){for(let W in H){let V=H[W];for(let Z in V)h(V[Z].object),delete V[Z];delete H[W]}delete G[L],Object.keys(G).length===0&&delete n[F]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function $0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function K0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ln&&R!==Un&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:b}}function Q0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new In,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,w=S*4,v=p.clippingState||null;l.value=v,v=h(g,u,w,f);for(let E=0;E!==w;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==y;++w,v+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var zs=4,j0=6,tg=20,eg=256,Br=new Ds,$u=new Ft,Bc=null,zc=0,Hc=0,Gc=!1,ng=new C,Ji=new C,Qo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ng}=r;Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bc,zc,Hc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Fn,format:Mn,colorSpace:rr,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ig(r)),this._blurMaterial=rg(r,t,e),this._ggxMaterial=sg(r,t,e)}return s}_compileMaterial(t){let e=new de(new Te,t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,s,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($u),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new we,new an({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy($u),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;Bs(s,v*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ci||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Br)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-zs?n-g+zs:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Bs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Bs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Br)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-zs?s-this._lodMax+zs:0),u=4*(this._cubeSize-h);Bs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Br)}};function ig(i){let t=[],e=[],n=i,s=i-zs+1+j0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,w=p>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(v,f*u*p);for(let E=0;E<u;E++){let b=h[E*2]*2-1,R=h[E*2+1]*2-1;p===0?Ji.set(1,R,b):p===1?Ji.set(-b,1,-R):p===2?Ji.set(-b,R,1):p===3?Ji.set(-1,R,-b):p===4?Ji.set(-b,-1,R):Ji.set(b,R,-1),Ji.toArray(y,(p*u+E)*f)}}let m=new Te;m.setAttribute("position",new je(g,f)),m.setAttribute("outputDirection",new je(y,f)),e.push(new de(m,null)),n>zs&&n--}return{lodMeshes:e,sizeLods:t}}function Ku(i,t,e){let n=new rn(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function rg(i,t,e){return new Ze({name:"SphericalGaussianBlur",defines:{SAMPLES:tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Qu(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ju(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function el(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jo=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Yn});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=ke),new ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ag(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===oo||f===lo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new jo(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===oo||f===lo,y=f===Ci||f===Yi;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Qo(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Qo(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===oo?u.mapping=Ci:f===lo&&(u.mapping=Yi),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let w=0,v=S.length;w<v;w+=3){let E=S[w+0],b=S[w+1],R=S[w+2];u.push(E,b,b,R,R,E)}}else{let S=g.array;y=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let E=w+0,b=w+1,R=w+2;u.push(E,b,b,R,R,E)}}let m=new(g.count>=65535?fr:dr)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function cg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=o.attributes.position.count*w,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*d),R=new cr(b,v,E,d);R.type=Un,R.needsUpdate=!0;let x=w*4;for(let I=0;I<d;I++){let U=m[I],F=p[I],G=S[I],L=v*E*4*I;for(let H=0;H<U.count;H++){let W=H*x;f===!0&&(s.fromBufferAttribute(U,H),b[L+W+0]=s.x,b[L+W+1]=s.y,b[L+W+2]=s.z,b[L+W+3]=0),g===!0&&(s.fromBufferAttribute(F,H),b[L+W+4]=s.x,b[L+W+5]=s.y,b[L+W+6]=s.z,b[L+W+7]=0),y===!0&&(s.fromBufferAttribute(G,H),b[L+W+8]=s.x,b[L+W+9]=s.y,b[L+W+10]=s.z,b[L+W+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new rt(v,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function dg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var fg={[_c]:"LINEAR_TONE_MAPPING",[xc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Cr]:"ACES_FILMIC_TONE_MAPPING",[Mc]:"AGX_TONE_MAPPING",[Sc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function pg(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Te;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let h=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new de(c,h),u=new Ds(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],w=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let b=0;b<S.length;b++){let R=S[b];R.setSize&&R.setSize(v,E)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let E=a.width,b=a.height;S.length>0&&o===null&&(o=new rn(E,b,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(E,b,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let x=S[R];x.setSize&&x.setSize(E,b)}},this.begin=function(v,E){if(y||v.toneMapping===Dn&&S.length===0)return!1;if(p=E,E!==null){let b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return w},this.end=function(v,E){v.toneMapping=m,y=!0;let b=a,R=o;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(v,R,b,E),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},te.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let x=fg[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var yd=new en,Wc=new Ei(1,1),vd=new cr,Md=new Ua,Sd=new gr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),De(e,n)}}function vg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),De(e,n)}}function Mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),De(e,n)}}function Sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wc.compareFunction=e.isReversedDepthBuffer()?Jo:Zo,r=Wc):r=yd,e.setTexture2D(t||r,s)}function Pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Md,s)}function Lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sd,s)}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vd,s)}function Ng(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return xg;case 35674:return yg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return bg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(i,t){i.uniform1fv(this.addr,t)}function Fg(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Og(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Bg(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function zg(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hg(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gg(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kg(i,t){i.uniform1iv(this.addr,t)}function Vg(i,t){i.uniform2iv(this.addr,t)}function Wg(i,t){i.uniform3iv(this.addr,t)}function Xg(i,t){i.uniform4iv(this.addr,t)}function qg(i,t){i.uniform1uiv(this.addr,t)}function Yg(i,t){i.uniform2uiv(this.addr,t)}function Zg(i,t){i.uniform3uiv(this.addr,t)}function Jg(i,t){i.uniform4uiv(this.addr,t)}function $g(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wc:a=yd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Kg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Md,r[a])}function Qg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Sd,r[a])}function jg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vd,r[a])}function t_(i){switch(i){case 5126:return Ug;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return jg}}var Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ng(e.type)}},qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},kc=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function e_(i,t,e){let n=i.name,s=n.length;for(kc.lastIndex=0;;){let r=kc.exec(n),a=kc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rd(e,c===void 0?new Xc(o,i,t):new qc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Yc(o),rd(e,d)),e=d}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);e_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ad(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var n_=37297,i_=0;function s_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var od=new zt;function r_(i){te._getMatrix(od,te.workingColorSpace,i);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ar:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+s_(i.getShaderSource(t),o)}else return r}function a_(i,t){let e=r_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var o_={[_c]:"Linear",[xc]:"Reinhard",[yc]:"Cineon",[Cr]:"ACESFilmic",[Mc]:"AgX",[Sc]:"Neutral",[vc]:"Custom"};function l_(i,t){let e=o_[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ko=new C;function c_(){te.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function u_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hr(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(f_,m_)}var p_=new Map;function m_(i,t){let e=qt[t];if(e===void 0){let n=p_.get(t);if(n!==void 0)e=qt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Zc(e)}var g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(g_,__)}function __(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var x_={[Wi]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function y_(i){return x_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v_={[Ci]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"};function M_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":v_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var S_={[Yi]:"ENVMAP_MODE_REFRACTION"};function b_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[gc]:"ENVMAP_BLENDING_MULTIPLY",[Cu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E_[i.combine]||"ENVMAP_BLENDING_NONE"}function w_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function A_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=y_(e),c=M_(e),h=b_(e),d=T_(e),u=w_(e),f=h_(e),g=u_(r),y=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),a=Zc(a),a=cd(a,e),a=hd(a,e),o=Zc(o),o=cd(o,e),o=hd(o,e),a=ud(a),o=ud(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+m+a,v=S+p+o,E=ad(s,s.VERTEX_SHADER,w),b=ad(s,s.FRAGMENT_SHADER,v);s.attachShader(y,E),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(U){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",G=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(b)||"",H=F.trim(),W=G.trim(),V=L.trim(),Z=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,E,b);else{let K=ld(s,E,"vertex"),et=ld(s,b,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+H+`
`+K+`
`+et)}else H!==""?Ut("WebGLProgram: Program Info Log:",H):(W===""||V==="")&&(X=!1);X&&(U.diagnostics={runnable:Z,programLog:H,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new Hs(s,y),T=d_(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,n_)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=b,this}var R_=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new $c(t),e.set(t,n)),n}},$c=class{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}};function C_(i){return i===Li||i===Fr||i===Or}function I_(i,t,e,n,s,r){let a=new Es,o=new Jc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,I,U,F,G){let L=U.fog,H=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||W,V),X=Z&&Z.mapping===Ir?Z.image.height:null,K=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ut("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=et!==void 0?et.length:0,bt=0;H.morphAttributes.position!==void 0&&(bt=1),H.morphAttributes.normal!==void 0&&(bt=2),H.morphAttributes.color!==void 0&&(bt=3);let ee,$t,ne,J;if(K){let _e=Jn[K];ee=_e.vertexShader,$t=_e.fragmentShader}else{ee=x.vertexShader,$t=x.fragmentShader;let _e=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,_e,le),ne=_e.id,J=le.id}let tt=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,Gt=!!x.map,Ee=!!x.matcap,Bt=!!Z,jt=!!x.aoMap,oe=!!x.lightMap,Yt=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,Re=!!x.displacementMap,He=!!x.emissiveMap,mt=!!x.metalnessMap,Mt=!!x.roughnessMap,P=x.anisotropy>0,Wt=x.clearcoat>0,Ht=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,k=x.transmission>0,Y=P&&!!x.anisotropyMap,st=Wt&&!!x.clearcoatMap,at=Wt&&!!x.clearcoatNormalMap,$=Wt&&!!x.clearcoatRoughnessMap,j=_&&!!x.iridescenceMap,ot=_&&!!x.iridescenceThicknessMap,It=O&&!!x.sheenColorMap,dt=O&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Pt=!!x.specularColorMap,Dt=!!x.specularIntensityMap,kt=k&&!!x.transmissionMap,N=k&&!!x.thicknessMap,ct=!!x.gradientMap,Q=!!x.alphaMap,ht=x.alphaTest>0,_t=!!x.alphaHash,nt=!!x.extensions,Lt=Dn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let At={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:ee,fragmentShader:$t,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:Ee,envMap:Bt,envMapMode:Bt&&Z.mapping,envMapCubeUVHeight:X,aoMap:jt,lightMap:oe,bumpMap:Yt,normalMap:fe,displacementMap:Re,emissiveMap:He,normalMapObjectSpace:fe&&x.normalMapType===Du,normalMapTangentSpace:fe&&x.normalMapType===Yo,packedNormalMap:fe&&x.normalMapType===Yo&&C_(x.normalMap.format),metalnessMap:mt,roughnessMap:Mt,anisotropy:P,anisotropyMap:Y,clearcoat:Wt,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:$,dispersion:Ht,retroreflection:A,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:It,sheenRoughnessMap:dt,specularMap:lt,specularColorMap:Pt,specularIntensityMap:Dt,transmission:k,transmissionMap:kt,thicknessMap:N,gradientMap:ct,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ht,alphaHash:_t,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:jt&&g(x.aoMap.channel),lightMapUv:oe&&g(x.lightMap.channel),bumpMapUv:Yt&&g(x.bumpMap.channel),normalMapUv:fe&&g(x.normalMap.channel),displacementMapUv:Re&&g(x.displacementMap.channel),emissiveMapUv:He&&g(x.emissiveMap.channel),metalnessMapUv:mt&&g(x.metalnessMap.channel),roughnessMapUv:Mt&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:st&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(x.sheenRoughnessMap.channel),specularMapUv:lt&&g(x.specularMap.channel),specularColorMapUv:Pt&&g(x.specularColorMap.channel),specularIntensityMapUv:Dt&&g(x.specularIntensityMap.channel),transmissionMapUv:kt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(fe||P),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Gt||Q),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ae,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=f[x.type],I;if(T){let U=Jn[T];I=Yu.clone(U.uniforms)}else I=x.uniforms;return I}function v(x,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new A_(i,T,x,s),c.push(I),h.set(T,I)),I}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function P_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let w=o(u,f,g,y,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,y,m,p){let S=o(u,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||L_),n.length>1&&n.sort(f||fd),s.length>1&&s.sort(f||fd)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function D_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pd,i.set(n,[a])):s>=r.length?(a=new pd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function N_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F_=0;function O_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i){let t=new N_,e=U_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ue,a=new ue;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,w=0,v=0,E=0,b=0,R=0,x=0,T=0,I=0;c.sort(O_);for(let F=0,G=c.length;F<G;F++){let L=c[F],H=L.color,W=L.intensity,V=L.distance,Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Li?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*W,d+=H.g*W,u+=H.b*W;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],W);I++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=Z;let vt=K.getViewportCount();for(let bt=0;bt<vt;bt++)n.sunShadowMatrix[y+bt]=K.getMatrix(bt),n.sunShadowCascade[y+bt]=K._cascadeData[bt];y+=vt,g++}n.sun[f]=X,f++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=X,m++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(H).multiplyScalar(W),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[S]=X;let K=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,K.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[S]=K.matrix,L.castShadow){let et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=Z,R++}S++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(H).multiplyScalar(W),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=X,w++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,et=e.get(L);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=Z,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=X,p++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(W),X.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[v]=X,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==S||U.rectAreaLength!==w||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==E||U.numPointShadows!==b||U.numSpotShadows!==R||U.numSpotMaps!==x||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=S,U.rectAreaLength=w,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=E,U.numPointShadows=b,U.numSpotShadows=R,U.numSpotMaps=x,U.numLightProbes=I,n.version=F_++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(v.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function md(i){let t=new B_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function z_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new md(i),t.set(s,[o])):r>=a.length?(o=new md(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`,k_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],V_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],gd=new ue,zr=new C,Vc=new C;function W_(i,t,e){let n=new Rs,s=new rt,r=new rt,a=new Se,o=new Ya,l=new Za,c={},h=e.maxTextureSize,d={[Ri]:We,[We]:Ri,[Ae]:Ae},u=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new de(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===hu&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=b.length;L<H;L++){let W=b[L],V=W.shadow;if(V===void 0){Ut("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Z=V.getFrameExtents();s.multiply(Z),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,V.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ns){if(W.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new rn(s.x,s.y,{format:Li,type:Fn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Ei(s.x,s.y,Un),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Wn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be}else W.isPointLight?(V.map=new jo(s.x),V.map.depthTexture=new Oa(s.x,Nn)):(V.map=new rn(s.x,s.y),V.map.depthTexture=new Ei(s.x,s.y,Nn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Wn,this.type===Wi?(V.map.depthTexture.compareFunction=X?Jo:Zo,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,x);for(let et=0;et<K;et++){let vt=V.getCamera(et);if(W.isPointLight){let bt=V.camera,ee=V.matrix,$t=W.distance||bt.far;$t!==bt.far&&(bt.far=$t,bt.updateProjectionMatrix()),zr.setFromMatrixPosition(W.matrixWorld),bt.position.copy(zr),Vc.copy(bt.position),Vc.add(k_[et]),bt.up.copy(V_[et]),bt.lookAt(Vc),bt.updateMatrixWorld(),ee.makeTranslation(-zr.x,-zr.y,-zr.z),gd.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(gd,bt.coordinateSystem,bt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,et),i.clear();else{et===0&&(i.setRenderTarget(V.map),i.clear());let bt=V.getViewport(et);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),F.viewport(a)}n=V.getFrustum(et),v(R,x,vt,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ns&&S(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,U)};function S(b,R){let x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new rn(s.x,s.y,{format:Li,type:Fn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,x,f,y,null)}function w(b,R,x,T){let I=null,U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)I=U;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=I.uuid,G=R.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let H=L[G];H===void 0&&(H=I.clone(),L[G]=H,R.addEventListener("dispose",E)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,T===Ns?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=x}return I}function v(b,R,x,T,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===Ns)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let G=t.update(b),L=b.material;if(Array.isArray(L)){let H=G.groups;for(let W=0,V=H.length;W<V;W++){let Z=H[W],X=L[Z.materialIndex];if(X&&X.visible){let K=w(b,X,T,I);b.onBeforeShadow(i,b,R,x,G,K,Z),i.renderBufferDirect(x,null,G,K,b,Z),b.onAfterShadow(i,b,R,x,G,K,Z)}}}else if(L.visible){let H=w(b,L,T,I);b.onBeforeShadow(i,b,R,x,G,H,null),i.renderBufferDirect(x,null,G,H,b,null),b.onAfterShadow(i,b,R,x,G,H,null)}}let F=b.children;for(let G=0,L=F.length;G<L;G++)v(F[G],R,x,T,I)}function E(b){b.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function X_(i,t){function e(){let N=!1,ct=new Se,Q=null,ht=new Se(0,0,0,0);return{setMask:function(_t){Q!==_t&&!N&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){N=_t},setClear:function(_t,nt,Lt,At,_e){_e===!0&&(_t*=At,nt*=At,Lt*=At),ct.set(_t,nt,Lt,At),ht.equals(ct)===!1&&(i.clearColor(_t,nt,Lt,At),ht.copy(ct))},reset:function(){N=!1,Q=null,ht.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,Q=null,ht=null,_t=null;return{setReversed:function(nt){if(ct!==nt){let Lt=t.get("EXT_clip_control");nt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;let At=_t;_t=null,this.setClear(At)}},getReversed:function(){return ct},setTest:function(nt){nt?tt(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(nt){Q!==nt&&!N&&(i.depthMask(nt),Q=nt)},setFunc:function(nt){if(ct&&(nt=Wu[nt]),ht!==nt){switch(nt){case ba:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Aa:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=nt}},setLocked:function(nt){N=nt},setClear:function(nt){_t!==nt&&(_t=nt,ct&&(nt=1-nt),i.clearDepth(nt))},reset:function(){N=!1,Q=null,ht=null,_t=null,ct=!1}}}function s(){let N=!1,ct=null,Q=null,ht=null,_t=null,nt=null,Lt=null,At=null,_e=null;return{setTest:function(le){N||(le?tt(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(le){ct!==le&&!N&&(i.stencilMask(le),ct=le)},setFunc:function(le,wn,zn){(Q!==le||ht!==wn||_t!==zn)&&(i.stencilFunc(le,wn,zn),Q=le,ht=wn,_t=zn)},setOp:function(le,wn,zn){(nt!==le||Lt!==wn||At!==zn)&&(i.stencilOp(le,wn,zn),nt=le,Lt=wn,At=zn)},setLocked:function(le){N=le},setClear:function(le){_e!==le&&(i.clearStencil(le),_e=le)},reset:function(){N=!1,ct=null,Q=null,ht=null,_t=null,nt=null,Lt=null,At=null,_e=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,w=null,v=null,E=null,b=null,R=null,x=new Ft(0,0,0),T=0,I=!1,U=null,F=null,G=null,L=null,H=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=Z>=2);let K=null,et={},vt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),ee=new Se().fromArray(vt),$t=new Se().fromArray(bt);function ne(N,ct,Q,ht){let _t=new Uint8Array(4),nt=i.createTexture();i.bindTexture(N,nt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Q;Lt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ct+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return nt}let J={};J[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(vs),Yt(!1),fe(uc),tt(i.CULL_FACE),jt(Yn);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ut(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ot(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(N,ct){let Q=g,ht=!1;if(N){Q=f.get(ct),Q===void 0&&(Q=[],f.set(ct,Q));let _t=N.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Lt=_t.length;nt<Lt;nt++)Q[nt]=i.COLOR_ATTACHMENT0+nt;Q.length=_t.length,ht=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Q)}function Gt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let Ee={[qi]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[fu]:i.FUNC_REVERSE_SUBTRACT};Ee[pu]=i.MIN,Ee[mu]=i.MAX;let Bt={[gu]:i.ZERO,[_u]:i.ONE,[xu]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[Su]:i.DST_COLOR,[vu]:i.DST_ALPHA,[yu]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Mu]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[Au]:i.CONSTANT_ALPHA,[Ru]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(N,ct,Q,ht,_t,nt,Lt,At,_e,le){if(N===Yn){m===!0&&(ut(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),N!==uu){if(N!==p||le!==I){if((S!==qi||E!==qi)&&(i.blendEquation(i.FUNC_ADD),S=qi,E=qi),le)switch(N){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",N);break}else switch(N){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",N);break}w=null,v=null,b=null,R=null,x.set(0,0,0),T=0,p=N,I=le}return}_t=_t||ct,nt=nt||Q,Lt=Lt||ht,(ct!==S||_t!==E)&&(i.blendEquationSeparate(Ee[ct],Ee[_t]),S=ct,E=_t),(Q!==w||ht!==v||nt!==b||Lt!==R)&&(i.blendFuncSeparate(Bt[Q],Bt[ht],Bt[nt],Bt[Lt]),w=Q,v=ht,b=nt,R=Lt),(At.equals(x)===!1||_e!==T)&&(i.blendColor(At.r,At.g,At.b,_e),x.copy(At),T=_e),p=N,I=!1}function oe(N,ct){N.side===Ae?ut(i.CULL_FACE):tt(i.CULL_FACE);let Q=N.side===We;ct&&(Q=!Q),Yt(Q),N.blending===Us&&N.transparent===!1?jt(Yn):jt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ht=N.stencilWrite;o.setTest(ht),ht&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function fe(N){N!==lu?(tt(i.CULL_FACE),N!==F&&(N===uc?i.cullFace(i.BACK):N===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),F=N}function Re(N){N!==G&&(V&&i.lineWidth(N),G=N)}function He(N,ct,Q){N?(tt(i.POLYGON_OFFSET_FILL),(L!==ct||H!==Q)&&(L=ct,H=Q,a.getReversed()&&(ct=-ct),i.polygonOffset(ct,Q))):ut(i.POLYGON_OFFSET_FILL)}function mt(N){N?tt(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Mt(N){N===void 0&&(N=i.TEXTURE0+W-1),K!==N&&(i.activeTexture(N),K=N)}function P(N,ct,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+W-1:Q=K);let ht=et[Q];ht===void 0&&(ht={type:void 0,texture:void 0},et[Q]=ht),(ht.type!==N||ht.texture!==ct)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(N,ct||J[N]),ht.type=N,ht.texture=ct)}function Wt(){let N=et[K];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function st(){try{i.texStorage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function at(){try{i.texStorage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function $(){try{i.texImage2D(...arguments)}catch(N){Nt("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){Nt("WebGLState:",N)}}function ot(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function It(N,ct){d[N]!==ct&&(i.pixelStorei(N,ct),d[N]=ct)}function dt(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function lt(N){$t.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$t.copy(N))}function Pt(N,ct){let Q=c.get(ct);Q===void 0&&(Q=new WeakMap,c.set(ct,Q));let ht=Q.get(N);ht===void 0&&(ht=i.getUniformBlockIndex(ct,N.name),Q.set(N,ht))}function Dt(N,ct){let ht=c.get(ct).get(N);l.get(ct)!==ht&&(i.uniformBlockBinding(ct,ht,N.__bindingPointIndex),l.set(ct,ht))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,et={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,w=null,v=null,E=null,b=null,R=null,x=new Ft(0,0,0),T=0,I=!1,U=null,F=null,G=null,L=null,H=null,ee.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:ut,bindFramebuffer:Ot,drawBuffers:xt,useProgram:Gt,setBlending:jt,setMaterial:oe,setFlipSided:Yt,setCullFace:fe,setLineWidth:Re,setPolygonOffset:He,setScissorTest:mt,activeTexture:Mt,bindTexture:P,unbindTexture:Wt,compressedTexImage2D:Ht,compressedTexImage3D:A,texImage2D:$,texImage3D:j,pixelStorei:It,getParameter:ot,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:dt,viewport:lt,reset:kt}}function q_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):or("canvas")}function m(A,_,O){let k=1,Y=Ht(A);if((Y.width>O||Y.height>O)&&(k=O/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(k*Y.width),at=Math.floor(k*Y.height);u===void 0&&(u=y(st,at));let $=_?y(st,at):u;return $.width=st,$.height=at,$.getContext("2d").drawImage(A,0,0,st,at),Ut("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+at+")."),$}else return"data"in A&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,O,k,Y,st=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;k&&(at=t.get("EXT_texture_norm16"),at||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&at&&($=at.R16_EXT),O===i.SHORT&&at&&($=at.R16_SNORM_EXT)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),_===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&at&&($=at.RG16_EXT),O===i.SHORT&&at&&($=at.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_SHORT&&at&&($=at.RGB16_EXT),O===i.SHORT&&at&&($=at.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){let j=st?ar:te.getTransfer(Y);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=j===he?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&at&&($=at.RGBA16_EXT),O===i.SHORT&&at&&($=at.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(A,_){let O;return A?_===null||_===Nn||_===Os?O=i.DEPTH24_STENCIL8:_===Un?O=i.DEPTH32F_STENCIL8:_===Fs&&(O=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nn||_===Os?O=i.DEPTH_COMPONENT24:_===Un?O=i.DEPTH_COMPONENT32F:_===Fs&&(O=i.DEPTH_COMPONENT16),O}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==ke?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),U(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let O=A.source,k=f.get(O);if(k){let Y=k[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&I(A),Object.keys(k).length===0&&f.delete(O)}n.remove(A)}function I(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let O=A.source,k=f.get(O);delete k[_.__cacheKey],a.memory.textures--}function U(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Y=0;Y<_.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let k=0,Y=O.length;k<Y;k++){let st=n.get(O[k]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[k])}n.remove(A)}let F=0;function G(){F=0}function L(){return F}function H(A){F=A}function W(){let A=F;return A>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function V(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Z(A,_){let O=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let k=A.image;if(k===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ut(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function K(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){ut(O,A,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function et(A,_){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ot(O,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let vt={[Si]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},bt={[Be]:i.NEAREST,[Pu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[co]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ee={[Uu]:i.NEVER,[Hu]:i.ALWAYS,[Fu]:i.LESS,[Zo]:i.LEQUAL,[Ou]:i.EQUAL,[Jo]:i.GEQUAL,[Bu]:i.GREATER,[zu]:i.NOTEQUAL};function $t(A,_){if(_.type===Un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ke||_.magFilter===co||_.magFilter===Pr||_.magFilter===Ii||_.minFilter===ke||_.minFilter===co||_.minFilter===Pr||_.minFilter===Ii)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,vt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,vt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,vt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,bt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,bt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ee[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==Pr&&_.minFilter!==Ii||_.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ne(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let k=_.source,Y=f.get(k);Y===void 0&&(Y={},f.set(k,Y));let st=V(_);if(st!==A.__cacheKey){Y[st]===void 0&&(Y[st]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Y[st].usedTimes++;let at=Y[A.__cacheKey];at!==void 0&&(Y[A.__cacheKey].usedTimes--,at.usedTimes===0&&I(_)),A.__cacheKey=st,A.__webglTexture=Y[st].texture}return O}function J(A,_,O){return Math.floor(Math.floor(A/O)/_)}function tt(A,_,O,k){let st=A.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,k,_.data);else{st.sort((It,dt)=>It.start-dt.start);let at=0;for(let It=1;It<st.length;It++){let dt=st[at],lt=st[It],Pt=dt.start+dt.count,Dt=J(lt.start,_.width,4),kt=J(dt.start,_.width,4);lt.start<=Pt+1&&Dt===kt&&J(lt.start+lt.count-1,_.width,4)===Dt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++at,st[at]=lt)}st.length=at+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let It=0,dt=st.length;It<dt;It++){let lt=st[It],Pt=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),kt=Pt%_.width,N=Math.floor(Pt/_.width),ct=Dt,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,kt,N,ct,Q,O,k,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function ut(A,_,O){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let Y=ne(A,_),st=_.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+O);let at=n.get(st);if(st.version!==at.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=te.getPrimaries(te.workingColorSpace),ht=_.colorSpace===ai?null:te.getPrimaries(_.colorSpace),_t=_.colorSpace===ai||Q===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=Wt(_,j);let ot=r.convert(_.format,_.colorSpace),It=r.convert(_.type),dt=v(_.internalFormat,ot,It,_.normalized,_.colorSpace,_.isVideoTexture);$t(k,_);let lt,Pt=_.mipmaps,Dt=_.isVideoTexture!==!0,kt=at.__version===void 0||Y===!0,N=st.dataReady,ct=b(_,j);if(_.isDepthTexture)dt=E(_.format===Pi,_.type),kt&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,dt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,ot,It,null));else if(_.isDataTexture)if(Pt.length>0){Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,Pt[0].width,Pt[0].height);for(let Q=0,ht=Pt.length;Q<ht;Q++)lt=Pt[Q],Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,It,lt.data):e.texImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,ot,It,lt.data);_.generateMipmaps=!1}else Dt?(kt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,j.width,j.height),N&&tt(_,j,ot,It)):e.texImage2D(i.TEXTURE_2D,0,dt,j.width,j.height,0,ot,It,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,dt,Pt[0].width,Pt[0].height,j.depth);for(let Q=0,ht=Pt.length;Q<ht;Q++)if(lt=Pt[Q],_.format!==Mn)if(ot!==null)if(Dt){if(N)if(_.layerUpdates.size>0){let _t=Oc(lt.width,lt.height,_.format,_.type);for(let nt of _.layerUpdates){let Lt=lt.data.subarray(nt*_t/lt.data.BYTES_PER_ELEMENT,(nt+1)*_t/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,nt,lt.width,lt.height,1,ot,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,j.depth,ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,dt,lt.width,lt.height,j.depth,0,lt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,lt.width,lt.height,j.depth,ot,It,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,dt,lt.width,lt.height,j.depth,0,ot,It,lt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Dt&&kt&&e.texStorage2D(i.TEXTURE_2D,ct,dt,Pt[0].width,Pt[0].height);for(let Q=0,ht=Pt.length;Q<ht;Q++)lt=Pt[Q],_.format!==Mn?ot!==null?Dt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,lt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt.width,lt.height,ot,It,lt.data):e.texImage2D(i.TEXTURE_2D,Q,dt,lt.width,lt.height,0,ot,It,lt.data)}else if(_.isDataArrayTexture)if(Dt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,dt,j.width,j.height,j.depth),N)if(_.layerUpdates.size>0){let Q=Oc(j.width,j.height,_.format,_.type);for(let ht of _.layerUpdates){let _t=j.data.subarray(ht*Q/j.data.BYTES_PER_ELEMENT,(ht+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,j.width,j.height,1,ot,It,_t)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ot,It,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,dt,j.width,j.height,j.depth,0,ot,It,j.data);else if(_.isData3DTexture)Dt?(kt&&e.texStorage3D(i.TEXTURE_3D,ct,dt,j.width,j.height,j.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ot,It,j.data)):e.texImage3D(i.TEXTURE_3D,0,dt,j.width,j.height,j.depth,0,ot,It,j.data);else if(_.isFramebufferTexture){if(kt)if(Dt)e.texStorage2D(i.TEXTURE_2D,ct,dt,j.width,j.height);else{let Q=j.width,ht=j.height;for(let _t=0;_t<ct;_t++)e.texImage2D(i.TEXTURE_2D,_t,dt,Q,ht,0,ot,It,null),Q>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(_),Q.onpaint=ht=>{let _t=ht.changedElements;for(let nt of d)_t.includes(nt.image)&&(nt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let _t=i.RGBA,nt=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,nt,Lt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Dt&&kt){let Q=Ht(Pt[0]);e.texStorage2D(i.TEXTURE_2D,ct,dt,Q.width,Q.height)}for(let Q=0,ht=Pt.length;Q<ht;Q++)lt=Pt[Q],Dt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot,It,lt):e.texImage2D(i.TEXTURE_2D,Q,dt,ot,It,lt);_.generateMipmaps=!1}else if(Dt){if(kt){let Q=Ht(j);e.texStorage2D(i.TEXTURE_2D,ct,dt,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,It,j)}else e.texImage2D(i.TEXTURE_2D,0,dt,ot,It,j);p(_)&&S(k),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ot(A,_,O){if(_.image.length!==6)return;let k=ne(A,_),Y=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let st=n.get(Y);if(Y.version!==st.__version||k===!0){e.activeTexture(i.TEXTURE0+O);let at=te.getPrimaries(te.workingColorSpace),$=_.colorSpace===ai?null:te.getPrimaries(_.colorSpace),j=_.colorSpace===ai||at===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ot=_.isCompressedTexture||_.image[0].isCompressedTexture,It=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let nt=0;nt<6;nt++)!ot&&!It?dt[nt]=m(_.image[nt],!0,s.maxCubemapSize):dt[nt]=It?_.image[nt].image:_.image[nt],dt[nt]=Wt(_,dt[nt]);let lt=dt[0],Pt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),kt=v(_.internalFormat,Pt,Dt,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ct=st.__version===void 0||k===!0,Q=Y.dataReady,ht=b(_,lt);$t(i.TEXTURE_CUBE_MAP,_);let _t;if(ot){N&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,lt.width,lt.height);for(let nt=0;nt<6;nt++){_t=dt[nt].mipmaps;for(let Lt=0;Lt<_t.length;Lt++){let At=_t[Lt];_.format!==Mn?Pt!==null?N?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,kt,At.width,At.height,0,At.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,0,0,At.width,At.height,Pt,Dt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt,kt,At.width,At.height,0,Pt,Dt,At.data)}}}else{if(_t=_.mipmaps,N&&ct){_t.length>0&&ht++;let nt=Ht(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(It){N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,dt[nt].width,dt[nt].height,Pt,Dt,dt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,dt[nt].width,dt[nt].height,0,Pt,Dt,dt[nt].data);for(let Lt=0;Lt<_t.length;Lt++){let _e=_t[Lt].image[nt].image;N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,_e.width,_e.height,Pt,Dt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,kt,_e.width,_e.height,0,Pt,Dt,_e.data)}}else{N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Pt,Dt,dt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,kt,Pt,Dt,dt[nt]);for(let Lt=0;Lt<_t.length;Lt++){let At=_t[Lt];N?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,0,0,Pt,Dt,At.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Lt+1,kt,Pt,Dt,At.image[nt])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),st.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xt(A,_,O,k,Y,st){let at=r.convert(O.format,O.colorSpace),$=r.convert(O.type),j=v(O.internalFormat,at,$,O.normalized,O.colorSpace),ot=n.get(_),It=n.get(O);if(It.__renderTarget=_,!ot.__hasExternalTextures){let dt=Math.max(1,_.width>>st),lt=Math.max(1,_.height>>st);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,st,j,dt,lt,_.depth,0,at,$,null):e.texImage2D(Y,st,j,dt,lt,0,at,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,It.__webglTexture,0,mt(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,It.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let k=_.depthTexture,Y=k&&k.isDepthTexture?k.type:null,st=E(_.stencilBuffer,Y),at=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(_),st,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(_),st,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,st,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,A)}else{let k=_.textures;for(let Y=0;Y<k.length;Y++){let st=k[Y],at=r.convert(st.format,st.colorSpace),$=r.convert(st.type),j=v(st.internalFormat,at,$,st.normalized,st.colorSpace);Mt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(_),j,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(A,_,O){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(i.TEXTURE_CUBE_MAP,_.depthTexture);let ot=r.convert(_.depthTexture.format),It=r.convert(_.depthTexture.type),dt;_.depthTexture.format===Wn?dt=i.DEPTH_COMPONENT24:_.depthTexture.format===Pi&&(dt=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,dt,_.width,_.height,0,ot,It,null)}}else Z(_.depthTexture,0);let st=Y.__webglTexture,at=mt(_),$=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,j=_.depthTexture.format===Pi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,st,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,st,0);else if(_.depthTexture.format===Pi)Mt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,st,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(A){let _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=k}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Ee(_.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?Ee(_.__webglFramebuffer[0],A,0):Ee(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Gt(_.__webglDepthbuffer[k],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,st)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Gt(_.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(A,_,O){let k=n.get(A);_!==void 0&&xt(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Bt(A)}function oe(A){let _=A.texture,O=n.get(A),k=n.get(_);A.addEventListener("dispose",x);let Y=A.textures,st=A.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[$][j]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(at)for(let $=0,j=Y.length;$<j;$++){let ot=n.get(Y[$]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Mt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){let j=Y[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let ot=r.convert(j.format,j.colorSpace),It=r.convert(j.type),dt=v(j.internalFormat,ot,It,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),lt=mt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,dt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),$t(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xt(O.__webglFramebuffer[$][j],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else xt(O.__webglFramebuffer[$],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let $=0,j=Y.length;$<j;$++){let ot=Y[$],It=n.get(ot),dt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,It.__webglTexture),$t(dt,ot),xt(O.__webglFramebuffer,A,ot,i.COLOR_ATTACHMENT0+$,dt,0),p(ot)&&S(dt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,k.__webglTexture),$t($,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xt(O.__webglFramebuffer[j],A,_,i.COLOR_ATTACHMENT0,$,j);else xt(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,$,0);p(_)&&S($),e.unbindTexture()}A.depthBuffer&&Bt(A)}function Yt(A){let _=A.textures;for(let O=0,k=_.length;O<k;O++){let Y=_[O];if(p(Y)){let st=w(A),at=n.get(Y).__webglTexture;e.bindTexture(st,at),S(st),e.unbindTexture()}}}let fe=[],Re=[];function He(A){if(A.samples>0){if(Mt(A)===!1){let _=A.textures,O=A.width,k=A.height,Y=i.COLOR_BUFFER_BIT,st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(A),$=_.length>1;if($)for(let ot=0;ot<_.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let j=A.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let It=n.get(_[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,O,k,0,0,O,k,Y,i.NEAREST),l===!0&&(fe.length=0,Re.length=0,fe.push(i.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(fe.push(st),Re.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ot=0;ot<_.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let It=n.get(_[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function Mt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Wt(A,_){let O=A.colorSpace,k=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==rr&&O!==ai&&(te.getTransfer(O)===he?(k!==Mn||Y!==ln)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",O)),_}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=H,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=jt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Y_(i,t){function e(n,s=ai){let r,a=te.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ac)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===ho)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===Rc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===Mn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Pi)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===po)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===mo)return i.RG_INTEGER;if(n===go)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===xo||n===yo||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===bo||n===Eo||n===To||n===Fr||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===So)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===ko||n===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===Xo||n===Or||n===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ze({vertexShader:Z_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Kc,p={},S=e.getContextAttributes(),w=null,v=null,E=[],b=[],R=new rt,x=null,T=null,I=new Ge;I.viewport=new Se;let U=new Ge;U.viewport=new Se;let F=[I,U],G=new ao,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=E[J];return tt===void 0&&(tt=new Ts,E[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=E[J];return tt===void 0&&(tt=new Ts,E[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=E[J];return tt===void 0&&(tt=new Ts,E[J]=tt),tt.getHandSpace()};function W(J){let tt=b.indexOf(J.inputSource);if(tt===-1)return;let ut=E[tt];ut!==void 0&&(ut.update(J.inputSource,J.frame,c||a),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<E.length;J++){let tt=b[J];tt!==null&&(b[J]=null,E[J].disconnect(tt))}L=null,H=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ot=null,xt=null;S.depth&&(xt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=S.stencil?Pi:Wn,Ot=S.stencil?Os:Nn);let Gt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new rn(u.textureWidth,u.textureHeight,{format:Mn,type:ln,depthTexture:new Ei(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let tt=0;tt<J.removed.length;tt++){let ut=J.removed[tt],Ot=b.indexOf(ut);Ot>=0&&(b[Ot]=null,E[Ot].disconnect(ut))}for(let tt=0;tt<J.added.length;tt++){let ut=J.added[tt],Ot=b.indexOf(ut);if(Ot===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=b.length){b.push(ut),Ot=Gt;break}else if(b[Gt]===null){b[Gt]=ut,Ot=Gt;break}if(Ot===-1)break}let xt=E[Ot];xt&&xt.connect(ut)}}let X=new C,K=new C;function et(J,tt,ut){X.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(ut.matrixWorld);let Ot=X.distanceTo(K),xt=tt.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,Ee=xt[14]/(xt[10]-1),Bt=xt[14]/(xt[10]+1),jt=(xt[9]+1)/xt[5],oe=(xt[9]-1)/xt[5],Yt=(xt[8]-1)/xt[0],fe=(Gt[8]+1)/Gt[0],Re=Ee*Yt,He=Ee*fe,mt=Ot/(-Yt+fe),Mt=mt*-Yt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Mt),J.translateZ(mt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let P=Ee+mt,Wt=Bt+mt,Ht=Re-Mt,A=He+(Ot-Mt),_=jt*Bt/Wt*P,O=oe*Bt/Wt*P;J.projectionMatrix.makePerspective(Ht,A,_,O,P,Wt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function vt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,ut=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),G.near=U.near=I.near=tt,G.far=U.far=I.far=ut,(L!==G.near||H!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,H=G.far),G.layers.mask=J.layers.mask|6,I.layers.mask=G.layers.mask&-5,U.layers.mask=G.layers.mask&-3;let Ot=J.parent,xt=G.cameras;vt(G,Ot);for(let Gt=0;Gt<xt.length;Gt++)vt(xt[Gt],Ot);xt.length===2?et(G,I,U):G.projectionMatrix.copy(I.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),bt(J,G,Ot)};function bt(J,tt,ut){ut===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=La*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return p[J]};let ee=null;function $t(J,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ot=!1;ut.length!==G.cameras.length&&(G.cameras.length=0,Ot=!0);for(let Bt=0;Bt<ut.length;Bt++){let jt=ut[Bt],oe=null;if(f!==null)oe=f.getViewport(jt);else{let fe=d.getViewSubImage(u,jt);oe=fe.viewport,Bt===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let Yt=F[Bt];Yt===void 0&&(Yt=new Ge,Yt.layers.enable(Bt),Yt.viewport=new Se,F[Bt]=Yt),Yt.matrix.fromArray(jt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(jt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(oe.x,oe.y,oe.width,oe.height),Bt===0&&(G.matrix.copy(Yt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ot===!0&&G.cameras.push(Yt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Bt=d.getDepthInformation(ut[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<ut.length;Bt++){let jt=ut[Bt].camera;if(jt){let oe=p[jt];oe||(oe=new xr,p[jt]=oe);let Yt=d.getCameraImage(jt);oe.sourceTexture=Yt}}}}for(let ut=0;ut<E.length;ut++){let Ot=b[ut],xt=E[ut];Ot!==null&&xt!==void 0&&xt.update(Ot,tt,c||a)}ee&&ee(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ne=new _d;ne.setAnimationLoop($t),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},$_=new ue,bd=new zt;bd.set(-1,0,0,0,1,0,0,0,1);function K_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",S));let R=E.program;n.updateUBOMapping(v,R);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let E=d();v.__bindingPointIndex=E;let b=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){let I=b[x];if(Array.isArray(I))for(let U=0,F=I.length;U<F;U++)f(I[U],x,U,R);else f(I,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,E,b,R){if(y(v,E,b,R)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let U=0;U<T.length;U++){let F=T[U],G=p(F);g(F,v.__data,I),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function y(v,E,b,R){let x=v.value,T=E+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{let I=R[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(v){let E=v.uniforms,b=0,R=16;for(let T=0,I=E.length;T<I;T++){let U=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,G=U.length;F<G;F++){let L=U[F],H=Array.isArray(L.value)?L.value:[L.value];for(let W=0,V=H.length;W<V;W++){let Z=H[W],X=p(Z),K=b%R,et=K%X.boundary,vt=K+et;b+=et,vt!==0&&R-vt<X.storage&&(b+=R-vt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=X.storage}}}let x=b%R;return x>0&&(b+=R-x),v.__size=b,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){let E=v.target;E.removeEventListener("dispose",S);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var j_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function tx(){return Zn===null&&(Zn=new Fa(j_,16,16,Li,Fn),Zn.name="DFG_LUT",Zn.minFilter=ke,Zn.magFilter=ke,Zn.wrapS=Vn,Zn.wrapT=Vn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var tl=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([go,mo,po]),p=new Set([ln,Nn,Fs,Os,uo,fo]),S=new Uint32Array(4),w=new Int32Array(4),v=new C,E=null,b=null,R=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,G=null,L=null,H=null;this._outputColorSpace=Qe;let W=0,V=0,Z=null,X=-1,K=null,et=new Se,vt=new Se,bt=null,ee=new Ft(0),$t=0,ne=e.width,J=e.height,tt=1,ut=null,Ot=null,xt=new Se(0,0,ne,J),Gt=new Se(0,0,ne,J),Ee=!1,Bt=new Rs,jt=!1,oe=!1,Yt=new ue,fe=new C,Re=new Se,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Mt(){return Z===null?tt:1}let P=n;function Wt(M,D){return e.getContext(M,D)}let Ht,A,_,O,k,Y,st,at,$,j,ot,It,dt,lt,Pt,Dt,kt,N,ct,Q,ht,_t,nt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",wn,!1),P===null){let D="webgl2";if(P=Wt(D,M),P===null)throw Wt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(M){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",wn,!1),Nt("WebGLRenderer: "+M.message),M}function Lt(){Ht=new og(P),Ht.init(),ht=new Y_(P,Ht),A=new K0(P,Ht,t,ht),_=new X_(P,Ht),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=P.createFramebuffer(),L=P.createFramebuffer(),H=P.createFramebuffer(),O=new hg(P),k=new P_,Y=new q_(P,Ht,_,k,A,ht,O),st=new ag(I),at=new dp(P),_t=new J0(P,at),$=new lg(P,at,O,_t),j=new dg(P,$,at,_t,O),N=new ug(P,A,Y),Pt=new Q0(k),ot=new I_(I,st,Ht,A,_t,Pt),It=new K_(I,k),dt=new D_,lt=new z_(Ht),kt=new Z0(I,st,_,j,g,l),Dt=new W_(I,j,A),nt=new Q_(P,O,A,_),ct=new $0(P,Ht,O),Q=new cg(P,Ht,O),O.programs=ot.programs,I.capabilities=A,I.extensions=Ht,I.properties=k,I.renderLists=dt,I.shadowMap=Dt,I.state=_,I.info=O}y!==ln&&(T=new pg(y,e.width,e.height,o,s,r));let At=new Qc(I,P);this.xr=At,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(ne,J,!1))},this.getSize=function(M){return M.set(ne,J)},this.setSize=function(M,D,q=!0){if(At.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,J=D,e.width=Math.floor(M*tt),e.height=Math.floor(D*tt),q===!0&&(e.style.width=M+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ne*tt,J*tt).floor()},this.setDrawingBufferSize=function(M,D,q){ne=M,J=D,tt=q,e.width=Math.floor(M*q),e.height=Math.floor(D*q),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(y===ln){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,D,q,B){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,D,q,B),_.viewport(et.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,D,q,B){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,D,q,B),_.scissor(vt.copy(Gt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){_.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){ut=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,q=!0){let B=0;if(M){let z=!1;if(Z!==null){let gt=Z.texture.format;z=m.has(gt)}if(z){let gt=Z.texture.type,St=p.has(gt),pt=kt.getClearColor(),Tt=kt.getClearAlpha(),Ct=pt.r,Xt=pt.g,Kt=pt.b;St?(S[0]=Ct,S[1]=Xt,S[2]=Kt,S[3]=Tt,P.clearBufferuiv(P.COLOR,0,S)):(w[0]=Ct,w[1]=Xt,w[2]=Kt,w[3]=Tt,P.clearBufferiv(P.COLOR,0,w))}else B|=P.COLOR_BUFFER_BIT}D&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",wn,!1),kt.dispose(),dt.dispose(),lt.dispose(),k.dispose(),st.dispose(),j.dispose(),_t.dispose(),nt.dispose(),ot.dispose(),At.dispose(),At.removeEventListener("sessionstart",Th),At.removeEventListener("sessionend",wh),Ui.stop()};function _e(M){M.preventDefault(),lr("WebGLRenderer: Context Lost."),U=!0}function le(){lr("WebGLRenderer: Context Restored."),U=!1;let M=O.autoReset,D=Dt.enabled,q=Dt.autoUpdate,B=Dt.needsUpdate,z=Dt.type;Lt(),O.autoReset=M,Dt.enabled=D,Dt.autoUpdate=q,Dt.needsUpdate=B,Dt.type=z}function wn(M){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zn(M){let D=M.target;D.removeEventListener("dispose",zn),uf(D)}function uf(M){df(M),k.remove(M)}function df(M){let D=k.get(M).programs;D!==void 0&&(D.forEach(function(q){ot.releaseProgram(q)}),M.isShaderMaterial&&ot.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,q,B,z,gt){D===null&&(D=He);let St=z.isMesh&&z.matrixWorld.determinantAffine()<0,pt=mf(M,D,q,B,z);_.setMaterial(B,St);let Tt=q.index,Ct=1;if(B.wireframe===!0){if(Tt=$.getWireframeAttribute(q),Tt===void 0)return;Ct=2}let Xt=q.drawRange,Kt=q.attributes.position,wt=Xt.start*Ct,ce=(Xt.start+Xt.count)*Ct;gt!==null&&(wt=Math.max(wt,gt.start*Ct),ce=Math.min(ce,(gt.start+gt.count)*Ct)),Tt!==null?(wt=Math.max(wt,0),ce=Math.min(ce,Tt.count)):Kt!=null&&(wt=Math.max(wt,0),ce=Math.min(ce,Kt.count));let Ie=ce-wt;if(Ie<0||Ie===1/0)return;_t.setup(z,B,pt,q,Tt);let ye,ge=ct;if(Tt!==null&&(ye=at.get(Tt),ge=Q,ge.setIndex(ye)),z.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Mt()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if(z.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),_.setLineWidth(Xe*Mt()),z.isLineSegments?ge.setMode(P.LINES):z.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else z.isPoints?ge.setMode(P.POINTS):z.isSprite&&ge.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))ge.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Xe=z._multiDrawStarts,yt=z._multiDrawCounts,$e=z._multiDrawCount,se=Tt?at.get(Tt).bytesPerElement:1,gn=k.get(B).currentProgram.getUniforms();for(let Hn=0;Hn<$e;Hn++)gn.setValue(P,"_gl_DrawID",Hn),ge.render(Xe[Hn]/se,yt[Hn])}else if(z.isInstancedMesh)ge.renderInstances(wt,Ie,z.count);else if(q.isInstancedBufferGeometry){let Xe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Xe);ge.renderInstances(wt,Ie,yt)}else ge.render(wt,Ie)};function Eh(M,D,q,B){F!==null&&M.isNodeMaterial&&F.setObject(B,M),jt===!0&&Pt.setState(M,q,!1),M.transparent===!0&&M.side===Ae&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,Qr(M,D,B),M.side=Ri,M.needsUpdate=!0,Qr(M,D,B),M.side=Ae):Qr(M,D,B)}this.compile=function(M,D,q=null){q===null&&(q=M),F!==null&&F.renderStart(M,D,q),b=lt.get(q),b.init(D),x.push(b),q.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==q&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,jt=Pt.init(this.clippingPlanes,oe),jt===!0&&Pt.setGlobalState(this.clippingPlanes,D),F!==null&&Dt.render(b.state.shadowsArray,q,D);let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let gt=z.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let pt=gt[St];Eh(pt,q,D,z),B.add(pt)}else Eh(gt,q,D,z),B.add(gt)}),b=x.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(M,D,q=null){let B=this.compile(M,D,q);return new Promise(z=>{function gt(){if(B.forEach(function(St){let Tt=k.get(St).currentProgram;(Tt===void 0||Tt.isReady())&&B.delete(St)}),B.size===0){z(M);return}setTimeout(gt,10)}Ht.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Al=null;function ff(M){Al&&Al(M)}function Th(){Ui.stop()}function wh(){Ui.start()}let Ui=new _d;Ui.setAnimationLoop(ff),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(M){Al=M,At.setAnimationLoop(M),M===null?Ui.stop():Ui.start()},At.addEventListener("sessionstart",Th),At.addEventListener("sessionend",wh),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(M,D);let q=At.enabled===!0&&At.isPresenting===!0,B=T!==null&&(Z===null||q)&&T.begin(I,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(D),D=At.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,D,Z),b=lt.get(M,x.length),b.init(D),b.state.textureUnits=Y.getTextureUnits(),x.push(b),Yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Bt.setFromProjectionMatrix(Yt,Pn,D.reversedDepth),oe=this.localClippingEnabled,jt=Pt.init(this.clippingPlanes,oe),E=dt.get(M,R.length),E.init(),R.push(E),At.enabled===!0&&At.isPresenting===!0){let St=I.xr.getDepthSensingMesh();St!==null&&Rl(St,D,-1/0,I.sortObjects)}Rl(M,D,0,I.sortObjects),E.finish(),F!==null&&F.updateLights(b.state.lightsArray),I.sortObjects===!0&&E.sort(ut,Ot),mt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,mt&&kt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&Pt.beginShadows();let z=b.state.shadowsArray;if(Dt.render(z,M,D),jt===!0&&Pt.endShadows(),(B&&T.hasRenderPass())===!1){let St=E.opaque,pt=E.transmissive;if(b.setupLights(),D.isArrayCamera){let Tt=D.cameras;if(pt.length>0)for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++){let Kt=Tt[Ct];Rh(St,pt,M,Kt)}mt&&kt.render(M);for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++){let Kt=Tt[Ct];Ah(E,M,Kt,Kt.viewport)}}else pt.length>0&&Rh(St,pt,M,D),mt&&kt.render(M),Ah(E,M,D)}Z!==null&&V===0&&(Y.updateMultisampleRenderTarget(Z),Y.updateRenderTargetMipmap(Z)),B&&T.end(I),M.isScene===!0&&M.onAfterRender(I,M,D),_t.resetDefaultState(),X=-1,K=null,x.pop(),x.length>0?(b=x[x.length-1],Y.setTextureUnits(b.state.textureUnits),jt===!0&&Pt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function Rl(M,D,q,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Bt)){B&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Yt);let St=j.update(M),pt=M.material;pt.visible&&E.push(M,St,pt,q,Re.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Bt))){let St=j.update(M),pt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Re.copy(St.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(Yt)),Array.isArray(pt)){let Tt=St.groups;for(let Ct=0,Xt=Tt.length;Ct<Xt;Ct++){let Kt=Tt[Ct],wt=pt[Kt.materialIndex];wt&&wt.visible&&E.push(M,St,wt,q,Re.z,Kt,D)}}else pt.visible&&E.push(M,St,pt,q,Re.z,null,D)}}let gt=M.children;for(let St=0,pt=gt.length;St<pt;St++)Rl(gt[St],D,q,B)}function Ah(M,D,q,B){let{opaque:z,transmissive:gt,transparent:St}=M;b.setupLightsView(q),jt===!0&&Pt.setGlobalState(I.clippingPlanes,q),B&&_.viewport(et.copy(B)),z.length>0&&Kr(z,D,q),gt.length>0&&Kr(gt,D,q),St.length>0&&Kr(St,D,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Rh(M,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){let wt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new rn(1,1,{generateMipmaps:!0,type:wt?Fn:ln,minFilter:Ii,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let gt=b.state.transmissionRenderTarget[B.id],St=B.viewport||et;gt.setSize(St.z*I.transmissionResolutionScale,St.w*I.transmissionResolutionScale);let pt=I.getRenderTarget(),Tt=I.getActiveCubeFace(),Ct=I.getActiveMipmapLevel();I.setRenderTarget(gt),I.getClearColor(ee),$t=I.getClearAlpha(),$t<1&&I.setClearColor(16777215,.5),I.clear(),mt&&kt.render(q);let Xt=I.toneMapping;I.toneMapping=Dn;let Kt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),jt===!0&&Pt.setGlobalState(I.clippingPlanes,B),Kr(M,q,B),Y.updateMultisampleRenderTarget(gt),Y.updateRenderTargetMipmap(gt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ce=0,Ie=D.length;ce<Ie;ce++){let ye=D[ce],{object:ge,geometry:Xe,material:yt,group:$e}=ye;if(yt.side===Ae&&ge.layers.test(B.layers)){let se=yt.side;yt.side=We,yt.needsUpdate=!0,Ch(ge,q,B,Xe,yt,$e),yt.side=se,yt.needsUpdate=!0,wt=!0}}wt===!0&&(Y.updateMultisampleRenderTarget(gt),Y.updateRenderTargetMipmap(gt))}I.setRenderTarget(pt,Tt,Ct),I.setClearColor(ee,$t),Kt!==void 0&&(B.viewport=Kt),I.toneMapping=Xt}function Kr(M,D,q){let B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,gt=M.length;z<gt;z++){let St=M[z],{object:pt,geometry:Tt,group:Ct}=St,Xt=St.material;Xt.allowOverride===!0&&B!==null&&(Xt=B),pt.layers.test(q.layers)&&Ch(pt,D,q,Tt,Xt,Ct)}}function Ch(M,D,q,B,z,gt){F!==null&&z.isNodeMaterial&&F.setObject(M,z),M.onBeforeRender(I,D,q,B,z,gt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(I,D,q,B,M,gt),z.transparent===!0&&z.side===Ae&&z.forceSinglePass===!1?(z.side=We,z.needsUpdate=!0,I.renderBufferDirect(q,D,B,z,M,gt),z.side=Ri,z.needsUpdate=!0,I.renderBufferDirect(q,D,B,z,M,gt),z.side=Ae):I.renderBufferDirect(q,D,B,z,M,gt),M.onAfterRender(I,D,q,B,z,gt)}function Qr(M,D,q){D.isScene!==!0&&(D=He);let B=k.get(M),z=b.state.lights,gt=b.state.shadowsArray,St=z.state.version,pt=ot.getParameters(M,z.state,gt,D,q,b.state.lightProbeGridArray),Tt=ot.getProgramCacheKey(pt),Ct=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Xt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=st.get(M.envMap||B.environment,Xt),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",zn),Ct=new Map,B.programs=Ct);let Kt=Ct.get(Tt);if(Kt!==void 0){if(B.currentProgram===Kt&&B.lightsStateVersion===St)return Ph(M,pt),Kt}else pt.uniforms=ot.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,q,pt),M.onBeforeCompile(pt,I),Kt=ot.acquireProgram(pt,Tt),Ct.set(Tt,Kt),B.uniforms=pt.uniforms;let wt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=Pt.uniform),Ph(M,pt),B.needsLights=_f(M),B.lightsStateVersion=St,B.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.sunLights.value=z.state.sun,wt.sunLightShadows.value=z.state.sunShadow,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.sunShadowMatrix.value=z.state.sunShadowMatrix,wt.sunShadowCascade.value=z.state.sunShadowCascade,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Kt,B.uniformsList=null,Kt}function Ih(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Hs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Ph(M,D){let q=k.get(M);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function pf(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let q=0,B=M.length;q<B;q++){let z=M[q];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function mf(M,D,q,B,z){D.isScene!==!0&&(D=He),Y.resetTextureUnits();let gt=D.fog,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pt=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:te.workingColorSpace,Tt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ct=st.get(B.envMap||St,Tt),Xt=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!q.morphAttributes.position,ce=!!q.morphAttributes.normal,Ie=!!q.morphAttributes.color,ye=Dn;B.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ye=I.toneMapping);let ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Xe=ge!==void 0?ge.length:0,yt=k.get(B),$e=b.state.lights;if(jt===!0&&(oe===!0||M!==K)){let xe=M===K&&B.id===X;Pt.setState(B,M,xe)}let se=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==$e.state.version||yt.outputColorSpace!==pt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==Ct||B.fog===!0&&yt.fog!==gt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Pt.numPlanes||yt.numIntersection!==Pt.numIntersection)||yt.vertexAlphas!==Xt||yt.vertexTangents!==Kt||yt.morphTargets!==wt||yt.morphNormals!==ce||yt.morphColors!==Ie||yt.toneMapping!==ye||yt.morphTargetsCount!==Xe||!!yt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,yt.__version=B.version);let gn=yt.currentProgram;se===!0&&(gn=Qr(B,D,z),F&&B.isNodeMaterial&&F.onUpdateProgram(B,gn,yt));let Hn=!1,fi=!1,ts=!1,pe=gn.getUniforms(),Ce=yt.uniforms;if(_.useProgram(gn.program)&&(Hn=!0,fi=!0,ts=!0),B.id!==X&&(X=B.id,fi=!0),yt.needsLights){let xe=pf(b.state.lightProbeGridArray,z);yt.lightProbeGrid!==xe&&(yt.lightProbeGrid=xe,fi=!0)}if(Hn||K!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",M.projectionMatrix),pe.setValue(P,"viewMatrix",M.matrixWorldInverse);let mi=pe.map.cameraPosition;mi!==void 0&&mi.setValue(P,fe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,fi=!0,ts=!0)}if(yt.needsLights&&($e.state.sunShadowMap.length>0&&pe.setValue(P,"sunShadowMap",$e.state.sunShadowMap,Y),$e.state.directionalShadowMap.length>0&&pe.setValue(P,"directionalShadowMap",$e.state.directionalShadowMap,Y),$e.state.spotShadowMap.length>0&&pe.setValue(P,"spotShadowMap",$e.state.spotShadowMap,Y),$e.state.pointShadowMap.length>0&&pe.setValue(P,"pointShadowMap",$e.state.pointShadowMap,Y)),z.isSkinnedMesh){pe.setOptional(P,z,"bindMatrix"),pe.setOptional(P,z,"bindMatrixInverse");let xe=z.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),pe.setValue(P,"boneTexture",xe.boneTexture,Y))}z.isBatchedMesh&&(pe.setOptional(P,z,"batchingTexture"),pe.setValue(P,"batchingTexture",z._matricesTexture,Y),pe.setOptional(P,z,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",z._indirectTexture,Y),pe.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",z._colorsTexture,Y));let pi=q.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&N.update(z,q,gn),(fi||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,pe.setValue(P,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(Ce.envMapIntensity.value=D.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=tx()),fi){if(pe.setValue(P,"toneMappingExposure",I.toneMappingExposure),yt.needsLights&&gf(Ce,ts),gt&&B.fog===!0&&It.refreshFogUniforms(Ce,gt),It.refreshMaterialUniforms(Ce,B,tt,J,b.state.transmissionRenderTarget[M.id]),yt.needsLights&&yt.lightProbeGrid){let xe=yt.lightProbeGrid;Ce.probesSH.value=xe.texture,Ce.probesMin.value.copy(xe.boundingBox.min),Ce.probesMax.value.copy(xe.boundingBox.max),Ce.probesResolution.value.copy(xe.resolution)}Hs.upload(P,Ih(yt),Ce,Y)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hs.upload(P,Ih(yt),Ce,Y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(P,"center",z.center),pe.setValue(P,"modelViewMatrix",z.modelViewMatrix),pe.setValue(P,"normalMatrix",z.normalMatrix),pe.setValue(P,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let xe=B.uniformsGroups;for(let mi=0,es=xe.length;mi<es;mi++){let Dh=xe[mi];nt.update(Dh,gn),nt.bind(Dh,gn)}}return gn}function gf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function _f(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,D,q){let B=k.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=D,k.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let q=k.get(M);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,q=0){Z=M,W=D,V=q;let B=null,z=!1,gt=!1;if(M){let pt=k.get(M);if(pt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,pt.__webglFramebuffer),et.copy(M.viewport),vt.copy(M.scissor),bt=M.scissorTest,_.viewport(et),_.scissor(vt),_.setScissorTest(bt),X=-1;return}else if(pt.__webglFramebuffer===void 0)Y.setupRenderTarget(M);else if(pt.__hasExternalTextures)Y.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xt=M.depthTexture;if(pt.__boundDepthTexture!==Xt){if(Xt!==null&&k.has(Xt)&&(M.width!==Xt.image.width||M.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(M)}}let Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(gt=!0);let Ct=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?B=Ct[D][q]:B=Ct[D],z=!0):M.samples>0&&Y.useMultisampledRTT(M)===!1?B=k.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?B=Ct[q]:B=Ct,et.copy(M.viewport),vt.copy(M.scissor),bt=M.scissorTest}else et.copy(xt).multiplyScalar(tt).floor(),vt.copy(Gt).multiplyScalar(tt).floor(),bt=Ee;if(q!==0&&(B=G),_.bindFramebuffer(P.FRAMEBUFFER,B)&&_.drawBuffers(M,B),_.viewport(et),_.scissor(vt),_.setScissorTest(bt),z){let pt=k.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,q)}else if(gt){let pt=D;for(let Tt=0;Tt<M.textures.length;Tt++){let Ct=k.get(M.textures[Tt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,q,pt)}}else if(M!==null&&q!==0){let pt=k.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pt.__webglTexture,q)}X=-1};function Lh(M){let D=k.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=A.textureFormatReadable(M.format),D.__typeReadable=A.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,q,B,z,gt,St,pt=0){if(!(M&&M.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){_.bindFramebuffer(P.FRAMEBUFFER,Tt);try{let Ct=M.textures[pt],Xt=Ct.format,Kt=Ct.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt);let wt=Lh(Ct);if(wt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&q>=0&&q<=M.height-z&&P.readPixels(D,q,B,z,ht.convert(Xt),ht.convert(Kt),gt)}finally{let Ct=Z!==null?k.get(Z).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(M,D,q,B,z,gt,St,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt)if(D>=0&&D<=M.width-B&&q>=0&&q<=M.height-z){_.bindFramebuffer(P.FRAMEBUFFER,Tt);let Ct=M.textures[pt],Xt=Ct.format,Kt=Ct.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt);let wt=Lh(Ct);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),P.readPixels(D,q,B,z,ht.convert(Xt),ht.convert(Kt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ie=Z!==null?k.get(Z).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ie);let ye=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vu(P,ye,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ce),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ce),P.deleteSync(ye),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,q=0){let B=Math.pow(2,-q),z=Math.floor(M.image.width*B),gt=Math.floor(M.image.height*B),St=D!==null?D.x:0,pt=D!==null?D.y:0;Y.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,St,pt,z,gt),_.unbindTexture()},this.copyTextureToTexture=function(M,D,q=null,B=null,z=0,gt=0){let St,pt,Tt,Ct,Xt,Kt,wt,ce,Ie,ye=M.isCompressedTexture?M.mipmaps[gt]:M.image;if(q!==null)St=q.max.x-q.min.x,pt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,Ct=q.min.x,Xt=q.min.y,Kt=q.isBox3?q.min.z:0;else{let Ce=Math.pow(2,-z);St=Math.floor(ye.width*Ce),pt=Math.floor(ye.height*Ce),M.isDataArrayTexture?Tt=ye.depth:M.isData3DTexture?Tt=Math.floor(ye.depth*Ce):Tt=1,Ct=0,Xt=0,Kt=0}B!==null?(wt=B.x,ce=B.y,Ie=B.z):(wt=0,ce=0,Ie=0);let ge=ht.convert(D.format),Xe=ht.convert(D.type),yt;D.isData3DTexture?(Y.setTexture3D(D,0),yt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),yt=P.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),yt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let $e=_.getParameter(P.UNPACK_ROW_LENGTH),se=_.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=_.getParameter(P.UNPACK_SKIP_PIXELS),Hn=_.getParameter(P.UNPACK_SKIP_ROWS),fi=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,ye.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Ct),_.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let ts=M.isDataArrayTexture||M.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Ce=k.get(M),pi=k.get(D),xe=k.get(Ce.__renderTarget),mi=k.get(pi.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,xe.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let es=0;es<Tt;es++)ts&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(M).__webglTexture,z,Kt+es),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,k.get(D).__webglTexture,gt,Ie+es)),P.blitFramebuffer(Ct,Xt,St,pt,wt,ce,St,pt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||k.has(M)){let Ce=k.get(M),pi=k.get(D);_.bindFramebuffer(P.READ_FRAMEBUFFER,L),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let xe=0;xe<Tt;xe++)ts?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,z,Kt+xe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,z),pe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pi.__webglTexture,gt,Ie+xe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pi.__webglTexture,gt),z!==0?P.blitFramebuffer(Ct,Xt,St,pt,wt,ce,St,pt,P.COLOR_BUFFER_BIT,P.NEAREST):pe?P.copyTexSubImage3D(yt,gt,wt,ce,Ie+xe,Ct,Xt,St,pt):P.copyTexSubImage2D(yt,gt,wt,ce,Ct,Xt,St,pt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(yt,gt,wt,ce,Ie,St,pt,Tt,ge,Xe,ye.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,gt,wt,ce,Ie,St,pt,Tt,ge,ye.data):P.texSubImage3D(yt,gt,wt,ce,Ie,St,pt,Tt,ge,Xe,ye):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,gt,wt,ce,St,pt,ge,Xe,ye.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,gt,wt,ce,ye.width,ye.height,ge,ye.data):P.texSubImage2D(P.TEXTURE_2D,gt,wt,ce,St,pt,ge,Xe,ye);_.pixelStorei(P.UNPACK_ROW_LENGTH,$e),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,fi),gt===0&&D.generateMipmaps&&P.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&Y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){W=0,V=0,Z=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};function Td(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Te,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Ed(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);let g=Ed(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Ed(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new je(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var qd='"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',ji='Georgia, "Times New Roman", serif',sn=.78,ci=.27,ui=.155,ml=.128,gl=.058,nx=.78,wd=new C(.3,0,.02),Ad=[8003359,2047851,3103274,5913119,4860506,7035423,2054746,3815994];var il=[11739178,2050720,2763306,9054858],Vt=null,Ne,Rt,hn,Me,$i,Sl,_l=!1,Rd=new Rr,Cd=new rt,xl=[],be={},En=[],mn=null,On=null,cn=.9,bl=1.32,Id="",jc=null,Wr=null,Kn=null,Pd="",Di=null,Vs=null,Yd=[],xh=[],Zd=[],yh=[],bn={},Sn=null,yl=[],ch=!1,ks=0,li=0,Qi=-.28,Ld=0,Dd=0;var hh={round:-1,dice:[]},Ws=0,Jd=4,kr=!1,re=0,Xs=1,Tl=-.3,vh=0,uh=!1,Ue=null,pn=null;function $d(i){i.label.scale.set(.5*Xs,.5*Xs*96/512,1),i.bubble.scale.set(.4*Xs,.4*Xs*200/420,1)}var vl=0;function Fe(i,t=!0){let e=new _r(i);return t&&(e.colorSpace=Qe),e.anisotropy=Jd,e}function Tn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ys(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Kd(i){return i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2}function di(i,t,e){return Math.max(t,Math.min(e,i))}function Bn(i,t,e){return i+(t-i)*e}function $r(i,t,e,n){let s={t0:performance.now()+t,dur:i,fn:e,done:n};return xl.push(s),s}function wl(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Et(i,t=.8,e){return new vn(Object.assign({color:i,roughness:t},e||{}))}function it(i,t,e=!0,n=!0){let s=new de(i,t);return s.castShadow=e,s.receiveShadow=n,s}function Qd(i,t,e,n,s,r){let a=n*.095,o={a:[.27,.27],b:[.73,.27],c:[.27,.5],d:[.5,.5],e:[.73,.5],f:[.27,.73],g:[.73,.73]},l={1:["d"],2:["a","g"],3:["a","d","g"],4:["a","b","f","g"],5:["a","b","d","f","g"],6:["a","b","c","e","f","g"]};i.fillStyle=s===1?"#9a1a1a":r,l[s].forEach(c=>{i.beginPath(),i.arc(t+o[c][0]*n,e+o[c][1]*n,s===1?a*1.5:a,0,Math.PI*2),i.fill()})}function El(i,t,e,n,s){i.save(),i.fillStyle="#f3ead2",Ys(i,t,e,n,n,n*.18),i.fill(),i.lineWidth=n*.05,i.strokeStyle="#2a1a0a",i.stroke(),Qd(i,t,e,n,s,"#1a120a"),i.restore()}var sl={};function ix(i){if(sl[i])return sl[i];let t=Tn(128,128),e=t.getContext("2d"),n=e.createRadialGradient(64,64,10,64,64,90);return n.addColorStop(0,"#f6eed8"),n.addColorStop(1,"#d9c9a2"),e.fillStyle=n,e.fillRect(0,0,128,128),e.strokeStyle="rgba(90,60,20,0.35)",e.lineWidth=6,e.strokeRect(3,3,122,122),Qd(e,0,0,128,i,"#1c130b"),sl[i]=Fe(t),sl[i]}function Ni(i,t,e,n,s){let r=Tn(i,t),a=r.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,t);let o=i/n;for(let l=0;l<n;l++){a.fillStyle=`rgba(${s?20:60},${s?10:35},${s?5:15},${Math.random()*.25})`,a.fillRect(l*o,0,o,t);for(let c=0;c<26;c++){let h=l*o+Math.random()*o;a.strokeStyle=`rgba(30,15,5,${.08+Math.random()*.18})`,a.lineWidth=1+Math.random()*2,a.beginPath(),a.moveTo(h,0),a.bezierCurveTo(h+(Math.random()-.5)*12,t*.33,h+(Math.random()-.5)*12,t*.66,h+(Math.random()-.5)*6,t),a.stroke()}a.fillStyle="rgba(15,8,3,0.8)",a.fillRect(l*o,0,3,t)}return r}function sx(){let i=Tn(512,512),t=i.getContext("2d");t.fillStyle="#d9bf8a",t.fillRect(0,0,512,512);for(let n=0;n<26e3;n++){let s=Math.random();t.fillStyle=s<.5?`rgba(255,240,200,${Math.random()*.25})`:`rgba(120,90,50,${Math.random()*.18})`,t.fillRect(Math.random()*512,Math.random()*512,2,2)}for(let n=0;n<30;n++){t.strokeStyle="rgba(150,115,70,0.12)",t.lineWidth=3;let s=Math.random()*512;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(170,s+20,340,s-20,512,s+5),t.stroke()}let e=Fe(i);return e.wrapS=e.wrapT=Si,e.repeat.set(10,10),e}function rx(){let i=Tn(256,256),t=i.getContext("2d");t.fillStyle="#4a2c17",t.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)t.fillStyle=`rgba(0,0,0,${Math.random()*.2})`,t.fillRect(Math.random()*256,Math.random()*256,2,2);for(let n=0;n<1600;n++)t.fillStyle=`rgba(160,110,60,${Math.random()*.12})`,t.fillRect(Math.random()*256,Math.random()*256,3,1);t.strokeStyle="rgba(230,200,140,0.7)",t.lineWidth=2,t.setLineDash([6,6]),[30,226].forEach(n=>{t.beginPath(),t.moveTo(0,n),t.lineTo(256,n),t.stroke()}),t.beginPath(),t.moveTo(128,30),t.lineTo(128,226),t.stroke();let e=Fe(i);return e.wrapS=Si,e.repeat.set(2,1),e}function ax(){let i=Tn(256,64),t=i.getContext("2d");t.clearRect(0,0,256,64);for(let e=0;e<44;e++){let n=10+e*5.5,s=26*Math.sin(Math.PI*(e/44))+4,r=90+Math.random()*60;t.strokeStyle=`rgb(${30+Math.random()*30},${r},${25+Math.random()*20})`,t.lineWidth=4,t.beginPath(),t.moveTo(n,32),t.lineTo(n+9,32-s),t.stroke(),t.beginPath(),t.moveTo(n,32),t.lineTo(n+9,32+s),t.stroke()}return t.strokeStyle="#6b7a2a",t.lineWidth=4,t.beginPath(),t.moveTo(0,32),t.lineTo(256,32),t.stroke(),Fe(i)}function ox(){let i=Tn(128,128),t=i.getContext("2d");t.fillStyle="#7a5a3a",t.fillRect(0,0,128,128);for(let n=0;n<128;n+=16)t.fillStyle="rgba(40,25,10,0.55)",t.fillRect(0,n,128,4),t.fillStyle="rgba(200,170,120,0.18)",t.fillRect(0,n+5,128,3);for(let n=0;n<900;n++)t.fillStyle=`rgba(0,0,0,${Math.random()*.2})`,t.fillRect(Math.random()*128,Math.random()*128,1,3);let e=Fe(i);return e.wrapS=e.wrapT=Si,e}var qr=new C(-.72,.2,-.66).normalize(),Mh=new C(.55,.42,-.72).normalize(),hi=0,jd=0,Ml=null,dh=null,tf=null,ef=[];function lx(){let i=new ae(500,32,16),t=new Ze({side:We,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:qr},moonDir:{value:Mh},night:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vDir;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
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
        // ein paar Schleierwolken
        float cl = sin(d.x*9.0 + d.z*3.0) * sin(d.z*7.0 - d.x*2.0) * 0.5 + 0.5;
        cl *= smoothstep(0.03, 0.12, y) * (1.0 - smoothstep(0.25, 0.45, y));
        col = mix(col, mix(vec3(1.0,0.78,0.62), vec3(0.12,0.13,0.2), n2), cl * 0.28);
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`});Vs=new de(i,t),Vs.userData.dynamic=!0,Vs.renderOrder=-10,Rt.add(Vs)}function cx(){let i=kr?96:160,t=new on(900,900,i,i);t.rotateX(-Math.PI/2);let e=new Ze({fog:!1,uniforms:{time:{value:0},sunDir:{value:qr},moonDir:{value:Mh},night:{value:0}},vertexShader:`
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
      void main(){
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 dx = dFdx(vPos); vec3 dy = dFdy(vPos);
        vec3 n = normalize(cross(dx, dy)); if (n.y < 0.0) n = -n;
        vec3 v = normalize(cameraPosition - vPos);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float d = length(vPos.xz);
        vec3 deep = mix(vec3(0.03,0.16,0.28), vec3(0.01,0.035,0.08), n2);
        vec3 shallow = mix(vec3(0.12,0.62,0.62), vec3(0.03,0.13,0.18), n2);
        vec3 col = mix(shallow, deep, smoothstep(11.5, 26.0, d));
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
        float shore = 1.0 - smoothstep(0.0, 1.4, abs(d - 11.3 - sin(time*0.8 + atan(vPos.z, vPos.x)*7.0)*0.25));
        float foam = shore * (0.55 + 0.45*sin(d*6.0 - time*2.5));
        foam += smoothstep(0.13, 0.2, vH) * 0.35 * (1.0 - smoothstep(30.0, 90.0, d));
        col = mix(col, mix(vec3(0.95,0.97,0.95), vec3(0.35,0.4,0.5), n2), clamp(foam, 0.0, 0.9));
        // Dunst am Horizont
        col = mix(col, hz, smoothstep(120.0, 430.0, d));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`});Di=new de(t,e),Di.userData.dynamic=!0,Di.position.y=-.62,Rt.add(Di)}function hx(){let i=Et(16777215,1,{map:sx()}),t=new ae(1,96,32,0,Math.PI*2,0,Math.PI/2),e=t.attributes.position;for(let a=0;a<e.count;a++){let o=e.getX(a),l=e.getY(a),c=e.getZ(a),h=1+(Math.sin(o*13)*Math.cos(c*11)*.02+Math.sin(o*29+c*17)*.008)*(1-l);e.setXYZ(a,o*h,l,c*h)}t.computeVertexNormals();let n=it(t,i,!1,!0);n.scale.set(14,1.5,14),n.position.y=-1.5,Rt.add(n);let s=it(new yr(4.2,48),i,!1,!0);s.rotation.x=-Math.PI/2,s.position.y=.002,Rt.add(s);let r=Et(7301730,.95,{flatShading:!0});for(let a=0;a<9;a++){let o=a*.9+.4,l=9.8+a%3*.9,c=it(new Cs(.4+a%4*.25,0),r);c.position.set(Math.cos(o)*l,-.35-(l-9.8)*.12,Math.sin(o)*l),c.rotation.set(a,a*2,a*3),c.scale.y=.7,Rt.add(c)}}function Ki(i,t,e,n,s,r){let a=new Jt,o=Et(16777215,.95,{map:ox()}),l=11,c=[];for(let y=0;y<=l;y++){let m=y/l;c.push(new C(n*m*m*e*.45,m*e,s*m*m*e*.45))}for(let y=0;y<l;y++){let m=c[y],p=c[y+1],S=m.distanceTo(p),w=.2-y/l*.08,v=.2-(y+1)/l*.08,E=it(new ie(v*.92,w,S*1.04,10),o);E.position.copy(m).add(p).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new C(0,1,0),p.clone().sub(m).normalize()),a.add(E)}let h=c[l],d=new Jt;d.position.copy(h),a.add(d);let u=ax(),f=9;for(let y=0;y<f;y++){let m=2.4+(r+y)%3*.35,p=.62,S=new on(1,1,14,1),w=S.attributes.position;for(let R=0;R<w.count;R++){let x=w.getX(R)+.5,T=w.getY(R),I=Math.sin(Math.PI*Math.min(1,x*1.05))*.85+.15;w.setXYZ(R,x*m,.55*x*m-.42*x*x*m*m*.55,T*p*I)}S.computeVertexNormals();let v=new Ft().setHSL(.26+(r*7+y)%5*.012,.55,.36),E=it(S,new vn({map:u,color:v,alphaTest:.45,side:Ae,roughness:.8}),!0,!1),b=new Jt;b.rotation.y=y/f*Math.PI*2+r,b.rotation.z=-.1+y%2*.12,b.add(E),d.add(b),b.userData.dynamic=!0,Yd.push({obj:b,base:b.rotation.z,ph:y*.7+r})}let g=Et(4861460,.7);for(let y=0;y<4;y++){let m=it(new ae(.1,10,8),g);m.position.set(Math.cos(y*1.6)*.14,-.12,Math.sin(y*1.6)*.14),d.add(m)}return a.position.set(i,0,t),Rt.add(a),a}function th(i){let t=new Jt,e=Et(i.hull,.8),n=it(new we(14,3,3.6),e,!1,!1),s=n.geometry.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=s.getY(o),h=s.getZ(o),d=l>3?1-(l-3)/5.5:1,u=c<0?.55:1;s.setXYZ(o,l,c+(Math.abs(l)>5?.9:0),h*Math.max(.1,d)*u)}if(n.geometry.computeVertexNormals(),t.add(n),i.stripe){let o=it(new we(11,.35,3.45),Et(i.stripe,.7),!1,!1);o.position.set(-.8,.9,0),t.add(o)}let r=new vn({color:i.sail,roughness:1,side:Ae}),a=i.masts||[-4.5,0,4.2];return a.forEach((o,l)=>{let c=l===1||a.length===1?15:12.5,h=it(new ie(.16,.22,c,6),Et(2759954,.8),!1,!1);h.position.set(o,c/2+1.2,0),t.add(h);for(let d=0;d<3;d++){let u=6.2-d*1.4,f=3.2-d*.5,g=new on(u,f,6,3),y=g.attributes.position;for(let p=0;p<y.count;p++){let S=y.getX(p),w=y.getY(p),v=i.ragged&&w<-f/2+.01?Math.sin(S*5+d)*.3:0;y.setXYZ(p,S,w+v,Math.cos(S/u*Math.PI)*(i.billow||.6))}let m=it(g,r,!1,!1);m.rotation.y=Math.PI/2,m.position.set(o,3.8+d*3.6,0),t.add(m)}if(l===Math.floor(a.length/2)){let d=new de(new on(2.4,1.6,8,2),new an({map:nf(),side:Ae}));d.position.set(o-1.2,c+1.6,0),t.add(d),yh.push({mesh:d,base:d.geometry.attributes.position.array.slice(),ph:o,amp:.25})}}),t.position.set(i.x,-.8,i.z),t.rotation.y=i.rot||0,t.scale.setScalar(i.scale||1),Rt.add(t),t.userData.dynamic=!0,Zd.push({g:t,bob:i.bob||0,speed:i.speed||0,path:i.path||null}),t}function ux(){th({hull:1446157,sail:1841690,ragged:!0,x:-95,z:-150,rot:.5,bob:0}),th({hull:5913118,sail:15722191,stripe:9054746,billow:.9,x:-180,z:-85,rot:0,scale:.8,bob:1,speed:2.2,path:{from:-190,to:190}}),th({hull:3810838,sail:14274484,stripe:2047851,masts:[-2.5,2.5],x:60,z:-55,rot:2.6,scale:.7,bob:2})}var rl=null;function nf(){if(rl)return rl;let i=Tn(256,170),t=i.getContext("2d");return t.fillStyle="#121212",t.fillRect(0,0,256,170),rf(t,128,70,1.25,"#f1ead8"),rl=Fe(i),rl}function dx(){let i=(mt,Mt)=>{let P=Math.hypot(mt,Mt);return P<4.2?0:-1.5+1.5*Math.sqrt(Math.max(0,1-P/14*(P/14)))},t=Et(16777215,.85,{map:Fe(Ni(256,128,"#7a5230",6))}),e=Et(2762532,.45,{metalness:.7}),n=Et(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.45});[[-7.2,-5.4,6.4,.4,-.5,3],[8.6,1.6,5,.6,-.2,5],[-8.4,3.6,5.6,-.6,.2,6],[2.6,-7.8,5.8,.2,-.6,8],[-3.2,-8.3,4.4,-.3,-.5,9],[5.6,-5.8,4.6,.5,-.3,10]].forEach(([mt,Mt,P,Wt,Ht,A])=>{let _=Ki(mt,Mt,P,Wt,Ht,A);_.position.y=i(mt,Mt)});let s=it(new ie(.06,.08,5.2,8),Et(4862752,.9));s.position.set(-1.4,2.6,-5.2),Rt.add(s);let r=it(new ae(.1,10,8),n);r.position.set(-1.4,5.25,-5.2),Rt.add(r);let a=new de(new on(1.6,1.05,12,4),new vn({map:nf(),side:Ae,roughness:1}));a.geometry.translate(.8,0,0),a.position.set(-1.35,4.6,-5.2),a.rotation.y=.35,Rt.add(a),a.userData.dynamic=!0,yh.push({mesh:a,base:a.geometry.attributes.position.array.slice(),ph:0,amp:.12,fromPole:!0});let o=new Jt,l=it(new we(.55,.3,1),t);l.position.y=.3,o.add(l),[[-.3,.3],[.3,.3],[-.3,-.3],[.3,-.3]].forEach(([mt,Mt])=>{let P=it(new ie(.17,.17,.08,14),t);P.rotation.z=Math.PI/2,P.position.set(mt,.17,Mt),o.add(P)});let c=it(new ie(.11,.17,1.5,16),e);c.rotation.x=Math.PI/2-.15,c.position.set(0,.55,-.35),o.add(c);let h=it(new ze(.12,.03,8,16),e);h.position.set(0,.66,-1.1),o.add(h),o.position.set(4.9,0,-4.4),o.rotation.y=-.75,Rt.add(o);let d=new ae(.1,12,10);[[0,0,0],[.2,0,0],[.1,0,.17],[.1,.16,.06]].forEach(([mt,Mt,P])=>{let Wt=it(d,e);Wt.position.set(5.5+mt,.1+Mt,-3.6+P),Rt.add(Wt)});let u=it(new nn(.75,.5,18),n);u.position.set(1.2,.25,-5.6),Rt.add(u);let f=new ie(.045,.045,.01,12);for(let mt=0;mt<70;mt++){let Mt=Math.random()*Math.PI*2,P=.2+Math.random()*1.1,Wt=it(f,n,!1,!0);Wt.position.set(1.2+Math.cos(Mt)*P,.006+(P<.7?(.7-P)*.6:0),-5.6+Math.sin(Mt)*P),Wt.rotation.set(Math.random()*.5,Math.random()*3,Math.random()*.5),Rt.add(Wt)}let g=[13639744,2121952,2142304,9453776];for(let mt=0;mt<14;mt++){let Mt=it(new Sr(.05,0),Et(g[mt%4],.15,{metalness:.2,emissive:g[mt%4],emissiveIntensity:.25}),!1,!1),P=Math.random()*Math.PI*2,Wt=Math.random()*.6;Mt.position.set(1.2+Math.cos(P)*Wt,.12+(.6-Wt)*.55,-5.6+Math.sin(P)*Wt),Rt.add(Mt)}let y=it(new ie(.12,.1,.1,8,1,!0),n);y.position.set(1.2,.54,-5.6),y.rotation.z=.3,Rt.add(y);let m=new Jt,p=it(new we(.7,.36,.45),t);p.position.y=.18,m.add(p);let S=new Jt;S.position.set(0,.36,-.225),S.rotation.x=-1.9,m.add(S);let w=it(new ie(.225,.225,.7,14,1,!1,0,Math.PI),t);w.rotation.z=Math.PI/2,w.position.z=.225,S.add(w);let v=it(new we(.64,.05,.4),n);v.position.y=.35,m.add(v),m.position.set(2.3,0,-5.3),m.rotation.y=-.4,Rt.add(m);let E=Et(15261896,.8),b=it(new ae(.12,12,10),E);b.scale.set(1,.9,1.1),b.position.set(.3,.1,-5.1),Rt.add(b),[[-.04],[.04]].forEach(([mt])=>{let Mt=it(new ae(.03,8,6),Et(1118481,.9),!1,!1);Mt.position.set(.3+mt,.12,-5),Rt.add(Mt)});let R=new Jt,x=it(new ie(.05,.05,1.5,8),e);x.position.y=.75,R.add(x);let T=it(new ie(.04,.04,.8,8),e);T.rotation.z=Math.PI/2,T.position.y=1.3,R.add(T);let I=it(new ze(.1,.025,8,16),e);I.position.y=1.55,R.add(I);let U=it(new ze(.45,.05,8,20,Math.PI),e);U.rotation.z=Math.PI,U.position.y=.45,R.add(U),R.position.set(-5.9,-.15,-2.4),R.rotation.set(.25,.6,.2),Rt.add(R);let F=new ae(1,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),G=it(F,Et(16777215,.8,{map:Fe(Ni(256,128,"#6a4526",9)),side:Ae}));G.scale.set(.65,.4,1.6);let L=-6.2,H=-7;G.position.set(L,i(L,H)+.3,H),G.rotation.set(.08,.7,.1),Rt.add(G);let W=it(new we(1.1,.05,.22),t);W.position.set(L,i(L,H)+.22,H),W.rotation.y=.7,Rt.add(W);let V=Et(16777215,.85,{map:Fe(Ni(128,128,"#8a6a3a",4))});[[-2.8,.25,3.8,.2,.5],[-2.2,.25,4.1,-.3,.5],[-2.5,.72,3.95,.5,.44],[3.6,.2,3.6,.4,.4]].forEach(([mt,Mt,P,Wt,Ht])=>{let A=it(new we(Ht,Ht,Ht),V);A.position.set(mt,Mt,P),A.rotation.y=Wt,Rt.add(A)});let Z=new Jt;for(let mt=0;mt<5;mt++){let Mt=it(new ie(.05,.06,.7,6),Et(3810324,.95));Mt.rotation.set(Math.PI/2-.25,mt/5*Math.PI*2,0),Mt.position.set(Math.sin(mt/5*Math.PI*2)*.12,.1,Math.cos(mt/5*Math.PI*2)*.12),Z.add(Mt)}for(let mt=0;mt<8;mt++){let Mt=it(new Cs(.1,0),Et(6973024,.95,{flatShading:!0}));Mt.position.set(Math.cos(mt*.785)*.45,.05,Math.sin(mt*.785)*.45),Z.add(Mt)}let X=new an({color:16747056,transparent:!0,opacity:.9}),K=new de(new nn(.22,.6,8),X);K.position.y=.35,Z.add(K);let et=new de(new nn(.12,.4,8),new an({color:16773280}));et.position.y=.28,Z.add(et);let vt=new qn(new Ln({map:Sh(),color:16747056,transparent:!0,depthWrite:!1,blending:Xi}));vt.scale.set(2.2,2.2,1),vt.position.y=.4,Z.add(vt),Z.position.set(-5.6,0,.9),Rt.add(Z),K.userData.dynamic=et.userData.dynamic=!0,xh.push({flame:K,inner:et,glow:vt,ph:11});let bt=it(new ie(.02,.02,1.1,6),Et(4862752));bt.rotation.z=Math.PI/2,bt.position.set(-5.6,.75,.9),Rt.add(bt),[-.5,.5].forEach(mt=>{let Mt=it(new ie(.025,.025,.8,6),Et(4862752));Mt.position.set(-5.6+mt,.4,.9),Rt.add(Mt)});let ee=new C(8.35,1.5,1.8),$t=new C(6.75,1.5,4.25),ne=ee.clone().lerp($t,.5);ne.y=.75;let J=new Gi(ee,ne,$t),tt=it(new br(J,20,.22,8,!1),Et(14272928,.95,{side:Ae}));tt.scale.set(1,1,1),Rt.add(tt);let ut=new Jt,Ot=it(new ae(.09,12,10),Et(13904426,.7));Ot.scale.set(1,1.35,1),Ot.position.y=.12,ut.add(Ot);let xt=it(new ae(.065,12,10),Et(13904426,.7));xt.position.set(0,.27,-.02),ut.add(xt);let Gt=it(new nn(.025,.07,6),Et(15851696,.5));Gt.rotation.x=-Math.PI/2-.5,Gt.position.set(0,.25,-.08),ut.add(Gt),[-1,1].forEach(mt=>{let Mt=it(new ae(.06,10,8),Et(mt>0?2777296:15909402,.7));Mt.scale.set(.4,1.3,.9),Mt.position.set(mt*.08,.12,.02),ut.add(Mt);let P=it(new ae(.012,6,5),Et(1118481),!1,!1);P.position.set(mt*.045,.29,-.05),ut.add(P)});let Ee=it(new nn(.035,.25,6),Et(2777296,.7));Ee.rotation.x=2.6,Ee.position.set(0,0,.1),ut.add(Ee),ut.position.set(-3.45,1.8,-1.6),ut.rotation.y=.9,Rt.add(ut),ut.userData.dynamic=!0,bn.parrot=ut;let Bt=new Jt,jt=Et(13647914,.6),oe=it(new ae(.09,12,8),jt);oe.scale.set(1.3,.5,1),oe.position.y=.06,Bt.add(oe),[-1,1].forEach(mt=>{let Mt=it(new ae(.035,8,6),jt);Mt.scale.set(1.2,.8,1.6),Mt.position.set(mt*.12,.07,-.08),Bt.add(Mt);for(let Wt=0;Wt<3;Wt++){let Ht=it(new ie(.008,.008,.12,4),jt,!1,!1);Ht.rotation.z=mt*1,Ht.position.set(mt*.12,.03,-.03+Wt*.04),Bt.add(Ht)}let P=it(new ae(.014,6,5),Et(1118481),!1,!1);P.position.set(mt*.03,.12,-.06),Bt.add(P)}),Rt.add(Bt),Bt.userData.dynamic=!0,bn.crab=Bt,bn.gulls=[];let Yt=new an({color:16052458,side:Ae});for(let mt=0;mt<4;mt++){let Mt=new Jt,P=new de(new on(.9,.18),Yt);P.geometry.translate(-.45,0,0),Mt.add(P);let Wt=new de(new on(.9,.18),Yt);Wt.geometry.translate(.45,0,0),Mt.add(Wt),P.rotation.x=Wt.rotation.x=-Math.PI/2;let Ht=new Jt;Ht.add(P);let A=new Jt;A.add(Wt),Mt.add(Ht),Mt.add(A),Mt.userData.dynamic=!0,Rt.add(Mt),bn.gulls.push({g:Mt,wl:Ht,wr:A,r:16+mt*6,h:11+mt*2.5,sp:.12+mt*.03,ph:mt*1.7})}let fe=it(new ae(1,24,12,0,Math.PI*2,0,Math.PI/2),Et(14270346,1),!1,!1);fe.scale.set(14,3,10),fe.position.set(150,-1.2,-230),Rt.add(fe);let Re=Ki(150,-230,7,.5,.2,12);Re.scale.setScalar(2.4),Re.position.y=1.5;let He=Ki(158,-226,6,-.4,.3,13);He.scale.setScalar(2),He.position.y=1}function eh(i,t){let e=new Jt,n=it(new ie(.04,.05,1.7,6),Et(4862752,.9));n.position.y=.85,e.add(n);let s=it(new ie(.1,.06,.18,8),Et(2760728,.7));s.position.y=1.72,e.add(s);let r=new an({color:16752704,transparent:!0,opacity:.9}),a=new de(new nn(.09,.32,8),r);a.position.y=1.95,e.add(a);let o=new de(new nn(.05,.2,8),new an({color:16773280}));o.position.y=1.9,e.add(o);let l=new qn(new Ln({map:Sh(),color:16751168,transparent:!0,depthWrite:!1,blending:Xi}));l.scale.set(1.1,1.1,1),l.position.y=1.95,e.add(l),e.position.set(i,0,t),Rt.add(e),a.userData.dynamic=o.userData.dynamic=!0,xh.push({flame:a,inner:o,glow:l,ph:i*3+t})}var al=null;function Sh(){if(al)return al;let i=Tn(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),al=Fe(i),al}function fx(){let i=new Jt,t=Et(16777215,.8,{map:Fe(Ni(256,128,"#6a4222",5))}),e=Et(2762016,.5,{metalness:.6}),n=it(new we(.9,.45,.55),t);n.position.y=.225,i.add(n);let s=it(new ie(.275,.275,.9,16,1,!1,0,Math.PI),t);s.rotation.z=Math.PI/2,s.position.set(0,.45,0);let r=new Jt;r.position.set(0,.45,-.275),s.position.set(0,0,.275),r.add(s),r.rotation.x=-1.2,i.add(r),[-.35,.35].forEach(u=>{let f=it(new we(.05,.47,.57),e);f.position.set(u,.225,0),i.add(f)});let a=Et(15909450,.3,{metalness:.9,emissive:4861952,emissiveIntensity:.4}),o=new ie(.045,.045,.01,14);for(let u=0;u<40;u++){let f=it(o,a,!1,!1);f.position.set((Math.random()-.5)*.8,.44+Math.random()*.06,(Math.random()-.5)*.45),f.rotation.set(Math.random()*.6,Math.random()*3,Math.random()*.6),i.add(f)}for(let u=0;u<14;u++){let f=it(o,a,!1,!0);f.position.set(.5+Math.random()*.5,.006,(Math.random()-.5)*.7),f.rotation.y=Math.random()*3,i.add(f)}i.position.set(3.1,0,-2.4),i.rotation.y=-.7,Rt.add(i);let l=bh(.3,.36,.9),c=Et(16777215,.85,{map:Fe(Ni(256,128,"#7a5230",10))});[[-3.2,-1.9,0],[-3.75,-1.3,.5],[-3.45,-1.6,2]].forEach(([u,f,g],y)=>{let m=it(l,c);y===2?m.position.set(u,.9+.45,f):m.position.set(u,.45,f),m.rotation.y=g,Rt.add(m),sf(m,.36,.9)});let h=it(new we(.06,2.2,.06),Et(6965802));h.position.set(-2.4,.9,3.4),h.rotation.z=.3,Rt.add(h);let d=it(new we(.25,.6,.03),Et(6965802));d.position.set(0,1.2,0),h.add(d)}function bh(i,t,e){let n=[];for(let s=0;s<=10;s++){let r=s/10;n.push(new rt(i+(t-i)*Math.sin(Math.PI*r),r*e-e/2))}return n.unshift(new rt(0,-e/2)),n.push(new rt(0,e/2)),new Is(n,20)}function sf(i,t,e){let n=Et(2828068,.5,{metalness:.6});[-.36,0,.36].forEach(s=>{let r=s*e,a=s===0?t+.005:t*.94,o=it(new ze(a,.012,6,24),n,!1,!1);o.rotation.x=Math.PI/2,o.position.y=r,i.add(o)})}function Xr(i,t){i.updateMatrixWorld(!0);let e=new ue().copy(i.matrixWorld).invert(),n=new Map;(function r(a){if(!(a.userData.dynamic&&a!==i)){if(a.isMesh&&!a.isInstancedMesh&&a.material&&!Array.isArray(a.material)&&!a.material.transparent&&a.geometry.attributes.uv){let o=`${a.material.uuid}|${a.castShadow}|${a.receiveShadow}`;n.has(o)||n.set(o,[]),n.get(o).push(a)}a.children.slice().forEach(r)}})(i);let s=0;return n.forEach(r=>{if(r.length<2)return;let a=r.map(c=>{let h=c.geometry.index?c.geometry.toNonIndexed():c.geometry.clone(),d=new Te;return["position","normal","uv"].forEach(u=>{h.attributes[u]&&d.setAttribute(u,h.attributes[u])}),d.applyMatrix4(t?new ue().multiplyMatrices(e,c.matrixWorld):c.matrixWorld),d}),o=Td(a,!1);if(!o)return;let l=new de(o,r[0].material);l.castShadow=r[0].castShadow,l.receiveShadow=r[0].receiveShadow,i.add(l),r.forEach(c=>{c.parent&&c.parent.remove(c)}),s+=r.length}),s}function px(i){return Math.max(.8,i*.95/(Math.PI*2)+.22)}function mx(i){On&&(Rt.remove(On),On.traverse(l=>{l.geometry&&l.geometry.dispose()})),cn=px(i),bl=cn+.44,On=new Jt;let t=Fe(Ni(512,512,"#6b4526",7)),e=it(new ie(cn,cn,.06,64),[Et(4861464,.85),Et(16777215,.7,{map:t}),Et(3810322,.9)]);e.position.y=sn-.03,On.add(e);let n=it(new ze(cn+.005,.018,8,80),Et(3813416,.45,{metalness:.7}),!1,!1);n.rotation.x=Math.PI/2,n.position.y=sn-.03,On.add(n);let s=Et(9075296,.4,{metalness:.8}),r=Math.round(cn*16);for(let l=0;l<r;l++){let c=l/r*Math.PI*2,h=it(new ae(.012,6,4),s,!1,!1);h.position.set(Math.cos(c)*(cn+.02),sn-.03,Math.sin(c)*(cn+.02)),On.add(h)}let a=Et(16777215,.85,{map:Fe(Ni(256,128,"#6a4526",12))}),o=it(bh(.3+cn*.12,.36+cn*.14,sn-.06),a);o.position.y=(sn-.06)/2,On.add(o),sf(o,.36+cn*.14,sn-.06),jc=gx(),jc.userData.dynamic=!0,On.add(jc),Xr(On,!0),Rt.add(On)}function gx(){let i=new Jt,t=Et(2761760,.45,{metalness:.7}),e=it(new ie(.07,.08,.03,12),t);e.position.y=.015,i.add(e);let n=new de(new ie(.055,.055,.13,12,1,!0),new vn({color:16760944,emissive:16751152,emissiveIntensity:1.3,transparent:!0,opacity:.75,side:Ae}));n.position.y=.1,i.add(n);let s=it(new nn(.075,.06,12),t);s.position.y=.195,i.add(s);let r=it(new ze(.025,.006,6,12),t);r.position.y=.24,i.add(r),[0,1,2,3].forEach(o=>{let l=it(new we(.008,.13,.008),t),c=o/4*Math.PI*2+.4;l.position.set(Math.cos(c)*.058,.1,Math.sin(c)*.058),i.add(l)});let a=new qn(new Ln({map:Sh(),color:16752720,transparent:!0,depthWrite:!1,blending:Xi,opacity:.8}));return a.scale.set(.5,.5,1),a.position.y=.1,i.add(a),i.userData.glow=a,i.position.y=sn,i}var ol=null,ll=null;function _x(){if(ol)return ol;let i=[new rt(0,ci-.012),new rt(ml-.012,ci-.012),new rt(ui-.012,.004),new rt(ui,0),new rt(ui+.004,.012),new rt(ml,ci-.01),new rt(ml-.01,ci),new rt(0,ci)];return ol=new Is(i,36),ol}function xx(i){if(!ll){let a=rx();ll=[6962462,4860436,5909018,3811866].map(o=>new vn({color:o,map:a,roughness:.75,side:Ae}))}let t=new Jt,e=it(_x(),ll[i%ll.length]);t.add(e);let n=Et(11569722,.35,{metalness:.85}),s=it(new ze(ui+.004,.007,6,36),n,!1,!1);s.rotation.x=Math.PI/2,s.position.y=.012,t.add(s);let r=it(new ze(ml+.002,.006,6,36),n,!1,!1);return r.rotation.x=Math.PI/2,r.position.y=ci-.03,t.add(r),t.userData.body=e,t}var yx=new we(gl,gl,gl),vx=[2,5,1,6,3,4];function Mx(i,t){let e=vx.map(s=>new vn({map:ix(s),roughness:.45,emissive:16760896,emissiveIntensity:0})),n=it(yx,e);return Sx(n,i,t),n}function Sx(i,t,e){let n=new xn;t===6?n.set(Math.PI,0,0):t===2?n.set(0,0,Math.PI/2):t===5?n.set(0,0,-Math.PI/2):t===3?n.set(-Math.PI/2,0,0):t===4&&n.set(Math.PI/2,0,0);let s=new tn().setFromEuler(n),r=new tn().setFromAxisAngle(new C(0,1,0),e||0);i.quaternion.copy(r.multiply(s)),i.userData.value=t}var Nd=[[0,0],[.068,.035],[-.066,.04],[.012,-.072],[-.058,-.048],[.07,-.042],[-.004,.08]],Ud=[[16052712,16052712],[15912762,15912762],[9071172,3107642],[10132128,10132128],[7031344,7031344],[15262416,13215856],[3815994,3815994],[14263915,14263915]],bx=15763996;function Ex(i,t){let e=wl(i)>>>0,n=new Jt,s=Et(Ad[e%Ad.length],.85),r=Ud[(e>>>3)%Ud.length],a=Et(r[0],.9),o=Et(r[1],.85),l=Et(bx,.55),c=Et(1709330,.8),h=Et(15854296,.9),d={g:n,coat:s,skin:a},u=it(bh(.17,.2,.46),Et(16777215,.85,{map:Fe(Ni(128,64,"#6a4526",8))}));u.position.set(0,.23,.05),t||n.add(u);let f=new Jt;if(n.add(f),d.body=f,f.position.set(0,.48,.05),!t){[-.08,.08].forEach(W=>{let V=it(new ie(.016,.02,.16,6),l);V.position.set(W,-.06,-.21),f.add(V);let Z=it(new nn(.055,.1,3),l);Z.scale.set(1,1,.28),Z.rotation.set(-Math.PI/2,0,0),Z.position.set(W,-.14,-.25),f.add(Z)});let y=new Jt;y.position.y=.05,y.scale.setScalar(1.22),f.add(y),d.torso=y;let m=it(new ae(.2,20,16),a);m.scale.set(1,1.1,1.05),m.position.y=.2,y.add(m);let p=it(new nn(.08,.2,8),a);p.position.set(0,.24,.22),p.rotation.x=1,y.add(p);let S=it(new ie(.19,.225,.34,20,1,!0,.55,Math.PI*2-1.1),s);S.position.y=.2,S.rotation.y=Math.PI,y.add(S),S.material=s.clone(),S.material.side=Ae;let w=it(new ze(.13,.025,6,16,Math.PI),s);w.position.set(0,.36,-.02),w.rotation.set(Math.PI/2+.3,0,0),y.add(w);let v=it(new ze(.207,.018,6,24),Et(2759182,.6));v.rotation.x=Math.PI/2,v.position.y=.12,y.add(v);let E=it(new we(.06,.045,.02),Et(13936960,.3,{metalness:.9}));E.position.set(0,.12,-.215),y.add(E);let b=it(new ze(.085,.028,6,14),Et(il[(e>>>20)%il.length],.9));b.rotation.x=Math.PI/2,b.position.y=.42,y.add(b);let R=new Jt;R.position.y=.55,y.add(R),d.head=R;let x=it(new ae(.13,18,14),o);x.scale.set(1,1,1.05),R.add(x);let T=it(new ae(1,16,10),l);T.scale.set(.07,.028,.12),T.position.set(0,-.02,-.14),R.add(T);let I=it(new ae(1,14,8),l);I.scale.set(.06,.02,.1),I.position.set(0,-.045,-.125),R.add(I);let U=Et(16777215,.3),F=Et(657930,.2),G=(e>>>9)%3===0;[-.05,.05].forEach((W,V)=>{if(G&&V===0){let Z=it(new ae(.036,12,8,0,Math.PI*2,0,Math.PI/2),c,!1,!1);Z.position.set(W,.045,-.1),Z.rotation.set(-Math.PI/2+.2,0,0),R.add(Z);let X=it(new ze(.133,.006,4,28),c,!1,!1);X.rotation.set(.25,0,.4),X.position.y=.045,R.add(X)}else{let Z=it(new ae(.034,12,10),U,!1,!1);Z.scale.set(1,1.2,.7),Z.position.set(W,.045,-.105),R.add(Z);let X=it(new ae(.016,8,6),F,!1,!1);X.position.set(W*.95,.045,-.128),R.add(X),Z.userData.dynamic=X.userData.dynamic=!0,d.eyes=(d.eyes||[]).concat([{m:Z,sy:1.2},{m:X,sy:1}])}});let L=it(new ze(.016,.004,6,10),Et(13936960,.3,{metalness:.9}),!1,!1);L.position.set(.128,-.03,0),L.rotation.y=Math.PI/2,R.add(L);let H=(e>>>15)%3;if(H<2){let W=Et(1840658,.85),V=new Jt;V.position.y=.08,V.rotation.x=-.12,R.add(V);let Z=it(new ie(.25,.25,.025,3),W);Z.position.y=.02,Z.rotation.y=Math.PI/6+Math.PI,V.add(Z);for(let vt=0;vt<3;vt++){let bt=vt/3*Math.PI*2+Math.PI/3,ee=it(new we(.32,.08,.015),W);ee.position.set(Math.sin(bt)*.11,.065,Math.cos(bt)*.11),ee.rotation.y=bt,ee.rotation.x=-.5,V.add(ee)}let X=it(new ie(.1,.125,.11,14),W);X.position.y=.08,V.add(X);let K=it(new ze(.123,.006,4,20),Et(13214794,.4,{metalness:.6}),!1,!1);K.rotation.x=Math.PI/2,K.position.y=.035,V.add(K);let et=new de(new on(.07,.07),new an({map:Tx(),transparent:!0}));if(et.position.set(0,.075,-.152),et.rotation.set(0,Math.PI,0),V.add(et),H===0){let vt=it(new nn(.022,.24,5),Et(12597547,.9));vt.position.set(.1,.13,.03),vt.rotation.z=-.8,V.add(vt)}}else{let W=Et(il[(e>>>18)%il.length],.9),V=it(new ae(.136,16,8,0,Math.PI*2,0,Math.PI*.5),W);V.position.y=.012,V.scale.set(1,1.05,1.05),R.add(V);let Z=it(new ae(.032,8,6),W);Z.position.set(0,.03,.135),R.add(Z),[-.3,.3].forEach(X=>{let K=it(new we(.035,.12,.01),W);K.position.set(X*.08,-.03,.145),K.rotation.z=X,R.add(K)})}}let g=s;return d.arms=[1,-1].map(y=>{let m=it(new ie(.045,.055,1,8),g),p=it(new ie(.04,.046,1,8),g),S=it(new ie(.05,.044,.045,8),h),w=it(new ae(.05,10,8),a);return w.scale.set(.7,1.5,.95),n.add(m),n.add(p),n.add(S),n.add(w),{side:y,upper:m,fore:p,cuff:S,hand:w,target:new C,cur:null,short:t}}),n.userData.parts=d,d.head&&(d.head.userData.dynamic=!0,Xr(d.head,!0),Xr(d.torso,!0),d.torso.userData.dynamic=!0,Xr(d.body,!0)),d.eyes&&(d.eyes=d.eyes.filter(y=>y.m.parent)),d}var cl=null;function Tx(){if(cl)return cl;let i=Tn(128,128),t=i.getContext("2d");return rf(t,64,60,1,"#f1ead8","rgba(0,0,0,0)"),cl=Fe(i),cl}function rf(i,t,e,n,s,r){i.save(),i.translate(t,e),i.scale(n,n),i.strokeStyle=s,i.lineWidth=12,i.lineCap="round",i.beginPath(),i.moveTo(-40,20),i.lineTo(40,58),i.moveTo(40,20),i.lineTo(-40,58),i.stroke(),i.fillStyle=s,[[-44,20],[-40,12],[44,20],[40,12],[-44,58],[-38,64],[44,58],[38,64]].forEach(([a,o])=>{i.beginPath(),i.arc(a,o,7,0,Math.PI*2),i.fill()}),i.beginPath(),i.arc(0,-8,30,0,Math.PI*2),i.fill(),i.fillRect(-16,12,32,20),i.fillStyle="#111",i.beginPath(),i.arc(-11,-8,8,0,Math.PI*2),i.arc(11,-8,8,0,Math.PI*2),i.fill(),i.beginPath(),i.moveTo(0,2),i.lineTo(-5,12),i.lineTo(5,12),i.closePath(),i.fill(),i.fillRect(-10,24,3,8),i.fillRect(-2,24,3,8),i.fillRect(6,24,3,8),i.restore()}var qs=new C,fh=new C,Vr=new C,af=new C(0,1,0);function nh(i,t,e){qs.subVectors(e,t);let n=qs.length();i.position.copy(t).addScaledVector(qs,.5),i.scale.set(1,Math.max(.001,n),1),i.quaternion.setFromUnitVectors(af,qs.normalize())}function Fd(i,t,e){let r=fh.subVectors(e,t),a=r.length(),o=(.34+.34)*.995,l=Vr.copy(e);a>o&&(l.copy(t).addScaledVector(r.normalize(),o),a=o);let c=new C().addVectors(t,l).multiplyScalar(.5),h=Math.sqrt(Math.max(0,.34*.34-a/2*(a/2))),d=new C().subVectors(l,t).normalize(),u=new C(i.side*.8,-1,.25);u.addScaledVector(d,-u.dot(d)).normalize();let f=c.addScaledVector(u,h);if(nh(i.upper,t,f),i.short){let g=f.clone().lerp(l,.62);nh(i.fore,g,l),i.fore.scale.x=i.fore.scale.z=.72}else nh(i.fore,f,l);i.cuff.position.copy(f).lerp(l,.9),i.cuff.quaternion.copy(i.fore.quaternion),i.hand.position.copy(l),i.hand.quaternion.copy(i.fore.quaternion)}function ph(i,t,e){let n=Tn(i,t),s=new qn(new Ln({map:Fe(n),transparent:!0,depthWrite:!1,depthTest:!0}));return s.userData.cv=n,s.scale.set(e,e*t/i,1),s.renderOrder=5,s}function wx(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;n.clearRect(0,0,s,r),n.font=`700 44px ${ji}`;let a=(t.out?"\u2620 ":"")+(t.host?"\u{1F451} ":"")+(t.bot?"\u{1F916} ":"")+t.name;for(;n.measureText(a).width>s-70&&a.length>3;)a=a.slice(0,-2);let o=Math.min(s-16,n.measureText(a).width+56),l=(s-o)/2,c=r-20,h=c/2;if(n.fillStyle=t.turn?"rgba(90,62,12,0.92)":"rgba(14,26,38,0.8)",Ys(n,l,10,o,c,h),n.fill(),t.turn&&t.progress!==null&&t.progress!==void 0){n.lineWidth=7,n.strokeStyle="rgba(244,201,93,0.25)",n.stroke();let d=2*(o-2*h)+2*Math.PI*h;n.save(),n.setLineDash([d*t.progress,d+10]),n.strokeStyle=t.progress<.27?"#ff6a4a":"#f4c95d",n.beginPath(),n.moveTo(s/2,10),n.arcTo(l+o,10,l+o,10+c,h),n.arcTo(l+o,10+c,l,10+c,h),n.arcTo(l,10+c,l,10,h),n.arcTo(l,10,l+o,10,h),n.lineTo(s/2,10),n.stroke(),n.restore()}else n.lineWidth=t.turn?7:3,n.strokeStyle=t.turn?"#f4c95d":"rgba(200,160,90,0.6)",n.stroke();n.textAlign="center",n.textBaseline="middle",n.fillStyle=t.out?"#9a9a9a":t.away?"#e0a060":"#fff4dc",n.fillText(a,s/2,r/2+2),i.material.map.needsUpdate=!0}function Ax(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;n.clearRect(0,0,s,r);let a=t.kind==="liar"||t.kind==="spot";if(n.fillStyle=a?"#b3242a":"#f6ecd2",Ys(n,10,10,s-20,r-50,36),n.fill(),n.beginPath(),n.moveTo(s/2-22,r-42),n.lineTo(s/2,r-6),n.lineTo(s/2+22,r-42),n.closePath(),n.fill(),n.lineWidth=5,n.strokeStyle=a?"#ffd0c0":"#6a4a20",Ys(n,10,10,s-20,r-50,36),n.stroke(),n.textAlign="center",n.textBaseline="middle",a)n.fillStyle="#fff",n.font=`900 64px ${ji}`,n.fillText(t.kind==="spot"?"Genau!":"L\xFCgner!",s/2,(r-40)/2+6);else{n.fillStyle="#2a1a0a",n.font=`900 70px ${ji}`;let o=`${t.qty} \xD7`,l=n.measureText(o).width,c=78,h=l+18+c;n.textAlign="left",n.fillText(o,s/2-h/2,(r-40)/2+6),El(n,s/2-h/2+l+18,(r-40)/2-c/2+4,c,t.face)}i.material.map.needsUpdate=!0}function Rx(i,t){let e=i.userData.cv,n=e.getContext("2d"),s=e.width,r=e.height;if(n.clearRect(0,0,s,r),!t){i.material.map.needsUpdate=!0;return}if(n.fillStyle=t.tone==="good"?"rgba(20,70,40,0.88)":t.tone==="bad"?"rgba(110,20,20,0.9)":"rgba(14,26,38,0.85)",Ys(n,8,8,s-16,r-16,30),n.fill(),n.lineWidth=4,n.strokeStyle="#d9b36a",n.stroke(),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#e8d6a8",n.font=`600 30px ${qd}`,n.fillText(t.top,s/2,44),n.fillStyle="#fff4dc",n.font=`900 64px ${ji}`,t.face){let a=`${t.qty} \xD7`,o=n.measureText(a).width,l=66,c=o+14+l;n.textAlign="left",n.fillText(a,s/2-c/2,112),El(n,s/2-c/2+o+14,112-l/2,l,t.face)}else n.fillText(t.big||"",s/2,112);i.material.map.needsUpdate=!0}function Cx(i,t){let e=new Jt;Rt.add(e);let n=Ex(i.id,t);e.add(n.g);let s=new Jt;Rt.add(s);let r=new Jt;r.position.set(0,0,-ui),s.add(r);let a=new Jt;r.add(a);let o=xx(wl(i.id));a.add(o);let l=new Jt;s.add(l);let c=new de(new ki(.2,.235,40),new an({color:16042333,transparent:!0,opacity:0,side:Ae,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.003,s.add(c);let h=ph(512,96,.5);h.position.set(0,1.62,.05);let d=ph(420,200,.4);d.position.set(.46,1.45,-.05),d.visible=!1,d.renderOrder=6,t||(e.add(h),e.add(d));let u={id:i.id,isMe:t,frame:e,parts:n,cupRoot:s,tiltG:r,flipG:a,cup:o,diceG:l,ring:c,label:h,bubble:d,pose:{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0},hold:0,holdTarget:0,anim:null,peek:0,peekOn:!1,labelKey:"",out:!1,lookYaw:0,lookCur:0,nod:0,slam:0,bubbleUntil:0,bubbleSticky:!1,dice:[],diceRound:-1};return Zs(u),u}function Od(i){Rt.remove(i.frame),Rt.remove(i.cupRoot)}function Ix(i){let t=i.players,e=t.length,n=t.map(r=>r.id).join(",")+"|"+i.meId;if(n===Id)return!1;Id=n,mx(e),Object.keys(be).forEach(r=>{t.find(a=>a.id===r)||(Od(be[r]),delete be[r])});let s=Math.max(0,t.findIndex(r=>r.id===i.meId));En=[];for(let r=0;r<e;r++){let a=t[(s+r)%e],o=be[a.id],l=a.id===i.meId;o&&o.isMe!==l&&(Od(o),delete be[a.id],o=null),o||(o=be[a.id]=Cx(a,l),$d(o));let c=Math.PI/2+r*Math.PI*2/e,h=Math.cos(c),d=Math.sin(c);o.dir=new C(h,0,d),o.rot=Math.atan2(h,d),o.frame.position.set(h*bl,0,d*bl),o.frame.rotation.y=o.rot;let u=d,f=-h;o.cupRoot.position.set(h*(cn-.26)+u*.13,sn,d*(cn-.26)+f*.13),o.cupRoot.rotation.y=o.rot,o.idx=r,En.push(o)}return!0}function Zs(i){let t=i.pose,e=t.flip*Math.PI;i.flipG.position.set(wd.x*t.side+t.shx,t.lift+ci*(1-Math.cos(e))/2+t.shy,ui+wd.z*t.side+t.shz),i.flipG.rotation.set(t.wob*.6,0,e+t.wob),i.tiltG.rotation.x=-t.tilt}var ih=new C;function Px(i){return i.isMe?ih.set(ui*.98,ci*.5,ui*.35):ih.set(0,ci*.55,ui*.95),i.flipG.localToWorld(ih)}function Yr(i,t){i.holdTarget=t}function Zr(i){for(;i.diceG.children.length;){let t=i.diceG.children[0];i.diceG.remove(t),Array.isArray(t.material)&&t.material.forEach(e=>e.dispose())}i.dice=[]}function Jr(i,t,e){Zr(i);let n=wl(i.id+"|"+e);t.forEach((s,r)=>{let a=Nd[r%Nd.length],o=(n>>r*3)%7/7-.5,l=Mx(s,o*1.2+r);l.position.set(a[0]+o*.01,gl/2+.001,a[1]-o*.01),i.diceG.add(l),i.dice.push(l)})}function Bd(i,t,e,n,s){let r=Object.assign({},i.pose);i.anim&&(i.anim.cancelled=!0);let a=$r(t,e,o=>{if(a.cancelled)return;let l=Kd(o);Object.keys(n).forEach(c=>{i.pose[c]=Bn(r[c],n[c],l)}),Zs(i)},()=>{a.cancelled||(i.anim===a&&(i.anim=null),s&&s())});return i.anim=a,a}function Lx(i,t,e){let n=i.pose;i.anim&&(i.anim.cancelled=!0),Yr(i,1);let s=Object.assign({},n),r=380,a=1050,o=320,l=Math.random()*6,c=$r(r+a+o,t,h=>{if(c.cancelled)return;let d=h*(r+a+o);if(d<r){let u=Kd(d/r);n.side=Bn(s.side,0,u),n.flip=Bn(s.flip,1,u),n.lift=Bn(s.lift,.2,u),n.tilt=Bn(s.tilt,0,u),n.shx=n.shy=n.shz=n.wob=0,u>.6&&i.diceG.children.length&&Zr(i)}else if(d<r+a){let u=(d-r)/a,f=Math.sin(Math.PI*u);n.side=0,n.flip=1,n.lift=.2+f*.06,n.tilt=0,n.shx=Math.sin(u*48+l)*.035*f,n.shz=Math.cos(u*41+l)*.03*f,n.shy=Math.abs(Math.sin(u*30))*.03*f,n.wob=Math.sin(u*44+l)*.12*f}else{let u=(d-r-a)/o,f=u*u;n.shx=n.shy=n.shz=n.wob=0,n.side=0,n.flip=Bn(1,0,Math.min(1,u*1.6)),n.lift=Bn(.2,0,f)}Zs(i)},()=>{c.cancelled||(Object.assign(n,{side:0,flip:0,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),Zs(i),i.anim===c&&(i.anim=null),e&&e())});if(i.anim=c,Vt&&Vt.sound){for(let h=0;h<9;h++)setTimeout(()=>Vt.sound("rattle",i.isMe?1:.45),t+r+h*110+Math.random()*40);setTimeout(()=>Vt.sound("slam",i.isMe?1:.5),t+r+a+o-20)}}function Dx(i,t){Yr(i,1),i.peekOn=!1,Bd(i,380,t,{lift:.22,tilt:0,flip:.25},()=>{Bd(i,480,0,{side:1,flip:1,lift:0},()=>{Yr(i,0),Vt&&Vt.sound&&Vt.sound("thud",.4)})})}function sS(i){Vt=i,$i=i.container,Me=document.createElement("canvas"),Me.className="scene3d-canvas",$i.insertBefore(Me,$i.firstChild),kr=(navigator.hardwareConcurrency||8)<=4||Math.min(window.innerWidth,window.innerHeight)<500,Ne=new tl({canvas:Me,antialias:!0,powerPreference:"high-performance"}),Ne.setPixelRatio(Math.min(window.devicePixelRatio||1,kr?1.5:2)),Ne.shadowMap.enabled=!0,Ne.shadowMap.type=Wi,Ne.toneMapping=Cr,Ne.toneMappingExposure=1.05,Jd=Math.min(8,Ne.capabilities.getMaxAnisotropy()),Rt=new ur,Rt.fog=new hr(15775114,40,260),hn=new Ge(60,1,.05,1200);let t=new Tr(16767152,6967360,.9);Rt.add(t),dh=t,Sn=new Vi(16763024,2.6),Sn.position.copy(qr).multiplyScalar(30),Sn.castShadow=!0,Sn.shadow.mapSize.set(kr?1024:2048,kr?1024:2048);let e=Sn.shadow.camera;e.left=-5,e.right=5,e.top=5,e.bottom=-5,e.near=5,e.far=60,Sn.shadow.bias=-5e-4,Sn.shadow.normalBias=.02,Rt.add(Sn),Rt.add(Sn.target),Wr=new Ls(16752720,2.2,6,1.6),Wr.position.set(0,sn+.35,0),Rt.add(Wr);let n=new Vi(9416959,.35);n.position.set(5,6,8),Rt.add(n),tf=n,Ml=new Vi(10466559,0),Ml.position.copy(Mh).multiplyScalar(30),Rt.add(Ml),[[2.2,1.95,-3.3,5],[-5.6,.6,.9,7],[-2.4,1.95,-2.9,5]].forEach(([a,o,l,c])=>{let h=new Ls(16748608,0,c,1.5);h.position.set(a,o,l),Rt.add(h),ef.push(h)}),lx(),cx(),hx(),Ki(-3.6,-3.4,5.6,.5,-.2,1),Ki(4.2,-1.2,4.8,.7,.3,4),Ki(-4.6,2.8,6.2,-.4,.6,7),Ki(6.5,4.5,5.2,.3,.4,2),ux(),fx(),dx(),eh(-2.4,-2.9),eh(2.7,2.6),eh(2.2,-3.3),Xr(Rt),Kn=ph(512,160,.62),Kn.position.set(0,sn+.5,0),Kn.visible=!1,Kn.renderOrder=7,Rt.add(Kn),Ue=new qn(new Ln({map:Fe(Tn(512,288)),transparent:!0,depthTest:!1,depthWrite:!1})),Ue.userData.cv=Ue.material.map.image,Ue.renderOrder=30,Ue.visible=!1,Ue.position.set(0,sn+.7,0),Rt.add(Ue);let s=null;Me.addEventListener("contextmenu",a=>a.preventDefault()),Me.addEventListener("pointerdown",a=>{s={x:a.clientX,y:a.clientY,yaw:li,pitch:Qi,moved:!1,id:a.pointerId};try{Me.setPointerCapture(a.pointerId)}catch{}}),Me.addEventListener("pointermove",a=>{if(s&&s.id===a.pointerId){let o=a.clientX-s.x,l=a.clientY-s.y;if(Math.hypot(o,l)>5&&(s.moved=!0),s.moved){let c=2.2/Math.max(300,Me.clientWidth);li=di(s.yaw-o*c*1.2,-1.35,1.35),Qi=di(s.pitch-l*c,-1.05,.35),vh=performance.now()}}else a.pointerType!=="touch"&&(Me.style.cursor=zd(a)?"pointer":"grab")});let r=a=>{if(!s)return;let o=!s.moved;s=null,o&&zd(a)&&Vt.onCupClick&&Vt.onCupClick()};Me.addEventListener("pointerup",r),Me.addEventListener("pointercancel",()=>{s=null}),Me.addEventListener("dblclick",()=>Nx()),Me.addEventListener("webglcontextlost",a=>a.preventDefault()),Sl=new ResizeObserver(mh),Sl.observe($i),mh(),Qi=Tl,Ne.setAnimationLoop(Zx)}function zd(i){let t=mn&&be[mn.meId];if(!t||t.out)return!1;let e=Me.getBoundingClientRect();return Cd.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1),Rd.setFromCamera(Cd,hn),Rd.intersectObject(t.cup,!0).length>0}function mh(){if(!$i||!Ne)return;let i=$i.clientWidth,t=$i.clientHeight;if(!i||!t)return;Ne.setSize(i,t,!1),hn.aspect=i/t;let e=hn.aspect<1;uh=e;let n=(e?76:98)*(Math.PI/180),s=2*Math.atan(Math.tan(n/2)/hn.aspect)*(180/Math.PI);hn.fov=di(Math.max(58,s),58,100),hn.updateProjectionMatrix(),Xs=e?1.7:hn.aspect<1.4?1.25:1,Tl=e?-.42:-.34,Object.values(be).forEach(a=>$d(a));let r=e?1.15:Xs;Kn&&Kn.scale.set(.62*r,.62*r*160/512,1)}function Nx(){li=0,Qi=Tl,vh=0}function rS(i){let t=_l;_l=i,Me&&(i&&!t?(Me.style.display="block",Me.style.opacity="0",requestAnimationFrame(()=>requestAnimationFrame(()=>{Me.style.opacity="1"})),vl=0,mh()):!i&&t&&(Me.style.opacity="0",setTimeout(()=>{_l||(Me.style.display="none")},350)))}function aS(i,t){let e=be[i];e&&(e.isMe||(e.peekOn=!!t))}function oS(i){ch=!!i;let t=mn&&be[mn.meId];t&&(t.peekOn=ch),Vt&&Vt.sound&&i&&Vt.sound("lift",.6)}function lS(i,t){let e=be[i];e&&(e.lookYaw=t)}function Hd(i){let t=mn;return t&&t.gamePhase==="bidding"&&!i.anim&&i.pose.flip<.01&&!i.out}function of(i){return!i||!i.turnMs||!i.turnDeadline?null:di((i.turnDeadline-Date.now())/i.turnMs,0,1)}function lf(i,t,e){let n=e.currentTurnId===t.id,s=n?of(e):null,r=[t.name,t.eliminated,n,t.isBot,t.connected,t.isHost,s===null?"":Math.round(s*80)].join("|");i.labelKey!==r&&(i.labelKey=r,wx(i.label,{name:t.name,dice:t.dice,out:t.eliminated,turn:n,bot:t.isBot,away:!t.connected&&!t.isBot,host:t.isHost,progress:s}))}function Gd(i,t,e,n){i.isMe||(Ax(i.bubble,t),i.bubble.visible=!0,i.bubbleUntil=performance.now()+e,i.bubbleSticky=!!n)}function sh(i){let t=i?JSON.stringify(i):"";if(t!==Pd){if(Pd=t,!i){Kn.visible=!1;return}Rx(Kn,i),Kn.visible=!0}}function Ux(i){let t=i.reveal;i.gamePhase==="bidding"&&Ue&&(Ue.visible=!1),En.forEach(e=>{let n=i.players.find(r=>r.id===e.id);if(!n||e.anim)return;let s=n.eliminated&&!(t&&t.dice&&t.dice[n.id]);if(e.out=n.eliminated,e.cupRoot.visible=!s,i.gamePhase==="bidding")Object.assign(e.pose,{flip:0,side:0,lift:0,tilt:e.pose.tilt,shx:0,shy:0,shz:0,wob:0}),Yr(e,1),e.isMe?i.myDice&&i.myDiceRound===i.roundNo&&e.diceRound!==i.roundNo&&(Jr(e,i.myDice,i.roundNo),e.diceRound=i.roundNo):e.diceRound!==-2&&(Zr(e),e.diceRound=-2);else if(i.gamePhase==="reveal"||i.gamePhase==="over"){Object.assign(e.pose,{flip:1,side:1,lift:0,tilt:0,shx:0,shy:0,shz:0,wob:0}),Yr(e,0);let r="rv"+i.roundNo;t&&t.dice&&t.dice[n.id]&&e.diceRound!==r&&(Jr(e,t.dice[n.id],r),e.diceRound=r)}Zs(e)}),i.reveal&&!(pn&&pn.key==="rv"+i.roundNo)&&(cf(i.reveal,!0),hf(i.reveal))}function cf(i,t){En.forEach(e=>{e.dice.forEach(n=>{let s=n.userData.value,r=s===i.bid.face||i.wildOnes&&s===1&&i.bid.face!==1;n.userData.match=t&&r,n.userData.dim=t&&!r,n.material.forEach(a=>{a.emissiveIntensity=0,a.color.setScalar(t&&!r?.45:1)})})})}function cS(i){if(!Ne)return;let t=mn;mn=i;let e=Ix(i);i.players.forEach(r=>{let a=be[r.id];a&&(lf(a,r,i),a.turn=i.currentTurnId===r.id,!a.isMe&&r.peeking!==void 0&&(a.peekOn=!!r.peeking),!a.isMe&&r.look!==void 0&&!r.isBot&&(a.lookYaw=r.look))}),i.myDice&&(hh={round:i.myDiceRound,dice:i.myDice});let n=be[i.meId];n&&i.gamePhase==="bidding"&&!n.anim&&n.pose.flip<.01&&i.myDiceRound===i.roundNo&&n.diceRound!==i.roundNo&&i.myDice&&(Jr(n,i.myDice,i.roundNo),n.diceRound=i.roundNo);let s=`${i.roundNo}|${i.gamePhase}`;if((e||!t||t.phaseKey!==s&&!i.expectAnim)&&Ux(i),i.phaseKey=s,i.gamePhase==="bidding"&&i.bid){let r=i.players.find(a=>a.id===i.bid.id);sh({top:`Gebot von ${r?r.name:"?"}`,qty:i.bid.qty,face:i.bid.face})}else i.gamePhase==="bidding"?sh({top:`Runde ${i.roundNo}`,big:"Neue Runde"}):sh(null);i.startDice>2&&i.totalDice&&(jd=di((i.startDice-i.totalDice)/(i.startDice-2),0,1)),i.bid||En.forEach(r=>{r.bubbleSticky&&!r.bubble.userData.challenge&&(r.bubble.visible=!1,r.bubbleSticky=!1)})}function Fx(i){let t=Math.max(180,Math.min(380,2600/Math.max(1,i))),e=1600,n=e+i*t;return{step:t,countStart:e,countEnd:n,verdict:n+350,banner:n+1300}}function Ox(i,t,e){return i===t||e&&i===1&&t!==1}function gh(i){let t=Ue.userData.cv,e=t.getContext("2d"),n=t.width,s=t.height;if(e.clearRect(0,0,n,s),e.textAlign="center",e.textBaseline="middle",e.lineJoin="round",i.num!==void 0)e.font=`900 190px ${ji}`,e.lineWidth=22,e.strokeStyle="rgba(20,10,0,0.85)",e.strokeText(String(i.num),n/2-50,130),e.fillStyle="#f4d58d",e.fillText(String(i.num),n/2-50,130),El(e,n/2+60,72,110,i.face);else{e.font=`900 118px ${ji}`,e.lineWidth=20,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(i.big,n/2,96),e.fillStyle=i.color,e.fillText(i.big,n/2,96),e.font=`700 40px ${qd}`;let r=`${i.actual} \xD7`,a=`liegen \xB7 Gebot ${i.qty}`,o=e.measureText(r).width,l=e.measureText(a).width,c=46,h=12,d=o+h+c+h+l,u=n/2-d/2;e.fillStyle="rgba(10,20,30,0.82)",Ys(e,u-20,176,d+40,70,35),e.fill(),e.fillStyle="#fff4dc",e.textAlign="left",e.fillText(r,u,212),u+=o+h,El(e,u,212-c/2,c,i.face),u+=c+h,e.fillText(a,u,212)}Ue.material.map.needsUpdate=!0,Ue.visible=!0,Ue.userData.popT=performance.now()}function hf(i){let t=i.kind!=="spot",e=t?i.correct?"Gelogen!":"Stimmt!":i.correct?"Genau!":"Daneben!",n=t&&i.correct||!t&&!i.correct?"#ff6a55":"#7fe39a";gh({big:e,color:n,actual:i.actual,qty:i.bid.qty,face:i.bid.face})}function Bx(i){let t=i.position.y,e=i.rotation.y;i.userData.match=!0,$r(320,0,n=>{i.position.y=t+Math.sin(Math.PI*n)*.12+n*.012,i.rotation.y=e+n*Math.PI*.5,i.scale.setScalar(1+n*.14)})}function hS(i){!mn||!Ne||i.forEach(t=>{switch(t.t){case"roll":{let e=mn,n=0;pn=null,Ue.visible=!1,En.forEach(s=>{s.cheer=!1}),En.forEach(s=>{let r=e.players.find(o=>o.id===s.id);if(!r||r.eliminated){s.cupRoot.visible=!1,Zr(s);return}s.cupRoot.visible=!0,s.peekOn=!1,s.bubble&&(s.bubble.visible=!1,s.bubbleSticky=!1,s.bubble.userData.challenge=!1);let a=n++*60;Lx(s,a,()=>{s.isMe?hh.round===t.round&&(Jr(s,hh.dice,t.round),s.diceRound=t.round):(Zr(s),s.diceRound=-2),s.isMe&&(Ws=.18)})}),cf({bid:{face:0}},!1);break}case"bid":{let e=be[t.id];if(!e)break;En.forEach(n=>{n!==e&&!n.bubble.userData.challenge&&(n.bubbleSticky=!1,n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+400))}),e.bubble.userData.challenge=!1,Gd(e,{qty:t.qty,face:t.face},6e4,!0),e.nod=1,Vt&&Vt.sound&&(Vt.sound("bid",.4),Vt.sound("quack",e.isMe?.35:.5,ul(e.id),1));break}case"challenge":{let e=be[t.id];if(!e)break;En.forEach(n=>{n!==e&&n.id!==t.bidderId&&(n.bubbleUntil=Math.min(n.bubbleUntil,performance.now()+200))}),Gd(e,{kind:t.kind},6e4,!0),e.bubble.userData.challenge=!0,e.slam=1,e.flap=1,Ws=.25,Vt&&Vt.sound&&(Vt.sound("slam",.9),Vt.sound("liar",.7),Vt.sound("quack",.7,ul(e.id)*.85,2));break}case"reveal":{let e="rv"+mn.roundNo,n=Fx(t.actual),s=mn.reveal?mn.reveal.wildOnes:!0,r=performance.now();pn={t0:r,plan:n,key:e,ev:t},Ue.visible=!1;let a=0;En.forEach(o=>{let l=t.dice[o.id];l&&(o.cupRoot.visible=!0,Jr(o,l,e),o.diceRound=e,Dx(o,350+a++*90))}),setTimeout(()=>{if(!pn||pn.t0!==r)return;let o=[];En.forEach(l=>l.dice.forEach(c=>{let h=Ox(c.userData.value,t.bid.face,s);c.userData.dim=!h,c.material.forEach(d=>{d.color.setScalar(h?1:.4),d.emissiveIntensity=0}),h&&o.push(c)})),o.length||(gh({num:0,face:t.bid.face}),Vt&&Vt.sound&&Vt.sound("count",.6,0)),o.forEach((l,c)=>setTimeout(()=>{!pn||pn.t0!==r||(Bx(l),gh({num:c+1,face:t.bid.face}),Vt&&Vt.sound&&Vt.sound("count",.7,c))},c*n.step))},n.countStart),setTimeout(()=>{!pn||pn.t0!==r||(hf(t),Vt&&Vt.sound&&Vt.sound("verdict",.9,t.correct))},n.verdict);break}case"loseDie":{setTimeout(()=>{let e=be[t.id];if(!e)return;let n=e.dice.filter(s=>s.visible).pop();if(n){let s=n.position.clone(),r=6+Math.random()*4;$r(1500,0,a=>{n.position.set(s.x+a*.5,s.y+Math.sin(Math.PI*a*.8)*1.3+a*.3,s.z+a*3.2),n.rotation.x=a*r,n.rotation.z=a*r*.7,n.material.forEach(o=>{o.color.setRGB(1,1-a*.6,1-a*.6),o.transparent=!0,o.opacity=a<.75?1:1-(a-.75)/.25})},()=>{n.visible=!1})}oh("\u22121 \u{1F3B2}",e,"#ff8a7a"),e.nod=1,Vt&&Vt.sound&&(Vt.sound("lose",.7),Vt.sound("quack",.4,ul(e.id)*.8,1))},hl(800));break}case"gainDie":{setTimeout(()=>{let e=be[t.id];e&&(oh("+1 \u{1F3B2}",e,"#8aff9a"),e.flap=1)},hl(800));break}case"out":{setTimeout(()=>{let e=be[t.id];e&&(oh("\u2620",e,"#ffffff"),e.out=!0)},hl(2e3));break}case"over":{setTimeout(()=>{let e=be[t.id];e&&(e.cheer=!0,Yx(e),Vt&&Vt.sound&&(Vt.sound("win",1),Vt.sound("quack",.6,ul(e.id)*1.1,3)))},hl(2300));break}default:break}})}function $n(i,t,e){let n=di((e-i)/(t-i),0,1);return n*n*(3-2*n)}var rh=new Ft,uS=new Ft,zx=new Ft(16763024),Hx=new Ft(16738872),Gx=new Ft(15775114),kx=new Ft(12607562),Vx=new Ft(922662),Wx=new Ft(16767152),Xx=new Ft(6977712),kd=-1,ah=0;function qx(i){let t=_h!==null?_h:jd,e=ah?Math.min(2,(performance.now()-ah)/1e3):0;if(ah=performance.now(),hi+=(t-hi)*(1-Math.exp(-e*.45)),Math.abs(hi-kd)<5e-4)return;kd=hi;let n=hi,s=Bn(.2,-.14,$n(0,.85,n));qr.set(-.72,s,-.66).normalize(),Vs&&(Vs.material.uniforms.night.value=n),Di&&(Di.material.uniforms.night.value=n),Sn.position.copy(qr).multiplyScalar(30),Sn.intensity=2.6*(1-$n(.4,.85,n)),Sn.color.copy(zx).lerp(Hx,$n(.15,.7,n)),Ml.intensity=.75*$n(.55,1,n),dh.intensity=Bn(.9,.32,$n(.2,1,n)),dh.color.copy(Wx).lerp(Xx,$n(.3,1,n)),tf.intensity=Bn(.35,.18,n),rh.copy(Gx).lerp(kx,$n(0,.6,n)),rh.lerp(Vx,$n(.5,1,n)),Rt.fog.color.copy(rh),Ne.toneMappingExposure=Bn(1.05,1.22,$n(.4,1,n))}var _h=null;function dS(){return{calls:Ne.info.render.calls,triangles:Ne.info.render.triangles}}function fS(i){_h=i==null?null:di(i,0,1)}function hl(i){return pn?Math.max(0,pn.t0+pn.plan.verdict+i-performance.now()):i}function ul(i){return .8+(wl(i)>>>5)%9/20}function oh(i,t,e){let n=Tn(384,128),s=n.getContext("2d");s.textAlign="center",s.textBaseline="middle",s.font=`900 80px ${ji}`,s.lineWidth=12,s.strokeStyle="rgba(0,0,0,0.85)",s.strokeText(i,192,66),s.fillStyle=e,s.fillText(i,192,66);let r=new qn(new Ln({map:Fe(n),transparent:!0,depthTest:!1,depthWrite:!1}));r.renderOrder=20,r.scale.set(.6,.2,1);let a=t.cupRoot.position.clone();a.y+=.35,t.isMe&&(a.multiplyScalar(.45),a.y=sn+.22),r.position.copy(a),Rt.add(r),$r(1800,0,o=>{r.position.y=a.y+o*.5,r.material.opacity=o<.7?1:1-(o-.7)/.3},()=>{Rt.remove(r),r.material.map.dispose(),r.material.dispose()})}function Yx(i){let t=new vn({color:15909450,metalness:.9,roughness:.3,emissive:4861952}),e=new ie(.03,.03,.006,12),n=i.cupRoot.position.clone();for(let s=0;s<80;s++){let r=new de(e,t);r.position.copy(n),r.position.y+=.3,Rt.add(r),yl.push({m:r,vx:(Math.random()-.5)*2.5,vy:2+Math.random()*2.5,vz:(Math.random()-.5)*2.5,life:2.6+Math.random(),spin:Math.random()*12})}}var dl=new C,fl=new C,Gr=new C,oi=new C,pl=new C,lh=new tn,Vd=new tn,Wd=new xn(0,0,0,"YXZ"),Xd=new ue;function Zx(){if(!_l)return;let i=performance.now(),t=vl?Math.min(.05,(i-vl)/1e3):.016;vl=i,re+=t;for(let s=xl.length-1;s>=0;s--){let r=xl[s];if(i<r.t0)continue;let a=Math.min(1,(i-r.t0)/r.dur);r.fn(a,!r.started),r.started=!0,a>=1&&(xl.splice(s,1),r.done&&r.done())}if(Di&&(Di.material.uniforms.time.value=re),Yd.forEach(s=>{s.obj.rotation.z=s.base+Math.sin(re*1.3+s.ph)*.05,s.obj.rotation.x=Math.sin(re*.9+s.ph)*.03}),xh.forEach(s=>{let r=1+Math.sin(re*17+s.ph)*.08+Math.sin(re*29+s.ph)*.06;s.flame.scale.set(1,r,1),s.inner.scale.set(1,r*.95,1),s.glow.material.opacity=(.55+Math.sin(re*13+s.ph)*.12)*(1+hi*.7),s.glow.scale.setScalar((s.baseScale||(s.baseScale=s.glow.scale.x))*(1+hi*.9))}),Wr&&(Wr.intensity=(2+Math.sin(re*11)*.15+Math.sin(re*23)*.1)*(1+hi*1.8)),ef.forEach((s,r)=>{s.intensity=3.2*$n(.35,.9,hi)*(1+Math.sin(re*15+r*2)*.12)}),Zd.forEach(s=>{if(s.g.rotation.z=Math.sin(re*.6+s.bob)*.03,s.g.rotation.x=Math.sin(re*.45+s.bob)*.02,s.g.position.y=-.8+Math.sin(re*.8+s.bob)*.15,s.speed){let r=s.path.to-s.path.from;s.g.position.x=s.path.from+(re*s.speed+r*.35)%r}}),yh.forEach(s=>{let r=s.mesh.geometry.attributes.position,a=s.base;for(let o=0;o<r.count;o++){let l=a[o*3],c=a[o*3+1],h=s.fromPole?l:l+1.2;r.setZ(o,Math.sin(h*3.2-re*5+s.ph)*s.amp*h*.8+Math.sin(c*4+re*3)*.02)}r.needsUpdate=!0}),bn.crab){let s=Math.sin(re*.35);bn.crab.position.set(2.2+s*1.6,0,-4+Math.cos(re*.21)*.5),bn.crab.rotation.y=Math.PI/2+Math.sin(re*9)*.08}if(bn.parrot&&(bn.parrot.rotation.y=.9+Math.sin(re*.7)*.5,bn.parrot.children[1].rotation.x=Math.max(0,Math.sin(re*2.3))*.3),bn.gulls&&bn.gulls.forEach(s=>{let r=re*s.sp+s.ph;s.g.position.set(Math.cos(r)*s.r-4,s.h+Math.sin(re*.8+s.ph)*.6,Math.sin(r)*s.r-14),s.g.rotation.y=-r;let a=Math.sin(re*6+s.ph)*.45;s.wl.rotation.z=a,s.wr.rotation.z=-a}),qx(t),Ue&&Ue.visible){let s=1+.35*Math.max(0,1-(i-(Ue.userData.popT||0))/260),r=(uh?.95:.8)*s;Ue.scale.set(r,r*288/512,1)}let e=mn;En.forEach(s=>{let r=s.pose,a=s.peekOn&&Hd(s)?1:0;s.peek+=(a-s.peek)*Math.min(1,t*9),!s.anim&&r.flip<.01&&(r.tilt=s.peek*nx*(s.isMe?1:.8),Zs(s)),s.hold+=(s.holdTarget-s.hold)*Math.min(1,t*8);let o=s.turn?of(e):null;if(o!==null){let g=Math.round(o*90);s.ringKey!==g&&(s.ringKey=g,s.ring.geometry.dispose(),s.ring.geometry=new ki(.2,.245,48,1,Math.PI/2,Math.max(.001,o)*Math.PI*2),s.ring.material.color.set(o<.27?16734778:16042333)),s.ring.material.opacity=.85;let y=e.players.find(m=>m.id===s.id);y&&lf(s,y,e)}else s.ringKey!=="full"&&(s.ringKey="full",s.ring.geometry.dispose(),s.ring.geometry=new ki(.2,.235,48),s.ring.material.color.set(16042333)),s.ring.material.opacity=s.turn?.45+Math.sin(re*5)*.3:0;s.dice.forEach(g=>{g.userData.match&&g.material.forEach(y=>{y.emissiveIntensity=.35+Math.sin(re*5)*.2})}),s.bubble.visible&&i>s.bubbleUntil&&(s.bubble.visible=!1);let l=s.parts;if(l.g.updateMatrixWorld(!0),!s.isMe&&l.head){let g=s.lookYaw||0,y=e&&e.currentTurnId&&be[e.currentTurnId];be[s.id]&&(!e||!e.players.find(S=>S.id===s.id&&!S.isBot))&&y&&y!==s?(oi.copy(y.frame.position),l.g.worldToLocal(oi),g=di(Math.atan2(-oi.x,-oi.z),-1.1,1.1)):e&&e.players.find(S=>S.id===s.id&&S.isBot)&&y===s&&(g=Math.sin(re*.7+s.idx)*.25),s.lookCur+=(g-s.lookCur)*Math.min(1,t*4),s.nod=Math.max(0,s.nod-t*1.6);let m=Math.sin((1-s.nod)*Math.PI*2)*s.nod*.25,p=s.flap>0?Math.sin(re*30)*.25*s.flap:0;if(l.head.rotation.set(.1+s.peek*.55+m+(s.out?.85:0)-(s.cheer?.35:0),s.lookCur*(1-s.peek*.8)+p,s.out?.2:Math.sin(re*.5+s.idx*1.3)*.08),l.torso.rotation.x=-(s.peek*.22)-(s.slam>0?Math.sin(s.slam*Math.PI)*.18:0)+(s.out?.35:0)-Math.sin(re*1.4+s.idx)*.012,l.body.position.y=.48+(s.cheer?Math.abs(Math.sin(re*7+s.idx))*.08:0),l.eyes){s.nextBlink||(s.nextBlink=i+1e3+Math.random()*3e3);let S=i>s.nextBlink&&i<s.nextBlink+130;i>s.nextBlink+130&&(s.nextBlink=i+2e3+Math.random()*3500),l.eyes.forEach(w=>{w.m.scale.y=S||s.out?w.sy*.12:w.sy})}}s.flap=Math.max(0,(s.flap||0)-t/1.3),s.slam=Math.max(0,s.slam-t*1.8);let c=s.isMe?0:l.torso?l.torso.rotation.x:0;dl.set(.23,.48+.05+.41+c*.1,.03+c*.4),fl.set(-.23,.48+.05+.41+c*.1,.03+c*.4),s.isMe&&(dl.set(.42,.92,0),fl.set(-.36,.92,.05));let h=-(bl-cn);Gr.set(.2,sn+.03,h-.08);let d=Px(s);oi.copy(d),l.g.worldToLocal(oi);let u=s.cupRoot.visible?s.hold:0;pl.copy(Gr).lerp(oi,u),Gr.set(-.2,sn+.03+(s.slam>0?Math.sin(s.slam*Math.PI)*.25:0),h-.1);let f=s.cheer?1:s.flap>0?Math.min(1,(1-s.flap)*5)*Math.min(1,s.flap*3):0;if(!s.isMe&&(f>0||s.out)){let g=s.cheer?14:26,y=s.out?-.35:.2+Math.sin(re*g)*.1;qs.set(.33,y,s.out?.02:-.08).add(dl),fh.set(-.33,y,s.out?.02:-.08).add(fl);let m=s.out?1:f;pl.lerp(qs,m),Gr.lerp(fh,m)}Fd(l.arms[0],dl,pl),Fd(l.arms[1],fl,Gr),l.arms.forEach(g=>{let y=!(s.isMe&&s.out);g.fore.visible=g.cuff.visible=g.hand.visible=y,g.upper.visible=y&&!s.isMe})});let n=e&&be[e.meId];if(n){let s=ch&&Hd(n)?1:0;if(ks+=(s-ks)*Math.min(1,t*6),i-vh>5e3&&ks<.05){let a=0,o=e.gamePhase==="bidding"&&e.currentTurnId&&e.currentTurnId!==e.meId?be[e.currentTurnId]:null;o&&(Vr.copy(o.frame.position),n.frame.worldToLocal(Vr),a=di(Math.atan2(-Vr.x,-Vr.z)*.55,-.85,.85)),li+=(a-li)*Math.min(1,t*1.1),Qi+=(Tl-Qi)*Math.min(1,t*1.1)}let r=uh?oi.set(0,1.78,.02):oi.set(0,1.42,.3);if(n.frame.localToWorld(r),Wd.set(Qi,n.rot+li,0,"YXZ"),lh.setFromEuler(Wd),ks>.001){let a=pl.set(-.1,1.08,-.1);n.frame.localToWorld(a),r.lerp(a,ks);let o=n.cupRoot.position.clone();o.y+=.02,o.addScaledVector(n.dir,.02),Xd.lookAt(r,o,af),Vd.setFromRotationMatrix(Xd),lh.slerp(Vd,ks)}hn.position.copy(r),Ws>0&&(Ws=Math.max(0,Ws-t),hn.position.y+=Math.sin(re*90)*Ws*.02),hn.quaternion.copy(lh),Vt&&Vt.onLook&&i-Ld>400&&Math.abs(li-Dd)>.06&&(Ld=i,Dd=li,Vt.onLook(li))}else hn.position.set(0,3.2,4.2),hn.lookAt(0,sn,0);for(let s=yl.length-1;s>=0;s--){let r=yl[s];r.life-=t,r.vy-=6*t,r.m.position.x+=r.vx*t,r.m.position.y=Math.max(.01,r.m.position.y+r.vy*t),r.m.position.z+=r.vz*t,r.m.position.y<=.011?(r.vx*=.9,r.vz*=.9,r.vy=0):(r.m.rotation.x+=r.spin*t,r.m.rotation.z+=r.spin*t),r.life<=0&&(Rt.remove(r.m),yl.splice(s,1))}Ne.render(Rt,hn)}function pS(){Ne&&(Ne.setAnimationLoop(null),Ne.dispose()),Sl&&Sl.disconnect(),Me&&Me.parentNode&&Me.parentNode.removeChild(Me)}function mS(){let i={};Rt.children.forEach((n,s)=>{let r=0;n.traverse(o=>{(o.isMesh||o.isSprite)&&o.visible&&r++});let a=(n.type||"x")+(n.userData.dynamic?"*":"");i[a]=(i[a]||0)+r});let t=Object.values(be)[1],e=0;return t&&t.frame.traverse(n=>{n.isMesh&&e++}),i.perSeatFrame=e,i}export{mS as debugCounts,pS as dispose,hS as events,sS as init,Nx as resetView,lS as setLook,oS as setMyPeek,fS as setNight,aS as setPeek,rS as setVisible,dS as stats,cS as update};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
