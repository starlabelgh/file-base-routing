export const books = [{
    id: "1",
    name: "Mindset",
    description: "This is my First Book",
},
{
    id: "2",
    name: "The Octopus",
    description: "This is my First Book",
},
{
    id: "3",
    name: "Modern Entrepreneur",
    description: "This is my First Book",
},
{
    id: "4",
    name: "Smart Money",
    description: "This is my First Book",
},
{
    id: "5",
    name: "Think and Grow Rich",
    description: "This is my First Book",
},
];

export const fetchBookFromID = (id) => {
    const fetchedBook = book.find((book=>book.id===id));
    return fetchedBook;
}