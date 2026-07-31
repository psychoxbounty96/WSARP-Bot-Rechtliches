(() => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
  const clock = document.querySelector('[data-clock]');
  const updateClock = () => { if (clock) clock.textContent = new Intl.DateTimeFormat('de-DE',{dateStyle:'short',timeStyle:'medium'}).format(new Date()); };
  updateClock(); setInterval(updateClock,1000);
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('#terminal-menu');
  toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    const text = document.querySelector(btn.dataset.copy)?.textContent?.trim(); if (!text) return;
    try { await navigator.clipboard.writeText(text); btn.textContent = 'Kopiert'; }
    catch { btn.textContent = 'Bitte manuell kopieren'; }
  }));
})();
