import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    OptimizationEventsJobSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        OptimizationEventsJobSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        OptimizationEventsJobSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class OptimizationEventsJobSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
