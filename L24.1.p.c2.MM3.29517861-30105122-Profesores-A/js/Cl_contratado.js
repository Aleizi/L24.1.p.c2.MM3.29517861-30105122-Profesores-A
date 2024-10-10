import Cl_profesor from "./Cl_profesor";

export default class Cl_contratado extends Cl_profesor {
    constructor(nom, bono, horas) {
        super(nom, bono);
        this.horas = horas;
    }

    ingresoProf() {
        return this.bono * this.horas;
    }
}