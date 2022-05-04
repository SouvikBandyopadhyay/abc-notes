import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useHistory } from "react-router";

const ListofBlog = ({blogs,title,from}) => {
    const history= useHistory();
    const [select,setSelect]=useState(false);
    const [svalues,setSValues]=useState([]);
    const checked=(e)=>{
        var newval=Number(e.target.value);
        setSValues([...svalues,newval]);
        console.log(svalues);
    }
    const resetselect=()=>{
        setSValues([]);
        setSelect(false);
    }
    const deleteSelected=()=>{
        var data=localStorage.getItem("abc-notes")?JSON.parse(localStorage.getItem("abc-notes")):[];
        var newdata=data.filter((ele)=>{
            return !(svalues.includes(ele.id) && ele.visible===false)
        })
        newdata=data.map((ele)=>{
            if(svalues.includes(ele.id)){
                if(ele.visible===true){
                    ele.visible=false;
                }
            }
        })
        setSValues([]);
        console.log(data);
        localStorage.setItem("abc-notes", JSON.stringify(data));
        window.location.reload(false);
    }
    const restoreSelected=()=>{
        var data=localStorage.getItem("abc-notes")?JSON.parse(localStorage.getItem("abc-notes")):[];
        var newdata=data.map((ele)=>{
            if(svalues.includes(ele.id)){
                if(ele.visible===false){
                    ele.visible=true;
                }
            }
        })
        setSValues([]);
        localStorage.setItem("abc-notes", JSON.stringify(data));
        window.location.reload(false);
    }
    return ( 
        <div className="blog-list">
            <div className='flex row align-center heading'>
                <h2>{title}</h2>
                {blogs.length===0 || <button onClick={()=>select?resetselect():setSelect(true)} className='float-left'>{select?"unselect":"Select"}</button>}
            </div>
            <div className='scrollable-list'>
            {blogs.length===0 && <p>List is Empty</p> }
            {blogs.map((blog) => (
                <div className="blog-preview flex row single_blog_container'" key={blog.id}>
                    <Link to={'/abc-notes/note/'+blog.id} >
                        <div>
                            <h2>{ blog.title }</h2>
                            <p className='triple_dot'>{blog.body}</p>
                        </div>
                    </Link> 
                    
                    {select && <input type="checkbox" className='checkbox' value={blog.id} onClick={checked}/> }
                </div>
            ))}
            </div>
            <div className='activate-onseelct' >
                {select && <button onClick={deleteSelected}>Delete</button> }
                {select && from==="trash" && <button className='delete-onseelct' onClick={restoreSelected}>Restore</button> }
            </div>
        </div>
     );
}
 
export default ListofBlog;