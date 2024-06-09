FROM node:20-alpine as development

WORKDIR /var/app

COPY . .

COPY package*.json ./

RUN npm ci

FROM node:20-alpine as builder
ENV NODE_ENV production

WORKDIR /var/app

COPY package*.json ./
COPY --from=development /var/app/node_modules ./node_modules
COPY . .


RUN npm run build
RUN echo "hello" && npx prisma generate
RUN sudo npm run prisma:seed

FROM node:20-alpine as production

# Copy the bundled code from the build stage to the production image
COPY --from=build /var/app/node_modules ./node_modules
COPY --from=build /var/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]