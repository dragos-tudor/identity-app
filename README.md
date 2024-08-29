### Identity app
Identity SPA application *use* and *test* *functional* [C#](https://github.com/dragos-tudor/backend-security)/[JS](https://github.com/dragos-tudor/frontend-rendering) libraries in *real-world* scenarios.
- backend: main focus is on cookies and OAuth2 authentications.w
- frontend: main focus is on rendering, routing and states management using jsx components.

### Identity app libraries
- [ASPNET-like security libraries](https://github.com/dragos-tudor/backend-security).
- [React-like core library](https://github.com/dragos-tudor/frontend-rendering).
- [React-like routing library](https://github.com/dragos-tudor/frontend-routing).
- [React-like redux library](https://github.com/dragos-tudor/frontend-states).

### Identity app structure
- [backend-api project](./backend-api/) manage signin/signout cookies and OAuth2 requests.
- [backend-app project](./backend-app/) static files server over [wwwroot](./backend-app/wwwroot/) folder.
- [frontend-app module](./frontend-app/) contains index files and resources [scripts, images].
- [frontend-components module](./frontend-components/) contains jsx components used to build SPA UI.

### Identity app running steps
- generate *localhost certificates* and install *CA certificate* in browsers [see here](./OBS.md).
- create *backend-api/secrets.json* file and set OAuth2 providers credentials [see here structure](./OBS.md).
```sh
dotnet restore
dotnet build --no-restore
./start-prod.sh
```

### Remarks
- tested only with Google OAuth2 provider. Twitter and Facebook were unable to create-new/reopen-closed accounts [!?].
- [Deno](https://deno.com/) used to build frontend.

*SIMPLE ALWAYS MEANS SIMPLE*