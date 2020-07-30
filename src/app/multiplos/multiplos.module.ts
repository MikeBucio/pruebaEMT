import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//http
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { MultiplosRoutingModule } from './multiplos-routing.module';
import { MultiplosComponent } from './multiplos.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MultiplosRoutingModule,
    HttpClientModule,
  ],
  declarations: [MultiplosComponent],
})
export class MultiplosModule {}
