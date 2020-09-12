import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountService } from './api/account.service';
import { AdminService } from './api/admin.service';
import { AppointmentService } from './api/appointment.service';
import { CommonService } from './api/common.service';
import { DefaultService } from './api/default.service';
import { DoctorProfileService } from './api/doctorProfile.service';
import { NotificationService } from './api/notification.service';
import { PatientProfileService } from './api/patientProfile.service';
import { ReferralsService } from './api/referrals.service';
import { TasksService } from './api/tasks.service';
import { UserProfileService } from './api/userProfile.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
