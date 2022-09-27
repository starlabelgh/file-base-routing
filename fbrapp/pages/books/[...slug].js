import {useRouter} from "next/router";
function Slug() {
    const router = useRouter();
    console.log(router)
    return <h2>New Added Slug Page</h2>
}

export default Slug;