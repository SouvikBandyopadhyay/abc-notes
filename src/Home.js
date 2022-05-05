import ListofBlog from "./ListofBlog";
import { useState } from "react";

const Home = () => {
    var error=true;
    
    var newdata=localStorage.getItem("abc-notes")
    ? JSON.parse(localStorage.getItem("abc-notes"))
    : 0;
    // console.log(data);
    if(newdata===0){
        error=true;
    }
    else{
        error=false;
        newdata=newdata.filter(function(element,index){
            return element.visible!==false;
        });
    }
    const [data,setdata]=useState(newdata);
    return ( 
        <div className="home">
            {error && <div>No notes yet...</div>}
            {!error && <ListofBlog blogs={data} setdata={setdata} title="All Notes!" from="home"/>}
            
        </div>
     );
}
 
export default Home;
