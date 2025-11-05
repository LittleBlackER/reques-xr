var fo=Object.defineProperty;var vo=(s,e,t)=>e in s?fo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var f=(s,e,t)=>vo(s,typeof e!="symbol"?e+"":e,t);import{z as wo,B as Fe,V as L,Q as Ce,a as on,P as yo,C as Be,D as Dt,H as xo,I as Le,J as bo,N as sn,O as On,U as $n,E as kt,c as vt,Y as pn,Z as _o,d as ut,_ as Po,$ as So,a0 as ko,a1 as mn}from"./BRB8-8Y2.js";import"./DO_lMs4Z.js";import{P as Lo,C as gn,I as je}from"./SZZ8NaUf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();class Vn{constructor(){f(this,"_clearIdList",[]);this._clearIdList=[]}addListenerFn(e,t,n){e.addEventListener(t,n),this._clearIdList.push({fn:n,eventName:t,el:e})}destroy(){this._clearIdList.forEach(e=>{const{fn:t,eventName:n,el:o}=e;o.removeEventListener(n,t)}),this._clearIdList=[]}}class Qo extends Vn{constructor(){super();f(this,"_canShow","true");f(this,"remaining")}initialize(){const t=window.localStorage.getItem("tips");this._canShow=t;const n=document.getElementById("tips"),o=document.getElementById("mobileTip"),i=document.getElementById("questTip"),a=document.getElementById("allTip"),l=wo();Fe()?o.classList.remove("hidden"):l?i.classList.remove("hidden"):a.classList.remove("hidden");const r=document.getElementById("tipsConfirm");!n||t==="false"||(n.classList.remove("hidden"),this.addListenerFn(r,"click",()=>{console.log("tipsConfirm clicked"),this._canShow="false",window.localStorage.setItem("tips",this._canShow),n.classList.add("faded-out")}))}startCount(t=5,n){this.remaining=t;const o=document.getElementById("tips"),i=setInterval(()=>{this.remaining--,this.remaining>0?console.log(`剩余时间：${this.remaining} 秒`):(n==null||n(),o.classList.add("faded-out"),console.log("倒计时结束"),clearInterval(i))},1e3)}set canShow(t){this._canShow=t}get canShow(){return this._canShow}}const At=new Qo;function Co(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var jt={exports:{}},fn;function To(){return fn||(fn=1,(function(s){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function o(c,r,d){this.fn=c,this.context=r,this.once=d||!1}function i(c,r,d,m,p){if(typeof d!="function")throw new TypeError("The listener must be a function");var u=new o(d,m||c,p),w=t?t+r:r;return c._events[w]?c._events[w].fn?c._events[w]=[c._events[w],u]:c._events[w].push(u):(c._events[w]=u,c._eventsCount++),c}function a(c,r){--c._eventsCount===0?c._events=new n:delete c._events[r]}function l(){this._events=new n,this._eventsCount=0}l.prototype.eventNames=function(){var r=[],d,m;if(this._eventsCount===0)return r;for(m in d=this._events)e.call(d,m)&&r.push(t?m.slice(1):m);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(d)):r},l.prototype.listeners=function(r){var d=t?t+r:r,m=this._events[d];if(!m)return[];if(m.fn)return[m.fn];for(var p=0,u=m.length,w=new Array(u);p<u;p++)w[p]=m[p].fn;return w},l.prototype.listenerCount=function(r){var d=t?t+r:r,m=this._events[d];return m?m.fn?1:m.length:0},l.prototype.emit=function(r,d,m,p,u,w){var S=t?t+r:r;if(!this._events[S])return!1;var y=this._events[S],Q=arguments.length,x,h;if(y.fn){switch(y.once&&this.removeListener(r,y.fn,void 0,!0),Q){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,m),!0;case 4:return y.fn.call(y.context,d,m,p),!0;case 5:return y.fn.call(y.context,d,m,p,u),!0;case 6:return y.fn.call(y.context,d,m,p,u,w),!0}for(h=1,x=new Array(Q-1);h<Q;h++)x[h-1]=arguments[h];y.fn.apply(y.context,x)}else{var v=y.length,_;for(h=0;h<v;h++)switch(y[h].once&&this.removeListener(r,y[h].fn,void 0,!0),Q){case 1:y[h].fn.call(y[h].context);break;case 2:y[h].fn.call(y[h].context,d);break;case 3:y[h].fn.call(y[h].context,d,m);break;case 4:y[h].fn.call(y[h].context,d,m,p);break;default:if(!x)for(_=1,x=new Array(Q-1);_<Q;_++)x[_-1]=arguments[_];y[h].fn.apply(y[h].context,x)}}return!0},l.prototype.on=function(r,d,m){return i(this,r,d,m,!1)},l.prototype.once=function(r,d,m){return i(this,r,d,m,!0)},l.prototype.removeListener=function(r,d,m,p){var u=t?t+r:r;if(!this._events[u])return this;if(!d)return a(this,u),this;var w=this._events[u];if(w.fn)w.fn===d&&(!p||w.once)&&(!m||w.context===m)&&a(this,u);else{for(var S=0,y=[],Q=w.length;S<Q;S++)(w[S].fn!==d||p&&!w[S].once||m&&w[S].context!==m)&&y.push(w[S]);y.length?this._events[u]=y.length===1?y[0]:y:a(this,u)}return this},l.prototype.removeAllListeners=function(r){var d;return r?(d=t?t+r:r,this._events[d]&&a(this,d)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=t,l.EventEmitter=l,s.exports=l})(jt)),jt.exports}var Mo=To();const Eo=Co(Mo);class Zn{constructor(e,t){f(this,"$em");f(this,"$eventName");f(this,"$list");this.$em=e,this.$list=new Set,this.$eventName=t}emit(e){this.$em.emit(this.$eventName,e)}on(e){this.$em.on(this.$eventName,e),this.$list.add(e)}once(e){const t=(...n)=>{typeof e=="function"&&e(...n),this.$list.delete(t),this.$em.off(this.$eventName,t)};this.on(t)}off(e){e&&this.$list.has(e)?(this.$em.off(this.$eventName,e),this.$list.delete(e)):e||(this.$list.forEach(t=>{this.$em.off(this.$eventName,t)}),this.$list.clear())}}class Io extends Zn{constructor(t,n){super(t,n);f(this,"$latest");this.$latest=void 0;const o=i=>{this.$latest=i};this.on(o)}on(t){super.on(t),typeof this.$latest<"u"&&t(this.$latest)}}class Ro extends Eo{createPublisher(e){return new Zn(this,e)}createReplayPublisher(e){return new Io(this,e)}}const be=new Ro;var ht=(s=>(s.LISTEN_MESSAGE="listenMessage",s))(ht||{});let Wt=[],Ot=[];const F=(s,e,t)=>{s&&(s.addEventListener(e,t),Wt.push({fn:t,eventName:e,el:s}))},Fo=s=>{Wt.forEach(e=>{const{fn:t,eventName:n,el:o}=e;o.removeEventListener(n,t)}),Wt=[],s==null||s(),Ot.forEach(e=>{const{fn:t,type:n,el:o}=e;o.off(n,t)}),Ot=[]},T=(s,e,t)=>{s.on(e,t),Ot.push({el:s,type:e,fn:t})},Do=s=>{if(!s.frameRate){s.frameRate=60;const t=s.keyframes.times;for(let n=0;n<t.length;n++)t[n]*=60}},Ao=s=>{var e;return(e=s.animTracks)==null||e.forEach(t=>{Do(t)}),s},jo=(s,e)=>{const t=new Set(Object.keys(e));return new Proxy(e,{set(n,o,i,a){if(!t.has(o))return console.log("err"),!1;if(n[o]!==i){const l=n[o];n[o]=i,s.fire(`${o}:changed`,i,l)}return!0}})};class zo{constructor(e,t,n,o,i){f(this,"app");f(this,"gsplat");f(this,"asset");f(this,"events");f(this,"state");f(this,"timeOption");f(this,"currentSeq");f(this,"nextSeq");f(this,"prevSeq");f(this,"loadedSeq",new Map);this.app=e,this.gsplat=e.root.findComponent("gsplat"),this.asset=t,this.events=n,this.state=o,this.timeOption=i,this.init(),e.on("update",()=>{this.updateCurrentSeq()})}init(){this.currentSeq=0,this.nextSeq=1,this.prevSeq=-1,this.loadedSeq.set(this.currentSeq,!0)}updateCurrentSeq(){if(!this.timeOption)return;const{currentTime:e}=this.state;let t=this.currentSeq,n=this.nextSeq;for(let o=0;o<this.timeOption.length;o+=2)if(o===this.timeOption.length-2&&e>=this.timeOption[o]&&e<this.timeOption[o]+this.timeOption[o+1]?(t=o/2,n=0):e>=this.timeOption[o]&&e<this.timeOption[o]+this.timeOption[o+1]&&(t=o/2,n=(o+2)/2),t!==this.currentSeq){this.prevSeq=this.currentSeq,this.currentSeq=t,this.nextSeq=n,console.log("---- updateCurrentSeq",this.currentSeq,this.nextSeq),this.loadNextSeq(),this.releaseSeq();break}}loadNextSeq(){}releaseSeq(){var e,t;this.prevSeq>=0&&((t=(e=this.gsplat)==null?void 0:e.instance)==null||t.releaseSeq(this.prevSeq),this.loadedSeq.delete(this.prevSeq))}}const Ct=(s,e,t)=>s*(1-t)+e*t,Gn=(s,e)=>1-Math.pow(s,e*1e3),st=(s,e)=>(s%e+e)%e,wt=new L,vn=new L,Oe=new L;class Ye extends Ce{dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lerp(e,t,n){const o=(1-n)*(e.dot(t)<0?-1:1);return this.x=e.x*o+t.x*n,this.y=e.y*o+t.y*n,this.z=e.z*o+t.z*n,this.w=e.w*o+t.w*n,this.normalize()}fromBasis(e,t,n){const o=e.x,i=e.y,a=e.z,l=t.x,c=t.y,r=t.z,d=n.x,m=n.y,p=n.z;return p<0?o>c?this.set(1+o-c-p,i+l,d+a,r-m):this.set(i+l,1-o+c-p,r+m,d-a):o<-c?this.set(d+a,r+m,1-o-c+p,i-l):this.set(r-m,d-a,i-l,1+o+c+p),this.mulScalar(1/this.length()),this}fromLookAt(e,t){return Oe.sub2(e,t).normalize(),Math.abs(Oe.dot(L.UP))>.9999?wt.cross(L.RIGHT,Oe).normalize():wt.cross(L.UP,Oe).normalize(),vn.cross(Oe,wt),this.fromBasis(wt,vn,Oe)}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e,t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}}class qo{constructor(e,t=.05){this.dims=e.length,this.value=e,this.target=e.slice(),this.velocity=e.slice().fill(0),this.smoothTime=t}reset(e){const{dims:t,value:n,velocity:o}=this;for(let i=0;i<t;i++)n[i]=e[i],o[i]=0}update(e){const{dims:t,value:n,target:o,velocity:i,smoothTime:a}=this,l=2/a,c=l*e,r=1/(1+c+.48*c*c+.235*c*c*c);for(let d=0;d<t;d++){const m=n[d]-o[d],p=(i[d]+l*m)*e;i[d]=(i[d]-l*p)*r,n[d]=o[d]+(m+p)*r}}}class lt{constructor(e,t){f(this,"times");f(this,"knots");f(this,"dim");this.times=e,this.knots=t,this.dim=t.length/e.length/3}evaluate(e,t){const{times:n}=this,o=n.length-1;if(e<=n[0])this.getKnot(0,t);else if(e>=n[o])this.getKnot(o,t);else{let i=0;for(;e>=n[i+1];)i++;return this.evaluateSegment(i,(e-n[i])/(n[i+1]-n[i]),t)}}getKnot(e,t){const{knots:n,dim:o}=this,i=e*3*o;for(let a=0;a<o;++a)t[a]=n[i+a*3+1]}evaluateSegment(e,t,n){const{knots:o,dim:i}=this,a=t*t,l=t+t,c=1-t,r=c*c;let d=e*i*3;for(let m=0;m<i;++m){const p=o[d+1],u=o[d+2],w=o[d+i*3],S=o[d+i*3+1];d+=3,n[m]=p*((1+l)*r)+u*(t*r)+S*(a*(3-l))+w*(a*(t-1))}}static fromPoints(e,t,n=0){const o=t.length/e.length,i=new Array(e.length*o*3);for(let a=0;a<e.length;a++){const l=e[a];for(let c=0;c<o;c++){const r=a*o+c,d=t[r];let m;a===0?m=(t[r+o]-d)/(e[a+1]-l):a===e.length-1?m=(d-t[r-o])/(l-e[a-1]):m=.5*((t[r+o]-d)/(e[a+1]-l)+(d-t[r-o])/(l-e[a-1])),m*=1-n,i[r*3]=m,i[r*3+1]=d,i[r*3+2]=m}}return new lt(e,i)}static fromPointsLooping(e,t,n,o){if(t.length<2||t.length>60)return lt.fromPoints(t,n,o);const i=n.length/t.length,a=t.slice(),l=n.slice();return a.push(e+t[0],e+t[1]),l.push(...n.slice(0,i*2)),a.splice(0,0,t[t.length-2]-e,t[t.length-1]-e),l.splice(0,0,...n.slice(n.length-i*2)),lt.fromPoints(a,l,o)}}const yt=new Ye;class an{constructor(e,t,n){f(this,"spline");f(this,"frameRate");f(this,"result",[]);f(this,"position",new L);f(this,"target",new L);f(this,"rotateSpeed",.2);f(this,"rotation",new L);this.spline=e,this.timeCursor=t,this.frameRate=n,this.update(0,null)}update(e,t){const{timeCursor:n,result:o,spline:i,frameRate:a,position:l,target:c,rotateSpeed:r,rotation:d}=this;i.evaluate(n.value*a,o),o.every(isFinite)&&(l.set(o[0],o[1],o[2]),c.set(o[3],o[4],o[5])),t!=null&&t.rotate&&(t.rotate.events.indexOf("up")!==-1?d.set(0,0,0):(d.x=Math.max(-90,Math.min(90,d.x-t.rotate.value[1]*r)),d.y=Math.max(-180,Math.min(180,d.y-t.rotate.value[0]*r))))}getPose(e){const{position:t,target:n,rotation:o}=this;e.fromLookAt(t,n),yt.setFromAxisAngle(L.RIGHT,o.x),e.rotation.mul2(e.rotation,yt),yt.setFromAxisAngle(L.UP,o.y),e.rotation.mul2(yt,e.rotation)}static fromTrack(e,t){const{keyframes:n,duration:o,frameRate:i}=e,{times:a,values:l}=n,{position:c,target:r}=l,d=[];for(let u=0;u<a.length;u++)a[u]=a[u]*i,d.push(c[u*3],c[u*3+1],c[u*3+2]),d.push(r[u*3],r[u*3+1],r[u*3+2]);const m=o===a[a.length-1]/i?1:0,p=lt.fromPointsLooping((o+m)*i,a,d,-1);return new an(p,t,i)}}class Bo{constructor(e,t){f(this,"events");f(this,"controllers");f(this,"activeGestures");f(this,"dragState");f(this,"twoHandState");f(this,"smoothingFactor");f(this,"minScaleRatio");f(this,"maxScaleRatio");f(this,"deadZone");f(this,"rotationDeadZone");f(this,"session");f(this,"manager");this.events=e,this.manager=t,this.controllers=new Map,this.activeGestures=new Set,this.dragState={active:!1,handedness:null,startPosition:[0,0,0],currentPosition:[0,0,0],deltaPosition:[0,0,0],timestamp:0},this.twoHandState={active:!1,leftController:null,rightController:null,initialDistance:0,currentDistance:0,scaleRatio:1,initialAngle:0,currentAngle:0,rotationAngle:0},this.smoothingFactor=.8,this.minScaleRatio=.01,this.maxScaleRatio=100,this.deadZone=.001,this.rotationDeadZone=.001}onSessionStart(e){var t,n;this.session=e,(n=(t=this.controllers)==null?void 0:t.clear)==null||n.call(t),this.resetStates()}onSessionEnd(){this.session=null,this.controllers.clear(),this.resetStates()}resetStates(){this.dragState.active=!1,this.twoHandState.active=!1,this.activeGestures.clear()}onXRFrame(e,t){if(!this.session)return;this.updateControllers(e),this.processGestures(),this.emitGestureEvents();const n=this.controllers.get("left"),o=this.controllers.get("right"),i=[n.position[0]-o.position[0]/2,n.position[1]-o.position[1]/2,n.position[2]-o.position[2]/2];this.events.fire("xrTextPlacePosition",i)}_fingersTipDistance(e,t){return e.tip._localPosition.distance(t.tip._localPosition)<=.01}updateControllers(e){for(const t of this.manager.input.inputSources){if(!t.gamepad&&!t.hand)continue;const n=t.handedness,o=t.gamepad,i=t.hand;let a=null;try{if(t._xrInputSource.gripSpace)a=e.getPose(t._xrInputSource.gripSpace,this.manager._referenceSpace);else if(i){const p=t._xrInputSource.hand.get("thumb-tip");a=e.getJointPose(p,this.manager._referenceSpace)}}catch(p){console.warn("无法获取手柄位置:",p);continue}if(!a)continue;const l=[a.transform.position.x,a.transform.position.y,a.transform.position.z],c=[a.transform.orientation.x,a.transform.orientation.y,a.transform.orientation.z,a.transform.orientation.w];let r=o.buttons[0]&&o.buttons[0].pressed;i&&(r=this._fingersTipDistance(i.fingers[0],i.fingers[1]));const d=this.controllers.get(n),m={handedness:n,position:l,orientation:c,gripPressed:r,prevPosition:d?d.position:l,prevTriggerPressed:d?d.gripPressed:!1,timestamp:Date.now()};this.controllers.set(n,m)}}processGestures(){const e=this.controllers.get("left"),t=this.controllers.get("right");(e==null?void 0:e.gripPressed)&&(t==null?void 0:t.gripPressed)?(this.dragState.active&&this.endDrag(),this.processTwoHandGesture(e,t)):(this.twoHandState.active&&this.endTwoHandGesture(),this.processSingleHandGesture(e,t))}processSingleHandGesture(e,t){let n=null;e!=null&&e.gripPressed?n=e:t!=null&&t.gripPressed&&(n=t),n?this.dragState.active?this.dragState.handedness===n.handedness&&this.updateDrag(n):this.startDrag(n):this.dragState.active&&this.endDrag()}startDrag(e){this.dragState.active=!0,this.dragState.handedness=e.handedness,this.dragState.startPosition=[...e.position],this.dragState.currentPosition=[...e.position],this.dragState.deltaPosition=[0,0,0],this.activeGestures.add("drag"),this.events.fire("startXrDrag"),console.log(`开始拖拽 - ${e.handedness}手`)}updateDrag(e){const t=this.dragState.currentPosition;this.dragState.currentPosition=[...e.position];for(let n=0;n<3;n++){const o=this.dragState.currentPosition[n]-t[n];Math.abs(o)>this.deadZone?this.dragState.deltaPosition[n]=Ct(this.dragState.deltaPosition[n],o,this.smoothingFactor):this.dragState.deltaPosition[n]=Ct(this.dragState.deltaPosition[n],0,this.smoothingFactor)}}endDrag(){this.dragState.active=!1,this.dragState.handedness=null,this.dragState.deltaPosition=[0,0,0],this.activeGestures.delete("drag"),console.log("结束拖拽")}processTwoHandGesture(e,t){this.twoHandState.active?this.updateTwoHandGesture(e,t):this.startTwoHandGesture(e,t)}startTwoHandGesture(e,t){this.twoHandState.active=!0,this.twoHandState.leftController=e,this.twoHandState.rightController=t,this.twoHandState.initialDistance=this.calculateDistance(e.position,t.position),this.twoHandState.currentDistance=this.twoHandState.initialDistance,this.twoHandState.scaleRatio=1,this.twoHandState.initialAngle=this.calculateYAxisAngle(e.position,t.position),this.twoHandState.currentAngle=this.twoHandState.initialAngle,this.twoHandState.rotationAngle=0,this.activeGestures.add("twoHand"),this.events.fire("startXrTwoHandGesture"),console.log("开始双手操作")}updateTwoHandGesture(e,t){const n=this.calculateDistance(e.position,t.position);if(this.twoHandState.initialDistance>0){const a=n/this.twoHandState.initialDistance;this.twoHandState.scaleRatio=Math.max(this.minScaleRatio,Math.min(this.maxScaleRatio,a))}this.twoHandState.currentDistance=n;const o=this.calculateYAxisAngle(e.position,t.position);let i=o-this.twoHandState.initialAngle;i>Math.PI?i-=2*Math.PI:i<-Math.PI&&(i+=2*Math.PI),Math.abs(i)>this.rotationDeadZone?this.twoHandState.rotationAngle=i:this.twoHandState.rotationAngle=0,this.twoHandState.currentAngle=o}endTwoHandGesture(){this.twoHandState.active=!1,this.twoHandState.leftController=null,this.twoHandState.rightController=null,this.twoHandState.scaleRatio=1,this.twoHandState.rotationAngle=0,this.activeGestures.delete("twoHand"),console.log("结束双手操作")}calculateDistance(e,t){const n=e[0]-t[0];return Math.sqrt(n*n)}calculateYAxisAngle(e,t){const n=t[2]-e[2];return Math.atan(n)*2}emitGestureEvents(){this.twoHandState.active?(this.events.fire("xrTwoHandGesture",{detail:{scaleRatio:this.twoHandState.scaleRatio,currentAngle:this.twoHandState.currentAngle,rotationAngle:this.twoHandState.rotationAngle,distance:this.twoHandState.currentDistance,leftPosition:[...this.twoHandState.leftController.position],rightPosition:[...this.twoHandState.rightController.position]}}),this.events.fire("xrTextCursor",{s:this.dragState,t:this.twoHandState})):this.dragState.active&&(this.events.fire("xrDrag",{detail:{handedness:this.dragState.handedness,position:[...this.dragState.currentPosition],deltaPosition:[...this.dragState.deltaPosition],startPosition:[...this.dragState.startPosition]}}),this.events.fire("xrTextCursor",{s:this.dragState,t:this.twoHandState})),this.events.fire("xrTextCursor",{s:this.dragState,t:this.twoHandState})}getDragState(){return{active:this.dragState.active,handedness:this.dragState.handedness,position:[...this.dragState.currentPosition],deltaPosition:[...this.dragState.deltaPosition],x:this.dragState.currentPosition[0],y:this.dragState.currentPosition[1],z:this.dragState.currentPosition[2],deltaX:this.dragState.deltaPosition[0],deltaY:this.dragState.deltaPosition[1],deltaZ:this.dragState.deltaPosition[2]}}getTwoHandState(){return{active:this.twoHandState.active,scaleRatio:this.twoHandState.scaleRatio,rotationAngle:this.twoHandState.rotationAngle,rotationDegrees:this.twoHandState.rotationAngle*180/Math.PI,distance:this.twoHandState.currentDistance}}getActiveGestures(){return Array.from(this.activeGestures)}isGestureActive(e){return this.activeGestures.has(e)}setSmoothingFactor(e){this.smoothingFactor=Math.max(0,Math.min(1,e))}setScaleRange(e,t){this.minScaleRatio=Math.max(.01,e),this.maxScaleRatio=Math.max(this.minScaleRatio,t)}setDeadZones(e,t){this.deadZone=Math.max(0,e),this.rotationDeadZone=Math.max(0,t)}clear(){this.resetStates()}}class Uo{constructor(e,t,n){f(this,"events");f(this,"left");f(this,"right");f(this,"gripActive");f(this,"lastPosition");f(this,"lastRotation");f(this,"lastButtonPressTime");f(this,"debounceTime");f(this,"session");f(this,"inputSources");f(this,"gestureController");f(this,"manager");f(this,"checkInputSourcesInterval");f(this,"app");f(this,"onSessionStart",e=>{this.session=e,this.inputSources.clear();try{e.addEventListener("inputsourceschange",this.onInputSourcesChange)}catch(t){this.events.fire("xrTextCursor",{m:{errorAtext:"error add inputsourceschange"}}),console.error("无法添加inputsourceschange监听器:",t)}this.gestureController.onSessionStart(e)});f(this,"onSessionEnd",()=>{if(this.session){try{this.session.removeEventListener("inputsourceschange",this.onInputSourcesChange)}catch(e){console.error("无法移除inputsourceschange监听器:",e),this.events.fire("xrTextCursor",{m:{errorRtext:"error remove inputsourceschange"}})}this.session=null,this.inputSources.clear()}this.checkInputSourcesInterval&&(clearInterval(this.checkInputSourcesInterval),this.checkInputSourcesInterval=null),this.gripActive=!1,this.gestureController.onSessionEnd()});f(this,"onInputSourcesChange",e=>{var t;try{if(e.removed&&e.removed.length>0){let n={};for(const o of e.removed)this.inputSources.delete(o),this.app.root.removeChild(o.entity),(t=o.entity)==null||t.destroy();n[`R-${new Date().getTime()}`]=`removed inputsourceschange ${this.inputSources.size}`,this.events.fire("xrTextCursor",n)}if(e.added&&e.added.length>0){let n={};for(const o of e.added)this.inputSources.set(o,{gripPressed:!1,position:[0,0,0],rotation:[0,0,0],buttonStates:o.gamepad?Array(o.gamepad.buttons.length).fill(!1):[],inputSource:o});n[`A-${new Date().getTime()}`]=`add inputsourceschange ${this.inputSources.size}`,console.log("add",n),this.events.fire("xrTextCursor",n)}}catch(n){console.error("处理XR输入源变化时出错:",n)}});f(this,"onXRFrame",async({frame:e,screen3D:t})=>{if(this.session){this.gestureController.onXRFrame(e,t);try{for(let n of this.manager.input.inputSources)if(n.gamepad&&!n.hand){const o=n.gamepad;for(let i=0;i<o.buttons.length;++i){const a=o.buttons[i];if(a&&(a.pressed||a.value>.5)){const l=Date.now();if(this.lastButtonPressTime[i]&&l-this.lastButtonPressTime[i]<this.debounceTime)return;switch(this.lastButtonPressTime[i]=l,console.log(`xr button pressed===>>>xr: ${n.handedness} button index: ${i}`),i){case 0:break;case 1:break;case 2:break;case 3:break;case 4:n.handedness==="right"?this.events.fire("inputEvent","playPause",null):this.events.fire("inputEvent","decreaseXrPlaybackRate",null);break;case 5:n.handedness==="right"?(this.events.fire("inputEvent","resetXrPosition",null),this.events.fire("resetModelTransform")):this.events.fire("inputEvent","togglePointCloudMode",null);break}}}for(let i=0,a=0;i<o.axes.length;i+=2,++a)if(o.axes[i]!=0||o.axes[i+1]!=0){const c=o.axes[i]*.02,r=o.axes[i+1]*.02;n.handedness==="left"?(this.left.value[0]+=c,this.left.value[2]+=r):n.handedness==="right"&&(this.right.value[0]+=c,this.right.value[1]+=r),this.events.fire("xrJoystickMove",{handedness:n.handedness,moveX:c,moveZ:r})}}else n.hand}catch(n){console.error("XR控制器处理错误:",n)}}});this.events=e,this.left=t[1],this.right=t[0],this.gripActive=!1,this.lastPosition=[0,0,0],this.lastRotation=[0,0,0],this.lastButtonPressTime={},this.debounceTime=300,this.manager=n.xr,this.app=n,this.session=null,this.inputSources=new Map,this.gestureController=new Bo(e,this.manager)}update(e){}clear(){this.left.clear(),this.right.clear()}}class De{constructor(){this.value=[0,0,0],this.events=[]}add(e,t,n){this.value[0]+=e,this.value[1]+=t,this.value[2]+=n}update(e){}clear(){this.value.fill(0),this.events.splice(0)}}class Tt extends De{constructor(...e){super(),this.inputs=e}update(e){const{inputs:t,value:n,events:o}=this;t.forEach(i=>{var a;(a=i.update)==null||a.call(i,e),n[0]+=i.value[0],n[1]+=i.value[1],n[2]+=i.value[2],o.push(...i.events)})}clear(){super.clear(),this.inputs.forEach(e=>e.clear())}}class Xn extends De{constructor(){super(),this.stick=[0,0,0]}update(e){const{value:t,stick:n}=this;for(let o=0;o<3;++o)t[o]+=n[o]*e}}class wn extends Xn{constructor(){super(),this.target=[0,0,0]}update(e){const{stick:t,target:n}=this,o=Gn(.98,e);for(let i=0;i<3;++i)t[i]=Ct(t[i],n[i],o),Math.abs(t[i])<.001&&(t[i]=0);super.update(e)}}class $t extends De{constructor(){super(),this.id=null,this.prev=[0,0,0]}down(e,t,n,o=0){const{prev:i}=this;this.id=e,i[0]=t,i[1]=n,i[2]=o}move(e,t,n=0){const{value:o,prev:i}=this;o[0]+=e-i[0],o[1]+=t-i[1],o[2]+=n-i[2],i[0]=e,i[1]=t,i[2]=n}up(){this.id=null}}class No extends Xn{constructor(){super(),this.id=null,this.base=[0,0,0]}down(e,t,n,o=0){const{base:i}=this;this.id=e,i[0]=t,i[1]=n,i[2]=o}move(e,t,n=0){const{base:o,stick:i}=this;i[0]=e-o[0],i[1]=t-o[1],i[2]=n-o[2]}up(){const{stick:e}=this;this.id=null,e[0]=0,e[1]=0,e[2]=0}}class Ho{constructor(){const e=new No,t=new $t,n=o=>o===e.id?e:o===t.id?t:null;this.pointerDown=(o,i)=>{const a=o.clientX<i.getBoundingClientRect().width/2,l=a?e.id===null&&e:t.id===null&&t;l&&l.down(o.pointerId,o.clientX,o.clientY),a&&i.setPointerCapture(o.pointerId)},this.pointerMove=o=>{const i=n(o.pointerId);i&&i.move(o.clientX,o.clientY)},this.pointerUp=(o,i)=>{const a=n(o.pointerId);a&&(a.up(),a===e&&i.releasePointerCapture(o.pointerId))},this.left=e,this.right=t}}class Wo extends De{constructor(e,t){super(),this.a=e,this.b=t,this.active=!1,this.prev=[0,0,0]}update(e){const{a:t,b:n}=this;if(t.update(e),n.update(e),t.id&&n.id){const{value:o,prev:i}=this,a=t.prev,l=n.prev,c=(a[0]+l[0])*.5,r=(a[1]+l[1])*.5,d=Math.sqrt((a[0]-l[0])**2+(a[1]-l[1])**2);this.active||(this.active=!0,i[0]=c,i[1]=r,i[2]=d),o[0]=c-i[0],o[1]=r-i[1],o[2]=-(d-i[2]),i[0]=c,i[1]=r,i[2]=d,t.clear(),n.clear()}else this.active=!1}clear(){super.clear();const{a:e,b:t}=this;e.clear(),t.clear()}}class Oo{constructor(){const e=new $t,t=new $t,n=new Wo(e,t);this.pointerDown=(o,i)=>{e.id===null?(e.down(o.pointerId,o.clientX,o.clientY),i.setPointerCapture(o.pointerId)):t.id===null&&(t.down(o.pointerId,o.clientX,o.clientY),i.setPointerCapture(o.pointerId))},this.pointerMove=o=>{o.pointerId===e.id?e.move(o.clientX,o.clientY):o.pointerId===t.id&&t.move(o.clientX,o.clientY)},this.pointerUp=(o,i)=>{o.pointerId===e.id?(e.up(),i.releasePointerCapture(o.pointerId)):o.pointerId===t.id&&(t.up(),i.releasePointerCapture(o.pointerId))},this.pointerCancel=this.pointerUp,this.left=n,this.right=e}}class $o{constructor(){this.prev=[0,0,0],this.left=new De,this.middle=new De,this.right=new De}down(e,t,n=0){const{prev:o}=this;o[0]=e,o[1]=t,o[2]=n}move(e,t,n,o=0){const{prev:i}=this,a=t-i[0],l=n-i[1],c=o-i[2];i[0]=t,i[1]=n,i[2]=o,e===1?this.left.add(a,l,c):e===2?this.right.add(a,l,c):e===4&&this.middle.add(a,l,c)}up(){this.left.events.push("up")}clear(){const{left:e,right:t,middle:n}=this;e.clear(),t.clear(),n.clear()}}class Vo{constructor(e,t){const n={left:!1,right:!1,forward:!1,backward:!1,up:!1,down:!1,lookleft:!1,lookright:!1,lookup:!1,lookdown:!1},o={w:"forward",a:"left",s:"backward",d:"right",q:"up",e:"down",arrowleft:"lookleft",arrowright:"lookright",arrowup:"lookup",arrowdown:"lookdown"},i=new $o,a=new wn,l=new wn,c=new Tt(i.right,a),r=new Tt(i.left,l),{farClip:d=100,nearClip:m=.01,moveSpeed:p}=t||{};let u=!1,w=!1,S=m,y=d,Q=0;this.wheel=h=>{if(Q+=h.deltaY*p,u||w){u&&(y+=h.deltaY*p),w&&(S+=h.deltaY*p),y=Number(Number(y).toFixed(2)),S=Number(Math.max(S,0).toFixed(2)),e.fire("changeClip",{...u?{farClip:y}:{},...w?{nearClip:S}:{}});return}i.right.value[2]+=h.deltaY*.1,h.preventDefault()},this.pointerDown=(h,v)=>{i.down(h.clientX,h.clientY),v.setPointerCapture(h.pointerId)},this.pointerMove=h=>{i.move(h.buttons,h.clientX,h.clientY)},this.pointerUp=(h,v)=>{i.up(),v.releasePointerCapture(h.pointerId)},this.contextMenu=h=>h.preventDefault();const x=(h,v)=>{const _=v&&h.key.toLowerCase()==="control",I=v&&h.key.toLowerCase()==="shift";if(_||I){u=_,w=I;return}else u=_,w=I;if(h.metaKey&&v)return;const b=h.key.toLowerCase();if(o.hasOwnProperty(b)){h.stopPropagation(),h.preventDefault(),n[o[b]]=v;const C=300;switch(o[b]){case"left":case"right":a.target[0]=(n.left?-C:0)+(n.right?C:0);break;case"forward":case"backward":a.target[1]=(n.forward?-C:0)+(n.backward?C:0);break;case"up":case"down":a.target[2]=(n.up?C:0)+(n.down?-C:0);break;case"lookleft":case"lookright":l.target[0]=(n.lookleft?-C:0)+(n.lookright?C:0);break;case"lookup":case"lookdown":l.target[1]=(n.lookup?-C:0)+(n.lookdown?C:0);break}}};this.keyDown=h=>x(h,!0),this.keyUp=h=>x(h,!1),this.left=c,this.right=r}}class Zo{constructor(e,t,n,o){this.events=e,this.app=t,this.touch=new Ho,this.orbit=new Oo,this.desktop=new Vo(e,o),this.xr=new Uo(this.events,[new De,new De],t,n),this.left=new Tt(this.touch.left,this.orbit.left,this.desktop.left),this.right=new Tt(this.touch.right,this.orbit.right,this.desktop.right),this.update=i=>{this.left.update(i),this.right.update(i)},this.clear=()=>{this.left.clear(),this.right.clear()}}}const zt=new L,qt=new L,yn=new L,$e=new L,Ve=new Ye;class Go{constructor(){f(this,"position",new L);f(this,"rotation",new Ye);f(this,"distance",1);f(this,"smoothPosition",new L);f(this,"smoothRotation",new Ye);f(this,"moveSpeed",.1);f(this,"rotateSpeed",.2)}reset(e,t=!0){this.position.copy(e.position),this.rotation.copy(e.rotation),this.distance=e.distance,t&&(this.smoothPosition.copy(e.position),this.smoothRotation.copy(e.rotation))}update(e,t){t&&this.move(t),this.smooth(e)}move(e){const{position:t,rotation:n,moveSpeed:o,rotateSpeed:i}=this;n.transformVector(L.FORWARD,zt),n.transformVector(L.RIGHT,qt),n.transformVector(L.UP,yn),$e.copy(qt).mulScalar(e.move.value[0]*o),t.add($e),$e.copy(yn).mulScalar(e.move.value[2]*-o),t.add($e),$e.copy(zt).mulScalar(e.move.value[1]*-o),t.add($e),Ve.setFromAxisAngle(qt,-e.rotate.value[1]*i),n.mul2(Ve,n),Ve.setFromAxisAngle(L.UP,-e.rotate.value[0]*i),n.mul2(Ve,n),Ve.setFromAxisAngle(zt,-e.rotate.value[2]*i),n.mul(Ve,n),n.normalize()}smooth(e){const t=Gn(.98,e);this.smoothPosition.lerp(this.smoothPosition,this.position,t),this.smoothRotation.lerp(this.smoothRotation,this.rotation,t)}getPose(e){const{smoothPosition:t,smoothRotation:n,distance:o}=this;e.position.copy(t),e.rotation.copy(n),e.distance=o}}const Xo=new L,xn=new L,bn=new L,ye=new L,xt=new Ye,_n=180/Math.PI;class Yo{constructor(){f(this,"focus",new L);f(this,"rotation",new L);f(this,"distance",1);f(this,"smoothDamp",new qo([0,0,0,0,0,0,1]));f(this,"moveSpeed",.001);f(this,"rotateSpeed",.16);f(this,"distanceSpeed",.01)}reset(e,t=!0){e.rotation.transformVector(L.FORWARD,ye),ye.normalize(),this.focus.copy(ye).mulScalar(e.distance).add(e.position),this.rotation.x=Math.asin(ye.y)*_n,this.rotation.y=st(Math.atan2(-ye.x,-ye.z)*_n,360),this.rotation.z=0,this.distance=e.distance,t&&(this.focus.toArray(this.smoothDamp.value,0),this.rotation.toArray(this.smoothDamp.value,3),this.smoothDamp.value[6]=e.distance)}update(e,t){t&&this.move(t),this.smooth(e)}move(e){const{focus:t,rotation:n,moveSpeed:o,distanceSpeed:i,rotateSpeed:a}=this;xt.setFromEulerAngles(n),xt.transformVector(L.FORWARD,Xo),xt.transformVector(L.RIGHT,xn),xt.transformVector(L.UP,bn),ye.copy(xn).mulScalar(e.move.value[0]*-o*this.distance),t.add(ye),ye.copy(bn).mulScalar(e.move.value[1]*o*this.distance),t.add(ye),this.distance=Math.max(.01,this.distance*(1+e.move.value[2]*i)),n.x=Math.max(-90,Math.min(90,n.x-e.rotate.value[1]*a)),n.y=st(n.y-e.rotate.value[0]*a,360)}smooth(e){const{focus:t,rotation:n,smoothDamp:o}=this,{value:i,target:a}=o;t.toArray(a,0),n.toArray(a,3),a[6]=this.distance,i[3]=a[3]+st(i[3]-a[3]+90,180)-90,i[4]=a[4]+st(i[4]-a[4]+180,360)-180,o.update(e)}getPose(e){const{smoothDamp:t}=this,{value:n}=t;ye.fromArray(n,3),e.rotation.setFromEulerAngles(ye),e.rotation.transformVector(L.FORWARD,ye),e.distance=n[6],ye.mulScalar(-e.distance),e.position.fromArray(n).add(ye)}}const Yn=new Float32Array(1),Ko=new Uint8Array(Yn.buffer),Jo=new on(2,2,2,1),es=new on(1,1,1,0);class ts{constructor(e,t){this.app=e,this.camera=t,this.picker=null}async pick(e,t){const{app:n,camera:o}=this,{graphicsDevice:i}=n,{canvas:a}=i,l=a.clientWidth,c=a.clientHeight;t=c-t-1,this.picker||(this.picker=new yo(this.app,l,c));const{picker:r}=this;r.resize(l,c),r.prepare(o.camera,n.scene,[n.scene.layers.getLayerByName("World")]);const d=await r.renderTarget.colorBuffer.read(e,t,1,1,{renderTarget:r.renderTarget});for(let w=0;w<4;++w)Ko[w]=d[w];const m=Yn[0];if(!isFinite(m))return null;const p=new on(e/l,t/c,m,1).mul(Jo).sub(es);o.camera.projectionMatrix.clone().invert().transformVec4(p,p),p.mulScalar(1/p.w);const u=new L(p.x,p.y,p.z);return o.getWorldTransform().transformPoint(u,u),u}}class ns{constructor(e){this.target=null,this.clearIdList=[],this._addListenerFn(e,"wheel",t=>{var n,o;(o=(n=this.target)==null?void 0:n.wheel)==null||o.call(n,t,e)},{passive:!1}),this._addListenerFn(e,"pointerdown",t=>{var n,o;(o=(n=this.target)==null?void 0:n.pointerDown)==null||o.call(n,t,e)}),this._addListenerFn(e,"pointermove",t=>{var n,o;(o=(n=this.target)==null?void 0:n.pointerMove)==null||o.call(n,t,e)}),this._addListenerFn(e,"pointerup",t=>{var n,o;(o=(n=this.target)==null?void 0:n.pointerUp)==null||o.call(n,t,e)}),this._addListenerFn(e,"pointercancel",t=>{var n,o;(o=(n=this.target)==null?void 0:n.pointerCancel)==null||o.call(n,t,e)}),this._addListenerFn(e,"contextmenu",t=>{var n,o;(o=(n=this.target)==null?void 0:n.contextMenu)==null||o.call(n,t,e)}),this._addListenerFn(window,"keydown",t=>{var n,o;(o=(n=this.target)==null?void 0:n.keyDown)==null||o.call(n,t,window)}),this._addListenerFn(window,"keyup",t=>{var n,o;(o=(n=this.target)==null?void 0:n.keyUp)==null||o.call(n,t,window)})}_addListenerFn(e,t,n){e.addEventListener(t,n),this.clearIdList.push({fn:n,eventName:t,el:e})}destroy(){this.clearIdList.forEach(e=>{const{fn:t,eventName:n,el:o}=e;o.removeEventListener(n,t)}),this.clearIdList=[]}}const Pn=new L;class Ie{constructor(e){this.position=new L,this.rotation=new Ye,this.distance=1,e&&this.copy(e)}copy(e){return this.position.copy(e.position),this.rotation.copy(e.rotation),this.distance=e.distance,this}lerp(e,t,n){return this.position.lerp(e.position,t.position,n),this.rotation.lerp(e.rotation,t.rotation,n),this.distance=Ct(e.distance,t.distance,n),this}fromLookAt(e,t){return this.position.copy(e),this.rotation.fromLookAt(e,t),this.distance=e.distance(t),this}calcTarget(e){this.rotation.transformVector(L.FORWARD,Pn),e.copy(Pn).mulScalar(this.distance).add(this.position)}}class os{constructor(e,t){f(this,"duration",0);f(this,"loopMode","none");f(this,"cursor",0);this.reset(e,t)}update(e){if(this.cursor+=e,this.cursor>=this.duration)switch(this.loopMode){case"none":this.cursor=this.duration;break;case"repeat":this.cursor=this.cursor%this.duration;break;case"pingpong":this.cursor=this.cursor%(this.duration*2);break}}reset(e,t){this.duration=e,this.loopMode=t,this.cursor=0}get value(){return this.cursor>this.duration?this.duration-this.cursor:this.cursor}set value(e){this.cursor=st(e,this.duration)}}class ss{constructor(e,t,n,o){this.app=e,this.events=t,this.state=n,this.settings=o,this.gsplat=e.root.findComponent("gsplat"),this.initUI(),this.initEvents()}destroy(){this.container=document.getElementById("statsPanelContent"),this.container.innerHTML=""}initUI(){this.container=document.getElementById("statsPanelContent"),this.panel=new Lo({headerText:"Viewer Stats",width:280}),this.infoContainer=new gn({flex:!0,flexDirection:"column"}),this.cameraInfoContainer=new gn({flex:!0,flexDirection:"column"}),this.cameraPositionInfo=new je({cursor:!0}),this.cameraPositionInfo.dom.addEventListener("pointerdown",()=>{navigator.clipboard.writeText(this.cameraPositionInfo.value.split(":")[1].trim())}),this.cameraLookAtInfo=new je({cursor:!0}),this.cameraLookAtInfo.dom.addEventListener("pointerdown",()=>{navigator.clipboard.writeText(this.cameraLookAtInfo.value.split(":")[1].trim())}),this.cameraTargetInfo=new je({cursor:!0}),this.cameraTargetInfo.dom.addEventListener("pointerdown",()=>{navigator.clipboard.writeText(this.cameraTargetInfo.value.split(":")[1].trim())}),this.cameraInfo=new je({label:"Camera Info"}),this.renderInfo=new je({label:"Render Info"}),this.performanceInfo=new je({label:"Performance Info"}),this.splatInfo=new je({label:"Splat Info"}),this.systemInfo=new je({label:"System Info"}),this.infoContainer.append(this.performanceInfo),this.infoContainer.append(this.cameraInfoContainer),this.cameraInfoContainer.append(this.cameraInfo),this.cameraInfoContainer.append(this.cameraPositionInfo),this.cameraInfoContainer.append(this.cameraLookAtInfo),this.cameraInfoContainer.append(this.cameraTargetInfo),this.infoContainer.append(this.renderInfo),this.infoContainer.append(this.splatInfo),this.infoContainer.append(this.systemInfo),this.panel.append(this.infoContainer),this.container.appendChild(this.panel.dom)}initEvents(){this.app.on("framerender",()=>{this.state.statsVisible&&this.update()}),this.events.on("inputEvent",(e,t)=>{switch(e){case"information":this.update(),this.state.statsVisible=!this.state.statsVisible;break}})}update(){var p,u,w,S,y;const e=this.app.root.findByName("camera"),t=e.camera,n=e.getPosition(),o=new L,i=e.forward;o.copy(i).mulScalar(3).add(n),this.cameraPositionInfo.value=`Position: ${n.x.toFixed(10)}, ${n.y.toFixed(10)}, ${n.z.toFixed(10)}`,this.cameraLookAtInfo.value=`Look At: ${i.x.toFixed(10)}, ${i.y.toFixed(10)}, ${i.z.toFixed(10)}`,this.cameraTargetInfo.value=`Target: ${o.x.toFixed(10)}, ${o.y.toFixed(10)}, ${o.z.toFixed(10)}`,this.cameraInfo.value=`Mode: ${this.state.cameraMode}
            FOV: ${t.fov}°
            Near: ${t.nearClip}
            Far: ${t.farClip}
        `;const a=this.app.graphicsDevice,l=this.app.stats.drawCalls.total;this.renderInfo.value=`Resolution: ${a.width}x${a.height}
            Pixel Ratio: ${a.maxPixelRatio.toFixed(2)}
            HQ Mode: ${this.state.hqMode?"High Quality":"Low Quality"}
            Point Cloud Mode: ${this.state.pointCloudModeEnabled?"Enabled":"Disabled"}
            Splat Scale: ${this.state.splatScale.toFixed(2)}
            Playback Speed: ${this.state.playbackSpeed.toFixed(1)}x
            Background Color: ${this.state.backgroundColor}
            Total Duration: ${this.state.duration.toFixed(1)}s
            Current Time: ${this.state.currentTime.toFixed(1)}s
        `;const c=(p=this.gsplat)==null?void 0:p.instance,r=this.app.stats.frame.fps,d=((u=c==null?void 0:c.splat)==null?void 0:u.numSplats)||"N/A";this.performanceInfo.value=`Draw Calls: ${l}
            FPS: ${r.toFixed(1)}
            Sort Time: ${this.state.sortTime.toFixed(1)}ms  ${(this.state.sortTime*r/10).toFixed(2)}%
            Render Count: ${this.state.renderCount} splats out of ${d} (${(this.state.renderCount/d*100).toFixed(2)}%)
        `;let m="No Splat Data";if(c){const Q=(w=c.meshInstance)==null?void 0:w.aabb;let x="N/A";if(Q){const v=Q.halfExtents;x=`${(v.x*2).toFixed(6)}, ${(v.y*2).toFixed(6)}, ${(v.z*2).toFixed(6)}`}m=`File: ${((y=(S=this.app.assets.filter(v=>v.type==="gsplat")[0])==null?void 0:S.file)==null?void 0:y.url)||"N/A"}
                Rendered Splats Count: N/A
                AABB Size: ${x}
            `}this.splatInfo.value=m,this.systemInfo.value=`Device Type: ${this.state.inputMode}
            WebGL Version: ${a.isWebGL2?"WebGL 2.0":"WebGL 1.0"}
            WebGPU Version: ${a.webgpu?"WebGPU":"None"}
            XR Support: ${this.state.hasAR?"AR ":""}${this.state.hasVR?"VR":""}${!this.state.hasAR&&!this.state.hasVR?"None":""}
            Full Screen: ${this.state.isFullscreen?"Yes":"No"}
        `}}const is=`
