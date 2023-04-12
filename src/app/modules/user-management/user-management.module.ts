import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { MainComponent } from './componenets/main/main.component';
import { UsersComponent } from './componenets/users/users.component';
import { UserGroupsComponent } from './componenets/user-groups/user-groups.component'; 
import { SkillSetComponent } from './componenets/skill-set/skill-set.component';
import { ExtensionComponent } from './componenets/extension/extension.component';
import { PauseCodeComponent } from './componenets/pause-code/pause-code.component';
import { SameUserComponent } from './componenets/users/create-user/same-user/same-user.component';
import { MultiUserComponent } from './componenets/users/create-user/multi-user/multi-user.component';
import { CreateUserGroupComponent } from './componenets/user-groups/new-user-group/create-user-group/create-user-group.component';
import { CreateSkillSetComponent } from './componenets/skill-set/create-skill-set/create-skill-set.component';
import { CreateExtensionComponent } from './componenets/extension/create-extension/create-extension.component';
import { CreatePauseCodeComponent } from './componenets/pause-code/create-pause-code/create-pause-code/create-pause-code.component';
import { CreateUserComponent } from './componenets/users/create-user/create-user.component';
import { SamePassComponent } from './componenets/extension/create-extension/same-pass/same-pass.component';
import { DoublePassComponent } from './componenets/extension/create-extension/double-pass/double-pass.component'; 
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewUserGroupComponent } from './componenets/user-groups/new-user-group/new-user-group.component';
import { SettingDetailsComponent } from './componenets/user-groups/new-user-group/setting-details/setting-details/setting-details.component'; 



@NgModule({
  declarations: [
    MainComponent,
    UsersComponent,
    UserGroupsComponent,
    SkillSetComponent,
    ExtensionComponent,
    PauseCodeComponent,
    SameUserComponent,
    MultiUserComponent,
    CreateUserGroupComponent,
    CreateSkillSetComponent,
    CreateExtensionComponent,
    CreatePauseCodeComponent,
    CreateUserComponent,
    SamePassComponent,
    DoublePassComponent,
    NewUserGroupComponent,
    SettingDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class UserManagementModule { }
