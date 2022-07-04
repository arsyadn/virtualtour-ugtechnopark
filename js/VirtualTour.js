let panoHTML = document.querySelector(".pano-lens");
let sourceImage = 'test.jpg';

// let panoramaGate = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
// let panoramaTugu = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );
let panoramaGate = new PANOLENS.ImagePanorama('./assets/images/img1_gate.jpg');
let panoramaTugu = new PANOLENS.ImagePanorama('./assets/images/img2_tugu.jpg');
let panoramaFrontPark = new PANOLENS.ImagePanorama('./assets/images/img3_frontparksiste.jpg');
let panoramaSistePark = new PANOLENS.ImagePanorama('./assets/images/img3a_tamansiste.jpg');
let panoramaInsideSiste = new PANOLENS.ImagePanorama('./assets/images/img3aa_insidetamansiste.jpg');

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
infospotTugu.addHoverText( "Back to Gate" );
infospotTugu.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaGate );
} );

let infospotTugu2 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTugu2.position.set( 100, 500, -5000 );
infospotTugu2.addHoverText( "Next Taman Siste" );
infospotTugu2.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

// 3. Front Taman Siste (panoramaFrontPark)
let infospotFrontPark = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontPark.position.set( -2000, 500, 5000 );
infospotFrontPark.addHoverText( "Back to Tugu" );
infospotFrontPark.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

let infospotFrontParkB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontParkB.position.set( 2000, 500, 5000 );
infospotFrontParkB.addHoverText( "Taman Siste" );
infospotFrontParkB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaInsideSiste );
} );

let infospotFrontParkC = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontParkC.position.set( 0, 500, 5000 );
infospotFrontParkC.addHoverText( "Next Tour" );
infospotFrontParkC.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaSistePark );
} );

// 3a. Taman Siste (panoramaSistePark)
let infospotSistePark = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotSistePark.position.set( -3000, 500, 5000 );
infospotSistePark.addHoverText( "Back to Front Taman Siste" );
infospotSistePark.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

let infospotSisteParkB = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotSisteParkB.position.set( -3000, -500, -5000 );
infospotSisteParkB.addHoverText( "Inside Taman Siste" );
infospotSisteParkB.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

// 3aa. Inside Taman Siste (panoramaInsideSiste)
let infospotInsideSiste = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotInsideSiste.position.set( -2000, 500, 5000 );
infospotInsideSiste.addHoverText( "Back to Front Taman Siste" );
infospotInsideSiste.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaSistePark );
} );





panoramaGate.add( infospotGate );
panoramaTugu.add( infospotTugu, infospotTugu2 );
panoramaFrontPark.add( infospotFrontPark, infospotFrontParkB, infospotFrontParkC);
panoramaSistePark.add( infospotSistePark, infospotSisteParkB )
panoramaInsideSiste.add( infospotInsideSiste )




let viewer = new PANOLENS.Viewer({ 
  container: panoHTML
 });
 viewer.add(panoramaGate, panoramaTugu, panoramaFrontPark);
 viewer.addUpdateCallback(function(){
}); 