import React,{useState} from 'react'
import ReactStars from 'react-stars';
 const Filter = (props,setRate,newRate) => {
   const[rating,setRating] = useState(1)
   const onStarClick = (newRating)=> {
     setRate({ newRating });
   }
   
    return (
        <div className="col col-sm-4">
          <input className="form-control" 
          value={props.value}
          onChange = {(event)=>props.setSearchValue(event.target.value)}
          placeholder="Type to search..."></input>  
        <ReactStars
          count={5}
          size={24}
          color2={'#ffd700'}
          value={newRate}
          onStarClick={onStarClick}
        />
        </div>
    )
}
export default Filter;
