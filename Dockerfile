FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4378
CMD [ "npm", "start" ]
