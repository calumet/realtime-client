import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Componente agrupación de contenido de una sala, especialmente para agrupar mensajes de
 * una lista de mensajes para fechas.
 */
export default function RoomGroup (props = {}) {

  const { header, className, children, ...rest } = props;
  const cls = classNames('rooms-roomgroup', className);

  return (
    <section className={cls} {...rest}>
      <h2 className='rooms-roomgroup__header'>{header}</h2>
      <div className='rooms-roomgroup__separation'></div>
      <div className='rooms-roomgroup__content'>
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
