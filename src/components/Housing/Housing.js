import React, {useEffect, useState} from "react";
import "./Housing.scss"
import {InputNumber, InputSelect} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";
import number_of_document from "../../App"
import name_of_collection from "../../App"





export const Housing = () => {
    const [housing, setHousing] = useState("Hotel");
    const [numberOfNights, setNumberOfNights] = useState("0");
    const [housing_price, setHousing_price] = useState("0");

    const [prevState, setPrevState] = useState("0");



    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(name_of_collection).get()
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
            .collection(name_of_collection)
            .doc(number_of_document)
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
            <button  className={"totalPrice"}>Total Price: {housingSumPrice} </button>
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