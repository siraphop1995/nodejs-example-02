module.exports = {
  apps: [
    {
      name: 'example',
      script: 'server.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
        MONGO_URL:
          'mongodb+srv://admin:admin@cluster0-yejh3.gcp.mongodb.net/test?retryWrites=true&w=majority'
      }
    }
  ].map(service => {
    service.env.NODE_ENV = 'development';
    service.watch = true;
    service.instances = 1;
    service.exec_mode = 'cluster';
    return service;
  })
};
