FROM node:19.3.0

#Buat Nodejs App Direktori pada Container
WORKDIR /user/src/app

#copy semua file package.json ke dalam Direktori Node js App di container
COPY package*.json ./

RUN npm install
#jalankan perintah npm install untuk menginstall dependensi yang diperlukan

#bundle app source
COPY . .

EXPOSE 1993
CMD ["node", "server.js"]