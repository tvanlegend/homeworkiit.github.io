const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

let count = 0;

btn.addEventListener('click', () = {
  count++;
  msg.textContent = `Ты нажал кнопку ${count} раз(а) 🎉`;
});