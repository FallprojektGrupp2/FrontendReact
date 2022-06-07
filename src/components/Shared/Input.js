
import './input.css'
const Input=({placeholder,type,value,onChange}) =>{
    return <input placeholder={placeholder} className="input" type={type} value={value} onChange={onChange}/>
}
export default Input;