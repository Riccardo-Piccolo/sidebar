import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from './pages/aggiungi/aggiungi.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdatePrenComponent } from './pages/update-pren/update-pren.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'aggiungi',
        component: AggiungiComponent
    },
    {
        path: 'info',
        component: InfoComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aggiorna/:id',
        component: UpdatePrenComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
