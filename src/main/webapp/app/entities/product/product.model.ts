import { BaseEntity } from './../../shared';

export class Product implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public price?: number,
        public description?: string,
        public category?: BaseEntity,
    ) {
    }
}
