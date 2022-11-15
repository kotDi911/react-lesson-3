import React from "react";
import Album from "./Album";


const Albums = ({albums}) => {
    return (
        <>
            {albums.map((album, index) =>
                <Album key={album.id} album={album} index={index}/>
            )}
        </>
    )
};

export default Albums