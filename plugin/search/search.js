!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealSearch=t()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=function(e){try{return!!e()}catch(e){return!0}},n=!t((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),r=function(e){return e&&e.Math==Math&&e},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")(),i=t,c=/#|\.prototype\./,a=function(e,t){var n=l[u(e)];return n==s||n!=f&&("function"==typeof t?i(t):!!t)},u=a.normalize=function(e){return String(e).replace(c,".").toLowerCase()},l=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P",p=a,d=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=d,h=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},y=d,v=h,b=function(e){if(!y(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e},x=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return v(n),b(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),m=d,S=x,w={},O=d,E=o.document,j=O(E)&&O(E.createElement),R=function(e){return j?E.createElement(e):{}},T=R,I=!n&&!t((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),A=d,P=function(e,t){if(!A(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!A(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!A(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!A(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},C=n,_=I,k=h,N=P,$=Object.defineProperty;w.f=C?$:function(e,t,n){if(k(e),t=N(t,!0),k(n),_)try{return $(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},L=w,F=M,D=n?function(e,t,n){return L.f(e,t,F(1,n))}:function(e,t,n){return e[t]=n,e},z={},U=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},W=U,K=function(e){return Object(W(e))},B=K,V={}.hasOwnProperty,Y=Object.hasOwn||function(e,t){return V.call(B(e),t)},q={}.toString,G=function(e){return q.call(e).slice(8,-1)},H=G,X="".split,J=t((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==H(e)?X.call(e,""):Object(e)}:Object,Q=U,Z=function(e){return J(Q(e))},ee=Math.ceil,te=Math.floor,ne=function(e){return isNaN(e=+e)?0:(e>0?te:ee)(e)},re=ne,oe=Math.min,ie=function(e){return e>0?oe(re(e),9007199254740991):0},ce=ne,ae=Math.max,ue=Math.min,le=Z,fe=ie,se=function(e,t){var n=ce(e);return n<0?ae(n+t,0):ue(n,t)},pe=function(e){return function(t,n,r){var o,i=le(t),c=fe(i.length),a=se(r,c);if(e&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},ge={},he=Y,ye=Z,ve=de.indexOf,be=ge,xe=function(e,t){var n,r=ye(e),o=0,i=[];for(n in r)!he(be,n)&&he(r,n)&&i.push(n);for(;t.length>o;)he(r,n=t[o++])&&(~ve(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Se=xe,we=me.concat("length","prototype");z.f=Object.getOwnPropertyNames||function(e){return Se(e,we)};var Oe={exports:{}},Ee=o,je=D,Re=function(e,t){try{je(Ee,e,t)}catch(n){Ee[e]=t}return t},Te=Re,Ie="__core-js_shared__",Ae=o[Ie]||Te(Ie,{}),Pe=Ae;(Oe.exports=function(e,t){return Pe[e]||(Pe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Ce,_e,ke=0,Ne=Math.random(),$e=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++ke+Ne).toString(36)},Me=o,Le=o,Fe=function(e){return"function"==typeof e?e:void 0},De=function(e,t){return arguments.length<2?Fe(Me[e])||Fe(Le[e]):Me[e]&&Me[e][t]||Le[e]&&Le[e][t]},ze=De("navigator","userAgent")||"",Ue=o.process,We=Ue&&Ue.versions,Ke=We&&We.v8;Ke?_e=(Ce=Ke.split("."))[0]<4?1:Ce[0]+Ce[1]:ze&&(!(Ce=ze.match(/Edge\/(\d+)/))||Ce[1]>=74)&&(Ce=ze.match(/Chrome\/(\d+)/))&&(_e=Ce[1]);var Be=_e&&+_e,Ve=t,Ye=!!Object.getOwnPropertySymbols&&!Ve((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Be&&Be<41})),qe=Ye&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ge=o,He=Oe.exports,Xe=Y,Je=$e,Qe=Ye,Ze=qe,et=He("wks"),tt=Ge.Symbol,nt=Ze?tt:tt&&tt.withoutSetter||Je,rt=function(e){return Xe(et,e)&&(Qe||"string"==typeof et[e])||(Qe&&Xe(tt,e)?et[e]=tt[e]:et[e]=nt("Symbol."+e)),et[e]},ot=d,it=G,ct=rt("match"),at=h,ut=function(){var e=at(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},lt={},ft=t,st=function(e,t){return RegExp(e,t)};lt.UNSUPPORTED_Y=ft((function(){var e=st("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),lt.BROKEN_CARET=ft((function(){var e=st("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var pt={exports:{}},dt=Ae,gt=Function.toString;"function"!=typeof dt.inspectSource&&(dt.inspectSource=function(e){return gt.call(e)});var ht,yt,vt,bt=dt.inspectSource,xt=bt,mt=o.WeakMap,St="function"==typeof mt&&/native code/.test(xt(mt)),wt=Oe.exports,Ot=$e,Et=wt("keys"),jt=function(e){return Et[e]||(Et[e]=Ot(e))},Rt=St,Tt=d,It=D,At=Y,Pt=Ae,Ct=jt,_t=ge,kt="Object already initialized",Nt=o.WeakMap;if(Rt||Pt.state){var $t=Pt.state||(Pt.state=new Nt),Mt=$t.get,Lt=$t.has,Ft=$t.set;ht=function(e,t){if(Lt.call($t,e))throw new TypeError(kt);return t.facade=e,Ft.call($t,e,t),t},yt=function(e){return Mt.call($t,e)||{}},vt=function(e){return Lt.call($t,e)}}else{var Dt=Ct("state");_t[Dt]=!0,ht=function(e,t){if(At(e,Dt))throw new TypeError(kt);return t.facade=e,It(e,Dt,t),t},yt=function(e){return At(e,Dt)?e[Dt]:{}},vt=function(e){return At(e,Dt)}}var zt={set:ht,get:yt,has:vt,enforce:function(e){return vt(e)?yt(e):ht(e,{})},getterFor:function(e){return function(t){var n;if(!Tt(t)||(n=yt(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Ut=o,Wt=D,Kt=Y,Bt=Re,Vt=bt,Yt=zt.get,qt=zt.enforce,Gt=String(String).split("String");(pt.exports=function(e,t,n,r){var o,i=!!r&&!!r.unsafe,c=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||Kt(n,"name")||Wt(n,"name",t),(o=qt(n)).source||(o.source=Gt.join("string"==typeof t?t:""))),e!==Ut?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=n:Wt(e,t,n)):c?e[t]=n:Bt(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&Yt(this).source||Vt(this)}));var Ht=De,Xt=w,Jt=n,Qt=rt("species"),Zt=t((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),en=t((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),tn=n,nn=o,rn=p,on=function(e,t,n){var r,o;return S&&"function"==typeof(r=t.constructor)&&r!==n&&m(o=r.prototype)&&o!==n.prototype&&S(e,o),e},cn=D,an=w.f,un=z.f,ln=function(e){var t;return ot(e)&&(void 0!==(t=e[ct])?!!t:"RegExp"==it(e))},fn=ut,sn=lt,pn=pt.exports,dn=t,gn=Y,hn=zt.enforce,yn=function(e){var t=Ht(e),n=Xt.f;Jt&&t&&!t[Qt]&&n(t,Qt,{configurable:!0,get:function(){return this}})},vn=Zt,bn=en,xn=rt("match"),mn=nn.RegExp,Sn=mn.prototype,wn=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,On=/a/g,En=/a/g,jn=new mn(On)!==On,Rn=sn.UNSUPPORTED_Y,Tn=tn&&(!jn||Rn||vn||bn||dn((function(){return En[xn]=!1,mn(On)!=On||mn(En)==En||"/a/i"!=mn(On,"i")})));if(rn("RegExp",Tn)){for(var In=function(e,t){var n,r,o,i,c,a,u=this instanceof In,l=ln(e),f=void 0===t,s=[],p=e;if(!u&&l&&f&&e.constructor===In)return e;if((l||e instanceof In)&&(e=e.source,f&&(t="flags"in p?p.flags:fn.call(p))),e=void 0===e?"":String(e),t=void 0===t?"":String(t),p=e,vn&&"dotAll"in On&&(r=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),n=t,Rn&&"sticky"in On&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),bn&&(e=(i=function(e){for(var t,n=e.length,r=0,o="",i=[],c={},a=!1,u=!1,l=0,f="";r<=n;r++){if("\\"===(t=e.charAt(r)))t+=e.charAt(++r);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:wn.test(e.slice(r+1))&&(r+=2,u=!0),o+=t,l++;continue;case">"===t&&u:if(""===f||gn(c,f))throw new SyntaxError("Invalid capture group name");c[f]=!0,i.push([f,l]),u=!1,f="";continue}u?f+=t:o+=t}return[o,i]}(e))[0],s=i[1]),c=on(mn(e,t),u?this:Sn,In),(r||o||s.length)&&(a=hn(c),r&&(a.dotAll=!0,a.raw=In(function(e){for(var t,n=e.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(t=e.charAt(r))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+e.charAt(++r);return o}(e),n)),o&&(a.sticky=!0),s.length&&(a.groups=s)),e!==p)try{cn(c,"source",""===p?"(?:)":p)}catch(e){}return c},An=function(e){e in In||an(In,e,{configurable:!0,get:function(){return mn[e]},set:function(t){mn[e]=t}})},Pn=un(mn),Cn=0;Pn.length>Cn;)An(Pn[Cn++]);Sn.constructor=In,In.prototype=Sn,pn(nn,"RegExp",In)}yn("RegExp");var _n={},kn={},Nn={}.propertyIsEnumerable,$n=Object.getOwnPropertyDescriptor,Mn=$n&&!Nn.call({1:2},1);kn.f=Mn?function(e){var t=$n(this,e);return!!t&&t.enumerable}:Nn;var Ln=n,Fn=kn,Dn=M,zn=Z,Un=P,Wn=Y,Kn=I,Bn=Object.getOwnPropertyDescriptor;_n.f=Ln?Bn:function(e,t){if(e=zn(e),t=Un(t,!0),Kn)try{return Bn(e,t)}catch(e){}if(Wn(e,t))return Dn(!Fn.f.call(e,t),e[t])};var Vn={};Vn.f=Object.getOwnPropertySymbols;var Yn,qn=z,Gn=Vn,Hn=h,Xn=De("Reflect","ownKeys")||function(e){var t=qn.f(Hn(e)),n=Gn.f;return n?t.concat(n(e)):t},Jn=Y,Qn=Xn,Zn=_n,er=w,tr=o,nr=_n.f,rr=D,or=pt.exports,ir=Re,cr=function(e,t){for(var n=Qn(t),r=er.f,o=Zn.f,i=0;i<n.length;i++){var c=n[i];Jn(e,c)||r(e,c,o(t,c))}},ar=p,ur=xe,lr=me,fr=Object.keys||function(e){return ur(e,lr)},sr=w,pr=h,dr=fr,gr=n?Object.defineProperties:function(e,t){pr(e);for(var n,r=dr(t),o=r.length,i=0;o>i;)sr.f(e,n=r[i++],t[n]);return e},hr=De("document","documentElement"),yr=h,vr=gr,br=me,xr=ge,mr=hr,Sr=R,wr=jt("IE_PROTO"),Or=function(){},Er=function(e){return"<script>"+e+"</"+"script>"},jr=function(){try{Yn=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;jr=Yn?function(e){e.write(Er("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Yn):((t=Sr("iframe")).style.display="none",mr.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Er("document.F=Object")),e.close(),e.F);for(var n=br.length;n--;)delete jr.prototype[br[n]];return jr()};xr[wr]=!0;var Rr=Object.create||function(e,t){var n;return null!==e?(Or.prototype=yr(e),n=new Or,Or.prototype=null,n[wr]=e):n=jr(),void 0===t?n:vr(n,t)},Tr=ut,Ir=lt,Ar=Oe.exports,Pr=Rr,Cr=zt.get,_r=Zt,kr=en,Nr=RegExp.prototype.exec,$r=Ar("native-string-replace",String.prototype.replace),Mr=Nr,Lr=function(){var e=/a/,t=/b*/g;return Nr.call(e,"a"),Nr.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),Fr=Ir.UNSUPPORTED_Y||Ir.BROKEN_CARET,Dr=void 0!==/()??/.exec("")[1];(Lr||Dr||Fr||_r||kr)&&(Mr=function(e){var t,n,r,o,i,c,a,u=this,l=Cr(u),f=l.raw;if(f)return f.lastIndex=u.lastIndex,t=Mr.call(f,e),u.lastIndex=f.lastIndex,t;var s=l.groups,p=Fr&&u.sticky,d=Tr.call(u),g=u.source,h=0,y=e;if(p&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),y=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(g="(?: "+g+")",y=" "+y,h++),n=new RegExp("^(?:"+g+")",d)),Dr&&(n=new RegExp("^"+g+"$(?!\\s)",d)),Lr&&(r=u.lastIndex),o=Nr.call(p?n:u,y),p?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:Lr&&o&&(u.lastIndex=u.global?o.index+o[0].length:r),Dr&&o&&o.length>1&&$r.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&s)for(o.groups=c=Pr(null),i=0;i<s.length;i++)c[(a=s[i])[0]]=o[a[1]];return o});var zr=Mr;(function(e,t){var n,r,o,i,c,a=e.target,u=e.global,l=e.stat;if(n=u?tr:l?tr[a]||ir(a,{}):(tr[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=nr(n,r))&&c.value:n[r],!ar(u?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;cr(i,o)}(e.sham||o&&o.sham)&&rr(i,"sham",!0),or(n,r,i,e)}})({target:"RegExp",proto:!0,forced:/./.exec!==zr},{exec:zr});var Ur=pt.exports,Wr=h,Kr=t,Br=ut,Vr="toString",Yr=RegExp.prototype,qr=Yr.toString,Gr=Kr((function(){return"/a/b"!=qr.call({source:"a",flags:"b"})})),Hr=qr.name!=Vr;(Gr||Hr)&&Ur(RegExp.prototype,Vr,(function(){var e=Wr(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in Yr)?Br.call(e):n)}),{unsafe:!0});var Xr=pt.exports,Jr=zr,Qr=t,Zr=rt,eo=D,to=Zr("species"),no=RegExp.prototype,ro=ne,oo=U,io=function(e){return function(t,n){var r,o,i=String(oo(t)),c=ro(n),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},co={codeAt:io(!1),charAt:io(!0)}.charAt,ao=K,uo=Math.floor,lo="".replace,fo=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,so=/\$([$&'`]|\d{1,2})/g,po=G,go=zr,ho=function(e,t,n,r){var o=Zr(e),i=!Qr((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),c=i&&!Qr((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[to]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!i||!c||n){var a=/./[o],u=t(o,""[e],(function(e,t,n,r,o){var c=t.exec;return c===Jr||c===no.exec?i&&!o?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));Xr(String.prototype,e,u[0]),Xr(no,o,u[1])}r&&eo(no[o],"sham",!0)},yo=t,vo=h,bo=ie,xo=ne,mo=U,So=function(e,t,n){return t+(n?co(e,t).length:1)},wo=function(e,t,n,r,o,i){var c=n+e.length,a=r.length,u=so;return void 0!==o&&(o=ao(o),u=fo),lo.call(i,u,(function(i,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":l=o[u.slice(1,-1)];break;default:var f=+u;if(0===f)return i;if(f>a){var s=uo(f/10);return 0===s?i:s<=a?void 0===r[s-1]?u.charAt(1):r[s-1]+u.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},Oo=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==po(e))throw TypeError("RegExp#exec called on incompatible receiver");return go.call(e,t)},Eo=rt("replace"),jo=Math.max,Ro=Math.min,To="$0"==="a".replace(/./,"$0"),Io=!!/./[Eo]&&""===/./[Eo]("a","$0");ho("replace",(function(e,t,n){var r=Io?"$":"$0";return[function(e,n){var r=mo(this),o=null==e?void 0:e[Eo];return void 0!==o?o.call(e,r,n):t.call(String(r),e,n)},function(e,o){if("string"==typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var i=n(t,this,e,o);if(i.done)return i.value}var c=vo(this),a=String(e),u="function"==typeof o;u||(o=String(o));var l=c.global;if(l){var f=c.unicode;c.lastIndex=0}for(var s=[];;){var p=Oo(c,a);if(null===p)break;if(s.push(p),!l)break;""===String(p[0])&&(c.lastIndex=So(a,bo(c.lastIndex),f))}for(var d,g="",h=0,y=0;y<s.length;y++){p=s[y];for(var v=String(p[0]),b=jo(Ro(xo(p.index),a.length),0),x=[],m=1;m<p.length;m++)x.push(void 0===(d=p[m])?d:String(d));var S=p.groups;if(u){var w=[v].concat(x,b,a);void 0!==S&&w.push(S);var O=String(o.apply(void 0,w))}else O=wo(v,a,b,x,S,o);b>=h&&(g+=a.slice(h,b)+O,h=b+v.length)}return g+a.slice(h)}]}),!!yo((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!To||Io);var Ao={};Ao[rt("toStringTag")]="z";var Po="[object z]"===String(Ao),Co=Po,_o=G,ko=rt("toStringTag"),No="Arguments"==_o(function(){return arguments}()),$o=Co?_o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),ko))?n:No?_o(t):"Object"==(r=_o(t))&&"function"==typeof t.callee?"Arguments":r},Mo=Po?{}.toString:function(){return"[object "+$o(this)+"]"},Lo=Po,Fo=pt.exports,Do=Mo;Lo||Fo(Object.prototype,"toString",Do,{unsafe:!0})
/*!
	 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
	 * by navigatating to that slide and highlighting it.
	 *
	 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
	 */;return function(){var e,t,n,r,o,i,c;function a(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",(function(t){switch(t.keyCode){case 13:t.preventDefault(),function(){if(i){var t=n.value;""===t?(c&&c.remove(),r=null):(c=new f("slidecontent"),r=c.apply(t),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(e.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}}),!1),l()}function u(){t||a(),t.style.display="inline",n.focus(),n.select()}function l(){t||a(),t.style.display="none",c&&c.remove()}function f(t,n){var r=document.getElementById(t)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),c=["#ff6","#a0ffff","#9f9","#f99","#f6f"],a=[],u=0,l="",f=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+e+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&l&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var r,s;if(3==t.nodeType)if((r=t.nodeValue)&&(s=l.exec(r))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=e.getIndices(p),g=f.length,h=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(h=!0);h||f.push(d),a[s[0].toLowerCase()]||(a[s[0].toLowerCase()]=c[u++%c.length]);var y=document.createElement(o);y.appendChild(document.createTextNode(s[0])),y.style.backgroundColor=a[s[0].toLowerCase()],y.style.fontStyle="inherit",y.style.color="#000";var v=t.splitText(s.index);v.nodeValue=v.nodeValue.substring(s[0].length),t.parentNode.insertBefore(y,v)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(r),f}}return{id:"search",init:function(n){(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||a(),"inline"!==t.style.display?u():l())}),!1)},open:u}}}));
