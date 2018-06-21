import Api from './lib/api';
import ProtectedApi from './lib/protectedApi';
import PublicApi from './lib/publicApi';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    netent: any;
  }
}

window.netent = { gcc: new PublicApi() };

export { Api };
export { PublicApi };
export { ProtectedApi };
