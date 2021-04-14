import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const packageName = req.query.package;
  const packageInfo = await fetch('https://x.nest.land/api/package/' + packageName).then((res) => res.json());
  const packageVersions = packageInfo.packageUploadNames.map((version) => version.replace(packageName + '@', ''));
  res.status(200).json(packageVersions.reverse());
};
