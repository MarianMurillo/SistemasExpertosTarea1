import React from "react";
function AdivinaSexo() {
  return (
    <div className="page-heading">
      <form>
        <h1>Adivina Sexo</h1>
        <label>Promedio</label>
        <input class="form-input" type="text" name="promedio" ></input>
        <br></br>
        <br></br>
        <label>Estilo</label>
        <select name="estilo">
          <option value="Divergente">Divergente</option>
          <option value="Covergente">Covergente</option>
          <option value="Asimilador">Asimilador</option>
          <option value="Acomodador">Acomodador</option>
        </select>
        <br></br>
        <br></br>
        <label>Sexo</label>
        <select name="sexo">
          <option value="F">F</option>
          <option value="M">M</option>
        </select>
      </form>
    </div>
  );
}

export default AdivinaSexo;