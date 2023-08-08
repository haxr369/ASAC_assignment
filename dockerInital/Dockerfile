
FROM --platform=linux/amd64  openjdk:17-jdk-alpine
COPY ./build/libs/dockerInital-0.0.1-SNAPSHOT.jar /home/app.jar
EXPOSE 8080
CMD ["java","-jar","/home/app.jar"]