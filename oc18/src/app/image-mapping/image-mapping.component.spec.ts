import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageMappingComponent} from './image-mapping.component';

describe('ImageMappingComponent', () => {
    let component: ImageMappingComponent;
    let fixture: ComponentFixture<ImageMappingComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImageMappingComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageMappingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
