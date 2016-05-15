
export {default as DebugDraw} from './components/debugDraw.js'
import Module from './components/box2d.js'
export {Module as Box2D, Module as default};

console.log('hello from box2d main.js', Module);

// world
export {default as World} from './components/world'
export {default as WorldConfig} from './components/worldConfig'

// rube
export {default as RubeLoader} from './components/rube/RubeLoader'
export {default as RubeScene} from './components/rube/RubeScene'
export {default as RubeAssetLoader} from './components/rube/rubeAssetLoader'

// console.log(DebugDraw);
// console.log(Box2D);
