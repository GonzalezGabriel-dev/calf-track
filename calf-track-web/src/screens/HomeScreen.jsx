import React,{useState} from 'react';
import NavBar from '../components/NavBar';
import imagen from '../img/vacas.jpeg';
import Modal from 'react-modal';

export default function HomeScreen() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <NavBar />
      <section id="home">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-12">
              <div class="home-info">
                <h3>Rastreo al instante</h3>
                <h1>CONOCE TU GANADO</h1>
                <form action="" method="get" class="online-form">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="CODIGO"
                    required=""
                  />
                  <button type="submit" class="form-control">
                    BUSCAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="section-title">
                <h1>Conoce TODO</h1>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                  <a
                    href="#tab01"
                    aria-controls="tab01"
                    role="tab"
                    data-toggle="tab"
                  >
                    Propuesta
                  </a>
                </li>

                <li>
                  <a
                    href="#tab02"
                    aria-controls="tab02"
                    role="tab"
                    data-toggle="tab"
                  >
                    Segmento
                  </a>
                </li>

                <li>
                  <a
                    href="#tab03"
                    aria-controls="tab03"
                    role="tab"
                    data-toggle="tab"
                  >
                    Ventajas
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane active" id="tab01" role="tabpanel">
                  <div class="tab-pane-item">
                    <h3>     Dar conocer la trazabilidad de la carne
de res chihuahuense para generar un
valor adicional y reconocimiento a
nuestro estado, por medio de
productos de calidad y clientes
satisfechos, también ayudara a guardar
información de forma digital y segura.</h3>
                    
                  </div>
                </div>

                <div class="tab-pane" id="tab02" role="tabpanel">
                  <div class="tab-pane-item">
                    <h3>Nuestro proyecto tiene 2 segmentos de mercado,
está enfocado a las empresas comercializadoras
de la carne de res, ya que son las interesadas en
saber la trazabilidad de el producto para generar
mayor confiabilidad a sus clientes mientras que el
sector ganadero está interesado en dar a conocer
la procedencia de la carne de res para lograr
mayor venta y un reconocimiento a nivel
internacional como productores de calidad.</h3>
                  </div>
                </div>

                <div class="tab-pane" id="tab03" role="tabpanel">
                  <div class="tab-pane-item">
                    <h3>Al utilizar Blockchain ya hace nuestro proyecto
único ya que la información será segura, sin
embargo, otra ventaja es que el estado de
Chihuahua por muchos años ha mantenido
primer lugar nacional en exportación de ganado
bovino, sin embargo, las personas que lo
consumen no saben su procedencia. Al conocer
de donde viene la carne de res nuestro estado
tendrá mayor reconocimiento y con ello podrán
incrementar las ventas gracias a un aumento de
demanda de “carne de calidad”.</h3>
                   
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="feature-image">
                <img
                  src={imagen}
                  class="img-responsive"
                  alt="cows"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-10 col-sm-12">
              <form id="contact-form" role="form" action="" method="post">
                <div class="section-title">
                  <h1>Envia un mensaje</h1>
                </div>

                <div class="col-md-4 col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre Completo"
                    name="name"
                    required=""
                  />
                </div>
                <div class="col-md-4 col-sm-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required=""
                  />
                </div>
                <div class="col-md-4 col-sm-4">
                  <input
                    type="submit"
                    class="form-control"
                    name="Enviar mensaje"
                    value="Enviar mensaje"
                  />
                </div>
                <div class="col-md-12 col-sm-12">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Tu mensaje"
                    name="message"
                    required=""
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <footer id="footer" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="copyright-text col-md-12 col-sm-12">
              <div class="col-md-6 col-sm-6">
                <p>
                  CALF-TRACK
                </p>
              </div>

              <div class="col-md-6 col-sm-6">
                <ul class="social-icon">
                  <li>
                    <a
                      href="#"
                      class="fa fa-facebook-square"
                      attr="facebook icon"
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-instagram"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
