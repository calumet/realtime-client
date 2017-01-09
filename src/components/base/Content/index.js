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
    this.updateScroll();
  }

  componentDidUpdate () {
    this.updateSizes();
    this.updateScroll();
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

  /**
   * Actualizar el scroll a una posición específica o al final del contenido.
   * Esto es para el componente de sala Room.
   * @param  {Number} [scroll]
   */
  updateScroll (scroll) {
    const content = this.container.querySelector('.rooms-room');
    if (content) {
      content.scrollTop = typeof scroll === 'number' ?
        scroll :
        content.scrollHeight;
    }
  }
}

Content.propTypes = {
  children: PropTypes.any
};
