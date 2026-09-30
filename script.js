const root=document.documentElement;
const themeToggle=document.getElementById("themeToggle");
const nav=document.getElementById("nav");
const menuToggle=document.querySelector(".menu-toggle");
const toTop=document.getElementById("toTop");

const saved=localStorage.getItem("portfolio-theme");
if(saved==="light") root.dataset.theme="light";
themeToggle.textContent=root.dataset.theme==="light"?"☾":"☼";

themeToggle.addEventListener("click",()=>{
  const light=root.dataset.theme!=="light";
  if(light) root.dataset.theme="light"; else delete root.dataset.theme;
  localStorage.setItem("portfolio-theme",light?"light":"dark");
  themeToggle.textContent=light?"☾":"☼";
});

menuToggle.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
  toTop.classList.toggle("show",window.scrollY>600);
});
toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();
