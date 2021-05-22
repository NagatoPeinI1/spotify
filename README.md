# Spootify Coding Challenge 🎧 &nbsp; ![hard](https://img.shields.io/badge/-Hard-red) ![time](https://img.shields.io/badge/%E2%8F%B0-60m-blue) 


# completed by: Shalabh Negi
# For dockerization:
# -> go to the code directory
# -> build docker image by running:
  docker build -t spotifyapp:v1.0.0 .
# -> to check if image is created or not run:
  docker images
# -> you will see output:
#    REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
#    spotifyapp    v1.0.0    6f9495c0090b   2 minutes ago    296MB

# -> to create a container run:
  docker run -p 3000:3000 -it spotifyapp:v1.0.0 /bin/sh

# -> output 
#    /app #

# -> now you can run
    npm start
