import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

import './contact.css';
import '../../styles/animate.css';

import imgContact from '../../images/contato.jpg';
import Head from '../../components/Head';

const Contact = () => {
  return (
    <section id="page-contact" className="animeLeft">
      <Head title="Ranek | Contato" description="Enrte em contato conosco" />
      <img src={imgContact} alt="" />
      <div className="info">
        <h1>Entre em Contato</h1>
        <ul>
          <li>
            <FiMail /> falaigors@gmail.com
          </li>
          <li>
            <FiPhone /> 99 99999 9999
          </li>
          <li>
            <FiMapPin /> Rua Logo Ali, 99 - Jardim Aqui Perto
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
