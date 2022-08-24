import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "contactList", component: ContactListComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule,
            HttpClientModule,RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
