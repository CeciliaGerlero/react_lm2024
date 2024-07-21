import '../styles/home.css';


const HomePage = (props) => {

    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion" /> 
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Nuestra empresa se dedica al transporte de mercadería por toda América. Llagamos a cada rincón
                        elegido por el cliente, asegurándonos que todo arribe en el tiempo y la forma esperada.</p>
                    <p>Nos caracteriza la responsabilidad y cumplimiento de nuestras tareas, además del compromiso de cada
                        uno
                        de los integrantes de esta gran compañia.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita"> Simplemente excelente</span>
                        <span className="autor"> Juan Gomez de zapatos.com</span>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default HomePage;