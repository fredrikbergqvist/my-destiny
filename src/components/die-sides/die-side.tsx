import * as React from 'react';
import {onlyUpdateForKeys} from 'recompose';

export interface IDieSideProps {
  side: string;
}

export const DieSideUi = onlyUpdateForKeys(['side'])(({side}: IDieSideProps) => {
  return !side ? null : (
    <li><span>{side}</span></li>
  );
});
