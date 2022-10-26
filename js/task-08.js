// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.

const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Потрібно заповнити всі поля");
  }

  const formDataObj = {
    email: email.value,
    password: password.value,
  };

  console.log(formDataObj);
  event.currentTarget.reset();
}
