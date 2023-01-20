function SearchBox(props) {

    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.input} onChange={(e)=>props.setInput(e.target.value)} placeholder="Search..."></input>
            </form>
        </>
    );
}

export default SearchBox;
