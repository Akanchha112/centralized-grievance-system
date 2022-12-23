const GrievancePage=(props)=>{
    const {id, query}=props;
    return(
        <>
        <h1>Ask your question about {query} </h1>
        <input type="text" placeholder="search"/>
        </>
    )
}

export default GrievancePage;