import React , { createContext , useState } from 'react';

const Context = createContext();

function AddPublicContext({ children }) {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [photo,setPhoto] = useState('');
    const [disponible,setDisponible] = useState('');

    return (
        <Context.Provider value={{ 
            title , setTitle ,
            description , setDescription , 
            price , setPrice ,
            photo , setPhoto , 
            disponible , setDisponible
        }}>
            {children}        
        </Context.Provider>
    )
}

export  { AddPublicContext , Context }