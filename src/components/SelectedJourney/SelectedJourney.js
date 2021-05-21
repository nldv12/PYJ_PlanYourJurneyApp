import React, {useEffect, useState} from "react";
import "./SelectedJourney.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {Link, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {db} from "../../firebase";
// import firebase from "../../firebase";


export const SelectedJourney = () => {
    // const {id} = useParams();
    const [journeys, setJourneys] = useState([]);

    // useEffect(() => {
    //     firebase
    //         .firestore()
    //         .collection('jr1')
    //         .onSnapshot(snapshot => {
    //             const newJourney = snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 ...doc.data()
    //             }))
    //             setJourneys(newJourney)
    //         })
    // }, []);


    useEffect(() => {
        // console.log(id);

        db.collection(`journeys`)
            .get()
            .then((querySnapshot) => {
                const allJourneys = [];
                querySnapshot.forEach((doc) => {
                    allJourneys.push({
                        ...doc.data(),
                        id: doc.id,
                    })

                });

                setJourneys(allJourneys);
            });

    }, []);
    // {journeys.map((jr) => <div key={jr.id}>{jr.extra_price}</div>)}

    return (


        <div className={"SelectedJourney"}>
            <div className={"selected_container"}>
                <div className={"single_element"}>
                    <div className={"picto picto_money"}></div>
                    <div className={"text price"}>5000zł</div>
                </div>
                <div className={"picto picto_car"}></div>
                <div className={"single_element"}>
                    <div className={"text city"}>Gdańsk</div>

                    <div className={"picto picto_distance"}></div>
                    <div className={"text city"}>Amsterdam</div>
                    {journeys.map((jr) => <div key={jr.id}>{jr.extra_price}</div>)}
                </div>
                <div className={"last_line"}>
                    <div className={"single_element"}>
                        <div className={"picto picto_person"}></div>
                        <div className={"text person"}>4</div>
                    </div>
                    <div className={"single_element"}>
                        <div className={"picto picto_day"}></div>
                        <div className={"text days"}>7 days</div>
                    </div>
                </div>
            </div>
            <Link to="/singleAttractions" className={"btn btn_small"}>Check Attractions</Link>


        </div>


    )
}