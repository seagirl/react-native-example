import { KeepAwake, registerRootComponent } from 'expo';
import App from './src/component/app';

if (__DEV__) {
  KeepAwake.activate();
}

registerRootComponent(App);