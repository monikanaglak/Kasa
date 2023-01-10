import React, {useState} from 'react';

 const Dropdown = ({description,equipments,index})=>{
    const [showDescription,setShowDescription] = useState(false)
    const [showEquipement,setShowEquipement] = useState(false)
    return (
    <section className='dropdown_container'>
        <article className='dropdown_article'>
            <header className='header_dropdown'>
                <h4>Description</h4>
                <img className="arrow" src="/images/arrow.png" alt="arrow"  onClick={()=>setShowDescription(!showDescription)}/>
            </header>
            {
                showDescription && <p className='text_apropos'>{description}</p>
            }
            
        </article>
        <article className='dropdown_article'>
            <header className='header_dropdown'>
                <h4>Equipments</h4>
                <img className="arrow" src="/images/arrow.png" alt="arrow"  onClick={()=>setShowEquipement(!showEquipement)}/>
            </header>
            {
                showEquipement && <p className='text_equipement'>{equipments.map((eq,index)=><span key={index}>{eq} </span>)}</p>
            }
            
        </article>
    </section>
    );
};
export default Dropdown;