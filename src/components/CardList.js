import React from 'react';
import Card from './Card';

//each component has to have a unique key prop so react knows which one is removed 
//thus minimizing amount of work done to the DOM

const CardList = ({robots}) =>{
    return (
        <div>
            {robots.map((user, i) => {
                return <Card key={i}
                             id={robots[i].id} 
                             name={robots[i].name} 
                             email={robots[i].email}
                             />
    })}
        </div>  
    );
}
export default CardList;