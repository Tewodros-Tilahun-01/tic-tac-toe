import React from "react";
const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            <div
                className="box-border"
                style={{
                    border:
                        value === "X"
                            ? "solid #14c38d 3px"
                            : "solid #d636ba 3px",
                }}
            >
                {console.log(value)}
                <strong
                    style={{ color: value === "X" ? "#14c38d" : "#d636ba" }}
                >
                    {value}
                </strong>
            </div>
        </button>
    );
};
export default Square;
