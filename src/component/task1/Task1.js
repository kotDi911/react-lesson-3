import React from "react";
import Albums from "./Albums";

export default class Task1 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            albums: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                let data = [];

                res.map((res) => {
                    data[data.length] = res
                });

                this.setState({albums: data});
            })
    }

    render() {
        const {albums} = this.state;
        return <div>
            <Albums albums={albums}/>
        </div>
    }
}