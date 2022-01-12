
# Mudrem Cloud Store
[Mudrem cloud store](https://mudremcloudstore.aremzy.repl.co/)
Mudrem is a cloud based storage service for storage of all file types  namely

- [x] Script files [^1]
- [x] media files [^2]
- [x] coding files [^3]

## Components

- Mongodb Service
- Auth Service
- Fileupload Service

### Mongodb Service
  
  This service is used to store record(s) of
  uploaded files(s) to a mongodb database and also delivers all records to the mudrem orchestrator

### Auth Service

   This service retrieves/stores login/signup of the user. On signing up it creates a space / store at the FileUpload Service with a special unique spaceId which is used through out the whole application
   
   
  ### Fileupload Service 
    
    This is the heart of the application .
 this is where the files are stored ,
 retrieved ,viewed and downloaded
    
  
