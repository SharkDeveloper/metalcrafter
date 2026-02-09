class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        footer {
          background-color: #0f172a;
          border-top: 1px solid #334155;
          padding: 3rem 0 1.5rem;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .footer-column h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #f9fafb;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-column h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #ea580c);
          border-radius: 3px;
        }
        
        .footer-column ul {
          list-style: none;
        }
        
        .footer-column ul li {
          margin-bottom: 0.75rem;
        }
        
        .footer-column ul li a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-column ul li a:hover {
          color: #f9fafb;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #1e293b;
          color: #9ca3af;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: linear-gradient(90deg, #2563eb, #ea580c);
          color: white;
          transform: translateY(-3px);
        }
        
        .copyright {
          text-align: center;
          padding-top: 1.5rem;
          border-top: 1px solid #334155;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-column">
              <h3>Shamonov.corp</h3>
              <p style="color: #9ca3af; margin-bottom: 1rem;">
                Профессиональная металлообработка и сварочные работы. Собственные производственные мощности.
              </p>
              <div class="social-links">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="linkedin"></i></a>
                <a href="#"><i data-feather="youtube"></i></a>
              </div>
            </div>
            
            <div class="footer-column">
              <h3>Услуги</h3>
              <ul>
                <li><a href="services.html#cutting">ЧПУ-обработка</a></li>
                <li><a href="services.html#welding">Сварочные работы</a></li>
                <li><a href="services.html#painting">Покраска и защита</a></li>
                <li><a href="services.html#design">Проектирование</a></li>
                <li><a href="services.html#bending">Гибка металла</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h3>Информация</h3>
              <ul>
                <li><a href="projects.html">Портфолио</a></li>
                <li><a href="#">Производство</a></li>
                <li><a href="#">Технологии</a></li>
                <li><a href="#">Сертификаты</a></li>
                <li><a href="contacts.html">Контакты</a></li>
              </ul>
            </div>
            
            <div class="footer-column">
              <h3>Контакты</h3>
              <ul>
                <li style="color: #9ca3af; margin-bottom: 0.75rem;">📞 +7 (906) 551-77-01</li>
                <li style="color: #9ca3af; margin-bottom: 0.75rem;">✉️ info@metalcraft.pro</li>
                <li style="color: #9ca3af; margin-bottom: 0.75rem;">🏢 Тверь, Старицкое Шоссе, д. 25с3</li>
                <li style="color: #9ca3af;">🕒 Ежедневно: 10:00 - 21:00</li>
              </ul>
            </div>
          </div>
          
          <div class="copyright">
            <p>&copy; 2023 Shamonov.corp. Все права защищены.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);