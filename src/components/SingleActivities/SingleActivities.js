import React, {useEffect, useState} from "react";
import "./SingleActivities.scss"
// import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
// import {Link} from "react-router-dom";
// import {Link, useParams} from "react-router-dom";
import firebase, {db} from "../../firebase";
import {Link, useParams} from "react-router-dom";



export const SingleActivities = () => {
    const {id} = useParams();

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const allData = await db.collection(`Journeys`).doc(id).collection(`Activities`).get()
            const data = allData.docs.map(doc => ({...doc.data(), id: doc.id}))
            setData(data)
        }
        fetchData()
    }, []);



    const allPrices = data.map(el => el.singleActivitySumPrice)
    const totalActivPrice = allPrices.reduce((a, b) => a + b, 0)

    const handleDeleteActivity = (elid) => {
        db.collection(`Journeys`).doc(id).collection(`Activities`)
            .doc(elid)
            .delete()
            .then(() => {
                const activTemp = data.filter((doc) => doc.id !== elid);
                setData(activTemp);
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    };




    return (
        <>
            <div className={"SingleActivities"}>
                <Link to={`/Activities/${id}`} className={"add_new"}>Add activity </Link>
                <Link to={`/SelectedJourney/${id}`} className={"back_arrow"}></Link>
                <button className={"totalPrice"}>Activities Price: {totalActivPrice}</button>


                {data.map(el => (
                        <div key={el.id} className={"container"}>
                            <div>
                                <div className={"content"}>
                                    <div>{el.typeOfActivity}</div>
                                    <div>
                                        <div className={"picto_person"}> </div>
                                        <div>{el.numberOfPeopleA}</div>
                                    </div>
                                    <div>
                                        <div className={"picto_update"}> </div>
                                        <div>{el.numberOfRepetitions}</div>
                                    </div>
                                </div>
                                <div className={"atr_price"}>{el.typeOfActivity} price: {el.singleActivitySumPrice}</div>
                            </div>
                            <button onClick={() => handleDeleteActivity(el.id)} className={"picto_bin"}> </button>
                        </div>
                ))}
            </div>

        </>
    )
}

