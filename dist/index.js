"use strict";var e=require("react/jsx-runtime"),i=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const t={maxHeight:0,overflow:"hidden"};var n=r(i).default.memo((({isOpen:r,duration:n,easing:s,children:a})=>{const u=i.useRef(null),l=(({isOpen:e,duration:i,easing:r,ref:n})=>{var s;let a;return n.current&&(a=`max-height ${i||n.current.scrollHeight/750}s ${r||"linear"}`),e?{"aria-hidden":"false",style:Object.assign(Object.assign({},t),{transition:a,maxHeight:(null===(s=n.current)||void 0===s?void 0:s.scrollHeight)+"px"})}:{"aria-hidden":"true",style:Object.assign(Object.assign({},t),{transition:a})}})({isOpen:r,duration:n,easing:s,ref:u});return e.jsx("div",Object.assign({ref:u},l,{children:a}),void 0)}));module.exports=n;
