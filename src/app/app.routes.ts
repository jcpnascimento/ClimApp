import { Routes} from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { SobreComponent } from './Page/sobre/sobre.component';
import { TesteComponent } from './Page/teste/teste.component';

export const routes: Routes = [
{path: 'Home', component: HomeComponent},
{path: 'Sobre', component: SobreComponent},
{path: 'teste', component: TesteComponent},

];
