import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './service.index';
import { FoodsService } from './foods.service';

import { LoginGuard } from './guards/login.guard';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        UserService,
        FoodsService,
        LoginGuard
    ],
    declarations: []
})
export class ServiceModule {}
