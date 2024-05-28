import { useEffect, useState } from "react";


function App(){   
 const [titre, setTitre]=useState()

 useEffect(()=>{
  document.title=titre
 },[titre]);

  return <div className="mb-3">   
  <input type="text" className='form-input' value={titre} onChange={(e)=> setTitre(e.target.value)}  />
  <div className="pt-5" id="di">  </div>
</div>
     
}
        



      

export default App;
