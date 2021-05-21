import {Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
// import {db} from "./firebase"
// import firebase from "./firebase"
import {Menu} from "./components/Menu/Menu";
import {Home} from "./components/Home/Home";
import {NewJourney} from "./components/NewJourney/NewJourney";
import {MainData} from "./components/MainData/MainData";
import {Housing} from "./components/Housing/Housing";
import {IfCar} from "./components/IfCar/IfCar";
import {IfBus} from "./components/IfBus/IfBus";
import {IfPlane} from "./components/IfPlane/IfPlane";
import {Attractions} from "./components/Attractions/Attractions";
import {MyJourneys} from "./components/MyJourneys/MyJourneys";
import {SelectedJourney} from "./components/SelectedJourney/SelectedJourney";

export const number_of_document = "1";
export const name_of_collection = `Jr1`;


function App() {

    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/NewJourney" exact component={NewJourney}/>
                <Route path="/MainData" component={MainData}/>
                <Route path="/Housing" component={Housing}/>
                <Route path="/Plane" component={IfPlane}/>
                <Route path="/Car" component={IfCar}/>
                <Route path="/Bus" component={IfBus}/>
                <Route path="/Attractions" component={Attractions}/>
                <Route path="/MyJourneys" component={MyJourneys}/>
                <Route path="/SelectedJourney/:id" component={SelectedJourney}/>
            </Switch>



        </div>
    );
}

export default App;
