import './App.css';
import { BrowserRouter, Switch,Redirect, Route } from 'react-router-dom';
import Loginss from './Login';
import Main from './Main';


function App() {
  
  return (
    <>
    <BrowserRouter>
       <Switch>
         <Route
         exact
           path="/"
           render={()=><Redirect to="/Login"/>}
         />
         <Route
           path="/Login"
           component={Loginss}
         />
         <Route
           path="/Main"
           component={Main}
         />
       </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
