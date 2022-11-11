import React from "react";
import {DataContext} from "./context";


// --------- Task 1.1 ----------
//
// export default class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             albums: []
//         };
//     }
//
//     componentDidMount() {
//         fetch("https://jsonplaceholder.typicode.com/albums")
//             .then((res) => {
//                 return res.json()
//             })
//             .then((res) => {
//                 let data = [];
//
//                 res.map((res) => {
//                     data[data.length] = res
//                 });
//
//                 this.setState({albums: data});
//             })
//     }
//
//     render() {
//         const {albums} = this.state;
//         return <div>
//             {albums.map((album, index) => (
//                 <div key={album.id}>
//                     Id: {album.id} - Index: {index} - Title: {album.title}
//                 </div>
//             ))}
//         </div>
//     }
// }

// --------- Task 1.2 ----------

export default class App1 extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.state();
    }

    render() {
        return <div>
            <DataContext.Consumer>
                {({albums}) => {
                    return(
                        albums.map((album, index) => {
                            return <div key={album.id}>
                                Id: {album.id} - Index: {index} - Title: {album.title}
                            </div>
                        })
                    )
                }}
            </DataContext.Consumer>
        </div>
    }
}