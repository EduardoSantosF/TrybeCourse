#!bin/bash
#eu sou tryber
data=`date +%F`
for file in *.png
do
    mv $file "$data-$file"
done