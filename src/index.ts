import express from 'express';
import route from './routers';

const app = express();
const PORT = 3000;

route(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
