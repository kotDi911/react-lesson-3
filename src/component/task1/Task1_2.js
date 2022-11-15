import React from "react";
import {DataContext} from "../../context/context";

const Album = ({album, index})=>{
    return (
        <div>
            Id: {album.id} - Index: {index} - Title: {album.title}
        </div>
    )
};

const Albums = ({albums})=>{
    return(
        <>
            {albums.map((album, index) =>
                <Album key={album.id} album={album} index={index}/>
            )}
        </>
    )
};

export default class Task1_2 extends React.Component {

    render() {
        return(
            <div>
                <DataContext.Consumer>
                    {({albums}) => {
                        return(
                            <Albums albums={albums}/>
                        )
                    }}
                </DataContext.Consumer>
            </div>
        )
    }
}