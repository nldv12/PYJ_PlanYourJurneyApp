import React from "react";
import "./SelectedJourney.scss"
import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";


export const SelectedJourney = () => {


    return (

            <div className={"SelectedJourney"}>

                <div className={"selected_container"}>
                    <div className={"single_element"}>
                        <div className={"picto picto_money"}> </div>
                        <div className={"text price"}>5000zł</div>
                    </div>
                    <div className={"picto picto_car"}> </div>
                    <div className={"single_element"}>
                        <div className={"text city"}>Gdańsk</div>
                        <div className={"picto picto_distance"}> </div>
                        <div className={"text city"}>Amsterdam</div>
                    </div>
                    <div className={"last_line"}>
                        <div className={"single_element"}>
                            <div className={"picto picto_person"}> </div>
                            <div className={"text person"}>4</div>
                        </div>
                        <div className={"single_element"}>
                            <div className={"picto picto_day"}> </div>
                            <div className={"text days"}>7 days</div>
                        </div>
                    </div>
                </div>
                <Link to="/singleAttractions" className={"btn btn_small"}>Check Attractions</Link>

            </div>


    )
}