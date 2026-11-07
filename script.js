document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"×":"☰"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"}))}
 document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
 const form=document.getElementById("contactForm");if(form)form.addEventListener("submit",event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form),subject=encodeURIComponent(data.get("subject")),body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);form.querySelector(".form-feedback").textContent="Your email app should open with the message ready to send.";location.href=`mailto:ghogarejay01@gmail.com?subject=${subject}&body=${body}`});
 const revealTargets=document.querySelectorAll(".info-card,.team-card,.member-card,.focus-card,.objective-card,.event-card,.track-card,.roadmap>div,.contact-item,.role-list>a,.statement-card,.impact-grid>div");
 revealTargets.forEach(el=>el.classList.add("reveal"));
 if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}),{threshold:.12});revealTargets.forEach(el=>observer.observe(el))}else revealTargets.forEach(el=>el.classList.add("is-visible"));
});
