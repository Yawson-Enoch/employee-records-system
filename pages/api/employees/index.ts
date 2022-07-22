import { readFileSync, writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { IUserInfo } from '../../../ts_ui';
import { checkEmailValidity, checkNameValidity, formatDate, formatTime } from '../../../utils';

interface IData {
  message: string;
  data?: IUserInfo[];
}

export const pathToDB = () => {
  return path.join(process.cwd(), 'data', 'employees.json');
};

export const extractEmployeesDB = (path: string) => {
  const readDbData = readFileSync(path, 'utf8');
  return JSON.parse(readDbData);
};

const handler = (req: NextApiRequest, res: NextApiResponse<IData>) => {
  const filePath = pathToDB();

  switch (req.method) {
    case 'GET': {
      try {
        const data: IUserInfo[] = extractEmployeesDB(filePath);
        return res.status(200).json({
          message: 'success',
          data,
        });
      } catch (error) {
        return res.status(500).json({
          message: 'error getting data from DB',
        });
      }
    }

    case 'POST': {
      const { firstName, lastName, email } = req.body;

      if (
        !checkNameValidity(firstName) ||
        !checkNameValidity(lastName) ||
        !checkEmailValidity(email)
      ) {
        return res.status(400).json({ message: 'invalid user data' });
      }

      const newUserInfo = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email,
        addedDate: formatDate(),
        addedTime: formatTime(),
      };

      try {
        const data: IUserInfo[] = extractEmployeesDB(filePath);
        data.push(newUserInfo);

        writeFileSync(filePath, JSON.stringify(data));

        return res.status(201).json({
          message: 'info successfully added',
          data,
        });
      } catch (error) {
        return res.status(500).json({
          message: 'info could not be added',
        });
      }
    }

    default: {
      return res.status(404).json({ message: 'request not handled' });
    }
  }
};

export default handler;
