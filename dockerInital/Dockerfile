# 베이스 이미지 최적화
FROM --platform=linux/amd64 gradle:jdk17-alpine
# gradle 복사

COPY build.gradle .
COPY settings.gradle .

# 종속성 다운로드
RUN gradle dependencies --no-daemon --build-cache


# 프로젝트 소스코드 복사
COPY gradle gradle
COPY src/main/java src/main/java
COPY src/main/resources src/main/resources
COPY src/test src/test

# 실행 가능한 jar파일  이미지에 생성
RUN gradle build

# jar 파일 위치 지정
COPY ./build/libs/*.jar ./app.jar

EXPOSE 8080
# ENTRYPOINT는 이미지를 컨테이너로 띄울 때 항상 실행되야하는 커멘드를 지정
ENTRYPOINT ["java","-jar","./app.jar"]