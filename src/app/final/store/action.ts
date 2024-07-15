import { createAction, props } from '@ngrx/store';
export const act1 = createAction(
  '[Count] Ascendy',
  props<{ cc: number; rr: string; zz: number }>()
);

export const act2 = createAction(
  '[Count] Descy',
  props<{ cc: number; rr: string; zz: number }>()
);
export const act3 = createAction(
  '[Count] Descy',
  props<{ cc: number; rr: string; zz: number }>()
);
