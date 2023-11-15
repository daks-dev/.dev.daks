import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  /*
  onRegistered(registration: ServiceWorkerRegistration | undefined) {
    console.debug('sw:', 'Register', registration);
  },
  onNeedRefresh() {
    console.debug('sw:', 'Need Refresh');
  },
  */
  onOfflineReady() {
    console.log('sw:', 'Offline Ready');
  },
  onRegisterError(error: unknown) {
    console.error('sw:', 'Register Error', error);
  }
});

updateSW();
