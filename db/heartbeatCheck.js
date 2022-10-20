const heartbeatCheck = (db) => {
  db.raw('SELECT 1').then(() => {
    console.log('PostgreSQL connected');
  })
    .catch((e) => {
      console.log('PostgreSQL not connected');
      console.log(e);
    });
};

module.exports = { heartbeatCheck };
