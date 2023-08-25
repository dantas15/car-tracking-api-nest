# car-tracking-api

## How to run (development)

> First of all, you need to have Docker installed and configured for your machine.

1. Build containers

```bash
docker compose build
```

2. Open this folder as a [Devcontainer](https://code.visualstudio.com/docs/devcontainers/containers) in VSCode

- **_OR_** run:
  ```bash
  docker compose up
  ```
- enter the node container:
  ```bash
  docker compose exec app bash
  ```

3. Install dependencies inside container:

```bash
yarn
```

4. Run migrations

```bash
npx prisma generate
```

## Useful commands

- generate nest service
  ```bash
  npx nest generate service prisma/prisma
  ```
- generate nest resource (generate crud, dto, routes, etc...)
  ```bash
  npx nest generate resource
  ```

## Google Maps API

- Go to <https://console.cloud.google.com/>
- Create a project
- [Browse the libraries](https://console.cloud.google.com/apis/library/browse) and select the following:
  - Maps JavaScript API
  - Directions API
  - Places API

### place_id examples

- DCC @ UFLA: `ChIJ7ZCG_9j9nwARVOLlSsYMvec`
- Darce (🤫): `ChIJvSKUD4z9nwARrmBuvYI7CTY`
