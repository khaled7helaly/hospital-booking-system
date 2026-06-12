import "./SectionHeader.css";

const SectionHeader = ({ eyebrow, title, description, align = "center", className = "" }) => {
  return (
    <div className={`section-header section-header-${align} ${className}`.trim()}>
      {eyebrow && <span>{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeader;
