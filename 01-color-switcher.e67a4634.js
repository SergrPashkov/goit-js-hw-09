!function(){var t=null;var e=document.querySelector("[data-start]");function r(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){return t=setInterval(r,1e3),e.setAttribute("disabled",""),void a.removeAttribute("disabled","")}));var a=document.querySelector("[data-stop]");a.addEventListener("click",(function(){return clearInterval(t),e.removeAttribute("disabled",""),void a.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.e67a4634.js.map