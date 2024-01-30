import './App.css';
import PersonajesDeZelda from './components/personajesDeZelda'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Personajes de The Legend Of Zelda</h1>
        <PersonajesDeZelda
          nombrePersonaje='Link'
          cargoPersonaje='Héroe de Hyrule'
          descripcionPersonaje='Es el nombre del protagonista de The Legend of Zelda. Es el Héroe Elegido por las Diosas, portador de la Espada Maestra y representante de la Trifuerza del Valor. Una vez iniciada su aventura, Link se convierte en un héroe legendario después de salvar a Hyrule de las fuerzas malignas ocasionadas por Ganon (también conocido como Ganondorf)'
          imagenPersonaje='Link' />

        <PersonajesDeZelda
          nombrePersonaje='Zelda'
          cargoPersonaje='Princesa de Hyrule'
          descripcionPersonaje='Es la princesa descendiente de la Familia Real de Hyrule. Zelda porta la Trifuerza de la Sabiduría, imbuida con la esencia de la Diosa Nayru que le permite discernir las decisiones más sabias, especialmente en situaciones relativas al bienestar de Hyrule. Junto al héroe elegido por las Diosas, Link, Zelda trabaja con él para detener las fuerzas malignas que perjudican a su reino. A menudo, su adversario principal son las distintas encarnaciones de Ganondorf, el portador de la Trifuerza del Poder.'
          imagenPersonaje='Zelda'  />

        <PersonajesDeZelda
          nombrePersonaje='Ganondorf'
          cargoPersonaje='Rey Demonio'
          descripcionPersonaje='Es un miembro de las Gerudo, como el miembro masculino que solo nace cada cien años, Ganondorf logra convertirse en el rey de las Gerudo o Guardián del Desierto, dependiendo del juego. Dotado de una poderosa magia, Ganondorf a menudo busca la omnipotente Trifuerza para concederle su deseo de conquistar Hyrule. Él es el responsable de la mayoría de los golpes de estado a los diferentes gobiernos de la Familia Real de Hyrule para tomar el trono.'
          imagenPersonaje='Ganondorf' />
      </div>
    </div>
  );
}

export default App;
