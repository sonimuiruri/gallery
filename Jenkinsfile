pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/sonimuiruri/gallery.git'
            }
        }
        stage('Initial Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    emailext (
                        subject: "Test Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                        body: "Tests failed in build ${env.BUILD_NUMBER}. Check console at ${env.BUILD_URL}",
                        to: "winfrey.muiruri@student.moringaschool.com"
                    )
                }
            }
        }
        stage('Deploy to Render') {
            steps {
                echo 'Deployment triggered automatically via GitHub push to Render'
                echo 'App URL: gallery-q49o.onrender.com'
            }
            post {
                success {
                    slackSend (
                        channel: '#winfrey_ip1',
                        message: "🎉 Great news! Build #${env.BUILD_ID} was deployed successfully. Check it out here: https://gallery-q49o.onrender.com"
                    )
                }
            }
        }
    }
}

       
