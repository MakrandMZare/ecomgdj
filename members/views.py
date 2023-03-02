from django.shortcuts import render, redirect
from members.models import Member

# Create your views here.
def index(request):
    return render(request, 'index.html')

def create(request):
    member = Member(firstname=request.POST['firstname'], lastname=request.POST['lastname'], email=request.POST['email'], mobile=request.POST['mobile'] )
    member.save()
    return redirect('/')

def read(request):
    members = Member.objects.all()
    context = { 'members': members}
    return render(request, 'result.html', context)