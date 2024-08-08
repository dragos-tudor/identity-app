set -e
trap 'kill 0' SIGINT;
trap 'kill 0' SIGCHLD;

IDENTITY_PATH=/workspaces/identity-app
IDENTITY_API_PATH=$IDENTITY_PATH/backend-api
IDENTITY_WWW_PATH=$IDENTITY_PATH

deno task start $IDENTITY_WWW_PATH &
cd $IDENTITY_API_PATH && dotnet run --no-build --no-restore &
wait -n
