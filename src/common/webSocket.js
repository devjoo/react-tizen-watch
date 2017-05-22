import io from 'socket.io-client';
import settings from './settings';
import * as action from '../actions/creators';

const initWebSocket = (store) => {
  const socket = io(`${settings.protocol}://${settings.host}:${settings.port}/?username=${settings.userName}&password=${settings.password}`, {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 3000,
    timeout: 20000,
    forceNew: true,
  });

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('event', (data) => {
    console.log('event');
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('devices', (devices) => {
    store.dispatch(action.loadDevices(devices));
  });

  socket.on('rules', (rules) => {
    console.log('rules');
    console.log(rules);
  });

  socket.on('variables', (variables) => {
    console.log('variables');
    console.log(variables);
  });

  socket.on('pages', (pages) => {
    store.dispatch(action.loadPages(pages));
  });

  socket.on('groups', (groups) => {
    store.dispatch(action.loadGroups(groups));
  });

  socket.on('deviceAttributeChanged', (event) => {
    console.log(event);
    if (event.attributeName === 'state') {
      store.dispatch(action.changeDeviceAttribute(event));
    }
  });
};

export default initWebSocket;
