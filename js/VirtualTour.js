let panoHTML = document.querySelector(".pano-lens");
let sourceImage = 'test.jpg';

// let panorama = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
// let panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );
let panorama = new PANOLENS.ImagePanorama('./assets/images/img1_gate.jpg');
let panorama2 = new PANOLENS.ImagePanorama('./assets/images/img2_tugu.jpg');

let infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -8000, 500, 5000 );
infospot.addHoverText( "Tugu UG Techno Park" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

// Widget 2
let infospot2 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot2.position.set( 100, 500, 5000 );
infospot2.addHoverText( "Back to Gate" );
infospot2.addEventListener( 'click', function(){
  viewer.setPanorama( panorama );
} );
panorama.add( infospot );
panorama2.add( infospot2 );



let viewer = new PANOLENS.Viewer({ 
  container: panoHTML
 });
 viewer.add(panorama, panorama2);
 viewer.addUpdateCallback(function(){
}); 