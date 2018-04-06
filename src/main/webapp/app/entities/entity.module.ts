import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OptimizationEventsJobEventOptJobModule } from './event-opt-job/event-opt-job.module';
import { OptimizationEventsJobPublisherOptJobModule } from './publisher-opt-job/publisher-opt-job.module';
import { OptimizationEventsJobCampaignOptJobModule } from './campaign-opt-job/campaign-opt-job.module';
import { OptimizationEventsJobCampaignRecordOptJobModule } from './campaign-record-opt-job/campaign-record-opt-job.module';
import { OptimizationEventsJobOptimizationPropsOptJobModule } from './optimization-props-opt-job/optimization-props-opt-job.module';
import { OptimizationEventsJobBlackListOptJobModule } from './black-list-opt-job/black-list-opt-job.module';
import { OptimizationEventsJobBlackListRecordOptJobModule } from './black-list-record-opt-job/black-list-record-opt-job.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OptimizationEventsJobEventOptJobModule,
        OptimizationEventsJobPublisherOptJobModule,
        OptimizationEventsJobCampaignOptJobModule,
        OptimizationEventsJobCampaignRecordOptJobModule,
        OptimizationEventsJobOptimizationPropsOptJobModule,
        OptimizationEventsJobBlackListOptJobModule,
        OptimizationEventsJobBlackListRecordOptJobModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OptimizationEventsJobEntityModule {}
