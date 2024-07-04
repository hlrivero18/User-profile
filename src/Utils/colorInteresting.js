// con esta herramienta le asigno un color por cada interes recibido por parametro para que sea inyectado en el componente
export function colorInteresting(interesting) {
    
   if(interesting === 'SalirACaminar') return '#365E32'
   if(interesting === 'Correr') return '#b97fc9'
   if(interesting === 'Aventuras') return '#A0937D'
   if(interesting === 'Amigos') return '#fd7d24'
   if(interesting === 'Humanos') return '#a74806'
   
   return 'white'
}




