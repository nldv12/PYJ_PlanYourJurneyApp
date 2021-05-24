import React, {useEffect, useState} from "react";
import "./SingleHousing.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {Link} from "react-router-dom";
// import {Link, useParams} from "react-router-dom";
import firebase, {db} from "../../firebase";


export const SingleHousingp = () => {
    // const {id} = useParams();
    const [typeOfHousing, settypeOfHousing] = useState("0");
    const [numberOfNights, setnumberOfNights] = useState("0");
    const [housingSumPrice, sethousingSumPrice] = useState("0");
    const [onePersonOneNight, setonePersonOneNight] = useState("0");



    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).get()
            const data = allData.docs.map(doc => doc.data())
            const typeOfHousing = data.map(total => total.typeOfHousing);
            settypeOfHousing(typeOfHousing)
            const numberOfNights = data.map(total => total.numberOfNights);
            setnumberOfNights(numberOfNights)
            const housingSumPrice = data.map(total => total.housingSumPrice);
            sethousingSumPrice(housingSumPrice)
            const onePersonOneNight = data.map(total => total.one_person_one_night_housing_price);
            setonePersonOneNight(onePersonOneNight)

        }
        fetchData()
    }, []);

    const handledelete = () => {
        firebase
            .firestore()
            .collection(`Journeys`)
            .doc("1")
            .delete({

            })
    }


    return (
        <>
            <button className={"totalPrice"}>Housing Price: {housingSumPrice}</button>
            <div className={"SingleHousing"}>
                <div className={"container"}>
                    <div className={"content"}>
                        <div>{typeOfHousing}</div>
                        <div>
                            <div className={"picto_person"}> </div>
                            <div>{onePersonOneNight}</div>
                        </div>
                        <div>
                            <div className={"picto_update"}> </div>
                            <div>Number of nights: {numberOfNights}</div>
                        </div>

                    </div>
                    <button onClick={handledelete} className={"picto_bin"}> </button>
                </div>
            </div>
        </>
    )
}