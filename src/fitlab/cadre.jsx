import '../fitlabcss/cadre.css'
export function Cadre({image,imag}) {

    return(
        <div className='row pt-1 div'>
            <div className='col-2'>
            <img src={image} alt="l" id='im1' />
            </div>
            <div className='col-10'>
            <img src={imag} alt="l" />
            </div>
             
               
        </div>
    )
}