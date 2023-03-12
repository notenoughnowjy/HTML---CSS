const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  // 여기서 로그인 처리를 해줍니다.
  // ...
  window.location.href = './index.html'; // 로그인 성공 시 메인 페이지로 이동합니다.
});
