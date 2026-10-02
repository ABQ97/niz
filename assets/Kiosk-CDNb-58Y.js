import{r as h,c as xt,V as E,_ as Qe,D as Mt,a as C,P as we,O as Ce,S as tt,Q as ot,M as pe,T as ge,R as yt,b as Tt,W as xe,d as _t,e as Pt,f as Et,C as De,g as be,h as lt,H as Le,U as Ze,i as We,A as St,j as wt,F as ct,k as Ct,l as Dt,m as jt,L as Ot,n as At,o as Rt,p as ut,q as Ut,N as Nt,s as It,E as Lt,t as Ft,u as m,B as zt,v as kt,w as Bt,x as Ht}from"./niz-DRtv_29k.js";import{u as Q,a as ue,C as Vt,E as Gt,L as Ye,b as ft}from"./Lightformer-CvaCGhIg.js";const je=new E,Ke=new E,Wt=new E,rt=new C;function Yt(r,t,s){const e=je.setFromMatrixPosition(r.matrixWorld);e.project(t);const i=s.width/2,a=s.height/2;return[e.x*i+i,-(e.y*a)+a]}function Zt(r,t){const s=je.setFromMatrixPosition(r.matrixWorld),e=Ke.setFromMatrixPosition(t.matrixWorld),i=s.sub(e),a=t.getWorldDirection(Wt);return i.angleTo(a)>Math.PI/2}function Xt(r,t,s,e){const i=je.setFromMatrixPosition(r.matrixWorld),a=i.clone();a.project(t),rt.set(a.x,a.y),s.setFromCamera(rt,t);const f=s.intersectObjects(e,!0);if(f.length){const c=f[0].distance;return i.distanceTo(s.ray.origin)<c}return!0}function Qt(r,t){if(t instanceof Ce)return t.zoom;if(t instanceof we){const s=je.setFromMatrixPosition(r.matrixWorld),e=Ke.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,a=s.distanceTo(e);return 1/(2*Math.tan(i/2)*a)}else return 1}function Kt(r,t,s){if(t instanceof we||t instanceof Ce){const e=je.setFromMatrixPosition(r.matrixWorld),i=Ke.setFromMatrixPosition(t.matrixWorld),a=e.distanceTo(i),f=(s[1]-s[0])/(t.far-t.near),c=s[1]-f*t.far;return Math.round(f*a+c)}}const Xe=r=>Math.abs(r)<1e-10?0:r;function ht(r,t,s=""){let e="matrix3d(";for(let i=0;i!==16;i++)e+=Xe(t[i]*r.elements[i])+(i!==15?",":")");return s+e}const $t=(r=>t=>ht(t,r))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),qt=(r=>(t,s)=>ht(t,r(s),"translate(-50%,-50%)"))(r=>[1/r,1/r,1/r,1,-1/r,-1/r,-1/r,-1,1/r,1/r,1/r,1,1,1,1,1]);function Jt(r){return r&&typeof r=="object"&&"current"in r}const eo=h.forwardRef(({children:r,eps:t=.001,style:s,className:e,prepend:i,center:a,fullscreen:f,portal:c,distanceFactor:n,sprite:P=!1,transform:u=!1,occlude:p,onOcclude:T,castShadow:G,receiveShadow:H,material:N,geometry:D,zIndexRange:S=[16777271,0],calculatePosition:O=Yt,as:I="div",wrapperClass:L,pointerEvents:M="auto",...v},W)=>{const{gl:A,camera:y,scene:b,size:w,raycaster:fe,events:Y,viewport:F}=Q(),[j]=h.useState(()=>document.createElement(I)),ee=h.useRef(null),U=h.useRef(null),k=h.useRef(0),K=h.useRef([0,0]),V=h.useRef(null),B=h.useRef(null),te=(c==null?void 0:c.current)||Y.connected||A.domElement.parentNode,Z=h.useRef(null),le=h.useRef(!1),he=h.useMemo(()=>p&&p!=="blending"||Array.isArray(p)&&p.length&&Jt(p[0]),[p]);h.useLayoutEffect(()=>{const z=A.domElement;p&&p==="blending"?(z.style.zIndex=`${Math.floor(S[0]/2)}`,z.style.position="absolute",z.style.pointerEvents="none"):(z.style.zIndex=null,z.style.position=null,z.style.pointerEvents=null)},[p]),h.useLayoutEffect(()=>{if(U.current){const z=ee.current=xt.createRoot(j);if(b.updateMatrixWorld(),u)j.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const _=O(U.current,y,w);j.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${_[0]}px,${_[1]}px,0);transform-origin:0 0;`}return te&&(i?te.prepend(j):te.appendChild(j)),()=>{te&&te.removeChild(j),z.unmount()}}},[te,u]),h.useLayoutEffect(()=>{L&&(j.className=L)},[L]);const ye=h.useMemo(()=>u?{position:"absolute",top:0,left:0,width:w.width,height:w.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...f&&{top:-w.height/2,left:-w.width/2,width:w.width,height:w.height},...s},[s,a,f,w,u]),Fe=h.useMemo(()=>({position:"absolute",pointerEvents:M}),[M]);h.useLayoutEffect(()=>{if(le.current=!1,u){var z;(z=ee.current)==null||z.render(h.createElement("div",{ref:V,style:ye},h.createElement("div",{ref:B,style:Fe},h.createElement("div",{ref:W,className:e,style:s,children:r}))))}else{var _;(_=ee.current)==null||_.render(h.createElement("div",{ref:W,style:ye,className:e,children:r}))}});const se=h.useRef(!0);ue(z=>{if(U.current){y.updateMatrixWorld(),U.current.updateWorldMatrix(!0,!1);const _=u?K.current:O(U.current,y,w);if(u||Math.abs(k.current-y.zoom)>t||Math.abs(K.current[0]-_[0])>t||Math.abs(K.current[1]-_[1])>t){const $=Zt(U.current,y);let X=!1;he&&(Array.isArray(p)?X=p.map(q=>q.current):p!=="blending"&&(X=[b]));const ne=se.current;if(X){const q=Xt(U.current,y,fe,X);se.current=q&&!$}else se.current=!$;ne!==se.current&&(T?T(!se.current):j.style.display=se.current?"block":"none");const de=Math.floor(S[0]/2),ze=p?he?[S[0],de]:[de-1,0]:S;if(j.style.zIndex=`${Kt(U.current,y,ze)}`,u){const[q,Te]=[w.width/2,w.height/2],me=y.projectionMatrix.elements[5]*Te,{isOrthographicCamera:Ae,top:ke,left:Re,bottom:_e,right:ce}=y,Be=$t(y.matrixWorldInverse),He=Ae?`scale(${me})translate(${Xe(-(ce+Re)/2)}px,${Xe((ke+_e)/2)}px)`:`translateZ(${me}px)`;let J=U.current.matrixWorld;P&&(J=y.matrixWorldInverse.clone().transpose().copyPosition(J).scale(U.current.scale),J.elements[3]=J.elements[7]=J.elements[11]=0,J.elements[15]=1),j.style.width=w.width+"px",j.style.height=w.height+"px",j.style.perspective=Ae?"":`${me}px`,V.current&&B.current&&(V.current.style.transform=`${He}${Be}translate(${q}px,${Te}px)`,B.current.style.transform=qt(J,1/((n||10)/400)))}else{const q=n===void 0?1:Qt(U.current,y)*n;j.style.transform=`translate3d(${_[0]}px,${_[1]}px,0) scale(${q})`}K.current=_,k.current=y.zoom}}if(!he&&Z.current&&!le.current)if(u){if(V.current){const _=V.current.children[0];if(_!=null&&_.clientWidth&&_!=null&&_.clientHeight){const{isOrthographicCamera:$}=y;if($||D)v.scale&&(Array.isArray(v.scale)?v.scale instanceof E?Z.current.scale.copy(v.scale.clone().divideScalar(1)):Z.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):Z.current.scale.setScalar(1/v.scale));else{const X=(n||10)/400,ne=_.clientWidth*X,de=_.clientHeight*X;Z.current.scale.set(ne,de,1)}le.current=!0}}}else{const _=j.children[0];if(_!=null&&_.clientWidth&&_!=null&&_.clientHeight){const $=1/F.factor,X=_.clientWidth*$,ne=_.clientHeight*$;Z.current.scale.set(X,ne,1),le.current=!0}Z.current.lookAt(z.camera.position)}});const Oe=h.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return h.createElement("group",Qe({},v,{ref:U}),p&&!he&&h.createElement("mesh",{castShadow:G,receiveShadow:H,ref:Z},D||h.createElement("planeGeometry",null),N||h.createElement("shaderMaterial",{side:Mt,vertexShader:Oe.vertexShader,fragmentShader:Oe.fragmentShader})))});var to=Object.defineProperty,oo=(r,t,s)=>t in r?to(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,ro=(r,t,s)=>(oo(r,t+"",s),s);class io{constructor(){ro(this,"_listeners")}addEventListener(t,s){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(s)===-1&&e[t].push(s)}hasEventListener(t,s){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(s)!==-1}removeEventListener(t,s){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const a=i.indexOf(s);a!==-1&&i.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const i=e.slice(0);for(let a=0,f=i.length;a<f;a++)i[a].call(this,t);t.target=null}}}var so=Object.defineProperty,no=(r,t,s)=>t in r?so(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,d=(r,t,s)=>(no(r,typeof t!="symbol"?t+"":t,s),s);const Ne=new yt,it=new Tt,ao=Math.cos(70*(Math.PI/180)),st=(r,t)=>(r%t+t)%t;let lo=class extends io{constructor(t,s){super(),d(this,"object"),d(this,"domElement"),d(this,"enabled",!0),d(this,"target",new E),d(this,"minDistance",0),d(this,"maxDistance",1/0),d(this,"minZoom",0),d(this,"maxZoom",1/0),d(this,"minPolarAngle",0),d(this,"maxPolarAngle",Math.PI),d(this,"minAzimuthAngle",-1/0),d(this,"maxAzimuthAngle",1/0),d(this,"enableDamping",!1),d(this,"dampingFactor",.05),d(this,"enableZoom",!0),d(this,"zoomSpeed",1),d(this,"enableRotate",!0),d(this,"rotateSpeed",1),d(this,"enablePan",!0),d(this,"panSpeed",1),d(this,"screenSpacePanning",!0),d(this,"keyPanSpeed",7),d(this,"zoomToCursor",!1),d(this,"autoRotate",!1),d(this,"autoRotateSpeed",2),d(this,"reverseOrbit",!1),d(this,"reverseHorizontalOrbit",!1),d(this,"reverseVerticalOrbit",!1),d(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),d(this,"mouseButtons",{LEFT:pe.ROTATE,MIDDLE:pe.DOLLY,RIGHT:pe.PAN}),d(this,"touches",{ONE:ge.ROTATE,TWO:ge.DOLLY_PAN}),d(this,"target0"),d(this,"position0"),d(this,"zoom0"),d(this,"_domElementKeyEvents",null),d(this,"getPolarAngle"),d(this,"getAzimuthalAngle"),d(this,"setPolarAngle"),d(this,"setAzimuthalAngle"),d(this,"getDistance"),d(this,"getZoomScale"),d(this,"listenToKeyEvents"),d(this,"stopListenToKeyEvents"),d(this,"saveState"),d(this,"reset"),d(this,"update"),d(this,"connect"),d(this,"dispose"),d(this,"dollyIn"),d(this,"dollyOut"),d(this,"getScale"),d(this,"setScale"),this.object=t,this.domElement=s,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=o=>{let l=st(o,2*Math.PI),g=u.phi;g<0&&(g+=2*Math.PI),l<0&&(l+=2*Math.PI);let x=Math.abs(l-g);2*Math.PI-x<x&&(l<g?l+=2*Math.PI:g+=2*Math.PI),p.phi=l-g,e.update()},this.setAzimuthalAngle=o=>{let l=st(o,2*Math.PI),g=u.theta;g<0&&(g+=2*Math.PI),l<0&&(l+=2*Math.PI);let x=Math.abs(l-g);2*Math.PI-x<x&&(l<g?l+=2*Math.PI:g+=2*Math.PI),p.theta=l-g,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=o=>{o.addEventListener("keydown",Ve),this._domElementKeyEvents=o},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",Ve),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(i),e.update(),n=c.NONE},this.update=(()=>{const o=new E,l=new E(0,1,0),g=new ot().setFromUnitVectors(t.up,l),x=g.clone().invert(),R=new E,oe=new ot,ae=2*Math.PI;return function(){const et=e.object.position;g.setFromUnitVectors(t.up,l),x.copy(g).invert(),o.copy(et).sub(e.target),o.applyQuaternion(g),u.setFromVector3(o),e.autoRotate&&n===c.NONE&&F(fe()),e.enableDamping?(u.theta+=p.theta*e.dampingFactor,u.phi+=p.phi*e.dampingFactor):(u.theta+=p.theta,u.phi+=p.phi);let re=e.minAzimuthAngle,ie=e.maxAzimuthAngle;isFinite(re)&&isFinite(ie)&&(re<-Math.PI?re+=ae:re>Math.PI&&(re-=ae),ie<-Math.PI?ie+=ae:ie>Math.PI&&(ie-=ae),re<=ie?u.theta=Math.max(re,Math.min(ie,u.theta)):u.theta=u.theta>(re+ie)/2?Math.max(re,u.theta):Math.min(ie,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(G,e.dampingFactor):e.target.add(G),e.zoomToCursor&&y||e.object.isOrthographicCamera?u.radius=Z(u.radius):u.radius=Z(u.radius*T),o.setFromSpherical(u),o.applyQuaternion(x),et.copy(e.target).add(o),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(p.theta*=1-e.dampingFactor,p.phi*=1-e.dampingFactor,G.multiplyScalar(1-e.dampingFactor)):(p.set(0,0,0),G.set(0,0,0));let Pe=!1;if(e.zoomToCursor&&y){let Ee=null;if(e.object instanceof we&&e.object.isPerspectiveCamera){const Se=o.length();Ee=Z(Se*T);const Ue=Se-Ee;e.object.position.addScaledVector(W,Ue),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Se=new E(A.x,A.y,0);Se.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/T)),e.object.updateProjectionMatrix(),Pe=!0;const Ue=new E(A.x,A.y,0);Ue.unproject(e.object),e.object.position.sub(Ue).add(Se),e.object.updateMatrixWorld(),Ee=o.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Ee!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Ee).add(e.object.position):(Ne.origin.copy(e.object.position),Ne.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Ne.direction))<ao?t.lookAt(e.target):(it.setFromNormalAndCoplanarPoint(e.object.up,e.target),Ne.intersectPlane(it,e.target))))}else e.object instanceof Ce&&e.object.isOrthographicCamera&&(Pe=T!==1,Pe&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/T)),e.object.updateProjectionMatrix()));return T=1,y=!1,Pe||R.distanceToSquared(e.object.position)>P||8*(1-oe.dot(e.object.quaternion))>P?(e.dispatchEvent(i),R.copy(e.object.position),oe.copy(e.object.quaternion),Pe=!1,!0):!1}})(),this.connect=o=>{e.domElement=o,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",qe),e.domElement.addEventListener("pointerdown",Re),e.domElement.addEventListener("pointercancel",ce),e.domElement.addEventListener("wheel",J)},this.dispose=()=>{var o,l,g,x,R,oe;e.domElement&&(e.domElement.style.touchAction="auto"),(o=e.domElement)==null||o.removeEventListener("contextmenu",qe),(l=e.domElement)==null||l.removeEventListener("pointerdown",Re),(g=e.domElement)==null||g.removeEventListener("pointercancel",ce),(x=e.domElement)==null||x.removeEventListener("wheel",J),(R=e.domElement)==null||R.ownerDocument.removeEventListener("pointermove",_e),(oe=e.domElement)==null||oe.ownerDocument.removeEventListener("pointerup",ce),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Ve)};const e=this,i={type:"change"},a={type:"start"},f={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=c.NONE;const P=1e-6,u=new tt,p=new tt;let T=1;const G=new E,H=new C,N=new C,D=new C,S=new C,O=new C,I=new C,L=new C,M=new C,v=new C,W=new E,A=new C;let y=!1;const b=[],w={};function fe(){return 2*Math.PI/60/60*e.autoRotateSpeed}function Y(){return Math.pow(.95,e.zoomSpeed)}function F(o){e.reverseOrbit||e.reverseHorizontalOrbit?p.theta+=o:p.theta-=o}function j(o){e.reverseOrbit||e.reverseVerticalOrbit?p.phi+=o:p.phi-=o}const ee=(()=>{const o=new E;return function(g,x){o.setFromMatrixColumn(x,0),o.multiplyScalar(-g),G.add(o)}})(),U=(()=>{const o=new E;return function(g,x){e.screenSpacePanning===!0?o.setFromMatrixColumn(x,1):(o.setFromMatrixColumn(x,0),o.crossVectors(e.object.up,o)),o.multiplyScalar(g),G.add(o)}})(),k=(()=>{const o=new E;return function(g,x){const R=e.domElement;if(R&&e.object instanceof we&&e.object.isPerspectiveCamera){const oe=e.object.position;o.copy(oe).sub(e.target);let ae=o.length();ae*=Math.tan(e.object.fov/2*Math.PI/180),ee(2*g*ae/R.clientHeight,e.object.matrix),U(2*x*ae/R.clientHeight,e.object.matrix)}else R&&e.object instanceof Ce&&e.object.isOrthographicCamera?(ee(g*(e.object.right-e.object.left)/e.object.zoom/R.clientWidth,e.object.matrix),U(x*(e.object.top-e.object.bottom)/e.object.zoom/R.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function K(o){e.object instanceof we&&e.object.isPerspectiveCamera||e.object instanceof Ce&&e.object.isOrthographicCamera?T=o:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function V(o){K(T/o)}function B(o){K(T*o)}function te(o){if(!e.zoomToCursor||!e.domElement)return;y=!0;const l=e.domElement.getBoundingClientRect(),g=o.clientX-l.left,x=o.clientY-l.top,R=l.width,oe=l.height;A.x=g/R*2-1,A.y=-(x/oe)*2+1,W.set(A.x,A.y,1).unproject(e.object).sub(e.object.position).normalize()}function Z(o){return Math.max(e.minDistance,Math.min(e.maxDistance,o))}function le(o){H.set(o.clientX,o.clientY)}function he(o){te(o),L.set(o.clientX,o.clientY)}function ye(o){S.set(o.clientX,o.clientY)}function Fe(o){N.set(o.clientX,o.clientY),D.subVectors(N,H).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(F(2*Math.PI*D.x/l.clientHeight),j(2*Math.PI*D.y/l.clientHeight)),H.copy(N),e.update()}function se(o){M.set(o.clientX,o.clientY),v.subVectors(M,L),v.y>0?V(Y()):v.y<0&&B(Y()),L.copy(M),e.update()}function Oe(o){O.set(o.clientX,o.clientY),I.subVectors(O,S).multiplyScalar(e.panSpeed),k(I.x,I.y),S.copy(O),e.update()}function z(o){te(o),o.deltaY<0?B(Y()):o.deltaY>0&&V(Y()),e.update()}function _(o){let l=!1;switch(o.code){case e.keys.UP:k(0,e.keyPanSpeed),l=!0;break;case e.keys.BOTTOM:k(0,-e.keyPanSpeed),l=!0;break;case e.keys.LEFT:k(e.keyPanSpeed,0),l=!0;break;case e.keys.RIGHT:k(-e.keyPanSpeed,0),l=!0;break}l&&(o.preventDefault(),e.update())}function $(){if(b.length==1)H.set(b[0].pageX,b[0].pageY);else{const o=.5*(b[0].pageX+b[1].pageX),l=.5*(b[0].pageY+b[1].pageY);H.set(o,l)}}function X(){if(b.length==1)S.set(b[0].pageX,b[0].pageY);else{const o=.5*(b[0].pageX+b[1].pageX),l=.5*(b[0].pageY+b[1].pageY);S.set(o,l)}}function ne(){const o=b[0].pageX-b[1].pageX,l=b[0].pageY-b[1].pageY,g=Math.sqrt(o*o+l*l);L.set(0,g)}function de(){e.enableZoom&&ne(),e.enablePan&&X()}function ze(){e.enableZoom&&ne(),e.enableRotate&&$()}function q(o){if(b.length==1)N.set(o.pageX,o.pageY);else{const g=Ge(o),x=.5*(o.pageX+g.x),R=.5*(o.pageY+g.y);N.set(x,R)}D.subVectors(N,H).multiplyScalar(e.rotateSpeed);const l=e.domElement;l&&(F(2*Math.PI*D.x/l.clientHeight),j(2*Math.PI*D.y/l.clientHeight)),H.copy(N)}function Te(o){if(b.length==1)O.set(o.pageX,o.pageY);else{const l=Ge(o),g=.5*(o.pageX+l.x),x=.5*(o.pageY+l.y);O.set(g,x)}I.subVectors(O,S).multiplyScalar(e.panSpeed),k(I.x,I.y),S.copy(O)}function me(o){const l=Ge(o),g=o.pageX-l.x,x=o.pageY-l.y,R=Math.sqrt(g*g+x*x);M.set(0,R),v.set(0,Math.pow(M.y/L.y,e.zoomSpeed)),V(v.y),L.copy(M)}function Ae(o){e.enableZoom&&me(o),e.enablePan&&Te(o)}function ke(o){e.enableZoom&&me(o),e.enableRotate&&q(o)}function Re(o){var l,g;e.enabled!==!1&&(b.length===0&&((l=e.domElement)==null||l.ownerDocument.addEventListener("pointermove",_e),(g=e.domElement)==null||g.ownerDocument.addEventListener("pointerup",ce)),vt(o),o.pointerType==="touch"?pt(o):Be(o))}function _e(o){e.enabled!==!1&&(o.pointerType==="touch"?gt(o):He(o))}function ce(o){var l,g,x;bt(o),b.length===0&&((l=e.domElement)==null||l.releasePointerCapture(o.pointerId),(g=e.domElement)==null||g.ownerDocument.removeEventListener("pointermove",_e),(x=e.domElement)==null||x.ownerDocument.removeEventListener("pointerup",ce)),e.dispatchEvent(f),n=c.NONE}function Be(o){let l;switch(o.button){case 0:l=e.mouseButtons.LEFT;break;case 1:l=e.mouseButtons.MIDDLE;break;case 2:l=e.mouseButtons.RIGHT;break;default:l=-1}switch(l){case pe.DOLLY:if(e.enableZoom===!1)return;he(o),n=c.DOLLY;break;case pe.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(e.enablePan===!1)return;ye(o),n=c.PAN}else{if(e.enableRotate===!1)return;le(o),n=c.ROTATE}break;case pe.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(e.enableRotate===!1)return;le(o),n=c.ROTATE}else{if(e.enablePan===!1)return;ye(o),n=c.PAN}break;default:n=c.NONE}n!==c.NONE&&e.dispatchEvent(a)}function He(o){if(e.enabled!==!1)switch(n){case c.ROTATE:if(e.enableRotate===!1)return;Fe(o);break;case c.DOLLY:if(e.enableZoom===!1)return;se(o);break;case c.PAN:if(e.enablePan===!1)return;Oe(o);break}}function J(o){e.enabled===!1||e.enableZoom===!1||n!==c.NONE&&n!==c.ROTATE||(o.preventDefault(),e.dispatchEvent(a),z(o),e.dispatchEvent(f))}function Ve(o){e.enabled===!1||e.enablePan===!1||_(o)}function pt(o){switch(Je(o),b.length){case 1:switch(e.touches.ONE){case ge.ROTATE:if(e.enableRotate===!1)return;$(),n=c.TOUCH_ROTATE;break;case ge.PAN:if(e.enablePan===!1)return;X(),n=c.TOUCH_PAN;break;default:n=c.NONE}break;case 2:switch(e.touches.TWO){case ge.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;de(),n=c.TOUCH_DOLLY_PAN;break;case ge.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ze(),n=c.TOUCH_DOLLY_ROTATE;break;default:n=c.NONE}break;default:n=c.NONE}n!==c.NONE&&e.dispatchEvent(a)}function gt(o){switch(Je(o),n){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;q(o),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;Te(o),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ae(o),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ke(o),e.update();break;default:n=c.NONE}}function qe(o){e.enabled!==!1&&o.preventDefault()}function vt(o){b.push(o)}function bt(o){delete w[o.pointerId];for(let l=0;l<b.length;l++)if(b[l].pointerId==o.pointerId){b.splice(l,1);return}}function Je(o){let l=w[o.pointerId];l===void 0&&(l=new C,w[o.pointerId]=l),l.set(o.pageX,o.pageY)}function Ge(o){const l=o.pointerId===b[0].pointerId?b[1]:b[0];return w[l.pointerId]}this.dollyIn=(o=Y())=>{B(o),e.update()},this.dollyOut=(o=Y())=>{V(o),e.update()},this.getScale=()=>T,this.setScale=o=>{K(o),e.update()},this.getZoomScale=()=>Y(),s!==void 0&&this.connect(s),this.update()}};const co={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},uo={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},fo=h.forwardRef(({makeDefault:r,camera:t,regress:s,domElement:e,enableDamping:i=!0,keyEvents:a=!1,onChange:f,onStart:c,onEnd:n,...P},u)=>{const p=Q(v=>v.invalidate),T=Q(v=>v.camera),G=Q(v=>v.gl),H=Q(v=>v.events),N=Q(v=>v.setEvents),D=Q(v=>v.set),S=Q(v=>v.get),O=Q(v=>v.performance),I=t||T,L=e||H.connected||G.domElement,M=h.useMemo(()=>new lo(I),[I]);return ue(()=>{M.enabled&&M.update()},-1),h.useEffect(()=>(a&&M.connect(a===!0?L:a),M.connect(L),()=>void M.dispose()),[a,L,s,M,p]),h.useEffect(()=>{const v=y=>{p(),s&&O.regress(),f&&f(y)},W=y=>{c&&c(y)},A=y=>{n&&n(y)};return M.addEventListener("change",v),M.addEventListener("start",W),M.addEventListener("end",A),()=>{M.removeEventListener("start",W),M.removeEventListener("end",A),M.removeEventListener("change",v)}},[f,c,n,M,p,N]),h.useEffect(()=>{if(r){const v=S().controls;return D({controls:M}),()=>D({controls:v})}},[r,M]),h.createElement("primitive",Qe({ref:u,object:M,enableDamping:i},P))}),ho=h.forwardRef(({scale:r=10,frames:t=1/0,opacity:s=1,width:e=1,height:i=1,blur:a=1,near:f=0,far:c=10,resolution:n=512,smooth:P=!0,color:u="#000000",depthWrite:p=!1,renderOrder:T,...G},H)=>{const N=h.useRef(null),D=Q(F=>F.scene),S=Q(F=>F.gl),O=h.useRef(null);e=e*(Array.isArray(r)?r[0]:r||1),i=i*(Array.isArray(r)?r[1]:r||1);const[I,L,M,v,W,A,y]=h.useMemo(()=>{const F=new xe(n,n),j=new xe(n,n);j.texture.generateMipmaps=F.texture.generateMipmaps=!1;const ee=new _t(e,i).rotateX(Math.PI/2),U=new Pt(ee),k=new Et;k.depthTest=k.depthWrite=!1,k.onBeforeCompile=B=>{B.uniforms={...B.uniforms,ucolor:{value:new De(u)}},B.fragmentShader=B.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),B.fragmentShader=B.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const K=new be(co),V=new be(uo);return V.depthTest=K.depthTest=!1,[F,ee,k,U,K,V,j]},[n,e,i,r,u]),b=F=>{v.visible=!0,v.material=W,W.uniforms.tDiffuse.value=I.texture,W.uniforms.h.value=F*1/256,S.setRenderTarget(y),S.render(v,O.current),v.material=A,A.uniforms.tDiffuse.value=y.texture,A.uniforms.v.value=F*1/256,S.setRenderTarget(I),S.render(v,O.current),v.visible=!1};let w=0,fe,Y;return ue(()=>{O.current&&(t===1/0||w<t)&&(w++,fe=D.background,Y=D.overrideMaterial,N.current.visible=!1,D.background=null,D.overrideMaterial=M,S.setRenderTarget(I),S.render(D,O.current),b(a),P&&b(a*.4),S.setRenderTarget(null),N.current.visible=!0,D.overrideMaterial=Y,D.background=fe)}),h.useImperativeHandle(H,()=>N.current,[]),h.createElement("group",Qe({"rotation-x":Math.PI/2},G,{ref:N}),h.createElement("mesh",{renderOrder:T,geometry:L,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},h.createElement("meshBasicMaterial",{transparent:!0,map:I.texture,opacity:s,depthWrite:p})),h.createElement("orthographicCamera",{ref:O,args:[-e/2,e/2,i/2,-i/2,f,c]}))}),mo={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Me extends lt{constructor(t,s=1,e,i){super(),this.strength=s,this.radius=e,this.threshold=i,this.resolution=t!==void 0?new C(t.x,t.y):new C(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new xe(a,f,{type:Le}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const p=new xe(a,f,{type:Le});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const T=new xe(a,f,{type:Le});T.texture.name="UnrealBloomPass.v"+u,T.texture.generateMipmaps=!1,this.renderTargetsVertical.push(T),a=Math.round(a/2),f=Math.round(f/2)}const c=mo;this.highPassUniforms=Ze.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const n=[6,10,14,18,22];a=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(n[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new C(1/a,1/f),a=Math.round(a/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const P=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=P,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ze.clone(We.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,premultipliedAlpha:!0,blending:St,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new wt,this._fsQuad=new ct(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,s){let e=Math.round(t/2),i=Math.round(s/2);this.renderTargetBright.setSize(e,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(e,i),this.renderTargetsVertical[a].setSize(e,i),this.separableBlurMaterials[a].uniforms.invSize.value=new C(1/e,1/i),e=Math.round(e/2),i=Math.round(i/2)}render(t,s,e,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=e.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=e.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let c=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[n].uniforms.direction.value=Me.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=Me.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),c=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const s=[],e=t/3;for(let i=0;i<t;i++)s.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new C(.5,.5)},direction:{value:new C(.5,.5)},gaussianCoefficients:{value:s}},vertexShader:`

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
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Me.BlurDirectionX=new C(1,0);Me.BlurDirectionY=new C(0,1);const Ie={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class po extends lt{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ze.clone(Ie.uniforms),this.material=new Ct({name:Ie.name,uniforms:this.uniforms,vertexShader:Ie.vertexShader,fragmentShader:Ie.fragmentShader}),this._fsQuad=new ct(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,s,e){this.uniforms.tDiffuse.value=e.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Dt.getTransfer(this._outputColorSpace)===jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ot?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===At?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ut?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ut?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nt?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===It&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function go({strength:r=.9,threshold:t=.62,msaa:s=!1}={}){const{gl:e,scene:i,camera:a,size:f}=Q(),c=h.useMemo(()=>{const n=e.getPixelRatio(),P=s?new xe(f.width*n,f.height*n,{type:Le,samples:4}):void 0,u=new Lt(e,P);return u.addPass(new Ft(i,a)),u.addPass(new Me(new C(f.width,f.height),r,.55,t)),u.addPass(new po),u},[e,i,a]);return h.useEffect(()=>c.setSize(f.width,f.height),[c,f]),ue(()=>c.render(),1),null}const dt=Ht("/ncd/models/kiosk.glb"),vo="#0f7a73";function bo(r,t,s){const e=document.createElement("canvas");e.width=r,e.height=t,s(e.getContext("2d"));const i=new kt(e);return i.colorSpace=Bt,i.anisotropy=8,i}function nt(r,t,s=800){const i=Math.round(200*t);return bo(i,200,a=>{a.fillStyle="#ffffff",a.fillRect(0,0,i,200),a.fillStyle=vo,a.textBaseline="middle";let f=120;for(a.font=`${s} ${f}px Inter, Arial, sans-serif`;a.measureText(r).width>i*.9&&f>20;)f-=4,a.font=`${s} ${f}px Inter, Arial, sans-serif`;a.fillText(r,i*.05,200*.54)})}const $e=h.createContext({current:0}),mt=h.createContext(null);function xo({offset:r,children:t}){const s=h.useContext($e),e=h.useRef(null);return ue(()=>{var a;const i=s.current;(a=e.current)==null||a.position.set(r[0]*i,r[1]*i,r[2]*i)}),m.jsx("group",{ref:e,children:t})}function ve({group:r,at:t,children:s}){const e=h.useContext($e),i=h.useContext(mt),[a,f]=h.useState(!1),c=h.useRef(!1);return ue(()=>{const n=e.current>.75;n!==c.current&&(c.current=n,f(n))}),!a||i!==r?null:m.jsx(eo,{center:!0,position:t,style:{pointerEvents:"none"},zIndexRange:[20,0],children:m.jsx("div",{className:"whitespace-nowrap rounded-full border border-emerald-300/60 bg-[#04131f]/85 px-4 py-1.5 text-[17px] font-semibold text-emerald-50 shadow-[0_0_28px_rgba(16,185,129,.5)]",style:{animation:"ncd-in 500ms ease both","--dir":0},children:s})})}const at=[{key:"roof",test:/^(roof|ceiling_light)/,offset:[0,1.5,0]},{key:"header",test:/^(header_band|logo_|sign_blank)/,offset:[0,1,.6]},{key:"front",test:/^(front_frame|glass_door|sliding_track)/,offset:[0,0,1.5]},{key:"back",test:/^(back_wall|back_baseboard|wall_screen|poster)/,offset:[0,0,-1.5]},{key:"left",test:/^(left_wall|left_)/,offset:[-1.5,0,0]},{key:"right",test:/^(right_wall|right_|side_)/,offset:[1.5,0,0]},{key:"analyzer",test:/^(floor_scale|scale_|body_analyzer|analyzer_)/,offset:[-.2,.3,1.2]},{key:"stadiometer",test:/^(stadiometer|height_tick)/,offset:[-.7,.55,-.45]},{key:"desk",test:/^desk/,offset:[.6,0,-.45]},{key:"pc",test:/^(monitor|keyboard|mouse)/,offset:[.95,.35,-.15]},{key:"bp",test:/^bp_/,offset:[.95,.8,.3]},{key:"chair",test:/^chair/,offset:[.35,0,.9]},{key:"plant",test:/^plant/,offset:[.6,0,1]},{key:"base",test:/.*/,offset:[0,0,0]}];function Mo(r){const t=r.name;t==="front_frame"?r.scale.x*=1.004:t==="header_band"?(r.scale.x*=1.006,r.scale.y*=.99,r.position.z+=.004):/^(logo_|sign_blank)/.test(t)?r.position.z+=.008:/^(right_bottom_teal_stripe|side_)/.test(t)?r.position.x+=.006:t==="left_bottom_teal_stripe"?r.position.x-=.006:t==="left_interior_baseboard"?r.position.x+=.004:t==="right_interior_baseboard"?r.position.x-=.004:t==="back_baseboard"?r.position.z+=.004:t==="glass_door_stile_0.849"?r.position.x-=.008:t==="glass_door_top_rail"?r.position.y-=.006:t==="glass_door_bottom_rail"&&(r.position.y+=.006)}const yo=["Измерения","Рекомендации","Направление"];function To(){const{scene:r}=ft(dt),{groups:t,overlays:s}=h.useMemo(()=>{const e=r.clone(!0),i=new Map,a=new Map;[...e.children].forEach(n=>{n.traverse(u=>{const p=u;if(!p.isMesh)return;p.castShadow=!0,p.receiveShadow=!0;const T=p.material;/glass/i.test(T.name)&&(T.transparent=!0,T.opacity=Math.min(T.opacity,.3),T.depthWrite=!1)}),Mo(n),n.updateMatrixWorld(!0),a.set(n.name,new zt().setFromObject(n));const P=at.find(u=>u.test.test(n.name));i.set(P.key,[...i.get(P.key)??[],n])});const f=[],c=a.get("sign_blank");if(c){const n=c.getSize(new E),P=c.getCenter(new E);f.push({group:"header",pos:[P.x,P.y,c.max.z+.01],rotY:0,w:n.x*.96,h:n.y*.82,tex:nt("ПУНКТ ЗДОРОВЬЯ",n.x*.96/(n.y*.82))})}return[0,1,2].forEach(n=>{const P=a.get(`side_badge_${n}_blank_label`);if(!P)return;const u=P.getSize(new E),p=P.getCenter(new E);f.push({group:"right",pos:[P.max.x+.008,p.y,p.z],rotY:Math.PI/2,w:u.z*.96,h:u.y*.8,tex:nt(yo[n],u.z*.96/(u.y*.8),700)})}),{groups:at.map(n=>({...n,nodes:i.get(n.key)??[]})),overlays:f}},[r]);return h.useEffect(()=>()=>s.forEach(e=>e.tex.dispose()),[s]),m.jsx("group",{children:t.map(e=>m.jsxs(xo,{offset:e.offset,children:[e.nodes.map(i=>m.jsx("primitive",{object:i},i.uuid)),s.filter(i=>i.group===e.key).map((i,a)=>m.jsxs("mesh",{position:i.pos,rotation:[0,i.rotY,0],children:[m.jsx("planeGeometry",{args:[i.w,i.h]}),m.jsx("meshStandardMaterial",{map:i.tex,roughness:.6})]},a)),e.key==="stadiometer"&&m.jsxs(m.Fragment,{children:[m.jsxs("mesh",{position:[-.76,1.3,-.08],rotation:[0,Math.PI/2,0],children:[m.jsx("torusGeometry",{args:[.09,.012,10,36]}),m.jsx("meshStandardMaterial",{color:"#f59e0b",roughness:.5})]}),m.jsx(ve,{group:"measure",at:[-.76,2.15,-.13],children:"Рост"}),m.jsx(ve,{group:"measure",at:[-.76,1.5,-.08],children:"Талия"})]}),e.key==="analyzer"&&m.jsx(ve,{group:"measure",at:[-.56,1.74,.24],children:"Масса тела · ИМТ"}),e.key==="bp"&&m.jsxs(m.Fragment,{children:[m.jsxs("mesh",{position:[.72,.8,-.42],children:[m.jsx("boxGeometry",{args:[.06,.04,.08]}),m.jsx("meshStandardMaterial",{color:"#38bdf8",roughness:.3})]}),m.jsx(ve,{group:"measure",at:[.56,1.1,-.57],children:"Давление · пульс"}),m.jsx(ve,{group:"measure",at:[.78,.98,-.3],children:"Кислород в крови"})]}),e.key==="back"&&m.jsx(ve,{group:"route",at:[.36,2.12,-.89],children:"Рекомендации · маршрут"})]},e.key))})}ft.preload(dt);function _o({explode:r,spin:t}){const s=h.useRef(0),e=h.useRef(null);return ue((i,a)=>{s.current+=(r-s.current)*Math.min(1,a*2.2);const f=e.current;if(f)if(t)f.rotation.y+=a*.16;else{const c=Math.PI*2,n=.35+Math.round((f.rotation.y-.35)/c)*c;f.rotation.y+=(n-f.rotation.y)*Math.min(1,a*2)}}),m.jsx($e.Provider,{value:s,children:m.jsx("group",{ref:e,rotation:[0,.35,0],children:m.jsx("group",{position:[0,.18,0],children:m.jsx(h.Suspense,{fallback:null,children:m.jsx(To,{})})})})})}function Co({explode:r,labels:t=null,spin:s=!0,bg:e="#041018",ground:i="#062029",fog:a=!0,exposure:f=1,light:c=1,bloom:n=!0}){return m.jsxs(Vt,{shadows:!0,dpr:[1,1.25],resize:{offsetSize:!0},camera:{fov:30,position:[6.2,4.2,7.6],near:.1,far:100},gl:{antialias:!0,toneMapping:ut,logarithmicDepthBuffer:!0},onCreated:({gl:P})=>void(P.toneMappingExposure=f),children:[m.jsx("color",{attach:"background",args:[e]}),a&&m.jsx("fog",{attach:"fog",args:[e,12,22]}),m.jsx("hemisphereLight",{args:["#dff7ff","#0b1f2a",.7*c]}),m.jsx("directionalLight",{position:[4,8,5],intensity:1.6*c,castShadow:!0,"shadow-mapSize":[1024,1024],"shadow-bias":-4e-4}),m.jsx("directionalLight",{position:[-5,3,-4],intensity:.7*c,color:"#7dd3fc"}),m.jsxs(Gt,{resolution:256,children:[m.jsx(Ye,{form:"rect",intensity:1.1*c,position:[0,6,2],scale:[8,3,1]}),m.jsx(Ye,{form:"rect",intensity:1.2*c,color:"#a7f3d0",position:[-5,2,3],scale:[2,5,1]}),m.jsx(Ye,{form:"rect",intensity:1.2*c,color:"#bae6fd",position:[5,2,-2],scale:[2,5,1]})]}),m.jsx(mt.Provider,{value:t,children:m.jsxs("group",{position:[0,-1.35,0],children:[m.jsx(_o,{explode:r,spin:s}),m.jsx(ho,{position:[0,.001,0],opacity:.6,scale:12,blur:2.6,far:4}),m.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.002,0],children:[m.jsx("circleGeometry",{args:[5,96]}),m.jsx("meshStandardMaterial",{color:i,roughness:.9})]}),m.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,0,0],children:[m.jsx("ringGeometry",{args:[3.2,3.24,128]}),m.jsx("meshBasicMaterial",{color:new De("#34d399").multiplyScalar(1.2),transparent:!0,opacity:.5,toneMapped:!1})]})]})}),m.jsx(fo,{enablePan:!1,enableZoom:!1,minPolarAngle:.6,maxPolarAngle:1.45,target:[0,.2,0]}),n&&m.jsx(go,{msaa:!0,strength:.45,threshold:.92})]})}export{Co as default};
