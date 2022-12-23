import React, { Component } from 'react';
import DisplayMeanings from './DisplayMeanings.js';

//variables that will be used to store the word entered and the api url
let word = "";
let apiUrl = "";

//The component that get the word to search, looks for it in the dictionary and displays the meaning of it
class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.getMeaning = this.getMeaning.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.state = {
            error: null,
            meanings: [],
            wordEntered: "",
            loading: false
        };
    }

    //function that update the word enterred state
    handleChange(event) {
        this.setState({ wordEntered: event.target.value });
    }

    //Enabling user to submit the meaning request by pressing ENTER
    handleKeypress = (event) => {
        //it triggers by pressing the enter key
        if (event.keyCode === 13) {
            this.getMeaning();
        }
    };

    //function that get the word that the user is looking for using the dictionary api
    getMeaning = () => {
        this.setState({ loading: true });
        word = this.state.wordEntered;
        apiUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_API_KEY}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        meanings: result,
                        loading: false
                    });
                },
                (error) => {
                    this.setState({
                        loading: false,
                        error
                    });
                });
    }

    render() {
        const { error, meanings, loading } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    <h1>Dictionary App</h1>
                    <div className="col-auto">
                        <label htmlFor="word" className="form-label p-3">Enter a word</label>
                        <input className='mx-3' type="text" onChange={this.handleChange} onKeyDown={this.handleKeypress} placeholder="Enter a word" />
                        <button type="button" className="btn btn-primary" onClick={this.getMeaning}>Search</button>
                    </div>
                    {meanings.length !== 0 ? <DisplayMeanings meanings={meanings} /> : ''}
                    {loading ? <span>Loading...</span> : ''}
                </div>
            );
        }
    }
}
export default Dictionary;
