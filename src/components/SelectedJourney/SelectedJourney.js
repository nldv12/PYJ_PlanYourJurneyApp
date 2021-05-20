import React from "react";
import "./SelectedJourney.scss"
import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";


export const SelectedJourney = () => {


    return (
        <div className={"SelectedJourney"}>


            <div className={"selected_container"}>
                <div className={"single_element destination"}>From: Gdańsk</div>
                <div className={"picto picto1"}> </div>
                <div className={"single_element destination"}>To: Amsterdam</div>
                <div className={"single_element destination"}>F5000zł</div>
                <div className={"single_element destination"}>Car</div>
                <div className={"single_element destination"}>4 person</div>
                <div className={"single_element destination"}>7 days</div>

            </div>


        </div>
    )
}