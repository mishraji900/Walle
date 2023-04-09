import {proxy} from 'valtio';
const state = proxy({
   intro: true,
   color: '#efbd48',
   isFullTexture:false,
   isLogoTexture:true,
   logoDecal:'./threejs.png',
   fullDecal:'./threejs.png',
});
export default state;