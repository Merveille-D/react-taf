import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arp from '../photo/argentp.png'
import femme from'../photo/femp.png';
import riz from'../photo/rizp.png';
import homme from'../photo/hp.png';
import couple from'../photo/couplep.png';
import {Carouselle} from './carousel';
import { Carouselb } from './carouselb';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1401 },
    items: 2.3,
  },
  desktop: {
    breakpoint: {  max: 1400, min: 1200  },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 995 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 994,min: 770 },
    items: 1.1,
  },
  petit: {
    breakpoint: { max: 769,min: 0 },
    items: 0.6,
  },
};
  export function  Slider() {
    return (
      <div className="parent " style={{paddingLeft:'40px',paddingRight:'40px',marginTop:'60px'}}>
       <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
       <Carouselle image={arp} titre='Epargne +' text='Epargnez votre argent et retirez à tout moment souhaité sans aucun dérangement. Taux d’intérêt net supérieur à 3.75% (max taux brut banque) Intérêt dynamique sur crédit' widt='480px' heigh='255px'/>
       <Carouselb image={femme} titre='Credit' text='Nous avons pour soucis de faciliter le processus d’octroi de crédit aux particuliers solvables La microfinance numérique pour lancer l’économie' widt='480px' heigh='255px'/>
       <Carouselle image={riz} titre='Tontine' text='Cotisation sécurisée. Achat de biens et services à votre rythme. Souscrivez désormais à vos tontine (Adogbè) depuis chez vous grâce à Finanfa.' widt='480px' heigh='255px'/>
       <Carouselb image={homme} titre='Service +' text='Epargnez votre argent et retirez à tout moment souhaité sans aucun dérangement. Taux d’intérêt net supérieur à 3.75% (max taux brut banque) Intérêt dynamique sur crédit' widt='480px' heigh='255px'/>
       <Carouselle image={couple} titre='Boutique' text='Epargnez votre argent et retirez à tout moment souhaité sans aucun dérangement. Taux d’intérêt net supérieur à 3.75% (max taux brut banque) Intérêt dynamique sur crédit' widt='480px' heigh='255px'/>
      </Carousel>
      </div>
    );
  };
