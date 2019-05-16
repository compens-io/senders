import axios from "axios";
import { IEvent, RestOptions } from "compensio-common";
import { IEventSender } from "../../contracts/eventSender";


export class RestService implements IEventSender{
    private options: RestOptions;

    constructor(options: RestOptions) {
        this.options = options;
    }

    public send = async (options: RestOptions, event: IEvent) => {
        const data = await axios.post(options.url, event);
    };

}