import React, {useEffect, useState} from "react";
import "./Activities.scss"
import {InputNumber, InputSelect, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useHistory, useParams} from "react-router-dom";
import firebase, {db} from "../../firebase";

export const Activities = () => {
    const history = useHistory();
    const {id} = useParams();
    const [typeOfActivity, setTypeOfActivity] = useState("Bungee Jumping");


    const handleClick = (e) => {
        db.collection(`Journeys`).doc(id).collection(`Activities`)
            .add({
                typeOfActivity: typeOfActivity
            })
            .then(
                (doc) => {
                    localStorage.setItem("activity_id", doc.id)
                    history.push(`/ActivitiesSecFile/${id}`);
                },
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
                    <button onClick={handleClick} className={"btn"}>Next</button>
                </div>
            </div>
        </div>
    )
}