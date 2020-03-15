import React from 'react'; 
import Card from './card';

const CardList = ({robots}) =>{
    // const CardsArray = robots.map((user, i) =>{
    //     return (<Card 
    //         key = {robots[i].id} 
    //         id = {robots[i].id} 
    //         name = {robots[i].name} 
    //         email ={robots[i].email}/>
    //         );
    // });
    
    return (
        <div>
            {/* {CardsArray} */}
            {    // looping over robots object
                 robots.map((user, i) =>{
                    return (<Card 
                        key = {robots[i].id} 
                        id = {robots[i].id} 
                        name = {robots[i].name} 
                        email ={robots[i].email}/>
                        );
                })
            }
        </div>
    );
}
export default CardList;