# React + Socket + Auth0

this projects application_protocol in socket.ini is "com.socket-auth"

currently if there is a period (".") in application_protocol, only safari seems to be able to open it, as such i had to set my default browser to safari to test this

## prerequisites

1. create a native application in Auth0 dashboard
   - allowed callback urls: com.socket-auth://callback
   - allowed logout urls: com.socket-auth://signout
   - allowed origins: socket://com.socket-auth/
2. add client id, domain and callback uri to .env.example where applicable and then rename to .env

## getting started

install dependencies

```
bun i
pnpm i
npm i
```

run the app

```
ssc build -r
```

## how it works
 please check ./src/lib/onApplicationURLEvent.ts and both pages in ./src/pages

 to learn how to implement this yourself