import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const packagesInfo = await fetch('https://x.nest.land/api/packages').then((res) => res.json());
  const packageList = packagesInfo.map(({ name }) => name);
  res.status(200).json(packageList);
};
