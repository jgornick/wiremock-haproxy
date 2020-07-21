### Setup To Replicate The Issue

1. Clone the repository and `cd` into it.

2. Run the below command in the terminal to install the dependencies:
    ```console
    $ yarn install
    --> install the dependencies
    ```  
    
3. Run the below command in the terminal to start the wiremock:
    ```console
    $ docker-compose down
    $ docker-compose up --build
    --> starts the wiremock server make sure wiremock run in 9000 port
    ```

4. Open postman and import the below the below curl command

    curl --location --request GET 'http://localhost:9000/todos/1' \
         --header 'Host: jsonplaceholder.typicode.com'

5. Open another terminal window and `cd` into the root directory again.

6. Run the below command in the terminal to run the scripts:
    ```console
    $ sh script.sh
    --> starts the scripts that does the GET operation parallely
    ```

7. As soon as the above script is run go to postman and hit the send button on the curl command which we imported. 
   You will notice the delay in response than usual.


## Commands

# attach shell to running container
docker exec -it xxxxxxxxx /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"

# get logs
docker exec -it xxxxxxxxx tail -f /var/log/logfile