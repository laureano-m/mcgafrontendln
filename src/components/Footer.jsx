import "../stylesheets/footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footerContent">
        {/* Div con info */}
          <div className="divInfo">
            <div className="aboutUs">
              <h2>Sobre nosotros</h2>
              <p>
              Alberdi Luz es una empresa familiar que se inició en el 2003 en la ciudad de Rosario.
              Somos una distribuidora mayorista que se dedica a la comercialización e importación de artículos de ferreteria y electricidad.
              Contamos con alrededor de 1000 clientes en la zona de Rosario y alrededores.
              Representantes exclusivos de candados y cerraduras Sekur.
              Nuestros principales proveedores son Unipega, Nova Electricity, Philips, entre otros.
              Nuestro objetivo principal es brindar soluciones para el beneficio de nuestros clientes buscando satisfacer sus necesidades.
              </p>
            </div>
            <div className="contactInfo">
              <h2>Información de contacto</h2>
              <p className="underline">
                Teléfono: <a href="tel:+3413279367">+54 3413279367</a>
              </p>
              <p className="underline">
                Email:{" "}
                <a href="mailto:laureanomandrile13@gmail.com">laureanomandrile13@gmail.com</a>
              </p>
            </div>
          </div>
        <div className="credits">
          <h2>Créditos</h2>
          <p>
            Esta página fue desarrollada por Laureano Mandrile y Nicolás Mandrile
            para Alberdi Luz.
          </p>
        </div>
        <div className="footerRights">
          <p>© 2025 - Todos los derechos reservados</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
