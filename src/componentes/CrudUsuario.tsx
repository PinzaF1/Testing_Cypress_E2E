import React, { useEffect, useState } from "react";

type Usuario = {
  id: number;
  name: string;
  email: string;
};

const CrudUsuario: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const traerDatos = async () => {
      try {
        const res = await fetch(
          "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Error al traer los datos");
        }

        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        console.error(err);
        setError("Hubo un problema");
      }
    };

    traerDatos();
  }, []);

  const guardar = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            Prefer: "return=representation",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario creado:", data);

        setName("");
        setEmail("");

        setUsuarios([...usuarios, data[0]]);
      } else {
        const errorData = await response.json();
        console.error("Error al crear usuario:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (error) {
    return <div role="alert">{error}</div>;
  }

  return (
    <div>
      <h1>Crear Usuarios</h1>

      <form onSubmit={guardar}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Crear</button>
      </form>

      <div>
        <h2>Lista de Usuarios</h2>
        <table aria-label="usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudUsuario;