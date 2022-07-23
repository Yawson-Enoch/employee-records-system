import { NextApiRequest, NextApiResponse } from 'next';
import { addToEmployeesDB, extractEmployeesDB, pathToDB } from '.';
import { IFormValues, IUserInfo } from '../../../ts_ui';
import { checkEmailValidity, checkNameValidity } from '../../../utils';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = pathToDB();

  const { employeeId } = req.query;
  switch (req.method) {
    case 'GET': {
      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);

        const singleUserInfo = data.find(employee => employee.id === employeeId);

        if (!singleUserInfo) {
          return res.status(404).json({ message: 'no matching user ID.' });
        }

        return res.status(200).json({ message: 'success', data: singleUserInfo });
      } catch (error) {
        return res.status(500).json({ message: 'error getting data from DB.' });
      }
    }

    case 'DELETE': {
      try {
        const data: IUserInfo[] = await extractEmployeesDB(filePath);

        const updatedList = data.filter(employee => employee.id !== employeeId);

        await addToEmployeesDB(filePath, updatedList);

        return res.status(200).json({ message: 'user deleted successfully.' });
      } catch (error) {
        return res.status(500).json({ message: 'error deleting user.' });
      }
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
            employee.firstName = firstName;
            employee.lastName = lastName;
            employee.email = email;
            return employee;
          } else {
            return employee;
          }
        });

        await addToEmployeesDB(filePath, updatedList);

        return res.status(201).json({
          message: 'user info successfully edited.',
          data: updatedList,
        });
      } catch (error) {
        return res.status(500).json({ message: 'error editing user info.' });
      }
    }

    default: {
      return res.status(404).json({ message: 'request is not handled.' });
    }
  }
};

export default handler;
