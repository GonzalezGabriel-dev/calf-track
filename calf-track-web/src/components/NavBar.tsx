import React from 'react';
import imagen from '../img/calf.png';
export default function NavBar(props: { type?: String | undefined }) {
  const { type } = props;
  return (
    <section
      className={'navbar custom-navbar navbar-fixed-top' + ' ' + type}
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>

          <img src={imagen} alt="cows" width={'80px'} height={'auto'} />
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="/" className="smoothScroll">
                Inicio
              </a>
            </li>
            <li>
              <a href="/#feature" className="smoothScroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/about" className="smoothScroll">
                Registro
              </a>
            </li>
            <li>
              <a href="/#contact" className="smoothScroll letra">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
