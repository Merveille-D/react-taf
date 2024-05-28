/**
 * 
 * @param {boolean} checked
 * @param {string} label
 * @param {boolean=> void} onChange 
 */
export function Checkbox({checked,label,onChange}) {
    return <div className="form-check">
        <label className="form-check-label">
            <input type="checkbox"
            className="form-check-input"
             checked={checked} 
             onChange={(e)=> onChange(e.target.checked)} /> 
             {label} </label>
    </div>
    
}