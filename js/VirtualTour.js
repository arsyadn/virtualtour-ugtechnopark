let panoHTML = document.querySelector(".pano-lens");
let sourceImage = 'test.jpg';

// let panoramaGate = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
// let panoramaTugu = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );

let panoramaGate = new PANOLENS.ImagePanorama('./assets/images/img1_gate.jpg');
let panoramaTugu = new PANOLENS.ImagePanorama('./assets/images/img2_tugu.jpg');
let panoramaFrontPark = new PANOLENS.ImagePanorama('./assets/images/img3_frontparksiste.jpg');
// Taman Siste
let panoramaInsideSiste = new PANOLENS.ImagePanorama('./assets/images/img3a_insideparksiste.jpg');
let panoramaSaungSiste = new PANOLENS.ImagePanorama('./assets/images/img3aa_saungsiste.jpg');
let panoramaSaungMerahSiste = new PANOLENS.ImagePanorama('./assets/images/img3aa_saungmerahsiste.jpg');
// Taman Hias
let panoramaFrontHias = new PANOLENS.ImagePanorama('./assets/images/img4_fronthias.jpg');
let panoramaInsideHias = new PANOLENS.ImagePanorama('./assets/images/img4a_insidehias.jpg');
// Taman Bunga
let panoramaFlowersPark = new PANOLENS.ImagePanorama('./assets/images/img5_tamanbunga.jpg');
// Tube House
let panoramaTubeHouse = new PANOLENS.ImagePanorama('./assets/images/img6_tabunghouse.jpg');
// Rumah Kebun
let panoramaKebunHouse = new PANOLENS.ImagePanorama('./assets/images/img7_kebunhouse.jpg');
// Masjid
let panoramaMosque = new PANOLENS.ImagePanorama('./assets/images/img8_masjid.jpg');

// 1.  Gate (panoramaGate)
let infospotGate = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotGate.position.set( -8000, 500, 0 );
infospotGate.addHoverText( "Tugu UG Techno Park" );
infospotGate.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

// 2. Tugu (panoramaTugu)
let infospotTugu = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTugu.position.set( 10000, 500, 5000 );
infospotTugu.addHoverText( "Kembali ke Gerbang Utama" );
infospotTugu.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaGate );
} );

let infospotTugu2 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTugu2.position.set( 100, 500, -5000 );
infospotTugu2.addHoverText( "Lanjut Taman Siste" );
infospotTugu2.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

// 3. Front Taman Siste (panoramaFrontPark)
let infospotFrontPark = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontPark.position.set( 0, -500, 5000 );
infospotFrontPark.addHoverText( "Kembali ke Tugu" );
infospotFrontPark.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

let infospotFrontParkB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontParkB.position.set( -500, 500, -5000 );
infospotFrontParkB.addHoverText( "Masuk Taman Siste" );
infospotFrontParkB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaInsideSiste );
} );

let infospotFrontParkC = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontParkC.position.set( 5000, 500, 5000 );
infospotFrontParkC.addHoverText( "Lanjut Taman Hias" );
infospotFrontParkC.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontHias );
} );

// 3a. Inside Taman Siste (panoramaInsideSiste)
let infospotInsideSiste = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotInsideSiste.position.set( -3000, -500, 5000 );
infospotInsideSiste.addHoverText( "Kembali ke Depan Taman Siste" );
infospotInsideSiste.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

let infospotInsideSisteB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotInsideSisteB.position.set( 8000, -500, 5000 );
infospotInsideSisteB.addHoverText( "Ke Saung" );
infospotInsideSisteB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaSaungSiste );
} );

let infospotInsideSisteC = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotInsideSisteC.position.set( -3000, -500, -5000 );
infospotInsideSisteC.addHoverText( "Ke Saung Merah" );
infospotInsideSisteC.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaSaungMerahSiste );
} );

// // 3aa. Saung (panoramaSaungSiste)
let infospotSaungSiste = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotSaungSiste.position.set( -5000, -500, -5000 );
infospotSaungSiste.addHoverText( "Kembali" );
infospotSaungSiste.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaInsideSiste );
} );

// // 3ab. Saung Merah (panoramaSaungMerahSiste)
let infospotSaungMerahSiste = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotSaungMerahSiste.position.set( -5000, -500, 5000 );
infospotSaungMerahSiste.addHoverText( "Kembali" );
infospotSaungMerahSiste.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaInsideSiste );
} );

