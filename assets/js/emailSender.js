document.getElementById('sendEmail').addEventListener('click', SendEmail);

function SendEmail() {
    // event.preventDefault();

    let from = document.getElementById('fromEmail').value;
    let to = 'mrrakib.cse@gmail.com';
    let name = document.getElementById('fromName').value;
    let message = document.getElementById('fromMessage').value;

    let data = {
        service_id: 'service_pwg2afv',
        template_id: 'template_ccw8z1m',
        user_id: 'user_NaYJ8F6GW0xHvAqSZGOKZ',
        template_params: {
            'from_email': from,
            'from_name': name,

            'to_email': to,
            'to_name': 'Md Rakibul Hasan',

            'message': message,
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };

    let params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', params)
        .then(response => response)
        .then(data => alert("Email Send"))
        .catch(error => console.error(error));

}