
import jwt from 'jsonwebtoken';

export const generateToken = (userID) => {
  return jwt.sign({ id: userID }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d'
  });
};
