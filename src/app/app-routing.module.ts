import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponentComponent } from './contact-list-component/contact-list-component.component';
import { ApplicationComponentComponent } from './application-component/application-component.component';

const appRoutes: Routes = [
  { path: '', component: ApplicationComponentComponent },
  { path: 'contactList', component: ContactListComponentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
