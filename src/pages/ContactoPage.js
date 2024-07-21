import '../styles/contacto.css';

const ContactoPage = (props) => {

    return (
        <main className="holder contacto">

            <div>
                <h2>Completa el formulario</h2>
                <form action="" class="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Teléfono</label>
                        <input type="text" />
                    </p>
                    <p>
                        <label for="">Comentario</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" class="prueba" value="Enviar" />
                    </p>
                </form>

            </div>

            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También pueden contactarse a través de estos medios:</p>
                <ul>
                    <li><a href=""><i class="fa-solid fa-tty"></i></a>   +51 9 0342 5101076</li>
                    <li><a href=""><i class="fa-brands fa-facebook"></i></a>  https://www.facebook.com/transporte.com</li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a>  https://www.instagram.com/transporte/</li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a>  https://x.com/transporte</li>
                    <li><a href=""><i class="fa-solid fa-envelope"></i></a>  transportes_X@gmail.com</li>
                    <li><a href=""><i class="fa-solid fa-location-dot"></i></a>  San Martín 1466 - Santa Fe</li>
                </ul>
                <div className="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.738113856049!2d-60.67965812682639!3d-31.613635048710375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9f89d965a95%3A0xe75d07537517e4eb!2sAntonia%20Godoy%206384%2C%20S3004%20IWJ%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1721568137258!5m2!1ses!2sar" style={{border:0}}></iframe>
                </div>
            </div>
        </main>
    )
}

export default ContactoPage;