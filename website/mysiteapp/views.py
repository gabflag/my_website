from django.shortcuts import render
import mysiteapp.make_send_email as sendEmail
from django.views.decorators.csrf import requires_csrf_token
from django.conf import settings
import os



###########################
# APRESENTACAO EM INGLÊS
###########################
def homepage(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/inicio/01_inicio_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - HOMEPAGE'
        return attemtHacking(request, typeErroMessage)


def about(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/sobre/04_sobre_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - SOBRE'
        return attemtHacking(request, typeErroMessage)
    

def portfolio(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/portfolio/05_portfolio_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - PORTFOLIO'
        return attemtHacking(request, typeErroMessage)


def documentation(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/documentation/07_documentacao_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - DOCUMENTATIO'
        return attemtHacking(request, typeErroMessage)
    

def details_documentation(request, slug):
    if request.method == 'GET':
        arquivo_path = f'{settings.BASE_DIR}/templates/apresentacao/documentation/documentacoes_detalhadas_en/{slug}.html'
        if os.path.exists(arquivo_path):  
            with open(arquivo_path, 'r') as arquivo:
                conteudo = arquivo.read()
            formatted_slug = slug.replace('_', ' ').title()
            return render(request, 'apresentacao/documentation/07_detalhes_documentaco_en.html',{'conteudo': conteudo, 'indicativo': formatted_slug})
        else:
            typeErroMessage = 'ATTEMPT INVVALID SLUG GET ON DOCUMENTATIOS - DOCUMENTATION DETAILS'
            return attemtHacking(request, typeErroMessage)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - DOCUMENTATION DETAILS'
        return attemtHacking(request, typeErroMessage)
    

def support(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/suporte/06_suporte_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - SUPPORT'
        return attemtHacking(request, typeErroMessage)
        

def privacy(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/politica_privacidade/02_privacidade_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - PRIVACIDADE'
        return attemtHacking(request, typeErroMessage)

def terms(request):
    if request.method == 'GET':
        return render(request, 'apresentacao/termos_de_uso/03_termos_en.html', status=200)
    else:
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - PRIVACIDADE'
        return attemtHacking(request, typeErroMessage)
    


###################################
# TRATAMENTO DE ERROS E SEGURANCA
###################################
def attemtHacking(request, typeErroMessage):
    sendEmail.send_email_hacking_attempt(request, typeErroMessage)
    return render(request, 'erros/403.html', status=404)


def handling404(request, exception):
    return render(request, 'erros/404.html', status=404)


def handlingGlobal(request, user_folder=None):
    return render(request, 'erros/404.html', status=404)


@requires_csrf_token
def csrf_failure(request, reason=''):
    if request.method == 'POST':
        typeErroMessage = 'ATTEMPT TO POST IN PROHIBITED LOCATION - CSRF_FAILURE'
        return attemtHacking(request, typeErroMessage)
