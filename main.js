(()=>{"use strict";const e=(e,t,a,n,c)=>({name:e,description:t,imageLink:a,codeLink:n,liveLink:c}),t=(()=>{const e=document.querySelector(".portfolio-section"),t=()=>{let e=document.createElement("div");return e.classList.add("project-buttons-container"),e.classList.add("project-padding"),e},a=e=>{let t=document.createElement("h2");return t.textContent=e,t},n=e=>{let t=document.createElement("p");return t.textContent=e,t.classList.add("project-padding"),t},c=(e,t)=>{let a=document.createElement("a");return a.href=e,a.textContent=t,a.classList.add("secondary-background"),a.classList.add("secondary-text-color"),a};return{render:r=>{let i=(()=>{let e=document.createElement("div");return e.classList.add("project-container"),e})();((e,t,a)=>{e.appendChild(t),e.appendChild(a)})(i,(e=>{let t=document.createElement("img");return t.src=e,t.classList.add("project-image"),t})(r.imageLink),((e,r,i,l)=>{let d=document.createElement("div"),s=a(e),o=n(r),u=t(),p=c(i,"View Code");if(d.classList.add("project-details-container"),d.appendChild(s),d.appendChild(o),u.appendChild(p),null!==l){let e=c(l,"See it Live");u.appendChild(e)}return d.appendChild(u),d})(r.name,r.description,r.codeLink,r.liveLink)),(t=>{e.appendChild(t)})(i)}}})(),a=(()=>{const e=document.querySelector("#navBar"),t=()=>{let e=document.createElement("a");return e.classList.add("nav-button"),e.classList.add("remove-button-defaults"),e.classList.add("secondary-text-color"),e.classList.add("nav-font-size"),e};return{render:()=>{(()=>{let a=t();a.textContent="About";let n=t();n.textContent="Skills",e.appendChild(a),e.appendChild(n)})()}}})();(()=>{let n=[];const c=()=>{let e=n.shift();t.render(e),0===n.length||c()};return{render:()=>{n.push(e("Calculator","This is a calculator that takes input from a string and solves it using MDAS.","images/calculator.png","https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/calculator","calculator/calculator.html")),n.push(e("Etch-A-Sketch","A simple app that lets users draw in different hues from white to black, like a a real Etch a Sketch.","images/sketch.png","https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/etch-a-sketch","etch-a-sketch/sketch.html")),n.push(e("Tic-Tac-Toe","Tic-Tac-Toe game where players click on the buttons to decide their move. Does not include AI.","images/tictactoe.png","","tic-tac-toe/tictactoe.html")),c(),a.render()}}})().render()})();