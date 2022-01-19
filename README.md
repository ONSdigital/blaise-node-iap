# Blaise IAP Node Provider :tada:

Provides a generic IAP provider for NodeJS.

### Consuming

Add a dependency to your package.json file:
```
"blaise-iap-node-provider": "git+https://github.com/ONSdigital/blaise-iap-node-provider.git"
```

Add an import statement where you wish to consume the client and interfaces:
```
import BlaiseIapNodeProvider from "blaise-iap-node-provider";
```

Declare and consume the client by passing the URL of the api and the client ID:
```
const blaiseIapNodeProviderTest = new BlaiseIapNodeProvider(`http://${EXAMPLE_API_URL}`, ${EXAMPLE_CLIENT_ID});
```

Declare timeout for the HTTP client:
```
The client accpets a timeout in milliseconds (timeoutInMs) number parameter if you wish to explicitly set
a timeout for the client. If this parameter is not passed then the default is used.

To specify a timeout you need to instantiate the client as follows, where 1000 is the 
timeout required:

const blaiseIapNodeProviderTest = new BlaiseIapNodeProvider(`http://${EXAMPLE_API_URL}`, ${EXAMPLE_CLIENT_ID}, 1000);
```