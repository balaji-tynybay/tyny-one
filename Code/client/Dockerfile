# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all application files to the working directory
COPY . .

RUN npm install axios

# Build the React application
RUN npm run build



# Expose the port the application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
