const fecha = new Date();
const fecha_hoy =fecha.toLocaleDateString();

const mi_nacimiento=new Date(1993,05,19);

const mayor=fecha_hoy > mi_nacimiento;

const dia = mi_nacimiento.getDate();
const mes = mi_nacimiento.getMonth();
const anyo= mi_nacimiento.getFullYear();

