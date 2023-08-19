import React, { useContext } from "react";
import MeasuresDropdown from "../utils/unitsConversion/unitsConverter";
import UnitsConverter from "../utils/unitsConversion/unitsConverter";


export default function DashBoard({isAuthenticated}) {

    return(
        <div>
            
            <h1>Welcome back </h1>
            <MeasuresDropdown />
            <UnitsConverter />
        </div>
    )
}