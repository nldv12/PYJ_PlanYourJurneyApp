import React, {useState, useEffect} from "react";
import "./MainData.scss"
import {InputNumber, InputText, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";


export const MainData = () => {
    const [check, setCheck] = useState(false);


    const InputCheckbox = ({name}) => {
        const [checked, setChecked] = useState(false);

        const handleCheck = () => {
            setCheck((!checked))
            setChecked(!checked)
        }

        return (
            <div className={"myCheck"}>
                <input onChange={handleCheck} className={"InputCheckbox"} type="checkbox" name={name}/>
                <label htmlFor={name}>{name}</label>

                <div>

                </div>
            </div>

        )
    }

    return (
        <div className={"MainData"}>
            <div className={"title"}>Answer following questions</div>

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
                    <FormLabel name={"Type of housing"}/>
                    <InputSelect5 value1={"Hotel"} value2={"Apartment"} value3={"Hostel"} value4={"Tent"}
                                  value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber placeholder={"Type only numbers :)"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"How many nights?"}/>
                    <InputNumber placeholder={"This is for cost of housing"}/>
                </div>
                <div className={"formElement checkbox"}>
                    <InputCheckbox name={"I would like to add attractions"}/>
                </div>

                {/*<Link to={checked"/Attractions"} className={"buttons"}>*/}
                <Link to={check ? "/Attractions" : "/MyJourneys"} >
                    <button className={"btn"}>Next</button>
                </Link>
            </div>


        </div>

    )
}