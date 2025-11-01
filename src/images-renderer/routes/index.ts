import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  res.send('<h3>Go to <a href="https://github.com/jamesl30/github-readme-linkedin">github-readme-linkedin</a> for more info!</h3>');
}
