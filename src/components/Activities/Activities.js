import React, {useEffect, useState} from "react";
import "./Activities.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useParams} from "react-router-dom";
import firebase, {db} from "../../firebase";

export const Activities = () => {
    const {id} = useParams();
    const [typeOfActivity, setTypeOfActivity] = useState("Bungee Jumping");




    const handleClick = (e) => {
        db.collection(`Journeys`).doc(id).collection(`Activities`)
            .add({
                typeOfActivity: typeOfActivity,
                singleActivitySumPrice: 0
            })
            .then(
                (doc) => {localStorage.setItem("activity_id", doc.id)},
        setTypeOfActivity("Bungee Jumping")
                )
    }


    return (

        <div className={"Activities"}>

            {/*<TotalPrice value={singleActivitySumPrice}/>*/}

            <div className={"form"}>
                <div className={"formElement"}>
                    <FormLabel name={"Type of activity"}/>
                    <InputSelect handleText={setTypeOfActivity} value1={"Bungee Jumping"} value2={"Excursion"}
                                 value3={"Museum"} value4={"Waterpark"} value5={"Other"}/>
                </div>

                <div className={"buttons"}>
                    <Link to={`/ActivitiesSecFile/${id}`} onClick={handleClick} className={"btn"}>Next</Link>
                </div>
            </div>
        </div>
    )
}