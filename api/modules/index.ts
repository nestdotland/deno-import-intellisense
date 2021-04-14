import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const modulesInfo = await fetch('https://x.nest.land/api/packages').then((data) => data.json());
  const modulesList = modulesInfo.map(({ name }: { name: string }) => name);
  res.status(200).json(modulesList);
};
