import { Link } from "react-router-dom";
import "./EmptyState.css";

const EmptyState = ({ title, description, actionLabel, actionTo = "/" }) => {
  return (
    <div className="empty-state text-center">
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && (
        <Link to={actionTo} className="primary-link-button">
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
