import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const sendEmail = (event) => {
    event.preventDefault();

    const serviceID = 'service_bztxy9o';
    const templateID = 'template_5qvbwju';
    const userID = 'ZniNuIPP76QlY4VtJ';

    const target = event.target;

    const templateParams = {
        name: target.elements.namedItem('name').value,
        email: target.elements.namedItem('email').value,
        message: target.elements.namedItem('message').value,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
            Swal.fire('Success', 'Email sent successfully!', 'success');
            target.reset();
        })
        .catch((error) => {
            Swal.fire('Error', 'Failed to send email. Please try again later.', 'error');
        });
};