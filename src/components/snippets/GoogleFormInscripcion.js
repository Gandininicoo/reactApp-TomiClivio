import Input from "./Input.js";
import "../../css/formulario.css"
function GoogleFormInscripcion() {
  return (
    <form className="formularioInscripcion" action="https://docs.google.com/forms/d/e/1FAIpQLSdbn2we9yyUYLCechsZaj3RRvF67PRhZvjy6Vo49NVY2ejnMg/formResponse">
      <label><h2>Formulario de Inscripcion</h2></label><br></br>
      <Input className="textForm" type="text" name="entry.2005620554" label="Nombre"/>
      <Input className="textForm" type="text" name="entry.887644241" label="Apellido"/>
      <Input className="textForm" type="text" name="entry.1045781291" label="Mail"/>
      <Input className="textForm" type="text" name="entry.1166974658" label="Telefono"/>
      <label><h2>Seleccione Disciplina</h2></label><br></br>
      <Input className="radiusInput" type="radio" name="entry.774901611" label="Triathlon" value="Triathlon"/>
      <Input className="radiusInput" type="radio" name="entry.774901611" label="Duathlon" value="Duathlon"/>
      <Input className="radiusInput" type="radio" name="entry.774901611" label="Ciclismo" value="Ciclismo"/>
      <Input className="radiusInput" type="radio" name="entry.774901611" label="Pedestrismo" value="Pedestrismo"/>
      <input className="buttonInput" type="submit" value="Enviar inscripcion" formTarget="_blank"/>
    </form>
  );
}
export default GoogleFormInscripcion;
