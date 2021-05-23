import React, {useEffect, useState} from "react";
import "./IfCar.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const IfCar = () => {
    const [distance, setDistance] = useState("0");
    const [litres, setLitres] = useState("0");
    const [pricePerLitre, setPricePerLitre] = useState("0");
    const [numberOfPeople, setNumberOfPeople] = useState("0");
    const [food_price, setFood_price] = useState("0");

    const [prevState, setPrevState] = useState("0");

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Jr1`).get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);





    let pricePerkm = (parseFloat(litres) / 100) * parseFloat(pricePerLitre)
    let fuelPrice =  pricePerkm * parseFloat(distance)


    let carSumPrice = fuelPrice  + parseFloat(food_price) * parseFloat(numberOfPeople)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`Jr1`)
            .doc("1")
            .set({
                ...prevState,
                distance: distance,
                litres_per_hundred_km: litres,
                pricePerLitre: pricePerLitre,
                numberOfPeople: numberOfPeople,
                fuelPrice: fuelPrice,
                food_price: food_price,
                sumPrice: carSumPrice,
                typeOFtransport: "Car",
                ticket: 0,
                housingSumPrice: 0,
                extra: 0

            })
    }


    return (
        <div className={"IfCar"}>
            <TotalPrice value={carSumPrice} />
            <div className={"form"}>
                {/*<p>CAR</p>*/}
                <div className={"formElement"}>
                    <FormLabel name={"Distance"}/>
                    <InputNumber handleText={setDistance} placeholder={"Kilometers to destination "}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Fuel consumption"}/>
                    <InputNumber handleText={setLitres} placeholder={"average L/100km"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Fuel cost per 1L"}/>
                    <InputNumber handleText={setPricePerLitre} placeholder={"For example: 4.50"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Number of people"}/>
                    <InputNumber handleText={setNumberOfPeople} placeholder={"For example: 3"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Food price"}/>
                    <InputNumber handleText={setFood_price} placeholder={"Price for 1 person per 1 day"}/>
                </div>

                <Link to="/Housing">
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
                {/*<p>CAR</p>*/}
            </div>

        </div>
    )
}