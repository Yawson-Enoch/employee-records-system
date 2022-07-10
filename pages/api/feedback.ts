import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
}

export const pathToDB = () => {
  return path.join(process.cwd(), 'data', 'employees.json');
};

export const extractEmployeesDB = (path: string) => {
  const readDbData = fs.readFileSync(path, 'utf8');
  return JSON.parse(readDbData);
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = pathToDB();

  switch (req.method) {
    case 'GET': {
      const data: IUserInfo[] = extractEmployeesDB(filePath);

      return res.status(200).json({
        message: 'success',
        data,
      });
    }

    case 'POST': {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ message: 'bad user data' });
      }

      const newUserInfo = {
        id: Date.now().toString(),
        name,
        email,
      };

      const data: IUserInfo[] = extractEmployeesDB(filePath);
      data.push(newUserInfo);

      fs.writeFileSync(pathToDB(), JSON.stringify(data));

      return res.status(201).json({ message: 'info successfully added' });
    }

    default: {
      return res.status(404).json({ message: 'request not handled' });
    }
  }
};

export default handler;
