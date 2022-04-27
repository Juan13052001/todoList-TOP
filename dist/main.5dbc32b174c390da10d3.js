(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var n=t((function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.tasks=[]}));const r=n;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}const a=c((function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.priority=n,this.dueDate=r}));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,n,o;return t=e,n=[{key:"addProyecto",value:function(e,t){this.proyectos.push(new r(e,t)),this.guardarLocalStorage()}},{key:"removeProyecto",value:function(e){this.proyectos=this.proyectos.filter((function(t){return t.title!==e}))}},{key:"addTask",value:function(e,t,n,r){this.proyectos.find((function(e){return e.title===r})).tasks.push(new a(e,t,n)),this.guardarLocalStorage()}},{key:"removeTask",value:function(e,t){var n=this.proyectos.find((function(e){return e.title===t}));n.tasks=n.tasks.filter((function(t){return t.title!==e})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("Proyectos",JSON.stringify(this.proyectos))}},{key:"cargarLocalStorage",value:function(){this.proyectos=localStorage.getItem("Proyectos")?JSON.parse(localStorage.getItem("Proyectos")):[]}}],n&&i(t.prototype,n),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=new u,f=document.querySelector(".projects__add"),y=document.querySelector(".new-project-box-container"),p=document.querySelector(".new-task-box-container"),v=document.querySelector(".title-input"),m=document.querySelector(".description-input"),h=(document.querySelector(".project-name-input"),document.querySelector(".add-btn")),k=document.querySelector(".projects__btn-remove-project"),b=document.querySelector(".cancel-project-btn"),S=document.querySelector(".btn__remove-task"),g=document.querySelector(".cancel-task-btn"),L=document.querySelector(".projects__container-name"),q=document.querySelector(".project__displayer"),w=document.querySelector(".description-text"),E=document.querySelector(".tasks__container"),j=document.querySelector(".task-name-input"),P=document.querySelector(".task-priority-select"),_=document.querySelector(".dueDateInput"),T=document.querySelector(".btn__new-task"),x=document.querySelector(".add-task-btn"),O=function(){return document.querySelectorAll(".proyectos")};function A(){y.style.display="none"}function C(){L.textContent="",d.proyectos.forEach((function(e){var t=document.createElement("h4");t.classList.add("proyectos"),t.innerText=e.title,L.append(t)}))}function I(){return document.querySelector(".activo").innerText}function D(){var e=I();return d.proyectos.filter((function(t){return t.title===e}))}function J(e){l(O()).forEach((function(e){e.classList.remove("activo")})),function(e){e.target.classList.add("activo")}(e),q.classList.add("show"),N(D()),U()}function N(e){w.innerText=e[0].description}function M(){l(O()).forEach((function(e){e.addEventListener("click",J)}))}function U(){E.textContent="";var e=I(),t=d.proyectos.find((function(t){return t.title===e})).tasks.filter((function(e){return null!==e.priority}));t.length<=0||t.forEach((function(e){var t=document.createElement("h4"),n=e.priority;t.classList.add("tarea"),t.classList.add("".concat(n,"-tarea")),t.addEventListener("click",$),t.innerText=e.title,E.appendChild(t)}))}function $(e){l(document.querySelectorAll(".tarea")).forEach((function(e){e.classList.remove("task-activo")})),e.target.classList.add("task-activo")}function z(){p.style.display="none",j.value=""}f.addEventListener("click",(function(){y.style.display="block"})),h.addEventListener("click",(function(){var e=v.value,t=m.value;e.length>0&&t.length>0?(v.value="",m.value="",d.addProyecto(e,t),console.log(d),A(),C(),M()):alert("Por favor llena los datos correspondientes")})),k.addEventListener("click",(function(){var e=I();d.removeProyecto(e),C(),M(),U()})),b.addEventListener("click",A),T.addEventListener("click",(function(){p.style.display="block"})),S.addEventListener("click",z),x.addEventListener("click",(function(){if(j.value.length>0&&P.value.length>0&&_.value.length>0){var e=I(),t=j.value,n=P.value,r=_.value;d.addTask(t,n,r,e),z(),U()}})),g.addEventListener("click",z),S.addEventListener("click",(function(){var e=I(),t=(document.querySelector(".activo"),document.querySelector(".task-activo").textContent);d.removeTask(t,e),q.classList.add("show"),N(D()),U(),U()})),C(),M()})();