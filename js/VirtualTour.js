let panoHTML = document.querySelector(".pano-lens");
let sourceImage = 'test.jpg';

// let panorama = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg');
let panorama = new PANOLENS.ImagePanorama('./assets/images/panoimage.jpg');
// let panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );
let panorama2 = new PANOLENS.ImagePanorama('./assets/images/test.jpg');

let infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot.position.set( -100, -500, -5000 );
infospot.addHoverText( "The Story" );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

// Widget 2
let infospot2 = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
infospot2.position.set( 100, 500, 5000 );
infospot2.addHoverText( "Back to Main" );
infospot2.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );
panorama.add( infospot, infospot2 );
// panorama2.add( infospot2 );

let viewer = new PANOLENS.Viewer({ 
  container: panoHTML
 });
 viewer.add(panorama, panorama2);
 viewer.addUpdateCallback(function(){

}); 