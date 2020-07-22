### Setup To Replicate The Issue

1. Run the below command in the terminal to start the wiremock/haproxy:
    ```console
    $ docker-compose down
    $ docker-compose up --build
    ```

1. Open another terminal window and run the test-delay script:
    ```console
    $ ./test-delay.sh
    ```