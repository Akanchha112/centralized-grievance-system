import "./Card.css"
const QueryCard=(props)=>{
    
    return(
        <>
        <div className="query_card" >
            <h2>{props.query}</h2>
        </div>
        </>
    )
}
export default QueryCard;