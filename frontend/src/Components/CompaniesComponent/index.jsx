import "./styles.css";
import JanssenLogo from "/assets/companies/janssen-logo.png";
import YMCALogo from "/assets/companies/ymca-gta(with-text).png";
import CGLLogo from "/assets/companies/CGL-logo.png";
import OGLogo from "/assets/companies/og-logo.webp";
import AlexionLogo from "/assets/companies/alexion-logo.png";
import NovoLogo from "/assets/companies/novo-logo.png";
import OutpostLogo from "/assets/companies/op-logo-2.svg";
import InsuletLogo from "/assets/companies/insulet-logo.png";

function CompaniesComponent() {
  return (
    <div className={`companies--wrapper__outer`}>
      <p className={`companies-intro`}>
        {" "}
        Some companies I&apos;ve had the pleasure
        <br className={`desktop-break`} />
        of doing work for:
      </p>
      <div className="companies--wrapper__inner">
        <div className={`img--wrapper img1`}>
          <img src={JanssenLogo} alt="JANSSEN" title="Janssen" />
        </div>
        <div className={`img--wrapper img2`}>
          <img src={YMCALogo} title="YMCA" alt="YMCA" />
        </div>
        <div className={`img--wrapper img3`}>
          <img src={CGLLogo} alt="CGL" title="Canadian Global Logistics" />
        </div>
        <div className={`img--wrapper img4`}>
          <div className="img--wrapper__bg">
            <img src={OGLogo} alt="OG" title="OG Creations Recording Studio" />
          </div>
        </div>
        <div className={`img--wrapper img5`}>
          <img src={AlexionLogo} alt="Alexion" title="Alexion" />
        </div>
        <div className="img--wrapper img6">
          <img src={NovoLogo} alt="NOVO" title="Novo Nordisk" />
        </div>
        <div className="img--wrapper img7">
          <img src={OutpostLogo} alt="Outpost379" title="Outpost379" />
        </div>
        <div className="img--wrapper img8">
          <img src={InsuletLogo} title="Insulet" alt="Insulet" />
        </div>
      </div>
    </div>
  );
}

export default CompaniesComponent;
