"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(F,p){
var x=require('@stdlib/strided-base-reinterpret-complex128/dist'),R=require('@stdlib/complex-float64-real/dist'),_=require('@stdlib/complex-float64-imag/dist');function g(e,r,i,a,l){var n,o,c,u,t;if(e<=0)return i;for(o=R(r),c=_(r),n=x(i,0),u=l*2,a*=2,t=0;t<e;t++)n[u]=o+t,n[u+1]=c,u+=a;return i}p.exports=g
});var m=v(function(G,f){
var w=require('@stdlib/strided-base-stride2offset/dist'),E=s();function O(e,r,i,a){return E(e,r,i,a,w(e,a))}f.exports=O
});var z=v(function(H,d){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=m(),h=s();b(y,"ndarray",h);d.exports=y
});var k=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=z(),q,j=A(k(__dirname,"./native.js"));B(j)?q=C:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
