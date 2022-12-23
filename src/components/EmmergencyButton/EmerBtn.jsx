
import "./Btn.css";

const EmerBtn=()=>{
    const energencyHandle=()=>{
        document.getElementsByClassName("mssg-container")[0].style.display="block";
    }
    const closebtn=()=>{
        document.getElementsByClassName("mssg-container")[0].style.display="none";
    }
   
    return(
        <>
        <div className="emerBtn" onClick={()=>{energencyHandle()}}><img src="./images/chat.png"/></div>
        <div className="mssg-container">
        <div className="header">
                    <h2>Chat with Us</h2>
                     <img src="./images/closeIcon.png" alt="Close" onClick={()=>{closebtn()}} />
                </div>
                <div className="chatBox"></div>
                <div className="inputBox">
                    <input  type="text" id="chatInput" />
                    <button className="sendBtn"><img src="./images/send.png" alt="Send" /></button>
                </div>
        </div>
        </>
    )
}

export default EmerBtn;