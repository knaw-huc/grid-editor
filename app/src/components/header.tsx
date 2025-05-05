import React from "react";

export default function Header({add}: {add: Function}) {
    return (
        <div style={{padding: "10px"}}>
            <button onClick={() => {add()}}>Add rows</button>
        </div>
    )
}