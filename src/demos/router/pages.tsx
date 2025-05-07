import { Link } from "react-router-dom";

export const HomePage = () => (
  <div style={{height: 500, background: 'red', position: 'absolute'}}>
    <h1>Home Page</h1>
    <Link to="/detail">从左向右</Link>
  </div>
);

export const DetailPage = () => (
  <div style={{height: 500, background: 'green', position: 'absolute'}}>
    <h1>Detail Page</h1>
    <Link to="/">从右向左</Link>
  </div>
);