
import { _decorator, Component, Node } from 'cc';
import { EcsMainScene } from '../framework/ecsMainScene';
const { ccclass, property } = _decorator;
/**
 * Predefined variables
 * Name = Main
 * DateTime = Tue Aug 31 2021 20:38:07 GMT+0800 (中国标准时间)
 * Author = 1647506059
 * FileBasename = main.ts
 * FileBasenameNoExtension = main
 * URL = db://assets/script/main.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('Main')
export class Main extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start() {
        // [3]
        this.initECS();
    }
    initECS() {
        es.Core.create(false);
        es.Core.scene = new EcsMainScene();
    }
    update(deltaTime: number) {
        // [4]
        es.Core.emitter.emit(es.CoreEvents.frameUpdated, deltaTime);
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
