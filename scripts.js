
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ saved === 'light' ? root.classList.add('light') : root.classList.remove('light'); }
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
})();

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('sendBtn')?.addEventListener('click', ()=>{
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const to = 'your.email@example.com';
  if(!name || !email || !message){
    document.getElementById('formMsg').textContent = 'أكمل البيانات من فضلك.';
    return;
  }
  const subject = encodeURIComponent('رسالة من الموقع — ' + name);
  const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  document.getElementById('formMsg').textContent = 'تم فتح عميل البريد لإرسال الرسالة.';
});
