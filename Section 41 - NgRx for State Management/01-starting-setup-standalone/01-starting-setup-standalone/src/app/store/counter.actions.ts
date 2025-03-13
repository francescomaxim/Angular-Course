import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

// export class IncrementAction implements Action{
//     readonly type = '[Counter] Decrement';
//     constructor(payload: number){

//     }
// }
