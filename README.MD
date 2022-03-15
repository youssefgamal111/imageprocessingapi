# IMAGE PROCESSING API Project

## descrption
This project contains some images which can be resized to the needed dimensions.
## REQUIREMENTS
 Download node.js and Install Typescript, Express, Jasmine and supertest for testing.

## The scripts needed to test/start/build your application
1)change from typescript to javascript
npm run build
2)server start
npm run start
or by using node after change ts  to js
node build/.
3)use unit testing
npm run test
which compiled ts to js first then run jasmine
4)to format the code
npm run lint
npm run prettier
## endpoints
The endpoint is 'api/images?imagefile=&width=&height=' and requires three query params
i)filename one of the availiable images 
ii)height	
iii)width	
