node() {

stage('docker-test'){
docker login docker.artifactory -u admin -p admin
docker pull docker.artifactory/nginx:latest
docker pull hello-world
docker tag hello-world docker.artifactory/hello-world:3.0
docker push docker.artifactory/hello-world:3.0
}
}
