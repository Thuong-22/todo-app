import React, { useState } from "react";
import { tabData } from "./Data";

function CheckBox({
    content = "Do coding challenges",
    item,
    onChange,
    children
}) {

    const [isChecked, setIsChecked] = useState(false);

    let handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={'squaredcheck ${{item.done}? "done": ""} '} >
            <div>
                <input
                    type="checkbox"
                    id={item.id}
                    className="checkbox"
                    checked={item.done}
                    onChange={onChange}
                />
                <label htmlFor={item.id} ><span>   {content}  </span></label>
            </div>

            {children}
        </div>
    )
}

export default CheckBox;