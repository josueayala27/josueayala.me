export default {
  dsn: process.env.SENTRY_DSN,
  publishRelease: true,
  sourceMapStyle: 'hidden-source-map',
  config: {
    release: process.env.GIT_COMMIT_SHA,
  },
};
