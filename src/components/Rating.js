
export function Rating({rating,index}){
  
        const max_stars = 5;
        const empty = [];

        const full_star = <img src="/images/star.svg" alt="full"></img>
        const empty_star = <img src="/images/starempty.svg" alt="empty"></img>
        for( let i =0; i<max_stars;i++){
          i < rating ? empty.push(full_star):empty.push(empty_star)
        }
        return(
        <div className="container_ratings">
                {empty.map((star,index)=>(
                  <div className="stars" key={index}>
                    <p>{star}</p>
                  </div>
                ))}
        </div>
        )
}
        
/*<div className="notes">
        <article className="tags">
          {tags.map((tag)=>{
            return(
              <div key={tag.id}>
                <p className="single_tag">{tag}</p>
              </div>
            )
          })}
        </article>
      </div>*/
        /*
        return(
                <div className="container_rating">
                        <p>{rating}</p>
                        
                        </div>
        )*/
        /*const licznik = [1,2,3,4,5]
        {licznik.map((index)=>{
                return(
                        
                  rating >= index ?(
                        <p key={index} className="fas fa-star full star">hello</p>
                  ):(
                        <p key={index} className="fas fa-star empty star">bye</p>
                  )
                  
                )
        })}
    */




