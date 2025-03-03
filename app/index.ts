import Fastify from 'fastify';

const fastify = Fastify();

const start = async () => {
  try {
    fastify.log.info('Database connection has been established successfully.');
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }
};
start();
