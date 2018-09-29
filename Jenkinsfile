node() {

stage('docker-test'){

def server = Artifactory.server 'artifactory-server-id'

def rtDocker = Artifactory.docker username: 'admin', password: 'admin'

def buildInfo = rtDocker.push('http://10.136.60.7/artifactory/docker-remote/library/hello-world:latest', 'docker-remote/library/')

server.publishBuildInfo buildInfo
