import { VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (res: VercelResponse) => {
  const packagesInfo = await fetch('https://x.nest.land/api/packages').then((res) => res.json());
  const packageList = packagesInfo.map(({ name }: {name:string}) => name);
  res.status(200).json(packageList);
};
