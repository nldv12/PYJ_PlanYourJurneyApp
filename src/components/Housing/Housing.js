import React, {useEffect, useState} from "react";
import "./Housing.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";

// TODO: zrób :co jeśli wynajem apartamentu:



export const Housing = () => {
    const [housing, setHousing] = useState("Hotel");
    const [numberOfNights, setNumberOfNights] = useState("0");
    const [housing_price, setHousing_price] = useState("0");

    const [prevState, setPrevState] = useState("0");



    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Jr1`).get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);

    let housingSumPrice = parseFloat(numberOfNights) * parseFloat(housing_price) * parseFloat(prevState.numberOfPeople) + parseFloat(prevState.sumPrice)

    // console.log(`Cena za całe nocowanie dla wszystkich: ${housingSumPrice}`)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Jr1`)
            .doc("1")
            .set({
                ...prevState,
                typeOfHousing: housing,
                numberOfNights: numberOfNights,
                housingSumPrice: housingSumPrice,
                one_person_one_night_housing_price: housing_price,
            })
            .then(() => {
                // setTicket_price("")
            })

    }

    return (
        <div className={"Housing"}>
            <TotalPrice value={housingSumPrice} />
            <div className={"form"}>
                <p>Housing</p>
                <div className={"formElement"}>
                    <FormLabel name={"Type of accommodation"}/>
                    <InputSelect handleText={setHousing} value1={"Apartment"} value2={"Hotel"} value3={"Hostel"} value4={"Camping"}
                                 value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of nights?"}/>
                    <InputNumber handleText={setNumberOfNights} placeholder={"For example: 4"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price of accommodation"}/>
                    <InputNumber handleText={setHousing_price} placeholder={"Price for 1 person per 1 night"}/>
                </div>
                <Link to="/MainData">
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
                <p>Housing</p>
            </div>

        </div>
    )
}