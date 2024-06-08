FROM node:20-alpine as development

WORKDIR /var/app

COPY --chown=node:node . .

COPY --chown=node:node package*.json ./

RUN npm ci

USER node

FROM node:20-alpine as builder
USER node
ENV NODE_ENV production

WORKDIR /var/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /var/app/node_modules ./node_modules
COPY --chown=node:node . .

RUN npm run build

RUN npm ci

FROM node:20-alpine as production

# Copy the bundled code from the build stage to the production image
COPY --chown=node:node --from=build /var/app/node_modules ./node_modules
COPY --chown=node:node --from=build /var/app/dist ./dist

# Start the server using the production build
CMD [ "node", "dist/main.js" ]