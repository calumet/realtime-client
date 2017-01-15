import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Componente agrupación de contenido de una sala, especialmente para agrupar mensajes de
 * una lista de mensajes para fechas.
 */
export default function RoomGroup (props = {}) {

  const { header, className, children, ...rest } = props;
  const cls = classNames('room-group', className);

  return (
    <section className={cls} {...rest}>
      <h2 className='room-group__header'>{header}</h2>
      <div className='room-group__separation'></div>
      <div className='room-group__content'>
        {children}
      </div>
    </section>
  );
}

RoomGroup.propTypes = {

  /**
   * Texto del header.
   */
  header: PropTypes.string.isRequired,

  /**
   * Contenido de agrupación.
   */
  children: PropTypes.element.isRequired
};
