

let productos = [
    {id:'1',name:'bacha de baño',categoria:'BAÑO',price:' $ 10500',stock: "5" ,foto:'https://drive.google.com/uc?export=view&id=1GhCeULbkhdARs-pOy7o8VKMgvxR3bjSo&rl'},
    {id:'2',name:'cucheta',categoria:'HABITACION',price:' $ 9000',stock: "5" ,foto:'https://drive.google.com/uc?export=view&id=1BzPvkYEuOM5KVwZt9hYY1i1Tw8Ngq8M2&rl'},
    {id:'3',name:'juego de comedor',categoria:'COCINA',price:' $ 18000',stock: "5" ,foto:'https://drive.google.com/uc?export=view&id=1TSJl4asrKIdMRzFA4HE76Suce9uO9lTP&rl'},
    {id:'4',name:'mesada',categoria:'COCINA',price:' $ 37000',stock: "5" ,foto:'https://drive.google.com/uc?export=view&id=1lOwieyM4jp8yIkjLkNdW80C9BQTqvZFX&rl'},
    {id:'5',name:'placard',categoria:'HABITACION',price:' $ 35000',stock: "5" ,foto:'https://drive.google.com/uc?export=view&id=1cSmUKauoN4qAUwrZDOap3aVDgIqVicux&rl'}
]

export const gFetch = (id) => {
    return new Promise( (aceptando, rechazando) => {
        setTimeout(()=>{
            aceptando(id ? productos.find(prod => prod.id === id ) : productos)
        }, 1000)
    })
}