precision highp float;

#ifdef PICK_PASS
vec4 packFloat(float depth) {
    uvec4 u = (uvec4(floatBitsToUint(depth)) >> uvec4(0u, 8u, 16u, 24u)) & 0xffu;
    return vec4(u) / 255.0;
}
#endif

varying mediump vec2 gaussianUV;
varying mediump vec4 gaussianColor;

void main(void) {
    mediump float A = dot(gaussianUV, gaussianUV);
    if (A > 1.0) {
        discard;
    }

    // evaluate alpha
    mediump float alpha = exp(-A * 4.0) * gaussianColor.a;

    #ifdef PICK_PASS
        if (alpha < 0.1) {
            discard;
        }
        gl_FragColor = packFloat(gl_FragCoord.z);
    #else
        if (alpha < 1.0 / 255.0) {
            discard;
        }

        #ifndef DITHER_NONE
            opacityDither(alpha, id * 0.013);
        #endif

        gl_FragColor = vec4(gaussianColor.xyz, alpha);
    #endif
}
`;class as{constructor(e,t,n){f(this,"events");f(this,"controller");f(this,"modelTransform");f(this,"manager");this.events=e,this.controller=t,this.manager=n,this.modelTransform={position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},this.setupEventListeners()}setupEventListeners(){this.events.on("xrDrag",e=>{this.handleDrag(e.detail)}),this.events.on("xrTwoHandGesture",e=>{this.handleTwoHandGesture(e.detail)})}handleDrag(e){const{deltaPosition:t,handedness:n}=e,o=this.manager.camera.getPosition(),i=(a,l,c)=>c?a:-a;this.modelTransform.position[0]=i(t[0],o.x,!0),this.modelTransform.position[1]=i(t[1],o.y,!0),this.modelTransform.position[2]=i(t[2],o.z,!1),this.events.fire("setNewPosition",this.modelTransform.position)}handleTwoHandGesture(e){const{scaleRatio:t,rotationAngle:n}=e,o=t;this.modelTransform.scale=[o,o,o],this.modelTransform.rotation[1]=n,this.events.fire("setNewScale",this.modelTransform.scale);const i=this.modelTransform.rotation[1]*360;this.events.fire("setNewRotationY",i)}onXRSessionStart(e){this.controller.xr.onSessionStart(e),console.log("XR手势控制已启用")}onXRSessionEnd(){this.controller.xr.onSessionEnd(),console.log("XR手势控制已禁用")}onXRFrame(e,t){this.controller.xr.onXRFrame(e,t);const n=this.controller.xr.getDragState(),o=this.controller.xr.getTwoHandState();this.controller.xr.getClapState(),this.controller.xr.getActiveGestures(),n.active&&this.onDragActive(n),o.active&&this.onTwoHandActive(o)}onDragActive(e){}onTwoHandActive(e){}getModelTransform(){return{...this.modelTransform}}resetModelTransform(){this.modelTransform={position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},this.events.fire("resetModelTransform"),console.log("模型变换已重置")}configureGestureController(){const e=this.controller.xr.gestureController;e.setSmoothingFactor(.8),e.setScaleRange(.1,5),e.setDeadZones(.001,.05)}}function rs(s,e,t){const n=new as(s,e,t);return n.configureGestureController(),n}const ve=new Ie;class ls{constructor(e,t,n,o,i,a,l){f(this,"cameraElement");f(this,"accumulatedTime",0);f(this,"frameInterval",-1);f(this,"dynamicSorting",!0);f(this,"temporalSorting",!0);f(this,"overrideDuration",-1);f(this,"getCamera",e=>{switch(e){case"orbit":return this.orbitCamera;case"anim":return this.animCamera;case"fly":return this.flyCamera}});f(this,"renderNextCurrentTime",e=>{this.timeCursor.update(e),this.RenderNextFrame(!0)});f(this,"updateFn",e=>{const t=this.state,n=this.app,o=this.controller,i=this.events,a=viewerController.getSnapshot();if(e*=a.playbackSpeed,!t.timePaused&&!t.showLoading)if(this.frameInterval>=0){if(this.accumulatedTime+=e,this.accumulatedTime>=this.frameInterval){let p=Math.floor(this.accumulatedTime/this.frameInterval);this.accumulatedTime-=p*this.frameInterval,this.renderNextCurrentTime(p*this.frameInterval)}}else this.renderNextCurrentTime(e);if(t.currentTime=this.timeCursor.value,n.xr.active)return;if(o.update(e),t.cameraMode==="orbit"){const{value:p}=o.desktop.left.inputs[1];o.left.value[0]-=p[0]*2,o.left.value[1]-=p[1]*2}else if(t.cameraMode==="fly"){const{value:p}=o.desktop.left.inputs[0];o.left.value[1]-=p[1],o.left.value[2]+=p[1]}const l=o.touch.left;l.stick.every(p=>p===0)?i.fire("touchJoystickUpdate",null):i.fire("touchJoystickUpdate",l.base,l.stick);const c={move:o.left,rotate:o.right},r=t.cameraMode==="anim"?e*this.transitionTimer:e,d=this.getCamera(t.cameraMode);if(d.update(r,t.cameraMode!=="anim"&&c,this.bbox.center),d.getPose(ve),this.applyModelState(),o.clear(),this.transitionTimer<1&&(this.transitionTimer=Math.min(1,this.transitionTimer+e),this.transitionTimer<1&&this.prevCamera)){const p=this.transitionTimer,u=1-2**-10,w=(1-2**(-10*p))/u;ve.lerp(this.prevPose,ve,w)}this.activePost.copy(ve),this.cameraEntity.setPosition(this.activePost.position),this.cameraEntity.setRotation(this.activePost.rotation);const m=this.cameraEntity.position.distance(this.bbox.center);(!window.distance||m!==window.distance)&&(window.distance=m)});const{background:c,camera:r,dynamicSorting:d,temporalSorting:m}=i,{graphicsDevice:p}=e;this.dynamicSorting=d,this.temporalSorting=m,this.overrideDuration=l,this.app=e,this.timeCursor=new os,this.cameraEntity=t,this.events=n,this.state=o,this.settings=i,i.fps>=0&&(this.frameInterval=1/i.fps),this.params=a,this.gsplat=e.root.findComponent("gsplat"),e.autoRender=!1,t.camera.clearColor=new Be(c==null?void 0:c.color),t.camera.fov=r?r.fov:50,console.log(t.camera.shaderParams.gammaCorrection,"!!!"),this.statsPanel=new ss(e,n,o,i);const u=()=>{this.cameraEntity.camera.horizontalFov=p.width>p.height};p.on("resizecanvas",()=>{u(),this.RenderNextFrame(!0)}),u();const w=new Dt,S=new Dt;e.on("framerender",()=>{const y=this.cameraEntity.getWorldTransform(),Q=this.cameraEntity.camera.projectionMatrix,x=(h,v,_=1e-4)=>!h.some((I,b)=>Math.abs(I-v[b])>=_);this.params.ministats&&this.RenderNextFrame(!0),!e.autoRender&&!e.renderNextFrame&&(!x(y.data,S.data)||!x(Q.data,w.data))&&this.RenderNextFrame(!0),e.renderNextFrame&&(S.copy(y),w.copy(Q)),o.readyToRender||this.RenderNextFrame(!1)}),T(n,"hqMode:changed",y=>{p.maxPixelRatio=y?window.devicePixelRatio:1,this.RenderNextFrame(!0)}),p.maxPixelRatio=o.hqMode?window.devicePixelRatio:1,T(n,"loaded",()=>{console.log("loaded^^ can start rendering"),this.initialize()}),this.initCameraElement()}RenderNextFrame(e){this.app.renderNextFrame=e}destroy(){this.pointerDevice.destroy(),this.statsPanel.destroy()}async initCameraElement(){this.cameraElement=await document.querySelector('pc-entity[name="camera"]').ready()}updateGSMaterial(){const{instance:e}=this.gsplat;e.createMaterial({fragment:is})}initialize(){var ge,K,H,J,$,Z,ee,ne,le,q,V,me;this.gsplat=this.app.root.findComponent("gsplat");const{app:e,cameraEntity:t,events:n,state:o,settings:i,gsplat:a}=this,l=((K=(ge=a==null?void 0:a.instance)==null?void 0:ge.meshInstance)==null?void 0:K.aabb)??new xo;this.bbox=l,this.updateGSMaterial();const c=(k,E)=>{var we;const{animTracks:R,camera:U}=k;if((R==null?void 0:R.length)>0&&U.startAnim==="animTrack"){const ue=R.find(ie=>ie.name===U.animTrack);if(ue){let ie=ue==null?void 0:ue.duration;return this.overrideDuration>0&&ie>0?ie=Math.min(this.overrideDuration,ie):this.overrideDuration>0&&ie<=0?ie=this.overrideDuration:ie<=0&&(ie=5),ue.duration=ie,ue}}const W=2;let A=(R==null?void 0:R.length)>0?((we=R[0])==null?void 0:we.duration)||5:-1;this.overrideDuration>0&&A>0?A=Math.min(this.overrideDuration,A):this.overrideDuration>0&&A<=0?A=this.overrideDuration:A<=0&&(A=5);const G=new Array(W).fill(0).map((ue,ie)=>ie/W*A),oe=[],he=[],ce=new L;E.calcTarget(ce);const te=new Dt,se=new L,pe=new L(E.position.x-ce.x,E.position.y-ce.y,E.position.z-ce.z);for(let ue=0;ue<W;++ue)te.setFromEulerAngles(0,ue/W*90,0),te.transformPoint(pe,se),oe.push(ce.x+se.x),oe.push(ce.y+se.y),oe.push(ce.z+se.z),he.push(ce.x),he.push(ce.y),he.push(ce.z);return{name:"rotate",duration:A,frameRate:60,target:"camera",loopMode:"repeat",interpolation:"spline",keyframes:{times:G,values:{position:oe,target:he}}}},r=(()=>{const E=l.halfExtents.length()/Math.sin(t.camera.fov/180*Math.PI*.5);return new Ie().fromLookAt(new L(-1,.5,-1).normalize().mulScalar(E*.5).add(l.center),l.center)})(),d=(()=>{const{position:k,target:E}=this.settings.camera??{};return new Ie().fromLookAt(new L(k??[-1,1,-1]),new L(E??[0,1,0]))})(),m=((H=i==null?void 0:i.camera)==null?void 0:H.position)||((J=i==null?void 0:i.camera)==null?void 0:J.target)||l.halfExtents.length()>100,p=new Ie(m?d:r),u=c(i,p);this.timeCursor.reset(u.duration,u.loopMode);const w=an.fromTrack(u,this.timeCursor),S=new Yo,y=new Go,Q=k=>{switch(k){case"orbit":return S;case"anim":return w;case"fly":return y}};y.moveSpeed=Math.max(.05,Math.min(1,l.halfExtents.length()*1e-4)),this.moveSpeed=Math.max(.05,Math.min(1,l.halfExtents.length()*1e-4)),o.hasAnimationCamera=!!w,o.duration=this.timeCursor.duration,o.cameraMode=w?"anim":"orbit";const x=new Ie;o.cameraMode==="anim"?w.getPose(x):x.copy(p),S.reset(x),y.reset(x),this.pointerDevice=new ns(e.graphicsDevice.canvas);const h={nearClip:t.camera.nearClip,farClip:t.camera.farClip,moveSpeed:this.moveSpeed},v=new Zo(n,e,this.settings.xrCamera,h);rs(n,v,e.xr),T(n,"xrSessionStart",k=>{v.xr.onSessionStart(k)}),T(n,"xrSessionEnd",()=>{v.xr.onSessionEnd()}),T(n,"xrFrame",k=>{v.xr.onXRFrame(k)});let _=0;const I=new Ie;let b=null,C="orbit";const D=()=>{switch(o.cameraMode){case"orbit":this.pointerDevice.target=o.inputMode==="touch"?v.orbit:v.desktop;break;case"anim":this.pointerDevice.target=null;break;case"fly":this.pointerDevice.target=o.inputMode==="touch"?v.touch:v.desktop;break}};D(),T(n,"inputMode:changed",(k,E)=>{D()});const N=k=>{o.cameraMode==="anim"&&(o.cameraMode=C),o.cameraMode==="orbit"?S.reset(k,!1):o.cameraMode==="fly"&&y.reset(k,!1)};T(n,"inputEvent",(k,E)=>{switch(k){case"frame":N(r);break;case"reset":N(d);break;case"cancel":case"interrupt":o.cameraMode==="anim"&&(o.cameraMode=C);break}}),e.on("update",k=>{if(k*=o.playbackSpeed,!o.timePaused)if(this.frameInterval>=0){if(this.accumulatedTime+=k,this.accumulatedTime>=this.frameInterval){let A=Math.floor(this.accumulatedTime/this.frameInterval);this.accumulatedTime-=A*this.frameInterval,this.timeCursor.update(A*this.frameInterval),this.RenderNextFrame(!0)}}else this.timeCursor.update(k),this.RenderNextFrame(!0);if(o.currentTime=this.timeCursor.value,e.xr.active)return;if(v.update(k),o.cameraMode==="orbit"){const{value:A}=v.desktop.left.inputs[1];v.left.value[0]-=A[0]*2,v.left.value[1]-=A[1]*2}else if(o.cameraMode==="fly"){const{value:A}=v.desktop.left.inputs[0];v.left.value[1]-=A[1],v.left.value[2]+=A[1]}const E=v.touch.left;E.stick.every(A=>A===0)?n.fire("touchJoystickUpdate",null):n.fire("touchJoystickUpdate",E.base,E.stick);const R={move:v.left,rotate:v.right},U=o.cameraMode==="anim"?k*_:k,W=Q(o.cameraMode);if(W.update(U,o.cameraMode!=="anim"&&R),W.getPose(ve),v.clear(),_<1&&(_=Math.min(1,_+k),_<1&&b)){const A=_,G=1-2**-10,oe=(1-2**(-10*A))/G;ve.lerp(I,ve,oe)}x.copy(ve),t.setPosition(x.position),t.setRotation(x.rotation)}),T(n,"currentTime:changed",()=>{var A,G,oe,he;const k=u==null?void 0:u.frameRate,E=(G=(A=this.gsplat)==null?void 0:A.instance)==null?void 0:G.material,R=this.timeCursor.value*k/60;let U=R;const W=u==null?void 0:u.frameTs;if(W){const ce=Math.floor(R*60),te=W==null?void 0:W[ce];te>0&&(U=te/60)}(he=(oe=this.gsplat)==null?void 0:oe.instance)==null||he.updateTime(U),E&&E.setParameter("uTime",U)}),T(n,"inputEvent",(k,E)=>{var U,W,A,G;const R=(W=(U=this.gsplat)==null?void 0:U.instance)==null?void 0:W.material;switch(k){case"toggleDebugMode":o.debugModeEnabled=!o.debugModeEnabled;break;case"decreaseSplatSize":o.splatScale=Math.max(o.splatScale-.05,.01),R==null||R.setParameter("uSplatScale",o.splatScale),this.RenderNextFrame(!0);break;case"increaseSplatSize":o.splatScale=Math.min(o.splatScale+.05,1),R==null||R.setParameter("uSplatScale",o.splatScale),this.RenderNextFrame(!0);break;case"togglePointCloudMode":o.pointCloudModeEnabled=!o.pointCloudModeEnabled,R==null||R.setParameter("pointCloudModeEnabled",o.pointCloudModeEnabled?1:0),this.RenderNextFrame(!0);break;case"toggleBackgroundColor":o.backgroundColor==="original"?(o.backgroundColor="white",t.camera.clearColor=new Be(1,1,1)):o.backgroundColor==="white"?(o.backgroundColor="black",t.camera.clearColor=new Be(0,0,0)):(o.backgroundColor="original",t.camera.clearColor=new Be(i.background.color)),this.RenderNextFrame(!0);break;case"framePlaybackForward":o.timePaused=!0,this.timeCursor.update(.05),this.RenderNextFrame(!0);break;case"framePlaybackBackward":o.timePaused=!0,this.timeCursor.update(-.05),this.RenderNextFrame(!0);break;case"decreasePlaybackRate":o.playbackSpeed=Math.max(o.playbackSpeed-.1,.1);break;case"increasePlaybackRate":o.playbackSpeed=Math.min(o.playbackSpeed+.1,2);break;case"slowMotion":o.playbackSpeed>=1?o.playbackSpeed=.2:o.playbackSpeed=1;break;case"decreaseXrPlaybackRate":o.playbackSpeed>=1?o.playbackSpeed=.2:o.playbackSpeed=1;break;case"resetPlaybackRate":o.playbackSpeed=1;break;case"resetXrPosition":const oe=(G=(A=this.cameraElement)==null?void 0:A.parentElement)==null?void 0:G.entity;if(oe){const he=(()=>{const{position:ce,target:te}=this.settings.xrCamera;return new Ie().fromLookAt(new L(ce??[0,0,-2]),new L(te??[0,0,0]))})();oe.setPosition(he.position.x,he.position.y,he.position.z),oe.setRotation(he.rotation)}break}});const Y=({position:k,target:E,fov:R})=>{o.cameraMode="orbit";const U=new Ie().fromLookAt(new L(k??[-1,1,-1]),new L(E??[0,1,0]));return N(U),R&&(t.camera.fov=R),{camera:Q(o.cameraMode),newPose:U}};($=n==null?void 0:n.function)==null||$.call(n,"getOrbitCameraActive",Y),((Z=window.super_camera_setting)==null?void 0:Z.length)>0&&(window.super_camera_setting=(ne=(ee=window.super_camera_setting)==null?void 0:ee.map(k=>(k&&Y(k),null)))==null?void 0:ne.filter(k=>!!k)),T(n,"cameraMode:changed",(k,E)=>{switch(C=E,b=Q(E),b.getPose(I),k){case"orbit":case"fly":Q(k).reset(ve);break}_=0,D()}),T(n,"setCurrentTime",k=>{if(this.frameInterval>=0){let E=Math.floor(k/this.frameInterval);this.timeCursor.value=E*this.frameInterval,this.accumulatedTime=0}else this.timeCursor.value=k;this.RenderNextFrame(!0)});let B=null;T(n,"inputEvent",async(k,E)=>{var R,U;if(o.cameraMode==="orbit"&&k==="dblclick"){this.updateGSMaterial(),B||(B=new ts(e,t));const{top:W=0,left:A=0}=((U=(R=E.target)==null?void 0:R.getBoundingClientRect)==null?void 0:U.call(R))||{},G=await B.pick(E.clientX-A,E.clientY-W);G&&(S.getPose(ve),ve.fromLookAt(ve.position,G),S.reset(ve,!1),console.log("---- orbitCamera position",[ve.position.x,ve.position.y,ve.position.z]),console.log("---- orbitCamera target",[G.x,G.y,G.z]))}}),t.setPosition(x.position),t.setRotation(x.rotation);let M=!1;(q=(le=a==null?void 0:a.instance)==null?void 0:le.sorter)==null||q.on("initialized",()=>{var k,E,R,U,W;typeof this.dynamicSorting=="boolean"?(E=(k=a==null?void 0:a.instance)==null?void 0:k.sorter)==null||E.setUseDynamicSort(this.dynamicSorting):(U=(R=a==null?void 0:a.instance)==null?void 0:R.sorter)==null||U.setUseDynamicSort(!0),M&&((W=a==null?void 0:a.instance)==null||W.sort(t))}),T(n,"loadAllAssetsDone",()=>{var k;M=!0,(k=a==null?void 0:a.instance)==null||k.sort(t)}),(me=(V=a==null?void 0:a.instance)==null?void 0:V.sorter)==null||me.on("updated",(k,E)=>{var R,U,W,A;if(typeof this.temporalSorting=="boolean"&&!this.temporalSorting?(U=(R=a==null?void 0:a.instance)==null?void 0:R.sorter)==null||U.setUseTemporalSort(!1):(A=(W=a==null?void 0:a.instance)==null?void 0:W.sorter)==null||A.setUseTemporalSort(!0),E>0&&(o.sortTime=E),o.renderCount=k,this.RenderNextFrame(!0),!o.readyToRender){o.readyToRender=!0;const G=e.on("frameend",()=>{var oe;G.off(),n.fire("firstFrame"),(oe=window.firstFrame)==null||oe.call(window)})}});let z=0,re=0;T(n,"xrJoystickMove",k=>{var A,G,oe,he,ce;if(!e.xr.active)return;const E=(G=(A=this.cameraElement)==null?void 0:A.parentElement)==null?void 0:G.entity;if(!E)return;const R=((ce=(he=(oe=a==null?void 0:a.instance)==null?void 0:oe.meshInstance)==null?void 0:he.aabb)==null?void 0:ce.halfExtents.length())||1,U=Math.max(.5,Math.min(2,R*.1)),W=40;if(k.handedness==="left"){const te=E.getPosition().clone(),se=E.getRotation().clone(),pe=new L(0,0,-1),fe=new L(1,0,0),we=new L,ue=new L;se.transformVector(pe,we),se.transformVector(fe,ue),pe.copy(we),fe.copy(ue),pe.y=0,fe.y=0,pe.length()>0&&pe.normalize(),fe.length()>0&&fe.normalize();const ie=new L;ie.add(fe.mulScalar(k.moveX*U)),ie.add(pe.mulScalar(-k.moveZ*U)),E.setPosition(te.x+ie.x,te.y,te.z+ie.z)}else if(k.handedness==="right"){let te=k.moveX*W,se=k.moveZ*W;const pe=.3;te=te*pe+z*(1-pe),se=se*pe+re*(1-pe),z=te,re=se;const fe=E.getRotation().clone(),we=fe.getEulerAngles();(we.x>60&&se>0||we.x<-60&&se<0)&&(se*=.2);const ue=new L(0,1,0),ie=new Ce().setFromAxisAngle(ue,te);let Ae=new Ce().mul2(ie,fe);const We=new L(1,0,0),g=new L;fe.transformVector(We,g);const P=new Ce().setFromAxisAngle(g,se);Ae=new Ce().mul2(P,Ae),E.setRotation(Ae)}this.RenderNextFrame(!0)}),T(n,"changeClip",k=>{var U;const{farClip:E,nearClip:R}=k;E&&(t.camera.farClip=E),R&&(t.camera.nearClip=R),(U=a==null?void 0:a.instance)==null||U.sort(t)}),this.controller=v,this.orbitCamera=S,this.flyCamera=y,this.animCamera=w,this.prevCamera=b,this.prevPose=I}}class cs{constructor(){f(this,"performance");f(this,"navigator");f(this,"metrics",null);f(this,"error",null);this.performance=window.performance,this.navigator=window.navigator}getDeviceType(){const e=this.navigator.userAgent.toLowerCase(),t=this.navigator.platform.toLowerCase();return/iphone|ipad|ipod/.test(e)?"iOS":/android/.test(e)?"Android":/mac/.test(t)?"macOS":/win/.test(t)?"Windows":/linux/.test(t)?"Linux":"Unknown"}getDeviceInfo(){return{userAgent:this.navigator.userAgent,platform:this.navigator.platform,language:this.navigator.language,deviceMemory:this.navigator.deviceMemory||"unknown",hardwareConcurrency:this.navigator.hardwareConcurrency||"unknown",maxTouchPoints:this.navigator.maxTouchPoints||"unknown",deviceType:this.getDeviceType()}}getMemoryInfo(){return this.performance.memory?{totalJSHeapSize:this.performance.memory.totalJSHeapSize,usedJSHeapSize:this.performance.memory.usedJSHeapSize,jsHeapSizeLimit:this.performance.memory.jsHeapSizeLimit}:"Memory API not available"}async getGPUInfo(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)return"WebGL not supported";const n=t.getExtension("WEBGL_debug_renderer_info");return n?{vendor:t.getParameter(n.UNMASKED_VENDOR_WEBGL),renderer:t.getParameter(n.UNMASKED_RENDERER_WEBGL)}:"GPU info not available"}catch(e){return`Error getting GPU info: ${e.message}`}}measureFPS(){return new Promise(e=>{let t=0,n=performance.now();function o(){t++;const a=performance.now()-n;if(a>=1e3){const l=Math.round(t*1e3/a);e(l);return}requestAnimationFrame(o)}requestAnimationFrame(o)})}async refresh(){try{this.error=null;const e={deviceInfo:this.getDeviceInfo(),memoryInfo:this.getMemoryInfo(),gpuInfo:await this.getGPUInfo(),fps:await this.measureFPS()};this.metrics=e}catch(e){this.error=e.message}}getMetrics(){return this.metrics}getError(){return this.error}async initialize(){await this.refresh()}}const bt=new L,ds=s=>{const e=us(s);return Number(e.horizontalFov.toFixed(2))},us=s=>{const e=s[0][0],t=s[1][1],n=s[0][2],o=s[1][2],i=2*n,a=2*o,c=2*Math.atan2(i/2,e)*180/Math.PI,d=2*Math.atan2(a/2,t)*180/Math.PI;return{horizontalFov:c,verticalFov:d}},hs=async s=>{var _,I;const t=await(await fetch(s)).text(),n=60,o=(_=t.trim().split(`
`))==null?void 0:_.map(b=>b.replace(/\r/g,"")),i=o[0].split(","),a=i.findIndex(b=>b.trim()==="frame"),l=i.findIndex(b=>b.trim()==="ts"),c=[i.findIndex(b=>b.trim()==="trans_0"),i.findIndex(b=>b.trim()==="trans_1"),i.findIndex(b=>b.trim()==="trans_2")],r=Array(3).fill(0).map(()=>Array(3).fill(-1));for(let b=0;b<3;b++)for(let C=0;C<3;C++)r[b][C]=i.findIndex(D=>D.trim()===`rots_${b}_${C}`);const d=Array(3).fill(0).map(()=>Array(3).fill(-1));for(let b=0;b<3;b++)for(let C=0;C<3;C++)d[b][C]=i.findIndex(D=>D.trim()===`Ks_${b}_${C}`);if(a===-1||c.some(b=>b===-1)||r.some(b=>b.some(C=>C===-1))){console.error("CSV格式不符合预期，缺少必要字段");return}const m=new L(0,0,0),p=[];let u,w=[],S=[],y=[],Q={};for(let b=1;b<o.length;b++){const C=o[b].split(","),D=c.map(Y=>parseFloat(C[Y])),N=new L(D[0],D[1],D[2]);p.push(N),m.add(N)}p.length>0&&m.mulScalar(1/p.length);for(let b=1;b<o.length;b++){const C=o[b].split(",");parseInt(C[a],10);const D=c.map(Z=>parseFloat(C[Z])),N=[];for(let Z=0;Z<3;Z++){const ee=[];for(let ne=0;ne<3;ne++)ee.push(parseFloat(C[r[Z][ne]]));N.push(ee)}let Y=null;if(d.every(Z=>Z.every(ee=>ee!==-1))){Y=[];for(let Z=0;Z<3;Z++){const ee=[];for(let ne=0;ne<3;ne++)ee.push(parseFloat(C[d[Z][ne]]));Y.push(ee)}}const M=new L(D[0],D[1],D[2]),z=new L(N[0][2],N[1][2],N[2][2]);bt.copy(z).normalize().mulScalar(2).add(M);const ge=Y?ds(Y):50,H=parseInt(C[a],10)/n,J=[M.x,M.y,M.z],$=[bt.x,bt.y,bt.z];w=w.concat([H]),Q[parseInt(C[a],10)]=parseInt(C[l],10),S=S.concat(J),y=y.concat($),u={startAnim:"animTrack",animTrack:"cameraAnim",fov:ge,position:J,target:$}}const x=(I=o.at(-1))==null?void 0:I.split(","),h=parseInt(x[a],10)/n;let v=Ee.settings;return v.animTracks=[{name:"cameraAnim",target:"camera",loopMode:"repeat",interpolation:"spline",duration:h,frameRate:n,keyframes:{times:w,values:{position:S,target:y}},frameTs:Q}],v.camera=u,v},ps=async s=>{let e=null;return/(^https?:\/\/|.*\.(json|csz))/.test(s)?(s.endsWith(".csv")?e=await hs(s):e=await fetch(`${s}?t=${Date.now()}`).then(n=>n.json()),console.log("formateCameraSettings csv===>>>",e),e):null},ms={desc:"100w nosh",plyPath:"/4dgs/demo/new_dance_color_seg300-606_mvc_sh0.ply",timeOption:"0,5",posterPath:"/4dgs/demo/new/0512_dance_color.png",settingPath:"/4dgs/demo/0512_dance_color_long_settings.json",previewPath:"/4dgs/demo/new/0512_dance_color.webm",scale:"1,1,1",showDemo:"ysjf,4dv"},gs={plyPath:"/4dgs/demo/new/new_corgi_seg_0.4dv",lowVRPlyPath:"/4dgs/demo/new/corgi_l.4dv",lowPlyPath:"/4dgs/demo/new/corgi_l.4dv",posterPath:"/4dgs/demo/new/corgi.webp",previewPath:"/4dgs/demo/new/corgi.webm",settingPath:"/4dgs/demo/new/corgi_settings.json",scale:"1,1,1",showDemo:"4dv,ysjf"},fs={plyPath:"/4dgs/demo/new/new_timtalk_seg_1.4dv, /4dgs/demo/new/new_timtalk_seg_2.4dv, /4dgs/demo/new/new_timtalk_seg_3.4dv",lowVRPlyPath:"/4dgs/demo/new/new_timtalk_seg_1.4dv",lowPlyPath:"/4dgs/demo/new/new_timtalk_seg_1.4dv",highPlyPath:"/4dgs/demo/new/timtalk_0_h.4dv",timeOption:"0,5,5,5,10,4.7",settingPath:"/4dgs/demo/new/timtalk_settings.json",posterPath:"/4dgs/demo/new/timtalk.png",previewPath:"/4dgs/demo/new/timtalk.webm",audioPath:"/4dgs/demo/new/tim-talk-0610-20s.wav",audioPosition:"0,0,0",scale:"1.13,1.13,1.13",showDemo:"ysjf,4dv"},vs={plyPath:"/4dgs/demo/dance_white_seg_1_3.4dv, /4dgs/demo/dance_white_seg_2_3.4dv, /4dgs/demo/dance_white_seg_3_3.4dv",lowVRPlyPath:"/4dgs/demo/dance_white_seg_1_3.4dv",lowPlyPath:"/4dgs/demo/dance_white_seg_1_3.4dv",timeOption:"0,5,5,5,10,5",posterPath:"/4dgs/demo/new/0512_dance_white.png",settingPath:"/4dgs/demo/dance_color_settings.json",previewPath:"/4dgs/demo/dance_white.webm",scale:"1,1,1",showDemo:""},ws={plyPath:"/4dgs/demo/new/neemo.compressed.ply",settingPath:"/4dgs/demo/new/neemo_settings.json",position:"0,0,0",rotation:"0,0,0",scale:"1.4,1.4,1.4"},ys={plyPath:"/4dgs/demo/new/neemo_m.compressed.ply",lowVRPlyPath:"/4dgs/demo/new/neemo_l.compressed.ply",lowPlyPath:"/4dgs/demo/new/neemo_l.compressed.ply",highPlyPath:"/4dgs/demo/new/neemo_h.compressed.ply",settingPath:"/4dgs/demo/new/neemo2_1_settings.json",audioPath:"/4dgs/demo/new/neemo_1.wav",position:"0,0,0",rotation:"0,0,0",audioPosition:"0,0,0",scale:"1.25,1.25,1.25"},xs={plyPath:"/4dgs/demo/new/neemo3_m.compressed.ply",lowVRPlyPath:"/4dgs/demo/new/neemo3_l.compressed.ply",lowPlyPath:"/4dgs/demo/new/neemo3_l.compressed.ply",highPlyPath:"/4dgs/demo/new/neemo3_h.compressed.ply",settingPath:"/4dgs/demo/new/neemo3_settings.json",audioPath:"/4dgs/demo/new/neemo3.wav",position:"0,0,0",rotation:"0,0,0",audioPosition:"0,0,0",scale:"1.25,1.25,1.25"},bs={plyPath:"/4dgs/demo/new/boss_bg.ply",settingPath:"/4dgs/demo/new/boss_bg_settings.json",scale:"1,1,1"},_s={plyPath:"/4dgs/demo/new/ysjf_lsw.compressed.ply",settingPath:"/4dgs/demo/new/ysjf_lsw_settings.json",scale:"0.6,0.6,0.6"},Ps={plyPath:"/4dgs/demo/new/boss_seg_3.compressed.ply",lowVRPlyPath:"/4dgs/demo/new/boss_seg_3_l.compressed.ply",lowPlyPath:"/4dgs/demo/new/boss_seg_3_l.compressed.ply",highPlyPath:"/4dgs/demo/new/boss_seg_3_h.compressed.ply",settingPath:"/4dgs/demo/new/boss_seg_3_settings.json",scale:"1,1,1"},Ss={plyPath:"/4dgs/demo/new/new_jazz_seg_7155-7461.4dv, /4dgs/demo/new/new_jazz_seg_7455-7761.4dv, /4dgs/demo/new/new_jazz_seg_7755-8061.4dv",lowVRPlyPath:"/4dgs/demo/new/new_jazz_seg_7155-7461.4dv",lowPlyPath:"/4dgs/demo/new/new_jazz_seg_7155-7461.4dv",timeOption:"0,5,5,5,10,5",settingPath:"/4dgs/demo/new/jazz_settings.json",posterPath:"/4dgs/demo/new/new_jazz.png",previewPath:"/4dgs/demo/new/new_jazz.webm",audioPath:"/4dgs/demo/new/jazz.wav",scale:"0.54,0.54,0.54",showDemo:"ysjf,4dv"},ks={plyPath:"/4dgs/demo/new/new_dance_seg_0.4dv, /4dgs/demo/new/new_dance_seg_1.4dv, /4dgs/demo/new/new_dance_seg_2.4dv",lowVRPlyPath:"/4dgs/demo/new/new_dance_seg_0.4dv",lowPlyPath:"/4dgs/demo/new/new_dance_seg_0.4dv",timeOption:"0,5,5,5,10,5",settingPath:"/4dgs/demo/new/dance_settings.json",posterPath:"/4dgs/demo/new/dance.png",previewPath:"/4dgs/demo/new/dance.webm",scale:"0.48,0.48,0.48",showDemo:"ysjf,4dv"},Ls={plyPath:"/4dgs/demo/new/dtwd_seg_0_l.4dv",lowVRPlyPath:"/4dgs/demo/new/dtwd_seg_0_l.4dv",lowPlyPath:"/4dgs/demo/new/dtwd_seg_0_l.4dv",highPlyPath:"/4dgs/demo/new/dtwd_seg_0_h.4dv",settingPath:"/4dgs/demo/new/dtwd_settings_1.json",posterPath:"/4dgs/demo/new/shiku_dtwd.png",previewPath:"/4dgs/demo/new/shiku_dtwd.webm",scale:"1.4,1.4,1.4",showDemo:"ysjf,4dv,yg"},Qs={plyPath:"/4dgs/demo/new/no10_l.4dv",lowVRPlyPath:"/4dgs/demo/new/no10_l.4dv",lowPlyPath:"/4dgs/demo/new/no10_l.4dv",highPlyPath:"/4dgs/demo/new/no10_h.4dv",settingPath:"/4dgs/demo/new/shiku_no10_settings.json",posterPath:"/4dgs/demo/new/no10.png",previewPath:"/4dgs/demo/new/no10.webm",scale:"1,1,1",showDemo:"ysjf,4dv,yg"},Cs={plyPath:"/4dgs/demo/new/no13_l.4dv",lowVRPlyPath:"/4dgs/demo/new/no13_l.4dv",lowPlyPath:"/4dgs/demo/new/no13_l.4dv",settingPath:"/4dgs/demo/new/shiku_no13_settings.json",posterPath:"/4dgs/demo/new/no13.png",previewPath:"/4dgs/demo/new/no13.webm",scale:"1,1,1",showDemo:"ysjf,4dv,yg"},Ts={plyPath:"/4dgs/demo/new/shiku_no20_dance.compressed.ply",settingPath:"/4dgs/demo/new/shiku_no20_dance_settings.json",scale:"1,1,1",showDemo:""},Ms={plyPath:"/4dgs/demo/new/corgi_5s_300frames_60fps_300w_200epoch_delete.4dv",settingPath:"/4dgs/demo/new/corgi_5s_300frames_60fps_300w_200epoch.json",posterPath:"/4dgs/demo/new/corgi_5s_300frames_60fps_300w_200epoch.png",scale:"1,1,1",showDemo:"ftgs"},Es={plyPath:"/4dgs/demo/new/hair_3s_180frames_60fps_4k_ccm_200w_200epoch_deleted.4dv",settingPath:"/4dgs/demo/new/hair_3s_180frames_60fps_4k_ccm_200w_200epoch.json",posterPath:"/4dgs/demo/new/hair_3s_180frames_60fps_4k_ccm_200w_200epoch.png",scale:"1,1,1",showDemo:"ftgs"},Is={plyPath:"/4dgs/demo/new/salmon_10s_300frames_30fps_4k_200w_60epoch_deleted.4dv",settingPath:"/4dgs/demo/new/salmon_10s_300frames_30fps_4k_200w_60epoch.json",posterPath:"/4dgs/demo/new/salmon_10s_300frames_30fps_4k_200w_60epoch.png",scale:"1,1,1",showDemo:"ftgs"},Rs={plyPath:"/4dgs/demo/new/group_photo_m_seg_0.4dv",lowVRPlyPath:"/4dgs/demo/new/group_photo_l_seg_0.4dv",lowPlyPath:"/4dgs/demo/new/group_photo_l_seg_0.4dv",highPlyPath:"/4dgs/demo/new/group_photo_l_seg_0.4dv, /4dgs/demo/new/group_photo_l_seg_1.4dv, /4dgs/demo/new/group_photo_l_seg_2.4dv, /4dgs/demo/new/group_photo_l_seg_3.4dv",timeOption:"0,5,5,5,10,5,15,5",settingPath:"/4dgs/demo/new/ysjf_group_photo_long_settings.json",posterPath:"/4dgs/demo/new/ysjf_group_photo.png",scale:"1,1,1",showDemo:""},Fs={plyPath:"/4dgs/demo/new/nikk1_cleaned.4dv",highPlyPath:"/4dgs/demo/new/nikki1_seg_0.4dv, /4dgs/demo/new/nikki1_seg_1.4dv, /4dgs/demo/new/nikki1_seg_2.4dv, /4dgs/demo/new/nikki1_seg_3.4dv, /4dgs/demo/new/nikki1_seg_4.4dv",timeOption:"0,5,5,5,10,5,15,5,20,5",settingPath:"/4dgs/demo/new/nikki1_long_settings.json",posterPath:"/4dgs/demo/new/nikki1.png",scale:"1,1,1",showDemo:""},Ds={plyPath:"/4dgs/demo/new/nikk2_cleaned.4dv",highPlyPath:"/4dgs/demo/new/nikki2_seg_0.4dv, /4dgs/demo/new/nikki2_seg_1.4dv, /4dgs/demo/new/nikki2_seg_2.4dv",timeOption:"0,5,5,5,10,5",settingPath:"/4dgs/demo/new/nikki2_long_settings.json",posterPath:"/4dgs/demo/new/nikki2.png",scale:"1,1,1",showDemo:""},As={plyPath:"/4dgs/demo/new/bbbv1_blue.4dv",settingPath:"/4dgs/demo/new/bbb_settings.json",scale:"1,1,1",showDemo:""},js={plyPath:"/4dgs/demo/new/bbbv1_blue2.4dv",settingPath:"/4dgs/demo/new/bbb_settings.json",scale:"1,1,1",showDemo:""},zs={plyPath:"/4dgs/demo/new/bbbv1_entrance.4dv",settingPath:"/4dgs/demo/new/bbb_settings.json",scale:"1,1,1",showDemo:""},qs={plyPath:"/4dgs/demo/new/bbbv1_mirror.4dv",settingPath:"/4dgs/demo/new/bbb_settings.json",scale:"1,1,1",showDemo:""},Bs={plyPath:"/4dgs/demo/new/bbbv1_shiny.4dv",settingPath:"/4dgs/demo/new/bbb_settings.json",scale:"1,1,1",showDemo:""},Us={plyPath:"/4dgs/demo/diffuman4d/dnar_0172_05_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/dnar_0172_05.png",settingPath:"/4dgs/demo/diffuman4d/dnar_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Ns={plyPath:"/4dgs/demo/diffuman4d/dnar_0230_03_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/dnar_0230_03.png",settingPath:"/4dgs/demo/diffuman4d/dnar_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Hs={plyPath:"/4dgs/demo/diffuman4d/dnar_0410_05_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/dnar_0410_05.png",settingPath:"/4dgs/demo/diffuman4d/dnar_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Ws={plyPath:"/4dgs/demo/diffuman4d/dnar_0623_01_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/dnar_0623_01.png",settingPath:"/4dgs/demo/diffuman4d/dnar_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Os={plyPath:"/4dgs/demo/diffuman4d/dnar_0811_06_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/dnar_0811_06.png",settingPath:"/4dgs/demo/diffuman4d/dnar_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},$s={plyPath:"/4dgs/demo/diffuman4d/fdvai_dance_colored_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/fdvai_dance_colored.png",settingPath:"/4dgs/demo/diffuman4d/fdvai_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Vs={plyPath:"/4dgs/demo/diffuman4d/fdvai_dance_white_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/fdvai_dance_white.png",settingPath:"/4dgs/demo/diffuman4d/fdvai_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Zs={plyPath:"/4dgs/demo/diffuman4d/fdvai_yoga_dance_v2.4dv",posterPath:"/4dgs/demo/diffuman4d/fdvai_yoga_dance.png",settingPath:"/4dgs/demo/diffuman4d/fdvai_settings.json",scale:"0.05,0.05,0.05",showDemo:"diffuman4d"},Gs={plyPath:"/4dgs/demo/infinite_reality_demo.4dv",settingPath:"/4dgs/demo/infinite_reality_demo.json",scale:"1,1,1"},Xs={plyPath:"/4dgs/demo/jay_demo_seg2.4dv,/4dgs/demo/jay_demo_seg3.4dv",timeOption:"0,5,5,5",settingPath:"/4dgs/demo/jay_demo1_settings.json",scale:"1,1,1"},Ys={plyPath:"/4dgs/demo/jay_demo2.4dv",timeOption:"0,5",settingPath:"/4dgs/demo/jay_demo2_settings.json",scale:"1,1,1"},Ks={plyPath:"/4dgs/demo/hz_story.4dv",timeOption:"0,5",settingPath:"/4dgs/demo/hz_story1_settings.json",scale:"1,1,1"},Js={plyPath:"/4dgs/demo/hz_story2_seg1.4dv, /4dgs/demo/hz_story2_seg2.4dv",lowVRPlyPath:"/4dgs/demo/hz_story2_seg1.4dv",lowPlyPath:"/4dgs/demo/hz_story2_seg1.4dv",timeOption:"0,5,5,5",settingPath:"/4dgs/demo/hz_story2_settings.json",scale:"1,1,1"},ei={plyPath:"/4dgs/demo/wedding_seg_1_v2.4dv",timeOption:"0,3",settingPath:"/4dgs/demo/wedding_settings.json",scale:"1,1,1"},ti={plyPath:"/4dgs/demo/dog_2_subseqs_seq2.4dv",settingPath:"/4dgs/demo/dog_2_3_settings.json",scale:"1,1,1"},ni={plyPath:"/4dgs/demo/fashion_daytime_1.4dv",settingPath:"/4dgs/demo/fashion_daytime_settings.json",posterPath:"/4dgs/demo/fashion_daytime.png",scale:"1,1,1"},oi={plyPath:"/4dgs/demo/fashion_test.4dv",settingPath:"/4dgs/demo/fashion_test.json",scale:"1,1,1"},si={plyPath:"/4dgs/demo/fashion_test2.4dv",settingPath:"/4dgs/demo/fashion_test.json",scale:"1,1,1"},ii={plyPath:"/4dgs/demo/a2o_itap_mini_seg0_1.4dv, /4dgs/demo/a2o_itap_mini_seg1_1.4dv, /4dgs/demo/a2o_itap_mini_seg2_1.4dv, /4dgs/demo/a2o_itap_mini_seg3_1.4dv",lowVRPlyPath:"/4dgs/demo/a2o_itap_mini_seg0_1.4dv",lowPlyPath:"/4dgs/demo/a2o_itap_mini_seg0_1.4dv",timeOption:"0,5,5,5,10,5,15,5",settingPath:"/4dgs/demo/a2o_itap_mini_settings_1.json",posterPath:"/4dgs/demo/a2o_itap_mini.png",scale:"0.95,0.95,0.95"},ai={plyPath:"/4dgs/demo/golden_retriever_seg_0.4dv, /4dgs/demo/golden_retriever_seg_1.4dv, /4dgs/demo/golden_retriever_seg_2.4dv, /4dgs/demo/golden_retriever_seg_3.4dv",lowVRPlyPath:"/4dgs/demo/golden_retriever_seg_0.4dv",lowPlyPath:"/4dgs/demo/golden_retriever_seg_0.4dv",timeOption:"0,5,5,5,10,5,15,5",settingPath:"/4dgs/demo/golden_retriever.json",posterPath:"/4dgs/demo/golden_retriever.png",scale:"1,1,1"},ri={plyPath:"/4dgs/demo/a2o_itap_6_seg0.4dv, /4dgs/demo/a2o_itap_6_seg1.4dv, /4dgs/demo/a2o_itap_6_seg2.4dv",lowVRPlyPath:"/4dgs/demo/a2o_itap_3_mini_nopsh_seg0.ply, /4dgs/demo/a2o_itap_3_mini_nopsh_seg1.ply, /4dgs/demo/a2o_itap_3_mini_nopsh_seg2.ply",lowPlyPath:"/4dgs/demo/a2o_itap_3_mini_nopsh_seg0.ply, /4dgs/demo/a2o_itap_3_mini_nopsh_seg1.ply, /4dgs/demo/a2o_itap_3_mini_nopsh_seg2.ply",timeOption:"0,5,5,5,10,5",settingPath:"/4dgs/demo/a2o_itap_2_settings.json",posterPath:"/4dgs/demo/a2o_itap_2.png",scale:"1,1,1"},li={plyPath:"/4dgs/demo/bbb_livehouse_3_seg0.4dv, /4dgs/demo/bbb_livehouse_3_seg1.4dv, /4dgs/demo/bbb_livehouse_3_seg2.4dv",lowVRPlyPath:"/4dgs/demo/bbb_livehouse_mini_nosh_seg0.ply, /4dgs/demo/bbb_livehouse_mini_nosh_seg1.ply, /4dgs/demo/bbb_livehouse_mini_nosh_seg2.ply",lowPlyPath:"/4dgs/demo/bbb_livehouse_mini_nosh_seg0.ply, /4dgs/demo/bbb_livehouse_mini_nosh_seg1.ply, /4dgs/demo/bbb_livehouse_mini_nosh_seg2.ply",timeOption:"0,5,5,5,10,5",settingPath:"/4dgs/demo/bbb_livehouse_settings.json",posterPath:"/4dgs/demo/bbb_livehouse.png",scale:"1,1,1"},ci={plyPath:"/4dgs/demo/isaac_mini_9s_1030.4dv",timeOption:"0,9",settingPath:"/4dgs/demo/isaac_1030_settings.json",posterPath:"/4dgs/demo/isaac.png",scale:"1,1,1"},di={plyPath:"/4dgs/demo/mike_son_tennis_100fps_6s.4dv",timeOption:"0,6",settingPath:"/4dgs/demo/mike_son_tennis_settings.json",posterPath:"/4dgs/demo/nick_solo.png",scale:"1,1,1"},ui={plyPath:"/4dgs/demo/nick_solo_50fps_6.58s_1030.4dv",timeOption:"0,6.58",settingPath:"/4dgs/demo/nick_solo_settings.json",posterPath:"/4dgs/demo/nick_solo.png",scale:"1,1,1"},hi={demo:ms,"ysjf-sjg":{plyPath:"/4dgs/demo/new/new_ysjf-sjg_seg_0.4dv",posterPath:"/4dgs/demo/new/ysjf-sjg.webp",previewPath:"/4dgs/demo/new/ysjf-sjg.webm",settingPath:"/4dgs/demo/new/ysjf-sjg_settings.json",scale:"1,1,1",showDemo:"ysjf,4dv"},corgi:gs,timtalk:fs,"0512_dance_color":{plyPath:"/4dgs/demo/new/new_0512_dance_color_seg_13.4dv",posterPath:"/4dgs/demo/new/0512_dance_color.png",settingPath:"/4dgs/demo/new/0512_dance_color_settings.json",previewPath:"/4dgs/demo/new/0512_dance_color.webm",scale:"1,1,1",showDemo:"ysjf,4dv"},"0512_dance_white":{plyPath:"/4dgs/demo/new/new_0512_dance_white_seg_13.4dv",posterPath:"/4dgs/demo/new/0512_dance_white.png",settingPath:"/4dgs/demo/new/0512_dance_color_settings.json",previewPath:"/4dgs/demo/new/0512_dance_white.webm",scale:"1,1,1",showDemo:""},dance_white:vs,"jm-talk":{plyPath:"/4dgs/demo/new/jm.compressed.ply",settingPath:"/4dgs/demo/new/jm_settings.json",scale:"0.6,0.6,0.6"},neemo:ws,neemo2:ys,neemo3:xs,"ysjf2-seq3":{plyPath:"/4dgs/demo/new/ysjf2-seq3.compressed.ply",settingPath:"/4dgs/demo/new/ysjf2-seq3_settings.json",scale:"0.6,0.6,0.6"},"ysjf2-seq13":{plyPath:"/4dgs/demo/new/ysjf2-seg13.compressed.ply",settingPath:"/4dgs/demo/new/ysjf2-seg13_settings.json",scale:"0.6,0.6,0.6"},"a2o-4-9_seq3_seg0":{plyPath:"/4dgs/demo/new/4-9_seq3_seg0.compressed.ply",settingPath:"/4dgs/demo/new/a2o_settings.json",scale:"1,1,1"},"a2o-4-8_seq0_seg1":{plyPath:"/4dgs/demo/new/4-8_seq0_seg1.compressed.ply",settingPath:"/4dgs/demo/new/a2o_settings.json",scale:"1,1,1"},"a2o-1-4_seq0_seg0":{plyPath:"/4dgs/demo/new/1-4_seq0_seg0.compressed.ply",settingPath:"/4dgs/demo/new/a2o_settings.json",scale:"1,1,1"},boss_bg:bs,"r3-18":{plyPath:"/4dgs/demo/new/r3_18.compressed.ply",settingPath:"/4dgs/demo/new/r3_18_settings.json",scale:"1.1,1.1,1.1"},ysjf_lsw:_s,"719_mvc":{plyPath:"/4dgs/demo/new/719_mvc.compressed.ply",settingPath:"/4dgs/demo/new/719_mvc_settings.json",scale:"1.05,1.05,1.05"},boss_seg_3:Ps,jazz:Ss,dance:ks,shiku_dtwd:Ls,shiku_no10:Qs,shiku_no13:Cs,shiku_no20_dance:Ts,"zcam-data_seg0-201":{plyPath:"/4dgs/demo/new/0519-zcam-data_subseqs_seq_seg0-201_fps50.4dv",settingPath:"/4dgs/demo/new/0519-zcam-data_subseqs_seq_seg0-201_settings.json",scale:"1,1,1",showDemo:""},"hunan_data_seg0-226":{plyPath:"/4dgs/demo/new/0519_hunan_data_subseqs_seq_seg0-226_fps25.4dv",settingPath:"/4dgs/demo/new/0519_hunan_data_subseqs_seq_seg0-226_settings.json",scale:"1,1,1",showDemo:""},"zcam-data_seg0-201_fps50":{plyPath:"/4dgs/demo/new/0519-zcam-data_subseqs_seq_seg0-201_fps50.4dv",settingPath:"/4dgs/demo/new/0519-zcam-data_subseqs_seq_seg0-201_fps50_settings.json",scale:"1,1,1",showDemo:""},"hunan_data_seg0-226_fps25":{plyPath:"/4dgs/demo/new/0519_hunan_data_subseqs_seq_seg0-226_fps25.4dv",settingPath:"/4dgs/demo/new/0519_hunan_data_subseqs_seq_seg0-226_fps25_settings.json",scale:"1,1,1",showDemo:""},corgi_5s:Ms,hair_3s:Es,salmon_10s:Is,ysjf_group_photo:Rs,nikk1:Fs,nikk2:Ds,bbbv1_blue:As,bbbv1_blue2:js,bbbv1_entrance:zs,bbbv1_mirror:qs,bbbv1_shiny:Bs,diffuman4d_dnar_0172_05:Us,diffuman4d_dnar_0230_03:Ns,diffuman4d_dnar_0410_05:Hs,diffuman4d_dnar_0623_01:Ws,diffuman4d_dnar_0811_06:Os,diffuman4d_fdvai_dance_colored:$s,diffuman4d_fdvai_dance_white:Vs,diffuman4d_fdvai_yoga_dance:Zs,ir_michael:Gs,jay_demo:Xs,jay_demo2:Ys,hz_story:Ks,hz_story2:Js,wedding:ei,golden_retriever_01:ti,fashion_daytime:ni,fashion_test:oi,fashion_test2:si,a2o_itap_mini:ii,golden_retriever:ai,a2o_itap:ri,bbb_livehouse:li,isaac:ci,mike_son_tennis:di,nick_solo:ui},pi="https://s1.4dv-intelligence.com",O=(s,e)=>{var t;return typeof s=="string"?(t=s==null?void 0:s.split(","))==null?void 0:t.map(n=>Number(n)):s||e},X={position:[0,0,0],rotation:[0,0,0],scale:[1.1,1.1,1.1],timeOption:[0,60],audioPosition:[0,0,0]},Ee={settings:{fps:-1,xrCamera:{fov:50,position:[1,0,2],target:[.3,0,.6]},camera:{fov:50,position:[1,1,2],target:[0,1,0]},animTracks:[{duration:5,frameRate:60}]},params:null,app:null,performanceLevel:Le.MEDIUM,metaInfo:{contentUrl:"",timeOption:O(X.timeOption),position:O(X.position),rotation:O(X.rotation),scale:O(X.scale),audioPosition:O(X.audioPosition)},guideList:[]},mi=async()=>hi,_t=s=>{if(!s)return"";const e="/";let t=[s];return s.includes(",")&&(t=s.split(",")),t=t.map(n=>(n=n.trim(),n!=null&&n.startsWith(e)&&(n=`${pi}${n}`),n)),t.join(", ")},gi=()=>{const s=new URL(location.href);let e={},t=Ee;const n=async()=>{const l=new cs,c=new bo;await l.initialize();const r=l.getMetrics();return r?c.evaluatePerformance(r):Le.MEDIUM},o=l=>{let c=l||(s.searchParams.has("content")?s.searchParams.get("content"):"");if(!c){const r=s.pathname.replace(/^\/|\/$/g,"").split("/");c=r.length>0?r[0]==="viewer"?r[1]:r[0]:""}return c},i=()=>{const l={showdemo:"4dv"};return s.searchParams.has("showdemo")&&(l.showdemo=s.searchParams.get("showdemo")||"4dv"),s.searchParams.has("noui")&&(l.noui=!0),s.searchParams.has("noanim")&&(l.noanim=!0),s.searchParams.has("skybox")&&(l.skyboxUrl=s.searchParams.get("skybox")),s.searchParams.has("ministats")&&(l.ministats=!0),s.searchParams.has("cpath")&&(l.cpath=decodeURIComponent(s.searchParams.get("cpath"))),l},a=async l=>{var B,M;const{settingUrl:c,plyUrl:r,contentName:d,resetMode:m,audioUrl:p,settingJson:u,metaInfoObj:w}=l||{},S=await n(),y=o(d),Q=i();let x=r;if(r&&(!u||JSON.stringify(u)==="{}"))return t={app:t.app,guideList:t.guideList,performanceLevel:S,params:{...t.params||{},...Q||{}},settings:{...(t==null?void 0:t.settings)||{}},metaInfo:{...(t==null?void 0:t.metaInfo)||{},...w||{},audioUrl:p,contentUrl:x}},t;const h=await mi(),v=h[y];let _={posterUrl:"",previewUrl:"",audioUrl:"",settingUrl:c,ultraUrl:"",position:X.position,rotation:X.rotation,scale:X.scale,timeOption:X.timeOption};if(v){switch(x=v.plyPath,S){case Le.LOW:x=v.lowPlyPath;break;case Le.LOW_VR:x=v.lowVRPlyPath;break;case Le.HIGH:case Le.MEDIUM:default:x=v.plyPath}if(m)switch(m){case Le.LOW:x=v.lowPlyPath;break;case Le.LOW_VR:x=v.lowVRPlyPath;break;case Le.HIGH:x=v.highPlyPath;break;case Le.MEDIUM:default:x=v.plyPath}x||(x=v.plyPath),_=Object.assign(_,{posterUrl:v.posterPath,previewUrl:v.previewPath,audioUrl:v.audioPath,settingUrl:Q.cpath||v.settingPath,ultraUrl:v.highPlyPath,position:v.position||X.position,rotation:v.rotation||X.rotation,scale:v.scale||X.scale,timeOption:v.timeOption||X.timeOption,audioPosition:v.audioPosition||X.audioPosition})}if(!v&&decodeURIComponent(y)&&s.searchParams.get("content")){x=decodeURIComponent(s.searchParams.get("content"));const re=x.split(",").length;_=Object.assign(_,{settingUrl:Q.cpath,position:X.position,rotation:X.rotation,scale:X.scale,timeOption:mt({startNumber:0,spaceTime:5,number:re}),audioPosition:X.audioPosition})}w&&(_=Object.assign(_,w)),Object.keys(_).forEach(z=>{typeof _[z]=="string"&&["settingUrl","posterUrl","previewUrl","ultraUrl","audioUrl"].includes(z)&&(_[z]=_t(_[z]))});const{contentUrl:I,contentName:b}=w||{};let C=v==null?void 0:v.paramsPath;x=I||x,C=_t(C);let D={contentUrl:_t(x),contentName:b||y,timeOption:O(_.timeOption),position:O(_.position),rotation:O(_.rotation),scale:O(_.scale),previewUrl:Fe()?"":_.previewUrl,settingUrl:_.settingUrl,posterUrl:_.posterUrl,audioUrl:_.audioUrl,ultraUrl:_.ultraUrl,audioPosition:O(_.audioPosition)};const N=(M=(B=Object.keys(h))==null?void 0:B.map(z=>{var re;return{url:_t(h[z].posterPath),key:z,show:(re=h[z].showDemo)==null?void 0:re.split(",").includes(Q.showdemo),hasAudio:!!h[z].audioPath}}))==null?void 0:M.filter(z=>z.show),Y=u||await ps(_.settingUrl)||t.settings;return e=Object.assign(/(^https?:\/\/|.*\.json)/.test(C)?await fetch(C).then(z=>z.json()).catch(()=>{})||{}:{},Q),t={settings:Y,params:e,app:null,performanceLevel:S,metaInfo:D,guideList:N,initSuperStatus:!0},t};return{initSSE:async l=>await a(l),getSSE:()=>t,updateSSE:l=>(t=Object.assign(t,l),t),updateSettings:l=>{const c=Object.assign(t.settings,l);return t.settings=c,t},updateMetaInfo:l=>{const c=Object.assign(t.metaInfo,l);return t.metaInfo=c,t}}};window.sseManager||(window.sseManager=gi());const Pe=window.sseManager,mt=({startNumber:s=0,spaceTime:e=5,number:t=1})=>{let n=[];const o=e;for(let i=0;i<t;i++)n=n.concat([s+i*o,o]);return n},fi=s=>{var e;return typeof s=="string"?(e=s==null?void 0:s.split(","))==null?void 0:e.map(t=>Number(t)):s||[]},vi=async s=>{const{contentUrl:e,contentName:t,resetMode:n,audioUrl:o,settings:i,metaInfo:a={}}=s||{},{timeOption:l}=a;return l&&l.length>0&&(a.timeOption=fi(l)),{sseContent:e||t?await Pe.initSSE({plyUrl:e,contentName:t,resetMode:n,audioUrl:o,settingJson:i,metaInfoObj:a}):await Pe.initSSE(),getSSE:Pe.getSSE,updateSSE:Pe.updateSSE}};function wi(s=1e3){let e=0;return()=>{const t=Date.now();return t-e<s?!1:(e=t,!0)}}const tt=200,Sn=12;class yi extends Vn{constructor(){var t,n;super();f(this,"isShow");f(this,"noRepeatWrap");f(this,"scrollElement");f(this,"checkDom");f(this,"noRepeatPanel");f(this,"checkLeft");f(this,"checkKey");f(this,"timer");f(this,"remaining");f(this,"open",()=>{var t;this.noRepeatPanel&&(this.isShow=!0,this.show(),this.noRepeatPanel.classList.remove("hidden"),this.noRepeatPanel.classList.remove("faded-out"),this.noRepeatPanel.classList.add("faded-in"),document.getElementById("openGuideIcon").classList.remove("open"),console.log((t=this.checkDom)==null?void 0:t.offsetLeft,this.checkDom,"offsetLeft"),this.checkDom&&this.scrollElement.scrollTo({left:this.checkDom.offsetLeft}))});f(this,"close",()=>{this.noRepeatPanel&&(this.isShow=!1,this.noRepeatPanel.classList.remove("faded-in"),this.noRepeatPanel.classList.add("faded-out"),this.noRepeatPanel.classList.add("hidden"),document.getElementById("openGuideIcon").classList.add("open"))});f(this,"show",()=>{this.noRepeatWrap&&(this.noRepeatWrap.classList.remove("hidden"),this.noRepeatWrap.classList.remove("faded-out"),this.noRepeatWrap.classList.add("faded-in"))});f(this,"hidden",()=>{this.noRepeatWrap&&(this.noRepeatWrap.classList.add("hidden"),this.noRepeatWrap.classList.add("faded-out"),this.noRepeatWrap.classList.remove("faded-in"))});this.checkKey=(n=(t=window.location.pathname)==null?void 0:t.split("/"))==null?void 0:n.at(-1)}initialize(t){const n=document.getElementById("splatsList"),o=document.getElementById("volumeContainer"),i=document.getElementById("splatsListWrapper"),a=document.getElementById("noRepeatWrap"),l=document.getElementById("noRepeatPanel");document.getElementById("openGuideIcon");const c=document.getElementById("goConfirm");sn()||c.classList.remove("hidden"),this.noRepeatWrap=a,this.noRepeatPanel=l;let d=!1,m=0,p=0,u=0;this.addListenerFn(a,"touchstart",h=>{m=h.touches[0].pageX,p=h.touches[0].pageY,u=i.scrollLeft,d=!1}),this.addListenerFn(a,"touchmove",h=>{const v=h.touches[0].pageX,_=h.touches[0].pageY,I=v-m,b=_-p;!d&&Math.abs(I)>Math.abs(b)&&(d=!0),d&&(i.scrollLeft=u-I,h.preventDefault())});const w=t.length-1,S=tt*w+Sn*(w-1);n.innerHTML="",o.style.bottom="70px",n.style.width=`${S}px`,this.scrollElement=i;const y=(h,v)=>{const _=tt*(v-1)+tt*.5-Sn*(v-1);h.classList.add("checked"),this.checkDom=h,this.checkLeft=_,n.childNodes.forEach((I,b)=>{v!==b&&I.classList.remove("checked")})},Q='<svg class="icon unMutedStatus" viewBox="0 0 1024 1024" fill="#dddd" xmlns="http://www.w3.org/2000/svg" p-id="2503" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M734.118332 271.7758l-46.483684 46.52257c43.48028 50.070372 69.959352 115.233488 69.959352 186.752358 0 78.772065-31.899524 150.056598-83.529415 201.648626l46.482661 46.483684c63.563688-63.447031 102.833063-151.207817 102.833063-248.131287C823.381331 415.397848 789.493523 333.817832 734.118332 271.7758z" p-id="2504"></path><path d="M830.049195 175.883823l-49.329499 49.290613c67.229171 74.0536 108.565625 172.011632 108.565625 279.874245 0 115.115807-46.678112 219.333404-122.096802 294.789956l49.252751 49.281403c88.1302-88.043219 142.569066-209.691813 142.569066-344.07136C959.009312 377.922329 909.834332 262.572184 830.049195 175.883823z" p-id="2505"></path><path d="M646.729006 359.243921l-44.534286 44.474934c21.877263 27.979238 35.018561 63.076594 35.018561 101.33085 0 45.508473-18.444071 86.706781-48.237631 116.519784l44.182268 44.240597c41.102117-41.179888 66.566068-97.977475 66.566068-160.761404C699.723987 449.539436 679.75826 398.707724 646.729006 359.243921z" p-id="2506"></path><path d="M224.830093 633.092939 498.018056 837.997726 498.018056 177.814802 224.830093 382.680702Z" p-id="2507"></path><path d="M87.252715 381.432269c-12.830213 0-23.202445 10.372232-23.202445 23.183002l0 0L64.05027 604.060719c0 12.81077 10.373255 23.183002 23.202445 23.183002l84.923158 0c0.001023 0 0.010233 0.001023 0.010233 0.001023l0-0.001023L172.186106 381.432269l0 0-0.005117 0L87.252715 381.432269z"></path></svg>';t==null||t.forEach((h,v)=>{const _=document.createElement("div"),I=this.checkKey===h.key;if(h.hasAudio){const b=document.createElement("div");b.classList.add("miniVoiceIcon"),b.innerHTML=Q,_.appendChild(b)}h.url?(_.style.backgroundImage=`url(${h.url})`,_.style.backgroundSize="cover",_.style.width=`${tt}px`):(_.innerHTML=h.key,_.style.width=`${tt}px`),I&&y(_,v),this.addListenerFn(_,"click",async()=>{!wi(1e3)||this.checkKey===h.key||(console.log("clicked",h),this.hidden(),this.checkKey=h.key,y(_,v),await gt({contentName:h.key}))}),n.appendChild(_),o.style.bottom="182px"});const x="";this.addListenerFn(c,"click",()=>{window.open(x)})}startCount(t=5,n){this.timer&&window.clearInterval(this.timer),this.remaining=t;const o=window.setInterval(()=>{this.remaining--,this.remaining>0?console.log(`剩余时间：${this.remaining} 秒`):(n==null||n(),console.log("倒计时结束"),clearInterval(o))},1e3);return this.timer=o,o}}const Mt=new yi;class xi{constructor(e,t){f(this,"events");f(this,"state");f(this,"keyMap");f(this,"modifierKeys");f(this,"userKeyMap",["escape","f","r"," ","m","Meta+Shift+,","Meta+Shift+<","Control+Shift+,","Control+Shift+<"]);this.events=e,this.state=t,this.keyMap=new Map,this.modifierKeys=new Set(["Control","Alt","Meta","Shift"]),this.initializeKeyMap()}initializeKeyMap(){this.keyMap.set("escape",{event:"cancel"}),this.keyMap.set("f",{event:"frame"}),this.keyMap.set("r",{event:"reset"}),this.keyMap.set(" ",{event:"playPause"}),this.keyMap.set("]",{event:"framePlaybackForward"}),this.keyMap.set("】",{event:"framePlaybackForward"}),this.keyMap.set("[",{event:"framePlaybackBackward"}),this.keyMap.set("【",{event:"framePlaybackBackward"}),this.keyMap.set("-",{event:"decreaseSplatSize"}),this.keyMap.set("=",{event:"increaseSplatSize"}),this.keyMap.set("p",{event:"togglePointCloudMode"}),this.keyMap.set("b",{event:"toggleBackgroundColor"}),this.keyMap.set(";",{event:"decreasePlaybackRate"}),this.keyMap.set("；",{event:"decreasePlaybackRate"}),this.keyMap.set("‘",{event:"increasePlaybackRate"}),this.keyMap.set("'",{event:"increasePlaybackRate"}),this.keyMap.set("i",{event:"information"}),this.keyMap.set("m",{event:"slowMotion"}),this.keyMap.set("Meta+Shift+,",{event:"toggleDebugMode"}),this.keyMap.set("Meta+Shift+<",{event:"toggleDebugMode"}),this.keyMap.set("Control+Shift+,",{event:"toggleDebugMode"}),this.keyMap.set("Control+Shift+<",{event:"toggleDebugMode"})}handleKeyDown(e){const t=[];e.ctrlKey&&t.push("Control"),e.altKey&&t.push("Alt"),e.metaKey&&t.push("Meta"),e.shiftKey&&t.push("Shift");const n=t.length>0?`${t.join("+")}+${e.key.toLowerCase()}`:e.key.toLowerCase(),o=this.keyMap.get(n);o&&(this.state.debugModeEnabled||this.userKeyMap.includes(n))&&this.events.fire("inputEvent",o.event,e)}}let Pt=null;const Ze=new L,bi=(s,e)=>{var c;const t=document.getElementById("cursor"),n=document.getElementById("cancelWheel"),o=document.getElementById("enterWheel"),i=(c=document.getElementsByTagName("canvas"))==null?void 0:c[0],a=sn(),l=$n();a&&(i.style.cursor="pointer"),l&&(F(o,"click",()=>{be.emit("cancelNoWheel"),o.classList.add("hidden"),n.classList.remove("hidden")}),F(n,"click",()=>{be.emit("onNoWheel"),o.classList.remove("hidden"),n.classList.add("hidden")})),T(e,"firstFrame",()=>{if(t==null||t.classList.remove("hidden"),F(s.graphicsDevice.canvas,"pointerdown",()=>{t==null||t.classList.add("hidden")}),Mt.open(),l){o==null||o.classList.remove("hidden");const r=document.getElementById("timelineContainer"),d=document.getElementById("buttonContainer");r.style.display="none",d.style.display="none"}})},_i=(s,e)=>{const t=o=>`blur(${Math.floor((100-o)*.4)}px)`,n=document.getElementById("poster");n.style.backgroundImage=`url(${s})`,n.style.display="block",n.style.filter=t(0),T(e,"progress:changed",o=>{n.style.filter=t(o)}),T(e,"firstFrame",()=>{n.style.display="none"})},Pi=(s,e,t)=>{const n=i=>`blur(${Math.floor((100-i)*.4)}px)`,o=document.getElementById("video");s&&(o.src=s),o.style.display="block",o.style.filter=n(0),T(e,"progress:changed",i=>{o.style.filter=n(i)}),T(e,"firstFrame",()=>{const i=o.currentTime;t.currentTime=i,e.fire("setCurrentTime",i),o.style.display="none",e.fire("playAudio")}),F(o,"click",()=>{e.fire("startAssets")})},Si=s=>{Mt.initialize(s)},ki=async(s,e)=>{e.parentElement.entity.script.destroy(On)},Li=async(s,e,t,n,o)=>{const i=(()=>{const{position:a,target:l}=o.xrCamera??{};return new Ie().fromLookAt(new L(a??[0,0,-2]),new L(l??[0,0,0]))})();if(t.hasAR=s.xr.isAvailable("immersive-ar"),t.hasVR=s.xr.isAvailable("immersive-vr"),t.hasAR||t.hasVR){await s.graphicsDevice.gl.makeXRCompatible();const l=e.parentElement.entity,c=e.entity,r=new Be,d=new L,m=new Ce,p=new L,u=new Ce;l.script.create(On);let w=null;const S={},y=(I,b)=>{let C=b?`${b}
`:"";return Object.keys(I).forEach(D=>{C+=D+":"+I[D]+`
`}),C},Q=new kt("text3DPosition");Q.addComponent("element",{type:pn,fontAsset:s.assets.find("4dr"),anchor:[.5,0,.5,0],pivot:new vt(.5,.5),fontSize:.1,text:"",color:new Be(1,1,1,1),alignment:new vt(.5,.5),width:1,height:1,wrapLines:!0,screenSpace:!0,useInput:!0}),Q.setLocalPosition(0,-1,0);const x=new kt("text3DCursor");x.addComponent("element",{type:pn,fontAsset:s.assets.find("4dr"),anchor:[.5,1,.5,1],pivot:new vt(.5,.5),fontSize:.1,text:"",color:new Be(1,1,1,1),alignment:new vt(.5,.5),width:1,height:1,wrapLines:!0,screenSpace:!0,useInput:!0}),x.setLocalPosition(0,1,0);const h=new kt("entryBgEl");h.addChild(Q),h.addChild(x),h.setLocalScale(.5,.5,.5),h.setLocalPosition(0,1,-1),h.setEulerAngles(0,250,0),T(n,"xrTextPlacePosition",I=>{h.setLocalPosition(...I)});let v={},_={};T(n,"xrTextCursor",I=>{if(!I){x.element.text="";return}const{s:b,t:C,...D}=I;_=Object.assign(_,D),I=Object.assign(v,I),v=I;const{s:N={},t:Y={}}=I||{};x.element.text=y(N,"---1 hand---")+y(Y,"---2 hand---")+y(_,"---message---")}),T(n,"xrTextPositionChange",I=>{Q.element.text=y(I)}),T(s.xr,"start",()=>{console.log("____ startXR"),s.autoRender=!0,t.cameraMode="orbit",w=s.xr.session,n.fire("xrSessionStart",w),d.copy(l.getPosition()),m.copy(l.getRotation()),p.copy(c.getPosition()),u.copy(c.getRotation()),l.setPosition(i.position.x,i.position.y,i.position.z),l.setRotation(i.rotation),s.xr.type==="immersive-ar"&&(r.copy(c.camera.clearColor),c.camera.clearColor=new Be(0,0,0,0))}),T(s.xr,"end",()=>{console.log("____ endXR"),s.autoRender=!1,v={},_={},n.fire("xrSessionEnd"),n.fire("xrTextPositionChange",S),n.fire("xrTextCursor",""),s.root.removeChild(h),w=null,l.setPosition(d),l.setRotation(m),c.setPosition(p),c.setRotation(u),s.xr.type==="immersive-ar"&&(c.camera.clearColor=r)}),T(s.xr,"update",I=>{w&&s.xr.active&&n.fire("xrFrame",{frame:I,screen3D:h})}),T(n,"startAR",()=>{console.log("____ startAR"),s.xr.start(s.root.findComponent("camera"),"immersive-ar","local-floor")}),T(n,"startVR",()=>{console.log("____ startVR"),s.xr.start(s.root.findComponent("camera"),"immersive-vr","local-floor")}),T(n,"inputEvent",I=>{I==="cancel"&&s.xr.active&&s.xr.end()})}},Qi=({app:s,state:e,events:t,params:n,metaInfo:o,musicAssetId:i,contentUrl:a,contentName:l,rateArr:c})=>{var le,q,V,me,k,E,R,U,W,A,G,oe,he,ce,te,se,pe,fe,we,ue,ie,Ae,We;const r=["ui","controlsWrap","arMode","vrMode","ultraMode","arModeMax","vrModeMax","maxIconWrapper","enterFullscreen","exitFullscreen","info","infoPanel","desktopTab","touchTab","desktopInfoPanel","touchInfoPanel","timelineContainer","handle","time","buttonContainer","play","pause","anima","volumeShow","volumeShowMax","volumeContainer","volumeHandle","volume","mutedStatus","unMutedStatus","mutedStatusMax","unMutedStatusMax","settings","settingsPanel","fly","orbit","cameraToggleHighlight","high","low","qualityToggleHighlight","reset","frame","loadingText","loadingBar","loadingFill","joystickBase","joystick","statsPanel","loadingWrap","cursor"].reduce((g,P)=>(g[P]=document.getElementById(P),g),{});(le=r.maxIconWrapper)==null||le.classList.add("hidden"),(q=r.loadingWrap)==null||q.classList.remove("hidden"),(V=r.controlsWrap)==null||V.classList.add("hidden"),(me=document.getElementById("viewerInputContainer"))==null||me.classList.add("hidden"),o.ultraUrl&&o.ultraUrl!==a&&_o()&&((k=r.ultraMode)==null||k.classList.remove("hidden"));let d=!1;if(i){(E=r.volumeShow)==null||E.classList.remove("hidden"),(R=r.volumeShowMax)==null||R.classList.remove("hidden");const g=document.getElementsByTagName("canvas")[0];F(g,"pointerdown",()=>{Fe()||!d&&re()})}else(U=r.volumeShow)==null||U.classList.add("hidden"),(W=r.volumeShowMax)==null||W.classList.add("hidden");(A=r.loadingBar)==null||A.classList.remove("pageLoading"),r.loadingText.textContent="0%",r.loadingFill.style.right="100%",T(t,"progress:changed",g=>{r.loadingText.textContent=`${g}%`,r.loadingFill.style.right=`${100-g}%`}),T(t,"firstFrame",()=>{var g,P,j;(g=document.getElementById("loadingWrap"))==null||g.classList.add("hidden"),(P=document.getElementById("controlsWrap"))==null||P.classList.remove("hidden"),(j=document.getElementById("buttonContainer"))==null||j.classList.remove("hidden"),h(),be.emit(ht.LISTEN_MESSAGE,{type:"REPLY",text:"firstFrameRender"})});const m=document.documentElement,p=m.requestFullscreen&&document.exitFullscreen,u=()=>{p?m.requestFullscreen():(window.parent.postMessage("requestFullscreen","*"),e.isFullscreen=!0)},w=()=>{p?document.exitFullscreen():(window.parent.postMessage("exitFullscreen","*"),e.isFullscreen=!1)};p&&F(document,"fullscreenchange",()=>{e.isFullscreen=!!document.fullscreenElement}),F(r.enterFullscreen,"click",u),F(r.exitFullscreen,"click",w),screen!=null&&screen.orientation&&F(screen.orientation,"change",g=>{["landscape-primary","landscape-secondary"].includes(screen.orientation.type)?u():w()}),T(t,"isFullscreen:changed",g=>{r.enterFullscreen.classList[g?"add":"remove"]("hidden"),r.exitFullscreen.classList[g?"remove":"add"]("hidden")}),F(r.high,"click",()=>{e.hqMode=!0}),F(r.low,"click",()=>{e.hqMode=!1});let S=!1;F(r.ultraMode,"click",async()=>{S||(console.log("ultra click"),S=!0,await gt({contentName:l,resetMode:Le.HIGH}),S=!1)});const y=()=>{r.qualityToggleHighlight.classList[e.hqMode?"add":"remove"]("right")};T(t,"hqMode:changed",g=>{y()}),y(),e.hasAR&&((G=r.arMode)==null||G.classList.remove("hidden"),F(r.arMode,"click",()=>{t.fire("startAR")}),Fe()||((oe=r.arModeMax)==null||oe.classList.remove("hidden"),F(r.arModeMax,"click",()=>{t.fire("startAR")}))),e.hasVR&&((he=r.vrMode)==null||he.classList.remove("hidden"),F(r.vrMode,"click",()=>{t.fire("startVR")}),Fe()||((ce=r.vrModeMax)==null||ce.classList.remove("hidden"),F(r.vrModeMax,"click",()=>{t.fire("startVR")})));const Q=g=>{g==="desktop"?(r.desktopTab.classList.add("active"),r.touchTab.classList.remove("active"),r.desktopInfoPanel.classList.remove("hidden"),r.touchInfoPanel.classList.add("hidden")):(r.desktopTab.classList.remove("active"),r.touchTab.classList.add("active"),r.desktopInfoPanel.classList.add("hidden"),r.touchInfoPanel.classList.remove("hidden"))};F(r.desktopTab,"click",()=>{Q("desktop")}),F(r.touchTab,"click",()=>{Q("touch")}),F(r.info,"pointerup",()=>{Q(e.inputMode),r.infoPanel.classList.toggle("hidden")}),F(r.infoPanel,"pointerdown",()=>{r.infoPanel.classList.add("hidden")}),T(t,"inputEvent",g=>{var P,j,ae,_e,Ue;g==="cancel"?(be.emit(ht.LISTEN_MESSAGE,{type:"REPLY",text:"escCancel"}),(P=r.infoPanel)==null||P.classList.add("hidden"),(j=r.settingsPanel)==null||j.classList.add("hidden"),(ae=r.volumeContainer)==null||ae.classList.add("hidden"),e.isFullscreen&&w()):g==="interrupt"&&((_e=r.settingsPanel)==null||_e.classList.add("hidden"),(Ue=r.volumeContainer)==null||Ue.classList.add("hidden"))}),T(t,"controlsUiVisible:changed",g=>{var P,j,ae,_e,Ue,cn,dn,un,hn;Fe()||(g?((P=r.controlsWrap)==null||P.classList.add("faded-in"),(j=r.controlsWrap)==null||j.classList.remove("faded-out"),(ae=r.maxIconWrapper)==null||ae.classList.add("faded-out"),(_e=r.maxIconWrapper)==null||_e.classList.remove("faded-in"),Mt.show()):((Ue=r.controlsWrap)==null||Ue.classList.remove("faded-in"),(cn=r.controlsWrap)==null||cn.classList.add("faded-out"),(dn=r.maxIconWrapper)==null||dn.classList.remove("hidden"),(un=r.maxIconWrapper)==null||un.classList.remove("faded-out"),(hn=r.maxIconWrapper)==null||hn.classList.add("faded-in")))}),T(t,"statsVisible:changed",g=>{r.statsPanel.classList[g?"remove":"add"]("hidden")});const x=()=>{Pt&&clearTimeout(Pt),e.controlsUiVisible=!0,Pt=window.setTimeout(()=>{Pt=null,e.controlsUiVisible=!1},4e3)};x(),T(t,"inputEvent",x),T(t,"hasAnimationCamera:changed",()=>{var g;(g=r.anima)==null||g.classList.remove("hidden"),F(r.anima,"click",()=>{e.cameraMode="anim"})}),F(r.play,"click",()=>{e.timePaused=!1}),F(r.pause,"click",()=>{e.timePaused=!0});const h=()=>{var g,P,j;(g=r.play)==null||g.classList.add("hidden"),(P=r.pause)==null||P.classList.remove("hidden"),t.fire("playAudio"),(j=r.timelineContainer)==null||j.classList.remove("hidden")},v=()=>{var g,P,j,ae;e.timePaused?((g=r.play)==null||g.classList.remove("hidden"),(P=r.pause)==null||P.classList.add("hidden"),t.fire("pauseAudio"),Mt.open()):h(),(ae=(j=r.timelineContainer)==null?void 0:j.classList)==null||ae.remove("hidden")};T(t,"cameraMode:changed",v),T(t,"timePaused:changed",v),T(t,"inputEvent",g=>{g==="playPause"&&(e.timePaused=!e.timePaused)});const _=g=>{const[P,j]=g.split("_"),[ae,_e]=P.split(",");return{rate:Number(j),start:Number(ae),end:Number(_e)}},I=(g,P)=>{let j=!1;return P==null||P.forEach(ae=>{const{start:_e,end:Ue}=_(ae);g>=_e&&g<=Ue&&(j=!0)}),j};T(t,"currentTime:changed",()=>{r.handle&&(r.handle.style.left=`${e.currentTime/e.duration*100}%`),r.time&&(r.time.style.left=`${e.currentTime/e.duration*100}%`,r.time.innerText=`${e.currentTime.toFixed(1)}s`),e.currentTime.toFixed(1)==="0.0"&&(!e.timePaused&&t.fire("playAudio"),e.timePaused&&t.fire("pauseAudio")),c==null||c.forEach(g=>{const{start:P,end:j,rate:ae}=_(g);if(e.currentTime>=P&&e.currentTime<=j){e.playbackSpeed=ae;return}else I(e.currentTime,c)||(e.playbackSpeed=1)})});const C=()=>{var g,P,j,ae;if(r.volumeHandle&&(r.volumeHandle.style.bottom=`${e.volume*100}%`),r.volume&&(r.volume.style.bottom=`${e.volume*100}%`),r.volume&&(r.volume.innerText=`${(e.volume*100).toFixed(0)}%`),(e.volume*100).toFixed(0)==="0"){e.muted=!0;return}e.muted=!1,(g=r.mutedStatus)==null||g.classList.add("hidden"),(P=r.mutedStatusMax)==null||P.classList.add("hidden"),(j=r.unMutedStatus)==null||j.classList.remove("hidden"),(ae=r.unMutedStatusMax)==null||ae.classList.remove("hidden")};T(t,"volume:changed",C),T(t,"playbackSpeed:changed",g=>{t.fire("setRate",g)}),e.volume===0||e.muted?((te=r.mutedStatus)==null||te.classList.remove("hidden"),(se=r.mutedStatusMax)==null||se.classList.remove("hidden"),(pe=r.unMutedStatus)==null||pe.classList.add("hidden"),(fe=r.unMutedStatusMax)==null||fe.classList.add("hidden")):((we=r.mutedStatus)==null||we.classList.add("hidden"),(ue=r.mutedStatusMax)==null||ue.classList.add("hidden"),(ie=r.unMutedStatus)==null||ie.classList.remove("hidden"),(Ae=r.unMutedStatusMax)==null||Ae.classList.remove("hidden")),C(),T(t,"muted:changed",g=>{var P,j,ae,_e;g&&(t.fire("setVolume",0),(P=r.mutedStatus)==null||P.classList.remove("hidden"),(j=r.mutedStatusMax)==null||j.classList.remove("hidden"),(ae=r.unMutedStatus)==null||ae.classList.add("hidden"),(_e=r.unMutedStatusMax)==null||_e.classList.add("hidden"))});const N=g=>{const P=r.timelineContainer.getBoundingClientRect(),j=Math.max(0,Math.min(P.width-1,g.clientX-P.left))/P.width;t.fire("setCurrentTime",e.duration*j)},Y=g=>{const P=r.volumeContainer.getBoundingClientRect(),j=1-Math.max(0,Math.min(P.height-1,g.clientY-P.top))/P.height;j<=.01&&(d=!0),t.fire("setVolume",j)};let B=!1,M=!1,z=!1;F(r.timelineContainer,"pointerdown",g=>{var P;M||(N(g),r.timelineContainer.setPointerCapture(g.pointerId),(P=r.time)==null||P.classList.remove("hidden"),B=e.timePaused,e.timePaused=!0,M=!0)}),F(r.timelineContainer,"pointermove",g=>{M&&N(g),x()}),F(r.timelineContainer,"pointerup",g=>{var P;M&&(r.timelineContainer.releasePointerCapture(g.pointerId),(P=r.time)==null||P.classList.add("hidden"),e.timePaused=B,M=!1)}),F(r.volumeContainer,"pointerdown",g=>{var P;z||(Y(g),r.volumeContainer.setPointerCapture(g.pointerId),(P=r.volume)==null||P.classList.remove("hidden"),z=!0)}),F(r.volumeContainer,"pointermove",g=>{g.preventDefault(),g.stopPropagation(),g.cancelBubble=!0,z&&Y(g),x()}),F(r.volumeContainer,"touchmove",g=>{g.preventDefault(),g.stopPropagation(),g.cancelBubble=!0,x()}),F(r.volumeContainer,"pointerup",g=>{var P;z&&(r.volumeContainer.releasePointerCapture(g.pointerId),(P=r.volume)==null||P.classList.add("hidden"),z=!1)}),F(r.mutedStatus,"click",()=>{re()}),F(r.mutedStatusMax,"click",()=>{re()}),F(r.unMutedStatusMax,"click",()=>{e.unMutedVolume=e.volume,d=!0,t.fire("setVolume",0)});const re=()=>{var g,P,j,ae;t.fire("pauseAudio"),e.muted=!1,e.volume=1,(g=r.mutedStatus)==null||g.classList.add("hidden"),(P=r.mutedStatusMax)==null||P.classList.add("hidden"),(j=r.unMutedStatus)==null||j.classList.remove("hidden"),(ae=r.unMutedStatusMax)==null||ae.classList.remove("hidden"),!e.timePaused&&t.fire("playAudio"),e.timePaused&&t.fire("pauseAudio"),console.log("pauseAudio")};F(r.ui,"click",()=>{var g;(g=r.loadingWrap)!=null&&g.classList.contains("hidden")||re()}),T(t,"cameraMode:changed",()=>{var g,P;e.cameraMode==="fly"?(g=r.cameraToggleHighlight)==null||g.classList.add("right"):(P=r.cameraToggleHighlight)==null||P.classList.remove("right")}),T(t,"cameraMode:changed",()=>{var g,P;e.hasAnimationCamera&&(e.cameraMode==="anim"?(g=r.anima)==null||g.classList.add("hidden"):(P=r.anima)==null||P.classList.remove("hidden"))}),F(r.settings,"click",()=>{var g;(g=r.settingsPanel)==null||g.classList.toggle("hidden")}),F(r.volumeShow,"click",()=>{var g;(g=r.volumeContainer)==null||g.classList.toggle("hidden")}),F(r.fly,"click",()=>{e.cameraMode="fly"}),F(r.orbit,"click",()=>{e.cameraMode="orbit"});const K=g=>{t.fire("inputEvent","reset",g)};F(r.reset,"click",K);const H=g=>{t.fire("inputEvent","frame",g)};F(r.frame,"click",H),T(t,"touchJoystickUpdate",(g,P)=>{var j,ae;g===null?(j=r.joystickBase)==null||j.classList.add("hidden"):(Ze.set(P[0],P[1],0).mulScalar(1/48),Ze.length()>1&&Ze.normalize(),Ze.mulScalar(48),(ae=r.joystickBase)==null||ae.classList.remove("hidden"),r.joystickBase.style.left=`${g[0]}px`,r.joystickBase.style.top=`${g[1]}px`,r.joystick.style.left=`${48+Ze.x}px`,r.joystick.style.top=`${48+Ze.y}px`)}),n.noui&&((We=r.ui)==null||We.classList.add("hidden")),["wheel","pointerdown","contextmenu","keydown"].forEach(g=>{const P=j=>{t.fire("inputEvent","interrupt",j)};F(s.graphicsDevice.canvas,g,P)});const J=g=>{t.fire("inputEvent","interact",g)};F(s.graphicsDevice.canvas,"pointermove",J);const $={time:0,x:0,y:0},Z=g=>{const P=new Date().getTime();Math.max(0,P-$.time)<300&&Math.abs(g.clientX-$.x)<8&&Math.abs(g.clientY-$.y)<8?(t.fire("inputEvent","dblclick",g),$.time=0):($.time=P,$.x=g.clientX,$.y=g.clientY)};F(s.graphicsDevice.canvas,"pointerdown",Z),["pointerdown","pointermove"].forEach(g=>{F(window,g,j=>{e.inputMode=j.pointerType==="touch"?"touch":"desktop"})});const ee=new xi(t,e);F(window,"keydown",g=>ee.handleKeyDown(g))};let Lt=null,xe=null;const Ci=s=>{const e="https://frontend.4dv-intelligence.com/viewer-static/Montserrat-Black.json",t="https://frontend.4dv-intelligence.com/viewer-static/Montserrat-Black.png",n=new ut("4dr","font",{url:e}),o=new ut("4drAtlas","texture",{url:t});s.assets.add(o),s.assets.add(n),s.assets.load(o),o.ready(()=>{s.assets.load(n),n.ready(()=>{n.resource.texture=o.resource,console.log("字体资源已准备好:",n.resource)})})},Ti=async({app:s,audioUrl:e,events:t})=>{if(!e)return;Lt&&s.assets.remove(Lt);let n=new ut("sounds","audio",{url:e});return Lt=n,new Promise(o=>{n.on("load",()=>{const a=n.resource.buffer;console.log("资源加载完成:",a),o(n)}),n.preload=!0,n.on("error",i=>{t.fire("audioAssetLoadError"),console.log(i),o({})}),s.assets.add(n),s.assets.load(n),o(n)})},Mi=({app:s,cameraEntity:e,events:t,state:n,musicAssetId:o,audioPosition:i})=>{const a=new kt;a.addComponent("sound"),i||(i=[0,0,0]),a.setPosition(i[0],i[1],i[2]),s.root.addChild(a),e.addComponent("audiolistener");const l=a.sound.addSlot(`backgroundMusic${o}`,{asset:s.assets.get(o),volume:n.volume,loop:!1,autoPlay:!1,startTime:n.currentTime});return new Promise(c=>{var r;T(t,"playAudio",()=>{xe&&(xe.pitch=n.playbackSpeed,xe.volume=n.volume,xe.startTime=n.currentTime),xe=l.play(xe)}),T(t,"pauseAudio",()=>{xe.pause()}),T(t,"setVolume",d=>{xe&&(xe.volume=d,n.volume=d,n.unMutedVolume=Math.max(d!==0?d:n.unMutedVolume,.1))}),T(t,"setRate",d=>{xe&&(xe.pitch=d),n.playbackSpeed=d}),c((r=l.instances)==null?void 0:r[0])})},Ei=async(s,e)=>{var t;xe==null||xe.pause(),xe=null,(t=s.sound)==null||t.removeSlot(`backgroundMusic${e.id}`)};class Ii extends Po{constructor(){super(...arguments);f(this,"functions",new Map)}function(t,n){if(this.functions.has(t))throw new Error(`error: function ${t} already exists`);this.functions.set(t,n)}invoke(t,...n){const o=this.functions.get(t);if(!o){console.log(`error: function not found '${t}'`);return}return o(...n)}}mn.skyboxPS=mn.skyboxPS.replace("mapRoughnessUv(uv, mipLevel)","uv");let ze=null,nt=null;const Ri=(s,e)=>{let t=9,n=0;e.on("progress",(o,i)=>{const l=Math.min(1,o/i)*100*(9/10);if(l>=90){if(n)return;n=window.setInterval(()=>{if(t--,t>0){let c=Number(s.progress)+1;s.progress=Math.min(c,99).toFixed(0)}else n&&clearInterval(n)},1e3);return}s.progress=Math.min(l,99).toFixed(0)}),e.on("loadAllAssetsDone",()=>{s.progress=100,n&&clearInterval(n)})},Fi=({app:s,cameraEntity:e,events:t,state:n,settings:o,params:i,splatAsset:a,timeOption:l,mPosition:c,mRotation:r,mScale:d})=>{var z,re,ge,K;let m=-1,p=1;a.data.loadAllSeq&&(p=a.file.url.split(",").length),l&&l.length>=2*p&&(m=l[2*p-1]+l[2*p-2]),ze=new ls(s,e,t,n,o,i,m),new zo(s,a,t,n,l);const u=s.root.findByName("splat"),[w=0,S=0,y=0]=c||[],[Q=0,x=0,h=0]=r||[],[v=1,_=1,I=1]=d||[],b=()=>{u==null||u.setLocalPosition(w,S,y),u==null||u.setEulerAngles(Q,x,h),u==null||u.setLocalScale(v,_,I)};b();let C=u==null?void 0:u.getLocalPosition().clone(),D=u==null?void 0:u.getLocalScale().clone(),N=null,Y=null;N||(N=((z=u!=null&&u.getLocalRotation?u.getLocalRotation():u==null?void 0:u.getRotation())==null?void 0:z.clone())??new Ce,Y=((K=(re=u==null?void 0:u.getEulerAngles)==null?void 0:(ge=re.call(u)).clone)==null?void 0:K.call(ge))??{x:0,y:0,z:0});let B=null;s.xr.input.on("squeezestart",(H,J)=>{B=window.setTimeout(()=>{t.fire("resetModelTransform"),B=null},3e3)}),s.xr.input.on("squeezeend",(H,J)=>{B&&(clearTimeout(B),B=null)}),T(t,"startXrDrag",H=>{C=u==null?void 0:u.getLocalPosition().clone(),console.log("startXrDrag")}),T(t,"startXrTwoHandGesture",H=>{var J,$,Z,ee;console.log("startXrTwoHandGesture"),D=u==null?void 0:u.getLocalScale().clone(),N=((J=u!=null&&u.getLocalRotation?u.getLocalRotation():u==null?void 0:u.getRotation())==null?void 0:J.clone())??new Ce,Y=((ee=($=u==null?void 0:u.getEulerAngles)==null?void 0:(Z=$.call(u)).clone)==null?void 0:ee.call(Z))??{x:0,y:0,z:0}});const M={rotationY:"",scale:"",position:""};T(t,"setNewRotationY",H=>{var Z;if(N||(N=((Z=u!=null&&u.getLocalRotation?u.getLocalRotation():u==null?void 0:u.getRotation())==null?void 0:Z.clone())??new Ce),H===0)return;const J=new Ce().setFromEulerAngles(0,-H,0),$=N.clone();if(typeof $.mul=="function")$.mul(J);else if(typeof $.multiply=="function")$.multiply(J);else{const ne=(le=>(le=le%360,le>180&&(le-=360),le<=-180&&(le+=360),le))((Y&&Y.y)??0-H);$.setFromEulerAngles(0,ne,0)}M.rotationY=$,t.fire("xrTextPositionChange",M),u==null||u.setLocalRotation($)}),T(t,"setNewScale",H=>{if(D||(D=u==null?void 0:u.getLocalScale().clone()),H[0]===1&&H[1]===1&&H[2]===1)return;const J=[D.x*H[0],D.y*H[1],D.z*H[2]];M.scale=J.join(","),t.fire("xrTextPositionChange",M),u==null||u.setLocalScale(...J)}),T(t,"setNewPosition",H=>{if(C||(C=u==null?void 0:u.getPosition().clone()),H[0]===0&&H[1]===0&&H[2]===0)return;const J=u==null?void 0:u.getPosition();function $(le,q){let V=le.forward.clone(),me=le.right.clone(),k=le.up.clone(),E=new L;return E.add(V.mulScalar(q.z)),E.add(me.mulScalar(q.x)),E.add(k.mulScalar(q.y)),E}const Z=s.root.findByName("camera");let ee=$(Z,new L(H));const ne=[J.x+ee.x,J.y+ee.y,J.z+ee.z];M.position=ne==null?void 0:ne.join(","),t.fire("xrTextPositionChange",M),u==null||u.setPosition(...ne)}),T(t,"resetModelTransform",()=>{b(),t.fire("inputEvent","resetXrPosition",null)}),T(t,"startAssets",()=>{ze.initialize()})},Di=({contentUrl:s,fileName:e,app:t,timeOption:n,events:o,state:i,cameraEntity:a,settings:l,params:c,mPosition:r,mRotation:d,mScale:m})=>{var u;nt&&(t.loader._cache={},(u=nt.resource)==null||u.destroy(),(()=>{const S=t.root.findByName("splat");S&&t.root.removeChild(S)})()),Ri(i,o);let p=new ut(e||"scene.compressed.ply","gsplat",{url:s,filename:e||"scene.compressed.ply"},{decompress:!0,loadAllSeq:ko(),timeOption:n,events:o});return nt&&t.assets.remove(nt),t.assets.add(p),t.assets.load(p),nt=p,new Promise((w,S)=>{p.on("load",async()=>{const y=await p.resource.instantiate();y.name="splat",console.log("资源加载完成:",p.name),be.emit(ht.LISTEN_MESSAGE,{type:"REPLY",text:"assetLoad"}),t.root.insertChild(y,0),Fi({app:t,cameraEntity:a,events:o,state:i,settings:l,params:c,splatAsset:p,timeOption:n,mPosition:r,mRotation:d,mScale:m}),p.loaded?o.fire("loaded",p):p.on("load",()=>{o.fire("loaded",p)}),w(p)}),p.on("error",y=>{console.log(y),S(y)})})},gt=async s=>{var re,ge,K,H,J,$,Z,ee,ne,le;const{sseContent:e}=await vi(s),{contentUrl:t,contentName:n,rawName:o,audioUrl:i}=s||{};(t||n)&&ze&&Fo((re=ze==null?void 0:ze.destroy)==null?void 0:re.call(ze));const{metaInfo:a,settings:l,guideList:c,params:r}=e,{position:d,rotation:m,scale:p,timeOption:u,posterUrl:w,previewUrl:S,audioUrl:y,contentUrl:Q,audioPosition:x}=a,v=(await document.querySelector("pc-app").ready()).app;if(!(t||Q))return!1;const _=t||Q,I=u,b=new Ii,C=await document.querySelector('pc-entity[name="camera"]').ready(),D=C.entity,N=Ao(l),Y=new URL(location.href),B=jo(b,{readyToRender:!1,hqMode:!0,progress:0,inputMode:"desktop",cameraMode:"anim",hasAnimationCamera:!1,duration:0,currentTime:0,volume:0,muted:!0,unMutedVolume:1,timePaused:!1,hasAR:!1,hasVR:!1,isFullscreen:!1,controlsUiVisible:!0,pointCloudModeEnabled:!1,playbackRate:1,backgroundColor:"original",splatScale:1,playbackSpeed:1,statsVisible:Y.searchParams.has("statinfo"),sortTime:0,renderCount:0,debugModeEnabled:!1});Di({app:v,fileName:o,contentUrl:_,timeOption:I,events:b,state:B,cameraEntity:D,settings:N,params:r,mPosition:d,mRotation:m,mScale:p});let M="";(t||n)&&(await ki(v,C),await Ei(D,Lt),D.removeChild("sound"),document.getElementById("cursor").classList.add("hidden"),(ge=document.getElementById("ultraMode"))==null||ge.classList.add("hidden"),(K=document.getElementById("controlsWrap"))==null||K.classList.add("hidden"),(H=document.getElementById("maxIconWrapper"))==null||H.classList.add("hidden"),($=(J=document.getElementById("enterWheel"))==null?void 0:J.classList)==null||$.add("hidden"),(ee=(Z=document.getElementById("cancelWheel"))==null?void 0:Z.classList)==null||ee.add("hidden"));const z=async(q,V)=>{const me=await Ti({app:v,events:b,audioUrl:q});M=me==null?void 0:me.id,M&&await Mi({app:v,cameraEntity:D,events:b,state:B,musicAssetId:M,audioPosition:V})};if(!t&&y?await z(y,x):t&&i&&await z(i,x),Ci(v),w&&_i(w,b),S&&Pi(S,b,B),bi(v,b),r.skyboxUrl){const q=new ut("skybox","texture",{url:r.skyboxUrl},{type:"rgbp",mipmaps:!1,addressu:"repeat",addressv:"clamp"});q.on("load",()=>{v.scene.envAtlas=q.resource}),v.assets.add(q),v.assets.load(q)}if(r.ministats){const q=new So(v);q.position="topright"}return await Li(v,C,B,b,N),Qi({app:v,state:B,events:b,params:r,metaInfo:a,musicAssetId:M,contentUrl:_,contentName:a.contentName,rateArr:(le=(ne=N==null?void 0:N.animTracks)==null?void 0:ne[0])==null?void 0:le.rateArr}),Pe.updateSSE({app:v,events:b}),!0};async function Ai(){const s="4dv.ai";self.onmessage=async i=>{const{data:a}=i;switch(a.type){case"initWorker":importScripts(a.zipUrl);break;case"extractFile":e(a.urls);break}};const e=async i=>{if(i.length===0){self.postMessage({type:"error",data:{message:"文件不存在"}});return}await t(i[0].url,i[0].fileName)},t=async(i,a)=>{const c=(await fetch(i)).body.getReader(),{value:r}=await c.read(),d=new Uint8Array(r);if(!(d[0]===80&&d[1]===75&&d[2]===3&&d[3]===4)){self.postMessage({type:"error",data:{message:"文件格式错误"}});return}try{const u=await(await fetch(i)).blob(),w=new zip.ZipReader(new zip.BlobReader(u),{password:`!@#${s}@707_`}),S=await w.getEntries(),y=S.find(M=>M.filename==="meta.json");if(!y){const M={audioUrl:{}};let z=[];const re=S.filter(K=>(K.filename.endsWith(".ply")||K.filename.endsWith(".4dv"))&&!K.filename.includes("__MACOSX"));for(const K of re){const H=await o(K);z.push({url:H,fileName:K.filename})}if(M.plyUrlList=z,z.length===0){self.postMessage({type:"error",data:{message:"ply 文件不存在"}});return}const ge=S.find(K=>(K.filename.endsWith(".wav")||K.filename.endsWith(".mp3"))&&!K.filename.includes("__MACOSX"));if(ge){const K=await o(ge);M.audioUrl={url:K,fileName:ge.filename}}self.postMessage({type:"extracted",metaInfo:M,settings:{}});return}const Q=await n(y);let x={};const h=S.find(M=>M.filename===Q.settingPath);h&&(x=await n(h));const v=Q.posterPath,_=S.find(M=>M.filename===v);if(_){const M=await o(_);Q.posterPath=M}const I=Q.previewPath,b=S.find(M=>M.filename===I);if(b){const M=await o(b);Q.previewPath=M}const C=Q.audioPath,D=S.find(M=>M.filename===C);if(D){const M=await o(D);Q.audioUrl={url:M,fileName:D.filename}}const N=Q.plyPath.split(",").map(M=>M.trim()),Y=S.filter(M=>N.includes(M.filename));let B=[];for(const M of Y){const z=await o(M);B.push({url:z,fileName:M.filename})}Q.plyUrlList=B,self.postMessage({type:"extracted",metaInfo:Q,settings:x}),await w.close()}catch(p){console.error("------- 解压失败 --------"),self.postMessage({type:"error",data:p})}},n=async i=>{const a=await i.getData(new zip.Uint8ArrayWriter),c=new TextDecoder("utf-8").decode(a);return JSON.parse(c)},o=async i=>{const a=await i.getData(new zip.Uint8ArrayWriter),l=new Blob([a],{type:"application/octet-stream"});return URL.createObjectURL(l)}}class ji{constructor(){f(this,"worker");this._initWorker()}async _initWorker(){this.worker=new Worker(URL.createObjectURL(new Blob([`(${Ai.toString()})()`],{type:"application/javascript"}))),this.worker.postMessage({type:"initWorker",zipUrl:"https://frontend.4dv-intelligence.com/viewer-static/zip.min.js"})}extractFile(e){return new Promise((t,n)=>{this.worker.postMessage({type:"extractFile",urls:e}),this.worker.onmessage=o=>{if(!this.worker)return;const{data:i}=o;switch(i.type){case"extracted":t({metaInfo:i.metaInfo,settings:i.settings});break;case"error":n(i.data);break}}})}destroy(){this.worker&&(this.worker.terminate(),this.worker=null)}}const zi=new ji;function kn(s){s.preventDefault(),s.stopPropagation()}const Kn=async s=>{var m,p;const{plyUrls:e,audioUrl:t}=s,n=(m=e.map(u=>u.url))==null?void 0:m.join(", "),o=e.length,i=5;let a=O((p=s.metaInfo)==null?void 0:p.timeOption);(!a||a.length<=0)&&(a=mt({startNumber:0,spaceTime:i,number:o}),s.metaInfo.timeOption=a);const{position:l,rotation:c,scale:r}=s.metaInfo;let d={contentUrl:n,audioUrl:(t==null?void 0:t.url)||"",rawName:s.rawName,settings:s.settings,metaInfo:{...s.metaInfo||{},timeOption:a,position:O(l),rotation:O(c),scale:O(r)}};await gt(d)};async function Jn(s){var d,m,p,u,w,S,y,Q;if(!s||s.length===0)return;let e=[],t=null;const n=10;for(let x=0;x<s.length;x++){const h=s[x];if(h.name.includes(".ply")||h.name.includes(".4dv")){const v=await Ln(h);e.push(v)}(h.name.includes(".wav")||h.name.includes(".mp3"))&&(t=await Ln(h))}e=e.sort((x,h)=>x.fileName.toLowerCase().localeCompare(h.fileName.toLowerCase())).splice(0,n);const o=(d=[...e||[],t].map(x=>x==null?void 0:x.fileName))==null?void 0:d.join(", ");let i={},a={};const l=document.getElementById("drag-file");l.textContent=`${o} Loading ...`,document.getElementById("input-view").classList.add("text-button-disabled");const r=x=>x==null?void 0:x.map(h=>h.url).join(", ");try{const x=await zi.extractFile(e);URL.revokeObjectURL(e[0].url);const{metaInfo:h}=x||{};i={contentUrl:h.plyPath,settingUrl:h==null?void 0:h.settingPath,posterUrl:h==null?void 0:h.posterPath,previewUrl:h==null?void 0:h.previewPath,audioUrl:(m=h==null?void 0:h.audioUrl)==null?void 0:m.url,timeOption:O(h.timeOption||X.timeOption),position:O(h.position||X.position),rotation:O(h.rotation||X.rotation),scale:O(h.scale||X.scale)},a=x==null?void 0:x.settings,e=h==null?void 0:h.plyUrlList,t=h==null?void 0:h.audioUrl}catch{i={contentUrl:r(e),audioUrl:t==null?void 0:t.url,timeOption:mt({startNumber:0,spaceTime:5,number:e.length}),position:O(X.position),rotation:O(X.rotation),scale:O(X.scale)},a={...Ee.settings||{},animTracks:[{...((u=(p=Ee.settings)==null?void 0:p.animTracks)==null?void 0:u[0])||{},duration:e.length*5||5,frameRate:((y=(S=(w=Ee.settings)==null?void 0:w.animTracks)==null?void 0:S[0])==null?void 0:y.frameRate)||60},...((Q=Ee.settings)==null?void 0:Q.animTracks)||[]]}}return{plyUrls:e.sort((x,h)=>x.fileName.toLowerCase().localeCompare(h.fileName.toLowerCase())).splice(0,n),audioUrl:t,rawName:o,metaInfo:i,settings:a}}async function Ln(s,e){return{url:URL.createObjectURL(s),fileName:s.name}}const eo=async s=>{var a,l,c,r,d,m,p,u,w,S,y,Q,x,h,v,_,I,b,C,D;if(document.getElementById("viewerInputContainer").className.includes("hidden")){await Kn(s);return}const t=document.getElementById("input-error");t.textContent="",window.viewerConfig=s,be.emit("updateDefaultDuration",((a=s==null?void 0:s.plyUrls)==null?void 0:a.length)*5);const n=document.getElementById("drag-file");n.textContent=s.rawName,document.title=`${s.rawName} | 4D Video Player - 4DV.ai`,document.getElementById("input-view").classList.remove("text-button-disabled");const i={fps:(l=s.settings)==null?void 0:l.fps,fov:(r=(c=s.settings)==null?void 0:c.camera)==null?void 0:r.fov,duration:((p=(m=(d=s.settings)==null?void 0:d.animTracks)==null?void 0:m[0])==null?void 0:p.duration)||((u=s.plyUrls)==null?void 0:u.length)*5,position:(S=(w=s.settings)==null?void 0:w.camera)==null?void 0:S.position,target:(Q=(y=s.settings)==null?void 0:y.camera)==null?void 0:Q.target,xrTarget:(h=(x=s.settings)==null?void 0:x.xrCamera)==null?void 0:h.target,xrPosition:(_=(v=s.settings)==null?void 0:v.xrCamera)==null?void 0:_.position,mPosition:(I=s.metaInfo)==null?void 0:I.position,mRotation:(b=s.metaInfo)==null?void 0:b.rotation,mScale:(C=s.metaInfo)==null?void 0:C.scale,timeOption:(D=s.metaInfo)==null?void 0:D.timeOption};be.emit("updateDefaultPageInput",i)};function qi(s){if(!document.getElementById("loadingWrap").className.includes("hidden"))return;const n=s.dataTransfer.files;Jn(n).then(async o=>{eo(o)})}const Bi=()=>{const s=document.getElementById("dropArea")||document.getElementsByTagName("body")[0],e=document.getElementById("fileInput"),t=document.getElementById("dragInput");["dragenter","dragover","dragleave","drop"].forEach(n=>{s.addEventListener(n,kn,!1),document.body.addEventListener(n,kn,!1)}),s.addEventListener("drop",qi,!1),t.addEventListener("click",()=>e.click()),e.addEventListener("change",n=>{Jn(n.target.files).then(o=>{eo(o)})})};class Ui{constructor(e){f(this,"clearIdList");this.clearIdList=[],this.initialize(e)}_addListenerFn(e,t,n){e.addEventListener(t,n),this.clearIdList.push({fn:n,eventName:t,el:e})}initialize(e){const t=document.getElementById("input-fov"),n=document.getElementById("input-position"),o=document.getElementById("input-target"),i=document.getElementById("input-xr-position"),a=document.getElementById("input-xr-target"),l=document.getElementById("input-m-position"),c=document.getElementById("input-m-rotation"),r=document.getElementById("input-m-scale"),d=document.getElementById("input-duration"),m=document.getElementById("input-fps"),p=document.getElementById("input-reset"),u=document.getElementById("input-view"),w=document.getElementById("input-error"),S=document.getElementById("input-dynamic-sorting"),y=document.getElementById("input-temporal-sorting"),Q=Pe.getSSE(),{settings:x={},metaInfo:h={}}=Q||{},{position:v=h.position,rotation:_=h.rotation,scale:I=h.scale}=h,{camera:b,animTracks:C,xrCamera:D,fps:N,...Y}=x,[B,...M]=C||[],{fov:z,position:re,target:ge}=b||{},{position:K,target:H}=D||{},J=(q,V)=>{q&&typeof V=="number"&&(V||V===0)&&(q.value=V),q&&V===void 0&&(q.value=void 0)},$=(q,V)=>{q&&typeof V=="boolean"&&(q.checked=V)},Z=(q,V)=>{let me={};return Object.keys(q).forEach(k=>{me[k]=q[k]||V[k]}),me},ee=q=>{const{fov:V,duration:me,position:k,target:E,xrTarget:R,xrPosition:U,mPosition:W,mRotation:A,mScale:G,fps:oe,dynamicSorting:he,temporalSorting:ce}=q;[{el:t,val:V},{el:d,val:me},{el:m,val:oe}].forEach(({el:te,val:se})=>{J(te,se)}),[{el:S,val:he},{el:y,val:ce}].forEach(({el:te,val:se})=>{$(te,se)}),n.value=k.join(","),o.value=E.join(","),i.value=U.join(","),a.value=R.join(","),l.value=W.join(","),c.value=A.join(","),r.value=G.join(",")},ne={fov:z,duration:B==null?void 0:B.duration,position:re,target:ge,xrTarget:H,xrPosition:K,mPosition:v,mRotation:_,mScale:I,fps:N};ee(ne);const le=async q=>{var P;if(u.classList.contains("text-button-disabled"))return;w.textContent="";const{fov:V,duration:me,position:k,target:E,xrTarget:R,xrPosition:U,mPosition:W,mRotation:A,mScale:G,fps:oe,dynamicSorting:he,temporalSorting:ce}=q;let te=O(k,re),se=O(E,ge),pe=O(U,K),fe=O(R,H),we=O(W,v),ue=O(A,_),ie=O(G,I);if(V<=0){w.textContent="Please enter Fov.";return}if(te.length>0&&te.length<3){w.textContent="Camera Position must contain 3 elements.";return}if(se.length>0&&se.length<3){w.textContent="Camera Target must contain 3 elements.";return}if(pe.length>0&&pe.length<3){w.textContent="XR Position must contain 3 elements.";return}if(fe.length>0&&fe.length<3){w.textContent="XR Target must contain 3 elements.";return}if(we.length>0&&we.length<3){w.textContent="Position must contain 3 elements.";return}if(ue.length>0&&ue.length<3){w.textContent="Rotation must contain 3 elements.";return}if(ie.length>0&&ie.length<3){w.textContent="Scale must contain 3 elements.";return}if(me<=0){w.textContent="Please enter duration.";return}let Ae={...Y||{},fps:Number(oe||-1),dynamicSorting:he,temporalSorting:ce,camera:{...b||{},fov:Number(V||z),position:te,target:se},xrCamera:{fov:Number(V||z),position:pe,target:fe},animTracks:[{...B||{},duration:Number(me||(B==null?void 0:B.duration)||0),frameRate:Number((B==null?void 0:B.frameRate)||30)},...M]},We={...h||{},...window.viewerConfig.metaInfo,position:we,rotation:ue,scale:ie,timeOption:O(((P=window.viewerConfig.metaInfo)==null?void 0:P.timeOption)||"")};const g={settings:Ae,metaInfo:We};return Pe.updateMetaInfo(g.metaInfo),Pe.updateSettings(g.settings),g};be.on("updateDefaultDuration",q=>{q&&(d.value=q)}),this._addListenerFn(u,"pointerdown",async()=>{const q={fov:t.value,duration:d.value,fps:m.value,dynamicSorting:S.checked,temporalSorting:y.checked,position:n.value,target:o.value,xrTarget:a.value,xrPosition:i.value,mPosition:l.value,mRotation:c.value,mScale:r.value},V=await le(q);await e(V)}),this._addListenerFn(p,"pointerdown",()=>{ee(ne),le(ne)}),be.on("updateDefaultPageInput",q=>{const V=Z(q,ne);ee(V),le(V)})}destroy(){this.clearIdList.forEach(e=>{const{fn:t,eventName:n,el:o}=e;o.removeEventListener(n,t)}),this.clearIdList=[]}}const Qn=async()=>{document.getElementById("loadingWrap").classList.add("hidden"),document.getElementById("viewerInputContainer").classList.remove("hidden");const s=document.getElementById("input-error"),e=async t=>{const n=window.viewerConfig;if(!n||!n.plyUrls||n.plyUrls.length<=0){s.textContent="Please choose or drag a file to view.";return}const o=mt({startNumber:0,spaceTime:5,number:n.plyUrls.length});n.metaInfo={...t.metaInfo||{},timeOption:n.metaInfo.timeOption||o},n.settings=t.settings,await Kn(n)};new Ui(e)},Ni=async()=>{const s=window.parent.location.origin,e=sn();!e&&At.initialize();const t=new URL(location.href);if(window.addEventListener("message",n=>{be.on(ht.LISTEN_MESSAGE,o=>{var i;(i=n.source)==null||i.postMessage(o,s)}),Fe()&&n.data&&n.data.type==="titleShow"&&(n.data.value?(document.getElementById("cancelWheel").classList.add("hidden"),be.emit("onNoWheel")):(document.getElementById("enterWheel").classList.add("hidden"),be.emit("cancelNoWheel")))},!1),$n()){const n=function(i){i.ctrlKey||(i.stopImmediatePropagation(),window.parent.postMessage({type:"iframeWheel",deltaY:i.deltaY},"*"))},o=()=>{var c,r;const i=document.getElementById("timelineContainer"),a=document.getElementById("buttonContainer");i.style.display="none",a.style.display="none",document.getElementById("cancelWheel").classList.add("hidden"),window.addEventListener("wheel",n,{capture:!0,passive:!1});const l=(c=document.getElementsByTagName("canvas"))==null?void 0:c[0];l==null||l.addEventListener("pointerdown",function(){window.parent.postMessage({type:"iframeClick"},"*")}),(r=document.getElementById("enterWheel"))==null||r.addEventListener("pointerdown",function(){window.parent.postMessage({type:"iframeClick"},"*")}),Fe()&&l&&(l.style.touchAction="pan-y",["pointermove"].forEach(d=>{window.addEventListener(d,n,{capture:!0,passive:!1})}))};o(),be.on("cancelNoWheel",()=>{var c;document.getElementById("cancelWheel").classList.remove("hidden");const i=document.getElementById("timelineContainer"),a=document.getElementById("buttonContainer");i.style.display="block",a.style.display="flex",window.removeEventListener("wheel",n,{capture:!0,passive:!1});const l=(c=document.getElementsByTagName("canvas"))==null?void 0:c[0];Fe()&&l&&(l.style.touchAction="none",["pointermove"].forEach(r=>{window.removeEventListener(r,n,{capture:!0,passive:!1})}))}),be.on("onNoWheel",o)}if(document.getElementById("volumeContainer")&&(document.getElementById("volumeContainer").style.bottom="70px"),t.searchParams.has("content")||t.pathname){if(t.searchParams.has("statinfo")&&document.getElementById("statsPanel")&&document.getElementById("statsPanel").classList.remove("hidden"),await gt()){const{guideList:o}=await Pe.getSSE();(o==null?void 0:o.length)>0&&Si(o)}else await Qn();e||At.startCount(5);return}await Qn(),!e&&At.startCount(5)};function Hi(s){const{root:e,noContainer:t}=s||{},n=document.createElement("div");n.id="ui",n.innerHTML=`
    ${t?"":`
    <div id="maxIconWrapper" class="hidden">
        <div id="volumeShowMax" class="maxIcon hidden">
            <svg id="unMutedStatusMax" class="icon hidden unMutedStatus" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg" p-id="2503" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M734.118332 271.7758l-46.483684 46.52257c43.48028 50.070372 69.959352 115.233488 69.959352 186.752358 0 78.772065-31.899524 150.056598-83.529415 201.648626l46.482661 46.483684c63.563688-63.447031 102.833063-151.207817 102.833063-248.131287C823.381331 415.397848 789.493523 333.817832 734.118332 271.7758z" p-id="2504"></path><path d="M830.049195 175.883823l-49.329499 49.290613c67.229171 74.0536 108.565625 172.011632 108.565625 279.874245 0 115.115807-46.678112 219.333404-122.096802 294.789956l49.252751 49.281403c88.1302-88.043219 142.569066-209.691813 142.569066-344.07136C959.009312 377.922329 909.834332 262.572184 830.049195 175.883823z" p-id="2505"></path><path d="M646.729006 359.243921l-44.534286 44.474934c21.877263 27.979238 35.018561 63.076594 35.018561 101.33085 0 45.508473-18.444071 86.706781-48.237631 116.519784l44.182268 44.240597c41.102117-41.179888 66.566068-97.977475 66.566068-160.761404C699.723987 449.539436 679.75826 398.707724 646.729006 359.243921z" p-id="2506"></path><path d="M224.830093 633.092939 498.018056 837.997726 498.018056 177.814802 224.830093 382.680702Z" p-id="2507"></path><path d="M87.252715 381.432269c-12.830213 0-23.202445 10.372232-23.202445 23.183002l0 0L64.05027 604.060719c0 12.81077 10.373255 23.183002 23.202445 23.183002l84.923158 0c0.001023 0 0.010233 0.001023 0.010233 0.001023l0-0.001023L172.186106 381.432269l0 0-0.005117 0L87.252715 381.432269z" p-id="2508"></path></svg>
            <svg id="mutedStatusMax" class="icon mutedStatus" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg" p-id="1522" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M518.568091 166.067246 231.87351 381.098671 231.87351 643.904169 518.568091 858.944803Z" p-id="1523"></path><path d="M654.891919 704.501292 770.425236 588.959789 885.928876 704.501292 960.552457 629.817336 845.058027 514.322905 960.59339 398.779356 885.969808 324.217173 770.438539 439.702394 654.871453 324.135308 580.308247 398.779356 695.799608 514.309602 580.205916 629.857245Z" p-id="1524"></path><path d="M87.465562 637.779681l89.140203 0L176.605765 379.750977l-89.140203 0c-13.45443 0-24.337291 10.902304-24.337291 24.337291l0 0.039909 0 209.274304 0 0.039909C63.128271 626.877377 74.010109 637.779681 87.465562 637.779681z" p-id="1525"></path></svg>
        </div>
        <div id="arModeMax" class="maxIcon hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
        </div>
        <div id="vrModeMax" class="maxIcon hidden">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M300-240q-66 0-113-47t-47-113v-163q0-51 32-89.5t82-47.5q57-11 113-15.5t113-4.5q57 0 113.5 4.5T706-700q50 10 82 48t32 89v163q0 66-47 113t-113 47h-40q-13 0-26-1.5t-25-6.5l-64-22q-12-5-25-5t-25 5l-64 22q-12 5-25 6.5t-26 1.5h-40Zm0-80h40q7 0 13.5-1t12.5-3q29-9 56.5-19t57.5-10q30 0 58 9.5t56 19.5q6 2 12.5 3t13.5 1h40q33 0 56.5-23.5T740-400v-163q0-22-14-38t-35-21q-52-11-104.5-14.5T480-640q-54 0-106 4t-105 14q-21 4-35 20.5T220-563v163q0 33 23.5 56.5T300-320ZM40-400v-160h60v160H40Zm820 0v-160h60v160h-60Zm-380-80Z"/></svg>
        </div>
    </div>
    `}
    <div id="viewerInputContainer" class="inputContainer hidden ${e?"":"fdv-item-center"}">
        <div class="panel">
            <div class="viewer-header">4D VIDEO PLAYER</div>
            <div id="dragInput" class="drag-input">
                <input type="file" multiple accept=".ply,.4dv" id="fileInput" style="display: none;">
                <span id="drag-file">Drag & drop .4dv file, or click to open file</span>
            </div>
            <label for="input-fov" class="text-input-position">
                <span class="text-input-label">Fov:</span>
                <span title="Fov" class="text-input">
                    <input name="inputFov" aria-label="inputFov" id="input-fov" type="number" placeholder="Fov" />
                </span>
            </label>
            <label for="input-position" class="text-input-position">
                <span class="text-input-label">Camera position:</span>
                <span class="text-input">
                  <input aria-label="inputPosition" id="input-position" type="text" placeholder="Camera position" />
                </span>
            </label>
            <label for="input-target" class="text-input-position">
                <span class="text-input-label">Camera target:</span>
                <span class="text-input">
                  <input aria-label="inputTarget" id="input-target" type="text" placeholder="Camera target" />
                </span>
            </label>

            <label for="input-xr-position" class="text-input-position">
                <span class="text-input-label">XR Camera position:</span>
                <span class="text-input">
                  <input aria-label="inputXRPosition" id="input-xr-position" type="text" placeholder="XR Camera position" />
                </span>
            </label>
            <label for="input-xr-target" class="text-input-position">
                <span class="text-input-label">XR Camera target:</span>
                <span class="text-input">
                  <input aria-label="inputXRTarget" id="input-xr-target" type="text" placeholder="XR Camera target" />
                </span>
            </label>
            <label for="input-m-position" class="text-input-position">
                <span class="text-input-label">position:</span>
                <span class="text-input">
                  <input aria-label="inputMPosition" id="input-m-position" type="text" placeholder="position" />
                </span>
            </label>
            <label for="input-m-rotation" class="text-input-position">
                <span class="text-input-label">rotation:</span>
                <span class="text-input">
                  <input aria-label="inputMRotation" id="input-m-rotation" type="text" placeholder="rotation" />
                </span>
            </label>
            <label for="input-m-scale" class="text-input-position">
                <span class="text-input-label">scale:</span>
                <span class="text-input">
                  <input aria-label="inputMScale" id="input-m-scale" type="text" placeholder="scale" />
                </span>
            </label>
            <label for="input-duration" class="text-input-position">
                <span class="text-input-label">Duration:</span>
                <span class="text-input">
                    <input aria-label="inputDuration" id="input-duration" type="number" placeholder="Duration" />
                </span>
            </label>
            <label for="input-fps" class="text-input-position">
                <span class="text-input-label">FPS:</span>
                <span class="text-input">
                    <input aria-label="inputFPS" id="input-fps" type="number" placeholder="FPS(-1 not limit)" />
                </span>
            </label>
          
            <label for="input-fps" class="text-input-position">
                <span class="text-input-label">Dynamic Sorting:</span>
                <input class="text-input-checkbox" aria-label="inputDynamicSorting" id="input-dynamic-sorting" type="checkbox"
                    checked />
            </label>
            <label for="input-fps" class="text-input-position">
                <span class="text-input-label ">Temporal Sorting:</span>
                <input class="text-input-checkbox" aria-label="inputTemporalSorting" id="input-temporal-sorting" type="checkbox"
                    checked />
            </label>
            <div class="panel-footer">
                <span id="input-error" class="error-tips"></span>
                <button class="text-button" id="input-view">View</button>
                <button class="text-button" id="input-reset">Reset</button>
            </div>
        </div>
    </div>
    <div id="poster"></div>
    <video
        id="video"
        autoPlay
        muted
        loop=""
        class="w-full h-full m-auto object-cover"
    ></video>
    <svg id="cancelWheel" class="hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107.84228515625" height="15.02001953125" viewBox="0 0 107.84228515625 15.02001953125" fill="none">
        <g >
            <path     fill="#FCFCFC"  d="M5.51997 15.02Q3.87997 15.02 2.62997 14.38Q1.37997 13.74 0.689975 12.57Q-2.47359e-05 11.4 -2.47359e-05 9.86L-2.47359e-05 5.81999Q-2.47359e-05 4.29999 0.689975 3.13999Q1.37997 1.97999 2.62997 1.33999Q3.87997 0.69999 5.51997 0.69999Q7.15997 0.69999 8.40997 1.29999Q9.65997 1.89999 10.35 2.98999Q11.04 4.07999 11.04 5.51999Q11.04 5.69999 10.74 5.73999L7.57997 5.93999L7.51997 5.93999Q7.27997 5.93999 7.27997 5.71999Q7.27997 4.89999 6.79997 4.40999Q6.31997 3.91999 5.51997 3.91999Q4.71997 3.91999 4.23997 4.40999Q3.75997 4.89999 3.75997 5.71999L3.75997 10.02Q3.75997 10.82 4.23997 11.31Q4.71997 11.8 5.51997 11.8Q6.31997 11.8 6.79997 11.31Q7.27997 10.82 7.27997 10.02Q7.27997 9.9 7.35997 9.84Q7.43997 9.78 7.57997 9.8L10.74 9.96Q11.04 9.98 11.04 10.16Q11.04 11.6 10.35 12.7Q9.65997 13.8 8.40997 14.41Q7.15997 15.02 5.51997 15.02ZM12.54 14.86Q12.4 14.86 12.32 14.78Q12.24 14.7 12.24 14.56L12.24 1.15999Q12.24 1.01999 12.32 0.93999Q12.4 0.859991 12.54 0.859991L15.7 0.859991Q15.84 0.859991 15.92 0.93999Q16 1.01999 16 1.15999L16 14.56Q16 14.7 15.92 14.78Q15.84 14.86 15.7 14.86L12.54 14.86ZM19.22 3.75999Q18.4 3.75999 17.87 3.22999Q17.34 2.69999 17.34 1.87999Q17.34 1.03999 17.87 0.519989Q18.4 -1.14441e-05 19.22 -1.14441e-05Q20.04 -1.14441e-05 20.57 0.519989Q21.1 1.03999 21.1 1.87999Q21.1 2.67999 20.57 3.21999Q20.04 3.75999 19.22 3.75999ZM17.62 14.86Q17.48 14.86 17.4 14.78Q17.32 14.7 17.32 14.56L17.32 4.75999Q17.32 4.61999 17.4 4.53999Q17.48 4.45999 17.62 4.45999L20.78 4.45999Q20.92 4.45999 21 4.53999Q21.08 4.61999 21.08 4.75999L21.08 14.56Q21.08 14.7 21 14.78Q20.92 14.86 20.78 14.86L17.62 14.86ZM27.38 15.02Q25.68 15.02 24.42 14.19Q23.16 13.36 22.58 11.88Q22.18 10.86 22.18 9.6Q22.18 8.35999 22.58 7.33999Q23.14 5.91999 24.42 5.10999Q25.7 4.29999 27.38 4.29999Q29.08 4.29999 30.39 5.14999Q31.7 5.99999 32.16 7.27999Q32.3 7.64 32.34 8.04L32.34 8.09999Q32.34 8.3 32.08 8.35999L28.98 8.85999L28.92 8.85999Q28.66 8.85999 28.64 8.59999L28.56 8.31999Q28.46 7.98 28.13 7.75Q27.8 7.51999 27.36 7.51999Q26.56 7.51999 26.22 8.24Q25.98 8.74 25.98 9.62Q25.98 10.44 26.2 11Q26.54 11.8 27.36 11.8Q28.24 11.8 28.56 10.88L28.58 10.8Q28.64 10.46 28.92 10.52L32.04 11.04Q32.3 11.1 32.3 11.32Q32.3 11.56 32.16 11.98Q31.64 13.44 30.35 14.23Q29.06 15.02 27.38 15.02ZM33.68 14.86Q33.54 14.86 33.46 14.78Q33.38 14.7 33.38 14.56L33.38 1.15999Q33.38 1.01999 33.46 0.93999Q33.54 0.859991 33.68 0.859991L36.84 0.859991Q36.98 0.859991 37.06 0.93999Q37.14 1.01999 37.14 1.15999L37.14 6.89999Q37.14 6.95999 37.18 6.97999Q37.22 6.99999 37.26 6.93999L38.96 4.63999Q39.08 4.45999 39.32 4.45999L42.92 4.45999Q43.04 4.45999 43.11 4.50999Q43.18 4.55999 43.18 4.63999Q43.18 4.71999 43.12 4.81999L40.54 8.3Q40.5 8.35999 40.54 8.43999L43.4799 14.5L43.52 14.66Q43.52 14.86 43.26 14.86L39.96 14.86Q39.7 14.86 39.6 14.62L37.98 10.78Q37.96 10.74 37.91 10.73Q37.86 10.72 37.84 10.76L37.18 11.88Q37.14 11.96 37.14 12L37.14 14.56Q37.14 14.7 37.06 14.78Q36.98 14.86 36.84 14.86L33.68 14.86ZM56.2311 7.15999Q56.2311 7.29999 56.1511 7.37999Q56.0711 7.45999 55.9311 7.45999L54.2711 7.45999Q54.1711 7.45999 54.1711 7.55999L54.1711 10.7Q54.1711 11.7 54.8911 11.7L55.6311 11.7Q55.7711 11.7 55.8511 11.78Q55.9311 11.86 55.9311 12L55.9311 14.56Q55.9311 14.84 55.6311 14.88Q54.8511 14.94 54.1311 14.94Q52.3111 14.94 51.4511 14.38Q50.5911 13.82 50.5711 12.26L50.5711 7.55999Q50.5711 7.45999 50.4711 7.45999L49.3911 7.45999Q49.2511 7.45999 49.1711 7.37999Q49.0911 7.29999 49.0911 7.15999L49.0911 4.75999Q49.0911 4.61999 49.1711 4.53999Q49.2511 4.45999 49.3911 4.45999L50.4711 4.45999Q50.5711 4.45999 50.5711 4.35999L50.5711 1.95999Q50.5711 1.81999 50.6511 1.73999Q50.7311 1.65999 50.8711 1.65999L53.8711 1.65999Q54.0111 1.65999 54.0911 1.73999Q54.1711 1.81999 54.1711 1.95999L54.1711 4.35999Q54.1711 4.45999 54.2711 4.45999L55.9311 4.45999Q56.0711 4.45999 56.1511 4.53999Q56.2311 4.61999 56.2311 4.75999L56.2311 7.15999ZM62.1711 15.02Q60.2711 15.02 58.9611 14Q57.6511 12.98 57.2311 11.24Q57.0311 10.52 57.0311 9.64Q57.0311 8.66 57.2711 7.85999Q57.7511 6.19999 59.0411 5.24999Q60.3311 4.29999 62.1911 4.29999Q64.0511 4.29999 65.3211 5.24999Q66.5911 6.19999 67.0711 7.81999Q67.3111 8.66 67.3111 9.6Q67.3111 10.36 67.1511 11.12Q66.7311 12.92 65.4211 13.97Q64.1111 15.02 62.1711 15.02ZM62.1711 11.8Q62.6911 11.8 63.0111 11.45Q63.3311 11.1 63.4511 10.52Q63.5311 10.14 63.5311 9.62Q63.5311 9.16 63.4311 8.7Q63.1311 7.51999 62.1711 7.51999Q61.1711 7.51999 60.9111 8.7Q60.8111 9.04 60.8111 9.62Q60.8111 10.14 60.8911 10.52Q61.1911 11.8 62.1711 11.8ZM83.3423 8.92Q83.4023 9.36 83.4023 9.82Q83.4023 10.14 83.3823 10.32Q83.3823 10.6 83.0823 10.6L77.0823 10.6Q77.0023 10.6 77.0023 10.68Q77.0023 10.86 77.1623 11.1Q77.3623 11.44 77.8723 11.67Q78.3823 11.9 79.0223 11.9Q79.5623 11.9 80.0223 11.74Q80.4823 11.58 80.8023 11.28Q80.9023 11.2 81.0023 11.2Q81.1423 11.2 81.2223 11.32L82.7423 13.26Q82.8223 13.36 82.8223 13.48Q82.8223 13.6 82.7223 13.68Q82.0223 14.36 80.9823 14.69Q79.9423 15.02 78.7423 15.02Q76.8823 15.02 75.5623 14.24Q74.2423 13.46 73.6423 12.02Q73.2023 10.98 73.2023 9.78Q73.2023 8.51999 73.5623 7.54Q74.1023 6.01999 75.3423 5.15999Q76.5823 4.29999 78.2623 4.29999Q79.5423 4.29999 80.6323 4.89999Q81.7223 5.49999 82.4323 6.54999Q83.1423 7.59999 83.3423 8.92ZM78.2423 7.51999Q77.4223 7.51999 77.1023 8.31999L77.0223 8.54Q77.0023 8.59999 77.0423 8.63Q77.0823 8.66 77.1223 8.66L79.4023 8.66Q79.4823 8.66 79.4823 8.58Q79.4823 8.5 79.4223 8.31999Q79.3223 7.93999 79.0123 7.73Q78.7023 7.51999 78.2423 7.51999ZM84.3623 14.86Q84.2423 14.86 84.1723 14.81Q84.1023 14.76 84.1023 14.68Q84.1023 14.58 84.1623 14.5L87.2823 9.72Q87.3223 9.66 87.2823 9.6L84.1623 4.81999Q84.1023 4.71999 84.1023 4.63999Q84.1023 4.55999 84.1723 4.50999Q84.2423 4.45999 84.3623 4.45999L87.7223 4.45999Q87.9623 4.45999 88.0823 4.65999L89.3423 6.67999Q89.4023 6.79999 89.4623 6.67999L90.7223 4.65999Q90.8423 4.45999 91.0823 4.45999L94.6823 4.45999Q94.8023 4.45999 94.8723 4.50999Q94.9423 4.55999 94.9423 4.63999Q94.9423 4.71999 94.8823 4.81999L91.7623 9.6Q91.7423 9.66 91.7623 9.72L94.8823 14.5Q94.9423 14.58 94.9423 14.68Q94.9423 14.76 94.8723 14.81Q94.8023 14.86 94.6823 14.86L91.3223 14.86Q91.0823 14.86 90.9623 14.66L89.7023 12.64Q89.6423 12.52 89.5823 12.64L88.3223 14.66Q88.2023 14.86 87.9623 14.86L84.3623 14.86ZM97.8623 3.75999Q97.0423 3.75999 96.5123 3.22999Q95.9823 2.69999 95.9823 1.87999Q95.9823 1.03999 96.5123 0.519989Q97.0423 -1.14441e-05 97.8623 -1.14441e-05Q98.6823 -1.14441e-05 99.2123 0.519989Q99.7423 1.03999 99.7423 1.87999Q99.7423 2.67999 99.2123 3.21999Q98.6823 3.75999 97.8623 3.75999ZM96.2623 14.86Q96.1223 14.86 96.0423 14.78Q95.9623 14.7 95.9623 14.56L95.9623 4.75999Q95.9623 4.61999 96.0423 4.53999Q96.1223 4.45999 96.2623 4.45999L99.4223 4.45999Q99.5623 4.45999 99.6423 4.53999Q99.7223 4.61999 99.7223 4.75999L99.7223 14.56Q99.7223 14.7 99.6423 14.78Q99.5623 14.86 99.4223 14.86L96.2623 14.86ZM107.842 7.15999Q107.842 7.29999 107.762 7.37999Q107.682 7.45999 107.542 7.45999L105.882 7.45999Q105.782 7.45999 105.782 7.55999L105.782 10.7Q105.782 11.7 106.502 11.7L107.242 11.7Q107.382 11.7 107.462 11.78Q107.542 11.86 107.542 12L107.542 14.56Q107.542 14.84 107.242 14.88Q106.462 14.94 105.742 14.94Q103.922 14.94 103.062 14.38Q102.202 13.82 102.182 12.26L102.182 7.55999Q102.182 7.45999 102.082 7.45999L101.002 7.45999Q100.862 7.45999 100.782 7.37999Q100.702 7.29999 100.702 7.15999L100.702 4.75999Q100.702 4.61999 100.782 4.53999Q100.862 4.45999 101.002 4.45999L102.082 4.45999Q102.182 4.45999 102.182 4.35999L102.182 1.95999Q102.182 1.81999 102.262 1.73999Q102.342 1.65999 102.482 1.65999L105.482 1.65999Q105.622 1.65999 105.702 1.73999Q105.782 1.81999 105.782 1.95999L105.782 4.35999Q105.782 4.45999 105.882 4.45999L107.542 4.45999Q107.682 4.45999 107.762 4.53999Q107.842 4.61999 107.842 4.75999L107.842 7.15999Z">
            </path>
        </g>
    </svg>
    <svg width="80px" id="cursor" class="cursor hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 342 175" fill="none">
        <path d="M229.191 64.1944C226.717 64.1944 225.303 64.5882 223.097 65.2785C219.888 59.0657 213.083 54.7002 204.652 54.7002C200.223 54.7002 196.359 55.9155 192.984 57.9573C189.217 53.5334 183.739 50.6312 176.876 50.6312C172.322 50.6312 165.254 55.5606 165.254 57.7142L162.427 15.9891C162.427 6.29062 154.544 0 143.172 0C131.801 0 125.394 7.83653 125.394 17.535L129.196 100.052L121.529 92.1959C114.387 84.6511 100.696 81.0293 91.8496 87.1255C83.0033 93.2168 87.0047 106.804 94.1468 114.354L134.252 163.464C136.805 166.162 145.766 175 167.494 175L201.552 175C250.799 175 247.949 124.388 247.949 124.388L247.949 97.208L247.949 81.8363C247.949 72.1282 240.562 64.1944 229.191 64.1944Z"   fill="#FFFFFF" >
        </path>
        <g opacity="0.6">
            <path d="M342 53.4605L293.55 14.3896L293.55 34.015L247.95 34.015L247.95 77.7674L293.55 77.7674L293.55 92.5314L342 53.4605Z"   fill="#FFFFFF" >
            </path>
        </g>
        <g opacity="0.6">
            <path d="M0 53.4605L48.4498 92.5314L48.4498 77.7674L99.7497 77.7674L99.7497 34.015L48.4498 34.015L48.4498 14.3896L0 53.4605Z"   fill="#FFFFFF" >
            </path>
        </g>
    </svg>
    <svg id="enterWheel" class="hidden" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="144.8424072265625" height="15.02001953125" viewBox="0 0 144.8424072265625 15.02001953125" fill="none">
        <g >
            <path     fill="#FCFCFC"  d="M5.51998 15.02Q3.87998 15.02 2.62998 14.38Q1.37998 13.74 0.689976 12.57Q-2.38419e-05 11.4 -2.38419e-05 9.86L-2.38419e-05 5.81999Q-2.38419e-05 4.29999 0.689976 3.13999Q1.37998 1.97999 2.62998 1.33999Q3.87998 0.69999 5.51998 0.69999Q7.15998 0.69999 8.40998 1.29999Q9.65998 1.89999 10.35 2.98999Q11.04 4.07999 11.04 5.51999Q11.04 5.69999 10.74 5.73999L7.57998 5.93999L7.51998 5.93999Q7.27998 5.93999 7.27998 5.71999Q7.27998 4.89999 6.79998 4.40999Q6.31998 3.91999 5.51998 3.91999Q4.71998 3.91999 4.23998 4.40999Q3.75998 4.89999 3.75998 5.71999L3.75998 10.02Q3.75998 10.82 4.23998 11.31Q4.71998 11.8 5.51998 11.8Q6.31998 11.8 6.79998 11.31Q7.27998 10.82 7.27998 10.02Q7.27998 9.9 7.35998 9.84Q7.43998 9.78 7.57998 9.8L10.74 9.96Q11.04 9.98 11.04 10.16Q11.04 11.6 10.35 12.7Q9.65998 13.8 8.40998 14.41Q7.15998 15.02 5.51998 15.02ZM12.54 14.86Q12.4 14.86 12.32 14.78Q12.24 14.7 12.24 14.56L12.24 1.15999Q12.24 1.01999 12.32 0.93999Q12.4 0.859991 12.54 0.859991L15.7 0.859991Q15.84 0.859991 15.92 0.93999Q16 1.01999 16 1.15999L16 14.56Q16 14.7 15.92 14.78Q15.84 14.86 15.7 14.86L12.54 14.86ZM19.22 3.75999Q18.4 3.75999 17.87 3.22999Q17.34 2.69999 17.34 1.87999Q17.34 1.03999 17.87 0.519989Q18.4 -1.14441e-05 19.22 -1.14441e-05Q20.04 -1.14441e-05 20.57 0.519989Q21.1 1.03999 21.1 1.87999Q21.1 2.67999 20.57 3.21999Q20.04 3.75999 19.22 3.75999ZM17.62 14.86Q17.48 14.86 17.4 14.78Q17.32 14.7 17.32 14.56L17.32 4.75999Q17.32 4.61999 17.4 4.53999Q17.48 4.45999 17.62 4.45999L20.78 4.45999Q20.92 4.45999 21 4.53999Q21.08 4.61999 21.08 4.75999L21.08 14.56Q21.08 14.7 21 14.78Q20.92 14.86 20.78 14.86L17.62 14.86ZM27.38 15.02Q25.68 15.02 24.42 14.19Q23.16 13.36 22.58 11.88Q22.18 10.86 22.18 9.6Q22.18 8.35999 22.58 7.33999Q23.14 5.91999 24.42 5.10999Q25.7 4.29999 27.38 4.29999Q29.08 4.29999 30.39 5.14999Q31.7 5.99999 32.16 7.27999Q32.3 7.64 32.34 8.04L32.34 8.09999Q32.34 8.3 32.08 8.35999L28.98 8.85999L28.92 8.85999Q28.66 8.85999 28.64 8.59999L28.56 8.31999Q28.46 7.98 28.13 7.75Q27.8 7.51999 27.36 7.51999Q26.56 7.51999 26.22 8.24Q25.98 8.74 25.98 9.62Q25.98 10.44 26.2 11Q26.54 11.8 27.36 11.8Q28.24 11.8 28.56 10.88L28.58 10.8Q28.64 10.46 28.92 10.52L32.04 11.04Q32.3 11.1 32.3 11.32Q32.3 11.56 32.16 11.98Q31.64 13.44 30.35 14.23Q29.06 15.02 27.38 15.02ZM33.68 14.86Q33.54 14.86 33.46 14.78Q33.38 14.7 33.38 14.56L33.38 1.15999Q33.38 1.01999 33.46 0.93999Q33.54 0.859991 33.68 0.859991L36.84 0.859991Q36.98 0.859991 37.06 0.93999Q37.14 1.01999 37.14 1.15999L37.14 6.89999Q37.14 6.95999 37.18 6.97999Q37.22 6.99999 37.26 6.93999L38.96 4.63999Q39.08 4.45999 39.32 4.45999L42.92 4.45999Q43.04 4.45999 43.11 4.50999Q43.18 4.55999 43.18 4.63999Q43.18 4.71999 43.12 4.81999L40.54 8.3Q40.5 8.35999 40.54 8.43999L43.48 14.5L43.52 14.66Q43.52 14.86 43.26 14.86L39.96 14.86Q39.7 14.86 39.6 14.62L37.98 10.78Q37.96 10.74 37.91 10.73Q37.86 10.72 37.84 10.76L37.18 11.88Q37.14 11.96 37.14 12L37.14 14.56Q37.14 14.7 37.06 14.78Q36.98 14.86 36.84 14.86L33.68 14.86ZM56.2312 7.15999Q56.2312 7.29999 56.1512 7.37999Q56.0712 7.45999 55.9312 7.45999L54.2712 7.45999Q54.1712 7.45999 54.1712 7.55999L54.1712 10.7Q54.1712 11.7 54.8912 11.7L55.6312 11.7Q55.7712 11.7 55.8512 11.78Q55.9312 11.86 55.9312 12L55.9312 14.56Q55.9312 14.84 55.6312 14.88Q54.8512 14.94 54.1312 14.94Q52.3112 14.94 51.4512 14.38Q50.5912 13.82 50.5712 12.26L50.5712 7.55999Q50.5712 7.45999 50.4712 7.45999L49.3912 7.45999Q49.2512 7.45999 49.1712 7.37999Q49.0912 7.29999 49.0912 7.15999L49.0912 4.75999Q49.0912 4.61999 49.1712 4.53999Q49.2512 4.45999 49.3912 4.45999L50.4712 4.45999Q50.5712 4.45999 50.5712 4.35999L50.5712 1.95999Q50.5712 1.81999 50.6512 1.73999Q50.7312 1.65999 50.8712 1.65999L53.8712 1.65999Q54.0112 1.65999 54.0912 1.73999Q54.1712 1.81999 54.1712 1.95999L54.1712 4.35999Q54.1712 4.45999 54.2712 4.45999L55.9312 4.45999Q56.0712 4.45999 56.1512 4.53999Q56.2312 4.61999 56.2312 4.75999L56.2312 7.15999ZM62.1712 15.02Q60.2712 15.02 58.9612 14Q57.6512 12.98 57.2312 11.24Q57.0312 10.52 57.0312 9.64Q57.0312 8.66 57.2712 7.85999Q57.7512 6.19999 59.0412 5.24999Q60.3312 4.29999 62.1912 4.29999Q64.0512 4.29999 65.3212 5.24999Q66.5912 6.19999 67.0712 7.81999Q67.3112 8.66 67.3112 9.6Q67.3112 10.36 67.1512 11.12Q66.7312 12.92 65.4212 13.97Q64.1112 15.02 62.1712 15.02ZM62.1712 11.8Q62.6912 11.8 63.0112 11.45Q63.3312 11.1 63.4512 10.52Q63.5312 10.14 63.5312 9.62Q63.5312 9.16 63.4312 8.7Q63.1312 7.51999 62.1712 7.51999Q61.1712 7.51999 60.9112 8.7Q60.8112 9.04 60.8112 9.62Q60.8112 10.14 60.8912 10.52Q61.1912 11.8 62.1712 11.8ZM75.2623 3.75999Q74.4423 3.75999 73.9123 3.22999Q73.3823 2.69999 73.3823 1.87999Q73.3823 1.03999 73.9123 0.519989Q74.4423 -1.14441e-05 75.2623 -1.14441e-05Q76.0823 -1.14441e-05 76.6124 0.519989Q77.1423 1.03999 77.1423 1.87999Q77.1423 2.67999 76.6124 3.21999Q76.0823 3.75999 75.2623 3.75999ZM73.6623 14.86Q73.5223 14.86 73.4423 14.78Q73.3623 14.7 73.3623 14.56L73.3623 4.75999Q73.3623 4.61999 73.4423 4.53999Q73.5223 4.45999 73.6623 4.45999L76.8223 4.45999Q76.9623 4.45999 77.0423 4.53999Q77.1223 4.61999 77.1223 4.75999L77.1223 14.56Q77.1223 14.7 77.0423 14.78Q76.9623 14.86 76.8223 14.86L73.6623 14.86ZM84.6824 4.29999Q85.6824 4.29999 86.4823 4.73999Q87.2823 5.17999 87.7523 6.02999Q88.2224 6.87999 88.2224 8.04L88.2224 14.56Q88.2224 14.7 88.1423 14.78Q88.0623 14.86 87.9223 14.86L84.7624 14.86Q84.6223 14.86 84.5424 14.78Q84.4623 14.7 84.4623 14.56L84.4623 8.85999Q84.4623 8.25999 84.1524 7.88999Q83.8423 7.51999 83.3423 7.51999Q82.8223 7.51999 82.5124 7.88999Q82.2023 8.25999 82.2023 8.85999L82.2023 14.56Q82.2023 14.7 82.1223 14.78Q82.0424 14.86 81.9024 14.86L78.7423 14.86Q78.6023 14.86 78.5223 14.78Q78.4424 14.7 78.4424 14.56L78.4424 4.75999Q78.4424 4.61999 78.5223 4.53999Q78.6023 4.45999 78.7423 4.45999L81.9024 4.45999Q82.0424 4.45999 82.1223 4.53999Q82.2023 4.61999 82.2023 4.75999L82.2023 5.47999Q82.2023 5.55999 82.2423 5.57999Q82.2823 5.59999 82.3023 5.53999Q83.0623 4.29999 84.6824 4.29999ZM96.2824 7.15999Q96.2824 7.29999 96.2024 7.37999Q96.1224 7.45999 95.9824 7.45999L94.3223 7.45999Q94.2224 7.45999 94.2224 7.55999L94.2224 10.7Q94.2224 11.7 94.9424 11.7L95.6824 11.7Q95.8224 11.7 95.9024 11.78Q95.9824 11.86 95.9824 12L95.9824 14.56Q95.9824 14.84 95.6824 14.88Q94.9024 14.94 94.1824 14.94Q92.3624 14.94 91.5023 14.38Q90.6423 13.82 90.6224 12.26L90.6224 7.55999Q90.6224 7.45999 90.5223 7.45999L89.4424 7.45999Q89.3024 7.45999 89.2224 7.37999Q89.1423 7.29999 89.1423 7.15999L89.1423 4.75999Q89.1423 4.61999 89.2224 4.53999Q89.3024 4.45999 89.4424 4.45999L90.5223 4.45999Q90.6224 4.45999 90.6224 4.35999L90.6224 1.95999Q90.6224 1.81999 90.7023 1.73999Q90.7823 1.65999 90.9223 1.65999L93.9223 1.65999Q94.0623 1.65999 94.1423 1.73999Q94.2224 1.81999 94.2224 1.95999L94.2224 4.35999Q94.2224 4.45999 94.3223 4.45999L95.9824 4.45999Q96.1224 4.45999 96.2024 4.53999Q96.2824 4.61999 96.2824 4.75999L96.2824 7.15999ZM107.282 8.92Q107.342 9.36 107.342 9.82Q107.342 10.14 107.322 10.32Q107.322 10.6 107.022 10.6L101.022 10.6Q100.942 10.6 100.942 10.68Q100.942 10.86 101.102 11.1Q101.302 11.44 101.812 11.67Q102.322 11.9 102.962 11.9Q103.502 11.9 103.962 11.74Q104.422 11.58 104.742 11.28Q104.842 11.2 104.942 11.2Q105.082 11.2 105.162 11.32L106.682 13.26Q106.762 13.36 106.762 13.48Q106.762 13.6 106.662 13.68Q105.962 14.36 104.922 14.69Q103.882 15.02 102.682 15.02Q100.822 15.02 99.5024 14.24Q98.1824 13.46 97.5824 12.02Q97.1424 10.98 97.1424 9.78Q97.1424 8.51999 97.5024 7.54Q98.0424 6.01999 99.2824 5.15999Q100.522 4.29999 102.202 4.29999Q103.482 4.29999 104.572 4.89999Q105.662 5.49999 106.372 6.54999Q107.082 7.59999 107.282 8.92ZM102.182 7.51999Q101.362 7.51999 101.042 8.31999L100.962 8.54Q100.942 8.59999 100.982 8.63Q101.022 8.66 101.062 8.66L103.342 8.66Q103.422 8.66 103.422 8.58Q103.422 8.5 103.362 8.31999Q103.262 7.93999 102.952 7.73Q102.642 7.51999 102.182 7.51999ZM114.182 4.31999Q114.862 4.31999 115.262 4.57999Q115.442 4.67999 115.402 4.95999L114.922 8.04Q114.902 8.2 114.812 8.24Q114.722 8.27999 114.562 8.24Q114.202 8.16 113.922 8.16Q113.622 8.16 113.362 8.22Q112.842 8.31999 112.472 8.64999Q112.102 8.98 112.102 9.54L112.102 14.56Q112.102 14.7 112.022 14.78Q111.942 14.86 111.802 14.86L108.642 14.86Q108.502 14.86 108.422 14.78Q108.342 14.7 108.342 14.56L108.342 4.75999Q108.342 4.61999 108.422 4.53999Q108.502 4.45999 108.642 4.45999L111.802 4.45999Q111.942 4.45999 112.022 4.53999Q112.102 4.61999 112.102 4.75999L112.102 5.23999Q112.102 5.29999 112.142 5.31999Q112.182 5.33999 112.202 5.29999Q112.962 4.31999 114.182 4.31999ZM120.782 4.29999Q122.142 4.29999 123.282 4.75999Q124.422 5.21999 125.082 6.01999Q125.742 6.81999 125.742 7.75999L125.742 14.56Q125.742 14.7 125.662 14.78Q125.582 14.86 125.442 14.86L122.282 14.86Q122.142 14.86 122.062 14.78Q121.982 14.7 121.982 14.56L121.982 13.86Q121.982 13.78 121.952 13.77Q121.922 13.76 121.882 13.82Q121.542 14.44 120.942 14.73Q120.342 15.02 119.362 15.02Q117.722 15.02 116.782 14.27Q115.842 13.52 115.842 12.08Q115.842 10.56 116.912 9.74Q117.982 8.92 120.022 8.92L121.882 8.92Q121.982 8.92 121.982 8.81999L121.982 8.46Q121.982 8.04 121.672 7.77999Q121.362 7.51999 120.842 7.51999Q120.482 7.51999 120.202 7.64Q119.922 7.75999 119.802 7.96Q119.722 8.09999 119.652 8.14999Q119.582 8.2 119.462 8.17999L116.242 7.77999Q115.962 7.74 115.962 7.54Q116.042 6.63999 116.682 5.89999Q117.322 5.15999 118.392 4.72999Q119.462 4.29999 120.782 4.29999ZM120.522 12.42Q121.162 12.42 121.572 12.08Q121.982 11.74 121.982 11.16L121.982 10.9Q121.982 10.8 121.882 10.8L120.882 10.8Q119.622 10.8 119.622 11.62Q119.622 11.98 119.852 12.2Q120.082 12.42 120.522 12.42ZM132.042 15.02Q130.342 15.02 129.082 14.19Q127.822 13.36 127.242 11.88Q126.842 10.86 126.842 9.6Q126.842 8.35999 127.242 7.33999Q127.802 5.91999 129.082 5.10999Q130.362 4.29999 132.042 4.29999Q133.742 4.29999 135.052 5.14999Q136.362 5.99999 136.822 7.27999Q136.962 7.64 137.002 8.04L137.002 8.09999Q137.002 8.3 136.742 8.35999L133.642 8.85999L133.582 8.85999Q133.322 8.85999 133.302 8.59999L133.222 8.31999Q133.122 7.98 132.792 7.75Q132.462 7.51999 132.022 7.51999Q131.222 7.51999 130.882 8.24Q130.642 8.74 130.642 9.62Q130.642 10.44 130.862 11Q131.202 11.8 132.022 11.8Q132.902 11.8 133.222 10.88L133.242 10.8Q133.302 10.46 133.582 10.52L136.702 11.04Q136.962 11.1 136.962 11.32Q136.962 11.56 136.822 11.98Q136.302 13.44 135.012 14.23Q133.722 15.02 132.042 15.02ZM144.842 7.15999Q144.842 7.29999 144.762 7.37999Q144.682 7.45999 144.542 7.45999L142.882 7.45999Q142.782 7.45999 142.782 7.55999L142.782 10.7Q142.782 11.7 143.502 11.7L144.242 11.7Q144.382 11.7 144.462 11.78Q144.542 11.86 144.542 12L144.542 14.56Q144.542 14.84 144.242 14.88Q143.462 14.94 142.742 14.94Q140.922 14.94 140.062 14.38Q139.202 13.82 139.182 12.26L139.182 7.55999Q139.182 7.45999 139.082 7.45999L138.002 7.45999Q137.862 7.45999 137.782 7.37999Q137.702 7.29999 137.702 7.15999L137.702 4.75999Q137.702 4.61999 137.782 4.53999Q137.862 4.45999 138.002 4.45999L139.082 4.45999Q139.182 4.45999 139.182 4.35999L139.182 1.95999Q139.182 1.81999 139.262 1.73999Q139.342 1.65999 139.482 1.65999L142.482 1.65999Q142.622 1.65999 142.702 1.73999Q142.782 1.81999 142.782 1.95999L142.782 4.35999Q142.782 4.45999 142.882 4.45999L144.542 4.45999Q144.682 4.45999 144.762 4.53999Q144.842 4.61999 144.842 4.75999L144.842 7.15999Z">
            </path>
        </g>
    </svg>
    <div class="hidden" id="tips">
        <!--        mobile tip -->
        <div id="mobileTip" class="hidden">
            For the best viewing experience, open on a modern PC or laptop.
        </div>
        <!--  questTip       PC VR-->
        <div id="questTip" class="hidden">
            This demo supports modern headsets like Meta Quest 3(S) / PICO 4 Ultra or newer. For the best model resolution and overall experience, please open this page with Chrome on a PC with RTX4070 or higher in PCVR mode.
        </div>
        <!--        all tip-->
        <div id="allTip" class="hidden">
            This demo also supports viewing in a VR headset (Apple Vision Pro / Meta Quest 3(S) / PICO 4 Ultra or PCVR).
        </div>
        <div class="text-button" id="tipsConfirm">Got It</div>
    </div>
    <!-- Loading Indicator -->
    <div id="loadingWrap">
        <div id="loadingText"></div>
        <div id="loadingBar" class="pageLoading">
            <div id="loadingFill"></div>
        </div>
    </div>

    <div class="hidden" id="nextTip">
        <svg class="icon" viewBox="0 0 1024 1024" fill="#fff" xmlns="http://www.w3.org/2000/svg" ><path d="M117.248 588.8c0 8.512 6.848 15.36 15.36 15.36H576.32l-75.712 191.68a15.36 15.36 0 0 0 23.68 17.792L900.8 524.16a15.36 15.36 0 0 0 0-24.32L524.288 210.368a15.36 15.36 0 0 0-23.68 17.792l75.712 191.68H132.608a15.36 15.36 0 0 0-15.36 15.36v153.6z" fill="#fff"></path></svg>
    </div>
    
    ${t?"":`
    <div id="controlsWrap" class="faded-in">

        <!-- Timeline Panel -->
        <div id="timelineContainer" class="hidden">
            <div id="line"></div>
            <div id="handle"></div>
            <div id="time" class="hidden">0:00</div>
        </div>

        <!-- Buttons Panel -->
        <div id="buttonContainer" class="hidden">
            <button id="play" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="4 4 16 16" fill="currentColor"><path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z"/></svg>
            </button>
            <button id="pause" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20" fill="currentColor"><path d="M5 16V4h3v12H5zm7-12h3v12h-3V4z"/></svg>
            </button>
            <div id="volumeShow" class="button">
                <svg id="unMutedStatus" class="icon hidden unMutedStatus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2503" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M734.118332 271.7758l-46.483684 46.52257c43.48028 50.070372 69.959352 115.233488 69.959352 186.752358 0 78.772065-31.899524 150.056598-83.529415 201.648626l46.482661 46.483684c63.563688-63.447031 102.833063-151.207817 102.833063-248.131287C823.381331 415.397848 789.493523 333.817832 734.118332 271.7758z" p-id="2504"></path><path d="M830.049195 175.883823l-49.329499 49.290613c67.229171 74.0536 108.565625 172.011632 108.565625 279.874245 0 115.115807-46.678112 219.333404-122.096802 294.789956l49.252751 49.281403c88.1302-88.043219 142.569066-209.691813 142.569066-344.07136C959.009312 377.922329 909.834332 262.572184 830.049195 175.883823z" p-id="2505"></path><path d="M646.729006 359.243921l-44.534286 44.474934c21.877263 27.979238 35.018561 63.076594 35.018561 101.33085 0 45.508473-18.444071 86.706781-48.237631 116.519784l44.182268 44.240597c41.102117-41.179888 66.566068-97.977475 66.566068-160.761404C699.723987 449.539436 679.75826 398.707724 646.729006 359.243921z" p-id="2506"></path><path d="M224.830093 633.092939 498.018056 837.997726 498.018056 177.814802 224.830093 382.680702Z" p-id="2507"></path><path d="M87.252715 381.432269c-12.830213 0-23.202445 10.372232-23.202445 23.183002l0 0L64.05027 604.060719c0 12.81077 10.373255 23.183002 23.202445 23.183002l84.923158 0c0.001023 0 0.010233 0.001023 0.010233 0.001023l0-0.001023L172.186106 381.432269l0 0-0.005117 0L87.252715 381.432269z" p-id="2508"></path></svg>
                <svg id="mutedStatus" class="icon mutedStatus" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1522" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M518.568091 166.067246 231.87351 381.098671 231.87351 643.904169 518.568091 858.944803Z" p-id="1523"></path><path d="M654.891919 704.501292 770.425236 588.959789 885.928876 704.501292 960.552457 629.817336 845.058027 514.322905 960.59339 398.779356 885.969808 324.217173 770.438539 439.702394 654.871453 324.135308 580.308247 398.779356 695.799608 514.309602 580.205916 629.857245Z" p-id="1524"></path><path d="M87.465562 637.779681l89.140203 0L176.605765 379.750977l-89.140203 0c-13.45443 0-24.337291 10.902304-24.337291 24.337291l0 0.039909 0 209.274304 0 0.039909C63.128271 626.877377 74.010109 637.779681 87.465562 637.779681z" p-id="1525"></path></svg>
                <div id="volumeContainer" class="hidden">
                    <div id="volumeLine"></div>
                    <div id="volumeHandle"></div>
                    <div id="volume" class="hidden">0:00</div>
                </div>
            </div>
            <button id="anima" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 22 22"
                     fill="currentColor">
                    <g id="svg_6"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17957.50662,-11826.07446c25,0 50,0 75,0c0,10 0,20 0,30c-15,0 -30,0 -45,0c0,15 0,30 0,45c-10,0 -20,0 -30,0c0,-25 0,-50 0,-75z"
                              id="svg_7" stroke="null" />
                    </g>
                    <g id="svg_8"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17640.50662,-11826.07446c25,0 50,0 75,0c0,25 0,50 0,75c-10,0 -20,0 -30,0c0,-15 0,-30 0,-45c-15,0 -30,0 -45,0c0,-10 0,-20 0,-30z"
                              id="svg_9" stroke="null" />
                    </g>
                    <g id="svg_10"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17829.50662,-11771.07446c13.667,0 27.333,0 41,0c0,30.667 0,61.333 0,92c5.667,0 11.333,0 17,0c0,10 0,20 0,30c-5.667,0 -11.333,0 -17,0c0.218,13.689 -0.115,27.355 -1,41c-10.249,0.319 -20.416,-0.014 -30.5,-1c0.462,-13.251 0.628,-26.584 0.5,-40c-26.342,0.333 -52.675,0 -79,-1c23.277,-40.225 46.277,-80.559 69,-121zm9,47c-7.929,15.022 -16.263,29.855 -25,44.5c8.66,0.5 17.327,0.666 26,0.5c0.329,-15.176 -0.004,-30.176 -1,-45z"
                              opacity="0.974" id="svg_11" stroke="null" />
                    </g>
                    <g id="svg_12"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17742.50662,-11771.07446c21.669,-0.167 43.336,0 65,0.5c30.31,6.979 48.477,25.812 54.5,56.5c6.451,29.741 1.118,57.074 -16,82c-10.501,12.165 -23.668,19.665 -39.5,22.5c-20.991,0.931 -41.991,1.431 -63,1.5c-0.862,-54.328 -1.195,-108.662 -1,-163zm31,31c0.705,33.662 1.038,67.329 1,101c38.795,4.704 58.461,-12.463 59,-51.5c-1.096,-39.254 -21.096,-55.754 -60,-49.5z"
                              opacity="0.963" id="svg_13" stroke="null" />
                    </g>
                    <g id="svg_14"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17957.50662,-11629.07446c10,0 20,0 30,0c0,15 0,30 0,45c15,0 30,0 45,0c0,10 0,20 0,30c-25,0 -50,0 -75,0c0,-25 0,-50 0,-75z"
                              id="svg_15" stroke="null" />
                    </g>
                    <g id="svg_16"
                       transform="matrix(0.04913316008465144,0,0,0.04913316008465144,884.7638116738909,585.8773680675253) "
                       stroke="null">
                        <path fill="currentColor"
                              d="m-17595.50662,-11629.07446c10,0 20,0 30,0c0,25 0,50 0,75c-25,0 -50,0 -75,0c0,-10 0,-20 0,-30c15,0 30,0 45,0c0,-15 0,-30 0,-45z"
                              id="svg_17" stroke="null" />
                    </g>
                </svg>
            </button>
            <div class="spacer"></div>
            <button id="ultraMode" class="button hidden">
                <span class="font-bold">ultra</span>
            </button>
            <button id="arMode" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-181 240-296q-19-11-29.5-29T200-365v-230q0-22 10.5-40t29.5-29l200-115q19-11 40-11t40 11l200 115q19 11 29.5 29t10.5 40v230q0 22-10.5 40T720-296L520-181q-19 11-40 11t-40-11Zm0-92v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-120q0-33 23.5-56.5T160-880h120v80H160v120H80ZM280-80H160q-33 0-56.5-23.5T80-160v-120h80v120h120v80Zm400 0v-80h120v-120h80v120q0 33-23.5 56.5T800-80H680Zm120-600v-120H680v-80h120q33 0 56.5 23.5T880-800v120h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
            </button>
            <button id="vrMode" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M300-240q-66 0-113-47t-47-113v-163q0-51 32-89.5t82-47.5q57-11 113-15.5t113-4.5q57 0 113.5 4.5T706-700q50 10 82 48t32 89v163q0 66-47 113t-113 47h-40q-13 0-26-1.5t-25-6.5l-64-22q-12-5-25-5t-25 5l-64 22q-12 5-25 6.5t-26 1.5h-40Zm0-80h40q7 0 13.5-1t12.5-3q29-9 56.5-19t57.5-10q30 0 58 9.5t56 19.5q6 2 12.5 3t13.5 1h40q33 0 56.5-23.5T740-400v-163q0-22-14-38t-35-21q-52-11-104.5-14.5T480-640q-54 0-106 4t-105 14q-21 4-35 20.5T220-563v163q0 33 23.5 56.5T300-320ZM40-400v-160h60v160H40Zm820 0v-160h60v160h-60Zm-380-80Z"/></svg>
            </button>
            <button id="info" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            </button>
            <button id="settings" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z"/></svg>
            </button>
            <button id="enterFullscreen" class="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>
            </button>
            <button id="exitFullscreen" class="button hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/></svg>
            </button>
        </div>

        <div id="noRepeatWrap">
            <div id="noRepeatPanel">
                <div id="splatsListWrapper">
                    <div id="splatsList"></div>
                </div>
                <div class="btnWrapper hidden">
                    <div class="text-button hidden" id="replay">Re Play</div>
                    <div class="text-button hidden" id="goConfirm">Get Started</div>
                </div>
            </div>
            <svg id="openGuideIcon" viewBox="0 0 1740 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1638.4 0h-102.4v102.4h-102.4v102.4h-102.4v102.4h-102.4v102.4h-102.4v102.4h-102.4v102.4H921.6v102.4H819.2V614.4H716.8V512H614.4V409.6H512V307.2H409.6V204.8H307.2V102.4H204.8V0H0v204.8h102.4v102.4h102.4v102.4h102.4v102.4h102.4v102.4h102.4v102.4h102.4v102.4h102.4v102.4h102.4v102.4h102.4V921.6h102.4V819.2h102.4V716.8h102.4V614.4h102.4V512h102.4V409.6h102.4V307.2h102.4V204.8h102.4V0h-102.4z" fill="#fff"></path></svg>
            <!--        <svg id="openGuideIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512.02916267 263.17888107c-15.117744-0.19780267-30.3215456 5.34965227-41.8416 16.6397952L75.7197568 666.30117867c-22.66634133 22.2167904-22.8076288 58.08579093 0.05522987 80.46698773 22.68303893 22.24119467 59.4601312 22.2463328 82.10977494 0.04495573L512.0548512 399.80244587l0-0.06293654L866.19796907 746.724496c22.64964373 22.20137707 59.426736 22.19624 82.10977387-0.04495467 22.86285867-22.38248213 22.7215712-58.2514816 0.05523093-80.46827306l-394.4665216-386.4825024c-11.52647787-11.29656426-26.7405536-16.8440192-41.8672896-16.63979414l0 0.08990934z" fill="#fff"></path></svg>-->
        </div>
    </div>
    `}

    <!-- Settings Panel -->
    <div id="settingsPanel" class="hidden">
        <div>Camera Mode</div>
        <div id="cameraToggle" class="toggleWrap">
            <div id="cameraToggleHighlight" class="toggleHighlight"></div>
            <button id="orbit" class="left">Orbit</button>
            <button id="fly" class="right">Fly</button>
        </div>
        <div>Render Quality</div>
        <div id="qualityToggle" class="toggleWrap">
            <div id="qualityToggleHighlight" class="toggleHighlight"></div>
            <button id="low" class="left">Low</button>
            <button id="high" class="right">High</button>
        </div>
        <div>View</div>
        <div class="settingsRow">
            <button id="frame" class="button">Frame</button>
            <button id="reset" class="button">Reset</button>
        </div>
    </div>

    <!-- Info Panel -->
    <div id="infoPanel" class="hidden">
        <div id="infoPanelContent" onpointerdown="event.stopPropagation()">
            <div id="header">Controls</div>
            <div id="tabs">
                <div id="desktopTab" class="tab active">Desktop</div>
                <div id="touchTab" class="tab">Touch</div>
            </div>
            <div id="infoPanels">
                <div id="desktopInfoPanel">
                    <div class="control-spacer"></div>
                    <h1>Orbit Mode</h1>
                    <div class="control-item">
                        <span class="control-action">Orbit</span>
                        <span class="control-key">Left Mouse</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Pan</span>
                        <span class="control-key">Right Mouse</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Zoom</span>
                        <span class="control-key">Mouse Wheel</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Set Focus</span>
                        <span class="control-key">Double Click</span>
                    </div>
                    <div class="control-spacer"></div>
                    <h1>Fly Mode</h1>
                    <div class="control-item">
                        <span class="control-action">Look Around</span>
                        <span class="control-key">Left Mouse</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Fly</span>
                        <span class="control-key">W,S,A,D</span>
                    </div>
                    <div class="control-spacer"></div>
                    <div class="control-item">
                        <span class="control-action">Frame Scene</span>
                        <span class="control-key">F</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Reset Camera</span>
                        <span class="control-key">R</span>
                    </div>
                    <div class="control-spacer"></div>
                    <h1>Effects</h1>
                    <div class="control-item">
                        <span class="control-action">Slow Motion</span>
                        <span class="control-key">m</span>
                    </div>
                </div>
                <div id="touchInfoPanel" class="hidden">
                    <div class="control-spacer"></div>
                    <h1>Orbit Mode</h1>
                    <div class="control-item">
                        <span class="control-action">Orbit</span>
                        <span class="control-key">One Finger Drag</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Pan</span>
                        <span class="control-key">Two Finger Drag</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Zoom</span>
                        <span class="control-key">Pinch</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Set Focus</span>
                        <span class="control-key">Double Tap</span>
                    </div>
                    <div class="control-spacer"></div>
                    <h1>Fly Mode</h1>
                    <div class="control-item">
                        <span class="control-action">Look Around</span>
                        <span class="control-key">Touch on Right</span>
                    </div>
                    <div class="control-item">
                        <span class="control-action">Fly</span>
                        <span class="control-key">Touch on Left</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Touch Joystick -->
    <div id="joystickBase" class="hidden">
        <div id="joystick"></div>
    </div>

    <!-- Stats Panel -->
    <div id="statsPanel" class="hidden">
        <div id="statsPanelContent"></div>
    </div>

  `;const o=e||document.body;o&&o.classList.add("fdv-relative"),o.appendChild(n)}function Wi(s){const e=document.createElement("div");e.style.height="100%",e.innerHTML=`<pc-app antialias="false" depth="false" high-resolution="true" stencil="false">
    <pc-scene>
        <!-- Camera (with XR support) -->
        <pc-entity name="camera root">
            <pc-entity name="camera">
                <pc-camera near-clip="0.01" far-clip="100" horizontal-fov="true" tonemap="none"></pc-camera>
            </pc-entity>
            <!-- XR controllers will be added here -->
            <pc-scripts>
            </pc-scripts>
        </pc-entity>
        <!-- Light (for XR controllers) -->
        <pc-entity name="light" rotation="35 45 0">
            <pc-light color="white" intensity="1.5"></pc-light>
        </pc-entity>
    </pc-scene>
    </pc-app>`,(s||document.body).appendChild(e)}const Oi=`* {
    margin: 0;
    padding: 0;
}

