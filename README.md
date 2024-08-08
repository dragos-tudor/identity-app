## Identity app
Identity SPA application **using** and **testing** *functional* [C#]((https://github.com/dragos-tudor/backend-security))/[JS](https://github.com/dragos-tudor/frontend-rendering) libraries in *real-world* scenarios.
- backend: main focus is on cookies and OAuth2 authentications.
- frontend: main focus is on rendering, routing and centralized/redux states for jsx components in spa application.

### Identity app frameworks and libraries
- identity app libraries:
  - [ASPNET-like security libraries](https://github.com/dragos-tudor/backend-security).
  - [React-like core library](https://github.com/dragos-tudor/frontend-rendering).
  - [React-like routing library](https://github.com/dragos-tudor/frontend-routing).
  - [React-like redux library](https://github.com/dragos-tudor/frontend-states).
- identity app frameworks:
  - [ASPNET](https://github.com/dotnet/aspnetcore).
  - [Deno](https://deno.com/).

### Identity app structure
- backend api: [backend-api project](./backend-api/) manage signin/signout for cookies and OAuth2 requests.
- backend app: [backend-app project](./backend-app/) static files server over [wwwroot](./backend-app/wwwroot/) folder.
- frontend-app: [frontend-components module](./frontend-components/) contains jsx components used to build SPA UI.

### Running identity app
- generate *localhost certificates* and install *CA certificate* in browsers [see here](./OBS.md).
- create *backend-api/secrets.json* file and set OAuth2 providers credentials [see here structure](./OBS.md).
```sh
dotnet restore
dotnet build --no-restore
./start-prod.sh
```

### Remarks
- tested only with Google OAuth2 provider. Twitter and Facebook were unable to create-new/reopen-closed accounts [!?].