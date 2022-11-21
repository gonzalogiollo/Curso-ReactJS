export const products = [
    {
      
      title: 'remera 1',
      price: 2000,
      stock: 10,
      category: 'remeras',
      img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667228942/remera1_fkwrlr.jpg'
    },

    {
      
      title: ' remera 2',
      price: 2500,
      stock: 10,
      category: 'remeras',
      img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667228982/remera2_tqryyv.jpg'
    },

    {
      
      title: ' remera 3',
      price: 2500,
      stock: 10,
      category: 'remeras',
      img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667228992/remera3_zhtl7h.png'
    },

    {
     
      title: ' remera 4',
      price: 1800,
      stock: 10,
      category: 'remeras',
      img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667229011/remera5_pczrh1.jpg'
    },

    {
      
      title: ' remera 5',
      price: 1500,
      stock: 10,
      category: 'remeras',
      img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667229002/remera4_oynrb4.jpg'
    },


    {

    
    title: 'Longboard',
    price: 70000,
    stock: 5,
    category: 'surfBoard',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419144/surfboard2_igwryn.jpg'
    },

  {
    
    title: 'funboard',
    price: 80000,
    stock: 5,
    category: 'surfBoard',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/surfboard_m9ebga.jpg'
  },

  {
    
    title: 'shortboard',
    price: 90000,
    stock: 5,
    category: 'surfBoard',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/surfboard3_ie8trd.jpg'
  },

    


  { 
    title: 'billetera cadena',
    price: 800,
    stock: 10,
    category: 'billeteras',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/billetera1_o4utyj.jpg'
  },

  {
    
    title: 'billetera ',
    price: 500,
    stock: 10,
    category: 'billeteras',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/billetera2_xaf1xm.jpg'
  },

  {
    
    title: 'billetera amarilla',
    price: 650,
    stock: 10,
    category: 'billeteras',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/billetera3_jwbhlb.jpg'
  },

    

  
  { 
    title: 'bermuda playa',
    price: 4000,
    stock: 8,
    category: 'bermudas',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/bermuda_ky1oeg.jpg'
  },

  {
    
    title: 'bermuda jean oscuro',
    price: 3500,
    stock: 8,
    category: 'bermudas',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419142/bermuda3_r4sk7w.jpg'
  },

  {
    
    title: ' bermuda jean clara ',
    price: 4500,
    stock: 10,
    category: 'bermudas',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419142/bermuda2_bnu4aw.webp'
  },

    

   
  { 
    title: 'gorra blanca',
    price: 900,
    stock: 10,
    category: 'caps',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419143/cap_lymzi9.webp'
  },

  {
    
    title: 'gorra azul/blanco',
    price: 900,
    stock: 10,
    category: 'caps',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419144/cap3_ulqgj1.jpg'
  },

  {
   
    title: 'gorra gris',
    price: 900,
    stock: 10,
    category: 'caps',
    img: 'https://res.cloudinary.com/dklrdfegw/image/upload/v1667419144/cap2_ihegd2.jpg'
  },

]


// export const getProducts = (categoryName) =>{
//   return new Promise ((res, rej)=> {
//     const prodFiltrados = products.filter(
//       (prod) => prod.category === categoryName
//     );
//     const ref = categoryName ? prodFiltrados : products;
//     setTimeout(()=> {res(ref);
//     }, 500);
//   })
// }