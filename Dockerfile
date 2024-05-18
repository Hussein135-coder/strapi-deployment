# Use the official Strapi image as a base
FROM strapi/strapi

# Set working directory
WORKDIR /usr/src/api

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose the default Strapi port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "start"]
