import React  from "react";
import "./Attractions.scss"
import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";


export const Attractions = () => {


    return (
        <div className={"Attractions"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>ATTRACTIONS</p>
                <div className={"formElement"}>
                    <FormLabel name={"Type of activity"}/>
                    <InputSelect5 value1={"Excursion"}  value2={"Bungee Jumping"}  value3={"Waterpark"}  value4={"Museum"}  value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber placeholder={"How many people are attending"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for 1 person"}/>
                    <InputNumber placeholder={"Price for 1 person for 1 attend"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of attends"}/>
                    <InputNumber placeholder={"The number of repetitions"}/>
                </div>
                <div className={"buttons"}>
                    <button className={"btn"}>I am done</button>
                    <button className={"btn"}>Lets add one more activity!</button>
                </div>
                <p>ATTRACTIONS</p>
            </div>
        </div>
    )
}