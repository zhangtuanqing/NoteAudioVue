var Pc = {};
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ae(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const le = Pc.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ln = Pc.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, hi = () => !1, It = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Es = (e) => e.startsWith("onUpdate:"), ie = Object.assign, fo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ku = Object.prototype.hasOwnProperty, se = (e, t) => ku.call(e, t), U = Array.isArray, En = (e) => ti(e) === "[object Map]", xn = (e) => ti(e) === "[object Set]", Nl = (e) => ti(e) === "[object Date]", Ru = (e) => ti(e) === "[object RegExp]", z = (e) => typeof e == "function", Q = (e) => typeof e == "string", ht = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", Bs = (e) => (oe(e) || z(e)) && z(e.then) && z(e.catch), Mc = Object.prototype.toString, ti = (e) => Mc.call(e), uo = (e) => ti(e).slice(8, -1), $c = (e) => ti(e) === "[object Object]", po = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yt = /* @__PURE__ */ Ae(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lc = /* @__PURE__ */ Ae(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Hs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Pu = /-(\w)/g, Ee = Hs((e) => e.replace(Pu, (t, n) => n ? n.toUpperCase() : "")), Mu = /\B([A-Z])/g, $e = Hs(
  (e) => e.replace(Mu, "-$1").toLowerCase()
), Ot = Hs((e) => e.charAt(0).toUpperCase() + e.slice(1)), yt = Hs((e) => e ? `on${Ot(e)}` : ""), mt = (e, t) => !Object.is(e, t), Jt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ys = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Ci = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _s = (e) => {
  const t = Q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bl;
const ho = () => bl || (bl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Nt = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "HOISTED",
  [-2]: "BAIL"
}, $u = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Lu = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error", Fu = /* @__PURE__ */ Ae(Lu), vl = 2;
function Bu(e, t = 0, n = e.length) {
  let i = e.split(/(\r?\n)/);
  const s = i.filter((l, c) => c % 2 === 1);
  i = i.filter((l, c) => c % 2 === 0);
  let r = 0;
  const o = [];
  for (let l = 0; l < i.length; l++)
    if (r += i[l].length + (s[l] && s[l].length || 0), r >= t) {
      for (let c = l - vl; c <= l + vl || n > r; c++) {
        if (c < 0 || c >= i.length)
          continue;
        const a = c + 1;
        o.push(
          `${a}${" ".repeat(Math.max(3 - String(a).length, 0))}|  ${i[c]}`
        );
        const u = i[c].length, f = s[c] && s[c].length || 0;
        if (c === l) {
          const p = t - (r - (u + f)), E = Math.max(
            1,
            n > r ? u - p : n - t
          );
          o.push("   |  " + " ".repeat(p) + "^".repeat(E));
        } else if (c > l) {
          if (n > r) {
            const p = Math.max(Math.min(n - r, u), 1);
            o.push("   |  " + "^".repeat(p));
          }
          r += u + f;
        }
      }
      break;
    }
  return o.join(`
`);
}
function An(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Q(i) ? Fc(i) : An(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Q(e) || oe(e))
    return e;
}
const Hu = /;(?![^(]*\))/g, Uu = /:([^]+)/, ju = /\/\*[^]*?\*\//g;
function Fc(e) {
  const t = {};
  return e.replace(ju, "").split(Hu).forEach((n) => {
    if (n) {
      const i = n.split(Uu);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ku(e) {
  let t = "";
  if (!e || Q(e))
    return t;
  for (const n in e) {
    const i = e[n], s = n.startsWith("--") ? n : $e(n);
    (Q(i) || typeof i == "number") && (t += `${s}:${i};`);
  }
  return t;
}
function ni(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const i = ni(e[n]);
      i && (t += i + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Wu(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !Q(t) && (e.class = ni(t)), n && (e.style = An(n)), e;
}
const qu = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ju = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Gu = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", zu = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Bc = /* @__PURE__ */ Ae(qu), Hc = /* @__PURE__ */ Ae(Ju), Uc = /* @__PURE__ */ Ae(Gu), Yu = /* @__PURE__ */ Ae(zu), jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xu = /* @__PURE__ */ Ae(jc), Ol = /* @__PURE__ */ Ae(
  jc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function mo(e) {
  return !!e || e === "";
}
const Qu = /* @__PURE__ */ Ae(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), Zu = /* @__PURE__ */ Ae(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function ed(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
function td(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = sn(e[i], t[i]);
  return n;
}
function sn(e, t) {
  if (e === t)
    return !0;
  let n = Nl(e), i = Nl(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = ht(e), i = ht(t), n || i)
    return e === t;
  if (n = U(e), i = U(t), n || i)
    return n && i ? td(e, t) : !1;
  if (n = oe(e), i = oe(t), n || i) {
    if (!n || !i)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !sn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Us(e, t) {
  return e.findIndex((n) => sn(n, t));
}
const nd = (e) => Q(e) ? e : e == null ? "" : U(e) || oe(e) && (e.toString === Mc || !z(e.toString)) ? JSON.stringify(e, Kc, 2) : String(e), Kc = (e, t) => t && t.__v_isRef ? Kc(e, t.value) : En(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, s], r) => (n[hr(i, r) + " =>"] = s, n),
    {}
  )
} : xn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => hr(n))
} : ht(t) ? hr(t) : oe(t) && !U(t) && !$c(t) ? String(t) : t, hr = (e, t = "") => {
  var n;
  return ht(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
var Ne = {};
function Kn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ye;
class go {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ye, !t && Ye && (this.index = (Ye.scopes || (Ye.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = n;
      }
    } else
      Ne.NODE_ENV !== "production" && Kn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ye = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ye = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function id(e) {
  return new go(e);
}
function Wc(e, t = Ye) {
  t && t.active && t.effects.push(e);
}
function qc() {
  return Ye;
}
function sd(e) {
  Ye ? Ye.cleanups.push(e) : Ne.NODE_ENV !== "production" && Kn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let yn;
class Wn {
  constructor(t, n, i, s) {
    this.fn = t, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Wc(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ln();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (rd(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), cn();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Xt, n = yn;
    try {
      return Xt = !0, yn = this, this._runnings++, Sl(this), this.fn();
    } finally {
      Cl(this), this._runnings--, yn = n, Xt = t;
    }
  }
  stop() {
    var t;
    this.active && (Sl(this), Cl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function rd(e) {
  return e.value;
}
function Sl(e) {
  e._trackId++, e._depsLength = 0;
}
function Cl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Jc(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Jc(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
function od(e, t) {
  e.effect instanceof Wn && (e = e.effect.fn);
  const n = new Wn(e, pe, () => {
    n.dirty && n.run();
  });
  t && (ie(n, t), t.scope && Wc(n, t.scope)), (!t || !t.lazy) && n.run();
  const i = n.run.bind(n);
  return i.effect = n, i;
}
function ld(e) {
  e.effect.stop();
}
let Xt = !0, Dr = 0;
const Gc = [];
function ln() {
  Gc.push(Xt), Xt = !1;
}
function cn() {
  const e = Gc.pop();
  Xt = e === void 0 ? !0 : e;
}
function Eo() {
  Dr++;
}
function yo() {
  for (Dr--; !Dr && Vr.length; )
    Vr.shift()();
}
function zc(e, t, n) {
  var i;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Jc(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, Ne.NODE_ENV !== "production" && ((i = e.onTrack) == null || i.call(e, ie({ effect: e }, n)));
  }
}
const Vr = [];
function Yc(e, t, n) {
  var i;
  Eo();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (Ne.NODE_ENV !== "production" && ((i = s.onTrigger) == null || i.call(s, ie({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Vr.push(s.scheduler)));
  }
  yo();
}
const Xc = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ns = /* @__PURE__ */ new WeakMap(), _n = Symbol(Ne.NODE_ENV !== "production" ? "iterate" : ""), xr = Symbol(Ne.NODE_ENV !== "production" ? "Map key iterate" : "");
function Pe(e, t, n) {
  if (Xt && yn) {
    let i = Ns.get(e);
    i || Ns.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = Xc(() => i.delete(n))), zc(
      yn,
      s,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function bt(e, t, n, i, s, r) {
  const o = Ns.get(e);
  if (!o)
    return;
  let l = [];
  if (t === "clear")
    l = [...o.values()];
  else if (n === "length" && U(e)) {
    const c = Number(i);
    o.forEach((a, u) => {
      (u === "length" || !ht(u) && u >= c) && l.push(a);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), t) {
      case "add":
        U(e) ? po(n) && l.push(o.get("length")) : (l.push(o.get(_n)), En(e) && l.push(o.get(xr)));
        break;
      case "delete":
        U(e) || (l.push(o.get(_n)), En(e) && l.push(o.get(xr)));
        break;
      case "set":
        En(e) && l.push(o.get(_n));
        break;
    }
  Eo();
  for (const c of l)
    c && Yc(
      c,
      4,
      Ne.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: i,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  yo();
}
function cd(e, t) {
  var n;
  return (n = Ns.get(e)) == null ? void 0 : n.get(t);
}
const ad = /* @__PURE__ */ Ae("__proto__,__v_isRef,__isVue"), Qc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ht)
), Tl = /* @__PURE__ */ fd();
function fd() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const i = Z(this);
      for (let r = 0, o = this.length; r < o; r++)
        Pe(i, "get", r + "");
      const s = i[t](...n);
      return s === -1 || s === !1 ? i[t](...n.map(Z)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ln(), Eo();
      const i = Z(this)[t].apply(this, n);
      return yo(), cn(), i;
    };
  }), e;
}
function ud(e) {
  const t = Z(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class Zc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? oa : ra : r ? sa : ia).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = U(t);
    if (!s) {
      if (o && se(Tl, n))
        return Reflect.get(Tl, n, i);
      if (n === "hasOwnProperty")
        return ud;
    }
    const l = Reflect.get(t, n, i);
    return (ht(n) ? Qc.has(n) : ad(n)) || (s || Pe(t, "get", n), r) ? l : Oe(l) ? o && po(n) ? l : l.value : oe(l) ? s ? No(l) : Ws(l) : l;
  }
}
class ea extends Zc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._shallow) {
      const c = kt(r);
      if (!Zt(i) && !kt(i) && (r = Z(r), i = Z(i)), !U(t) && Oe(r) && !Oe(i))
        return c ? !1 : (r.value = i, !0);
    }
    const o = U(t) && po(n) ? Number(n) < t.length : se(t, n), l = Reflect.set(t, n, i, s);
    return t === Z(s) && (o ? mt(i, r) && bt(t, "set", n, i, r) : bt(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = se(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && i && bt(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!ht(n) || !Qc.has(n)) && Pe(t, "has", n), i;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      U(t) ? "length" : _n
    ), Reflect.ownKeys(t);
  }
}
class ta extends Zc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ne.NODE_ENV !== "production" && Kn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ne.NODE_ENV !== "production" && Kn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const dd = /* @__PURE__ */ new ea(), pd = /* @__PURE__ */ new ta(), hd = /* @__PURE__ */ new ea(
  !0
), md = /* @__PURE__ */ new ta(!0), _o = (e) => e, js = (e) => Reflect.getPrototypeOf(e);
function Qi(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = Z(e), r = Z(t);
  n || (mt(t, r) && Pe(s, "get", t), Pe(s, "get", r));
  const { has: o } = js(s), l = i ? _o : n ? vo : wi;
  if (o.call(s, t))
    return l(e.get(t));
  if (o.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Zi(e, t = !1) {
  const n = this.__v_raw, i = Z(n), s = Z(e);
  return t || (mt(e, s) && Pe(i, "has", e), Pe(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function es(e, t = !1) {
  return e = e.__v_raw, !t && Pe(Z(e), "iterate", _n), Reflect.get(e, "size", e);
}
function wl(e) {
  e = Z(e);
  const t = Z(this);
  return js(t).has.call(t, e) || (t.add(e), bt(t, "add", e, e)), this;
}
function Dl(e, t) {
  t = Z(t);
  const n = Z(this), { has: i, get: s } = js(n);
  let r = i.call(n, e);
  r ? Ne.NODE_ENV !== "production" && na(n, i, e) : (e = Z(e), r = i.call(n, e));
  const o = s.call(n, e);
  return n.set(e, t), r ? mt(t, o) && bt(n, "set", e, t, o) : bt(n, "add", e, t), this;
}
function Vl(e) {
  const t = Z(this), { has: n, get: i } = js(t);
  let s = n.call(t, e);
  s ? Ne.NODE_ENV !== "production" && na(t, n, e) : (e = Z(e), s = n.call(t, e));
  const r = i ? i.call(t, e) : void 0, o = t.delete(e);
  return s && bt(t, "delete", e, void 0, r), o;
}
function xl() {
  const e = Z(this), t = e.size !== 0, n = Ne.NODE_ENV !== "production" ? En(e) ? new Map(e) : new Set(e) : void 0, i = e.clear();
  return t && bt(e, "clear", void 0, void 0, n), i;
}
function ts(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, l = Z(o), c = t ? _o : e ? vo : wi;
    return !e && Pe(l, "iterate", _n), o.forEach((a, u) => i.call(s, c(a), c(u), r));
  };
}
function ns(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = Z(s), o = En(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = s[e](...i), u = n ? _o : t ? vo : wi;
    return !t && Pe(
      r,
      "iterate",
      c ? xr : _n
    ), {
      // iterator protocol
      next() {
        const { value: f, done: p } = a.next();
        return p ? { value: f, done: p } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Lt(e) {
  return function(...t) {
    if (Ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Ot(e)} operation ${n}failed: target is readonly.`,
        Z(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gd() {
  const e = {
    get(r) {
      return Qi(this, r);
    },
    get size() {
      return es(this);
    },
    has: Zi,
    add: wl,
    set: Dl,
    delete: Vl,
    clear: xl,
    forEach: ts(!1, !1)
  }, t = {
    get(r) {
      return Qi(this, r, !1, !0);
    },
    get size() {
      return es(this);
    },
    has: Zi,
    add: wl,
    set: Dl,
    delete: Vl,
    clear: xl,
    forEach: ts(!1, !0)
  }, n = {
    get(r) {
      return Qi(this, r, !0);
    },
    get size() {
      return es(this, !0);
    },
    has(r) {
      return Zi.call(this, r, !0);
    },
    add: Lt("add"),
    set: Lt("set"),
    delete: Lt("delete"),
    clear: Lt("clear"),
    forEach: ts(!0, !1)
  }, i = {
    get(r) {
      return Qi(this, r, !0, !0);
    },
    get size() {
      return es(this, !0);
    },
    has(r) {
      return Zi.call(this, r, !0);
    },
    add: Lt("add"),
    set: Lt("set"),
    delete: Lt("delete"),
    clear: Lt("clear"),
    forEach: ts(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = ns(
      r,
      !1,
      !1
    ), n[r] = ns(
      r,
      !0,
      !1
    ), t[r] = ns(
      r,
      !1,
      !0
    ), i[r] = ns(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  Ed,
  yd,
  _d,
  Nd
] = /* @__PURE__ */ gd();
function Ks(e, t) {
  const n = t ? e ? Nd : _d : e ? yd : Ed;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    se(n, s) && s in i ? n : i,
    s,
    r
  );
}
const bd = {
  get: /* @__PURE__ */ Ks(!1, !1)
}, vd = {
  get: /* @__PURE__ */ Ks(!1, !0)
}, Od = {
  get: /* @__PURE__ */ Ks(!0, !1)
}, Sd = {
  get: /* @__PURE__ */ Ks(!0, !0)
};
function na(e, t, n) {
  const i = Z(n);
  if (i !== n && t.call(e, i)) {
    const s = uo(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ia = /* @__PURE__ */ new WeakMap(), sa = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), oa = /* @__PURE__ */ new WeakMap();
function Cd(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Td(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cd(uo(e));
}
function Ws(e) {
  return kt(e) ? e : qs(
    e,
    !1,
    dd,
    bd,
    ia
  );
}
function la(e) {
  return qs(
    e,
    !1,
    hd,
    vd,
    sa
  );
}
function No(e) {
  return qs(
    e,
    !0,
    pd,
    Od,
    ra
  );
}
function pn(e) {
  return qs(
    e,
    !0,
    md,
    Sd,
    oa
  );
}
function qs(e, t, n, i, s) {
  if (!oe(e))
    return Ne.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = Td(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, l), l;
}
function Qt(e) {
  return kt(e) ? Qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function kt(e) {
  return !!(e && e.__v_isReadonly);
}
function Zt(e) {
  return !!(e && e.__v_isShallow);
}
function Ti(e) {
  return Qt(e) || kt(e);
}
function Z(e) {
  const t = e && e.__v_raw;
  return t ? Z(t) : e;
}
function bo(e) {
  return Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const wi = (e) => oe(e) ? Ws(e) : e, vo = (e) => oe(e) ? No(e) : e, wd = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class ca {
  constructor(t, n, i, s) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Wn(
      () => t(this._value),
      () => Fn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = i;
  }
  get value() {
    const t = Z(this);
    return (!t._cacheable || t.effect.dirty) && mt(t._value, t._value = t.effect.run()) && Fn(t, 4), Oo(t), t.effect._dirtyLevel >= 2 && (Ne.NODE_ENV !== "production" && Kn(wd), Fn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Dd(e, t, n = !1) {
  let i, s;
  const r = z(e);
  r ? (i = e, s = Ne.NODE_ENV !== "production" ? () => {
    Kn("Write operation failed: computed value is readonly");
  } : pe) : (i = e.get, s = e.set);
  const o = new ca(i, s, r || !s, n);
  return Ne.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
}
function Oo(e) {
  var t;
  Xt && yn && (e = Z(e), zc(
    yn,
    (t = e.dep) != null ? t : e.dep = Xc(
      () => e.dep = void 0,
      e instanceof ca ? e : void 0
    ),
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Fn(e, t = 4, n) {
  e = Z(e);
  const i = e.dep;
  i && Yc(
    i,
    t,
    Ne.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function Oe(e) {
  return !!(e && e.__v_isRef === !0);
}
function je(e) {
  return aa(e, !1);
}
function Vd(e) {
  return aa(e, !0);
}
function aa(e, t) {
  return Oe(e) ? e : new xd(e, t);
}
class xd {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Z(t), this._value = n ? t : wi(t);
  }
  get value() {
    return Oo(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Zt(t) || kt(t);
    t = n ? t : Z(t), mt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : wi(t), Fn(this, 4, t));
  }
}
function Ad(e) {
  Fn(e, 4, Ne.NODE_ENV !== "production" ? e.value : void 0);
}
function So(e) {
  return Oe(e) ? e.value : e;
}
function Id(e) {
  return z(e) ? e() : So(e);
}
const kd = {
  get: (e, t, n) => So(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Oe(s) && !Oe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Co(e) {
  return Qt(e) ? e : new Proxy(e, kd);
}
class Rd {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: i } = t(
      () => Oo(this),
      () => Fn(this)
    );
    this._get = n, this._set = i;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function fa(e) {
  return new Rd(e);
}
function Pd(e) {
  Ne.NODE_ENV !== "production" && !Ti(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const t = U(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ua(e, n);
  return t;
}
class Md {
  constructor(t, n, i) {
    this._object = t, this._key = n, this._defaultValue = i, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return cd(Z(this._object), this._key);
  }
}
class $d {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ld(e, t, n) {
  return Oe(e) ? e : z(e) ? new $d(e) : oe(e) && arguments.length > 1 ? ua(e, t, n) : je(e);
}
function ua(e, t, n) {
  const i = e[t];
  return Oe(i) ? i : new Md(e, t, n);
}
const Fd = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Bd = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
};
var h = {};
const Nn = [];
function mi(e) {
  Nn.push(e);
}
function gi() {
  Nn.pop();
}
function w(e, ...t) {
  ln();
  const n = Nn.length ? Nn[Nn.length - 1].component : null, i = n && n.appContext.config.warnHandler, s = Hd();
  if (i)
    vt(
      i,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${rr(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ud(s)), console.warn(...r);
  }
  cn();
}
function Hd() {
  let e = Nn[Nn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const i = e.component && e.component.parent;
    e = i && i.vnode;
  }
  return t;
}
function Ud(e) {
  const t = [];
  return e.forEach((n, i) => {
    t.push(...i === 0 ? [] : [`
`], ...jd(n));
  }), t;
}
function jd({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", i = e.component ? e.component.parent == null : !1, s = ` at <${rr(
    e.component,
    e.type,
    i
  )}`, r = ">" + n;
  return e.props ? [s, ...Kd(e.props), r] : [s + r];
}
function Kd(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((i) => {
    t.push(...da(i, e[i]));
  }), n.length > 3 && t.push(" ..."), t;
}
function da(e, t, n) {
  return Q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Oe(t) ? (t = da(e, Z(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : z(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Z(t), n ? t : [`${e}=`, t]);
}
function To(e, t) {
  h.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? w(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && w(`${t} is NaN - the duration expression might be incorrect.`));
}
const Wd = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  WATCH_GETTER: 2,
  2: "WATCH_GETTER",
  WATCH_CALLBACK: 3,
  3: "WATCH_CALLBACK",
  WATCH_CLEANUP: 4,
  4: "WATCH_CLEANUP",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER"
}, Js = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function vt(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    an(s, t, n);
  }
}
function Qe(e, t, n, i) {
  if (z(e)) {
    const r = vt(e, t, n, i);
    return r && Bs(r) && r.catch((o) => {
      an(o, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Qe(e[r], t, n, i));
  return s;
}
function an(e, t, n, i = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy, l = h.NODE_ENV !== "production" ? Js[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](e, o, l) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      vt(
        c,
        null,
        10,
        [e, o, l]
      );
      return;
    }
  }
  qd(e, n, s, i);
}
function qd(e, t, n, i = !0) {
  if (h.NODE_ENV !== "production") {
    const s = Js[t];
    if (n && mi(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && gi(), i)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Di = !1, Ar = !1;
const Le = [];
let _t = 0;
const Bn = [];
let xt = null, Ut = 0;
const pa = /* @__PURE__ */ Promise.resolve();
let wo = null;
const Jd = 100;
function Gs(e) {
  const t = wo || pa;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gd(e) {
  let t = _t + 1, n = Le.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = Le[i], r = xi(s);
    r < e || r === e && s.pre ? t = i + 1 : n = i;
  }
  return t;
}
function Ui(e) {
  (!Le.length || !Le.includes(
    e,
    Di && e.allowRecurse ? _t + 1 : _t
  )) && (e.id == null ? Le.push(e) : Le.splice(Gd(e.id), 0, e), ha());
}
function ha() {
  !Di && !Ar && (Ar = !0, wo = pa.then(ma));
}
function zd(e) {
  const t = Le.indexOf(e);
  t > _t && Le.splice(t, 1);
}
function Vi(e) {
  U(e) ? Bn.push(...e) : (!xt || !xt.includes(
    e,
    e.allowRecurse ? Ut + 1 : Ut
  )) && Bn.push(e), ha();
}
function Al(e, t, n = Di ? _t + 1 : 0) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Le.length; n++) {
    const i = Le[n];
    if (i && i.pre) {
      if (e && i.id !== e.uid || h.NODE_ENV !== "production" && Do(t, i))
        continue;
      Le.splice(n, 1), n--, i();
    }
  }
}
function bs(e) {
  if (Bn.length) {
    const t = [...new Set(Bn)].sort(
      (n, i) => xi(n) - xi(i)
    );
    if (Bn.length = 0, xt) {
      xt.push(...t);
      return;
    }
    for (xt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ut = 0; Ut < xt.length; Ut++)
      h.NODE_ENV !== "production" && Do(e, xt[Ut]) || xt[Ut]();
    xt = null, Ut = 0;
  }
}
const xi = (e) => e.id == null ? 1 / 0 : e.id, Yd = (e, t) => {
  const n = xi(e) - xi(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ma(e) {
  Ar = !1, Di = !0, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Le.sort(Yd);
  const t = h.NODE_ENV !== "production" ? (n) => Do(e, n) : pe;
  try {
    for (_t = 0; _t < Le.length; _t++) {
      const n = Le[_t];
      if (n && n.active !== !1) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        vt(n, null, 14);
      }
    }
  } finally {
    _t = 0, Le.length = 0, bs(e), Di = !1, wo = null, (Le.length || Bn.length) && ma(e);
  }
}
function Do(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Jd) {
      const i = t.ownerInstance, s = i && Ri(i.type);
      return an(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let en = !1;
const $n = /* @__PURE__ */ new Set();
h.NODE_ENV !== "production" && (ho().__VUE_HMR_RUNTIME__ = {
  createRecord: mr(ga),
  rerender: mr(Zd),
  reload: mr(ep)
});
const Cn = /* @__PURE__ */ new Map();
function Xd(e) {
  const t = e.type.__hmrId;
  let n = Cn.get(t);
  n || (ga(t, e.type), n = Cn.get(t)), n.instances.add(e);
}
function Qd(e) {
  Cn.get(e.type.__hmrId).instances.delete(e);
}
function ga(e, t) {
  return Cn.has(e) ? !1 : (Cn.set(e, {
    initialDef: Ei(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ei(e) {
  return Nf(e) ? e.__vccOpts : e;
}
function Zd(e, t) {
  const n = Cn.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((i) => {
    t && (i.render = t, Ei(i.type).render = t), i.renderCache = [], en = !0, i.effect.dirty = !0, i.update(), en = !1;
  }));
}
function ep(e, t) {
  const n = Cn.get(e);
  if (!n)
    return;
  t = Ei(t), Il(n.initialDef, t);
  const i = [...n.instances];
  for (const s of i) {
    const r = Ei(s.type);
    $n.has(r) || (r !== n.initialDef && Il(r, t), $n.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? ($n.add(r), s.ceReload(t.styles), $n.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Ui(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Vi(() => {
    for (const s of i)
      $n.delete(
        Ei(s.type)
      );
  });
}
function Il(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function mr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (i) {
      console.error(i), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ft, fi = [], Ir = !1;
function ji(e, ...t) {
  ft ? ft.emit(e, ...t) : Ir || fi.push({ event: e, args: t });
}
function Vo(e, t) {
  var n, i;
  ft = e, ft ? (ft.enabled = !0, fi.forEach(({ event: s, args: r }) => ft.emit(s, ...r)), fi = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((i = (n = window.navigator) == null ? void 0 : n.userAgent) != null && i.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Vo(r, t);
  }), setTimeout(() => {
    ft || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ir = !0, fi = []);
  }, 3e3)) : (Ir = !0, fi = []);
}
function tp(e, t) {
  ji("app:init", e, t, {
    Fragment: Ce,
    Text: rn,
    Comment: ve,
    Static: tn
  });
}
function np(e) {
  ji("app:unmount", e);
}
const kr = /* @__PURE__ */ xo(
  "component:added"
  /* COMPONENT_ADDED */
), Ea = /* @__PURE__ */ xo(
  "component:updated"
  /* COMPONENT_UPDATED */
), ip = /* @__PURE__ */ xo(
  "component:removed"
  /* COMPONENT_REMOVED */
), sp = (e) => {
  ft && typeof ft.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ft.cleanupBuffer(e) && ip(e);
};
function xo(e) {
  return (t) => {
    ji(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const rp = /* @__PURE__ */ ya(
  "perf:start"
  /* PERFORMANCE_START */
), op = /* @__PURE__ */ ya(
  "perf:end"
  /* PERFORMANCE_END */
);
function ya(e) {
  return (t, n, i) => {
    ji(e, t.appContext.app, t.uid, t, n, i);
  };
}
function lp(e, t, n) {
  ji(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function cp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || le;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [f]
    } = e;
    if (u)
      if (!(t in u))
        (!f || !(yt(t) in f)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${yt(t)}" prop.`
        );
      else {
        const p = u[t];
        z(p) && (p(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), o = r && t.slice(7);
  if (o && o in i) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: p } = i[u] || le;
    p && (s = n.map((E) => Q(E) ? E.trim() : E)), f && (s = n.map(Ci));
  }
  if (h.NODE_ENV !== "production" && lp(e, t, s), h.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && i[yt(u)] && w(
      `Event "${u}" is emitted in component ${rr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${$e(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = i[l = yt(t)] || // also try camelCase event handler (#2249)
  i[l = yt(Ee(t))];
  !c && r && (c = i[l = yt($e(t))]), c && Qe(
    c,
    e,
    6,
    s
  );
  const a = i[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Qe(
      a,
      e,
      6,
      s
    );
  }
}
function _a(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, l = !1;
  if (!z(e)) {
    const c = (a) => {
      const u = _a(a, t, !0);
      u && (l = !0, ie(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (oe(e) && i.set(e, null), null) : (U(r) ? r.forEach((c) => o[c] = null) : ie(o, r), oe(e) && i.set(e, o), o);
}
function zs(e, t) {
  return !e || !It(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), se(e, t[0].toLowerCase() + t.slice(1)) || se(e, $e(t)) || se(e, t));
}
let ge = null, Ys = null;
function Ai(e) {
  const t = ge;
  return ge = e, Ys = e && e.type.__scopeId || null, t;
}
function Na(e) {
  Ys = e;
}
function ba() {
  Ys = null;
}
const ap = (e) => Ao;
function Ao(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && Ur(-1);
    const r = Ai(t);
    let o;
    try {
      o = e(...s);
    } finally {
      Ai(r), i._d && Ur(1);
    }
    return h.NODE_ENV !== "production" && Ea(t), o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
let Rr = !1;
function vs() {
  Rr = !0;
}
function us(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [o],
    slots: l,
    attrs: c,
    emit: a,
    render: u,
    renderCache: f,
    data: p,
    setupState: E,
    ctx: y,
    inheritAttrs: T
  } = e;
  let R, P;
  const O = Ai(e);
  h.NODE_ENV !== "production" && (Rr = !1);
  try {
    if (n.shapeFlag & 4) {
      const N = s || i, I = h.NODE_ENV !== "production" && E.__isScriptSetup ? new Proxy(N, {
        get(D, b, v) {
          return w(
            `Property '${String(
              b
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, b, v);
        }
      }) : N;
      R = Je(
        u.call(
          I,
          N,
          f,
          r,
          E,
          p,
          y
        )
      ), P = c;
    } else {
      const N = t;
      h.NODE_ENV !== "production" && c === r && vs(), R = Je(
        N.length > 1 ? N(
          r,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return vs(), c;
            },
            slots: l,
            emit: a
          } : { attrs: c, slots: l, emit: a }
        ) : N(
          r,
          null
          /* we know it doesn't need it */
        )
      ), P = t.props ? c : fp(c);
    }
  } catch (N) {
    bi.length = 0, an(N, e, 1), R = he(ve);
  }
  let g = R, _;
  if (h.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && ([g, _] = va(R)), P && T !== !1) {
    const N = Object.keys(P), { shapeFlag: I } = g;
    if (N.length) {
      if (I & 7)
        o && N.some(Es) && (P = up(
          P,
          o
        )), g = ot(g, P);
      else if (h.NODE_ENV !== "production" && !Rr && g.type !== ve) {
        const D = Object.keys(c), b = [], v = [];
        for (let C = 0, M = D.length; C < M; C++) {
          const V = D[C];
          It(V) ? Es(V) || b.push(V[2].toLowerCase() + V.slice(3)) : v.push(V);
        }
        v.length && w(
          `Extraneous non-props attributes (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), b.length && w(
          `Extraneous non-emits event listeners (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !kl(g) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), g = ot(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !kl(g) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), g.transition = n.transition), h.NODE_ENV !== "production" && _ ? _(g) : R = g, Ai(O), R;
}
const va = (e) => {
  const t = e.children, n = e.dynamicChildren, i = Xs(t, !1);
  if (i) {
    if (h.NODE_ENV !== "production" && i.patchFlag > 0 && i.patchFlag & 2048)
      return va(i);
  } else
    return [e, void 0];
  const s = t.indexOf(i), r = n ? n.indexOf(i) : -1, o = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Je(i), o];
};
function Xs(e, t = !0) {
  let n;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (Rt(s)) {
      if (s.type !== ve || s.children === "v-if") {
        if (n)
          return;
        if (n = s, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Xs(n.children);
      }
    } else
      return;
  }
  return n;
}
const fp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || It(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, up = (e, t) => {
  const n = {};
  for (const i in e)
    (!Es(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
}, kl = (e) => e.shapeFlag & 7 || e.type === ve;
function dp(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: l, patchFlag: c } = t, a = r.emitsOptions;
  if (h.NODE_ENV !== "production" && (s || l) && en || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return i ? Rl(i, o, a) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (o[p] !== i[p] && !zs(a, p))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? o ? Rl(i, o, a) : !0 : !!o;
  return !1;
}
function Rl(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !zs(n, r))
      return !0;
  }
  return !1;
}
function Io({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Os = "components", pp = "directives";
function hp(e, t) {
  return Ro(Os, e, !0, t) || e;
}
const ko = Symbol.for("v-ndc");
function mp(e) {
  return Q(e) ? Ro(Os, e, !1) || e : e || ko;
}
function gp(e) {
  return Ro(pp, e);
}
function Ro(e, t, n = !0, i = !1) {
  const s = ge || be;
  if (s) {
    const r = s.type;
    if (e === Os) {
      const l = Ri(
        r,
        !1
      );
      if (l && (l === t || l === Ee(t) || l === Ot(Ee(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Pl(s[e] || r[e], t) || // global registration
      Pl(s.appContext[e], t)
    );
    if (!o && i)
      return r;
    if (h.NODE_ENV !== "production" && n && !o) {
      const l = e === Os ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      w(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return o;
  } else
    h.NODE_ENV !== "production" && w(
      `resolve${Ot(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function Pl(e, t) {
  return e && (e[t] || e[Ee(t)] || e[Ot(Ee(t))]);
}
const Oa = (e) => e.__isSuspense;
let Pr = 0;
const Ep = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, i, s, r, o, l, c, a) {
    if (e == null)
      _p(
        t,
        n,
        i,
        s,
        r,
        o,
        l,
        c,
        a
      );
    else {
      if (r && r.deps > 0) {
        t.suspense = e.suspense;
        return;
      }
      Np(
        e,
        t,
        n,
        i,
        s,
        o,
        l,
        c,
        a
      );
    }
  },
  hydrate: bp,
  create: Po,
  normalize: vp
}, yp = Ep;
function Ii(e, t) {
  const n = e.props && e.props[t];
  z(n) && n();
}
function _p(e, t, n, i, s, r, o, l, c) {
  const {
    p: a,
    o: { createElement: u }
  } = c, f = u("div"), p = e.suspense = Po(
    e,
    s,
    i,
    t,
    f,
    n,
    r,
    o,
    l,
    c
  );
  a(
    null,
    p.pendingBranch = e.ssContent,
    f,
    null,
    i,
    p,
    r,
    o
  ), p.deps > 0 ? (Ii(e, "onPending"), Ii(e, "onFallback"), a(
    null,
    e.ssFallback,
    t,
    n,
    i,
    null,
    // fallback tree will not have suspense context
    r,
    o
  ), Hn(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Np(e, t, n, i, s, r, o, l, { p: c, um: a, o: { createElement: u } }) {
  const f = t.suspense = e.suspense;
  f.vnode = t, t.el = e.el;
  const p = t.ssContent, E = t.ssFallback, { activeBranch: y, pendingBranch: T, isInFallback: R, isHydrating: P } = f;
  if (T)
    f.pendingBranch = p, ut(p, T) ? (c(
      T,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : R && (P || (c(
      y,
      E,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Hn(f, E)))) : (f.pendingId = Pr++, P ? (f.isHydrating = !1, f.activeBranch = T) : a(T, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = u("div"), R ? (c(
      null,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 ? f.resolve() : (c(
      y,
      E,
      n,
      i,
      s,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), Hn(f, E))) : y && ut(p, y) ? (c(
      y,
      p,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), f.resolve(!0)) : (c(
      null,
      p,
      f.hiddenContainer,
      null,
      s,
      f,
      r,
      o,
      l
    ), f.deps <= 0 && f.resolve()));
  else if (y && ut(p, y))
    c(
      y,
      p,
      n,
      i,
      s,
      f,
      r,
      o,
      l
    ), Hn(f, p);
  else if (Ii(t, "onPending"), f.pendingBranch = p, p.shapeFlag & 512 ? f.pendingId = p.component.suspenseId : f.pendingId = Pr++, c(
    null,
    p,
    f.hiddenContainer,
    null,
    s,
    f,
    r,
    o,
    l
  ), f.deps <= 0)
    f.resolve();
  else {
    const { timeout: O, pendingId: g } = f;
    O > 0 ? setTimeout(() => {
      f.pendingId === g && f.fallback(E);
    }, O) : O === 0 && f.fallback(E);
  }
}
let Ml = !1;
function Po(e, t, n, i, s, r, o, l, c, a, u = !1) {
  h.NODE_ENV !== "production" && !Ml && (Ml = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: f,
    m: p,
    um: E,
    n: y,
    o: { parentNode: T, remove: R }
  } = a;
  let P;
  const O = Op(e);
  O && t != null && t.pendingBranch && (P = t.pendingId, t.deps++);
  const g = e.props ? _s(e.props.timeout) : void 0;
  h.NODE_ENV !== "production" && To(g, "Suspense timeout");
  const _ = r, N = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: i,
    hiddenContainer: s,
    deps: 0,
    pendingId: Pr++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !u,
    isHydrating: u,
    isUnmounted: !1,
    effects: [],
    resolve(I = !1, D = !1) {
      if (h.NODE_ENV !== "production") {
        if (!I && !N.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (N.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: b,
        activeBranch: v,
        pendingBranch: C,
        pendingId: M,
        effects: V,
        parentComponent: K,
        container: Y
      } = N;
      let te = !1;
      N.isHydrating ? N.isHydrating = !1 : I || (te = v && C.transition && C.transition.mode === "out-in", te && (v.transition.afterLeave = () => {
        M === N.pendingId && (p(
          C,
          Y,
          r === _ ? y(v) : r,
          0
        ), Vi(V));
      }), v && (T(v.el) !== N.hiddenContainer && (r = y(v)), E(v, K, N, !0)), te || p(C, Y, r, 0)), Hn(N, C), N.pendingBranch = null, N.isInFallback = !1;
      let q = N.parent, G = !1;
      for (; q; ) {
        if (q.pendingBranch) {
          q.effects.push(...V), G = !0;
          break;
        }
        q = q.parent;
      }
      !G && !te && Vi(V), N.effects = [], O && t && t.pendingBranch && P === t.pendingId && (t.deps--, t.deps === 0 && !D && t.resolve()), Ii(b, "onResolve");
    },
    fallback(I) {
      if (!N.pendingBranch)
        return;
      const { vnode: D, activeBranch: b, parentComponent: v, container: C, namespace: M } = N;
      Ii(D, "onFallback");
      const V = y(b), K = () => {
        N.isInFallback && (f(
          null,
          I,
          C,
          V,
          v,
          null,
          // fallback tree will not have suspense context
          M,
          l,
          c
        ), Hn(N, I));
      }, Y = I.transition && I.transition.mode === "out-in";
      Y && (b.transition.afterLeave = K), N.isInFallback = !0, E(
        b,
        v,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), Y || K();
    },
    move(I, D, b) {
      N.activeBranch && p(N.activeBranch, I, D, b), N.container = I;
    },
    next() {
      return N.activeBranch && y(N.activeBranch);
    },
    registerDep(I, D) {
      const b = !!N.pendingBranch;
      b && N.deps++;
      const v = I.vnode.el;
      I.asyncDep.catch((C) => {
        an(C, I, 0);
      }).then((C) => {
        if (I.isUnmounted || N.isUnmounted || N.pendingId !== I.suspenseId)
          return;
        I.asyncResolved = !0;
        const { vnode: M } = I;
        h.NODE_ENV !== "production" && mi(M), Gr(I, C, !1), v && (M.el = v);
        const V = !v && I.subTree.el;
        D(
          I,
          M,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          T(v || I.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          v ? null : y(I.subTree),
          N,
          o,
          c
        ), V && R(V), Io(I, M.el), h.NODE_ENV !== "production" && gi(), b && --N.deps === 0 && N.resolve();
      });
    },
    unmount(I, D) {
      N.isUnmounted = !0, N.activeBranch && E(
        N.activeBranch,
        n,
        I,
        D
      ), N.pendingBranch && E(
        N.pendingBranch,
        n,
        I,
        D
      );
    }
  };
  return N;
}
function bp(e, t, n, i, s, r, o, l, c) {
  const a = t.suspense = Po(
    t,
    i,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    s,
    r,
    o,
    l,
    !0
  ), u = c(
    e,
    a.pendingBranch = t.ssContent,
    n,
    a,
    r,
    o
  );
  return a.deps === 0 && a.resolve(!1, !0), u;
}
function vp(e) {
  const { shapeFlag: t, children: n } = e, i = t & 32;
  e.ssContent = $l(
    i ? n.default : n
  ), e.ssFallback = i ? $l(n.fallback) : he(ve);
}
function $l(e) {
  let t;
  if (z(e)) {
    const n = wn && e._c;
    n && (e._d = !1, Jn()), e = e(), n && (e._d = !0, t = Ge, of());
  }
  if (U(e)) {
    const n = Xs(e);
    h.NODE_ENV !== "production" && !n && e.filter((i) => i !== ko).length > 0 && w("<Suspense> slots expect a single root node."), e = n;
  }
  return e = Je(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function Sa(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : Vi(e);
}
function Hn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: i } = e;
  let s = t.el;
  for (; !s && t.component; )
    t = t.component.subTree, s = t.el;
  n.el = s, i && i.subTree === n && (i.vnode.el = s, Io(i, s));
}
function Op(e) {
  var t;
  return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1;
}
const Ca = Symbol.for("v-scx"), Ta = () => {
  {
    const e = _i(Ca);
    return e || h.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Sp(e, t) {
  return Ki(e, null, t);
}
function wa(e, t) {
  return Ki(
    e,
    null,
    h.NODE_ENV !== "production" ? ie({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function Da(e, t) {
  return Ki(
    e,
    null,
    h.NODE_ENV !== "production" ? ie({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const is = {};
function bn(e, t, n) {
  return h.NODE_ENV !== "production" && !z(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ki(e, t, n);
}
function Ki(e, t, {
  immediate: n,
  deep: i,
  flush: s,
  once: r,
  onTrack: o,
  onTrigger: l
} = le) {
  if (t && r) {
    const D = t;
    t = (...b) => {
      D(...b), I();
    };
  }
  h.NODE_ENV !== "production" && i !== void 0 && typeof i == "number" && w(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), h.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (D) => {
    w(
      "Invalid watch source: ",
      D,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = be, u = (D) => i === !0 ? D : (
    // for deep: false, only traverse root-level properties
    hn(D, i === !1 ? 1 : void 0)
  );
  let f, p = !1, E = !1;
  if (Oe(e) ? (f = () => e.value, p = Zt(e)) : Qt(e) ? (f = () => u(e), p = !0) : U(e) ? (E = !0, p = e.some((D) => Qt(D) || Zt(D)), f = () => e.map((D) => {
    if (Oe(D))
      return D.value;
    if (Qt(D))
      return u(D);
    if (z(D))
      return vt(D, a, 2);
    h.NODE_ENV !== "production" && c(D);
  })) : z(e) ? t ? f = () => vt(e, a, 2) : f = () => (y && y(), Qe(
    e,
    a,
    3,
    [T]
  )) : (f = pe, h.NODE_ENV !== "production" && c(e)), t && i) {
    const D = f;
    f = () => hn(D());
  }
  let y, T = (D) => {
    y = _.onStop = () => {
      vt(D, a, 4), y = _.onStop = void 0;
    };
  }, R;
  if (qi)
    if (T = pe, t ? n && Qe(t, a, 3, [
      f(),
      E ? [] : void 0,
      T
    ]) : f(), s === "sync") {
      const D = Ta();
      R = D.__watcherHandles || (D.__watcherHandles = []);
    } else
      return pe;
  let P = E ? new Array(e.length).fill(is) : is;
  const O = () => {
    if (!(!_.active || !_.dirty))
      if (t) {
        const D = _.run();
        (i || p || (E ? D.some((b, v) => mt(b, P[v])) : mt(D, P))) && (y && y(), Qe(t, a, 3, [
          D,
          // pass undefined as the old value when it's changed for the first time
          P === is ? void 0 : E && P[0] === is ? [] : P,
          T
        ]), P = D);
      } else
        _.run();
  };
  O.allowRecurse = !!t;
  let g;
  s === "sync" ? g = O : s === "post" ? g = () => Re(O, a && a.suspense) : (O.pre = !0, a && (O.id = a.uid), g = () => Ui(O));
  const _ = new Wn(f, pe, g), N = qc(), I = () => {
    _.stop(), N && fo(N.effects, _);
  };
  return h.NODE_ENV !== "production" && (_.onTrack = o, _.onTrigger = l), t ? n ? O() : P = _.run() : s === "post" ? Re(
    _.run.bind(_),
    a && a.suspense
  ) : _.run(), R && R.push(I), I;
}
function Cp(e, t, n) {
  const i = this.proxy, s = Q(e) ? e.includes(".") ? Va(i, e) : () => i[e] : e.bind(i, i);
  let r;
  z(t) ? r = t : (r = t.handler, n = t);
  const o = Dn(this), l = Ki(s, r.bind(i), n);
  return o(), l;
}
function Va(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
function hn(e, t, n = 0, i) {
  if (!oe(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (i = i || /* @__PURE__ */ new Set(), i.has(e))
    return e;
  if (i.add(e), Oe(e))
    hn(e.value, t, n, i);
  else if (U(e))
    for (let s = 0; s < e.length; s++)
      hn(e[s], t, n, i);
  else if (xn(e) || En(e))
    e.forEach((s) => {
      hn(s, t, n, i);
    });
  else if ($c(e))
    for (const s in e)
      hn(e[s], t, n, i);
  return e;
}
function xa(e) {
  Lc(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function Tp(e, t) {
  if (ge === null)
    return h.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = sr(ge) || ge.proxy, i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, l, c = le] = t[s];
    r && (z(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && hn(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Et(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[i];
    c && (ln(), Qe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), cn());
  }
}
const jt = Symbol("_leaveCb"), ss = Symbol("_enterCb");
function Mo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return si(() => {
    e.isMounted = !0;
  }), nr(() => {
    e.isUnmounting = !0;
  }), e;
}
const tt = [Function, Array], $o = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: tt,
  onEnter: tt,
  onAfterEnter: tt,
  onEnterCancelled: tt,
  // leave
  onBeforeLeave: tt,
  onLeave: tt,
  onAfterLeave: tt,
  onLeaveCancelled: tt,
  // appear
  onBeforeAppear: tt,
  onAppear: tt,
  onAfterAppear: tt,
  onAppearCancelled: tt
}, wp = {
  name: "BaseTransition",
  props: $o,
  setup(e, { slots: t }) {
    const n = Mt(), i = Mo();
    let s;
    return () => {
      const r = t.default && Qs(t.default(), !0);
      if (!r || !r.length)
        return;
      let o = r[0];
      if (r.length > 1) {
        let T = !1;
        for (const R of r)
          if (R.type !== ve) {
            if (h.NODE_ENV !== "production" && T) {
              w(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (o = R, T = !0, h.NODE_ENV === "production")
              break;
          }
      }
      const l = Z(e), { mode: c } = l;
      if (h.NODE_ENV !== "production" && c && c !== "in-out" && c !== "out-in" && c !== "default" && w(`invalid <transition> mode: ${c}`), i.isLeaving)
        return gr(o);
      const a = Ll(o);
      if (!a)
        return gr(o);
      const u = qn(
        a,
        l,
        i,
        n
      );
      Tn(a, u);
      const f = n.subTree, p = f && Ll(f);
      let E = !1;
      const { getTransitionKey: y } = a.type;
      if (y) {
        const T = y();
        s === void 0 ? s = T : T !== s && (s = T, E = !0);
      }
      if (p && p.type !== ve && (!ut(a, p) || E)) {
        const T = qn(
          p,
          l,
          i,
          n
        );
        if (Tn(p, T), c === "out-in")
          return i.isLeaving = !0, T.afterLeave = () => {
            i.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, gr(o);
        c === "in-out" && a.type !== ve && (T.delayLeave = (R, P, O) => {
          const g = Ia(
            i,
            p
          );
          g[String(p.key)] = p, R[jt] = () => {
            P(), R[jt] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = O;
        });
      }
      return o;
    };
  }
}, Aa = wp;
function Ia(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function qn(e, t, n, i) {
  const {
    appear: s,
    mode: r,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: a,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: p,
    onAfterLeave: E,
    onLeaveCancelled: y,
    onBeforeAppear: T,
    onAppear: R,
    onAfterAppear: P,
    onAppearCancelled: O
  } = t, g = String(e.key), _ = Ia(n, e), N = (b, v) => {
    b && Qe(
      b,
      i,
      9,
      v
    );
  }, I = (b, v) => {
    const C = v[1];
    N(b, v), U(b) ? b.every((M) => M.length <= 1) && C() : b.length <= 1 && C();
  }, D = {
    mode: r,
    persisted: o,
    beforeEnter(b) {
      let v = l;
      if (!n.isMounted)
        if (s)
          v = T || l;
        else
          return;
      b[jt] && b[jt](
        !0
        /* cancelled */
      );
      const C = _[g];
      C && ut(e, C) && C.el[jt] && C.el[jt](), N(v, [b]);
    },
    enter(b) {
      let v = c, C = a, M = u;
      if (!n.isMounted)
        if (s)
          v = R || c, C = P || a, M = O || u;
        else
          return;
      let V = !1;
      const K = b[ss] = (Y) => {
        V || (V = !0, Y ? N(M, [b]) : N(C, [b]), D.delayedLeave && D.delayedLeave(), b[ss] = void 0);
      };
      v ? I(v, [b, K]) : K();
    },
    leave(b, v) {
      const C = String(e.key);
      if (b[ss] && b[ss](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return v();
      N(f, [b]);
      let M = !1;
      const V = b[jt] = (K) => {
        M || (M = !0, v(), K ? N(y, [b]) : N(E, [b]), b[jt] = void 0, _[C] === e && delete _[C]);
      };
      _[C] = e, p ? I(p, [b, V]) : V();
    },
    clone(b) {
      return qn(b, t, n, i);
    }
  };
  return D;
}
function gr(e) {
  if (ii(e))
    return e = ot(e), e.children = null, e;
}
function Ll(e) {
  return ii(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    h.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? Tn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qs(e, t = !1, n) {
  let i = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Ce ? (o.patchFlag & 128 && s++, i = i.concat(
      Qs(o.children, t, l)
    )) : (t || o.type !== ve) && i.push(l != null ? ot(o, { key: l }) : o);
  }
  if (s > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zs(e, t) {
  return z(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
const vn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dp(e) {
  z(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: i,
    delay: s = 200,
    timeout: r,
    // undefined = never times out
    suspensible: o = !0,
    onError: l
  } = e;
  let c = null, a, u = 0;
  const f = () => (u++, c = null, p()), p = () => {
    let E;
    return c || (E = c = t().catch((y) => {
      if (y = y instanceof Error ? y : new Error(String(y)), l)
        return new Promise((T, R) => {
          l(y, () => T(f()), () => R(y), u + 1);
        });
      throw y;
    }).then((y) => {
      if (E !== c && c)
        return c;
      if (h.NODE_ENV !== "production" && !y && w(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), h.NODE_ENV !== "production" && y && !oe(y) && !z(y))
        throw new Error(`Invalid async component load result: ${y}`);
      return a = y, y;
    }));
  };
  return /* @__PURE__ */ Zs({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    get __asyncResolved() {
      return a;
    },
    setup() {
      const E = be;
      if (a)
        return () => Er(a, E);
      const y = (O) => {
        c = null, an(
          O,
          E,
          13,
          !i
        );
      };
      if (o && E.suspense || qi)
        return p().then((O) => () => Er(O, E)).catch((O) => (y(O), () => i ? he(i, {
          error: O
        }) : null));
      const T = je(!1), R = je(), P = je(!!s);
      return s && setTimeout(() => {
        P.value = !1;
      }, s), r != null && setTimeout(() => {
        if (!T.value && !R.value) {
          const O = new Error(
            `Async component timed out after ${r}ms.`
          );
          y(O), R.value = O;
        }
      }, r), p().then(() => {
        T.value = !0, E.parent && ii(E.parent.vnode) && (E.parent.effect.dirty = !0, Ui(E.parent.update));
      }).catch((O) => {
        y(O), R.value = O;
      }), () => {
        if (T.value && a)
          return Er(a, E);
        if (R.value && i)
          return he(i, {
            error: R.value
          });
        if (n && !P.value)
          return he(n);
      };
    }
  });
}
function Er(e, t) {
  const { ref: n, props: i, children: s, ce: r } = t.vnode, o = he(e, i, s);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const ii = (e) => e.type.__isKeepAlive, Vp = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = Mt(), i = n.ctx;
    if (!i.renderer)
      return () => {
        const O = t.default && t.default();
        return O && O.length === 1 ? O[0] : O;
      };
    const s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let o = null;
    h.NODE_ENV !== "production" && (n.__v_cache = s);
    const l = n.suspense, {
      renderer: {
        p: c,
        m: a,
        um: u,
        o: { createElement: f }
      }
    } = i, p = f("div");
    i.activate = (O, g, _, N, I) => {
      const D = O.component;
      a(O, g, _, 0, l), c(
        D.vnode,
        O,
        g,
        _,
        D,
        l,
        N,
        O.slotScopeIds,
        I
      ), Re(() => {
        D.isDeactivated = !1, D.a && Jt(D.a);
        const b = O.props && O.props.onVnodeMounted;
        b && qe(b, D.parent, O);
      }, l), h.NODE_ENV !== "production" && kr(D);
    }, i.deactivate = (O) => {
      const g = O.component;
      a(O, p, null, 1, l), Re(() => {
        g.da && Jt(g.da);
        const _ = O.props && O.props.onVnodeUnmounted;
        _ && qe(_, g.parent, O), g.isDeactivated = !0;
      }, l), h.NODE_ENV !== "production" && kr(g);
    };
    function E(O) {
      yr(O), u(O, n, l, !0);
    }
    function y(O) {
      s.forEach((g, _) => {
        const N = Ri(g.type);
        N && (!O || !O(N)) && T(_);
      });
    }
    function T(O) {
      const g = s.get(O);
      !o || !ut(g, o) ? E(g) : o && yr(o), s.delete(O), r.delete(O);
    }
    bn(
      () => [e.include, e.exclude],
      ([O, g]) => {
        O && y((_) => ui(O, _)), g && y((_) => !ui(g, _));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let R = null;
    const P = () => {
      R != null && s.set(R, _r(n.subTree));
    };
    return si(P), tr(P), nr(() => {
      s.forEach((O) => {
        const { subTree: g, suspense: _ } = n, N = _r(g);
        if (O.type === N.type && O.key === N.key) {
          yr(N);
          const I = N.component.da;
          I && Re(I, _);
          return;
        }
        E(O);
      });
    }), () => {
      if (R = null, !t.default)
        return null;
      const O = t.default(), g = O[0];
      if (O.length > 1)
        return h.NODE_ENV !== "production" && w("KeepAlive should contain exactly one component child."), o = null, O;
      if (!Rt(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return o = null, g;
      let _ = _r(g);
      const N = _.type, I = Ri(
        vn(_) ? _.type.__asyncResolved || {} : N
      ), { include: D, exclude: b, max: v } = e;
      if (D && (!I || !ui(D, I)) || b && I && ui(b, I))
        return o = _, g;
      const C = _.key == null ? N : _.key, M = s.get(C);
      return _.el && (_ = ot(_), g.shapeFlag & 128 && (g.ssContent = _)), R = C, M ? (_.el = M.el, _.component = M.component, _.transition && Tn(_, _.transition), _.shapeFlag |= 512, r.delete(C), r.add(C)) : (r.add(C), v && r.size > parseInt(v, 10) && T(r.values().next().value)), _.shapeFlag |= 256, o = _, Oa(g.type) ? g : _;
    };
  }
}, xp = Vp;
function ui(e, t) {
  return U(e) ? e.some((n) => ui(n, t)) : Q(e) ? e.split(",").includes(t) : Ru(e) ? e.test(t) : !1;
}
function ka(e, t) {
  Pa(e, "a", t);
}
function Ra(e, t) {
  Pa(e, "da", t);
}
function Pa(e, t, n = be) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (er(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      ii(s.parent.vnode) && Ap(i, t, n, s), s = s.parent;
  }
}
function Ap(e, t, n, i) {
  const s = er(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Wi(() => {
    fo(i[t], s);
  }, n);
}
function yr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function _r(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function er(e, t, n = be, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      ln();
      const l = Dn(n), c = Qe(t, n, e, o);
      return l(), cn(), c;
    });
    return i ? s.unshift(r) : s.push(r), r;
  } else if (h.NODE_ENV !== "production") {
    const s = yt(Js[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Pt = (e) => (t, n = be) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qi || e === "sp") && er(e, (...i) => t(...i), n)
), Ma = Pt("bm"), si = Pt("m"), $a = Pt("bu"), tr = Pt("u"), nr = Pt("bum"), Wi = Pt("um"), La = Pt("sp"), Fa = Pt(
  "rtg"
), Ba = Pt(
  "rtc"
);
function Ha(e, t = be) {
  er("ec", e, t);
}
function Ip(e, t, n, i) {
  let s;
  const r = n && n[i];
  if (U(e) || Q(e)) {
    s = new Array(e.length);
    for (let o = 0, l = e.length; o < l; o++)
      s[o] = t(e[o], o, void 0, r && r[o]);
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let o = 0; o < e; o++)
      s[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (oe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (o, l) => t(o, l, void 0, r && r[l])
      );
    else {
      const o = Object.keys(e);
      s = new Array(o.length);
      for (let l = 0, c = o.length; l < c; l++) {
        const a = o[l];
        s[l] = t(e[a], a, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[i] = s), s;
}
function kp(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (U(i))
      for (let s = 0; s < i.length; s++)
        e[i[s].name] = i[s].fn;
    else
      i && (e[i.name] = i.key ? (...s) => {
        const r = i.fn(...s);
        return r && (r.key = i.key), r;
      } : i.fn);
  }
  return e;
}
function Rp(e, t, n = {}, i, s) {
  if (ge.isCE || ge.parent && vn(ge.parent) && ge.parent.isCE)
    return t !== "default" && (n.name = t), he("slot", n, i && i());
  let r = e[t];
  h.NODE_ENV !== "production" && r && r.length > 1 && (w(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), Jn();
  const o = r && Ua(r(n)), l = Ho(
    Ce,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${t}`
    },
    o || (i ? i() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), r && r._c && (r._d = !0), l;
}
function Ua(e) {
  return e.some((t) => Rt(t) ? !(t.type === ve || t.type === Ce && !Ua(t.children)) : !0) ? e : null;
}
function Pp(e, t) {
  const n = {};
  if (h.NODE_ENV !== "production" && !oe(e))
    return w("v-on with no argument expects an object value."), n;
  for (const i in e)
    n[t && /[A-Z]/.test(i) ? `on:${i}` : yt(i)] = e[i];
  return n;
}
const Mr = (e) => e ? mf(e) ? sr(e) || e.proxy : Mr(e.parent) : null, On = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? pn(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? pn(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? pn(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? pn(e.refs) : e.refs,
    $parent: (e) => Mr(e.parent),
    $root: (e) => Mr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Ui(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Gs.bind(e.proxy)),
    $watch: (e) => Cp.bind(e)
  })
), Lo = (e) => e === "_" || e === "$", Nr = (e, t) => e !== le && !e.__isScriptSetup && se(e, t), yi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: l, appContext: c } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const E = o[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Nr(i, t))
          return o[t] = 1, i[t];
        if (s !== le && se(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && se(a, t)
        )
          return o[t] = 3, r[t];
        if (n !== le && se(n, t))
          return o[t] = 4, n[t];
        $r && (o[t] = 0);
      }
    }
    const u = On[t];
    let f, p;
    if (u)
      return t === "$attrs" ? (Pe(e, "get", t), h.NODE_ENV !== "production" && vs()) : h.NODE_ENV !== "production" && t === "$slots" && Pe(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== le && se(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, se(p, t)
    )
      return p[t];
    h.NODE_ENV !== "production" && ge && (!Q(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== le && Lo(t[0]) && se(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return Nr(s, t) ? (s[t] = n, !0) : h.NODE_ENV !== "production" && s.__isScriptSetup && se(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== le && se(i, t) ? (i[t] = n, !0) : se(e.props, t) ? (h.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let l;
    return !!n[o] || e !== le && se(e, o) || Nr(t, o) || (l = r[0]) && se(l, o) || se(i, o) || se(On, o) || se(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : se(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (yi.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Mp = /* @__PURE__ */ ie(
  {},
  yi,
  {
    get(e, t) {
      if (t !== Symbol.unscopables)
        return yi.get(e, t, e);
    },
    has(e, t) {
      const n = t[0] !== "_" && !Fu(t);
      return h.NODE_ENV !== "production" && !n && yi.has(e, t) && w(
        `Property ${JSON.stringify(
          t
        )} should not start with _ which is a reserved prefix for Vue internals.`
      ), n;
    }
  }
);
function $p(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(On).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => On[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: pe
    });
  }), t;
}
function Lp(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((i) => {
    Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[i],
      set: pe
    });
  });
}
function Fp(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Z(n)).forEach((i) => {
    if (!n.__isScriptSetup) {
      if (Lo(i[0])) {
        w(
          `setup() return property ${JSON.stringify(
            i
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, i, {
        enumerable: !0,
        configurable: !0,
        get: () => n[i],
        set: pe
      });
    }
  });
}
const In = (e) => w(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Bp() {
  return h.NODE_ENV !== "production" && In("defineProps"), null;
}
function Hp() {
  return h.NODE_ENV !== "production" && In("defineEmits"), null;
}
function Up(e) {
  h.NODE_ENV !== "production" && In("defineExpose");
}
function jp(e) {
  h.NODE_ENV !== "production" && In("defineOptions");
}
function Kp() {
  return h.NODE_ENV !== "production" && In("defineSlots"), null;
}
function Wp() {
  h.NODE_ENV !== "production" && In("defineModel");
}
function qp(e, t) {
  return h.NODE_ENV !== "production" && In("withDefaults"), null;
}
function Jp() {
  return ja().slots;
}
function Gp() {
  return ja().attrs;
}
function ja() {
  const e = Mt();
  return h.NODE_ENV !== "production" && !e && w("useContext() called without active instance."), e.setupContext || (e.setupContext = _f(e));
}
function ki(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function zp(e, t) {
  const n = ki(e);
  for (const i in t) {
    if (i.startsWith("__skip"))
      continue;
    let s = n[i];
    s ? U(s) || z(s) ? s = n[i] = { type: s, default: t[i] } : s.default = t[i] : s === null ? s = n[i] = { default: t[i] } : h.NODE_ENV !== "production" && w(`props default key "${i}" has no corresponding declaration.`), s && t[`__skip_${i}`] && (s.skipFactory = !0);
  }
  return n;
}
function Yp(e, t) {
  return !e || !t ? e || t : U(e) && U(t) ? e.concat(t) : ie({}, ki(e), ki(t));
}
function Xp(e, t) {
  const n = {};
  for (const i in e)
    t.includes(i) || Object.defineProperty(n, i, {
      enumerable: !0,
      get: () => e[i]
    });
  return n;
}
function Qp(e) {
  const t = Mt();
  h.NODE_ENV !== "production" && !t && w(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return qr(), Bs(n) && (n = n.catch((i) => {
    throw Dn(t), i;
  })), [n, () => Dn(t)];
}
function Zp() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $r = !0;
function eh(e) {
  const t = Fo(e), n = e.proxy, i = e.ctx;
  $r = !1, t.beforeCreate && Fl(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: E,
    updated: y,
    activated: T,
    deactivated: R,
    beforeDestroy: P,
    beforeUnmount: O,
    destroyed: g,
    unmounted: _,
    render: N,
    renderTracked: I,
    renderTriggered: D,
    errorCaptured: b,
    serverPrefetch: v,
    // public API
    expose: C,
    inheritAttrs: M,
    // assets
    components: V,
    directives: K,
    filters: Y
  } = t, te = h.NODE_ENV !== "production" ? Zp() : null;
  if (h.NODE_ENV !== "production") {
    const [G] = e.propsOptions;
    if (G)
      for (const W in G)
        te("Props", W);
  }
  if (a && th(a, i, te), o)
    for (const G in o) {
      const W = o[G];
      z(W) ? (h.NODE_ENV !== "production" ? Object.defineProperty(i, G, {
        value: W.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : i[G] = W.bind(n), h.NODE_ENV !== "production" && te("Methods", G)) : h.NODE_ENV !== "production" && w(
        `Method "${G}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    h.NODE_ENV !== "production" && !z(s) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = s.call(n, n);
    if (h.NODE_ENV !== "production" && Bs(G) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !oe(G))
      h.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = Ws(G), h.NODE_ENV !== "production")
      for (const W in G)
        te("Data", W), Lo(W[0]) || Object.defineProperty(i, W, {
          configurable: !0,
          enumerable: !0,
          get: () => G[W],
          set: pe
        });
  }
  if ($r = !0, r)
    for (const G in r) {
      const W = r[G], De = z(W) ? W.bind(n, n) : z(W.get) ? W.get.bind(n, n) : pe;
      h.NODE_ENV !== "production" && De === pe && w(`Computed property "${G}" has no getter.`);
      const et = !z(W) && z(W.set) ? W.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      } : pe, lt = bf({
        get: De,
        set: et
      });
      Object.defineProperty(i, G, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (kn) => lt.value = kn
      }), h.NODE_ENV !== "production" && te("Computed", G);
    }
  if (l)
    for (const G in l)
      Ka(l[G], i, n, G);
  if (c) {
    const G = z(c) ? c.call(n) : c;
    Reflect.ownKeys(G).forEach((W) => {
      qa(W, G[W]);
    });
  }
  u && Fl(u, e, "c");
  function q(G, W) {
    U(W) ? W.forEach((De) => G(De.bind(n))) : W && G(W.bind(n));
  }
  if (q(Ma, f), q(si, p), q($a, E), q(tr, y), q(ka, T), q(Ra, R), q(Ha, b), q(Ba, I), q(Fa, D), q(nr, O), q(Wi, _), q(La, v), U(C))
    if (C.length) {
      const G = e.exposed || (e.exposed = {});
      C.forEach((W) => {
        Object.defineProperty(G, W, {
          get: () => n[W],
          set: (De) => n[W] = De
        });
      });
    } else
      e.exposed || (e.exposed = {});
  N && e.render === pe && (e.render = N), M != null && (e.inheritAttrs = M), V && (e.components = V), K && (e.directives = K);
}
function th(e, t, n = pe) {
  U(e) && (e = Lr(e));
  for (const i in e) {
    const s = e[i];
    let r;
    oe(s) ? "default" in s ? r = _i(
      s.from || i,
      s.default,
      !0
    ) : r = _i(s.from || i) : r = _i(s), Oe(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r, h.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Fl(e, t, n) {
  Qe(
    U(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ka(e, t, n, i) {
  const s = i.includes(".") ? Va(n, i) : () => n[i];
  if (Q(e)) {
    const r = t[e];
    z(r) ? bn(s, r) : h.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, r);
  } else if (z(e))
    bn(s, e.bind(n));
  else if (oe(e))
    if (U(e))
      e.forEach((r) => Ka(r, t, n, i));
    else {
      const r = z(e.handler) ? e.handler.bind(n) : t[e.handler];
      z(r) ? bn(s, r, e) : h.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else
    h.NODE_ENV !== "production" && w(`Invalid watch option: "${i}"`, e);
}
function Fo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !i ? c = t : (c = {}, s.length && s.forEach(
    (a) => Ss(c, a, o, !0)
  ), Ss(c, t, o)), oe(t) && r.set(t, c), c;
}
function Ss(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && Ss(e, r, n, !0), s && s.forEach(
    (o) => Ss(e, o, n, !0)
  );
  for (const o in t)
    if (i && o === "expose")
      h.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = nh[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const nh = {
  data: Bl,
  props: Hl,
  emits: Hl,
  // objects
  methods: di,
  computed: di,
  // lifecycle
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  // assets
  components: di,
  directives: di,
  // watch
  watch: sh,
  // provide / inject
  provide: Bl,
  inject: ih
};
function Bl(e, t) {
  return t ? e ? function() {
    return ie(
      z(e) ? e.call(this, this) : e,
      z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ih(e, t) {
  return di(Lr(e), Lr(t));
}
function Lr(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function di(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hl(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    ki(e),
    ki(t ?? {})
  ) : t;
}
function sh(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ue(e[i], t[i]);
  return n;
}
function Wa() {
  return {
    app: null,
    config: {
      isNativeTag: hi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let rh = 0;
function oh(e, t) {
  return function(i, s = null) {
    z(i) || (i = ie({}, i)), s != null && !oe(s) && (h.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), s = null);
    const r = Wa(), o = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = r.app = {
      _uid: rh++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Yr,
      get config() {
        return r.config;
      },
      set config(a) {
        h.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(a, ...u) {
        return o.has(a) ? h.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : a && z(a.install) ? (o.add(a), a.install(c, ...u)) : z(a) ? (o.add(a), a(c, ...u)) : h.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(a) {
        return r.mixins.includes(a) ? h.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (a.name ? `: ${a.name}` : "")
        ) : r.mixins.push(a), c;
      },
      component(a, u) {
        return h.NODE_ENV !== "production" && Jr(a, r.config), u ? (h.NODE_ENV !== "production" && r.components[a] && w(`Component "${a}" has already been registered in target app.`), r.components[a] = u, c) : r.components[a];
      },
      directive(a, u) {
        return h.NODE_ENV !== "production" && xa(a), u ? (h.NODE_ENV !== "production" && r.directives[a] && w(`Directive "${a}" has already been registered in target app.`), r.directives[a] = u, c) : r.directives[a];
      },
      mount(a, u, f) {
        if (l)
          h.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && a.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const p = he(i, s);
          return p.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), h.NODE_ENV !== "production" && (r.reload = () => {
            e(
              ot(p),
              a,
              f
            );
          }), u && t ? t(p, a) : e(p, a, f), l = !0, c._container = a, a.__vue_app__ = c, h.NODE_ENV !== "production" && (c._instance = p.component, tp(c, Yr)), sr(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), h.NODE_ENV !== "production" && (c._instance = null, np(c)), delete c._container.__vue_app__) : h.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(a, u) {
        return h.NODE_ENV !== "production" && a in r.provides && w(
          `App already provides property with key "${String(a)}". It will be overwritten with the new value.`
        ), r.provides[a] = u, c;
      },
      runWithContext(a) {
        const u = Un;
        Un = c;
        try {
          return a();
        } finally {
          Un = u;
        }
      }
    };
    return c;
  };
}
let Un = null;
function qa(e, t) {
  if (!be)
    h.NODE_ENV !== "production" && w("provide() can only be used inside setup().");
  else {
    let n = be.provides;
    const i = be.parent && be.parent.provides;
    i === n && (n = be.provides = Object.create(i)), n[e] = t;
  }
}
function _i(e, t, n = !1) {
  const i = be || ge;
  if (i || Un) {
    const s = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : Un._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && z(t) ? t.call(i && i.proxy) : t;
    h.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    h.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
function lh() {
  return !!(be || ge || Un);
}
function ch(e, t, n, i = !1) {
  const s = {}, r = {};
  ys(r, ir, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Ja(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  h.NODE_ENV !== "production" && za(t || {}, s, e), n ? e.props = i ? s : la(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function ah(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function fh(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = Z(s), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && ah(e)) && (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (zs(e.emitsOptions, p))
          continue;
        const E = t[p];
        if (c)
          if (se(r, p))
            E !== r[p] && (r[p] = E, a = !0);
          else {
            const y = Ee(p);
            s[y] = Fr(
              c,
              l,
              y,
              E,
              e,
              !1
            );
          }
        else
          E !== r[p] && (r[p] = E, a = !0);
      }
    }
  } else {
    Ja(e, t, s, r) && (a = !0);
    let u;
    for (const f in l)
      (!t || // for camelCase
      !se(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = $e(f)) === f || !se(t, u))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[f] = Fr(
        c,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete s[f]);
    if (r !== l)
      for (const f in r)
        (!t || !se(t, f)) && (delete r[f], a = !0);
  }
  a && bt(e, "set", "$attrs"), h.NODE_ENV !== "production" && za(t || {}, s, e);
}
function Ja(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Yt(c))
        continue;
      const a = t[c];
      let u;
      s && se(s, u = Ee(c)) ? !r || !r.includes(u) ? n[u] = a : (l || (l = {}))[u] = a : zs(e.emitsOptions, c) || (!(c in i) || a !== i[c]) && (i[c] = a, o = !0);
    }
  if (r) {
    const c = Z(n), a = l || le;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Fr(
        s,
        c,
        f,
        a[f],
        e,
        !se(a, f)
      );
    }
  }
  return o;
}
function Fr(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const l = se(o, "default");
    if (l && i === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && z(c)) {
        const { propsDefaults: a } = s;
        if (n in a)
          i = a[n];
        else {
          const u = Dn(s);
          i = a[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        i = c;
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === $e(n)) && (i = !0));
  }
  return i;
}
function Ga(e, t, n = !1) {
  const i = t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!z(e)) {
    const u = (f) => {
      c = !0;
      const [p, E] = Ga(f, t, !0);
      ie(o, p), E && l.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return oe(e) && i.set(e, Ln), Ln;
  if (U(r))
    for (let u = 0; u < r.length; u++) {
      h.NODE_ENV !== "production" && !Q(r[u]) && w("props must be strings when using array syntax.", r[u]);
      const f = Ee(r[u]);
      Ul(f) && (o[f] = le);
    }
  else if (r) {
    h.NODE_ENV !== "production" && !oe(r) && w("invalid props options", r);
    for (const u in r) {
      const f = Ee(u);
      if (Ul(f)) {
        const p = r[u], E = o[f] = U(p) || z(p) ? { type: p } : ie({}, p);
        if (E) {
          const y = Kl(Boolean, E.type), T = Kl(String, E.type);
          E[
            0
            /* shouldCast */
          ] = y > -1, E[
            1
            /* shouldCastTrue */
          ] = T < 0 || y < T, (y > -1 || se(E, "default")) && l.push(f);
        }
      }
    }
  }
  const a = [o, l];
  return oe(e) && i.set(e, a), a;
}
function Ul(e) {
  return e[0] !== "$" && !Yt(e) ? !0 : (h.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Br(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function jl(e, t) {
  return Br(e) === Br(t);
}
function Kl(e, t) {
  return U(t) ? t.findIndex((n) => jl(n, e)) : z(t) && jl(t, e) ? 0 : -1;
}
function za(e, t, n) {
  const i = Z(t), s = n.propsOptions[0];
  for (const r in s) {
    let o = s[r];
    o != null && uh(
      r,
      i[r],
      o,
      h.NODE_ENV !== "production" ? pn(i) : i,
      !se(e, r) && !se(e, $e(r))
    );
  }
}
function uh(e, t, n, i, s) {
  const { type: r, required: o, validator: l, skipCheck: c } = n;
  if (o && s) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !o)) {
    if (r != null && r !== !0 && !c) {
      let a = !1;
      const u = U(r) ? r : [r], f = [];
      for (let p = 0; p < u.length && !a; p++) {
        const { valid: E, expectedType: y } = ph(t, u[p]);
        f.push(y || ""), a = E;
      }
      if (!a) {
        w(hh(e, t, f));
        return;
      }
    }
    l && !l(t, i) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const dh = /* @__PURE__ */ Ae(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ph(e, t) {
  let n;
  const i = Br(t);
  if (dh(i)) {
    const s = typeof e;
    n = s === i.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else
    i === "Object" ? n = oe(e) : i === "Array" ? n = U(e) : i === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: i
  };
}
function hh(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let i = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ot).join(" | ")}`;
  const s = n[0], r = uo(t), o = Wl(t, s), l = Wl(t, r);
  return n.length === 1 && ql(s) && !mh(s, r) && (i += ` with value ${o}`), i += `, got ${r} `, ql(r) && (i += `with value ${l}.`), i;
}
function Wl(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ql(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function mh(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ya = (e) => e[0] === "_" || e === "$stable", Bo = (e) => U(e) ? e.map(Je) : [Je(e)], gh = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ao((...s) => (h.NODE_ENV !== "production" && be && (!n || n.root === be.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Bo(t(...s))), n);
  return i._c = !1, i;
}, Xa = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Ya(s))
      continue;
    const r = e[s];
    if (z(r))
      t[s] = gh(s, r, i);
    else if (r != null) {
      h.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const o = Bo(r);
      t[s] = () => o;
    }
  }
}, Qa = (e, t) => {
  h.NODE_ENV !== "production" && !ii(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Bo(t);
  e.slots.default = () => n;
}, Eh = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Z(t), ys(t, "_", n)) : Xa(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Qa(e, t);
  ys(e.slots, ir, 1);
}, yh = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = le;
  if (i.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && en ? (ie(s, t), bt(e, "set", "$slots")) : n && l === 1 ? r = !1 : (ie(s, t), !n && l === 1 && delete s._) : (r = !t.$stable, Xa(t, s)), o = t;
  } else
    t && (Qa(e, t), o = { default: 1 });
  if (r)
    for (const l in s)
      !Ya(l) && o[l] == null && delete s[l];
};
function Cs(e, t, n, i, s = !1) {
  if (U(e)) {
    e.forEach(
      (p, E) => Cs(
        p,
        t && (U(t) ? t[E] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (vn(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? sr(i.component) || i.component.proxy : i.el, o = s ? null : r, { i: l, r: c } = e;
  if (h.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const a = t && t.r, u = l.refs === le ? l.refs = {} : l.refs, f = l.setupState;
  if (a != null && a !== c && (Q(a) ? (u[a] = null, se(f, a) && (f[a] = null)) : Oe(a) && (a.value = null)), z(c))
    vt(c, l, 12, [o, u]);
  else {
    const p = Q(c), E = Oe(c);
    if (p || E) {
      const y = () => {
        if (e.f) {
          const T = p ? se(f, c) ? f[c] : u[c] : c.value;
          s ? U(T) && fo(T, r) : U(T) ? T.includes(r) || T.push(r) : p ? (u[c] = [r], se(f, c) && (f[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else
          p ? (u[c] = o, se(f, c) && (f[c] = o)) : E ? (c.value = o, e.k && (u[e.k] = o)) : h.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
      };
      o ? (y.id = -1, Re(y, n)) : y();
    } else
      h.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Ct = !1;
const _h = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Nh = (e) => e.namespaceURI.includes("MathML"), rs = (e) => {
  if (_h(e))
    return "svg";
  if (Nh(e))
    return "mathml";
}, oi = (e) => e.nodeType === 8;
function bh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: i,
      createText: s,
      nextSibling: r,
      parentNode: o,
      remove: l,
      insert: c,
      createComment: a
    }
  } = e, u = (g, _) => {
    if (!_.hasChildNodes()) {
      h.NODE_ENV !== "production" && w(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, g, _), bs(), _._vnode = g;
      return;
    }
    Ct = !1, f(_.firstChild, g, null, null, null), bs(), _._vnode = g, Ct && console.error("Hydration completed but contains mismatches.");
  }, f = (g, _, N, I, D, b = !1) => {
    const v = oi(g) && g.data === "[", C = () => T(
      g,
      _,
      N,
      I,
      D,
      v
    ), { type: M, ref: V, shapeFlag: K, patchFlag: Y } = _;
    let te = g.nodeType;
    _.el = g, h.NODE_ENV !== "production" && ("__vnode" in g || Object.defineProperty(g, "__vnode", {
      value: _,
      enumerable: !1
    }), "__vueParentComponent" in g || Object.defineProperty(g, "__vueParentComponent", {
      value: N,
      enumerable: !1
    })), Y === -2 && (b = !1, _.dynamicChildren = null);
    let q = null;
    switch (M) {
      case rn:
        te !== 3 ? _.children === "" ? (c(_.el = s(""), o(g), g), q = g) : q = C() : (g.data !== _.children && (Ct = !0, h.NODE_ENV !== "production" && w(
          "Hydration text mismatch in",
          g.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            g.data
          )}
  - expected on client: ${JSON.stringify(_.children)}`
        ), g.data = _.children), q = r(g));
        break;
      case ve:
        O(g) ? (q = r(g), P(
          _.el = g.content.firstChild,
          g,
          N
        )) : te !== 8 || v ? q = C() : q = r(g);
        break;
      case tn:
        if (v && (g = r(g), te = g.nodeType), te === 1 || te === 3) {
          q = g;
          const G = !_.children.length;
          for (let W = 0; W < _.staticCount; W++)
            G && (_.children += q.nodeType === 1 ? q.outerHTML : q.data), W === _.staticCount - 1 && (_.anchor = q), q = r(q);
          return v ? r(q) : q;
        } else
          C();
        break;
      case Ce:
        v ? q = y(
          g,
          _,
          N,
          I,
          D,
          b
        ) : q = C();
        break;
      default:
        if (K & 1)
          (te !== 1 || _.type.toLowerCase() !== g.tagName.toLowerCase()) && !O(g) ? q = C() : q = p(
            g,
            _,
            N,
            I,
            D,
            b
          );
        else if (K & 6) {
          _.slotScopeIds = D;
          const G = o(g);
          if (v ? q = R(g) : oi(g) && g.data === "teleport start" ? q = R(g, g.data, "teleport end") : q = r(g), t(
            _,
            G,
            null,
            N,
            I,
            rs(G),
            b
          ), vn(_)) {
            let W;
            v ? (W = he(Ce), W.anchor = q ? q.previousSibling : G.lastChild) : W = g.nodeType === 3 ? Uo("") : he("div"), W.el = g, _.component.subTree = W;
          }
        } else
          K & 64 ? te !== 8 ? q = C() : q = _.type.hydrate(
            g,
            _,
            N,
            I,
            D,
            b,
            e,
            E
          ) : K & 128 ? q = _.type.hydrate(
            g,
            _,
            N,
            I,
            rs(o(g)),
            D,
            b,
            e,
            f
          ) : h.NODE_ENV !== "production" && w("Invalid HostVNode type:", M, `(${typeof M})`);
    }
    return V != null && Cs(V, null, I, _), q;
  }, p = (g, _, N, I, D, b) => {
    b = b || !!_.dynamicChildren;
    const { type: v, props: C, patchFlag: M, shapeFlag: V, dirs: K, transition: Y } = _, te = v === "input" || v === "option";
    if (h.NODE_ENV !== "production" || te || M !== -1) {
      K && Et(_, null, N, "created");
      let q = !1;
      if (O(g)) {
        q = nf(I, Y) && N && N.vnode.props && N.vnode.props.appear;
        const W = g.content.firstChild;
        q && Y.beforeEnter(W), P(W, g, N), _.el = g = W;
      }
      if (V & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let W = E(
          g.firstChild,
          _,
          g,
          N,
          I,
          D,
          b
        ), De = !1;
        for (; W; ) {
          Ct = !0, h.NODE_ENV !== "production" && !De && (w(
            "Hydration children mismatch on",
            g,
            `
Server rendered element contains more child nodes than client vdom.`
          ), De = !0);
          const et = W;
          W = W.nextSibling, l(et);
        }
      } else
        V & 8 && g.textContent !== _.children && (Ct = !0, h.NODE_ENV !== "production" && w(
          "Hydration text content mismatch on",
          g,
          `
  - rendered on server: ${g.textContent}
  - expected on client: ${_.children}`
        ), g.textContent = _.children);
      if (C)
        if (h.NODE_ENV !== "production" || te || !b || M & 48)
          for (const W in C)
            h.NODE_ENV !== "production" && vh(g, W, C[W], _, N) && (Ct = !0), (te && (W.endsWith("value") || W === "indeterminate") || It(W) && !Yt(W) || // force hydrate v-bind with .prop modifiers
            W[0] === ".") && i(
              g,
              W,
              null,
              C[W],
              void 0,
              void 0,
              N
            );
        else
          C.onClick && i(
            g,
            "onClick",
            null,
            C.onClick,
            void 0,
            void 0,
            N
          );
      let G;
      (G = C && C.onVnodeBeforeMount) && qe(G, N, _), K && Et(_, null, N, "beforeMount"), ((G = C && C.onVnodeMounted) || K || q) && Sa(() => {
        G && qe(G, N, _), q && Y.enter(g), K && Et(_, null, N, "mounted");
      }, I);
    }
    return g.nextSibling;
  }, E = (g, _, N, I, D, b, v) => {
    v = v || !!_.dynamicChildren;
    const C = _.children, M = C.length;
    let V = !1;
    for (let K = 0; K < M; K++) {
      const Y = v ? C[K] : C[K] = Je(C[K]);
      if (g)
        g = f(
          g,
          Y,
          I,
          D,
          b,
          v
        );
      else {
        if (Y.type === rn && !Y.children)
          continue;
        Ct = !0, h.NODE_ENV !== "production" && !V && (w(
          "Hydration children mismatch on",
          N,
          `
Server rendered element contains fewer child nodes than client vdom.`
        ), V = !0), n(
          null,
          Y,
          N,
          null,
          I,
          D,
          rs(N),
          b
        );
      }
    }
    return g;
  }, y = (g, _, N, I, D, b) => {
    const { slotScopeIds: v } = _;
    v && (D = D ? D.concat(v) : v);
    const C = o(g), M = E(
      r(g),
      _,
      C,
      N,
      I,
      D,
      b
    );
    return M && oi(M) && M.data === "]" ? r(_.anchor = M) : (Ct = !0, c(_.anchor = a("]"), C, M), M);
  }, T = (g, _, N, I, D, b) => {
    if (Ct = !0, h.NODE_ENV !== "production" && w(
      `Hydration node mismatch:
- rendered on server:`,
      g,
      g.nodeType === 3 ? "(text)" : oi(g) && g.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      _.type
    ), _.el = null, b) {
      const M = R(g);
      for (; ; ) {
        const V = r(g);
        if (V && V !== M)
          l(V);
        else
          break;
      }
    }
    const v = r(g), C = o(g);
    return l(g), n(
      null,
      _,
      C,
      v,
      N,
      I,
      rs(C),
      D
    ), v;
  }, R = (g, _ = "[", N = "]") => {
    let I = 0;
    for (; g; )
      if (g = r(g), g && oi(g) && (g.data === _ && I++, g.data === N)) {
        if (I === 0)
          return r(g);
        I--;
      }
    return g;
  }, P = (g, _, N) => {
    const I = _.parentNode;
    I && I.replaceChild(g, _);
    let D = N;
    for (; D; )
      D.vnode.el === _ && (D.vnode.el = D.subTree.el = g), D = D.parent;
  }, O = (g) => g.nodeType === 1 && g.tagName.toLowerCase() === "template";
  return [u, f];
}
function vh(e, t, n, i, s) {
  var r;
  let o, l, c, a;
  if (t === "class")
    c = e.getAttribute("class"), a = ni(n), Oh(Jl(c || ""), Jl(a)) || (o = l = "class");
  else if (t === "style") {
    c = e.getAttribute("style"), a = Q(n) ? n : Ku(An(n));
    const u = Gl(c), f = Gl(a);
    if (i.dirs)
      for (const { dir: E, value: y } of i.dirs)
        E.name === "show" && !y && f.set("display", "none");
    const p = s == null ? void 0 : s.subTree;
    if (i === p || (p == null ? void 0 : p.type) === Ce && p.children.includes(i)) {
      const E = (r = s == null ? void 0 : s.getCssVars) == null ? void 0 : r.call(s);
      for (const y in E)
        f.set(`--${y}`, String(E[y]));
    }
    Sh(u, f) || (o = l = "style");
  } else
    (e instanceof SVGElement && Zu(t) || e instanceof HTMLElement && (Ol(t) || Qu(t))) && (Ol(t) ? (c = e.hasAttribute(t), a = mo(n)) : n == null ? (c = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? c = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? c = e.value : c = !1, a = ed(n) ? String(n) : !1), c !== a && (o = "attribute", l = t));
  if (o) {
    const u = (E) => E === !1 ? "(not rendered)" : `${l}="${E}"`, f = `Hydration ${o} mismatch on`, p = `
  - rendered on server: ${u(c)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return w(f, e, p), !0;
  }
  return !1;
}
function Jl(e) {
  return new Set(e.trim().split(/\s+/));
}
function Oh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Gl(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [i, s] = n.split(":");
    i = i == null ? void 0 : i.trim(), s = s == null ? void 0 : s.trim(), i && s && t.set(i, s);
  }
  return t;
}
function Sh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, i] of e)
    if (i !== t.get(n))
      return !1;
  return !0;
}
let li, Gt;
function Tt(e, t) {
  e.appContext.config.performance && Ts() && Gt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && rp(e, t, Ts() ? Gt.now() : Date.now());
}
function wt(e, t) {
  if (e.appContext.config.performance && Ts()) {
    const n = `vue-${t}-${e.uid}`, i = n + ":end";
    Gt.mark(i), Gt.measure(
      `<${rr(e, e.type)}> ${t}`,
      n,
      i
    ), Gt.clearMarks(n), Gt.clearMarks(i);
  }
  h.NODE_ENV !== "production" && op(e, t, Ts() ? Gt.now() : Date.now());
}
function Ts() {
  return li !== void 0 || (typeof window < "u" && window.performance ? (li = !0, Gt = window.performance) : li = !1), li;
}
function Ch() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = Sa;
function Za(e) {
  return tf(e);
}
function ef(e) {
  return tf(e, bh);
}
function tf(e, t) {
  Ch();
  const n = ho();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Vo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: u,
    parentNode: f,
    nextSibling: p,
    setScopeId: E = pe,
    insertStaticContent: y
  } = e, T = (d, m, S, x = null, A = null, L = null, H = void 0, $ = null, F = h.NODE_ENV !== "production" && en ? !1 : !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !ut(d, m) && (x = Xi(d), $t(d, A, L, !0), d = null), m.patchFlag === -2 && (F = !1, m.dynamicChildren = null);
    const { type: k, ref: j, shapeFlag: X } = m;
    switch (k) {
      case rn:
        R(d, m, S, x);
        break;
      case ve:
        P(d, m, S, x);
        break;
      case tn:
        d == null ? O(m, S, x, H) : h.NODE_ENV !== "production" && g(d, m, S, H);
        break;
      case Ce:
        K(
          d,
          m,
          S,
          x,
          A,
          L,
          H,
          $,
          F
        );
        break;
      default:
        X & 1 ? I(
          d,
          m,
          S,
          x,
          A,
          L,
          H,
          $,
          F
        ) : X & 6 ? Y(
          d,
          m,
          S,
          x,
          A,
          L,
          H,
          $,
          F
        ) : X & 64 || X & 128 ? k.process(
          d,
          m,
          S,
          x,
          A,
          L,
          H,
          $,
          F,
          Rn
        ) : h.NODE_ENV !== "production" && w("Invalid VNode type:", k, `(${typeof k})`);
    }
    j != null && A && Cs(j, d && d.ref, L, m || d, !m);
  }, R = (d, m, S, x) => {
    if (d == null)
      i(
        m.el = l(m.children),
        S,
        x
      );
    else {
      const A = m.el = d.el;
      m.children !== d.children && a(A, m.children);
    }
  }, P = (d, m, S, x) => {
    d == null ? i(
      m.el = c(m.children || ""),
      S,
      x
    ) : m.el = d.el;
  }, O = (d, m, S, x) => {
    [d.el, d.anchor] = y(
      d.children,
      m,
      S,
      x,
      d.el,
      d.anchor
    );
  }, g = (d, m, S, x) => {
    if (m.children !== d.children) {
      const A = p(d.anchor);
      N(d), [m.el, m.anchor] = y(
        m.children,
        S,
        A,
        x
      );
    } else
      m.el = d.el, m.anchor = d.anchor;
  }, _ = ({ el: d, anchor: m }, S, x) => {
    let A;
    for (; d && d !== m; )
      A = p(d), i(d, S, x), d = A;
    i(m, S, x);
  }, N = ({ el: d, anchor: m }) => {
    let S;
    for (; d && d !== m; )
      S = p(d), s(d), d = S;
    s(m);
  }, I = (d, m, S, x, A, L, H, $, F) => {
    m.type === "svg" ? H = "svg" : m.type === "math" && (H = "mathml"), d == null ? D(
      m,
      S,
      x,
      A,
      L,
      H,
      $,
      F
    ) : C(
      d,
      m,
      A,
      L,
      H,
      $,
      F
    );
  }, D = (d, m, S, x, A, L, H, $) => {
    let F, k;
    const { props: j, shapeFlag: X, transition: J, dirs: ee } = d;
    if (F = d.el = o(
      d.type,
      L,
      j && j.is,
      j
    ), X & 8 ? u(F, d.children) : X & 16 && v(
      d.children,
      F,
      null,
      x,
      A,
      br(d, L),
      H,
      $
    ), ee && Et(d, null, x, "created"), b(F, d, d.scopeId, H, x), j) {
      for (const fe in j)
        fe !== "value" && !Yt(fe) && r(
          F,
          fe,
          null,
          j[fe],
          L,
          d.children,
          x,
          A,
          St
        );
      "value" in j && r(F, "value", null, j.value, L), (k = j.onVnodeBeforeMount) && qe(k, x, d);
    }
    h.NODE_ENV !== "production" && (Object.defineProperty(F, "__vnode", {
      value: d,
      enumerable: !1
    }), Object.defineProperty(F, "__vueParentComponent", {
      value: x,
      enumerable: !1
    })), ee && Et(d, null, x, "beforeMount");
    const re = nf(A, J);
    re && J.beforeEnter(F), i(F, m, S), ((k = j && j.onVnodeMounted) || re || ee) && Re(() => {
      k && qe(k, x, d), re && J.enter(F), ee && Et(d, null, x, "mounted");
    }, A);
  }, b = (d, m, S, x, A) => {
    if (S && E(d, S), x)
      for (let L = 0; L < x.length; L++)
        E(d, x[L]);
    if (A) {
      let L = A.subTree;
      if (h.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && (L = Xs(L.children) || L), m === L) {
        const H = A.vnode;
        b(
          d,
          H,
          H.scopeId,
          H.slotScopeIds,
          A.parent
        );
      }
    }
  }, v = (d, m, S, x, A, L, H, $, F = 0) => {
    for (let k = F; k < d.length; k++) {
      const j = d[k] = $ ? Kt(d[k]) : Je(d[k]);
      T(
        null,
        j,
        m,
        S,
        x,
        A,
        L,
        H,
        $
      );
    }
  }, C = (d, m, S, x, A, L, H) => {
    const $ = m.el = d.el;
    let { patchFlag: F, dynamicChildren: k, dirs: j } = m;
    F |= d.patchFlag & 16;
    const X = d.props || le, J = m.props || le;
    let ee;
    if (S && fn(S, !1), (ee = J.onVnodeBeforeUpdate) && qe(ee, S, m, d), j && Et(m, d, S, "beforeUpdate"), S && fn(S, !0), h.NODE_ENV !== "production" && en && (F = 0, H = !1, k = null), k ? (M(
      d.dynamicChildren,
      k,
      $,
      S,
      x,
      br(m, A),
      L
    ), h.NODE_ENV !== "production" && Ni(d, m)) : H || De(
      d,
      m,
      $,
      null,
      S,
      x,
      br(m, A),
      L,
      !1
    ), F > 0) {
      if (F & 16)
        V(
          $,
          m,
          X,
          J,
          S,
          x,
          A
        );
      else if (F & 2 && X.class !== J.class && r($, "class", null, J.class, A), F & 4 && r($, "style", X.style, J.style, A), F & 8) {
        const re = m.dynamicProps;
        for (let fe = 0; fe < re.length; fe++) {
          const me = re[fe], Ve = X[me], ct = J[me];
          (ct !== Ve || me === "value") && r(
            $,
            me,
            Ve,
            ct,
            A,
            d.children,
            S,
            x,
            St
          );
        }
      }
      F & 1 && d.children !== m.children && u($, m.children);
    } else
      !H && k == null && V(
        $,
        m,
        X,
        J,
        S,
        x,
        A
      );
    ((ee = J.onVnodeUpdated) || j) && Re(() => {
      ee && qe(ee, S, m, d), j && Et(m, d, S, "updated");
    }, x);
  }, M = (d, m, S, x, A, L, H) => {
    for (let $ = 0; $ < m.length; $++) {
      const F = d[$], k = m[$], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ut(F, k) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 70) ? f(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      T(
        F,
        k,
        j,
        null,
        x,
        A,
        L,
        H,
        !0
      );
    }
  }, V = (d, m, S, x, A, L, H) => {
    if (S !== x) {
      if (S !== le)
        for (const $ in S)
          !Yt($) && !($ in x) && r(
            d,
            $,
            S[$],
            null,
            H,
            m.children,
            A,
            L,
            St
          );
      for (const $ in x) {
        if (Yt($))
          continue;
        const F = x[$], k = S[$];
        F !== k && $ !== "value" && r(
          d,
          $,
          k,
          F,
          H,
          m.children,
          A,
          L,
          St
        );
      }
      "value" in x && r(d, "value", S.value, x.value, H);
    }
  }, K = (d, m, S, x, A, L, H, $, F) => {
    const k = m.el = d ? d.el : l(""), j = m.anchor = d ? d.anchor : l("");
    let { patchFlag: X, dynamicChildren: J, slotScopeIds: ee } = m;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (en || X & 2048) && (X = 0, F = !1, J = null), ee && ($ = $ ? $.concat(ee) : ee), d == null ? (i(k, S, x), i(j, S, x), v(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      S,
      j,
      A,
      L,
      H,
      $,
      F
    )) : X > 0 && X & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (M(
      d.dynamicChildren,
      J,
      S,
      A,
      L,
      H,
      $
    ), h.NODE_ENV !== "production" ? Ni(d, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || A && m === A.subTree) && Ni(
        d,
        m,
        !0
        /* shallow */
      )
    )) : De(
      d,
      m,
      S,
      j,
      A,
      L,
      H,
      $,
      F
    );
  }, Y = (d, m, S, x, A, L, H, $, F) => {
    m.slotScopeIds = $, d == null ? m.shapeFlag & 512 ? A.ctx.activate(
      m,
      S,
      x,
      H,
      F
    ) : te(
      m,
      S,
      x,
      A,
      L,
      H,
      F
    ) : q(d, m, F);
  }, te = (d, m, S, x, A, L, H) => {
    const $ = d.component = hf(
      d,
      x,
      A
    );
    if (h.NODE_ENV !== "production" && $.type.__hmrId && Xd($), h.NODE_ENV !== "production" && (mi(d), Tt($, "mount")), ii(d) && ($.ctx.renderer = Rn), h.NODE_ENV !== "production" && Tt($, "init"), gf($), h.NODE_ENV !== "production" && wt($, "init"), $.asyncDep) {
      if (A && A.registerDep($, G), !d.el) {
        const F = $.subTree = he(ve);
        P(null, F, m, S);
      }
    } else
      G(
        $,
        d,
        m,
        S,
        A,
        L,
        H
      );
    h.NODE_ENV !== "production" && (gi(), wt($, "mount"));
  }, q = (d, m, S) => {
    const x = m.component = d.component;
    if (dp(d, m, S))
      if (x.asyncDep && !x.asyncResolved) {
        h.NODE_ENV !== "production" && mi(m), W(x, m, S), h.NODE_ENV !== "production" && gi();
        return;
      } else
        x.next = m, zd(x.update), x.effect.dirty = !0, x.update();
    else
      m.el = d.el, x.vnode = m;
  }, G = (d, m, S, x, A, L, H) => {
    const $ = () => {
      if (d.isMounted) {
        let { next: j, bu: X, u: J, parent: ee, vnode: re } = d;
        {
          const Pn = sf(d);
          if (Pn) {
            j && (j.el = re.el, W(d, j, H)), Pn.asyncDep.then(() => {
              d.isUnmounted || $();
            });
            return;
          }
        }
        let fe = j, me;
        h.NODE_ENV !== "production" && mi(j || d.vnode), fn(d, !1), j ? (j.el = re.el, W(d, j, H)) : j = re, X && Jt(X), (me = j.props && j.props.onVnodeBeforeUpdate) && qe(me, ee, j, re), fn(d, !0), h.NODE_ENV !== "production" && Tt(d, "render");
        const Ve = us(d);
        h.NODE_ENV !== "production" && wt(d, "render");
        const ct = d.subTree;
        d.subTree = Ve, h.NODE_ENV !== "production" && Tt(d, "patch"), T(
          ct,
          Ve,
          // parent may have changed if it's in a teleport
          f(ct.el),
          // anchor may have changed if it's in a fragment
          Xi(ct),
          d,
          A,
          L
        ), h.NODE_ENV !== "production" && wt(d, "patch"), j.el = Ve.el, fe === null && Io(d, Ve.el), J && Re(J, A), (me = j.props && j.props.onVnodeUpdated) && Re(
          () => qe(me, ee, j, re),
          A
        ), h.NODE_ENV !== "production" && Ea(d), h.NODE_ENV !== "production" && gi();
      } else {
        let j;
        const { el: X, props: J } = m, { bm: ee, m: re, parent: fe } = d, me = vn(m);
        if (fn(d, !1), ee && Jt(ee), !me && (j = J && J.onVnodeBeforeMount) && qe(j, fe, m), fn(d, !0), X && pr) {
          const Ve = () => {
            h.NODE_ENV !== "production" && Tt(d, "render"), d.subTree = us(d), h.NODE_ENV !== "production" && wt(d, "render"), h.NODE_ENV !== "production" && Tt(d, "hydrate"), pr(
              X,
              d.subTree,
              d,
              A,
              null
            ), h.NODE_ENV !== "production" && wt(d, "hydrate");
          };
          me ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !d.isUnmounted && Ve()
          ) : Ve();
        } else {
          h.NODE_ENV !== "production" && Tt(d, "render");
          const Ve = d.subTree = us(d);
          h.NODE_ENV !== "production" && wt(d, "render"), h.NODE_ENV !== "production" && Tt(d, "patch"), T(
            null,
            Ve,
            S,
            x,
            d,
            A,
            L
          ), h.NODE_ENV !== "production" && wt(d, "patch"), m.el = Ve.el;
        }
        if (re && Re(re, A), !me && (j = J && J.onVnodeMounted)) {
          const Ve = m;
          Re(
            () => qe(j, fe, Ve),
            A
          );
        }
        (m.shapeFlag & 256 || fe && vn(fe.vnode) && fe.vnode.shapeFlag & 256) && d.a && Re(d.a, A), d.isMounted = !0, h.NODE_ENV !== "production" && kr(d), m = S = x = null;
      }
    }, F = d.effect = new Wn(
      $,
      pe,
      () => Ui(k),
      d.scope
      // track it in component's effect scope
    ), k = d.update = () => {
      F.dirty && F.run();
    };
    k.id = d.uid, fn(d, !0), h.NODE_ENV !== "production" && (F.onTrack = d.rtc ? (j) => Jt(d.rtc, j) : void 0, F.onTrigger = d.rtg ? (j) => Jt(d.rtg, j) : void 0, k.ownerInstance = d), k();
  }, W = (d, m, S) => {
    m.component = d;
    const x = d.vnode.props;
    d.vnode = m, d.next = null, fh(d, m.props, x, S), yh(d, m.children, S), ln(), Al(d), cn();
  }, De = (d, m, S, x, A, L, H, $, F = !1) => {
    const k = d && d.children, j = d ? d.shapeFlag : 0, X = m.children, { patchFlag: J, shapeFlag: ee } = m;
    if (J > 0) {
      if (J & 128) {
        lt(
          k,
          X,
          S,
          x,
          A,
          L,
          H,
          $,
          F
        );
        return;
      } else if (J & 256) {
        et(
          k,
          X,
          S,
          x,
          A,
          L,
          H,
          $,
          F
        );
        return;
      }
    }
    ee & 8 ? (j & 16 && St(k, A, L), X !== k && u(S, X)) : j & 16 ? ee & 16 ? lt(
      k,
      X,
      S,
      x,
      A,
      L,
      H,
      $,
      F
    ) : St(k, A, L, !0) : (j & 8 && u(S, ""), ee & 16 && v(
      X,
      S,
      x,
      A,
      L,
      H,
      $,
      F
    ));
  }, et = (d, m, S, x, A, L, H, $, F) => {
    d = d || Ln, m = m || Ln;
    const k = d.length, j = m.length, X = Math.min(k, j);
    let J;
    for (J = 0; J < X; J++) {
      const ee = m[J] = F ? Kt(m[J]) : Je(m[J]);
      T(
        d[J],
        ee,
        S,
        null,
        A,
        L,
        H,
        $,
        F
      );
    }
    k > j ? St(
      d,
      A,
      L,
      !0,
      !1,
      X
    ) : v(
      m,
      S,
      x,
      A,
      L,
      H,
      $,
      F,
      X
    );
  }, lt = (d, m, S, x, A, L, H, $, F) => {
    let k = 0;
    const j = m.length;
    let X = d.length - 1, J = j - 1;
    for (; k <= X && k <= J; ) {
      const ee = d[k], re = m[k] = F ? Kt(m[k]) : Je(m[k]);
      if (ut(ee, re))
        T(
          ee,
          re,
          S,
          null,
          A,
          L,
          H,
          $,
          F
        );
      else
        break;
      k++;
    }
    for (; k <= X && k <= J; ) {
      const ee = d[X], re = m[J] = F ? Kt(m[J]) : Je(m[J]);
      if (ut(ee, re))
        T(
          ee,
          re,
          S,
          null,
          A,
          L,
          H,
          $,
          F
        );
      else
        break;
      X--, J--;
    }
    if (k > X) {
      if (k <= J) {
        const ee = J + 1, re = ee < j ? m[ee].el : x;
        for (; k <= J; )
          T(
            null,
            m[k] = F ? Kt(m[k]) : Je(m[k]),
            S,
            re,
            A,
            L,
            H,
            $,
            F
          ), k++;
      }
    } else if (k > J)
      for (; k <= X; )
        $t(d[k], A, L, !0), k++;
    else {
      const ee = k, re = k, fe = /* @__PURE__ */ new Map();
      for (k = re; k <= J; k++) {
        const He = m[k] = F ? Kt(m[k]) : Je(m[k]);
        He.key != null && (h.NODE_ENV !== "production" && fe.has(He.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(He.key),
          "Make sure keys are unique."
        ), fe.set(He.key, k));
      }
      let me, Ve = 0;
      const ct = J - re + 1;
      let Pn = !1, El = 0;
      const ri = new Array(ct);
      for (k = 0; k < ct; k++)
        ri[k] = 0;
      for (k = ee; k <= X; k++) {
        const He = d[k];
        if (Ve >= ct) {
          $t(He, A, L, !0);
          continue;
        }
        let gt;
        if (He.key != null)
          gt = fe.get(He.key);
        else
          for (me = re; me <= J; me++)
            if (ri[me - re] === 0 && ut(He, m[me])) {
              gt = me;
              break;
            }
        gt === void 0 ? $t(He, A, L, !0) : (ri[gt - re] = k + 1, gt >= El ? El = gt : Pn = !0, T(
          He,
          m[gt],
          S,
          null,
          A,
          L,
          H,
          $,
          F
        ), Ve++);
      }
      const yl = Pn ? Th(ri) : Ln;
      for (me = yl.length - 1, k = ct - 1; k >= 0; k--) {
        const He = re + k, gt = m[He], _l = He + 1 < j ? m[He + 1].el : x;
        ri[k] === 0 ? T(
          null,
          gt,
          S,
          _l,
          A,
          L,
          H,
          $,
          F
        ) : Pn && (me < 0 || k !== yl[me] ? kn(gt, S, _l, 2) : me--);
      }
    }
  }, kn = (d, m, S, x, A = null) => {
    const { el: L, type: H, transition: $, children: F, shapeFlag: k } = d;
    if (k & 6) {
      kn(d.component.subTree, m, S, x);
      return;
    }
    if (k & 128) {
      d.suspense.move(m, S, x);
      return;
    }
    if (k & 64) {
      H.move(d, m, S, Rn);
      return;
    }
    if (H === Ce) {
      i(L, m, S);
      for (let X = 0; X < F.length; X++)
        kn(F[X], m, S, x);
      i(d.anchor, m, S);
      return;
    }
    if (H === tn) {
      _(d, m, S);
      return;
    }
    if (x !== 2 && k & 1 && $)
      if (x === 0)
        $.beforeEnter(L), i(L, m, S), Re(() => $.enter(L), A);
      else {
        const { leave: X, delayLeave: J, afterLeave: ee } = $, re = () => i(L, m, S), fe = () => {
          X(L, () => {
            re(), ee && ee();
          });
        };
        J ? J(L, re, fe) : fe();
      }
    else
      i(L, m, S);
  }, $t = (d, m, S, x = !1, A = !1) => {
    const {
      type: L,
      props: H,
      ref: $,
      children: F,
      dynamicChildren: k,
      shapeFlag: j,
      patchFlag: X,
      dirs: J
    } = d;
    if ($ != null && Cs($, null, S, d, !0), j & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const ee = j & 1 && J, re = !vn(d);
    let fe;
    if (re && (fe = H && H.onVnodeBeforeUnmount) && qe(fe, m, d), j & 6)
      Iu(d.component, S, x);
    else {
      if (j & 128) {
        d.suspense.unmount(S, x);
        return;
      }
      ee && Et(d, null, m, "beforeUnmount"), j & 64 ? d.type.remove(
        d,
        m,
        S,
        A,
        Rn,
        x
      ) : k && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Ce || X > 0 && X & 64) ? St(
        k,
        m,
        S,
        !1,
        !0
      ) : (L === Ce && X & 384 || !A && j & 16) && St(F, m, S), x && fr(d);
    }
    (re && (fe = H && H.onVnodeUnmounted) || ee) && Re(() => {
      fe && qe(fe, m, d), ee && Et(d, null, m, "unmounted");
    }, S);
  }, fr = (d) => {
    const { type: m, el: S, anchor: x, transition: A } = d;
    if (m === Ce) {
      h.NODE_ENV !== "production" && d.patchFlag > 0 && d.patchFlag & 2048 && A && !A.persisted ? d.children.forEach((H) => {
        H.type === ve ? s(H.el) : fr(H);
      }) : Au(S, x);
      return;
    }
    if (m === tn) {
      N(d);
      return;
    }
    const L = () => {
      s(S), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (d.shapeFlag & 1 && A && !A.persisted) {
      const { leave: H, delayLeave: $ } = A, F = () => H(S, L);
      $ ? $(d.el, L, F) : F();
    } else
      L();
  }, Au = (d, m) => {
    let S;
    for (; d !== m; )
      S = p(d), s(d), d = S;
    s(m);
  }, Iu = (d, m, S) => {
    h.NODE_ENV !== "production" && d.type.__hmrId && Qd(d);
    const { bum: x, scope: A, update: L, subTree: H, um: $ } = d;
    x && Jt(x), A.stop(), L && (L.active = !1, $t(H, d, m, S)), $ && Re($, m), Re(() => {
      d.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), h.NODE_ENV !== "production" && sp(d);
  }, St = (d, m, S, x = !1, A = !1, L = 0) => {
    for (let H = L; H < d.length; H++)
      $t(d[H], m, S, x, A);
  }, Xi = (d) => d.shapeFlag & 6 ? Xi(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : p(d.anchor || d.el);
  let ur = !1;
  const gl = (d, m, S) => {
    d == null ? m._vnode && $t(m._vnode, null, null, !0) : T(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      S
    ), ur || (ur = !0, Al(), bs(), ur = !1), m._vnode = d;
  }, Rn = {
    p: T,
    um: $t,
    m: kn,
    r: fr,
    mt: te,
    mc: v,
    pc: De,
    pbc: M,
    n: Xi,
    o: e
  };
  let dr, pr;
  return t && ([dr, pr] = t(
    Rn
  )), {
    render: gl,
    hydrate: dr,
    createApp: oh(gl, dr)
  };
}
function br({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function nf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ni(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (U(i) && U(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Kt(s[r]), l.el = o.el), n || Ni(o, l)), l.type === rn && (l.el = o.el), h.NODE_ENV !== "production" && l.type === ve && !l.el && (l.el = o.el);
    }
}
function Th(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, l;
  const c = e.length;
  for (i = 0; i < c; i++) {
    const a = e[i];
    if (a !== 0) {
      if (s = n[n.length - 1], e[s] < a) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < a ? r = l + 1 : o = l;
      a < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function sf(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : sf(t);
}
const wh = (e) => e.__isTeleport, jn = (e) => e && (e.disabled || e.disabled === ""), zl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Yl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Hr = (e, t) => {
  const n = e && e.to;
  if (Q(n))
    if (t) {
      const i = t(n);
      return i || h.NODE_ENV !== "production" && w(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), i;
    } else
      return h.NODE_ENV !== "production" && w(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return h.NODE_ENV !== "production" && !n && !jn(e) && w(`Invalid Teleport target: ${n}`), n;
}, Dh = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, s, r, o, l, c, a) {
    const {
      mc: u,
      pc: f,
      pbc: p,
      o: { insert: E, querySelector: y, createText: T, createComment: R }
    } = a, P = jn(t.props);
    let { shapeFlag: O, children: g, dynamicChildren: _ } = t;
    if (h.NODE_ENV !== "production" && en && (c = !1, _ = null), e == null) {
      const N = t.el = h.NODE_ENV !== "production" ? R("teleport start") : T(""), I = t.anchor = h.NODE_ENV !== "production" ? R("teleport end") : T("");
      E(N, n, i), E(I, n, i);
      const D = t.target = Hr(t.props, y), b = t.targetAnchor = T("");
      D ? (E(b, D), o === "svg" || zl(D) ? o = "svg" : (o === "mathml" || Yl(D)) && (o = "mathml")) : h.NODE_ENV !== "production" && !P && w("Invalid Teleport target on mount:", D, `(${typeof D})`);
      const v = (C, M) => {
        O & 16 && u(
          g,
          C,
          M,
          s,
          r,
          o,
          l,
          c
        );
      };
      P ? v(n, I) : D && v(D, b);
    } else {
      t.el = e.el;
      const N = t.anchor = e.anchor, I = t.target = e.target, D = t.targetAnchor = e.targetAnchor, b = jn(e.props), v = b ? n : I, C = b ? N : D;
      if (o === "svg" || zl(I) ? o = "svg" : (o === "mathml" || Yl(I)) && (o = "mathml"), _ ? (p(
        e.dynamicChildren,
        _,
        v,
        s,
        r,
        o,
        l
      ), Ni(e, t, !0)) : c || f(
        e,
        t,
        v,
        C,
        s,
        r,
        o,
        l,
        !1
      ), P)
        b ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : os(
          t,
          n,
          N,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = t.target = Hr(
          t.props,
          y
        );
        M ? os(
          t,
          M,
          null,
          a,
          0
        ) : h.NODE_ENV !== "production" && w(
          "Invalid Teleport target on update:",
          I,
          `(${typeof I})`
        );
      } else
        b && os(
          t,
          I,
          D,
          a,
          1
        );
    }
    rf(t);
  },
  remove(e, t, n, i, { um: s, o: { remove: r } }, o) {
    const { shapeFlag: l, children: c, anchor: a, targetAnchor: u, target: f, props: p } = e;
    if (f && r(u), o && r(a), l & 16) {
      const E = o || !jn(p);
      for (let y = 0; y < c.length; y++) {
        const T = c[y];
        s(
          T,
          t,
          n,
          E,
          !!T.dynamicChildren
        );
      }
    }
  },
  move: os,
  hydrate: Vh
};
function os(e, t, n, { o: { insert: i }, m: s }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: a, props: u } = e, f = r === 2;
  if (f && i(o, t, n), (!f || jn(u)) && c & 16)
    for (let p = 0; p < a.length; p++)
      s(
        a[p],
        t,
        n,
        2
      );
  f && i(l, t, n);
}
function Vh(e, t, n, i, s, r, {
  o: { nextSibling: o, parentNode: l, querySelector: c }
}, a) {
  const u = t.target = Hr(
    t.props,
    c
  );
  if (u) {
    const f = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (jn(t.props))
        t.anchor = a(
          o(e),
          t,
          l(e),
          n,
          i,
          s,
          r
        ), t.targetAnchor = f;
      else {
        t.anchor = o(e);
        let p = f;
        for (; p; )
          if (p = o(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && o(t.targetAnchor);
            break;
          }
        a(
          f,
          t,
          u,
          n,
          i,
          s,
          r
        );
      }
    rf(t);
  }
  return t.anchor && o(t.anchor);
}
const xh = Dh;
function rf(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Ce = Symbol.for("v-fgt"), rn = Symbol.for("v-txt"), ve = Symbol.for("v-cmt"), tn = Symbol.for("v-stc"), bi = [];
let Ge = null;
function Jn(e = !1) {
  bi.push(Ge = e ? null : []);
}
function of() {
  bi.pop(), Ge = bi[bi.length - 1] || null;
}
let wn = 1;
function Ur(e) {
  wn += e;
}
function lf(e) {
  return e.dynamicChildren = wn > 0 ? Ge || Ln : null, of(), wn > 0 && Ge && Ge.push(e), e;
}
function jr(e, t, n, i, s, r) {
  return lf(
    at(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function Ho(e, t, n, i, s) {
  return lf(
    he(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function Rt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ut(e, t) {
  return h.NODE_ENV !== "production" && t.shapeFlag & 6 && $n.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
let Kr;
function Ah(e) {
  Kr = e;
}
const Ih = (...e) => af(
  ...Kr ? Kr(e, ge) : e
), ir = "__vInternal", cf = ({ key: e }) => e ?? null, ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || Oe(e) || z(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function at(e, t = null, n = null, i = 0, s = null, r = e === Ce ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && cf(t),
    ref: t && ds(t),
    scopeId: Ys,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return l ? (jo(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Q(n) ? 8 : 16), h.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), wn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ge.push(c), c;
}
const he = h.NODE_ENV !== "production" ? Ih : af;
function af(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === ko) && (h.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = ve), Rt(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jo(l, n), wn > 0 && !r && Ge && (l.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = l : Ge.push(l)), l.patchFlag |= -2, l;
  }
  if (Nf(e) && (e = e.__vccOpts), t) {
    t = ff(t);
    let { class: l, style: c } = t;
    l && !Q(l) && (t.class = ni(l)), oe(c) && (Ti(c) && !U(c) && (c = ie({}, c)), t.style = An(c));
  }
  const o = Q(e) ? 1 : Oa(e) ? 128 : wh(e) ? 64 : oe(e) ? 4 : z(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && o & 4 && Ti(e) && (e = Z(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), at(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function ff(e) {
  return e ? Ti(e) || ir in e ? ie({}, e) : e : null;
}
function ot(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: r, children: o } = e, l = t ? pf(i || {}, t) : i;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && cf(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? U(s) ? s.concat(ds(t)) : [s, ds(t)] : ds(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && r === -1 && U(o) ? o.map(uf) : o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function uf(e) {
  const t = ot(e);
  return U(e.children) && (t.children = e.children.map(uf)), t;
}
function Uo(e = " ", t = 0) {
  return he(rn, null, e, t);
}
function kh(e, t) {
  const n = he(tn, null, e);
  return n.staticCount = t, n;
}
function df(e = "", t = !1) {
  return t ? (Jn(), Ho(ve, null, e)) : he(ve, null, e);
}
function Je(e) {
  return e == null || typeof e == "boolean" ? he(ve) : U(e) ? he(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Kt(e) : he(rn, null, String(e));
}
function Kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function jo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), jo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(ir in t) ? t._ctx = ge : s === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    z(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Uo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = ni([t.class, i.class]));
      else if (s === "style")
        t.style = An([t.style, i.style]);
      else if (It(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(U(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else
        s !== "" && (t[s] = i[s]);
  }
  return t;
}
function qe(e, t, n, i = null) {
  Qe(e, t, 7, [
    n,
    i
  ]);
}
const Rh = Wa();
let Ph = 0;
function hf(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || Rh, r = {
    uid: Ph++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new go(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ga(i, s),
    emitsOptions: _a(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: le,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: le,
    data: le,
    props: le,
    attrs: le,
    slots: le,
    refs: le,
    setupState: le,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return h.NODE_ENV !== "production" ? r.ctx = $p(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = cp.bind(null, r), e.ce && e.ce(r), r;
}
let be = null;
const Mt = () => be || ge;
let ws, Wr;
{
  const e = ho(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  ws = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), Wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => qi = n
  );
}
const Dn = (e) => {
  const t = be;
  return ws(e), e.scope.on(), () => {
    e.scope.off(), ws(t);
  };
}, qr = () => {
  be && be.scope.off(), ws(null);
}, Mh = /* @__PURE__ */ Ae("slot,component");
function Jr(e, t) {
  const n = t.isNativeTag || hi;
  (Mh(e) || n(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function mf(e) {
  return e.vnode.shapeFlag & 4;
}
let qi = !1;
function gf(e, t = !1) {
  t && Wr(t);
  const { props: n, children: i } = e.vnode, s = mf(e);
  ch(e, n, s, t), Eh(e, i);
  const r = s ? $h(e, t) : void 0;
  return t && Wr(!1), r;
}
function $h(e, t) {
  var n;
  const i = e.type;
  if (h.NODE_ENV !== "production") {
    if (i.name && Jr(i.name, e.appContext.config), i.components) {
      const r = Object.keys(i.components);
      for (let o = 0; o < r.length; o++)
        Jr(r[o], e.appContext.config);
    }
    if (i.directives) {
      const r = Object.keys(i.directives);
      for (let o = 0; o < r.length; o++)
        xa(r[o]);
    }
    i.compilerOptions && Ko() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = bo(new Proxy(e.ctx, yi)), h.NODE_ENV !== "production" && Lp(e);
  const { setup: s } = i;
  if (s) {
    const r = e.setupContext = s.length > 1 ? _f(e) : null, o = Dn(e);
    ln();
    const l = vt(
      s,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? pn(e.props) : e.props,
        r
      ]
    );
    if (cn(), o(), Bs(l)) {
      if (l.then(qr, qr), t)
        return l.then((c) => {
          Gr(e, c, t);
        }).catch((c) => {
          an(c, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = i.name) != null ? n : "Anonymous";
        w(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Gr(e, l, t);
  } else
    yf(e, t);
}
function Gr(e, t, n) {
  z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) ? (h.NODE_ENV !== "production" && Rt(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Co(t), h.NODE_ENV !== "production" && Fp(e)) : h.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yf(e, n);
}
let vi, zr;
function Ef(e) {
  vi = e, zr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Mp));
  };
}
const Ko = () => !vi;
function yf(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && vi && !i.render) {
      const s = i.template || Fo(e).template;
      if (s) {
        h.NODE_ENV !== "production" && Tt(e, "compile");
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = i, a = ie(
          ie(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        i.render = vi(s, a), h.NODE_ENV !== "production" && wt(e, "compile");
      }
    }
    e.render = i.render || pe, zr && zr(e);
  }
  {
    const s = Dn(e);
    ln();
    try {
      eh(e);
    } finally {
      cn(), s();
    }
  }
  h.NODE_ENV !== "production" && !i.render && e.render === pe && !t && (!vi && i.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function."));
}
function Xl(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    h.NODE_ENV !== "production" ? {
      get(t, n) {
        return vs(), Pe(e, "get", "$attrs"), t[n];
      },
      set() {
        return w("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return w("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return Pe(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Lh(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return Pe(e, "get", "$slots"), t[n];
    }
  }));
}
function _f(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let i = typeof n;
      i === "object" && (U(n) ? i = "array" : Oe(n) && (i = "ref")), i !== "object" && w(
        `expose() should be passed a plain object, received ${i}.`
      );
    }
    e.exposed = n || {};
  };
  return h.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return Xl(e);
    },
    get slots() {
      return Lh(e);
    },
    get emit() {
      return (n, ...i) => e.emit(n, ...i);
    },
    expose: t
  }) : {
    get attrs() {
      return Xl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Co(bo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in On)
          return On[n](e);
      },
      has(t, n) {
        return n in t || n in On;
      }
    }));
}
const Fh = /(?:^|[-_])(\w)/g, Bh = (e) => e.replace(Fh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ri(e, t = !0) {
  return z(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function rr(e, t, n = !1) {
  let i = Ri(t);
  if (!i && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (i = s[1]);
  }
  if (!i && e && e.parent) {
    const s = (r) => {
      for (const o in r)
        if (r[o] === t)
          return o;
    };
    i = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return i ? Bh(i) : n ? "App" : "Anonymous";
}
function Nf(e) {
  return z(e) && "__vccOpts" in e;
}
const bf = (e, t) => Dd(e, t, qi);
function Hh(e, t, n = le) {
  const i = Mt();
  if (h.NODE_ENV !== "production" && !i)
    return w("useModel() called without active instance."), je();
  if (h.NODE_ENV !== "production" && !i.propsOptions[0][t])
    return w(`useModel() called with prop "${t}" which is not declared.`), je();
  const s = Ee(t), r = $e(t), o = fa((c, a) => {
    let u;
    return Da(() => {
      const f = e[t];
      mt(u, f) && (u = f, a());
    }), {
      get() {
        return c(), n.get ? n.get(u) : u;
      },
      set(f) {
        const p = i.vnode.props;
        !(p && // check if parent has passed v-model
        (t in p || s in p || r in p) && (`onUpdate:${t}` in p || `onUpdate:${s}` in p || `onUpdate:${r}` in p)) && mt(f, u) && (u = f, a()), i.emit(`update:${t}`, n.set ? n.set(f) : f);
      }
    };
  }), l = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return o[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? e[l] || {} : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
function vf(e, t, n) {
  const i = arguments.length;
  return i === 2 ? oe(t) && !U(t) ? Rt(t) ? he(e, null, [t]) : he(e, t) : he(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Rt(n) && (n = [n]), he(e, t, n));
}
function Of() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, s = {
    header(f) {
      return oe(f) ? f.__isVue ? ["div", e, "VueInstance"] : Oe(f) ? [
        "div",
        {},
        ["span", e, u(f)],
        "<",
        l(f.value),
        ">"
      ] : Qt(f) ? [
        "div",
        {},
        ["span", e, Zt(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${kt(f) ? " (readonly)" : ""}`
      ] : kt(f) ? [
        "div",
        {},
        ["span", e, Zt(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const p = [];
    f.type.props && f.props && p.push(o("props", Z(f.props))), f.setupState !== le && p.push(o("setup", f.setupState)), f.data !== le && p.push(o("data", Z(f.data)));
    const E = c(f, "computed");
    E && p.push(o("computed", E));
    const y = c(f, "inject");
    return y && p.push(o("injected", y)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: i.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), p;
  }
  function o(f, p) {
    return p = ie({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((E) => [
          "div",
          {},
          ["span", i, E + ": "],
          l(p[E], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, p = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", i, f] : oe(f) ? ["object", { object: p ? Z(f) : f }] : ["span", n, String(f)];
  }
  function c(f, p) {
    const E = f.type;
    if (z(E))
      return;
    const y = {};
    for (const T in f.ctx)
      a(E, T, p) && (y[T] = f.ctx[T]);
    return y;
  }
  function a(f, p, E) {
    const y = f[E];
    if (U(y) && y.includes(p) || oe(y) && p in y || f.extends && a(f.extends, p, E) || f.mixins && f.mixins.some((T) => a(T, p, E)))
      return !0;
  }
  function u(f) {
    return Zt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
function Uh(e, t, n, i) {
  const s = n[i];
  if (s && Sf(s, e))
    return s;
  const r = t();
  return r.memo = e.slice(), n[i] = r;
}
function Sf(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let i = 0; i < n.length; i++)
    if (mt(n[i], t[i]))
      return !1;
  return wn > 0 && Ge && Ge.push(e), !0;
}
const Yr = "3.4.19", xe = h.NODE_ENV !== "production" ? w : pe, jh = Js, Kh = (h.NODE_ENV, ft), Wh = (h.NODE_ENV, Vo), qh = {
  createComponentInstance: hf,
  setupComponent: gf,
  renderComponentRoot: us,
  setCurrentRenderingInstance: Ai,
  isVNode: Rt,
  normalizeVNode: Je
}, Jh = qh, Gh = null, zh = null, Yh = null;
var we = {};
const Xh = "http://www.w3.org/2000/svg", Qh = "http://www.w3.org/1998/Math/MathML", Wt = typeof document < "u" ? document : null, Ql = Wt && /* @__PURE__ */ Wt.createElement("template"), Zh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? Wt.createElementNS(Xh, e) : t === "mathml" ? Wt.createElementNS(Qh, e) : Wt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => Wt.createTextNode(e),
  createComment: (e) => Wt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Wt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Ql.innerHTML = i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e;
      const l = Ql.content;
      if (i === "svg" || i === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ft = "transition", ci = "animation", Gn = Symbol("_vtc"), Wo = (e, { slots: t }) => vf(Aa, Tf(e), t);
Wo.displayName = "Transition";
const Cf = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, em = Wo.props = /* @__PURE__ */ ie(
  {},
  $o,
  Cf
), un = (e, t = []) => {
  U(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Zl = (e) => e ? U(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Tf(e) {
  const t = {};
  for (const V in e)
    V in Cf || (t[V] = e[V]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: a = o,
    appearToClass: u = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, y = tm(s), T = y && y[0], R = y && y[1], {
    onBeforeEnter: P,
    onEnter: O,
    onEnterCancelled: g,
    onLeave: _,
    onLeaveCancelled: N,
    onBeforeAppear: I = P,
    onAppear: D = O,
    onAppearCancelled: b = g
  } = t, v = (V, K, Y) => {
    Ht(V, K ? u : l), Ht(V, K ? a : o), Y && Y();
  }, C = (V, K) => {
    V._isLeaving = !1, Ht(V, f), Ht(V, E), Ht(V, p), K && K();
  }, M = (V) => (K, Y) => {
    const te = V ? D : O, q = () => v(K, V, Y);
    un(te, [K, q]), ec(() => {
      Ht(K, V ? c : r), Dt(K, V ? u : l), Zl(te) || tc(K, i, T, q);
    });
  };
  return ie(t, {
    onBeforeEnter(V) {
      un(P, [V]), Dt(V, r), Dt(V, o);
    },
    onBeforeAppear(V) {
      un(I, [V]), Dt(V, c), Dt(V, a);
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(V, K) {
      V._isLeaving = !0;
      const Y = () => C(V, K);
      Dt(V, f), Df(), Dt(V, p), ec(() => {
        V._isLeaving && (Ht(V, f), Dt(V, E), Zl(_) || tc(V, i, R, Y));
      }), un(_, [V, Y]);
    },
    onEnterCancelled(V) {
      v(V, !1), un(g, [V]);
    },
    onAppearCancelled(V) {
      v(V, !0), un(b, [V]);
    },
    onLeaveCancelled(V) {
      C(V), un(N, [V]);
    }
  });
}
function tm(e) {
  if (e == null)
    return null;
  if (oe(e))
    return [vr(e.enter), vr(e.leave)];
  {
    const t = vr(e);
    return [t, t];
  }
}
function vr(e) {
  const t = _s(e);
  return we.NODE_ENV !== "production" && To(t, "<transition> explicit duration"), t;
}
function Dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Gn] || (e[Gn] = /* @__PURE__ */ new Set())).add(t);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Gn];
  n && (n.delete(t), n.size || (e[Gn] = void 0));
}
function ec(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nm = 0;
function tc(e, t, n, i) {
  const s = e._endId = ++nm, r = () => {
    s === e._endId && i();
  };
  if (n)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = wf(e, t);
  if (!o)
    return i();
  const a = o + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(a, p), r();
  }, p = (E) => {
    E.target === e && ++u >= c && f();
  };
  setTimeout(() => {
    u < c && f();
  }, l + 1), e.addEventListener(a, p);
}
function wf(e, t) {
  const n = window.getComputedStyle(e), i = (y) => (n[y] || "").split(", "), s = i(`${Ft}Delay`), r = i(`${Ft}Duration`), o = nc(s, r), l = i(`${ci}Delay`), c = i(`${ci}Duration`), a = nc(l, c);
  let u = null, f = 0, p = 0;
  t === Ft ? o > 0 && (u = Ft, f = o, p = r.length) : t === ci ? a > 0 && (u = ci, f = a, p = c.length) : (f = Math.max(o, a), u = f > 0 ? o > a ? Ft : ci : null, p = u ? u === Ft ? r.length : c.length : 0);
  const E = u === Ft && /\b(transform|all)(,|$)/.test(
    i(`${Ft}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: p,
    hasTransform: E
  };
}
function nc(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => ic(n) + ic(e[i])));
}
function ic(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Df() {
  return document.body.offsetHeight;
}
function im(e, t, n) {
  const i = e[Gn];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Pi = Symbol("_vod"), qo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Pi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ai(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t == !n && (e.style.display === e[Pi] || !t) || (i ? t ? (i.beforeEnter(e), ai(e, !0), i.enter(e)) : i.leave(e, () => {
      ai(e, !1);
    }) : ai(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ai(e, t);
  }
};
we.NODE_ENV !== "production" && (qo.name = "show");
function ai(e, t) {
  e.style.display = t ? e[Pi] : "none";
}
function sm() {
  qo.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Vf = Symbol(we.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function rm(e) {
  const t = Mt();
  if (!t) {
    we.NODE_ENV !== "production" && xe("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (s = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Qr(r, s));
  };
  we.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const i = () => {
    const s = e(t.proxy);
    Xr(t.subTree, s), n(s);
  };
  wa(i), si(() => {
    const s = new MutationObserver(i);
    s.observe(t.subTree.el.parentNode, { childList: !0 }), Wi(() => s.disconnect());
  });
}
function Xr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Xr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Qr(e.el, t);
  else if (e.type === Ce)
    e.children.forEach((n) => Xr(n, t));
  else if (e.type === tn) {
    let { el: n, anchor: i } = e;
    for (; n && (Qr(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Qr(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const s in t)
      n.setProperty(`--${s}`, t[s]), i += `--${s}: ${t[s]};`;
    n[Vf] = i;
  }
}
const om = /(^|;)\s*display\s*:/;
function lm(e, t, n) {
  const i = e.style, s = Q(n), r = i.display;
  let o = !1;
  if (n && !s) {
    if (t && !Q(t))
      for (const l in t)
        n[l] == null && Zr(i, l, "");
    for (const l in n)
      l === "display" && (o = !0), Zr(i, l, n[l]);
  } else if (s) {
    if (t !== n) {
      const l = i[Vf];
      l && (n += ";" + l), i.cssText = n, o = om.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Pi in e && (e[Pi] = o ? i.display : "", i.display = r);
}
const cm = /[^\\];\s*$/, sc = /\s*!important$/;
function Zr(e, t, n) {
  if (U(n))
    n.forEach((i) => Zr(e, t, i));
  else if (n == null && (n = ""), we.NODE_ENV !== "production" && cm.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = am(e, t);
    sc.test(n) ? e.setProperty(
      $e(i),
      n.replace(sc, ""),
      "important"
    ) : e[i] = n;
  }
}
const rc = ["Webkit", "Moz", "ms"], Or = {};
function am(e, t) {
  const n = Or[t];
  if (n)
    return n;
  let i = Ee(t);
  if (i !== "filter" && i in e)
    return Or[t] = i;
  i = Ot(i);
  for (let s = 0; s < rc.length; s++) {
    const r = rc[s] + i;
    if (r in e)
      return Or[t] = r;
  }
  return t;
}
const oc = "http://www.w3.org/1999/xlink";
function fm(e, t, n, i, s) {
  if (i && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(oc, t.slice(6, t.length)) : e.setAttributeNS(oc, t, n);
  else {
    const r = Xu(t);
    n == null || r && !mo(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : n);
  }
}
function um(e, t, n, i, s, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    i && o(i, s, r), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    e._value = n;
    const a = l === "OPTION" ? e.getAttribute("value") : e.value, u = n ?? "";
    a !== u && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = mo(n) : n == null && a === "string" ? (n = "", c = !0) : a === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    we.NODE_ENV !== "production" && !c && xe(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  c && e.removeAttribute(t);
}
function At(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function dm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const lc = Symbol("_vei");
function pm(e, t, n, i, s = null) {
  const r = e[lc] || (e[lc] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [l, c] = hm(t);
    if (i) {
      const a = r[t] = Em(i, s);
      At(e, l, a, c);
    } else
      o && (dm(e, l, o, c), r[t] = void 0);
  }
}
const cc = /(?:Once|Passive|Capture)$/;
function hm(e) {
  let t;
  if (cc.test(e)) {
    t = {};
    let i;
    for (; i = e.match(cc); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : $e(e.slice(2)), t];
}
let Sr = 0;
const mm = /* @__PURE__ */ Promise.resolve(), gm = () => Sr || (mm.then(() => Sr = 0), Sr = Date.now());
function Em(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Qe(
      ym(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = gm(), n;
}
function ym(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((i) => (s) => !s._stopped && i && i(s));
  } else
    return t;
}
const ac = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _m = (e, t, n, i, s, r, o, l, c) => {
  const a = s === "svg";
  t === "class" ? im(e, i, a) : t === "style" ? lm(e, n, i) : It(t) ? Es(t) || pm(e, t, n, i, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nm(e, t, i, a)) ? um(
    e,
    t,
    i,
    r,
    o,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), fm(e, t, i, a));
};
function Nm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ac(t) && z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ac(t) && Q(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jo(e, t) {
  const n = /* @__PURE__ */ Zs(e);
  class i extends or {
    constructor(r) {
      super(n, r, t);
    }
  }
  return i.def = n, i;
}
/*! #__NO_SIDE_EFFECTS__ */
const bm = /* @__NO_SIDE_EFFECTS__ */ (e) => /* @__PURE__ */ Jo(e, Bf), vm = typeof HTMLElement < "u" ? HTMLElement : class {
};
class or extends vm {
  constructor(t, n = {}, i) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (we.NODE_ENV !== "production" && this.shadowRoot && xe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Gs(() => {
      this._connected || (eo(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    this._ob = new MutationObserver((i) => {
      for (const s of i)
        this._setAttr(s.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (i, s = !1) => {
      const { props: r, styles: o } = i;
      let l;
      if (r && !U(r))
        for (const c in r) {
          const a = r[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = _s(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ee(c)] = !0);
        }
      this._numberProps = l, s && this._resolveProps(i), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, i = U(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && i.includes(s) && this._setProp(s, this[s], !0, !1);
    for (const s of i.map(Ee))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(r) {
          this._setProp(s, r);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const i = Ee(t);
    this._numberProps && this._numberProps[i] && (n = _s(n)), this._setProp(i, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, i = !0, s = !0) {
    n !== this._props[t] && (this._props[t] = n, s && this._instance && this._update(), i && (n === !0 ? this.setAttribute($e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute($e(t), n + "") : n || this.removeAttribute($e(t))));
  }
  _update() {
    eo(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = he(this._def, ie({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0, we.NODE_ENV !== "production" && (n.ceReload = (r) => {
        this._styles && (this._styles.forEach((o) => this.shadowRoot.removeChild(o)), this._styles.length = 0), this._applyStyles(r), this._instance = null, this._update();
      });
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(r, {
            detail: o
          })
        );
      };
      n.emit = (r, ...o) => {
        i(r, o), $e(r) !== r && i($e(r), o);
      };
      let s = this;
      for (; s = s && (s.parentNode || s.host); )
        if (s instanceof or) {
          n.parent = s._instance, n.provides = s._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const i = document.createElement("style");
      i.textContent = n, this.shadowRoot.appendChild(i), we.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(i);
    });
  }
}
function Om(e = "$style") {
  {
    const t = Mt();
    if (!t)
      return we.NODE_ENV !== "production" && xe("useCssModule must be called inside setup()"), le;
    const n = t.type.__cssModules;
    if (!n)
      return we.NODE_ENV !== "production" && xe("Current instance does not have CSS modules injected."), le;
    const i = n[e];
    return i || (we.NODE_ENV !== "production" && xe(`Current instance does not have CSS module named "${e}".`), le);
  }
}
const xf = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap(), Ds = Symbol("_moveCb"), fc = Symbol("_enterCb"), If = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ie({}, em, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Mt(), i = Mo();
    let s, r;
    return tr(() => {
      if (!s.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Vm(
        s[0].el,
        n.vnode.el,
        o
      ))
        return;
      s.forEach(Tm), s.forEach(wm);
      const l = s.filter(Dm);
      Df(), l.forEach((c) => {
        const a = c.el, u = a.style;
        Dt(a, o), u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = a[Ds] = (p) => {
          p && p.target !== a || (!p || /transform$/.test(p.propertyName)) && (a.removeEventListener("transitionend", f), a[Ds] = null, Ht(a, o));
        };
        a.addEventListener("transitionend", f);
      });
    }), () => {
      const o = Z(e), l = Tf(o);
      let c = o.tag || Ce;
      s = r, r = t.default ? Qs(t.default()) : [];
      for (let a = 0; a < r.length; a++) {
        const u = r[a];
        u.key != null ? Tn(
          u,
          qn(u, l, i, n)
        ) : we.NODE_ENV !== "production" && xe("<TransitionGroup> children must be keyed.");
      }
      if (s)
        for (let a = 0; a < s.length; a++) {
          const u = s[a];
          Tn(
            u,
            qn(u, l, i, n)
          ), xf.set(u, u.el.getBoundingClientRect());
        }
      return he(c, null, r);
    };
  }
}, Sm = (e) => delete e.mode;
If.props;
const Cm = If;
function Tm(e) {
  const t = e.el;
  t[Ds] && t[Ds](), t[fc] && t[fc]();
}
function wm(e) {
  Af.set(e, e.el.getBoundingClientRect());
}
function Dm(e) {
  const t = xf.get(e), n = Af.get(e), i = t.left - n.left, s = t.top - n.top;
  if (i || s) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${i}px,${s}px)`, r.transitionDuration = "0s", e;
  }
}
function Vm(e, t, n) {
  const i = e.cloneNode(), s = e[Gn];
  s && s.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && i.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && i.classList.add(l)), i.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(i);
  const { hasTransform: o } = wf(i);
  return r.removeChild(i), o;
}
const on = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return U(t) ? (n) => Jt(t, n) : t;
};
function xm(e) {
  e.target.composing = !0;
}
function uc(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rt = Symbol("_assign"), Vs = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, s) {
    e[rt] = on(s);
    const r = i || s.props && s.props.type === "number";
    At(e, t ? "change" : "input", (o) => {
      if (o.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), r && (l = Ci(l)), e[rt](l);
    }), n && At(e, "change", () => {
      e.value = e.value.trim();
    }), t || (At(e, "compositionstart", xm), At(e, "compositionend", uc), At(e, "change", uc));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: i, number: s } }, r) {
    if (e[rt] = on(r), e.composing)
      return;
    const o = s || e.type === "number" ? Ci(e.value) : e.value, l = t ?? "";
    o !== l && (document.activeElement === e && e.type !== "range" && (n || i && e.value.trim() === l) || (e.value = l));
  }
}, Go = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[rt] = on(n), At(e, "change", () => {
      const i = e._modelValue, s = zn(e), r = e.checked, o = e[rt];
      if (U(i)) {
        const l = Us(i, s), c = l !== -1;
        if (r && !c)
          o(i.concat(s));
        else if (!r && c) {
          const a = [...i];
          a.splice(l, 1), o(a);
        }
      } else if (xn(i)) {
        const l = new Set(i);
        r ? l.add(s) : l.delete(s), o(l);
      } else
        o(Rf(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: dc,
  beforeUpdate(e, t, n) {
    e[rt] = on(n), dc(e, t, n);
  }
};
function dc(e, { value: t, oldValue: n }, i) {
  e._modelValue = t, U(t) ? e.checked = Us(t, i.props.value) > -1 : xn(t) ? e.checked = t.has(i.props.value) : t !== n && (e.checked = sn(t, Rf(e, !0)));
}
const zo = {
  created(e, { value: t }, n) {
    e.checked = sn(t, n.props.value), e[rt] = on(n), At(e, "change", () => {
      e[rt](zn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, i) {
    e[rt] = on(i), t !== n && (e.checked = sn(t, i.props.value));
  }
}, kf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    const s = xn(t);
    At(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Ci(zn(o)) : zn(o)
      );
      e[rt](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Gs(() => {
        e._assigning = !1;
      });
    }), e[rt] = on(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, oldValue: n, modifiers: { number: i } }) {
    pc(e, t, n, i);
  },
  beforeUpdate(e, t, n) {
    e[rt] = on(n);
  },
  updated(e, { value: t, oldValue: n, modifiers: { number: i } }) {
    e._assigning || pc(e, t, n, i);
  }
};
function pc(e, t, n, i) {
  const s = e.multiple, r = U(t);
  if (s && !r && !xn(t)) {
    we.NODE_ENV !== "production" && xe(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, l = e.options.length; o < l; o++) {
    const c = e.options[o], a = zn(c);
    if (s)
      if (r) {
        const u = typeof a;
        u === "string" || u === "number" ? c.selected = t.includes(
          i ? Ci(a) : a
        ) : c.selected = Us(t, a) > -1;
      } else
        c.selected = t.has(a);
    else if (sn(zn(c), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !s && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function zn(e) {
  return "_value" in e ? e._value : e.value;
}
function Rf(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Pf = {
  created(e, t, n) {
    ls(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    ls(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, i) {
    ls(e, t, n, i, "beforeUpdate");
  },
  updated(e, t, n, i) {
    ls(e, t, n, i, "updated");
  }
};
function Mf(e, t) {
  switch (e) {
    case "SELECT":
      return kf;
    case "TEXTAREA":
      return Vs;
    default:
      switch (t) {
        case "checkbox":
          return Go;
        case "radio":
          return zo;
        default:
          return Vs;
      }
  }
}
function ls(e, t, n, i, s) {
  const o = Mf(
    e.tagName,
    n.props && n.props.type
  )[s];
  o && o(e, t, n, i);
}
function Am() {
  Vs.getSSRProps = ({ value: e }) => ({ value: e }), zo.getSSRProps = ({ value: e }, t) => {
    if (t.props && sn(t.props.value, e))
      return { checked: !0 };
  }, Go.getSSRProps = ({ value: e }, t) => {
    if (U(e)) {
      if (t.props && Us(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (xn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Pf.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Mf(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Im = ["ctrl", "shift", "alt", "meta"], km = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Im.some((n) => e[`${n}Key`] && !t.includes(n))
}, Rm = (e, t) => {
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = (s, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = km[t[o]];
      if (l && l(s, t))
        return;
    }
    return e(s, ...r);
  });
}, Pm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Mm = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = (s) => {
    if (!("key" in s))
      return;
    const r = $e(s.key);
    if (t.some((o) => o === r || Pm[o] === r))
      return e(s);
  });
}, $f = /* @__PURE__ */ ie({ patchProp: _m }, Zh);
let Oi, hc = !1;
function Lf() {
  return Oi || (Oi = Za($f));
}
function Ff() {
  return Oi = hc ? Oi : ef($f), hc = !0, Oi;
}
const eo = (...e) => {
  Lf().render(...e);
}, Bf = (...e) => {
  Ff().hydrate(...e);
}, $m = (...e) => {
  const t = Lf().createApp(...e);
  we.NODE_ENV !== "production" && (Uf(t), jf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = Kf(i);
    if (!s)
      return;
    const r = t._component;
    !z(r) && !r.render && !r.template && (r.template = s.innerHTML), s.innerHTML = "";
    const o = n(s, !1, Hf(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
}, Lm = (...e) => {
  const t = Ff().createApp(...e);
  we.NODE_ENV !== "production" && (Uf(t), jf(t));
  const { mount: n } = t;
  return t.mount = (i) => {
    const s = Kf(i);
    if (s)
      return n(s, !0, Hf(s));
  }, t;
};
function Hf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Uf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Bc(t) || Hc(t) || Uc(t),
    writable: !1
  });
}
function jf(e) {
  if (Ko()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, i = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xe(i), n;
      },
      set() {
        xe(i);
      }
    });
  }
}
function Kf(e) {
  if (Q(e)) {
    const t = document.querySelector(e);
    return we.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return we.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let mc = !1;
const Fm = () => {
  mc || (mc = !0, Am(), sm());
}, Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Aa,
  BaseTransitionPropsValidators: $o,
  Comment: ve,
  DeprecationTypes: Yh,
  EffectScope: go,
  ErrorCodes: Wd,
  ErrorTypeStrings: jh,
  Fragment: Ce,
  KeepAlive: xp,
  ReactiveEffect: Wn,
  Static: tn,
  Suspense: yp,
  Teleport: xh,
  Text: rn,
  TrackOpTypes: Fd,
  Transition: Wo,
  TransitionGroup: Cm,
  TriggerOpTypes: Bd,
  VueElement: or,
  assertNumber: To,
  callWithAsyncErrorHandling: Qe,
  callWithErrorHandling: vt,
  camelize: Ee,
  capitalize: Ot,
  cloneVNode: ot,
  compatUtils: zh,
  computed: bf,
  createApp: $m,
  createBlock: Ho,
  createCommentVNode: df,
  createElementBlock: jr,
  createElementVNode: at,
  createHydrationRenderer: ef,
  createPropsRestProxy: Xp,
  createRenderer: Za,
  createSSRApp: Lm,
  createSlots: kp,
  createStaticVNode: kh,
  createTextVNode: Uo,
  createVNode: he,
  customRef: fa,
  defineAsyncComponent: Dp,
  defineComponent: Zs,
  defineCustomElement: Jo,
  defineEmits: Hp,
  defineExpose: Up,
  defineModel: Wp,
  defineOptions: jp,
  defineProps: Bp,
  defineSSRCustomElement: bm,
  defineSlots: Kp,
  devtools: Kh,
  effect: od,
  effectScope: id,
  getCurrentInstance: Mt,
  getCurrentScope: qc,
  getTransitionRawChildren: Qs,
  guardReactiveProps: ff,
  h: vf,
  handleError: an,
  hasInjectionContext: lh,
  hydrate: Bf,
  initCustomFormatter: Of,
  initDirectivesForSSR: Fm,
  inject: _i,
  isMemoSame: Sf,
  isProxy: Ti,
  isReactive: Qt,
  isReadonly: kt,
  isRef: Oe,
  isRuntimeOnly: Ko,
  isShallow: Zt,
  isVNode: Rt,
  markRaw: bo,
  mergeDefaults: zp,
  mergeModels: Yp,
  mergeProps: pf,
  nextTick: Gs,
  normalizeClass: ni,
  normalizeProps: Wu,
  normalizeStyle: An,
  onActivated: ka,
  onBeforeMount: Ma,
  onBeforeUnmount: nr,
  onBeforeUpdate: $a,
  onDeactivated: Ra,
  onErrorCaptured: Ha,
  onMounted: si,
  onRenderTracked: Ba,
  onRenderTriggered: Fa,
  onScopeDispose: sd,
  onServerPrefetch: La,
  onUnmounted: Wi,
  onUpdated: tr,
  openBlock: Jn,
  popScopeId: ba,
  provide: qa,
  proxyRefs: Co,
  pushScopeId: Na,
  queuePostFlushCb: Vi,
  reactive: Ws,
  readonly: No,
  ref: je,
  registerRuntimeCompiler: Ef,
  render: eo,
  renderList: Ip,
  renderSlot: Rp,
  resolveComponent: hp,
  resolveDirective: gp,
  resolveDynamicComponent: mp,
  resolveFilter: Gh,
  resolveTransitionHooks: qn,
  setBlockTracking: Ur,
  setDevtoolsHook: Wh,
  setTransitionHooks: Tn,
  shallowReactive: la,
  shallowReadonly: pn,
  shallowRef: Vd,
  ssrContextKey: Ca,
  ssrUtils: Jh,
  stop: ld,
  toDisplayString: nd,
  toHandlerKey: yt,
  toHandlers: Pp,
  toRaw: Z,
  toRef: Ld,
  toRefs: Pd,
  toValue: Id,
  transformVNodeArgs: Ah,
  triggerRef: Ad,
  unref: So,
  useAttrs: Gp,
  useCssModule: Om,
  useCssVars: rm,
  useModel: Hh,
  useSSRContext: Ta,
  useSlots: Jp,
  useTransitionState: Mo,
  vModelCheckbox: Go,
  vModelDynamic: Pf,
  vModelRadio: zo,
  vModelSelect: kf,
  vModelText: Vs,
  vShow: qo,
  version: Yr,
  warn: xe,
  watch: bn,
  watchEffect: Sp,
  watchPostEffect: wa,
  watchSyncEffect: Da,
  withAsyncContext: Qp,
  withCtx: Ao,
  withDefaults: qp,
  withDirectives: Tp,
  withKeys: Mm,
  withMemo: Uh,
  withModifiers: Rm,
  withScopeId: ap
}, Symbol.toStringTag, { value: "Module" }));
var B = {};
const Mi = Symbol(B.NODE_ENV !== "production" ? "Fragment" : ""), Si = Symbol(B.NODE_ENV !== "production" ? "Teleport" : ""), Yo = Symbol(B.NODE_ENV !== "production" ? "Suspense" : ""), xs = Symbol(B.NODE_ENV !== "production" ? "KeepAlive" : ""), Wf = Symbol(B.NODE_ENV !== "production" ? "BaseTransition" : ""), Vn = Symbol(B.NODE_ENV !== "production" ? "openBlock" : ""), qf = Symbol(B.NODE_ENV !== "production" ? "createBlock" : ""), Jf = Symbol(B.NODE_ENV !== "production" ? "createElementBlock" : ""), Xo = Symbol(B.NODE_ENV !== "production" ? "createVNode" : ""), Qo = Symbol(B.NODE_ENV !== "production" ? "createElementVNode" : ""), Ji = Symbol(B.NODE_ENV !== "production" ? "createCommentVNode" : ""), Zo = Symbol(B.NODE_ENV !== "production" ? "createTextVNode" : ""), Gf = Symbol(B.NODE_ENV !== "production" ? "createStaticVNode" : ""), el = Symbol(B.NODE_ENV !== "production" ? "resolveComponent" : ""), tl = Symbol(
  B.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), nl = Symbol(B.NODE_ENV !== "production" ? "resolveDirective" : ""), il = Symbol(B.NODE_ENV !== "production" ? "resolveFilter" : ""), sl = Symbol(B.NODE_ENV !== "production" ? "withDirectives" : ""), rl = Symbol(B.NODE_ENV !== "production" ? "renderList" : ""), zf = Symbol(B.NODE_ENV !== "production" ? "renderSlot" : ""), Yf = Symbol(B.NODE_ENV !== "production" ? "createSlots" : ""), lr = Symbol(B.NODE_ENV !== "production" ? "toDisplayString" : ""), As = Symbol(B.NODE_ENV !== "production" ? "mergeProps" : ""), ol = Symbol(B.NODE_ENV !== "production" ? "normalizeClass" : ""), ll = Symbol(B.NODE_ENV !== "production" ? "normalizeStyle" : ""), $i = Symbol(B.NODE_ENV !== "production" ? "normalizeProps" : ""), Gi = Symbol(B.NODE_ENV !== "production" ? "guardReactiveProps" : ""), cl = Symbol(B.NODE_ENV !== "production" ? "toHandlers" : ""), to = Symbol(B.NODE_ENV !== "production" ? "camelize" : ""), Hm = Symbol(B.NODE_ENV !== "production" ? "capitalize" : ""), no = Symbol(B.NODE_ENV !== "production" ? "toHandlerKey" : ""), Is = Symbol(B.NODE_ENV !== "production" ? "setBlockTracking" : ""), Um = Symbol(B.NODE_ENV !== "production" ? "pushScopeId" : ""), jm = Symbol(B.NODE_ENV !== "production" ? "popScopeId" : ""), al = Symbol(B.NODE_ENV !== "production" ? "withCtx" : ""), Km = Symbol(B.NODE_ENV !== "production" ? "unref" : ""), Wm = Symbol(B.NODE_ENV !== "production" ? "isRef" : ""), fl = Symbol(B.NODE_ENV !== "production" ? "withMemo" : ""), Xf = Symbol(B.NODE_ENV !== "production" ? "isMemoSame" : ""), Yn = {
  [Mi]: "Fragment",
  [Si]: "Teleport",
  [Yo]: "Suspense",
  [xs]: "KeepAlive",
  [Wf]: "BaseTransition",
  [Vn]: "openBlock",
  [qf]: "createBlock",
  [Jf]: "createElementBlock",
  [Xo]: "createVNode",
  [Qo]: "createElementVNode",
  [Ji]: "createCommentVNode",
  [Zo]: "createTextVNode",
  [Gf]: "createStaticVNode",
  [el]: "resolveComponent",
  [tl]: "resolveDynamicComponent",
  [nl]: "resolveDirective",
  [il]: "resolveFilter",
  [sl]: "withDirectives",
  [rl]: "renderList",
  [zf]: "renderSlot",
  [Yf]: "createSlots",
  [lr]: "toDisplayString",
  [As]: "mergeProps",
  [ol]: "normalizeClass",
  [ll]: "normalizeStyle",
  [$i]: "normalizeProps",
  [Gi]: "guardReactiveProps",
  [cl]: "toHandlers",
  [to]: "camelize",
  [Hm]: "capitalize",
  [no]: "toHandlerKey",
  [Is]: "setBlockTracking",
  [Um]: "pushScopeId",
  [jm]: "popScopeId",
  [al]: "withCtx",
  [Km]: "unref",
  [Wm]: "isRef",
  [fl]: "withMemo",
  [Xf]: "isMemoSame"
};
function qm(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Yn[t] = e[t];
  });
}
const Ze = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Jm(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: void 0,
    loc: Ze
  };
}
function Li(e, t, n, i, s, r, o, l = !1, c = !1, a = !1, u = Ze) {
  return e && (l ? (e.helper(Vn), e.helper(Zn(e.inSSR, a))) : e.helper(Qn(e.inSSR, a)), o && e.helper(sl)), {
    type: 13,
    tag: t,
    props: n,
    children: i,
    patchFlag: s,
    dynamicProps: r,
    directives: o,
    isBlock: l,
    disableTracking: c,
    isComponent: a,
    loc: u
  };
}
function zi(e, t = Ze) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function it(e, t = Ze) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function _e(e, t) {
  return {
    type: 16,
    loc: Ze,
    key: Q(e) ? ne(e, !0) : e,
    value: t
  };
}
function ne(e, t = !1, n = Ze, i = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : i
  };
}
function pt(e, t = Ze) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Te(e, t = [], n = Ze) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Xn(e, t = void 0, n = !1, i = !1, s = Ze) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: i,
    loc: s
  };
}
function io(e, t, n, i = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: i,
    loc: Ze
  };
}
function Gm(e, t, n = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    isVNode: n,
    loc: Ze
  };
}
function zm(e) {
  return {
    type: 21,
    body: e,
    loc: Ze
  };
}
function Qn(e, t) {
  return e || t ? Xo : Qo;
}
function Zn(e, t) {
  return e || t ? qf : Jf;
}
function ul(e, { helper: t, removeHelper: n, inSSR: i }) {
  e.isBlock || (e.isBlock = !0, n(Qn(i, e.isComponent)), t(Vn), t(Zn(i, e.isComponent)));
}
const gc = new Uint8Array([123, 123]), Ec = new Uint8Array([125, 125]);
function yc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Xe(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Bt(e) {
  return e === 47 || e === 62 || Xe(e);
}
function ks(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ie = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Ym {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = gc, this.delimiterClose = Ec, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = gc, this.delimiterClose = Ec;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, i = t + 1;
    for (let s = this.newlines.length - 1; s >= 0; s--) {
      const r = this.newlines[s];
      if (t > r) {
        n = s + 2, i = t - r;
        break;
      }
    }
    return {
      column: i,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else
      this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      Bt(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Xe(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const i = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = i;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ie.TitleEnd || this.currentSequence === Ie.TextareaEnd && !this.inSFCRoot ? t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ie.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ie.Cdata.length && (this.state = 28, this.currentSequence = Ie.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    if (t === 33)
      this.state = 22, this.sectionStart = this.index + 1;
    else if (t === 63)
      this.state = 24, this.sectionStart = this.index + 1;
    else if (yc(t))
      if (this.sectionStart = this.index, this.mode === 0)
        this.state = 6;
      else if (this.inSFCRoot)
        this.state = 34;
      else if (this.inXML)
        this.state = 6;
      else {
        const n = t | 32;
        n === 116 ? this.state = 30 : this.state = n === 115 ? 29 : 6;
      }
    else
      t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    Bt(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (Bt(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(ks("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Xe(t) || (t === 62 ? (B.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = yc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Xe(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, B.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Xe(t) || (B.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Xe(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || Bt(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : B.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || Bt(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || Bt(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || Bt(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), B.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || Bt(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Xe(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Xe(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Xe(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (B.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ie.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    const n = t | 32;
    n === Ie.ScriptEnd[3] ? this.startSpecial(Ie.ScriptEnd, 4) : n === Ie.StyleEnd[3] ? this.startSpecial(Ie.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    const n = t | 32;
    n === Ie.TitleEnd[3] ? this.startSpecial(Ie.TitleEnd, 4) : n === Ie.TextareaEnd[3] ? this.startSpecial(Ie.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const Xm = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function so(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function nn(e, t) {
  const n = so("MODE", t), i = so(e, t);
  return n === 3 ? i === !0 : i !== !1;
}
function ei(e, t, n, ...i) {
  const s = nn(e, t);
  return B.NODE_ENV !== "production" && s && Rs(e, t, n, ...i), s;
}
function Rs(e, t, n, ...i) {
  if (so(e, t) === "suppress-warning")
    return;
  const { message: r, link: o } = Xm[e], l = `(deprecation ${e}) ${typeof r == "function" ? r(...i) : r}${o ? `
  Details: ${o}` : ""}`, c = new SyntaxError(l);
  c.code = e, n && (c.loc = n), t.onWarn(c);
}
function dl(e) {
  throw e;
}
function Qf(e) {
  B.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function ue(e, t, n, i) {
  const s = B.NODE_ENV !== "production" ? (n || Qm)[e] + (i || "") : `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(s));
  return r.code = e, r.loc = t, r;
}
const Qm = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, ze = (e) => e.type === 4 && e.isStatic;
function Zf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return Si;
    case "Suspense":
    case "suspense":
      return Yo;
    case "KeepAlive":
    case "keep-alive":
      return xs;
    case "BaseTransition":
    case "base-transition":
      return Wf;
  }
}
const Zm = /^\d|[^\$\w]/, pl = (e) => !Zm.test(e), eg = /[A-Za-z_$\xA0-\uFFFF]/, tg = /[\.\?\w$\xA0-\uFFFF]/, ng = /\s+[.[]\s*|\s*[.[]\s+/g, ig = (e) => {
  e = e.trim().replace(ng, (o) => o.trim());
  let t = 0, n = [], i = 0, s = 0, r = null;
  for (let o = 0; o < e.length; o++) {
    const l = e.charAt(o);
    switch (t) {
      case 0:
        if (l === "[")
          n.push(t), t = 1, i++;
        else if (l === "(")
          n.push(t), t = 2, s++;
        else if (!(o === 0 ? eg : tg).test(l))
          return !1;
        break;
      case 1:
        l === "'" || l === '"' || l === "`" ? (n.push(t), t = 3, r = l) : l === "[" ? i++ : l === "]" && (--i || (t = n.pop()));
        break;
      case 2:
        if (l === "'" || l === '"' || l === "`")
          n.push(t), t = 3, r = l;
        else if (l === "(")
          s++;
        else if (l === ")") {
          if (o === e.length - 1)
            return !1;
          --s || (t = n.pop());
        }
        break;
      case 3:
        l === r && (t = n.pop(), r = null);
        break;
    }
  }
  return !i && !s;
}, eu = ig;
function _c(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function nt(e, t, n = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const s = e.props[i];
    if (s.type === 7 && (n || s.exp) && (Q(t) ? s.name === t : t.test(s.name)))
      return s;
  }
}
function Fi(e, t, n = !1, i = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const r = e.props[s];
    if (r.type === 6) {
      if (n)
        continue;
      if (r.name === t && (r.value || i))
        return r;
    } else if (r.name === "bind" && (r.exp || i) && zt(r.arg, t))
      return r;
  }
}
function zt(e, t) {
  return !!(e && ze(e) && e.content === t);
}
function sg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function Cr(e) {
  return e.type === 5 || e.type === 2;
}
function rg(e) {
  return e.type === 7 && e.name === "slot";
}
function Ps(e) {
  return e.type === 1 && e.tagType === 3;
}
function Ms(e) {
  return e.type === 1 && e.tagType === 2;
}
const og = /* @__PURE__ */ new Set([$i, Gi]);
function tu(e, t = []) {
  if (e && !Q(e) && e.type === 14) {
    const n = e.callee;
    if (!Q(n) && og.has(n))
      return tu(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function $s(e, t, n) {
  let i, s = e.type === 13 ? e.props : e.arguments[2], r = [], o;
  if (s && !Q(s) && s.type === 14) {
    const l = tu(s);
    s = l[0], r = l[1], o = r[r.length - 1];
  }
  if (s == null || Q(s))
    i = it([t]);
  else if (s.type === 14) {
    const l = s.arguments[0];
    !Q(l) && l.type === 15 ? Nc(t, l) || l.properties.unshift(t) : s.callee === cl ? i = Te(n.helper(As), [
      it([t]),
      s
    ]) : s.arguments.unshift(it([t])), !i && (i = s);
  } else
    s.type === 15 ? (Nc(t, s) || s.properties.unshift(t), i = s) : (i = Te(n.helper(As), [
      it([t]),
      s
    ]), o && o.callee === Gi && (o = r[r.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = i : e.props = i : o ? o.arguments[0] = i : e.arguments[2] = i;
}
function Nc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const i = e.key.content;
    n = t.properties.some(
      (s) => s.key.type === 4 && s.key.content === i
    );
  }
  return n;
}
function Bi(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, i) => n === "-" ? "_" : e.charCodeAt(i).toString())}`;
}
function lg(e) {
  return e.type === 14 && e.callee === fl ? e.arguments[1].returns : e;
}
const cg = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, nu = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: hi,
  isPreTag: hi,
  isCustomElement: hi,
  onError: dl,
  onWarn: Qf,
  comments: B.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let ce = nu, Hi = null, Sn = "", Me = null, ae = null, We = "", Vt = -1, dn = -1, Ls = 0, qt = !1, ro = null;
const ye = [], de = new Ym(ye, {
  onerr: Ke,
  ontext(e, t) {
    cs(ke(e, t), e, t);
  },
  ontextentity(e, t, n) {
    cs(e, t, n);
  },
  oninterpolation(e, t) {
    if (qt)
      return cs(ke(e, t), e, t);
    let n = e + de.delimiterOpen.length, i = t - de.delimiterClose.length;
    for (; Xe(Sn.charCodeAt(n)); )
      n++;
    for (; Xe(Sn.charCodeAt(i - 1)); )
      i--;
    let s = ke(n, i);
    s.includes("&") && (s = ce.decodeEntities(s, !1)), oo({
      type: 5,
      content: hs(s, !1, Se(n, i)),
      loc: Se(e, t)
    });
  },
  onopentagname(e, t) {
    const n = ke(e, t);
    Me = {
      type: 1,
      tag: n,
      ns: ce.getNamespace(n, ye[0], ce.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Se(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    vc(e);
  },
  onclosetag(e, t) {
    const n = ke(e, t);
    if (!ce.isVoidTag(n)) {
      let i = !1;
      for (let s = 0; s < ye.length; s++)
        if (ye[s].tag.toLowerCase() === n.toLowerCase()) {
          i = !0, s > 0 && Ke(24, ye[0].loc.start.offset);
          for (let o = 0; o <= s; o++) {
            const l = ye.shift();
            ps(l, t, o < s);
          }
          break;
        }
      i || Ke(23, iu(e, 60));
    }
  },
  onselfclosingtag(e) {
    var t;
    const n = Me.tag;
    Me.isSelfClosing = !0, vc(e), ((t = ye[0]) == null ? void 0 : t.tag) === n && ps(ye.shift(), e);
  },
  onattribname(e, t) {
    ae = {
      type: 6,
      name: ke(e, t),
      nameLoc: Se(e, t),
      value: void 0,
      loc: Se(e)
    };
  },
  ondirname(e, t) {
    const n = ke(e, t), i = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!qt && i === "" && Ke(26, e), qt || i === "")
      ae = {
        type: 6,
        name: n,
        nameLoc: Se(e, t),
        value: void 0,
        loc: Se(e)
      };
    else if (ae = {
      type: 7,
      name: i,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? ["prop"] : [],
      loc: Se(e)
    }, i === "pre") {
      qt = de.inVPre = !0, ro = Me;
      const s = Me.props;
      for (let r = 0; r < s.length; r++)
        s[r].type === 7 && (s[r] = Eg(s[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t)
      return;
    const n = ke(e, t);
    if (qt)
      ae.name += n, mn(ae.nameLoc, t);
    else {
      const i = n[0] !== "[";
      ae.arg = hs(
        i ? n : n.slice(1, -1),
        i,
        Se(e, t),
        i ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = ke(e, t);
    if (qt)
      ae.name += "." + n, mn(ae.nameLoc, t);
    else if (ae.name === "slot") {
      const i = ae.arg;
      i && (i.content += "." + n, mn(i.loc, t));
    } else
      ae.modifiers.push(n);
  },
  onattribdata(e, t) {
    We += ke(e, t), Vt < 0 && (Vt = e), dn = t;
  },
  onattribentity(e, t, n) {
    We += e, Vt < 0 && (Vt = t), dn = n;
  },
  onattribnameend(e) {
    const t = ae.loc.start.offset, n = ke(t, e);
    ae.type === 7 && (ae.rawName = n), Me.props.some(
      (i) => (i.type === 7 ? i.rawName : i.name) === n
    ) && Ke(2, t);
  },
  onattribend(e, t) {
    if (Me && ae) {
      if (mn(ae.loc, t), e !== 0)
        if (We.includes("&") && (We = ce.decodeEntities(
          We,
          !0
        )), ae.type === 6)
          ae.name === "class" && (We = ru(We).trim()), e === 1 && !We && Ke(13, t), ae.value = {
            type: 2,
            content: We,
            loc: e === 1 ? Se(Vt, dn) : Se(Vt - 1, dn + 1)
          }, de.inSFCRoot && Me.tag === "template" && ae.name === "lang" && We && We !== "html" && de.enterRCDATA(ks("</template"), 0);
        else {
          let n = 0;
          ae.exp = hs(
            We,
            !1,
            Se(Vt, dn),
            0,
            n
          ), ae.name === "for" && (ae.forParseResult = fg(ae.exp));
          let i = -1;
          ae.name === "bind" && (i = ae.modifiers.indexOf("sync")) > -1 && ei(
            "COMPILER_V_BIND_SYNC",
            ce,
            ae.loc,
            ae.rawName
          ) && (ae.name = "model", ae.modifiers.splice(i, 1));
        }
      (ae.type !== 7 || ae.name !== "pre") && Me.props.push(ae);
    }
    We = "", Vt = dn = -1;
  },
  oncomment(e, t) {
    ce.comments && oo({
      type: 3,
      content: ke(e, t),
      loc: Se(e - 4, t + 3)
    });
  },
  onend() {
    const e = Sn.length;
    if (B.NODE_ENV !== "production" && de.state !== 1)
      switch (de.state) {
        case 5:
        case 8:
          Ke(5, e);
          break;
        case 3:
        case 4:
          Ke(
            25,
            de.sectionStart
          );
          break;
        case 28:
          de.currentSequence === Ie.CdataEnd ? Ke(6, e) : Ke(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          Ke(9, e);
          break;
      }
    for (let t = 0; t < ye.length; t++)
      ps(ye[t], e - 1), Ke(24, ye[t].loc.start.offset);
  },
  oncdata(e, t) {
    ye[0].ns !== 0 ? cs(ke(e, t), e, t) : Ke(1, e - 9);
  },
  onprocessinginstruction(e) {
    (ye[0] ? ye[0].ns : ce.ns) === 0 && Ke(
      21,
      e - 1
    );
  }
}), bc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ag = /^\(|\)$/g;
function fg(e) {
  const t = e.loc, n = e.content, i = n.match(cg);
  if (!i)
    return;
  const [, s, r] = i, o = (f, p, E = !1) => {
    const y = t.start.offset + p, T = y + f.length;
    return hs(
      f,
      !1,
      Se(y, T),
      0,
      E ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(r.trim(), n.indexOf(r, s.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let c = s.trim().replace(ag, "").trim();
  const a = s.indexOf(c), u = c.match(bc);
  if (u) {
    c = c.replace(bc, "").trim();
    const f = u[1].trim();
    let p;
    if (f && (p = n.indexOf(f, a + c.length), l.key = o(f, p, !0)), u[2]) {
      const E = u[2].trim();
      E && (l.index = o(
        E,
        n.indexOf(
          E,
          l.key ? p + f.length : a + c.length
        ),
        !0
      ));
    }
  }
  return c && (l.value = o(c, a, !0)), l;
}
function ke(e, t) {
  return Sn.slice(e, t);
}
function vc(e) {
  de.inSFCRoot && (Me.innerLoc = Se(e + 1, e + 1)), oo(Me);
  const { tag: t, ns: n } = Me;
  n === 0 && ce.isPreTag(t) && Ls++, ce.isVoidTag(t) ? ps(Me, e) : (ye.unshift(Me), (n === 1 || n === 2) && (de.inXML = !0)), Me = null;
}
function cs(e, t, n) {
  var i;
  {
    const o = (i = ye[0]) == null ? void 0 : i.tag;
    o !== "script" && o !== "style" && e.includes("&") && (e = ce.decodeEntities(e, !1));
  }
  const s = ye[0] || Hi, r = s.children[s.children.length - 1];
  (r == null ? void 0 : r.type) === 2 ? (r.content += e, mn(r.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Se(t, n)
  });
}
function ps(e, t, n = !1) {
  n ? mn(e.loc, iu(t, 60)) : mn(e.loc, t + 1), de.inSFCRoot && (e.children.length ? e.innerLoc.end = ie({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = ie({}, e.innerLoc.start), e.innerLoc.source = ke(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: i, ns: s } = e;
  qt || (i === "slot" ? e.tagType = 2 : Oc(e) ? e.tagType = 3 : dg(e) && (e.tagType = 1)), de.inRCDATA || (e.children = su(e.children, e.tag)), s === 0 && ce.isPreTag(i) && Ls--, ro === e && (qt = de.inVPre = !1, ro = null), de.inXML && (ye[0] ? ye[0].ns : ce.ns) === 0 && (de.inXML = !1);
  {
    const r = e.props;
    if (B.NODE_ENV !== "production" && nn(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      ce
    )) {
      let l = !1, c = !1;
      for (let a = 0; a < r.length; a++) {
        const u = r[a];
        if (u.type === 7 && (u.name === "if" ? l = !0 : u.name === "for" && (c = !0)), l && c) {
          Rs(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            ce,
            e.loc
          );
          break;
        }
      }
    }
    if (!de.inSFCRoot && nn(
      "COMPILER_NATIVE_TEMPLATE",
      ce
    ) && e.tag === "template" && !Oc(e)) {
      B.NODE_ENV !== "production" && Rs(
        "COMPILER_NATIVE_TEMPLATE",
        ce,
        e.loc
      );
      const l = ye[0] || Hi, c = l.children.indexOf(e);
      l.children.splice(c, 1, ...e.children);
    }
    const o = r.find(
      (l) => l.type === 6 && l.name === "inline-template"
    );
    o && ei(
      "COMPILER_INLINE_TEMPLATE",
      ce,
      o.loc
    ) && e.children.length && (o.value = {
      type: 2,
      content: ke(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: o.loc
    });
  }
}
function iu(e, t) {
  let n = e;
  for (; Sn.charCodeAt(n) !== t && n >= 0; )
    n--;
  return n;
}
const ug = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Oc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && ug.has(t[n].name))
        return !0;
  }
  return !1;
}
function dg({ tag: e, props: t }) {
  var n;
  if (ce.isCustomElement(e))
    return !1;
  if (e === "component" || pg(e.charCodeAt(0)) || Zf(e) || (n = ce.isBuiltInComponent) != null && n.call(ce, e) || ce.isNativeTag && !ce.isNativeTag(e))
    return !0;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (ei(
          "COMPILER_IS_ON_ELEMENT",
          ce,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && zt(s.arg, "is") && ei(
        "COMPILER_IS_ON_ELEMENT",
        ce,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function pg(e) {
  return e > 64 && e < 91;
}
const hg = /\r\n/g;
function su(e, t) {
  var n, i;
  const s = ce.whitespace !== "preserve";
  let r = !1;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    if (l.type === 2)
      if (Ls)
        l.content = l.content.replace(hg, `
`);
      else if (mg(l.content)) {
        const c = (n = e[o - 1]) == null ? void 0 : n.type, a = (i = e[o + 1]) == null ? void 0 : i.type;
        !c || !a || s && (c === 3 && (a === 3 || a === 1) || c === 1 && (a === 3 || a === 1 && gg(l.content))) ? (r = !0, e[o] = null) : l.content = " ";
      } else
        s && (l.content = ru(l.content));
  }
  if (Ls && t && ce.isPreTag(t)) {
    const o = e[0];
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""));
  }
  return r ? e.filter(Boolean) : e;
}
function mg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Xe(e.charCodeAt(t)))
      return !1;
  return !0;
}
function gg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function ru(e) {
  let t = "", n = !1;
  for (let i = 0; i < e.length; i++)
    Xe(e.charCodeAt(i)) ? n || (t += " ", n = !0) : (t += e[i], n = !1);
  return t;
}
function oo(e) {
  (ye[0] || Hi).children.push(e);
}
function Se(e, t) {
  return {
    start: de.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : de.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : ke(e, t)
  };
}
function mn(e, t) {
  e.end = de.getPos(t), e.source = ke(e.start.offset, t);
}
function Eg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Se(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function hs(e, t = !1, n, i = 0, s = 0) {
  return ne(e, t, n, i);
}
function Ke(e, t, n) {
  ce.onError(
    ue(e, Se(t, t), void 0, n)
  );
}
function yg() {
  de.reset(), Me = null, ae = null, We = "", Vt = -1, dn = -1, ye.length = 0;
}
function _g(e, t) {
  if (yg(), Sn = e, ce = ie({}, nu), t) {
    let s;
    for (s in t)
      t[s] != null && (ce[s] = t[s]);
  }
  if (B.NODE_ENV !== "production" && !ce.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  de.mode = ce.parseMode === "html" ? 1 : ce.parseMode === "sfc" ? 2 : 0, de.inXML = ce.ns === 1 || ce.ns === 2;
  const n = t == null ? void 0 : t.delimiters;
  n && (de.delimiterOpen = ks(n[0]), de.delimiterClose = ks(n[1]));
  const i = Hi = Jm([], e);
  return de.parse(Sn), i.loc = Se(0, e.length), i.children = su(i.children), Hi = null, i;
}
function Ng(e, t) {
  ms(
    e,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    ou(e, e.children[0])
  );
}
function ou(e, t) {
  const { children: n } = e;
  return n.length === 1 && t.type === 1 && !Ms(t);
}
function ms(e, t, n = !1) {
  const { children: i } = e, s = i.length;
  let r = 0;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    if (l.type === 1 && l.tagType === 0) {
      const c = n ? 0 : st(l, t);
      if (c > 0) {
        if (c >= 2) {
          l.codegenNode.patchFlag = -1 + (B.NODE_ENV !== "production" ? " /* HOISTED */" : ""), l.codegenNode = t.hoist(l.codegenNode), r++;
          continue;
        }
      } else {
        const a = l.codegenNode;
        if (a.type === 13) {
          const u = fu(a);
          if ((!u || u === 512 || u === 1) && cu(l, t) >= 2) {
            const f = au(l);
            f && (a.props = t.hoist(f));
          }
          a.dynamicProps && (a.dynamicProps = t.hoist(a.dynamicProps));
        }
      }
    }
    if (l.type === 1) {
      const c = l.tagType === 1;
      c && t.scopes.vSlot++, ms(l, t), c && t.scopes.vSlot--;
    } else if (l.type === 11)
      ms(l, t, l.children.length === 1);
    else if (l.type === 9)
      for (let c = 0; c < l.branches.length; c++)
        ms(
          l.branches[c],
          t,
          l.branches[c].children.length === 1
        );
  }
  if (r && t.transformHoist && t.transformHoist(i, t, e), r && r === s && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && U(e.codegenNode.children)) {
    const o = t.hoist(
      zi(e.codegenNode.children)
    );
    t.hmr && (o.content = `[...${o.content}]`), e.codegenNode.children = o;
  }
}
function st(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const i = n.get(e);
      if (i !== void 0)
        return i;
      const s = e.codegenNode;
      if (s.type !== 13 || s.isBlock && e.tag !== "svg" && e.tag !== "foreignObject")
        return 0;
      if (fu(s))
        return n.set(e, 0), 0;
      {
        let l = 3;
        const c = cu(e, t);
        if (c === 0)
          return n.set(e, 0), 0;
        c < l && (l = c);
        for (let a = 0; a < e.children.length; a++) {
          const u = st(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < l && (l = u);
        }
        if (l > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const f = st(u.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < l && (l = f);
            }
          }
        if (s.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(Vn), t.removeHelper(
            Zn(t.inSSR, s.isComponent)
          ), s.isBlock = !1, t.helper(Qn(t.inSSR, s.isComponent));
        }
        return n.set(e, l), l;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return st(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let o = 3;
      for (let l = 0; l < e.children.length; l++) {
        const c = e.children[l];
        if (Q(c) || ht(c))
          continue;
        const a = st(c, t);
        if (a === 0)
          return 0;
        a < o && (o = a);
      }
      return o;
    default:
      return 0;
  }
}
const bg = /* @__PURE__ */ new Set([
  ol,
  ll,
  $i,
  Gi
]);
function lu(e, t) {
  if (e.type === 14 && !Q(e.callee) && bg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return st(n, t);
    if (n.type === 14)
      return lu(n, t);
  }
  return 0;
}
function cu(e, t) {
  let n = 3;
  const i = au(e);
  if (i && i.type === 15) {
    const { properties: s } = i;
    for (let r = 0; r < s.length; r++) {
      const { key: o, value: l } = s[r], c = st(o, t);
      if (c === 0)
        return c;
      c < n && (n = c);
      let a;
      if (l.type === 4 ? a = st(l, t) : l.type === 14 ? a = lu(l, t) : a = 0, a === 0)
        return a;
      a < n && (n = a);
    }
  }
  return n;
}
function au(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function fu(e) {
  const t = e.patchFlag;
  return t ? parseInt(t, 10) : void 0;
}
function vg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: i = !1,
  hmr: s = !1,
  cacheHandlers: r = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: c = null,
  isBuiltInComponent: a = pe,
  isCustomElement: u = pe,
  expressionPlugins: f = [],
  scopeId: p = null,
  slotted: E = !0,
  ssr: y = !1,
  inSSR: T = !1,
  ssrCssVars: R = "",
  bindingMetadata: P = le,
  inline: O = !1,
  isTS: g = !1,
  onError: _ = dl,
  onWarn: N = Qf,
  compatConfig: I
}) {
  const D = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), b = {
    // options
    filename: t,
    selfName: D && Ot(Ee(D[1])),
    prefixIdentifiers: n,
    hoistStatic: i,
    hmr: s,
    cacheHandlers: r,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: c,
    isBuiltInComponent: a,
    isCustomElement: u,
    expressionPlugins: f,
    scopeId: p,
    slotted: E,
    ssr: y,
    inSSR: T,
    ssrCssVars: R,
    bindingMetadata: P,
    inline: O,
    isTS: g,
    onError: _,
    onWarn: N,
    compatConfig: I,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    cached: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(v) {
      const C = b.helpers.get(v) || 0;
      return b.helpers.set(v, C + 1), v;
    },
    removeHelper(v) {
      const C = b.helpers.get(v);
      if (C) {
        const M = C - 1;
        M ? b.helpers.set(v, M) : b.helpers.delete(v);
      }
    },
    helperString(v) {
      return `_${Yn[b.helper(v)]}`;
    },
    replaceNode(v) {
      if (B.NODE_ENV !== "production") {
        if (!b.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!b.parent)
          throw new Error("Cannot replace root node.");
      }
      b.parent.children[b.childIndex] = b.currentNode = v;
    },
    removeNode(v) {
      if (B.NODE_ENV !== "production" && !b.parent)
        throw new Error("Cannot remove root node.");
      const C = b.parent.children, M = v ? C.indexOf(v) : b.currentNode ? b.childIndex : -1;
      if (B.NODE_ENV !== "production" && M < 0)
        throw new Error("node being removed is not a child of current parent");
      !v || v === b.currentNode ? (b.currentNode = null, b.onNodeRemoved()) : b.childIndex > M && (b.childIndex--, b.onNodeRemoved()), b.parent.children.splice(M, 1);
    },
    onNodeRemoved: pe,
    addIdentifiers(v) {
    },
    removeIdentifiers(v) {
    },
    hoist(v) {
      Q(v) && (v = ne(v)), b.hoists.push(v);
      const C = ne(
        `_hoisted_${b.hoists.length}`,
        !1,
        v.loc,
        2
      );
      return C.hoisted = v, C;
    },
    cache(v, C = !1) {
      return Gm(b.cached++, v, C);
    }
  };
  return b.filters = /* @__PURE__ */ new Set(), b;
}
function Og(e, t) {
  const n = vg(e, t);
  cr(e, n), t.hoistStatic && Ng(e, n), t.ssr || Sg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Sg(e, t) {
  const { helper: n } = t, { children: i } = e;
  if (i.length === 1) {
    const s = i[0];
    if (ou(e, s) && s.codegenNode) {
      const r = s.codegenNode;
      r.type === 13 && ul(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s;
  } else if (i.length > 1) {
    let s = 64, r = Nt[64];
    B.NODE_ENV !== "production" && i.filter((o) => o.type !== 3).length === 1 && (s |= 2048, r += `, ${Nt[2048]}`), e.codegenNode = Li(
      t,
      n(Mi),
      void 0,
      e.children,
      s + (B.NODE_ENV !== "production" ? ` /* ${r} */` : ""),
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function Cg(e, t) {
  let n = 0;
  const i = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const s = e.children[n];
    Q(s) || (t.parent = e, t.childIndex = n, t.onNodeRemoved = i, cr(s, t));
  }
}
function cr(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, i = [];
  for (let r = 0; r < n.length; r++) {
    const o = n[r](e, t);
    if (o && (U(o) ? i.push(...o) : i.push(o)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Ji);
      break;
    case 5:
      t.ssr || t.helper(lr);
      break;
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        cr(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Cg(e, t);
      break;
  }
  t.currentNode = e;
  let s = i.length;
  for (; s--; )
    i[s]();
}
function uu(e, t) {
  const n = Q(e) ? (i) => i === e : (i) => e.test(i);
  return (i, s) => {
    if (i.type === 1) {
      const { props: r } = i;
      if (i.tagType === 3 && r.some(rg))
        return;
      const o = [];
      for (let l = 0; l < r.length; l++) {
        const c = r[l];
        if (c.type === 7 && n(c.name)) {
          r.splice(l, 1), l--;
          const a = t(i, c, s);
          a && o.push(a);
        }
      }
      return o;
    }
  };
}
const ar = "/*#__PURE__*/", du = (e) => `${Yn[e]}: _${Yn[e]}`;
function Tg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: i = !1,
  filename: s = "template.vue.html",
  scopeId: r = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: c = "vue",
  ssrRuntimeModuleName: a = "vue/server-renderer",
  ssr: u = !1,
  isTS: f = !1,
  inSSR: p = !1
}) {
  const E = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: i,
    filename: s,
    scopeId: r,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: c,
    ssrRuntimeModuleName: a,
    ssr: u,
    isTS: f,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(T) {
      return `_${Yn[T]}`;
    },
    push(T, R = -2, P) {
      E.code += T;
    },
    indent() {
      y(++E.indentLevel);
    },
    deindent(T = !1) {
      T ? --E.indentLevel : y(--E.indentLevel);
    },
    newline() {
      y(E.indentLevel);
    }
  };
  function y(T) {
    E.push(
      `
` + "  ".repeat(T),
      0
      /* Start */
    );
  }
  return E;
}
function wg(e, t = {}) {
  const n = Tg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: i,
    push: s,
    prefixIdentifiers: r,
    indent: o,
    deindent: l,
    newline: c,
    scopeId: a,
    ssr: u
  } = n, f = Array.from(e.helpers), p = f.length > 0, E = !r && i !== "module";
  Dg(e, n);
  const T = u ? "ssrRender" : "render", P = (u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (s(`function ${T}(${P}) {`), o(), E && (s("with (_ctx) {"), o(), p && (s(
    `const { ${f.map(du).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), c())), e.components.length && (Tr(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (Tr(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), Tr(e.filters, "filter", n), c()), e.temps > 0) {
    s("let ");
    for (let O = 0; O < e.temps; O++)
      s(`${O > 0 ? ", " : ""}_temp${O}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (s(
    `
`,
    0
    /* Start */
  ), c()), u || s("return "), e.codegenNode ? Fe(e.codegenNode, n) : s("null"), E && (l(), s("}")), l(), s("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Dg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: i,
    push: s,
    newline: r,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: c
  } = t, a = l, u = Array.from(e.helpers);
  if (u.length > 0 && (s(
    `const _Vue = ${a}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const f = [
      Xo,
      Qo,
      Ji,
      Zo,
      Gf
    ].filter((p) => u.includes(p)).map(du).join(", ");
    s(
      `const { ${f} } = _Vue
`,
      -1
      /* End */
    );
  }
  Vg(e.hoists, t), r(), s("return ");
}
function Tr(e, t, { helper: n, push: i, newline: s, isTS: r }) {
  const o = n(
    t === "filter" ? il : t === "component" ? el : nl
  );
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    const a = c.endsWith("__self");
    a && (c = c.slice(0, -6)), i(
      `const ${Bi(c, t)} = ${o}(${JSON.stringify(c)}${a ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && s();
  }
}
function Vg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: i, helper: s, scopeId: r, mode: o } = t;
  i();
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    c && (n(
      `const _hoisted_${l + 1} = `
    ), Fe(c, t), i());
  }
  t.pure = !1;
}
function xg(e) {
  return Q(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function hl(e, t) {
  const n = e.length > 3 || B.NODE_ENV !== "production" && e.some((i) => U(i) || !xg(i));
  t.push("["), n && t.indent(), Yi(e, t, n), n && t.deindent(), t.push("]");
}
function Yi(e, t, n = !1, i = !0) {
  const { push: s, newline: r } = t;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Q(l) ? s(
      l,
      -3
      /* Unknown */
    ) : U(l) ? hl(l, t) : Fe(l, t), o < e.length - 1 && (n ? (i && s(","), r()) : i && s(", "));
  }
}
function Fe(e, t) {
  if (Q(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (ht(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      B.NODE_ENV !== "production" && _c(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), Fe(e.codegenNode, t);
      break;
    case 2:
      Ag(e, t);
      break;
    case 4:
      pu(e, t);
      break;
    case 5:
      Ig(e, t);
      break;
    case 12:
      Fe(e.codegenNode, t);
      break;
    case 8:
      hu(e, t);
      break;
    case 3:
      Rg(e, t);
      break;
    case 13:
      Pg(e, t);
      break;
    case 14:
      $g(e, t);
      break;
    case 15:
      Lg(e, t);
      break;
    case 17:
      Fg(e, t);
      break;
    case 18:
      Bg(e, t);
      break;
    case 19:
      Hg(e, t);
      break;
    case 20:
      Ug(e, t);
      break;
    case 21:
      Yi(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (B.NODE_ENV !== "production")
        return _c(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function Ag(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function pu(e, t) {
  const { content: n, isStatic: i } = e;
  t.push(
    i ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Ig(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(ar), n(`${i(lr)}(`), Fe(e.content, t), n(")");
}
function hu(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    Q(i) ? t.push(
      i,
      -3
      /* Unknown */
    ) : Fe(i, t);
  }
}
function kg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), hu(e, t), n("]");
  else if (e.isStatic) {
    const i = pl(e.content) ? e.content : JSON.stringify(e.content);
    n(i, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Rg(e, t) {
  const { push: n, helper: i, pure: s } = t;
  s && n(ar), n(
    `${i(Ji)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Pg(e, t) {
  const { push: n, helper: i, pure: s } = t, {
    tag: r,
    props: o,
    children: l,
    patchFlag: c,
    dynamicProps: a,
    directives: u,
    isBlock: f,
    disableTracking: p,
    isComponent: E
  } = e;
  u && n(i(sl) + "("), f && n(`(${i(Vn)}(${p ? "true" : ""}), `), s && n(ar);
  const y = f ? Zn(t.inSSR, E) : Qn(t.inSSR, E);
  n(i(y) + "(", -2, e), Yi(
    Mg([r, o, l, c, a]),
    t
  ), n(")"), f && n(")"), u && (n(", "), Fe(u, t), n(")"));
}
function Mg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function $g(e, t) {
  const { push: n, helper: i, pure: s } = t, r = Q(e.callee) ? e.callee : i(e.callee);
  s && n(ar), n(r + "(", -2, e), Yi(e.arguments, t), n(")");
}
function Lg(e, t) {
  const { push: n, indent: i, deindent: s, newline: r } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || B.NODE_ENV !== "production" && o.some((c) => c.value.type !== 4);
  n(l ? "{" : "{ "), l && i();
  for (let c = 0; c < o.length; c++) {
    const { key: a, value: u } = o[c];
    kg(a, t), n(": "), Fe(u, t), c < o.length - 1 && (n(","), r());
  }
  l && s(), n(l ? "}" : " }");
}
function Fg(e, t) {
  hl(e.elements, t);
}
function Bg(e, t) {
  const { push: n, indent: i, deindent: s } = t, { params: r, returns: o, body: l, newline: c, isSlot: a } = e;
  a && n(`_${Yn[al]}(`), n("(", -2, e), U(r) ? Yi(r, t) : r && Fe(r, t), n(") => "), (c || l) && (n("{"), i()), o ? (c && n("return "), U(o) ? hl(o, t) : Fe(o, t)) : l && Fe(l, t), (c || l) && (s(), n("}")), a && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Hg(e, t) {
  const { test: n, consequent: i, alternate: s, newline: r } = e, { push: o, indent: l, deindent: c, newline: a } = t;
  if (n.type === 4) {
    const f = !pl(n.content);
    f && o("("), pu(n, t), f && o(")");
  } else
    o("("), Fe(n, t), o(")");
  r && l(), t.indentLevel++, r || o(" "), o("? "), Fe(i, t), t.indentLevel--, r && a(), r || o(" "), o(": ");
  const u = s.type === 19;
  u || t.indentLevel++, Fe(s, t), u || t.indentLevel--, r && c(
    !0
    /* without newline */
  );
}
function Ug(e, t) {
  const { push: n, helper: i, indent: s, deindent: r, newline: o } = t;
  n(`_cache[${e.index}] || (`), e.isVNode && (s(), n(`${i(Is)}(-1),`), o()), n(`_cache[${e.index}] = `), Fe(e.value, t), e.isVNode && (n(","), o(), n(`${i(Is)}(1),`), o(), n(`_cache[${e.index}]`), r()), n(")");
}
const jg = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), Kg = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function gn(e, t, n = !1, i = !1) {
  const s = e.content;
  if (s.trim())
    try {
      new Function(
        i ? ` ${s} ` : `return ${n ? `(${s}) => {}` : `(${s})`}`
      );
    } catch (r) {
      let o = r.message;
      const l = s.replace(Kg, "").match(jg);
      l && (o = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        ue(
          45,
          e.loc,
          void 0,
          o
        )
      );
    }
}
const Wg = (e, t) => {
  if (e.type === 5)
    e.content = wr(
      e.content,
      t
    );
  else if (e.type === 1)
    for (let n = 0; n < e.props.length; n++) {
      const i = e.props[n];
      if (i.type === 7 && i.name !== "for") {
        const s = i.exp, r = i.arg;
        s && s.type === 4 && !(i.name === "on" && r) && (i.exp = wr(
          s,
          t,
          // slot args must be processed as function params
          i.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (i.arg = wr(r, t));
      }
    }
};
function wr(e, t, n = !1, i = !1, s = Object.create(t.identifiers)) {
  return B.NODE_ENV !== "production" && gn(e, t, n, i), e;
}
const qg = uu(
  /^(if|else|else-if)$/,
  (e, t, n) => Jg(e, t, n, (i, s, r) => {
    const o = n.parent.children;
    let l = o.indexOf(i), c = 0;
    for (; l-- >= 0; ) {
      const a = o[l];
      a && a.type === 9 && (c += a.branches.length);
    }
    return () => {
      if (r)
        i.codegenNode = Cc(
          s,
          c,
          n
        );
      else {
        const a = zg(i.codegenNode);
        a.alternate = Cc(
          s,
          c + i.branches.length - 1,
          n
        );
      }
    };
  })
);
function Jg(e, t, n, i) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const s = t.exp ? t.exp.loc : e.loc;
    n.onError(
      ue(28, t.loc)
    ), t.exp = ne("true", !1, s);
  }
  if (B.NODE_ENV !== "production" && t.exp && gn(t.exp, n), t.name === "if") {
    const s = Sc(e, t), r = {
      type: 9,
      loc: e.loc,
      branches: [s]
    };
    if (n.replaceNode(r), i)
      return i(r, s, !0);
  } else {
    const s = n.parent.children, r = [];
    let o = s.indexOf(e);
    for (; o-- >= -1; ) {
      const l = s[o];
      if (l && l.type === 3) {
        n.removeNode(l), B.NODE_ENV !== "production" && r.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          ue(30, e.loc)
        ), n.removeNode();
        const c = Sc(e, t);
        if (B.NODE_ENV !== "production" && r.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (c.children = [...r, ...c.children]), B.NODE_ENV !== "production") {
          const u = c.userKey;
          u && l.branches.forEach(({ userKey: f }) => {
            Gg(f, u) && n.onError(
              ue(
                29,
                c.userKey.loc
              )
            );
          });
        }
        l.branches.push(c);
        const a = i && i(l, c, !1);
        cr(c, n), a && a(), n.currentNode = null;
      } else
        n.onError(
          ue(30, e.loc)
        );
      break;
    }
  }
}
function Sc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !nt(e, "for") ? e.children : [e],
    userKey: Fi(e, "key"),
    isTemplateIf: n
  };
}
function Cc(e, t, n) {
  return e.condition ? io(
    e.condition,
    Tc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Te(n.helper(Ji), [
      B.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : Tc(e, t, n);
}
function Tc(e, t, n) {
  const { helper: i } = n, s = _e(
    "key",
    ne(
      `${t}`,
      !1,
      Ze,
      2
    )
  ), { children: r } = e, o = r[0];
  if (r.length !== 1 || o.type !== 1)
    if (r.length === 1 && o.type === 11) {
      const c = o.codegenNode;
      return $s(c, s, n), c;
    } else {
      let c = 64, a = Nt[64];
      return B.NODE_ENV !== "production" && !e.isTemplateIf && r.filter((u) => u.type !== 3).length === 1 && (c |= 2048, a += `, ${Nt[2048]}`), Li(
        n,
        i(Mi),
        it([s]),
        r,
        c + (B.NODE_ENV !== "production" ? ` /* ${a} */` : ""),
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const c = o.codegenNode, a = lg(c);
    return a.type === 13 && ul(a, n), $s(a, s, n), c;
  }
}
function Gg(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, i = t.exp;
    if (n.type !== i.type || n.type !== 4 || n.isStatic !== i.isStatic || n.content !== i.content)
      return !1;
  }
  return !0;
}
function zg(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else
      e.type === 20 && (e = e.value);
}
const Yg = uu(
  "for",
  (e, t, n) => {
    const { helper: i, removeHelper: s } = n;
    return Xg(e, t, n, (r) => {
      const o = Te(i(rl), [
        r.source
      ]), l = Ps(e), c = nt(e, "memo"), a = Fi(e, "key"), u = a && (a.type === 6 ? ne(a.value.content, !0) : a.exp), f = a ? _e("key", u) : null, p = r.source.type === 4 && r.source.constType > 0, E = p ? 64 : a ? 128 : 256;
      return r.codegenNode = Li(
        n,
        i(Mi),
        void 0,
        o,
        E + (B.NODE_ENV !== "production" ? ` /* ${Nt[E]} */` : ""),
        void 0,
        void 0,
        !0,
        !p,
        !1,
        e.loc
      ), () => {
        let y;
        const { children: T } = r;
        B.NODE_ENV !== "production" && l && e.children.some((O) => {
          if (O.type === 1) {
            const g = Fi(O, "key");
            if (g)
              return n.onError(
                ue(
                  33,
                  g.loc
                )
              ), !0;
          }
        });
        const R = T.length !== 1 || T[0].type !== 1, P = Ms(e) ? e : l && e.children.length === 1 && Ms(e.children[0]) ? e.children[0] : null;
        if (P ? (y = P.codegenNode, l && f && $s(y, f, n)) : R ? y = Li(
          n,
          i(Mi),
          f ? it([f]) : void 0,
          e.children,
          64 + (B.NODE_ENV !== "production" ? ` /* ${Nt[64]} */` : ""),
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (y = T[0].codegenNode, l && f && $s(y, f, n), y.isBlock !== !p && (y.isBlock ? (s(Vn), s(
          Zn(n.inSSR, y.isComponent)
        )) : s(
          Qn(n.inSSR, y.isComponent)
        )), y.isBlock = !p, y.isBlock ? (i(Vn), i(Zn(n.inSSR, y.isComponent))) : i(Qn(n.inSSR, y.isComponent))), c) {
          const O = Xn(
            lo(r.parseResult, [
              ne("_cached")
            ])
          );
          O.body = zm([
            pt(["const _memo = (", c.exp, ")"]),
            pt([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                Xf
              )}(_cached, _memo)) return _cached`
            ]),
            pt(["const _item = ", y]),
            ne("_item.memo = _memo"),
            ne("return _item")
          ]), o.arguments.push(
            O,
            ne("_cache"),
            ne(String(n.cached++))
          );
        } else
          o.arguments.push(
            Xn(
              lo(r.parseResult),
              y,
              !0
            )
          );
      };
    });
  }
);
function Xg(e, t, n, i) {
  if (!t.exp) {
    n.onError(
      ue(31, t.loc)
    );
    return;
  }
  const s = t.forParseResult;
  if (!s) {
    n.onError(
      ue(32, t.loc)
    );
    return;
  }
  mu(s, n);
  const { addIdentifiers: r, removeIdentifiers: o, scopes: l } = n, { source: c, value: a, key: u, index: f } = s, p = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: a,
    keyAlias: u,
    objectIndexAlias: f,
    parseResult: s,
    children: Ps(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const E = i && i(p);
  return () => {
    l.vFor--, E && E();
  };
}
function mu(e, t) {
  e.finalized || (B.NODE_ENV !== "production" && (gn(e.source, t), e.key && gn(
    e.key,
    t,
    !0
  ), e.index && gn(
    e.index,
    t,
    !0
  ), e.value && gn(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function lo({ value: e, key: t, index: n }, i = []) {
  return Qg([e, t, n, ...i]);
}
function Qg(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, i) => n || ne("_".repeat(i + 1), !1));
}
const wc = ne("undefined", !1), Zg = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = nt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, eE = (e, t, n, i) => Xn(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : i
);
function tE(e, t, n = eE) {
  t.helper(al);
  const { children: i, loc: s } = e, r = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const c = nt(e, "slot", !0);
  if (c) {
    const { arg: R, exp: P } = c;
    R && !ze(R) && (l = !0), r.push(
      _e(
        R || ne("default", !0),
        n(P, void 0, i, s)
      )
    );
  }
  let a = !1, u = !1;
  const f = [], p = /* @__PURE__ */ new Set();
  let E = 0;
  for (let R = 0; R < i.length; R++) {
    const P = i[R];
    let O;
    if (!Ps(P) || !(O = nt(P, "slot", !0))) {
      P.type !== 3 && f.push(P);
      continue;
    }
    if (c) {
      t.onError(
        ue(37, O.loc)
      );
      break;
    }
    a = !0;
    const { children: g, loc: _ } = P, {
      arg: N = ne("default", !0),
      exp: I,
      loc: D
    } = O;
    let b;
    ze(N) ? b = N ? N.content : "default" : l = !0;
    const v = nt(P, "for"), C = n(I, v, g, _);
    let M, V;
    if (M = nt(P, "if"))
      l = !0, o.push(
        io(
          M.exp,
          as(N, C, E++),
          wc
        )
      );
    else if (V = nt(
      P,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let K = R, Y;
      for (; K-- && (Y = i[K], Y.type === 3); )
        ;
      if (Y && Ps(Y) && nt(Y, "if")) {
        i.splice(R, 1), R--;
        let te = o[o.length - 1];
        for (; te.alternate.type === 19; )
          te = te.alternate;
        te.alternate = V.exp ? io(
          V.exp,
          as(
            N,
            C,
            E++
          ),
          wc
        ) : as(N, C, E++);
      } else
        t.onError(
          ue(30, V.loc)
        );
    } else if (v) {
      l = !0;
      const K = v.forParseResult;
      K ? (mu(K, t), o.push(
        Te(t.helper(rl), [
          K.source,
          Xn(
            lo(K),
            as(N, C),
            !0
          )
        ])
      )) : t.onError(
        ue(
          32,
          v.loc
        )
      );
    } else {
      if (b) {
        if (p.has(b)) {
          t.onError(
            ue(
              38,
              D
            )
          );
          continue;
        }
        p.add(b), b === "default" && (u = !0);
      }
      r.push(_e(N, C));
    }
  }
  if (!c) {
    const R = (P, O) => {
      const g = n(P, void 0, O, s);
      return t.compatConfig && (g.isNonScopedSlot = !0), _e("default", g);
    };
    a ? f.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    f.some((P) => gu(P)) && (u ? t.onError(
      ue(
        39,
        f[0].loc
      )
    ) : r.push(
      R(void 0, f)
    )) : r.push(R(void 0, i));
  }
  const y = l ? 2 : gs(e.children) ? 3 : 1;
  let T = it(
    r.concat(
      _e(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        ne(
          y + (B.NODE_ENV !== "production" ? ` /* ${$u[y]} */` : ""),
          !1
        )
      )
    ),
    s
  );
  return o.length && (T = Te(t.helper(Yf), [
    T,
    zi(o)
  ])), {
    slots: T,
    hasDynamicSlots: l
  };
}
function as(e, t, n) {
  const i = [
    _e("name", e),
    _e("fn", t)
  ];
  return n != null && i.push(
    _e("key", ne(String(n), !0))
  ), it(i);
}
function gs(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || gs(n.children))
          return !0;
        break;
      case 9:
        if (gs(n.branches))
          return !0;
        break;
      case 10:
      case 11:
        if (gs(n.children))
          return !0;
        break;
    }
  }
  return !1;
}
function gu(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : gu(e.content);
}
const Eu = /* @__PURE__ */ new WeakMap(), nE = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: i, props: s } = e, r = e.tagType === 1;
  let o = r ? iE(e, t) : `"${i}"`;
  const l = oe(o) && o.callee === tl;
  let c, a, u, f = 0, p, E, y, T = (
    // dynamic component may resolve to plain elements
    l || o === Si || o === Yo || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (i === "svg" || i === "foreignObject")
  );
  if (s.length > 0) {
    const R = yu(
      e,
      t,
      void 0,
      r,
      l
    );
    c = R.props, f = R.patchFlag, E = R.dynamicPropNames;
    const P = R.directives;
    y = P && P.length ? zi(
      P.map((O) => rE(O, t))
    ) : void 0, R.shouldUseBlock && (T = !0);
  }
  if (e.children.length > 0)
    if (o === xs && (T = !0, f |= 1024, B.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      ue(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), r && // Teleport is not a real component and has dedicated runtime handling
    o !== Si && // explained above.
    o !== xs) {
      const { slots: P, hasDynamicSlots: O } = tE(e, t);
      a = P, O && (f |= 1024);
    } else if (e.children.length === 1 && o !== Si) {
      const P = e.children[0], O = P.type, g = O === 5 || O === 8;
      g && st(P, t) === 0 && (f |= 1), g || O === 2 ? a = P : a = e.children;
    } else
      a = e.children;
  if (f !== 0) {
    if (B.NODE_ENV !== "production")
      if (f < 0)
        u = f + ` /* ${Nt[f]} */`;
      else {
        const R = Object.keys(Nt).map(Number).filter((P) => P > 0 && f & P).map((P) => Nt[P]).join(", ");
        u = f + ` /* ${R} */`;
      }
    else
      u = String(f);
    E && E.length && (p = oE(E));
  }
  e.codegenNode = Li(
    t,
    o,
    c,
    a,
    u,
    p,
    y,
    !!T,
    !1,
    r,
    e.loc
  );
};
function iE(e, t, n = !1) {
  let { tag: i } = e;
  const s = co(i), r = Fi(e, "is");
  if (r)
    if (s || nn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      const l = r.type === 6 ? r.value && ne(r.value.content, !0) : r.exp;
      if (l)
        return Te(t.helper(tl), [
          l
        ]);
    } else
      r.type === 6 && r.value.content.startsWith("vue:") && (i = r.value.content.slice(4));
  const o = Zf(i) || t.isBuiltInComponent(i);
  return o ? (n || t.helper(o), o) : (t.helper(el), t.components.add(i), Bi(i, "component"));
}
function yu(e, t, n = e.props, i, s, r = !1) {
  const { tag: o, loc: l, children: c } = e;
  let a = [];
  const u = [], f = [], p = c.length > 0;
  let E = !1, y = 0, T = !1, R = !1, P = !1, O = !1, g = !1, _ = !1;
  const N = [], I = (v) => {
    a.length && (u.push(
      it(Dc(a), l)
    ), a = []), v && u.push(v);
  }, D = ({ key: v, value: C }) => {
    if (ze(v)) {
      const M = v.content, V = It(M);
      if (V && (!i || s) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      M.toLowerCase() !== "onclick" && // omit v-model handlers
      M !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Yt(M) && (O = !0), V && Yt(M) && (_ = !0), V && C.type === 14 && (C = C.arguments[0]), C.type === 20 || (C.type === 4 || C.type === 8) && st(C, t) > 0)
        return;
      M === "ref" ? T = !0 : M === "class" ? R = !0 : M === "style" ? P = !0 : M !== "key" && !N.includes(M) && N.push(M), i && (M === "class" || M === "style") && !N.includes(M) && N.push(M);
    } else
      g = !0;
  };
  for (let v = 0; v < n.length; v++) {
    const C = n[v];
    if (C.type === 6) {
      const { loc: M, name: V, nameLoc: K, value: Y } = C;
      let te = !0;
      if (V === "ref" && (T = !0, t.scopes.vFor > 0 && a.push(
        _e(
          ne("ref_for", !0),
          ne("true")
        )
      )), V === "is" && (co(o) || Y && Y.content.startsWith("vue:") || nn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      a.push(
        _e(
          ne(V, !0, K),
          ne(
            Y ? Y.content : "",
            te,
            Y ? Y.loc : M
          )
        )
      );
    } else {
      const { name: M, arg: V, exp: K, loc: Y, modifiers: te } = C, q = M === "bind", G = M === "on";
      if (M === "slot") {
        i || t.onError(
          ue(40, Y)
        );
        continue;
      }
      if (M === "once" || M === "memo" || M === "is" || q && zt(V, "is") && (co(o) || nn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || G && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (q && zt(V, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        G && p && zt(V, "vue:before-update")) && (E = !0), q && zt(V, "ref") && t.scopes.vFor > 0 && a.push(
          _e(
            ne("ref_for", !0),
            ne("true")
          )
        ), !V && (q || G)
      ) {
        if (g = !0, K)
          if (q) {
            if (I(), B.NODE_ENV !== "production" && u.some((et) => et.type === 15 ? et.properties.some(({ key: lt }) => lt.type !== 4 || !lt.isStatic ? !0 : lt.content !== "class" && lt.content !== "style" && !It(lt.content)) : !0) && ei(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              Y
            ), nn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              u.unshift(K);
              continue;
            }
            u.push(K);
          } else
            I({
              type: 14,
              loc: Y,
              callee: t.helper(cl),
              arguments: i ? [K] : [K, "true"]
            });
        else
          t.onError(
            ue(
              q ? 34 : 35,
              Y
            )
          );
        continue;
      }
      q && te.includes("prop") && (y |= 32);
      const W = t.directiveTransforms[M];
      if (W) {
        const { props: De, needRuntime: et } = W(C, e, t);
        !r && De.forEach(D), G && V && !ze(V) ? I(it(De, l)) : a.push(...De), et && (f.push(C), ht(et) && Eu.set(C, et));
      } else
        Lc(M) || (f.push(C), p && (E = !0));
    }
  }
  let b;
  if (u.length ? (I(), u.length > 1 ? b = Te(
    t.helper(As),
    u,
    l
  ) : b = u[0]) : a.length && (b = it(
    Dc(a),
    l
  )), g ? y |= 16 : (R && !i && (y |= 2), P && !i && (y |= 4), N.length && (y |= 8), O && (y |= 32)), !E && (y === 0 || y === 32) && (T || _ || f.length > 0) && (y |= 512), !t.inSSR && b)
    switch (b.type) {
      case 15:
        let v = -1, C = -1, M = !1;
        for (let Y = 0; Y < b.properties.length; Y++) {
          const te = b.properties[Y].key;
          ze(te) ? te.content === "class" ? v = Y : te.content === "style" && (C = Y) : te.isHandlerKey || (M = !0);
        }
        const V = b.properties[v], K = b.properties[C];
        M ? b = Te(
          t.helper($i),
          [b]
        ) : (V && !ze(V.value) && (V.value = Te(
          t.helper(ol),
          [V.value]
        )), K && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (P || K.value.type === 4 && K.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        K.value.type === 17) && (K.value = Te(
          t.helper(ll),
          [K.value]
        )));
        break;
      case 14:
        break;
      default:
        b = Te(
          t.helper($i),
          [
            Te(t.helper(Gi), [
              b
            ])
          ]
        );
        break;
    }
  return {
    props: b,
    directives: f,
    patchFlag: y,
    dynamicPropNames: N,
    shouldUseBlock: E
  };
}
function Dc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    if (s.key.type === 8 || !s.key.isStatic) {
      n.push(s);
      continue;
    }
    const r = s.key.content, o = t.get(r);
    o ? (r === "style" || r === "class" || It(r)) && sE(o, s) : (t.set(r, s), n.push(s));
  }
  return n;
}
function sE(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = zi(
    [e.value, t.value],
    e.loc
  );
}
function rE(e, t) {
  const n = [], i = Eu.get(e);
  i ? n.push(t.helperString(i)) : (t.helper(nl), t.directives.add(e.name), n.push(Bi(e.name, "directive")));
  const { loc: s } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = ne("true", !1, s);
    n.push(
      it(
        e.modifiers.map(
          (o) => _e(o, r)
        ),
        s
      )
    );
  }
  return zi(n, e.loc);
}
function oE(e) {
  let t = "[";
  for (let n = 0, i = e.length; n < i; n++)
    t += JSON.stringify(e[n]), n < i - 1 && (t += ", ");
  return t + "]";
}
function co(e) {
  return e === "component" || e === "Component";
}
const lE = (e, t) => {
  if (Ms(e)) {
    const { children: n, loc: i } = e, { slotName: s, slotProps: r } = cE(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      s,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (o[2] = r, l = 3), n.length && (o[3] = Xn([], n, !1, !1, i), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = Te(
      t.helper(zf),
      o,
      i
    );
  }
};
function cE(e, t) {
  let n = '"default"', i;
  const s = [];
  for (let r = 0; r < e.props.length; r++) {
    const o = e.props[r];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = Ee(o.name), s.push(o)));
    else if (o.name === "bind" && zt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = Ee(o.arg.content);
        n = o.exp = ne(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && ze(o.arg) && (o.arg.content = Ee(o.arg.content)), s.push(o);
  }
  if (s.length > 0) {
    const { props: r, directives: o } = yu(
      e,
      t,
      s,
      !1,
      !1
    );
    i = r, o.length && t.onError(
      ue(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: i
  };
}
const aE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, _u = (e, t, n, i) => {
  const { loc: s, modifiers: r, arg: o } = e;
  !e.exp && !r.length && n.onError(ue(35, s));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let f = o.content;
      B.NODE_ENV !== "production" && f.startsWith("vnode") && n.onError(ue(51, o.loc)), f.startsWith("vue:") && (f = `vnode-${f.slice(4)}`);
      const p = t.tagType !== 0 || f.startsWith("vnode") || !/[A-Z]/.test(f) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        yt(Ee(f))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${f}`
      );
      l = ne(p, !0, o.loc);
    } else
      l = pt([
        `${n.helperString(no)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(no)}(`), l.children.push(")");
  let c = e.exp;
  c && !c.content.trim() && (c = void 0);
  let a = n.cacheHandlers && !c && !n.inVOnce;
  if (c) {
    const f = eu(c.content), p = !(f || aE.test(c.content)), E = c.content.includes(";");
    B.NODE_ENV !== "production" && gn(
      c,
      n,
      !1,
      E
    ), (p || a && f) && (c = pt([
      `${p ? "$event" : "(...args)"} => ${E ? "{" : "("}`,
      c,
      E ? "}" : ")"
    ]));
  }
  let u = {
    props: [
      _e(
        l,
        c || ne("() => {}", !1, s)
      )
    ]
  };
  return i && (u = i(u)), a && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((f) => f.key.isHandlerKey = !0), u;
}, fE = (e, t, n) => {
  const { modifiers: i, loc: s } = e, r = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        ue(
          52,
          r.loc
        )
      ), {
        props: [
          _e(r, ne("", !0, s))
        ]
      };
    const l = Ee(r.content);
    o = e.exp = ne(l, !1, r.loc);
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = `${r.content} || ""`), i.includes("camel") && (r.type === 4 ? r.isStatic ? r.content = Ee(r.content) : r.content = `${n.helperString(to)}(${r.content})` : (r.children.unshift(`${n.helperString(to)}(`), r.children.push(")"))), n.inSSR || (i.includes("prop") && Vc(r, "."), i.includes("attr") && Vc(r, "^")), {
    props: [_e(r, o)]
  };
}, Vc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, uE = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let i, s = !1;
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (Cr(o)) {
          s = !0;
          for (let l = r + 1; l < n.length; l++) {
            const c = n[l];
            if (Cr(c))
              i || (i = n[r] = pt(
                [o],
                o.loc
              )), i.children.push(" + ", c), n.splice(l, 1), l--;
            else {
              i = void 0;
              break;
            }
          }
        }
      }
      if (!(!s || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (r) => r.type === 7 && !t.directiveTransforms[r.name]
      ) && e.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if (Cr(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !t.ssr && st(o, t) === 0 && l.push(
              1 + (B.NODE_ENV !== "production" ? ` /* ${Nt[1]} */` : "")
            ), n[r] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: Te(
                t.helper(Zo),
                l
              )
            };
          }
        }
    };
}, xc = /* @__PURE__ */ new WeakSet(), dE = (e, t) => {
  if (e.type === 1 && nt(e, "once", !0))
    return xc.has(e) || t.inVOnce || t.inSSR ? void 0 : (xc.add(e), t.inVOnce = !0, t.helper(Is), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0
        /* isVNode */
      ));
    });
}, Nu = (e, t, n) => {
  const { exp: i, arg: s } = e;
  if (!i)
    return n.onError(
      ue(41, e.loc)
    ), fs();
  const r = i.loc.source, o = i.type === 4 ? i.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(ue(44, i.loc)), fs();
  if (!o.trim() || !eu(o) && !!1)
    return n.onError(
      ue(42, i.loc)
    ), fs();
  const a = s || ne("modelValue", !0), u = s ? ze(s) ? `onUpdate:${Ee(s.content)}` : pt(['"onUpdate:" + ', s]) : "onUpdate:modelValue";
  let f;
  const p = n.isTS ? "($event: any)" : "$event";
  f = pt([
    `${p} => ((`,
    i,
    ") = $event)"
  ]);
  const E = [
    // modelValue: foo
    _e(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    _e(u, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const y = e.modifiers.map((R) => (pl(R) ? R : JSON.stringify(R)) + ": true").join(", "), T = s ? ze(s) ? `${s.content}Modifiers` : pt([s, ' + "Modifiers"']) : "modelModifiers";
    E.push(
      _e(
        T,
        ne(
          `{ ${y} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return fs(E);
};
function fs(e = []) {
  return { props: e };
}
const pE = /[\w).+\-_$\]]/, hE = (e, t) => {
  nn("COMPILER_FILTERS", t) && (e.type === 5 && Fs(e.content, t), e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Fs(n.exp, t);
  }));
};
function Fs(e, t) {
  if (e.type === 4)
    Ac(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      typeof i == "object" && (i.type === 4 ? Ac(i, t) : i.type === 8 ? Fs(e, t) : i.type === 5 && Fs(i.content, t));
    }
}
function Ac(e, t) {
  const n = e.content;
  let i = !1, s = !1, r = !1, o = !1, l = 0, c = 0, a = 0, u = 0, f, p, E, y, T = [];
  for (E = 0; E < n.length; E++)
    if (p = f, f = n.charCodeAt(E), i)
      f === 39 && p !== 92 && (i = !1);
    else if (s)
      f === 34 && p !== 92 && (s = !1);
    else if (r)
      f === 96 && p !== 92 && (r = !1);
    else if (o)
      f === 47 && p !== 92 && (o = !1);
    else if (f === 124 && // pipe
    n.charCodeAt(E + 1) !== 124 && n.charCodeAt(E - 1) !== 124 && !l && !c && !a)
      y === void 0 ? (u = E + 1, y = n.slice(0, E).trim()) : R();
    else {
      switch (f) {
        case 34:
          s = !0;
          break;
        case 39:
          i = !0;
          break;
        case 96:
          r = !0;
          break;
        case 40:
          a++;
          break;
        case 41:
          a--;
          break;
        case 91:
          c++;
          break;
        case 93:
          c--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (f === 47) {
        let P = E - 1, O;
        for (; P >= 0 && (O = n.charAt(P), O === " "); P--)
          ;
        (!O || !pE.test(O)) && (o = !0);
      }
    }
  y === void 0 ? y = n.slice(0, E).trim() : u !== 0 && R();
  function R() {
    T.push(n.slice(u, E).trim()), u = E + 1;
  }
  if (T.length) {
    for (B.NODE_ENV !== "production" && Rs(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), E = 0; E < T.length; E++)
      y = mE(y, T[E], t);
    e.content = y;
  }
}
function mE(e, t, n) {
  n.helper(il);
  const i = t.indexOf("(");
  if (i < 0)
    return n.filters.add(t), `${Bi(t, "filter")}(${e})`;
  {
    const s = t.slice(0, i), r = t.slice(i + 1);
    return n.filters.add(s), `${Bi(s, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Ic = /* @__PURE__ */ new WeakSet(), gE = (e, t) => {
  if (e.type === 1) {
    const n = nt(e, "memo");
    return !n || Ic.has(e) ? void 0 : (Ic.add(e), () => {
      const i = e.codegenNode || t.currentNode.codegenNode;
      i && i.type === 13 && (e.tagType !== 1 && ul(i, t), e.codegenNode = Te(t.helper(fl), [
        n.exp,
        Xn(void 0, i),
        "_cache",
        String(t.cached++)
      ]));
    });
  }
};
function EE(e) {
  return [
    [
      dE,
      qg,
      gE,
      Yg,
      hE,
      ...B.NODE_ENV !== "production" ? [Wg] : [],
      lE,
      nE,
      Zg,
      uE
    ],
    {
      on: _u,
      bind: fE,
      model: Nu
    }
  ];
}
function yE(e, t = {}) {
  const n = t.onError || dl, i = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(ue(47)) : i && n(ue(48));
  const s = !1;
  t.cacheHandlers && n(ue(49)), t.scopeId && !i && n(ue(50));
  const r = ie({}, t, {
    prefixIdentifiers: s
  }), o = Q(e) ? _g(e, r) : e, [l, c] = EE();
  return Og(
    o,
    ie({}, r, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: ie(
        {},
        c,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), wg(o, r);
}
const _E = () => ({ props: [] });
var Be = {};
const bu = Symbol(Be.NODE_ENV !== "production" ? "vModelRadio" : ""), vu = Symbol(Be.NODE_ENV !== "production" ? "vModelCheckbox" : ""), Ou = Symbol(Be.NODE_ENV !== "production" ? "vModelText" : ""), Su = Symbol(Be.NODE_ENV !== "production" ? "vModelSelect" : ""), ao = Symbol(Be.NODE_ENV !== "production" ? "vModelDynamic" : ""), Cu = Symbol(Be.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""), Tu = Symbol(Be.NODE_ENV !== "production" ? "vOnKeysGuard" : ""), wu = Symbol(Be.NODE_ENV !== "production" ? "vShow" : ""), ml = Symbol(Be.NODE_ENV !== "production" ? "Transition" : ""), Du = Symbol(Be.NODE_ENV !== "production" ? "TransitionGroup" : "");
qm({
  [bu]: "vModelRadio",
  [vu]: "vModelCheckbox",
  [Ou]: "vModelText",
  [Su]: "vModelSelect",
  [ao]: "vModelDynamic",
  [Cu]: "withModifiers",
  [Tu]: "withKeys",
  [wu]: "vShow",
  [ml]: "Transition",
  [Du]: "TransitionGroup"
});
let Mn;
function NE(e, t = !1) {
  return Mn || (Mn = document.createElement("div")), t ? (Mn.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, Mn.children[0].getAttribute("foo")) : (Mn.innerHTML = e, Mn.textContent);
}
const bE = {
  parseMode: "html",
  isVoidTag: Yu,
  isNativeTag: (e) => Bc(e) || Hc(e) || Uc(e),
  isPreTag: (e) => e === "pre",
  decodeEntities: NE,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return ml;
    if (e === "TransitionGroup" || e === "transition-group")
      return Du;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let i = t ? t.ns : n;
    if (t && i === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (s) => s.type === 6 && s.name === "encoding" && s.value != null && (s.value.content === "text/html" || s.value.content === "application/xhtml+xml")
        ) && (i = 0);
      } else
        /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (i = 0);
    else
      t && i === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (i = 0);
    if (i === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return i;
  }
}, vE = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: ne("style", !0, t.loc),
      exp: OE(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, OE = (e, t) => {
  const n = Fc(e);
  return ne(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function dt(e, t) {
  return ue(
    e,
    t,
    Be.NODE_ENV !== "production" ? SE : void 0
  );
}
const SE = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, CE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    dt(53, s)
  ), t.children.length && (n.onError(
    dt(54, s)
  ), t.children.length = 0), {
    props: [
      _e(
        ne("innerHTML", !0, s),
        i || ne("", !0)
      )
    ]
  };
}, TE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    dt(55, s)
  ), t.children.length && (n.onError(
    dt(56, s)
  ), t.children.length = 0), {
    props: [
      _e(
        ne("textContent", !0),
        i ? st(i, n) > 0 ? i : Te(
          n.helperString(lr),
          [i],
          s
        ) : ne("", !0)
      )
    ]
  };
}, wE = (e, t, n) => {
  const i = Nu(e, t, n);
  if (!i.props.length || t.tagType === 1)
    return i;
  e.arg && n.onError(
    dt(
      58,
      e.arg.loc
    )
  );
  function s() {
    const l = nt(t, "bind");
    l && zt(l.arg, "value") && n.onError(
      dt(
        60,
        l.loc
      )
    );
  }
  const { tag: r } = t, o = n.isCustomElement(r);
  if (r === "input" || r === "textarea" || r === "select" || o) {
    let l = Ou, c = !1;
    if (r === "input" || o) {
      const a = Fi(t, "type");
      if (a) {
        if (a.type === 7)
          l = ao;
        else if (a.value)
          switch (a.value.content) {
            case "radio":
              l = bu;
              break;
            case "checkbox":
              l = vu;
              break;
            case "file":
              c = !0, n.onError(
                dt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              Be.NODE_ENV !== "production" && s();
              break;
          }
      } else
        sg(t) ? l = ao : Be.NODE_ENV !== "production" && s();
    } else
      r === "select" ? l = Su : Be.NODE_ENV !== "production" && s();
    c || (i.needRuntime = n.helper(l));
  } else
    n.onError(
      dt(
        57,
        e.loc
      )
    );
  return i.props = i.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), i;
}, DE = /* @__PURE__ */ Ae("passive,once,capture"), VE = /* @__PURE__ */ Ae(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), xE = /* @__PURE__ */ Ae("left,right"), Vu = /* @__PURE__ */ Ae(
  "onkeyup,onkeydown,onkeypress",
  !0
), AE = (e, t, n, i) => {
  const s = [], r = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const c = t[l];
    c === "native" && ei(
      "COMPILER_V_ON_NATIVE",
      n,
      i
    ) || DE(c) ? o.push(c) : xE(c) ? ze(e) ? Vu(e.content) ? s.push(c) : r.push(c) : (s.push(c), r.push(c)) : VE(c) ? r.push(c) : s.push(c);
  }
  return {
    keyModifiers: s,
    nonKeyModifiers: r,
    eventOptionModifiers: o
  };
}, kc = (e, t) => ze(e) && e.content.toLowerCase() === "onclick" ? ne(t, !0) : e.type !== 4 ? pt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, IE = (e, t, n) => _u(e, t, n, (i) => {
  const { modifiers: s } = e;
  if (!s.length)
    return i;
  let { key: r, value: o } = i.props[0];
  const { keyModifiers: l, nonKeyModifiers: c, eventOptionModifiers: a } = AE(r, s, n, e.loc);
  if (c.includes("right") && (r = kc(r, "onContextmenu")), c.includes("middle") && (r = kc(r, "onMouseup")), c.length && (o = Te(n.helper(Cu), [
    o,
    JSON.stringify(c)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!ze(r) || Vu(r.content)) && (o = Te(n.helper(Tu), [
    o,
    JSON.stringify(l)
  ])), a.length) {
    const u = a.map(Ot).join("");
    r = ze(r) ? ne(`${r.content}${u}`, !0) : pt(["(", r, `) + "${u}"`]);
  }
  return {
    props: [_e(r, o)]
  };
}), kE = (e, t, n) => {
  const { exp: i, loc: s } = e;
  return i || n.onError(
    dt(61, s)
  ), {
    props: [],
    needRuntime: n.helper(wu)
  };
}, RE = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === ml)
    return () => {
      if (!e.children.length)
        return;
      xu(e) && t.onError(
        dt(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const i = e.children[0];
      if (i.type === 1)
        for (const s of i.props)
          s.type === 7 && s.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function xu(e) {
  const t = e.children = e.children.filter(
    (i) => i.type !== 3 && !(i.type === 2 && !i.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(xu);
}
const PE = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (Be.NODE_ENV !== "production" && t.onError(
    dt(
      63,
      e.loc
    )
  ), t.removeNode());
}, ME = [
  vE,
  ...Be.NODE_ENV !== "production" ? [RE] : []
], $E = {
  cloak: _E,
  html: CE,
  text: TE,
  model: wE,
  // override compiler-core
  on: IE,
  // override compiler-core
  show: kE
};
function LE(e, t = {}) {
  return yE(
    e,
    ie({}, bE, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        PE,
        ...ME,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: ie(
        {},
        $E,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var pi = {};
function FE() {
  Of();
}
pi.NODE_ENV !== "production" && FE();
const Rc = /* @__PURE__ */ new WeakMap();
function BE(e) {
  let t = Rc.get(e ?? le);
  return t || (t = /* @__PURE__ */ Object.create(null), Rc.set(e ?? le, t)), t;
}
function HE(e, t) {
  if (!Q(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return pi.NODE_ENV !== "production" && xe("invalid template option: ", e), pe;
  const n = e, i = BE(t), s = i[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    pi.NODE_ENV !== "production" && !a && xe(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const r = ie(
    {
      hoistStatic: !0,
      onError: pi.NODE_ENV !== "production" ? l : void 0,
      onWarn: pi.NODE_ENV !== "production" ? (a) => l(a, !0) : pe
    },
    t
  );
  !r.isCustomElement && typeof customElements < "u" && (r.isCustomElement = (a) => !!customElements.get(a));
  const { code: o } = LE(e, r);
  function l(a, u = !1) {
    const f = u ? a.message : `Template compilation error: ${a.message}`, p = a.loc && Bu(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    xe(p ? `${f}
${p}` : f);
  }
  const c = new Function("Vue", o)(Bm);
  return c._rc = !0, i[n] = c;
}
Ef(HE);
const UE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgB7Z29bhtHFIXPrERKSSBRsMEANmAHqVMyQJBUSpU3SJXa7lOkSBOqSJMiqaXaL5FOnSu2gYsgBmQ4KQQHJm0DJilxPJd/pkSZXJISd+fs+QCK5IIL7erjvXfuzGLlcA147923B9ioAsnrW3AvnyKx7Z0KHEQqyk34rQp8+Bv2TsNjPzzqddfDiiwtwKR+eYTNnf+w8QoDoeJ6GUrv7q8ge2HBI7HlJ9hUhK6PT1/g/Kvb6C4qeiFBtUNfktiMuYNu46Hrpv14KlEWtd/8iG2JzQeWur+roJ0mmucK26/7zXYTJcnNF+XdUJ9b6B7X3dmsz82UVnvgS7iLEkR+mZOyPyhYciNihuQrBVtaDq1PGSIadsK0w1Xpeqp/tQGV1VyIqGjvolSv+ymfUxs0Wo6TTgvuzya2Lm+/INjqruTGi7mzuYrJbWPBlpo1qIqf8htsBpvjIB0L/v5AchmwVF07NMkD+oItev/B+40ibiajuC/YlvogaJiM4r5gtUV82DKuPSeWnjVy5mOwRu+d06wVLza7lZzqagxazG1SlWBa2rfgkjDAUv0lpfo0RLAGWMTcU3qmxvphCSZHgsmRYHIkmBwJJkeCyZFgciSYHAkmR4LJkWByJJgcCSZHgsmRYHIkmJzCCE7u4YfkPp5v3Mdf9hoFoTCCncPP4WnPA5+F599QEAojeCh2gEMFBUE1mBwJJkeCyZFgciSYHBrBq/a5rH0yjeBV+1zWPplG8Kp9LmufrBpMTjSCs66RsdboaARnXSNjrdHRCM66RsZao1WDycmN4Nj70Lwef24Ex96H5vX41yZ43jc89j503vFnFeFrE1zUKypGZHX+axPsPfbGbxyaKBhZnf/6anAPP4WfJyGXNZNz/IqikdH5r+0e0b3neBSeHvVfX/WBcOITtesEsTHn+Oee/w2Rnz449gjP6fHn5i7vWX3Dr4u8Hr9mssiJR7C/MPJcf43O+vcvSTyCs65xkY4RovlPK1nXuFjHCKrB5PAIXrVGRlpj58EjeNUaSTrT5mp1/zEKQFjJeTP5vneCT1AAVIPJkWByJJgcCSZHgskpjmDSPncexRFc0CtKCtMHFxXVYHIkmBwJJkeCyZFgciSYHAkmR4LJkWByJJgcCSZHgsmRYHIkmBwJJkeCyUnKu3YHIMFKgmcQpJSb8Mne51HeMUGkYKsSBJ/8rxTNyinQS6px3vNEpMDcOsC7Wh0fQdDRAN6GNsn5HUUxHX2nddfr98Gv/sU5BBtn9qMvuHGEM/XDXBwPs/JwJsv5zpOBcRE/zRchI4f0bK/HU5WKYh7+vo3u6PXEXLSimII7Qe4weo0Liw2NI9e16S2IKLEM3HjoupPbplaTHv+Ot0rV8WHOHrfQvrx9ernQOb/VQhciKvrOJlLzCPehHWoPfAl3UYLIP6HuXk7NI9ys/SQ5AmbINWZe0WGDrp1jdFST84c5CdORnVlyjZkRPMZ79/Uf2O60Un5e3CjjAdUVNfcyCwlTys4WE2tzFZZZ0+6zeESGaP7iAKXtiG4mHjtjsYdhIip0OYvsu3zKDaL3D7DRbqLUqSh13wS25GcrfcuIHXE9YoayT8OgrRoeQbqT9PT0B7HPALs+zi6hsisxjn8JCwZLSp3kHfskxziHhIhQAAAAAElFTkSuQmCC", jE = (e) => (Na("data-v-27ccf78e"), e = e(), ba(), e), KE = /* @__PURE__ */ jE(() => /* @__PURE__ */ at("img", {
  src: UE,
  alt: "",
  style: { height: "100%" }
}, null, -1)), WE = [
  KE
], qE = /* @__PURE__ */ Zs({
  __name: "NoteAudio.ce",
  props: {
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 200
    },
    recording: {
      type: Boolean,
      default: !0
    },
    audioUrl: {
      type: String,
      default: ""
    }
  },
  emits: ["save", "delete"],
  setup(e, { expose: t, emit: n }) {
    const i = e, s = n;
    let r = je(null), o = je(null), l = je(null), c = je(null), a = je(null);
    const u = je(!1), f = je(0), p = je(0), E = (g) => {
      if (g.stopPropagation(), c.value) {
        const { top: _, left: N } = c.value.getBoundingClientRect();
        f.value = _ + window.scrollY, p.value = N;
      }
      u.value = !0;
    }, y = (g) => {
      a.value && !a.value.contains(g.target) && u.value && (u.value = !1);
    };
    si(() => {
      console.log("onMounted"), R();
    }), Wi(() => {
    });
    const T = (g) => {
      console.log("setVolume", g), R();
    };
    function R() {
      if (console.log("updateState: " + i.audioUrl), l.value.src = i.audioUrl, i.audioUrl !== "") {
        l.value.src = i.audioUrl, r.value.style.display = "flex", o.value.style.display = "none";
        return;
      }
      i.recording ? (r.value.style.display = "none", o.value.style.display = "block") : (r.value.style.display = "flex", o.value.style.display = "none");
    }
    bn(() => i.recording, () => {
      console.log("recordingChanged", i.recording), R();
    }), bn(() => i.audioUrl, () => {
      console.log("audioUrlChanged", i.audioUrl), l.value.src = i.audioUrl, R();
    });
    const P = () => {
      u.value = !1, console.log("onSaveClick"), s("save", {
        audioUrl: l.value.src
      });
    }, O = () => {
      u.value = !1, console.log("onDeleteClick"), s("delete", {
        audioUrl: l.value.src
      });
    };
    return t({
      setVolume: T,
      onSaveClick: P,
      onDeleteClick: O,
      showModal: u,
      buttonTop: f,
      buttonLeft: p
    }), (g, _) => (Jn(), jr("div", null, [
      at("div", {
        ref_key: "mp3Container",
        ref: r,
        class: "mp3-container",
        onClick: y
      }, [
        at("audio", {
          id: "note-audio",
          style: { width: "50%", height: "100%" },
          controls: "",
          ref_key: "audioElem",
          ref: l
        }, null, 512),
        at("button", {
          id: "more",
          ref_key: "moreBtn",
          ref: c,
          style: { width: "10%", height: "100%", display: "inline", "align-content": "center" },
          onClick: E
        }, "展示浮层", 512)
      ], 512),
      at("div", {
        ref_key: "recordingIcon",
        ref: o,
        class: "recording-container"
      }, WE, 512),
      u.value ? (Jn(), jr("div", {
        key: 0,
        ref_key: "modalRef",
        ref: a,
        class: "modal",
        style: An({ top: f.value + "px", left: p.value + "px" })
      }, [
        at("div", { class: "modal-content" }, [
          at("button", {
            onClick: P,
            style: { "margin-bottom": "20px" }
          }, "保存"),
          at("button", { onClick: O }, "删除")
        ])
      ], 4)) : df("", !0)
    ]));
  }
}), JE = ".mp3-container[data-v-27ccf78e]{position:relative;width:100%;height:60px;align-self:start;background-color:transparent;overflow:hidden;text-align:start;vertical-align:center;display:flex;align-items:center}.recording-container[data-v-27ccf78e]{width:100%;height:60px;background-color:#f9f9f9;text-align:start}.modal[data-v-27ccf78e]{position:absolute}.modal-content[data-v-27ccf78e]{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:20px;border-radius:10px;box-shadow:0 2px 8px #00000026}", GE = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, zE = /* @__PURE__ */ GE(qE, [["styles", [JE]], ["__scopeId", "data-v-27ccf78e"]]), YE = /* @__PURE__ */ Jo(zE);
function XE(e = "note-audio") {
  customElements.define(e, YE);
}
export {
  YE as DuerNoteAudio,
  XE as register
};
