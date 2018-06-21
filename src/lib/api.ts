import { IInternalApi } from 'emt-api-infrastructure';
import ProtectedApi from "./protectedApi";
import PublicApi from "./publicApi";

export default class Api implements  IInternalApi {
    private protectedApi: ProtectedApi = new ProtectedApi();
    private publicApi: PublicApi = new PublicApi();

    constructor() {
    }

    public addMessage = this.protectedApi.addMessage;
    public showMessage = this.publicApi.addMessage;

}
