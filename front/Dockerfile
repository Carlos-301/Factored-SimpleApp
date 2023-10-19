# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the React app for production
WORKDIR /client
RUN npm start

# Expose the port that your React app will run on (usually 3000)
EXPOSE 3000

# Start the React app
CMD [ "npm", "start" ]