# Choose the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
# If you are building your code for production, use this instead:
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Your app binds to port 3000, so use the EXPOSE instruction to have it mapped by the Docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]
