#!/bin/bash

#? Step 1 :- Login
eas login

#? Step 2 :- Configure
eas build:configure

#? Step 3 :- Build for android platform and profile production
eas build --platform android --profile production --non-interactive --no-wait

#? Step 5 :- Build for android platform but with profile preview (apk)
eas build --platform android --profile preview --non-interactive --no-wait

#? Step 4 :- Check build list
eas build:list