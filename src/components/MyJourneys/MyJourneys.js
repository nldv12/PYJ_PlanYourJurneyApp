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
    const [data, setData] = useState();


    const [from, setfrom] = useState("");
    const [destination, setdestination] = useState("");
    const [numberOfPeople, setnumberOfPeople] = useState([]);
    const [typeOFtransport, settypeOFtransport] = useState([]);
    const [numberOfNights, setnumberOfNights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).get()
            const data = allData.docs.map(doc => doc.data())
            setData(data)
            //variables
            const from = data.map(total => total.from);
            setfrom(from)
            const destination = data.map(total => total.destination);
            setdestination(destination)
            const numberOfPeople = data.map(total => total.numberOfPeople);
            setnumberOfPeople(numberOfPeople)
            const typeOFtransport = data.map(total => total.typeOFtransport);
            settypeOFtransport(typeOFtransport)
            const numberOfNights = data.map(total => total.numberOfNights);
            setnumberOfNights(numberOfNights)

            const extra = data.map(total => total.extra);
            const housingSumPrice = data.map(total => total.housingSumPrice);
            const sumPrice = data.map(total => total.sumPrice);

            const totalTripPrice = parseFloat(extra) + parseFloat(housingSumPrice) + parseFloat(sumPrice)
            setPrice(totalTripPrice)
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