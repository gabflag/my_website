#!/bin/bash

# Função para matar o processo na porta especificada
kill_process_on_port() {
  port=$1
  pid=$(lsof -t -i :$port)
  if [ -n "$pid" ]; then
    echo "Matando processo na porta $port (PID: $pid)..."
    kill -9 $pid
  else
    echo "Nenhum processo encontrado na porta $port."
  fi
}

# Remover diretórios existentes para evitar conflitos
rm -rf static  
rm -rf documentation

# Passo 1: Coletar arquivos estáticos com Django
echo "Coletando arquivos estáticos com Django..."
cd website
python manage.py collectstatic

# Passo 2: Matar o processo na porta 8000 (se estiver em execução)
kill_process_on_port 8000

# Passo 3: Iniciar o servidor Django em segundo plano
echo "Iniciando servidor Django em segundo plano..."
nohup python manage.py runserver &

# Aguardar o servidor iniciar (ajuste o tempo conforme necessário)
echo "Aguardando o servidor iniciar..."
sleep 5

# Passo 4: Baixar o site estático usando wget
echo "Baixando o site com wget..."
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --no-cache http://localhost:8000
sleep 3

# Passo 5: Mover os arquivos baixados para o diretório 'static_site'
echo "Movendo os arquivos baixados para o diretório 'static_site'..."
mv localhost:8000 static_site

# Passo 6: Copiar as imagens de apresentação para o local correto
echo "Copiando imagens de apresentação..."
cp -r static/* static_site/static/

# Passo 7: Mover o conteúdo da pasta 'static_site' para o diretório anterior
echo "Movendo conteúdo da pasta 'static_site' para o diretório anterior..."
sleep 3
mv static_site/* ../

# Passo 8: Remover a pasta vazia 'static_site'
echo "Removendo a pasta vazia 'static_site'..."
if [ -d "static_site" ]; then
  rm -rf static_site
fi

# Passo 9: Retornar para o diretório pai
echo "Voltando para o diretório pai..."
cd ..

# Passo 10: Parar o servidor Django que foi iniciado anteriormente
echo "Parando o servidor Django..."
kill_process_on_port 8000

echo "Processo concluído!"

