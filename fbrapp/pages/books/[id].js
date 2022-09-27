import {useRouter} from 'next/router'
function BookDetails() {
    const router = useRouter();
    console.log(router)
    return <h1>Book Details</h1>;
}

export default BookDetails