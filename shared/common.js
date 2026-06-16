/* shared/common.js
   EchoIT — 공통 fetch 주입 + init
   각 페이지에서 <script src="shared/common.js"></script>로 로드.
   공통 CSS는 <link rel="stylesheet" href="shared/common.css">로 head에서 별도 로드.
*/
const _cmScript = document.currentScript;
(function(){
  'use strict';

  // ── 경로 계산: common.js 파일 자신의 src를 기준으로 shared/ base URL 결정 ──
  const _scriptSrc=(_cmScript||document.querySelector('script[src*="common.js"]')||{src:'shared/common.js'}).src;
  const sharedBase=_scriptSrc.replace(/[^/]*\.js(\?.*)?$/,'');
  function sharedPath(file){return sharedBase+file;}

  // ── 병렬 fetch + DOM 주입 ──
  async function loadShared(){
    const [navHTML, footerHTML, modalsHTML] = await Promise.all([
      fetch(sharedPath('nav.html')).then(r=>r.text()),
      fetch(sharedPath('footer.html')).then(r=>r.text()),
      fetch(sharedPath('modals.html')).then(r=>r.text()),
    ]);
    const navRoot=document.getElementById('nav-root');
    const footerRoot=document.getElementById('footer-root');
    const modalRoot=document.getElementById('modal-root');
    if(navRoot)navRoot.innerHTML=navHTML;
    if(footerRoot)footerRoot.innerHTML=footerHTML;
    if(modalRoot)modalRoot.innerHTML=modalsHTML;
    init();
    // 페이지별 after-load 훅
    if(typeof window.onSharedLoaded==='function')window.onSharedLoaded();
  }

  // ── 공통 초기화 ──
  function init(){
    // Nav scroll
    window.addEventListener('scroll',()=>document.getElementById('snav').classList.toggle('scrolled',scrollY>8),{passive:true});

    // Mobile menu
    const ham=document.getElementById('hamBtn'), mob=document.getElementById('mobMenu');
    if(ham&&mob){
      ham.addEventListener('click',()=>{
        const o=mob.classList.toggle('open');
        ham.querySelectorAll('span').forEach((s,i)=>{
          if(o){if(i===0)s.style.transform='rotate(45deg) translate(5px,5px)';if(i===1)s.style.opacity='0';if(i===2)s.style.transform='rotate(-45deg) translate(5px,-5px)'}
          else{s.style.transform='';s.style.opacity=''}
        });
      });
      mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mob.classList.remove('open');ham.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity=''})}));
    }

    // Mobile sub-menu toggle
    window.toggleMobGrp=function(n){document.getElementById('mg'+n).classList.toggle('open');};

    // Checkbox chip toggle (all .chk on page)
    document.querySelectorAll('.chk input').forEach(cb=>{
      cb.addEventListener('change',()=>cb.closest('.chk').classList.toggle('sel',cb.checked));
    });

    // Form submit (contact section)
    window.handleSubmit=function(e){
      e.preventDefault();
      const btn=e.target.querySelector('[type=submit]');
      btn.innerHTML='✓ 접수되었습니다';btn.style.background='#1a8a3c';
      setTimeout(()=>{btn.innerHTML='<span class="ms" style="font-size:18px">send</span>문의 보내기';btn.style.background=''},3000);
    };

    // Report modal
    window.openReport=function(e){if(e)e.preventDefault();document.getElementById('reportModal').classList.add('open');document.body.style.overflow='hidden';};
    window.closeReport=function(){document.getElementById('reportModal').classList.remove('open');document.body.style.overflow='';};
    document.getElementById('reportModal').addEventListener('click',e=>{if(e.target.id==='reportModal')closeReport();});
    ['rg-type','rg-rel'].forEach(id=>{
      const grp=document.getElementById(id);
      if(!grp)return;
      grp.querySelectorAll('.chk input').forEach(cb=>cb.addEventListener('change',()=>{
        if(cb.checked)grp.querySelectorAll('.chk input').forEach(o=>{if(o!==cb){o.checked=false;o.closest('.chk').classList.remove('sel')}});
        cb.closest('.chk').classList.toggle('sel',cb.checked);
      }));
    });
    window.submitReport=function(e){
      e.preventDefault();
      const btn=e.target.querySelector('[type=submit]');
      btn.textContent='✓ 제보가 접수되었습니다';btn.style.background='#1a8a3c';
      setTimeout(()=>{closeReport();e.target.reset();document.querySelectorAll('#reportModal .chk').forEach(c=>c.classList.remove('sel'));btn.textContent='등록';btn.style.background='';},2000);
    };

    // Contact modal (floating button)
    window.openContact=function(e){if(e)e.preventDefault();document.getElementById('contactModal').classList.add('open');document.body.style.overflow='hidden';};
    window.closeContact=function(){document.getElementById('contactModal').classList.remove('open');document.body.style.overflow='';};
    document.getElementById('contactModal').addEventListener('click',e=>{if(e.target.id==='contactModal')closeContact();});
    window.submitContactModal=function(e){
      e.preventDefault();
      var err=document.getElementById('cmError');
      function showErr(msg){if(err){err.textContent=msg;err.style.display='block';}}
      if(err){err.style.display='none';}
      if(!document.querySelector('#mcg1 input:checked')){showErr('문의 구분을 선택해 주세요.');return;}
      if(!document.getElementById('mAgreeChk').checked){showErr('개인정보 수집 및 이용에 동의해 주세요.');return;}
      const btn=e.target.querySelector('[type=submit]');
      btn.innerHTML='✓ 접수되었습니다';btn.style.background='#1a8a3c';
      setTimeout(()=>{closeContact();e.target.reset();document.querySelectorAll('#contactModal .chk').forEach(c=>c.classList.remove('sel'));btn.innerHTML='<span class="ms" style="font-size:18px">send</span>문의 보내기';btn.style.background='';},2000);
    };
    document.querySelectorAll('#mcg1 .chk input,#mcg2 .chk input').forEach(cb=>{
      cb.addEventListener('change',()=>cb.closest('.chk').classList.toggle('sel',cb.checked));
    });

    // Close modal on Esc
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeContact();closeReport();}});

    // Chronicles auto-scroll (index only — guarded)
    (function(){
      const el=document.querySelector('.chr-scroll');
      if(!el)return;
      Array.from(el.children).forEach(c=>el.appendChild(c.cloneNode(true)));
      const origW=el.scrollWidth/2;
      let dragging=false,startX=0,scrollStart=0;
      el.addEventListener('mousedown',e=>{dragging=true;startX=e.pageX;scrollStart=el.scrollLeft;el.style.cursor='grabbing';e.preventDefault();});
      window.addEventListener('mousemove',e=>{if(!dragging)return;el.scrollLeft=scrollStart-(e.pageX-startX);});
      window.addEventListener('mouseup',()=>{if(dragging){dragging=false;el.style.cursor=''}});
      el.addEventListener('touchstart',e=>{dragging=true;startX=e.touches[0].pageX;scrollStart=el.scrollLeft;},{passive:true});
      el.addEventListener('touchmove',e=>{if(!dragging)return;el.scrollLeft=scrollStart-(e.touches[0].pageX-startX);},{passive:true});
      el.addEventListener('touchend',()=>{dragging=false;});
      (function tick(){
        if(!dragging){el.scrollLeft+=0.5;if(el.scrollLeft>=origW)el.scrollLeft-=origW;}
        requestAnimationFrame(tick);
      })();
    })();

    // Scroll reveal
    (function(){
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      const groups=[
        ['.intro-card','.gap-diagram'],['.stat'],
        ['#services .eye, #services .htitle, #services .hdesc'],
        ['.chr-card'],['.val-card'],['.tl-card'],['.cust-item'],
        ['#contact .eye, #contact .htitle, #contact .hdesc'],
        ['.cont-info','.cont-form'],
      ];
      const targets=[];
      groups.forEach(sels=>{
        const els=sels.flatMap(s=>[...document.querySelectorAll(s)]);
        els.forEach((el,i)=>{
          el.classList.add('reveal');
          if(i%4===1)el.classList.add('reveal-d1');
          else if(i%4===2)el.classList.add('reveal-d2');
          else if(i%4===3)el.classList.add('reveal-d3');
          targets.push(el);
        });
      });
      document.querySelectorAll('.section__head,.htitle').forEach(el=>{
        if(!el.classList.contains('reveal')){el.classList.add('reveal');targets.push(el);}
      });
      const io=new IntersectionObserver(entries=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
      },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
      targets.forEach(t=>io.observe(t));
      // Fallback for environments where IO doesn't fire
      function revealFallback(){
        const vh=window.innerHeight||document.documentElement.clientHeight;
        document.querySelectorAll('.reveal:not(.in)').forEach(el=>{
          if(el.getBoundingClientRect().top<vh*0.92)el.classList.add('in');
        });
      }
      ['scroll','resize','load'].forEach(ev=>window.addEventListener(ev,revealFallback,{passive:true}));
      setTimeout(revealFallback,200);setTimeout(revealFallback,800);
    })();
  }

  // Start loading
  loadShared();
})();
