import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { DistancePipeTestComponent } from './distance-pipe.test-component';
import { FileSizePipeTestComponent } from './file-size-pipe.test-component';
import { TeaserPipeTestComponent } from './teaser-pipe.test-component';
import { CreditCardNumberPipeTestComponent } from './credit-card-number-pipe.test-component';
import { PhoneNumberPipeTestComponent } from './phone-number-pipe.test-component';
import { PlaceholderImgPipeTestComponent } from './placeholder-img-pipe.test-component';
import { SortPipeTestComponent } from './sort-pipe.test-component';
import { FilterPipeTestComponent } from './filter-pipe.test-component';
import { SearchPipeTestComponent } from './search-pipe.test-component';
import { TranslatePipeTestComponent } from './translate-pipe.test-component';
import { MaxNumberPipeTestComponent } from './max-number-pipe.test-component';
import { PluckPipeTestComponent } from './pluck-pipe.test-component';
import { DistancePipeModule } from "../pipes/distance.pipe-module";

@NgModule({
    declarations: [
        AppComponent,
        DistancePipeTestComponent,
        FileSizePipeTestComponent,
        TeaserPipeTestComponent,
        CreditCardNumberPipeTestComponent,
        PhoneNumberPipeTestComponent,
        PlaceholderImgPipeTestComponent,
        SortPipeTestComponent,
        FilterPipeTestComponent,
        SearchPipeTestComponent,
        TranslatePipeTestComponent,
        MaxNumberPipeTestComponent,
        PluckPipeTestComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        RouterModule,
        AppRoutingModule,
        DistancePipeModule,
        
    ]
})
export class AppTestingModule {}
