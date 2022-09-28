from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "app/index.html")


# Apply Form function 
def applyLoanFrom(request):
    return render(request, "app/apply.html")












def about(request):
    return render(request, "app/about.html")


def services(request):
    return render(request, "app/services.html")


def contact(request):
    return render(request, "app/contact.html")