// 4. Taman Hias (panoramaFrontHias)
let infospotFrontHias = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontHias.position.set( -3000, -500, 5000 );
infospotFrontHias.addHoverText( "Kembali ke Sebelumnya" );
infospotFrontHias.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

let infospotFrontHiasB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontHiasB.position.set( 3000, -500, 5000 );
infospotFrontHiasB.addHoverText( "Lanjut Tour" );
infospotFrontHiasB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFlowersPark );
} );

let infospotFrontHiasC = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontHiasC.position.set( -3000, -500, -5000 );
infospotFrontHiasC.addHoverText( "Masuk ke Taman Hias" );
infospotFrontHiasC.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaInsideHias );
} );

// 4a. Inside Taman Hias (panoramaInsideHias)
let infospotInsideHias = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotInsideHias.position.set( -3000, -500, 5000 );
infospotInsideHias.addHoverText( "Kembali" );
infospotInsideHias.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontHias );
} );

// 5. Taman Bunga (panoramaFlowersPark)
let infospotFlowersPark = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFlowersPark.position.set( -3000, -500, -5000 );
infospotFlowersPark.addHoverText( "Kembali" );
infospotFlowersPark.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontHias );
} );

let infospotFlowersParkB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFlowersParkB.position.set( -3000, -500, 5000 );
infospotFlowersParkB.addHoverText( "Lanjut Tour" );
infospotFlowersParkB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTubeHouse );
} );

// 6. Tube House (panoramaTubeHouse)
let infospotTubeHouse = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTubeHouse.position.set( -3000, -500, -5000 );
infospotTubeHouse.addHoverText( "Kembali" );
infospotTubeHouse.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFlowersPark );
} );

let infospotTubeHouseB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTubeHouseB.position.set( 3000, -500, 5000 );
infospotTubeHouseB.addHoverText( "Lanjut Tour Rumah Kebun" );
infospotTubeHouseB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

// 7. Kebun House (panoramaKebunHouse)
let infospotKebunHouse = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotKebunHouse.position.set( -3000, -500, -5000 );
infospotKebunHouse.addHoverText( "Kembali Tube House" );
infospotKebunHouse.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTubeHouse );
} );

let infospotKebunHouseB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotKebunHouseB.position.set( -3000, -500, 5000 );
infospotKebunHouseB.addHoverText( "Lanjut Tour Masjid" );
infospotKebunHouseB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaMosque );
} );

// 8. Mosque (panoramaMosque)
let infospotMosque = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotMosque.position.set( -3000, -500, -5000 );
infospotMosque.addHoverText( "Kembali Ke Rumah Kebun" );
infospotMosque.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaKebunHouse );
} );

let infospotMosqueB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotMosqueB.position.set( 3000, -500, 5000 );
infospotMosqueB.addHoverText( "Kembali Ke Gerbang Utama" );
infospotMosqueB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaGate );
} );




panoramaGate.add(infospotGate);
panoramaTugu.add(infospotTugu, infospotTugu2);
panoramaFrontPark.add(infospotFrontPark, infospotFrontParkB, infospotFrontParkC);
// Taman Siste
panoramaInsideSiste.add(infospotInsideSiste, infospotInsideSisteB, infospotInsideSisteC);
panoramaSaungSiste.add(infospotSaungSiste);
panoramaSaungMerahSiste.add(infospotSaungMerahSiste);
// Taman Hias
panoramaFrontHias.add(infospotFrontHias, infospotFrontHiasB, infospotFrontHiasC);
panoramaInsideHias.add(infospotInsideHias);
// Taman Bunga
panoramaFlowersPark.add(infospotFlowersPark, infospotFlowersParkB);
// Tube House
panoramaTubeHouse.add(infospotTubeHouse, infospotTubeHouseB);
// Kebun House
panoramaKebunHouse.add(infospotKebunHouse, infospotKebunHouseB);
// Mosque
panoramaMosque.add(infospotMosque, infospotMosqueB);


let viewer = new PANOLENS.Viewer({ 
  container: panoHTML
 });
 viewer.add(
  panoramaGate, 
  panoramaTugu, 
  panoramaFrontPark, 
  panoramaInsideSiste, 
  panoramaSaungSiste, 
  panoramaSaungMerahSiste, 
  panoramaFrontHias, 
  panoramaInsideHias, 
  panoramaFlowersPark,
  panoramaTubeHouse,
  panoramaKebunHouse,
  panoramaMosque);

 viewer.addUpdateCallback(function(){
}); 