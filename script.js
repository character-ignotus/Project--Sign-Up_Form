let pwd = document.querySelector('#pwd');
let pwdConfirm = document.querySelector('#pwd-confirm');

pwdConfirm.classList.remove('valid');
pwdConfirm.classList.remove('invalid');

pwdConfirm.addEventListener('keyup', () => {
    if((pwd.value.length == pwdConfirm.value.length) && (pwd.value == pwdConfirm.value)) {
        pwdConfirm.classList.remove('invalid');
        pwdConfirm.classList.add('valid');
        console.log('yes');
    } else {
        pwdConfirm.classList.remove('valid');
        pwdConfirm.classList.add('invalid');
        console.log('no');
    }
});


