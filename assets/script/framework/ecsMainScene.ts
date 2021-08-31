import EcsSystem from "./ecsSystem";
import entityMove from "./entity/entityMove";
import entityAttak from "./entity/entityAttak";

export class EcsMainScene extends es.Scene {

    _playerEntity: es.Entity = null;
    _sys: es.EntityProcessingSystem = null;

    initialize() {
        console.log('ecs: initialize');
        this._playerEntity = this.createEntity('player');
        this._playerEntity.addComponent(new entityAttak());
        this._playerEntity.addComponent(new entityMove());

        // 激活系统, 系统是ecs的核心。你的游戏逻辑应该在这里进行处理，所有的实体及组件也会在这里进行集中处理
        this.addEntityProcessor(new EcsSystem(es.Matcher.empty().all(entityMove, entityAttak)));
        // 获取系统
        this._sys = this.getEntityProcessor(EcsSystem);
    }
    onStart() {
        console.log('ecs: onStart');
    }
    unload() {
        console.log('ecs: unload');
    }
    update() {
        console.log('ecs: update');
    }
}


