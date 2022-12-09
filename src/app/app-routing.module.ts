import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarInsuranceInformationComponent } from './pages/car-insurance-information/car-insurance-information.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HouseAndApartmentInsuranceInformationComponent } from './pages/house-and-apartment-insurance-information/house-and-apartment-insurance-information.component';
import { IndexTemplateComponent } from './pages/index/index-template.component';
import { InsuranceCalculatorFormComponent } from './pages/insurance-calculator-form/insurance-calculator-form.component';
import { InsurancesComponent } from './pages/insurances/insurances.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { LifeInsuranceInformationComponent } from './pages/life-insurance-information/life-insurance-information.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RetirementComponent } from './pages/retirement/retirement.component';
import { TouristInsuranceInformationComponent } from './pages/tourist-insurance-information/tourist-insurance-information.component';

const routes: Routes = [
  {path: '', component: IndexTemplateComponent},
  {path: 'insurances', component: InsurancesComponent},
  {path: 'investments', component: InvestmentsComponent},
  {path: 'retirement', component: RetirementComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'insurance-calculator-form', component: InsuranceCalculatorFormComponent},
  {path: 'car-insurance-information', component: CarInsuranceInformationComponent},
  {path: 'house-and-apartment-insurance-information', component: HouseAndApartmentInsuranceInformationComponent},
  {path: 'tourist-insurance-information', component: TouristInsuranceInformationComponent},
  {path: 'life-insurance-information', component : LifeInsuranceInformationComponent},
  {path: '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
