function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var u=l("7Y9D8");const o=document.querySelector(".form");let a=1;o.addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:r,step:n,amount:l}}=t.currentTarget;let o=Number(r.value);setTimeout((()=>{const t=setInterval((()=>{var r,i;r=a,i=o,Math.random()>.3?e(u).Notify.success(`✅ Fulfilled promise ${r} in ${i}ms`):e(u).Notify.failure(`❌ Rejected promise ${r} in ${i}ms`),Number(l.value),stepValue=Number(n.value),o+=stepValue,a===Number(l.value)&&(clearInterval(t),a=0),a+=1}),Number(n.value))}),Number(r.value))}));
//# sourceMappingURL=03-promises.11e4662b.js.map