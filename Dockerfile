FROM node:13.12.0-alpine

LABEL   Description="●	To test knowledge of consuming APIs and handling responses               \
            ●	Loading state and knowing where and how to make multiple API calls efficiently"  \
        Developer="Shalabh Negi"                                                                 \
        Developer_Email="shalabhnegi123@gmail.com"


# set working directory
RUN pwd && \
    mkdir app
COPY . /app
WORKDIR /app
RUN pwd && \
    ls  && \
    npm install --save 


# exposing port for listing
EXPOSE 3000
# start app
CMD ["sh", "-c". "sleep 30 && cd /app && npm start && tail -f /dev/null"]
