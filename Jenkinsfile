pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        RENDER_DEPLOY_URL = "https://gallery-q49o.onrender.com"
        MONGO_URI = credentials('mongo-uri')
    }

    stages {
        stage("Install Dependencies") {
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
                def buildStatus = currentBuild.result ?: 'SUCCESS'
                def slackMessageColor = (buildStatus == 'SUCCESS') ? '#36a64f' : '#ff0000'
                def slackMessageText = (buildStatus == 'SUCCESS') ?
                    "*Build succeeded:* <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>.\nDeployed to: <${env.RENDER_DEPLOY_URL}|Render Gallery>" :
                    "*Build failed:* <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>"

                slackSend(
                    color: slackMessageColor,
                    message: slackMessageText
                    // webhookUrl: credentials('slack-webhook-url') // Uncomment if needed
                )
            }
        }
    }
}
