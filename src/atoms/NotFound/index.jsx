//TODO: Remove if unused
import { Link } from 'src/atoms/Link';

import { BACK_TO_HOME, NOT_FOUND } from 'src/data/shared';

import { NotFoundS, notFound } from './style.module.css';

export const NotFound = ({ redirectHref = '/', title = BACK_TO_HOME }) => {
  return (
    <div className={NotFoundS}>
      <h2 className={notFound}>{NOT_FOUND}</h2>

      <Link
        title={title}
        href={redirectHref}
        variant='text'
      >
        {title}
      </Link>
    </div>
  );
};
