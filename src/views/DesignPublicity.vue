<template>
    <div class="designPublicityContainer" >

        <div class="uperTitle" >
            <img  class="uperTitleLogo" src="@/assets/imagenes/DisenoPublicidad.png" alt="logo">
            <span class="uperTitleSpan" >
                Ofrecemos servicios de diseño publiciitario para piezas digitales y físicas, incluyendo volantes, pendones y tarjetas impresas con un ennfoque en la calidad y el impacto visual.
            </span>
        </div>
        <section class="section" >
            <div class="grilla" >
                <div class="grillaRow">
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/Flyer.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAzul.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            $35.000
                        </span>
                    </div>
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/LogoCreate.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAmarillo.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            $85.000
                        </span>
                    </div>
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/tarjetas.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAzul.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            VER MÁS
                        </span>
                    </div>
                </div>
                <div class="grillaRow">
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/volantes.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAzul.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            VER MÁS
                        </span>
                    </div>
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/Carnets.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAmarillo.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            $9.000 C/U
                        </span>
                    </div>
                    <div class="grillaCard">
                        <img 
                            class="grillaCardImg"
                            src="@/assets/imagenes/desing/Afiches.png" 
                            alt="img"
                        >
                        <img 
                            class="grillaCardBottom"
                            src="@/assets/imagenes/desing/botonAzul.png" 
                            alt="img"
                        >
                        <span class="grillaCardSpan" >
                            $15.000
                        </span>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name:"DesignPublicity"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Golos+Text&display=swap');

.designPublicityContainer {
    width: 100%;
    height: 200vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url("@/assets/imagenes/FondoDeDiseno.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.uperTitle {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    height: 6%;
    width: 100%;
    margin: 2% 0 0 0;
}

.uperTitleLogo {
    width: auto;
    height: 100%;
    margin: 0 0% 0 5%;
}
.uperTitleSpan {
    font-family: 'Golos Text', sans-serif;
    width: 56%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    margin: 0 10% 0 0;
    text-shadow: 2px 14px 15px rgb(255 255 255);
}
.section {
    width: 100%;
    margin: 10% 0 0 0;
}
.grilla {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.grillaRow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.grillaCard{
    height: 500px;
    margin: 4% 1%;
    width: min-content;
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.grillaCardImg {
    height: 100%;
}
.grillaCardBottom {
    width: 100%;
    height: auto;
}
.grillaCardSpan {
    position: absolute;
    bottom: -10px;
    font-family: 'Golos Text', sans-serif;
    font-size: 20px;
    color: white;
    cursor: pointer;
}
.grillaCardSpan:hover {
    transform: scale(1.25);
    transition: .1s ease-out;
}

@media only screen and (max-width: 999px) {
    .grillaCard {
    height: 260px;
    position: relative;
    }
}

@media only screen and (min-width: 1000px) and (max-width: 1500px) {
    .grillaCard {
    height: 325px;
    position: relative;
    }
    .uperTitleSpan {
        font-size: 18px;
    }
}
</style>