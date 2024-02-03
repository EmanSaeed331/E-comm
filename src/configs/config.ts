require('dotenv').config();

const config = {
  port: process.env.PORT || 3030,
  secret_key: process.env.SECRET_KEY || 'your-secret-key',
};
export default config;
