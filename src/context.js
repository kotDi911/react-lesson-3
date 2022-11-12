import React, {useEffect} from "react";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
    const state = {
        albums: []
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(
                (result) => {
                    result.map((album) => state.albums[state.albums.length] = album)
                }
            );
    });

    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )
};
