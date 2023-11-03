import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo/photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { CardsModule } from '../shared/components/cards/cards.module';


@NgModule({
    declarations: [PhotoComponent, PhotoListComponent, LoadButtonComponent, PhotoFormComponent, PhotosComponent, FilterByDescription],
    imports: [HttpClientModule, CommonModule, CardsModule]
})
export class PhotosModule { }