

let productos = [
    {id:'1',name:'bacha de baño',categoria:'BAÑO',price:' $ 10500',stock: "5" ,foto:'../../../public/img/bacha_de_banio.jpeg'},
    {id:'2',name:'cucheta',categoria:'HABITACION',price:' $ 9000',stock: "5" ,foto:'../../../public/img/cucheta_2.jpeg'},
    {id:'3',name:'juego de comedor',categoria:'COCINA',price:' $ 18000',stock: "5" ,foto:'../../../public/img/juego_de_comedor.jpeg'},
    {id:'4',name:'mesada',categoria:'COCINA',price:' $ 37000',stock: "5" ,foto:'../../../public/img/mesada.jpeg'},
    {id:'5',name:'placard',categoria:'HABITACION',price:' $ 35000',stock: "5" ,foto:'../../../public/img/placard3.jpeg'}
]

export const gFetch = (id) => {
    return new Promise( (aceptando, rechazando) => {
        setTimeout(()=>{
            aceptando(id ? productos.find(prod => prod.id === id ) : productos)
        }, 1000)
    })
}