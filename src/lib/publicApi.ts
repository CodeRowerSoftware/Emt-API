import ProtectedApi from './protectedApi';
import { IInternalApi } from 'emt-api-infrastructure';

const protectedApi: ProtectedApi = new ProtectedApi();

export default class PublicApi implements IInternalApi {
  public addMessage(text: string): void {
    console.log('In Public', text);
    protectedApi.addMessage(text);
  }
}
