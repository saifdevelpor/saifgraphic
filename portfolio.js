// اپنی نئی image کو اسی folder میں رکھیں، پھر نیچے ایک نئی line لکھ دیں۔
// title اور category بھی اپنی post کے مطابق بدل سکتے ہیں۔
let posts = [
  { image: 'علی-زیب-1787631451163.jpeg', title: 'جمعہ مبارک', category: 'ISLAMIC POST' },
  { title: 'شادی مبارک', category: 'WEDDING POST', placeholder: true },
  { title: 'محفلِ میلاد', category: 'MEHFIL POST', placeholder: true },
  { title: 'دعوتِ ولیمہ', category: 'EVENT INVITATION', placeholder: true },
  { title: 'رمضان مبارک', category: 'RAMADAN POST', placeholder: true },
  { title: 'عید مبارک', category: 'EID GREETING', placeholder: true },
  { title: 'سالگرہ مبارک', category: 'BIRTHDAY POST', placeholder: true },
  { title: 'محفلِ نعت', category: 'NAAT EVENT POST', placeholder: true },
  { title: 'نکاح مبارک', category: 'NIKAH POST', placeholder: true },
  { title: 'شبِ برات', category: 'ISLAMIC POST', placeholder: true },
  { title: 'ختمِ قرآن', category: 'EVENT POST', placeholder: true },
  { title: 'دعوتِ افطار', category: 'RAMADAN EVENT', placeholder: true }
];
// UrduDesigner folder کی تمام اصل portfolio images۔ نئی image شامل کرنے کے لیے یہاں اس کا path add کریں۔
const portfolioImages = [
  '2،5x4-1786812724689.png',
  'azadi-pmln-جشن-آزادی-square-1786461310906.jpeg',
  'certificate-congratulations-education-achievement-square-1786187127064.png',
  'certificate-congratulations-education-achievement-square-1786432319315.jpeg',
  'certificate-congratulations-education-achievement-square-1786432898997.jpeg',
  'Jumma-14august-1786781762206.jpeg',

  'portrait-2-3-1785653655385.jpeg',
  'portrait-2-3-1785653891553.jpeg',
  'portrait-2-3-1785654450069.jpeg',
  'poster-education-urdu-religious-portrait-1789183833256.jpeg',
  'poster-eid-mubarak-urdu-islamic-portrait-1788325616569.jpeg',
  'poster-eid-mubarak-urdu-islamic-portrait-1788425206730.jpeg',
  'poster-invitation-urdu-islamic-portrait-1788342664485.jpeg',
  'poster-pakistan-independence-day-square-1785827126766.jpeg',
  'poster-travel-pilgrimage-religious-portrait-1788178526514.jpeg',
  'poster-urdu-event-gathering-portrait-1788099042881.jpeg',
  'poster-urdu-event-gathering-portrait-1788099264693.jpeg',
  'poster-urdu-islamic-religious-portrait-1787982167234.jpeg',
  'poster-urdu-religious-event-portrait-1788179906056.jpeg',
  'poster-urdu-religious-event-portrait-1788189459748.jpeg',
  'poster-urdu-religious-event-portrait-1788515775967.jpeg',
  'poster-urdu-welcome-islamic-portrait-1788940657573.jpeg',
  'ramadan-poster-islamic-urdu-portrait-1789038800358.jpeg',
  'ramadan-poster-islamic-urdu-portrait-1789039546019.jpeg',
  'umra-mubarak-hujj-عمرہ-portrait-1788786571486.jpeg',
  'Untitled-1783406897724.jpeg',
  'Untitled-1783622148399.jpeg',
  'Untitled-1783622408294.jpeg',
  'Untitled-1783709198823.jpeg',
  'Untitled-1784780040815.jpeg',
  'Untitled-1784820867554.jpeg',
  'Untitled-1785070818845.jpeg',
  'Untitled-1785141221522.jpeg',
  'Untitled-1785214491269.jpeg',
  'Untitled-1785214731463.jpeg',
  'Untitled-1785215428180.jpeg',
  'Untitled-1785753383663.jpeg',
  'Untitled-1786096344130.jpeg',
  'Untitled-1787118875056.jpeg',
  'Untitled-1787164050371.jpeg',
  'Untitled-1787305976694.jpeg',
  'untitled-1787464047590.jpeg',
  'untitled-1787491952289.png',
  'untitled-1787512982149.jpeg',
  'Untitled-1787644449965.jpeg',
  'untitled-1788085866984.jpeg',
  'untitled-1788086211962.jpeg',
  'Untitled-1788756654399.jpeg',
  'Untitled-5-4-1786669947649.jpeg',
  'untitlekk-1787564749714.jpeg',
  'urdu-poster-religious-islamic-portrait-1787106133002.jpeg',
  'علی-زیب-1787631451163.jpeg'
];
const getPostDetails = image => {
  const name = image.toLowerCase();
  if (name.includes('jumma') || name.includes('juma')) return { title: 'جمعہ مبارک', category: 'ISLAMIC POST' };
  if (name.includes('eid')) return { title: 'عید مبارک', category: 'EID POST' };
  if (name.includes('ramadan')) return { title: 'رمضان مبارک', category: 'RAMADAN POST' };
  if (name.includes('azadi') || name.includes('independence')) return { title: 'جشنِ آزادی', category: 'SPECIAL POST' };
  if (name.includes('certificate')) return { title: 'مبارکباد', category: 'CERTIFICATE DESIGN' };
  if (name.includes('umra') || name.includes('travel')) return { title: 'عمرہ مبارک', category: 'ISLAMIC POST' };
  if (name.includes('invitation')) return { title: 'دعوت نامہ', category: 'EVENT INVITATION' };
  if (name.includes('welcome')) return { title: 'خوش آمدید', category: 'ISLAMIC POST' };
  if (name.includes('event') || name.includes('gathering')) return { title: 'محفلِ میلاد', category: 'MEHFIL POST' };
  return { title: 'اسلامی پوسٹ', category: 'SAFI GRAPHICS DESIGN' };
};
posts = portfolioImages.map(image => ({ image, ...getPostDetails(image) }));
const gallery = document.querySelector('#post-gallery');
const visiblePosts = document.body.classList.contains('all-posts-page') ? posts : posts.slice(0, 8);
const postCount = document.querySelector('#post-count');
if (postCount) postCount.textContent = posts.length;
const modal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalPlaceholder = document.querySelector('#modal-placeholder');
const modalPlaceholderTitle = document.querySelector('#modal-placeholder-title');
const modalCategory = document.querySelector('#modal-category');
const closeModal = () => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-active'); };
const openPreview = trigger => {
  const hasImage = Boolean(trigger.dataset.image);
  modalImage.src = hasImage ? trigger.dataset.image : ''; modalImage.alt = hasImage ? `${trigger.dataset.title} — Safi Graphics design` : '';
  modalImage.hidden = !hasImage; modalPlaceholder.hidden = hasImage;
  modalPlaceholderTitle.textContent = trigger.dataset.title; modalCategory.textContent = trigger.dataset.category || 'CUSTOM POST'; modalTitle.textContent = trigger.dataset.title;
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-active');
};
const renderPosts = postList => {
  if (!postList.length) {
    gallery.innerHTML = '<div class="col-12"><div class="no-posts">اس category میں ابھی کوئی post موجود نہیں ہے۔</div></div>';
    return;
  }
  gallery.innerHTML = postList.map(post => `
    <div class="col-sm-6 col-lg-4"><article class="post-card ${post.placeholder ? 'post-placeholder' : ''} preview-trigger" data-image="${post.image || ''}" data-title="${post.title}" data-category="${post.category}" aria-label="${post.title} بڑی image میں دیکھیں" role="button" tabindex="0">
      ${post.image ? `<img src="${post.image}" alt="${post.title} design by Safi Graphics">` : `<div class="placeholder-inner"><b>${post.title}</b><span>${post.category} • FULL VIEW ↗</span></div>`}
      ${post.image ? `<div class="post-caption"><h3>${post.title}</h3><p>${post.category} • FULL VIEW ↗</p></div>` : ''}
    </article></div>`).join('');
  gallery.querySelectorAll('.preview-trigger').forEach(trigger => { trigger.addEventListener('click', () => openPreview(trigger)); trigger.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openPreview(trigger); } }); });
};
renderPosts(visiblePosts);
const categoryFilters = {
  all: () => true,
  islamic: post => /ISLAMIC|EID|RAMADAN/.test(post.category),
  wedding: post => /WEDDING|NIKAH/.test(post.category),
  mehfil: post => /MEHFIL|NAAT/.test(post.category),
  events: post => /EVENT|INVITATION|CERTIFICATE|SPECIAL/.test(post.category)
};
const filterStatus = document.querySelector('#filter-status');
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  const filteredPosts = posts.filter(categoryFilters[filter]);
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
  filterStatus.textContent = filter === 'all' ? `تمام ${posts.length} posts` : `${filteredPosts.length} posts دکھائی جا رہی ہیں`;
  renderPosts(filteredPosts);
}));
document.querySelector('#modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });

const whatsappForm = document.querySelector('#whatsapp-form');
whatsappForm?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#client-name').value.trim();
  const email = document.querySelector('#client-email').value.trim();
  const message = document.querySelector('#client-message').value.trim();
  const text = `Assalam-o-Alaikum Safi Graphics!%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
  window.open(`https://wa.me/923272000339?text=${text}`, '_blank', 'noopener');
});
