
/* array donde cada valor es la cantidad de dias que pasaron hasta el inicio de cada mes,
   el [0] es solo para que arranque, el orden de meses desde [1] al [12] */
let diasHastaInicioDeMes=[0,1,32,60,91,121,152,182,213,244,274,305,335]; 



/* ListaDiasPorMes guardara en cada key el dia correspondiente al mes de
   1900, sera la referencia para todos los años */
class ListaDiasPorMes{
    constructor(mes){
        this.idMes=mes;
        this.diaSemana = { 
         
        }
    }
    dia(valorDia,diaSem){
        if (typeof valorDia === 'number') {
          this.diaSemana[diaSem] = valorDia;
        }
    }
        /* por ejemplo 01/02/1900 arranca en el dia 32 del año 1900,
           esto iria al array diasHastaInicioDeMes[2] --> 32mod7=4 
           y quedaria 4 como el dia de 01/02/1900, 4 lo tomamos
           como jueves siguiendo un orden lunes-domingo */
                
    asignacionDeKeysDias(){
        for(let i=0;i<6;i++){  // 6de7 keys
            this.dia((((diasHastaInicioDeMes[this.idMes]+i)%7)%7),i+1);
        }
    }
    asignacionUltimaKeyDia(){  // ultima key
        this.dia((((diasHastaInicioDeMes[this.idMes]+6)%7)%7),0);
    }
}
// arrayDeMeses --> array de objetos ListaDiasPorMes que conforman el orden de dias de 1900


/* primerDiaDelMesDeAnho da el valor del dia de la semana en que inicio el mes,
     en base al orden de cada mes en arrayDeMeses */
const primerDiaDelMesDeAnho = (anho,mes) =>{ 
    let anhoBase=anho-1900;
  if(mes<3){
      let dia = ((Math.ceil(anhoBase/4)-1)+anhoBase+1)% 7; 
     // console.log(arrayDeMeses[mes].diaSemana[dia]);
      if(arrayDeMeses[mes].diaSemana[dia]===0){ 
          contadorDomingos++;
      }
  }else{
      let dia1=((Math.floor(anhoBase/4))+anhoBase+1)% 7;
      //console.log(arrayDeMeses[mes].diaSemana[dia1]);

      if(arrayDeMeses[mes].diaSemana[dia1]===0){ 
          contadorDomingos++;
      }
  }    
}


const main = () =>{
   
    let contadorDomingos=0;
    
    // arrayDeMeses --> array de objetos ListaDiasPorMes que conforman el orden de dias de 1900
    let arrayDeMeses=[];
   
    for(let mes=1;mes<13;mes++){
        arrayDeMeses[mes]=new ListaDiasPorMes(mes);
        arrayDeMeses[mes].asignacionDeKeysDias();
        arrayDeMeses[mes].asignacionUltimaKeyDia();
    }
    let limiteMeses=13;
    let limiteXX=2001;
    for(let ahoInicial=1901;ahoInicial<limiteXX;ahoInicial++){
    for(let meses=1;meses<limiteMeses;meses++){
        primerDiaDelMesDeAnho(ahoInicial,meses);
    }
    
    console.log('¿Cuántos domingos cayeron el primer día del mes durante el siglo XX ?');
    console.log(contadorDomingos+' Domingos.');
    }
    
}

main();



