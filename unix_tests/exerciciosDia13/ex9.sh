#!/bin/bash
dir=$1
if [ -d "$dir" ]
    then
        files=`ls -l $dir | wc -l`
        echo "O $dir tem $files arquivos"
else
        echo "O argumento $dir não é um diretório"
fi