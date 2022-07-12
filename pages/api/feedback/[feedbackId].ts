import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { IUserInfo } from '../../../ts_ui';
import { extractEmployeesDB, pathToDB } from '../../../utils';

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = pathToDB();

  const { feedbackId } = req.query;
  switch (req.method) {
    case 'GET': {
      try {
        const data: IUserInfo[] = extractEmployeesDB(filePath);

        const singleUserInfo = data.find(
          (employee) => employee.id === feedbackId
        );

        if (!singleUserInfo) {
          return res.status(404).json({ message: 'no matching user ID' });
        }

        return res
          .status(200)
          .json({ message: 'success', data: singleUserInfo });
      } catch (error) {
        return res.status(500).json({ message: 'error getting data from DB' });
      }
    }

    case 'DELETE': {
      try {
        const data: IUserInfo[] = extractEmployeesDB(filePath);

        const updateList = data.filter(
          (employee) => employee.id !== feedbackId
        );

        writeFileSync(filePath, JSON.stringify(updateList));

        if (!updateList) {
          return res.status(404).json({ message: 'no matching user ID' });
        }

        return res.status(200).json({ message: 'user deleted successfully' });
      } catch (error) {
        return res.status(500).json({ message: 'error deleting user' });
      }
    }

    default: {
      return res.status(404).json({ message: 'request is not handled' });
    }
  }
};

export default handler;
