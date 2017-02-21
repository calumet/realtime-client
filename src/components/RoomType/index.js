import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Textarea from 'react-textarea-autosize';
import i18n from 'src/i18n';

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

    const { disabled, message, onSend, className, ...rest } = this.props;
    const cls = classNames('room-type', {
      'room-type--disabled': disabled
    }, className);

    const placeholder = i18n.t('room.type');
    const value = typeof disabled === 'string' ? disabled : this.state.message;

    return (
      <div className={cls} {...rest}>
        <Textarea
          className='room-type__textarea'
          ref={r => (this.textarea = r)}
          value={value}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder={placeholder}
          disabled={!!disabled}
        />
        <button
          className='room-type__button'
          onClick={this.onClick}
          disabled={!!disabled}
        >
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

    const { disabled } = this.props;

    if (disabled) return;

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
  onSend: PropTypes.func,

  /**
   * Si el campo está deshabilitado, el cual será el mensaje a mostrar por estar
   * deshabilitado. Si es sólo booleano, sólo se deshabilitará.
   */
  disabled: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
};

RoomType.defaultProps = {
  message: '',
  onSend: function () {}
};
