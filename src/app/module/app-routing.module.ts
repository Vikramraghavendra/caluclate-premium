import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumService } from '../service/app.service';
import { HttpClientModule} from '@angular/common/http';  

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
  providers: [PremiumService]
})
export class AppRoutingModule { }
