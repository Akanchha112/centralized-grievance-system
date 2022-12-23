import { useState } from "react";
import SolutionCard from "../Solution Card/SolutionCard";
import "./grievance.css";

const GrievancePage = (props) => {
    const [ques,setQues]=useState("");
    const { id, query } = props;
    const arr=[1,2,3];
    const para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quasi! Reprehenderit nesciunt iure voluptate impedit sequi culpa voluptas quisquam nostrum.";
    return (
        <>
            <div className="griev-container">
                <div className="griev-query">
                    <h1>Ask your question about {query} Issues</h1>
                </div>

                <input type="text" placeholder="search" value={ques} onChange={()=>{setQues()}}/>
                <div>{
                    arr.map(()=>{
                        return(
                            <SolutionCard  data={para}/>
                        )
                        
                    })
                }
                </div>
                
            </div>
        </>
    )
}

export default GrievancePage;