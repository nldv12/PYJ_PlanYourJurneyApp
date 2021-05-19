import React, {useState} from "react";
import "./Menu.scss"

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
                                <a href="#" className={"nav-link"}>Plan new Journey</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#" className={"nav-link"}>My Journeys</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#" className={"nav-link"}>About App</a>
                            </li>
                            <li className={"nav-item"}>
                                <a href="#" className={"nav-link"}>Contact developer</a>
                            </li>
                        </ul>

                    </nav>

                </div>

            </div>

        </>

    )
}