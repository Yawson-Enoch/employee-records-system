import { NextApiRequest, NextApiResponse } from 'next';
import { extractEmployeesDB, pathToDB } from '.';
import { IUserInfo } from '../../../../ts_ui';

const filePath = pathToDB();

const sortedData = (data: IUserInfo[], option: string) => {
  if (option === 'name') {
    return data.sort((employeeA, employeeB) =>
      employeeA.firstName > employeeB.firstName ? 1 : -1
    );
  }
  if (option === 'email') {
    return data.sort((employeeA, employeeB) => (employeeA.email > employeeB.email ? 1 : -1));
  }
  return data;
};

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  switch (req.method) {
    case 'GET': {
      if (slug[0] === 'search') {
        const searchTerm = slug[1].trim().toLowerCase();

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
          return res.status(500).json({ message: 'internal server error, try again later.' });
        }
      }

      if (slug[0] === 'sort') {
        const sortOption = slug[1].trim().toLowerCase();

        try {
          const data: IUserInfo[] = await extractEmployeesDB(filePath);

          const updatedList = sortedData(data, sortOption);

          return res.status(200).json({
            message: 'success.',
            data: updatedList,
          });
        } catch (error) {
          return res.status(500).json({ message: 'internal server error, try again later.' });
        }
      }
      res.status(404).json({ message: 'not found.' });
      break;
    }

    default: {
      res.status(404).json({ message: 'unhandled request.' });
      break;
    }
  }
};

export default handler;
