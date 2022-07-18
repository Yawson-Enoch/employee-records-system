import path from 'path';
import { readFileSync } from 'fs';

export const pathToDB = () => {
  return path.join(process.cwd(), 'data', 'employees.json');
};

export const extractEmployeesDB = (path: string) => {
  const readDbData = readFileSync(path, 'utf8');
  return JSON.parse(readDbData);
};

export const formatDate = (date = new Date()): string => {
  const { format } = new Intl.DateTimeFormat('en-UK', { dateStyle: 'full' });
  return format(date).toString();
};

export const formatTime = (time = new Date()): string => {
  const { format } = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' });
  return format(time).toString();
};

export const checkEmailValidity = (email: string) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
};

export const checkNameValidity = (name: string) => {
  const regex = /^[A-Za-z0-9]{2,16}$/;
  return regex.test(name);
};

export const removeRedundantSpacesInAString = (words: string): string => {
  return words.trim().replaceAll(/\W{2,}/g, ' ');
};

export const capitalizeFirstLetter = (word: string) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
};

export const capitalizeFirstLetterOfWords = (words: string): string => {
  return removeRedundantSpacesInAString(words)
    .split(' ')
    .map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(' ');
};
