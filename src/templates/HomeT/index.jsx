//TODO: Remove if unused
import { WorkingOn } from 'src/atoms/WorkingOn';

import { HomeS } from './style.module.css';

export const HomeT = () => {
  return (
    <div className={HomeS}>
      <WorkingOn
        pageName='Home Page'
        massage='If You will use this code, Please read the documentation carefully before editing'
      />
    </div>
  );
};
