import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componenets/main/main.component';
import { rootNavigationRoutes } from 'src/app/constants/navigation-routes.constants';
import { UsersComponent } from './componenets/users/users.component';
import { UserGroupsComponent } from './componenets/user-groups/user-groups.component'; 
import { SkillSetComponent } from './componenets/skill-set/skill-set.component';
import { ExtensionComponent } from './componenets/extension/extension.component';
import { PauseCodeComponent } from './componenets/pause-code/pause-code.component';
import { RoleComponent } from './componenets/role/role/role.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [

      {
        path: rootNavigationRoutes.users,
        component: UsersComponent
      },
      {
        path: rootNavigationRoutes.userGroups,
        component: UserGroupsComponent
      },
      {
        path: rootNavigationRoutes.skillSet,
        component: SkillSetComponent
      },
      {
        path: rootNavigationRoutes.extension,
        component: ExtensionComponent
      },
      {
        path: rootNavigationRoutes.pauseCode,
        component: PauseCodeComponent
      } ,
      {
        path: rootNavigationRoutes.role,
        component: RoleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
