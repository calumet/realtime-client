import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout de contenido lateral y menú de la aplicación.
 */
export default class Aside extends Component {

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

    const props = this.props || {};
    const { header, onMenuToggle, hidden, className, children, ...rest } = props;
    const cls = classNames('base-aside', {
      'base-aside--hidden': hidden,
    }, className);

    return (
      <div ref={r => (this.container = r)} className={cls} {...rest}>
        <div className='base-aside__container'>
          <div className='base-aside__header'>
            {header}
          </div>
          <div className='base-aside__content'>
            {children}
          </div>
        </div>
        <div className='base-aside__left' onClick={onMenuToggle} />
      </div>
    );
  }

  /**
   * El `padding-top` del contenedor de contenido debe ser igual a la altura
   * del header contenido. Esto lo asegura.
   */
  updateSizes () {
    const header = this.container.querySelector('.base-aside__header');
    if (header) {
      let { height } = header.getBoundingClientRect();
      height = Math.round(height);
      const content = this.container.querySelector('.base-aside__container');
      content.style.paddingTop = `${height}px`;
    }
  }
}

Aside.propTypes = {
  children: PropTypes.any,
  header: PropTypes.element,
  hidden: PropTypes.bool,
  onMenuToggle: PropTypes.func,
};
