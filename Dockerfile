FROM node:14
WORKDIR /app
COPY package.json ./
RUN npm install
ENV REACT_APP_NAME=myName 
COPY . .
EXPOSE 3000
CMD ["npm", "start"]









