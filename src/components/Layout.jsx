const Layout = ({ designContent, formContent }) => {
  return (
    <main className="page-shell">
      <div className="page-layout">
        <aside className="design-section">
          <h1 className="logo">+Medic</h1>
          {designContent}
        </aside>

        <section className="form-section">{formContent}</section>
      </div>
    </main>
  );
};

export default Layout;
