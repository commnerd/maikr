trigger_mode(TRIGGER_MODE_MANUAL)
docker_compose("./docker-compose.yaml")
for container in ['mongodb', 'mongo-express', 'srv', 'ui']:
    dc_resource(
        container,
        labels = ['containers']
    )

local_resource(
    'Restart Containers',
    auto_init=False,
    cmd='docker-compose restart',
    labels=['triggered']
)

if (os.path.exists(os.getenv('HOME') + '/Workspace/local_tilt/Tiltfile')):
    include(os.getenv('HOME') + '/Workspace/local_tilt/Tiltfile')