

export default function MeasuresDropdown() {
    const measuresTable = [{name: "Pounds (lbs)"}, {name: "Ounces (oz)", toLb: 16}, {name: "Cup"}, {name:  "Table Spoon (tbs)"}, {name: "Tea Spoon (tps)"} ];

    return(
        <div>
            <select>
                <input type="number"></input>
            { measuresTable.map((measure) =>  
            <option key={measure.name}>{measure.name}</option>)}
            </select>
        </div>
    )
}