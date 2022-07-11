import { writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IUserInfo } from '../../../ts_ui';
import { extractEmployeesDB, pathToDB } from '../../../utils';

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

      if (
        !name ||
        name.trim() === '' ||
        !email ||
        email.trim() === '' ||
        !email.includes('@')
      ) {
        return res.status(400).json({ message: 'invalid user data' });
      }

      const newUserInfo = {
        id: Date.now().toString(),
        name,
        email,
      };

      const data: IUserInfo[] = extractEmployeesDB(filePath);
      data.push(newUserInfo);

      writeFileSync(filePath, JSON.stringify(data));

      return res.status(201).json({
        message: 'info successfully added',
        data,
      });
    }

    default: {
      return res.status(404).json({ message: 'request not handled' });
    }
  }
};

export default handler;
