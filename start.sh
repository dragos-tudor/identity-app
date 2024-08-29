set -e
trap 'kill 0' SIGINT;
trap 'kill 0' SIGCHLD;

IDENTITY_PATH=/workspaces/identity-app
IDENTITY_API_PATH=$IDENTITY_PATH/backend-api
IDENTITY_APP_PATH=$IDENTITY_PATH/backend-app

cd $IDENTITY_API_PATH && dotnet run --no-build --no-restore &
cd $IDENTITY_APP_PATH && dotnet run --no-build --no-restore &
wait -n
