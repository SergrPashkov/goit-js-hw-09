!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},u=t.parcelRequired7c6;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var u={id:e,exports:{}};return n[e]=u,t.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=u);var o=u("6JpON"),a=document.querySelector(".form"),l=1;a.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,r=n.delay,u=n.step,a=n.amount,i=Number(r.value);setTimeout((function(){var t=setInterval((function(){var n,r;n=l,r=i,Math.random()>.3?e(o).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(r,"ms")):e(o).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(r,"ms")),Number(a.value),stepValue=Number(u.value),i+=stepValue,l===Number(a.value)&&(clearInterval(t),l=0),l+=1}),Number(u.value))}),Number(r.value))}))}();
//# sourceMappingURL=03-promises.33c262f2.js.map