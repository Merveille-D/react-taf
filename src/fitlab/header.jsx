 /**
  * Cette function permet de réaliser l'onglet de la page web 
  * [s:string] image
  * @returns 
  */
 export function Header({image}) {

    return <div className="container" style={{backgroundColor:'white',position: "sticky", top: 0}}>

   
    <nav class="navbar navbar-expand-lg " >
        <div className="container-fluid " >
              <a class="navbar-brand" style={{color:'#624097 '}}href>
                <img src={image} alt="l" width="65" height="65" />
                <strong className="pt-5" style={{fontSize:'28px'}}> Finanfa</strong>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
              </button>


          <div className="collapse navbar-collapse" id="navbarText border border-1">

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center ">
              <li className="nav-item"  >
                <a className="nav-link " aria-current="page" href> <span style={{color:'#000000 '}}>Accueil</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href><span style={{color:'#000000 '}}>Comment ça marche</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href><span style={{color:'#000000 '}}>Nos Agences</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href><span style={{color:'#000000 '}}>Contacte</span></a>
              </li>
            </ul>

            <button className="btn bg border border-1" style={{ width:'200px',background: 'linear-gradient(to right, rgb(101, 50, 118), rgb(105, 31, 74),rgb(111, 13, 29)', color:'white'}}  type="submit">Créer un compte</button>
          
          </div>

        </div>
    </nav>
    </div>
    
}