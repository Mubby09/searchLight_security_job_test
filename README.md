 # searchLight_security_job_test 
This is an application and ticks all the boxes of the CRUD opeartions.
Creating a resource on the database,
Reading the resource,
Updating the resource and
Deleting the resource.

With the screen update functionality, the work around was mainly using the the default "button" attribute (type="submit"), such that when a form is submitted I don't prevent the default beheviour of the button. It adds the movie to the database and also refreshes the page to make the update almost instantaneous. The delete button works in almost similar fashion. When a resource is deleted on the database, the "location.reload()" property on the "window" object is called automatically and the page is updated to reflect the change.
STACK USED: React, Express, NodeJs, MongoDB. 
MaterialUI and some vanilla CSS was used for styling
