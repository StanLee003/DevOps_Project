# Menggunakan Node.js image resmi
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi
COPY . .

# Expose port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "server.js"]
