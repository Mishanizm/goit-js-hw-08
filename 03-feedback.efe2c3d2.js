function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,u=setTimeout(j,t),c?y(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function j(){var e=v();if(w(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function S(e){return u=void 0,p&&i?y(e):(i=o=void 0,a)}function O(){var e=v(),n=w(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:S(v())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h=y.querySelector('input[name="email"]'),w=y.querySelector('textarea[name="message"]');function j(){const e={email:h.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}h.addEventListener("input",e(t)(j,500)),w.addEventListener("input",e(t)(j,500)),window.addEventListener("load",(function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);h.value=t.email,w.value=t.message}})),y.addEventListener("submit",(e=>{e.preventDefault();const t={email:h.value,message:w.value};t.email&&t.message?(console.log(t),h.value="",w.value="",localStorage.removeItem("feedback-form-state")):alert("Please complete both fields before submitting the form.")}));
//# sourceMappingURL=03-feedback.efe2c3d2.js.map