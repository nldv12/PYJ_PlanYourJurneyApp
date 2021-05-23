import React, {useEffect, useState} from "react";
import "./MyJourneys.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";
// import {Link, useParams} from "react-router-dom";
import {db} from "../../firebase";


export const MyJourneys = () => {
    // const {id} = useParams();
    const [price, setPrice] = useState([]);
    const [numberOfPeople, setnumberOfPeople] = useState([]);
    const [numberOfNights, setnumberOfNights] = useState([]);
    const [typeOFtransport, settypeOFtransport] = useState([]);
    const [destination, setdestination] = useState("");
    const [from, setfrom] = useState("");
    const [singleActivitySumPrice, setsingleActivitySumPrice] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Jr1`).get()
            const data = allData.docs.map(doc => doc.data())
            //variables
            const destination = data.map(total => total.destination);
            const from = data.map(total => total.from);
            const numberOfNights = data.map(total => total.numberOfNights);
            const numberOfPeople = data.map(total => total.numberOfPeople);
            const typeOFtransport = data.map(total => total.typeOFtransport);
            const extraSumPrice = data.map(total => total.extraSumPrice);
            const singleActivitySumPrice = data.map(total => total.singleActivitySumPrice);

            const tripTotalPrice = parseFloat(extraSumPrice) + parseFloat(singleActivitySumPrice);
            setPrice(tripTotalPrice)
            setnumberOfPeople(numberOfPeople)
            setnumberOfNights(numberOfNights)
            settypeOFtransport(typeOFtransport)
            setdestination(destination)
            setfrom(from)
            setsingleActivitySumPrice(singleActivitySumPrice)
        }
        fetchData()

    }, []);


    return (
        <div className={"MyJourneys"}>
            <div className={"title"}>My Journeys</div>


            <Link to="/SelectedJourney/:id" className={"singleJourney"}>
                <div className={"sum_Line second_line"}>From: <span>{from}</span></div>
                <div className={"sum_Line second_line"}>Destiation: <span>{destination}</span></div>
                <div className={"sum_Line second_line"}>Price: <span>{price}</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>{numberOfPeople}</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>{typeOFtransport}</span></div>
                <div className={"sum_Line fifth_line"}>Number of nights: <span>{numberOfNights}</span></div>
            </Link>


        </div>
    )
}