# Enable BuildKit if not already enabled
# docker build --build-arg DOCKER_BUILDKIT=1 .

# Stage 1: Build the Angular app
FROM node:20-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Use BuildKit cache mount for node_modules
RUN --mount=type=cache,id=s/eb433343-4ad1-40b7-b2ed-0cbd1d80d3dc-node_modules/cache,target=/app/node_modules/.cache npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built app to nginx html directory
COPY --from=builder /app/dist/your-app-name/browser /usr/share/nginx/html

EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
