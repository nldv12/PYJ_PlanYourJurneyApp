import React from "react";
import "./MainCOMPONENTS.scss"


// inputs
export const InputText = ({placeholder}) => {

    return (
        <>
            <input className={"inputText"} type="text" placeholder={placeholder} name={placeholder}/>
        </>

    )
}
export const InputNumber = ({placeholder}) => {

    return (
        <>
            <input className={"inputText"} type="number" placeholder={placeholder} name={placeholder}/>
        </>

    )
}
export const InputSelect5 = ({value1, value2, value3, value4, value5}) => {

    return (
        <>
            <select className={"InputSelect"} name="name">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
                <option value={value5}>{value5}</option>

            </select>
        </>

    )
}
export const InputSelect4 = ({value1, value2, value3, value4}) => {

    return (
        <>
            <select className={"InputSelect"} name="name">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
                <option value={value4}>{value4}</option>
            </select>
        </>

    )
}
export const InputSelect3 = ({value1, value2, value3}) => {

    return (
        <>
            <select className={"InputSelect"} name="name">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
                <option value={value3}>{value3}</option>
            </select>
        </>

    )
}
export const InputSelect2 = ({value1, value2}) => {

    return (
        <>
            <select className={"InputSelect"} name="name">
                <option value={value1}>{value1}</option>
                <option value={value2}>{value2}</option>
            </select>
        </>

    )
}
export const InputCheckbox = ({name}) => {

    return (
        <div className={"myCheck"}>
            <input className={"InputCheckbox"} type="checkbox" name={name}/>
            <label htmlFor={name}>{name}</label>

            <div>

            </div>
        </div>

    )
}
// end inputs


export const FormLabel = ({name}) => {

    return (
        <>
            <div className={"label"}>{name}</div>
        </>

    )
}
export const TotalPrice = ({name}) => {

    return (
        <>
            <div className={"totalPrice"} >Total Price: 3000 </div>
        </>

    )
}
