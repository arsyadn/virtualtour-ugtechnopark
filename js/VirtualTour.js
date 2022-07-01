let panoHTML = document.querySelector(".pano-lens");
let sourceImage = 'test.jpg';

// let panoramaGate = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
// let panoramaTugu = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );
let panoramaGate = new PANOLENS.ImagePanorama('./assets/images/img1_gate.jpg');
let panoramaTugu = new PANOLENS.ImagePanorama('./assets/images/img2_tugu.jpg');
let panoramaFrontPark = new PANOLENS.ImagePanorama('./assets/images/img3_frontparksiste.jpg');
let panoramaSistePark = new PANOLENS.ImagePanorama('./assets/images/img3a_tamansiste.jpg');

// Gate
let infospotGate = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotGate.position.set( -8000, 500, 0 );
infospotGate.addHoverText( "Tugu UG Techno Park" );
infospotGate.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

// Tugu
let infospotTugu = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTugu.position.set( 10000, 500, 5000 );
infospotTugu.addHoverText( "Back to Gate" );
infospotTugu.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaGate );
} );

let infospotTugu2 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotTugu2.position.set( 30000, 500, 5000 );
infospotTugu2.addHoverText( "Next Taman Siste" );
infospotTugu2.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaFrontPark );
} );

// Front Taman Siste
let infospotFrontPark = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospotFrontPark.position.set( -2000, 500, 5000 );
infospotFrontPark.addHoverText( "Back to Tugu" );
infospotFrontPark.addEventListener( 'click', function(){
  viewer.setPanorama( panoramaTugu );
} );

// Taman Siste




panoramaGate.add( infospotGate );
panoramaTugu.add( infospotTugu, infospotTugu2 );
panoramaFrontPark.add( infospotFrontPark );



let viewer = new PANOLENS.Viewer({ 
  container: panoHTML
 });
 viewer.add(panoramaGate, panoramaTugu, panoramaFrontPark);
 viewer.addUpdateCallback(function(){
}); 