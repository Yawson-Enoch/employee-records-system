import { NextApiRequest, NextApiResponse } from 'next';
import { addToEmployeesDB, extractEmployeesDB, pathToDB } from '.';
import { IFormValues, IUserInfo } from '../../../../ts_ui';
import { checkEmailValidity, checkNameValidity } from '../../../../utils';

const filePath = pathToDB();

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { employeeId } = req.query;

  switch (req.method) {
    case 'GET': {
      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);

        const singleUserInfo = data.find(employee => employee.id === employeeId);

        if (!singleUserInfo) {
          return res.status(404).json({ message: 'no matching user ID.' });
        }

        res.status(200).json({ message: 'success', data: singleUserInfo });
      } catch (error) {
        res.status(500).json({ message: 'internal server error, try again later.' });
      }
      break;
    }

    case 'DELETE': {
      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);

        const findUser = data.find(employee => employee.id === employeeId);

        if (!findUser) {
          return res.status(404).json({ message: 'no matching user ID.' });
        }

        const updatedList = data.filter(employee => employee.id !== employeeId);

        await addToEmployeesDB(filePath, updatedList);

        res.status(200).json({ message: 'user deleted successfully.' });
      } catch (error) {
        res.status(500).json({ message: 'internal server error, try again later.' });
      }
      break;
    }

    case 'PATCH': {
      const { firstName, lastName, email }: IFormValues = req.body;

      if (
        !checkNameValidity(firstName) ||
        !checkNameValidity(lastName) ||
        !checkEmailValidity(email)
      ) {
        return res.status(400).json({ message: 'invalid user data.' });
      }

      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);

        const updatedList: IUserInfo[] = data.map(employee => {
          if (employee.id === employeeId) {
            return { ...employee, firstName, lastName, email };
          }
          return employee;
        });

        await addToEmployeesDB(filePath, updatedList);

        res.status(201).json({
          message: 'user info successfully edited.',
          data: updatedList,
        });
      } catch (error) {
        res.status(500).json({ message: 'internal server error, try again later.' });
      }
      break;
    }

    default: {
      res.status(404).json({ message: 'request is not handled.' });
      break;
    }
  }
};

export default handler;
