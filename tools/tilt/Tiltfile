trigger_mode(TRIGGER_MODE_MANUAL)
docker_compose("./docker-compose.yaml")
for container in ['mongodb', 'mongo-express', 'srv', 'ui']:
    dc_resource(
        container,
        auto_init=False if container == 'mongo-express' else True,
        labels = ['containers']
    )

if (os.path.exists(os.getenv('HOME') + '/Workspace/local_tilt/Tiltfile')):
    include(os.getenv('HOME') + '/Workspace/local_tilt/Tiltfile')
