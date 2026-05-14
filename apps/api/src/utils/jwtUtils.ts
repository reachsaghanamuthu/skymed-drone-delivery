import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'skymed-jwt-secret-dev';

export interface JwtPayload {
  sub: string;
  email: string;
  role: 'USER' | 'ADMIN';
}

export const signAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
