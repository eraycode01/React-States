
import { useState } from 'react';
function InputExample() {
    const [form, setForm] = useState({isim:'', soyisim:''}); 
 
    const onChangeInput = (e)=> {
        console.log(e.target.name);
   
 
        setForm({...form, [e.target.name]: e.target.value })
 };
    
    
    return (
  
    <div>
       İsim ; <br />
        <input name='isim' value={form.isim} onChange={onChangeInput}/>
       <br /> 
       <br />
       <hr />
    
       Soyisim ; <br />
        <input name='soyisim' value={form.soyisim} onChange={onChangeInput}/>
       <br />  {form.isim}  {form.soyisim}
    </div>
  );
}

export default InputExample