module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b2b668e70cc487c12ea9bd335c016956'),
  },
});
