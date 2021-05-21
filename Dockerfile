FROM node:13.12.0-alpine

LABEL   Description="●	To test knowledge of consuming APIs and handling responses               \
            ●	Loading state and knowing where and how to make multiple API calls efficiently"  \
        Developer="Shalabh Negi"                                                                 \
        Developer_Email="shalabhnegi123@gmail.com"

RUN apk update                                                                                               && \
    apk add --no-cache --virtual build-dependencies python=~2 build-base=~0 gcc=~8 git=~2 wget=~1 curl=~7    && \
    git config --global url."https://".insteadof git://                                                      && \
    git clone -b master 



# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./ && \
     package-lock.json ./
RUN npm install --silent && \ 
    npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# exposing port for listing
EXPOSE 3000
# start app
CMD ["npm", "start"]