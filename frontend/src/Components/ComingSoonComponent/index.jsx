import "./styles.css";
import RippedPaperBG from "/assets/coming-soon-transparent.png";

function ComingSoonComponent() {
  return (
    <div className={`container coming-soon--wrapper__outer`}>
      <a
        href="https://www.fullstackfanatic.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-wrapper-2">
          <img className={`ripped-paper-bg`} src={RippedPaperBG}></img>
        </div>

        <div className="title-wrapper">
          <h2>Coming Soon</h2>
        </div>
      </a>
    </div>
  );
}

export default ComingSoonComponent;
