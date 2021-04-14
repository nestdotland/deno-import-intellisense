import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const {package:packageName, version:packageVersion} = req.query
  const packageInfo = await fetch('https://x.nest.land/api/package/' + packageName + '/' + packageVersion).then((res) => res.json());
  const packagePaths = Object.keys(packageInfo.files).map((key) => key);
  res.status(200).json(packagePaths);
};
