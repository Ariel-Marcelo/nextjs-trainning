import React from "react";
import {useRouter } from "next/router";

// El folder tambien puede darme una ruta dinámica
// No puedo tener 2 rutas dinámicas en el mismo folder
const Profile = () =>{
    const {
      query : {pro, rat}
    } = useRouter();

    return <div> Hola soy {pro} y soy {rat} </div>
}

export default Profile;