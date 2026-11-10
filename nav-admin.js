// Navigation entre Réservation (pub) et Gestion (admin)
document.addEventListener('DOMContentLoaded', function() {
  const tabPub = document.getElementById('tabPub');
  const tabAdm = document.getElementById('tabAdm');
  const lang = document.getElementById('lang') || {};

  // Définir les textes des boutons
  const texts = {
    fr: { pub: 'Réserver', adm: 'Gestion' },
    de: { pub: 'Buchen', adm: 'Verwaltung' },
    it: { pub: 'Prenota', adm: 'Gestione' },
    en: { pub: 'Book', adm: 'Admin' }
  };

  const currentLang = lang.value || 'fr';
  const t = texts[currentLang] || texts.fr;

  if(tabPub) tabPub.textContent = t.pub;
  if(tabAdm) tabAdm.textContent = t.adm;

  // Mettre à jour les textes quand on change de langue
  if(lang) {
    lang.addEventListener('change', function() {
      const newLang = this.value || 'fr';
      const newT = texts[newLang] || texts.fr;
      if(tabPub) tabPub.textContent = newT.pub;
      if(tabAdm) tabAdm.textContent = newT.adm;
    });
  }
});
