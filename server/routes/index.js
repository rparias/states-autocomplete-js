'use strict';

import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile('index.html', {
		root: './client'
	});
});

export default router;