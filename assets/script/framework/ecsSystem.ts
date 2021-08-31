
export default class EcsSystem extends es.EntityProcessingSystem {

    /**
     * 处理特定的实体
     * @param entity 
     */
    processEntity(entity: es.Entity) {
        console.log('ecs');
    }
    /**
     * 处理特定的实体
     * @param entity 
     */
    lateProcessEntity(entity: es.Entity) {
        console.log('ecs');
    }
    /**
     * 遍历这个系统的所有实体并逐个处理它们
     * @param entities 
     */
    process(entities: es.Entity[]) {
        console.log('ecs');
    }
    /**
     * 遍历这个系统的所有实体并逐个处理它们
     * @param entities 
     */
    lateProcess(entities: es.Entity[]) {
        console.log('ecs');
    }
}

