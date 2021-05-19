import React  from "react";
import "./IfPlane.scss"
import {InputNumber, InputCheckbox, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";


export const IfPlane = () => {


    return (
        <div className={"IfPlane"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>PLANE</p>
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

                <div className={"formElement"}>
                    <InputCheckbox name={"I would like to add attractions"}/>
                </div>
                <div className={"buttons"}><button className={"btn"}>Next</button></div>
                <p>PLANE</p>
            </div>

        </div>
    )
}