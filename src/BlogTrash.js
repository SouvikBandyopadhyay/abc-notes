import { useState } from "react";
import ListofBlog from "./ListofBlog";
const BlogTrash = () => {
    var newdata=localStorage.getItem("abc-notes")?JSON.parse(localStorage.getItem("abc-notes")):0;
    var empty=true;
    if(newdata===0){
        empty=true;
    }
    else{
        empty=false;
        console.log(newdata);
        newdata=newdata.filter(function(element,index){
            return element.visible===false;
        });
    }
    const [data,setdata]=useState(newdata);
    return ( 
        <div className="BlogTrash">
            {!empty && <ListofBlog blogs={data} setdata={setdata} title="Deleted Notes..." from="trash"/>}
            {empty && <p>Trash is Empty</p>}
        </div>
     );
}
 
export default BlogTrash;