pipeline {
    agent any
    tools {
    nodejs 'NodeJS 16'
    }
    
    stages {
        stage(install Dependencies) {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}