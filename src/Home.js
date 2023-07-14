// Parent component
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // Using Custom Hook allows we to just write one line of code
    // We don't need to fetch the data again everytime we have new url
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Load...</div>} 
            {data && <BlogList blogs={data} title='All Blogs!' />}
        </div>
     );
}
 
export default Home;