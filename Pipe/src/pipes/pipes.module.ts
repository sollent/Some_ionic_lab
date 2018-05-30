import { NgModule } from '@angular/core';
import { SuperPipe } from './super/super';
import { MyCasePipe } from './my-case/my-case';
import { MyBoostPipe } from './my-boost/my-boost';
import {MadaPipe} from './mada/mada';
@NgModule({
	declarations: [SuperPipe,
    MyCasePipe,
    MyBoostPipe,
    MadaPipe],
	imports: [],
	exports: [SuperPipe,
    MyCasePipe,
    MyBoostPipe,
    MadaPipe]
})
export class PipesModule {}
