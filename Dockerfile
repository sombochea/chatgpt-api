# Use the official lightweight Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]