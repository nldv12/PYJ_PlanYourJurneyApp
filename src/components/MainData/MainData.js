import React from "react";
import "./MainData.scss"
import {InputNumber, InputText, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";


export const MainData = () => {


    return (
        <div className={"MainData"}>

            <div className={"mainHeader"}>
                <div><span>Answer following questions</span></div>
                <div className={"hamburger"}> </div>
            </div>


            <div className={"form"}>
                <div className={"formElement"}>
                    <FormLabel name={"Destination"}/>
                    <InputText placeholder={"Name of the city"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Traveling from"}/>
                    <InputText placeholder={"Name of the city"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber placeholder={"Type only numbers :)"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"How many nights?"}/>
                    <InputNumber placeholder={"This is for cost of housing"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Type of housing"}/>
                    <InputSelect5 value1={"Hotel"}  value2={"Apartment"}  value3={"Hostel"}  value4={"Tent"}  value5={"Other"}/>
                </div>
                <div className={"buttons"}><button className={"btn"}>Next</button></div>
            </div>




        </div>

    )
}