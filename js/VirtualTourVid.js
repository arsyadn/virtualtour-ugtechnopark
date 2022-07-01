var panorama, viewer;
const panoHTML = document.querySelector(".pano-lens");

panorama = new PANOLENS.VideoPanorama( 'technopark.mp4', { autoplay: true } );

viewer = new PANOLENS.Viewer({
  container: panoHTML
});
viewer.add( panorama );