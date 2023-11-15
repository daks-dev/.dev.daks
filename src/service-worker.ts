import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    console.debug('sw:', 'Need Refresh');
  },
  onOfflineReady() {
    console.log('sw:', 'Offline Ready');
  },
  onRegistered(registration: ServiceWorkerRegistration | undefined) {
    console.debug('sw:', 'Register', registration);
  },
  onRegisterError(error: unknown) {
    console.error('sw:', 'Register Error', error);
  }
});

updateSW();
