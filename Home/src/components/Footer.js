import React from "react";
import { Button } from "./Button";
import './Footer.scss';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Junta-te ao nosso boletim informativo, para receber e ser consultado acerca de subscrições e ofertas únicas 
        </p>
        <p className="footer-subscription-text">
            Podes subscrever-te a nossa equipa
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Coloque o Email" className="footer-input" />
            <Button children="Subscreva" buttonStyle="btn--outline" />
          </form>
        </div>
      </section>
      <section className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre Nós</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Testemunhos</Link>
            <Link to='/'>Carreira</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos de Serviços</Link>
          </div>
          <div className="footer-link-items">
            <h2> Contacto</h2>
            <Link to='/sign-up'>Obtenha Suporte</Link>
            <Link to='/'>Contacte-nos</Link>
            <Link to='/'>Carreiras</Link>
            <Link to='/'>Sê Parceiro</Link>
            <Link to='/'>Sê Membro</Link>
          </div>
          <div className="footer-link-items">
            <h2>Nossos Activos</h2>
            <Link to='/sign-up'>Comita Vídeps</Link>
            <Link to='/'>Embaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influências</Link>
            <Link to='/'>Reporte um Problema</Link>
          </div>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              JUST FOR FUN <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">
            JUST FOR FUN &copy; 2024
          </small>
          <div className="social-icons">
            <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="Linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
