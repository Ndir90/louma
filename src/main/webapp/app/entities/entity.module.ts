import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TotalDiscountCategoryModule } from './category/category.module';
import { TotalDiscountProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TotalDiscountCategoryModule,
        TotalDiscountProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TotalDiscountEntityModule {}
