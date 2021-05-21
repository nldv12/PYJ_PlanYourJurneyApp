import React, {useEffect, useState} from "react";
import "./MyJourneys.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link, useParams} from "react-router-dom";
import {db} from "../../firebase";


export const MyJourneys = () => {
    const {id} = useParams();
    const [newJourney, setNewJourney] = useState([]);
    const [numberOfPeople, setnumberOfPeople] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection('jr1').get()
            const data = allData.docs.map(doc => doc.data())
            //variables
            const numberOfPeople = data.map(total => total.numberOfPeople);
            const ticket = data.map(total => total.ticket);
            const extra = data.map(total => total.extra);
            const sumPrice = data.map(total => total.sumPrice);
            const housingSumPrice = data.map(total => total.housingSumPrice);
            const tripTotalPrice = parseFloat(extra) + parseFloat(sumPrice) + parseFloat(ticket) + parseFloat(housingSumPrice);
            setNewJourney(tripTotalPrice)
            setnumberOfPeople(numberOfPeople)
        }
        fetchData()

    }, []);


    return (
        <div className={"MyJourneys"}>
            <div className={"title"}>My Journeys</div>


            <Link to="/SelectedJourney/:id" className={"singleJourney"}>

                <div className={"sum_Line second_line"}>Price: <span>{newJourney}</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>{numberOfPeople}</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>Car</span></div>
                <div className={"sum_Line fifth_line"}>Number of days: <span>6</span></div>
            </Link>

        </div>
    )
}