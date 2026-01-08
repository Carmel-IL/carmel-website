const btnWhatsAppChat = document.querySelectorAll('.btn-whatsapp-chat');

const phone = '972505220276';
const waMessage = `שלום אמנון, הגעתי אליך דרך האתר של כרמל הדברות. 
אשמח לקבל פרטים נוספים לגבי השירות שלכם.`;

const btnWhatsAppUrl = `https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`;

btnWhatsAppChat.forEach((btn) => {
  btn.href = btnWhatsAppUrl;
});
