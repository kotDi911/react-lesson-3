import React from "react";
import {DataContext} from "../../context/context";
import Albums from "./Albums";

export default class Task1_2 extends React.Component {

    render() {
        return(
            <div>
                <DataContext.Consumer>
                    {({albums}) => {
                        return <Albums albums={albums}/>
                    }}
                </DataContext.Consumer>
            </div>
        )
    }
}