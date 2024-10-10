import Cl_profesor from "./Cl_profesor";

export default class Cl_fijo extends Cl_profesor {
    constructor(nom, bono, sueldo) {
        super(nom, bono);
        this.sueldo = sueldo;
    }

    ingresoProf() {
        return this.sueldo + this.bono;
    }
}
