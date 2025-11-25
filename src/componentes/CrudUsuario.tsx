import React, { useState } from "react";

const CrudUsuario:React.FC=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const guardar=async ()=>{
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apiKey:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:
                     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            },
            body:JSON.stringify({name,email})
        })
               }
    return (
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit={guardar}>
                <input type="text"  onChange={(e) => setName(e.target.value)}/>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
};

export default CrudUsuario;