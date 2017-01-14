import React, { PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';
import i18n from 'src/i18n';

/**
 * Componente de usuario de la comunicación.
 */
export default function User (props) {

  const { moderator, theme, name, category, photo, online, className, ...rest } = props;
  const cls = classNames('users-user', {
    'users-user--online': online,
    'users-user--moderator': moderator,
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
      <div className='users-user__row'>
        <div className='users-user__col users-user__col1'>
          <div className='users-user__photo' style={photoStyle}>
            <div className='users-user__moderator mdi mdi-star' title={moderatorTitle} />
          </div>
        </div>
        <div className='users-user__col users-user__col2'>
          <Dotdotdot clamp={1}>
            <div className='users-user__name'>{name}</div>
          </Dotdotdot>
          <Dotdotdot clamp={1}>
            <div className='users-user__cat'>{category}</div>
          </Dotdotdot>
        </div>
        <div className='users-user__col users-user__col3'>
          <div className='users-user__status'></div>
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
  theme: PropTypes.oneOf(['inverse']),
};

User.defaultProps = {
  name: '',
  category: '',
  photo: '',
  online: false,
  moderator: false,
  theme: null,
};
