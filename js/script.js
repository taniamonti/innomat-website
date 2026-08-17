document.querySelectorAll('.newsFilters button').forEach(function (button) {
  button.addEventListener('click', function () {
    var filter = this.dataset.filter;
    document.querySelectorAll('.newsFilters button').forEach(function (b) {
      b.classList.remove('active');
    });
    this.classList.add('active');
    document.querySelectorAll('.newsCard').forEach(function (card) {
      card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter);
    });
  });
});

(function () {
  const title = document.getElementById('bookingTitle'),
    owner = document.getElementById('bookingOwner'),
    date = document.getElementById('bookingDate'),
    time = document.getElementById('bookingTime'),
    duration = document.getElementById('bookingDuration'),
    success = document.getElementById('bookingSuccess');
  document.querySelectorAll('.meetingType').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.meetingType').forEach(function (x) {
        x.classList.remove('active');
      });
      b.classList.add('active');
      title.textContent = b.dataset.title;
      owner.textContent = b.dataset.owner;
      duration.textContent = b.dataset.duration;
      success.classList.remove('show');
    });
  });
  document.querySelectorAll('.dateChoice').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.dateChoice').forEach(function (x) {
        x.classList.remove('active');
      });
      b.classList.add('active');
      date.textContent = b.dataset.date;
      success.classList.remove('show');
    });
  });
  document.querySelectorAll('.timeChoice').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.timeChoice').forEach(function (x) {
        x.classList.remove('active');
      });
      b.classList.add('active');
      time.textContent = b.textContent;
      success.classList.remove('show');
    });
  });
  document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    success.classList.add('show');
  });
})();

(function () {
  const buttons = document.querySelectorAll('[data-team-filter]'),
    cards = document.querySelectorAll('.teamCard');
  function show(filter) {
    cards.forEach(function (card) {
      card.hidden = !card.dataset.team.split(' ').includes(filter);
    });
    buttons.forEach(function (button) {
      button.classList.toggle('active', button.dataset.teamFilter === filter);
      button.setAttribute('aria-selected', button.dataset.teamFilter === filter ? 'true' : 'false');
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      show(button.dataset.teamFilter);
    });
  });
  show('innomat');
})();

(function () {
  const pages = {
    'mathias-innomat': 'vcard/mathias-innomat.html',
    'hans-innomat': 'vcard/hans-innomat.html',
    'marco-innomat': 'vcard/marco-innomat.html',
    'marc-innomat': 'vcard/marc-innomat.html',
    'gabriel-innomat': 'vcard/gabriel-innomat.html',
    'remo-innomat': 'vcard/remo-innomat.html',
    'thomas-innomat': 'vcard/thomas-innomat.html',
    'pascal-innomat': 'vcard/pascal-innomat.html',
    'andreas-innomat': 'vcard/andreas-innomat.html',
    'janis-innomat': 'vcard/janis-innomat.html',
    'luca-innomat': 'vcard/luca-innomat.html',
    'tania-innomat': 'vcard/tania-innomat.html',
    'mathias-staveb': 'vcard/mathias-staveb.html',
    'hans-staveb': 'vcard/hans-staveb.html',
    'cornel-staveb': 'vcard/cornel-staveb.html',
    'julian-staveb': 'vcard/julian-staveb.html',
    'lukas-staveb': 'vcard/lukas-staveb.html',
    'stefan-staveb': 'vcard/stefan-staveb.html',
  };
  const modal = document.getElementById('businessCardModal'),
    frame = document.getElementById('businessCardFrame'),
    close = document.getElementById('businessCardClose');
  let last = null;
  function openCard(card) {
    last = card;
    frame.src = pages[card.dataset.cardId];
    modal.classList.add('open');
    document.body.classList.add('modalOpen');
    close.focus();
  }
  function closeCard() {
    modal.classList.remove('open');
    document.body.classList.remove('modalOpen');
    frame.removeAttribute('src');
    if (last) last.focus();
  }
  document.querySelectorAll('.teamCard').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      openCard(card);
    });
    card.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
        e.preventDefault();
        openCard(card);
      }
    });
  });
  close.addEventListener('click', closeCard);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeCard();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeCard();
  });
})();
