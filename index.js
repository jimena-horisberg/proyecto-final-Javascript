
//CLASE DE PROFESIONALES

class Profesional{
    constructor (especialidad, nombre, atencion){
        this.especialidad = especialidad;
        this.nombre = nombre;
        this.atencion = atencion;
    }
    }
    
    //ARRAYS A LOS QUE LES ASIGNO VALORES
    
    const especialidades = ["ginecología","clínica","gastroenterología","oftalmología","neumonología","cardiología"];
    const nombres = ["María Pérez", "Diego Ramos", "Juan López", "Cecilia Rodríguez", "David González","Julieta Echague"];
    const atencion = ["lunes", "martes","miércoles","jueves","viernes","sábado"];
    
    //DEFINO OTRO ARRAY VACIO DE PROFESIONALES
    
    let Profesionales = []
    
    //GENERO UN FOR PARA REPETIR CODIGO (UTILIZO METODO PUSH PARA AGREGAR OBJETOS CON SUS ATRIBUTOS ASIGNADOS)
    
    for (let i= 0; i <nombres.length; i ++){
    
        Profesionales.push(new Profesional(especialidades[i], nombres[i], atencion[i]));
    }
    
    console.log (Profesionales);
    
    
    //UTILIZO METODO INCLUDE PARA VERIFICAR EXISTENCIA DEL PROFESIONAL
    
    console.log (especialidades.includes(`ginecología`,`clínica`));
    
    let mensaje = prompt ("Ingrese especialidad deseada");
    for (let i = 0; Profesionales.length; i ++){
        if (mensaje === Profesionales[i].especialidad){
            console.log (Profesionales[i]);
        } 
    }
    
    