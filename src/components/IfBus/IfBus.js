import React, {useEffect, useState} from "react";

// import {firebase} from "./../../firebase"
import "./IfBus.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useHistory} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const IfBus = () => {
    const history = useHistory();
    const [ticket_price, setTicket_price] = useState("0");
    const [numberOfPeople, setNumberOfPeople] = useState("0");
    const [food_price, setFood_price] = useState("0");


    let busSumPrice = (parseFloat(ticket_price) + parseFloat(food_price)) * parseFloat(numberOfPeople)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Journeys`)
            .add({
                totalTripPrice: busSumPrice,
                ticket: ticket_price,
                numberOfPeople: numberOfPeople,
                food: food_price,
                sumPrice: busSumPrice,
                housingSumPrice: 0,
                extra: 0,
                typeOFtransport: "Bus"
            }).then((doc) => {
            localStorage.setItem("journey_id", doc.id)
            history.push("/Housing");
        })


    }

    return (
        <div className={"IfBus"}>
            <TotalPrice value={busSumPrice} />
            <div className={"form"}>
                <div className={"formElement"}>
                    <FormLabel name={"Ticket Price"}/>
                    <InputNumber handleText={setTicket_price} placeholder={"Price of one return ticket"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber handleText={setNumberOfPeople} placeholder={"For example: 3"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Food price"}/>
                    <InputNumber handleText={setFood_price} placeholder={"Price for 1 person per 1 day"}/>
                </div>
                {/*<Link to="/Housing">*/}
                    <button onClick={handleClick} className={"btn"}>Next</button>
                {/*</Link>*/}
            </div>

        </div>
    )
}