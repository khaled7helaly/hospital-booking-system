import { Link } from "react-router-dom";
import "./BreadcrumbTrail.css";

const BreadcrumbTrail = ({ items = [], label = "Breadcrumb" }) => {
  return (
    <nav className="breadcrumb-trail" aria-label={label}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const key = `${item.label}-${index}`;

        return (
          <span className="breadcrumb-trail-item" key={key}>
            {item.to && !isLast ? <Link to={item.to}>{item.label}</Link> : <strong>{item.label}</strong>}
            {!isLast && <span aria-hidden="true">/</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadcrumbTrail;
