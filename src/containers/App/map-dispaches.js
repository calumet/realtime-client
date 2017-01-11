import rooms from 'core/actions/rooms';

export default function () {
  return {
    handleMessage: rooms.message
  };
}
