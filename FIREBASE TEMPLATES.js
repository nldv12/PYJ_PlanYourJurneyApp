// //TODO: DOWNLOAD DATA
// import React, {useEffect, useState} from "react";
// import {db} from "./src/firebase";
//
// export const TotalPrice = ({name}) => {
//     const [totalPrice, setTotalPrice] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const allData = await db.collection('jr1').get()
//             const data = allData.docs.map(doc => doc.data())
//             const newTotal = data.map(total => total.distance)
//
//
//
//             setTotalPrice(newTotal)
//
//         }
//         fetchData()
//
//         // db.collection('jr1')
//         // .onSnapshot(snapshot => {
//         //     const newPrice = snapshot.docs.map((doc) =>({
//         //         id: doc.id,
//         //         ...doc.data()
//         //     }))
//         //
//         //     // let newTotal = parseFloat(newPrice[2].housingSumPrice) * parseFloat(newPrice[0].numberOfPeople) + parseFloat(newPrice[0].sumPrice) + parseFloat(newPrice[1].extra);
//         //     // let newTotal = parseFloat(newPrice[1].extra);
//         //     // console.log(newTotal)
//         //
//         //     setTotalPrice(newPrice)
//         // })
//     }, []);
//     // let newTotal = parseFloat(newPrice[2].housingSumPrice) * parseFloat(newPrice[0].numberOfPeople) + parseFloat(newPrice[0].sumPrice) + parseFloat(newPrice[1].extra);
//
//
//
//     return (
//         <>
//             {/*{totalPrice.map(total => (*/}
//             {/*    <button key={"1"} className={"totalPrice"}>Total Price: {total.distance}</button>*/}
//             {/*))}*/}
//             <button key={"1"} className={"totalPrice"}>Total Price: {totalPrice}</button>
//         </>
//
//     )
// }
//
// //TODO: PUSH DATA
//
// export const IfPlane = () => {
//     const [ticket_price, setTicket_price] = useState("0");
//     const [numberOfPeople, setNumberOfPeople] = useState("0");
//     const [food_price, setFood_price] = useState("0");
//     const [prevState, setPrevState] = useState("");
//
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const allData = await db.collection('jr1').get()
//             const data = allData.docs.map(doc => doc.data())
//
//             setPrevState(...data)
//
//         }
//         fetchData()
//
//
//     }, []);
//
//
//     let planeSumPrice = (parseFloat(ticket_price) + parseFloat(food_price)) * parseFloat(numberOfPeople)
//
//     console.log(`Cena całkowita: ${planeSumPrice}`)
//
//     const handleClick = (e) => {
//
//
//         firebase
//             .firestore()
//             .collection(`Journeys`)
//             .doc("Km5KnnO7T16tN5umLKva")
//             .set({
//                 ...prevState,
//                 ticket: ticket_price,
//                 numberOfPeople: numberOfPeople,
//                 food: food_price,
//                 sumPrice: planeSumPrice,
//                 typeOFtransport: "plane"
//             })
//             .then(() => {
//                 // setTicket_price("")
//             })
//
//     }
//
//
//
//     // WORKING OLD IFCAR
//
// const handleClick = (e) => {
//     firebase
//         .firestore()
//         .collection(`Journeys`)
//         .doc("1")
//         .set({
//             ...prevState,
//             totalTripPrice: carSumPrice,
//             distance: distance,
//             litres_per_hundred_km: litres,
//             pricePerLitre: pricePerLitre,
//             numberOfPeople: numberOfPeople,
//             fuelPrice: fuelPrice,
//             food_price: food_price,
//             sumPrice: carSumPrice,
//             typeOFtransport: "Car",
//             ticket: 0,
//             housingSumPrice: 0,
//             extra: 0
//
//         })
// }
//
//
