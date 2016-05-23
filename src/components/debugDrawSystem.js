import {BaseSystem} from 'Ludic'

export default class DebugDrawSystem extends BaseSystem {
  constructor(world, active, priority) {
    super(active, priority);
    this.world = world;
  }

  update(delta){
    this.world.drawDebug();
  }
}
