import React, {Component} from "react";
import Loader from "./Loader";
import Albums from "./Albums";

class AlbumsRender extends Component {
    state = {
        albums: [],
        count: "",
        render: false,
        loading: true
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            render: true,
            albums: this.props.albums.slice(0, Number(this.state.count))
        });
    };

    changeValue = (e) =>  this.setState({count: e.target.value, render: false});

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 1000);
    }

    render() {
        return (
            <div className='container'>
                <div className="head">
                    <form className='form' onSubmit={this.onSubmit}>
                        <input
                            type='number'
                            placeholder='Number'
                            name='number'
                            min='0'
                            max={this.props.albums.length}
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

export default AlbumsRender