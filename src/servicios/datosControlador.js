function obtenerDatosLS (){
    return localStorage.getItem("Data");
};

function guardarDatosLS (datos){
    localStorage.setItem("Data", datos);
};

exports.obtenerDatosLS = obtenerDatosLS;
exports.guardarDatosLS = guardarDatosLS;
