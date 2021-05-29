let autos = require("./autos")
const concesionaria = {
   autos: autos,
   buscarAuto: function (patente){
      let auto = autos.find(elemento => elemento.patente == patente);
      if (auto == undefined){
         return null
      } else {
         return auto
      }
   },
   venderAuto: function(patente){
      this.buscarAuto(patente).vendido = true;
   },
   autosParaLaVenta: function(){
     let autosParaLaVenta = autos.filter(auto => auto.vendido == false);
     return autosParaLaVenta
    },
   autosNuevos: function(){
        let autosNuevos = this.autosParaLaVenta().filter(auto => auto.km < 100);
        return autosNuevos
    },
    listaDeVentas: function(){
        let vendidos = autos.filter(auto => auto.vendido == true);
        let listaDeVentas = vendidos.map(auto => auto.precio);
        return listaDeVentas;
    },
    totalDeVentas: function(){
        let totalDeVentas = this.listaDeVentas().reduce((parcialVentas, preciosAutos) => parcialVentas + preciosAutos, 0);
        return totalDeVentas;
    },
   puedeComprar: function (auto, persona){
      if(auto.precio < persona.capacidadDePagoTotal && (auto.precio/auto.cuotas) < persona.capacidadDePagoEnCuotas){
         console.log(true);
      }
   },
   autosQuePuedeComprar: function(persona) {
        const autosQuePuedeComprar = [];
        const autosParaLaVenta = this.autosParaLaVenta();
        for (let i = 0; i < autosParaLaVenta.length; i ++) {
            if (this.puedeComprar(autosParaLaVenta[i], persona)) {
                autosQuePuedeComprar.push(autosParaLaVenta[i]);
            }
        }
        console.log(autosQuePuedeComprar);
        }
}
concesionaria.autosQuePuedeComprar({
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   })