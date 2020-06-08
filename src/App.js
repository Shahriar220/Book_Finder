import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./App.css";

const App = () => {
    const [search, setSearch] = useState("");
    const [finds, setFinds] = useState([]);
    const [query, setQuery] = useState(
        "svc/books/v3/lists/current/hardcover-fiction"
    );

    const url =
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=eKKdkD7SeXi2ff9YVh4Iu8pF6XI7p27j";
    useEffect(() => {
        getReviews();
    }, [query]);
    const getReviews = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setFinds(data.results.books);
        console.log(data.results.books);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };
    return ( <
        div className = "App" >
        <
        form onSubmit = { getSearch }
        className = "search-form" >
        <
        input className = "search-bar"
        type = "text" / >
        <
        button className = "search button"
        type = "submit"
        onChange = { updateSearch } >
        Search <
        /button> <
        /form> {
            finds.map(i => ( <
                Review key = { i.title }
                title = { i.title }
                author = { i.author }
                image = { i.book_image }
                description = { i.description }
                buy_links = { i.buy_links }
                />
            ))
        } <
        /div>
    );
};

export default App;