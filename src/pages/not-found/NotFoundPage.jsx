import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <Container className="text-center">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist or was moved.</p>
        <Link to="/" className="not-found-link">Back to Home</Link>
      </Container>
    </section>
  );
};

export default NotFoundPage;
