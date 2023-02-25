<template>
    <div class="designPublicityContainer" >

        <div class="uperTitle" >
            <img  class="uperTitleLogo" src="@/assets/imagenes/DisenoPublicidad.png" alt="logo">
            <span class="uperTitleSpan" >
                Ofrecemos servicios de diseño publiciitario para piezas digitales y físicas, incluyendo volantes, pendones y tarjetas impresas con un ennfoque en la calidad y el impacto visual.
            </span>
        </div>
        <section>
            <div class="grilla" >
                <div class="grillaRow">
                    <div class="grillaCard">
                        <img 
                            src="@/assets/imagenes/desing/Flyer.png" 
                            alt=""
                        >
                    </div>
                    <div class="grillaCard">
                        <img 
                            src="@/assets/imagenes/desing/LogoCreate.png" 
                            alt=""
                        >
                    </div>
                    <div class="grillaCard">
                        <img 
                            src="@/assets/imagenes/desing/tarjetas.png" 
                            alt=""
                        >
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
    align-items: center;
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
    text-shadow: 1px 1px 2px rgb(255 255 255);
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
}
</style>