from django.urls import path
from .import views

urlpatterns = [
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register/<str:usertype>", views.register, name="register"),

    path("", views.index, name="index"),
    path("about", views.about, name="about"),
    path("services", views.services, name="services"),
    path("contact", views.contact, name="contact"),
    path("applyLoan", views.applyLoanFrom, name="applyLoan"), # Apply Loan Form
    path("orderlists", views.ordersLists, name="orderlists"), # order lists
]