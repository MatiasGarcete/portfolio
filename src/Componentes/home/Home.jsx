import React from "react";
import '../home/home.css'

function Home(){
    return(
        <>
        <section class="Proyectos">
            <div class="divProyectos">
                <div class="imgcontainer">
                    <img class="fotoPerfil" src="https://media.discordapp.net/attachments/1159225647479132281/1159225679561359390/fotoperfil_final2.png?ex=6530400b&is=651dcb0b&hm=08858fe953b91a0b9dcdb6406168d4f2cf93e8fc99b9a0ac48c0cbbad216a171&=&width=676&height=676" alt="Foto de Perfil" />
                </div>
                <div class="titular">
                    <h1>Matias Miguel Garcete Vera</h1>
                    <h2>Desarrollador Web Full Stack</h2>
                    <div class="btnDescv">
                        <a class="descargar" href="">Descargar CV</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;