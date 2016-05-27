import {BaseSystem} from 'Ludic'

export default class DebugDrawSystem extends BaseSystem {
  constructor(active, priority, world) {
    super(active, priority);
    this.world = world;
  }

  update(delta){
    this.world.drawDebug();
  }
}
