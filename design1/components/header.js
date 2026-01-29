class CustomHeader extends HTMLElement {
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
        
        header {
          background-color: rgba(17, 24, 39, 0.9);
          backdrop-filter: blur(10px);
          position: fixed;
          width: 100%;
          z-index: 1000;
          border-bottom: 1px solid rgba(55, 65, 81, 0.5);
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
        }
        
        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .logo-icon {
          margin-right: 0.75rem;
          color: #2563eb;
        }
        
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #2563eb, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
        }
        
        .nav-links li {
          margin-left: 2rem;
        }
        
        .nav-links a {
          color: #d1d5db;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #f9fafb;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #ea580c);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #d1d5db;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background-color: rgba(17, 24, 39, 0.95);
            flex-direction: column;
            align-items: center;
            padding-top: 2rem;
            transition: left 0.3s ease;
          }
          
          .nav-links.active {
            left: 0;
          }
          
          .nav-links li {
            margin: 1rem 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <header>
        <div class="container">
          <nav class="navbar">
            <a href="index.html" class="logo">
              <i data-feather="cpu" class="logo-icon"></i>
              <span class="logo-text">MetalCraft</span>
            </a>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
              <i data-feather="menu" id="menuIcon"></i>
            </button>
            
            <ul class="nav-links" id="navLinks">
              <li><a href="index.html">Главная</a></li>
              <li><a href="services.html">Услуги</a></li>
              <li><a href="projects.html">Проекты</a></li>
              <li><a href="contacts.html">Контакты</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    
    // Инициализация feather icons
    const menuIcon = this.shadowRoot.getElementById('menuIcon');
    const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
    const navLinks = this.shadowRoot.getElementById('navLinks');
    
    // Переключение мобильного меню
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      menuIcon.setAttribute('data-feather', isOpen ? 'x' : 'menu');
      feather.replace();
    });
  }
}

customElements.define('custom-header', CustomHeader);