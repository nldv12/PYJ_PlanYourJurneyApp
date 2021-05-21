import React, {useEffect, useState} from "react";

// import {firebase} from "./../../firebase"
import "./IfBus.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const IfBus = () => {
    const [ticket_price, setTicket_price] = useState("0");
    const [numberOfPeople, setNumberOfPeople] = useState("0");
    const [food_price, setFood_price] = useState("0");
    const [prevState, setPrevState] = useState("0");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection('jr1').get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);

    let busSumPrice = (parseFloat(ticket_price) + parseFloat(food_price)) * parseFloat(numberOfPeople)
    console.log(`Cena całkowita: ${busSumPrice}`)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr1`)
            .doc("1")
            .set({
                ...prevState,
                ticket: ticket_price,
                numberOfPeople: numberOfPeople,
                food: food_price,
                sumPrice: busSumPrice,
                housingSumPrice: 0,
                extra: 0,
                typeOFtransport: "bus"

            })


    }

    return (
        <div className={"IfBus"}>
            <button  className={"totalPrice"}>Total Price: {busSumPrice} </button>
            <div className={"form"}>
                <p>BUS</p>
                <div className={"formElement"}>
                    <FormLabel name={"Price for ticket"}/>
                    <InputNumber handleText={setTicket_price} placeholder={"Price for single return ticket"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber handleText={setNumberOfPeople} placeholder={"Type only numbers :)"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for food"}/>
                    <InputNumber handleText={setFood_price} placeholder={"Price for 1 person for 1 day"}/>
                </div>
                <Link to="/Housing">
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
                <p>BUS</p>
            </div>

        </div>
    )
}