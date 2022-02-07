import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import '../styles/Navbar.css';
import { keySelected } from '../redux/actions/moviesAction';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [openLinks, setOpenLinks] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(searchTerm);
        dispatch(keySelected(searchTerm));

        history.push('/movies');
    }


    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (

        <div className="navbar">
            <div>
            <input placeholder='search...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

               <button type='submit' onClick={handleSubmit}> Search</button>
                </div>

            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src='' />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/">Menu</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact Us</Link>


                </div>
            </div>

            <div className="rightSide">

                <Link to="/">Home</Link>
                <Link to="/">Menu</Link>
                <Link to="/">About</Link>

                <Link to="/">Contact Us</Link>


                <button onClick={toggleNavbar}>
                    on</button>
            </div>
        </div >
    );
}

export default Navbar;

