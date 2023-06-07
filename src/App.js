import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from "./componentes/Contacto";
import Nosotros from "./componentes/Nosotros";
import Inicio from "./componentes/Inicio";
import User from "./componentes/User";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5">
        <Link to='/' className="btn btn-dark">
        Inicio</Link>
        <Link to='/nosotros' className="btn btn-dark">
        Nosotros</Link>
        <Link to='/contacto' className="btn btn-dark">
        Contacto</Link>
        </div>
        <hr></hr>
        <Switch>
          <Route path='/nosotros/:id'>
          <User/>
          </Route>
          <Route path='/contacto'>
            <Contacto></Contacto>
          </Route>
          <Route path='/nosotros'>
            <Nosotros/>
          </Route>
          <Route path='/' exact>
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
