#!/usr/bin/env bash

function make_request {
  host="${1}"
  path="${2}"

  now="$(date +'%Y-%m-%dT%H:%M:%S')"
  printf "${now} - before ${host}${path}\n"
  curl -s --header "Host: ${host}" "http://localhost:9000${path}" -o /dev/null
  if [[ $? != 0 ]]; then
    printf "${now} - error ${host}${path}\n"
    exit 1
  fi
  now="$(date +'%Y-%m-%dT%H:%M:%S')"
  printf "${now} - after ${host}${path}\n"
}

count=${1:-10}
for i in $(seq 1 $count)
do
  make_request "api.coinranking.com" "/v1/public/coin/${i}" &
done

sleep 2
make_request "jsonplaceholder.typicode.com" "/todos/$RANDOM"

wait
printf "\n--------------------------------------------------\n"
printf "Done!\n"