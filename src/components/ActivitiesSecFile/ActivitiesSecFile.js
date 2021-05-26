import React, {useEffect, useState} from "react";
import "./ActivitiesSecFile.scss"
import {InputNumber, TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useHistory, useParams} from "react-router-dom";
import {db} from "../../firebase";

export const ActivitiesSecFile = () => {
    const history = useHistory();
    const {id} = useParams();
    const [numberOfPeopleA, setNumberOfPeopleA] = useState("1");
    const [priceForOnePersonA, setPriceForOnePersonA] = useState("0");
    const [numberOfRepetitions, setNumberOfRepetitions] = useState("1");
    const [prevState, setPrevState] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).doc(id).collection(`Activities`).doc(localStorage.getItem("activity_id")).get().then((snapshot) => {
                return snapshot.data()
            })
            setPrevState(allData)
        }

        fetchData()


    }, []);

    let singleActivitySumPrice = parseFloat(priceForOnePersonA) * parseFloat(numberOfPeopleA) * parseFloat(numberOfRepetitions)


    const handleClick = (e) => {
        db.collection(`Journeys`).doc(id).collection(`Activities`)
            .doc(localStorage.getItem("activity_id"))
            .set({
                ...prevState,
                id: localStorage.getItem("activity_id"),
                singleActivitySumPrice: singleActivitySumPrice,
                numberOfPeopleA: numberOfPeopleA,
                priceForOnePersonA: priceForOnePersonA,
                numberOfRepetitions: numberOfRepetitions
            }).then (
            history.push(`/SingleActivities/${id}`)
        )
    }


        return (
            <div className={"Activities"}>

                <TotalPrice value={singleActivitySumPrice}/>

                <div className={"form"}>

                    <div className={"formElement"}>
                        <FormLabel name={"Number of people"}/>
                        <InputNumber handleText={setNumberOfPeopleA} placeholder={"How many people are attending"}/>
                    </div>
                    <div className={"formElement"}>
                        <FormLabel name={"Price for 1 person"}/>
                        <InputNumber handleText={setPriceForOnePersonA} placeholder={"For example: 250"}/>
                    </div>
                    <div className={"formElement"}>
                        <FormLabel name={"If more than one time:"}/>
                        <InputNumber handleText={setNumberOfRepetitions} placeholder={"Number of repetitions"}/>
                    </div>
                    <div className={"buttons"}>
                        <button onClick={handleClick} className={"btn"}>Submit</button>
                    </div>
                </div>
            </div>
        )











}