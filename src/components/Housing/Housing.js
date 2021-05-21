import React, {useEffect, useState} from "react";
import "./Housing.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";





export const Housing = () => {
    const [housing, setHousing] = useState("Hotel");
    const [numberOfNights, setNumberOfNights] = useState("0");
    const [housing_price, setHousing_price] = useState("0");

    const [prevState, setPrevState] = useState("0");



    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection('jr1').get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);

    let housingSumPrice = parseFloat(numberOfNights) * parseFloat(housing_price) * parseFloat(prevState.numberOfPeople)

    // console.log(`Cena za całe nocowanie dla wszystkich: ${housingSumPrice}`)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr1`)
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
            <TotalPrice/>
            <div className={"form"}>
                <p>Housing</p>
                <div className={"formElement"}>
                    <FormLabel name={"Type of housing"}/>
                    <InputSelect handleText={setHousing} value1={"Hotel"} value2={"Apartment"} value3={"Hostel"} value4={"Tent"}
                                 value5={"Other"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"How many nights?"}/>
                    <InputNumber handleText={setNumberOfNights} placeholder={"This is for cost of housing"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for housing"}/>
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