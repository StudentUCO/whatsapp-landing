

import './App.css';
import { Zap, Rocket, Settings, Phone, MessageCircle, CheckCircle, Users, Shield, Clock, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handlePrivacyClick = () => {
    navigate('/privacy');
  };

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="header-icon">
          <Zap size={56} className="icon-automation" />
        </div>
        <h1>Automatiza tu negocio con n8n y WhatsApp</h1>
        <p className="landing-subtitle">
          Impulsa la eficiencia de tu empresa integrando flujos automáticos entre WhatsApp y tus sistemas favoritos usando n8n.
        </p>
        <a href="#contacto" className="cta-button" onClick={(e) => {
          e.preventDefault();
          document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        }}>Solicita una demo</a>
      </header>
      <section className="benefits-section">
        <h2><Rocket size={32} className="section-icon" /> ¿Por qué elegirnos?</h2>
        <ul className="benefits-list">
          <li><Users className="benefit-icon" /> Automatizaciones personalizadas para tu negocio</li>
          <li><Shield className="benefit-icon" /> Integración rápida y segura con WhatsApp</li>
          <li><Wrench className="benefit-icon" /> Soporte experto en n8n y automatización</li>
          <li><Clock className="benefit-icon" /> Mejora la atención al cliente y ahorra tiempo</li>
          <li><CheckCircle className="benefit-icon" /> Soluciones escalables y flexibles</li>
        </ul>
      </section>
      <section className="how-section">
        <h2><Settings size={32} className="section-icon" /> ¿Cómo funciona?</h2>
        <ol className="how-list">
          <li>Analizamos tus necesidades y procesos</li>
          <li>Diseñamos flujos automáticos con n8n</li>
          <li>Conectamos WhatsApp y tus sistemas</li>
          <li>Te acompañamos en la puesta en marcha y soporte continuo</li>
        </ol>
      </section>
      <section className="contact-section" id="contacto">
        <h2><Phone size={32} className="section-icon" /> Solicita tu demo gratuita</h2>
        <form className="contact-form" onSubmit={e => {e.preventDefault(); alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.')}}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="tel" placeholder="WhatsApp" required />
          <button type="submit" className="cta-button">Enviar</button>
        </form>
        <div style={{marginTop: '16px', textAlign: 'center'}}>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="cta-button" style={{background: '#25d366', marginTop: '8px'}}>
            <MessageCircle size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>
      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Automatizaciones n8n + WhatsApp. Todos los derechos reservados.</p>
        <p style={{fontSize: '0.9rem', marginTop: '8px'}}>
          Sitio desarrollado con React y Vite. | 
          <span 
            onClick={handlePrivacyClick}
            style={{color: '#25d366', textDecoration: 'none', marginLeft: '8px', cursor: 'pointer'}}
          >
            Política de Privacidad
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
