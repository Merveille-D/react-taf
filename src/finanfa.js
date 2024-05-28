import { useState } from "react"
import { Bienvenu } from "./fitlab/bienvenu"
import { Footer } from "./fitlab/footer"
import { Formulaire } from "./fitlab/formulaire"
import { Header } from "./fitlab/header"
import { Mission } from "./fitlab/mission"
import { Partenair } from "./fitlab/partenaire"
import { Quoifaire } from "./fitlab/quoifaire"
import { Utilisateur } from "./fitlab/utilisateur"
import Rectangle93 from './photo/Rectangle 93.jpg'


function Finanfa() {
    const [receive,setReceive]=useState('')

    return <div className="container">
        <Header image={Rectangle93}/>  
        <Bienvenu/>
        <Mission/>
        <Quoifaire/>
        <Utilisateur/>
        <Partenair/>
        <Formulaire  valeur1={receive} funct1={setReceive} />
        <Footer/>
    </div>
}

export default Finanfa