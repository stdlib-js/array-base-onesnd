// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(n,t,u,e,f){var o,i,a;if(o=u[e],(i=e+1)===t)return function(r,n){var t,u;for(t=[],u=0;u<n;u++)t.push(r);return t}(n,o);for(a=0;a<o;a++)f.push(r(n,t,u,i,[]));return f}function n(n,t){return r(n,t.length,t,0,[])}function t(r){return n(1,r)}export{t as default};
//# sourceMappingURL=mod.js.map
