

import { Rating } from "./Rating";

export function Prospectus({ location,title,tags,host,rating,index,picture}) {
  
  return (
    <div className="container_prospectus">
      <div className="left">
        <h2 className="title_appart">{title}</h2>
        <h4 className="location">{location}</h4>
        <div className="tags">
          {tags.map((tag,index)=>{
            return(
              <div key={index}>
                <p className="single_tag">{tag}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <div className="name_photo">
          <p className="pros_name">{host.name}</p>
          <img src={host.picture} alt="photography" className="circle"></img>
        </div>
        <div className="notes">
            <Rating key={index} rating={rating}></Rating>
        </div>
      </div>
    </div>
  );
  
}
