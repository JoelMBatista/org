import "./footer.css"

const Footer = () => {

    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}}>
      <div className="Rede">
        <a href="https://web.facebook.com/joelmanuel.matosbatista" target="blank">
        <img src="/img/facebook.png" alt="Facebook" />
        </a>
     
        <a href="https://twitter.com/joel_matosB" target="blank">
            <img src="/img/twitter.png" alt="Twitter" />
        </a>
        
        <a href="https://www.instagram.com/joelmatosbatista/" target="blank">
        <img src="/img/instagram.png" alt="Instagram" />
        </a>
      </div>

      <img src="/img/Logo.png" alt="Logo" />
      <strong>Desarrollado por Joel Matos</strong>
     
    </footer>
}

export default Footer