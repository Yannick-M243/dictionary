function DisplayMeanings(props) {
    let meanings = props.meanings;
    let wordSections = null;
    let firstFound = meanings[0];

    //checks if meanings have been found for the word eneterred and display the outcome accordingly
    if (firstFound.hasOwnProperty("hwi")) {
        //create new sections for each meaning found to display definition
        wordSections = meanings.map((word, key) => {
            return <div key={key} className="word-container text-start">
                <h4>{word.hwi.hw}</h4>
                <h5>{word.fl}</h5>
                <ul>
                    {word.shortdef.map((def, key) => {
                        return <li key={key}>{def}</li>
                    })}
                </ul>
            </div>
        });
        return (
            <div className='container d-flex justify-content-center flex-wrap mx-auto'>
                {wordSections}
            </div>
        );
    } else {
        return (
            <p>No meaning found</p>
        );
    }
}
export default DisplayMeanings;
