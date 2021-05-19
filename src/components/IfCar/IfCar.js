import React from "react";
import "./IfCar.scss"
import {InputNumber, InputCheckbox, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";


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

                <div className={"formElement checkbox"}>
                    <InputCheckbox name={"I would like to add attractions"}/>
                </div>
                <div className={"buttons"}><button className={"btn"}>Next</button></div>
                <p>CAR</p>
            </div>

        </div>
    )
}