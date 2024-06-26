import { Spinner } from "react-bootstrap";

import "./Loading.scss";

export default () => {
  return (
    <div className="loading">
      <Spinner animation="border" role="status"></Spinner>
      <h5>Cargando....</h5>
    </div>
  );
};
