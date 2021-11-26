import Home from './pages/Home'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import styled from "styled-components";
import {mobile, tablet} from "./responsive";

const FullScreen = styled.div`
  ${mobile({ 
    margin: "auto",
  })}
  ${tablet({
    margin: "auto",
  })}
`

const App = () => {
  return (
    <FullScreen>
      <Home/>
    </FullScreen>
  );
}

export default App;
