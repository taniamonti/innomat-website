// News Filter
document.querySelectorAll('.newsFilters button').forEach(function(button){
  button.addEventListener('click',function(){
    var filter=this.dataset.filter;
    document.querySelectorAll('.newsFilters button').forEach(function(b){
      b.classList.remove('active')
    });
    this.classList.add('active');
    document.querySelectorAll('.newsCard').forEach(function(card){
      card.hidden=filter!=='all'&&!card.dataset.category.split(' ').includes(filter)
    })
  })
});

// Booking Form Handler
(function(){
  const title=document.getElementById('bookingTitle');
  const owner=document.getElementById('bookingOwner');
  const date=document.getElementById('bookingDate');
  const time=document.getElementById('bookingTime');
  const duration=document.getElementById('bookingDuration');
  const success=document.getElementById('bookingSuccess');
  
  document.querySelectorAll('.meetingType').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.meetingType').forEach(function(x){
        x.classList.remove('active')
      });
      b.classList.add('active');
      title.textContent=b.dataset.title;
      owner.textContent=b.dataset.owner;
      duration.textContent=b.dataset.duration;
      success.classList.remove('show')
    })
  });
  
  document.querySelectorAll('.dateChoice').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.dateChoice').forEach(function(x){
        x.classList.remove('active')
      });
      b.classList.add('active');
      date.textContent=b.dataset.date;
      success.classList.remove('show')
    })
  });
  
  document.querySelectorAll('.timeChoice').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.timeChoice').forEach(function(x){
        x.classList.remove('active')
      });
      b.classList.add('active');
      time.textContent=b.textContent;
      success.classList.remove('show')
    })
  });
  
  document.getElementById('bookingForm').addEventListener('submit',function(e){
    e.preventDefault();
    success.classList.add('show')
  });
})();

// Team Filter
(function(){
  const buttons=document.querySelectorAll('[data-team-filter]');
  const cards=document.querySelectorAll('.teamCard');
  
  function show(filter){
    cards.forEach(function(card){
      card.hidden=!card.dataset.team.split(' ').includes(filter)
    });
    buttons.forEach(function(button){
      button.classList.toggle('active',button.dataset.teamFilter===filter);
      button.setAttribute('aria-selected',button.dataset.teamFilter===filter?'true':'false')
    })
  }
  
  buttons.forEach(function(button){
    button.addEventListener('click',function(){
      show(button.dataset.teamFilter)
    })
  });
  
  show('innomat')
})();

// Business Card Modal
(function(){
  const pages={
    "mathias-innomat":"data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImRlIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiIC8+CiAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgPHRpdGxlPk1hdGhpYXMgT2VydGxlIHwgS29udGFrdDwvdGl0bGU+CiAgPG1ldGEgbmFtZT0iZGVzY3JpcHRpb24iIGNvbnRlbnQ9IktvbnRha3RzZWl0ZSB2b24gTWF0aGlhcyBPZXJ0bGUsIEdlc2Now6RmdHNmw7xocmVyIGRlciBJbm5vbWF0LUF1dG9tYXRpb24gQUcuIiAvPgogIDxzdHlsZT4KICAgIDpyb290IHsKICAgICAgLS1iZzogI2VlZjNmNzsKICAgICAgLS1jYXJkOiAjZmZmZmZmOwogICAgICAtLXRleHQ6ICMxMjIwMmM7CiAgICAgIC0tbXV0ZWQ6ICM1ZDZhNzU7CiAgICAgIC0tbGluZTogI2RjZTVlYzsKICAgICAgLS1wcmltYXJ5OiAjMTQzOTVkOwogICAgICAtLXByaW1hcnktZGFyazogIzBmMmQ0OTsKICAgICAgLS1zb2Z0OiAjZjVmOGZiOwogICAgICAtLXNoYWRvdzogMCAxOHB4IDQ2cHggcmdiYSgxMiwgMzAsIDU0LCAwLjEyKTsKICAgICAgLS1yYWRpdXM6IDI0cHg7CiAgICB9CgogICAgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH0KCiAgICBib2R5IHsKICAgICAgbWFyZ2luOiAwOwogICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAiU2Vnb2UgVUkiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7CiAgICAgIGJhY2tncm91bmQ6CiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSgyMCw1Nyw5MywwLjA4KSwgdHJhbnNwYXJlbnQgMzQlKSwKICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjRmOGZiIDAlLCB2YXIoLS1iZykgMTAwJSk7CiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTsKICAgICAgbWluLWhlaWdodDogMTAwdmg7CiAgICB9CgogICAgLndyYXAgewogICAgICB3aWR0aDogMTAwJTsKICAgICAgbWF4LXdpZHRoOiA1MDBweDsKICAgICAgbWFyZ2luOiAwIGF1dG87CiAgICAgIHBhZGRpbmc6IDE4cHggMTRweCAzMHB4OwogICAgfQoKICAgIC5jYXJkIHsKICAgICAgYmFja2dyb3VuZDogdmFyKC1jYXJkKTsKICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC1yYWRpdXMpOwogICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOwogICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOTUpOwogICAgfQogIAogICAgLmhlcm8gewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIHBhZGRpbmc6IDMwcHggMjRweCAyNHB4OwogICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTAyYTQzIDAlLCAjMTYzYTVkIDEwMCUpOwogICAgICBjb2xvcjogI2ZmZjsKICAgIH0KICAKICAGICAKICAGIC5oZXJvIC5oZWFkIHsKICAgICAgZm9udC1zaXplOiAyNHB4OwogICAgICBmb250LXdlaWdodDogODAwOwogICAgICBsaW5lLWhlaWdodDogMTsKICAgICAgbWFyZ2luOiAwIDAgMTZweDsKICAgIH0KICAKICAGICAKICAGIC5oZXJvIC5oZWFkIHNtYWxsIHsKICAgICAgZm9udC1zaXplOiAxMHB4OwogICAgfQoKICAgIC5oZXJvIC5mb290IHsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICBsaW5lLWhlaWdodDogMS44OwogICAgICBtYXJnaW46IDE2cHggMDsKICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsKICAgIH0KCiAgICAuaGVybyAuZm9vdCBhIHsKICAgICAgY29sb3I6ICNmZmY7CiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwogICAgICB0cmFuc2l0aW9uOiAuMnM7CiAgICB9CiAgICAuaGVybyAuZm9vdCBhOmhvdmVyIHsKICAgICAgb3BhY2l0eTogMC43OwogICAgfQogIH0KICAKICBOBA+CjwvaHRtbD4="
  };
  
  const modal=document.getElementById('businessCardModal');
  const frame=document.getElementById('businessCardFrame');
  const close=document.getElementById('businessCardClose');
  
  document.querySelectorAll('[data-card-id]').forEach(function(card){
    card.addEventListener('click',function(){
      const cardId=this.getAttribute('data-card-id');
      if(pages[cardId]){
        frame.src=pages[cardId];
        modal.classList.add('open');
        document.body.classList.add('modalOpen')
      }
    })
  });
  
  close.addEventListener('click',function(){
    modal.classList.remove('open');
    document.body.classList.remove('modalOpen');
    frame.src=''
  });
  
  modal.addEventListener('click',function(e){
    if(e.target===modal){
      modal.classList.remove('open');
      document.body.classList.remove('modalOpen');
      frame.src=''
    }
  })
})();
