import React from "react";

const Review = ({ title, author, image, description, buy_links }) => {
    return ( <
        div >
        <
        h1 > { title } < /h1> <
        h2 > { author } < /h2> <
        img src = { image }
        alt = "" / >
        <
        p > { description } < /p> <
        h1 > Buy books from < /h1> <
        ol > {
            buy_links.map(buy_link => {
                return ( <
                    div >
                    <
                    a href = { buy_link.url } > { buy_link.name } < /a> <
                    /div>
                );
            })
        } <
        /ol> <
        /div>
    );
};

export default Review;