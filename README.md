# Node local modules workflow proposal

This requires external packages to be in the same place relative to the code on both the host and in the container.  In this case, this code is in a directory in `~/Code`.  This repo sits next to `lodash`, there.

```sh
# Install packages locally
npm install

# Start services in docker compose
# Can install packages with npm link
docker-compose up

# Hack away!
```

The core is creating a `node_modules` volume in docker compose so there's a separate but equivalent folder in the container.
```yaml
    volumes:
      - .:/app/
      - /app/node_modules
      # Change this to point to a folder where you have
      # packages to use checked out
      - ~/Code:/code
```

Rebuilding (`docker-compose build web`) installs deps there, and we can write a wrapper to run the approprite make the package available.
```sh
ln -s /code/lodash node_modules/lodash

npm run watch
```
