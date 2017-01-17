import React, { PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';
import i18n from 'src/i18n';

/**
 * Componente de usuario de la comunicación.
 */
export default function User (props) {

  const { inactive, moderator, theme, name, category, photo, online, className, ...rest } = props;
  const cls = classNames('user', {
    'user--online': online,
    'user--moderator': moderator,
    'user--inactive': inactive,
  }, className);

  if (theme) {
    rest['data-theme'] = theme;
  }

  const photoStyle = {};
  if (photo) {
    photoStyle.backgroundImage = `url(${photo})`;
  }

  const moderatorTitle = i18n.t('moderator.title');

  return (
    <div {...rest} className={cls}>
      <div className='user__row'>
        <div className='user__col user__col1'>
          <div className='user__photo' style={photoStyle}>
            <div className='user__moderator mdi mdi-star' title={moderatorTitle} />
          </div>
        </div>
        <div className='user__col user__col2'>
          <Dotdotdot clamp={1}>
            <div className='user__name'>{name}</div>
          </Dotdotdot>
          <Dotdotdot clamp={1}>
            <div className='user__cat'>{category}</div>
          </Dotdotdot>
        </div>
        <div className='user__col user__col3'>
          <div className='user__status'></div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  photo: PropTypes.string,
  online: PropTypes.bool,
  moderator: PropTypes.bool,
  inactive: PropTypes.bool,
  theme: PropTypes.oneOf(['inverse']),
};

User.defaultProps = {
  name: '',
  category: '',
  photo: '',
  online: false,
  moderator: false,
  inactive: false,
  theme: null,
};
