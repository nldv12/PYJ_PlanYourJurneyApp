import React, {useEffect, useState} from "react";
import "./Housing.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const Housing = () => {
    const [housing, setHousing] = useState("Apartment");
    const [numberOfNights, setNumberOfNights] = useState("0");
    const [housing_price, setHousing_price] = useState("0");

    const [prevState, setPrevState] = useState("0");
    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).doc(localStorage.getItem("journey_id")).get().then((snapshot) => {
                return snapshot.data()
            })
            setPrevState(allData)
        }
        fetchData()
    }, []);

    function timedRefresh() {
        setTimeout("location.reload(true);",500);
    }

    if (prevState===undefined) {
        timedRefresh()
    }

    let housingSumPrice = (prevState===undefined)? 0 : parseFloat(numberOfNights) * parseFloat(housing_price) * parseFloat(prevState.numberOfPeople)
    let totalTripPrice = (prevState===undefined)? 0 : parseFloat(prevState.sumPrice) + housingSumPrice



    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Journeys`)
            .doc(localStorage.getItem("journey_id"))
            .set({
                ...prevState,
                id: localStorage.getItem("journey_id"),
                totalTripPrice: totalTripPrice,
                typeOfHousing: housing,
                numberOfNights: numberOfNights,
                housingSumPrice: housingSumPrice,
                one_person_one_night_housing_price: housing_price,
            })
    }

    return (
        <div className={"Housing"}>
            <TotalPrice value={totalTripPrice} />
            <div className={"form"}>
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
            </div>

        </div>
    )
}