FROM node:10.23-buster as dev

# Add .bin folder in node_modules folder to path
# Needed to use local ng etc.
ENV PATH="/usr/local/bin:/usr/src/node_modules/.bin:${PATH}"

# Create app directory
WORKDIR /usr/src
