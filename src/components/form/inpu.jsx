/**
 * 
 * @param {string} placeholder 
 * @param {string} value
 * @param {s:string=> void} onChange 
 */
export function Input({placeholder,value,onChange,type,style}) {
    return <div className="mb-3">
        <input type={type} className='form-input rounded' value={value} placeholder={placeholder} onChange={(e)=> onChange(e.target.value)} style={style} />
    </div>
    
}