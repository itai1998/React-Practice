import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false); 
  const history = useHistory(); // useHistory allows you to redirect the page 

  // Make the Post request insde the submit function
  const handleSubmit = e =>{
    e.preventDefault();
    const blog = {title, body, author};
    setIsPending(true); // Set true if the data is posting

    // Post request
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog) // Convert the format to JSON type
    }).then(()=>{                // Use Promise. Log the message and reset isPending
      console.log('new blog added');   
      setIsPending(false);
      
      //history.go(-1); // Direact the user to the previous page
      history.push('/'); // Direact to the home page (or you can adjust the route)
    })

  }

    return ( 
       <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>  
          <label>Blog title</label>
          <input 
          type="text"
          required 
          value = {title}
          onChange={(e)=>setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
          >
            <option value="I-Tai">I-Tai</option>
            <option value="Peter">Peter</option>
            <option value="Lin">Lin</option>
          </select>
      
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Add blog...</button>}
        </form>
       </div> 
     );
}
 
export default Create;