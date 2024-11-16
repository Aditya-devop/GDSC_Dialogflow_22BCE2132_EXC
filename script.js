const container = document.querySelector('.contain');
const LoginLink = document.querySelector('.SignInlink');
const RegisterLink = document.querySelector('.SignUplink');
RegisterLink.addEventListener('click', () => {
    container.classList.add('active');
})
LoginLink.addEventListener('click', () => {
    container.classList.remove('active');
})