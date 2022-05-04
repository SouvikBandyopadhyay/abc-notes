import ListofBlog from "./ListofBlog";
const BlogTrash = () => {
    var data=localStorage.getItem("abc-notes")?JSON.parse(localStorage.getItem("abc-notes")):0;
    var empty=true;
    if(data===0){
        empty=true;
    }
    else{
        empty=false;
        console.log(data);
        data=data.filter(function(element,index){
            return element.visible===false;
        });
    }
    
    return ( 
        <div className="BlogTrash">
            {!empty && <ListofBlog blogs={data} title="Deleted Notes..." from="trash"/>}
            {empty && <p>Trash is Empty</p>}
        </div>
     );
}
 
export default BlogTrash;