import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout de contenido de aplicación.
 */
export default class Content extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  componentDidMount () {
    this.updateSizes();
  }

  componentDidUpdate () {
    this.updateSizes();
  }

  render () {

    const { className, children, ...rest } = this.props;
    const cls = classNames('base-content', className);

    return (
      <div ref={r => (this.container = r)} className={cls} {...rest}>
        <div className='base-content__row'>
          <div className='base-content__col'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  /**
   * El `padding-top` del contenedor de contenido debe ser igual a la altura
   * del header contenido. Esto lo asegura.
   */
  updateSizes () {
    const header = this.container.querySelector('.base-header');
    if (header) {
      let { height } = header.getBoundingClientRect();
      height = Math.round(height);
      const content = this.container.querySelector('.base-content__col');
      content.style.paddingTop = `${height}px`;
    }
  }
}

Content.propTypes = {
  children: PropTypes.any
};
