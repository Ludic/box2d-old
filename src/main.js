/*
  Box2D has checks for the environment it loads into. When running this with
   electron, Box2D thinks its in a node environment. So the imported object will
   either be and object containing the Box2D lib or the lib itself.
 */

/* import Box2D, * as __Box2D from './box2d.js' */
import Box2D, * as __Box2D from '../build/Box2D_v2.3.1_min.js'
let _Box2D = window.Box2D || Box2D.Box2D || Box2D;
export {_Box2D as Box2D, _Box2D as default};

// world
/* export {default as World} from './components/world'
   export {default as WorldConfig} from './components/worldConfig' */

// rube
/* export {default as RubeLoader} from './components/rube/RubeLoader'
   export {default as RubeScene} from './components/rube/RubeScene'
   export {default as RubeAssetLoader} from './components/rube/rubeAssetLoader' */
