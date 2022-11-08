import React, {useState, useEffect, useContext} from "react";

export const Data = React.createContext();

export const DataProvider = (props) => {
    let state = {
        data: []
    };
    return <Data.Provider value={state}>
        {props.children}
    </Data.Provider>
};

export const App = () => {
    const {data} = useContext(Data);
    const [number, setNumber] = useState('');
    const [render, setRender] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                res.map((res) => {
                    data[data.length] = res
                })
            })
    }, [data]);

    setTimeout(()=>{
        if (document.querySelector('.preloader') && data.length > 0) {
            document.querySelector('.preloader').remove();
        }
    }, 1000);

    const update = (number) => {
        setRender([]);
        let dataRender = [];
        for (let i = 0; i < data.length; i++) {
            if (i < data.indexOf(data[number])) {
                dataRender[dataRender.length] = data[i];
            }
        }
        setRender(dataRender);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        update(e.target.number.value);
        setNumber('')
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
                    max={data.length}
                    value={number}
                    onChange={changeValue}
                />
                <button type='submit' disabled={!data.length} className='submit-btn'>Submit</button>
            </form>
        </div>
        <div className='scroll'>
            <span className='preloader'>Loading...</span>
            {render.map((album) =>
                (<div key={album.id} className='text-area'>
                    <b>ID:</b> {album.id} - <b>Index:</b> {render.indexOf(album)} <br/> <b>Title:</b> {album.title}
                </div>)
            )}
        </div>
    </div>)
};