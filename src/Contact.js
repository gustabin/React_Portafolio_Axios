import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    axios.post("http://localhost/empleados/?insertar=1", {
      nombre: nombre,
      correo: correo,
    });

    console.log(nombre + " / / " + correo);
    setNombre("");
    setCorreo("");
  };

  return (
    <div className="contact">
      <div className="contact__title">
        <h1>Contact</h1>
      </div>
      <div className="contact__form">
        <form>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            name="nombre"
            placeholder="Nombre"
            type="text"
            required
          ></input>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            name="correo"
            placeholder="Correo"
            type="email"
            required
          ></input>
          <button onClick={sendMessage}>Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
