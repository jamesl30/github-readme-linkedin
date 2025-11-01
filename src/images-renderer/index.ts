import express from 'express';
import dotenv from 'dotenv';
import indexRoute from './routes/index';
import dataRoute from '../scraper-server/index';
import experience from './routes/experience';
import education from './routes/education';
import skills from './routes/skills';
import languages from './routes/languages';
import user from './routes/user';

const app = express();
dotenv.config();
app.get('/', indexRoute);
app.get('/data', dataRoute);
app.get('/experience', experience);
app.get('/education', education);
app.get('/skills', skills);
app.get('/languages', languages);
app.get('/user', user);

const port = process.env.PORT || '8000';
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
