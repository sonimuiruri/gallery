pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        RENDER_DEPLOY_URL = "https://gallery-q49o.onrender.com"
    }

    
    stages {
        stage("install Dependencies") {
            steps {
                sh "npm install"
            }
        }
        
        stage("Test") {
            steps {
                sh "npm test"
            }
        }
    }

    post {
        always {
            script {
                def slackMessageColor
        def slackMessageText

        if (currentBuild.result == 'SUCCESS') {
        	slackMessageColor = '#36a64f' // Green
        	slackMessageText = "Build succeeded: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>. Deployed to <${RENDER_BASE_URL}|Render Gallery>"
        } else {
        	slackMessageColor = '#ff0000' // Red
        	slackMessageText = "Build failed: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>"
        }

        slackSend(color: slackMessageColor, message: slackMessageText)
            }
        }
    }
}