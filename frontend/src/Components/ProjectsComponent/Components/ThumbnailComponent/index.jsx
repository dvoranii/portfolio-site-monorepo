import "./styles.css";
import OverlayComponent from "../ThumbnailOverlayComponent";

// eslint-disable-next-line react/prop-types
function ThumbnailComponent({ project, onClick }) {
  return (
    <div
      // eslint-disable-next-line react/prop-types
      className={`project_${project.id}-thumbnail--wrapper`}
      onClick={() => onClick(project)}
    >
      <OverlayComponent />

      {/* eslint-disable-next-line react/prop-types */}
      <div className={`project_${project.id}-thumbnail`}>
        <img
          // eslint-disable-next-line react/prop-types
          src={project.thumbnail}
          loading="lazy"
          // eslint-disable-next-line react/prop-types
          alt={`${project.title} thumbnail`}
        />
      </div>
    </div>
  );
}

export default ThumbnailComponent;
