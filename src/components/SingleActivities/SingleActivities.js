import React, {useEffect, useState} from "react";
import "./SingleActivities.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
// import {Link, useParams} from "react-router-dom";
import {db} from "../../firebase";


export const SingleActivities = () => {
    const [singleActivitySumPrice, setsingleActivitySumPrice] = useState("0");
    const [typeOfActivity, settypeOfActivity] = useState("0");
    const [numberOfPeopleA, setnumberOfPeopleA] = useState("0");
    const [numberOfRepetitions, setnumberOfRepetitions] = useState("0");



    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Jr1`).get()
            const data = allData.docs.map(doc => doc.data())
            const singleActivitySumPrice = data.map(total => total.singleActivitySumPrice);
            setsingleActivitySumPrice(singleActivitySumPrice)
            const typeOfActivity = data.map(total => total.typeOfActivity);
            settypeOfActivity(typeOfActivity)
            const numberOfPeopleA = data.map(total => total.numberOfPeopleA);
            setnumberOfPeopleA(numberOfPeopleA)
            const numberOfRepetitions = data.map(total => total.numberOfRepetitions);
            setnumberOfRepetitions(numberOfRepetitions)

        }
        fetchData()
    }, []);




    return (
        <>
            <button className={"totalPrice"}>Activities Price: {singleActivitySumPrice}</button>
            <div className={"SingleActivities"}>
                <div className={"container"}>
                    <div className={"content"}>
                        <div>{typeOfActivity}</div>
                        <div>
                            <div className={"picto_person"}> </div>
                            <div>{numberOfPeopleA}</div>
                        </div>
                        <div>
                            <div className={"picto_update"}> </div>
                            <div>{numberOfRepetitions}</div>
                        </div>

                    </div>
                    <div className={"picto_bin"}> </div>
                </div>

                <Link to="/SingleActivities/:id" className={"btn btn_blue"}>Check Activities</Link>
                <Link to="/singleHousing/:id" className={"btn btn_blue"}>Check Accommodation</Link>


            </div>

        </>

    )
}