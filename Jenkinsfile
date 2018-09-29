node() {

stage('docker-test'){

def server = Artifactory.server 'artifactory-server-id'

def rtDocker = Artifactory.docker server: server

def getimage = rtDocker.pull('hello-world')

def login = rtDocker.login docker.artifactory -u admin -p admin

def buildIamge = rtDocker.tag('hello-world','docker-remote/hello-world:4.0')

def buildInfo = rtDocker.push('docker-remote/hello-world:4.0', '/library')

server.publishBuildInfo buildInfo

}
}
