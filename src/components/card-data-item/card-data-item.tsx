import * as React from 'react';
import {onlyUpdateForKeys} from 'recompose';

export interface IDataItemProps {
  title: string;
  data: any;
}

export const CardDataItem = onlyUpdateForKeys(['side'])(({title, data}: IDataItemProps) => {
  return !data ? null : (
    <li className="cardData_item">
      <span className="cardData_title">{title}</span>
      <span className="cardData_data">{data}</span>
    </li>
  );
});
