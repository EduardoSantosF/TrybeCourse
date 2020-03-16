path=/home/eduardo/unix_tests/ex4.sh
if [ -e $path ]
then
    echo "O caminho $path está habilitado!"
fi
if [ -w $path ]
then  
    echo "Você tem permissão para editar $path"
else
    echo "Você NÃO foi autorizado a editar $path"
fi

