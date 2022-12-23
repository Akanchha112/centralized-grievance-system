import "./Btn.css";
const EmerBtn=()=>{
    const energencyHandle=()=>{
        document.getElementsByClassName("mssg-container")[0].style.display="block";
    }
    return(
        <>
        <div className="emerBtn" onClick={()=>{energencyHandle()}}>Chat with Us</div>
        <div className="mssg-container">

        </div>
        </>
    )
}

export default EmerBtn;