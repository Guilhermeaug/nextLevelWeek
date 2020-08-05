import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/51031674?s=460&u=abea2dc47e59ac4acc4a43624f2cf55c2bb23fbd&v=4" alt="EU" />
                <div>
                    <strong>Guilherme Augusto</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                            Entrar em contato
                        </button>
            </footer>

        </article>
    );
}

export default TeacherItem;