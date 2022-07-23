import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { IUserInfo } from '../../../ts_ui';
import { checkEmailValidity, checkNameValidity, formatDate, formatTime } from '../../../utils';
import { v4 as uuidv4 } from 'uuid';

interface IData {
  message: string;
  data?: IUserInfo[];
}

export const pathToDB = (): string => {
  return path.join(process.cwd(), 'data', 'employees.json');
};

export const extractEmployeesDB = async (path: string): Promise<IUserInfo[]> => {
  const readDbData = await fs.readFile(path, 'utf8');
  return JSON.parse(readDbData);
};

export const addToEmployeesDB = async <T>(path: string, data: T): Promise<void> => {
  await fs.writeFile(path, JSON.stringify(data));
};

const handler = async (req: NextApiRequest, res: NextApiResponse<IData>) => {
  const filePath = pathToDB();

  switch (req.method) {
    case 'GET': {
      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);
        return res.status(200).json({
          message: 'success.',
          data,
        });
      } catch (error) {
        return res.status(500).json({
          message: 'error fetching data from DB.',
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
        return res.status(400).json({ message: 'invalid user data.' });
      }

      const newUserInfo = {
        id: uuidv4(),
        firstName,
        lastName,
        email,
        addedDate: formatDate(),
        addedTime: formatTime(),
      };

      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);
        data.push(newUserInfo);

        await addToEmployeesDB(filePath, data);

        return res.status(201).json({
          message: 'info successfully added.',
          data,
        });
      } catch (error) {
        return res.status(500).json({
          message: 'info could not be added.',
        });
      }
    }

    default: {
      return res.status(404).json({ message: 'request not handled.' });
    }
  }
};

export default handler;
