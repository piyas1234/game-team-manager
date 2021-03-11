import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBowlingBall } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const { strTeamBadge, strTeam, idTeam } = props.item;
    return (
        <>
            <div style={{ fontFamily: "Arial" }} className="gx-1 col-md-6 col-lg-4 text-center">
                <div style={{ boxShadow: "3px 3px 3px 3px gray" }} className="card p-3 mt-4">
                    <div className="text-center">
                        <img className="card-img w-50 m-1" src={strTeamBadge} alt="" srcset="" />
                    </div>
                    <h4 className="m-2">{strTeam}</h4>
                    <div className="d-flex m-auto">
                        <FontAwesomeIcon className="text-warning m-1" icon={faBowlingBall} />
                        <FontAwesomeIcon className="text-warning m-1" icon={faBowlingBall} />
                        <FontAwesomeIcon className="text-warning m-1" icon={faBowlingBall} />
                        <FontAwesomeIcon className="text-warning m-1" icon={faBowlingBall} />
                    </div>
                    <h6 className="m-2">Sport Type : Football</h6>
                    <Link style={{ backgroundColor: "#3A42FF", color: "white" }} className="btn w-50  m-auto" to={`/teamdetails/${idTeam}`}>Explore{" "}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Team;