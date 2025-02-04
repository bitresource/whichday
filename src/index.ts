import { json } from "body-parser";

const express = require('express');
const app = express();
app.use(json());

app.get('/', (req: any, res: any) => {
    const td = Date();    
    res.json({
        'message': `Today is: ${td}`
    })
});

app.listen(3000);