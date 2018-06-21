import { AppConstants, IInternalApi } from 'emt-api-infrastructure';

export default class ProtectedApi implements IInternalApi {
  public addMessage(message: any): void {
    console.log('From Implementor', AppConstants.Global.ADD_MESSAGE, message);
  }
}
