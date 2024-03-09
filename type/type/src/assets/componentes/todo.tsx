import React from "react";

type TodoStatus ="active" | "inactive" | "open" | "close" ;

interface TodoProps{
   todo:string; 
   status?:TodoStatus
}

export const Todo: React.FC<TodoProps> = ({todo, status}) => {
 const handleclick = (evt:React.MouseEvent) => {
    console.log(evt.type);
 }
 
 
    return(
        
        
    <>
        
        <i>{todo}</i>
        <h2>{status}</h2>
        <button onClick={handleclick}>Change text</button>

        <hr />
        
    </>
    )
};