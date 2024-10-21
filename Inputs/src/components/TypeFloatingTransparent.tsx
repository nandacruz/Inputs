//Styles

import Floanting from '../assets/styles/Floanting.module.css';

type TypeFloatingTransparentProps = {
  type: string;
  name: string;
  id: string;
  minLength: number;
  maxLength: number;
}

export default function TypeFloatingTransparent({name, type, id, minLength, maxLength}: TypeFloatingTransparentProps ) {    
  return (    
    <>
      <div className={Floanting.card}>
        <div className={Floanting.container}>          
          <div className={Floanting.area}>  
            <label htmlFor={id}></label>      
            <input type={type} name="name" id={id} minLength={minLength} maxLength={maxLength} required/>        
            <div className={Floanting.labelVisible}>{name}</div>
          </div>  
        </div>
      </div>       
    </>
    
  )
}

