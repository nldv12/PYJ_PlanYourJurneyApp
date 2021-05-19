import React from "react";
import "./MainPage.scss"

export const MainPage = () => {


    return (
        <div className={"mainPage"}>
            <div className={"title"}>Choose your travel style</div>

            <div className={"mainAllBoxes"}>
                <div className={"mainRowBoxes"}>
                    <div className={" mainPlane mainBoxImage"}> </div>
                    <div className="mainBoxText">Plane</div>
                </div>
                <div className={"mainRowBoxes"}>
                    <div className="mainBoxText">Car</div>
                    <div className={"mainCar mainBoxImage"}> </div>
                </div>
                <div className={"mainRowBoxes"}>
                    <div className={"mainBus mainBoxImage"}> </div>
                    <div className=" mainBoxText">Bus</div>
                </div>
            </div>
        </div>

    )
}