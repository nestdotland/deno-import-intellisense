import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async (req: VercelRequest, res: VercelResponse) => {
  const { module: moduleName } = req.query;
  const moduleInfo = await fetch('https://x.nest.land/api/package/' + moduleName).then((data) => data.json());
  const moduleVersionList = moduleInfo.packageUploadNames.map((version: string) =>
    version.replace(moduleName + '@', '')
  );

  res.setHeader('Cache-Control', 'public, max-age=21600, s-maxage=21600, stale-while-revalidate');
  res.status(200).json(moduleVersionList.reverse());
};
