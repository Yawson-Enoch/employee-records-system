import path from 'path';
import { readFileSync } from 'fs';

export const pathToDB = () => {
  return path.join(process.cwd(), 'data', 'employees.json');
};

export const extractEmployeesDB = (path: string) => {
  const readDbData = readFileSync(path, 'utf8');
  return JSON.parse(readDbData);
};
