/**
 * @param {boolean} checked
 * @param {(s:string)=> void} onChange
 * @param {string} label 
 * @returns {JSX.Element}
 */
export function Checkbox({checked,onChange,label}) {
    return <div className="form-check">
         <label className="form-check-label"> <input type='checkbox' 
         className='form-check-input'
         checked={checked}
         onChange={(e)=>onChange(e.target.checked)}
         /> {label} </label>
    </div>
}