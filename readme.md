# Meu Site Pessoal

Este é o repositório do meu site pessoal desenvolvido em **Django**. Para hospedar como uma página estática no **GitHub Pages**, utilizei um código que converte o site dinâmico em arquivos estáticos. Aqui você encontrará anotações importantes para manutenção, segurança e deploy do projeto.

---

## 🛡️ Testes de Segurança

Para garantir a segurança do projeto, é fundamental realizar testes de segurança no código, especialmente para prevenir ataques como **CSRF**.  
Ferramentas recomendadas:
- [OWASP ZAP](https://owasp.org/www-project-zap/)
- [Bandit](https://bandit.readthedocs.io/en/latest/)


## 🚀 Otimização do Site
Habilitar GZIP: Comprime os arquivos de texto para melhorar o tempo de carregamento. Ferramenta útil: checkgzipcompression
Habilitar Cache: Para otimizar o desempenho do site, configure o cache dos recursos estáticos.

## 📦 Pacotes Necessários para Deploy
Antes de começar, execute os seguintes comandos para garantir que o ambiente está atualizado e com todas as dependências instaladas:

    sudo apt update -y
    sudo apt upgrade -y
    sudo apt autoremove -y
    sudo apt install build-essential -y
    sudo apt install python3-dev -y 
    sudo apt install libpq-dev -y
    sudo apt install nginx -y
    sudo apt install certbot python3-certbot-nginx -y
    sudo apt install postgresql postgresql-contrib -y
    
### Dentro do ambiente virtual
    pip install gunicorn psycopg2-binary

## 🛠️ Instalando o PostgreSQL

sudo apt install postgresql postgresql-contrib -y
Caso queira mais detalhes:
[📺 Tutorial Básico](https://youtu.be/VLpPLaGVJhI )
[📺 Tutorial Avançado](https://youtu.be/FZaEukN_raA)

### Configurações

sudo -u postgres psql

- Criando um super usuário: CREATE ROLE usuario WITH LOGIN SUPERUSER CREATEDB CREATEROLE PASSWORD 'senha';
- Criando a base de dados: CREATE DATABASE basededados WITH OWNER usuario;
- Dando permissões: GRANT ALL PRIVILEGES ON DATABASE basededados TO usuario;
- Saindo: \q
- Reniciando: sudo systemctl restart postgresql

## 🌐 Obtendo o Site em Forma Estática
Foi criado um código para automatizar essa tarefa: 
./obtain_static_website.sh, não esqueça de dar a permissão de execução (chmod +x)


📌 Este README foi otimizado para facilitar o deploy e a manutenção do projeto. Se precisar de mais informações ou melhorias, sinta-se à vontade para contribuir! 🚀

