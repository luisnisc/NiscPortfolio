import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_bztxy9o', 'template_5qvbwju', event.target, 'ZniNuIPP76QlY4VtJ')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                title: 'Thank you!!',
                text: 'The email has been correctly sent',
                icon: 'success',
                confirmButtonText: 'OK',
                background: '#1a202c', // Fondo oscuro
                color: '#fff', // Texto blanco
                confirmButtonColor: 'purple', // Color del botón de confirmación
                customClass: {
                    title: 'swal2-title',
                    content: 'swal2-content'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/contact'; // Redirigir al usuario a la página /contact
                }
            });
        }, (error) => {
            console.log(error.text);
            const formStatus = document.getElementById('form-status');
            if (formStatus) {
                formStatus.textContent = 'Oops! There was a problem submitting your form.';
            }
        });

    event.target.reset();
};