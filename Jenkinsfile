node() {

stage('docker-test'){

def server = Artifactory.server 'artifactory-server-id'

def rtDocker = Artifactory.docker server: server

def getimage = rtDocker.pull('hello-world')

def buildInfo = rtDocker.push('docker-remote/hello-world:latest', '/library')

server.publishBuildInfo buildInfo

}
}
