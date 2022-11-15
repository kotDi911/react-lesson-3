import React from "react";
import {DataContext} from "../../context/context";
import AlbumsRender from "./AlbumsRender";

export default class Task1_2e extends React.Component {
    render() {
        return (
            <DataContext.Consumer>
                {({albums}) => {
                    return <AlbumsRender albums={albums}/>
                }
                }
            </DataContext.Consumer>
        )
    }
}