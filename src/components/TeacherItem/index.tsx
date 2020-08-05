import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://w7.pngwing.com/pngs/528/1006/png-transparent-lion-old-school-tattoo-flash-new-school-painted-lion-head-lion-wearing-eyeglasses-illustration-watercolor-painting-mammal-animals.png"
                    alt="Oswaldo Correa" />
                <div>
                    <strong>Oswaldo C. Neto
                        <span>
                            Física
                        </span>
                    </strong>
                </div>
            </header>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br/><br/> 
                Veniam, sunt nesciunt sequi blanditiis esse molestiae. Laborum sint esse, quisquam sed eveniet possimus modi est nulla neque cum mollitia ut! Tempora.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;