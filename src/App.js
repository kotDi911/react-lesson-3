// import React, from "react";

// export default class App extends React.Component {
//
//     onSubmit = (event) => {
//         event.preventDefault();
//         event.target.reset();
//     };
//
//     changeValue = (event) => {
//
//     };
//
//     render() {
//         return (<div className='scroll'>
//             <form onSubmit={this.onSubmit}>
//                 <input
//                     type='number'
//                     placeholder='Number'
//                     //value={this.state.name}
//                     onChange={this.changeValue}
//                 />
//                 <button type='submit'>Submit</button>
//             </form>
//             <DataContext.Consumer>
//                 {({albums}) => {
//                     setTimeout(() => {
//                         console.dir(albums)
//                         return(<div>
//                             {albums.map((album) => (
//                                 <div key={album.id}>
//                                     {album.id} - {albums.indexOf(album)} - {album.title}
//                                 </div>
//                             ))}
//                         </div>)
//
//                     }, 1000)
//                 }}
//             </DataContext.Consumer>
//         </div>)
//     }
// }