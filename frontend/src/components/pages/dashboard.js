import React from "react";
import MeasuresDropdown from "../utils/measuresDropDown";

export default function DashBoard({isAuthenticated}) {

    return(
        <div>
            <h1>DASHBOARD</h1>
            <MeasuresDropdown />
        </div>
    )
}