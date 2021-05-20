import React from "react";
import "./IfBus.scss"
import {InputNumber, InputCheckbox, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";


export const IfBus = () => {


    return (
        <div className={"IfBus"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>BUS</p>
                <div className={"formElement"}>
                    <FormLabel name={"Price for ticket"}/>
                    <InputNumber placeholder={"Price for single return ticket"}/>
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
                <p>BUS</p>
            </div>

        </div>
    )
}