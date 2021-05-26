import {Switch, Route} from "react-router-dom";
import React from "react";
import './App.css';
import {Menu} from "./components/Menu/Menu";
import {Home} from "./components/Home/Home";
import {NewJourney} from "./components/NewJourney/NewJourney";
import {MainData} from "./components/MainData/MainData";
import {Housing} from "./components/Housing/Housing";
import {IfCar} from "./components/IfCar/IfCar";
import {IfBus} from "./components/IfBus/IfBus";
import {IfPlane} from "./components/IfPlane/IfPlane";
import {Activities} from "./components/Activities/Activities";
import {MyJourneys} from "./components/MyJourneys/MyJourneys";
import {SelectedJourney} from "./components/SelectedJourney/SelectedJourney";
import {SingleActivities} from "./components/SingleActivities/SingleActivities";
import {ActivitiesSecFile} from "./components/ActivitiesSecFile/ActivitiesSecFile";
// import {SingleHousingp} from "./components/SingleHousingp/SingleHousingp";




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
                <Route path="/Activities/:id" component={Activities}/>
                <Route path="/ActivitiesSecFile/:id" component={ActivitiesSecFile}/>
                <Route path="/MyJourneys" component={MyJourneys}/>
                <Route path="/SelectedJourney/:id" component={SelectedJourney}/>
                <Route path="/SingleActivities/:id" component={SingleActivities}/>
                {/*<Route path="/SingleHousingp/:id" component={SingleHousingp}/>*/}
            </Switch>



        </div>
    );
}

export default App;
