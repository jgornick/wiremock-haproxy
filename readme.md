## Commands
```bash
# docker-compose
docker-compose up --build
docker-compose down

# attach shell to running container
docker exec -it xxxxxxxxx /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"

# get logs
docker exec -it xxxxxxxxx tail -f /var/log/logfile

# curl
curl --verbose --header 'Host: api.coinranking.com' 'http://localhost:9000/v1/public/coin/1'
curl --verbose --header 'Host: api.oceandrivers.com' 'http://localhost:9000/v1.0/getEasyWind/EW013/?period=latestdata'
```

## Error
```
haproxy_1          | 00000016:fe.clireq[0012:ffffffff]: GET /v1/public/coin/1 HTTP/1.1
haproxy_1          | 00000016:fe.clihdr[0012:ffffffff]: accept: */*
haproxy_1          | 00000016:fe.clihdr[0012:ffffffff]: user-agent: curl/7.64.1
haproxy_1          | 00000016:fe.clihdr[0012:ffffffff]: host: api.coinranking.com
haproxy_1          | fd[0014] OpenSSL error[0x1408f10b] ssl3_get_record: wrong version number
haproxy_1          | fd[0014] OpenSSL error[0x140e0197] SSL_shutdown: shutdown while in init
haproxy_1          | 00000016:be.srvcls[0012:0014]
haproxy_1          | 00000016:be.clicls[0012:0014]
haproxy_1          | 00000016:be.closed[0012:0014]
haproxy_1          | <134>May 27 15:57:53 haproxy[7]: ::ffff:172.18.0.2:54708 [27/May/2020:15:57:53.587] fe be/clear 89/0/0/-1/268 -1 0 - - SD-- 1/1/0/0/0 0/0 {13.226.207.20} "GET /v1/public/coin/1 HTTP/1.1"
```