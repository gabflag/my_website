from django.template.loader import render_to_string
from django.utils.html import strip_tags
from datetime import datetime
import smtplib
import threading
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv
load_dotenv()


def send_email_hacking_attempt(request, typeErroMessage):
    def enviar():
        time.sleep(2)
        subject = '🔎 Tentantiva de Hacking no Gabdeveloper'
        from_email = os.environ.get('EMAIL_HOST_USER')
        recipient_email = os.environ.get('EMAIL_SUPPORT_FOR_MY_WEB_SITE')

        smtp_server = os.environ.get('EMAIL_HOST')
        smtp_port = os.environ.get('EMAIL_PORT')
        email_user = os.environ.get('EMAIL_HOST_USER')
        email_password = os.environ.get('EMAIL_HOST_PASSWORD')

        client_ip = get_client_ip(request)
        request_url = request.build_absolute_uri()
        request_method = request.method
        user_agent = request.META.get('HTTP_USER_AGENT')  
        referrer = request.META.get('HTTP_REFERER')
        
        if not user_agent or not referrer:
            user_agent = request.headers.get('User-Agent')
            referrer = request.headers.get('Referer')
        

        context = {
            'attempt_description': typeErroMessage,
            'client_ip': client_ip,
            'request_url': request_url,
            'request_method': request_method,
            'user_agent': user_agent,
            'referrer': referrer,
            'current_time': datetime.now(),
        }

        html_message = render_to_string('erros/hacking_attempt.html', context)
        text_message = strip_tags(html_message)

        # Cria um objeto MIMEMultipart para o email
        email = MIMEMultipart()
        email['From'] = from_email
        email['To'] = recipient_email
        email['Subject'] = subject

        # Define o corpo do email como o conteúdo do template HTML
        email.attach(MIMEText(text_message, 'html', _charset='utf-8'))


        try:
            # Utilize a classe SMTP_SSL para uma conexão segura
            with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
                server.login(email_user, email_password)
                server.sendmail(from_email, recipient_email, email.as_string())
                server.quit()
        except Exception as e:
            print("Erro ao enviar o email:", e)


    # Cria uma thread para executar o envio
    thread = threading.Thread(target=enviar)
    thread.start()


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

