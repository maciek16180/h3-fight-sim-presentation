from django_tables2 import SingleTableView, RequestConfig


class PagedFilteredTableView(SingleTableView):

    def __init__(self):
        super(PagedFilteredTableView, self).__init__()
        self.filter = None

    filter_class = None
    formhelper_class = None
    context_filter_name = 'filter'

    def get_queryset(self, **kwargs):
        qs = super(PagedFilteredTableView, self).get_queryset()
        self.filter = self.filter_class(self.request.GET, queryset=qs)
        self.filter.form.helper = self.formhelper_class()
        return self.filter.qs.only('name')

    def get_context_data(self, **kwargs):
        context = super(PagedFilteredTableView, self).get_context_data()
        context[self.context_filter_name] = self.filter
        return context

    # column_filter_class =