import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navigation = () => {
    const [ramdomColor, setramdomColor] = useState("")
    setTimeout(() => {
        const arr = ["#0E0A2A", "tomato", "#ec11e8", "#129a1f", "white"]
        const randomColorStyle = arr[Math.floor(Math.random() * arr.length)];
        setramdomColor(randomColorStyle)
    }, 3000);
    const navStyle = { textDecoration: 'none', color: ramdomColor}
    return (

        <div>
            <Navbar className="p-3 pb-3 " expand="lg">
                <Navbar.Brand><h3><Link className=" p-1"
                    style={{
                        boxShadow: "3px 3px 3px 3px  gray",
                        textDecoration: 'none',
                        backgroundColor:ramdomColor,
                        color: 'white',
                        borderRadius: "60px",
                        border: "3px solid gold"
                    }} to="/"> <FontAwesomeIcon style={{color:ramdomColor}} icon={faBaseballBall} />Team manager</Link></h3></Navbar.Brand>
                <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <Nav.Link><Link style={navStyle} to="/"><h5>Home</h5></Link></Nav.Link>
                        <Nav.Link><Link style={navStyle} to="/about"><h5>About</h5></Link></Nav.Link>
                        <Nav.Link><Link style={navStyle} to="/contact"><h5>Contact</h5></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </div>
    );
};

export default Navigation;