# set working directory
WORKDIR .


# generate build
#RUN ng build --output-path=dist

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 4201

# run nginx
CMD ["nginx", "-g", "daemon off;"]
