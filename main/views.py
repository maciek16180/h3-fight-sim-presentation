from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "main/index.html"


class DocsView(TemplateView):
    template_name = "main/docs.html"
