FROM adoptopenjdk/openjdk11:jdk-11.0.4_11-alpine

ENV WIREMOCK_VERSION 2.27.1

RUN mkdir -p /var/wiremock/lib/ \
    && wget https://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-jre8-standalone/$WIREMOCK_VERSION/wiremock-jre8-standalone-$WIREMOCK_VERSION.jar \
    -O /var/wiremock/lib/wiremock-jre8-standalone.jar

WORKDIR /home/wiremock

COPY ./mappings mappings

EXPOSE 9000

ENTRYPOINT [\
    "java", "-jar", \
    "-XX:+UseContainerSupport", \
    "-Dhttp.keepAlive=false", \
    "/var/wiremock/lib/wiremock-jre8-standalone.jar", \
    "--verbose", \
    "--container-threads", "1000", \
    # "--container-threads", "50", \
    "--root-dir", "/home/wiremock", \
    "--port", "9000", \
    "--no-request-journal", \
    "--preserve-host-header", \
    "--jetty-acceptor-threads", "500", \
    "--jetty-header-buffer-size", "16384", \
    "--async-response-enabled", \
    "--async-response-threads", "500" \
]