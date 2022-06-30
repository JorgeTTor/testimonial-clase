
import './App.css';
import Testimony from './componentes/Testimonies.js';

function App() {
  return (
    <div className="App">
      <div className="main-container">
      <h1>Esto es lo que dicen nuestros alumnos de FreeCodeCamp:</h1>
      <Testimony
      name='Jorge Torres'
      country='México'
      image = 'jorge'
      job = 'Ingeniero de Software'
      company = 'GBM Investments '
      testimony= 'It is frightening changing careers, I was for months, piling up information, links and different platforms to learn coding, FreeCodecamp gave me the tools to build up my coding skills, and being clear about what I needed to do to get the job done and practice ' />
      
      <Testimony
      name='Susana Torres'
      country= 'Ecuador'
      image='christina'
      job='Software Engineer'
      company='MasterClass.com'
      testimony='Empecé en mis tiempos libres a estudiar en FreeCodeCamp, ya que estuve trabajando en Gobierno de mi país. Estuve Batallando para entender conceptos de JavaScript, pero FreeCodeCamp, me ayudo a absorber más clara y fácilmente la información, construir mis habilidades y sentirme más segura a aplicar a empleos' />
      <Testimony 
      name='Brandy Carlisle'
      country = 'Canada'
      image = 'brandy'
      job = 'Software Engineer'
      company = 'CodeCademy'
      testimony = 'I was struggling to get out of a crap job before, and My only motivation was coming home to learn at FreeCodeCamp and build up my coding skills'
      />
      
     </div>
    </div>
  );
}

export default App;
