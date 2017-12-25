import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Roster from "./Roster";

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/roster' component={Roster}/>
                    {/*<Route path='/schedule' component={Schedule}/>*/}
                </Switch>
            </main>
        );
    }
}

export default Main;
