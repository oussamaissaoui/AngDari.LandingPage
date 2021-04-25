import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchBoxComponent } from './search-box/search-box.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {Ng5SliderModule} from 'ng5-slider';

import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './header/header.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import { StickyDirective } from './sticky.directive';
import { GlassPrevComponent } from './glass-prev/glass-prev.component';
import { OverCarousselComponent } from './over-caroussel/over-caroussel.component';
import { SearchBoxNewComponent } from './search-box-new/search-box-new.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {AdServiceService} from './ad-service.service'



import {HttpClientModule} from '@angular/common/http';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';


import {RouterModule} from '@angular/router';


import { NgxImageZoomModule } from 'ngx-image-zoom';







@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    HeaderComponent,
    StickyDirective,
    GlassPrevComponent,
    OverCarousselComponent,
    SearchBoxNewComponent,
    AdListComponent,
    HomeComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    

    Ng5SliderModule,

    MatInputModule,
    MatToolbarModule,

    HttpClientModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    DataViewModule,

    RouterModule,

    NgxImageZoomModule





    
  ],
  providers: [AdServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
