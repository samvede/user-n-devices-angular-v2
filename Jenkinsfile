pipeline{ 
  agent none 
    stages{ 
      stage('build'){ 
        steps{ 
          echo 'building users ng app' 
          dir('src/app'){ 
          sh 'npm install '
	  sh 'ng build --prod'
        } 
      } 
    } 
    stage('test'){
      steps{ 
        echo 'running unit tests on angular users app' 
        // sh ‘mvn clean test’ 
        sleep 5
      } 
    } 
    stage(‘package’){ 
      steps{ 
        echo 'copy the dist files ' 
            dir('./'){ 
            archiveArtifacts artifacts: 'dist/hello-world/*', fingerprint: true 
         } 
      } 
    } 
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
