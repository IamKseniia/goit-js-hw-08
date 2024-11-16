const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const data = {};
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  data.email = email.trim();
  data.password = password.trim();
  console.log(data);
  form.reset();
});
