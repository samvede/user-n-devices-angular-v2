pipeline{ 
  agent none 
    stages{ 
    stage('docker-package'){ 
      agent any 
      steps{ 
            echo 'Packaging users app with docker' 
            script{ 
              docker.withRegistry('https://index.docker.io/v1/','dockerlogin') { 
                def usersImage = docker.build("samvede/user-n-devices-angular:v${env.BUILD_ID}", "./") 
                usersImage.push() 
                usersImage.push("latest") 
              } 
            } 
       } 
    } 
}
post{ 
  always{ 
    echo 'the job is complete' 
  } 
} 
}
