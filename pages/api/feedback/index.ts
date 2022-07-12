import { writeFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { IUserInfo } from '../../../ts_ui';
import {
  extractEmployeesDB,
  pathToDB,
  formatDate,
  formatTime,
  checkEmailValidity,
  capitalizeFirstLetter,
} from '../../../utils';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
      const { name, email } = req.body;

      if (!name || name.trim() === '' || !checkEmailValidity(email)) {
        return res.status(400).json({ message: 'invalid user data' });
      }

      const newUserInfo = {
        id: Date.now().toString(),
        name: capitalizeFirstLetter(name),
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
