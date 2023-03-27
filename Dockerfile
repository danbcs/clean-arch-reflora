FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./config .
COPY ./src .
EXPOSE 3000
CMD ["npm", "start"]