FROM node

COPY . /node

WORKDIR /node

RUN npm i


ADD . /app

EXPOSE 3001
CMD ["npm", "run", "dev"]
