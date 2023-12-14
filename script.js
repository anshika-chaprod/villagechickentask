document.getElementById('scrolltobottom').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

function submitForm() {
    var emailInput = document.getElementById('email-input');
    var email = emailInput.value;
    console.log('Entered email:', email);
    emailInput.value = '';
}

  