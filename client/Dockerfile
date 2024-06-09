FROM node:20-alpine as development

WORKDIR /var/app

COPY package*.json ./

RUN npm ci

FROM node:20-alpine as builder
USER node
ENV NODE_ENV production

WORKDIR /var/app

COPY package*.json ./
COPY --from=development /var/app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-alpine as production

# Copy the bundled code from the build stage to the production image
COPY --from=build /var/app/node_modules ./node_modules
COPY --from=build /var/app/dist /var/www/html


EXPOSE 3001
CMD ["npm", "run", "dev"]