import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
{
path: "home", component: HomeComponent
},
{
path: "about", component: AboutComponent
},
{
path: "contact", component: ContactComponent
},
{
path: "customers", component: CustomersComponent
},
{
path: "portfolio", component: PortfolioComponent
},
{
path: "testimonials", component: TestimonialsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
