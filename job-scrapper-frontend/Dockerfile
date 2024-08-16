# Use node image to build the React app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy the project files to the Docker image
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Use nginx to serve the build files
FROM nginx:1.23

# Copy the build output to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]