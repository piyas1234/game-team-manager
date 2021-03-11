import React, { useEffect, useState } from 'react';
import API from './Axios/API'
import Banner from '../Image/home.png'
import Team from './SmallComponents/Team'
const Home = () => {
    const [data, setData] = useState([])
    const [items, setItems] = useState(0)
    const onClickHandalerpre = (event) => {
        items > 0 && setItems(items - 12)
    }
    const onClickHandalernext = () => {
        setItems(items + 12)
    }


    useEffect(() => {
        API.get(`search_all_teams.php?l=English%20Premier%20League`)
            .then(res => {
                setData(res.data.teams)
            })

    }, [])
    const players = data.slice(items, items + 12)
    console.log(players)
    return (
        <div className=" text-center">
            <img className="card-img" width="100%" src={Banner} alt="" srcset="" />
            <div style={{ backgroundColor: "#0E0A2A" }}>
                <div className="row w-75 m-auto">
                    {players && players.map(item => <Team item={item}></Team>)}
                </div>
            </div>
            <div className=" row m-4">
                <div className="gx-3 col-4"><button name="privius" onClick={(event) => { onClickHandalerpre(event) }} className="btn-sm btn-primary gx-5 mr-5" type="submit">Privious</button>
                </div>
                <div className="gx-3 col-4">
                    <button className="btn btn-danger gx-5" type="submit">total page:{Math.round(data.length / 12)}</button>

                </div>
                <div className="gx-3 col-4">
                    <button onClick={(event) => { onClickHandalernext(event) }} className="btn-sm btn-warning gx-3 ml-5" type="submit">Next</button>

                </div>
            </div>
        </div>
    );
};

export default Home;