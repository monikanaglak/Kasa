import React, {useState} from 'react';

 const Our_value = ({title,info})=>{
    const [showInfo,setShowInfo] = useState(false)
    return (
    <section className='container_apropos'>
        <article>
            <header className='header_apropos'>
                <h4>{title}</h4>
                <img className="arrow" src="/images/arrow.png" alt="arrow" onClick={()=>setShowInfo(!showInfo)}/>
            </header>
            {
                showInfo && <p className='text_apropos'>{info}</p>
            }
            
        </article>
    </section>
    );
};
export default Our_value;