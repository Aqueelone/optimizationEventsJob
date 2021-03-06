/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { OptimizationEventsJobTestModule } from '../../../test.module';
import { CampaignRecordOptJobDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/campaign-record-opt-job/campaign-record-opt-job-delete-dialog.component';
import { CampaignRecordOptJobService } from '../../../../../../main/webapp/app/entities/campaign-record-opt-job/campaign-record-opt-job.service';

describe('Component Tests', () => {

    describe('CampaignRecordOptJob Management Delete Component', () => {
        let comp: CampaignRecordOptJobDeleteDialogComponent;
        let fixture: ComponentFixture<CampaignRecordOptJobDeleteDialogComponent>;
        let service: CampaignRecordOptJobService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [OptimizationEventsJobTestModule],
                declarations: [CampaignRecordOptJobDeleteDialogComponent],
                providers: [
                    CampaignRecordOptJobService
                ]
            })
            .overrideTemplate(CampaignRecordOptJobDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CampaignRecordOptJobDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CampaignRecordOptJobService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
