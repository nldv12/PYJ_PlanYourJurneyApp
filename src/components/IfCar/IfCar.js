import React, {useState} from "react";
import "./IfCar.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
import firebase from "../../firebase";


export const IfCar = () => {
    const [distance, setDistance] = useState("");
    const [litres, setLitres] = useState("");
    const [pricePerLitre, setPricePerLitre] = useState("");
    const [housing_price, setHousing_price] = useState("");
    const [food_price, setFood_price] = useState("");
    const [extra_price, setExtra_price] = useState("");


    let pricePerkm = (parseFloat(litres) / 100) * parseFloat(pricePerLitre)
    let fuelPrice =  pricePerkm * parseFloat(distance)


    let carSumPrice = fuelPrice + parseFloat(housing_price) + parseFloat(food_price) + parseFloat(extra_price)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr2`)
            .add({
                distance: distance,
                litres: litres,
                pricePerLitre: pricePerLitre,
                fuelPrice: fuelPrice,
                housing_price: housing_price,
                food_price: food_price,
                extra_price: extra_price,
                SumPrice: carSumPrice,
                typeOFtransport: "car"
            })
            .then(() => {
                // setTicket_price("")
            })

        // console.log(`distance in km:  ${distance}`)
        // console.log(`l/100km:  ${litres}`)
        // console.log(`Price for 1 l:  ${pricePerLitre}`)
        // console.log(`Fuel Price:  ${fuelPrice}`)
        // console.log(`housing price:  ${housing_price}`)
        // console.log(`food price:  ${food_price}`)
        // console.log(`extra price:  ${extra_price}`)
        // console.log(`FULL:  ${carSumPrice}`)

    }


    return (
        <div className={"IfCar"}>
            <TotalPrice/>
            <div className={"form"}>
                <p>CAR</p>
                <div className={"formElement"}>
                    <FormLabel name={"Distance"}/>
                    <InputNumber handleText={setDistance} placeholder={"How many km to the Destination"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Fuel consumption"}/>
                    <InputNumber handleText={setLitres} placeholder={"average L/100km"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for 1L of fuel"}/>
                    <InputNumber handleText={setPricePerLitre} placeholder={"for example 4.50"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for housing"}/>
                    <InputNumber handleText={setHousing_price} placeholder={"Price for 1 person per 1 night"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Price for food"}/>
                    <InputNumber handleText={setFood_price} placeholder={"Price for 1 person for 1 day"}/>
                </div>
                <div className={"formElement"}>
                    <FormLabel name={"Any extra fees"}/>
                    <InputNumber handleText={setExtra_price} placeholder={"Type here sum of all extra fees"}/>
                </div>
                <Link to="/MainData">
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </Link>
                <p>CAR</p>
            </div>

        </div>
    )
}