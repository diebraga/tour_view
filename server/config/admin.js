module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a9d463c4f2e2d9dd3f659e9f4d225ccf'),
  },
});
