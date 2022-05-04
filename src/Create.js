import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle]=useState('');
    // const [author, setAuthor]=useState('Rock');
    const [body, setBody]=useState('');
    const visible = true;
    const [isPending,setIspending]=useState(false);
    const history= useHistory();
    const handelSubmit=(e)=>{
        e.preventDefault();
        setIspending(true);
        var blogs=localStorage.getItem("abc-notes")?
                    JSON.parse(localStorage.getItem("abc-notes")):0;
        var id=0;
        if(blogs===0){
            id=0;
        }
        else{
            var ids=blogs.map( obj => {
                return obj.id;
            });
            id=Math.max(...ids)+1;
        }
        const blog = {title,body,id,visible};

        if(blogs===0){
            blogs=[blog];
        }
        else{
            blogs=[...blogs,[]];
            blogs[blogs.length-1]=blog;
        }


        localStorage.setItem("abc-notes", JSON.stringify(blogs))
        setIspending(false);
        history.push("/abc-notes");
        
    }
    return(
        <div className="create">
            <h2>Add a New Note</h2>
            
            <form onSubmit={handelSubmit}>
                <label >Note Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label >Note Body:</label>
                <textarea required value={body} onChange={(e) =>{setBody(e.target.value)}}></textarea>
                
                
                {!isPending && <button>Add Note</button>}
                {isPending && <button disabled>Adding Note</button>}
            </form>
            
        </div>
    )
}
export default Create;