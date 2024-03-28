import React from "react";

function Tab({ label, onClick, isActive }) {
    return (
        <div
            className={`tab ${isActive ? "active" : ""}`}
            onClick={onClick} 
        >
            <p>{label}</p>
            <hr />
        </div>

    )
}

export default Tab;
