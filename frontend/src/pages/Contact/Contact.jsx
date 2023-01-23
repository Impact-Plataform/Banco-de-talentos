import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import iconLinkedin from '../../svg/icon-linkedin.svg';
import iconGithub from '../../svg/icon-github.svg';
import iconInstagram from '../../svg/icon-instagram.svg';

import './style.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert('Peencha todos os campos.');
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs
            .send(
                'service_7pegyj1',
                'template_grc0vfr',
                templateParams,
                '5OhWyTA6DRn279v79',
            )
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'E-mail enviado!',
                    });

                    setName('');
                    setEmail('');
                    setMessage('');
                },
                () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocorreu um erro!',
                    });
                },
            );
    }

    return (
        <>
            <section className="container">
                <div className="contact">
                    <div className="contact__form">
                        <h3>Entre em contato</h3>
                        <p>
                            Aqui você vai conseguir mais informações sobre o
                            desafio Jedi utilizando React.js.
                        </p>
                        <form onSubmit={sendEmail}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <textarea
                                name="content"
                                rows="8"
                                placeholder="Mensagem"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>

                            <button type="submit" className="contact__btn">
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="contact__info">
                        <h5>Algumas informações</h5>

                        <h6>Info.</h6>
                        <p>
                            Desafio jedi. Desenvolvido em React.js por Jean
                            Wilker.
                        </p>

                        <h6>Endereço</h6>
                        <p>Salvador, BA.</p>

                        <h6>E-mail</h6>
                        <p>jeanwilkerss@gmail.com</p>

                        <h6>Redes sociais</h6>
                        <div className="contact__networks">
                            <a href="https://www.linkedin.com/in/jeanwilkerss/">
                                <img
                                    src={iconLinkedin}
                                    alt="Ícone de redirecionamento linkedin"
                                />
                            </a>
                            <a href="https://github.com/jeanwilker">
                                <img
                                    src={iconGithub}
                                    alt="Ícone de redirecionamento github"
                                />
                            </a>
                            <a href="https://www.instagram.com/wilker.ss/">
                                <img
                                    src={iconInstagram}
                                    alt="Ícone de redirecionamento Instagram"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
