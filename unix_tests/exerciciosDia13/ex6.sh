#!/bin/bash

path=$*

for item in $path
do
    if [ -f "$item" ]
    then
        echo "$item é um arquivo"
    elif [ -d "$item" ]
    then
        echo "$item é uma pasta"
    else
        echo "$item é outro tipo de arquivo"
    fi
done
ls -l $path
  