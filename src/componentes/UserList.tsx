import React, { useState} from "react";

const UsertList: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const guardar=()=>{
        fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                apiKey:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorzation:
                     "Barrer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            },
            body:JSON.stringify({name,email})
        })
    }

    return (
        <div>
            <h1>
                <form>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={guardar}>Crear Usuario</button>
                </form>
            </h1>
        </div>
    );
};
 
export default UsertList;