#!/bin/bash

#! Add recent modified files and folders
git add .

#! Add to commit
echo -e "\nEnter your commit message"

read message

git commit -m "$message"
