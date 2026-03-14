from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')

def services(request):
    return render(request, 'main/services.html')

def projects(request):
    return render(request, 'main/projects.html')

def contacts(request):
    success = False
    if request.method == 'POST':
        name = request.POST.get('name')
        company = request.POST.get('company')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        message = request.POST.get('message')
        
        print(f"Заявка: {company} | {name} | {phone} | {email} | {message}")
        success = True
    return render(request, 'main/contacts.html', {'success': success})