import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.route";
import { LoginComponent } from "./login.componenet";


@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule

    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [

    ],

})
export class UserModule{

}