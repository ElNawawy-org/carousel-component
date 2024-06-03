//TODO: Remove if unused
import { WORKING_ON } from 'src/data/shared';

import { WorkingOnS, pageNameS } from './style.module.css';

export const WorkingOn = ({ pageName = '', massage = '' }) => {
  return (
    <div className={WorkingOnS}>
      <h1 className={pageNameS}>{pageName}</h1>

      <h2>{massage || WORKING_ON}</h2>
    </div>
  );
};
