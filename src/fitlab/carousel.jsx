import '../fitlabcss/carousel.css';
export function Carouselle({image, titre,text,widt,heigh}) {
return <div className='pb-5'>
        <div className='carousel'>
           <img src={image} className='span1'  alt="ph" width={widt}  height={heigh}/> 
           <div className='carousel-text ' style={{ width: widt }}>
           <h2 className=' ' style={{marginLeft:'15px',color:'white'}}> {titre} </h2>
           <div className='overlay'>
                <p className='overlay-text'>{text}</p>
           </div>
           <button className="btn bg " style={{ width:'150px',background: 'linear-gradient(to right, rgb(101, 50, 118), rgb(105, 31, 74),rgb(111, 13, 29)', color:'white',marginLeft:'15px'}}  type="submit">En savoir plus</button>
          
           </div>
        </div>
    </div>
}