from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from .models import Post

# Create your views here.

def post_list(request):
    query = request.GET.get('q')
    if query:
        posts = Post.objects.filter(Q(title__icontains=query) | Q(content__icontains=query)).order_by('-created_at')
    else:
        posts = Post.objects.order_by('-created_at') # order posts by newest first
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'blog/post_detail.html', {'post': post})