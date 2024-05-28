/**
 * @param {string} placeholder
 * @param {string} value 
 * @param {(s:string)=> void} onChange
 * @returns {JSX.Element}
 */
export function Input({placeholder, value, onChange}){
    return <div className="my-4">
    <input type='text' 
    className="form-control"
    value={value} 
    placeholder={placeholder} 
    onChange={(e)=>onChange(e.target.value)}/> 
    </div>
}