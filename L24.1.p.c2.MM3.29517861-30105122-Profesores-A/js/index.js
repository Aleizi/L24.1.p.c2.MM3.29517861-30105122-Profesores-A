import Cl_profesor from "./Cl_profesor";
import Cl_fijo from "./Cl_fijo";
import Cl_contratado from "./Cl_contratado";

export default class Cl_main {
    constructor() {
        let uni = new uni();
        let fijo = new Cl_fijo("Carlos", 25, 100);
        let fijo2 = new Cl_fijo("Carolina", 40, 90);

        uni.procesar(fijo)
        uni.procesar(fijo2)

        let salida=document.getElementById("salida")
        salida.innerHTML = `nombre del profesor fijo: ${fijo.nombre}<br>
        monto del bono: ${fijo.bono}<br>
        monto del sueldo: ${fijo.sueldo}<br>
        Ingreso total del profesor ${fijo.calcularIngresoTotalF()}:<br>
        nombre del profesor fijo: ${fijo2.nombre()}<br>
        monto del bono: ${fijo2.getbono()}<br>
        monto del sueldo: ${fijo2.getsueldo()}<br>
        Ingreso total del profesor: ${fijo2.calcularIngresoTotalF()}`
    }
}