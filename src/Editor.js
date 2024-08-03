import React from 'react';

export default function Editor({  name, value, onChange }) {
  
   
  return (
    <div style={{margin:'3%',height:'30vh'}}>
        <label>{name}</label>
        <div className="form-floating">
  <textarea  className="form-control " value={value} onChange={e=>onChange(e.target.value)}  id="floatingTextarea2" style={{height: "170px",padding:'.5rem' ,color:'white',backgroundColor:'black'}}></textarea>

</div>
    </div>
  );
}