canvas {
    touch-action: none;
}

.hidden {
    display: none !important;
}

#ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

#ui * {
    pointer-events: auto;
    user-select: none;
}

#infoPanel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

#infoPanel>#infoPanelContent {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    min-height: 280px;
    min-width: 320px;
    padding: 8px;
    border-radius: 24px;
    color: black;
    background-color: #eeed;
    display: flex;
    flex-direction: column;
}

#infoPanel>#infoPanelContent>#header {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 16px;
    color: #444;
    display: none;
}

#infoPanel>#infoPanelContent>#tabs {
    display: flex;
    gap: 16px;
    background-color: #666;
    padding: 8px;
    border-radius: 22px;
}

#infoPanel>#infoPanelContent>#tabs>.tab {
    padding: 8px;
    border-radius: 16px;
    cursor: pointer;
    flex-grow: 1;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #222;
    transition: background-color 250ms ease;
}

#infoPanel>#infoPanelContent>#tabs>.tab:hover {
    background-color: #eee;
}

#infoPanel>#infoPanelContent>#tabs>.tab.active {
    background-color: #eee;
}

#infoPanel>#infoPanelContent>#infoPanels {
    padding: 16px;
}

#infoPanel>#infoPanelContent .control-item {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    line-height: 1.5;
}

#infoPanel>#infoPanelContent>#infoPanels h1 {
    font-size: 14px;
    font-weight: bold;
    padding: 0 0 6px 0;
}

