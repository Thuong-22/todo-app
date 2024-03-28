let styleBtn = {
    btnDel: {
        width: "24px",
        height: "24px",
        color: "#BDBDBD",
        border: 'none',
        backgroundColor: "#FFFFFF"
    },

    btnDelAll: {
        width: "124px",
        height: "40px",
        backgroundColor: "#EB5757",
        color: "#FFFFFF",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: '600',
        fontSize: '12px',
        border: 'none',
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        padding: "12px 16px",
        float:"right"
        
    },

    spanStyle: {
        width: "12px",
        height: "12px",
        fontSize: "12px",
        marginBottom: "12px"
    }
}

function ButtonDel({ onClick }) {

    return (
        <button style={styleBtn.btnDel}
            onClick={onClick}>
            <span className="material-icons-outlined">
                delete
            </span>
        </button>
    )
}

export function ButtonDelAll({ onClick }) {


    return (
        <div className="btnDelAll" style={styleBtn.btnDelAll}
            onClick={onClick}>
            <span className="material-icons-outlined" style={{ display: 'inline-block' }}>
                delete
            </span>
            <p>delete all</p>
        </div>
    )
}

export default ButtonDel;