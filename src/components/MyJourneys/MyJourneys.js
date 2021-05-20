import React  from "react";
import "./MyJourneys.scss"
import {InputNumber, InputCheckbox, InputSelect5} from "../MainCOMPONENTS/MainCOMPONENTS";
import {FormLabel} from "../MainCOMPONENTS/MainCOMPONENTS";
import {TotalPrice} from "../MainCOMPONENTS/MainCOMPONENTS";
import {Link} from "react-router-dom";


export const MyJourneys = () => {


    return (
        <div className={"MyJourneys"}>
            <div className={"title"}>My Journeys</div>


            <Link to="/SelectedJourney" className={"singleJourney"}>
                <div className={"sum_Line first_line"}>Destination: <span>Amsterdam</span></div>
                <div className={"sum_Line second_line"}>Price: <span>5000</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>4</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>Car</span></div>
                <div className={"sum_Line fifth_line"}>Number of days: <span>6</span></div>
            </Link>
            <Link to="/SelectedJourney" className={"singleJourney"}>
                <div className={"sum_Line first_line"}>Destination: <span>Amsterdam</span></div>
                <div className={"sum_Line second_line"}>Price: <span>5000</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>4</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>Car</span></div>
                <div className={"sum_Line fifth_line"}>Number of days: <span>6</span></div>
            </Link>
            <Link to="/SelectedJourney" className={"singleJourney"}>
                <div className={"sum_Line first_line"}>Destination: <span>Amsterdam</span></div>
                <div className={"sum_Line second_line"}>Price: <span>5000</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>4</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>Car</span></div>
                <div className={"sum_Line fifth_line"}>Number of days: <span>6</span></div>
            </Link>
            <Link to="/SelectedJourney" className={"singleJourney"}>
                <div className={"sum_Line first_line"}>Destination: <span>Amsterdam</span></div>
                <div className={"sum_Line second_line"}>Price: <span>5000</span></div>
                <div className={"sum_Line third_line"}>Number of people: <span>4</span></div>
                <div className={"sum_Line fourth_line"}>Type of transport: <span>Car</span></div>
                <div className={"sum_Line fifth_line"}>Number of days: <span>6</span></div>
            </Link>
        </div>
    )
}