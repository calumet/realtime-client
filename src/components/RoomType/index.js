import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Textarea from 'react-textarea-autosize';

const ENTER = 13;

/**
 * Componente caja para escribir nuevos mensajes.
 *
 * Puede ser multilinea pero sólo aceptará texto plano.
 *
 * Al presionar la tecla _ENTER_ o al clickear el botón de _ENVIAR_ se invocará
 * el callback pasado por la propiedad `onSend`.
 */
export default class RoomType extends Component {

  constructor () {
    super(...arguments);

    this.state = {
      message: this.props.message
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  render () {

    const { message, onSend, className, ...rest } = this.props;
    const cls = classNames('rooms-roomtype', className);

    return (
      <div className={cls} {...rest}>
        <Textarea
          className='rooms-roomtype__textarea'
          ref={r => (this.textarea = r)}
          value={this.state.message}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder='Escribe un mensaje...'
        />
        <button className='rooms-roomtype__button' onClick={this.onClick}>
          <i className='mdi mdi-send' />
        </button>
      </div>
    );
  }

  onChange (event) {
    const message = String(event.target.value);
    this.setState({ message });
  }

  onKeyPress (event) {
    if (event.which === ENTER) {
      event.preventDefault();
      this.onSend();
    }
  }

  onClick () {
    this.onSend();
  }

  onReset () {
    this.setState({
      message: ''
    });
    this.textarea.focus();
  }

  onSend () {

    const message = this.state.message.trim();
    const hasText = /\S/;

    if (!hasText.test(message)) {
      this.textarea.focus();
      return;
    }

    this.props.onSend({ message });
    this.onReset();
  }
}

RoomType.propTypes = {

  /**
   * Mensaje inicial.
   */
  message: PropTypes.string,

  /**
   * Callback para llamar cuando se envíe un mensaje.
   * Recibe: `{ String message }`
   */
  onSend: PropTypes.func
};

RoomType.defaultProps = {
  message: '',
  onSend: function () {}
};
