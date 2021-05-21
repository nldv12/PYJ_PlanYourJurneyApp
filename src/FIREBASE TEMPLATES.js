import firebase from "./firebase"
import React, {useEffect, useState} from "react";
import {Menu} from "./components/Menu/Menu";



function App() {
    // const [journeys, setJourneys] = useState([]);
    const [times, setTimes] = useState([]);
    const [value, setValue] = useState([]);
//POBIERANIE DANNYCH Z FIREBASE

    useEffect(() => {
        firebase
            .firestore()
            .collection('journeys')
            .onSnapshot(snapshot => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)
            })
    }, []);


    //WYSYLANIE DO FIREBASE
    const handleClick = () => {
        firebase
            .firestore()
            .collection('journeys')
            .add({
                value
            })
            .then(() => {
                setValue("")
            })


    }
}








//
// // const [journeys, setJourneys] = useState([]);
// const [times, setTimes] = useState([]);
// const [value, setValue] = useState([]);
// //POBIERANIE DANNYCH Z FIREBASE
// // useEffect(() => {
// //     db.collection("journeys")
// //         .get()
// //         .then((querySnapshot) => {
// //             const allJourneys = [];
// //             querySnapshot.forEach((doc) => {
// //                 allJourneys.push({
// //                     ...doc.data(),
// //                     id: doc.id,
// //                 })
// //             });
// //             setJourneys(allJourneys);
// //
// //         });
// // }, []);
// useEffect(() => {
//     firebase
//         .firestore()
//         .collection('journeys')
//         .onSnapshot(snapshot => {
//             const newTimes = snapshot.docs.map((doc) =>({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setTimes(newTimes)
//         })
// }, []);
//
//
// //WYSYLANIE DO FIREBASE
// const handleClick = () => {
//     firebase
//         .firestore()
//         .collection('journeys')
//         .add({
//             value
//         })
//         .then(()=>{
//             setValue("")
//         })
//
//
// }
//
//
// // {journeys.map(({destination, from, id}) => {
// //     return (
// //         <div className={"mydiv"} key={id}>
// //             <h1>Punkt docelowy: {destination}</h1>
// //             <h2>Wyjazd z: {from}</h2>
// //         </div>
// //     )
// // })}


//
// function App() {
//
//     return (
//         <div className="App">
//             <Menu/>
//             {/*<h1>{times.title}</h1>*/}
//             {times.map((time) =>
//                 <li key={time.id}>{time.from}</li>
//             )}
//             <input value={value} onChange={e => setValue(e.currentTarget.value)} className={"inputText"} type="number" />
//             <button onClick={handleClick}>click </button>
//
//
//             {/*<Switch>*/}
//             {/*    <Route path="/" exact component={Home}/>*/}
//             {/*    <Route path="/NewJourney" exact component={NewJourney}/>*/}
//             {/*    <Route path="/MainData" component={MainData}/>*/}
//             {/*    <Route path="/Plane" component={IfPlane}/>*/}
//             {/*    <Route path="/Car" component={IfCar}/>*/}
//             {/*    <Route path="/Bus" component={IfBus}/>*/}
//             {/*    <Route path="/Attractions" component={Attractions}/>*/}
//             {/*    <Route path="/MyJourneys" component={MyJourneys}/>*/}
//             {/*    <Route path="/SelectedJourney/:id" component={SelectedJourney}/>*/}
//             {/*</Switch>*/}
//
//
//
//         </div>
//     );
// }
//
// export default App;
