from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from .models import hkforms



def index(request):
    
    return render(request, 'index.html')


def about(request):
   
    return render(request, 'about.html')

def contact(request):
   
    if request.method == 'POST':
       
        name = request.POST.get("name", None)
        email = request.POST.get('email', None)
        ph_no = request.POST.get('ph_no', None)
        content = request.POST.get('content', None)

        if name == "" or email == "" or content == "":
            messages.info(request, 'Fill required Fields')
            return redirect('contact')
        else:
            a = hkforms(name = name, email = email, ph_no=ph_no, content=content)
            a.save()
       
            messages.info(request, 'Query Created')
            return redirect('contact')
 
    else:
        
        return render(request, 'contact.html')

