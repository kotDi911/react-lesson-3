import React, {useState, useEffect, useContext} from "react";
import {DataContext} from "./context";

const Card = ({render}) => {
    return (
        <>
            {render.map((album) => {
                    return (<div key={album.id} className='text-area'>
                        <b>ID:</b> {album.id} - <b>Index:</b> {render.indexOf(album)} <br/> <b>Title:</b> {album.title}
                    </div>)
                }
            )}
        </>
    )
};

const Loader = ({loading})=>{
    return loading ? (<span className='preloader'>Loading...</span>) : (<></>);
};

export const Task2 = () => {
    const {albums} = useContext(DataContext);
    const [number, setNumber] = useState('');
    const [render, setRender] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setLoading(false), 1000);
        return () => {
            clearTimeout(timer);
        };
    });



    const update = (number) => {
        setRender([]);
        let dataRender = [];
        for (let i = 0; i < albums.length; i++) {
            if (i < number) {
                dataRender[dataRender.length] = albums[i];
            }
        }
        setRender(dataRender);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        update(e.target.number.value);
        //setNumber('')
    };

    const changeValue = (e) => {
        setNumber(e.target.value)
    };

    return (<div className='container'>
        <div className="head">
            <form className='form' onSubmit={onSubmit}>
                <input
                    type='number'
                    placeholder='Number'
                    name='number'
                    min='0'
                    max={albums.length}
                    value={number}
                    onChange={changeValue}
                />
                <button type='submit' disabled={!number} className='submit-btn'>Submit</button>
            </form>
        </div>
        <div className='scroll'>
            <Loader loading={loading}/>
            <Card render={render}/>
        </div>
    </div>)
};
