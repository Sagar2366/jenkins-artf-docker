node() {

stage('docker-test'){

def server = Artifactory.server 'artifactory-server-id'

def rtDocker = Artifactory.docker server: server

def getimage = rtDocker.pull('hello-world')

def buildInfo = rtDocker.push('hello-world', 'docker-remote/library')

server.publishBuildInfo buildInfo

}
}
