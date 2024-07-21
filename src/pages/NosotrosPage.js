
import '../styles/nosotros.css';

const NosotrosPage = (props) => {

    return(
        <main className="holder">

        <section className="historia">
            <h2>Historia</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui deleniti alias accusantium beatae, ducimus
                ut nihil, tenetur odio et molestias ea enim voluptatum esse? Eligendi dolore error voluptas aperiam
                nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi, vero reiciendis tenetur
                suscipit error amet unde nemo nam, sequi repellat, voluptates ea. Ex suscipit eos dignissimos, excepturi
                inventore nam?</p>
        </section>
        <section className="staff">
            <h2>Staff</h2>
            
            <div className="personas">
                
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" alt="Juan Gómez"/>
                    <h5>Juan Gómez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, temporibus? Dolor enim excepturi
                        animi, optio debitis, iure nihil, accusamus provident illum voluptas eveniet praesentium
                        voluptates facere! Necessitatibus perferendis pariatur delectus?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros2.jpg" alt="Celina"/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, temporibus? Dolor enim excepturi
                        animi,  Necessitatibus perferendis pariatur delectus?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros3.jpg" alt="Juan Gómez"/>
                    <h5>Roberto Zavala</h5>
                    <h6>Gerente de Sistemas</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, temporibus? Dolor enim excepturi
                        animi, optio debitis, iure nihil, accusamus provident illum voluptas eveniet praesentium
                        voluptates facere! Necessitatibus perferendis pariatur delectus?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros4.jpg" alt="Juan Gómez"/>
                    <h5>Sandra Mastroloi</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, temporibus? Dolor enim excepturi
                        animi, optio debitis, iure nihil, accusamus provident illum voluptas eveniet praesentium
                        voluptates facere! Necessitatibus perferendis pariatur delectus?</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros5.jpg" alt="Juan Gómez"/>
                    <h5>Luciano Gómez</h5>
                    <h6>Gerente de Logística</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, temporibus? Dolor enim excepturi
                        animi, optio debitis, iure nihil, accusamus provident illum voluptas eveniet praesentium
                        voluptates facere! Necessitatibus perferendis pariatur delectus?</p>
                </div>
            </div>
           
        </section>


    </main>

    )
    }
    
    export default NosotrosPage;