#infoPanel>#infoPanelContent .control-item>.control-action {
    text-align: left;
    color: #333;
}

#infoPanel>#infoPanelContent .control-item>.control-key {
    text-align: right;
    color: #666;
}

#infoPanel>#infoPanelContent .control-spacer {
    border-bottom: 1px dashed #666;
    margin: 10px 0;
}

/* loadingWrap */

#loadingWrap {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 380px;

    display: flex;
    flex-direction: column;

    padding: 16px;
}

#loadingWrap>#loadingText {
    font-size: 18px;
    color: white;
    text-align: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

@keyframes progress-background {
    from {
        background-position: 0 0
    }

    to {
        background-position: 24px 0
    }
}

#loadingWrap>#loadingBar {
    position: relative;
    width: 100%;
    height: 4px;
    margin-top: 8px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px #ccc solid;
}
.pageLoading {
    background: #2F2F2F;
    background: linear-gradient(135deg, #737373 0%, #737373 25%, #2F2F2F 26%, #2F2F2F 50%, #737373 51%, #737373 75%, #2F2F2F 76%, #2F2F2F 100%);
    background-position: 0 0;
    background-size: 24px 24px;
    background-repeat: repeat;
    animation: progress-background 1000ms linear infinite;
}

#loadingWrap>#loadingBar>#loadingFill {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #ccc;
    right: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
}

