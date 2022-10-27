import imp
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages
from django.urls import reverse
from django.db import IntegrityError
from .models import User
from app.decorators import unauthenticated_user, allowed_users


@unauthenticated_user
def register(request, usertype):
    if request.method == "POST":
        first_name = request.POST["first_name"]
        last_name = request.POST["last_name"]
        username = request.POST["email"]
        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            messages.error(request, 'Password do not match',
                           extra_tags='danger')
            return render(request, "app/register.html", {
                "usertype": usertype,
            })

        # Attempt to create new farmer user
        try:
            user = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                email=username,
                password=password,
                user_type=usertype.lower()
            )
            user.save()

        except IntegrityError:
            messages.error(
                request, 'User with email already exsists', extra_tags='danger')
            return render(request, "app/register.html", {
                "usertype": usertype,
            })
        login(request, user)

        return HttpResponseRedirect(reverse("index"))

    return render(request, "app/register.html", {
        "usertype": usertype,
    })


@unauthenticated_user
def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            messages.error(
                request, 'Invalid username or password.', extra_tags='danger')
    return render(request, "app/login.html")


@login_required(login_url="login")
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


# Create your views here.

def index(request):
    return render(request, "app/index.html")

# Apply Form function
@login_required(login_url="login")
@allowed_users(allowed_rolls=["borrower"])
def applyLoanFrom(request):
    return render(request, "app/apply.html")


# Pending orders for lenders
# @login_required(login_url="login")
# @allowed_users(allowed_rolls=["lender"])
def ordersLists(request):
    return render(request, "app/orderlists.html")


def about(request):
    return render(request, "app/about.html")


def services(request):
    return render(request, "app/services.html")


def contact(request):
    return render(request, "app/contact.html")
