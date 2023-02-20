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
        <img 
        class="footerHomeImg"
        src="../assets/imagenes/FooterRojo.jpg" 
        alt="footer"
        >

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
  width: 100%;
  background-color: red;
  height: calc( 173vh - 80% );
}

.footerHomeImg {
  width: 100%;
  height: 100%;
  box-shadow: 0px 122px 0px 69px rgba(29,29,28,1);
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
