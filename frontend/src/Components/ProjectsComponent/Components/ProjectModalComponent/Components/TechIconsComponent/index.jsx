import "./styles.css";

const ICON_MAP = {
  React: "/assets/react.svg",
  Next: "/assets/skillIcons/next-js.svg",
  Angular: "/assets/skillIcons/angular-modal.png",
  JavaScript: "/assets/skillIcons/JS-skills-Card-img.jpg",
  Typescript: "/assets/skillIcons/Typescript_logo.webp",
  HTML: "/assets/skillIcons/html-1.svg",
  CSS: "/assets/skillIcons/css-3.svg",
  Node: "/assets/skillIcons/node.png",
  Firebase: "/assets/skillIcons/firebase-modal.png",
  Photoshop: "/assets/skillIcons/Adobe-Photoshop-Logo.png",
  THREE: "/assets/skillIcons/Three.js_Icon.svg",
  Vite: "/assets/skillIcons/Vitejs-logo.svg",
};

// eslint-disable-next-line react/prop-types
function TechIconsComponent({ icons }) {
  return (
    <div className="icons-wrapper-inner">
      {/* eslint-disable-next-line react/prop-types */}
      {icons.map((icon) => (
        <img
          className={`modal-icon ${icon}`}
          key={icon}
          src={ICON_MAP[icon]}
          alt={icon}
          title={icon}
        />
      ))}
    </div>
  );
}

export default TechIconsComponent;
