import "./styles.css";
import OverlayComponent from "../ThumbnailOverlayComponent";

function ThumbnailComponent({ project, onClick }) {
  return (
    <div
      className={`project_${project.id}-thumbnail--wrapper`}
      onClick={() => onClick(project)}
    >
      <OverlayComponent />

      <div className={`project_${project.id}-thumbnail`}>
        <img
          src={project.thumbnail}
          loading="lazy"
          alt={`${project.title} thumbnail`}
        />
      </div>
    </div>
  );
}

export default ThumbnailComponent;
