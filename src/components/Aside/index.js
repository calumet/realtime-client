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
    const cls = classNames('aside', {
      'aside--hidden': hidden,
    }, className);

    return (
      <div ref={r => (this.container = r)} className={cls} {...rest}>
        <div className='aside__container'>
          <div className='aside__header'>
            {header}
          </div>
          <div className='aside__content'>
            {children}
          </div>
        </div>
        <div className='aside__left' onClick={onMenuToggle} />
      </div>
    );
  }

  /**
   * El `padding-top` del contenedor de contenido debe ser igual a la altura
   * del header contenido. Esto lo asegura.
   */
  updateSizes () {
    const header = this.container.querySelector('.aside__header');
    if (header) {
      let { height } = header.getBoundingClientRect();
      height = Math.round(height);
      const content = this.container.querySelector('.aside__container');
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
