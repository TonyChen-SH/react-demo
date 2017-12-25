import * as React from 'react';
import {Route, Switch} from "react-router";
import FullRoster from "./FullRoster";

class Roster extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/roster' component={FullRoster}/>
                {/*<Route path='/roster/:number' component={Player}/>*/}
            </Switch>
        );
    }
}

export default Roster;
