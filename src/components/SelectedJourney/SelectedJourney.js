import React, {useEffect, useState} from "react";
import "./SelectedJourney.scss"

import {Link, useParams} from "react-router-dom";
import {db} from "../../firebase";


export const SelectedJourney = () => {
    const {id} = useParams();
    const [doc, setDoc] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).doc(id).get().then((snapshot) => {
                return snapshot.data()
            })
            setDoc(allData)

        }
        fetchData()

    }, []);


    const handledelete = () => {
            db.collection(`Journeys`)
            .doc(id)
            .delete({
            })
    }
    const type = doc.typeOFtransport;
    const nights = doc.numberOfNights;
    const price = doc.totalTripPrice;
    return (


        <div className={"SelectedJourney"}>
            <div className={"selected_container"}>
                <div className={"single_element first"}>
                    <div className={"picto_money"}> </div>
                    <div className={"text price"}>{price}</div>
                </div>
                <div className={"single_element second"}>
                    <div className={type === "Car" ? "picto picto_car" : type === "Bus" ? "picto picto_bus" : "picto picto_plane"}> </div>
                    <div className={"picto_distance"}> </div>
                </div>
                <div className={"single_element third"}>
                    <div className={"from"}>{doc.from}</div>
                    <div> </div>
                    <div className={"destination"}>{doc.destination}</div>
                </div>
                <div className={"last_line"}>
                    <div className={"single_element"}>
                        <div className={" picto_person"}> </div>
                        <div className={"text person"}>{doc.numberOfPeople}</div>
                    </div>
                    <div className={"single_element"}>
                        <div className={" picto_day"}> </div>
                        <div className={"text days"}>{(nights>1)? nights + " nights" : nights + " night"}</div>
                    </div>
                </div>
            </div>
            <Link to="/AllJourneys" onClick={handledelete} className={"picto_bin"}> </Link>



            <Link to={`/SingleActivities/${doc.id}`} className={"btn btn_blue"}>Activities</Link>
            <Link to="/AllJourneys" className={"sec_btn"}>MY JOURNEYS</Link>

            {/*<Link to="/singleHousing/:id" className={"btn btn_blue"}>Check Accommodation</Link>*/}
        </div>


    )
}