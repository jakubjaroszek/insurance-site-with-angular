import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/index/components/nav/nav.component';
import { HeaderComponent } from './pages/index/components/header/header.component';
import { ProductsComponent } from './pages/index/components/products/products.component';
import { ServiceComponent } from './pages/index/components/service/service.component';
import { FooterComponent } from './pages/index/components/footer/footer.component';
import { InsurancesComponent } from './pages/insurances/insurances.component';
import { IndexTemplateComponent } from './pages/index/index-template.component';
import { InsurancesHeaderComponent } from './pages/insurances/components/insurances-header/insurances-header.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { RetirementComponent } from './pages/retirement/retirement.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CarInsuranceInformationComponent } from './pages/car-insurance-information/car-insurance-information.component';
import { HouseAndApartmentInsuranceInformationComponent } from './pages/house-and-apartment-insurance-information/house-and-apartment-insurance-information.component';
import { LifeInsuranceInformationComponent } from './pages/life-insurance-information/life-insurance-information.component';
import { TouristInsuranceInformationComponent } from './pages/tourist-insurance-information/tourist-insurance-information.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InsuranceCalculatorFormComponent } from './pages/insurance-calculator-form/insurance-calculator-form.component';
import { InvestmentsContentComponent } from './pages/investments/components/investments-content/investments-content.component';
import { RetirementContentComponent } from './pages/retirement/components/retirement-content/retirement-content.component';
import { ContactHeaderComponent } from './pages/contact/components/contact-header/contact-header.component';
import { HeaderImageComponent } from './pages/components/header-image/header-image.component';
import { HeaderImageWithBuyButtonComponent } from './pages/components/header-image-with-buy-button/header-image-with-buy-button.component';
import { CarInsuranceInformationContentComponent } from './pages/car-insurance-information/components/car-insurance-information-content/car-insurance-information-content.component';
import { HouseAndApartmentInsuranceInformationContentComponent } from './pages/house-and-apartment-insurance-information/components/house-and-apartment-insurance-information-content/house-and-apartment-insurance-information-content.component';
import { TouristInsuranceInformationContentComponent } from './pages/tourist-insurance-information/components/tourist-insurance-information-content/tourist-insurance-information-content.component';
import { LifeInsuranceInformationContentComponent } from './pages/life-insurance-information/components/life-insurance-information-content/life-insurance-information-content.component';
import { InsuranceCalculatorFormNavComponent } from './pages/insurance-calculator-form/components/insurance-calculator-form-nav/insurance-calculator-form-nav.component';
import { InsuranceCalculatorFormContentComponent } from './pages/insurance-calculator-form/components/insurance-calculator-form-content/insurance-calculator-form-content.component';
import { InsuranceCalculatorFormFooterComponent } from './pages/insurance-calculator-form/components/insurance-calculator-form-footer/insurance-calculator-form-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    ProductsComponent,
    ServiceComponent,
    FooterComponent,
    InsurancesComponent,
    IndexTemplateComponent,
    InsurancesHeaderComponent,
    InvestmentsComponent,
    RetirementComponent,
    ContactComponent,
    CarInsuranceInformationComponent,
    HouseAndApartmentInsuranceInformationComponent,
    LifeInsuranceInformationComponent,
    TouristInsuranceInformationComponent,
    PageNotFoundComponent,
    InsuranceCalculatorFormComponent,
    InvestmentsContentComponent,
    RetirementContentComponent,
    ContactHeaderComponent,
    HeaderImageComponent,
    HeaderImageWithBuyButtonComponent,
    CarInsuranceInformationContentComponent,
    HouseAndApartmentInsuranceInformationContentComponent,
    TouristInsuranceInformationContentComponent,
    LifeInsuranceInformationContentComponent,
    InsuranceCalculatorFormNavComponent,
    InsuranceCalculatorFormContentComponent,
    InsuranceCalculatorFormFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
