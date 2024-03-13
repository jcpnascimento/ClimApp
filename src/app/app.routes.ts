import { Routes} from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { SobreComponent } from './Page/sobre/sobre.component';
import { NotFoundError } from 'rxjs';
export const routes: Routes = [

{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{path: 'Home', component: HomeComponent},
{path: 'Sobre', component: SobreComponent},

];
