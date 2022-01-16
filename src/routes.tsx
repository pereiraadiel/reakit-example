import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { ModalPage } from "./pages/ModalPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/modal" exact component={ModalPage}/>
      </Switch>
    </BrowserRouter>
  );
}