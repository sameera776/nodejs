pipeline{
    agent any
    stages{
        stage('Build')
        {
            steps{
                script{
                    bat 'docker build -t nodejs .'
                }
            }
        }
        stage('Test')
        {
            steps{
                scripts{
                    echo "running tests"
                }
            }
        }
        stage('Deploy')
        {
            steps{
                scripts{
                    echo 'deploying application'
                }
            }
        }
    }
}