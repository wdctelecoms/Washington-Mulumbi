const menu=document.querySelector('.menu');
const links=document.querySelector('.links');

menu?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{
  links.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));

document.getElementById('year').textContent=new Date().getFullYear();

// Scroll reveals, progress indicator and gentle motion enhancements.
const revealTargets=document.querySelectorAll('.section-heading,.about-grid>div,.focus-card,.work-item,.wdc-inner>*,.contact-inner>*');
revealTargets.forEach((el)=>el.classList.add('scroll-reveal'));
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:0.12,rootMargin:'0px 0px -35px 0px'});
  revealTargets.forEach((el)=>revealObserver.observe(el));
}else{
  revealTargets.forEach((el)=>el.classList.add('is-visible'));
}
const progress=document.querySelector('.scroll-progress');
let progressTick=false;
const updateProgress=()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  const percent=max>0?(window.scrollY/max)*100:0;
  if(progress)progress.style.width=percent+'%';
  progressTick=false;
};
window.addEventListener('scroll',()=>{
  if(!progressTick){window.requestAnimationFrame(updateProgress);progressTick=true;}
},{passive:true});
updateProgress();
