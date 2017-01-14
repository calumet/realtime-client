import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const headerClass = '.base-header';
const roomClass = '.rooms-room';

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
        {children}
      </div>
    );
  }

  /**
   * El `padding-top` del contenedor de contenido debe ser igual a la altura
   * del header contenido. Esto lo asegura.
   */
  updateSizes () {
    const header = this.container.querySelector(headerClass);
    if (header) {
      let { height } = header.getBoundingClientRect();
      height = Math.round(height);
      this.container.style.paddingTop = `${height}px`;
    }
  }

  /**
   * Actualizar el scroll a una posición específica o al final del contenido.
   * Esto es para el componente de sala Room.
   * @param  {Number} [scroll]
   */
  updateScroll (scroll) {
    const content = this.container.querySelector(roomClass);
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