/* controlsWrap */

#controlsWrap {
    position: absolute;
    left: max(16px, env(safe-area-inset-left));
    right: max(16px, env(safe-area-inset-right));
    bottom: max(16px, env(safe-area-inset-bottom));

    display: flex;
    flex-direction: column;
}

#controlsWrap.faded-in {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s ease-out;
}

.faded-out {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 0.5s, opacity 0.5s ease-out;
}

#controlsWrap>#timelineContainer {
    height: 30px;
    cursor: pointer;
}

#controlsWrap>#timelineContainer>#line {
    width: 100%;
    height: 50%;
    border-bottom: 1px solid #8888;
}

#controlsWrap>#timelineContainer>#handle {
    position: absolute;
    top: 15.5px;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 50%;
    background-color: #fff8;
}

#controlsWrap>#timelineContainer>#time {
    position: absolute;
    top: 0;
    padding: 2px 4px;
    transform: translate(-50%, -100%);
    font-size: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
}

#volumeShow {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

#volumeShow>#volumeContainer {
    position: absolute;
    bottom: 70px;
    transform: translateX(50%);
    height: 300px;
    width: 30px;
    cursor: pointer;
    z-index: 2;
    touch-action: none;
}

#volumeShow>#volumeContainer::after {
    content: '';
    position: absolute;
    width: 30px;
    left: -15px;
    height: 100%;
    top: -12px;
    padding: 12px 0 12px 0;
    background: rgba(221, 221, 221, 0.87);
    z-index: -1;
    border-radius: 6px;
    backdrop-filter: blur(10px);
}

