export default class BlaiseIapNodeProvider {
    private readonly CLIENT_ID;
    private token;
    constructor(CLIENT_ID: string);
    getAuthHeader(): Promise<{
        Authorization: string;
    }>;
    private isValidToken;
    private static hasTokenExpired;
}
