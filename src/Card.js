import User from './User'

const Card = ({users}) => {

    return <div className="cardContainer">
             { users.map((user) => {
                 return (
                   <User user={user}/>
                 );
               })}
           </div>
 }

 export default Card;