#volumeShow>#volumeContainer>#volumeLine {
    width: 50%;
    height: 100%;
    border-left: 1px solid #8888;
}

#volumeShow>#volumeContainer>#volumeHandle {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    transform: translateX(-50%);
    border: 1px solid black;
    border-radius: 50%;
    background-color: #fff8;
}

#volumeShow>#volumeContainer>#volume {
    position: absolute;
    bottom: 0;
    padding: 2px 4px;
    transform: translate(-50%, -100%);
    font-size: 12px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
}

#controlsWrap>#buttonContainer {
    display: flex;
    gap: 8px;
}

/* spacer */

.spacer {
    flex-grow: 1;
}

/* settingsPanel */

#settingsPanel {
    position: absolute;
    right: max(16px, env(safe-area-inset-right));
    bottom: calc(max(16px, env(safe-area-inset-bottom)) + 70px);
    padding: 10px;
    color: #eee;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    font-size: 14px;
}

#settingsPanel>.settingsRow {
    display: flex;
    gap: 4px;
    width: 100%;

}

#settingsPanel>.settingsRow>.button {
    padding: 10px 0px;
    flex-grow: 1;
}

/* toggleWrap */

.toggleWrap {
    position: relative;
    background-color: #dddd;
    border: 1px solid #888;
    border-radius: 8px;
    height: 40px;
    width: 120px;
}

