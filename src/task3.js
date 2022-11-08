import React from "react";

export default class Box extends React.Component{
    boxRef = React.createRef();
    componentDidMount() {
        setTimeout(()=>{
        this.boxRef.current.style = 'left: 200px'
        }, 2000)
    }

    render() {
        return <div>
            <div className='box' ref={this.boxRef}>

            </div>
        </div>
    }
};
