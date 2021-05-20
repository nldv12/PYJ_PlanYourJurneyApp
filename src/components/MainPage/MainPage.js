import React from "react";
import "./MainPage.scss"
import {Link} from "react-router-dom";

export const MainPage = () => {


    return (
        <div className={"mainPage"}>
            <div className={"title"}>Choose your travel style</div>

            <div className={"mainAllBoxes"}>
                <Link to="/Plane" className={"mainRowBoxes"}>
                    <div className={" mainPlane mainBoxImage"}> </div>
                    <div className="mainBoxText">Plane</div>
                </Link>
                <Link to="/Car" className={"mainRowBoxes"}>
                    <div className="mainBoxText">Car</div>
                    <div className={"mainCar mainBoxImage"}> </div>
                </Link>
                <Link to="/Bus" className={"mainRowBoxes"}>
                    <div className={"mainBus mainBoxImage"}> </div>
                    <div className=" mainBoxText">Bus</div>
                </Link>
            </div>
        </div>

    )
}