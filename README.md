# appNode

## modulo DB
## Usage
``` js
const SetupData = require("appnode-db");

setupDataBase(config).then(db => {
    const {Agent, Metric} = db
}).catch(error => console.log(error));
```

