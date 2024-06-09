This is a monorepo; FE is built with Vite/React & BE - NestJS/Apollo/Prisma ORM

`docker compose up` in the root of the project should get it up; Playground is enabled for BE

Default ports:
- FE - 3001
- BE - 3000
- DB - 5432

There is a script `docker:seed` in `./server/package.json` directory in case you need to reset/reseed the DB;

I also covered two main resources (Feedback/Grant) with some basic tests, you can see coverage with `npm run test:cov`