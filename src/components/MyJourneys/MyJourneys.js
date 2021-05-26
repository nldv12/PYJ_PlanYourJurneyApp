import React, {useEffect, useState} from "react";
import "./MyJourneys.scss"
import {Link} from "react-router-dom";
import {db} from "../../firebase";


export const MyJourneys = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection("Journeys")
                .orderBy("destination", "asc").get()
            const data = allData.docs.map(doc => doc.data())
            setData(data)
        }
        fetchData()
    }, []);

    return (
        <div className={"MyJourneys"}>
            <div className={"title"}>My Journeys</div>
            <div>
                {data.map(el => (
                    <Link key={el.id}  to={`/SelectedJourney/${el.id}`} className={"singleJourney"}>
                        <div className={"sum_Line second_line"}>From:  <span>{el.from}</span></div>
                        <div className={"sum_Line second_line"}>Destiation: <span>{el.destination}</span></div>
                        <div className={"sum_Line second_line"}>Price: <span>{el.totalTripPrice}</span></div>
                        <div className={"sum_Line third_line"}>Number of people: <span>{el.numberOfPeople}</span></div>
                        <div className={"sum_Line fourth_line"}>Type of transport: <span>{el.typeOFtransport}</span></div>
                        <div className={"sum_Line fifth_line"}>Number of nights: <span>{el.numberOfNights}</span></div>
                    </Link>
                ) )}
            </div>
        </div>
    )
}