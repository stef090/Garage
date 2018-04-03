class User():
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
    """
    As suggested by the name,
    the @property decorator transforms methods of a class
    into properties of a class
    """
    @property
    def full_name(self):
        return self.first_name + ' ' + self.last_name
