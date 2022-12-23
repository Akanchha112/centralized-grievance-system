import "./Card.css"
const QueryCard = (props) => {

    return (
        <>
            <div className="query_card" >
                <h2>{props.query}</h2>
                <p>{props.about}</p>
                <picture>
                    <img src="" alt="monitor" />
                </picture>
            </div>
        </>
    )
}
export default QueryCard;