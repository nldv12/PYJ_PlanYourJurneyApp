import React, {useState} from "react";
import "./Menu.scss"
import {Link} from "react-router-dom";
import {NewJourney} from "../NewJourney/NewJourney";


// import {InputNumber, InputCheckbox, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
//
//


export const Menu = () => {
    const [burger, setBurger] = useState(true);

    const handleClick = () => {
        setBurger(!burger)
    }


    return (

        <>
            {/*<div className={"hamburger"}> </div>*/}
            <div className={"Menu"}>
                <div className={"container"}>
                    <div onClick={handleClick} className={"hamburger-menu"}>
                        <div className={burger ? "line" : "line line-1"}> </div>
                        <div className={burger ? "line" : "line line-2"}> </div>
                        <div className={burger ? "line" : "line line-3"}> </div>
                    </div>
                    <nav className={burger ? "hideNavbar" : "showNavbar"}>

                        <ul className={"nav-list"}>
                            <li className={"nav-item"}>
                                <Link onClick={handleClick} to="/" className={"nav-link"}>Home</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link onClick={handleClick} to="/NewJourney" className={"nav-link"}>Plan new Journey</Link>
                            </li>
                            <li className={"nav-item"}>
                                <Link onClick={handleClick} to="/MyJourneys" className={"nav-link"}>My Journeys</Link>
                            </li>
                            {/*<li className={"nav-item"}>*/}
                            {/*    <Link onClick={handleClick} to="/" className={"nav-link"}>About App</Link>*/}
                            {/*</li>*/}
                            {/*<li className={"nav-item"}>*/}
                            {/*    <Link onClick={handleClick} to="/" className={"nav-link"}>Contact developer</Link>*/}
                            {/*</li>*/}
                        </ul>

                    </nav>

                </div>

            </div>

        </>

    )
}