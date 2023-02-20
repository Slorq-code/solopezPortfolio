<template>
  <div class="home">
    <div class="contentHome">
      <div class="header1">
      </div>
      <div class="contentHomeContent" >
      </div>
      <div class="initialFooter">
      </div>
    </div>
    <div class="panelOption">
      <div class="panelOptionContent">
          <div class="DiseñoPublicidad">  
              <img src="@/assets/imagenes/DisenoPublicidad.png" alt="DiseñoPublicidad" class="diseñoPublicidadImg">
              <img  class="DiseñoPublicidadImage" src="../assets/imagenes/PublicidadCuadro.png" alt="box">
          </div>
          <div class="RedesSociales">  
              <img src="../assets/imagenes/RedesCociales.png" alt="RedesCociales"  class="redesCocialesImg">
              <img class="RedesSocialesImage" src="../assets/imagenes/RedesCuadro.png" alt="box">
          </div> 
          
      </div>
      <div class="footerHome">
        <div class="footerHomeBox1" >
            <div class="footerHomeBox1Title">
              <span>¡Contactame!</span>
              <div class="footerHomeBoxSend" >
                <div class="footerHomeBoxSendInput" >
                  <span> Nombre completo</span>
                  <input type="text">
                </div>
                <div class="footerHomeBoxSendInput" >
                  <span> Producto de interes</span>
                  <input type="text">
                </div>
                <button>enviar</button>
              </div>
            </div>
            <div class="footerHomeBox1Options">

            </div>
        </div>
        <div class="footerHomeBox2" >

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style>
.contentHome {
  height: 100vh;
  width: 100%;
}
.header1 {
  height: 12%;
  width: 100%;
  background-color: #820a18;
  background-image: url("../assets/imagenes/Recurso11.png");
  background-repeat: no-repeat;
  background-size: 4.5%;
  background-position-x: 3%;
  background-position-y: 50%;

}
.contentHomeContent {
  width: 100%;
  height: 76%;
  background-image: url("../assets/imagenes/BannerPrincipal.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.initialFooter {
  height: 12%;
  width: 100%;
  background-color: #820a18;
}
.panelOption{
  width: 100%;
  height: 100vh;
  background-color: green;
}

.panelOptionContent{
  width: 100%;
  height: 80%;
  background-image: url("../assets/imagenes/FondoMenu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
}
.RedesSociales,
.DiseñoPublicidad {
  width: 680px;
  height: 500px;
  position: relative;
}
.RedesSocialesImage,
.DiseñoPublicidadImage {
  height: 100%;
  width: auto;
}
.redesCocialesImg,
.diseñoPublicidadImg {
  position: absolute;
  width: 33%;
  height: auto;
  top: 24%;
  right: 18%;
}
.redesCocialesImg:hover,
.diseñoPublicidadImg:hover {
  transition: 0.5s ease-out;
  text-shadow: 0px 3px 6px #00000029;
  transform: scale(1.2);
  box-shadow: 1px solid black;
} 
.footerHome {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("../assets/imagenes/FooterRojo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 72%;
}
.footerHomeImge {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.footerHomeBox1,
.footerHomeBox2 {
  width: 100%;
  height: 80px;
  z-index: 9;
}
.footerHomeBox1{
  height: 76%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerHomeBox2{
  height: 24%;
}
.footerHomeBoxSend {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footerHomeBoxSendInput{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 999px) {
  .RedesSociales,
  .DiseñoPublicidad {
    width: 353px;
    height: 260px;
    position: relative;
  }
  



}

@media only screen and (min-width: 1000px) and (max-width: 1500px) {
  .RedesSociales,
  .DiseñoPublicidad {
    width: 442px;
    height: 325px;
    position: relative;
  }
}


</style>
