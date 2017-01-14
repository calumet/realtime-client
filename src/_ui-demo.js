import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import Main from 'src/components/Main';
import Aside from 'src/components/Aside';
import Content from 'src/components/Content';
import Header from 'src/components/Header';

import User from 'src/components/User';
import UserCurrent from 'src/components/UserCurrent';
import UsersList from 'src/components/UsersList';

import RoomsList from 'src/components/RoomsList';
import RoomsListItem from 'src/components/RoomsListItem';
import Room from 'src/components/Room';
import RoomGroup from 'src/components/RoomGroup';
import Message from 'src/components/Message';
import RoomMessages from 'src/components/RoomMessages';
import RoomType from 'src/components/RoomType';

const App = function () {

  const onMenuToggle = () => {
    const a = document.querySelector('.base-aside');
    a.classList.toggle('base-aside--hidden');
  };

  const user0 = { name: 'Romel Pérez', category: 'Especialización', photo: 'https://avatars3.githubusercontent.com/u/1393135?v=3&s=460' };
  const user1 = { name: 'Natalia Contreras', category: 'Profesora', photo: '/demos/img/girl4.jpg', moderator: true };
  const user2 = { name: 'Juan Rodriguez', category: 'Estudiante', photo: '/demos/img/boy1.jpg' };
  const user3 = { name: 'Sofía Gutíerrez', category: 'Estudiante', photo: '/demos/img/girl2.jpg' };
  const user4 = { name: 'Carlos Martél', category: 'Posgrado', photo: '/demos/img/boy4.jpg' };
  const user5 = { name: 'Carla Gómez', category: 'Estudiante', photo: '/demos/img/girl3.jpg' };
  const user6 = { name: 'María Pérez', category: 'Estudiante', photo: '/demos/img/girl1.jpg' };
  const user7 = { name: 'Juan Castro', category: 'Estudiante', photo: '/demos/img/boy2.jpg' };
  const user8 = { name: 'Sandra Luque', category: 'Estudiante', photo: '/demos/img/girl5.jpg' };
  const user9 = { name: 'Andrés Castillo', category: 'Estudiante', photo: '/demos/img/boy3.jpg' };

  return (
    <Main>
      <Aside onMenuToggle={onMenuToggle} header={
          <UserCurrent>
            <User {...user0} theme='inverse' />
          </UserCurrent>
        }>
        <RoomsList>
          <RoomsListItem>General</RoomsListItem>
          <RoomsListItem active={true}>Programación Orientada a Objetos</RoomsListItem>
          <RoomsListItem>Programación Orientada a Objetos - Grupo A1</RoomsListItem>
          <RoomsListItem activity={true}>Programación Orientada a Objetos - Subgrupo #1</RoomsListItem>
          <RoomsListItem>Ingeniería de Software II</RoomsListItem>
          <RoomsListItem>Ingeniería de Software II - Grupo J9</RoomsListItem>
        </RoomsList>
        <UsersList>
          <User {...user1} online={true} />
          <User {...user2} online={true} />
          <User {...user3} online={true} />
          <User {...user4} />
          <User {...user5} />
          <User {...user6} />
          <User {...user7} />
          <User {...user8} />
          <User {...user9} />
        </UsersList>
      </Aside>
      <Content>
        <Header title='Aula Virtual' subtitle='Programación Orientada a Objetos' onMenuToggle={onMenuToggle} />
        <Room>
            <RoomGroup header='Diciembre 24'>
                <RoomMessages>
                    <Message {...user1}>Mensaje normal número 1</Message>
                    <Message {...user4}>With React.PropTypes.element you can specify that only a single child can be passed to a component as children.</Message>
                    <Message {...user2}>You can define default values for your props by assigning to the special defaultProps property:</Message>
                </RoomMessages>
            </RoomGroup>
            <RoomGroup header='Diciembre 31'>
                <RoomMessages>
                    <Message {...user0}>As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don't use those, React has some built-in typechecking abilities.</Message>
                    <Message {...user1}>Mensaje extraño número 2</Message>
                    <Message {...user6}>Mensaje extraño número 3</Message>
                    <Message {...user5}>For performance reasons, propTypes is only checked in development mode.</Message>
                    <Message {...user1}>Mensaje extraño número 2</Message>
                    <Message {...user3}>Mensaje extraño número 3</Message>
                </RoomMessages>
            </RoomGroup>
            <RoomGroup header='Enero 5'>
                <RoomMessages>
                    <Message {...user2}>Here is an example documenting the different validators provided:</Message>
                    <Message {...user4}>With React.PropTypes.element you can specify that only a single child can be passed to a component as children.</Message>
                    <Message {...user1}>You can define default values for your props by assigning to the special defaultProps property:</Message>
                </RoomMessages>
            </RoomGroup>
            <RoomGroup header='Enero 7'>
                <RoomMessages>
                    <Message {...user0}>Mensaje extraño número 1</Message>
                    <Message {...user1}>Mensaje extraño número 1</Message>
                    <Message {...user6}>React.PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we're using React.PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.</Message>
                    <Message {...user3}>Mensaje extraño número 3</Message>
                    <Message {...user5}>When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.</Message>
                    <Message {...user3}>Mensaje extraño número 3</Message>
                </RoomMessages>
            </RoomGroup>
            <RoomType />
        </Room>
      </Content>
    </Main>
  );
};

render(<App />, document.querySelector('#realtime'));
