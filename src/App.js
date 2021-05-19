import React, {useState, useEffect} from "react";
import './App.css';
import {db} from "./firebase"
import {Menu} from "./components/Menu/Menu";
import {MainPage} from "./components/MainPage/MainPage";
import {MainData} from "./components/MainData/MainData";
import {IfCar} from "./components/IfCar/IfCar";
import {IfBus} from "./components/IfBus/IfBus";
import {IfPlane} from "./components/IfPlane/IfPlane";
import {Attractions} from "./components/Attractions/Attractions";


function App() {
    const [journeys, setJourneys] = useState([]);

    useEffect(() => {
        db.collection("journeys")
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

    return (
        <div className="App">
            {journeys.map(({destination, from, id}) => {
                return (
                    <div className={"mydiv"} key={id}>
                        <Menu/>
                        <MainPage/>
                        <MainData/>
                        <IfPlane/>
                        <IfCar/>
                        <IfBus/>
                        <Attractions/>

                        {/*<h1>Punkt docelowy: {destination}</h1>*/}
                        {/*<h2>Wyjazd z: {from}</h2>*/}
                    </div>
                )


            })}



        </div>
    );
}

export default App;
