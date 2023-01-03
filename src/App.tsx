import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Gifting from "./pages/Gifting";

function App() {
  return (
    <>
      <Container className="mt-5">
        <Gifting />
      </Container>
    </>
  );
}

export default App;
