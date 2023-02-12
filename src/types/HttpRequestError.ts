export default class HttpRequestError extends Error {
    constructor(msg: string) {
        super(msg);
        console.error(`ERROR - RequestHttp: ${msg}`);
    }
}
