import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Erro from './pages/Erro'

import Header from './components/Header';


const Routes =()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/favorites" component={Favorites}/>
                <Route path="*" component={Erro}/>
            </Switch>
        
        
        </BrowserRouter>
    )
}


export default Routes;