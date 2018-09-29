node() {

stage('docker-test'){

checkout scm

def server = Artifactory.server 'artifactory-server-id'

def rtDocker = Artifactory.docker server: server

def getimage = rtDocker.pull('hello-world')

def buildimage = docker.build("Sagar2366/jenkins-artf-docker")

def buildInfo = rtDocker.push('docker/hello-world/2.0/', 'docker-remote/library')

server.publishBuildInfo buildInfo

}
}
