import React from "react";
import "./IfCar.scss"
import {InputNumber, InputCheckbox, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";


export const IfCar = () => {


    return (
        <div className={"IfCar"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>CAR</p>
                <div className={"formElement"}>
                    <FormLabel name={"Distance"}/>
                    <InputNumber placeholder={"How many km to the Destination"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Fuel consumption"}/>
                    <InputNumber placeholder={"average L/100km"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for housing"}/>
                    <InputNumber placeholder={"Price for 1 person per 1 night"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for food"}/>
                    <InputNumber placeholder={"Price for 1 person for 1 day"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Any extra fees"}/>
                    <InputNumber placeholder={"Type here sum of all extra fees"}/>
                </div>


                <Link to="/MainData" ><button className={"btn"}>Next</button></Link>
                <p>CAR</p>
            </div>

        </div>
    )
}