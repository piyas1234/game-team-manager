import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Navigation = () => {
    return (
        <div>
        <Navbar className="p-3 pb-3 "  expand="lg">
            <Navbar.Brand><h3><Link className="bg-primary text-white p-1" style={{boxShadow:"3px 3px 3px 3px  gray",textDecoration:'none',borderRadius:"60px",border:"3px solid gold"}}  to="/"> <FontAwesomeIcon className="text-warning" icon={faBaseballBall} />Team Tracker</Link></h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link><Link style={{textDecoration:'none',color:"white"}} to="/"><h5>Home</h5></Link></Nav.Link>
                    <Nav.Link><Link style={{textDecoration:'none',color:"white"}} to="/about"><h5>About</h5></Link></Nav.Link>
                    <Nav.Link><Link style={{textDecoration:'none',color:"white"}} to="/contact"><h5>Contact</h5></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <hr/>
    </div>
    );
};

export default Navigation;