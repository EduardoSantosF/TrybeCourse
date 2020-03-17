#!bin/bash
#eu sou tryber e Vou ter muito sucesso na programação!  
data=`date +%F`
for file in *.png
do
    mv $file "$data-$file"
done