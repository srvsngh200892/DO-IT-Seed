DO-IT-Seed
==========

It contains the angular seed which also has DO IT APIs which is required for this tasks.  


# Project Setup

1. cd to ```REST```

2. Run Following commands [ One time ]

  1. python bootstrap.py
  2. bin/buildout
  3. bin/django syncdb --noinput

3. To host you APIs run following command

  **bin/django runserver 9080**
    
  Now your APIs server are UP and running, you can check by accessing ```localhost:9080\projects```
  
4. cd ..
5. cd WEBAPP
6. cd app
7. To host your web app run -
    ** python -m SimpleHTTPServer 9081 **
    This will host your App locally, you can check by accessing ```localhost:9081```
