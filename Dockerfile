FROM node:10-alpine AS builder

# Create app directory
WORKDIR /usr/src/app

#copy app source 
COPY . .

# Install dependencies and build 
RUN npm install && npm run build


FROM node:10-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Install deps for production only
COPY ./package* ./
#RUN npm install && \
#    npm cache clean --force

# Copy builded source from the upper builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose ports
EXPOSE 8036

# Start the app
CMD npm start
