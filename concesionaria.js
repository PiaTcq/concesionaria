let autos = require("./autos")

const concesionaria = {
   persona: {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   },
   autos: autos,
   buscarAuto: function(patente){
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
     let autosParaLaVenta = autos.filter(auto => auto.vendido != true);
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
   puedeComprar: function(persona){
      return (persona.capacidadDePagoEnCuotas >= 20000 && persona.capacidadDePagoTotal >= 100000)
    },
   autosQuePuedeComprar: function(persona){
      let autosParaLaVenta = this.autosParaLaVenta();
      let autosQuePuedeComprar = autosParaLaVenta.filter(function(elemento){
         return this.puedeComprar == true
      });
      return autosQuePuedeComprar
   }
}
concesionaria.autosQuePuedeComprar()


