// Child component
import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    // div.blog-preview will link to the corespounding route according to the object ID
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} >
                        <h2>{blog.title}</h2>
                        <p>Writtne by {blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
 
export default BlogList;