.toggleWrap>.toggleHighlight {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #eee;
    border-radius: 8px;
    transition: left 0.1s ease-out;
}

.toggleWrap>.toggleHighlight.right {
    left: 60px;
}

.toggleWrap>button {
    position: absolute;
    width: 60px;
    height: 100%;
    border: 0;
    border-radius: 8px;

    cursor: pointer;
    font-size: 14px;
    letter-spacing: -0.25px;

    color: #222;
    background-color: transparent;

    appearance: none;
}

.toggleWrap>button:hover {
    color: black;
}

.toggleWrap>button.left {
    left: 0;
}

.toggleWrap>button.right {
    right: 0;
}

/* button */
.button {
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    color: #222;
    background-color: #dddd;
    border: 1px solid #888;
    border-radius: 6px;
    cursor: pointer;

    /* font-weight: bold; */
    font-size: 14px;
    letter-spacing: -0.25px;
}

.button:hover {
    background-color: #eee;
}

.button>svg {
    display: block;
    margin: auto;
}

#poster {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}
button {
    color: #222;
}

button:active {
    outline: none;
}

#joystickBase {
    position: absolute;
    width: 96px;
    height: 96px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    touch-action: none;

    background: radial-gradient(circle at center, #0000 50%, #000f 100%);
    background-color: #0002;
}

