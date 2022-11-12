import React from "react";
import {DataContext} from "./context";

const Loader = ({loading})=>{
    return loading ? (<span className='preloader'>Loading...</span>) : (<></>);
};

const Album = ({album, index}) => {
    return (
        <div className='text-area'>
           <b>Id:</b> {album.id} - <b>Index:</b> {index} - <b>Title:</b> {album.title}
        </div>
    )
};

const Albums = ({albums}) => {
    return (
        <>
            {albums.map((album, index) =>
                <Album key={album.id} album={album} index={index}/>
            )}
        </>
    )
};

export default class App2 extends React.Component {
    state = {
        albums: [],
        count: "",
        render: false,
        loading: true
    };

    dataRender = [];

    onSubmit = (e) => {
        e.preventDefault();
        //this.setState({loading: true});
        this.setState({render: true});
        // let timer = setTimeout(() => this.setState({loading: false}), 1000);
        // return () => {
        //     clearTimeout(timer);
        // };
    };

    changeValue = (e) => {
        this.setState({count: e.target.value});
        this.setState({render: false});
        let data = [];
        for (let i = 0; i < this.dataRender.length; i++) {
            if (i < e.target.value) {
                data[data.length] = this.dataRender[i];
                this.setState({albums: data})
            }
        }
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1000);
    }

    render() {
        return (
            <DataContext.Consumer>
                {({albums}) => {
                    this.dataRender = albums;
                    return (
                        <div className='container'>
                            <div className="head">
                                <form className='form' onSubmit={this.onSubmit}>
                                    <input
                                        type='number'
                                        placeholder='Number'
                                        name='number'
                                        min='0'
                                        max={albums.length}
                                        value={this.state.count}
                                        onChange={this.changeValue}
                                    />
                                    <button type='submit' disabled={!this.state.count} className='submit-btn'>Submit</button>
                                </form>
                            </div>
                            <div className='scroll'>
                                <Loader loading={this.state.loading}/>
                                {this.state.render && !this.state.loading ? (<Albums albums={this.state.albums}/>):(<></>)}
                            </div>
                        </div>
                    )
                }
                }
            </DataContext.Consumer>
        )
    }
}