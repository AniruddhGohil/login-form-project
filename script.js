// script.js — placed at document end so DOM exists
console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const usernameError = document.getElementById('usernameError');
  const passwordError = document.getElementById('passwordError');
  const mascot = document.getElementById('mascot');

  if (!mascot) console.warn('Mascot element not found (check id and file name)');

  // helper: briefly add class then remove so animation can replay
  function triggerClass(el, className, ms = 700) {
    el.classList.remove(className);
    // force reflow restart
    void el.offsetWidth;
    el.classList.add(className);
    setTimeout(() => el.classList.remove(className), ms + 50);
  }

  // focus/blur: mascot "attends" to input
  [username, password].forEach(input => {
    input.addEventListener('focus', () => {
      mascot.classList.add('attend');
    });
    input.addEventListener('blur', () => {
      mascot.classList.remove('attend');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    // username
    if (username.value.trim() === '') {
      usernameError.style.display = 'block';
      valid = false;
    } else {
      usernameError.style.display = 'none';
    }

    // password
    if (password.value.length < 6) {
      passwordError.style.display = 'block';
      valid = false;
    } else {
      passwordError.style.display = 'none';
    }

    if (!valid) {
      // shake the mascot to indicate error
      if (mascot) triggerClass(mascot, 'shake', 600);
      console.log('validation failed');
      return;
    }

    // success: hop and show a tiny confirmation
    if (mascot) triggerClass(mascot, 'hop', 700);
    console.log('form valid — pretend to submit');
    alert('Form would be submitted (demo).');
    form.reset();
  });
});
