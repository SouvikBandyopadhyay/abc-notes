import ListofBlog from "./ListofBlog";

const Home = () => {
    var error=true;
    var data=localStorage.getItem("abc-notes")
    ? JSON.parse(localStorage.getItem("abc-notes"))
    : 0;
    console.log(data);
    if(data===0){
        error=true;
    }
    else{
        error=false;
        data=data.filter(function(element,index){
            return element.visible!==false;
        });
    }
    return ( 
        <div className="home">
            {error && <div>No notes yet...</div>}
            {!error && <ListofBlog blogs={data} title="All Notes!" from="home"/>}
            
        </div>
     );
}
 
export default Home;
