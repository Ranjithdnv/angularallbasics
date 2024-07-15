import { createReducer, Action, on } from '@ngrx/store';
import { act1, act2, act3 } from './action';

export interface States {
  pp: number;
  bp: string;
}

const initiastate: States = {
  pp: 10,
  bp: 'yy',
};

const redu = createReducer(
  initiastate,
  on(act1, (state, { cc, zz, rr }) => {
    console.log(cc);
    console.log(state, { ...state, pp: cc, mmm: 8, zz, yy: rr });
    return { ...state, pp: 7, cc };
  }),
  on(act2, (state, { cc, zz, rr }) => {
    console.log(cc);
    console.log(state, { ...state, pp: cc, mmm: 8, zz, yy: rr });
    return { ...state, pp: 7, cc };
  }),
  on(act3, (state, { cc, zz, rr }) => {
    console.log(cc);
    console.log(state, { ...state, pp: cc, mmm: 8, zz, yy: rr });
    return { ...state, pp: 7, cc };
  })
);

export function hjg(state: States | undefined, action: Action) {
  return redu(state, action);
}