#joystickBase>#joystick {
    position: absolute;
    width: 48px;
    height: 48px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    touch-action: none;

    background-color: #fff8;
}

/* Stats Panel */
#statsPanel {
    position: absolute;
    top: 50px;
    right: 10px;
    bottom: auto;
    width: 280px;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: auto;
    max-height: 80vh;
    padding: 4px;
    color: white;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
}

#statsPanelContent {
    width: 100%;
    height: 100%;
}

/* PCUI 覆盖样式 */
.pcui-panel {
    background-color: transparent !important;
    border: none !important;
}

.pcui-panel-header {
    background-color: rgba(40, 40, 40, 0.6) !important;
    color: white !important;
}

.pcui-container {
    background-color: transparent !important;
}

.pcui-infobox {
    margin-bottom: 4px !important;
    background-color: rgba(40, 40, 40, 0.6) !important;
    border-radius: 2px !important;
}

.pcui-infobox-label {
    color: #cccccc !important;
    font-weight: bold !important;
    padding: 2px 4px !important;
    font-size: 12px !important;
}

.pcui-infobox-value {
    color: white !important;
    white-space: pre-line !important;
    padding: 4px !important;
    font-size: 10px !important;
    user-select: text !important;
    -webkit-user-select: text !important;
}

.pcui-button {
    margin-top: 10px !important;
    background-color: #4d4d4d !important;
    color: white !important;
    border: none !important;
}

.pcui-button:hover {
    background-color: #666666 !important;
}

#viewerInputContainer {
    width: 100%;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    display: flex;
    align-items: self-start;
    justify-content: center;
    background: linear-gradient(145deg, black, transparent);

.viewer-header {
        color: white;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 0.4px;
        margin-bottom: 12px;
    }

    .panel {
        width: 70vw;
        max-width: 550px;
        background: rgba(40, 40, 40, 0.3);
        padding: 12px;
        border-radius: 16px;
        backdrop-filter: blur(12px);
    }
    .drag-input {
        padding: 0 13px;
        height: 145px;
        background-color: rgba(40, 40, 40, 0.2509803922);
        border: 1px dashed #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 12px;
        color: white;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.4px;
        word-break: break-all;
        cursor: pointer;
    }
    .drag-input:hover {
        border-color: cyan;
        color: cyan;
    }
    .text-input {
        flex: 1;
        min-height: 32px;
        border-radius: 4px;
        border: 1px solid transparent;
        color: white;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.4px;
        height: 24px;
        background-color: #484848;
        vertical-align: top;
        transition: color 100ms, background-color 100ms, box-shadow 100ms;

        input {
            padding: 0 18px;
            height: 100%;
            width: calc(100% - 32px);
            line-height: 1;
            color: inherit;
            background: transparent;
            border: none;
            outline: none;
            box-shadow: none;
        }
    }

    .text-input-checkbox {
        width: 16px;
        height: 16px;
    }

    .text-input:hover {
        border-color: cyan;
        /*color: cyan;*/
    }
    .text-input-position {
        margin-top: 8px;

        display: flex;
        gap: 8px;
        .text-input-inline {
            flex: 1;
            min-height: 32px;
            border-radius: 4px;
            border: 1px solid transparent;
            color: white;
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.4px;
            height: 24px;
            background-color: #282828;
            vertical-align: top;
            transition: color 100ms, background-color 100ms, box-shadow 100ms;

            input {
                padding: 0 12px;
                height: 100%;
                width: calc(100% - 32px);
                line-height: 1;
                color: inherit;
                background: transparent;
                border: none;
                outline: none;
                box-shadow: none;
            }
        }
    }
    .panel-footer {
        margin-top: 12px;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
    }
}
.fdv-item-center {
      align-items: center !important;
  }
.text-input-label {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: white;
    width: 132px;
}
.error-tips {
    color: #ff0000;
    display: flex;
    align-items: center;
}

.text-button {
    user-select: none;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 8px;
    margin: 6px;
    height: 28px;
    line-height: 28px;
    max-height: 100%;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    transition: color 100ms, opacity 100ms, box-shadow 100ms;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.4px;
    min-height: 38px;
    min-width: 80px;
    background-color: white;
    color: black;
    border: none;
}
.text-button:hover {
    background-color: #282828;
    color: cyan;
    opacity: 0.8;
    box-shadow: 0 0 2px 1px cyan;
}

.text-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.text-button-disabled:hover {
    background-color: white;
    color: black;
    opacity: 0.5;
    cursor: not-allowed;
}
#tips {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    transition: all 300ms linear;
}

#tips>#tipsConfirm {
    min-height: 20px;
}

#noRepeatWrap {
    /*position: absolute;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*background: rgba(0, 0, 0, 0.3);*/
    /*backdrop-filter: blur(12px);*/
    transition: all 300ms linear;

    padding: 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    color: white;
}
#noRepeatWrap>#noRepeatPanel>.btnWrapper {
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#noRepeatWrap>#noRepeatPanel>#splatsListWrapper {
    width: calc(100vw - 32px);
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

#splatsList {
    display: flex;
    gap: 12px;
    margin: 6px auto 0;
    align-items: center;
    justify-content: center;
}

#splatsList>div {
    position: relative;
    aspect-ratio: 16 / 9;
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: rgba(40, 40, 40, 0.3);
    overflow: hidden;
    border-radius: 8px;
}
.checked {
    border: 1px solid rgba(255,255,255,1);
}
#noRepeatWrap>#noRepeatPanel>.btnWrapper>.text-button {
    min-height: 20px;
}

@keyframes shake {
    0% {
        transform: translate(-50%, -50%);
    }
    25% {
        transform: translate(-150%, -50%);
    }
    75% {
        transform: translate(50%, -50%);
    }
    100% {
        transform: translate(-50%, -50%);
    }
}
@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(2rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    animation: shake 5s linear 0s both;
    animation-iteration-count: infinite;
    animation-delay: 0s;
    pointer-events: none;
    transition: all 300ms linear;
}
#nextTip {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
#openGuideIcon {
    width: 24px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    transform: rotate(180deg);
    opacity: 0;
}
#openGuideIcon.open {
    transform: rotate(0deg);
    opacity: 1;
    padding-bottom: 6px;
}

#cancelWheel, #enterWheel  {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    opacity: 0.6;
    width: 150px;
}

#allTip, #questTip, #mobileTip {
    color: #FCFAFA;
    padding: 12px 0 12px 0;
    max-width: 70vw;
    font-size: 12px;
    text-align: center;
}
.font-bold {
    font-weight: bold;
}

* {
    user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent; /* 移除点击高亮 */
    -webkit-touch-callout: none; /* 禁用长按菜单 */
    user-select: none; /* 禁止文本选择 */
}

::selection {
    background: transparent;
}

#maxIconWrapper {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    gap: 6px;
}
.maxIcon, .miniVoiceIcon {
    width: 28px;
    height: 28px;
    padding: 6px;
    color: #fff;
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(12px);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.miniVoiceIcon {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 14px;
    height: 14px;
    padding: 3px;
}
.maxIcon>svg, .miniVoiceIcon>svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
}

/* 移动设备适配 */
@media (max-height: 768px), (max-width: 768px) {
    #statsPanel {
        width: 90%;
        left: 5%;
        right: 5%;
        max-height: 70vh;
    }
    #viewerInputContainer {
        align-items: start;
        padding: 24px 0 0;
        .panel {
            width: 100vw;
            min-height: 100%;
            max-width: 768px;
            border-radius: 0;
        }
    }
    .text-input {
        min-height: 32px;
        font-size: 14px;
    }
}

.fdv-relative {
    position: relative;
  }

canvas {
    width: 100% !important;
    height: 100% !important;
}
`,Vt=new Set,$i=(s,e="")=>{if(typeof document>"u"||e&&Vt.has(e))return;const t=document.createElement("style");t.type="text/css",e&&(t.id=e,Vt.add(e)),t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s)),document.head.appendChild(t)},Vi=async()=>{if(Vt.has("__global_styles"))return;$i(Oi,"__global_styles")};var Ne,Ge,de={isResourceTiming:!1,isElementTiming:!1,maxTime:3e4,reportOptions:{}},Ke=globalThis,Zi=Ke.console,Qe=Ke.navigator,it=Ke.performance,Zt=function(){return Qe.deviceMemory},Gt=function(){return Qe.hardwareConcurrency},Cn=function(){return it&&!!it.getEntriesByType&&!!it.now&&!!it.mark},to="4g",no=!1,oo={value:0},Xt={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},Yt={value:0},Gi={value:0},Tn={},ct={isHidden:!1,didChange:!1},Xi=function(){ct.isHidden=!1,document.hidden&&(ct.isHidden=document.hidden,ct.didChange=!0)},Kt=function(s,e){try{var t=new PerformanceObserver((function(n){e(n.getEntries())}));return t.observe({type:s,buffered:!0}),t}catch(n){Zi.warn("Perfume.js:",n)}return null},so=function(){return!!(Gt()&&Gt()<=4)||!!(Zt()&&Zt()<=4)},Yi=function(s,e){switch(s){case"slow-2g":case"2g":case"3g":return!0;default:return so()||e}},rn=function(s){return parseFloat(s.toFixed(4))},ot=function(s){return typeof s!="number"?null:rn(s/Math.pow(1024,2))},io=function(s,e,t,n,o){var i,a=function(){de.analyticsTracker&&(ct.isHidden&&!["CLS","INP"].includes(s)||de.analyticsTracker({attribution:n,metricName:s,data:e,navigatorInformation:Qe?{deviceMemory:Zt()||0,hardwareConcurrency:Gt()||0,serviceWorkerStatus:"serviceWorker"in Qe?Qe.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:so(),isLowEndExperience:Yi(to,no)}:{},rating:t,navigationType:o}))};["CLS","INP"].includes(s)?a():(i=a,"requestIdleCallback"in Ke?Ke.requestIdleCallback(i,{timeout:3e3}):i())},Ki=function(s){s.forEach((function(e){if(!(e.name!=="self"||e.startTime<oo.value)){var t=e.duration-50;t>0&&(Yt.value+=t,Gi.value+=t)}}))};(function(s){s.instant="instant",s.quick="quick",s.moderate="moderate",s.slow="slow",s.unavoidable="unavoidable"})(Ne||(Ne={}));var qe,dt,ao,Et,Jt;(Ge={})[Ne.instant]={vitalsThresholds:[100,200],maxOutlierThreshold:1e4},Ge[Ne.quick]={vitalsThresholds:[200,500],maxOutlierThreshold:1e4},Ge[Ne.moderate]={vitalsThresholds:[500,1e3],maxOutlierThreshold:1e4},Ge[Ne.slow]={vitalsThresholds:[1e3,2e3],maxOutlierThreshold:1e4},Ge[Ne.unavoidable]={vitalsThresholds:[2e3,5e3],maxOutlierThreshold:2e4};var Bt={RT:[100,200],TBT:[200,600],NTBT:[200,600]},ro=function(s,e){return Bt[s]?e<=Bt[s][0]?"good":e<=Bt[s][1]?"needsImprovement":"poor":null},pt=function(s,e,t){Object.keys(e).forEach((function(n){typeof e[n]=="number"&&(e[n]=rn(e[n]))})),io(s,e,null,{})},Re=function(s){var e=s.attribution,t=s.name,n=s.rating,o=s.value,i=s.navigationType;t==="FCP"&&(oo.value=o),["FCP","LCP"].includes(t)&&!Tn[0]&&(Tn[0]=Kt("longtask",Ki)),t==="FID"&&setTimeout((function(){ct.didChange||(Re({attribution:e,name:"TBT",rating:ro("TBT",Yt.value),value:Yt.value,navigationType:i}),pt("dataConsumption",Xt.value))}),1e4);var a=rn(o);a<=de.maxTime&&a>=0&&io(t,a,n,e,i)},Je=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},at=function(s){if(document.readyState==="loading")return"loading";var e=Je();if(e){if(s<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||s<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||s<e.domComplete)return"dom-content-loaded"}return"complete"},Ji=function(s){var e=s.nodeName;return s.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},Qt=function(s,e){var t="";try{for(;s&&s.nodeType!==9;){var n=s,o=n.id?"#"+n.id:Ji(n)+(n.classList&&n.classList.value&&n.classList.value.trim()&&n.classList.value.trim().length?"."+n.classList.value.trim().replace(/\s+/g,"."):"");if(t.length+o.length>(e||100)-1)return t||o;if(t=t?o+">"+t:o,n.id)break;s=n.parentNode}}catch{}return t},lo=-1,co=function(){return lo},He=function(s){addEventListener("pageshow",(function(e){e.persisted&&(lo=e.timeStamp,s(e))}),!0)},Ft=function(){var s=Je();return s&&s.activationStart||0},Se=function(s,e){var t=Je(),n="navigate";return co()>=0?n="back-forward-cache":t&&(document.prerendering||Ft()>0?n="prerender":document.wasDiscarded?n="restore":t.type&&(n=t.type.replace(/_/g,"-"))),{name:s,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:n}},et=function(s,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(s)){var n=new PerformanceObserver((function(o){Promise.resolve().then((function(){e(o.getEntries())}))}));return n.observe(Object.assign({type:s,buffered:!0},t||{})),n}}catch{}},ke=function(s,e,t,n){var o,i;return function(a){e.value>=0&&(a||n)&&((i=e.value-(o||0))||o===void 0)&&(o=e.value,e.delta=i,e.rating=(function(l,c){return l>c[1]?"poor":l>c[0]?"needs-improvement":"good"})(e.value,t),s(e))}},en=function(s){requestAnimationFrame((function(){return requestAnimationFrame((function(){return s()}))}))},It=function(s){var e=function(t){t.type!=="pagehide"&&document.visibilityState!=="hidden"||s(t)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},tn=function(s){var e=!1;return function(t){e||(s(t),e=!0)}},Xe=-1,Mn=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},Rt=function(s){document.visibilityState==="hidden"&&Xe>-1&&(Xe=s.type==="visibilitychange"?s.timeStamp:0,ea())},En=function(){addEventListener("visibilitychange",Rt,!0),addEventListener("prerenderingchange",Rt,!0)},ea=function(){removeEventListener("visibilitychange",Rt,!0),removeEventListener("prerenderingchange",Rt,!0)},ln=function(){return Xe<0&&(Xe=Mn(),En(),He((function(){setTimeout((function(){Xe=Mn(),En()}),0)}))),{get firstHiddenTime(){return Xe}}},ft=function(s){document.prerendering?addEventListener("prerenderingchange",(function(){return s()}),!0):s()},In=[1800,3e3],Rn=function(s,e){e=e||{},ft((function(){var t,n=ln(),o=Se("FCP"),i=et("paint",(function(a){a.forEach((function(l){l.name==="first-contentful-paint"&&(i.disconnect(),l.startTime<n.firstHiddenTime&&(o.value=Math.max(l.startTime-Ft(),0),o.entries.push(l),t(!0)))}))}));i&&(t=ke(s,o,In,e.reportAllChanges),He((function(a){o=Se("FCP"),t=ke(s,o,In,e.reportAllChanges),en((function(){o.value=performance.now()-a.timeStamp,t(!0)}))})))}))},Fn=[.1,.25],rt={passive:!0,capture:!0},ta=new Date,Dn=function(s,e){qe||(qe=e,dt=s,ao=new Date,ho(removeEventListener),uo())},uo=function(){if(dt>=0&&dt<ao-ta){var s={entryType:"first-input",name:qe.type,target:qe.target,cancelable:qe.cancelable,startTime:qe.timeStamp,processingStart:qe.timeStamp+dt};Et.forEach((function(e){e(s)})),Et=[]}},na=function(s){if(s.cancelable){var e=(s.timeStamp>1e12?new Date:performance.now())-s.timeStamp;s.type=="pointerdown"?(function(t,n){var o=function(){Dn(t,n),a()},i=function(){a()},a=function(){removeEventListener("pointerup",o,rt),removeEventListener("pointercancel",i,rt)};addEventListener("pointerup",o,rt),addEventListener("pointercancel",i,rt)})(e,s):Dn(e,s)}},ho=function(s){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return s(e,na,rt)}))},An=[100,300],oa=function(s,e){e=e||{},ft((function(){var t,n=ln(),o=Se("FID"),i=function(c){c.startTime<n.firstHiddenTime&&(o.value=c.processingStart-c.startTime,o.entries.push(c),t(!0))},a=function(c){c.forEach(i)},l=et("first-input",a);t=ke(s,o,An,e.reportAllChanges),l&&It(tn((function(){a(l.takeRecords()),l.disconnect()}))),l&&He((function(){var c;o=Se("FID"),t=ke(s,o,An,e.reportAllChanges),Et=[],dt=-1,qe=null,ho(addEventListener),c=i,Et.push(c),uo()}))}))},po=0,Ut=1/0,St=0,sa=function(s){s.forEach((function(e){e.interactionId&&(Ut=Math.min(Ut,e.interactionId),St=Math.max(St,e.interactionId),po=St?(St-Ut)/7+1:0)}))},mo=function(){return Jt?po:performance.interactionCount||0},ia=function(){"interactionCount"in performance||Jt||(Jt=et("event",sa,{type:"event",buffered:!0,durationThreshold:0}))},jn=[200,500],go=0,zn=function(){return mo()-go},Te=[],Nt={},qn=function(s){var e=Te[Te.length-1],t=Nt[s.interactionId];if(t||Te.length<10||s.duration>e.latency){if(t)t.entries.push(s),t.latency=Math.max(t.latency,s.duration);else{var n={id:s.interactionId,latency:s.duration,entries:[s]};Nt[n.id]=n,Te.push(n)}Te.sort((function(o,i){return i.latency-o.latency})),Te.splice(10).forEach((function(o){delete Nt[o.id]}))}},aa=function(s,e){(function(t,n){n=n||{},ft((function(){var o;ia();var i,a=Se("INP"),l=function(r){r.forEach((function(p){p.interactionId&&qn(p),p.entryType==="first-input"&&!Te.some((function(u){return u.entries.some((function(w){return p.duration===w.duration&&p.startTime===w.startTime}))}))&&qn(p)}));var d,m=(d=Math.min(Te.length-1,Math.floor(zn()/50)),Te[d]);m&&m.latency!==a.value&&(a.value=m.latency,a.entries=m.entries,i())},c=et("event",l,{durationThreshold:(o=n.durationThreshold)!==null&&o!==void 0?o:40});i=ke(t,a,jn,n.reportAllChanges),c&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&c.observe({type:"first-input",buffered:!0}),It((function(){l(c.takeRecords()),a.value<0&&zn()>0&&(a.value=0,a.entries=[]),i(!0)})),He((function(){Te=[],go=mo(),a=Se("INP"),i=ke(t,a,jn,n.reportAllChanges)})))}))})((function(t){(function(n){if(n.entries.length){var o=n.entries.sort((function(a,l){return l.duration-a.duration||l.processingEnd-l.processingStart-(a.processingEnd-a.processingStart)}))[0],i=n.entries.find((function(a){return a.target}));n.attribution={eventTarget:Qt(i&&i.target),eventType:o.name,eventTime:o.startTime,eventEntry:o,loadState:at(o.startTime)}}else n.attribution={}})(t),s(t)}),e)},Bn=[2500,4e3],Ht={},Un=[800,1800],ra=function s(e){document.prerendering?ft((function(){return s(e)})):document.readyState!=="complete"?addEventListener("load",(function(){return s(e)}),!0):setTimeout(e,0)},la=function(s,e){e=e||{};var t=Se("TTFB"),n=ke(s,t,Un,e.reportAllChanges);ra((function(){var o=Je();if(o){var i=o.responseStart;if(i<=0||i>performance.now())return;t.value=Math.max(i-Ft(),0),t.entries=[o],n(!0),He((function(){t=Se("TTFB",0),(n=ke(s,t,Un,e.reportAllChanges))(!0)}))}}))},ca=function(s){s.forEach((function(e){e.identifier&&Re({attribution:{identifier:e.identifier},name:"ET",rating:null,value:e.startTime})}))},da=function(s){s.forEach((function(e){if(de.isResourceTiming&&pt("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;Xt.value[e.initiatorType]+=t,Xt.value.total+=t}}))},ua=function(){(function(s,e){la((function(t){(function(n){if(n.entries.length){var o=n.entries[0],i=o.activationStart||0,a=Math.max(o.domainLookupStart-i,0),l=Math.max(o.connectStart-i,0),c=Math.max(o.requestStart-i,0);n.attribution={waitingTime:a,dnsTime:l-a,connectionTime:c-l,requestTime:n.value-c,navigationEntry:o}}else n.attribution={waitingTime:0,dnsTime:0,connectionTime:0,requestTime:0}})(t),s(t)}),e)})((function(s){s.value>0&&Re(s)}),de.reportOptions.ttfb),(function(s,e){(function(t,n){n=n||{},Rn(tn((function(){var o,i=Se("CLS",0),a=0,l=[],c=function(d){d.forEach((function(m){if(!m.hadRecentInput){var p=l[0],u=l[l.length-1];a&&m.startTime-u.startTime<1e3&&m.startTime-p.startTime<5e3?(a+=m.value,l.push(m)):(a=m.value,l=[m])}})),a>i.value&&(i.value=a,i.entries=l,o())},r=et("layout-shift",c);r&&(o=ke(t,i,Fn,n.reportAllChanges),It((function(){c(r.takeRecords()),o(!0)})),He((function(){a=0,i=Se("CLS",0),o=ke(t,i,Fn,n.reportAllChanges),en((function(){return o()}))})),setTimeout(o,0))})))})((function(t){(function(n){if(n.entries.length){var o=n.entries.reduce((function(l,c){return l&&l.value>c.value?l:c}));if(o&&o.sources&&o.sources.length){var i=(a=o.sources).find((function(l){return l.node&&l.node.nodeType===1}))||a[0];if(i)return void(n.attribution={largestShiftTarget:Qt(i.node),largestShiftTime:o.startTime,largestShiftValue:o.value,largestShiftSource:i,largestShiftEntry:o,loadState:at(o.startTime)})}}var a;n.attribution={}})(t),s(t)}),e)})((function(s){return Re(s)}),de.reportOptions.cls),(function(s,e){Rn((function(t){(function(n){if(n.entries.length){var o=Je(),i=n.entries[n.entries.length-1];if(o){var a=o.activationStart||0,l=Math.max(0,o.responseStart-a);return void(n.attribution={timeToFirstByte:l,firstByteToFCP:n.value-l,loadState:at(n.entries[0].startTime),navigationEntry:o,fcpEntry:i})}}n.attribution={timeToFirstByte:0,firstByteToFCP:n.value,loadState:at(co())}})(t),s(t)}),e)})((function(s){return Re(s)}),de.reportOptions.fcp),(function(s,e){oa((function(t){(function(n){var o=n.entries[0];n.attribution={eventTarget:Qt(o.target),eventType:o.name,eventTime:o.startTime,eventEntry:o,loadState:at(o.startTime)}})(t),s(t)}),e)})((function(s){return Re(s)}),de.reportOptions.fid),(function(s,e){(function(t,n){n=n||{},ft((function(){var o,i=ln(),a=Se("LCP"),l=function(d){var m=d[d.length-1];m&&m.startTime<i.firstHiddenTime&&(a.value=Math.max(m.startTime-Ft(),0),a.entries=[m],o())},c=et("largest-contentful-paint",l);if(c){o=ke(t,a,Bn,n.reportAllChanges);var r=tn((function(){Ht[a.id]||(l(c.takeRecords()),c.disconnect(),Ht[a.id]=!0,o(!0))}));["keydown","click"].forEach((function(d){addEventListener(d,(function(){return setTimeout(r,0)}),!0)})),It(r),He((function(d){a=Se("LCP"),o=ke(t,a,Bn,n.reportAllChanges),en((function(){a.value=performance.now()-d.timeStamp,Ht[a.id]=!0,o(!0)}))}))}}))})((function(t){(function(n){if(n.entries.length){var o=Je();if(o){var i=o.activationStart||0,a=n.entries[n.entries.length-1],l=a.url&&performance.getEntriesByType("resource").filter((function(u){return u.name===a.url}))[0],c=Math.max(0,o.responseStart-i),r=Math.max(c,l?(l.requestStart||l.startTime)-i:0),d=Math.max(r,l?l.responseEnd-i:0),m=Math.max(d,a?a.startTime-i:0),p={element:Qt(a.element),timeToFirstByte:c,resourceLoadDelay:r-c,resourceLoadTime:d-r,elementRenderDelay:m-d,navigationEntry:o,lcpEntry:a};return a.url&&(p.url=a.url),l&&(p.lcpResourceEntry=l),void(n.attribution=p)}}n.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:n.value}})(t),s(t)}),e)})((function(s){return Re(s)}),de.reportOptions.lcp),aa((function(s){return Re(s)}),de.reportOptions.inp),de.isResourceTiming&&Kt("resource",da),de.isElementTiming&&Kt("element",ca)},ha=function(s){var e="usageDetails"in s?s.usageDetails:{};pt("storageEstimate",{quota:ot(s.quota),usage:ot(s.usage),caches:ot(e.caches),indexedDB:ot(e.indexedDB),serviceWorker:ot(e.serviceWorkerRegistrations)})},Me={finalMarkToStepsMap:{},startMarkToStepsMap:{},active:{},navigationSteps:{}},pa=function(){Me.startMarkToStepsMap={},Me.finalMarkToStepsMap={},Me.active={},Me.navigationSteps={}},ma=function(s){if(s===void 0&&(s={}),de.analyticsTracker=s.analyticsTracker,de.isResourceTiming=!!s.resourceTiming,de.isElementTiming=!!s.elementTiming,de.maxTime=s.maxMeasureTime||de.maxTime,de.reportOptions=s.reportOptions||de.reportOptions,de.steps=s.steps,de.onMarkStep=s.onMarkStep,Cn()){"PerformanceObserver"in Ke&&ua(),document.hidden!==void 0&&document.addEventListener("visibilitychange",Xi);var e=(function(){if(!Cn())return{};var t=it.getEntriesByType("navigation")[0];if(!t)return{};var n=t.responseStart,o=t.responseEnd;return{fetchTime:o-t.fetchStart,workerTime:t.workerStart>0?o-t.workerStart:0,totalTime:o-t.requestStart,downloadTime:o-n,timeToFirstByte:n-t.requestStart,headerSize:t.transferSize-t.encodedBodySize||0,dnsLookupTime:t.domainLookupEnd-t.domainLookupStart,redirectTime:t.redirectEnd-t.redirectStart}})();pt("navigationTiming",e),e.redirectTime&&Re({attribution:{},name:"RT",rating:ro("RT",e.redirectTime),value:e.redirectTime}),pt("networkInformation",(function(){if("connection"in Qe){var t=Qe.connection;return typeof t!="object"?{}:(to=t.effectiveType,no=!!t.saveData,{downlink:t.downlink,effectiveType:t.effectiveType,rtt:t.rtt,saveData:!!t.saveData})}return{}})()),Qe&&Qe.storage&&typeof Qe.storage.estimate=="function"&&Qe.storage.estimate().then(ha),de.steps&&de.steps&&(pa(),Object.entries(de.steps).forEach((function(t){var n,o,i=t[0],a=t[1].marks,l=a[0],c=a[1],r=(o=Me.startMarkToStepsMap[l])!==null&&o!==void 0?o:{};if(r[i]=!0,Me.startMarkToStepsMap[l]=r,Me.finalMarkToStepsMap[c]){var d=Me.finalMarkToStepsMap[c][l]||[];d.push(i),Me.finalMarkToStepsMap[c][l]=d}else Me.finalMarkToStepsMap[c]=((n={})[l]=[i],n)})))}};const ga=()=>ma({analyticsTracker:s=>{const{attribution:e,metricName:t,data:n,navigatorInformation:o,rating:i,navigationType:a}=s;switch(t){case"navigationTiming":break;case"networkInformation":break;case"storageEstimate":console.log("storageEstimate",n);break;case"TTFB":console.log("timeToFirstByte",{duration:n});break;case"RT":console.log("redirectTime",{duration:n});break;case"FCP":console.log("firstContentfulPaint",{duration:n});break;case"FID":console.log("firstInputDelay",{duration:n});break;case"LCP":console.log("largestContentfulPaint",{duration:n});break;case"CLS":console.log("cumulativeLayoutShift",{value:n});break;case"INP":console.log("interactionToNextPaint",{value:n});break;case"TBT":console.log("totalBlockingTime",{duration:n});break;case"elPageTitle":console.log("elementTimingPageTitle",{duration:n});break;case"userJourneyStep":break;default:console.log(t,{duration:n});break}}});let Nn=0;const fa=s=>{var o,i,a,l,c,r,d;const e=typeof s.contentUrl=="string"?1:(o=s.contentUrl)==null?void 0:o.length,t={contentUrl:s.contentUrl,audioUrl:s.audioUrl,timeOption:mt({startNumber:0,spaceTime:5,number:e}),position:O(X.position),rotation:O(X.rotation),scale:O(X.scale)},n={...Ee.settings||{},animTracks:[{...((a=(i=Ee.settings)==null?void 0:i.animTracks)==null?void 0:a[0])||{},duration:s.duration||e*5||5,frameRate:((r=(c=(l=Ee.settings)==null?void 0:l.animTracks)==null?void 0:c[0])==null?void 0:r.frameRate)||60},...((d=Ee.settings)==null?void 0:d.animTracks)||[]]};return{showGuideList:!1,contentUrl:s.contentUrl,audioUrl:s.audioUrl,rawName:s.rawName,settings:Object.assign({},n,s.settings),metaInfo:Object.assign({},t,s.metaInfo)}},nn=async()=>{var e;const s=document.querySelector("pc-app");return s?(e=await(s==null?void 0:s.ready()))==null?void 0:e.app:null},va=()=>{const{initSuperStatus:s}=Pe.getSSE();if(!s)return Promise.reject("SUPER4D: should init Super4D-Viewer, please check initSuper4D function")},Hn=async s=>{if(va(),!s)return Promise.reject("SUPER4D: no render info");const e=fa(s);return await gt(e),await nn()},Wn=async s=>{const{position:e,fov:t,target:n}=s,{events:o}=Pe.getSSE(),i=o.invoke("getOrbitCameraActive",{position:e,fov:t,target:n});return i||(window.super_camera_setting=(window.super_camera_setting??[]).concat([s])),i},wa=async s=>{const e=await nn();if(e||Nn>0)return e?{app:e,renderSuper4DSplat:Hn,setCameraSetting:Wn}:null;const{root:t,noContainer:n=!1}={};return Wi(t),Hi({root:t,noContainer:n}),Nn=1,await Vi(),Bi(),ga(),Pe.updateSSE({initSuperStatus:!0}),await nn()?{app:e,renderSuper4DSplat:Hn,setCameraSetting:Wn}:null};document.addEventListener("DOMContentLoaded",async()=>{await wa(),await Ni()});
