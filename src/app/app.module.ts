import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggiungiComponent } from './pages/aggiungi/aggiungi.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdatePrenComponent } from './pages/update-pren/update-pren.component';
import { CommonModule } from '@angular/common';
import { ConfermaComponent } from './pages/conferma/conferma.component';
import { ConfermaService } from './services/conferma.service';


@NgModule({
  declarations: [
    AppComponent,
    AggiungiComponent,
    InfoComponent,
    NotFoundComponent,
    HomeComponent,
    UpdatePrenComponent,
    ConfermaComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  providers: [ConfermaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
