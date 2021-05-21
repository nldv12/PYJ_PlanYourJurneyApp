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
            const allData = await db.collection('jr1').get()
            const data = allData.docs.map(doc => doc.data())
            setPrevState(...data)
        }
        fetchData()
    }, []);





    let pricePerkm = (parseFloat(litres) / 100) * parseFloat(pricePerLitre)
    let fuelPrice =  pricePerkm * parseFloat(distance)


    let carSumPrice = fuelPrice  + parseFloat(food_price) * parseFloat(numberOfPeople)
    console.log(`Cena za paliwo: ${fuelPrice}`)
    console.log(`Cena paliwo + Jedzenie: ${carSumPrice}`)

    const handleClick = (e) => {
        firebase
            .firestore()
            .collection(`jr1`)
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
                typeOFtransport: "car",
                ticket: 0,
                housingSumPrice: 0,
                extra: 0

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
            <button  className={"totalPrice"}>Total Price: {carSumPrice} </button>
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
                <p>CAR</p>
            </div>

        </div>
    )
}