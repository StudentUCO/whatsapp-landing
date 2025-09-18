import './App.css';
import { Shield, ArrowLeft, Lock, Eye, UserCheck, FileText, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="landing-container">
      <header className="privacy-header">
        <div className="header-icon">
          <Shield size={56} className="icon-automation" />
        </div>
        <h1>Política de Privacidad</h1>
        <p className="privacy-subtitle">
          Tu privacidad es nuestra prioridad. Conoce cómo protegemos y manejamos tu información personal.
        </p>
        <Link to="/" className="back-button">
          <ArrowLeft size={20} style={{marginRight: '8px', verticalAlign: 'middle'}} />
          Volver al inicio
        </Link>
      </header>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2><FileText size={24} className="section-icon" /> Información que recopilamos</h2>
          <div className="privacy-card">
            <h3>Información personal</h3>
            <ul>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono/WhatsApp</li>
              <li>Información de la empresa</li>
            </ul>
          </div>
          <div className="privacy-card">
            <h3>Información técnica</h3>
            <ul>
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de navegación</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2><Eye size={24} className="section-icon" /> Cómo utilizamos tu información</h2>
          <div className="privacy-card">
            <ul>
              <li>Proporcionar nuestros servicios de automatización</li>
              <li>Comunicarnos contigo sobre consultas y demos</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Enviar actualizaciones sobre nuestros servicios (con tu consentimiento)</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2><Lock size={24} className="section-icon" /> Protección de datos</h2>
          <div className="privacy-card">
            <h3>Medidas de seguridad</h3>
            <ul>
              <li>Cifrado SSL/TLS para todas las transmisiones</li>
              <li>Acceso restringido a información personal</li>
              <li>Monitoreo regular de sistemas de seguridad</li>
              <li>Capacitación en privacidad para nuestro equipo</li>
            </ul>
          </div>
          <div className="privacy-card">
            <h3>Retención de datos</h3>
            <p>Mantenemos tu información personal solo el tiempo necesario para los fines descritos en esta política o según lo exija la ley.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2><UserCheck size={24} className="section-icon" /> Tus derechos</h2>
          <div className="privacy-card">
            <ul>
              <li><strong>Acceso:</strong> Solicitar una copia de tu información personal</li>
              <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información</li>
              <li><strong>Portabilidad:</strong> Recibir tu información en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al procesamiento de tu información</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2><Globe size={24} className="section-icon" /> Compartir información</h2>
          <div className="privacy-card">
            <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:</p>
            <ul>
              <li>Con tu consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar (bajo estrictos acuerdos de confidencialidad)</li>
              <li>Para proteger nuestros derechos legales</li>
            </ul>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Cookies y tecnologías similares</h2>
          <div className="privacy-card">
            <p>Utilizamos cookies para mejorar tu experiencia en nuestro sitio web:</p>
            <ul>
              <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
              <li><strong>Cookies analíticas:</strong> Para entender cómo usas nuestro sitio</li>
              <li><strong>Cookies de preferencias:</strong> Para recordar tus configuraciones</li>
            </ul>
            <p>Puedes controlar las cookies a través de la configuración de tu navegador.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Servicios de terceros</h2>
          <div className="privacy-card">
            <p>Nuestros servicios pueden integrar con plataformas de terceros como:</p>
            <ul>
              <li><strong>WhatsApp Business API:</strong> Para automatizaciones de mensajería</li>
              <li><strong>n8n:</strong> Para flujos de automatización</li>
              <li><strong>Servicios de análisis:</strong> Para mejorar nuestro sitio web</li>
            </ul>
            <p>Cada servicio tiene sus propias políticas de privacidad que te recomendamos revisar.</p>
          </div>
        </section>

        <section className="privacy-section">
          <h2>Cambios en esta política</h2>
          <div className="privacy-card">
            <p>Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos por email o mediante un aviso en nuestro sitio web.</p>
            <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}</p>
          </div>
        </section>

        <section className="privacy-section contact-privacy">
          <h2><Mail size={24} className="section-icon" /> Contacto</h2>
          <div className="privacy-card">
            <p>Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:</p>
            <ul>
              <li><strong>Email:</strong> privacidad@tuempresa.com</li>
              <li><strong>WhatsApp:</strong> +XX XXX XXX XXXX</li>
              <li><strong>Dirección:</strong> [Tu dirección comercial]</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Automatizaciones n8n + WhatsApp. Todos los derechos reservados.</p>
        <p style={{fontSize: '0.9rem', marginTop: '8px'}}>Comprometidos con tu privacidad y seguridad.</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;