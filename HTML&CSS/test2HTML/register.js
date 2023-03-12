const registerForm = document.querySelector('#register-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const passwordConfirmInput = document.querySelector('#password-confirm-input');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  if (password !== passwordConfirm) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  // 여기서 회원가입 처리를 해줍니다.
  // ...
  window.location.href = './login.html'; // 회원가입 성공 시 로그인 페이지로 이동합니다.
});
