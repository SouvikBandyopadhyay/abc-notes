import { useHistory, useParams } from "react-router";

const BlogDetails = () => {
    
    const { id } = useParams();
    var blogs=JSON.parse(localStorage.getItem("abc-notes"));
    const history=useHistory();

    const handleDelete = ()=>{
        let i=0;
        for(i=0;i<blogs.length;i++){
            if(Number(blogs[i].id)===Number(id)){
                blogs[i].visible=false;
                console.log(blogs[i]);
            }
        }
        localStorage.setItem("abc-notes", JSON.stringify(blogs));
        history.push("/abc-notes");    
    }

    const handlePermanentDelete=()=>{
        var newblogs=blogs.filter(function (ele,index) {
            return Number(id) !== Number(ele.id);
          });
        localStorage.setItem("abc-notes", JSON.stringify(newblogs));
        history.push("/abc-notes/trash");
    }

    return ( 
        <div className="blog-details">
            {/* { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> } */}
             {blogs.map((blog) => 
                <>
                {(Number(id)===Number(blog.id)) &&
                    <article key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <div>
                            <p>{ blog.body }</p>
                        </div>
                        {blog.visible && <button onClick={handleDelete}>delete</button>}
                        {!blog.visible && <button onClick={handlePermanentDelete}>Pemanently Delete</button> }
                    </article>
                }
                </>
             )}
        </div>
     );
}
 
export default BlogDetails;