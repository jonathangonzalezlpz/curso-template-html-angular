//Sirve para decirle a typeScript oye que este objeto presenta estos campos
export interface InfoPagina {
    titulo?: string; //? puede ser que este presente o no
    secundario?: string;
    email?: string;
    nombre_corto?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    tumblr?: string;
    equipo_trabajo?: any[];
}