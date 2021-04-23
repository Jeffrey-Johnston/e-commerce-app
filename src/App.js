import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCardhandler = () => {
    setCartIsVisible(true);
  };

  const hideCardHandler = () => {
    return setCartIsVisible(false);
  };

  return (
    <Fragment>
      {cartIsVisible && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardhandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
