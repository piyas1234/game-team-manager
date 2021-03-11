import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import API from './Axios/API';
import './css/TeamDetails.css';
import MalePic from '../Image/male.png'
import FemalePic from '../Image/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBaseballBall, faFlag, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const [team, setTeam] = useState([]);
    const [ramdomColor, setramdomColor] = useState("")
    const [ramdomColor2, setramdomColor2] = useState("")
    const id = useParams();

    const colorGenarator = (arr, setRendom) => {
        setTimeout(() => {
            const randomColorStyle = arr[Math.floor(Math.random() * arr.length)];
            setRendom(randomColorStyle)
        }, 3000);
    }
    const arr = ["#0E0A2A", "tomato", "#ec11e8", "#129a1f", "white"]
    const arr2 = ["rgba(255, 255, 255, 0.199)", " rgba(251, 255, 6, 0.199)", " rgba(6, 255, 39, 0.199)", " rgba(143, 6, 255, 0.062)", " rgba(255, 6, 110, 0.062)"]
    colorGenarator(arr, setramdomColor)
    colorGenarator(arr2, setramdomColor2)
    useEffect(() => {
        API.get(`lookupteam.php?id=${id.id}`)
            .then((res) => {
                setTeam(res.data.teams)
                console.log(res.data.teams)
            })

    }, [id])
    console.log(team)
    return (
        <div className="team-container text-white" >
            {team.map(item => {
                
                const { strTeamBadge, strTeam, strCountry, intFormedYear, strGender, strDescriptionEN, strYoutube, strFacebook, strTwitter } = item;
                return <>
                    <div className="imgBody">
                        <div className="imgBodybg" >
                            <div style={{ backgroundColor: ramdomColor2 }}>
                                <div className="logoBody m-auto">
                                    <img className="logo card-img" src={strTeamBadge} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-card">
                        <div style={{ backgroundColor: ramdomColor }} className="team-info row">
                            <div className="gx-3 col-md-6 text-center m-auto">
                                <h1>{strTeam}</h1>

                                <p><FontAwesomeIcon icon={faBaseballBall} />{" "}Founded {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag} />{" "}Country: {strCountry}</p>
                                <p><FontAwesomeIcon icon={faSpotify} />{" "}Sport Type: Football</p>
                                <p><FontAwesomeIcon icon={faUserFriends} />{" "}Gender: {strGender}</p>
                            </div>
                            <div className="gx-3 col-md-6 text-center">
                                <img className="w-75   card-img" src={strGender == "Female" ? FemalePic : MalePic} alt="" srcset="" />
                            </div>
                        </div>
                        <p>{strDescriptionEN}</p>
                        <div className="text-center">
                            <a href={'https://' + strYoutube}> <FontAwesomeIcon style={{ color: "red", backgroundColor: "white", borderRadius: "6px" }} size="3x" className="m-2" icon={faYoutube} /></a>
                            <a href={'https://' + strFacebook}><FontAwesomeIcon style={{ color: "#4C6DB0", backgroundColor: "white", borderRadius: "6px" }} size="3x" className="m-2" icon={faFacebook} /></a>
                            <a href={'https://' + strTwitter}><FontAwesomeIcon style={{ color: "#01AAED", backgroundColor: "white", borderRadius: "6px" }} size="3x" className="m-2" icon={faTwitter} /></a>
                        </div>
                    </div>

                </>
            })}

        </div>
    );
};

export default TeamDetails;
