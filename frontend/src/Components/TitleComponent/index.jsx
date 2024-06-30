import "./styles.css";

// eslint-disable-next-line react/prop-types
function TitleComponent({ textContent, classTitle }) {
  return (
    <div className="title-container">
      <div className={`title-container-inner ${classTitle}`}>
        <h2 className="title">{textContent}</h2>
      </div>
    </div>
  );
}

export default TitleComponent;
