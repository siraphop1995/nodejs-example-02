module.exports = {
  apps: [
    {
      name: 'example',
      script: 'server.js',
      watch: false,
      env: {
        PORT: 5000,
        NODE_ENV: 'development',
        MONGO_URL:
          'mongodb+srv://admin:admin@cluster0-yejh3.gcp.mongodb.net/test?retryWrites=true&w=majority'
      }
    }
  ].map(service => {
    service.env.NODE_ENV = 'development';
    service.watch = false;
    service.instances = 1;
    service.exec_mode = 'cluster';
    return service;
  })
};
