const {io} =require('../index');
//Mensajes de Sockets
io.on("connection", (client) => {
    console.log("Cliente conectado");
  
    client.on("event", (data) => {
      /* … */
    });
    client.on("disconnect", () => {
      console.log("Cliente Desconectado");
    });
  
    client.on('mensaje',(payload)=>{
      console.log('Mensajeeee!!!! ',payload.nombre)
  
      io.emit('mensaje',{admin:'Nuevo mensaje'});
    });
  });