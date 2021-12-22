const Protected= async ()=>{
    let pass=-1;
    if(!localStorage.getItem("jwt"))return 0;
    await fetch(`/authorise`,
     {
         method: "POST",
         headers: {
                 "Content-type": "application/json;",
                 "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                 },
     }
     ).then((response) => response.json())
      .then((json) => {

         console.log("authcheck json:",json);
         if(json.username){pass=1}
         else {pass=0;}
     })
     
 
     if(pass>0)return pass;
 }
 
 export default Protected;