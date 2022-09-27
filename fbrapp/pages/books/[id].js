import { fetchBookFromID } from '../../data/utils'
import {useRouter} from 'next/router'
import React from "react";
function BookDetails() {
    const router = useRouter();
    const bookId = query.id
    const book = fetchBookFromID(bookId)
    console.log(book);

    if (!book) {
        return <p>Loading...</p>
    }

    return <div style={{
                width: 300,
                background: "whitesmoke",
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <h2>{book.name}</h2>
                <p>{book.description}</p>
            </div>;
}

export default BookDetails