import { NextApiRequest, NextApiResponse } from 'next';
import { extractEmployeesDB, pathToDB } from '.';
import { IUserInfo } from '../../../ts_ui';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const filePath = pathToDB();

  switch (req.method) {
    case 'GET': {
      const searchTerm = slug[1].trim().toLowerCase();
      if (slug[0] === 'search') {
        try {
          const data: IUserInfo[] = await extractEmployeesDB(filePath);

          const updatedList = data.filter(employee => {
            return (
              employee.lastName.includes(searchTerm) ||
              employee.firstName.includes(searchTerm) ||
              employee.email.includes(searchTerm)
            );
          });

          return res.status(200).json({
            message: 'success.',
            data: updatedList,
          });
        } catch (error) {
          return res.status(500).json({ message: 'error getting data from DB.' });
        }
      }
    }

    default: {
      return res.status(404).json({ message: 'request is not handled.' });
    }
  }
};

export default handler;