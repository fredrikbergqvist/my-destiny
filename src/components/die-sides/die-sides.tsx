import * as React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import {DieSideUi} from './die-side';

export interface IDieSidesProps {
  sides: string[];
}

export const DieSidesUi = onlyUpdateForKeys(['sides'])(({sides}: IDieSidesProps) => {
  return !sides || sides.length === 0 ? null : (
    <ul className="card_die">
      {sides.map((side, index) => <DieSideUi key={index} side={side}/>)}
    </ul>
  );
});
