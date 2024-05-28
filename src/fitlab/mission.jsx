
import motif from '../photo/Motif.jpg'
import { Entete } from './entete'
import '../fitlabcss/mission.css'
export function Mission() {
     
    

    const car={
        color:'white',
        padding:'20px',
        background: 'linear-gradient(to right, rgb(101, 50, 118), rgb(105, 31, 74),rgb(111, 13, 29)',
        borderRadius:'20px 20px 0px 0px'
    }
    const bod={
        paddingTop:'110px',
        height:'300px',
        fontSize:'20px',
        borderBottom: '3px solid rgb(242, 248, 253)',
        borderRadius:'0px 0px 22px 22px',
        marginBottom:'-30px',
        backgroundColor:"white"
    }
    
            
    return <section style={{color:'#624097',backgroundImage: `url(${motif})`,paddingTop:'60px',margin:'auto'}} >
        <Entete textu='Nos 03 Missions'/>
       
        <div className="row mt-5 ser" >

            <div className="col pt-4 ">
                    <div className="mb-3 div0  " >

                        <div className="card-header"  style={car}>Formalisation</div>
                        <div className="card-body" style={bod}>
                            <p className="card-text">Rendre formel les acteurs informels de la micro finance en leur donnant le statut d'entrepreneurs de la finance digitale</p>
                        </div>
                    
                    </div>
            </div>

        <div className="col pt-4">
            
                <div className=" mb-3 div0 " >

                    <div className="card-header"  style={car}>Réorientation</div>
                    <div className="card-body" style={bod}>
                        <p className="card-text">Réorienter la politique de collecte d'Epargne et d'octroi de crédit en utilisant les nouveaux moyens de paiements mobiles</p>
                    </div>

                </div>
            
        </div>
       
        <div className="col pt-4">
           
                <div className=" mb-3 div0 " >

                    <div className="card-header"  style={car}>Inclusion Financière</div>
                    <div className="card-body" style={bod}>
                    <p className="card-text">Rendre formel les acteurs informels de la micro finance en leur donnant le statut d'entrepreneurs de la finance digitale</p>
                    </div>

                </div>
           
        </div>
</div>


    </section>
    
}