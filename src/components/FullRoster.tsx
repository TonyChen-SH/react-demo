import * as React from 'react';
import PlayerAPI from "../api";
import {Link} from "react-router-dom";

class FullRoster extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        PlayerAPI.all().map(p => (
                            <li key={p.number}>
                                <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default FullRoster;
